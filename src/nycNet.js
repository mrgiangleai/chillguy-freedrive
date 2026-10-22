// Map New York — mạng đường thật quanh tuyến (OSM, docs/assets/nyc-streets.json): mặt nhựa, vỉa hè, vạch tim đường; nhìn dọc phố ngang thấy phố thông sang đại lộ bên cạnh. Bản nháp DeepSeek theo đề, Claude soát.
// Map New York — mạng phố thật (vỉa hè + lòng đường + vạch kẻ) dựng từ nyc-streets.json.
// Mỗi đoạn phố được cắt theo lưới 300 m, gộp thành 1 mesh / ô / vật liệu để vẽ nhanh.
import * as THREE from 'three';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';
import { NYC, NYC_DIM, nycElev, nycElevKeys } from './nyc.js';

const CELL = 300;          // kích thước ô lưới (m)
export const SIDE_EXTRA = 4;      // vỉa hè rộng thêm mỗi bên (phố xe)
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

// vùng lòng đường của tuyến ở mặt phố + dốc hở 2 đầu hầm / cầu cạn (không tính đoạn có nắp hầm — phố ngang chạy trên nắp — và đoạn cầu
// cao ≥ 4.2 m — phố ngang chạy dưới gầm): hit(x, z, r) = đĩa bán kính r quanh (x, z) chạm lòng đường
// (cách tim tuyến < hw). Dùng để không vẽ phố OSM đè lên làn xe của tuyến (vd. Broadway chạy gần song song 7th Ave ở Times Square).
export function routeMask(D, elev, hw) {
  const G = 20, cells = new Map(), n = D.x.length;
  for (let i = 0; i + 1 < n; i++) {
    const e = Math.min(elev(i * D.step), elev((i + 1) * D.step)), eh = Math.max(elev(i * D.step), elev((i + 1) * D.step));
    if (eh <= NYC.roof || e >= 4.2) continue;
    const k = Math.floor(D.x[i] / G) + '|' + Math.floor(D.z[i] / G);
    if (!cells.has(k)) cells.set(k, []);
    cells.get(k).push(i);
  }
  return (x, z, r) => {
    const R = hw + r, cx = Math.floor(x / G), cz = Math.floor(z / G), m = Math.ceil(R / G) + 1;
    for (let a = -m; a <= m; a++) for (let b = -m; b <= m; b++) for (const i of cells.get(cx + a + '|' + (cz + b)) || []) {
      const ax = D.x[i], az = D.z[i], dx = D.x[i + 1] - ax, dz = D.z[i + 1] - az, L2 = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / L2));
      if (Math.hypot(x - ax - dx * t, z - az - dz * t) < R) return true;
    }
    return false;
  };
}

// hai hình chữ nhật xoay chạm nhau? A = (ax, az, ac, as, ahx, ahz) với trục (ac, −as) / (as, ac); B tương tự; B được nới `m` m.
// Dùng chung cho: tòa nổi tiếng vs phố (nycBuildings dò chỗ đặt) và tòa vs mảnh phố đi bộ (cắt ở đây).
export function obbHit(ax, az, ac, as, ahx, ahz, bx, bz, bc, bs, bhx, bhz, m = 0) {
  const dx = bx - ax, dz = bz - az, BX = bhx + m, BZ = bhz + m;
  // trục tách: 2 trục của A ((ac, −as), (as, ac)) và 2 trục của B — không tạo mảng / hàm (gọi rất nhiều lần khi dò chỗ đặt tòa)
  const d1 = ac * bc + as * bs, d2 = as * bc - ac * bs;          // d1 = A1·B1, d2 = A2·B1
  const e1 = as * bc - ac * bs, e2 = as * bs + ac * bc;          // e1 = A1·B2, e2 = A2·B2
  // A1 = (ac, −as): |B1·A1| = |ac·bc + as·bs|, |B2·A1| = |ac·bs − as·bc|
  if (Math.abs(dx * ac - dz * as) > ahx + Math.abs(d1) * BX + Math.abs(e1) * BZ) return false;
  // A2 = (as, ac): |B1·A2| = |as·bc − ac·bs|, |B2·A2| = |as·bs + ac·bc|
  if (Math.abs(dx * as + dz * ac) > ahz + Math.abs(d2) * BX + Math.abs(e2) * BZ) return false;
  // B1 = (bc, −bs): |A1·B1| = |d1|, |A2·B1| = |d2|
  if (Math.abs(dx * bc - dz * bs) > Math.abs(d1) * ahx + Math.abs(d2) * ahz + BX) return false;
  // B2 = (bs, bc): |A1·B2| = |e1|, |A2·B2| = |e2|
  if (Math.abs(dx * bs + dz * bc) > Math.abs(e1) * ahx + Math.abs(e2) * ahz + BZ) return false;
  return true;
}
// mảnh phố (đoạn x0z0→x1z1, nửa rộng hw; x0z0 ≡ x1z1 = đĩa nối, coi là ô vuông ±hw) có chạm khung tòa nào không — dò OBB chính xác
// (`rects`: hàm như `nycBuildings.lmRects`, khung ở `f.rect` = [x, z, c, s, hx, hz]); nới `m` m
export function pieceHitsRects(rects, x0, z0, x1, z1, hw, m = 0) {
  const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz);
  const c = len < 1e-6 ? 1 : dx / len, s = len < 1e-6 ? 0 : -dz / len, hl = len < 1e-6 ? hw : len / 2;
  for (const f of rects) {
    const r = f.rect;
    if (obbHit(r[0], r[1], r[2], r[3], r[4], r[5], (x0 + x1) / 2, (z0 + z1) / 2, c, s, hl, hw, m)) return true;
  }
  return false;
}

