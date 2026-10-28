// Map Hồ Xuân Hương – Đà Lạt (🌲, nhóm Chill): vòng khép kín 4.9 km quanh hồ theo đường thật (OpenStreetMap, ODbL), chiều kim đồng hồ
// (hồ bên phải xe). Dữ liệu do `node scripts/fetch-dalat.mjs` tạo từ file urban:EXPORT FBX: `dalat-data.json` (tuyến, độ cao đường, DEM 10 m)
// + docs/assets/dalat/ (dalat-city.glb: nhà / cầu / mặt nước; dalat-trees.json; dalat-streets.json). Toạ độ game: mặt hồ y = 0.
// Dùng lại code vòng của New York (`road.setShape('dalat', loop)`, s quấn vòng) và DEM của map HLG (`TP.dem`) => địa hình đúng FBX.
import * as THREE from 'three';
import DATA from './dalat-data.json' with { type: 'json' };
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { SgnCity } from './sgnCity.js';
import { demAt } from './terrain-noise.js';
import { withMist } from './mist.js';

export const DALAT = { data: DATA, length: DATA.length, start: DATA.start };
// vòng xoay chính (OSM way 51561593, giao Trần Quốc Toản / Nguyễn Thị Minh Khai / Nguyễn Văn Cừ / Lê Đại Hành, cạnh chợ Đà Lạt):
// tim vòng r 19 m, mặt đường rộng 14 m (12–26 m), đảo giữa: lát đá + bồn hoa đỏ + hồ nước + tiểu cảnh; các nhánh trong 160 m nở rộng 13 m
export const ROUNDABOUT = { x: -870.9, z: 514.5, r: 19.1, hw: 7, arm: 6.5, near: 160 };
// đường vòng hồ gần vòng xoay (≤ 70 m): bỏ vạch vàng tim đường (vạch ở u ≈ 0.5 của texture đường chính => lấy màu nhựa ở u 0.35)
export function noCenterLineNearRoundabout(mat) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = function (sh, r) {
    if (prev) prev.call(this, sh, r);
    sh.uniforms.uRB = { value: new THREE.Vector4(ROUNDABOUT.x, ROUNDABOUT.z, 70, 0) }; sh.uniforms.uRBOn = RB_ON;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRBW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvRBW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vRBW;\nuniform vec4 uRB;\nuniform float uRBOn;')
      .replace('#include <map_fragment>', `#include <map_fragment>
      #ifdef USE_MAP
      if (uRBOn > 0.5 && length(vRBW.xz - uRB.xy) < uRB.z && abs(vMapUv.x - 0.5) < 0.05) diffuseColor.rgb = texture2D(map, vec2(0.35, vMapUv.y)).rgb;
      #endif`);
  };
  mat.needsUpdate = true;
}
export const RB_ON = { value: 0 };                 // main bật khi ở map Đà Lạt
// cột đèn đường không đặt trên vòng xoay (đường vòng hồ đi sát mép vòng)
export const nearRoundabout = (x, z, pad = 6) => Math.hypot(x - ROUNDABOUT.x, z - ROUNDABOUT.z) < ROUNDABOUT.r + ROUNDABOUT.hw + pad;
export const WATER_DROP = -3;
export const DALAT_ENV = 0.4;                // mặt đường / đất ở Đà Lạt: bớt ánh trời (envMap) — trời trong không ám xanh dương xuống đường                 // mặt nước game thấp hơn mặt nước FBX 3 m (đáy DEM: −5.5 m)

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

// mặt đất như terrain.js vẽ: DEM, riêng sát vòng hồ thì xẻ / đắp về mặt đường (t = sstep(hw + 1.2, hw + 16, d), đất dưới cầu giữ thấp)
// => cây / dải đường phụ không lơ lửng hay chìm ở chỗ đường đào / đắp
const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
let SEG = null;
const NONE = [];
function loopNear(x, z) {
  if (!SEG) {
    SEG = new Map();
    for (let i = 0; i + 1 < DATA.x.length; i++) {
      const k = (Math.floor(DATA.x[i] / 40) + 512) * 1024 + Math.floor(DATA.z[i] / 40) + 512;   // khoá số (nhanh hơn chuỗi)
      (SEG.get(k) || SEG.set(k, []).get(k)).push(i);
    }
  }
  const gx = Math.floor(x / 40), gz = Math.floor(z / 40);
  let bd = Infinity, bi = 0, bt = 0;
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const i of SEG.get((gx + a + 512) * 1024 + gz + b + 512) || NONE) {
    const ax = DATA.x[i], az = DATA.z[i], vx = DATA.x[i + 1] - ax, vz = DATA.z[i + 1] - az, l = vx * vx + vz * vz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / l)), d = Math.hypot(x - ax - vx * t, z - az - vz * t);
    if (d < bd) { bd = d; bi = i; bt = t; }
  }
  return [bd, bi, bt];
}
const loopDist = (x, z) => loopNear(x, z)[0];
export function dalatGround(x, z) {
  const D = dalatDem(), h = demAt(D, x, z), HW = 4.6, [bd, bi, bt] = loopNear(x, z);
  if (bd >= HW + 16) return h;
  const r = DATA.road[bi] + (DATA.road[bi + 1] - DATA.road[bi]) * bt;
  const cx = DATA.x[bi] + (DATA.x[bi + 1] - DATA.x[bi]) * bt, cz = DATA.z[bi] + (DATA.z[bi + 1] - DATA.z[bi]) * bt, u = r - demAt(D, cx, cz);
  const ry = r - u * sst(1.5, 3.5, u) - 0.02;
  return ry + (h - ry) * sst(HW + 1.2, HW + 16, bd);
}

