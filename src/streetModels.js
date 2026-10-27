import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { withMist } from './mist.js';
import { PED_BONES, PED_BONE, PED_GLSL, bakePedWalk, pedWalkTexture, loadPedRig } from './pedWalk.js';

// Người đi bộ dùng model 3D (Setting 🚶 "Người 3D", mặc định tắt): CityPeople gọi begin / add / end thay cho hình người hộp.
// - 13 model gốc ở `models/street-human/` (không đưa lên web); bản nén (simplify ~5k tam giác, webp 512, meshopt) ở
//   `docs/assets/models/people/`. Không model nào có animation => dựng sẵn khi tải: chuẩn hoá cao / hướng (mặt = −z, chân ở y = 0),
//   model chữ T hạ tay xuống (có xương: xoay xương cánh tay; không xương: xoay khối tay quanh vai), rồi gắn trọng số chân / tay
//   cho từng đỉnh (có xương: theo trọng số xương; không xương: theo vị trí) để vertex shader đung đưa theo pha bước như người hộp.
// - Mỗi model × mỗi vật liệu = 1 InstancedMesh (cùng dùng 1 instanceMatrix / aWalk của model đó).
const DIR = 'assets/models/people/';
// h: chiều cao (m); tpose: hạ tay; legs: false = váy dài (không tách chân); armX: tay ở ngoài |x| > armX·H (model không xương)
// Tuỳ chọn (model không xương): armY0 / armY1 = dải y của tay (×h); armMax = |x| tối đa (×h); armSwing / legSwing = biên độ;
//   legY = ngưỡng chân (×h); hip / sh = khớp háng / vai (×h); arms: false = không đung đưa tay;
//   smooth = số vòng làm mượt trọng số theo lưới (tránh rách / cắt ngang tiết diện tay); armSkip = tên vật liệu không gắn tay;
//   armDrop = góc hạ tay A-pose xuống sát thân (rad); armPitch = góc đưa tay về sau (rad); armSoft = độ rộng mép chuyển thân → tay (×h)
export const PEOPLE_MODELS = [
  { id: 'mixamo-man', h: 1.78, tpose: true },
  { id: 'discord-guy', h: 1.76, tpose: true },
  { id: 'ps1-man', h: 1.75 },
  { id: 'stan', h: 1.72, armX: 0.15, armSoft: 0.08, armDrop: 0.45 },
  { id: 'racer', h: 1.76, armX: 0.14, armSoft: 0.06, armDrop: 0.25 },
  { id: 'ff-jota', h: 1.78, tpose: true, armDrop: 0.12 },
  { id: 'ff-skyler', h: 1.77, armX: 0.13, armSoft: 0.1, armDrop: 0.45 },
  { id: 'ff-purple', h: 1.66, armX: 0.13, smooth: 3, armDrop: 0.35 },
  { id: 'ff-safari', h: 1.65, armX: 0.14, smooth: 3, armDrop: 0.35 },
  { id: 'ff-green', h: 1.67, armX: 0.15, armMax: 0.15, armSwing: 0.7, legs: false, smooth: 7 },
  { id: 'ff-black', h: 1.64, armX: 0.13, smooth: 2, armDrop: 0.25 },
  { id: 'ff-mask', h: 1.66, armX: 0.1, smooth: 6, armDrop: 0.2 },
  { id: 'hijab', h: 1.63, armX: 0.15, legs: false, smooth: 3, armDrop: 0.45, armPitch: 0.4 },
];
const HIP = 0.52, SH = 0.815;              // khớp háng / vai theo tỉ lệ chiều cao
// tay model vung 50 % biên độ clip: phần lớn model tay dính liền thân áo => vung / gập khuỷu nhiều thì lưới nách dãn (scripts/check-people-walk.mjs)
export const MODEL_WALK = { arm: 0.5 };