// builder thuần: list = mảng street của json, mats = { asphalt, walk, mark }, groundAt(x, z) -> y; onRoute(x, z, r) => bỏ mảnh chạm lòng đường tuyến
// underLm(x0, z0, x1, z1, hw) => bỏ mảnh phố ĐI BỘ (type 1) nằm dưới tòa nổi tiếng (tòa đứng trên quảng trường riêng của nó)
export function buildNet(THREE, list, mats, groundAt, onRoute = () => false, underLm = null, record = false) {
  const group = new THREE.Group();
  group.name = 'nycNet';
  const buckets = new Map(), drawn = [];               // record: ghi mảnh thực sự được vẽ [x0, z0, x1, z1, nửa rộng, loại] (cho script kiểm)
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
     const X0 = pts[i], Z0 = pts[i + 1], X1 = pts[i + 2], Z1 = pts[i + 3], SL = Math.hypot(X1 - X0, Z1 - Z0), NP = Math.max(1, Math.ceil(SL / 2));
     for (let q = 0; q < NP; q++) {                 // mảnh ≤ 2 m: mảnh nào (cả bề rộng vỉa hè) chạm lòng đường tuyến thì bỏ
      const x0 = X0 + (X1 - X0) * q / NP, z0 = Z0 + (Z1 - Z0) * q / NP, x1 = X0 + (X1 - X0) * (q + 1) / NP, z1 = Z0 + (Z1 - Z0) * (q + 1) / NP;
      const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz);
      if (len < 0.5 || onRoute((x0 + x1) / 2, (z0 + z1) / 2, hwWalk + len / 2)) { acc += len; continue; }
      // phố đi bộ dưới tòa nổi tiếng: không vẽ (tòa đứng trên quảng trường riêng); phố xe thì không cắt
      if (kind !== 0 && underLm && underLm(x0, z0, x1, z1, hwWalk)) { acc += len; continue; }
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
      if (record) drawn.push([x0, z0, x1, z1, hwWalk, kind]);
      acc += len;
     }
    }

    // 3. lấp mối nối tại các đỉnh gấp khúc bên trong
    for (let i = 2; i + 3 < pts.length; i += 2) {
      const x = pts[i], z = pts[i + 1], g = groundAt(x, z);
      if (onRoute(x, z, hwWalk)) continue;
      if (kind !== 0 && underLm && underLm(x, z, x, z, hwWalk)) continue;     // đĩa nối dưới tòa nổi tiếng: bỏ
      disk(bucket(x, z, 'walk'), x, z, hwWalk, g + 0.03, null);
      if (kind === 0) disk(bucket(x, z, 'asphalt'), x, z, hwRoad, g + 0.045, null);
      if (record) drawn.push([x, z, x, z, hwWalk, kind]);
    }
  }
  if (record) group.userData.drawn = drawn;

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
    this.lmRects = [];          // khung tòa nổi tiếng (nycBuildings.lmRects): phố đi bộ dưới tòa thì không vẽ
    this.landmarks = null;      // () => lmRects | Promise<lmRects> — lấy TRƯỚC khi dựng (main.js nối vào nycBld)
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
      // khung tòa nổi tiếng (nycBld dựng landmarks bất đồng bộ) — chờ để cắt đúng mảnh phố đi bộ
      // chờ tối đa 8 s (tải nhà treo / lỗi => dựng không cắt phố đi bộ)
      if (this.landmarks) { try { this.lmRects = (await Promise.race([this.landmarks(), new Promise((r) => setTimeout(() => r([]), 8000))])) || []; } catch (e) { this.lmRects = []; } }
      const res = await fetch('assets/nyc-streets.json');
      const data = await res.json();
      this.streets = data.s;                         // cho bản đồ tròn
      const clip = this.lmRects.length ? (x0, z0, x1, z1, hw) => pieceHitsRects(this.lmRects, x0, z0, x1, z1, hw, 0.5) : null;
      const net = buildNet(THREE, data.s, { asphalt: this.asphalt, walk: this.walk, mark: this.mark }, this.groundAt, routeMask(NYC.data, nycElev(nycElevKeys()), NYC_DIM.hw + 0.3), clip);
      this.group.add(net);
      this.built = true;
    } catch (err) {
      console.warn('NycStreetNet: cannot load streets', err);
    } finally {
      this._loading = false;
    }
  }
}
