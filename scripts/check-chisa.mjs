import fs from 'node:fs';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CARS } from '../src/config.js';
import { Person } from '../src/person.js';
import { StopScene } from '../src/stopscene.js';
const def = CARS.find(d => d.id === 'mustang'); assert(def);
const b = fs.readFileSync('docs/' + def.file), l = b.readUInt32LE(12), d = JSON.parse(b.subarray(20, 20 + l));
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

const rim=scene.getObjectByName('Torus001_Interior_0'),sw=def.steer,n=new THREE.Vector3(...sw.n).normalize(),up=new THREE.Vector3(0,n.z,-n.y);
const pivot=new THREE.Group();pivot.position.fromArray(sw.c);
const car=new THREE.Group();car.add(holder,pivot);car.updateMatrixWorld(true);pivot.attach(rim);
pivot.position.addScaledVector(n,-def.steerShift);car.updateMatrixWorld(true);
const wheelCenter=pivot.position.clone();
for(const turn of [-.55,-.3,0,.3,.55]){
 pivot.quaternion.setFromAxisAngle(n,turn);car.updateMatrixWorld(true);
 for(const angle of [-.08,Math.PI+.08]){
  const a=angle+turn, radius=sw.r+sw.grip.radial;
  const wrist=wheelCenter.clone().add(new THREE.Vector3(Math.cos(a)*radius,0,0)).addScaledVector(up,Math.sin(a)*radius).addScaledVector(n,sw.grip.depth);
  const palm=wrist.clone().add(new THREE.Vector3(-Math.cos(a)*.025,0,0)).addScaledVector(up,-Math.sin(a)*.025);
  const hits=new THREE.Raycaster(palm,n.clone().negate(),0,.113).intersectObject(rim,false);
  assert(hits.length,`Hand segment misses actual rim at steering ${turn}`);
  assert(hits[0].distance>.025 && hits[0].distance<.09,'Rim should cross palm depth, away from wrist joint');
  const old=palm.clone().add(new THREE.Vector3(Math.cos(a)*(.19-radius),0,0)).addScaledVector(up,Math.sin(a)*(.19-radius));
  assert.equal(new THREE.Raycaster(old,n.clone().negate(),0,.113).intersectObject(rim,false).length,0,'Regression reproduces original floating hand target');
 }
}
console.log('PASS Mustang: both palm segments hit actual rim at 5 steering angles; original 19 cm targets miss.');