// mật độ cây theo khoảng cách tới bờ hồ (chú dặn): sát bờ (< 120 m) giữ ~45 %, xa > 250 m thêm 1 cây mọc kèm, > 600 m thêm 2
// (lệch 5–10 m quanh cây gốc của FBX — chỗ đó vốn không có nhà / nước), cách tim vòng hồ ≥ 12 m
export function dalatTreeMix(T) {
  const P = DATA.lake, out = [];
  const hash = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
  let bx0 = Infinity, bz0 = Infinity, bx1 = -Infinity, bz1 = -Infinity;
  for (const [x, z] of P) { bx0 = Math.min(bx0, x); bx1 = Math.max(bx1, x); bz0 = Math.min(bz0, z); bz1 = Math.max(bz1, z); }
  const lakeD = (x, z) => {
    const ob = Math.hypot(Math.max(bx0 - x, 0, x - bx1), Math.max(bz0 - z, 0, z - bz1));
    if (ob > 600) return ob;                                            // xa khung hồ: đủ biết > 600 m
    let d = Infinity;
    for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
      const ax = P[j][0], az = P[j][1], vx = P[i][0] - ax, vz = P[i][1] - az, l = vx * vx + vz * vz || 1;
      const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / l));
      d = Math.min(d, Math.hypot(x - ax - vx * t, z - az - vz * t));
    }
    return d;
  };
  for (let k = 0; k < T.length; k += 3) {
    const x = T[k], z = T[k + 1], h = T[k + 2], d = lakeD(x, z);
    if (Math.hypot(x - ROUNDABOUT.x, z - ROUNDABOUT.z) < ROUNDABOUT.r + ROUNDABOUT.hw + 4) continue;   // không cây trên vòng xoay
    if (d < 120 && hash(x, z) > 0.45) continue;
    out.push(x, z, h);
    const extra = d > 600 ? 2 : d > 250 ? 1 : 0;
    for (let e = 0; e < extra; e++) {
      const a = hash(x + e, z) * 6.283, r = 5 + 5 * hash(z, x + e), nx = x + Math.cos(a) * r, nz = z + Math.sin(a) * r;
      if (loopDist(nx, nz) < 12) continue;
      out.push(+nx.toFixed(1), +nz.toFixed(1), +(h * (0.75 + 0.4 * hash(nx, nz))).toFixed(1));
    }
  }
  return out;
}

