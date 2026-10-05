// Bake sóng biển từ model ocean_scene_animated.glb (lưới 101×101, 100 morph target = 100 khung hình, 8.33 s)
// thành atlas PNG 10 cột, mỗi ô 128×128 (100×100 + viền lặp 14 px): R = độ cao, G/B = độ dốc theo u/v.
// Animation gốc KHÔNG lặp liền (khung cuối → khung đầu lệch gấp ~6 lần hai khung liền nhau => mặt biển giật mỗi vòng):
// trộn chéo XF khung cuối vào XF khung đầu (giữ biên độ bằng chuẩn hoá phương sai) => còn 100 − XF khung lặp liền. Game lặp ô sóng này khắp mặt biển
// (src/ocean.js) nên không phải tải file .glb 12.9 MB. Chạy: node scripts/bake-ocean.mjs
import fs from 'node:fs';
import zlib from 'node:zlib';

const SRC = 'docs/assets/models/ocean_scene_animated.glb', OUT = 'docs/assets/tex/ocean-waves.png';
const b = fs.readFileSync(SRC);
const jl = b.readUInt32LE(12), j = JSON.parse(b.subarray(20, 20 + jl).toString());
const bin = b.subarray(20 + jl + 8);
const read = (ai) => {
  const a = j.accessors[ai], v = j.bufferViews[a.bufferView], off = (v.byteOffset || 0) + (a.byteOffset || 0);
  const stride = v.byteStride || 12, out = new Float32Array(a.count * 3);
  for (let i = 0; i < a.count; i++) for (let c = 0; c < 3; c++) out[i * 3 + c] = bin.readFloatLE(off + i * stride + c * 4);
  return out;
};
const prim = j.meshes[0].primitives[0];
const base = read(prim.attributes.POSITION), targets = prim.targets.map((t) => read(t.POSITION));
// toạ độ gốc: lưới đều trong mặt phẳng XY cục bộ, độ cao theo Z; node nhân tỉ lệ 0.1593 (=> ô 27.12 m)
let mn = Infinity, mx = -Infinity;
for (let i = 0; i < base.length; i += 3) { mn = Math.min(mn, base[i]); mx = Math.max(mx, base[i]); }
const N = 101, step = (mx - mn) / (N - 1), S = 0.15930;            // tỉ lệ node (đo trong three.js: matrixWorld)
const TILE = (N - 1) * step * S;
const cell = new Int32Array(N * N).fill(-1);
for (let i = 0; i < base.length / 3; i++) {
  const ix = Math.round((base[i * 3] - mn) / step), iy = Math.round((base[i * 3 + 1] - mn) / step);
  cell[iy * N + ix] = i;
}
if (cell.some((c) => c < 0)) throw new Error('lưới không đều');
const XF = 24;                                                       // số khung trộn chéo ở chỗ nối vòng lặp
const R = N - 1;                                                     // bỏ hàng/cột cuối (ô lặp 100×100)
const H0 = targets.map((t) => { const h = new Float32Array(R * R); for (let y = 0; y < R; y++) for (let x = 0; x < R; x++) h[y * R + x] = t[cell[y * N + x] * 3 + 2] * S; return h; });
// trộn chéo: khung i < XF = (khung i + P) ·(1−w) + khung i ·w, w = smoothstep(i/XF), quanh trung bình, chia √((1−w)²+w²)
const P = H0.length - XF, F = P;
let mean = 0; for (const h of H0) for (const v of h) mean += v; mean /= H0.length * R * R;
const H = H0.slice(0, P).map((h, i) => {
  if (i >= XF) return h;
  const t = i / XF, w = t * t * (3 - 2 * t), k = 1 / Math.hypot(1 - w, w), a = H0[i + P], o = new Float32Array(R * R);
  for (let j = 0; j < o.length; j++) o[j] = mean + ((a[j] - mean) * (1 - w) + (h[j] - mean) * w) * k;
  return o;
});
let hMin = Infinity, hMax = -Infinity, sMax = 0;
const at = (h, x, y) => h[((y + R) % R) * R + ((x + R) % R)];
const slopes = H.map((h) => {
  const s = new Float32Array(R * R * 2), d = step * S * 2;
  for (let y = 0; y < R; y++) for (let x = 0; x < R; x++) {
    const v = h[y * R + x]; hMin = Math.min(hMin, v); hMax = Math.max(hMax, v);
    const su = (at(h, x + 1, y) - at(h, x - 1, y)) / d, sv = (at(h, x, y + 1) - at(h, x, y - 1)) / d;
    s[(y * R + x) * 2] = su; s[(y * R + x) * 2 + 1] = sv;
    if (x > 2 && x < R - 3 && y > 2 && y < R - 3) sMax = Math.max(sMax, Math.abs(su), Math.abs(sv));   // bỏ mép (không lặp liền)
  }
  return s;
});
sMax = Math.ceil(sMax * 10) / 10;
const COLS = 10, PAD = 14, CELL = R + PAD * 2, W = COLS * CELL, Hh = Math.ceil(F / COLS) * CELL, px = Buffer.alloc(W * Hh * 3);
const q = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
H.forEach((h, f) => {
  const ox = (f % COLS) * CELL, oy = Math.floor(f / COLS) * CELL;
  for (let y = 0; y < CELL; y++) for (let x = 0; x < CELL; x++) {
    const o = ((oy + y) * W + ox + x) * 3, k = ((y - PAD + R) % R) * R + (x - PAD + R) % R;
    px[o] = q((h[k] - hMin) / (hMax - hMin));
    px[o + 1] = q(slopes[f][k * 2] / (2 * sMax) + 0.5);
    px[o + 2] = q(slopes[f][k * 2 + 1] / (2 * sMax) + 0.5);
  }
});
// PNG RGB 8-bit
const crcT = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc = (buf) => { let c = -1; for (const x of buf) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
const raw = Buffer.alloc((W * 3 + 1) * Hh);
for (let y = 0; y < Hh; y++) { raw[y * (W * 3 + 1)] = 0; px.copy(raw, y * (W * 3 + 1) + 1, y * W * 3, (y + 1) * W * 3); }
const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(Hh, 4); ihdr[8] = 8; ihdr[9] = 2;
fs.writeFileSync(OUT, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]));
const anim = j.animations[0], dur = j.accessors[anim.samplers[0].input].max[0] * F / H0.length;
console.log(`${OUT}: ${W}×${Hh}, ${F} khung, ô ${TILE.toFixed(3)} m, độ cao ${hMin.toFixed(3)}..${hMax.toFixed(3)} m, dốc ±${sMax}, chu kỳ ${dur.toFixed(3)} s, ${(fs.statSync(OUT).size / 1e6).toFixed(2)} MB`);
