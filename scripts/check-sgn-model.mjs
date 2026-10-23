// Chấm model dựng bằng code cho map Landmark (build(THREE) => { geometry }, vertex colors), dùng cho worker:
//   node scripts/check-sgn-model.mjs <file.js> X Y Z [tol=0.12] [triMin=800] [triMax=20000] [màu hex,màu hex…]
// X / Y / Z: kích thước khung bao mong muốn (m) theo trục x / y (cao) / z, sai ±tol (tỉ lệ); đáy y ≈ 0; tâm x / z gần gốc (< 10 % kích thước);
// có normal + color, không NaN; mỗi màu trong danh sách phải xuất hiện (có đỉnh sai khác ≤ 0.12 mỗi kênh, màu sRGB hex => tuyến tính như three).
import * as THREE from 'three';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [file, X, Y, Z, tol = 0.12, tMin = 800, tMax = 20000, cols = ''] = process.argv.slice(2);
let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const mod = await import(pathToFileURL(path.resolve(file)).href + '?t=' + Date.now());
const out = mod.build(THREE), g = out.geometry || out;
ok(g && g.isBufferGeometry, 'build(THREE) trả về { geometry }');
const P = g.attributes.position, N = g.attributes.normal, C = g.attributes.color;
ok(!!N && !!C, 'có normal + color');
const tris = (g.index ? g.index.count : P.count) / 3;
ok(tris >= +tMin && tris <= +tMax, `${tris} tam giác (${tMin}–${tMax})`);
let nan = false; for (const a of [P, N, C]) if (a) for (const v of a.array) if (!Number.isFinite(v)) { nan = true; break; }
ok(!nan, 'không NaN');
g.computeBoundingBox();
const B = g.boundingBox, S = B.getSize(new THREE.Vector3()), Cn = B.getCenter(new THREE.Vector3());
for (const [k, want] of [['x', +X], ['y', +Y], ['z', +Z]]) ok(Math.abs(S[k] - want) <= want * +tol, `cỡ ${k} ${S[k].toFixed(1)} m (${want} ± ${(+tol * 100).toFixed(0)} %)`);
ok(Math.abs(B.min.y) < 0.6, `đáy y ≈ 0 (${B.min.y.toFixed(2)})`);
ok(Math.abs(Cn.x) < +X * 0.1 + 0.5 && Math.abs(Cn.z) < +Z * 0.1 + 0.5, `tâm gần gốc (${Cn.x.toFixed(1)}, ${Cn.z.toFixed(1)})`);
for (const hex of cols.split(',').filter(Boolean)) {
  const c = new THREE.Color(hex.startsWith('#') ? hex : '#' + hex);
  let hit = false; for (let i = 0; i < C.count && !hit; i++) hit = Math.abs(C.getX(i) - c.r) < 0.12 && Math.abs(C.getY(i) - c.g) < 0.12 && Math.abs(C.getZ(i) - c.b) < 0.12;
  ok(hit, `có màu ${hex}`);
}
console.log(fail ? `\n${fail} FAIL` : '\nALL PASS');
process.exit(fail ? 1 : 0);
