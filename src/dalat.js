// Map Hồ Xuân Hương – Đà Lạt (🌲, nhóm Chill): vòng khép kín 4.9 km quanh hồ theo đường thật (OpenStreetMap, ODbL), chiều kim đồng hồ
// (hồ bên phải xe). Dữ liệu do `node scripts/fetch-dalat.mjs` tạo từ file urban:EXPORT FBX: `dalat-data.json` (tuyến, độ cao đường, DEM 10 m)
// + docs/assets/dalat/ (dalat-city.glb: nhà / cầu / mặt nước; dalat-trees.json; dalat-streets.json). Toạ độ game: mặt hồ y = 0.
// Dùng lại code vòng của New York (`road.setShape('dalat', loop)`, s quấn vòng) và DEM của map HLG (`TP.dem`) => địa hình đúng FBX.
import * as THREE from 'three';
import DATA from './dalat-data.json' with { type: 'json' };
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { SgnCity } from './sgnCity.js';

export const DALAT = { data: DATA, length: DATA.length, start: DATA.start };

let DEM = null;
// lưới độ cao { x0, z0, cell, nx, nz, h } cho `TP.dem` (demAt nội suy song tuyến)
export function dalatDem() {
  if (DEM) return DEM;
  const D = DATA.dem, bin = atob(D.b64), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  const q = new Int16Array(u8.buffer), h = new Float32Array(q.length);
  for (let i = 0; i < q.length; i++) h[i] = q[i] * D.scale;
  return (DEM = { x0: D.x0, z0: D.z0, cell: D.cell, nx: D.nx, nz: D.nz, h });
}

let LOOP = null;
export function dalatLoop() {
  if (LOOP) return LOOP;
  const L = DATA.length, E = DATA.elev, st = DATA.step;
  const lerp = (A) => (s) => { const r = ((s % L) + L) % L, f = r / st, i = Math.min(A.length - 2, Math.floor(f)), t = f - i; return A[i] + (A[i + 1] - A[i]) * t; };
  // abs(s): cao độ mặt đường tuyệt đối (road.js `_loopPt`), elev(s): chênh so với DEM tại tim đường
  LOOP = { loop: true, length: L, step: st, x: DATA.x, z: DATA.z, heading: DATA.heading, turn: Math.round(DATA.turn / (2 * Math.PI)) * 2 * Math.PI,
    elev: lerp(E), abs: lerp(DATA.road), keys: [], roof: -99, junctions: [], corners: [], streets: [{ s0: 0, name: 'Trần Quốc Toản' }], widths: null };
  return LOOP;
}

// cây thông Đà Lạt: thân + 3 tầng nón (gộp 1 geometry, màu đỉnh), cao 1 m => phóng theo chiều cao cây thật
function pineGeometry() {
  const parts = [], col = (g, hex) => {
    const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
  };
  parts.push(col(new THREE.CylinderGeometry(0.018, 0.028, 0.4, 5).translate(0, 0.2, 0), 0x5a4636));
  [[0.3, 0.42, 0.24], [0.5, 0.34, 0.2], [0.7, 0.26, 0.16], [0.86, 0.17, 0.14]].forEach(([y, r, h], k) =>
    parts.push(col(new THREE.ConeGeometry(r * 0.55, h + 0.12, 7).translate(0, y, 0), [0x2f5a2c, 0x35632f, 0x3b6b33, 0x427338][k])));
  const flat = parts.map((g) => { const f = g.toNonIndexed(); f.deleteAttribute('uv'); return f; });
  let n = 0; for (const g of flat) n += g.attributes.position.count;
  const pos = new Float32Array(n * 3), cl = new Float32Array(n * 3); let o = 0;
  for (const g of flat) { pos.set(g.attributes.position.array, o); cl.set(g.attributes.color.array, o); o += g.attributes.position.array.length; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(cl, 3));
  geo.computeVertexNormals();
  return geo;
}

// cài đặt cây (bảng 🌲 Cây, chỉ map Đà Lạt; lưu `chilldrive.dalat.trees`): bật / tắt, mật độ %, bán kính cây GLB chi tiết (m),
// khoảng cách xa nhất còn vẽ cây nón (m), số cây GLB tối đa. Mặc định thấp vì máy điện thoại treo khi vẽ đủ 20 485 cây + 129 cây GLB × 11k tam giác
export const DALAT_TREE_DEFAULTS = { high: { on: 1, density: 100, lodR: 60, far: 700, maxHi: 120 }, low: { on: 1, density: 60, lodR: 30, far: 400, maxHi: 40 } };
const TREE_KEY = 'chilldrive.dalat.trees', HI_CAP = 1500;

