import { hLow } from './terrain-noise.js';

// Đường vô tận: hướng đi theo độ dài cung s là tổng của vài sóng sin (bị chặn) nên đường uốn lượn nhẹ.
// Vị trí được tích phân dần và nhớ lại; độ cao (y) men theo phần đồi lớn của địa hình => lên/xuống dốc êm.
export const ROAD = { halfWidth: 4.6, chunkLen: 120, step: 2 };   // halfWidth đổi theo map (Phố: 4 làn => 7.2)
export const ROAD_HW = 4.6;

// Map Phố: đường thẳng theo từng đoạn CITY.seg mét; đầu mỗi đoạn có thể bẻ hướng (≤ ~0.75 rad trong CITY.bend mét,
// bán kính ≥ ~130 m). Dốc: theo địa hình (TP.hill, chỉ vài vùng). Ngã tư nằm trên phần thẳng: 3 cái mỗi đoạn (cách nhau ~240 m), đường ngang vuông góc.
export const CITY = { seg: 720, bend: 190, hw: 7.2, walk: 4.0, side: 3.5, sideWalk: 2.5, lanes: [1.75, 5.25] };
const JPOS = [215, 455, 690];
// Map Đại lộ: cao tốc 6 làn — dải phân cách giữa ±median, làn 3.5 m (tâm ±2.25 / ±5.75 / ±9.25), vạch chia làn ±4.0 / ±7.5,
// mép làn ngoài ±11, lề khẩn cấp tới mép nhựa ±13. Đường cong rất thoải (bán kính ≥ ~2 km).
export const AVENUE = { hw: 13, median: 0.5, lanes: [2.25, 5.75, 9.25], seps: [4.0, 7.5], edge: 11 };
const HA = (s) => 0.32 * Math.sin(0.0006 * s + 0.4) + 0.18 * Math.sin(0.00137 * s + 1.7);
const HA0 = HA(0);
// Nút giao (đại lộ): mỗi IC.period m có 1 cầu vượt tại s = icS(k). Cao tốc nhô lên IC.hump m (dốc ~3.4% trên 220 m, đỉnh
// phẳng ±40 m) bắc qua đường ngang (vuông góc, ở cao độ nền). Mỗi chiều có 1 cặp nhánh (kiểu kim cương): nhánh ra tách khỏi làn
// ngoài trước cầu, đi ở cao độ nền (cao tốc lên cầu, nhánh "xuống" dần so với cầu), cắt đường ngang ở |u| = IC.rampU, rồi nhánh vào
// leo lại nhập làn ngoài sau cầu. rampU(t) = độ lệch ngang theo khung cao tốc (t = s − icS), chiều +s; chiều ngược: u = −rampU(−t).
export const IC = { period: 3000, first: 4000, hump: 7.5, flat: 40, rise: 260, rampU: 45, rampLen: 480, crossHW: 4.6, crossLen: 420 };
// trạm thu phí (đại lộ): giữa 2 nút giao, mỗi TOLL.period m; mọi xe giảm còn ~20 km/h trước vạch barie, barie tự nâng (ETC)
export const TOLL = { period: 6000, first: 5500, slow: 20 / 3.6, zone: 160 };
// camera bắn tốc độ (đại lộ): cột đầu ở 1450 m (giữa cầu cao và cầu sông), rồi mỗi 3 km từ 6200 m (700 m sau trạm phí / cầu)
export const CAM = { first0: 1450, first: 6200, period: 3000, tol: 5 };
const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
// Cầu vượt cao (FLY): mỗi 12 km (cái đầu ở 700 m), cao tốc nhô lên 12 m thành cầu cạn trên trụ, bắc qua quốc lộ 4 làn nằm trong
// hào sâu 3 m (tĩnh không ~13 m). Cầu qua sông (RIVER): mỗi 12 km (cái đầu ở 2200 m), cao tốc nhô 8 m thành cầu cạn dài qua thung lũng sông
// rộng 2·hw (mặt nước thấp hơn nền drop m). `viaduct` = |t| mà ở trong đó mặt đất dưới cầu giữ tự nhiên (không đắp nền).
export const FLY = { period: 12000, first0: 700, first: 8500, hump: 12, flat: 70, rise: 400, cut: 3, crossLen: 520, crossHW: 8.2, lanes: [1.75, 5.25], viaduct: 230 };
export const RIVER = { period: 12000, first0: 2200, first: 14500, hump: 8, flat: 200, rise: 430, hw: 120, drop: 14, depth: 5, viaduct: 330, meander: 40 };

