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
const [W1, W2] = loop.widths, L = loop.length;
const mid = (W) => (W.s0 + W.s1) / 2;
const inside = (W) => [W.s0 + 25, mid(W), W.s1 - 25];
const md = { w: 0, kind: null };

check('đoạn 1 (Vạn Hoa): rộng 8,3 m, 2 làn, dải phân cách trồng cây 2,4 m', () => {
  for (const s of inside(W1)) {
    near(road.hwAt(s), W1.hw); near(road.hwAt(s), 8.3);
    near(road.laneAt(s, 0), 2.95, 1e-6); near(road.laneAt(s, 1), 6.45, 1e-6);
    assert.equal(road.laneCountAt(s), 2);
    road.medianAt(s, md); near(md.w, 2.4); assert.equal(md.kind, 'plant');
  }
});
check('đoạn 2 (cầu Sài Gòn): rộng 11,5 m, 3 làn, lan can jersey 0,8 m', () => {
  for (const s of inside(W2)) {
    near(road.hwAt(s), W2.hw); near(road.hwAt(s), 11.5);
    near(road.laneAt(s, 0), 2.15, 1e-6); near(road.laneAt(s, 1), 5.65, 1e-6); near(road.laneAt(s, 2), 9.15, 1e-6);
    assert.equal(road.laneCountAt(s), 3);
    road.medianAt(s, md); near(md.w, 0.8); assert.equal(md.kind, 'jersey');
  }
});
check('ngoài đoạn giữ mặc định 7,2 m / 2 làn / không dải phân cách', () => {
  for (const s of [0, W1.s0 - 80, W1.s1 + 80, W2.s0 - 80, W2.s1 + 80, L - 10]) {
    near(road.hwAt(s), CITY.hw);
    near(road.laneAt(s, 0), CITY.lanes[0]); near(road.laneAt(s, 1), CITY.lanes[1]);
    near(road.laneAt(s, 2), CITY.lanes[1]);                 // làn vượt quá => lấy làn ngoài cùng như cũ
    assert.equal(road.laneCountAt(s), 2);
    road.medianAt(s, md); near(md.w, 0); assert.equal(md.kind, null);
  }
});
check('taper 25 m đơn điệu ở hai đầu (rộng / làn / dải phân cách)', () => {
  for (const [W, lane] of [[W1, 6.45], [W2, 9.15]]) {
    let prev = -Infinity;
    for (let d = 0; d <= 25; d++) { const v = road.hwAt(W.s0 + d); assert.ok(v >= prev - 1e-10); prev = v; }
    prev = Infinity;
    for (let d = 25; d >= 0; d--) { const v = road.hwAt(W.s1 - d); assert.ok(v <= prev + 1e-10); prev = v; }
    near(road.hwAt(W.s0), CITY.hw); near(road.hwAt(W.s1), CITY.hw);
    near(road.laneAt(W.s0, 1), CITY.lanes[1]); near(road.laneAt(W.s1, 1), CITY.lanes[1]);
    near(road.laneAt(W.s0 + 25, W == W1 ? 1 : 2), lane);
    near(road.medianAt(W.s0).w, 0); near(road.medianAt(W.s1).w, 0);
    let pw = -Infinity;
    for (let d = 0; d <= 25; d++) { const v = road.medianAt(W.s0 + d).w; assert.ok(v >= pw - 1e-10); pw = v; }
    assert.ok(road.medianAt(W.s0 + 12).w > 0 && road.medianAt(W.s0 + 12).w < W.median.w, 'dải phân cách nở dần');
  }
});
check('làn luôn ngoài dải phân cách và trong nhựa', () => {
  for (const W of [W1, W2]) for (let s = W.s0 - 30; s < W.s1 + 30; s += 0.5) {
    const hw = road.hwAt(s), n = road.laneCountAt(s); road.medianAt(s, md);
    for (let k = 0; k < n; k++) {
      const u = road.laneAt(s, k);
      assert.ok(u > md.w / 2 + 1, `làn ${k} ở s ${s.toFixed(1)} lấn dải phân cách (${u} < ${md.w / 2 + 1})`);
      assert.ok(u < hw - 0.9, `làn ${k} ở s ${s.toFixed(1)} ra ngoài nhựa (${u} > ${hw - 0.9})`);
    }
  }
});
check('quấn đúng qua nhiều vòng', () => {
  for (const W of [W1, W2]) for (const s of [W.s0 + 7, W.s0 + 25, W.s1 - 12, W.s1 + 50, mid(W)]) for (const k of [-4, -1, 1, 3]) {
    near(road.hwAt(s + k * L), road.hwAt(s));
    near(road.laneAt(s + k * L, 1), road.laneAt(s, 1));
    assert.equal(road.laneCountAt(s + k * L), road.laneCountAt(s));
    road.medianAt(s + k * L, md); near(md.w, road.medianAt(s).w); assert.equal(md.kind, road.medianAt(s).kind);
  }
});
check('shape không phải sgn giữ hằng số', () => {
  const other = new Road(); other.setShape('city');
  for (const s of [-1000, 0, 600, 1e6]) {
    near(other.hwAt(s), CITY.hw);
    near(other.laneAt(s, 0), CITY.lanes[0]); near(other.laneAt(s, 1), CITY.lanes[1]);
    assert.equal(other.laneCountAt(s), CITY.lanes.length);
    near(other.medianAt(s).w, 0); assert.equal(other.medianAt(s).kind, null);
  }
});
check('số làn tối đa của vòng = 3', () => assert.equal(road.maxLanes, 3));

console.log(fail ? `\n${fail} lỗi` : '\nTẤT CẢ PASS');
process.exit(fail ? 1 : 0);
