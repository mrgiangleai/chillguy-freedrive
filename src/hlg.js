// Map Cao tốc HCM – Long Thành – Dầu Giây (HLG): đường + vị trí công trình lấy từ dữ liệu thật (OpenStreetMap, ODbL),
// tạo bằng `node scripts/fetch-hlg.mjs` => `hlg-data.json`. Chiều đi (rev = false): An Phú → Dầu Giây; chiều về (rev = true):
// Dầu Giây → An Phú (s' = length − s, hướng + π). Công trình dùng lại đồ của Đại lộ (nút giao, cầu cạn, cầu sông, trạm phí, camera).
import DATA from './hlg-data.json' with { type: 'json' };
import DEM from './hlg-dem.json' with { type: 'json' };
import { IC, RIVER } from './road.js';

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

// bố trí của 1 chiều: { real: { step, heading[] }, ics, flys (rỗng), rivers, decks, tolls, cams, limits, rev, length }
export function hlgLayout(rev = false) {
  const L = DATA.length, S = (s) => (rev ? L - s : s), step = DATA.step;
  const n = Math.floor(L / step) + 1, heading = new Array(n);
  for (let i = 0; i < n; i++) heading[i] = rev ? hAt(L - i * step) + Math.PI : hAt(i * step);
  const near = (arr, s, d) => arr.some((o) => Math.abs(o.s - s) < d + (o.viaduct || 0));
  const inEnds = (s, d) => s < d || s > L - d;

  // sông lớn (Đồng Nai, rộng ≥ 300 m): mặt nước shader biển chế độ sông + cầu dây văng. Tâm cầu = chỗ sông cắt tuyến.
  const rivers = DATA.rivers.filter((r) => r.width >= 300).map((r) => {
    const br = DATA.bridges.find((b) => b.s0 - 30 < r.s && b.s1 + 30 > r.s);
    const hw = clamp(r.width / 2, 25, 340);
    const half = clamp(br ? Math.min(r.s - br.s0, br.s1 - r.s) : hw + 80, hw + 60, hw + 900), flat = clamp(half - 60, 60, 1100);
    return { ...RIVER, s: S(r.s), name: br?.name || r.name || '', river: r.name || '', hw, viaduct: half, hump: 10, flat, rise: flat + 380,
      drop: 14, depth: 6, meander: 0, ang: clamp(r.ang || 0, -1, 1), towers: true, br };
  }).sort((a, b) => a.s - b.s);

  // nút giao: cách nhau ≥ 1.3 km (vừa nhánh ra / vào ±480 m), xa 2 đầu tuyến và cầu sông
  const ics = spaced(DATA.ics.map((c) => ({ s: S(c.s), s0: c.s, name: c.name || '', ref: c.ref || '', cross: c.cross || '', crossRef: c.crossRef || '' })),
    1300, (c) => (c.name ? 1 : 0), (s) => inEnds(s, 1100) || near(rivers, s, 600));

  // cầu cạn / cầu nhỏ: mọi cầu thật trừ cầu sông lớn, cầu vượt của chính nút giao và 2 đầu tuyến. Cầu chứa nút giao cao bằng cầu
  // vượt nút giao (nút giao đó không nhô thêm); cầu dài > 1.5 km cũng vậy; cầu ngắn nhô ít (dốc dẫn 300 m mỗi đầu).
  // Suối / kênh / sông nhỏ dưới cầu => creeks (dải nước + lòng lạch), t tính từ tâm đoạn cầu.
  const decks = [];
  for (const b of DATA.bridges) {
    const len = b.s1 - b.s0;
    if (b.s0 < 600 || b.s1 > L - 600 || rivers.some((r) => r.br === b)) continue;
    if (/^Cầu vượt/i.test(b.name) && ics.some((c) => c.s0 > b.s0 - 100 && c.s0 < b.s1 + 100)) continue;
    const inIc = ics.filter((c) => c.s0 > b.s0 && c.s0 < b.s1);
    const h = inIc.length || len > 1500 ? IC.hump : len < 150 ? 2.5 : len < 400 ? 4 : 5.5;
    for (const c of inIc) c.hump = 0;
    const n = Math.ceil(len / 800), half = len / (2 * n);
    for (let i = 0; i < n; i++) {
      const c = b.s0 + (2 * i + 1) * half;
      const creeks = DATA.rivers.filter((r) => r.width < 300 && r.s > c - half - 20 && r.s < c + half + 20)
        .map((r) => { const ang = clamp(r.ang || 0, -1, 1), ca = Math.cos(ang); return { t: (rev ? -1 : 1) * (r.s - c), hw: Math.min(clamp(r.width / 2, 4, 100), (r.s - b.s0 - 3) * ca, (b.s1 - r.s - 3) * ca), name: r.name || '', ang }; })
        .filter((r) => r.hw >= 3);           // lạch phải nằm gọn dưới cầu (không cắt ngang mặt đường ngoài cầu)
      decks.push({ s: S(c), half, h, flat: half + 0.5, rise: half + 300, name: b.name || '', creeks });
    }
  }
  decks.sort((a, b) => a.s - b.s);
  const flys = [];
  const busy = (s, d) => near(rivers, s, d) || decks.some((o) => Math.abs(o.s - s) < d + o.half + 300) || ics.some((c) => Math.abs(c.s - s) < 1100 + d);
  // trạm thu phí: vị trí thật; chỉ cần nền phẳng ±250 m (ngoài cầu + dốc dẫn, ngoài nút giao) — không thì dời ra chỗ trống gần nhất
  const tollBusy = (s) => decks.some((o) => Math.abs(o.s - s) < o.half + 250) || rivers.some((r) => Math.abs(r.s - s) < r.rise + 60)
    || ics.some((c) => Math.abs(c.s - s) < 1100);
  const tolls = [];
  for (const t of DATA.tolls) {
    if (DATA.ics.some((c) => Math.abs(c.s - t.s) < 900)) continue;   // trạm trên nhánh ra / vào nút giao: không đặt trên tuyến chính
    let s = S(t.s);
    for (let k = 0; k < 40 && tollBusy(s); k++) s += (k % 2 ? 1 : -1) * 50 * (k + 1);
    if (!tollBusy(s) && !inEnds(s, 1000)) tolls.push({ s, name: t.name || '' });
  }
  tolls.sort((a, b) => a.s - b.s);
  // camera bắn tốc độ: mỗi ~6 km ở chỗ trống
  const cams = [];
  for (let s = 2500; s < L - 1500; s += 200) {
    if (cams.length && s - cams[cams.length - 1].s < 6000) continue;
    if (!busy(s, 400) && !tolls.some((t) => Math.abs(t.s - s) < 900)) cams.push({ s });
  }
  // số làn mỗi chiều: OSM (2 phần lớn tuyến; 4–7 chỉ ở trạm phí / nút giao) kẹp về 2–3 (mặt đường giữ bề rộng 3 làn);
  // quanh nút giao mở làn thứ 3 (làn giảm / tăng tốc vào nhánh); đoạn ngắn < 300 m gộp vào đoạn trước
  const lanes = [];
  const nAt = (s) => (ics.some((c) => Math.abs(c.s - s) < IC.rampLen + 140) ? 3
    : Math.min(3, Math.max(2, (DATA.lanes.find((l) => { const a = S(l.s0), b = S(l.s1); return s >= Math.min(a, b) && s < Math.max(a, b); }) || { n: 2 }).n)));
  for (let s = 0; s < L; s += 20) {
    const n = nAt(s), last = lanes[lanes.length - 1];
    if (last && last.n === n) last.s1 = s + 20; else lanes.push({ s0: s, s1: s + 20, n });
  }
  for (let i = 1; i < lanes.length; i++) if (lanes[i].s1 - lanes[i].s0 < 300) { lanes[i - 1].s1 = lanes[i].s1; lanes.splice(i, 1); i--; }
  if (lanes.length > 1 && lanes[0].s1 - lanes[0].s0 < 300) { lanes[1].s0 = 0; lanes.shift(); }
  for (let i = 1; i < lanes.length; i++) if (lanes[i].n === lanes[i - 1].n) { lanes[i - 1].s1 = lanes[i].s1; lanes.splice(i, 1); i--; }
  const limits = DATA.limits.map((l) => (rev ? { s0: L - l.s1, s1: L - l.s0, kmh: l.kmh } : { ...l })).sort((a, b) => a.s0 - b.s0);
  for (const c of ics) delete c.s0;
  for (const r of rivers) delete r.br;
  return { rev, length: L, real: { step, heading }, ics, flys, rivers, decks, tolls, cams, limits, lanes };
}

