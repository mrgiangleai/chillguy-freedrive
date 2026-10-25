// Nam với clip riêng xuất từ Rig Tool (ownClips): game phải giữ y dáng của clip (không retarget / bẻ bind / ngả lưng),
// và khi đánh lái chỉ xoay cổ tay + bàn tay quanh trục vô lăng, ngón giữ nguyên. Clip ở đây dựng tay trên model thật.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { Person, OWN_CLIPS } from '../src/person.js';

const b = fs.readFileSync('docs/assets/models/male-rigged.glb'), l = b.readUInt32LE(12), d = JSON.parse(b.subarray(20, 20 + l));
d.images = []; d.textures = []; d.materials = d.materials.map(m => ({ name: m.name }));
const j = Buffer.from(JSON.stringify(d)), p = Buffer.alloc(Math.ceil(j.length / 4) * 4, 32); j.copy(p);
const g = Buffer.alloc(20 + p.length + b.length - 20 - l); b.copy(g, 0, 0, 12); g.writeUInt32LE(g.length, 8); g.writeUInt32LE(p.length, 12);
g.writeUInt32LE(0x4e4f534a, 16); p.copy(g, 20); b.copy(g, 20 + p.length, 20 + l);
const parse = () => new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(g.buffer.slice(0), '');

// Dáng "lái" riêng: bắp tay, cẳng tay, ngón gập — giá trị lạ, không trùng bind, để thấy game có giữ nguyên không.
const pose = {
  upperarm_l: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.4, 0.2, -0.9)),
  lowerarm_l: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -1.1, 0)),
  upperarm_r: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.4, -0.2, 0.9)),
  lowerarm_r: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 1.1, 0)),
  index_02_l: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.8)),
  spine_01: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.15, 0, 0)),
};
const gltf = await parse();
gltf.animations = OWN_CLIPS.map((name) => new THREE.AnimationClip(name, 1,
  Object.entries(pose).map(([bone, q]) => new THREE.QuaternionKeyframeTrack(`${bone}.quaternion`, [0, 1], [...q.toArray(), ...q.toArray()]))));

const person = new Person(), load = GLTFLoader.prototype.loadAsync;
try { GLTFLoader.prototype.loadAsync = async () => gltf; await person.load('own', { rig: 'male' }); } finally { GLTFLoader.prototype.loadAsync = load; }
assert(person.ownClips, 'All game clips present => own clips');
assert(!person.reference && !person.retargetPairs, 'No retarget from person.glb');
assert.equal(person.seatRecline, 0, 'No lean forced on top of the clip');
person.root.visible = true;
person.play('Driving_Loop', 0); person.update(0.016); person.recline(0.1);
for (const [name, q] of Object.entries(pose)) {
  const got = person.bone(name).quaternion;
  assert(Math.abs(got.dot(q)) > 1 - 1e-6, `${name} keeps the clip rotation exactly`);
}
console.log('PASS own clips: pose of the exported clip is kept bone for bone (no bind change, no retarget, no lean).');

// Đánh lái 0.4 rad: cổ tay quay quanh trục vô lăng, bàn tay xoay theo, ngón không đổi.
person.root.updateMatrixWorld(true);
const center = new THREE.Vector3(-0.1, 0.9, 0.35), axis = new THREE.Vector3(0, 0.338, -0.941).normalize(), angle = 0.4;
const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
for (const side of ['l', 'r']) {
  const hand = person.arms[side][2];
  const W0 = hand.getWorldPosition(new THREE.Vector3()), Q0 = hand.getWorldQuaternion(new THREE.Quaternion());
  const finger = person.bone('index_02_' + side), F0 = finger.quaternion.clone();
  const want = W0.clone().sub(center).applyQuaternion(q).add(center);
  person.steerHold(side, center, axis, angle);
  const W1 = hand.getWorldPosition(new THREE.Vector3()), Q1 = hand.getWorldQuaternion(new THREE.Quaternion());
  assert(W1.distanceTo(want) < 1e-4, `${side} wrist turns with the wheel (${W1.distanceTo(want)})`);
  assert(Math.abs(Q1.dot(Q0.clone().premultiply(q))) > 1 - 1e-6, `${side} hand turns by the steering angle`);
  assert(Math.abs(finger.quaternion.dot(F0)) > 1 - 1e-6, `${side} fingers keep the clip`);
}
person.steerHold('l', center, axis, 0);
console.log('PASS own clips steering: wrists turn about the wheel axis, hands turn with them, fingers untouched.');
