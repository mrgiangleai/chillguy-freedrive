// Map New York — nhà thật theo OpenStreetMap (ODbL): footprint + chiều cao (`height` / `building:levels`), tạo bằng
// `node scripts/fetch-nyc.mjs` => `docs/assets/nyc-buildings.json` (tải khi vào map). Mỗi nhà: [cao, kiểu mặt tiền, s gần nhất, [x, z, …]]
// kiểu: 0 kính, 1 đá, 2 kính tối, 3 kính gương (phản chiếu của Times Square), 4 gạch. Thay hoàn toàn nhà map Phố; vùng Times Square do
// `timesSquare.js` dựng. Chia cụm 300 m theo s để camera bỏ qua cụm ngoài khung nhìn; obb cho camera không xuyên nhà.
import * as THREE from 'three';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';
import { facadeTex } from './timesSquare.js';
import { NYC } from './nyc.js';
import { CITY } from './road.js';
import * as empire from './landmarks/empire.js';
import * as chrysler from './landmarks/chrysler.js';
import * as metlife from './landmarks/metlife.js';
import * as helmsley from './landmarks/helmsley.js';
import * as grandcentral from './landmarks/grandcentral.js';
// tòa nổi tiếng: [module, kích thước X (đông–tây), Z (bắc–nam)]
const LANDMARKS = { empire: [empire, 129, 57], chrysler: [chrysler, 61, 58], metlife: [metlife, 90, 50], helmsley: [helmsley, 90, 60], grandcentral: [grandcentral, 90, 120] };

