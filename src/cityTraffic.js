import * as THREE from 'three';
import { CITY } from './road.js';
import { withMist } from './mist.js';
import { createHeadlights, placeHeadlights, updateHeadlights } from './headlights.js';

// Giao thông map Phố: xe dựng bằng code (xe con, xe kei, taxi, xe van, xe buýt, xe máy có người lái), mỗi loại 1 InstancedMesh
// (thân sơn nhận màu riêng từng xe qua instanceColor × aTint; kính bóng; đèn tự phát sáng). Không dùng model nặng.
// - Đường chính: 2 làn mỗi chiều (CITY.lanes), bám xe trước (giữ khoảng cách theo tốc độ), dừng đèn đỏ (city.stopAhead),
//   đổi sang làn cùng chiều bên cạnh để vượt xe chậm (kể cả xe mình) khi làn kia trống.
// - Đường ngang ở các ngã tư gần xe: xe chạy ngang qua khi đèn đường ngang xanh, dừng vạch khi đỏ / vàng.
// - Xe mình: bám xe phía trước cùng làn (ctrl.maxV), không tự dừng đèn đỏ (chú tự phanh).
const KMH = 1 / 3.6;
const AHEAD = 480, BEHIND = 170;
const MAIN_GAP = [30, 70];          // khoảng cách sinh xe trên mỗi làn (m)
const CROSS_R = 120;                // xe đường ngang chạy từ u = ±CROSS_R

// ---------- dựng hình ----------
// khối 8 đỉnh: đáy (y0) và nóc (y1) là 2 hình chữ nhật [x±w, z0..z1] (cho phép thu hẹp nóc => kính nghiêng)
function hexa(out, b, t, col, flags) {
  // b, t: [hw, z0, z1, y]; đỉnh: 0..3 đáy, 4..7 nóc (thứ tự: -x z0, +x z0, +x z1, -x z1)
  const v = [
    [-b[0], b[3], b[1]], [b[0], b[3], b[1]], [b[0], b[3], b[2]], [-b[0], b[3], b[2]],
    [-t[0], t[3], t[1]], [t[0], t[3], t[1]], [t[0], t[3], t[2]], [-t[0], t[3], t[2]],
  ];
  const faces = [[0, 1, 2, 3], [4, 7, 6, 5], [0, 4, 5, 1], [1, 5, 6, 2], [2, 6, 7, 3], [3, 7, 4, 0]];
  for (const f of faces) {
    const [a, bq, c, d] = f.map((i) => v[i]);
    const n = new THREE.Vector3().subVectors(new THREE.Vector3(...bq), new THREE.Vector3(...a))
      .cross(new THREE.Vector3().subVectors(new THREE.Vector3(...c), new THREE.Vector3(...a))).normalize();
    for (const p of [a, bq, c, a, c, d]) {
      out.pos.push(...p); out.nor.push(n.x, n.y, n.z); out.col.push(...col);
      out.tint.push(flags.tint ? 1 : 0); out.glow.push(flags.glow ? 1 : 0); out.gloss.push(flags.gloss ? 1 : 0);
      out.flash.push(flags.flash ? (p[0] > 0 ? 2 : 1) : 0);
    }
  }
}
const box = (o, cy, cz, sx, sy, sz, col, flags = {}) =>
  hexa(o, [sx / 2, cz - sz / 2, cz + sz / 2, cy - sy / 2], [sx / 2, cz - sz / 2, cz + sz / 2, cy + sy / 2], col, flags);
// bánh xe: trụ nằm ngang trục x
function wheel(o, x, y, z, r, w, col = [0.05, 0.05, 0.055]) {
  const g = new THREE.CylinderGeometry(r, r, w, 12).rotateZ(Math.PI / 2).translate(x, y, z).toNonIndexed();
  const p = g.attributes.position.array, n = g.attributes.normal.array;
  for (let i = 0; i < p.length / 3; i++) {
    o.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]); o.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
    const hub = Math.abs(n[i * 3]) > 0.9 ? 0.55 : 1;           // mặt bên: mâm xám
    o.col.push(...(hub < 1 ? [0.42, 0.43, 0.45] : col)); o.tint.push(0); o.glow.push(0); o.gloss.push(0); o.flash.push(0);
  }
}
const mk = () => ({ pos: [], nor: [], col: [], tint: [], glow: [], gloss: [], flash: [] });
const PAINT = [1, 1, 1], GLASS = [0.05, 0.07, 0.09], DARK = [0.08, 0.08, 0.09], TRIM = [0.25, 0.25, 0.27];
const HEAD = [1.0, 0.95, 0.85], TAIL = [0.9, 0.05, 0.03];
const T = { tint: true }, G = { gloss: true }, L = { glow: true };
// khối có dịch tâm x (hexa dựng quanh x = 0)
function boxAt(o, cx, cy, cz, sx, sy, sz, col, flags = {}) {
  const n0 = o.pos.length;
  box(o, cy, cz, sx, sy, sz, col, flags);
  for (let i = n0; i < o.pos.length; i += 3) o.pos[i] += cx;
}
function lamps(o, hw, y, zf, zr, w = 0.3) {
  for (const s of [-1, 1]) {
    boxAt(o, s * (hw - w / 2 - 0.05), y, zf - 0.02, w, 0.13, 0.05, HEAD, L);
    boxAt(o, s * (hw - w / 2 - 0.05), y, zr + 0.02, w, 0.12, 0.05, TAIL, L);
  }
}

