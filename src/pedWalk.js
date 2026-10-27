import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

// Nướng clip của nhân vật chính (person.glb, rig Quaternius: Walk_Loop / Idle_Loop / Idle_Talking_Loop) ra texture ma trận xương
// cho người hộp NPC (cityPeople, InstancedMesh): mỗi khúc người hộp (đùi, cẳng, bàn chân, cánh tay, cẳng tay, bàn tay, thân, đầu)
// theo quay thế giới của xương tương ứng (delta so với bind T-pose, tay hộp buông thõng thì bù C), vị trí khớp tính lại theo
// chiều dài khúc của người hộp (không lệch khớp dù tỉ lệ khác rig). Shader đọc theo pha bước từng người => không skinning CPU.
// Hàng texture = khối × F + khung; khối = động tác × 2 + điện thoại (tay phải cầm điện thoại trước ngực, tay khác vẫn theo clip).
// Mỗi xương 3 texel = 3 hàng của ma trận 3×4 (toạ độ người hộp: mặt trước −z, chân ở y = 0).
export const PED_FRAMES = 30;
export const PED_ANIMS = ['Walk_Loop', 'Idle_Loop', 'Idle_Talking_Loop'];
// [tên, xương rig, khớp người hộp (x, y, z), khớp cha, bù hướng nghỉ (tay: hộp thõng xuống, rig chữ T)]
const s = 1;  // tay / chân phải ở +x (mặt trước −z)
export const PED_BONES = [
  ['pelvis', 'pelvis', [0, 0.86, 0], -1],
  ['spine', 'spine_03', [0, 0.92, 0], 0],
  ['head', 'Head', [0, 1.46, 0], 1],
  ['thigh_l', 'thigh_l', [-s * 0.105, 0.86, 0], 0], ['calf_l', 'calf_l', [-s * 0.105, 0.47, 0], 3], ['foot_l', 'foot_l', [-s * 0.105, 0.08, 0], 4],
  ['thigh_r', 'thigh_r', [s * 0.105, 0.86, 0], 0], ['calf_r', 'calf_r', [s * 0.105, 0.47, 0], 6], ['foot_r', 'foot_r', [s * 0.105, 0.08, 0], 7],
  ['upper_l', 'upperarm_l', [-s * 0.26, 1.4, 0], 1, 1], ['fore_l', 'lowerarm_l', [-s * 0.26, 1.12, 0], 9, 1], ['hand_l', 'hand_l', [-s * 0.26, 0.82, 0], 10, 1],
  ['upper_r', 'upperarm_r', [s * 0.26, 1.4, 0], 1, -1], ['fore_r', 'lowerarm_r', [s * 0.26, 1.12, 0], 12, -1], ['hand_r', 'hand_r', [s * 0.26, 0.82, 0], 13, -1],
];
export const PED_BONE = Object.fromEntries(PED_BONES.map((b, i) => [b[0], i]));