export class NycBuildings {
  constructor(scene, ts, road) {
    this.ts = ts; this.road = road;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.obb = [];
    const [map, em] = facadeTex(4);
    this.brick = withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.85 }));
    this.roof = withMist(new THREE.MeshStandardMaterial({ color: 0x4a4c4f, roughness: 0.9 }));
    const [sm, se] = shopTex();
    this.shop = withMist(new THREE.MeshStandardMaterial({ map: sm, emissiveMap: se, emissive: 0xffffff, emissiveIntensity: 0.15, roughness: 0.35, metalness: 0.1 }));
    this.awn = withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide }));
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.brick.emissiveIntensity = 1.2 * k; this.shop.emissiveIntensity = 0.15 + 1.3 * k; }

  async _load() {
    this.state = 'loading';
    try {
      const r = await fetch('assets/nyc-buildings.json');
      const D = await r.json();
      this._landmarks(D.lm || {});
      this._build(D.b);
      this.state = 'ready';
      if (this.onReady) this.onReady();
    } catch (e) { console.warn('nyc-buildings', e); this.state = 'idle'; }
  }

  // đặt model tòa nổi tiếng (vertex colors). Empire State, Chrysler: toạ độ thật (dữ liệu `lm`); MetLife, Helmsley: theo cầu cạn
  // (Helmsley: cầu cạn chạy xuyên cổng phía đông — cổng ở x = +9 của model; MetLife: bên trái cầu cạn ngay trước Helmsley)
  _landmarks(lm) {
    this.lmRects = [];
    const road = this.road.street, L = NYC.length, P = {}, D = NYC.data, HW = CITY.hw;
    const thG = D.heading[Math.round(4100 / D.step)];                // trục lưới phố (Park Ave hướng bắc)
    const mat = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15 }));
    // khung bao thật của model (model có thể to hơn kích thước danh nghĩa tới 8 %): nửa rộng theo X / Z quanh gốc
    const geos = {}, geo = (name) => {
      if (!geos[name]) { const g = LANDMARKS[name][0].build(THREE).geometry; g.computeBoundingBox(); const b = g.boundingBox;
        geos[name] = { g, hx: Math.max(-b.min.x, b.max.x), hz: Math.max(-b.min.z, b.max.z) }; }
      return geos[name];
    };
    const place = (name, x, z, yaw, sz = 1, sx = 1) => {
      const { g, hx: GX, hz: GZ } = geo(name), X = 2 * GX * sx, Z = 2 * GZ * sz;
      const m = new THREE.Mesh(g, mat); m.position.set(x, hLow(x, z) - 0.3, z); m.rotation.y = yaw; m.scale.set(sx, 1, sz); m.castShadow = m.receiveShadow = true;
      this.group.add(m);
      const c = Math.cos(yaw), s = Math.sin(yaw), hx = X / 2 + 4, hz = Z / 2 + 4;
      this.lmRects.push((px, pz) => { const ex = px - x, ez = pz - z; return Math.abs(ex * c - ez * s) < hx && Math.abs(ex * s + ez * c) < hz; });
      this.obb.push(x, z, c, s, X / 2, Z / 2, hLow(x, z) + 60);
    };
    for (const name of ['empire', 'chrysler']) if (lm[name]) place(name, lm[name][0], lm[name][1], thG);
    const pas = D.passages[0];
    if (pas) {
      // Helmsley: cầu cạn chạy xuyên cổng đông (x ∈ [2, 16] của model). Đoạn qua tòa nhà thật lượn ~60° => đặt ở đoạn thẳng ngay trước
      // ngã tư 46 St, đế thu ngắn theo trục phố (sz) cho vừa; dò tâm / độ thu sao cho 4 làn xe (±7.2 m) nằm trọn trong lòng cổng.
      const j46 = D.junctions.find((j) => j.s > pas.s1 - 5)?.s ?? pas.s1 + 15, endS = j46 - CITY.side - CITY.sideWalk - 1;
      const PA = {}, PB = {}, PC = {};
      helm: for (const sz of [1, 0.85, 0.7, 0.6, 0.5, 0.42]) {
        const half = geo('helmsley').hz * sz;
        for (let c = endS - half; c > pas.s0; c -= 2) {
          road.at(L + c - half, PA); road.at(L + c + half, PB); road.at(L + c, PC);
          const th = Math.atan2(-(PB.x - PA.x), -(PB.z - PA.z)), cs = Math.cos(th), sn = Math.sin(th);   // hướng dây cung qua đế
          const SX = 1.15, x = PC.x - cs * 9 * SX, z = PC.z + sn * 9 * SX;                                // tim đường ở tâm cổng đông (x = +9, nới ngang ×1.15)
          let ok = true;
          for (let t = c - half - 4; t <= c + half + 4 && ok; t += 2) {
            road.at(L + t, PA);
            for (const u of [-6.4, 6.4]) {                                      // thân xe ở làn ngoài cùng (5.4 ± 0.95)
              const ex = PA.x + Math.cos(PA.th) * u - x, ez = PA.z - Math.sin(PA.th) * u - z, lx = ex * cs - ez * sn, lz = ex * sn + ez * cs;
              if (Math.abs(lz) < half + 1 && (lx < 2 * SX + 0.2 || lx > 16 * SX - 0.2)) ok = false;
            }
          }
          if (ok) { place('helmsley', x, z, th, sz, SX); this._helm = [x, z, geo('helmsley').hx * SX, geo('helmsley').hz * sz]; break helm; }
        }
      }
      // Grand Central (mặt chính −Z quay về nam / 42 St => yaw + π) rồi MetLife phía bắc: dò chỗ bên trái đoạn cầu cạn chạy dọc nhà ga sao cho
      // mép đường (±HW) không chạm footprint (nới 1 m) và 2 tòa không chồng nhau
      const Q = {}, put = this._helm ? [this._helm] : [];
      const clear = (x, z, th, hx, hz) => {
        const c = Math.cos(th), sn = Math.sin(th);
        for (let t = pas.s0 - 420; t < pas.s1 + 40; t += 2) { road.at(L + t, Q); for (const u of [-HW, 0, HW]) {
          const ex = Q.x + Math.cos(Q.th) * u - x, ez = Q.z - Math.sin(Q.th) * u - z;
          if (Math.abs(ex * c - ez * sn) < hx + 1 && Math.abs(ex * sn + ez * c) < hz + 1) return false; } }
        for (const [px, pz, phx, phz] of put) { const ex = px - x, ez = pz - z; if (Math.abs(ex * c - ez * sn) < hx + phx + 2 && Math.abs(ex * sn + ez * c) < hz + phz + 2) return false; }
        return true;
      };
      for (const [name, d0, d1, flip] of [['grandcentral', 110, 220, Math.PI], ['metlife', 40, 200, 0]]) {
        const X = 2 * geo(name).hx, Z = 2 * geo(name).hz;
        search: for (let ds = d0; ds <= d1; ds += 5) for (let ex = 0; ex <= 40; ex += 5) {
          road.at(L + pas.s0 - ds, P);
          const o = HW + 1.5 + X / 2 + ex, x = P.x - Math.cos(P.th) * o, z = P.z + Math.sin(P.th) * o;
          if (clear(x, z, P.th, X / 2, Z / 2)) { place(name, x, z, P.th + flip); put.push([x, z, X / 2, Z / 2]); break search; }
        }
      }
    }
  }

  _build(list) {
    const mats = [...this.ts.mats.slice(0, 4), this.brick], excl = this.ts.excl;
    // trục lưới phố Manhattan (Park Ave đi bắc) cho obb camera
    const th = NYC.data.heading[Math.round(4100 / NYC.data.step)], cs = Math.cos(th), sn = Math.sin(th);
    const chunks = new Map(), awn = [], road = this.road.street, RP = {}, FRONT = CITY.hw + CITY.walk + 0.4, SHOP = 4.8;
    for (const [h, cls, s, pts] of list) {
      const n = pts.length / 2;
      let cx = 0, cz = 0; for (let i = 0; i < n; i++) { cx += pts[2 * i]; cz += pts[2 * i + 1]; } cx /= n; cz /= n;
      if ((excl && excl(cx, cz)) || this.lmRects.some((f) => f(cx, cz))) continue;   // Times Square / tòa nổi tiếng: model riêng
      const key = Math.floor(s / 300);
      if (!chunks.has(key)) chunks.set(key, { walls: mats.map(() => mk()), roof: mk(), shop: mk() });
      const C = chunks.get(key), B = C.walls[cls], y0 = hLow(cx, cz) - 0.6, y1 = y0 + 0.6 + h;
      // hướng vòng: diện tích có dấu => đi ngược / xuôi chiều kim đồng hồ để pháp tuyến tường quay ra ngoài
      let area = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; area += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1]; }
      const sg = area > 0 ? 1 : -1;
      // tầng trệt cửa hàng (cao SHOP m, kính + bảng hiệu màu) rồi mặt tiền phía trên; mặt nhìn ra tuyến đường có mái hiên ở ~1/2 số cửa hàng
      road.at(NYC.length + s, RP);
      const rrx = Math.cos(RP.th), rrz = -Math.sin(RP.th), ys = h > 9 ? y0 + 0.6 + SHOP : y0;
      let per = (cx * 7.31 + cz * 3.17) % 24;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, ax = pts[2 * i], az = pts[2 * i + 1], bx = pts[2 * j], bz = pts[2 * j + 1], L = Math.hypot(bx - ax, bz - az);
        const nx = sg * (bz - az) / L, nz = -sg * (bx - ax) / L;
        if (ys > y0) quad(C.shop, [[ax, y0, az], [bx, y0, bz], [bx, ys, bz], [ax, ys, az]], [nx, 0, nz], [[per / 24, 0], [(per + L) / 24, 0], [(per + L) / 24, 1], [per / 24, 1]]);
        quad(B, [[ax, ys, az], [bx, ys, bz], [bx, y1, bz], [ax, y1, az]], [nx, 0, nz], [[per / 12, (ys - y0) / 14], [(per + L) / 12, (ys - y0) / 14], [(per + L) / 12, (y1 - y0) / 14], [per / 12, (ys - y0) / 14 + (y1 - ys) / 14]]);
        // mặt tiền ra đường: cách tim đường gần FRONT, pháp tuyến quay về phía đường
        const mx = (ax + bx) / 2 - RP.x, mz = (az + bz) / 2 - RP.z, u = mx * rrx + mz * rrz;
        if (ys > y0 && L > 5 && Math.abs(Math.abs(u) - FRONT) < 5 && (nx * rrx + nz * rrz) * Math.sign(u) < -0.8) {
          for (let t = 1.5; t + 4 < L; t += 6) if (((cx + t * 13.7) * 0.37 % 1 + 1) % 1 < 0.55) {
            const k = (t + 2) / L, x = ax + (bx - ax) * k, z = az + (bz - az) * k;
            awn.push([x + nx * 0.8, y0 + 0.6 + 3.35, z + nz * 0.8, Math.atan2(nx, nz), Math.floor(((cx * 3.1 + t) % 5 + 5) % 5)]);
          }
        }
        per += L;
      }
      const shape = []; for (let i = 0; i < n; i++) shape.push(new THREE.Vector2(pts[2 * i], pts[2 * i + 1]));
      const b0 = C.roof.pos.length / 3;
      for (const p of shape) { C.roof.pos.push(p.x, y1, p.y); C.roof.nor.push(0, 1, 0); C.roof.uv.push(0, 0); }
      for (const t of THREE.ShapeUtils.triangulateShape(shape, [])) C.roof.idx.push(b0 + t[0], b0 + t[1], b0 + t[2]);
      // obb theo lưới phố
      let a0 = Infinity, a1 = -Infinity, f0 = Infinity, f1 = -Infinity;
      for (let i = 0; i < n; i++) { const ex = pts[2 * i] - cx, ez = pts[2 * i + 1] - cz, lx = ex * cs - ez * sn, lz = ex * sn + ez * cs; a0 = Math.min(a0, lx); a1 = Math.max(a1, lx); f0 = Math.min(f0, lz); f1 = Math.max(f1, lz); }
      const mx = (a0 + a1) / 2, mz = (f0 + f1) / 2;
      this.obb.push(cx + mx * cs + mz * sn, cz - mx * sn + mz * cs, cs, sn, (a1 - a0) / 2, (f1 - f0) / 2, y1);
    }
    let tris = 0;
    for (const C of chunks.values()) {
      C.walls.forEach((B, k) => { tris += mesh(this.group, B, mats[k]); });
      tris += mesh(this.group, C.roof, this.roof, true);
      tris += mesh(this.group, C.shop, this.shop);
    }
    // mái hiên: tấm nghiêng 4 × 1.6 m, màu đỏ / xanh lá / xanh navy / đen / vàng sẫm
    const AW = [0xa3201c, 0x1f5a37, 0x1d2f5c, 0x1b1b1d, 0x9a6a12];
    const ag = new THREE.BoxGeometry(4, 0.08, 1.6).rotateX(0.32), im = new THREE.InstancedMesh(ag, this.awn, awn.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
    awn.forEach(([x, y, z, yw, k], i) => { q.setFromAxisAngle(up, yw); m4.compose(v.set(x, y, z), q, sc); im.setMatrixAt(i, m4); im.setColorAt(i, col.set(AW[k])); });
    if (awn.length) { im.instanceColor.needsUpdate = true; im.castShadow = true; im.frustumCulled = false; this.group.add(im); }
    this.count = { buildings: this.obb.length / 7, chunks: chunks.size, tris, awnings: awn.length };
  }
}

