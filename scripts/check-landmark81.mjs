// Chấm model Landmark 81 (src/landmarks/landmark81.js, build(THREE) => { geometry }) theo kích thước thật:
// cao 461 m (cả chóp, ±4 %), thân tháp ~ 56 × 56 m ở cao 100 m (45–70 m), dạng bó ống vuông nhiều độ cao (≥ 5 mức mái cách nhau ≥ 8 m),
// chóp nhọn (ở cao 440 m bề rộng < 12 m), có khối đế (cao 15–40 m, rộng ≥ 80 m), 1 500–16 000 tam giác, có normal + vertex color, không NaN,
// gốc toạ độ ở tâm chân tháp (|tâm x, z| < 15 m ở cao 100 m), đáy ở y ≈ 0.
// Chạy: node scripts/check-landmark81.mjs [đường dẫn file]   (in PASS / FAIL từng mục, thoát 1 nếu có FAIL)
import * as THREE from 'three';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const file = path.resolve(process.argv[2] || 'src/landmarks/landmark81.js');
let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const mod = await import(pathToFileURL(file).href + '?t=' + Date.now());
const out = mod.build(THREE);
const g = out.geometry || out;
ok(g && g.isBufferGeometry, 'build(THREE) trả về { geometry } là BufferGeometry');
const P = g.attributes.position, N = g.attributes.normal, C = g.attributes.color;
ok(!!N && !!C, 'có normal + color (vertex colors)');
const tris = (g.index ? g.index.count : P.count) / 3;
ok(tris >= 1500 && tris <= 16000, `số tam giác ${tris} (1 500–16 000)`);
let nan = false;
for (const a of [P, N, C]) if (a) for (const v of a.array) if (!Number.isFinite(v)) { nan = true; break; }
ok(!nan, 'không có NaN / Infinity');
g.computeBoundingBox();
const B = g.boundingBox;
ok(Math.abs(B.min.y) < 1.5, `đáy ở y ≈ 0 (min y ${B.min.y.toFixed(2)})`);
ok(B.max.y > 461 * 0.96 && B.max.y < 461 * 1.04, `cao ${B.max.y.toFixed(1)} m (461 ± 4 %)`);
// bề rộng theo lát cắt cao độ: đo các tam giác cắt qua mặt phẳng y
function slice(y) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  const idx = g.index ? g.index.array : null, n = idx ? idx.length : P.count;
  const v = (i) => [P.getX(i), P.getY(i), P.getZ(i)];
  for (let t = 0; t < n; t += 3) {
    const T = [0, 1, 2].map((k) => v(idx ? idx[t + k] : t + k));
    for (let e = 0; e < 3; e++) {
      const a = T[e], b = T[(e + 1) % 3];
      if ((a[1] - y) * (b[1] - y) > 0 || a[1] === b[1]) continue;
      const f = (y - a[1]) / (b[1] - a[1]), x = a[0] + (b[0] - a[0]) * f, z = a[2] + (b[2] - a[2]) * f;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
    }
  }
  return { w: x1 - x0, d: z1 - z0, cx: (x0 + x1) / 2, cz: (z0 + z1) / 2 };
}
const s100 = slice(100), s440 = slice(440), s20 = slice(20);
ok(s100.w >= 45 && s100.w <= 70 && s100.d >= 45 && s100.d <= 70, `thân tháp ở cao 100 m: ${s100.w.toFixed(1)} × ${s100.d.toFixed(1)} m (45–70)`);
ok(Math.abs(s100.cx) < 15 && Math.abs(s100.cz) < 15, `tâm tháp gần gốc (${s100.cx.toFixed(1)}, ${s100.cz.toFixed(1)})`);
ok(!(s440.w > 12 || s440.d > 12), `chóp nhọn: ở cao 440 m rộng ${Number.isFinite(s440.w) ? s440.w.toFixed(1) : 0} m (< 12)`);
ok(Math.max(s20.w, s20.d) >= 80, `khối đế ở cao 20 m rộng ${Math.max(s20.w, s20.d).toFixed(1)} m (≥ 80)`);
// mức mái: các mặt nằm ngang hướng lên (normal y > 0.9) trong vùng thân tháp, cao 150–420 m => gom độ cao cách nhau ≥ 8 m
const lv = [];
for (let i = 0; i < P.count; i++) {
  const y = P.getY(i);
  if (y < 150 || y > 425 || N.getY(i) < 0.9) continue;
  if (Math.abs(P.getX(i)) > 45 || Math.abs(P.getZ(i)) > 45) continue;
  if (!lv.some((l) => Math.abs(l - y) < 8)) lv.push(y);
}
lv.sort((a, b) => a - b);
ok(lv.length >= 5, `bó ống bậc thang: ${lv.length} mức mái (≥ 5): ${lv.map((y) => y.toFixed(0)).join(', ')}`);
console.log(fail ? `\n${fail} FAIL` : '\nALL PASS');
process.exit(fail ? 1 : 0);