// xe con kiểu sedan (dài 4.5 m, đầu xe ở -z)
function sedan(o, { L: len = 4.5, W = 1.75, H = 1.44, taxi = false } = {}) {
  const hw = W / 2, z0 = -len / 2, z1 = len / 2;
  hexa(o, [hw, z0 + 0.1, z1 - 0.05, 0.32], [hw, z0, z1, 0.92], PAINT, T);                                  // thân dưới
  hexa(o, [hw - 0.06, z0 + 1.05, z1 - 0.55, 0.92], [hw - 0.2, z0 + 1.65, z1 - 1.05, H - 0.05], GLASS, G);    // cabin kính
  hexa(o, [hw - 0.2, z0 + 1.66, z1 - 1.06, H - 0.06], [hw - 0.22, z0 + 1.7, z1 - 1.1, H], PAINT, T);         // mui
  boxAt(o, 0, 0.42, z0 + 0.02, W - 0.1, 0.18, 0.12, TRIM);                                                 // cản trước
  boxAt(o, 0, 0.42, z1 - 0.02, W - 0.1, 0.18, 0.12, TRIM);
  lamps(o, hw, 0.78, z0, z1);
  for (const [x, z] of [[-1, z0 + 0.85], [1, z0 + 0.85], [-1, z1 - 0.8], [1, z1 - 0.8]]) wheel(o, x * (hw - 0.1), 0.32, z, 0.32, 0.24);
  if (taxi) boxAt(o, 0, H + 0.11, z0 + 2.0, 0.5, 0.2, 0.22, [1.0, 0.85, 0.4], L);                           // đèn mào taxi
}
// xe kei (hộp cao, ngắn)
function kei(o) {
  const len = 3.4, hw = 0.74, z0 = -len / 2, z1 = len / 2;
  hexa(o, [hw, z0 + 0.05, z1, 0.3], [hw, z0, z1, 0.95], PAINT, T);
  hexa(o, [hw - 0.03, z0 + 0.35, z1 - 0.1, 0.95], [hw - 0.1, z0 + 0.75, z1 - 0.15, 1.6], GLASS, G);
  hexa(o, [hw - 0.1, z0 + 0.76, z1 - 0.16, 1.6], [hw - 0.1, z0 + 0.78, z1 - 0.18, 1.65], PAINT, T);
  boxAt(o, 0, 0.38, z0 + 0.01, 1.4, 0.16, 0.1, TRIM);
  lamps(o, hw, 0.8, z0, z1, 0.26);
  for (const [x, z] of [[-1, z0 + 0.55], [1, z0 + 0.55], [-1, z1 - 0.55], [1, z1 - 0.55]]) wheel(o, x * (hw - 0.08), 0.28, z, 0.28, 0.2);
}
// xe van / minivan
function van(o) {
  const len = 4.7, hw = 0.85, z0 = -len / 2, z1 = len / 2;
  hexa(o, [hw, z0 + 0.05, z1, 0.33], [hw, z0, z1, 1.05], PAINT, T);
  hexa(o, [hw - 0.03, z0 + 0.7, z1 - 0.05, 1.05], [hw - 0.08, z0 + 1.2, z1 - 0.1, 1.85], GLASS, G);
  hexa(o, [hw - 0.08, z0 + 1.21, z1 - 0.11, 1.85], [hw - 0.08, z0 + 1.25, z1 - 0.13, 1.92], PAINT, T);
  boxAt(o, 0, 0.42, z0 + 0.01, 1.62, 0.18, 0.1, TRIM);
  lamps(o, hw, 0.85, z0, z1);
  for (const [x, z] of [[-1, z0 + 0.8], [1, z0 + 0.8], [-1, z1 - 0.8], [1, z1 - 0.8]]) wheel(o, x * (hw - 0.1), 0.33, z, 0.33, 0.24);
}
// xe buýt thành phố (dài 10.5 m): thân trắng + dải màu (tint), dải kính hai bên, bảng tuyến LED cam
function bus(o) {
  const len = 10.5, hw = 1.25, z0 = -len / 2, z1 = len / 2;
  hexa(o, [hw, z0, z1, 0.35], [hw, z0, z1, 1.15], [0.92, 0.92, 0.9], {});
  hexa(o, [hw + 0.005, z0 + 0.2, z1 - 0.2, 1.0], [hw + 0.005, z0 + 0.2, z1 - 0.2, 1.18], PAINT, T);         // dải màu hãng
  hexa(o, [hw, z0 + 0.02, z1, 1.15], [hw, z0 + 0.02, z1, 2.65], GLASS, G);                                  // dải kính
  hexa(o, [hw, z0, z1, 2.65], [hw - 0.05, z0 + 0.05, z1 - 0.05, 3.1], [0.9, 0.9, 0.88], {});                // mui
  boxAt(o, 0, 2.85, z0 - 0.01, 1.7, 0.3, 0.05, [1.0, 0.55, 0.1], L);                                       // bảng tuyến
  for (let k = 0; k < 4; k++) boxAt(o, -hw - 0.01, 1.9, z0 + 1.5 + k * 2.2, 0.02, 1.4, 0.08, TRIM);          // khung cửa sổ
  for (let k = 0; k < 4; k++) boxAt(o, hw + 0.01, 1.9, z0 + 1.5 + k * 2.2, 0.02, 1.4, 0.08, TRIM);
  lamps(o, hw, 0.75, z0, z1, 0.35);
  for (const [x, z] of [[-1, z0 + 2.2], [1, z0 + 2.2], [-1, z1 - 2.4], [1, z1 - 2.4]]) wheel(o, x * (hw - 0.15), 0.45, z, 0.45, 0.3);
}
// xe máy (tay ga) + người lái đội mũ bảo hiểm
function scooter(o) {
  hexa(o, [0.18, -0.6, 0.6, 0.25], [0.2, -0.5, 0.75, 0.7], PAINT, T);                                     // thân + yên
  boxAt(o, 0, 0.78, 0.25, 0.3, 0.1, 0.6, DARK);                                                           // yên
  hexa(o, [0.18, -0.75, -0.55, 0.3], [0.12, -0.72, -0.6, 1.05], PAINT, T);                                // cổ trước
  boxAt(o, 0, 1.05, -0.62, 0.62, 0.05, 0.05, DARK);                                                       // ghi đông
  boxAt(o, 0, 0.95, -0.76, 0.16, 0.1, 0.04, HEAD, L);
  boxAt(o, 0, 0.7, 0.78, 0.14, 0.07, 0.04, TAIL, L);
  wheel(o, 0, 0.25, -0.62, 0.25, 0.1); wheel(o, 0, 0.25, 0.62, 0.25, 0.1);
  // người lái
  const SHIRT = [0.16, 0.18, 0.22], PANTS = [0.12, 0.13, 0.16], SKIN = [0.75, 0.58, 0.46], HELM = [0.85, 0.85, 0.85];
  hexa(o, [0.2, 0.0, 0.35, 0.8], [0.19, -0.1, 0.2, 1.4], SHIRT, {});                                     // thân
  boxAt(o, 0, 0.82, -0.05, 0.36, 0.14, 0.55, PANTS);                                                      // đùi
  for (const s of [-1, 1]) {
    boxAt(o, s * 0.17, 0.45, -0.32, 0.1, 0.5, 0.12, PANTS);                                               // cẳng chân
    hexa(o, [0.05, -0.05, 0.08, 1.32], [0.05, -0.55, -0.45, 1.06], SHIRT, {});                            // tay (dịch x dưới)
    for (let i = o.pos.length - 108; i < o.pos.length; i += 3) o.pos[i] += s * 0.22;
  }
  boxAt(o, 0, 1.47, 0.02, 0.12, 0.1, 0.12, SKIN);
  boxAt(o, 0, 1.62, 0.02, 0.28, 0.26, 0.3, HELM, G);
}

