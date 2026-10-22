// Kiểm tra map Landmark 81 – TP.HCM: vòng khép kín (s quấn vòng, +2π), đường liên tục, đi qua đủ các đường của tuyến
// (Nguyễn Hữu Cảnh → khu Vinhomes: Vạn Hoa 4 → Vạn Hoa 3 → Trần Trọng Kim → Điện Biên Phủ → cầu Sài Gòn 2 → Võ Nguyên Giáp → Mai Chí Thọ
// → hầm Thủ Thiêm → Võ Văn Kiệt → Tôn Đức Thắng → Nguyễn Hữu Cảnh),
// đi qua khu Vinhomes sát Landmark 81, hầm Thủ Thiêm sâu + có trần, cầu Sài Gòn cao, dốc ≤ 6 %, không có ngã tư trong hầm / trên cầu, khúc cua đi được.
import { Road } from '../src/road.js';
import { SGN, sgnLoop, sgnStreet } from '../src/sgn.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const D = SGN.data, L = D.length, loop = sgnLoop();
const road = new Road();
road.setShape('sgn', loop);

ok(L > 15000 && L < 21000, `dài ${(L / 1000).toFixed(2)} km`);
const a = road.at(0, {}), b = road.at(L, {});
ok(Math.hypot(a.x - b.x, a.z - b.z) < 0.5, `vòng liền: đầu ↔ cuối lệch ${Math.hypot(a.x - b.x, a.z - b.z).toFixed(2)} m`);
ok(Math.abs(road.heading(L + 7) - road.heading(7) - loop.turn) < 1e-9, `hướng sau 1 vòng = ${(loop.turn / Math.PI).toFixed(0)}π (vòng chiều kim đồng hồ + vòng quay đầu dưới cầu Sài Gòn bù nhau)`);
let rep = 0;
for (let s = 0; s < L; s += 37) { const p = road.at(s + 2 * L, {}), q = road.at(s, {}); rep = Math.max(rep, Math.hypot(p.x - q.x, p.z - q.z)); }
ok(rep < 0.15, `vị trí lặp lại mỗi vòng (lệch ${(rep * 100).toFixed(1)} cm)`);
let jump = 0, gap = 0;
for (let i = 1; i < D.heading.length; i++) jump = Math.max(jump, Math.abs(D.heading[i] - D.heading[i - 1]));
for (let s = 0; s < 2 * L; s += 2) { const p = road.at(s, {}), q = road.at(s + 2, {}); gap = Math.max(gap, Math.abs(Math.hypot(q.x - p.x, q.z - p.z) - 2)); }
ok(jump < 0.5 && gap < 0.1, `đường liên tục (hướng đổi tối đa ${jump.toFixed(3)} rad / ${D.step.toFixed(2)} m, bước lệch ${gap.toFixed(3)} m)`);

// đủ các đường của tuyến, đúng thứ tự
const order = ['Nguyễn Hữu Cảnh', 'Vạn Hoa 4', 'Đường Vạn Hoa 3', 'Trần Trọng Kim', 'Điện Biên Phủ', 'Cầu Sài Gòn 2', 'Võ Nguyên Giáp', 'Mai Chí Thọ', 'Hầm Thủ Thiêm', 'Võ Văn Kiệt', 'Tôn Đức Thắng', 'Nguyễn Hữu Cảnh'];
const seq = D.streets.map((t) => t.name).filter((n) => order.includes(n)).filter((n, i, A) => n !== A[i - 1]);
ok(order.every((n, i) => seq.indexOf(n, i ? seq.indexOf(order[i - 1]) : 0) >= 0) && seq.filter((n) => n === 'Hầm Thủ Thiêm').length === 1,
  'tuyến: ' + seq.join(' → '));
ok(sgnStreet(SGN.start) === 'Nguyễn Hữu Cảnh', `vào map ở ${sgnStreet(SGN.start)}`);
// Trần Trọng Kim chạy sát Landmark 81 (≤ 150 m)
{ const [lx, lz] = D.landmark81; let best = Infinity; for (let s = 0; s < L; s += 5) { if (sgnStreet(s) !== 'Trần Trọng Kim') continue; const p = road.at(s, {}); best = Math.min(best, Math.hypot(p.x - lx, p.z - lz)); }
  ok(best <= 150, `Trần Trọng Kim cách Landmark 81 gần nhất ${best.toFixed(0)} m`); }

// hầm Thủ Thiêm: 1 hầm dài > 900 m, sâu ≥ 9 m, có trần > 1 km; cầu Sài Gòn: cao ≥ 10 m
const E = (s) => loop.elev(s);
ok(D.tunnels.length >= 1 && D.tunnels.some((t) => t.s1 - t.s0 > 900), `hầm: ${D.tunnels.map((t) => `${t.name} ${(t.s1 - t.s0).toFixed(0)} m`).join(', ')}`);
let deep = 0, cov = 0, high = 0, grade = 0;
for (let s = 0; s < L; s += 1) {
  deep = Math.min(deep, E(s)); if (E(s) < SGN.roof) cov++;
  grade = Math.max(grade, Math.abs(E(s + 1) - E(s)));
}
const sg = D.bridges.find((b) => /Sài Gòn/.test(b.name));
for (let s = sg?.s0 ?? 0; s < (sg?.s1 ?? 0); s += 2) high = Math.max(high, E(s));
ok(deep <= -9, `hầm sâu nhất ${(-deep).toFixed(1)} m`);
ok(cov > 1000, `đoạn có trần kín ${cov} m`);
ok(sg && high >= 10, `cầu Sài Gòn ${sg ? (sg.s1 - sg.s0).toFixed(0) : '?'} m, cao ${high.toFixed(1)} m`);
ok(grade <= 0.06, `dốc lớn nhất ${(grade * 100).toFixed(1)} %`);

// không có ngã tư ở đoạn đường cao / thấp hơn mặt phố; ngã tư không trùng nhau
const bad = D.junctions.filter((j) => Math.abs(E(j.s)) > 0.3);
ok(!bad.length, `${D.junctions.length} ngã tư (${D.junctions.filter((j) => j.signal).length} có đèn), không ngã tư trên cầu / trong hầm` + (bad.length ? ': ' + bad.map((j) => j.s).join(', ') : ''));
let minGap = Infinity; for (let i = 1; i < D.junctions.length; i++) minGap = Math.min(minGap, D.junctions[i].s - D.junctions[i - 1].s);
ok(minGap >= 40, `ngã tư cách nhau ít nhất ${minGap.toFixed(0)} m`);

// khúc cua đi được: bán kính nhỏ nhất (cửa sổ 12 m) ≥ 11 m (vòng quay đầu 180° thật trên Điện Biên Phủ dưới gầm cầu Sài Gòn); road.curveV cho tốc độ vào cua hợp lý
let rmin = Infinity, rs = 0;
for (let s = 0; s < L; s += 2) { const k = Math.abs(road.curvature(L + s)); if (1 / k < rmin) { rmin = 1 / k; rs = s; } }
ok(rmin >= 11, `bán kính cua nhỏ nhất ${rmin.toFixed(1)} m tại s ${rs} (${sgnStreet(rs)}), tốc độ vào cua ${(road.curveV(L + rs) * 3.6).toFixed(0)} km/h`);

console.log(fail ? `\n${fail} lỗi` : '\nTẤT CẢ PASS');
process.exit(fail ? 1 : 0);
