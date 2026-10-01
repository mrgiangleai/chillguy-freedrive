import * as THREE from 'three';
import { TP, hLow, hDetail, mountains, vnoise, hash2 } from './terrain-noise.js';
import { ROAD } from './road.js';
import { detailTexture, foliageAtlas } from './textures.js';
import { withMist } from './mist.js';
import { cardPineGeometry, cardBroadleafGeometry } from './scenery.js';

// Địa hình đồi núi vô tận kiểu slowroads:
// - Cây tứ phân (quadtree) quanh camera: ô gần 64 m (lưới 2 m), càng xa ô càng to (tới 8 km) => xa ~4 km.
// - Mỗi ô là lưới 32x32 + "váy" (skirt) ở mép để che khe hở giữa các mức chi tiết.
// - Đường được xẻ vào địa hình: sát đường bằng phẳng theo độ cao mặt đường, rồi thoải dần về địa hình tự nhiên.
// - Núi cao chỉ mọc ở xa đường (> 500 m), có đá ở sườn dốc và tuyết trên đỉnh.
// - Cây mọc thành rừng theo mảng nhiễu; ô xa dùng cây ít đa giác.
const SEG = 32, MIN = 64, ROOT = 8192;
const HW = ROAD.halfWidth;
const CARVE0 = HW + 1.2, CARVE1 = HW + 16;
const FAR = 1e6;
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const col = (hex) => new THREE.Color(hex);   // hex sRGB -> màu tuyến tính
const PAL = {
  forest: { a: col('#7fa443'), b: col('#a9b85a'), c: col('#5c8036'), snowLine: 215, trees: true },
  reed: { a: col('#ad9b5c'), b: col('#c5b37b'), c: col('#8c8a50'), snowLine: 240, trees: false },
  mountain: { a: col('#789a45'), b: col('#9eaa5a'), c: col('#557236'), snowLine: 300, trees: true },
};
const FOREST = col('#3e5d2b');
const ROCK = col('#8a8072'), ROCK2 = col('#6b6259'), SNOW = col('#eef2f6'), GRAVEL = col('#8f887c');
const KEEP = { 64: 1, 128: 0.5, 256: 0.22, 512: 0.08 };   // tỉ lệ cây giữ lại theo cỡ ô (tập con lồng nhau => ít "nhảy" cây)

