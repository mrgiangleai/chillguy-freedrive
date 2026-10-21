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
// tòa nổi tiếng: [tên, module, kích thước X (đông–tây), Z (bắc–nam)]; Grand Central thêm khi có model
const LANDMARKS = { empire: [empire, 129, 57], chrysler: [chrysler, 61, 58], metlife: [metlife, 90, 50], helmsley: [helmsley, 90, 60] };

export class NycBuildings {
  constructor(scene, ts, road) {
    this.ts = ts; this.road = road;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.obb = [];
    const [map, em] = facadeTex(4);
    this.brick = withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.85 }));
    this.roof = withMist(new THREE.MeshStandardMaterial({ color: 0x4a4c4f, roughness: 0.9 }));
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.brick.emissiveIntensity = 1.2 * k; }

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
    const place = (name, x, z, yaw) => {
      const [mod, X, Z] = LANDMARKS[name], g = mod.build(THREE).geometry;
      const m = new THREE.Mesh(g, mat); m.position.set(x, hLow(x, z) - 0.3, z); m.rotation.y = yaw; m.castShadow = m.receiveShadow = true;
      this.group.add(m);
      const c = Math.cos(yaw), s = Math.sin(yaw), hx = X / 2 + 4, hz = Z / 2 + 4;
      this.lmRects.push((px, pz) => { const ex = px - x, ez = pz - z; return Math.abs(ex * c - ez * s) < hx && Math.abs(ex * s + ez * c) < hz; });
      this.obb.push(x, z, c, s, X / 2, Z / 2, hLow(x, z) + 60);
    };
    for (const name of ['empire', 'chrysler']) if (lm[name]) place(name, lm[name][0], lm[name][1], thG);
    const pas = D.passages[0];
    if (pas) {
      road.at(L + (pas.s0 + pas.s1) / 2, P);
      place('helmsley', P.x - Math.cos(P.th) * 9, P.z + Math.sin(P.th) * 9, P.th);
      // MetLife: dò chỗ bên trái cầu cạn trước Helmsley sao cho mép đường (±HW) không chạm footprint (nới 1 m)
      const Q = {}, clear = (x, z, th) => {
        const c = Math.cos(th), sn = Math.sin(th);
        for (let t = pas.s0 - 320; t < pas.s1 + 40; t += 2) { road.at(L + t, Q); for (const u of [-HW, 0, HW]) {
          const ex = Q.x + Math.cos(Q.th) * u - x, ez = Q.z - Math.sin(Q.th) * u - z;
          if (Math.abs(ex * c - ez * sn) < 46 && Math.abs(ex * sn + ez * c) < 26) return false; } }
        return true;
      };
      search: for (let ds = 70; ds <= 160; ds += 10) for (let ex = 0; ex <= 30; ex += 6) {
        road.at(L + pas.s0 - ds, P);
        const o = HW + 1.5 + 45 + ex, x = P.x - Math.cos(P.th) * o, z = P.z + Math.sin(P.th) * o;
        if (clear(x, z, P.th)) { place('metlife', x, z, P.th); break search; }
      }
    }
  }

  _build(list) {
    const mats = [...this.ts.mats.slice(0, 4), this.brick], excl = this.ts.excl;
    // trục lưới phố Manhattan (Park Ave đi bắc) cho obb camera
    const th = NYC.data.heading[Math.round(4100 / NYC.data.step)], cs = Math.cos(th), sn = Math.sin(th);
    const chunks = new Map();
    for (const [h, cls, s, pts] of list) {
      const n = pts.length / 2;
      let cx = 0, cz = 0; for (let i = 0; i < n; i++) { cx += pts[2 * i]; cz += pts[2 * i + 1]; } cx /= n; cz /= n;
      if ((excl && excl(cx, cz)) || this.lmRects.some((f) => f(cx, cz))) continue;   // Times Square / tòa nổi tiếng: model riêng
      const key = Math.floor(s / 300);
      if (!chunks.has(key)) chunks.set(key, { walls: mats.map(() => mk()), roof: mk() });
      const C = chunks.get(key), B = C.walls[cls], y0 = hLow(cx, cz) - 0.6, y1 = y0 + 0.6 + h;
      // hướng vòng: diện tích có dấu => đi ngược / xuôi chiều kim đồng hồ để pháp tuyến tường quay ra ngoài
      let area = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; area += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1]; }
      const sg = area > 0 ? 1 : -1;
      let per = 0;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, ax = pts[2 * i], az = pts[2 * i + 1], bx = pts[2 * j], bz = pts[2 * j + 1], L = Math.hypot(bx - ax, bz - az);
        const nx = sg * (bz - az) / L, nz = -sg * (bx - ax) / L;
        quad(B, [[ax, y0, az], [bx, y0, bz], [bx, y1, bz], [ax, y1, az]], [nx, 0, nz], [[per / 12, 0], [(per + L) / 12, 0], [(per + L) / 12, (y1 - y0) / 14], [per / 12, (y1 - y0) / 14]]);
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
    }
    this.count = { buildings: this.obb.length / 7, chunks: chunks.size, tris };
  }
}

const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
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