// khớp của model (cho nướng clip nhân vật chính, pedWalk.js): co giãn khớp người hộp — chân theo độ cao háng, thân theo háng → vai,
// tay theo chiều cao (đo từ vai xuống). axes: { upper_l: [điểm, hướng], thigh_r: … } trục tay / chân đo trên lưới (fitLimbs)
// => khớp tay / chân nằm trên trục đó và fix quay trục về thẳng đứng
function modelJoints(def, axes = {}) {
  const h = def.h, hip = (def.hip ?? HIP) * h, sh = (def.sh ?? SH) * h, k = h / 1.79, fix = [];
  const joints = PED_BONES.map(([name, , [x, y, z]], i) => {
    const arm = /^(upper|fore|hand)/.test(name), side = name.slice(-2);
    const ny = arm ? sh - (1.4 - y) * k : y <= 0.86 ? y * hip / 0.86 : hip + (y - 0.86) * (sh - hip) / (1.4 - 0.86);
    const ax = axes[(arm ? 'upper' : 'thigh') + side];
    if (ax && (arm || /^(thigh|calf|foot)/.test(name))) {
      const [p, d] = ax, top = arm ? sh : hip, t = (top - ny) / -d.y;   // khớp trên trục, cách khớp gốc theo chiều dài khúc
      const o = new THREE.Vector3(...p).addScaledVector(d, (top - p[1]) / d.y);
      fix[i] = new THREE.Quaternion().setFromUnitVectors(d, new THREE.Vector3(0, -1, 0));
      return [o.x + d.x * t, o.y + d.y * t, o.z + d.z * t];
    }
    return [arm ? Math.sign(x) * 0.145 * h : x * k, ny, z * k];
  });
  return { joints, fix };
}
// trục tay / chân mỗi bên: đường nối trọng tâm nửa trên và nửa dưới các đỉnh thuộc hẳn tay / chân (trọng số ≥ 0.8)
function fitLimbs(def, parts) {
  const axes = {};
  for (const [key, w, lim] of [['upper', 'arm', 0], ['thigh', 'leg', 0]]) for (const side of ['_l', '_r']) {
    const pts = [];
    for (const { P, LG, AM } of parts) for (let i = 0; i < LG.length; i++) {
      const v = (w === 'arm' ? AM[i] / (def.armSwing ?? 1) : LG[i] / (def.legSwing ?? 1)) * (side === '_r' ? 1 : -1);
      if (v >= 0.8) pts.push(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]);
    }
    if (pts.length < 30) continue;
    const ys = []; for (let i = 1; i < pts.length; i += 3) ys.push(pts[i]);
    ys.sort((a, b) => a - b);
    const mid = ys[ys.length >> 1], hi = new THREE.Vector3(), lo = new THREE.Vector3();
    let nh = 0, nl = 0;
    for (let i = 0; i < pts.length; i += 3) {
      if (pts[i + 1] >= mid) { hi.x += pts[i]; hi.y += pts[i + 1]; hi.z += pts[i + 2]; nh++; } else { lo.x += pts[i]; lo.y += pts[i + 1]; lo.z += pts[i + 2]; nl++; }
    }
    hi.divideScalar(nh); lo.divideScalar(nl);
    const d = lo.clone().sub(hi).normalize();
    if (d.y > -0.7) continue;                            // không ra hướng thõng xuống => giữ khớp ước
    axes[key + side] = [hi.toArray(), d];
  }
  return axes;
}
// mỗi đỉnh gắn ≤ 2 xương (i0, i1, trọng số i0) theo trọng số chân / tay đã có (leg / arm có dấu = bên) và độ cao so với khớp
function skinVertex(J, y, leg, arm, bw) {
  const W = new Map(), put = (b, w) => w > 0 && W.set(b, (W.get(b) ?? 0) + w);
  const chain = (names, w) => {                        // khúc trên → dưới, trộn quanh khớp
    for (let c = 0; c < names.length; c++) {
      const top = c ? J[PED_BONE[names[c]]][1] : Infinity, bot = c + 1 < names.length ? J[PED_BONE[names[c + 1]]][1] : -Infinity;
      const a = THREE.MathUtils.clamp((y - bot) / bw + 0.5, 0, 1) * THREE.MathUtils.clamp((top - y) / bw + 0.5, 0, 1);
      put(PED_BONE[names[c]], a * w);
    }
  };
  const aw = Math.min(1, Math.abs(arm)), lw = Math.min(1, Math.abs(leg)) * (1 - aw);
  const sd = (v) => (v > 0 ? '_r' : '_l');
  if (aw) chain(['upper', 'fore', 'hand'].map((n) => n + sd(arm)), aw);
  if (lw) chain(['thigh', 'calf', 'foot'].map((n) => n + sd(leg)), lw);
  const body = 1 - aw - lw;
  if (body > 0) {                                      // đầu trên cổ, thân giữa, chậu dưới háng (váy dài: cả vạt váy theo chậu)
    const hA = THREE.MathUtils.clamp((y - J[PED_BONE.head][1]) / bw + 0.5, 0, 1), pA = THREE.MathUtils.clamp((J[PED_BONE.pelvis][1] - y) / bw + 0.5, 0, 1);
    put(PED_BONE.head, hA * body); put(PED_BONE.pelvis, pA * body); put(PED_BONE.spine, Math.max(0, 1 - hA - pA) * body);
  }
  const top = [...W].sort((a, b) => b[1] - a[1]);
  const [b0, w0] = top[0] ?? [PED_BONE.spine, 1], [b1, w1] = top[1] ?? [b0, 0];
  return [b0, b1, w0 / (w0 + w1)];
}

