// Kiểm tra map Cao tốc HLG: dữ liệu OSM liên tục, đường dựng lại khớp toạ độ thật, công trình không chồng nhau, đảo chiều đúng.
import { Road, setLayout, icS, icIndex, tollDist, avLimit, avHump, deckHump, laneCount, IC } from '../src/road.js';
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
  // mặt đường + cao độ nhánh nút giao liền mạch (bước 2 m không nhảy quá 0.2 m — dốc tối đa 10%)
  let jy = 0, jb = 0, js = 0, jbs = 0;
  for (let s = 2; s < L; s += 2) {
    const a = avHump(s - 2), b = avHump(s); if (Math.abs(b - a) > jy) { jy = Math.abs(b - a); js = s; }
    const c = road.baseY(s - 2) - road.at(s - 2, {}).y, d = road.baseY(s) - road.at(s, {}).y; if (Math.abs(d - c) > jb) { jb = Math.abs(d - c); jbs = s; }
  }
  ok(jy < 0.2, `${tag}: độ nhô liền mạch (bước 2 m đổi tối đa ${jy.toFixed(3)} m tại ${(js / 1000).toFixed(2)} km)`);
  ok(jb < 0.25, `${tag}: cao độ nhánh / nền liền mạch (${jb.toFixed(3)} m tại ${(jbs / 1000).toFixed(2)} km)`);
  const onDeck = lay.ics.filter((c) => c.hump === 0);
  ok(onDeck.every((c) => Math.abs(avHump(c.s) - IC.hump) < 0.3 && road.baseY(c.s) < road.at(c.s, {}).y - IC.hump + 0.3),
    `${tag}: ${onDeck.length} nút giao trên cầu cạn: cao tốc ở độ cao cầu vượt, đường ngang ở mặt đất`);
  ok(lay.decks.every((D) => D.creeks.every((c) => Math.abs(c.t) + c.hw <= D.half * 2 + 1)), `${tag}: ${lay.decks.length} đoạn cầu, lạch nằm dưới cầu`);
  const LN = lay.lanes, cover = LN[0].s0 === 0 && LN.every((l, i) => !i || l.s0 === LN[i - 1].s1) && LN[LN.length - 1].s1 >= L - 20;
  ok(cover && LN.every((l) => (l.n === 2 || l.n === 3) && l.s1 - l.s0 >= 300) && lay.ics.every((c) => laneCount(c.s - IC.rampLen) === 3 && laneCount(c.s + IC.rampLen) === 3),
    `${tag}: số làn ${LN.map((l) => `${(l.s0 / 1000).toFixed(1)}:${l.n}`).join(' ')} (phủ kín, nút giao có làn thứ 3)`);
  let sum = 0; for (const D of lay.decks) sum += 2 * D.half;
  console.log(`     cầu cạn / cầu nhỏ: tổng ${(sum / 1000).toFixed(2)} km; deckHump(km 7) = ${deckHump(rev ? L - 7000 : 7000).toFixed(1)} m`);
}
setLayout(null);
// Đại lộ không đổi: chỉ số / vị trí theo chu kỳ cũ
ok(icS(0) === 4000 && icS(3) === 13000 && icIndex(10100) === 2 && tollDist(5000, 1) === 500, 'Đại lộ: bố trí theo chu kỳ như cũ');
console.log(fail ? `${fail} FAIL` : 'ALL PASS');
process.exit(fail ? 1 : 0);
