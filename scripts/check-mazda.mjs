import fs from 'node:fs';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CARS } from '../src/config.js';
import { Cars } from '../src/cars.js';
import { Traffic } from '../src/traffic.js';
const def = CARS.find(d => d.id === 'mazda-rx-vision'); assert(def);
const b = fs.readFileSync('docs/' + def.file), l = b.readUInt32LE(12), d = JSON.parse(b.subarray(20, 20 + l));
assert.deepEqual(CARS.map(d => d.id), ['mustang', 'mazda-rx-vision']);
assert.equal(d.meshes.reduce((n,m)=>n+m.primitives.reduce((s,p)=>s+d.accessors[p.indices].count/3,0),0),1315319);
const original=fs.readFileSync('docs/assets/models/mazda_rx_vision(SPORT)-compressed.glb'),ol=original.readUInt32LE(12),od=JSON.parse(original.subarray(20,20+ol));
assert(b.subarray(20+l).equals(original.subarray(20+ol)), 'Geometry/texture binary must remain byte-identical');
for(const key of ['meshes','accessors','bufferViews','buffers','images','textures']) assert.deepEqual(d[key],od[key]);
const paint=JSON.parse(fs.readFileSync('src/mazda-paint.json','utf8')),body=d.materials.find(m=>m.name==='body');
assert.equal(paint.color,0x54545f);assert.deepEqual(body.pbrMetallicRoughness.baseColorFactor,[...new THREE.Color(paint.color).toArray(),1]);
assert.equal(body.pbrMetallicRoughness.metallicFactor,1);assert.equal(body.pbrMetallicRoughness.roughnessFactor,0.364192);
assert.equal(body.extensions.KHR_materials_clearcoat.clearcoatFactor,1);assert.equal(body.extensions.KHR_materials_clearcoat.clearcoatRoughnessFactor,0);
assert.equal(def.mats.body.envK,paint.envMapIntensity);
console.log('PASS original Mazda: 1,315,319 triangles; all geometry and texture binary unchanged; paint matches supplied body material.');
assert.equal(d.nodes.filter(n => /^MazdaSteering_/.test(n.name)).length, 8);
d.images = []; d.textures = []; d.materials = d.materials.map(m => ({ name: m.name, doubleSided: true }));
const j = Buffer.from(JSON.stringify(d)), jp = Buffer.alloc(Math.ceil(j.length / 4) * 4, 32); j.copy(jp);
const glb = Buffer.alloc(20 + jp.length + b.length - 20 - l); b.copy(glb, 0, 0, 12);
glb.writeUInt32LE(glb.length, 8); glb.writeUInt32LE(jp.length, 12); glb.writeUInt32LE(0x4e4f534a, 16);
jp.copy(glb, 20); b.copy(glb, 20 + jp.length, 20 + l);
const { scene } = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(glb.buffer, '');
const holder = new THREE.Group(); holder.add(scene); scene.rotation.y = Math.PI;
holder.updateMatrixWorld(true);
const box = new THREE.Box3().setFromObject(holder, true), size = box.getSize(new THREE.Vector3());
holder.scale.setScalar(def.length / size.z); holder.updateMatrixWorld(true); box.setFromObject(holder, true);
const center = box.getCenter(new THREE.Vector3()); holder.position.set(-center.x, -box.min.y, -center.z); holder.updateMatrixWorld(true);
box.setFromObject(holder, true); box.getSize(size);
assert(Math.abs(size.z - 4.8) < 1e-6); assert(size.x > 2 && size.x < 2.2); assert(size.y > 1.2 && size.y < 1.3); assert(Math.abs(box.min.y) < 1e-6);
const wheels = Cars.prototype._wheels(holder, def, { length: size.z, width: size.x, height: size.y });
assert.equal(wheels.length, 4);
assert.equal(wheels.filter(w => w.pivot.position.z < 0).length, 2);
assert.equal(wheels.filter(w => w.pivot.position.x < 0).length, 2);
for (const w of wheels) {
  assert(w.radius > .25 && w.radius < .4);
  const center = w.pivot.position.clone(); w.pivot.rotation.x = 2.3; holder.updateMatrixWorld(true);
  assert(w.pivot.position.equals(center));
}
const head = new THREE.Box3(), tail = new THREE.Box3();
holder.traverse(o => { if (o.isMesh && ['Object_61','Object_886'].includes(o.name)) head.expandByObject(o, true); if (o.isMesh && o.material.name === 'RearLight') tail.expandByObject(o, true); });
assert(head.max.z < 0); assert(tail.min.z > 0);
for (const [b, point] of [[head, def.lamps.head], [tail, def.lamps.tail]]) assert(b.clone().expandByScalar(.06).containsPoint(new THREE.Vector3(...point)), 'Lamp outside actual bulb bounds');
console.log(`PASS Mazda: ${size.toArray().map(v => v.toFixed(3)).join(' × ')} m, ground aligned, front -Z, 4 animated wheels, lamps inside model bulb bounds; original geometry decoded.`);
const traffic = new Traffic(new THREE.Scene(), { softTex: null });
const npc = traffic._vehicle({ group: holder, dim: { length: size.z, width: size.x, height: size.y, lamps: def.lamps }, wheels });
assert.equal(npc.wheels.filter(w => w.front).length, 2);
assert.equal(npc.headlights.glows.length, 2); assert.equal(npc.tails.length, 2);
assert(npc.headlights.glows.every(g => g.position.z < 0));
console.log('PASS Mazda NPC: four wheels retained, two front steering pivots, shared front/rear light rig.');
const sw = def.steer, normal = new THREE.Vector3(...sw.n).normalize(), up = new THREE.Vector3(0,normal.z,-normal.y), ring = scene.getObjectByName('MazdaSteering_7');
for(const angle of [-.08, Math.PI+.08]) {
 const contact = new THREE.Vector3(...sw.c).add(new THREE.Vector3(Math.cos(angle)*sw.r,0,0)).addScaledVector(up,Math.sin(angle)*sw.r);
 const ray = new THREE.Raycaster(contact.clone().addScaledVector(normal,.08),normal.clone().negate(),0,.16);
 assert(ray.intersectObject(ring,false).length, 'Grip ray must hit actual steering rim');
}
console.log('PASS Mazda steering: 8 meshes, hand contact rays hit both sides of actual rim.');

for(const excluded of CARS.map(d=>d.id)){
 const loaded=[];const roster={list:CARS,_load:async def=>{loaded.push(def.id);return{};}};
 const fixture={cars:roster,pool:[],_vehicle:()=>({})};await Traffic.prototype._load.call(fixture,excluded);
 assert(loaded.length>0);assert(loaded.every(id=>CARS.some(d=>d.id===id)&&id!==excluded));
}
console.log('PASS two-car roster: player list and NPC pools contain only Mustang/Mazda.');
