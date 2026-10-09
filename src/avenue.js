import * as THREE from 'three';
import { AVENUE, IC, icS, icIndex, rampU } from './road.js';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const RAMP_STEP = 6, RAMP_HW = 2.5;

// Map Đại lộ: đường cao tốc 6 làn (3 làn mỗi chiều), dải phân cách bê tông giữa, lề khẩn cấp, cỏ hai bên (địa hình đồi cỏ).
// Toạ độ theo đường chính: s (dọc), u (ngang, + = bên phải). Dựng theo đoạn CHUNK m quanh xe; vạch kẻ là lưới tam giác
// có màu đỉnh (không texture), dải phân cách là mặt cắt hình "jersey" kéo dọc đường.
// Nút giao (IC trong road.js): đường ngang 2 làn chui dưới cầu vượt, 2 cặp nhánh ra / vào (mỗi chiều 1 cặp) ở cao độ nền.
// `carve(x, z, h)` đào địa hình cho đường ngang (kênh dưới cầu, mái dốc 45° hai bên) và nhánh rẽ; `ic(k)` nhớ khung + điểm nhánh.
const CHUNK = 200, AHEAD = 1400, BEHIND = 300;
const MARK_Y = 0.05;
const DASH = 6, GAP = 9;               // vạch đứt giữa các làn: 6 m sơn, 9 m trống

export class Avenue {
  constructor(scene, road, asphaltTex) {
    this.road = road;
    this.ics = new Map();            // k -> khung nút giao (cho địa hình / xe đường ngang)
    this.icGroups = new Map();       // k -> mesh nút giao
    this.excl = [];                  // đoạn loại cỏ (đường ngang + nhánh) quanh nút giao gần nhất
    this.asphalt = new THREE.MeshStandardMaterial({ map: asphaltTex, roughness: 0.92, envMapIntensity: 0.38 });   // như mặt cao tốc (ít phản chiếu trời)
    withMist(this.asphalt);
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.chunks = new Map();
    this.markMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.barrierMat = new THREE.MeshStandardMaterial({ color: 0x9a9893, roughness: 0.92 });
    withMist(this.markMat); withMist(this.barrierMat);
    this._p = {};
  }

  set visible(v) { this.group.visible = v; if (!v) this.reset(); }
  get visible() { return this.group.visible; }

  reset() {
    for (const g of this.chunks.values()) this._dispose(g);
    this.chunks.clear();
    for (const g of this.icGroups.values()) this._dispose(g);
    this.icGroups.clear();
    this.ics.clear();
    this.excl.length = 0;
  }