// xe cảnh sát Nhật: thân dưới đen, nửa trên trắng, đèn ưu tiên đỏ trên nóc (nhấp nháy trái/phải)
function police(o) {
  const len = 4.6, W = 1.78, H = 1.45, hw = W / 2, z0 = -len / 2, z1 = len / 2, BLACK = [0.04, 0.04, 0.045], WHITE = [0.92, 0.92, 0.9];
  hexa(o, [hw, z0 + 0.1, z1 - 0.05, 0.32], [hw, z0, z1, 0.66], BLACK, {});
  hexa(o, [hw, z0, z1, 0.66], [hw, z0, z1, 0.92], WHITE, {});
  hexa(o, [hw - 0.06, z0 + 1.05, z1 - 0.55, 0.92], [hw - 0.2, z0 + 1.65, z1 - 1.05, H - 0.05], GLASS, G);
  hexa(o, [hw - 0.2, z0 + 1.66, z1 - 1.06, H - 0.06], [hw - 0.22, z0 + 1.7, z1 - 1.1, H], WHITE, {});
  boxAt(o, 0, H + 0.08, z0 + 2.2, 1.1, 0.14, 0.26, [1.0, 0.06, 0.04], { flash: true });
  boxAt(o, 0, 0.42, z0 + 0.02, W - 0.1, 0.18, 0.12, TRIM);
  lamps(o, hw, 0.78, z0, z1);
  for (const [x, z] of [[-1, z0 + 0.85], [1, z0 + 0.85], [-1, z1 - 0.8], [1, z1 - 0.8]]) wheel(o, x * (hw - 0.1), 0.32, z, 0.32, 0.24);
}
// xe cứu thương: van trắng cao, sọc đỏ, đèn ưu tiên đỏ
function ambulance(o) {
  const len = 5.4, hw = 0.95, z0 = -len / 2, z1 = len / 2, WHITE = [0.95, 0.95, 0.93], RED = [0.85, 0.08, 0.06];
  hexa(o, [hw, z0 + 0.05, z1, 0.35], [hw, z0, z1, 2.25], WHITE, {});
  hexa(o, [hw + 0.005, z0 + 0.1, z1 - 0.05, 0.95], [hw + 0.005, z0 + 0.1, z1 - 0.05, 1.12], RED, {});
  hexa(o, [hw + 0.006, z0 - 0.005, z0 + 1.4, 1.3], [hw - 0.1, z0 + 0.45, z0 + 1.4, 2.0], GLASS, G);         // kính lái
  boxAt(o, 0, 2.33, z0 + 0.6, 1.3, 0.16, 0.3, RED, { flash: true });
  boxAt(o, 0, 0.45, z0 + 0.01, 1.8, 0.2, 0.1, TRIM);
  lamps(o, hw, 0.85, z0, z1);
  for (const [x, z] of [[-1, z0 + 0.9], [1, z0 + 0.9], [-1, z1 - 0.9], [1, z1 - 0.9]]) wheel(o, x * (hw - 0.1), 0.35, z, 0.35, 0.26);
}