// Bố trí công trình của cao tốc: LAY = null => Đại lộ (đặt theo chu kỳ, cầu đầu tiên gần đầu đường để thử ngay: cầu cao 700 m,
// cầu sông 2200 m; các cầu sau nằm giữa 2 nút giao, không trùng trạm thu phí). LAY = danh sách thật (map Cao tốc HLG, `hlg.js`):
// { ics, flys, rivers, tolls, cams: [{ s, ... }] sắp theo s, limits: [{ s0, s1, kmh }] }. Chỉ số ngoài danh sách => vị trí rất xa.
let LAY = null;
export const setLayout = (L) => { LAY = L; };
export const layout = () => LAY;
const FAR = 1e9;
const at = (arr, k) => (k < 0 ? -FAR : k >= arr.length ? FAR : arr[k].s);
// chỉ số phần tử có s gần nhất (mảng sắp theo s; rỗng => 0)
function nearIdx(arr, s) {
  let lo = 0, hi = arr.length - 1;
  if (hi <= 0) return 0;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (arr[m].s < s) lo = m; else hi = m; }
  return s - arr[lo].s < arr[hi].s - s ? lo : hi;
}
export const icS = (k) => (LAY ? at(LAY.ics, k) : IC.first + k * IC.period);
export const icIndex = (s) => (LAY ? nearIdx(LAY.ics, s) : Math.max(0, Math.round((s - IC.first) / IC.period)));
export const tollS = (k) => (LAY ? at(LAY.tolls, k) : TOLL.first + k * TOLL.period);
export const tollIndex = (s) => (LAY ? nearIdx(LAY.tolls, s) : Math.max(0, Math.round((s - TOLL.first) / TOLL.period)));
// khoảng cách (theo chiều dir) từ s tới vạch barie trạm kế tiếp (đã qua quá 18 m thì tính trạm sau)
export function tollDist(s, dir) {
  if (LAY) {
    let best = FAR;
    for (const T of LAY.tolls) { const d = (T.s - s) * dir; if (d >= -18 && d < best) best = d; }
    return best;
  }
  let k = Math.round((s - TOLL.first) / TOLL.period);
  let d = (tollS(k) - s) * dir;
  if (d < -18) d += TOLL.period;
  return d;
}
export const camS = (k) => (LAY ? at(LAY.cams, k) : k <= 0 ? CAM.first0 : CAM.first + (k - 1) * CAM.period);
export const camIndex = (s) => (LAY ? nearIdx(LAY.cams, s) : s < (CAM.first0 + CAM.first) / 2 ? 0 : 1 + Math.max(0, Math.round((s - CAM.first) / CAM.period)));
export const flyS = (k) => (LAY ? at(LAY.flys, k) : k <= 0 ? FLY.first0 : FLY.first + (k - 1) * FLY.period);
export const flyIndex = (s) => (LAY ? nearIdx(LAY.flys, s) : s < (FLY.first0 + FLY.first) / 2 ? 0 : 1 + Math.max(0, Math.round((s - FLY.first) / FLY.period)));
export const riverS = (k) => (LAY ? at(LAY.rivers, k) : k <= 0 ? RIVER.first0 : RIVER.first + (k - 1) * RIVER.period);
export const riverIndex = (s) => (LAY ? nearIdx(LAY.rivers, s) : s < (RIVER.first0 + RIVER.first) / 2 ? 0 : 1 + Math.max(0, Math.round((s - RIVER.first) / RIVER.period)));
// thông số riêng từng cầu (danh sách thật ghi đè giá trị chung: viaduct, hw, hump…)
export const flyP = (k) => (LAY && LAY.flys[k]) || FLY;
export const riverP = (k) => (LAY && LAY.rivers[k]) || RIVER;
export const icP = (k) => (LAY && LAY.ics[k]) || IC;
// cầu cạn / cầu nhỏ (chỉ map HLG): đoạn mặt cầu trên trụ, không có đường dưới gầm, có thể bắc qua suối / kênh.
// { s (tâm), half (nửa chiều dài), h (độ nhô), flat, rise, name, creeks: [{ t (so với s), hw }] }; cầu dài chia đoạn ≤ 800 m nối liền nhau
export const deckS = (k) => (LAY?.decks ? at(LAY.decks, k) : FAR);
export const deckIndex = (s) => (LAY?.decks ? nearIdx(LAY.decks, s) : 0);
export const deckP = (k) => LAY?.decks?.[k] || null;
// số làn mỗi chiều tại s (map HLG theo OSM: 2 hoặc 3; đoạn 2 làn thì làn ngoài cùng thành làn khẩn cấp). Đại lộ: 3
export function laneCount(s) {
  if (!LAY?.lanes) return 3;
  for (const L of LAY.lanes) if (s >= L.s0 && s < L.s1) return L.n;
  return 3;
}
// độ nhô của cầu cạn tại s (0 ngoài cầu + dốc dẫn)
export function deckHump(s) {
  if (!LAY?.decks) return 0;
  const k = deckIndex(s);
  let h = 0;                     // lấy lớn nhất của 3 cầu quanh s => dốc dẫn của 2 cầu gần nhau không bị gãy khúc
  for (let j = k - 1; j <= k + 1; j++) { const D = LAY.decks[j]; if (D) h = Math.max(h, D.h * (1 - sm(D.flat, D.rise, Math.abs(s - D.s)))); }
  return h;
}
// tốc độ tối đa (km/h) trên cao tốc theo biển: 40 quanh trạm phí (biển ở 250 m trước, hết 120 m sau), 100 quanh nút giao
// (biển 100 ở t = −700, biển 120 ở t = 620), còn lại 120 (map HLG: theo biển thật từng đoạn). Nhánh ra / vào: 60 (main tự xét)
export function avLimit(s, dir = 1) {
  const x = (s - tollS(tollIndex(s))) * dir;
  if (x > -250 && x < 120) return 40;
  if (LAY) { for (const L of LAY.limits) if (s >= L.s0 && s < L.s1) return L.kmh; return 120; }
  const t = (s - icS(icIndex(s))) * dir;
  return t > -700 && t < 620 ? 100 : 120;
}
export function avHump(s) {
  const ik = icIndex(s), a = Math.abs(s - icS(ik));
  const fk = flyIndex(s), F = flyP(fk), b = Math.abs(s - flyS(fk));
  const rk = riverIndex(s), R = riverP(rk), c = Math.abs(s - riverS(rk));
  return (icP(ik).hump ?? IC.hump) * (1 - sm(IC.flat, IC.rise, a)) + F.hump * (1 - sm(F.flat, F.rise, b)) + R.hump * (1 - sm(R.flat, R.rise, c)) + deckHump(s);
}
// nhánh rẽ phía phải (chiều +s): t ∈ [−rampLen, rampLen], ngoài khoảng trả null
export function rampU(t) {
  const a = Math.abs(t), L = IC.rampLen;
  if (a > L) return null;
  if (a > 400) return AVENUE.lanes[2] + (13.5 - AVENUE.lanes[2]) * sm(L, 400, a);    // làn giảm / tăng tốc
  return 13.5 + (IC.rampU - 13.5) * sm(400, 60, a);
}