const _v = new THREE.Vector3(), _n = new THREE.Vector3(), _m = new THREE.Matrix4(), _m2 = new THREE.Matrix4(), _q = new THREE.Quaternion();

// xương cánh tay / đùi theo tên (Mixamo: LeftArm / RightUpLeg; kiểu khác: upper_arm_left / thigh_right)
const boneKind = (name) => /(left|right)arm(_\d+)?$|upper_?arm/i.test(name.replace(/^mixamorig_?/i, '')) ? 'arm'
  : /(left|right)upleg|thigh/i.test(name) ? 'leg' : null;

// hạ cánh tay chữ T: quay xương cánh tay để hướng vai→khuỷu chúc xuống ~72°
function lowerArmBones(root) {
  root.updateMatrixWorld(true);
  root.traverse((b) => {
    if (!b.isBone || boneKind(b.name) !== 'arm' || /_\d+_\d+$/.test(b.name)) return;
    const child = b.children.find((c) => c.isBone);
    if (!child) return;
    const p0 = new THREE.Vector3().setFromMatrixPosition(b.matrixWorld), p1 = new THREE.Vector3().setFromMatrixPosition(child.matrixWorld);
    const d = p1.sub(p0).normalize();
    if (Math.abs(d.y) > 0.6) return;                                      // đã buông xuống (chữ A)
    const t = new THREE.Vector3(Math.sign(d.x) * 0.3, -0.95, 0).normalize();
    const delta = new THREE.Quaternion().setFromUnitVectors(d, t);
    const wq = b.getWorldQuaternion(new THREE.Quaternion()), pq = b.parent.getWorldQuaternion(new THREE.Quaternion());
    b.quaternion.copy(pq.invert().multiply(delta.multiply(wq)));
    b.updateMatrixWorld(true);
  });
}

