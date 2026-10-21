// Kiểm tra map New York: chiều một chiều đúng theo OSM, vòng khép kín (s quấn vòng), đúng 4 khúc rẽ trái vuông,
// ngã tư cách đều ~80 m (không có ngã tư trong hầm / trên cầu cạn), dốc hầm / cầu cạn ≤ 6 %, trần hầm + cầu cạn đủ dài.
import { Road } from '../src/road.js';
import { NYC, nycLoop } from '../src/nyc.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const D = NYC.data, L = D.length, loop = nycLoop();
const road = new Road();
road.setShape('nyc', loop);

// chiều đi của từng chặng (dò bằng đồ thị có hướng trong fetch-nyc.mjs, kiểm lại hướng thật theo trục phố Manhattan)
const want = { '7th Ave': 'nam', '32nd St': 'đông', 'Park Ave': 'bắc', '55th St': 'tây', 'hầm Park Ave': 'bắc', 'cầu cạn Park Ave': 'bắc' };
for (const v of D.verify) ok(v.dir === want[v.leg], `${v.leg}: đi ${v.dir}${v.oneway ? ', một chiều' : ''}`);
ok(D.verify.find((v) => v.leg === 'hầm Park Ave')?.oneway, 'hầm Park Ave chỉ một chiều (bắc)');
ok(L > 5000 && L < 6500, `dài ${(L / 1000).toFixed(2)} km`);

// vòng khép kín: điểm đầu ≡ điểm cuối, hướng +2π sau 1 vòng, vị trí lặp lại mỗi vòng
const a = road.at(0, {}), b = road.at(L, {});
ok(Math.hypot(a.x - b.x, a.z - b.z) < 0.5, `vòng liền: đầu ↔ cuối lệch ${Math.hypot(a.x - b.x, a.z - b.z).toFixed(2)} m`);
ok(Math.abs(road.heading(L + 7) - road.heading(7) - 2 * Math.PI) < 1e-9, 'hướng sau 1 vòng = +2π (4 khúc rẽ trái)');
let rep = 0;
for (let s = 0; s < L; s += 37) { const p = road.at(s + 2 * L, {}), q = road.at(s, {}); rep = Math.max(rep, Math.hypot(p.x - q.x, p.z - q.z)); }
ok(rep < 0.1, `vị trí lặp lại mỗi vòng (lệch ${(rep * 100).toFixed(1)} cm do nội suy điểm 2 m)`);
let jump = 0, gap = 0;
for (let i = 1; i < D.heading.length; i++) jump = Math.max(jump, Math.abs(D.heading[i] - D.heading[i - 1]));
for (let s = 0; s < 2 * L; s += 2) { const p = road.at(s, {}), q = road.at(s + 2, {}); gap = Math.max(gap, Math.abs(Math.hypot(q.x - p.x, q.z - p.z) - 2)); }
ok(jump < 0.6 && gap < 0.05, `đường liên tục (hướng đổi tối đa ${jump.toFixed(3)} rad / ${D.step.toFixed(2)} m, bước lệch ${gap.toFixed(3)} m)`);

// 4 khúc rẽ trái vuông, bán kính ~15 m; ngoài 4 góc không có khúc cua gắt (> 35°)
ok(D.corners.length === 4, `4 góc rẽ: ${D.corners.map((c) => `${c.name} @${c.s.toFixed(0)}`).join(', ')}`);
for (const c of D.corners) {
  const turn = road.heading(L + c.s + 30) - road.heading(L + c.s - 30), k = road.curvature(L + c.s);
  ok(Math.abs(turn - Math.PI / 2) < 0.2 && 1 / k > 11 && 1 / k < 20, `${c.name}: rẽ trái ${(turn * 180 / Math.PI).toFixed(0)}°, bán kính ${(1 / k).toFixed(1)} m`);
  // tiếp tuyến: từ đầu cung (s − arc) tới góc vuông ≈ NYC.tangent (city.js dựng góc theo số này)
  const pa = road.at(L + c.s - 30, {}), pb = road.at(L + c.s + 30, {});
  const fa = [-Math.sin(pa.th), -Math.cos(pa.th)], fb = [-Math.sin(pb.th), -Math.cos(pb.th)], det = fa[0] * fb[1] - fa[1] * fb[0];
  const t = ((pb.x - pa.x) * fb[1] - (pb.z - pa.z) * fb[0]) / det, C = [pa.x + fa[0] * t, pa.z + fa[1] * t];
  const p0 = road.at(L + c.s - NYC.arc, {});
  ok(Math.abs(Math.hypot(p0.x - C[0], p0.z - C[1]) - NYC.tangent) < 1.5, `${c.name}: đầu cung cách góc vuông ${Math.hypot(p0.x - C[0], p0.z - C[1]).toFixed(1)} m`);
}
// ngoài 4 góc: cua gắt (> 35° / 40 m) chỉ có trên cầu cạn vòng quanh Grand Central
let sharp = 0, gct = 0;
for (let s = 0; s < L; s += 5) {
  if (D.corners.some((c) => Math.min(Math.abs(s - c.s), L - Math.abs(s - c.s)) < 40)) continue;
  const t = Math.abs(road.heading(L + s + 20) - road.heading(L + s - 20));
  if (loop.elev(s) > 0.2) gct = Math.max(gct, t); else sharp = Math.max(sharp, t);
}
ok(sharp < 35 * Math.PI / 180, `ngoài 4 góc + cầu cạn: đổi hướng tối đa ${(sharp * 180 / Math.PI).toFixed(0)}° / 40 m (cầu cạn quanh Grand Central ${(gct * 180 / Math.PI).toFixed(0)}°)`);
// tốc độ vào cua (road.curveV): gia tốc ngang v²·k ≤ 2.5 m/s² ở mọi điểm, tâm góc rẽ ≤ 25 km/h
let lat = 0, vc = 0;
for (let s = 0; s < L; s += 2) { const k = Math.abs(road.curvature(L + s)); if (k > 1e-3) lat = Math.max(lat, road.curveV(L + s) ** 2 * k); }
for (const c of D.corners) vc = Math.max(vc, road.curveV(L + c.s));
ok(lat <= 2.5 && vc * 3.6 <= 25, `vào cua: gia tốc ngang tối đa ${lat.toFixed(2)} m/s², tâm góc rẽ ${(vc * 3.6).toFixed(0)} km/h`);

