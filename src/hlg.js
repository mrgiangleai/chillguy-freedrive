// Map Cao tốc HCM – Long Thành – Dầu Giây (HLG): đường + vị trí công trình lấy từ dữ liệu thật (OpenStreetMap, ODbL),
// tạo bằng `node scripts/fetch-hlg.mjs` => `hlg-data.json`. Chiều đi (rev = false): An Phú → Dầu Giây; chiều về (rev = true):
// Dầu Giây → An Phú (s' = length − s, hướng + π). Công trình dùng lại đồ của Đại lộ (nút giao, cầu cạn, cầu sông, trạm phí, camera).
import DATA from './hlg-data.json' with { type: 'json' };
import { IC, FLY, RIVER } from './road.js';

export const HLG = { data: DATA, length: DATA.length, start: 150, end: 320 };   // xe bắt đầu ở s = start, còn `end` m tới cuối thì quay đầu
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

// hướng gốc tại s (nội suy mảng heading của dữ liệu)
function hAt(s) {
  const A = DATA.heading, f = clamp(s / DATA.step, 0, A.length - 1), i = Math.min(A.length - 2, Math.floor(f));
  return A[i] + (A[i + 1] - A[i]) * (f - i);
}

// chọn các mốc cách nhau ≥ gap (ưu tiên theo `rank` lớn), bỏ mốc trùng vùng cấm `busy(s)`
function spaced(list, gap, rank, busy = () => false) {
  const out = [];
  for (const o of [...list].sort((a, b) => rank(b) - rank(a))) {
    if (busy(o.s) || out.some((q) => Math.abs(q.s - o.s) < gap)) continue;
    out.push(o);
  }
  return out.sort((a, b) => a.s - b.s);
}

// bố trí của 1 chiều: { real: { step, heading[] }, ics, flys, rivers, tolls, cams, limits, rev, length }
export function hlgLayout(rev = false) {
  const L = DATA.length, S = (s) => (rev ? L - s : s), step = DATA.step;
  const n = Math.floor(L / step) + 1, heading = new Array(n);
  for (let i = 0; i < n; i++) heading[i] = rev ? hAt(L - i * step) + Math.PI : hAt(i * step);
  const near = (arr, s, d) => arr.some((o) => Math.abs(o.s - s) < d + (o.viaduct || 0));
  const inEnds = (s, d) => s < d || s > L - d;

  // sông: rộng nhất trước, cách nhau ≥ 3.5 km (mặt nước chỉ bật cho sông gần nhất). Tâm cầu = chỗ sông cắt tuyến; cầu dài theo
  // cầu thật nhưng không quá xa bờ (cầu cạn dài 6.5 km qua Sông Tắc chỉ lấy phần quanh sông). Sông lớn (Đồng Nai) có tháp dây văng.
  const rivers = spaced(DATA.rivers.filter((r) => r.width >= 40).map((r) => {
    const br = DATA.bridges.find((b) => b.s0 - 30 < r.s && b.s1 + 30 > r.s);
    const hw = clamp(r.width / 2, 25, 340), big = hw >= 150;
    const half = clamp(br ? Math.min(r.s - br.s0, br.s1 - r.s) : hw + 80, hw + 60, hw + 900);
    return { ...RIVER, s: S(r.s), name: br?.name || r.name || '', river: r.name || '', hw,
      viaduct: half, hump: big ? 10 : 5, flat: clamp(half - 60, 60, 1100), drop: big ? 14 : 8,
      depth: big ? 6 : 3, meander: 0, towers: big };
  }).map((r) => ({ ...r, rise: r.flat + 380 })), 3500, (r) => r.hw, (s) => inEnds(s, 900));

  // nút giao: cách nhau ≥ 1.3 km (vừa nhánh ra / vào ±480 m), xa 2 đầu tuyến và cầu sông
  const ics = spaced(DATA.ics.map((c) => ({ s: S(c.s), name: c.name || '', ref: c.ref || '', cross: c.cross || '' })),
    1300, (c) => (c.name ? 1 : 0), (s) => inEnds(s, 1100) || near(rivers, s, 600));

  // cầu cạn dài (không qua sông lớn) => cầu cao bắc qua đường dưới gầm (FLY), cầu dài thì đỉnh phẳng dài
  const flys = spaced(DATA.bridges.filter((b) => b.s1 - b.s0 > 250 && b.s1 - b.s0 < 3000).map((b) => {
    const half = (b.s1 - b.s0) / 2;
    return { ...FLY, s: S((b.s0 + b.s1) / 2), name: b.name || '', viaduct: clamp(half, 150, 1300), flat: clamp(half - 160, 70, 1100) };
  }).map((f) => ({ ...f, rise: f.flat + 330 })), 2500, (f) => f.viaduct,
  (s) => inEnds(s, 900) || near(rivers, s, 700) || ics.some((c) => Math.abs(c.s - s) < IC.rampLen + 900));

  const busy = (s, d) => near(rivers, s, d) || near(flys, s, d) || ics.some((c) => Math.abs(c.s - s) < 1100 + d);
  // trạm thu phí: vị trí thật; tránh nút giao / cầu (đẩy ra chỗ trống gần nhất)
  const tolls = [];
  for (const t of DATA.tolls) {
    if (DATA.ics.some((c) => Math.abs(c.s - t.s) < 900)) continue;   // trạm trên nhánh ra / vào nút giao: không đặt trên tuyến chính
    let s = S(t.s);
    for (let k = 0; k < 40 && busy(s, 300); k++) s += (k % 2 ? 1 : -1) * 100 * (k + 1);
    if (!busy(s, 300) && !inEnds(s, 1000)) tolls.push({ s, name: t.name || '' });
  }
  tolls.sort((a, b) => a.s - b.s);
  // camera bắn tốc độ: mỗi ~6 km ở chỗ trống
  const cams = [];
  for (let s = 2500; s < L - 1500; s += 200) {
    if (cams.length && s - cams[cams.length - 1].s < 6000) continue;
    if (!busy(s, 400) && !tolls.some((t) => Math.abs(t.s - s) < 900)) cams.push({ s });
  }
  const limits = DATA.limits.map((l) => (rev ? { s0: L - l.s1, s1: L - l.s0, kmh: l.kmh } : { ...l })).sort((a, b) => a.s0 - b.s0);
  return { rev, length: L, real: { step, heading }, ics, flys, rivers, tolls, cams, limits };
}
