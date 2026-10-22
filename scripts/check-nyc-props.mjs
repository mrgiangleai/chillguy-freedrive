// Kiểm tra đồ phố New York mới: hơi hố ga, xe bán hàng, biển Koreatown (W 32 St).
// Dùng lại đúng hàm đặt vị trí của runtime (planNycProps) + số tam giác hình học thật.
import { Road, CITY } from '../src/road.js';
import { NYC, nycLoop } from '../src/nyc.js';
import { planNycProps, koreatownRange, manholeGeo, stackGeo, cartGeo } from '../src/nycStreet.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const L = NYC.length, HW = CITY.hw, J = NYC.data.junctions;
const road = new Road(); road.setShape('nyc', nycLoop());
const P = planNycProps((s, o) => road.at(L + s, o));
const tri = (g) => (g.index ? g.index.count : g.attributes.position.count) / 3;
const nearS = (s, x) => Math.min(Math.abs(s - x), L - Math.abs(s - x));

// 1. đủ số lượng mỗi loại
ok(P.steam.length > 0, `hố ga có hơi: ${P.steam.length}`);
ok(P.steam.some((e) => e.stack) && P.steam.some((e) => !e.stack), `ống khói ${P.steam.filter((e) => e.stack).length} / nắp phẳng ${P.steam.filter((e) => !e.stack).length}`);
ok(P.carts.length > 0, `xe bán hàng: ${P.carts.length} (${P.carts.filter((e) => e.su > 0).length} bên phải / ${P.carts.filter((e) => e.su < 0).length} bên trái)`);
ok(P.ktown.length > 0, `biển Koreatown: ${P.ktown.length}`);
ok(P.koreaWay.length > 0, `biển "Korea Way": ${P.koreaWay.length}`);

// 2. chỉ hố ga được nằm trong làn xe; prop khác trên vỉa hè
ok(P.steam.every((e) => Math.abs(e.u) < HW - 0.5), `hố ga trong làn xe (|u| ≤ ${HW} m)`);
ok(P.carts.every((e) => Math.abs(e.u) > HW) && P.ktown.every((e) => Math.abs(e.u) > HW),
  'xe bán hàng + biển Koreatown đều ngoài làn xe (trên vỉa hè)');

// 3. không nằm trong vạch sang đường / miệng ngã tư
const jd = (e) => Math.min(...J.map((j) => nearS(e.s, j.s)));
const steamBad = P.steam.filter((e) => jd(e) < 12);
const cartBad = P.carts.filter((e) => jd(e) < 8);
const ktBad = P.ktown.filter((e) => jd(e) < 6);
ok(!steamBad.length && !cartBad.length && !ktBad.length,
  `ngoài ngã tư / vạch sang đường (gần nhất: hố ga ${Math.min(...P.steam.map(jd)).toFixed(1)} m, xe ${Math.min(...P.carts.map(jd)).toFixed(1)} m, biển ${Math.min(...P.ktown.map(jd)).toFixed(1)} m)`);

// 4. không đè lên cửa tàu điện ngầm / trụ cứu hoả (> 1,5 m)
const near = (list, e) => Math.min(...list.map((q) => Math.hypot(q.x - e.x, q.z - e.z)));
const cartSub = P.carts.filter((e) => near(P.subs, e) <= 1.5), cartHyd = P.carts.filter((e) => near(P.hyd, e) <= 1.5);
const ktSub = P.ktown.filter((e) => near(P.subs, e) <= 1.5), ktHyd = P.ktown.filter((e) => near(P.hyd, e) <= 1.5);
ok(!cartSub.length && !cartHyd.length && !ktSub.length && !ktHyd.length,
  `cách cửa tàu điện / trụ cứu hoả > 1,5 m (gần nhất: xe ${Math.min(...P.carts.map((e) => near(P.subs, e))).toFixed(2)} m tới cửa tàu, biển ${Math.min(...P.ktown.map((e) => near(P.hyd, e))).toFixed(2)} m tới trụ)`);