// ngã tư: cách nhau ≥ 40 m (đại lộ ~80 m), góc rẽ là ngã tư có đèn; không có ngã tư ở đoạn hầm / cầu cạn
const J = D.junctions, gaps = J.map((j, i) => (i ? j.s - J[i - 1].s : j.s + L - J.at(-1).s));
const ave = gaps.filter((g) => g < 120).sort((x, y) => x - y);
ok(Math.min(...gaps) >= 40, `${J.length} ngã tư, cách nhau ít nhất ${Math.min(...gaps).toFixed(0)} m (đại lộ: trung vị ${ave[ave.length >> 1].toFixed(0)} m)`);
ok(D.corners.every((c) => J.some((j) => j.corner && Math.abs(j.s - c.s) < 1)), '4 góc rẽ đều là ngã tư có đèn');
let inStruct = J.filter((j) => [-20, 0, 20].some((d) => Math.abs(loop.elev(j.s + d)) > 0.3));
ok(!inStruct.length, 'không có ngã tư trong hầm / trên cầu cạn' + (inStruct.length ? ` (${inStruct.map((j) => j.names[0]).join(', ')})` : ''));
for (let i = 0; i < J.length; i++) {
  const n = road.junctionIndex(J[i].s + L - 0.01);
  if (Math.abs(road.junction(n) - (J[i].s + L)) > 1e-6) { ok(false, `junctionIndex lệch ở ${J[i].s}`); break; }
}

// hầm + cầu cạn: dốc ≤ 6 %, trần hầm kín ≥ 250 m, cầu cạn cao ≥ 5 m trên ≥ 150 m, cầu cao lúc qua 42 St (~80 m sau 41 St)
let grade = 0, roof = 0, high = 0, lo = 0, hi = 0;
for (let s = 0; s < L; s += 1) {
  grade = Math.max(grade, Math.abs(loop.elev(s + 1) - loop.elev(s)));
  const e = loop.elev(s); lo = Math.min(lo, e); hi = Math.max(hi, e);
  if (e <= NYC.roof) roof++;
  if (e >= 5) high++;
}
ok(grade <= NYC.maxGrade + 0.002, `dốc lớn nhất ${(grade * 100).toFixed(1)} %`);
ok(roof >= 250 && lo <= -5, `hầm Park Ave: sâu ${(-lo).toFixed(1)} m, trần kín ${roof} m (OSM ${D.tunnels.map((t) => `${t.s0.toFixed(0)}–${t.s1.toFixed(0)}`)})`);
ok(high >= 150 && hi >= 5.5, `cầu cạn Park Ave: cao ${hi.toFixed(1)} m, ≥ 5 m trên ${high} m (OSM ${D.bridges.map((t) => `${t.s0.toFixed(0)}–${t.s1.toFixed(0)}`)})`);
const p = road.at(L + D.tunnels[0].s0 + 100, {}), st = road.street.at(L + D.tunnels[0].s0 + 100, {});
ok(Math.abs(st.y - p.y - NYC.depth) < 0.01, `mặt phố trên hầm cao hơn mặt đường ${(st.y - p.y).toFixed(2)} m`);

console.log(fail ? `\n${fail} lỗi` : '\nTất cả PASS');
process.exit(fail ? 1 : 0);
