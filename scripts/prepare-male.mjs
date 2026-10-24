// Nhân vật nam (Tripo, models/characters/male-rigged-walk.glb): file xuất để mọi xương ở gốc toạ độ (TRS rỗng), tư thế bind chỉ nằm
// trong inverseBindMatrices, mà IBM lại ở hệ Z-up lệch tâm (mất transform của Armature) => three dựng mesh méo, xương lệch khỏi mesh.
// Sửa: T = phép đổi trục (y→x, z→y, x→z) + dời t (khớp tâm khối đỉnh của từng xương), xương thế giới = T · IBM⁻¹, IBM mới = IBM · T⁻¹,
// TRS từng xương = parent⁻¹ · thế giới; rồi nén bằng gltf-transform:
//   node scripts/prepare-male.mjs && gltf-transform optimize /tmp/…-fixed.glb docs/assets/models/male-rigged.glb \
//     --compress meshopt --texture-compress webp --texture-size 1024 --simplify false --join false --flatten false --instance false
import fs from 'node:fs';
import * as THREE from 'three';
const source = 'models/characters/male-rigged-walk.glb';
const output = process.argv[2] || 'models/characters/male-rigged-fixed.glb';
const b = fs.readFileSync(source), length = b.readUInt32LE(12);
const d = JSON.parse(b.subarray(20, 20 + length));
const bin = b.subarray(20 + length + 8);
const skin = d.skins[0], acc = d.accessors[skin.inverseBindMatrices], view = d.bufferViews[acc.bufferView];
const off = (view.byteOffset || 0) + (acc.byteOffset || 0);
const ibm = new Float32Array(bin.buffer.slice(bin.byteOffset + off, bin.byteOffset + off + acc.count * 64));
const read = (ai, n) => { const a = d.accessors[ai], v = d.bufferViews[a.bufferView], o = bin.byteOffset + (v.byteOffset || 0) + (a.byteOffset || 0);
  const A = a.componentType === 5126 ? Float32Array : a.componentType === 5123 ? Uint16Array : Uint8Array; return new A(bin.buffer.slice(o, o + a.count * n * A.BYTES_PER_ELEMENT)); };
// tâm khối đỉnh chịu ảnh hưởng chính của từng xương (hệ mesh) <-> gốc xương theo IBM (hệ xương)
const prim = d.meshes[0].primitives[0];
const P = read(prim.attributes.POSITION, 3), J = read(prim.attributes.JOINTS_0, 4), W = read(prim.attributes.WEIGHTS_0, 4);
const acc3 = skin.joints.map(() => [0, 0, 0, 0]);
for (let i = 0; i < P.length / 3; i++) {
  let bw = -1, bj = 0; for (let k = 0; k < 4; k++) if (W[i * 4 + k] > bw) { bw = W[i * 4 + k]; bj = J[i * 4 + k]; }
  const c = acc3[bj]; c[0] += P[i * 3]; c[1] += P[i * 3 + 1]; c[2] += P[i * 3 + 2]; c[3]++;
}
const R = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0));
const t = new THREE.Vector3(), pairs = [];
acc3.forEach((c, k) => { if (c[3] < 30) return;
  const bone = new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(ibm, k * 16).invert()).applyMatrix4(R);
  pairs.push([bone, new THREE.Vector3(c[0], c[1], c[2]).divideScalar(c[3])]); });
pairs.forEach(([bone, cen]) => t.add(cen).sub(bone)); t.divideScalar(pairs.length);
const T = new THREE.Matrix4().makeTranslation(t.x, t.y, t.z).multiply(R), Tinv = T.clone().invert();
const err = pairs.reduce((e, [bone, cen]) => e + bone.clone().add(t).distanceTo(cen), 0) / pairs.length;
console.log('dời', t.toArray().map(v => v.toFixed(3)).join(' '), 'sai lệch TB xương ↔ tâm đỉnh', err.toFixed(3), 'm');
const parent = new Map();
d.nodes.forEach((n, i) => (n.children || []).forEach(c => parent.set(c, i)));
const world = new Map();                    // node -> ma trận thế giới lúc bind (nút không phải xương: giữ nguyên = đơn vị)
skin.joints.forEach((j, k) => {
  const m = new THREE.Matrix4().fromArray(ibm, k * 16).multiply(Tinv);
  m.toArray(ibm, k * 16); world.set(j, m.clone().invert());
});
Buffer.from(ibm.buffer).copy(bin, off);
const id = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
for (const j of skin.joints) {
  const local = (world.get(parent.get(j)) || id).clone().invert().multiply(world.get(j));
  local.decompose(p, q, s);
  Object.assign(d.nodes[j], { translation: p.toArray(), rotation: q.toArray(), scale: s.toArray() });
}
const json = Buffer.from(JSON.stringify(d)), jp = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32); json.copy(jp);
const rest = b.subarray(20 + length), out = Buffer.alloc(20 + jp.length + rest.length);
b.copy(out, 0, 0, 12); out.writeUInt32LE(out.length, 8); out.writeUInt32LE(jp.length, 12); out.writeUInt32LE(0x4e4f534a, 16);
jp.copy(out, 20); rest.copy(out, 20 + jp.length);
fs.writeFileSync(output, out);
console.log('fixed', skin.joints.length, 'bones ->', output);
