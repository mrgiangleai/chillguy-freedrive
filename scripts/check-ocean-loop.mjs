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

// Mô phỏng shader: đúng chiều atlas, bilinear, bù chuyển động, 4 ô lệch và mipmap/trilinear.
const source = fs.readFileSync('src/ocean.js', 'utf8');
assert(source.includes('tex.flipY = false'), 'GPU must preserve atlas row order');
assert(source.includes('o * 128.0 + 14.5 + c * 99.0'), 'Shader must match padded atlas');
const png = fs.readFileSync('docs/assets/tex/ocean-waves.png');
let offset = 8; const idat = []; let width, height;
while (offset < png.length) {
  const length = png.readUInt32BE(offset), type = png.toString('ascii', offset + 4, offset + 8);
  if (type === 'IHDR') { width = png.readUInt32BE(offset + 8); height = png.readUInt32BE(offset + 12); }
  if (type === 'IDAT') idat.push(png.subarray(offset + 8, offset + 8 + length));
  offset += 12 + length;
}
assert.equal(width, 1280); assert.equal(height, 1024);
const raw = zlib.inflateSync(Buffer.concat(idat)), stride = width * 3 + 1;
const data = new Float64Array(width * height * 3);
for (let y = 0; y < height; y++) {
  assert.equal(raw[y * stride], 0, 'Bake uses PNG filter 0');
  for (let x = 0; x < width * 3; x++) data[y * width * 3 + x] = raw[y * stride + 1 + x] / 255;
}
const mips = [{ width, height, data }];
for (let l = 1; l <= 3; l++) {
  const old = mips[l - 1], w = old.width / 2, h = old.height / 2, d = new Float64Array(w * h * 3);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) for (let c = 0; c < 3; c++) {
    for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) d[(y * w + x) * 3 + c] += old.data[((y * 2 + j) * old.width + x * 2 + i) * 3 + c] / 4;
  }
  mips.push({ width: w, height: h, data: d });
}
const frac = x => x - Math.floor(x);
function frame(f, u, v, c, lod) {
  const px = (level) => {
    const m = mips[level], scale = 2 ** level;
    const x = (f % 10 * 128 + 14.5 + frac(u) * 99) / scale - .5;
    const y = (Math.floor(f / 10) * 128 + 14.5 + frac(v) * 99) / scale - .5;
    const ix = Math.floor(x), iy = Math.floor(y), a = x - ix, b = y - iy;
    // Mọi mẫu bilinear nằm trong cùng ô khung, kể cả mip 3.
    assert.equal(Math.floor(ix / (128 / scale)), f % 10);
    assert.equal(Math.floor((ix + 1) / (128 / scale)), f % 10);
    assert.equal(Math.floor(iy / (128 / scale)), Math.floor(f / 10));
    assert.equal(Math.floor((iy + 1) / (128 / scale)), Math.floor(f / 10));
    const at = (i, j) => m.data[(j * m.width + i) * 3 + c];
    return (at(ix, iy) * (1 - a) + at(ix + 1, iy) * a) * (1 - b) + (at(ix, iy + 1) * (1 - a) + at(ix + 1, iy + 1) * a) * b;
  };
  const l = Math.floor(lod), t = lod - l;
  return px(l) * (1 - t) + px(Math.min(3, l + 1)) * t;
}
function layer(fr, u, v, c, lod) {
  const f = Math.floor(fr), t = fr - f;
  return frame(f, u + .00505 * t, v - .02273 * t, c, lod) * (1 - t)
    + frame((f + 1) % 76, u - .00505 * (1 - t), v + .02273 * (1 - t), c, lod) * t;
}
function one(ph, u, v, c, lod) {
  ph = frac(ph); const w = oceanSeamWeights(ph);
  return .5 + ((layer(ph * 76, u, v, c, lod) - .5) * w.a + (layer(frac(ph + .5) * 76, u, v, c, lod) - .5) * w.b) / Math.hypot(w.a, w.b);
}
function wave(ph, u, v, c, lod) {
  const x = Math.sin(Math.PI * frac(u)) ** 2, y = Math.sin(Math.PI * frac(v)) ** 2;
  return one(ph, u, v, c, lod) * x * y + one(ph, u + .5, v, c, lod) * (1 - x) * y
    + one(ph, u, v + .5, c, lod) * x * (1 - y) + one(ph, u + .5, v + .5, c, lod) * (1 - x) * (1 - y);
}
// Every frame must contain real height/slope data; verify padding byte-for-byte.
for (let f = 0; f < 76; f++) {
  let mean = 0;
  for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) for (let c = 0; c < 3; c++) {
    const ox = f % 10 * 128, oy = Math.floor(f / 10) * 128;
    const actual = data[((oy + y) * width + ox + x) * 3 + c];
    const expected = data[((oy + 14 + (y - 14 + 100) % 100) * width + ox + 14 + (x - 14 + 100) % 100) * 3 + c];
    assert.equal(actual, expected); mean += actual;
  }
  assert(mean / (128 * 128 * 3) > .1, `Blank frame ${f}`);
}
// Xác nhận hướng bù trôi khớp dữ liệu sau khi tắt flipY.
function driftError(sign) {
  let sum = 0, n = 0;
  for (let f = 25; f < 74; f += 4) for (let y = 5; y < 94; y += 6) for (let x = 5; x < 94; x += 6) {
    const d = frame(f, x / 99, y / 99, 0, 0) - frame(f + 1, (x - sign * .5) / 99, (y + sign * 2.25) / 99, 0, 0);
    sum += d * d; n++;
  }
  return Math.sqrt(sum / n);
}
assert(driftError(1) < driftError(0) * .5, 'Compensation must improve continuity');
assert(driftError(1) < driftError(-1) * .5, 'Compensation direction must match atlas');
const delta = 1 / (60 * 6.333 * Math.SQRT2);
function rms(a, b, lod) {
  let s = 0, n = 0;
  for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) for (let c = 0; c < 3; c++) {
    const u = (x + .37) / 12, v = (y + .61) / 12;
    s += (wave(a, u, v, c, lod) - wave(b, u, v, c, lod)) ** 2; n++;
  }
  return Math.sqrt(s / n);
}
for (const lod of [0, 1, 2.5]) {
  const changes = Array.from({ length: 152 }, (_, i) => rms(i / 152, i / 152 + delta, lod)).sort((a, b) => a - b);
  const typical = changes[Math.floor(changes.length / 2)];
  for (const seam of [0, .5]) {
    const change = rms(seam - delta / 2, seam + delta / 2, lod);
    assert(change < typical * 1.5, `Loop spike at ${seam}, LOD ${lod}`);
    assert(rms(seam - 1e-7, seam + 1e-7, lod) < 1e-5, 'Discontinuous seam');
    console.log(`LOD ${lod}, seam ${seam}: 60 Hz RMS ${change.toFixed(5)}; typical ${typical.toFixed(5)}`);
  }
}
console.log('PASS atlas: 76 valid frames, periodic padding, isolated mip footprints and no excess loop jump in shader sampling.');