// ánh sáng giả của đèn đường (Đà Lạt, ban đêm): ảnh xám 1024² phủ khung uFakeB, mỗi cột đèn 1 vệt tròn mềm bán kính R m (cộng dồn);
// shader mặt đất + mặt đường cộng thêm màu đèn × albedo × độ sáng => nhìn từ xa vẫn thấy cả vòng hồ sáng mà không cần đèn thật
export const FAKE_LIGHT = { uFakeTex: { value: null }, uFakeB: { value: new THREE.Vector4(-1300, -1300, 1300, 1300) }, uFakeK: { value: 0 }, uFakeCol: { value: new THREE.Color(1, 0.8, 0.55) } };
export function addFakeLight(mat) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = function (sh, r) {
    if (prev) prev.call(this, sh, r);
    Object.assign(sh.uniforms, FAKE_LIGHT);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vFakeW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvFakeW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vFakeW;\nuniform sampler2D uFakeTex;\nuniform vec4 uFakeB;\nuniform float uFakeK;\nuniform vec3 uFakeCol;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      if (uFakeK > 0.0) {
        vec2 fu = (vFakeW.xz - uFakeB.xy) / (uFakeB.zw - uFakeB.xy);
        if (fu.x > 0.0 && fu.y > 0.0 && fu.x < 1.0 && fu.y < 1.0) totalEmissiveRadiance += uFakeCol * diffuseColor.rgb * texture2D(uFakeTex, fu).r * uFakeK;
      }`);
  };
  mat.needsUpdate = true;
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
export const DALAT_TREE_DEFAULTS = { high: { on: 1, model3d: 0, density: 100, lodR: 60, far: 700, maxHi: 120 }, low: { on: 1, model3d: 0, density: 60, lodR: 30, far: 400, maxHi: 40 } };
// model3d = 1: cây xa là ảnh chụp chính model cây thông chú đưa (impostor 2 tấm chéo, 4 tam giác, không đổ bóng) thay cây nón demo
const TREE_KEY = 'chilldrive.dalat.trees', HI_CAP = 1500;
// nước hồ (bảng 💧 Nước hồ; lưu `chilldrive.dalat.water`): màu (sRGB), độ sáng ×, soi trời ×, nhuộm soi trời theo màu nước (0..1),
// nắng ×, phản chiếu cảnh %, gợn sóng ×
export const DALAT_WATER_DEFAULTS = { color: '#1b3c26', bright: 1, sky: 0.12, tint: 1, sun: 0.15, refl: 10, wave: 0.4 };
const WATER_KEY = 'chilldrive.dalat.water';

export class DalatScene {
  // groundAt(x, z): độ cao địa hình (DEM) — dải đường phụ / cây đặt theo đó
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.trees = new THREE.Group(); this.group.add(this.trees);
    this.cones = new THREE.Group(); this.farModels = new THREE.Group(); this.trees.add(this.cones, this.farModels);
    this.state = 'idle';
    this.lampU = { value: 0 };
    this.lodU = { value: new THREE.Vector3(0, 0, 0) };   // (x, z, R) — tâm + bán kính vùng GLB lúc chia gần nhất (shader nón bỏ cây trong vùng)
    this.kU = { value: new THREE.Vector2(1, 700) };      // (mật độ 0..1, khoảng cách xa nhất cây nón)
    // shader cây xa (nón / model nhẹ): bỏ cây trong vùng GLB chi tiết (lodU), xa hơn kU.y, hoặc aRnd > mật độ kU.x
    this._lodHook = (sh) => {
      sh.uniforms.uDalatLod = this.lodU; sh.uniforms.uDalatK = this.kU;
      sh.vertexShader = 'uniform vec3 uDalatLod;\nuniform vec2 uDalatK;\nattribute float aRnd;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        { vec2 ip = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz - uDalatLod.xy; float d2 = dot(ip, ip);
          if (d2 < uDalatLod.z * uDalatLod.z || d2 > uDalatK.y * uDalatK.y || aRnd > uDalatK.x) transformed *= 0.0; }`);
    };
    this.onLake = null;                        // (tex, bounds) khi tách xong mặt hồ Xuân Hương (main => ocean.setLake)
    this.lake = null;
    this.jobs = [];                            // việc dựng chia nhỏ, mỗi khung làm tới ~6 ms (vào map không đứng hình)
    this.tune = { ...DALAT_TREE_DEFAULTS.high };
    this.water = { ...DALAT_WATER_DEFAULTS };
    try { Object.assign(this.water, JSON.parse(localStorage.getItem(WATER_KEY) || '{}')); } catch { /* chế độ riêng tư */ }
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
  setWater(patch) { Object.assign(this.water, patch); try { localStorage.setItem(WATER_KEY, JSON.stringify(this.water)); } catch { /* chế độ riêng tư */ } }
  resetWater() { Object.assign(this.water, DALAT_WATER_DEFAULTS); try { localStorage.removeItem(WATER_KEY); } catch { /* chế độ riêng tư */ } }
  resetTune() { try { localStorage.removeItem(TREE_KEY); } catch { /* chế độ riêng tư */ } this.loadTune(this._low); }
  setTune(patch, save = true) {
    Object.assign(this.tune, patch);
    const T = this.tune;
    T.maxHi = Math.min(HI_CAP, Math.max(0, Math.round(T.maxHi)));
    this.trees.visible = !!T.on;
    const far3d = !!T.model3d && !!this.farParts;                    // model 3D chưa sẵn sàng => tạm giữ cây nón (không để trống)
    this.cones.visible = !far3d; this.farModels.visible = far3d;
    if (T.model3d) this._buildFar();
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
    // cửa sổ sáng ban đêm như map Landmark + màu tường theo toà (băm ô 14 m: vàng kem / hồng đất / xanh xám… kiểu nhà Đà Lạt, trầm để không trắng lóa),
    // mái (pháp tuyến hướng lên) ngói đỏ sẫm / tôn xám
    const winShader = (shader) => {
      SgnCity.prototype._shader.call({ lampU: this.lampU }, shader);
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      {
        vec2 cell = floor(vCityW.xz / 14.0);
        float h = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
        vec3 pal = h < 0.25 ? vec3(0.62, 0.52, 0.32) : h < 0.42 ? vec3(0.55, 0.40, 0.33) : h < 0.57 ? vec3(0.42, 0.47, 0.42)
          : h < 0.72 ? vec3(0.52, 0.38, 0.28) : h < 0.86 ? vec3(0.40, 0.44, 0.50) : vec3(0.56, 0.54, 0.48);
        if (vCityN.y > 0.6) pal = h < 0.55 ? vec3(0.36, 0.14, 0.08) : vec3(0.22, 0.23, 0.25);
        diffuseColor.rgb *= pal;
      }`);
    };
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      if (!o.isMesh) return;
      const name = o.material.name || o.name, color = o.material.color.clone();
      if (name === 'WATER') {
        if (this.diag) this.diag.time('cắt tam giác hồ + mặt nạ', () => this._splitLake(o)); else this._splitLake(o);
        // ao / hồ nhỏ khác (cao độ khác mặt hồ): xanh lá đậm, ít lóa
        o.material = new THREE.MeshStandardMaterial({ color: 0x1d3a22, roughness: 0.3, metalness: 0, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
        o.position.y = WATER_DROP;                                    // mọi mặt nước hạ 3 m (bờ cao hơn, hồ trông sâu)
        o.receiveShadow = true;
      } else {
        const bld = name.startsWith('BUILDINGS');
        o.material = new THREE.MeshStandardMaterial({ color: bld ? 0xffffff : color, roughness: 0.92, metalness: 0, envMapIntensity: 0.45 });
        if (bld) o.material.onBeforeCompile = winShader;
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
    for (const [x, z] of poly) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    x0 -= 20; z0 -= 20; x1 += 20; z1 += 20;
    const W = 1024, H = Math.round(W * (z1 - z0) / (x1 - x0)), cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const c = cv.getContext('2d'), sx = W / (x1 - x0), sz = H / (z1 - z0);
    c.fillStyle = '#000'; c.fillRect(0, 0, W, H);
    c.fillStyle = '#fff'; c.strokeStyle = '#fff'; c.lineWidth = 2; c.lineJoin = 'round';   // nét viền 2 px (~3 m): nước lấn dưới mép bờ, không hở
    c.beginPath();                                                    // cả đa giác hồ OSM (chỗ FBX thiếu nước, đáy DEM đã hạ cùng hồ)
    poly.forEach(([x, z], i) => (i ? c.lineTo : c.moveTo).call(c, (x - x0) * sx, (z - z0) * sz));
    c.closePath(); c.fill(); c.stroke();
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
    const src = this._extract(root);
    if (this.renderer) try { this.farParts = this._impostor(src); this.setTune({}, false); } catch (e) { console.warn('dalat impostor', e); this.diag?.step('LỖI impostor: ' + e.message); }
    this.pineParts = src.map(({ g, m }) => {
      const im = new THREE.InstancedMesh(g, m, HI_CAP);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.count = 0; im.frustumCulled = false; im.castShadow = true; im.receiveShadow = true;
      this.trees.add(im); return im;
    });
    this._lodAt = null;
  }
  // gộp transform vào geometry, chuẩn hoá cao 1 m, gốc thân về (0, 0, 0); lá trong suốt => cắt alpha + 2 mặt
  _extract(root) {
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root), k = 1 / ((box.max.y - box.min.y) || 1);
    const norm = new THREE.Matrix4().makeScale(k, k, k).multiply(new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2));
    const out = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      const g = o.geometry.clone();
      for (const name of Object.keys(g.attributes)) {                // meshopt: số nguyên rút gọn => Float32 trước khi applyMatrix4
        const A = g.attributes[name]; if (A.array instanceof Float32Array && !A.isInterleavedBufferAttribute) continue;
        const n = A.itemSize, f = new Float32Array(A.count * n);
        for (let i = 0; i < A.count; i++) { f[i * n] = A.getX(i); if (n > 1) f[i * n + 1] = A.getY(i); if (n > 2) f[i * n + 2] = A.getZ(i); if (n > 3) f[i * n + 3] = A.getW(i); }   // getX… (attribute interleaved của meshopt không có getComponent)
        g.setAttribute(name, new THREE.BufferAttribute(f, n));
      }
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(norm, o.matrixWorld));
      const m = o.material.clone();
      const leaf = m.transparent || m.alphaTest > 0;
      if (leaf) { m.alphaTest = 0.5; m.transparent = false; m.depthWrite = true; }
      m.side = THREE.DoubleSide; m.shadowSide = THREE.DoubleSide;
      // thân / cành (vật liệu đục) sáng hơn lá nhiều => thân tối lại, lá sáng lên; bớt bóng loáng (KHR_materials_specular)
      m.color.multiplyScalar(leaf ? 1.4 : 0.45);
      m.roughness = 1; m.metalness = 0;
      if (m.specularIntensity !== undefined) m.specularIntensity = leaf ? 0.3 : 0.15;
      out.push({ g, m });
    });
    return out;
  }
  // vẽ lại ảnh ánh sáng giả khi số đèn / bán kính đổi. lamps: mảng [x, y, z] bóng đèn (chunk scenery, cả vòng hồ)
  updateFakeLight(lamps, R) {
    const key = lamps.length + ':' + R;
    if (key === this._fakeKey) return;
    this._fakeKey = key;
    const N = 1024, B = FAKE_LIGHT.uFakeB.value, sx = N / (B.z - B.x), sz = N / (B.w - B.y);
    const cv = this._fakeCv || (this._fakeCv = document.createElement('canvas')); cv.width = cv.height = N;
    const c = cv.getContext('2d');
    c.globalCompositeOperation = 'source-over'; c.fillStyle = '#000'; c.fillRect(0, 0, N, N);
    c.globalCompositeOperation = 'lighter';
    const seen = new Set(), rp = Math.max(2, R * sx);
    for (const [x, , z] of lamps) {
      const k = Math.round(x) + ',' + Math.round(z); if (seen.has(k)) continue; seen.add(k);     // chunk trùng vòng
      const px = (x - B.x) * sx, pz = (z - B.y) * sz, g = c.createRadialGradient(px, pz, 0, px, pz, rp);
      g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.35, 'rgba(255,255,255,0.45)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = g; c.fillRect(px - rp, pz - rp, rp * 2, rp * 2);
    }
    if (!FAKE_LIGHT.uFakeTex.value) {
      const t = new THREE.CanvasTexture(cv); t.flipY = false; t.colorSpace = THREE.NoColorSpace; t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false;
      FAKE_LIGHT.uFakeTex.value = t;
    } else FAKE_LIGHT.uFakeTex.value.needsUpdate = true;
  }

  // impostor: chụp model cây (nhìn ngang, ánh sáng đều) vào ảnh 256 × 400 có kênh alpha => 2 tấm chéo nhau, pháp tuyến hướng lên
  // (sáng đều mọi hướng nắng). Gốc (0, 0, 0), cao 1 m như model đã chuẩn hoá
  _impostor(parts) {
    const R = this.renderer, HW = 0.32, W = 256, H = Math.round(W / (2 * HW));
    const rt = new THREE.WebGLRenderTarget(W, H);
    rt.texture.generateMipmaps = true; rt.texture.minFilter = THREE.LinearMipmapLinearFilter;
    const sc = new THREE.Scene();
    for (const { g, m } of parts) sc.add(new THREE.Mesh(g, m));
    sc.add(new THREE.AmbientLight(0xffffff, 1.3));
    const dl = new THREE.DirectionalLight(0xffffff, 1.5); dl.position.set(0.6, 1, 1); sc.add(dl);
    const cam = new THREE.OrthographicCamera(-HW, HW, 1, 0, -5, 5); cam.position.set(0, 0, 2); cam.lookAt(0, 0, 0);
    const prev = R.getRenderTarget(), pc = R.getClearColor(new THREE.Color()), pa = R.getClearAlpha(), auto = R.shadowMap.autoUpdate;
    R.shadowMap.autoUpdate = false;
    R.setRenderTarget(rt); R.setClearColor(0x000000, 0); R.clear(); R.render(sc, cam);
    R.setRenderTarget(prev); R.setClearColor(pc, pa); R.shadowMap.autoUpdate = auto;
    const a = new THREE.PlaneGeometry(2 * HW, 1).translate(0, 0.5, 0), b = a.clone().rotateY(Math.PI / 2);
    const pos = [...a.toNonIndexed().attributes.position.array, ...b.toNonIndexed().attributes.position.array];
    const uv = [...a.toNonIndexed().attributes.uv.array, ...b.toNonIndexed().attributes.uv.array];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, k) => (k % 3 === 1 ? 1 : 0)), 3));
    const m = new THREE.MeshStandardMaterial({ map: rt.texture, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.95, metalness: 0 });
    return [{ g, m }];
  }
  // cây xa bằng model nhẹ: dựng theo ô 300 m (mỗi ô 1 việc) khi bật model3d và đã có cả mảng cây + model
  _buildFar() {
    if (this._farBuilt || !this.farParts || !this.cells || !this.tune.model3d) return;
    this._farBuilt = true;
    const parts = this.farParts.map(({ g, m }, k) => {
      const mm = m.clone(); mm.onBeforeCompile = this._lodHook; mm.customProgramCacheKey = () => 'dalat-far-' + k;
      return { g, m: mm };
    });
    for (const idx of this.cells) this.jobs.push({ name: 'ô cây model xa', quiet: true, f: () => {
      const rnd = new Float32Array(idx.length), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), sc = new THREE.Vector3();
      const ims = parts.map(({ g, m }) => {
        const gg = new THREE.BufferGeometry();
        for (const name of Object.keys(g.attributes)) gg.setAttribute(name, g.attributes[name]);
        if (g.index) gg.setIndex(g.index);
        return new THREE.InstancedMesh(gg, m, idx.length);
      });
      idx.forEach((i, n) => {
        const h = this.th[i] * (0.9 + ((i * 7919) % 100) / 500);
        q.setFromAxisAngle(up, (i * 2.399) % 6.283);
        m4.compose(p.set(this.tx[i], this.ty[i], this.tz[i]), q, sc.set(h, h, h));
        for (const im of ims) im.setMatrixAt(n, m4);
        rnd[n] = this.trnd[i];
      });
      const attr = new THREE.InstancedBufferAttribute(rnd, 1);
      for (const im of ims) { im.geometry.setAttribute('aRnd', attr); im.receiveShadow = true; im.computeBoundingSphere(); this.farModels.add(im); }
    } });
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
      if (d2 <= R2) cand.push(Math.floor(d2) * 65536 + i);                         // khoá sắp xếp: khoảng cách rồi chỉ số (i < 65 536)
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
  _trees(T0) {
    const T = dalatTreeMix(T0);
    const geo = pineGeometry(), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
    const lodHook = this._lodHook;
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
      this.tx[k] = x; this.tz[k] = z; this.th[k] = T[k * 3 + 2]; this.ty[k] = dalatGround(x, z) - 0.35;   // gốc cắm sâu 0.35 m (lưới địa hình thô hơn)
      const r = Math.sin(k * 12.9898 + 78.233) * 43758.5453; this.trnd[k] = r - Math.floor(r);
      const key = Math.floor(x / 50) + ',' + Math.floor(z / 50);
      (this.tcell.get(key) || this.tcell.set(key, []).get(key)).push(k);
      const ck = Math.floor(x / 300) + ',' + Math.floor(z / 300);
      (cells.get(ck) || cells.set(ck, []).get(ck)).push(k);
    }
    this.cells = [...cells.values()];
    this._buildFar();
    for (const idx of this.cells) this.jobs.push({ name: 'ô cây nón', quiet: true, f: () => {
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
      this.cones.add(im);
    } });
    this._lodAt = null;
  }

  // các đường khác trong vùng (OSM): dải nhựa phủ trên địa hình (cao hơn mặt đất 0.15 m), lấy mẫu mỗi 4 m; texture nhựa + vạch mép trắng,
  // đường ≥ 6.4 m có vạch tim đứt (u ngang 0..1, v dọc = mét / 8)
  _streets(S) {
    this.streets = S;                                                 // bản đồ tròn vẽ lại
    const G = dalatGround, buf = [{ pos: [], uv: [] }, { pos: [], uv: [] }];
    this.lanes = [];                                                   // đường cho xe chạy: { hw, P: [[x, z]], cum: [m], len, bb }
    const RB = ROUNDABOUT, rbD = (x, z) => Math.hypot(x - RB.x, z - RB.z);
    for (const st of S) {
      let hw = st[0]; const P = [];
      for (let k = 1; k + 1 < st.length; k += 2) P.push([st[k], st[k + 1]]);
      if (P.every(([x, z]) => rbD(x, z) < RB.r + 6)) continue;            // chính vòng xoay OSM: dựng riêng (_roundabout)
      if (hw >= 2.6 && P.some(([x, z]) => rbD(x, z) < RB.near)) hw = Math.max(hw, RB.arm);   // nhánh vòng xoay: đường lớn
      const Q = [];
      for (let i = 0; i + 1 < P.length; i++) {
        const [ax, az] = P[i], [bx, bz] = P[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 4));
        for (let k = 0; k < n; k++) Q.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
      }
      Q.push(P.at(-1));
      const B = buf[hw >= 3.2 ? 1 : 0];
      let prev = null, v = 0, pv = 0;
      const cum = [0];
      for (let i = 0; i < Q.length; i++) {
        const a = Q[Math.max(0, i - 1)], b = Q[Math.min(Q.length - 1, i + 1)];
        let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        if (i) { v += Math.hypot(Q[i][0] - Q[i - 1][0], Q[i][1] - Q[i - 1][1]); cum.push(v); }
        const [x, z] = Q[i], nx = -dz * hw, nz = dx * hw;
        const cur = [x + nx, G(x + nx, z + nz) + 0.15, z + nz, x - nx, G(x - nx, z - nz) + 0.15, z - nz];
        if (prev) {
          B.pos.push(...prev.slice(0, 3), ...prev.slice(3), ...cur.slice(0, 3), ...cur.slice(0, 3), ...prev.slice(3), ...cur.slice(3));
          const v0 = pv / 8, v1 = v / 8;
          B.uv.push(1, v0, 0, v0, 1, v1, 1, v1, 0, v0, 0, v1);
        }
        prev = cur; pv = v;
      }
      if (hw >= 2.6 && v > 60) {
        let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
        for (const [x, z] of Q) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
        this.lanes.push({ hw, P: Q, cum, len: v, bb: [x0, z0, x1, z1] });
      }
    }
    this._roundabout();
    buf.forEach((B, k) => {
      if (!B.pos.length) return;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(B.pos), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(B.uv), 2));
      geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({ map: streetTexture(k === 1), roughness: 0.9, envMapIntensity: DALAT_ENV, side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      addFakeLight(mat);                                              // ánh sáng giả đèn đường cả trên đường phụ
      withMist(mat);
      const m = new THREE.Mesh(geo, mat);
      m.receiveShadow = true; m.matrixAutoUpdate = false;
      this.group.add(m);
    });
  }

  // vòng xoay chính: vành mặt đường (texture đường phụ, vạch chia làn đứt ở giữa), viền bó vỉa, đảo giữa lát đá + bồn hoa đỏ,
  // hồ nước + thành bể trắng, tiểu cảnh cây / hoa ở tâm. Cao độ theo dalatGround (+0.18 => phủ lên mặt đường vòng hồ chỗ chồng)
  _roundabout() {
    const RB = ROUNDABOUT, G = dalatGround, N = 72, r0 = RB.r - RB.hw, r1 = RB.r + RB.hw, ring = { pos: [], uv: [] };
    const Y = G(RB.x, RB.z);                                           // đất đã san phẳng quanh vòng xoay (fetch-dalat) => 1 cao độ
    const P = (r, a, dy = 0.18) => [RB.x + Math.cos(a) * r, Y + dy, RB.z + Math.sin(a) * r];
    for (let i = 0; i < N; i++) {
      const a0 = i / N * Math.PI * 2, a1 = (i + 1) / N * Math.PI * 2, v0 = a0 * RB.r / 8, v1 = a1 * RB.r / 8;
      const A = P(r1, a0), B = P(r0, a0), C = P(r1, a1), D = P(r0, a1);
      ring.pos.push(...A, ...B, ...C, ...C, ...B, ...D); ring.uv.push(1, v0, 0, v0, 1, v1, 1, v1, 0, v0, 0, v1);
    }
    const mk = (pos, uv, mat) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      if (uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.matrixAutoUpdate = false; this.group.add(m); return m;
    };
    const ringMat = new THREE.MeshStandardMaterial({ map: streetTexture(true), roughness: 0.9, envMapIntensity: DALAT_ENV, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    addFakeLight(ringMat); withMist(ringMat);
    mk(ring.pos, ring.uv, ringMat);
    // đảo giữa: đĩa lát đá có bồn hoa đỏ (texture canvas toả tròn), viền bó vỉa trắng xám cao 0.25 m
    const cv = document.createElement('canvas'); cv.width = cv.height = 256;
    const c = cv.getContext('2d');
    c.fillStyle = '#b9b4ab'; c.fillRect(0, 0, 256, 256);
    for (let r = 20; r < 128; r += 9) { c.strokeStyle = r % 18 ? '#a9a39a' : '#c9c4ba'; c.lineWidth = 2; c.beginPath(); c.arc(128, 128, r, 0, Math.PI * 2); c.stroke(); }
    for (let k = 0; k < 8; k++) {                                   // 8 bồn hoa đỏ / tím hình quạt
      const a = k / 8 * Math.PI * 2 + 0.2;
      c.fillStyle = k % 2 ? '#8e1f3a' : '#b02a2a';
      c.beginPath(); c.arc(128, 128, 118, a, a + 0.42); c.arc(128, 128, 78, a + 0.42, a, true); c.closePath(); c.fill();
    }
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const ISL = 0.18 + 0.2;                                           // đảo giữa cao hơn mặt vòng xoay 20 cm (như bậc vỉa hè)
    const isl = { pos: [], uv: [] };
    for (let i = 0; i < N; i++) {
      const a0 = i / N * Math.PI * 2, a1 = (i + 1) / N * Math.PI * 2, O = P(0, 0, ISL);
      const A = P(r0, a0, ISL), C = P(r0, a1, ISL);
      isl.pos.push(...O, ...C, ...A);
      isl.uv.push(0.5, 0.5, 0.5 + Math.cos(a1) * 0.5, 0.5 + Math.sin(a1) * 0.5, 0.5 + Math.cos(a0) * 0.5, 0.5 + Math.sin(a0) * 0.5);
    }
    const islMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, envMapIntensity: DALAT_ENV }); addFakeLight(islMat); withMist(islMat);
    mk(isl.pos, isl.uv, islMat);
    const grp = new THREE.Group(); grp.position.set(RB.x, Y, RB.z);
    const std = (color, o = {}) => withMist(new THREE.MeshStandardMaterial({ color, roughness: 0.8, envMapIntensity: DALAT_ENV, ...o }));
    const add = (geo, mat, y) => { const m = new THREE.Mesh(geo, mat); m.position.y = y; m.castShadow = m.receiveShadow = true; grp.add(m); return m; };
    add(new THREE.CylinderGeometry(r0 + 0.02, r0 + 0.02, 0.34, 64, 1, true), std(0xd6d3cc), 0.21);           // bó vỉa: thành đứng từ mặt đường lên mặt đảo
    add(new THREE.RingGeometry(r0 - 0.35, r0 + 0.02, 64).rotateX(-Math.PI / 2), std(0xe2dfd8), ISL + 0.005); // mặt bó vỉa sáng
    add(new THREE.CylinderGeometry(6.4, 6.6, 0.6, 48), std(0xeceae4), ISL + 0.3);                          // thành bể
    add(new THREE.CylinderGeometry(6.0, 6.0, 0.04, 48), std(0x2c5a6a, { roughness: 0.15, metalness: 0.2 }), ISL + 0.62);   // mặt nước
    add(new THREE.CylinderGeometry(1.4, 1.8, 1.2, 16), std(0xd9d4c8), ISL + 1.2);                          // bệ tiểu cảnh
    for (let k = 0; k < 5; k++) {                                   // tiểu cảnh: khối cây xanh tỉa + hoa
      const a = k / 5 * Math.PI * 2, r = k ? 1.1 : 0;
      const m = add(new THREE.IcosahedronGeometry(k ? 0.7 : 1.0, 1), std(0x3f7a35), ISL + (k ? 2.3 : 2.9));
      m.position.x = Math.cos(a) * r; m.position.z = Math.sin(a) * r; m.scale.y = 1.4;
    }
    for (let k = 0; k < 14; k++) {
      const a = k / 14 * Math.PI * 2, m = add(new THREE.SphereGeometry(0.28, 8, 6), std([0xd8323a, 0xf2c12e, 0xe86fa8][k % 3]), ISL + 2.0 + (k % 3) * 0.5);
      m.position.x = Math.cos(a) * 1.6; m.position.z = Math.sin(a) * 1.6;
    }
    this.group.add(grp);
  }

  // xe chạy trên đường phụ: dùng lại hình xe dựng sẵn của map Phố (cityTraffic: sedan / kei / taxi / van / xe máy, đèn tự sáng ban đêm),
  // mỗi loại 1 InstancedMesh riêng (vật liệu chung của cityTraffic). Mỗi xe chạy dọc 1 đường, làn phải, hết đường hoặc xa camera > 550 m
  // thì sinh lại ở đường khác trong 450 m quanh camera; bám xe trước cùng chiều (giữ ≥ 12 m)
  initTraffic(cityTraffic, types, colors, count) {
    this.ct = cityTraffic; this.carN = count;
    const MIX = [['sedan', 0.3], ['kei', 0.2], ['taxi', 0.08], ['van', 0.1], ['scooter', 0.32]];
    this.carMix = MIX; this.carTypes = types; this.carColors = colors;
    this.carMesh = {};
    for (const [k] of MIX) {
      const src = cityTraffic.meshes[k].geometry, g = new THREE.BufferGeometry();
      for (const name of ['position', 'normal', 'color', 'aTint', 'aGlow', 'aGloss', 'aFlash']) g.setAttribute(name, src.attributes[name]);
      const cap = count;
      g.setAttribute('aHonk', new THREE.InstancedBufferAttribute(new Float32Array(cap), 1));
      g.setAttribute('aBlink', new THREE.InstancedBufferAttribute(new Float32Array(cap), 1));
      const im = new THREE.InstancedMesh(g, cityTraffic.mat, cap);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3), 3);
      im.count = 0; im.castShadow = true; im.frustumCulled = false;
      this.group.add(im); this.carMesh[k] = im;
    }
    this.sideCars = [];
  }
  _spawnCar(c, cam) {
    const L = this.lanes, near = [];
    for (let i = 0; i < L.length; i++) {
      const b = L[i].bb, dx = Math.max(b[0] - cam.x, 0, cam.x - b[2]), dz = Math.max(b[1] - cam.z, 0, cam.z - b[3]);
      if (dx * dx + dz * dz < 450 * 450) near.push(i);
    }
    if (!near.length) { c.on = false; return; }
    for (let tries = 0; tries < 6; tries++) {
      const li = near[Math.floor(Math.random() * near.length)], ln = L[li], dir = Math.random() < 0.5 ? 1 : -1, s = Math.random() * ln.len;
      if (this.sideCars.some((o) => o !== c && o.on && o.li === li && Math.abs(o.s - s) < 25)) continue;
      let r = Math.random(), type = this.carMix[0][0];
      for (const [k, p] of this.carMix) { if ((r -= p) <= 0) { type = k; break; } }
      const T = this.carTypes[type], cols = this.carColors[type];
      Object.assign(c, { on: true, li, dir, s, type, len: T.len, vMax: (T.v[0] + Math.random() * (T.v[1] - T.v[0])) * 0.75 / 3.6, color: new THREE.Color(cols[Math.floor(Math.random() * cols.length)]) });
      c.v = c.vMax;
      return;
    }
    c.on = false;
  }
  _at(ln, s, out) {
    const C = ln.cum; s = Math.max(0, Math.min(ln.len, s));
    let lo = 0, hi = C.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (C[m] <= s) lo = m; else hi = m; }
    const t = (s - C[lo]) / ((C[hi] - C[lo]) || 1), a = ln.P[lo], b = ln.P[hi];
    out[0] = a[0] + (b[0] - a[0]) * t; out[1] = a[1] + (b[1] - a[1]) * t;
    return out;
  }
  updateTraffic(dt, cam, lamps) {
    if (!this.ct || !this.lanes) return;
    this.ct.uLamp.value = lamps;
    while (this.sideCars.length < this.carN) { const c = {}; this._spawnCar(c, cam); this.sideCars.push(c); }
    const pA = [0, 0], pB = [0, 0], m4 = this._cm || (this._cm = new THREE.Matrix4()), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    for (const k in this.carMesh) this.carMesh[k].count = 0;
    for (const c of this.sideCars) {
      if (!c.on) { if (Math.random() < dt) this._spawnCar(c, cam); continue; }
      const ln = this.lanes[c.li];
      let gap = Infinity;                                               // xe trước cùng đường, cùng chiều
      for (const o of this.sideCars) if (o !== c && o.on && o.li === c.li && o.dir === c.dir) { const d = (o.s - c.s) * c.dir; if (d > 0 && d < gap) gap = d; }
      const want = gap < 12 ? 0 : gap < 30 ? c.vMax * (gap - 12) / 18 : c.vMax;
      c.v += Math.max(-6 * dt, Math.min(2 * dt, want - c.v));
      c.s += c.dir * c.v * dt;
      this._at(ln, c.s, pA);
      if (c.s < 0 || c.s > ln.len || (pA[0] - cam.x) ** 2 + (pA[1] - cam.z) ** 2 > 550 * 550) { this._spawnCar(c, cam); continue; }
      this._at(ln, c.s + c.dir * 3, pB);
      let dx = pB[0] - pA[0], dz = pB[1] - pA[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const off = c.type === 'scooter' ? ln.hw * 0.7 : ln.hw * 0.42;  // làn phải (xe máy sát lề)
      const x = pA[0] - dz * off, z = pA[1] + dx * off;
      q.setFromAxisAngle(up, Math.atan2(-dx, -dz));
      m4.compose(v.set(x, dalatGround(x, z) + 0.15, z), q, one);
      const im = this.carMesh[c.type], n = im.count++;
      im.setMatrixAt(n, m4); im.setColorAt(n, c.color);
    }
    for (const k in this.carMesh) { const im = this.carMesh[k]; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
  }
}

// texture đường phụ: nhựa xám lấm tấm + vạch mép trắng liền; center = vạch tim trắng đứt (4 m vạch / 4 m trống trên chu kỳ 8 m)
function streetTexture(center) {
  const W = 64, H = 256, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  c.fillStyle = '#404042'; c.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) { const g = 52 + Math.random() * 26; c.fillStyle = `rgb(${g},${g},${g + 2})`; c.fillRect(Math.random() * W, Math.random() * H, 1, 1); }
  c.fillStyle = '#d9d7cf';
  c.fillRect(2, 0, 2, H); c.fillRect(W - 4, 0, 2, H);
  if (center) c.fillRect(W / 2 - 1, 0, 2, H / 2);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
