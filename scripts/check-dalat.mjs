// Kiểm tra map Hồ Xuân Hương – Đà Lạt: vòng khép kín (s quấn vòng, −2π chiều kim đồng hồ), đường liên tục, hồ bên phải xe,
// mặt đường trên mặt hồ và bám địa hình DEM (urban:EXPORT), dốc ≤ 10 %, khúc cua đi được, tài nguyên có trong BY_MAP.
import fs from 'node:fs';
import { Road } from '../src/road.js';
import { setTerrainMap, TP, demAt } from '../src/terrain-noise.js';
import { DALAT, dalatLoop, dalatDem } from '../src/dalat.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const D = DALAT.data, L = D.length, loop = dalatLoop();
setTerrainMap('dalat'); TP.dem = dalatDem();
const road = new Road();
road.setShape('dalat', loop);
road.recomputeHeights();

ok(L > 4500 && L < 5500, `dài ${(L / 1000).toFixed(2)} km`);
const a = road.at(0, {}), b = road.at(L, {});
ok(Math.hypot(a.x - b.x, a.z - b.z) < 0.5 && Math.abs(a.y - b.y) < 0.05, `vòng liền: đầu ↔ cuối lệch ${Math.hypot(a.x - b.x, a.z - b.z).toFixed(2)} m`);
ok(Math.abs(loop.turn + 2 * Math.PI) < 1e-9 && Math.abs(road.heading(L + 7) - road.heading(7) - loop.turn) < 1e-9, 'hướng sau 1 vòng = −2π (chiều kim đồng hồ)');
let gap = 0, minY = Infinity, grade = 0, dev = 0, kmax = 0, right = 0, n = 0;
const inPoly = (x, z, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > z) !== (P[j][1] > z) && x < P[i][0] + (P[j][0] - P[i][0]) * (z - P[i][1]) / (P[j][1] - P[i][1])) c = !c; return c; };
for (let s = 0; s < 2 * L; s += 2) {
  const p = road.at(s, {}), q = road.at(s + 2, {});
  gap = Math.max(gap, Math.abs(Math.hypot(q.x - p.x, q.z - p.z) - 2));
  if (s < L) {
    minY = Math.min(minY, p.y); grade = Math.max(grade, Math.abs(q.y - p.y) / 2); dev = Math.max(dev, Math.abs(p.y - demAt(TP.dem, p.x, p.z)));
    kmax = Math.max(kmax, Math.abs(road.curvature(s)));
    const th = road.heading(s), rx = Math.cos(th), rz = -Math.sin(th);   // bên phải xe
    if (s % 50 === 0) { n++; for (const u of [20, 40, 70]) if (inPoly(p.x + rx * u, p.z + rz * u, D.lake)) { right++; break; } }
  }
}
ok(gap < 0.1, `đường liên tục (bước lệch ${gap.toFixed(3)} m)`);
ok(minY >= 0.7, `mặt đường cao hơn mặt hồ ≥ 0.7 m (thấp nhất ${minY.toFixed(2)} m)`);
ok(grade < 0.1, `dốc tối đa ${(grade * 100).toFixed(1)} %`);
ok(dev < 4, `mặt đường lệch địa hình DEM tối đa ${dev.toFixed(2)} m`);
ok(kmax < 1 / 25, `bán kính cua nhỏ nhất ${(1 / kmax).toFixed(1)} m`);
ok(right / n > 0.6, `hồ bên phải xe ở ${(100 * right / n).toFixed(0)} % số điểm (mỗi 50 m)`);
const pre = fs.readFileSync(new URL('../src/preload.js', import.meta.url), 'utf8');
const need = ['assets/dalat/dalat-city.glb', 'assets/dalat/dalat-trees.json', 'assets/dalat/dalat-streets.json'];
ok(need.every((f) => pre.includes(f) && fs.existsSync(new URL('../docs/' + f, import.meta.url))), 'tài nguyên dalat có trong docs/ + BY_MAP');
console.log(fail ? `${fail} FAIL` : 'ALL PASS');
process.exit(fail ? 1 : 0);
