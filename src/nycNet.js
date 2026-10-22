// Map New York — mạng đường thật quanh tuyến (OSM, docs/assets/nyc-streets.json): mặt nhựa, vỉa hè, vạch tim đường; nhìn dọc phố ngang thấy phố thông sang đại lộ bên cạnh. Bản nháp DeepSeek theo đề, Claude soát.
// Map New York — mạng phố thật (vỉa hè + lòng đường + vạch kẻ) dựng từ nyc-streets.json.
// Mỗi đoạn phố được cắt theo lưới 300 m, gộp thành 1 mesh / ô / vật liệu để vẽ nhanh.
import * as THREE from 'three';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';

const CELL = 300;          // kích thước ô lưới (m)
const SIDE_EXTRA = 4;      // vỉa hè rộng thêm mỗi bên (phố xe)
const SIDE_EXTRA_PED = 1;  // vỉa hè rộng thêm mỗi bên (phố đi bộ)
const MARK_W = 0.15;       // bề rộng vạch kẻ
const DASH = 3;            // vạch đứt: đoạn kẻ
const GAP = 6;             // vạch đứt: đoạn hở
const CYCLE = DASH + GAP;
const YELLOW = [0.86, 0.66, 0.16];
const WHITE = [0.86, 0.86, 0.83];

// gom đỉnh / tam giác theo (ô lưới, vật liệu)
function makeBucket(matName) {
  return { mat: matName, uvS: matName === 'asphalt' ? 1 / 12 : 1 / 2, pos: [], nor: [], uv: [], col: matName === 'mark' ? [] : null, idx: [] };
}
function vert(b, x, y, z, col) {
  const i = b.pos.length / 3;
  b.pos.push(x, y, z);
  b.nor.push(0, 1, 0);
  b.uv.push(x * b.uvS, z * b.uvS);
  if (b.col) b.col.push(col[0], col[1], col[2]);
  return i;
}
// dải chữ nhật dọc đoạn p0->p1, lệch tâm `off`, nửa rộng `hw`; pháp tuyến (nx, nz)
function ribbon(b, x0, z0, x1, z1, nx, nz, off, hw, y0, y1, col) {
  const oa = off + hw, ob = off - hw;
  const ax = x0 + nx * oa, az = z0 + nz * oa;
  const bx = x0 + nx * ob, bz = z0 + nz * ob;
  const cx = x1 + nx * ob, cz = z1 + nz * ob;
  const dx = x1 + nx * oa, dz = z1 + nz * oa;
  const A = vert(b, ax, y0, az, col), B = vert(b, bx, y0, bz, col);
  const C = vert(b, cx, y1, cz, col), D = vert(b, dx, y1, dz, col);
  b.idx.push(A, C, B, A, D, C);   // mặt hướng lên (0, 1, 0)
}
// đĩa phẳng 8 cạnh lấp mối nối ở đỉnh gấp khúc
function disk(b, x, z, r, y, col) {
  const N = 8, ring = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    ring.push(vert(b, x + Math.cos(a) * r, y, z + Math.sin(a) * r, col));
  }
  const c = vert(b, x, y, z, col);
  for (let i = 0; i < N; i++) b.idx.push(c, ring[(i + 1) % N], ring[i]);
}