export class Terrain {
  constructor(scene, road, renderer) {
    this.road = road;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.tiles = new Map();
    this.queue = [];
    this.queued = new Set();
    this.iCar = 0;
    this.uCover = { value: 0 };
    this.mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: detailTexture(renderer), roughness: 0.96, metalness: 0, envMapIntensity: 0.8 });
    this.mat.onBeforeCompile = (sh) => {
      sh.uniforms.uCover = this.uCover;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vUpY;\nvarying vec3 vTW;')
        .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvUpY = objectNormal.y;')
        .replace('#include <project_vertex>', '#include <project_vertex>\nvTW = transformed;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vUpY;\nvarying vec3 vTW;\nuniform float uCover;')
        // chi tiết: mặt phẳng chiếu từ trên xuống; vách dốc chiếu ngang (vân đá dọc thay vì bị kéo dãn)
        .replace('#include <map_fragment>', `
          float flatK = smoothstep(0.5, 0.78, vUpY);
          vec4 dTex = mix(texture2D(map, vec2(vTW.x + vTW.z, vTW.y * 1.6) / 6.0), texture2D(map, vTW.xz / 6.0), flatK);
          diffuseColor *= dTex;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.89, 0.93), uCover * smoothstep(0.55, 0.8, vUpY));`);
    };
    // cây tấm: atlas lá + alphaTest; bỏ đảo pháp tuyến mặt sau để tán lá sáng đều
    this.treeMat = new THREE.MeshStandardMaterial({ map: foliageAtlas(), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.92 });
    this.treeMat.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>',
        THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', ''));
    };
    withMist(this.mat);
    withMist(this.treeMat);
    this.geos = { pine: cardPineGeometry(), broad: cardBroadleafGeometry() };
    this._nd = FAR; this._ny = 0; this._nl = 0; this._d = FAR;
    this._rc = new THREE.Color();
    this._white = new THREE.Color(1, 1, 1);
  }

  setCar(s) { this.iCar = Math.floor(s / ROAD.step); }

  // chỉ số các điểm đường (bước `stride`) nằm trong hộp [x0,x1]x[z0,z1]
  _samples(x0, z0, x1, z1, stride, i0, i1) {
    const pts = this.road.pts, out = [];
    const a = Math.max(0, i0), b = Math.min(pts.length - 1, i1);
    for (let i = a - (a % stride); i <= b; i += stride) {
      if (i < a) continue;
      const p = pts[i];
      if (p.x >= x0 && p.x <= x1 && p.z >= z0 && p.z <= z1) out.push(i);
    }
    return out;
  }

  // khoảng cách tới đường gần nhất (chiếu lên đoạn thẳng) + độ cao đường tại đó -> this._nd, this._ny
  _nearFine(x, z, list) {
    const pts = this.road.pts;
    let best = Infinity, bi = -1;
    for (let k = 0; k < list.length; k++) {
      const p = pts[list[k]];
      const dx = x - p.x, dz = z - p.z, d2 = dx * dx + dz * dz;
      if (d2 < best) { best = d2; bi = list[k]; }
    }
    if (bi < 0) return false;
    let bd = Infinity, by = pts[bi].y, bl = 0;
    for (let j = bi - 1; j <= bi; j++) {
      if (j < 0 || j + 1 >= pts.length) continue;
      const a = pts[j], b = pts[j + 1];
      const abx = b.x - a.x, abz = b.z - a.z, len2 = abx * abx + abz * abz;
      const t = Math.max(0, Math.min(1, ((x - a.x) * abx + (z - a.z) * abz) / len2));
      const ex = x - a.x - abx * t, ez = z - a.z - abz * t;
      const d = Math.hypot(ex, ez);
      if (d < bd) { bd = d; by = a.y + (b.y - a.y) * t; bl = (ex * -abz + ez * abx) / Math.sqrt(len2); }
    }
    this._nd = bd; this._ny = by; this._nl = bl;
    return true;
  }

  _height(x, z, fine, coarse) {
    const pts = this.road.pts;
    const side = TP.side;
    let dm2 = Infinity, sw = 0, swl = 0;
    for (let k = 0; k < coarse.length; k++) {
      const i = coarse[k], p = pts[i];
      const dx = x - p.x, dz = z - p.z, d2 = dx * dx + dz * dz;
      if (d2 < dm2) dm2 = d2;
      if (side && i + 1 < pts.length) {
        // khoảng cách ngang có dấu (+ = bên phải), nội suy Shepard cho mượt ở khúc cua
        const q = pts[i + 1], tx = q.x - p.x, tz = q.z - p.z, tl = Math.hypot(tx, tz) || 1;
        const lat = (dx * -tz + dz * tx) / tl;
        const wgt = 1 / (d2 * d2 + 1e4);
        sw += wgt; swl += wgt * lat;
      }
    }
    const dm = Math.sqrt(dm2);
    let h = hLow(x, z) + hDetail(x, z);
    this._d = FAR;
    const near = dm - 70 < CARVE1 && this._nearFine(x, z, fine);
    if (side) {
      // đường núi: bên trái (lat < 0) là sườn núi dựng đứng, bên phải đổ xuống thung lũng
      let lat = sw > 0 ? swl / sw : 0;
      if (near) lat = this._nl + (lat - this._nl) * sstep(25, 60, this._nd);
      const u = -lat;
      const rough = 0.75 + 0.5 * vnoise(x / 220 + 4.4, z / 220 + 9.9);
      if (u > 0) h += (360 * (1 - Math.exp(-u / 210)) + 0.2 * u) * rough;
      else h -= 250 * (1 - Math.exp(u / 170));
      h += hDetail(x * 1.7, z * 1.7) * 0.8;
      if (Math.abs(u) > 650) h += mountains(x, z) * sstep(650, 1500, Math.abs(u));
    } else if (dm > 500) h += mountains(x, z) * sstep(500, 1600, dm);
    if (near) {
      this._d = this._nd;
      const t = sstep(CARVE0, CARVE1, this._nd);
      const ry = this._ny - 0.02;
      h = ry + (h - ry) * t;
    }
    return h;
  }

  // độ cao mặt đất tại 1 điểm bất kỳ (dùng cho camera không chui xuống đất)
  heightAt(x, z) {
    const r = CARVE1 + 80;
    const fine = this._samples(x - r, z - r, x + r, z + r, 1, this.iCar - 300, this.iCar + 300);
    const coarse = this._samples(x - 1700, z - 1700, x + 1700, z + 1700, 25, this.iCar - 2500, this.iCar + 4000);
    return this._height(x, z, fine, coarse);
  }

  _color(x, z, h, ny, d, out) {
    const pal = PAL[TP.id];
    const n1 = vnoise(x / 150 + 2.3, z / 150 + 6.1), n2 = vnoise(x / 37 + 8.8, z / 37 + 1.2);
    out.copy(pal.a).lerp(pal.b, sstep(0.3, 0.75, n1)).lerp(pal.c, sstep(0.45, 0.9, n2) * 0.55);
    if (pal.trees) out.lerp(FOREST, sstep(0.44, 0.66, vnoise(x / 260 + 3.1, z / 260 + 8.7)) * 0.6);
    const slope = 1 - ny;
    out.lerp(ROCK2, sstep(110, 220, h) * 0.45);                       // núi cao: ngả màu đá
    const rockT = sstep(0.22, 0.4, slope);
    if (rockT > 0) {
      // vách đá: vân tầng nằm ngang + loang lổ để không trơn như nhựa
      const strata = 0.72 + 0.4 * vnoise((x + z) / 9 + 1.3, h / 2.6) + 0.18 * (n2 - 0.5);
      this._rc.copy(n2 > 0.5 ? ROCK : ROCK2).multiplyScalar(strata);
      out.lerp(this._rc, rockT);
    }
    const snow = sstep(pal.snowLine + (n1 - 0.5) * 60, pal.snowLine + 50, h) * (1 - sstep(0.5, 0.75, slope));
    out.lerp(SNOW, snow);
    out.lerp(GRAVEL, 1 - (TP.id === 'forest' ? sstep(HW + 0.2, HW + 1.1, d) : sstep(HW + 1.0, HW + 3.2, d)));
    return out;
  }

  _build(x0, z0, size) {
    const n = SEG, st = size / n, N = n + 3;              // +1 vòng ngoài để tính pháp tuyến liền mạch
    const pad = CARVE1 + 80;
    const i0 = this.iCar - 2500, i1 = this.iCar + 4000;
    const fine = this._samples(x0 - pad, z0 - pad, x0 + size + pad, z0 + size + pad, 1, i0, i1);
    const coarse = this._samples(x0 - 1700, z0 - 1700, x0 + size + 1700, z0 + size + 1700, 25, i0, i1);
    const H = new Float32Array(N * N), D = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        H[j * N + i] = this._height(x0 + (i - 1) * st, z0 + (j - 1) * st, fine, coarse);
        D[j * N + i] = this._d;
      }
    }

    const V = (n + 1) * (n + 1), S = 4 * (n + 1);
    const pos = new Float32Array((V + S) * 3), nor = new Float32Array((V + S) * 3);
    const clr = new Float32Array((V + S) * 3), uv = new Float32Array((V + S) * 2);
    const c = new THREE.Color();
    const NY = new Float32Array(V);
    for (let j = 0; j <= n; j++) {
      for (let i = 0; i <= n; i++) {
        const gi = (j + 1) * N + (i + 1), v = j * (n + 1) + i;
        const x = x0 + i * st, z = z0 + j * st, y = H[gi];
        let nx = H[gi - 1] - H[gi + 1], ny = 2 * st, nz = H[gi - N] - H[gi + N];
        const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
        NY[v] = ny;
        pos.set([x, y, z], v * 3);
        nor.set([nx, ny, nz], v * 3);
        this._color(x, z, y, ny, D[gi], c);
        clr.set([c.r, c.g, c.b], v * 3);
        uv.set([x / 6, z / 6], v * 2);
      }
    }
    const idx = [];
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const a = j * (n + 1) + i, b = a + 1, cc = a + n + 1, d = cc + 1;
        idx.push(a, cc, b, b, cc, d);
      }
    }
    // váy che khe: viền ô kéo thẳng xuống
    const drop = st * 1.5 + 1;
    const border = [
      Array.from({ length: n + 1 }, (_, i) => i),                         // z = z0
      Array.from({ length: n + 1 }, (_, i) => n * (n + 1) + i),           // z = z0 + size
      Array.from({ length: n + 1 }, (_, j) => j * (n + 1)),               // x = x0
      Array.from({ length: n + 1 }, (_, j) => j * (n + 1) + n),           // x = x0 + size
    ];
    let sv = V;
    for (const edge of border) {
      const start = sv;
      for (const v of edge) {
        pos.set([pos[v * 3], pos[v * 3 + 1] - drop, pos[v * 3 + 2]], sv * 3);
        nor.set([nor[v * 3], nor[v * 3 + 1], nor[v * 3 + 2]], sv * 3);
        clr.set([clr[v * 3], clr[v * 3 + 1], clr[v * 3 + 2]], sv * 3);
        uv.set([uv[v * 2], uv[v * 2 + 1]], sv * 2);
        sv++;
      }
      for (let k = 0; k < n; k++) {
        const a = edge[k], b = edge[k + 1], a2 = start + k, b2 = start + k + 1;
        idx.push(a, a2, b, b, a2, b2, a, b, a2, b, b2, a2);            // 2 mặt
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(clr, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.mat);
    mesh.receiveShadow = size <= 256;
    mesh.castShadow = size <= 64;
    const tile = new THREE.Group();
    tile.add(mesh);
    const trees = this._trees(x0, z0, size, st, N, H, D, NY);
    for (const t of trees) tile.add(t);
    this.group.add(tile);
    return tile;
  }

  _bil(G, N, st, x0, z0, x, z) {
    const gx = (x - x0) / st + 1, gz = (z - z0) / st + 1;
    const i = Math.min(N - 2, Math.floor(gx)), j = Math.min(N - 2, Math.floor(gz));
    const fx = gx - i, fz = gz - j;
    const a = G[j * N + i], b = G[j * N + i + 1], c = G[(j + 1) * N + i], d = G[(j + 1) * N + i + 1];
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
  }

  _trees(x0, z0, size, st, N, H, D, NY) {
    const pal = PAL[TP.id];
    const keep = KEEP[size] || 0;
    if (!keep) return [];
    const cell = 8, n = SEG;
    const pines = [], broads = [];
    for (let cj = Math.floor(z0 / cell); cj * cell < z0 + size; cj++) {
      for (let ci = Math.floor(x0 / cell); ci * cell < x0 + size; ci++) {
        if (hash2(ci, cj) > keep) continue;
        const x = (ci + hash2(ci + 7919, cj)) * cell, z = (cj + hash2(ci, cj + 7919)) * cell;
        if (x < x0 || x >= x0 + size || z < z0 || z >= z0 + size) continue;
        const dens = pal.trees ? sstep(0.44, 0.66, vnoise(x / 260 + 3.1, z / 260 + 8.7)) * 0.92 + 0.03 : 0.012;
        if (hash2(ci + 104729, cj + 31) > dens) continue;
        if (this._bil(D, N, st, x0, z0, x, z) < HW + 7.5) continue;
        const h = this._bil(H, N, st, x0, z0, x, z);
        if (h > pal.snowLine - 20) continue;
        const vi = Math.min(n, Math.round((z - z0) / st)) * (n + 1) + Math.min(n, Math.round((x - x0) / st));
        if (NY[vi] < 0.8) continue;                                   // sườn quá dốc
        const sc = (0.75 + hash2(ci + 3, cj + 5) * 0.7) * (size >= 256 ? 1.3 : 1);
        const pine = pal.trees ? hash2(ci + 11, cj + 13) < 0.58 + sstep(60, 180, h) * 0.35 : false;
        (pine ? pines : broads).push([x, h - 0.2, z, sc, hash2(ci + 17, cj + 19) * 6.283, hash2(ci + 23, cj + 29)]);
      }
    }
    const out = [];
    const mk = (list, geo) => {
      if (!list.length) return;
      const m = new THREE.InstancedMesh(geo, this.treeMat, list.length);
      const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0), cl = new THREE.Color();
      list.forEach(([x, y, z, s, yaw, cv], i) => {
        q.setFromAxisAngle(up, yaw);
        mat.compose(ps.set(x, y, z), q, sc.set(s, s * (0.9 + cv * 0.3), s));
        m.setMatrixAt(i, mat);
        cl.setHSL(0.2 + (cv - 0.5) * 0.12, 0.45, 0.62 + cv * 0.2).lerp(this._white, 0.55);
        m.setColorAt(i, cl);
      });
      m.castShadow = size <= 64;
      m.layers.set(3);                 // không vẽ trong ảnh phản chiếu vũng nước
      out.push(m);
    };
    mk(pines, this.geos.pine);
    mk(broads, this.geos.broad);
    return out;
  }

  _dispose(tile) {
    this.group.remove(tile);
    tile.traverse((o) => {
      if (o.isInstancedMesh) o.dispose();
      else if (o.isMesh) o.geometry.dispose();
    });
  }

  reset() {
    for (const t of this.tiles.values()) this._dispose(t);
    this.tiles.clear();
    this.queue.length = 0;
    this.queued.clear();
  }

  // cam: vị trí camera. budgetMs: thời gian tối đa dành cho việc dựng ô mới trong 1 khung hình
  update(cam, budgetMs = 6) {
    const want = new Map();
    const rx = Math.round(cam.x / 1024) * 1024 - ROOT / 2, rz = Math.round(cam.z / 1024) * 1024 - ROOT / 2;
    const visit = (x0, z0, size) => {
      const cx = Math.min(Math.max(cam.x, x0), x0 + size), cz = Math.min(Math.max(cam.z, z0), z0 + size);
      const dist = Math.hypot(cam.x - cx, cam.z - cz);
      if (size > MIN && dist < size) {
        const h = size / 2;
        visit(x0, z0, h); visit(x0 + h, z0, h); visit(x0, z0 + h, h); visit(x0 + h, z0 + h, h);
      } else want.set(size + '|' + x0 + '|' + z0, [x0, z0, size, dist]);
    };
    visit(rx, rz, ROOT);
    for (const [k, v] of want) {
      if (!this.tiles.has(k) && !this.queued.has(k)) { this.queue.push([k, ...v]); this.queued.add(k); }
    }
    if (this.queue.length) {
      this.queue.sort((a, b) => (a[3] - b[3]) || (a[4] - b[4]));
      const t0 = performance.now();
      while (this.queue.length && performance.now() - t0 < budgetMs) {
        const [k, x0, z0, size] = this.queue.shift();
        this.queued.delete(k);
        if (!want.has(k) || this.tiles.has(k)) continue;
        this.tiles.set(k, this._build(x0, z0, size));
      }
    }
    // chỉ gỡ ô cũ khi các ô thay thế đã dựng xong (tránh lủng lỗ)
    if (!this.queue.length) {
      for (const [k, t] of this.tiles) if (!want.has(k)) { this._dispose(t); this.tiles.delete(k); }
    }
  }

  prime(cam) { this.update(cam, 1e9); }

  apply(st) {
    this.uCover.value = st.cover;
    this.mat.color.setScalar((1 - 0.2 * st.wet) * (1 - 0.3 * st.dark));
    const e = 0.2 * st.cover * st.dayF;
    this.treeMat.emissive.setRGB(e, e * 1.02, e * 1.05);
  }
}
