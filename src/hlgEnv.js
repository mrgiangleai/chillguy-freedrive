// Map Cao tốc HLG: cảnh quan theo bản đồ thật (OpenStreetMap, `assets/hlg-env.json`, tạo bằng `node scripts/fetch-hlg-env.mjs`):
// - nhà / chung cư / nhà xưởng theo footprint thật (hộp xoay theo cạnh thật, cao theo số tầng), dùng chung shader mặt tiền của map Phố
// - cây (rừng, vườn, cao su) theo ô sử dụng đất 40 m; ô khu dân cư chưa có nhà trong dữ liệu => thêm nhà nhỏ cho đỡ trống
// - màu đất theo loại sử dụng đất (terrain gọi TP.land)
// Dữ liệu đo theo chiều đi (s, u); chiều về: s' = L − s, u' = −u. Dựng theo đoạn CH m quanh xe, ≤ 1 đoạn / khung.
import * as THREE from 'three';
import { TP, hLow, hDetail, hash2 } from './terrain-noise.js';
import { layout, IC } from './road.js';
import { HLG } from './hlg.js';

const CH = 400, AHEAD = 2400, BEHIND = 700;
const WALLS = ['#efe4c8', '#f3ecdc', '#e8d29a', '#e6c3a8', '#d9e2e0', '#f1f1ea', '#c9d8c2', '#e9d8b9', '#d7c6b0', '#f0dcc0'];
const APT = ['#f2efe6', '#e9e4d8', '#dfe5ea', '#efe6d2'];
const IND = ['#c9ced2', '#b8c4cc', '#d6d6d0', '#aab7c2'];
// màu đất theo loại (sRGB → tuyến tính): khu dân cư / thương mại đất nện + bê tông, công nghiệp bê tông, rừng sẫm, ruộng / đồng cỏ
// xanh vàng, mặt nước (ao, hồ nuôi trồng) xanh sẫm
const LAND = { r: '#7d7663', c: '#86817a', i: '#8e8e88', f: '#3f5a2c', p: '#8fa553', w: '#3b5654' };
const LANDC = Object.fromEntries(Object.entries(LAND).map(([k, v]) => [k, new THREE.Color(v)]));
const hashS = (a, b) => hash2(Math.floor(a), Math.floor(b));

export class HlgEnv {
  constructor(scene, road, city, avenue) {
    this.road = road; this.city = city; this.avenue = avenue;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.chunks = new Map();
    this.data = null; this.loading = false; this.onReady = null;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3(); this._c = new THREE.Color();
    this._up = new THREE.Vector3(0, 1, 0);
  }
  get visible() { return this.group.visible; }
  set visible(v) {
    this.group.visible = v;
    if (v && !this.data && !this.loading) this._load();
    if (!v) { this.reset(); TP.land = null; }
  }
  // đổi chiều chạy (quay đầu): dựng lại hết + lưới màu đất của chiều mới
  setDir(lay) { this.lay = lay; this.reset(); this._landGrid(); }

  reset() { for (const g of this.chunks.values()) this._dispose(g); this.chunks.clear(); }
  _dispose(g) {
    this.group.remove(g);
    g.traverse((o) => { if (o.isInstancedMesh) { o.dispose(); if (o.geometry.userData.own) o.geometry.dispose(); } });
  }

  async _load() {
    this.loading = true;
    try {
      const j = await (await fetch('assets/hlg-env.json')).json();
      const b = j.b, n = j.bn, B = [];
      for (let i = 0; i < n; i++) {
        const o = i * 7;
        B.push({ s: b[o], u: b[o + 1] / 10, w: b[o + 2] / 10, d: b[o + 3] / 10, a: b[o + 4] / 1000, h: b[o + 5] / 10, k: b[o + 6] });
      }
      B.sort((p, q) => p.s - q.s);
      // ô 40 m đã có nhà thật (để khỏi thêm nhà giả chồng lên)
      const occ = new Set(B.map((q) => Math.round(q.s / 40) + ':' + Math.round(q.u / 40)));
      this.data = { B, lu: j.lu, occ };
      this._landGrid();
      this.onReady?.();
    } catch (e) { console.warn('Không tải được hlg-env', e); }
    this.loading = false;
  }