const TYPES = {
  police: { build: police, len: 4.6, wid: 1.78, v: [40, 40], max: 2 },
  ambulance: { build: ambulance, len: 5.4, wid: 1.9, v: [40, 40], max: 2 },
  sedan: { build: (o) => sedan(o), len: 4.5, wid: 1.75, v: [38, 52], max: 40 },
  taxi: { build: (o) => sedan(o, { taxi: true }), len: 4.5, wid: 1.75, v: [36, 50], max: 14 },
  kei: { build: kei, len: 3.4, wid: 1.48, v: [34, 48], max: 30 },
  van: { build: van, len: 4.7, wid: 1.7, v: [34, 46], max: 18 },
  bus: { build: bus, len: 10.5, wid: 2.5, v: [30, 40], max: 8 },
  scooter: { build: scooter, len: 1.6, wid: 0.7, v: [30, 44], max: 24 },
};
// tỉ lệ sinh + màu sơn (sRGB)
const MIX = [['sedan', 0.3], ['kei', 0.24], ['taxi', 0.1], ['van', 0.12], ['bus', 0.06], ['scooter', 0.18]];
const COLORS = {
  police: ['#ffffff'], ambulance: ['#ffffff'],
  sedan: ['#e8e8e6', '#1c1d20', '#8d9196', '#2a3550', '#6b0f14', '#c9c3b6'],
  taxi: ['#121314', '#1d5a3c', '#f1c232', '#e8e8e6'],
  kei: ['#f2f0ea', '#e7d9b8', '#9cc6d8', '#e6a8b4', '#4a4f55', '#c8d77a'],
  van: ['#ededea', '#b8bcc0', '#1c1d20', '#3d5a80'],
  bus: ['#1f6fb2', '#2b9a4a', '#d4382c', '#e39b17'],
  scooter: ['#d8d8d4', '#1c1d20', '#b0302c', '#2d6db5', '#e1c35a'],
};

