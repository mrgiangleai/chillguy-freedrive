import assert from 'node:assert/strict';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { OCEAN_SEAM_MIN, oceanSeamWeights } from '../src/ocean.js';

const eps = 1e-6;
const start = oceanSeamWeights(0), end = oceanSeamWeights(1), before = oceanSeamWeights(1 - eps), after = oceanSeamWeights(eps);
assert.equal(OCEAN_SEAM_MIN, .1);
assert.deepEqual(start, { a: .1, b: 1 });
assert.deepEqual(end, start);
assert(Math.abs(before.a - after.a) < 1e-12 && Math.abs(before.b - after.b) < 1e-12, 'Fade must be symmetric across loop seam');
assert(Math.abs(before.a - start.a) < 1e-10 && Math.abs(before.b - start.b) < 1e-10, 'Fade slope must approach zero at seam');
assert.deepEqual(oceanSeamWeights(.5), { a: 1, b: .1 });
for (let i = 0; i <= 10000; i++) {
  const { a, b } = oceanSeamWeights(i / 10000);
  assert(a >= .1 && a <= 1 && b >= .1 && b <= 1);
  assert(Math.max(a, b) >= .55, 'One layer must remain visible while the other fades');
}
console.log('PASS ocean loop: both layer seams fade smoothly to 10%, repeat continuously, and retain a covering layer.');

// Đo trực tiếp atlas đang dùng: nội suy các khung ở hai phía điểm lặp, rồi trộn hai lớp đúng như shader.
const png = fs.readFileSync('docs/assets/tex/ocean-waves.png');
let offset = 8; const idat = [];
while (offset < png.length) {
  const length = png.readUInt32BE(offset), type = png.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') idat.push(png.subarray(offset + 8, offset + 8 + length));
  offset += 12 + length;
}
const raw = zlib.inflateSync(Buffer.concat(idat)), width = 1000, stride = width * 3 + 1;
const pixel = (frame, x, y, channel) => raw[(Math.floor(frame / 10) * 100 + y) * stride + 1 + (frame % 10 * 100 + x) * 3 + channel] / 255;
const layer = (frame, x, y, channel) => {
  const f0 = Math.floor(frame), t = frame - f0, f1 = (f0 + 1) % 76;
  return pixel(f0, x, y, channel) * (1 - t) + pixel(f1, x, y, channel) * t;
};
const composite = (phase, x, y, channel) => {
  const w = oceanSeamWeights(phase), a = layer(phase * 76, x, y, channel), b = layer(((phase + .5) % 1) * 76, x, y, channel);
  return .5 + ((a - .5) * w.a + (b - .5) * w.b) / Math.hypot(w.a, w.b);
};
for (const [a, b] of [[.999, 0], [0, .001]]) {
  let squared = 0, count = 0;
  for (let y = 0; y < 100; y += 2) for (let x = 0; x < 100; x += 2) for (let c = 0; c < 3; c++) {
    const d = composite(a, x, y, c) - composite(b, x, y, c); squared += d * d; count++;
  }
  assert(Math.sqrt(squared / count) < .005, `Atlas jump too large at ${a} -> ${b}`);
}
console.log('PASS ocean atlas: measured frame blend changes <0.5% RMS immediately before/after the loop seam.');