// Dùng bộ xương và clip lái thật để kiểm tra điểm bám + hướng bàn tay, không chỉ công thức cổ tay.
const pb=fs.readFileSync('docs/assets/models/chisa_wuthering_waves.glb'),pl=pb.readUInt32LE(12),pd=JSON.parse(pb.subarray(20,20+pl));
pd.images=[];pd.textures=[];pd.materials=pd.materials.map(m=>({name:m.name}));
const pj=Buffer.from(JSON.stringify(pd)),pp=Buffer.alloc(Math.ceil(pj.length/4)*4,32);pj.copy(pp);
const pg=Buffer.alloc(20+pp.length+pb.length-20-pl);pb.copy(pg,0,0,12);pg.writeUInt32LE(pg.length,8);pg.writeUInt32LE(pp.length,12);pg.writeUInt32LE(0x4e4f534a,16);pp.copy(pg,20);pb.copy(pg,20+pp.length,20+pl);
const personGltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(pg.buffer,'');
const person=new Person(),load=GLTFLoader.prototype.loadAsync;
async function referenceGltf() {
 const buf=fs.readFileSync('docs/assets/models/person.glb'), len=buf.readUInt32LE(12), json=JSON.parse(buf.subarray(20,20+len));
 json.images=[];json.textures=[];json.materials=json.materials.map(m=>({name:m.name}));
 const bytes=Buffer.from(JSON.stringify(json)), padded=Buffer.alloc(Math.ceil(bytes.length/4)*4,32);bytes.copy(padded);
 const out=Buffer.alloc(20+padded.length+buf.length-20-len);buf.copy(out,0,0,12);out.writeUInt32LE(out.length,8);out.writeUInt32LE(padded.length,12);out.writeUInt32LE(0x4e4f534a,16);padded.copy(out,20);buf.copy(out,20+padded.length,20+len);
 return new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(out.buffer,'');
}
try{GLTFLoader.prototype.loadAsync=async url=>url==='test-chisa'?personGltf:referenceGltf();await person.load('test-chisa',{chisa:true});}finally{GLTFLoader.prototype.loadAsync=load;}
assert(person.retargetPairs.length >= 45, 'Retarget torso, limbs and fingers');
assert(person.arms.l && person.arms.r && person.legs && person.head && person.pelvis);
car.add(person.root);person.root.visible=true;
const stop=new StopScene({},person);stop.place({width:size.x,length:size.z,eye:def.eye,seat:def.seat});stop.sit();
let maximumError=0;
for(const turn of [-.55,-.3,0,.3,.55,0]){
 pivot.quaternion.setFromAxisAngle(n,turn);person.update(.016);person.recline(def.seat.recline);car.updateMatrixWorld(true);
 for(const [side,base] of [['r',-.08],['l',Math.PI+.08]]){
  const a=base+turn,cos=Math.cos(a),sin=Math.sin(a),r=sw.r+sw.grip.radial;
  const target=wheelCenter.clone().add(new THREE.Vector3(cos*r,0,0)).addScaledVector(up,sin*r).addScaledVector(n,sw.grip.depth);
  const pole=new THREE.Vector3(side==='r'?.25:-.25,0,0).addScaledVector(up,-1).addScaledVector(n,.2);
  const tangent=up.clone().multiplyScalar(cos).add(new THREE.Vector3(-sin,0,0)).multiplyScalar(side==='r'?1:-1);
  person.reach(side,target,pole);person.faceGrip(side,n,tangent);
  const wrist=person.arms[side][2].getWorldPosition(new THREE.Vector3()),finger=person.gripFingers[side].getWorldPosition(new THREE.Vector3());
  maximumError=Math.max(maximumError,wrist.distanceTo(target));
  const direction=finger.sub(wrist),length=direction.length();
  const palm=wrist.clone().add(new THREE.Vector3(-cos*.025,0,0)).addScaledVector(up,-sin*.025);
  assert(new THREE.Raycaster(palm,direction.normalize(),0,length).intersectObject(rim,false).length,'Actual posed palm must span the rim');
  const tip=person.gripFingers[side].children.find(o=>o.isBone).children.find(o=>o.isBone).getWorldPosition(new THREE.Vector3()).sub(wheelCenter);
  const radial=new THREE.Vector3(cos,0,0).addScaledVector(up,sin);
  assert(wrist.clone().sub(wheelCenter).dot(radial)>.17 && tip.dot(radial)<.17,'Fingers must curl inward around rim');
  const [index,pinky]=person.gripKnuckles[side];
  const span=index.getWorldPosition(new THREE.Vector3()).sub(pinky.getWorldPosition(new THREE.Vector3()));span.addScaledVector(n,-span.dot(n)).normalize();
  assert(span.dot(tangent)>.999,'Knuckle row must follow rim tangent');
 }
}
assert(maximumError<.001,`Wrist error ${maximumError}`);
console.log(`PASS actual driver: rim sits between palm and curled fingers, knuckles follow tangent through both steering limits; wrist error ${(maximumError*1000).toFixed(3)} mm.`);

const head=person.head.getWorldPosition(new THREE.Vector3()), hip=person.pelvis.getWorldPosition(new THREE.Vector3());
console.log('Chisa seated head',head.toArray(),'hip',hip.toArray(),'retarget bones',person.retargetPairs.length);
assert(hip.distanceTo(new THREE.Vector3(...def.seat.hip)) < .001);
assert(head.y < 1.45 && head.y > .8, 'Head must fit Mustang cabin');
const oldRoot=person.root, oldModel=person.model;
const next=new Person(); next.ready=true;
person.replace(next); assert.equal(person.root,oldRoot);assert.equal(person.root.children.length,1);assert.equal(oldModel.parent.parent,null);assert(!person.reference && !person.retargetPairs,'Default replacement must clear Chisa rig');