// đỉnh của 1 mesh trong toạ độ thế giới (có xương: tự skinning trên CPU) + trọng số chân / tay theo xương
function bakeMesh(mesh) {
  const g = mesh.geometry, pos = g.attributes.position, nor = g.attributes.normal, n = pos.count;
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3), K = mesh.isSkinnedMesh ? new Float32Array(n * 2) : null;
  let tags = null, bm = null;
  if (mesh.isSkinnedMesh) {
    const sk = mesh.skeleton;
    sk.update();
    bm = sk.bones.map((b, i) => new THREE.Matrix4().multiplyMatrices(b.matrixWorld, sk.boneInverses[i]));
    tags = sk.bones.map((b) => {                                          // 1 = chân, 2 = tay (xương đó hoặc cha của nó); dấu = bên x
      for (let o = b; o?.isBone; o = o.parent) {
        const k = boneKind(o.name);
        if (k) return { k: k === 'leg' ? 0 : 1, side: Math.sign(new THREE.Vector3().setFromMatrixPosition(o.matrixWorld).x) || 1 };
      }
      return null;
    });
  }
  const si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
  for (let i = 0; i < n; i++) {
    _v.fromBufferAttribute(pos, i); _n.set(0, 1, 0); if (nor) _n.fromBufferAttribute(nor, i);
    if (mesh.isSkinnedMesh) {
      _m.makeScale(0, 0, 0);
      const e = _m.elements;
      for (let j = 0; j < 4; j++) {
        const w = sw.getComponent(i, j); if (!w) continue;
        const bi = si.getComponent(i, j), be = bm[bi].elements;
        for (let k = 0; k < 16; k++) e[k] += be[k] * w;
        const t = tags[bi];
        if (t) K[i * 2 + t.k] += w * t.side;
      }
      _m2.multiplyMatrices(_m, mesh.bindMatrix).premultiply(mesh.bindMatrixInverse).premultiply(mesh.matrixWorld);
    } else _m2.copy(mesh.matrixWorld);
    _v.applyMatrix4(_m2); _n.transformDirection(_m2);
    P.set([_v.x, _v.y, _v.z], i * 3); N.set([_n.x, _n.y, _n.z], i * 3);
  }
  return { P, N, K };
}

// làm mượt trọng số chân / tay trên lưới (model không xương): ngưỡng |x| đang cắt ngang tiết diện tay => tay bị kéo dẹt / rách
function smoothWeights(geo, LG, AM, iters) {
  const pos = geo.attributes.position, n = pos.count, idx = geo.index?.array;
  if (!idx) return;
  const ids = new Map(), grp = new Int32Array(n);
  let ng = 0;
  for (let i = 0; i < n; i++) {
    const key = Math.round(pos.getX(i) * 1000) + ',' + Math.round(pos.getY(i) * 1000) + ',' + Math.round(pos.getZ(i) * 1000);
    let g = ids.get(key);
    if (g === undefined) { g = ng++; ids.set(key, g); }
    grp[i] = g;
  }
  const adj = Array.from({ length: ng }, () => []), seen = new Set();
  for (let t = 0; t < idx.length; t += 3) {
    const a = grp[idx[t]], b = grp[idx[t + 1]], c = grp[idx[t + 2]];
    for (const [u, v] of [[a, b], [b, c], [c, a]]) {
      if (u === v) continue;
      const key = u < v ? u * ng + v : v * ng + u;
      if (seen.has(key)) continue;
      seen.add(key); adj[u].push(v); adj[v].push(u);
    }
  }
  const gl = new Float32Array(ng), ga = new Float32Array(ng), gn = new Int32Array(ng);
  for (let i = 0; i < n; i++) { const g = grp[i]; gl[g] += LG[i]; ga[g] += AM[i]; gn[g]++; }
  for (let g = 0; g < ng; g++) { gl[g] /= gn[g]; ga[g] /= gn[g]; }
  const tl = new Float32Array(ng), ta = new Float32Array(ng);
  for (let it = 0; it < iters; it++) {
    for (let g = 0; g < ng; g++) {
      const nb = adj[g];
      if (!nb.length) { tl[g] = gl[g]; ta[g] = ga[g]; continue; }
      let sl = 0, sa = 0;
      for (const q of nb) { sl += gl[q]; sa += ga[q]; }
      tl[g] = gl[g] * 0.5 + (sl / nb.length) * 0.5;
      ta[g] = ga[g] * 0.5 + (sa / nb.length) * 0.5;
    }
    gl.set(tl); ga.set(ta);
  }
  for (let i = 0; i < n; i++) { const g = grp[i]; LG[i] = gl[g]; AM[i] = ga[g]; }
}
function smoothInto(L, LG, AM) { for (let i = 0; i < LG.length; i++) { L[i * 4] = LG[i]; L[i * 4 + 1] = AM[i]; } }

