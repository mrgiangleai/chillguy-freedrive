// Map Landmark — khu Vinhomes Central Park (trọng tâm map) theo OpenStreetMap (ODbL), tạo bằng `node scripts/fetch-sgn.mjs`
// => `docs/assets/sgn-env.json` (tải khi vào map): b = nhà [cao, lớp, tên, [x, z, …]] (lớp 0 tháp ≥ 60 m: Park 1–7, Central 1–3, Saigon Pearl…;
// 1 nhà vừa: trường, bệnh viện; 2 biệt thự mái dốc), g = mặt đất [kiểu 0 cỏ / công viên, 1 sân thể thao, 2 sân chơi, [x, z, …]],
// w = mặt nước [kiểu 0 sông Sài Gòn / rạch, 1 hồ, 2 hồ bơi, 3 đài phun nước, …], t = cây OSM [x, z].
// Thêm: cây rải trong công viên / bãi cỏ (tránh nhà, nước, lòng đường) + hàng cây hai bên đường nội khu. Bố cục đối chiếu bản vẽ quy hoạch chú gửi.
import * as THREE from 'three';
import { withMist } from './mist.js';

// mặt tiền chung cư Vinhomes: tường kem, dải kính xanh xám theo tầng (3.3 m), ban công trắng; emissive = cửa sổ sáng ban đêm (ngẫu nhiên)
function vhFacade() {
  const W = 256, H = 256, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d');
  let seed = 7; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  g.fillStyle = '#d9d2c3'; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const fh = H / 8, cw = W / 6;                                     // 8 tầng × 6 khoang mỗi ô texture
  for (let fy = 0; fy < 8; fy++) for (let fx = 0; fx < 6; fx++) {
    const x = fx * cw + 4, y = fy * fh + 6, w = cw - 8, h = fh - 11;
    g.fillStyle = r() < 0.5 ? '#5d7387' : '#4c6274'; g.fillRect(x, y, w, h);
    g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x, y, w, 3);
    g.fillStyle = '#f2efe8'; g.fillRect(x - 3, y + h + 1, w + 6, 3);          // gờ ban công
    if (r() < 0.32) { ge.fillStyle = r() < 0.7 ? '#ffd9a0' : '#fff2d8'; ge.fillRect(x + 1, y + 1, w - 2, h - 2); }
  }
  for (let fx = 0; fx <= 6; fx++) { g.fillStyle = '#c9c1b0'; g.fillRect(fx * cw - 1, 0, 3, H); }
  const t = new THREE.CanvasTexture(c), te = new THREE.CanvasTexture(e);
  for (const x of [t, te]) { x.wrapS = x.wrapT = THREE.RepeatWrapping; x.anisotropy = 4; }
  t.colorSpace = THREE.SRGBColorSpace; te.colorSpace = THREE.SRGBColorSpace;
  return [t, te];
}

