// Kiểm tra map Cao tốc HLG: dữ liệu OSM liên tục, đường dựng lại khớp toạ độ thật, công trình không chồng nhau, đảo chiều đúng.
import { Road, setLayout, icS, icIndex, tollDist, avLimit, avHump, IC } from '../src/road.js';
import { HLG, hlgLayout } from '../src/hlg.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const D = HLG.data, L = D.length;

ok(L > 45000 && L < 62000, `chiều dài ${(L / 1000).toFixed(1)} km (An Phú → Dầu Giây ~55 km)`);
let jump = 0;
for (let i = 1; i < D.heading.length; i++) jump = Math.max(jump, Math.abs(D.heading[i] - D.heading[i - 1]));
ok(jump < 0.08, `hướng liên tục (bước 10 m đổi tối đa ${jump.toFixed(4)} rad)`);

for (const rev of [false, true]) {
  const lay = hlgLayout(rev), road = new Road();
  setLayout(lay); road.setShape('hlg', lay.real);
  const tag = rev ? 'chiều về' : 'chiều đi';
  // đường dựng từ heading khớp polyline OSM (dữ liệu check: [s, x, z] của chiều đi, gốc ở An Phú)
  if (!rev) {
    let dev = 0;
    for (const [s, x, z] of D.check) { const p = road.at(s, {}); dev = Math.max(dev, Math.hypot(p.x - x, p.z - z)); }
    ok(dev < 25, `${tag}: lệch tối đa so với OSM ${dev.toFixed(1)} m`);
  } else {
    // chiều về: điểm cuối của chiều về trùng điểm đầu chiều đi (tính theo vector đầu → cuối, xoay 180°)
    const f = new Road(); const lf = hlgLayout(false); setLayout(lf); f.setShape('hlg', lf.real);
    const a = f.at(L, {}); setLayout(lay);
    const b = road.at(L, {});
    ok(Math.hypot(a.x + b.x, a.z + b.z) < 30, `${tag}: đầu ↔ cuối khớp chiều đi (${Math.hypot(a.x + b.x, a.z + b.z).toFixed(1)} m)`);
  }
  let rmin = Infinity;
  for (let s = 1000; s < L - 1000; s += 10) {   // bỏ nhánh dẫn An Phú / Dầu Giây (giới hạn 60 km/h)
    const k = Math.abs(road.curvature(s)); if (k > 1e-6) rmin = Math.min(rmin, 1 / k); }
  ok(rmin > 300, `${tag}: bán kính cong nhỏ nhất ${rmin.toFixed(0)} m`);
  const all = [...lay.ics.map((o) => ['ic', o.s, IC.rampLen + 500]), ...lay.flys.map((o) => ['fly', o.s, o.viaduct + 150]),
    ...lay.rivers.map((o) => ['river', o.s, o.viaduct + 150]), ...lay.tolls.map((o) => ['toll', o.s, 250])].sort((a, b) => a[1] - b[1]);
  let clash = null;
  for (let i = 1; i < all.length; i++) if (all[i][1] - all[i - 1][1] < Math.max(all[i][2], all[i - 1][2])) clash = [all[i - 1], all[i]];
  ok(!clash, `${tag}: công trình không chồng nhau` + (clash ? ` (${clash[0][0]}@${clash[0][1].toFixed(0)} – ${clash[1][0]}@${clash[1][1].toFixed(0)})` : ''));
  ok(lay.ics.length >= 3, `${tag}: ${lay.ics.length} nút giao (${lay.ics.map((c) => `${c.name || '?'} ${(c.s / 1000).toFixed(1)}`).join(', ')})`);
  ok(lay.rivers.length >= 1, `${tag}: ${lay.rivers.length} cầu sông (${lay.rivers.map((r) => `${r.name || r.river} ${(r.s / 1000).toFixed(1)}`).join(', ')})`);
  console.log(`     cầu cạn: ${lay.flys.map((f) => `${f.name || '?'} ${(f.s / 1000).toFixed(1)}`).join(', ') || '—'}; trạm phí: ${lay.tolls.map((t) => (t.s / 1000).toFixed(1)).join(', ') || '—'}; camera: ${lay.cams.length}`);
  ok(icS(-1) < -1e8 && icS(lay.ics.length) > 1e8, `${tag}: chỉ số ngoài danh sách => rất xa`);
  ok(Math.abs(icS(icIndex(lay.ics[0]?.s ?? 0)) - (lay.ics[0]?.s ?? 1e9)) < 1e-6, `${tag}: icIndex tìm đúng nút giao gần nhất`);
  if (lay.tolls.length) ok(Math.abs(tollDist(lay.tolls[0].s - 100, 1) - 100) < 1e-6, `${tag}: tollDist tới trạm kế tiếp`);
  const lims = new Set(); for (let s = 0; s < L; s += 500) lims.add(avLimit(s, 1));
  ok([...lims].every((v) => v >= 40 && v <= 120), `${tag}: tốc độ tối đa ${[...lims].sort((a, b) => a - b).join('/')}`);
  let hmax = 0; for (let s = 0; s < L; s += 20) hmax = Math.max(hmax, avHump(s));
  ok(hmax < 25, `${tag}: độ nhô cầu tối đa ${hmax.toFixed(1)} m`);
}
setLayout(null);
// Đại lộ không đổi: chỉ số / vị trí theo chu kỳ cũ
ok(icS(0) === 4000 && icS(3) === 13000 && icIndex(10100) === 2 && tollDist(5000, 1) === 500, 'Đại lộ: bố trí theo chu kỳ như cũ');
console.log(fail ? `${fail} FAIL` : 'ALL PASS');
process.exit(fail ? 1 : 0);