  // loại đất tại (sF, uF) theo chiều đi
  _lu(sF, uF) {
    const L = this.data.lu, r = Math.round(sF / L.ds), c = Math.round((uF - L.u0) / L.du);
    const row = L.rows[r];
    return row && c >= 0 && c < row.length ? row[c] : '-';
  }
  // lưới màu đất theo thế giới (ô 40 m) của chiều đang chạy => terrain._color gọi TP.land(x, z)
  _landGrid() {
    if (!this.data || !this.lay) return;
    const { real, rev } = this.lay, { step, heading } = real, P = [{ x: 0, z: 0 }], Lr = HLG.length;
    for (let i = 1; i < heading.length; i++) { const th = (heading[i - 1] + heading[i]) / 2, q = P[i - 1]; P.push({ x: q.x - Math.sin(th) * step, z: q.z - Math.cos(th) * step }); }
    let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
    for (const q of P) { x0 = Math.min(x0, q.x); z0 = Math.min(z0, q.z); x1 = Math.max(x1, q.x); z1 = Math.max(z1, q.z); }
    const cell = 40, U = 600; x0 -= U + 40; z0 -= U + 40; x1 += U + 40; z1 += U + 40;
    const nx = Math.ceil((x1 - x0) / cell) + 1, nz = Math.ceil((z1 - z0) / cell) + 1, g = new Uint8Array(nx * nz);
    const codes = Object.keys(LAND);
    for (let i = 0; i < P.length; i += 2) {
      const s = i * step, th = heading[i], rx = Math.cos(th), rz = -Math.sin(th);
      for (let u = -U; u <= U; u += 20) {
        const ch = this._lu(rev ? Lr - s : s, rev ? -u : u), ci = codes.indexOf(ch);
        if (ci < 0) continue;
        const gi = Math.round((P[i].x + rx * u - x0) / cell), gj = Math.round((P[i].z + rz * u - z0) / cell);
        g[gj * nx + gi] = ci + 1;
      }
    }
    const col = codes.map((k) => LANDC[k]);
    TP.land = (x, z, out) => {                                 // trộn màu đất vào out (trả về out)
      const fi = (x - x0) / cell, fj = (z - z0) / cell, i = Math.round(fi), j = Math.round(fj);
      if (i < 0 || j < 0 || i >= nx || j >= nz) return out;
      const c = g[j * nx + i];
      if (c) out.lerp(col[c - 1], 0.55 + 0.25 * hashS(x / 7, z / 7));
      return out;
    };
    this.onLand?.();
  }

  update(s, lamps) {
    if (!this.group.visible || !this.data || !this.lay) return;
    this.city.uLit.value = lamps;                              // shader mặt tiền dùng chung với map Phố (phố ẩn thì phố không cập nhật)
    const k0 = Math.max(0, Math.floor((s - BEHIND) / CH)), k1 = Math.floor((s + AHEAD) / CH);
    const want = [];
    for (let k = k0; k <= k1; k++) if (!this.chunks.has(k)) want.push(k);
    want.sort((a, b) => Math.abs(a * CH - s) - Math.abs(b * CH - s));
    if (want.length) this.chunks.set(want[0], this._build(want[0]));
    for (const [k, g] of this.chunks) if (k < k0 - 1 || k > k1 + 1) { this._dispose(g); this.chunks.delete(k); }
  }
  prime(s) { if (!this.data) return; for (let i = 0; i < 12; i++) this.update(s, this.city.uLit.value); }

  // chỗ không được đặt nhà / cây (theo chiều đang chạy): đường + lề, nút giao (đường ngang, nhánh), sông, lạch dưới cầu
  _blocked(s, u, r = 0) {
    const a = Math.abs(u);
    if (a < 30 + r) return true;
    const L = layout();
    for (const I of L.ics) {
      const t = s - I.s;
      if (Math.abs(t) < IC.crossHW + 14 + r && a < IC.crossLen + 10) return true;
      if (Math.abs(t) < IC.rampLen + 20 && a < 70 + r) return true;
    }
    for (const R of L.rivers) if (Math.abs(s - R.s) < R.hw + 25 + r) return true;
    for (const D of L.decks) if (Math.abs(s - D.s) < D.half + 150) for (const C of D.creeks) if (Math.abs(s - D.s - C.t) < C.hw + 10 + r) return true;
    return false;
  }