export class DalatScene {
  // groundAt(x, z): độ cao địa hình (DEM) — dải đường phụ / cây đặt theo đó
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.trees = new THREE.Group(); this.group.add(this.trees);
    this.state = 'idle';
    this.lampU = { value: 0 };
    this.lodU = { value: new THREE.Vector3(0, 0, 0) };   // (x, z, R) — tâm + bán kính vùng GLB lúc chia gần nhất (shader nón bỏ cây trong vùng)
    this.kU = { value: new THREE.Vector2(1, 700) };      // (mật độ 0..1, khoảng cách xa nhất cây nón)
    this.onLake = null;                        // (tex, bounds) khi tách xong mặt hồ Xuân Hương (main => ocean.setLake)
    this.lake = null;
    this.jobs = [];                            // việc dựng chia nhỏ, mỗi khung làm tới ~6 ms (vào map không đứng hình)
    this.tune = { ...DALAT_TREE_DEFAULTS.high };
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.lampU.value = Math.max(0, k); }

  // nạp cài đặt đã lưu (không có => mặc định theo chất lượng)
  loadTune(low) {
    this._low = !!low;
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(TREE_KEY) || 'null'); } catch { /* chế độ riêng tư */ }
    this.setTune({ ...DALAT_TREE_DEFAULTS[low ? 'low' : 'high'], ...(saved || {}) }, false);
  }
  resetTune() { try { localStorage.removeItem(TREE_KEY); } catch { /* chế độ riêng tư */ } this.loadTune(this._low); }
  setTune(patch, save = true) {
    Object.assign(this.tune, patch);
    const T = this.tune;
    T.maxHi = Math.min(HI_CAP, Math.max(0, Math.round(T.maxHi)));
    this.trees.visible = !!T.on;
    this.kU.value.set(T.density / 100, T.far);
    this._lodAt = null;                                              // chia lại ngay khung sau
    if (save) try { localStorage.setItem(TREE_KEY, JSON.stringify(T)); } catch { /* chế độ riêng tư */ }
  }

  _load() {
    this.state = 'loading';
    const t0 = performance.now(), got = (name) => this.diag?.step('tải + giải mã ' + name + ' (từ lúc vào)', performance.now() - t0);
    const loader = new GLTFLoader(), job = (name, f) => this.jobs.push({ name, f });
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load('assets/dalat/dalat-city.glb', (gltf) => { got('dalat-city.glb'); job('dựng nhà + nước (city)', () => this._city(gltf.scene)); }, undefined, (e) => console.warn('dalat-city', e));
    fetch('assets/dalat/dalat-streets.json').then((r) => r.json()).then((S) => { got('streets.json'); job(`dải đường (${S.s.length})`, () => this._streets(S.s)); }).catch((e) => console.warn('dalat-streets', e));
    fetch('assets/dalat/dalat-trees.json').then((r) => r.json()).then((T) => { got('trees.json'); job('mảng cây', () => this._trees(T)); }).catch((e) => console.warn('dalat-trees', e));
    loader.load('assets/models/dalat/pine.glb', (gltf) => { got('pine.glb'); job('cây GLB', () => this._pine(gltf.scene)); }, undefined, (e) => console.warn('dalat-pine', e));
  }

  _city(root) {
    const winShader = (shader) => SgnCity.prototype._shader.call({ lampU: this.lampU }, shader);   // cửa sổ sáng ban đêm như map Landmark
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      if (!o.isMesh) return;
      const name = o.material.name || o.name, color = o.material.color.clone();
      if (name === 'WATER') {
        if (this.diag) this.diag.time('cắt tam giác hồ + mặt nạ', () => this._splitLake(o)); else this._splitLake(o);
        // ao / hồ nhỏ khác (cao độ khác mặt hồ): xanh lá đậm, ít lóa
        o.material = new THREE.MeshStandardMaterial({ color: 0x1d3a22, roughness: 0.3, metalness: 0, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
        o.receiveShadow = true;
      } else {
        o.material = new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0 });
        if (name.startsWith('BUILDINGS')) o.material.onBeforeCompile = winShader;
        o.castShadow = o.receiveShadow = true;
      }
      o.matrixAutoUpdate = false; o.updateMatrix();
    });
    this.group.add(root);
    this.state = 'ready';
  }

  // tách tam giác mặt hồ Xuân Hương (y ≈ 0, trong đa giác hồ) khỏi lưới WATER => vẽ mặt nạ canvas cho nước map Biển (ocean.setLake)
  _splitLake(o) {
    const g = o.geometry, P = g.attributes.position, ix = g.index, n = ix ? ix.count : P.count, v = new THREE.Vector3();
    const keep = [], lake = [], poly = DATA.lake;
    const inPoly = (x, z) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) if ((poly[i][1] > z) !== (poly[j][1] > z) && x < poly[i][0] + (poly[j][0] - poly[i][0]) * (z - poly[i][1]) / (poly[j][1] - poly[i][1])) c = !c; return c; };
    for (let t = 0; t < n; t += 3) {
      const tri = [];
      for (let k = 0; k < 3; k++) { v.fromBufferAttribute(P, ix ? ix.getX(t + k) : t + k).applyMatrix4(o.matrixWorld); tri.push(v.x, v.y, v.z); }
      const cx = (tri[0] + tri[3] + tri[6]) / 3, cy = (tri[1] + tri[4] + tri[7]) / 3, cz = (tri[2] + tri[5] + tri[8]) / 3;
      (Math.abs(cy) < 0.4 && inPoly(cx, cz) ? lake : keep).push(...tri);
    }
    const ng = new THREE.BufferGeometry();
    ng.setAttribute('position', new THREE.BufferAttribute(new Float32Array(keep), 3)); ng.computeVertexNormals();
    o.geometry = ng; o.position.set(0, 0, 0); o.scale.set(1, 1, 1); o.quaternion.identity();   // toạ độ đã là thế giới (bỏ khử lượng tử meshopt của node)
    if (!lake.length) return;
    let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
    for (let i = 0; i < lake.length; i += 3) { x0 = Math.min(x0, lake[i]); x1 = Math.max(x1, lake[i]); z0 = Math.min(z0, lake[i + 2]); z1 = Math.max(z1, lake[i + 2]); }
    x0 -= 20; z0 -= 20; x1 += 20; z1 += 20;
    const W = 1024, H = Math.round(W * (z1 - z0) / (x1 - x0)), cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const c = cv.getContext('2d'), sx = W / (x1 - x0), sz = H / (z1 - z0);
    c.fillStyle = '#000'; c.fillRect(0, 0, W, H);
    c.fillStyle = '#fff'; c.strokeStyle = '#fff'; c.lineWidth = 2; c.lineJoin = 'round';   // nét viền 2 px (~3 m): nước lấn dưới mép bờ, không hở
    for (let i = 0; i < lake.length; i += 9) {
      c.beginPath();
      c.moveTo((lake[i] - x0) * sx, (lake[i + 2] - z0) * sz); c.lineTo((lake[i + 3] - x0) * sx, (lake[i + 5] - z0) * sz); c.lineTo((lake[i + 6] - x0) * sx, (lake[i + 8] - z0) * sz);
      c.closePath(); c.fill(); c.stroke();
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.flipY = false; tex.colorSpace = THREE.NoColorSpace; tex.generateMipmaps = false; tex.minFilter = tex.magFilter = THREE.LinearFilter;
    this.lake = { tex, bounds: [x0, z0, x1, z1] };
    if (this.onLake) this.onLake(tex, this.lake.bounds);
  }


  // cây thông GLB ("pine tree" — bolojun, Sketchfab, CC-BY-SA-4.0; simplify 12 % + WebP 512 + meshopt): chuẩn hoá cao 1 m, gốc thân về (0, 0, 0)
  _pine(root) {
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root), k = 1 / ((box.max.y - box.min.y) || 1);
    const norm = new THREE.Matrix4().makeScale(k, k, k).multiply(new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2));
    const parts = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      const g = o.geometry.clone();
      for (const name of Object.keys(g.attributes)) {                // meshopt: số nguyên rút gọn => Float32 trước khi applyMatrix4
        const A = g.attributes[name]; if (A.array instanceof Float32Array && !A.isInterleavedBufferAttribute) continue;
        const n = A.itemSize, f = new Float32Array(A.count * n);
        for (let i = 0; i < A.count; i++) for (let c = 0; c < n; c++) f[i * n + c] = A.getComponent(i, c);
        g.setAttribute(name, new THREE.BufferAttribute(f, n));
      }
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(norm, o.matrixWorld));
      const m = o.material.clone();
      if (m.transparent || m.alphaTest > 0) { m.alphaTest = 0.5; m.transparent = false; m.depthWrite = true; }
      m.side = THREE.DoubleSide; m.shadowSide = THREE.DoubleSide;
      const im = new THREE.InstancedMesh(g, m, HI_CAP);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.count = 0; im.frustumCulled = false; im.castShadow = true; im.receiveShadow = true;
      this.trees.add(im); parts.push(im);
    });
    this.pineParts = parts;
    this._lodAt = null;
  }

  // mỗi khung: làm việc dựng còn chờ (≤ ~6 ms); camera đi > 8 m (hoặc 0.6 s) => chia lại cây gần (GLB, gần nhất trước, tối đa maxHi) / xa (nón)
  update(dt, cam) {
    if (!this.group.visible) return;
    const t0 = performance.now();
    while (this.jobs.length && performance.now() - t0 < 6) {
      const j = this.jobs.shift();
      try { if (this.diag && !j.quiet) this.diag.time(j.name, j.f); else j.f(); }    // lỗi 1 việc không được làm dừng vòng vẽ
      catch (e) { console.warn('dalat', j.name, e); this.diag?.step('LỖI ' + j.name + ': ' + e.message); }
    }
    if (!this.tx) return;
    this._lodT = (this._lodT || 0) + dt;
    if (this._lodAt && this._lodT < 0.6 && (cam.x - this._lodAt.x) ** 2 + (cam.z - this._lodAt.z) ** 2 < 64) return;
    this._lodT = 0; this._lodAt = { x: cam.x, z: cam.z };
    const T = this.tune, parts = this.pineParts;
    if (!parts || !T.on || !T.maxHi || T.lodR <= 0) {
      if (parts) for (const im of parts) im.count = 0;
      this.lodU.value.set(cam.x, cam.z, 0); return;
    }
    const R = T.lodR, R2 = R * R, C = 50, dens = T.density / 100, cand = this._cand || (this._cand = []);
    cand.length = 0;
    const gx = Math.floor(cam.x / C), gz = Math.floor(cam.z / C), r = Math.ceil(R / C);
    for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) for (const i of this.tcell.get((gx + a) + ',' + (gz + b)) || []) {
      if (this.trnd[i] > dens) continue;
      const d2 = (this.tx[i] - cam.x) ** 2 + (this.tz[i] - cam.z) ** 2;
      if (d2 <= R2) cand.push(d2 * 65536 + i);                         // khoá sắp xếp: khoảng cách rồi chỉ số (i < 65 536)
    }
    let Reff = R;
    if (cand.length > T.maxHi) { cand.sort((a, b) => a - b); cand.length = T.maxHi; Reff = Math.sqrt(Math.floor(cand[T.maxHi - 1] / 65536)) + 0.01; }
    const m4 = this._m4 || (this._m4 = new THREE.Matrix4()), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), sc = new THREE.Vector3();
    cand.forEach((key, n) => {
      const i = key % 65536, h = this.th[i] * (0.9 + ((i * 7919) % 100) / 500);
      q.setFromAxisAngle(up, (i * 2.399) % 6.283);
      m4.compose(p.set(this.tx[i], this.ty[i], this.tz[i]), q, sc.set(h, h, h));
      for (const im of parts) im.setMatrixAt(n, m4);
    });
    for (const im of parts) { im.count = cand.length; im.instanceMatrix.needsUpdate = true; }
    this.lodU.value.set(cam.x, cam.z, Reff);                          // tràn maxHi => vùng GLB thu lại tới cây xa nhất được chọn
  }

  // cây xa: nón code theo ô 300 m (mỗi ô 1 InstancedMesh => frustum culling theo ô), dựng dần mỗi ô 1 việc;
  // shader bỏ cây trong vùng GLB (lodU), xa hơn kU.y, hoặc số ngẫu nhiên aRnd > mật độ kU.x
  _trees(T) {
    const geo = pineGeometry(), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
    const lodU = this.lodU, kU = this.kU, lodHook = (sh) => {
      sh.uniforms.uDalatLod = lodU; sh.uniforms.uDalatK = kU;
      sh.vertexShader = 'uniform vec3 uDalatLod;\nuniform vec2 uDalatK;\nattribute float aRnd;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        { vec2 ip = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz - uDalatLod.xy; float d2 = dot(ip, ip);
          if (d2 < uDalatLod.z * uDalatLod.z || d2 > uDalatK.y * uDalatK.y || aRnd > uDalatK.x) transformed *= 0.0; }`);
    };
    mat.onBeforeCompile = lodHook;
    mat.customProgramCacheKey = () => 'dalat-cone';
    const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }); depth.onBeforeCompile = lodHook;
    depth.customProgramCacheKey = () => 'dalat-cone-depth';
    const nT = T.length / 3;
    this.tx = new Float32Array(nT); this.tz = new Float32Array(nT); this.ty = new Float32Array(nT); this.th = new Float32Array(nT); this.trnd = new Float32Array(nT);
    this.tcell = new Map();
    const cells = new Map();
    for (let k = 0; k < nT; k++) {
      const x = T[k * 3], z = T[k * 3 + 1];
      this.tx[k] = x; this.tz[k] = z; this.th[k] = T[k * 3 + 2]; this.ty[k] = this.groundAt(x, z) - 0.2;
      const r = Math.sin(k * 12.9898 + 78.233) * 43758.5453; this.trnd[k] = r - Math.floor(r);
      const key = Math.floor(x / 50) + ',' + Math.floor(z / 50);
      (this.tcell.get(key) || this.tcell.set(key, []).get(key)).push(k);
      const ck = Math.floor(x / 300) + ',' + Math.floor(z / 300);
      (cells.get(ck) || cells.set(ck, []).get(ck)).push(k);
    }
    for (const idx of cells.values()) this.jobs.push({ name: 'ô cây nón', quiet: true, f: () => {
      const g = new THREE.BufferGeometry();
      for (const name of Object.keys(geo.attributes)) g.setAttribute(name, geo.attributes[name]);
      const rnd = new Float32Array(idx.length);
      const im = new THREE.InstancedMesh(g, mat, idx.length), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), sc = new THREE.Vector3();
      idx.forEach((i, n) => {
        const h = this.th[i], w = h * (0.85 + ((i * 7919) % 100) / 400);
        q.setFromAxisAngle(up, (i * 2.399) % 6.283);
        m4.compose(p.set(this.tx[i], this.ty[i], this.tz[i]), q, sc.set(w, h, w));
        im.setMatrixAt(n, m4); rnd[n] = this.trnd[i];
      });
      g.setAttribute('aRnd', new THREE.InstancedBufferAttribute(rnd, 1));
      im.castShadow = true; im.receiveShadow = true; im.customDepthMaterial = depth;
      im.computeBoundingSphere();
      this.trees.add(im);
    } });
    this._lodAt = null;
  }

  // các đường khác trong vùng: dải nhựa phủ trên địa hình (cao hơn mặt đất 0.15 m), lấy mẫu mỗi 4 m
  _streets(S) {
    const pos = [], G = this.groundAt;
    for (const st of S) {
      const hw = st[0], P = [];
      for (let k = 1; k + 1 < st.length; k += 2) P.push([st[k], st[k + 1]]);
      const Q = [];
      for (let i = 0; i + 1 < P.length; i++) {
        const [ax, az] = P[i], [bx, bz] = P[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 4));
        for (let k = 0; k < n; k++) Q.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
      }
      Q.push(P.at(-1));
      let prev = null;
      for (let i = 0; i < Q.length; i++) {
        const a = Q[Math.max(0, i - 1)], b = Q[Math.min(Q.length - 1, i + 1)];
        let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        const [x, z] = Q[i], nx = -dz * hw, nz = dx * hw;
        const cur = [x + nx, G(x + nx, z + nz) + 0.15, z + nz, x - nx, G(x - nx, z - nz) + 0.15, z - nz];
        if (prev) pos.push(...prev.slice(0, 3), ...prev.slice(3), ...cur.slice(0, 3), ...cur.slice(0, 3), ...prev.slice(3), ...cur.slice(3));
        prev = cur;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a4a4c, roughness: 0.92, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true; m.matrixAutoUpdate = false;
    this.group.add(m);
  }
}
