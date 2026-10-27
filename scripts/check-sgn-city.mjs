// Kiểm tra tài sản map sgn sinh bởi `node scripts/convert-urban-export.mjs`.
// Chạy: node scripts/check-sgn-city.mjs
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const A = path.join(ROOT, 'docs/assets');
const D = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/sgn-data.json'), 'utf8'));
const H = JSON.parse(fs.readFileSync(path.join(A, 'sgn-city.json'), 'utf8'));
const bin = fs.readFileSync(path.join(A, 'sgn-city.bin'));
const water = JSON.parse(fs.readFileSync(path.join(A, 'sgn-water.json'), 'utf8'));
const trees = JSON.parse(fs.readFileSync(path.join(A, 'sgn-ue-trees.json'), 'utf8'));
const [CX, CZ] = H.center;

console.log(`nhà ${H.buildings} / ${H.tris} tam giác, nước ${water.tris.length / 6} tam giác, cây ${trees.length / 2}`);

// binary đúng layout: bảng Uint32 [firstTri, triCount, cat] rồi Float32 xyz
assert.equal(H.format, 'sgn-city');
assert.ok(bin.length <= 12 * 1048576, 'sgn-city.bin phải ≤ 12 MB');
assert.equal(H.posOffset, H.buildings * 12);
assert.equal(bin.length, H.posOffset + H.tris * 36);
const table = new Uint32Array(bin.buffer, bin.byteOffset, H.buildings * 3);
const pos = new Float32Array(bin.buffer, bin.byteOffset + H.posOffset, H.tris * 9);

// bảng liên tục, đủ tam giác, category hợp lệ
let next = 0;
for (let i = 0; i < H.buildings; i++) {
  const [first, count, cat] = [table[i * 3], table[i * 3 + 1], table[i * 3 + 2]];
  assert.equal(first, next, `toà ${i} firstTri không liên tục`);
  assert.ok(count > 0, `toà ${i} không có tam giác`);
  assert.ok(cat < H.categories.length, `toà ${i} category sai`);
  next += count;
}
assert.equal(next, H.tris, 'tổng tam giác trong bảng không khớp header');
assert.ok(H.buildings >= 3000, `phải giữ ≥ 3000 toà, hiện ${H.buildings}`);

// lưới đoạn tuyến để đo khoảng cách tới tim đường
const RX = D.x, RZ = D.z, RL = RX.length, RG = 60, grid = new Map();
for (let i = 0; i < RL; i++) {
  const j = (i + 1) % RL;
  const x0 = Math.min(RX[i], RX[j]), x1 = Math.max(RX[i], RX[j]);
  const z0 = Math.min(RZ[i], RZ[j]), z1 = Math.max(RZ[i], RZ[j]);
  for (let gx = Math.floor(x0 / RG); gx <= Math.floor(x1 / RG); gx++)
    for (let gz = Math.floor(z0 / RG); gz <= Math.floor(z1 / RG); gz++) {
      const k = gx + ',' + gz;
      (grid.get(k) || grid.set(k, []).get(k)).push(i);
    }
}
function near(x, z) {
  const gx = Math.floor(x / RG), gz = Math.floor(z / RG);
  let best = 1e9;
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
    const a = grid.get((gx + i) + ',' + (gz + j)); if (!a) continue;
    for (const p of a) {
      const q = (p + 1) % RL, ax = RX[p], az = RZ[p], vx = RX[q] - ax, vz = RZ[q] - az;
      const l2 = vx * vx + vz * vz || 1;
      let t = ((x - ax) * vx + (z - az) * vz) / l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      best = Math.min(best, Math.hypot(x - (ax + vx * t), z - (az + vz * t)));
    }
  }
  return best;
}
function inPoly(x, z, P) {
  let c = false;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++)
    if ((P[i][1] > z) !== (P[j][1] > z) && x < P[i][0] + (P[j][0] - P[i][0]) * (z - P[i][1]) / (P[j][1] - P[i][1])) c = !c;
  return c;
}
const box = (x, z, what) => {
  assert.ok(Math.abs(x - CX) <= 1300 && Math.abs(z - CZ) <= 1300, `${what} ngoài hộp 2 600 m: ${x.toFixed(1)}, ${z.toFixed(1)}`);
};

// từng toà: không sát tim đường, không trong Vinhomes, cao < 300 m, trong hộp
let tallest = 0, roadMin = Infinity;
for (let i = 0; i < H.buildings; i++) {
  const first = table[i * 3], count = table[i * 3 + 1];
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity, y1 = 0;
  for (let k = first * 9; k < (first + count) * 9; k += 3) {
    const x = pos[k], y = pos[k + 1], z = pos[k + 2];
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
    if (y > y1) y1 = y;
    const d = near(x, z); if (d < roadMin) roadMin = d;
    assert.ok(d >= 11.5, `toà ${i} sát tim đường ${d.toFixed(2)} m`);
    box(x, z, `nhà ${i}`);
  }
  assert.ok(!inPoly((x0 + x1) / 2, (z0 + z1) / 2, D.vinhomes), `toà ${i} nằm trong Vinhomes`);
  tallest = Math.max(tallest, y1);
}
assert.ok(tallest < 300, `toà cao nhất còn ${tallest.toFixed(1)} m (Landmark 81 chưa bị loại)`);
assert.equal(H.dropped.landmark + H.dropped.vinhomes > 0, true, 'chưa loại toà trong Vinhomes / Landmark');

// nước + cây
assert.ok(water.tris.length / 6 > 100, 'phải có > 100 tam giác nước');
for (let i = 0; i < water.tris.length; i += 2) box(water.tris[i], water.tris[i + 1], 'nước');
assert.ok(trees.length / 2 > 5000, 'phải có > 5 000 cây');
for (let i = 0; i < trees.length; i += 2) box(trees[i], trees[i + 1], 'cây');

// bbox header trong hộp, mọi toạ độ hữu hạn
for (let i = 0; i < pos.length; i++) assert.ok(Number.isFinite(pos[i]), 'toạ độ nhà không hữu hạn');
const bb = H.bbox;
box(bb[0], bb[2], 'bbox min'); box(bb[3], bb[5], 'bbox max');
assert.ok(H.tallest < 300, 'header tallest phải < 300 m');

console.log(`OK — cao nhất ${tallest.toFixed(1)} m, gần tim đường nhất ${roadMin.toFixed(2)} m, bin ${(bin.length / 1048576).toFixed(2)} MB`);