// builder thuần: list = mảng street của json, mats = { asphalt, walk, mark }, groundAt(x, z) -> y
export function buildNet(THREE, list, mats, groundAt) {
  const group = new THREE.Group();
  group.name = 'nycNet';
  const buckets = new Map();
  const bucket = (x, z, matName) => {
    const key = Math.floor(x / CELL) + '|' + Math.floor(z / CELL) + '|' + matName;
    let b = buckets.get(key);
    if (!b) { b = makeBucket(matName); buckets.set(key, b); }
    return b;
  };

  for (const street of list) {
    const width = street[0], kind = street[1], oneway = street[2], pts = street[3];
    if (!pts || pts.length < 4) continue;
    const hwWalk = width / 2 + (kind === 1 ? SIDE_EXTRA_PED : SIDE_EXTRA);
    const hwRoad = width / 2;
    let acc = 0;   // quãng đường dọc polyline (giữ nhịp vạch đứt liên tục)

    for (let i = 0; i + 3 < pts.length; i += 2) {
      const x0 = pts[i], z0 = pts[i + 1], x1 = pts[i + 2], z1 = pts[i + 3];
      const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz);
      if (len < 0.5) { acc += len; continue; }
      const tx = dx / len, tz = dz / len;
      const nx = -tz, nz = tx;
      const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      const g0 = groundAt(x0, z0), g1 = groundAt(x1, z1);

      // 1. vỉa hè
      ribbon(bucket(mx, mz, 'walk'), x0, z0, x1, z1, nx, nz, 0, hwWalk, g0 + 0.03, g1 + 0.03, null);

      if (kind === 0) {
        // 2. lòng đường
        ribbon(bucket(mx, mz, 'asphalt'), x0, z0, x1, z1, nx, nz, 0, hwRoad, g0 + 0.045, g1 + 0.045, null);
        const bm = bucket(mx, mz, 'mark');
        const y0m = g0 + 0.05, y1m = g1 + 0.05;
        if (oneway) {
          // 4. vạch trắng đứt ở tim đường, 3 m kẻ / 6 m hở
          const s0 = acc, s1 = acc + len;
          const k0 = Math.floor(s0 / CYCLE), k1 = Math.floor(s1 / CYCLE);
          for (let k = k0; k <= k1; k++) {
            const a = Math.max(s0, k * CYCLE), e = Math.min(s1, k * CYCLE + DASH);
            if (e - a <= 0.02) continue;
            const ta = a - s0, te = e - s0;
            const px0 = x0 + tx * ta, pz0 = z0 + tz * ta;
            const px1 = x0 + tx * te, pz1 = z0 + tz * te;
            const f0 = ta / len, f1 = te / len;
            ribbon(bm, px0, pz0, px1, pz1, nx, nz, 0, MARK_W / 2, y0m + (y1m - y0m) * f0, y0m + (y1m - y0m) * f1, WHITE);
          }
        } else {
          // 4. hai vạch vàng liền ở ±0.2 m quanh tim
          ribbon(bm, x0, z0, x1, z1, nx, nz, -0.2, MARK_W / 2, y0m, y1m, YELLOW);
          ribbon(bm, x0, z0, x1, z1, nx, nz, 0.2, MARK_W / 2, y0m, y1m, YELLOW);
        }
      }
      acc += len;
    }

    // 3. lấp mối nối tại các đỉnh gấp khúc bên trong
    for (let i = 2; i + 3 < pts.length; i += 2) {
      const x = pts[i], z = pts[i + 1], g = groundAt(x, z);
      disk(bucket(x, z, 'walk'), x, z, hwWalk, g + 0.03, null);
      if (kind === 0) disk(bucket(x, z, 'asphalt'), x, z, hwRoad, g + 0.045, null);
    }
  }

  // gộp thành 1 mesh / ô / vật liệu
  for (const b of buckets.values()) {
    if (!b.idx.length) continue;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    if (b.col) geo.setAttribute('color', new THREE.Float32BufferAttribute(b.col, 3));
    geo.setIndex(b.idx);
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, mats[b.mat]);
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    group.add(mesh);
  }
  return group;
}

export class NycStreetNet {
  constructor(scene, walkMat) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'nycNet';
    this.group.visible = false;
    scene.add(this.group);

    this.asphalt = withMist(new THREE.MeshStandardMaterial({ color: 0x2d2e30, roughness: 0.92, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    this.mark = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
    this.walk = walkMat;
    this.groundAt = hLow;
    this._visible = false;
    this._loading = false;
    this.built = false;
  }

  set visible(v) {
    v = !!v;
    this._visible = v;
    this.group.visible = v;
    if (v && !this.built && !this._loading) {
      this._loading = true;
      this._build();
    }
  }
  get visible() { return this._visible; }

  async _build() {
    try {
      const res = await fetch('assets/nyc-streets.json');
      const data = await res.json();
      this.streets = data.s;                         // cho bản đồ tròn
      const net = buildNet(THREE, data.s, { asphalt: this.asphalt, walk: this.walk, mark: this.mark }, this.groundAt);
      this.group.add(net);
      this.built = true;
    } catch (err) {
      console.warn('NycStreetNet: cannot load streets', err);
    } finally {
      this._loading = false;
    }
  }
}