// animations + scene của person.glb => { data (Float32Array RGBA), width, height, cycle (m đi được mỗi vòng Walk_Loop), dur: { tên: s } }
// joints: khớp của người cần nướng (mặc định người hộp; Người 3D truyền khớp ước theo cỡ model), foot: z gót / mũi giày,
// fix: [xương] => Quaternion quay khúc lúc nghỉ của model về thẳng đứng (tay / chân model không buông thẳng như người hộp),
// arm: biên độ tay so với clip (0 = thõng theo ngực, 1 = như clip; model 3D tay dính thân áo dùng < 1)
export function bakePedWalk(scene, animations, joints = PED_BONES.map((b) => b[2]), foot = [0.09, -0.13], fix = [], { arm = 1 } = {}) {
  const NB = PED_BONES.length, F = PED_FRAMES, width = NB * 3, height = PED_ANIMS.length * 2 * F;
  const data = new Float32Array(width * height * 4);
  const rig = PED_BONES.map((b) => scene.getObjectByName(b[1]));
  if (rig.some((o) => !o)) throw new Error('person.glb thiếu xương: ' + PED_BONES.filter((b, i) => !rig[i]).map((b) => b[1]).join(', '));
  const S = new THREE.Matrix4().makeScale(-1, 1, -1);     // người hộp (mặt −z) = rig (mặt +z) quay 180° quanh y
  const J = joints.map((j) => new THREE.Vector3(...j).applyMatrix4(S));     // khớp người hộp trong toạ độ rig
  const qY = new THREE.Quaternion(0, 1, 0, 0);          // = S cho phép quay
  const F2 = PED_BONES.map((b, i) => (fix[i] ? qY.clone().multiply(fix[i]).multiply(qY) : new THREE.Quaternion()));
  const C = PED_BONES.map((b, i) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), (b[4] ?? 0) * Math.PI / 2).multiply(F2[i]));
  const saved = [];                                     // dáng bind (trả lại sau khi nướng: rig dùng chung cho nhiều lần nướng)
  scene.traverse((o) => saved.push([o, o.position.clone(), o.quaternion.clone(), o.scale.clone()]));
  scene.updateMatrixWorld(true);
  const restInv = rig.map((o) => o.getWorldQuaternion(new THREE.Quaternion()).invert());
  const restPelvis = rig[0].getWorldPosition(new THREE.Vector3());
  const k = joints[0][1] / restPelvis.y;                  // tỉ lệ người hộp / rig (theo độ cao hông) cho dời chậu
  const mixer = new THREE.AnimationMixer(scene), dur = {};
  const Q = PED_BONES.map(() => new THREE.Quaternion()), P = PED_BONES.map(() => new THREE.Vector3());
  const q = new THREE.Quaternion(), v = new THREE.Vector3(), m = new THREE.Matrix4(), t = new THREE.Matrix4();
  const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);
  // tay phải cầm điện thoại: cánh tay hơi đưa trước, cẳng tay gập lên trước ngực, hơi vào trong (quay theo ngực)
  const phUpper = new THREE.Quaternion().setFromAxisAngle(X, -0.2);
  const phFore = new THREE.Quaternion().setFromAxisAngle(Y, 0.35).multiply(new THREE.Quaternion().setFromAxisAngle(X, -1.2));
  let footLo = Infinity, footHi = -Infinity;
  PED_ANIMS.forEach((name, a) => {
    const clip = animations.find((c) => c.name === name);
    if (!clip) throw new Error('person.glb thiếu clip ' + name);
    dur[name] = clip.duration;
    const act = mixer.clipAction(clip).play();
    for (let f = 0; f < F; f++) {
      mixer.setTime(f / F * clip.duration);
      scene.updateMatrixWorld(true);
      for (let phone = 0; phone < 2; phone++) {
        PED_BONES.forEach((b, i) => {
          Q[i].multiplyQuaternions(rig[i].getWorldQuaternion(q), restInv[i]).multiply(C[i]);
          if (b[4] && arm < 1) { q.copy(Q[i]); Q[i].multiplyQuaternions(Q[1], F2[i]).slerp(q, arm); }
          if (phone && b[0] === 'upper_r') Q[i].multiplyQuaternions(Q[1], phUpper);
          if (phone && (b[0] === 'fore_r' || b[0] === 'hand_r')) Q[i].multiplyQuaternions(Q[1], phFore);
          if (b[3] < 0) P[i].copy(J[i]).addScaledVector(rig[0].getWorldPosition(v).sub(restPelvis), k);
          else P[i].copy(J[i]).sub(J[b[3]]).applyQuaternion(Q[b[3]]).add(P[b[3]]);
          // M = S · T(P) · R · T(−J) · S
          m.makeRotationFromQuaternion(Q[i]).setPosition(P[i]).multiply(t.makeTranslation(-J[i].x, -J[i].y, -J[i].z));
          m.premultiply(S).multiply(S);
          const e = m.elements, o = (((a * 2 + phone) * F + f) * width + i * 3) * 4;
          for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) data[o + r * 4 + c] = e[c * 4 + r];
          if (a === 0 && !phone && b[0] === 'foot_l') { footLo = Math.min(footLo, P[i].z); footHi = Math.max(footHi, P[i].z); }
        });
      }
      // nâng / hạ cả người để điểm thấp nhất của hai giày (gót, mũi) chạm đất (người hộp chân ngắn hơn rig)
      const row = (phone, i) => (((a * 2 + phone) * F + f) * width + i * 3) * 4;
      let lo = Infinity;
      for (const i of [PED_BONE.foot_l, PED_BONE.foot_r]) for (const z of foot) {
        const o = row(0, i), x = joints[i][0];
        lo = Math.min(lo, data[o + 4] * x + data[o + 6] * z + data[o + 7]);
      }
      for (let phone = 0; phone < 2; phone++) for (let i = 0; i < NB; i++) data[row(phone, i) + 7] -= lo;
    }
    act.stop();
  });
  mixer.uncacheRoot(scene);
  for (const [o, p, r, sc] of saved) { o.position.copy(p); o.quaternion.copy(r); o.scale.copy(sc); }
  scene.updateMatrixWorld(true);
  return { data, width, height, cycle: 2 * (footHi - footLo), dur };
}

export function pedWalkTexture(bake) {
  const tex = new THREE.DataTexture(bake.data, bake.width, bake.height, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}

// person.glb (rig + clip của nhân vật chính) tải 1 lần, dùng chung cho người hộp và Người 3D
let rigReq = null;
export function loadPedRig() {
  return rigReq ??= new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('assets/models/person.glb');
}

// GLSL dùng chung (sau khi khai báo attribute aWalk): pedPose(xương, có điện thoại, nói chuyện) = ma trận xương của người này
// aWalk = (pha bước, đang đi 0…1, cờ); đi theo pha bước, đứng theo uTime lệch pha mỗi người, giữa hai bên trộn theo aWalk.y
export const PED_GLSL = `
  uniform highp sampler2D uWalkTex;
  uniform float uWalkOn, uTime;
  uniform vec2 uDur;
  mat4 pedBone(int bone, int blk, float t) {
    float x = fract(t) * ${PED_FRAMES}.0, a = fract(x);
    int f0 = int(x), f1 = (f0 + 1) % ${PED_FRAMES}, c = bone * 3;
    mat4 m = mat4(0.0);
    for (int r = 0; r < 3; r++) {
      vec4 v = mix(texelFetch(uWalkTex, ivec2(c + r, blk * ${PED_FRAMES} + f0), 0), texelFetch(uWalkTex, ivec2(c + r, blk * ${PED_FRAMES} + f1), 0), a);
      m[0][r] = v.x; m[1][r] = v.y; m[2][r] = v.z; m[3][r] = v.w;
    }
    m[3][3] = 1.0;
    return m;
  }
  mat4 pedPose(int bone, int ph, float talk) {
    float off = fract(aWalk.x * 0.6180339);              // lệch pha đứng mỗi người (pha bước giữ nguyên khi đứng)
    if (aWalk.y > 0.999) return pedBone(bone, ph, aWalk.x / 6.2831853);
    mat4 st = talk > 0.5 ? pedBone(bone, 4 + ph, uTime / uDur.y + off) : pedBone(bone, 2 + ph, uTime / uDur.x + off);
    return aWalk.y < 0.001 ? st : st * (1.0 - aWalk.y) + pedBone(bone, ph, aWalk.x / 6.2831853) * aWalk.y;
  }`;