// 5. biển Koreatown chỉ trong Korea Way thật (W 32 St: Broadway → 5th Av)
const kt = koreatownRange();
const J32 = J.filter((j) => j.s > 1716.7 && j.s < 2616.3);
const bwy = J32.find((j) => j.names.includes('Broadway')), fth = J32.find((j) => j.names.includes('5th Avenue'));
ok(kt && bwy && fth && Math.abs(kt.s0 - bwy.s) < 1 && Math.abs(kt.s1 - fth.s) < 1,
  `đoạn Koreatown = góc Broadway → góc 5th Av: s ${kt.s0.toFixed(1)}–${kt.s1.toFixed(1)} (${(kt.s1 - kt.s0).toFixed(0)} m)`);
ok(kt.s1 - kt.s0 > 240 && kt.s1 - kt.s0 < 280, 'độ dài đoạn ≈ 260 m (2040–2301), không phải cả chặng 32 St');
ok(P.ktown.every((e) => e.s >= kt.s0 && e.s <= kt.s1) && P.koreaWay.every((e) => e.s >= kt.s0 && e.s <= kt.s1), 'mọi biển Koreatown nằm trong đoạn 32 St');
ok(P.koreaWay.length === 2 && Math.abs(P.koreaWay[0].s - kt.s0) < 0.01 && Math.abs(P.koreaWay[1].s - kt.s1) < 0.01,
  `2 biển "Korea Way" đúng 2 góc (${P.koreaWay.map((e) => e.s.toFixed(0)).join(' / ')})`);
ok(P.ktown.every((e) => e.y > road.at(L + e.s, {}).y + 2.8), 'biển dọc đặt cao 3–8 m trên mặt hè');
// biển dọc (blade) phải nhô vuông góc khỏi mặt tiền: cạnh ngang theo pháp tuyến nhà, mặt phẳng đọc dọc phố
const bladeBad = P.ktown.filter((e) => {
  const fx = -Math.sin(e.th), fz = -Math.cos(e.th), rx = Math.cos(e.th), rz = -Math.sin(e.th);
  return Math.abs(e.ax * fx + e.az * fz) > 0.05 || Math.abs(e.ax * rx + e.az * rz) < 0.99
    || Math.abs(e.u) - 0.4 <= HW || Math.abs(e.u) + 0.4 < HW + CITY.walk - 0.05;
});
ok(!bladeBad.length, 'biển dọc nhô 0,8 m vuông góc khỏi mặt tiền, mặt đọc dọc phố (không dán phẳng lên tường)');

// 6. tam giác mỗi loại < 5k (tính cả instance)
const cartCount = [0, 1, 2, 3].map((k) => P.carts.filter((e) => e.k === k).length);
const cartTris = cartCount.reduce((n, c, k) => n + c * tri(cartGeo(k)), 0);
const steamTris = P.steam.length * tri(manholeGeo()) + P.steam.filter((e) => e.stack).length * tri(stackGeo()) + P.steam.length * 4 * 2;
const ktownTris = P.ktown.length * 4 + P.koreaWay.length * 4;
console.log(`\nTAM GIÁC  hơi hố ga ${steamTris}  |  xe bán hàng ${cartTris}  |  biển Koreatown ${ktownTris}`);
ok(steamTris < 5000 && cartTris < 5000 && ktownTris < 5000, 'mỗi loại < 5.000 tam giác (instancing)');

// 7. mật độ tương đối
const blocks = J.length;
ok(P.steam.length >= blocks / 4, `hơi hố ga ~1 / 2 dãy phố (${P.steam.length} cái / ${blocks} dãy)`);
ok(P.carts.length >= blocks / 6, `xe bán hàng ~1 / 3 dãy phố (${P.carts.length} cái / ${blocks} dãy)`);
ok(P.ktown.length >= 50 && P.ktown.length <= 70, `biển dọc ~1 / 8 m hai bên (${P.ktown.length} biển trong ${(kt.s1 - kt.s0).toFixed(0)} m)`);

console.log(fail ? `\n${fail} lỗi` : '\nTất cả PASS');
process.exit(fail ? 1 : 0);