const H = (s) => 0.9 * Math.sin(0.0021 * s + 1.0) + 0.5 * Math.sin(0.0053 * s + 2.2) + 0.25 * Math.sin(0.0117 * s + 0.3);
const H0 = H(0);

// Đoạn đường đất xuyên rừng (chỉ ở map đồi thông): dài ~800 m, lặp lại mỗi 2.6 km, chuyển tiếp 70 m.
// Mặt đường đất hơi gồ ghề: vài sóng dài >= 4 m (bước điểm đường 2 m) cộng lại, biên độ ~±15 cm.
export const DIRT = { period: 2600, start: 450, len: 800, ramp: 70 };
const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const hashR = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const bump = (s) => 0.07 * Math.sin(0.9 * s) + 0.045 * Math.sin(1.37 * s + 1.3) + 0.05 * Math.sin(0.31 * s + 2.0);

export class Road {
  constructor() {
    this.pts = [{ x: 0, z: 0, y: hLow(0, 0) }];
    this.dirt = false;            // bật ở map đồi thông
    this.city = false;            // map Phố: đường thẳng + ngã tư
    this.avenue = false;          // map Đại lộ: cao tốc cong rất thoải (cả map Cao tốc HLG)
    this.real = null;             // map Cao tốc HLG: { step, heading[] } hướng đi thật theo s (dữ liệu OSM, `hlg.js`)
    this.loop = null;             // map New York: vòng khép kín (`nyc.js`): { length, step, x[], z[], heading[], turn, elev(s), junctions[] }
    this.widths = null;           // map Landmark: đoạn đường hẹp theo s, đã sắp xếp sẵn
    // map New York: mặt phố (vỉa hè / nhà / người) ở cao độ "street" — khác mặt đường ở hầm / cầu cạn
    this.street = Object.create(this);
    this.street.at = (s, out = {}) => { this.at(s, out); out.y -= this.elevAt(s); return out; };
    this._cum = [0];              // map Phố: tổng góc bẻ tới hết đoạn k
  }

