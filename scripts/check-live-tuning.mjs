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
rig.first = true; rig.transition = null;
rig.update(1 / 60, car);
assert(Math.abs(Math.hypot(camera.position.x - car.pos.x, camera.position.z - car.pos.z) - 14) < 1e-6, 'Orbit radius must update live');
assert(Math.abs(camera.position.y - car.pos.y - 7) < 1e-6, 'Orbit height must update live');

rig.tune.orbit.near = 0.12;
rig.setMode(rig.mode);
assert.equal(camera.near, 0.12, 'Near plane must follow the selected camera profile');

const before = rig.relP.clone();
rig.tune.drone.focal = 35; rig.tune.drone.aperture = 16;
rig.setMode(CAMERAS.findIndex((c) => c.id === 'drone'));
rig.update(1, car);
assert(rig.transition, 'Camera transition must still be active after one second');
assert(rig.relP.distanceTo(before) > 0.1, 'Camera position must move during transition');
assert(rig.focalS > 24 && rig.focalS < 35, 'Focal length must interpolate during transition');
assert(rig.apertureS > 3.5 && rig.apertureS < 16, 'Aperture must interpolate during transition');
rig.update(1, car);
assert.equal(rig.transition, null, 'Camera transition must finish after two seconds');
assert(Math.abs(rig.focalS - 35) < 1e-9 && Math.abs(rig.apertureS - 16) < 1e-9, 'Selected camera must restore its own lens settings');

rig.resetTune('orbit');
assert.equal(rig.tune.orbit.radius, 8.5, 'Reset must restore the code default');
assert.equal(rig.tune.orbit.speed, 0.2, 'Reset must restore orbit speed');
assert.equal(rig.tune.orbit.focal, 24, 'Reset must restore 24 mm');
assert.equal(rig.tune.orbit.aperture, 3.5, 'Reset must restore f/3.5');

console.log('PASS live tuning: per-camera pose/lens values apply, interpolate for two seconds, and reset correctly.');
