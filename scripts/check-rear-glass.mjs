import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { windshield } from '../src/cars.js';

// Decode the real model without textures (Node has no image loader).
const modelFile = process.argv[2] || 'mustang.glb';
assert.equal(modelFile, 'mustang.glb');
const input = fs.readFileSync(new URL('../docs/assets/models/' + modelFile, import.meta.url));
const length = input.readUInt32LE(12);
const data = JSON.parse(input.subarray(20, 20 + length));
data.images = []; data.textures = [];
data.materials = data.materials.map(m => ({ name: m.name, doubleSided: true }));
const json = Buffer.from(JSON.stringify(data));
const padded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32); json.copy(padded);
const binary = input.subarray(20 + length);
const glb = Buffer.alloc(20 + padded.length + binary.length);
input.copy(glb, 0, 0, 12); glb.writeUInt32LE(glb.length, 8);
glb.writeUInt32LE(padded.length, 12); glb.writeUInt32LE(0x4e4f534a, 16);
padded.copy(glb, 20); binary.copy(glb, 20 + padded.length);
const { scene: model } = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(glb.buffer, '');
const holder = new THREE.Group(); holder.add(model); holder.updateMatrixWorld(true);
const box = new THREE.Box3().setFromObject(holder, true), size = box.getSize(new THREE.Vector3());
if (size.x > size.z * 1.02) model.rotation.y += Math.PI / 2;
model.rotation.y += Math.PI; holder.updateMatrixWorld(true);
box.setFromObject(holder, true); holder.scale.setScalar(4.67 / box.getSize(size).z);
holder.updateMatrixWorld(true); box.setFromObject(holder, true);
const center = box.getCenter(new THREE.Vector3());
holder.position.set(-center.x, -box.min.y, -center.z); holder.updateMatrixWorld(true);
box.setFromObject(holder, true);
const dim = { width: box.max.x - box.min.x, height: box.max.y - box.min.y, length: 4.67, eye: [-0.39, 1.08, 0.3] };
const glass = []; holder.traverse(o => { if (o.isMesh && /glass/i.test(o.material.name)) glass.push(o); });
const rear = glass.filter(o => /windscreen.*rear/i.test(o.name));
assert.equal(rear.length, 1);
const shield = windshield(glass, dim, true);
assert(shield?.geometry);
const mask = new THREE.Mesh(shield.geometry, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
mask.updateMatrixWorld(true);
const pos = shield.geometry.attributes.position;
const rearBox = new THREE.Box3().setFromObject(rear[0], true).expandByScalar(1e-5);
let maxCurve = 0;
for (let i = 0; i < pos.count; i++) {
  const p = new THREE.Vector3().fromBufferAttribute(pos, i);
  maxCurve = Math.max(maxCurve, Math.abs(p.clone().sub(shield.center).dot(shield.normal)));
  assert(rearBox.containsPoint(p), `Water vertex ${p.toArray()} outside rear box ${rearBox.min.toArray()} / ${rearBox.max.toArray()}`);
}
const ray = new THREE.Raycaster();
let matches = 0, total = 0;
for (const eye of [[-.39, 1.08, .3], [.39, 1.08, .3], [0, .9, .4], [0, 1.24, .3]]) {
  const camera = new THREE.PerspectiveCamera(90, 16 / 9, .05, 100);
  camera.position.fromArray(eye); camera.lookAt(shield.center); camera.updateMatrixWorld(true);
  for (let y = 0; y < 80; y++) for (let x = 0; x < 160; x++) {
    ray.setFromCamera(new THREE.Vector2((x+.5)/80-1, (y+.5)/40-1), camera);
    const actual = ray.intersectObjects(rear, false)[0];
    const water = ray.intersectObject(mask, false)[0];
    assert.equal(!!water, !!actual, `Outline mismatch at viewpoint ${eye}, pixel ${x},${y}`);
    if (water) { assert(water.point.distanceTo(actual.point) < 1e-5, 'Water floats away from curved glass'); matches++; }
    total++;
  }
}
assert(matches > 1000);
console.log(`PASS ${modelFile}: ${total} rays across 4 viewpoints; ${matches} glass hits match within 0.01 mm; ${pos.count / 3} glass triangles. Old plane error up to ${(maxCurve*1000).toFixed(1)} mm.`);