const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
// tầng trệt: 4 cửa hàng / ô texture (24 m): bảng hiệu màu phía trên, kính lớn chia ô, cửa ra vào; ban đêm kính sáng ấm
function shopTex() {
  const W = 1024, H = 192, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d');
  g.fillStyle = '#2a2724'; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const SIGN = ['#b3261e', '#1f4e8c', '#e8e4da', '#1b1b1b', '#2e7d4f', '#d98a1b', '#6b2d82', '#c9c3b5'];
  for (let k = 0; k < 4; k++) {
    const x0 = k * 256, sc = SIGN[(k * 3 + 1) % SIGN.length];
    g.fillStyle = sc; g.fillRect(x0 + 6, 8, 244, 40);                          // bảng hiệu
    g.fillStyle = sc === '#e8e4da' || sc === '#c9c3b5' ? '#222' : '#f4f1ea';
    for (let i = 0; i < 6; i++) g.fillRect(x0 + 40 + i * 30, 20, 20, 16);       // chữ giả (khối)
    g.fillStyle = '#121619'; g.fillRect(x0 + 10, 56, 236, 130);                  // kính
    ge.fillStyle = ['#ffd8a0', '#fff0d0', '#ffe3b8'][k % 3]; ge.fillRect(x0 + 12, 58, 232, 126);
    g.fillStyle = '#2a2724'; for (let i = 1; i < 4; i++) g.fillRect(x0 + 10 + i * 59, 56, 4, 130);
    g.fillStyle = '#3b3530'; g.fillRect(x0 + 100, 92, 56, 94);                   // cửa
    g.fillStyle = 'rgba(160,190,210,0.25)'; g.fillRect(x0 + 14, 60, 60, 40);       // ánh phản chiếu
  }
  const mkT = (cv) => { const t = new THREE.CanvasTexture(cv); t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  return [mkT(c), mkT(e)];
}
function quad(B, V, N, uvs) {
  const b = B.pos.length / 3;
  for (let i = 0; i < 4; i++) { B.pos.push(...V[i]); B.nor.push(...N); B.uv.push(...uvs[i]); }
  const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
  if ((ay * bz - az * by) * N[0] + (az * bx - ax * bz) * N[1] + (ax * by - ay * bx) * N[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
}
function mesh(group, B, mat, roof = false) {
  if (!B.idx.length) return 0;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2)); g.setIndex(B.idx);
  if (roof) { /* mái: tam giác có thể ngược chiều => vẽ 2 mặt */ mat.side = THREE.DoubleSide; }
  g.computeBoundingSphere();
  const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; group.add(m);
  return B.idx.length / 3;
}