export class SgnEnv {
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.obb = []; this.foot = null; this.winK = 1;
    const [map, em] = vhFacade();
    this.wall = withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.55, metalness: 0.05 }));
    this.mid = withMist(new THREE.MeshStandardMaterial({ color: 0xe6e0d4, roughness: 0.8 }));
    this.villa = withMist(new THREE.MeshStandardMaterial({ color: 0xefe8da, roughness: 0.85 }));
    this.roof = withMist(new THREE.MeshStandardMaterial({ color: 0x8d8f8c, roughness: 0.9 }));
    this.tile = withMist(new THREE.MeshStandardMaterial({ color: 0x4a4f57, roughness: 0.7 }));        // mái dốc biệt thự (ngói xám)
    const flat = (color, rough = 1, extra = {}) => withMist(new THREE.MeshStandardMaterial({ color, roughness: rough, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, ...extra }));
    this.ground = [flat(0x5f8a3e), flat(0x3f7a4a), flat(0xc8b38a)];                                // cỏ, sân thể thao, sân chơi
    this.water = [flat(0x2f5568, 0.12, { metalness: 0.2 }), flat(0x3b6b78, 0.1, { metalness: 0.2 }), flat(0x4fb3c8, 0.08), flat(0x7cc4d4, 0.1)];
    this.trunk = withMist(new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 }));
    this.leaf = withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true }));
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.wall.emissiveIntensity = 1.1 * k * this.winK; }

  async _load() {
    this.state = 'loading';
    try {
      const D = await fetch('assets/sgn-env.json').then((r) => r.json());
      this.foot = D.b;
      this._build(D);
      this.state = 'ready';
      if (this.onReady) this.onReady();
    } catch (e) { console.warn('sgn-env', e); this.state = 'idle'; }
  }

  // street: [{ x, z, nx, nz }] điểm đặt hàng cây hai bên đường nội khu (main truyền vào, theo tuyến + bề rộng đường)
  _build(D) {
    const G = this.groundAt;
    const walls = [mk(), mk(), mk()], roofs = mk(), tiles = mk(), grounds = [mk(), mk(), mk()], waters = [mk(), mk(), mk(), mk()];
    const blockers = [];                                      // [minx, minz, maxx, maxz, pts] nhà + nước: không trồng cây vào
    // ---- nhà ----
    for (const [h, cls, , pts] of D.b) {
      const n = pts.length / 2;
      let cx = 0, cz = 0, x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < n; i++) { const x = pts[2 * i], z = pts[2 * i + 1]; cx += x; cz += z; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
      cx /= n; cz /= n; blockers.push([x0 - 2, z0 - 2, x1 + 2, z1 + 2, pts]);
      const y0 = G(cx, cz) - 0.5, wallH = cls === 2 ? Math.max(4, h - 3) : h, y1 = y0 + 0.5 + wallH;
      let area = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; area += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1]; }
      const sg = area > 0 ? 1 : -1, B = walls[cls];
      let per = (cx * 7.31 + cz * 3.17) % 24;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, ax = pts[2 * i], az = pts[2 * i + 1], bx = pts[2 * j], bz = pts[2 * j + 1], L = Math.hypot(bx - ax, bz - az);
        if (L < 0.05) continue;
        const nx = sg * (bz - az) / L, nz = -sg * (bx - ax) / L;
        // uv: 1 ô texture = 6 khoang × 18 m ngang, 8 tầng × 26.4 m cao
        quad(B, [[ax, y0, az], [bx, y0, bz], [bx, y1, bz], [ax, y1, az]], [nx, 0, nz], [[per / 18, 0], [(per + L) / 18, 0], [(per + L) / 18, (y1 - y0) / 26.4], [per / 18, (y1 - y0) / 26.4]]);
        per += L;
      }
      const shape = []; for (let i = 0; i < n; i++) shape.push(new THREE.Vector2(pts[2 * i], pts[2 * i + 1]));
      const tris = THREE.ShapeUtils.triangulateShape(shape, []);
      if (cls === 2) {                                         // biệt thự: mái dốc 4 phía về đỉnh ở tâm (cao 3 m)
        const top = [cx, y1 + 3, cz];
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n, a = [pts[2 * i], y1, pts[2 * i + 1]], b = [pts[2 * j], y1, pts[2 * j + 1]];
          const ux = b[0] - a[0], uz = b[2] - a[2], vx = top[0] - a[0], vy = 3, vz = top[2] - a[2];
          let nx = -uz * vy, ny = uz * vx - ux * vz, nz = ux * vy;           // pháp tuyến = (b − a) × (đỉnh − a), lật cho hướng lên
          const l = Math.hypot(nx, ny, nz) || 1; if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
          tri(tiles, a, b, top, [nx / l, ny / l, nz / l]);
        }
      } else {
        upPoly(roofs, shape, tris, y1);
      }
      // obb camera: trục theo cạnh dài nhất
      let bi = 0, bl = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n, l = Math.hypot(pts[2 * j] - pts[2 * i], pts[2 * j + 1] - pts[2 * i + 1]); if (l > bl) { bl = l; bi = i; } }
      const j = (bi + 1) % n, th = Math.atan2(pts[2 * j + 1] - pts[2 * bi + 1], pts[2 * j] - pts[2 * bi]), cs = Math.cos(th), sn = Math.sin(th);
      let a0 = Infinity, a1 = -Infinity, f0 = Infinity, f1 = -Infinity;
      for (let i = 0; i < n; i++) { const ex = pts[2 * i] - cx, ez = pts[2 * i + 1] - cz, lx = ex * cs - ez * sn, lz = ex * sn + ez * cs; a0 = Math.min(a0, lx); a1 = Math.max(a1, lx); f0 = Math.min(f0, lz); f1 = Math.max(f1, lz); }
      const mx = (a0 + a1) / 2, mz = (f0 + f1) / 2;
      this.obb.push(cx + mx * cs + mz * sn, cz - mx * sn + mz * cs, cs, sn, (a1 - a0) / 2, (f1 - f0) / 2, y1);
    }
    // ---- mặt đất + mặt nước: đa giác phẳng, cao hơn mặt đất (lấy ở các đỉnh) một chút ----
    const flatPoly = (B, pts, dy) => {
      const n = pts.length / 2; if (n < 3) return;
      let y = -Infinity; for (let i = 0; i < n; i += Math.max(1, Math.floor(n / 12))) y = Math.max(y, G(pts[2 * i], pts[2 * i + 1]));
      const shape = []; for (let i = 0; i < n; i++) shape.push(new THREE.Vector2(pts[2 * i], pts[2 * i + 1]));
      upPoly(B, shape, THREE.ShapeUtils.triangulateShape(shape, []), y + dy);
    };
    for (const [k, pts] of D.g) flatPoly(grounds[k], pts, 0.06);
    for (const [k, pts] of D.w) {
      flatPoly(waters[k], pts, k === 0 ? 0.12 : 0.1);
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
      blockers.push([x0, z0, x1, z1, pts]);
    }
    let tris = 0;
    walls.forEach((B, k) => { tris += mesh(this.group, B, [this.wall, this.mid, this.villa][k]); });
    tris += mesh(this.group, roofs, this.roof); tris += mesh(this.group, tiles, this.tile);
    grounds.forEach((B, k) => { tris += mesh(this.group, B, this.ground[k], false); });
    waters.forEach((B, k) => { tris += mesh(this.group, B, this.water[k], false); });
    // ---- cây: OSM + rải trong công viên / bãi cỏ (1 cây / ~110 m², tối đa 2 600) + hàng cây đường nội khu ----
    const blocked = (x, z) => blockers.some(([a, b, c, d, P]) => x > a && x < c && z > b && z < d && inPoly(x, z, P));
    const trees = D.t.map(([x, z]) => [x, z]);
    let seed = 11; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (const [k, pts] of D.g) {
      if (k !== 0) continue;
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
      const want = Math.min(400, Math.round(polyArea(pts) / 110));
      for (let tries = 0, got = 0; tries < want * 4 && got < want && trees.length < 2600; tries++) {
        const x = x0 + (x1 - x0) * r(), z = z0 + (z1 - z0) * r();
        if (!inPoly(x, z, pts) || blocked(x, z) || (this.avoid && this.avoid(x, z))) continue;
        trees.push([x, z]); got++;
      }
    }
    for (const p of this.street || []) if (!blocked(p[0], p[1])) trees.push(p);
    this._trees(trees, r);
    this.count = { buildings: D.b.length, tris, trees: trees.length };
  }

  // cây low-poly instanced: 70 % cây tán tròn (thân + khối 20 mặt, xanh đậm nhạt khác nhau), 30 % cọ (thân cao + 7 lá xòe)
  _trees(list, r) {
    const G = this.groundAt, round = [], palm = [];
    for (const p of list) (r() < 0.3 ? palm : round).push(p);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
    const place = (geo, mat, pts, size, color) => {
      const im = new THREE.InstancedMesh(geo, mat, pts.length);
      pts.forEach(([x, z], i) => {
        const k = size[0] + (size[1] - size[0]) * hash(x, z);
        q.setFromAxisAngle(up, hash(z, x) * 6.283); m4.compose(v.set(x, G(x, z) - 0.1, z), q, sc.set(k, k, k)); im.setMatrixAt(i, m4);
        if (color) im.setColorAt(i, col.setHSL(color[0] + 0.05 * hash(x + 1, z), color[1], color[2] + 0.1 * hash(x, z + 1)));
      });
      if (color) im.instanceColor.needsUpdate = true;
      im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false; this.group.add(im);
    };
    const trunk = new THREE.CylinderGeometry(0.16, 0.24, 3, 6).translate(0, 1.5, 0);
    const crown = new THREE.IcosahedronGeometry(2.3, 0).scale(1, 0.85, 1).translate(0, 4.4, 0);
    place(trunk, this.trunk, round, [0.8, 1.3]);
    place(crown, this.leaf, round, [0.8, 1.3], [0.27, 0.45, 0.24]);
    const ptrunk = new THREE.CylinderGeometry(0.14, 0.22, 7, 6).translate(0, 3.5, 0);
    const fronds = new THREE.BufferGeometry(), P = [];
    for (let k = 0; k < 7; k++) {                     // lá cọ: tam giác dài xòe xuống
      const a = k / 7 * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      P.push(0, 7, 0, ca * 3.2 - sa * 0.5, 6.2, sa * 3.2 + ca * 0.5, ca * 3.2 + sa * 0.5, 6.2, sa * 3.2 - ca * 0.5);
    }
    fronds.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); fronds.computeVertexNormals();
    const fm = this.leaf.clone(); fm.side = THREE.DoubleSide;
    place(ptrunk, this.trunk, palm, [0.85, 1.25]);
    place(fronds, fm, palm, [0.85, 1.25], [0.25, 0.5, 0.28]);
  }
}

