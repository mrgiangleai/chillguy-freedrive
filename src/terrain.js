import * as THREE from 'three';
import { TP, hLow, hDetail, mountains, vnoise, hash2 } from './terrain-noise.js';
import { ROAD } from './road.js';
import { detailTexture, foliageAtlas, photoTexture } from './textures.js';
import { withMist } from './mist.js';
import { cardPineGeometry, cardBroadleafGeometry } from './scenery.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { NEAR } from './nature.js';

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
  meadow: { a: col('#6f9a4c'), b: col('#86ad5c'), c: col('#5c8541'), snowLine: 400, trees: false, bare: true },
};
const FOREST = col('#3e5d2b');
const ROCK = col('#8a8072'), ROCK2 = col('#6b6259'), SNOW = col('#eef2f6'), GRAVEL = col('#8f887c'), FLOOR = col('#5f6c36');
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
    // texture ảnh thật: vách đá (chiếu 2 mặt ngang theo pháp tuyến, có vân nổi), sỏi đá vụn, đất
    this.texU = {
      uRock: { value: photoTexture('rock', renderer) },
      uRockN: { value: photoTexture('rock_n', renderer, { srgb: false }) },
      uGravel: { value: photoTexture('gravel', renderer) },
      uDirt: { value: photoTexture('dirt', renderer) },
    };
    this.mat.onBeforeCompile = (sh) => {
      sh.uniforms.uCover = this.uCover;
      Object.assign(sh.uniforms, this.texU);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vUpY;\nvarying vec3 vTW;\nvarying vec3 vNW;\nattribute vec2 aMix;\nvarying vec2 vMix;')
        .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvUpY = objectNormal.y;\nvNW = objectNormal;\nvMix = aMix;')
        .replace('#include <project_vertex>', '#include <project_vertex>\nvTW = transformed;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          varying float vUpY; varying vec3 vTW; varying vec3 vNW; varying vec2 vMix;
          uniform float uCover;
          uniform sampler2D uRock, uRockN, uGravel, uDirt;`)
        .replace('#include <map_fragment>', `
          float flatK = smoothstep(0.5, 0.78, vUpY);
          vec4 dTex = mix(texture2D(map, vec2(vTW.x + vTW.z, vTW.y * 1.6) / 6.0), texture2D(map, vTW.xz / 6.0), flatK);
          diffuseColor *= dTex;
          // vách dốc: ảnh đá thật (2 tỉ lệ để đỡ lặp), giữ tông màu đá của bảng màu (vColor)
          vec3 an = abs(normalize(vNW)); vec2 tw = an.xz / max(an.x + an.z, 1e-4);
          float rockK = 1.0 - smoothstep(0.5, 0.82, vUpY);
          vec2 uvX = vec2(vTW.z, vTW.y * 1.15), uvZ = vec2(vTW.x, vTW.y * 1.15);
          if (rockK > 0.002) {
            vec3 r1 = texture2D(uRock, uvX / 8.0).rgb * tw.x + texture2D(uRock, uvZ / 8.0).rgb * tw.y;
            vec3 r2 = texture2D(uRock, uvX / 31.0 + 0.37).rgb * tw.x + texture2D(uRock, uvZ / 31.0 + 0.37).rgb * tw.y;
            vec3 rk = r1 * (0.55 + 0.9 * r2);
            float rl = dot(rk, vec3(0.3, 0.59, 0.11));
            vec3 rockCol = mix(vColor.rgb * rl * 4.6, rk * 1.1, 0.12);
            diffuseColor.rgb = mix(diffuseColor.rgb, rockCol, rockK);
          }
          // sỏi đá vụn (lề đường, núi cao) và đất (đường đất trong rừng): chiếu từ trên xuống
          if (vMix.x > 0.002) diffuseColor.rgb = mix(diffuseColor.rgb, vColor.rgb * texture2D(uGravel, vTW.xz / 2.6).rgb * 1.75, vMix.x * flatK);
          if (vMix.y > 0.002) diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(uDirt, vTW.xz / 3.4).rgb * mix(vec3(1.0), vColor.rgb * 2.2, 0.35), vMix.y * flatK);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.89, 0.93), uCover * smoothstep(0.55, 0.8, vUpY));`)
        // vân nổi của đá trên vách (pha "whiteout" vào pháp tuyến thế giới rồi đổi sang hệ camera)
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          if (rockK > 0.002) {
            vec3 N = normalize(vNW);
            vec3 tx = texture2D(uRockN, uvX / 8.0).xyz * 2.0 - 1.0, tz = texture2D(uRockN, uvZ / 8.0).xyz * 2.0 - 1.0;
            tx = vec3(tx.xy * 0.9 + N.zy, abs(tx.z) * N.x);
            tz = vec3(tz.xy * 0.9 + N.xy, abs(tz.z) * N.z);
            vec3 wn = normalize(tx.zyx * tw.x + tz.xyz * tw.y);
            normal = normalize(mix(normal, normalize((viewMatrix * vec4(wn, 0.0)).xyz), rockK));
          }`);
    };
    // cây tấm: atlas lá + alphaTest; bỏ đảo pháp tuyến mặt sau để tán lá sáng đều
    this.treeMat = new THREE.MeshStandardMaterial({ map: foliageAtlas(), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.92 });
    // trong bán kính NEAR quanh camera: cây tấm thu nhỏ về 0 (đã có cây chi tiết thay thế)
    const hideNear = (sh) => {
      Object.assign(sh.uniforms, NEAR);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uNearR;\nuniform vec2 uNearC;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`);
    };
    this.treeMat.onBeforeCompile = (sh) => {
      hideNear(sh);
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>',
        THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', ''));
    };
    this.treeDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: this.treeMat.map, alphaTest: 0.45, side: THREE.DoubleSide });
    this.treeDepth.onBeforeCompile = hideNear;
    withMist(this.mat);
    withMist(this.treeMat);
    this.geos = { pine: cardPineGeometry(), broad: cardBroadleafGeometry() };
    // tảng đá: khối cầu bị nhiễu méo, đáy phẳng; tô ảnh đá chiếu 3 mặt theo toạ độ thế giới
    this.rockGeos = [0, 1, 2].map((k) => rockGeometry(k));
    this.rockMat = new THREE.MeshStandardMaterial({ roughness: 1, metalness: 0, envMapIntensity: 0.35 });
    this.rockMat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.texU);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vBW;\nvarying vec3 vBN;')
        .replace('#include <project_vertex>', `#include <project_vertex>
          mat4 rockM = modelMatrix * instanceMatrix;
          vBW = (rockM * vec4(transformed, 1.0)).xyz;
          vBN = normalize(mat3(rockM) * objectNormal);`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vBW;\nvarying vec3 vBN;\nuniform sampler2D uRock, uGravel;')
        .replace('#include <map_fragment>', `
          vec3 bw = pow(abs(normalize(vBN)), vec3(3.0)); bw /= bw.x + bw.y + bw.z;
          vec3 rt = texture2D(uRock, vBW.zy / 3.0).rgb * bw.x + texture2D(uGravel, vBW.xz / 1.6).rgb * bw.y + texture2D(uRock, vBW.xy / 3.0).rgb * bw.z;
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`);
    };
    withMist(this.rockMat);
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
    this._nd = bd; this._ny = by; this._nl = bl; this._ns = bi * ROAD.step;
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
    this._d = FAR; this._s = -1;
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
      this._d = this._nd; this._s = this._ns;
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

  // màu đỉnh địa hình + trọng số texture: this._mixG (sỏi đá vụn), this._mixD (đất)
  // s: độ dài cung của điểm đường gần nhất (-1 nếu xa đường) => biết đang ở đoạn đường đất hay không
  _color(x, z, h, ny, d, s, out) {
    const pal = PAL[TP.id];
    const n1 = vnoise(x / 150 + 2.3, z / 150 + 6.1), n2 = vnoise(x / 37 + 8.8, z / 37 + 1.2);
    out.copy(pal.a).lerp(pal.b, sstep(0.3, 0.75, n1)).lerp(pal.c, sstep(0.45, 0.9, n2) * 0.55);
    if (pal.trees) out.lerp(FOREST, sstep(0.44, 0.66, vnoise(x / 260 + 3.1, z / 260 + 8.7)) * 0.6);
    const dirtK = s >= 0 ? this.road.dirtAt(s) : 0;
    const dirtNear = dirtK * (1 - sstep(HW + 1, HW + 28, d));
    if (dirtNear > 0) out.lerp(FLOOR, dirtNear * 0.75);              // nền rừng rậm sẫm màu quanh đường đất
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
    const g = (1 - (TP.id === 'forest' ? sstep(HW + 0.2, HW + 1.1, d) : sstep(HW + 1.0, HW + 3.2, d))) * (1 - dirtK);
    out.lerp(GRAVEL, g);
    // núi: sườn cao lổn nhổn đá vụn
    const alpine = TP.id === 'mountain' ? sstep(70, 190, h) * (1 - rockT) * (1 - snow) * sstep(0.35, 0.7, n2 + 0.3 * n1) * 0.8 : 0;
    this._mixG = Math.max(g, alpine);
    this._mixD = dirtNear * sstep(0.25, 0.6, vnoise(x / 9 + 5.5, z / 9 + 2.2) * 0.7 + 0.5 * (1 - sstep(HW + 1, HW + 9, d)));
    return out;
  }

  _build(x0, z0, size) {
    const n = SEG, st = size / n, N = n + 3;              // +1 vòng ngoài để tính pháp tuyến liền mạch
    const pad = CARVE1 + 80;
    const i0 = this.iCar - 2500, i1 = this.iCar + 4000;
    const fine = this._samples(x0 - pad, z0 - pad, x0 + size + pad, z0 + size + pad, 1, i0, i1);
    const coarse = this._samples(x0 - 1700, z0 - 1700, x0 + size + 1700, z0 + size + 1700, 25, i0, i1);
    const H = new Float32Array(N * N), D = new Float32Array(N * N), SA = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        H[j * N + i] = this._height(x0 + (i - 1) * st, z0 + (j - 1) * st, fine, coarse);
        D[j * N + i] = this._d;
        SA[j * N + i] = this._s;
      }
    }

    const V = (n + 1) * (n + 1), S = 4 * (n + 1);
    const pos = new Float32Array((V + S) * 3), nor = new Float32Array((V + S) * 3);
    const clr = new Float32Array((V + S) * 3), uv = new Float32Array((V + S) * 2), mix = new Float32Array((V + S) * 2);
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
        this._color(x, z, y, ny, D[gi], SA[gi], c);
        clr.set([c.r, c.g, c.b], v * 3);
        mix[v * 2] = this._mixG; mix[v * 2 + 1] = this._mixD;
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
        mix[sv * 2] = mix[v * 2]; mix[sv * 2 + 1] = mix[v * 2 + 1];
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
    geo.setAttribute('aMix', new THREE.BufferAttribute(mix, 2));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.mat);
    mesh.receiveShadow = size <= 256;
    mesh.castShadow = size <= 64;
    const tile = new THREE.Group();
    tile.add(mesh);
    tile.userData.box = [x0, z0, x0 + size, z0 + size];
    const trees = this._trees(x0, z0, size, st, N, H, D, NY, SA, tile);
    for (const t of trees) tile.add(t);
    this.group.add(tile);
    return tile;
  }

  _bil(G, N, st, x0, z0, x, z) {
    const gx = (x - x0) / st + 1, gz = (z - z0) / st + 1;
    const i = Math.max(0, Math.min(N - 2, Math.floor(gx))), j = Math.max(0, Math.min(N - 2, Math.floor(gz)));
    const fx = gx - i, fz = gz - j;
    const a = G[j * N + i], b = G[j * N + i + 1], c = G[(j + 1) * N + i], d = G[(j + 1) * N + i + 1];
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
  }

  _nearest(G, N, st, x0, z0, x, z) {
    const i = Math.min(N - 1, Math.max(0, Math.round((x - x0) / st + 1))), j = Math.min(N - 1, Math.max(0, Math.round((z - z0) / st + 1)));
    return G[j * N + i];
  }

  _trees(x0, z0, size, st, N, H, D, NY, SA, tile) {
    const pal = PAL[TP.id];
    const keep = KEEP[size] || 0;
    if (!keep) return [];
    const n = SEG, mountain = TP.id === 'mountain';
    const pines = [], broads = [], rocks = [];
    const nyAt = (x, z) => NY[Math.min(n, Math.round((z - z0) / st)) * (n + 1) + Math.min(n, Math.round((x - x0) / st))];
    // lưới 8 m như cũ; ô có đoạn đường đất thì thêm lưới 4 m sát đường (rừng rậm hai bên đường đất)
    const near = size <= 128 ? [] : null;           // cây / bụi để thay bằng model chi tiết khi ở gần camera
    if (tile) tile.userData.near = near;
    const passes = [{ cell: 8, seed: 0 }];
    if (this.road.dirt && size <= 128) {
      let any = false;
      for (let k = 0; k < SA.length && !any; k += 7) if (SA[k] >= 0 && this.road.dirtAt(SA[k]) > 0.05) any = true;
      if (any) passes.push({ cell: 4, seed: 1 });
    }
    for (const { cell, seed } of passes) {
      const o = seed * 15485863;
      for (let cj = Math.floor(z0 / cell); cj * cell < z0 + size; cj++) {
        for (let ci = Math.floor(x0 / cell); ci * cell < x0 + size; ci++) {
          if (hash2(ci + o, cj) > keep) continue;
          const x = (ci + hash2(ci + 7919 + o, cj)) * cell, z = (cj + hash2(ci + o, cj + 7919)) * cell;
          if (x < x0 || x >= x0 + size || z < z0 || z >= z0 + size) continue;
          const d = this._bil(D, N, st, x0, z0, x, z);
          const sa = d < 60 ? this._nearest(SA, N, st, x0, z0, x, z) : -1;
          const dirtK = sa >= 0 ? this.road.dirtAt(sa) : 0;
          let dens = pal.trees ? sstep(0.44, 0.66, vnoise(x / 260 + 3.1, z / 260 + 8.7)) * 0.92 + 0.03 : pal.bare ? 0 : 0.012;
          if (seed) dens = dirtK * 0.85 * (1 - sstep(HW + 20, HW + 45, d));      // lưới dày chỉ sát đường đất
          else dens = Math.max(dens, dirtK * 0.9 * (1 - sstep(HW + 25, HW + 60, d)));
          const h = this._bil(H, N, st, x0, z0, x, z);
          const ny = nyAt(x, z);
          if (hash2(ci + 104729 + o, cj + 31) > dens) continue;
          if (d < HW + 7.5 - 5.0 * dirtK + (seed ? hash2(ci, cj + 3) * 1.5 : 0)) continue;
          if (h > pal.snowLine - 20) continue;
          if (ny < (mountain ? 0.66 : 0.8)) continue;                    // sườn quá dốc (núi: thông bám được sườn vừa)
          const sc = (0.75 + hash2(ci + 3 + o, cj + 5) * 0.7) * (size >= 256 ? 1.3 : 1) * (dirtK > 0.3 ? 1.15 : 1);
          const pine = pal.trees ? hash2(ci + 11 + o, cj + 13) < (mountain ? 0.9 : 0.58 + sstep(60, 180, h) * 0.35) : false;
          const rec = [x, h - 0.2, z, sc, hash2(ci + 17 + o, cj + 19) * 6.283, hash2(ci + 23 + o, cj + 29)];
          (pine ? pines : broads).push(rec);
          if (near) near.push([pine ? 'pine' : 'broad', ...rec]);
        }
      }
    }
    // cụm đá gồ ghề (map núi: sườn dốc vừa và chân vách sát đường; đồi thông: vài cụm bên đường đất)
    if (size <= 256) {
      const cell = 22;
      for (let cj = Math.floor(z0 / cell); cj * cell < z0 + size; cj++) {
        for (let ci = Math.floor(x0 / cell); ci * cell < x0 + size; ci++) {
          if (hash2(ci + 911, cj + 577) > keep) continue;
          const cx = (ci + hash2(ci + 31, cj + 977)) * cell, cz = (cj + hash2(ci + 977, cj + 31)) * cell;
          if (cx < x0 || cx >= x0 + size || cz < z0 || cz >= z0 + size) continue;
          const d = this._bil(D, N, st, x0, z0, cx, cz);
          if (d < HW + 3) continue;
          const ny = nyAt(cx, cz);
          const sa = d < 60 ? this._nearest(SA, N, st, x0, z0, cx, cz) : -1;
          const dirtK = sa >= 0 ? this.road.dirtAt(sa) : 0;
          const cliff = mountain && ny <= 0.5;                       // vách dốc: đá to nhô ra khỏi vách => gồ ghề
          const p = mountain ? (d < HW + 14 ? 0.45 : cliff ? 0.32 : ny < 0.93 ? 0.3 : 0.06) : dirtK * 0.2;
          if (hash2(ci + 3331, cj + 7177) > p) continue;
          const big = (mountain ? (cliff ? 3 : 1.6) : 0.8) + Math.pow(hash2(ci + 41, cj + 43), 1.6) * (mountain ? (cliff ? 7 : 5.5) : 1.6);
          const nr = 3 + Math.floor(hash2(ci + 7, cj + 9) * 5);
          for (let k = 0; k < nr; k++) {
            const a = hash2(ci * 7 + k, cj + 101) * 6.283, r = (k === 0 ? 0 : 0.6 + hash2(ci + k * 13, cj * 3 + 7) * 1.4) * big;
            const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
            if (x < x0 - 4 || x >= x0 + size + 4 || z < z0 - 4 || z >= z0 + size + 4) continue;
            if (this._bil(D, N, st, x0, z0, x, z) < HW + 2) continue;
            const sc = big * (k === 0 ? 1 : 0.35 + hash2(ci + k, cj + k * 5) * 0.55);
            const h = this._bil(H, N, st, x0, z0, x, z);
            rocks.push([x, h - sc * (cliff ? 0.35 : 0.22), z, sc, hash2(ci + k * 3, cj + 53) * 6.283, hash2(ci + 59 + k, cj + 61)]);
          }
        }
      }
    }
    // bụi cây / dương xỉ (chỉ hiện khi ở gần, bằng model chi tiết): đồi thông + núi
    if (near && size <= 64 && pal.trees) {
      const cell = 3.5;
      for (let cj = Math.floor(z0 / cell); cj * cell < z0 + size; cj++) {
        for (let ci = Math.floor(x0 / cell); ci * cell < x0 + size; ci++) {
          const x = (ci + hash2(ci + 5153, cj)) * cell, z = (cj + hash2(ci, cj + 5153)) * cell;
          if (x < x0 || x >= x0 + size || z < z0 || z >= z0 + size) continue;
          const d = this._bil(D, N, st, x0, z0, x, z);
          if (d < HW + 1.6) continue;
          const sa = d < 60 ? this._nearest(SA, N, st, x0, z0, x, z) : -1;
          const dirtK = sa >= 0 ? this.road.dirtAt(sa) : 0;
          const dens = (mountain ? 0.07 : 0.1 + 0.18 * sstep(0.44, 0.66, vnoise(x / 260 + 3.1, z / 260 + 8.7))) + dirtK * 0.35;
          if (hash2(ci + 6007, cj + 6011) > dens) continue;
          if (nyAt(x, z) < 0.75) continue;
          const h = this._bil(H, N, st, x0, z0, x, z);
          near.push(['plant', x, h - 0.05, z, 0.6 + hash2(ci + 61, cj + 67) * 0.7, hash2(ci + 71, cj + 73) * 6.283, hash2(ci + 79, cj + 83)]);
        }
      }
    }
    const out = [];
    const mk = (list, geo, mat, rock) => {
      if (!list.length) return;
      const m = new THREE.InstancedMesh(geo, mat, list.length);
      const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0), cl = new THREE.Color(), e = new THREE.Euler();
      list.forEach(([x, y, z, s, yaw, cv], i) => {
        if (rock) q.setFromEuler(e.set((cv - 0.5) * 0.5, yaw, (cv - 0.5) * 0.4));
        else q.setFromAxisAngle(up, yaw);
        m4.compose(ps.set(x, y, z), q, sc.set(s, s * (rock ? 0.75 + cv * 0.45 : 0.9 + cv * 0.3), s));
        m.setMatrixAt(i, m4);
        if (rock) cl.copy(cv > 0.5 ? ROCK : ROCK2).multiplyScalar(1.15 + cv * 0.3);
        else cl.setHSL(0.2 + (cv - 0.5) * 0.12, 0.45, 0.62 + cv * 0.2).lerp(this._white, 0.55);
        m.setColorAt(i, cl);
      });
      m.castShadow = size <= 64;
      m.receiveShadow = rock && size <= 128;
      if (!rock) m.customDepthMaterial = this.treeDepth;
      m.layers.set(3);                 // không vẽ trong ảnh phản chiếu vũng nước
      out.push(m);
    };
    mk(pines, this.geos.pine, this.treeMat);
    mk(broads, this.geos.broad, this.treeMat);
    if (rocks.length) {
      const per = this.rockGeos.map(() => []);
      rocks.forEach((r) => per[Math.floor(r[5] * (per.length - 0.001))].push(r));
      per.forEach((list, k) => mk(list, this.rockGeos[k], this.rockMat, true));
    }
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

// tảng đá: cầu 3 cấp chia nhỏ, mỗi đỉnh đẩy ra/vào theo nhiễu (biến thể k), cắt phẳng đáy
function rockGeometry(k) {
  let g = new THREE.IcosahedronGeometry(1, 3);
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g);                              // gộp đỉnh trùng => pháp tuyến mượt
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = vnoise(v.x * 1.7 + k * 13.1, v.z * 1.7 + v.y * 1.3 + k * 7.7) * 0.45 + vnoise(v.x * 4.1 + k, v.y * 4.3 - v.z * 2.1) * 0.18;
    v.multiplyScalar(0.72 + n);
    v.y = Math.max(v.y, -0.25);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