  // đổi hình đường: kind 'city' (Phố) | 'avenue' (Đại lộ) | 'hlg' (cao tốc thật, real = { step, heading[] }) | 'nyc' (vòng khép kín,
  // real = { loop: true, … }) | khác (đường lượn các map ngắm cảnh) => tính lại toàn bộ điểm đường
  setShape(kind, real = null) {
    const city = kind === 'city' || kind === 'nyc' || kind === 'sgn', avenue = kind === 'avenue' || kind === 'hlg';
    const loop = kind === 'nyc' || kind === 'sgn' ? real : null;   // vòng khép kín: New York, Landmark TP.HCM
    real = kind === 'hlg' ? real : null;
    if (city === this.city && avenue === this.avenue && real === this.real && loop === this.loop) return;
    this.city = city; this.avenue = avenue; this.real = real; this.loop = loop;
    this.widths = kind === 'sgn' && loop?.widths?.length ? loop.widths.slice().sort((a, b) => a.s0 - b.s0) : null;
    this.maxLanes = this.widths ? Math.max(CITY.lanes.length, ...this.widths.map((w) => w.lanes.length)) : CITY.lanes.length;
    this.pts = [loop ? this._loopPt(0) : { x: 0, z: 0, y: 0 }];
  }
  // Nửa rộng / tâm làn / dải phân cách theo s. Landmark (chia đôi có dải phân cách) thu / nở trong 25 m; map khác giữ hằng số cũ.
  _widthValue(s, key, base, k = 0) {
    if (!this.widths) return base;
    const L = this.loop.length, r = ((s % L) + L) % L, T = 25;
    for (const w of this.widths) if (r >= w.s0 && r <= w.s1) {
      const a = sst(w.s0, w.s0 + T, r), b = 1 - sst(w.s1 - T, w.s1, r);
      const v = key === 'hw' ? w.hw : key === 'median' ? w.median.w : w.lanes[Math.min(k, w.lanes.length - 1)];
      return base + (v - base) * Math.min(a, b);
    }
    return base;
  }
  hwAt(s) { return this._widthValue(s, 'hw', ROAD.halfWidth); }
  // tâm làn thứ k của MỖI chiều (0 = trong cùng, tính theo |u|)
  laneAt(s, k = 1) { return this._widthValue(s, 'lane', CITY.lanes[Math.min(k, CITY.lanes.length - 1)], k); }
  laneCountAt(s) {
    if (!this.widths) return CITY.lanes.length;
    const L = this.loop.length, r = ((s % L) + L) % L;
    for (const w of this.widths) if (r >= w.s0 && r <= w.s1) return w.lanes.length;
    return CITY.lanes.length;
  }
  // dải phân cách tim đường tại s: { w (thu dần về 0 ngoài đoạn), kind ('plant' | 'jersey' | null) }
  medianAt(s, out = { w: 0, kind: null }) {
    out.w = 0; out.kind = null;
    if (!this.widths) return out;
    const L = this.loop.length, r = ((s % L) + L) % L, T = 25;
    for (const w of this.widths) if (r >= w.s0 && r <= w.s1) {
      const a = sst(w.s0, w.s0 + T, r), b = 1 - sst(w.s1 - T, w.s1, r), t = Math.min(a, b);
      out.w = w.median.w * t;
      if (t > 1e-3) out.kind = w.median.kind;
      return out;
    }
    return out;
  }
  // ---- vòng khép kín (map New York): s bất kỳ ≥ 0, quấn theo chiều dài vòng ----
  _lf(s) { const L = this.loop, r = ((s % L.length) + L.length) % L.length, f = r / L.step, i = Math.min(L.x.length - 2, Math.floor(f)); return [i, f - i, Math.floor(s / L.length)]; }
  _loopPt(s) {
    const L = this.loop, [i, t] = this._lf(s), x = L.x[i] + (L.x[i + 1] - L.x[i]) * t, z = L.z[i] + (L.z[i + 1] - L.z[i]) * t;
    const e = L.elev(s), y = hLow(x, z);
    return { x, z, y: y + e, g: y + (e > 0 ? 0 : e) };   // g: mặt đất cho địa hình (dưới cầu cạn: mặt phố; hầm: theo mặt đường, trần che phía trên —
    // trước đây hầm kín dùng mặt phố => ở cửa hầm địa hình dựng thành tấm nghiêng chắn miệng hầm)
  }
  // độ cao mặt đường so với mặt phố (âm trong hầm, dương trên cầu cạn); map khác 0
  elevAt(s) { return this.loop ? this.loop.elev(s) : 0; }
  // hướng thật tại s (nội suy tuyến tính mảng heading, ngoài 2 đầu giữ hướng cuối)
  _realH(s) {
    if (this.loop) { const L = this.loop, [i, t, k] = this._lf(s); return L.heading[i] + (L.heading[i + 1] - L.heading[i]) * t + L.turn * k; }
    const { step, heading: A } = this.real, f = Math.min(A.length - 1, Math.max(0, s / step)), i = Math.min(A.length - 2, Math.floor(f));
    return A[i] + (A[i + 1] - A[i]) * (f - i);
  }

