// Map Landmark — khu Vinhomes Central Park (trọng tâm map) theo OpenStreetMap (ODbL), tạo bằng `node scripts/fetch-sgn.mjs`
// => `docs/assets/sgn-env.json` (tải khi vào map): b = nhà [cao, lớp, tên, [x, z, …]] (lớp 0 tháp ≥ 60 m: Park 1–7, Central 1–3, Saigon Pearl…;
// 1 nhà vừa: trường, bệnh viện; 2 biệt thự mái dốc), g = mặt đất [kiểu 0 cỏ / công viên, 1 sân thể thao, 2 sân chơi, [x, z, …]],
// w = mặt nước [kiểu 0 sông Sài Gòn / rạch, 1 hồ, 2 hồ bơi, 3 đài phun nước, …], t = cây OSM [x, z].
// Thêm: cây rải trong công viên / bãi cỏ (tránh nhà, nước, lòng đường) + hàng cây hai bên đường nội khu. Bố cục đối chiếu bản vẽ quy hoạch chú gửi.
import * as THREE from 'three';
import { withMist } from './mist.js';
import { SgnTrees } from './sgnTrees.js';

// mặt tiền chung cư Vinhomes (theo ảnh chú gửi): tường trắng xám nhạt, cửa kính tối có lan can ban công trắng, 2 sọc dọc xám đậm (lõi thang / cột)
// mỗi ô texture; emissive = cửa sổ sáng ban đêm (ngẫu nhiên). 1 ô = 6 khoang × 18 m ngang, 8 tầng × 26.4 m cao
function vhFacade(v = 0) {   // v: 0 trắng sọc xám đậm, 1 xám đậm sọc trắng, 2 kem sọc xám nhạt (mỗi tháp 1 kiểu)
  const W = 256, H = 256, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d');
  let seed = 7 + v * 31; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const [wall, core, rail] = [['#e4e4e0', '#5f6266', '#f7f7f4'], ['#6e7378', '#e6e6e2', '#d9dbd8'], ['#ece4d4', '#9a958a', '#fbf8f0']][v];
  g.fillStyle = wall; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const fh = H / 8, cw = W / 6;
  for (let fy = 0; fy < 8; fy++) for (let fx = 0; fx < 6; fx++) {
    if (fx === 2) continue;                                          // khoang lõi thang (sọc xám đậm vẽ sau)
    const x = fx * cw + 5, y = fy * fh + 5, w = cw - 10, h = fh - 10;
    g.fillStyle = r() < 0.5 ? '#3c444c' : '#4a535c'; g.fillRect(x, y, w, h);          // kính tối
    g.fillStyle = 'rgba(190,205,215,0.35)'; g.fillRect(x, y, w * 0.45, h);             // phản chiếu trời
    g.fillStyle = rail; g.fillRect(x - 3, y + h - 6, w + 6, 2); g.fillRect(x - 3, y + h, w + 6, 4);   // lan can + sàn ban công
    if (r() < 0.45) { ge.fillStyle = r() < 0.7 ? '#ffd9a0' : '#fff2d8'; ge.fillRect(x + 1, y + 1, w - 2, h - 8); }
  }
  g.fillStyle = core; g.fillRect(2 * cw + 6, 0, cw - 12, H);                     // sọc dọc xám đậm (lõi)
  g.fillStyle = '#6c6f73'; g.fillRect(5 * cw + cw - 6, 0, 6, H);                       // cột góc
  const t = new THREE.CanvasTexture(c), te = new THREE.CanvasTexture(e);
  for (const x of [t, te]) { x.wrapS = x.wrapT = THREE.RepeatWrapping; x.anisotropy = 4; }
  t.colorSpace = THREE.SRGBColorSpace; te.colorSpace = THREE.SRGBColorSpace;
  return [t, te];
}
// đế tháp (2–3 tầng, cao 9 m): xám đậm, kính cửa hàng sáng ấm; emissive = đèn cửa hàng
function podiumTex() {
  const W = 256, H = 64, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d');
  g.fillStyle = '#55595e'; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  for (let k = 0; k < 4; k++) {
    const x = k * 64 + 6;
    g.fillStyle = '#2c3238'; g.fillRect(x, 26, 52, 36); g.fillStyle = 'rgba(255,220,170,0.35)'; g.fillRect(x, 26, 52, 36);
    g.fillStyle = ['#2f5b3a', '#e9e3d4', '#7a2a24', '#1f3a5c'][k]; g.fillRect(x, 16, 52, 8);     // bảng hiệu
    ge.fillStyle = '#ffcf90'; ge.fillRect(x, 26, 52, 36);
    g.fillStyle = '#3e4246'; g.fillRect(x + 4, 4, 44, 8);                                        // dải kính tầng 2
  }
  const t = new THREE.CanvasTexture(c), te = new THREE.CanvasTexture(e);
  for (const x of [t, te]) { x.wrapS = x.wrapT = THREE.RepeatWrapping; }
  t.colorSpace = THREE.SRGBColorSpace; te.colorSpace = THREE.SRGBColorSpace;
  return [t, te];
}