export async function buildModel(loader, def) {
  const gltf = await loader.loadAsync(DIR + def.id + '.glb');
  const root = gltf.scene;
  if (def.tpose) lowerArmBones(root);
  root.updateMatrixWorld(true);
  const parts = [];
  root.traverse((o) => { if (o.isMesh) parts.push({ mesh: o, ...bakeMesh(o) }); });
  // khung bao => chuẩn hoá: chân ở y = 0, giữa x / z = 0, cao def.h, quay 180° (model nhìn +z, game nhìn −z)
  const box = new THREE.Box3();
  for (const p of parts) for (let i = 0; i < p.P.length; i += 3) box.expandByPoint(_v.fromArray(p.P, i));
  const H = box.max.y - box.min.y, k = def.h / H, cx = (box.min.x + box.max.x) / 2, cz = (box.min.z + box.max.z) / 2;
  const out = [];
  for (const p of parts) {
    const { P, N, K, mesh } = p, n = P.length / 3, L = new Float32Array(n * 4);
    const LG = new Float32Array(n), AM = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let x = -(P[i * 3] - cx) * k, y = (P[i * 3 + 1] - box.min.y) * k, z = -(P[i * 3 + 2] - cz) * k;
      let nx = -N[i * 3], ny = N[i * 3 + 1], nz = -N[i * 3 + 2];
      const h = def.h, sx = Math.sign(x) || 1;
      let leg = 0, arm = 0;
      if (K) { leg = -K[i * 2]; arm = -K[i * 2 + 1]; }                  // đã lật x khi quay 180°
      else {
        if (def.tpose && y > 0.7 * h && Math.abs(x) > 0.12 * h) {       // hạ tay chữ T (không xương): xoay quanh vai
          const a = -sx * 1.22, c = Math.cos(a), s = Math.sin(a), px = sx * 0.11 * h, py = SH * h;
          const dx = x - px, dy = y - py;
          x = px + dx * c - dy * s; y = py + dx * s + dy * c;
          [nx, ny] = [nx * c - ny * s, nx * s + ny * c];
        }
        const ax = (def.armX ?? 0.12) * h;
        const skip = def.armSkip && (Array.isArray(mesh.material) ? mesh.material : [mesh.material])
          .some((m) => def.armSkip.includes(m?.name));
        const inArm = !skip && def.arms !== false && y > (def.armY0 ?? 0.36) * h && y < (def.armY1 ?? SH + 0.05) * h;
        if (inArm) arm = (def.armSwing ?? 1) * sx
          * THREE.MathUtils.clamp((Math.abs(x) - ax) / ((def.armSoft ?? 0.025) * h), 0, 1)
          * THREE.MathUtils.clamp(((def.armMax ?? Infinity) * h - Math.abs(x)) / (0.02 * h), 0, 1);   // armMax: chặn mềm phần vạt áo phía ngoài
        if (def.legs !== false && arm === 0) leg = (def.legSwing ?? 1) * sx * THREE.MathUtils.clamp(((def.legY ?? 0.47) * h - y) / (0.06 * h), 0, 1);
        if (arm && (def.armDrop || def.armPitch)) {                     // hạ tay A-pose sát thân / đưa tay về sau (xoay quanh vai, theo trọng số tay)
          const w = Math.min(1, Math.abs(arm)), py = (def.sh ?? SH) * h, px = sx * 0.11 * h;
          if (def.armDrop) {
            const a = -sx * def.armDrop * w, c = Math.cos(a), s = Math.sin(a), dx = x - px, dy = y - py;
            x = px + dx * c - dy * s; y = py + dx * s + dy * c;
            [nx, ny] = [nx * c - ny * s, nx * s + ny * c];
          }
          if (def.armPitch) {
            const a = -def.armPitch * w, c = Math.cos(a), s = Math.sin(a), dy = y - py;
            y = py + dy * c - z * s; z = dy * s + z * c;
            [ny, nz] = [ny * c - nz * s, ny * s + nz * c];
          }
        }
      }
      LG[i] = leg; AM[i] = arm;
      P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z; N[i * 3] = nx; N[i * 3 + 1] = ny; N[i * 3 + 2] = nz;
      L[i * 4] = leg; L[i * 4 + 1] = arm; L[i * 4 + 2] = (def.hip ?? HIP) * def.h; L[i * 4 + 3] = (def.sh ?? SH) * def.h;
    }
    if (!K && def.smooth) smoothWeights(mesh.geometry, LG, AM, def.smooth), smoothInto(L, LG, AM);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(P, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(N, 3));
    for (const a of ['uv', 'color']) if (mesh.geometry.attributes[a]) g.setAttribute(a, mesh.geometry.attributes[a]);
    g.setAttribute('aLimb', new THREE.BufferAttribute(L, 4));
    if (mesh.geometry.index) g.setIndex(mesh.geometry.index);
    // lật x đảo chiều tam giác => mặt trước thành mặt sau; trả lại thứ tự đỉnh
    const idx = g.index ? g.index.array : null;
    if (idx) for (let t = 0; t < idx.length; t += 3) [idx[t + 1], idx[t + 2]] = [idx[t + 2], idx[t + 1]];
    else flipNonIndexed(g);
    g.computeBoundingSphere();
    out.push({ geo: g, mat: mesh.material, P, LG, AM });
  }
  // gắn xương clip nhân vật chính (pedWalk.js) cho từng đỉnh, theo trục tay / chân đo trên cả model
  out.rig = modelJoints(def, fitLimbs(def, out));
  for (const o of out) {
    const n = o.LG.length, SK = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) SK.set(skinVertex(out.rig.joints, o.P[i * 3 + 1], o.LG[i] / (def.legSwing ?? 1), o.AM[i] / (def.armSwing ?? 1), 0.05 * def.h), i * 3);
    o.geo.setAttribute('aSkin', new THREE.BufferAttribute(SK, 3));
    delete o.P; delete o.LG; delete o.AM;
  }
  return out;
}
function flipNonIndexed(g) {
  for (const a of Object.values(g.attributes)) {
    const s = a.itemSize, arr = a.array;
    for (let t = 0; t < a.count; t += 3) for (let c = 0; c < s; c++) [arr[(t + 1) * s + c], arr[(t + 2) * s + c]] = [arr[(t + 2) * s + c], arr[(t + 1) * s + c]];
  }
}