// ---- độ cao thật (SRTM, `hlg-dem.json`: lưới theo tuyến chiều đi, hàng mỗi ds m theo s, cột u0..+ mỗi du m) ----
// làm mượt thêm hộp 5×5 (~500 m) để bỏ nhiễu cây / nhà trong SRTM => đường lên xuống êm
const DEMS = (() => {
  const { rows, cols, h } = DEM, out = new Float32Array(rows * cols);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    let sum = 0, n = 0;
    for (let i = Math.max(0, r - 2); i <= Math.min(rows - 1, r + 2); i++) for (let j = Math.max(0, c - 2); j <= Math.min(cols - 1, c + 2); j++) { sum += h[i * cols + j]; n++; }
    out[r * cols + c] = sum / n;
  }
  return out;
})();
function demSU(s, u) {
  const { ds, du, u0, rows, cols } = DEM;
  const fr = clamp(s / ds, 0, rows - 1.001), fc = clamp((u - u0) / du, 0, cols - 1.001), r = Math.floor(fr), c = Math.floor(fc), tr = fr - r, tc = fc - c;
  const k = r * cols + c, H = DEMS;
  return (H[k] * (1 - tc) + H[k + 1] * tc) * (1 - tr) + (H[k + cols] * (1 - tc) + H[k + cols + 1] * tc) * tr;
}
// lưới độ cao theo thế giới (ô 50 m) cho 1 chiều chạy: rải mẫu (s, u) của tuyến lên ô, ô trống lấp dần từ ô bên cạnh
const demCache = {};
export function hlgDem(lay) {
  const key = lay.rev ? 'r' : 'f';
  if (demCache[key]) return demCache[key];
  const L = DATA.length, { step, heading } = lay.real, P = [{ x: 0, z: 0 }];
  for (let i = 1; i < heading.length; i++) { const th = (heading[i - 1] + heading[i]) / 2, q = P[i - 1]; P.push({ x: q.x - Math.sin(th) * step, z: q.z - Math.cos(th) * step }); }
  const U = 1500, cell = 50;
  let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
  for (const q of P) { x0 = Math.min(x0, q.x); z0 = Math.min(z0, q.z); x1 = Math.max(x1, q.x); z1 = Math.max(z1, q.z); }
  x0 -= U + 200; z0 -= U + 200; x1 += U + 200; z1 += U + 200;
  const nx = Math.ceil((x1 - x0) / cell) + 1, nz = Math.ceil((z1 - z0) / cell) + 1, sum = new Float32Array(nx * nz), cnt = new Uint16Array(nx * nz);
  for (let i = 0; i < P.length; i += 2) {                      // mỗi 20 m theo s, mỗi 25 m theo u
    const s = i * step, th = heading[i], rx = Math.cos(th), rz = -Math.sin(th);
    for (let u = -U; u <= U; u += 25) {
      const x = P[i].x + rx * u, z = P[i].z + rz * u, gi = Math.round((x - x0) / cell), gj = Math.round((z - z0) / cell), k = gj * nx + gi;
      sum[k] += lay.rev ? demSU(L - s, -u) : demSU(s, u); cnt[k]++;
    }
  }
  const h = new Float32Array(nx * nz);
  let mean = 0, nm = 0;
  for (let k = 0; k < h.length; k++) if (cnt[k]) { h[k] = sum[k] / cnt[k]; mean += h[k]; nm++; }
  mean /= nm || 1;
  for (let pass = 0; pass < 12; pass++) {                       // lấp ô trống (ngoài hành lang ±1.5 km) từ ô đã có
    let filled = 0;
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i; if (cnt[k]) continue;
      let a = 0, n = 0;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const ii = i + di, jj = j + dj; if (ii >= 0 && jj >= 0 && ii < nx && jj < nz && cnt[jj * nx + ii] && cnt[jj * nx + ii] < 60000) { a += h[jj * nx + ii]; n++; } }
      if (n) { h[k] = a / n; cnt[k] = 60000 + pass; filled++; }
    }
    for (let k = 0; k < cnt.length; k++) if (cnt[k] >= 60000) cnt[k] = 1;
    if (!filled) break;
  }
  for (let k = 0; k < h.length; k++) if (!cnt[k]) h[k] = mean;
  return (demCache[key] = { x0, z0, cell, nx, nz, h });
}