export class CityTraffic {
  constructor(scene, road, city) {
    this.road = road;
    this.city = city;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.uLamp = { value: 0 }; this.uTime = { value: 0 }; this.uNpc = { value: 1 };
    this.emK = 1;                // hệ số đèn xe ưu tiên (bảng Lighting)
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.1 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uLamp = this.uLamp; sh.uniforms.uTime = this.uTime; sh.uniforms.uNpc = this.uNpc;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aTint, aGlow, aGloss, aFlash, aHonk;\nuniform float uTime;\nvarying float vGlow, vGloss;')
        .replace('#include <color_vertex>', `vColor = vec3(1.0);
          vColor *= color;
          #ifdef USE_INSTANCING_COLOR
            vColor = mix(vColor, vColor * instanceColor.xyz, aTint);
          #endif
          vGlow = aGlow; vGloss = aGloss;
          // xe sau bấm còi: nháy đèn pha (đèn trắng phía trước)
          if (aHonk > 0.5 && aGlow > 0.5 && color.r > 0.9 && color.b > 0.7) vGlow += 4.0 * step(0.5, fract(uTime * 4.0));
          // đèn ưu tiên: nửa trái / phải nhấp nháy xen kẽ
          if (aFlash > 0.5) vGlow = 3.0 * step(0.5, fract(uTime * 2.2 + (aFlash > 1.5 ? 0.5 : 0.0)));`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uLamp, uNpc;\nvarying float vGlow, vGloss;')
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.08, vGloss);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor * vGlow * (0.6 + 5.0 * uLamp) * uNpc;');
    };
    mat.customProgramCacheKey = () => 'city-vehicle';
    withMist(mat);
    this.meshes = {};
    for (const [k, def] of Object.entries(TYPES)) {
      const o = mk();
      def.build(o);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(o.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(o.nor, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(o.col, 3));
      g.setAttribute('aTint', new THREE.Float32BufferAttribute(o.tint, 1));
      g.setAttribute('aGlow', new THREE.Float32BufferAttribute(o.glow, 1));
      g.setAttribute('aGloss', new THREE.Float32BufferAttribute(o.gloss, 1));
      g.setAttribute('aFlash', new THREE.Float32BufferAttribute(o.flash, 1));
      const im = new THREE.InstancedMesh(g, mat, def.max);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(def.max * 3), 3);
      im.honk = new THREE.InstancedBufferAttribute(new Float32Array(def.max), 1).setUsage(THREE.DynamicDrawUsage);
      g.setAttribute('aHonk', im.honk);
      im.count = 0; im.castShadow = true; im.frustumCulled = false;
      this.group.add(im);
      this.meshes[k] = im;
    }
    this.cars = [];            // { type, s, d, dir, v, vMax, len, wid, color, lane, cross?: {n, u, a, dir} }
    this.ctrl = { lane: null, maxV: Infinity };
    this._p = {}; this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._one = new THREE.Vector3(1, 1, 1);
    this._c = new THREE.Color(); this._up = new THREE.Vector3(0, 1, 0);
    this.crossTimers = new Map();
    this.filled = false;
    this.density = 1;          // hệ số mật độ xe (bảng 🚦)
    this.speedK = 1;           // hệ số tốc độ xe khác
  }

  set visible(v) { this.group.visible = v; if (v) this._emSetup(); if (!v) { this.releaseModels(); this.cars.length = 0; this.filled = false; this.crossTimers.clear(); } }
  get visible() { return this.group.visible; }

  // xe kịch bản (cảnh sát / cấp cứu): chạy tới quãng `to` rồi dừng, bỏ qua đèn; script = null => chạy tiếp như xe thường
  spawnScripted(type, s, d, dir, to, v = 15) {
    const c = this._new(type, { s, d, home: d, dir, color: '#ffffff' });
    c.color = '#ffffff'; c.vMax = 12; c.v = v;
    c.script = { to, v, arrived: false };
    this.cars.push(c);
    return c;
  }
  // xe đang kẹt ngay sau xe mình (cùng làn, ≤ 30 m, gần như đứng yên)
  stuckBehind(s, d) {
    return this.cars.filter((c) => !c.cross && !c.script && !c.crashed && c.dir > 0 && Math.abs(c.d - d) < 1.8 && c.s < s && s - c.s < 30 && c.v < 0.6);
  }
    // bỏ hết xe model của chú khỏi phố (tắt tuỳ chọn / rời phố)
  releaseModels() {
    this.cars = this.cars.filter((c) => !c.model || c.crashed);
    if (this.pool) for (const v of this.pool()) if (v.cityBusy) { v.cityBusy = false; v.busy = false; v.root.visible = false; }
  }
  remove(c) { const i = this.cars.indexOf(c); if (i >= 0) this.cars.splice(i, 1); }
  // xe (đường chính hoặc đường ngang) chồng lên hình chữ nhật [s ± len/2] × [d ± wid/2] (toạ độ đường chính)
  hitTest(s, d, len, wid) {
    for (const c of this.cars) {
      let cs, cd, cl, cw;
      if (c.cross) { cs = this.road.junction(c.cross.n) + c.cross.a; cd = c.cross.u; cl = c.wid; cw = c.len; }
      else { cs = c.s; cd = c.d; cl = c.len; cw = c.wid; }
      if (Math.abs(cs - s) < (len + cl) / 2 - 0.25 && Math.abs(cd - d) < (wid + cw) / 2 - 0.15) return c;
    }
    return null;
  }

  _pick() {
    let k = Math.random(), t = 'sedan';
    for (const [n, w] of MIX) { if ((k -= w) < 0) { t = n; break; } }
    if (this.cars.filter((c) => c.type === t).length >= TYPES[t].max) t = 'sedan';
    if (this.cars.filter((c) => c.type === t).length >= TYPES[t].max) return null;
    return t;
  }
  _new(type, extra) {
    const def = TYPES[type], cols = COLORS[type];
    const v = (def.v[0] + Math.random() * (def.v[1] - def.v[0])) * KMH * (type === 'police' || type === 'ambulance' ? 1 : this.speedK);
    return Object.assign({ type, len: def.len, wid: def.wid, vMax: v, v, color: cols[Math.floor(Math.random() * cols.length)], lat: 0 }, extra);
  }
  // làn đường chính còn chỗ tại s (không xe nào trong ±gap)
  _free(s, d, gap) {
    for (const c of this.cars) if (!c.cross && Math.abs(c.d - d) < 1.8 && Math.abs(c.s - s) < gap) return false;
    return true;
  }

  // dt; s, d, v: xe mình; lamps 0..1
  update(dt, s, d, v, lamps, playerLen = 4.6) {
    if (!this.group.visible) return;
    this.uLamp.value = lamps; this.uTime.value += dt; this._dt = dt;
    // xe model của chú: thả lại xe không còn chạy trong phố
    if (this.pool) {
      const used = new Set(this.cars.filter((c) => c.model).map((c) => c.model));
      for (const v of this.pool()) if (v.cityBusy && !used.has(v)) { v.cityBusy = false; v.busy = false; v.root.visible = false; }
    }
    const road = this.road, lanes = CITY.lanes;
    // ---- sinh xe đường chính ----
    if (!this.filled) {
      this.filled = true;
      for (const dir of [1, -1]) for (const l of lanes) {
        for (let x = s - BEHIND + Math.random() * 40; x < s + AHEAD; x += (MAIN_GAP[0] + Math.random() * (MAIN_GAP[1] - MAIN_GAP[0])) / this.density) {
          const dd = dir * l;
          if (Math.abs(x - s) < 15 && Math.abs(dd - d) < 2) continue;
          const t = this._pick(); if (!t) continue;
          this.cars.push(this._new(t, { s: x, d: dd, home: dd, dir }));
        }
      }
    }
    for (const dir of [1, -1]) for (const l of lanes) {
      const dd = dir * l;
      // xe ngược chiều: vào từ xa phía trước; cùng chiều: vào từ phía sau (xe mình chậm) hoặc phía trước (xe mình nhanh)
      const at = dir < 0 ? s + AHEAD - 10 : v < 10 ? s - BEHIND + 10 : s + AHEAD - 10;
      if (Math.random() < dt * 0.35 * Math.min(1, this.density) && this._free(at, dd, MAIN_GAP[0] / this.density + 10) && Math.abs(at - s) > 30) {
        const free = this.useModels && this.pool && Math.random() < 0.35 ? this.pool().find((x) => !x.busy && !x.carriage) : null;
        if (free) {                                          // thỉnh thoảng là xe model của chú
          free.busy = free.cityBusy = true;
          const vm = (36 + Math.random() * 14) * KMH * this.speedK;
          this.cars.push({ type: 'model', model: free, s: at, d: dd, home: dd, dir, len: free.dim.length, wid: free.dim.width, vMax: dir > 0 && at > s ? Math.min(vm, Math.max(4, v - 2)) : vm, v: vm, lat: 0, color: '#ffffff' });
        } else {
          const t = this._pick();
          if (t) { const c = this._new(t, { s: at, d: dd, home: dd, dir }); if (dir > 0 && at > s) c.vMax = Math.min(c.vMax, Math.max(4, v - 2)); this.cars.push(c); }
        }
      }
    }
    // ---- xe đường ngang ở các ngã tư gần ----
    const n0 = road.junctionIndex(s - 60), n1 = road.junctionIndex(s + 330);
    for (let n = n0; n < n1; n++) {
      for (const du of [1, -1]) {                                // du: hướng chạy theo trục u (+r / -r)
        const key = n * 2 + (du > 0 ? 1 : 0);
        let tm = this.crossTimers.get(key);
        if (tm === undefined) tm = Math.random() * 4;
        tm -= dt;
        if (tm <= 0) {
          tm = (3 + Math.random() * 6) / Math.max(0.05, this.density);   // mật độ thấp => xe đường ngang thưa
          const u0 = -du * CROSS_R, a = du > 0 ? -1.75 : 1.75;
          const busy = this.cars.some((c) => c.cross && c.cross.n === n && c.cross.du === du && Math.abs(c.cross.u - u0) < 14);
          const t = this._pick();
          if (!busy && t && t !== 'bus') this.cars.push(this._new(t, { cross: { n, u: u0, a, du } }));
        }
        this.crossTimers.set(key, tm);
      }
    }
    for (const k of this.crossTimers.keys()) { const n = Math.floor(k / 2); if (n < n0 - 1 || n > n1) this.crossTimers.delete(k); }

    // ---- chuyển động ----
    const player = { s, d, v, len: playerLen, wid: 1.9, dir: 1, player: true };
    const main = this.cars.filter((c) => !c.cross);
    const ahead = (A, lane) => {              // xe gần nhất phía trước A trong làn lane (đường chính)
      let best = null, bg = Infinity;
      for (const e of main.concat([player])) {
        if (e === A || Math.abs(e.d - lane) > (e.wid || 1.8) / 2 + A.wid / 2 + 0.2) continue;
        const x = (e.s - A.s) * A.dir - (e.len + A.len) / 2;
        if (x > -0.5 && x < bg) { bg = x; best = e; }
      }
      return best ? { e: best, gap: bg } : null;
    };
    const follow = (vl, gap) => Math.max(0, vl + 0.6 * (gap - (4 + 1.0 * vl)));
    for (const c of main) {
      if (c.crashed) { c.v = 0; c.lat = 0; continue; }
      if (c.script) {
        const dist = (c.script.to - c.s) * c.dir;
        const w = dist <= 0.2 ? 0 : Math.min(c.script.v, Math.sqrt(2 * 3.5 * dist));
        c.v += Math.max(-8 * dt, Math.min(3 * dt, w - c.v));
        if (dist <= 0.2) { c.v = 0; c.script.arrived = true; }
        c.s += c.dir * Math.max(0, c.v) * dt;
        const err = c.home - c.d; c.lat = Math.sign(err) * Math.min(1.3, Math.abs(err) * 2); c.d += c.lat * dt;
        continue;
      }
      let want = c.vMax;
      const f = ahead(c, c.d);
      if (f) {
        if (f.e.dir === c.dir || f.e.player) want = Math.min(want, follow(f.e.v * (f.e.dir === c.dir ? 1 : 0), f.gap));
        else want = Math.min(want, Math.max(0, (f.gap - 6) * 0.5));
        // vượt: sang làn cùng chiều bên cạnh khi xe trước chậm và làn kia trống
        if (!c.changing && f.gap < 35 && f.e.v < c.vMax - 2.5 && (f.e.dir === c.dir || f.e.player)) {
          const other = c.dir * (Math.abs(c.home) < 3.5 ? lanes[1] : lanes[0]);
          const clear = !main.concat([player]).some((e) => e !== c && Math.abs(e.d - other) < 2.2 && (e.s - c.s) * c.dir > -18 - (e.len + c.len) / 2 && (e.s - c.s) * c.dir < 25);
          if (clear) { c.home = other; c.changing = true; }
        }
      }
      const st = this.city.stopAhead(c.s + c.dir * c.len / 2, c.dir, c.v);
      if (st < Infinity) want = Math.min(want, Math.sqrt(2 * 3 * Math.max(0, st - 1.2)));
      c.v += Math.max(-7 * dt, Math.min(2.2 * dt, want - c.v));
      c.v = Math.max(0, c.v);
      c.s += c.dir * c.v * dt;
      const err = c.home - c.d, lv = Math.sign(err) * Math.min(1.3, Math.abs(err) * 2);
      c.lat = lv;
      c.d += lv * dt;
      if (Math.abs(err) < 0.03) { c.d = c.home; c.changing = false; c.lat = 0; }
    }
    // xe đường ngang (trục u của ngã tư n)
    const HW = CITY.hw;
    for (const c of this.cars) {
      if (!c.cross) continue;
      if (c.crashed) { c.v = 0; continue; }
      const X = c.cross;
      let want = c.vMax;
      for (const e of this.cars) {
        if (e === c || !e.cross || e.cross.n !== X.n || e.cross.du !== X.du) continue;
        const gap = (e.cross.u - X.u) * X.du - (e.len + c.len) / 2;
        if (gap > -0.5) want = Math.min(want, follow(e.v, gap));
      }
      const line = -X.du * (HW + 4.2), front = X.u + X.du * c.len / 2, dist = (line - front) * X.du;
      if (dist > -0.5) {
        const ph = this.city._phase(X.n).cross;
        if (ph === 2 || (ph === 1 && dist > c.v * c.v / 6)) want = Math.min(want, Math.sqrt(2 * 3 * Math.max(0, dist - 0.5)));
      }
      c.v += Math.max(-7 * dt, Math.min(2.2 * dt, want - c.v));
      c.v = Math.max(0, c.v);
      X.u += X.du * c.v * dt;
    }
    // bỏ xe ra khỏi vùng
    this.cars = this.cars.filter((c) => (c.crashed || c.script) ? true : c.cross ? Math.abs(c.cross.u) <= CROSS_R + 2 && c.cross.n >= n0 - 1 : c.s > s - BEHIND - 20 && c.s < s + AHEAD + 40);

    // ---- xe mình bám xe trước cùng làn ----
    const fp = ahead(player, d);
    this.ctrl.maxV = fp && fp.e.dir === 1 ? follow(fp.e.v, fp.gap) : Infinity;

    // ---- vẽ ----
    const counts = {};
    for (const k in this.meshes) counts[k] = 0;
    const m = this._m, q = this._q, vv = this._v, p = this._p;
    for (const c of this.cars) {
      if (c.model) {                                         // xe model của chú (Mustang / Mazda) chạy trong phố
        const v = c.model;
        road.at(c.s, p);
        v.root.position.set(p.x + Math.cos(p.th) * c.d, p.y, p.z - Math.sin(p.th) * c.d);
        v.root.rotation.set(0, p.th + (c.dir < 0 ? Math.PI : 0) - c.dir * Math.atan2(c.lat, Math.max(3, c.v)), 0, 'YXZ');
        v.root.visible = true;
        for (const w of v.wheels) w.pivot.rotation.x += c.dir * (c.v * this._dt) / w.radius;
        updateHeadlights(v.headlights, v.root, this.camera, Math.max(0.15, lamps) * 0.24 * this.uNpc.value);
        for (const t of v.tails) t.material.opacity = (0.25 + 0.6 * lamps) * 0.6;
        continue;
      }
      const im = this.meshes[c.type], i = counts[c.type]++;
      if (i >= TYPES[c.type].max) continue;
      let yaw;
      if (c.cross) {
        const F = this._frame(c.cross.n);
        const x = F.x + F.fx * c.cross.a + F.rx * c.cross.u, z = F.z + F.fz * c.cross.a + F.rz * c.cross.u;
        vv.set(x, this.city.groundJ(F, c.cross.u) + 0.05, z);
        yaw = F.th + (c.cross.du > 0 ? -Math.PI / 2 : Math.PI / 2);
      } else {
        road.at(c.s, p);
        vv.set(p.x + Math.cos(p.th) * c.d, p.y + 0.05, p.z - Math.sin(p.th) * c.d);
        yaw = p.th + (c.dir < 0 ? Math.PI : 0) - c.dir * Math.atan2(c.lat, Math.max(3, c.v));   // thân xoay theo hướng đổi làn
      }
      q.setFromAxisAngle(this._up, yaw);
      m.compose(vv, q, this._one);
      im.setMatrixAt(i, m);
      im.setColorAt(i, this._c.set(c.color));
      if (c.type === 'police' || c.type === 'ambulance') { (c._pos ||= new THREE.Vector3()).copy(vv); c._yaw = yaw; }
      im.honk.setX(i, c.honk ? 1 : 0);
    }
    for (const k in this.meshes) {
      const im = this.meshes[k];
      im.count = Math.min(counts[k], TYPES[k].max);
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.honk.needsUpdate = true;
    }
    this._emUpdate(lamps);
  }

  // đèn xe ưu tiên giống xe mình: đèn pha (quầng + xe cảnh sát có cặp SpotLight thật) + quầng đèn hiệu trên nóc nhấp nháy đổi màu
  // (cảnh sát đỏ/xanh, cấp cứu đỏ/trắng) + 1 PointLight màu đèn hiệu hắt ra xung quanh. Tạo 1 lần khi vào map Phố (số đèn cố định).
  setup(scene, softTex, camera) { this.scene = scene; this.softTex = softTex; this.camera = camera; }
  _emSetup() {
    if (this.em || !this.scene) return;
    const mk = (kind, spots, dim, bar) => {
      const root = new THREE.Group();
      const head = createHeadlights(root, this.softTex, { spots, glows: true });
      placeHeadlights(head, dim);
      const bars = [-1, 1].map((s) => {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.softTex, color: 0xff2010, transparent: true, opacity: 0,
          depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
        sp.position.set(s * bar[0], bar[1], bar[2]); sp.scale.set(2.6, 1.8, 1); sp.renderOrder = 6;
        root.add(sp);
        return sp;
      });
      root.visible = false;
      this.scene.add(root);
      return { kind, root, head, bars };
    };
    this.em = {
      police: mk('police', true, { width: 1.78, length: 4.6, height: 1.45 }, [0.36, 1.6, -0.1]),
      ambulance: mk('ambulance', false, { width: 1.9, length: 5.4, height: 2.25 }, [0.42, 2.45, -2.1]),
    };
    this.emPoint = new THREE.PointLight(0xff2010, 0, 48, 1.3);
    this.scene.add(this.emPoint);
  }
  _emUpdate(lamps) {
    if (!this.em) return;
    const on = Math.floor(this.uTime.value * 2.2) % 2;
    let pointSet = false;
    for (const kind of ['police', 'ambulance']) {
      const R = this.em[kind], c = this.cars.find((x) => x.type === kind && x._pos);
      R.root.visible = !!c;
      if (!c) { updateHeadlights(R.head, R.root, null, 0); continue; }
      R.root.position.copy(c._pos); R.root.rotation.set(0, c._yaw, 0);
      updateHeadlights(R.head, R.root, this.camera, Math.max(0.75, lamps) * 1.25 * this.emK);
      R.bars.forEach((sp) => sp.scale.set(2.6 * Math.sqrt(this.emK), 1.8 * Math.sqrt(this.emK), 1));
      const colA = kind === 'police' ? 0xff1a0c : 0xff1a0c, colB = kind === 'police' ? 0x1f4dff : 0xffffff;
      R.bars.forEach((sp, i) => {
        const lit = (i === on);
        sp.material.color.setHex(i === 0 ? colA : colB);
        sp.material.opacity = lit ? Math.min(1, this.emK) : 0.06;
      });
      if (!pointSet) {                                     // ánh đèn hiệu hắt ra (ưu tiên xe cảnh sát)
        pointSet = true;
        this.emPoint.position.set(c._pos.x, c._pos.y + 2.2, c._pos.z);
        this.emPoint.color.setHex(on === 0 ? colA : colB);
        this.emPoint.intensity = 15 * this.emK;
      }
    }
    if (!pointSet) this.emPoint.intensity = 0;
  }

  // khung ngã tư n (nhớ lại vài cái gần nhất)
  _frame(n) {
    this._fc ||= new Map();
    let F = this._fc.get(n);
    if (!F) {
      F = this.city._frame(this.road.junction(n));
      this._fc.set(n, F);
      if (this._fc.size > 40) this._fc.delete(this._fc.keys().next().value);
    }
    return F;
  }
}
