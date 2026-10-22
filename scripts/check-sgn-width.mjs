import assert from 'node:assert/strict';
import { CITY, ROAD, Road } from '../src/road.js';
import { sgnLoop } from '../src/sgn.js';

let fail = 0;
const check = (name, fn) => {
  try { fn(); console.log(`PASS ${name}`); }
  catch (e) { fail++; console.error(`FAIL ${name}: ${e.message}`); }
};
const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) <= eps, `${a} != ${b}`);

ROAD.halfWidth = CITY.hw;
const loop = sgnLoop(), road = new Road();
road.setShape('sgn', loop);
const W = loop.widths[0], L = loop.length;

check('đoạn giữa rộng 4 m, tâm làn 1,9 m', () => {
  for (const s of [W.s0 + 25, (W.s0 + W.s1) / 2, W.s1 - 25]) {
    near(road.hwAt(s), 4); near(road.laneAt(s, 0), 1.9); near(road.laneAt(s, 1), 1.9);
    assert.equal(road.laneCountAt(s), 1);
  }
});
check('ngoài đoạn giữ rộng mặc định 7,2 m', () => {
  for (const s of [0, W.s0 - 80, W.s1 + 80, L - 10]) near(road.hwAt(s), CITY.hw);
});
check('taper 25 m đơn điệu ở hai đầu', () => {
  let prev = Infinity;
  for (let d = 0; d <= 25; d++) { const v = road.hwAt(W.s0 + d); assert.ok(v <= prev + 1e-10); prev = v; }
  prev = -Infinity;
  for (let d = 25; d >= 0; d--) { const v = road.hwAt(W.s1 - d); assert.ok(v >= prev - 1e-10); prev = v; }
  near(road.hwAt(W.s0), CITY.hw); near(road.hwAt(W.s1), CITY.hw);
});
check('quấn đúng qua nhiều vòng', () => {
  for (const s of [0, W.s0 + 7, W.s0 + 25, W.s1 - 12, W.s1 + 50]) for (const k of [-4, -1, 1, 3]) {
    near(road.hwAt(s + k * L), road.hwAt(s)); near(road.laneAt(s + k * L, 1), road.laneAt(s, 1));
  }
});
check('shape không phải sgn giữ hằng số', () => {
  const other = new Road(); other.setShape('city');
  for (const s of [-1000, 0, 600, 1e6]) near(other.hwAt(s), CITY.hw);
});

console.log(fail ? `\n${fail} lỗi` : '\nTẤT CẢ PASS');
process.exit(fail ? 1 : 0);
