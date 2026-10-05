import { Cars } from '../src/cars.js';
import { CARS } from '../src/config.js';
import * as THREE from 'three';
const def=CARS[1];
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Chạy hàm chooseCar thật với lượt tải bị thay thế trước khi xe đầu tiên xuất hiện.
const source = fs.readFileSync('src/main.js', 'utf8');
const code = source.slice(source.indexOf('async function chooseCar('), source.indexOf('const nextCar ='));
let applied = 0;
const context = vm.createContext({
  state: { car: 0 }, stop: { active: false }, person: { ready: false },
  el: { car: {} }, setBtn() {}, console,
  cars: { list: [{ name: 'Mazda' }], current: null, select: async () => false },
  mirror: { place() { applied++; } }, dash: { place() { applied++; } },
  wing: { setCar() { applied++; } }, warmShaders() {}, refreshUI() {},
});
vm.runInContext(code, context);
await context.chooseCar(0);
assert.equal(applied, 0);
context.cars.current = { screen: {} };
await context.chooseCar(0);
assert.equal(applied, 0, 'Cancelled selection must not reconfigure an existing car');
context.cars.select = async () => true;
await context.chooseCar(0);
assert.equal(applied, 3);
console.log('PASS car switching: cancelled loads skip cabin setup; successful selection applies mirrors/dashboard.');

// Background NPC loads must never overwrite the selected-car progress label.
const cancelled = new Error('texture-free progress probe'); let backgroundUpdates = 0;
const probe = { onProgress: () => backgroundUpdates++, loader: { loadAsync: async (file, progress) => { progress({loaded: 5, total: 10}); throw cancelled; } } };
await assert.rejects(Cars.prototype._load.call(probe, def), e => e === cancelled);
assert.equal(backgroundUpdates, 0);
let progress = null;
await assert.rejects(Cars.prototype._load.call(probe, def, f => progress = f), e => e === cancelled);
assert.equal(progress, .5);
const pending = [], seen = [];
const selector = { list: [def, CARS[0]], token: 0, cache: new Map(), tilt: new THREE.Group(), _placeLights() {}, onProgress: f => seen.push(f),
  _load: (d, onProgress) => new Promise(resolve => pending.push({d, onProgress, resolve})) };
const first = Cars.prototype.select.call(selector, 0), second = Cars.prototype.select.call(selector, 1);
pending[0].onProgress(.9); pending[1].onProgress(.4); assert.deepEqual(seen, [.4]);
for (const p of pending) p.resolve({group: new THREE.Group(), dim: {}});
assert.equal(await first, false); assert.equal(await second, true);
console.log('PASS loading: NPC progress isolated; stale player loads cannot change label or active car.');