// uni: { uWalkTex, uWalkOn } riêng model + { uTime, uDur } chung với người hộp (cityPeople.walk)
export function patch(src, uni) {
  const mat = new THREE.MeshStandardMaterial({
    map: src.map ?? null, color: src.color ?? 0xffffff, normalMap: null, roughness: Math.max(0.6, src.roughness ?? 0.8), metalness: 0,
    transparent: false, alphaTest: src.transparent || src.alphaTest ? 0.5 : 0, side: src.side ?? THREE.FrontSide, vertexColors: !!src.vertexColors,
  });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aLimb;
        attribute vec3 aSkin;
        attribute vec3 aWalk;
        ${PED_GLSL}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        // clip nhân vật chính (pedWalk.js): ≤ 2 xương mỗi đỉnh; chưa nướng xong thì đung đưa tự làm như cũ; aWalk.z = 4 · nói chuyện + 8 · nằm
        float talk = mod(floor(aWalk.z / 4.0), 2.0), still = step(7.5, aWalk.z);
        bool useClip = uWalkOn > 0.5 && still < 0.5;
        mat4 pedM = mat4(1.0);
        if (useClip) {
          pedM = pedPose(int(aSkin.x), 0, talk);
          if (aSkin.z < 0.999) pedM = pedM * aSkin.z + pedPose(int(aSkin.y), 0, talk) * (1.0 - aSkin.z);
        }
        objectNormal = mat3(pedM) * objectNormal;
        float sw = useClip || still > 0.5 ? 0.0 : sin(aWalk.x) * aWalk.y;
        float la = sw * 0.5 * aLimb.x, aa = -sw * 0.5 * aLimb.y;           // chân / tay ngược pha, bên trái / phải ngược nhau
        float lc = cos(la), ls = sin(la), ac = cos(aa), as_ = sin(aa);
        objectNormal = vec3(objectNormal.x, objectNormal.y * lc - objectNormal.z * ls, objectNormal.y * ls + objectNormal.z * lc);
        objectNormal = vec3(objectNormal.x, objectNormal.y * ac - objectNormal.z * as_, objectNormal.y * as_ + objectNormal.z * ac);`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed.y -= aLimb.z;
        transformed = vec3(transformed.x, transformed.y * lc - transformed.z * ls, transformed.y * ls + transformed.z * lc);
        transformed.y += aLimb.z - aLimb.w;
        transformed = vec3(transformed.x, transformed.y * ac - transformed.z * as_, transformed.y * as_ + transformed.z * ac);
        transformed.y += aLimb.w - aLimb.z * (1.0 - cos(sw * 0.5));          // chân xoạc => hạ người cho bàn chân chạm đất
        transformed = (pedM * vec4(transformed, 1.0)).xyz;`);
  };
  mat.customProgramCacheKey = () => 'street-model-walk' + (mat.map ? 'm' : '');
  return withMist(mat);
}

