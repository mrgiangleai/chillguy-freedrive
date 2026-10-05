import assert from 'node:assert/strict';
import * as THREE from 'three';
import { StopScene } from '../src/stopscene.js';

const carRoot = new THREE.Group();
carRoot.position.set(120, 3, -45);
carRoot.rotation.y = 0.7;
const personRoot = new THREE.Group();
personRoot.position.set(-0.2, 0, -4);
const head = new THREE.Object3D();
head.position.y = 1.5;
personRoot.add(head);
carRoot.add(personRoot);
carRoot.updateMatrixWorld(true);

const person = { root: personRoot, head };
const stop = new StopScene({ dim: { width: 2, length: 4.8 } }, person);
stop.state = 'parked';
stop.wideK = 1;
stop.autoZoom.on = false;
stop.orbitA = 0;
stop._camera(0, carRoot);

const center = personRoot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.95, 0));
assert(stop.cam.look.distanceTo(center) < 1e-9, 'Orbit must look at the player');
assert(Math.abs(stop.cam.pos.distanceTo(center) - 10) < 1e-9, 'Default orbit radius must be 10 m');

const before = stop.cam.pos.clone();
personRoot.position.x += 2;
carRoot.updateMatrixWorld(true);
stop._camera(0, carRoot);
const playerDelta = personRoot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.95, 0)).sub(center);
assert(stop.cam.pos.clone().sub(before).distanceTo(playerDelta) < 1e-9, 'Camera must follow the player, not stay centered on the car');

stop.noteCameraInput();
const heldAngle = stop.orbitA;
for (let i = 0; i < 4; i++) stop._camera(0.5, carRoot);
assert.equal(stop.orbitA, heldAngle, 'Automatic orbit must stay still for the full 2-second hold');
stop._camera(0.1, carRoot);
assert(stop.orbitA > heldAngle, 'Automatic orbit must resume after the hold');

stop.zoom.focal = stop.zoom.focalS = 26;
stop.zoom.back = stop.zoom.backS = 0;
stop.zoom.near = stop.zoom.nearS = 0;
stop.zoomBy(Math.exp(-3));
for (let i = 0; i < 20; i++) stop._camera(0.1, carRoot);
const closeCenter = personRoot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.95, 0));
assert(Math.abs(stop.cam.pos.distanceTo(closeCenter) - 1) < 0.01, 'Manual zoom must reach about 1 m from the player');

stop.stand.set(-0.15, 0, -6);
stop.corner.set(-1.5, 0, -3.2);
stop.out.set(-1.5, 0, 0);
stop.state = 'enter';
stop.wideK = 1;
stop.enterRadius = 24;
stop.t = 0.6 + stop.stand.distanceTo(stop.corner) / 1.1 + stop.corner.distanceTo(stop.out) / 1.1;
stop._camera(0, carRoot);
const enterCenter = personRoot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.95, 0));
assert(Math.abs(stop.cam.pos.distanceTo(enterCenter) - 1) < 1e-9, 'Return sequence must finish its zoom at 1 m when the player reaches the car');

console.log('PASS stop camera: player-centered orbit, 2 s input hold, 1 m close zoom, and return-to-car zoom.');
