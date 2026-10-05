import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CameraRig } from '../src/camera.js';
import { CAMERAS } from '../src/config.js';

const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.3, 4000);
const rig = new CameraRig(camera);
const car = { pos: new THREE.Vector3(10, 2, 20), yaw: 0, speed: 0, dim: { length: 4.7, height: 1.3, eye: [-0.4, 1.1, 0.3] }, side: 1, fx: 0 };

for (const def of CAMERAS) {
  assert(rig.tune[def.id], `Missing live tuning profile for ${def.id}`);
  for (const [key, value] of Object.entries(rig.tune[def.id])) assert(Number.isFinite(value), `${def.id}.${key} must be numeric`);
}

rig.setMode(CAMERAS.findIndex((c) => c.id === 'chase'));
rig.tune.chase.distance = 12;
rig.tune.chase.height = 5;
rig.first = true;
rig.update(1 / 60, car);
assert(Math.abs(camera.position.z - (car.pos.z + car.dim.length * 0.5 + 12)) < 1e-6, 'Chase distance must update live');
assert(Math.abs(camera.position.y - (car.pos.y + 5 + car.dim.height * rig.tune.chase.carHeight)) < 1e-6, 'Chase height must update live');

rig.setMode(CAMERAS.findIndex((c) => c.id === 'orbit'));
rig.tune.orbit.radius = 14;
rig.tune.orbit.height = 7;
rig.tune.orbit.heightWave = 0;
rig.tune.orbit.speed = 0;
rig.first = true;
rig.update(1 / 60, car);
assert(Math.abs(Math.hypot(camera.position.x - car.pos.x, camera.position.z - car.pos.z) - 14) < 1e-6, 'Orbit radius must update live');
assert(Math.abs(camera.position.y - car.pos.y - 7) < 1e-6, 'Orbit height must update live');

rig.tune.orbit.near = 0.12;
rig.setMode(rig.mode);
assert.equal(camera.near, 0.12, 'Near plane must follow the selected camera profile');
rig.resetTune('orbit');
assert.equal(rig.tune.orbit.radius, 8.5, 'Reset must restore the code default');
assert.equal(rig.tune.orbit.speed, 0.2, 'Reset must restore orbit speed');

console.log('PASS live tuning: all camera profiles are numeric; position, orbit, near plane and reset apply directly.');