  // góc bẻ ở đầu đoạn k (map Phố): một nửa số đoạn đi thẳng; kéo dần về hướng gốc để đường không xoay vòng
  _delta(k) {
    if (k <= 0) return 0;
    const h = hashR(k * 1.37 + 0.5);
    if (h < 0.3) return 0;
    const d = (hashR(k * 2.71 + 3.3) - 0.5) * 1.5 - 0.35 * this._sum(k - 1);
    return Math.sign(d) * Math.max(0.25, Math.abs(d));          // đã cua thì cua rõ (≥ ~14°)
  }
  _sum(k) {
    if (k < 0) return 0;
    while (this._cum.length <= k) { const j = this._cum.length; this._cum.push(this._cum[j - 1] + this._delta(j)); }
    return this._cum[k];
  }

  // ngã tư thứ n (map Phố): độ dài cung tâm ngã tư. Vòng New York: danh sách thật lặp lại mỗi vòng
  junction(n) {
    if (this.loop) { const J = this.loop.junctions, m = J.length, k = Math.floor(n / m); return J[n - k * m].s + k * this.loop.length; }
    const k = Math.floor(n / 3), i = n - k * 3;
    return k * CITY.seg + JPOS[i] + (hashR(n * 3.17 + 1.9) - 0.5) * (i === 2 ? 10 : 24);
  }
  // chỉ số ngã tư đầu tiên có tâm >= s
  junctionIndex(s) {
    if (this.loop) {
      const J = this.loop.junctions, L = this.loop.length, k = Math.floor(s / L), r = s - k * L;
      let i = 0; while (i < J.length && J[i].s < r) i++;
      return k * J.length + i;
    }
    let n = Math.floor(s / CITY.seg) * 3 - 1;
    while (this.junction(n) < s) n++;
    return n;
  }
  // thông tin ngã tư n (vòng New York: { s, names, ow, signal, corner }); map Phố: null
  junctionInfo(n) { if (!this.loop) return null; const J = this.loop.junctions, m = J.length; return J[((n % m) + m) % m]; }
  // khoảng cách tới góc rẽ kế tiếp (tâm khúc cua) phía trước s; không phải vòng: Infinity
  cornerAhead(s) {
    if (!this.loop) return Infinity;
    const L = this.loop.length, r = ((s % L) + L) % L;
    let best = Infinity;
    for (const c of this.loop.corners) { const d = ((c.s - r) % L + L) % L; if (d < best) best = d; }
    return best;
  }
  // tốc độ tối đa (m/s) tại s để vào được các khúc cua phía trước trong `look` m: gia tốc ngang ≤ aLat ở khúc cua, phanh êm
  // `brake` m/s² từ xa (vòng New York: góc rẽ vuông + cầu cạn vòng quanh Grand Central). Đường khác: Infinity
  curveV(s, aLat = 2.4, brake = 2.2, look = 80) {
    if (!this.loop) return Infinity;
    let v = Infinity;
    for (let d = 0; d <= look; d += 4) {
      const k = Math.abs(this.curvature(s + d));
      if (k > 1e-3) v = Math.min(v, Math.sqrt(aLat / k + 2 * brake * d));
    }
    return v;
  }
  // tâm ngã tư gần s nhất (map Phố) hoặc null
  nearJunction(s) {
    if (!this.city) return null;
    const n = this.junctionIndex(s), a = this.junction(n - 1), b = this.junction(n);
    return s - a < b - s ? a : b;
  }

