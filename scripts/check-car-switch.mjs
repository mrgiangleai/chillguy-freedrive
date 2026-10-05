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
