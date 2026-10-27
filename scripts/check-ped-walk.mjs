// Kiểm tra nướng clip đi bộ của nhân vật chính cho người hộp NPC (src/pedWalk.js): chân chạm đất, khớp liền, tay thõng, điện thoại trước ngực.
import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
const raw = fs.readFileSync('docs/assets/models/person.glb'), len = raw.readUInt32LE(12), json = JSON.parse(raw.subarray(20, 20 + len));
json.images = []; json.textures = []; json.materials = (json.materials || []).map((m) => ({ name: m.name }));
const jb = Buffer.from(JSON.stringify(json)), jp = Buffer.alloc(Math.ceil(jb.length / 4) * 4, 32); jb.copy(jp);
const glb = Buffer.alloc(20 + jp.length + raw.length - 20 - len); raw.copy(glb, 0, 0, 12); glb.writeUInt32LE(glb.length, 8);
glb.writeUInt32LE(jp.length, 12); glb.writeUInt32LE(0x4e4f534a, 16); jp.copy(glb, 20); raw.copy(glb, 20 + jp.length, 20 + len);
const { bakePedWalk, PED_BONE, PED_FRAMES, PED_ANIMS } = await import('../src/pedWalk.js');
const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.length), '');
const b = bakePedWalk(gltf.scene, gltf.animations);
let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const M = (block, f, bone) => { const o = ((block * PED_FRAMES + f) * b.width + bone * 3) * 4, d = b.data;
  return (x, y, z) => [0, 1, 2].map((r) => d[o + r * 4] * x + d[o + r * 4 + 1] * y + d[o + r * 4 + 2] * z + d[o + r * 4 + 3]); };
ok(b.data.every(Number.isFinite), `texture ${b.width}×${b.height} không NaN`);
console.log('vòng Walk_Loop của người hộp:', b.cycle.toFixed(2), 'm; clip', Object.entries(b.dur).map(([k, v]) => k + ' ' + v.toFixed(2) + ' s').join(', '));
for (let a = 0; a < PED_ANIMS.length; a++) {
  let lo = Infinity, hi = -Infinity, gap = 0, head = Infinity, hand = Infinity;
  for (let f = 0; f < PED_FRAMES; f++) {
    for (const n of ['foot_l', 'foot_r']) { const y = M(a * 2, f, PED_BONE[n])(0, 0, -0.13)[1]; lo = Math.min(lo, y); hi = Math.max(hi, y); }
    // khớp gối: đầu dưới đùi phải trùng đầu trên cẳng chân
    const k1 = M(a * 2, f, PED_BONE.thigh_l)(-0.105, 0.47, 0), k2 = M(a * 2, f, PED_BONE.calf_l)(-0.105, 0.47, 0);
    gap = Math.max(gap, Math.hypot(k1[0] - k2[0], k1[1] - k2[1], k1[2] - k2[2]));
    head = Math.min(head, M(a * 2, f, PED_BONE.head)(0, 1.72, 0)[1]);
    hand = Math.min(hand, M(a * 2, f, PED_BONE.hand_l)(-0.26, 0.78, 0)[1]);
  }
  console.log(PED_ANIMS[a], `mũi giày y ${lo.toFixed(3)}…${hi.toFixed(3)}, đầu ≥ ${head.toFixed(2)}, tay trái ≥ ${hand.toFixed(2)}`);
  ok(Math.abs(lo) < 0.005, `${PED_ANIMS[a]}: chân chạm đất (thấp nhất ${lo.toFixed(3)} m)`);
  ok(gap < 1e-4, `${PED_ANIMS[a]}: khớp gối liền`);
  ok(head > 1.55, `${PED_ANIMS[a]}: đầu đứng thẳng`);
  ok(hand > 0.6 && hand < 1.1, `${PED_ANIMS[a]}: tay buông xuôi`);
  const ph = M(a * 2 + 1, 0, PED_BONE.hand_r)(0.26, 0.72, -0.05);
  ok(ph[1] > 0.75 && ph[1] < 1.25 && ph[2] < -0.12, `${PED_ANIMS[a]}: điện thoại trước ngực (${ph.map((x) => x.toFixed(2))})`);
}
process.exit(fail ? 1 : 0);