  // 0..1: mức "đường đất" tại độ dài cung s
  dirtAt(s) {
    if (!this.dirt) return 0;
    const m = ((s % DIRT.period) + DIRT.period) % DIRT.period;
    return sst(DIRT.start, DIRT.start + DIRT.ramp, m) * (1 - sst(DIRT.start + DIRT.len - DIRT.ramp, DIRT.start + DIRT.len, m));
  }

  _y(x, z, s) { return this.city ? hLow(x, z) + this.elevAt(s) : this.avenue ? hLow(x, z) + avHump(s) : hLow(x, z) + this.dirtAt(s) * bump(s); }
  // cao độ nền của đại lộ tại s (không tính phần nhô lên cầu vượt) — nhánh rẽ / đường ngang đi ở cao độ này.
  // Nút giao nằm trên cầu cạn (HLG): nhánh tách ở cao độ cầu rồi xuống dần, tới đường ngang (|t| ≤ 60) mới về mặt đất
  baseY(s) {
    const y = this.at(s, this._by || (this._by = {})).y;
    if (!this.avenue) return y;
    const dh = deckHump(s);
    return y - avHump(s) + (dh ? dh * sm(60, 400, Math.abs(s - icS(icIndex(s)))) : 0);
  }

  heading(s) {
    if (this.real || this.loop) return this._realH(s);
    if (this.avenue) return HA(s) - HA0;
    if (!this.city) return H(s) - H0;
    const k = Math.floor(s / CITY.seg);
    return this._sum(k - 1) + this._delta(k) * sst(0, CITY.bend, s - k * CITY.seg);
  }

  // Độ cong có dấu: dương cua trái, âm cua phải, làm mượt trên 12 m đường.
  curvature(s) {
    const lo = Math.max(0, s - 6), hi = s + 6;
    return (this.heading(hi) - this.heading(lo)) / (hi - lo);
  }

  // đảm bảo đã tính đường tới độ dài cung s
  ensure(s) { this._ensure(Math.ceil(s / ROAD.step) + 1); }

  _ensure(i) {
    const { step } = ROAD;
    while (this.pts.length <= i + 1) {
      const k = this.pts.length - 1;
      if (this.loop) { this.pts.push(this._loopPt((k + 1) * step)); continue; }
      const th = this.heading(k * step + step / 2);
      const p = this.pts[k];
      const x = p.x - Math.sin(th) * step, z = p.z - Math.cos(th) * step;
      this.pts.push({ x, z, y: this._y(x, z, (k + 1) * step) });
    }
  }

  // đổi map (địa hình khác) => tính lại độ cao của đường
  recomputeHeights() { this.pts.forEach((p, i) => { if (this.loop) Object.assign(p, this._loopPt(i * ROAD.step)); else p.y = this._y(p.x, p.z, i * ROAD.step); }); }

  // Điểm tim đường tại độ dài cung s. th = góc hướng (xoay quanh trục Y, 0 = đi về -Z).
  // Vector "bên phải" của đường = (cos th, 0, -sin th).
  at(s, out = {}) {
    const { step } = ROAD;
    if (s < 0) s = 0;
    const i = Math.floor(s / step);
    this._ensure(i + 1);
    const t = (s - i * step) / step;
    const a = this.pts[i], b = this.pts[i + 1];
    out.x = a.x + (b.x - a.x) * t;
    out.z = a.z + (b.z - a.z) * t;
    out.y = a.y + (b.y - a.y) * t;
    out.th = this.heading(s);
    return out;
  }
}