export class StreetModels {
  // walk: uniform chung với người hộp ({ uTime, uDur } của cityPeople.walk)
  constructor(parent, capacity, walk) {
    this.walk = walk;
    this.group = new THREE.Group();
    parent.add(this.group);
    this.cap = capacity;
    this.models = [];             // [{ meshes, matrix, walk, n }]
    this.ready = false;
    this._loading = null;
  }
  load() {
    if (this._loading) return this._loading;
    const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
    const rig = loadPedRig().catch((e) => { console.warn('[streetModels] không nướng được clip đi bộ, dùng dáng tự làm', e); return null; });
    this._loading = Promise.all(PEOPLE_MODELS.map(async (def) => {
      const parts = await buildModel(loader, def);
      const uni = { uWalkTex: { value: null }, uWalkOn: { value: 0 }, uTime: this.walk.uTime, uDur: this.walk.uDur };
      rig.then((gltf) => {
        if (!gltf) return;
        uni.uWalkTex.value = pedWalkTexture(bakePedWalk(gltf.scene, gltf.animations, parts.rig.joints, [0.05 * def.h, -0.07 * def.h], parts.rig.fix, MODEL_WALK));
        uni.uWalkOn.value = 1;
      }).catch((e) => console.warn('[streetModels] nướng clip lỗi', def.id, e));
      const matrix = new THREE.InstancedBufferAttribute(new Float32Array(this.cap * 16), 16).setUsage(THREE.DynamicDrawUsage);
      const walk = new THREE.InstancedBufferAttribute(new Float32Array(this.cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
      const meshes = parts.map(({ geo, mat }) => {
        geo.setAttribute('aWalk', walk);
        const m = new THREE.InstancedMesh(geo, patch(mat, uni), this.cap);
        m.instanceMatrix = matrix; m.count = 0; m.castShadow = true; m.frustumCulled = false;
        this.group.add(m);
        return m;
      });
      return { def, meshes, matrix, walk, n: 0 };
    })).then((list) => { this.models = list; this.ready = true; return this; });
    return this._loading;
  }
  get count() { return this.models.length || PEOPLE_MODELS.length; }
  begin() { for (const M of this.models) M.n = 0; }
  // k: chỉ số model, m: ma trận đặt người (Matrix4), ph / moving: pha bước + đang đi (0…1), flags: 4 = nói chuyện, 8 = nằm
  add(k, m, ph, moving, flags = 0) {
    const M = this.models[k % this.models.length];
    if (!M || M.n >= this.cap) return;
    m.toArray(M.matrix.array, M.n * 16);
    M.walk.setXYZ(M.n, ph, moving, flags);
    M.n++;
  }
  end() {
    for (const M of this.models) {
      for (const m of M.meshes) m.count = M.n;
      if (M.n) { M.matrix.needsUpdate = true; M.walk.needsUpdate = true; }
    }
  }
  set visible(v) { this.group.visible = v; }
}