const hash = (x, z) => { const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453; return s - Math.floor(s); };
const inPoly = (x, z, P) => { let c = false; for (let i = 0, j = P.length - 2; i < P.length; j = i, i += 2) if ((P[i + 1] > z) !== (P[j + 1] > z) && x < P[i] + (P[j] - P[i]) * (z - P[i + 1]) / (P[j + 1] - P[i + 1])) c = !c; return c; };
const polyArea = (p) => { let a = 0; for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) a += (p[j] - p[i]) * (p[j + 1] + p[i + 1]); return Math.abs(a / 2); };
const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
// đa giác nằm ngang ở cao y, mỗi tam giác xếp đỉnh cho mặt quay lên (+y)
function upPoly(B, shape, tris, y) {
  const b0 = B.pos.length / 3;
  for (const p of shape) { B.pos.push(p.x, y, p.y); B.nor.push(0, 1, 0); B.uv.push(p.x / 20, p.y / 20); }
  for (const [i, j, k] of tris) {
    const a = shape[i], b = shape[j], c = shape[k], cy = (b.y - a.y) * (c.x - a.x) - (b.x - a.x) * (c.y - a.y);
    if (cy > 0) B.idx.push(b0 + i, b0 + j, b0 + k); else B.idx.push(b0 + i, b0 + k, b0 + j);
  }
}
function quad(B, V, N, U) {
  const b = B.pos.length / 3;
  for (let i = 0; i < 4; i++) { B.pos.push(...V[i]); B.nor.push(...N); B.uv.push(...U[i]); }
  const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
  const d = (ay * bz - az * by) * N[0] + (az * bx - ax * bz) * N[1] + (ax * by - ay * bx) * N[2];
  if (d >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
}
function tri(B, a, b, c, N) {
  const i = B.pos.length / 3;
  B.pos.push(...a, ...b, ...c); B.nor.push(...N, ...N, ...N); B.uv.push(0, 0, 0, 0, 0, 0);
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  const d = (uy * vz - uz * vy) * N[0] + (uz * vx - ux * vz) * N[1] + (ux * vy - uy * vx) * N[2];
  if (d >= 0) B.idx.push(i, i + 1, i + 2); else B.idx.push(i, i + 2, i + 1);
}
function mesh(group, B, mat, shadow = true) {
  if (!B.idx.length) return 0;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
  g.setIndex(B.idx);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = shadow; m.receiveShadow = true; m.frustumCulled = false;
  group.add(m);
  return B.idx.length / 3;
}