export class SgnEnv {
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.obb = []; this.foot = null; this.winK = 1; this.walk = 4;   // walk: bề rộng vỉa hè tuyến (main đặt)
    this.walls = [0, 1, 2].map((v) => { const [map, em] = vhFacade(v); return withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.55, metalness: 0.05 })); });
    this.wall = this.walls[0];
    const [pm, pe] = podiumTex();
    this.podium = withMist(new THREE.MeshStandardMaterial({ map: pm, emissiveMap: pe, emissive: 0xffffff, emissiveIntensity: 0.1, roughness: 0.5 }));
    this.mid = withMist(new THREE.MeshStandardMaterial({ color: 0xe6e0d4, roughness: 0.8 }));
    this.villa = withMist(new THREE.MeshStandardMaterial({ color: 0xf1f1ed, roughness: 0.85 }));
    this.roof = withMist(new THREE.MeshStandardMaterial({ color: 0xcfd0cc, roughness: 0.9 }));
    this.tile = withMist(new THREE.MeshStandardMaterial({ color: 0x4a4f57, roughness: 0.7 }));        // mái dốc biệt thự (ngói xám)
    const flat = (color, rough = 1, extra = {}) => withMist(new THREE.MeshStandardMaterial({ color, roughness: rough, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, ...extra }));
    this.ground = [flat(0x5f8a3e), flat(0x3f7a4a), flat(0xc8b38a)];                                // cỏ, sân thể thao, sân chơi
    this.lawn = flat(0x7a9160);
    this.paving = flat(0xffffff, 0.75, { map: pavingTex() });   // quảng trường đi bộ quanh chân Landmark 81 (đá lát ô bàn cờ)
    this.jetMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending });
    this.t = 0; this.lampK = 0;                                       // nền cả khu (thảm cỏ cắt tỉa) — dưới cỏ công viên / nước
    this.water = [flat(0x2f5568, 0.12, { metalness: 0.2 }), flat(0x3b6b78, 0.1, { metalness: 0.2 }), flat(0x4fb3c8, 0.08), flat(0x7cc4d4, 0.1)];
    this.trunk = withMist(new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 }));
    this.leaf = withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true }));
    this.treeDetail = true; this.treesVisible = true;               // main đặt lại theo localStorage khi vào map
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  // tia nước đài phun: nhấp nhô theo thời gian, ban đêm sáng màu (xanh ngọc / hồng / trắng như ảnh đêm chú gửi)
  update(dt, cam) {
    if (this.treeSet) this.treeSet.update(dt, cam);                // cây: chia model chi tiết / low-poly theo camera
    if (!this.jets || !this.group.visible) return;
    this.t += dt;
    const J = this.jets, m4 = this._m4 || (this._m4 = new THREE.Matrix4());
    for (let i = 0; i < J.list.length; i++) {
      const [x, y, z, ph] = J.list[i], h = 1.2 + 1.6 * (0.5 + 0.5 * Math.sin(this.t * 1.7 + ph));
      m4.makeScale(1, h, 1).setPosition(x, y, z); J.mesh.setMatrixAt(i, m4);
    }
    J.mesh.instanceMatrix.needsUpdate = true;
    this.jetMat.opacity = 0.35 + 0.45 * this.lampK;
  }
  setLamps(k) {
    this.lampK = k; for (const m of this.walls) m.emissiveIntensity = 1.3 * k * this.winK; this.podium.emissiveIntensity = (0.1 + 1.2 * k) * this.winK; }
  setTreeDetail(v) { this.treeDetail = !!v; if (this.treeSet) this.treeSet.setDetail(v); }
  setTreesVisible(v) { this.treesVisible = !!v; if (this.treeSet) this.treeSet.setVisible(v); }

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
    const walls = [mk(), mk(), mk()], towers = [mk(), mk(), mk()], pods = mk(), roofs = mk(), tiles = mk(), grounds = [mk(), mk(), mk()], waters = [mk(), mk(), mk(), mk()];
    const blockers = [];                                      // [minx, minz, maxx, maxz, pts] nhà + nước: không trồng cây vào
    // ---- nhà ----
    for (const [h, cls, , pts] of D.b) {
      const n = pts.length / 2;
      let cx = 0, cz = 0, x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < n; i++) { const x = pts[2 * i], z = pts[2 * i + 1]; cx += x; cz += z; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
      cx /= n; cz /= n; blockers.push([x0 - 2, z0 - 2, x1 + 2, z1 + 2, pts]);
      const y0 = G(cx, cz) - 0.5, wallH = cls === 2 ? Math.max(4, h - 3) : h, y1 = y0 + 0.5 + wallH;
      let area = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; area += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1]; }
      const sg = area > 0 ? 1 : -1, B = cls === 0 ? towers[Math.floor(hash(cx, cz) * 3)] : walls[cls];
      let per = (cx * 7.31 + cz * 3.17) % 24;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, ax = pts[2 * i], az = pts[2 * i + 1], bx = pts[2 * j], bz = pts[2 * j + 1], L = Math.hypot(bx - ax, bz - az);
        if (L < 0.05) continue;
        const nx = sg * (bz - az) / L, nz = -sg * (bx - ax) / L;
        // tháp: đế 9 m xám đậm (cửa hàng), phía trên mặt tiền căn hộ; uv: 1 ô texture = 6 khoang × 18 m ngang, 8 tầng × 26.4 m cao
        const yp = cls === 0 ? y0 + 9.5 : y0;
        if (yp > y0) quad(pods, [[ax, y0, az], [bx, y0, bz], [bx, yp, bz], [ax, yp, az]], [nx, 0, nz], [[per / 32, 0], [(per + L) / 32, 0], [(per + L) / 32, 1], [per / 32, 1]]);
        quad(B, [[ax, yp, az], [bx, yp, bz], [bx, y1, bz], [ax, y1, az]], [nx, 0, nz], [[per / 18, (yp - y0) / 26.4], [(per + L) / 18, (yp - y0) / 26.4], [(per + L) / 18, (y1 - y0) / 26.4], [per / 18, (y1 - y0) / 26.4]]);
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
    // nền cả khu: lưới ô 6 m trong ranh `this.base` (đa giác [x, z][]), chừa lòng đường + vỉa hè tuyến (this.avoidRoad), cao hơn đất 15 cm
    const lawn = mk(), pave = mk(), PL = this.plaza;          // PL: { x, z, r } tâm + bán kính quảng trường đi bộ (main đặt)
    const inPlaza = (x, z) => PL && (x - PL.x) ** 2 + (z - PL.z) ** 2 < PL.r * PL.r;
    if (this.base) {
      const P = this.base.flat(), C = 6;
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (const [x, z] of this.base) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
      // roadGap(x, z): khoảng còn trống tới mép lòng đường (âm = trên mặt nhựa); ô sát đường chia nhỏ 2 m để luồn kín dưới vỉa hè
      const cell = (x, z, c) => {
        // ô lớn: theo góc cao nhất (đất gồ không trồi lên); ô nhỏ sát đường: góc thấp nhất (không trồi lên mặt vỉa hè)
        const B = inPlaza(x + c / 2, z + c / 2) ? pave : lawn;
        const y = (c < C ? Math.min : Math.max)(G(x, z), G(x + c, z), G(x, z + c), G(x + c, z + c)) + (c < C ? 0.08 : 0.12), b0 = B.pos.length / 3;
        B.pos.push(x, y, z, x + c, y, z, x + c, y, z + c, x, y, z + c); B.nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0); B.uv.push(x / 4, z / 4, (x + c) / 4, z / 4, (x + c) / 4, (z + c) / 4, x / 4, (z + c) / 4);
        B.idx.push(b0, b0 + 2, b0 + 1, b0, b0 + 3, b0 + 2);
      };
      for (let x = x0; x < x1; x += C) for (let z = z0; z < z1; z += C) {
        if (!inPoly(x + C / 2, z + C / 2, P)) continue;
        const gap = this.roadGap ? this.roadGap(x + C / 2, z + C / 2) : Infinity;
        // mép cỏ: ô 2 m có tâm cách mép nhựa > vỉa hè − 1 m => mọi góc ô nằm dưới vỉa hè (cỏ thấp hơn mặt vỉa hè, không hở đất), cách mặt nhựa ≥ 1.6 m
        if (gap > this.walk + C) { cell(x, z, C); continue; }
        for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const sx = x + i * 2, sz = z + j * 2; if (this.roadGap(sx + 1, sz + 1) > this.walk - 1) cell(sx, sz, 2); }
      }
    }
    // bãi cỏ / sân OSM: dựng theo ô 3 m (tâm ô trong đa giác) chừa lòng đường + vỉa hè tuyến như nền — đa giác OSM lệch vài m so với đường
    // đã làm mượt, nếu dựng nguyên đa giác sẽ trùm lên làn xe. Bãi cỏ trong quảng trường: thay bằng đá lát (nền)
    for (const [k, pts] of D.g) {
      if (k === 0 && inPlaza(pts[0], pts[1])) continue;
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
      const B = grounds[k], c = 3;
      for (let x = x0; x < x1; x += c) for (let z = z0; z < z1; z += c) {
        if (!inPoly(x + c / 2, z + c / 2, pts) || (this.roadGap && this.roadGap(x + c / 2, z + c / 2) < this.walk + 1.5)) continue;
        const y = Math.max(G(x, z), G(x + c, z), G(x, z + c), G(x + c, z + c)) + 0.22, b0 = B.pos.length / 3;
        B.pos.push(x, y, z, x + c, y, z, x + c, y, z + c, x, y, z + c); B.nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0); B.uv.push(0, 0, 0, 0, 0, 0, 0, 0);
        B.idx.push(b0, b0 + 2, b0 + 1, b0, b0 + 3, b0 + 2);
      }
    }   // cao hơn mặt đất 22 cm: lưới địa hình thô không trồi lên che
    const jets = [];
    for (const [k, pts] of D.w) {
      flatPoly(waters[k], pts, k === 0 ? 0.3 : 0.28);
      if (k === 3) {                                      // đài phun: tia nước rải trong đa giác, cách nhau ~2.5 m (tối đa 40 / đài)
        let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
        for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
        let n = 0;
        for (let x = x0 + 1.2; x < x1 && n < 40; x += 2.5) for (let z = z0 + 1.2; z < z1 && n < 40; z += 2.5) {
          if (!inPoly(x, z, pts)) continue;
          jets.push([x, G(x, z) + 0.3, z, hash(x, z) * 6.28, n % 5 === 0 ? 2 : (Math.floor(x / 10 + z / 7) & 1)]); n++;
        }
      }
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
      blockers.push([x0, z0, x1, z1, pts]);
    }
    if (jets.length) this._jets(jets);
    let tris = 0;
    walls.forEach((B, k) => { tris += mesh(this.group, B, [this.wall, this.mid, this.villa][k]); });
    towers.forEach((B, k) => { tris += mesh(this.group, B, this.walls[k]); });
    tris += mesh(this.group, pods, this.podium);
    tris += mesh(this.group, roofs, this.roof); tris += mesh(this.group, tiles, this.tile);
    tris += mesh(this.group, lawn, this.lawn, false); tris += mesh(this.group, pave, this.paving, false);
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
      // sát đường (cách mép nhựa < 50 m) dày gấp ~2 (khách đi đường thấy công viên rậm), sâu trong công viên thưa hơn
      const want = Math.min(700, Math.round(polyArea(pts) / 80));
      for (let tries = 0, got = 0; tries < want * 4 && got < want && trees.length < 4200; tries++) {
        const x = x0 + (x1 - x0) * r(), z = z0 + (z1 - z0) * r();
        if (!inPoly(x, z, pts) || blocked(x, z) || (this.avoid && this.avoid(x, z))) continue;
        if (this.roadGap && this.roadGap(x, z) > 50 && r() < 0.55) continue;
        trees.push([x, z]); got++;
      }
    }
    for (const p of this.street || []) if (!blocked(p[0], p[1])) trees.push(p);
    // quảng trường đi bộ: cọ rải ~1 cây / 260 m² (không trùng nhà, nước, đường, chân tháp 60 m)
    if (PL) for (let i = 0; i < Math.PI * PL.r * PL.r / 260; i++) {
      const a = r() * 6.283, d = PL.r * Math.sqrt(r()), x = PL.x + Math.cos(a) * d, z = PL.z + Math.sin(a) * d;
      if (!blocked(x, z) && !(this.avoid && this.avoid(x, z)) && (x - PL.x) ** 2 + (z - PL.z) ** 2 > 60 * 60) trees.push([x, z, 1]);
    }
    this._trees(trees);
    this.count = { buildings: D.b.length, tris, trees: trees.length };
    // ô công viên / cỏ (lưới 4 m) cho người dạo công viên (cityPeople.parkAt): Set khoá 'gx,gz'
    this.parkCells = new Set();
    for (const [k, pts] of D.g) {
      if (k !== 0) continue;
      let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]); }
      for (let x = Math.floor(x0 / 4) * 4; x < x1; x += 4) for (let z = Math.floor(z0 / 4) * 4; z < z1; z += 4) if (inPoly(x + 2, z + 2, pts) && !blocked(x + 2, z + 2)) this.parkCells.add((x / 4) + ',' + (z / 4));
    }
  }
  // (x, z) nằm trên bãi cỏ công viên (không nhà / nước)?
  inPark(x, z) { return !!this.parkCells && this.parkCells.has(Math.floor(x / 4) + ',' + Math.floor(z / 4));
  }

  // tia nước: hình nón hẹp cao 1 m (scale y theo thời gian), màu theo kiểu (0 xanh ngọc, 1 hồng, 2 trắng)
  _jets(list) {
    const geo = new THREE.ConeGeometry(0.22, 1, 6, 1, true).translate(0, 0.5, 0);
    const im = new THREE.InstancedMesh(geo, this.jetMat, list.length), col = new THREE.Color(), C = [0x3fe0e8, 0xff5fc8, 0xf2f6ff];
    list.forEach((j, i) => im.setColorAt(i, col.set(C[j[4]])));
    im.instanceColor.needsUpdate = true; im.frustumCulled = false; im.renderOrder = 2;
    this.group.add(im); this.jets = { mesh: im, list };
  }
  // cây: SgnTrees quản lý cả bản GLB chi tiết (gần 100 m) lẫn low-poly instanced (xa / khi chưa tải xong)
  _trees(list) {
    this.treeSet = new SgnTrees(this.group, this.groundAt, list, {
      trunk: this.trunk, leaf: this.leaf, detail: this.treeDetail, visible: this.treesVisible,
    });
  }
}

// đá lát quảng trường: ô vuông 2 m xám sáng / xám xanh xen kẽ (bàn cờ như ảnh flycam), mạch vữa mảnh
function pavingTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#8e9396' : '#c9c8c2'; g.fillRect(i * 64, j * 64, 64, 64); }
  g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 2; for (let k = 0; k <= 128; k += 64) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, 128); g.moveTo(0, k); g.lineTo(128, k); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
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
