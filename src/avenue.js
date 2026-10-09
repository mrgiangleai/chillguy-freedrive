import * as THREE from 'three';
import { AVENUE } from './road.js';
import { withMist } from './mist.js';

// Map Đại lộ: đường cao tốc 6 làn (3 làn mỗi chiều), dải phân cách bê tông giữa, lề khẩn cấp, cỏ hai bên (địa hình đồi cỏ).
// Toạ độ theo đường chính: s (dọc), u (ngang, + = bên phải). Dựng theo đoạn CHUNK m quanh xe; vạch kẻ là lưới tam giác
// có màu đỉnh (không texture), dải phân cách là mặt cắt hình "jersey" kéo dọc đường.
const CHUNK = 200, AHEAD = 1400, BEHIND = 300;
const MARK_Y = 0.05;
const DASH = 6, GAP = 9;               // vạch đứt giữa các làn: 6 m sơn, 9 m trống

export class Avenue {
  constructor(scene, road) {
    this.road = road;
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
  }

  update(s, budget = 1) {
    if (!this.group.visible) return;
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