  _build(k) {
    const group = new THREE.Group(), road = this.road, rev = this.lay.rev, Lr = HLG.length;
    const s0 = k * CH, s1 = s0 + CH, fA = rev ? Lr - s1 : s0, fB = rev ? Lr - s0 : s1;
    const m = this._m, q = this._q, v = this._v, sc = this._s, c = this._c, p = {};
    const pose = (s, u) => { road.at(s, p); return { x: p.x + Math.cos(p.th) * u, z: p.z - Math.sin(p.th) * u, th: p.th }; };
    const ground = (x, z) => hLow(x, z) + hDetail(x, z);
    // ---- nhà thật ----
    const boxes = [], houses = [];
    const B = this.data.B;
    let lo = 0, hi = B.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (B[mid].s < fA) lo = mid + 1; else hi = mid; }
    for (let i = lo; i < B.length && B[i].s < fB; i++) {
      const o = B[i], s = rev ? Lr - o.s : o.s, u = rev ? -o.u : o.u;
      if (this._blocked(s, u, Math.max(o.w, o.d) / 2)) continue;
      const P = pose(s, u);
      let yaw = P.th + o.a;
      // mặt trước (+z cục bộ) quay về phía đường
      if (Math.sin(yaw) * -Math.cos(P.th) * Math.sign(u) + Math.cos(yaw) * Math.sin(P.th) * Math.sign(u) < 0) yaw += Math.PI;
      const seed = hashS(o.s * 1.7, o.u * 3.1);
      const type = o.k === 1 ? 1 : o.k === 2 ? (o.h > 12 ? 2 : 0) : o.k === 3 ? 2 : 3;
      const pal = o.k === 1 ? APT : o.k === 3 ? IND : WALLS;
      const rec = [P.x, P.z, yaw, Math.max(4, o.w), Math.max(3, o.h), Math.max(4, o.d), type, seed, o.k === 2 && o.h < 12 ? 1 : 0, Math.floor(seed * 16), pal[Math.floor(seed * pal.length) % pal.length], ground(P.x, P.z)];
      (o.k === 0 && o.h < 9 && o.w * o.d < 300 ? houses : boxes).push(rec);
    }
    // ---- cây rừng / vườn + nhà nhỏ bổ sung ở khu dân cư thưa dữ liệu ----
    const trees = [], L = this.data.lu;
    for (let sF = Math.ceil(fA / L.ds) * L.ds; sF < fB; sF += L.ds) {
      for (let cI = 0; cI < L.rows[0].length; cI++) {
        const uF = L.u0 + cI * L.du, ch = this._lu(sF, uF);
        const s = rev ? Lr - sF : sF, u = rev ? -uF : uF;
        if (ch === 'f') {
          // rừng / vườn cao su: dày gần đường, thưa dần (máy yếu); xa hơn 360 m bỏ (địa hình đã tô màu rừng)
          const nT = Math.abs(uF) < 160 ? 3 : Math.abs(uF) < 360 ? 1 : 0;
          for (let t = 0; t < nT; t++) {
            const ds = (hashS(sF + t * 13, uF) - 0.5) * L.ds, du = (hashS(uF + t * 7, sF * 0.5) - 0.5) * L.du;
            if (this._blocked(s + ds, u + du, 4)) continue;
            const P = pose(s + ds, u + du);
            trees.push([P.x, ground(P.x, P.z) - 0.2, P.z, hashS(P.x, P.z) * 6.28, 1.0 + hashS(P.z, P.x) * 0.7]);
          }
        } else if ((ch === 'r' || ch === 'c') && !this.data.occ.has(Math.round(sF / 40) + ':' + Math.round(uF / 40)) && hashS(sF * 0.31, uF * 0.17) < 0.45) {
          if (this._blocked(s, u, 8)) continue;
          const P = pose(s, u), seed = hashS(sF, uF * 1.3), yaw = P.th + (u > 0 ? Math.PI : 0) + Math.PI / 2 * (seed < 0.5 ? 0 : 1);
          houses.push([P.x, P.z, yaw, 5 + seed * 4, 3.4 + Math.floor(seed * 3) * 3, 8 + seed * 8, 3, seed, ch === 'c' ? 1 : 0, Math.floor(seed * 16), WALLS[Math.floor(seed * WALLS.length)], ground(P.x, P.z)]);
          if (seed < 0.6) trees.push([P.x + 9 * Math.cos(yaw), ground(P.x, P.z) - 0.2, P.z - 9 * Math.sin(yaw), seed * 6.28, 0.8 + seed * 0.4]);
        }
      }
    }
    // ---- dựng instancing ----
    for (const [list, base] of [[boxes, this.city.boxGeo], [houses, this.city.houseGeo]]) {
      if (!list.length) continue;
      const g = new THREE.BufferGeometry();
      for (const a of ['position', 'normal', 'aRoof']) g.setAttribute(a, base.attributes[a].clone());
      g.userData.own = true;
      const info = new Float32Array(list.length * 4), im = new THREE.InstancedMesh(g, this.city.facade, list.length);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(list.length * 3), 3);
      const PL = 2.5;                                         // chân móng chìm xuống đất (đất dốc / bờ ruộng)
      list.forEach(([x, z, yaw, w, h, d, type, seed, shop, row, wc, by], i) => {
        q.setFromAxisAngle(this._up, yaw);
        m.compose(v.set(x, by - PL, z), q, sc.set(w, h + PL, d));
        im.setMatrixAt(i, m);
        im.setColorAt(i, c.set(wc));
        info.set([type, seed, shop + 2 * Math.round(PL * 50), row], i * 4);
      });
      g.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 4));
      im.castShadow = im.receiveShadow = true; im.frustumCulled = false;
      group.add(im);
    }
    if (trees.length) {
      const im = new THREE.InstancedMesh(this.avenue.treeGeo, this.avenue.treeMat, trees.length);
      trees.forEach(([x, y, z, r, k], i) => { q.setFromAxisAngle(this._up, r); m.compose(v.set(x, y, z), q, sc.setScalar(k)); im.setMatrixAt(i, m); });
      im.receiveShadow = true; im.frustumCulled = false;
      group.add(im);
    }
    group.userData.n = boxes.length + houses.length; group.userData.trees = trees.length;
    this.group.add(group);
    return group;
  }
}