  // khung nút giao k: tâm P (cao độ nền), vector r / f, cao độ đường ngang, điểm 2 nhánh (phải: chiều +s, trái: chiều −s)
  ic(k) {
    let I = this.ics.get(k);
    if (I) return I;
    const road = this.road, s0 = icS(k), p = road.at(s0, {});
    I = { k, s: s0, th: p.th, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th), yc: road.baseY(s0) };
    I.P = { x: p.x, y: I.yc, z: p.z };
    I.ramps = [1, -1].map((side) => {
      const pts = [];
      for (let t = -IC.rampLen; t <= IC.rampLen; t += RAMP_STEP) {
        const u = side > 0 ? rampU(t) : -rampU(-t), q = road.at(s0 + t, {});
        pts.push({ x: q.x + Math.cos(q.th) * u, z: q.z - Math.sin(q.th) * u, y: road.baseY(s0 + t), t, u });
      }
      const xs = pts.map((q) => q.x), zs = pts.map((q) => q.z);
      return { side, pts, x0: Math.min(...xs) - 16, x1: Math.max(...xs) + 16, z0: Math.min(...zs) - 16, z1: Math.max(...zs) + 16 };
    });
    const ends = [-1, 1].map((g) => [I.P.x + I.rx * g * IC.crossLen, I.P.z + I.rz * g * IC.crossLen]);
    const X = [...ends.map((e) => e[0]), ...I.ramps.flatMap((R) => [R.x0, R.x1])], Z = [...ends.map((e) => e[1]), ...I.ramps.flatMap((R) => [R.z0, R.z1])];
    I.x0 = Math.min(...X) - 20; I.x1 = Math.max(...X) + 20; I.z0 = Math.min(...Z) - 20; I.z1 = Math.max(...Z) + 20;
    this.ics.set(k, I);
    return I;
  }
  // cao độ đường ngang tại u (bằng nền ±60 m quanh cao tốc, xa dần thì theo địa hình)
  crossY(I, u) {
    const x = I.P.x + I.rx * u, z = I.P.z + I.rz * u;
    return I.yc + (hLow(x, z) - I.yc) * sm(60, 140, Math.abs(u));
  }
  // vị trí + hướng xe trên đường ngang của nút giao k: u (dọc đường ngang), a (lệch làn theo f), du (hướng chạy)
  crossPose(k, u, a, du, out) {
    const I = this.ic(k);
    out.x = I.P.x + I.rx * u + I.fx * a; out.z = I.P.z + I.rz * u + I.fz * a;
    out.y = this.crossY(I, u) + 0.05; out.yaw = I.th + (du > 0 ? -Math.PI / 2 : Math.PI / 2);
    return out;
  }
  // hộ lan cao tốc hở ở chỗ nhánh rẽ tách / nhập (cả 2 bên)
  railGap(s) { const t = Math.abs(s - icS(icIndex(s))); return t > 300 && t < 495; }

  // địa hình: kênh đường ngang dưới cầu + nền nhánh rẽ (gọi từ terrain._height sau khi đã xẻ theo cao tốc)
  carve(x, z, h) {
    if (!this.group.visible) return h;
    for (const I of this.ics.values()) {
      if (x < I.x0 || x > I.x1 || z < I.z0 || z > I.z1) continue;
      const dx = x - I.P.x, dz = z - I.P.z, u = dx * I.rx + dz * I.rz, a = Math.abs(dx * I.fx + dz * I.fz);
      if (Math.abs(u) < IC.crossLen + 20 && a < 22) {
        const cy = this.crossY(I, u) - 0.03;
        h = cy + (h - cy) * sm(IC.crossHW + 1.6, IC.crossHW + (Math.abs(u) < 40 ? 9.5 : 14), a);
      }
      for (const R of I.ramps) {
        if (x < R.x0 || x > R.x1 || z < R.z0 || z > R.z1) continue;
        const P = R.pts;
        let bi = 0, bd = Infinity;
        for (let i = 0; i < P.length; i += 4) { const d = (P[i].x - x) ** 2 + (P[i].z - z) ** 2; if (d < bd) { bd = d; bi = i; } }
        let best = Infinity, by = 0;
        for (let i = Math.max(0, bi - 5); i < Math.min(P.length - 1, bi + 5); i++) {
          const A = P[i], B = P[i + 1], abx = B.x - A.x, abz = B.z - A.z, l2 = abx * abx + abz * abz || 1;
          const t = Math.min(1, Math.max(0, ((x - A.x) * abx + (z - A.z) * abz) / l2));
          const d = Math.hypot(x - A.x - abx * t, z - A.z - abz * t);
          if (d < best) { best = d; by = A.y + (B.y - A.y) * t; }
        }
        if (best < 14) { const ry = by - 0.03; h = ry + (h - ry) * sm(RAMP_HW + 0.6, 11, best); }
      }
    }
    return h;
  }

  update(s, budget = 1) {
    if (!this.group.visible) return;
    // nút giao: khung (cho địa hình xa) và mesh (gần)
    const kc0 = icIndex(s - 2500), kc1 = icIndex(s + 6500);
    for (let k = kc0; k <= kc1; k++) this.ic(k);
    for (const k of this.ics.keys()) if (k < kc0 || k > kc1) this.ics.delete(k);
    const kg0 = icIndex(s - 700), kg1 = icIndex(s + 1900);
    for (let k = kg0; k <= kg1; k++) {
      const d = icS(k) - s;
      if (d > -700 && d < 1900 && !this.icGroups.has(k)) this.icGroups.set(k, this._buildIC(this.ic(k)));
    }
    for (const [k, g] of this.icGroups) { const d = icS(k) - s; if (d < -800 || d > 2000) { this._dispose(g); this.icGroups.delete(k); } }
    this._exclusions(s);
    const k0 = Math.max(0, Math.floor((s - BEHIND) / CHUNK)), k1 = Math.floor((s + AHEAD) / CHUNK);
    const want = [];
    for (let k = k0; k <= k1; k++) if (!this.chunks.has(k)) want.push(k);
    want.sort((a, b) => Math.abs(a * CHUNK - s) - Math.abs(b * CHUNK - s));
    for (let i = 0; i < budget && i < want.length; i++) this.chunks.set(want[i], this._build(want[i]));
    for (const [k, g] of this.chunks) if (k < k0 || k > k1) { this._dispose(g); this.chunks.delete(k); }
  }

  prime(s) { this.update(s, 99); }

  _dispose(g) {
    this.group.remove(g);
    g.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }

  // đoạn loại cỏ quanh nút giao gần nhất: [x0, z0, x1, z1, nửa bề rộng]
  _exclusions(s) {
    const E = this.excl; E.length = 0;
    const k = icIndex(s);
    if (Math.abs(icS(k) - s) > 900) return;
    const I = this.ic(k), C = (u) => [I.P.x + I.rx * u, I.P.z + I.rz * u];
    E.push([...C(-34), ...C(34), 16], [...C(-IC.crossLen), ...C(IC.crossLen), IC.crossHW + 1.5]);
    for (const R of I.ramps) {
      const P = R.pts, idx = [8, 22, 38, 54, 70, 80, 96, 112, 126, 152].filter((i) => i < P.length);
      for (let j = 0; j + 1 < idx.length && E.length < 16; j++) E.push([P[idx[j]].x, P[idx[j]].z, P[idx[j + 1]].x, P[idx[j + 1]].z, RAMP_HW + 1.2]);
    }
  }

  _buildIC(I) {
    const group = new THREE.Group(), road = this.road;
    const A = { pos: [], nor: [], uv: [], idx: [] }, M = { pos: [], nor: [], col: [], idx: [] }, Cc = { pos: [], nor: [], idx: [] };
    const push = (B, P, n, extra) => {                       // tứ giác P[0..3] (vòng), pháp tuyến n; tự lật cho đúng mặt
      const b = B.pos.length / 3;
      P.forEach((q, i) => { B.pos.push(q[0], q[1], q[2]); B.nor.push(n[0], n[1], n[2]); if (B.uv) B.uv.push(...extra[i]); if (B.col) B.col.push(...extra); });
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2], bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const c = [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
      if (c[0] * n[0] + c[1] * n[1] + c[2] * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    };
    const UP = [0, 1, 0], WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16];
    // ---- đường ngang: dải nhựa dọc trục u, bước 4 m ----
    const X = (u, a, y) => [I.P.x + I.rx * u + I.fx * a, y, I.P.z + I.rz * u + I.fz * a];
    const CH = IC.crossHW, CL = IC.crossLen;
    for (let u = -CL; u < CL; u += 4) {
      const y0 = this.crossY(I, u) + 0.03, y1 = this.crossY(I, u + 4) + 0.03;
      push(A, [X(u, -CH, y0), X(u + 4, -CH, y1), X(u + 4, CH, y1), X(u, CH, y0)], UP, [[u / 8, -CH / 8], [(u + 4) / 8, -CH / 8], [(u + 4) / 8, CH / 8], [u / 8, CH / 8]]);
      const m = (a0, a1, col) => push(M, [X(u, a0, y0 + 0.02), X(u + 4, a0, y1 + 0.02), X(u + 4, a1, y1 + 0.02), X(u, a1, y0 + 0.02)], UP, col);
      m(-0.2, -0.08, YEL); m(0.08, 0.2, YEL); m(-CH + 0.3, -CH + 0.45, WHITE); m(CH - 0.45, CH - 0.3, WHITE);
    }
    // ---- nhánh rẽ: dải nhựa theo điểm nhánh (bỏ phần trùng mặt cao tốc / đường ngang) ----
    for (const R of I.ramps) {
      const P = R.pts;
      for (let i = 0; i + 1 < P.length; i++) {
        const a = P[i], b = P[i + 1];
        if (Math.min(Math.abs(a.u), Math.abs(b.u)) < AVENUE.hw + 1.6 || Math.min(Math.abs(a.t), Math.abs(b.t)) < CH + 0.4) continue;
        const qa = road.at(I.s + a.t, {}), qb = road.at(I.s + b.t, {});
        const E = (q, u, y) => [q.x + Math.cos(q.th) * u, y, q.z - Math.sin(q.th) * u];
        push(A, [E(qa, a.u - RAMP_HW, a.y + 0.03), E(qb, b.u - RAMP_HW, b.y + 0.03), E(qb, b.u + RAMP_HW, b.y + 0.03), E(qa, a.u + RAMP_HW, a.y + 0.03)], UP,
          [[a.t / 8, -0.3], [b.t / 8, -0.3], [b.t / 8, 0.3], [a.t / 8, 0.3]]);
        for (const e of [-1, 1]) {
          const u0 = e * (RAMP_HW - 0.35), u1 = e * (RAMP_HW - 0.2);
          push(M, [E(qa, a.u + u0, a.y + 0.05), E(qb, b.u + u0, b.y + 0.05), E(qb, b.u + u1, b.y + 0.05), E(qa, a.u + u1, a.y + 0.05)], UP, WHITE);
        }
      }
    }
    // ---- cầu vượt: bản mặt cầu (đáy + 2 thành bên có lan can bê tông), trụ + xà mũ hai bên đường ngang ----
    const DECK = 21, SPAN = CH + 2.4;
    const at = (t, u, dy) => { const q = road.at(I.s + t, {}); return [q.x + Math.cos(q.th) * u, q.y + dy, q.z - Math.sin(q.th) * u]; };
    for (let t = -DECK; t < DECK; t += 3) {
      const t1 = Math.min(DECK, t + 3);
      push(Cc, [at(t, -13.7, -1.35), at(t1, -13.7, -1.35), at(t1, 13.7, -1.35), at(t, 13.7, -1.35)], [0, -1, 0]);
      for (const e of [-1, 1]) {
        const n = [I.rx * e, 0, I.rz * e];
        push(Cc, [at(t, e * 13.7, -1.35), at(t1, e * 13.7, -1.35), at(t1, e * 13.7, 0.95), at(t, e * 13.7, 0.95)], n);
        push(Cc, [at(t, e * 13.25, 0), at(t1, e * 13.25, 0), at(t1, e * 13.25, 0.95), at(t, e * 13.25, 0.95)], [-n[0], 0, -n[2]]);
        push(Cc, [at(t, e * 13.25, 0.95), at(t1, e * 13.25, 0.95), at(t1, e * 13.7, 0.95), at(t, e * 13.7, 0.95)], UP);
      }
    }
    const box = (cx, cy, cz, sx, sy, sz) => {                 // hộp theo khung nút giao (sx dọc r, sz dọc f)
      const C = [];
      for (const [i, j, k] of [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1], [-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1]])
        C.push([cx + I.rx * i * sx / 2 + I.fx * k * sz / 2, cy + j * sy / 2, cz + I.rz * i * sx / 2 + I.fz * k * sz / 2]);
      const F = [[0, 1, 2, 3, [0, -1, 0]], [4, 5, 6, 7, UP], [0, 1, 5, 4, [-I.fx, 0, -I.fz]], [3, 2, 6, 7, [I.fx, 0, I.fz]], [0, 3, 7, 4, [-I.rx, 0, -I.rz]], [1, 2, 6, 5, [I.rx, 0, I.rz]]];
      for (const [a, b, c, d, n] of F) push(Cc, [C[a], C[b], C[c], C[d]], n);
    };
    const topY = road.at(I.s, {}).y - 1.35;
    for (const e of [-1, 1]) {
      const [px, , pz] = X(0, e * SPAN, 0);
      for (const u of [-9.5, 0, 9.5]) box(px + I.rx * u, (I.yc + topY - 0.9) / 2, pz + I.rz * u, 1.1, topY - 0.9 - I.yc + 0.2, 1.1);
      box(px, topY - 0.45, pz, 26, 0.9, 1.6);
    }
    const mk = (B, mat, opts = {}) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      if (B.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      if (B.col) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
      g.setIndex(B.idx);
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true; m.castShadow = !!opts.cast;
      group.add(m);
    };
    mk(A, this.asphalt); mk(M, this.markMat); mk(Cc, this.barrierMat, { cast: true });
    this.group.add(group);
    return group;
  }

  _build(k) {
    const road = this.road, group = new THREE.Group();
    const s0 = k * CHUNK, s1 = s0 + CHUNK;
    const at = (s, u, y) => { const p = road.at(s, this._p); return [p.x + Math.cos(p.th) * u, p.y + y, p.z - Math.sin(p.th) * u]; };
    const mark = { pos: [], nor: [], col: [], idx: [] };
    const quad = (B, P, n, col) => {
      const b = B.pos.length / 3;
      for (let i = 0; i < 4; i++) { B.pos.push(...P[i]); B.nor.push(...n); if (B.col) B.col.push(...col); }
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
      const bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const cy = az * bx - ax * bz;
      if (cy * n[1] >= 0 && n[1] !== 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      else if (n[1] !== 0) B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
      else B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3, b, b + 2, b + 1, b, b + 3, b + 2);   // mặt đứng: vẽ cả 2 mặt
    };
    const UP = [0, 1, 0];
    const strip = (sA, sB, u0, u1, col) => {
      const N = Math.max(1, Math.ceil((sB - sA) / 4));
      for (let i = 0; i < N; i++) {
        const a = sA + (sB - sA) * i / N, b = sA + (sB - sA) * (i + 1) / N;
        quad(mark, [at(a, u0, MARK_Y), at(b, u0, MARK_Y), at(b, u1, MARK_Y), at(a, u1, MARK_Y)], UP, col);
      }
    };
    const WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16];
    const A = AVENUE;
    for (const su of [-1, 1]) {
      strip(s0, s1, su * (A.median + 0.15), su * (A.median + 0.3), YEL);          // mép trong (sát dải phân cách): vàng liền
      strip(s0, s1, su * (A.edge - 0.1), su * (A.edge + 0.1), WHITE);             // mép ngoài (lề khẩn cấp): trắng liền
      for (const sep of A.seps) {                                                  // giữa các làn: trắng đứt
        for (let a = Math.ceil(s0 / (DASH + GAP)) * (DASH + GAP); a < s1; a += DASH + GAP) strip(a, Math.min(s1, a + DASH), su * (sep - 0.075), su * (sep + 0.075), WHITE);
      }
    }
    group.add(this._mesh(mark, this.markMat, true));

    // dải phân cách bê tông kiểu "jersey": mặt cắt (u, y) kéo dọc đường, bước 4 m
    const prof = [[-0.3, 0], [-0.17, 0.22], [-0.11, 0.82], [0.11, 0.82], [0.17, 0.22], [0.3, 0]];
    const bar = { pos: [], nor: [], idx: [] };
    const N = Math.ceil(CHUNK / 4);
    for (let i = 0; i < N; i++) {
      const a = s0 + i * 4, b = a + 4;
      for (let j = 0; j + 1 < prof.length; j++) {
        const [u0, y0] = prof[j], [u1, y1] = prof[j + 1];
        const P = [at(a, u0, y0), at(b, u0, y0), at(b, u1, y1), at(a, u1, y1)];
        const p = road.at((a + b) / 2, this._p), du = u1 - u0, dy = y1 - y0, L = Math.hypot(du, dy) || 1;
        const nu = -dy / L, ny = du / L;                                         // pháp tuyến mặt cắt (hướng ra ngoài)
        const n = [Math.cos(p.th) * nu, ny, -Math.sin(p.th) * nu];
        const base = bar.pos.length / 3;
        for (const q of P) { bar.pos.push(...q); bar.nor.push(...n); }
        // chiều quấn: kiểm tra pháp tuyến hình học so với n
        const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
        const bx = P[3][0] - P[0][0], by = P[3][1] - P[0][1], bz = P[3][2] - P[0][2];
        const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
        if (cx * n[0] + cy * n[1] + cz * n[2] >= 0) bar.idx.push(base, base + 1, base + 3, base + 1, base + 2, base + 3);
        else bar.idx.push(base, base + 3, base + 1, base + 1, base + 3, base + 2);
      }
    }
    const bm = this._mesh(bar, this.barrierMat, false);
    bm.castShadow = true;
    group.add(bm);
    this.group.add(group);
    return group;
  }

  _mesh(B, mat, colors) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
    if (colors) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
    g.setIndex(B.idx);
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    return m;
  }
}
