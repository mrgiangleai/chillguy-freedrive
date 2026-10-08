import { hLow } from './terrain-noise.js';

// Đường vô tận: hướng đi theo độ dài cung s là tổng của vài sóng sin (bị chặn) nên đường uốn lượn nhẹ.
// Vị trí được tích phân dần và nhớ lại; độ cao (y) men theo phần đồi lớn của địa hình => lên/xuống dốc êm.
export const ROAD = { halfWidth: 4.6, chunkLen: 120, step: 2 };   // halfWidth đổi theo map (Phố: 4 làn => 7.2)
export const ROAD_HW = 4.6;

// Map Phố: đường thẳng theo từng đoạn CITY.seg mét; đầu mỗi đoạn có thể bẻ hướng (≤ ~0.75 rad trong CITY.bend mét,
// bán kính ≥ ~130 m). Dốc: theo địa hình (TP.hill, chỉ vài vùng). Ngã tư nằm trên phần thẳng: 3 cái mỗi đoạn (cách nhau ~240 m), đường ngang vuông góc.
export const CITY = { seg: 720, bend: 190, hw: 7.2, walk: 4.0, side: 3.5, sideWalk: 2.5, lanes: [1.75, 5.25] };
const JPOS = [215, 455, 690];

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
    this._cum = [0];              // map Phố: tổng góc bẻ tới hết đoạn k
  }

  // đổi hình đường (Phố / các map khác) => tính lại toàn bộ điểm đường
  setShape(city) {
    if (city === this.city) return;
    this.city = city;
    this.pts = [{ x: 0, z: 0, y: 0 }];
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

  // ngã tư thứ n (map Phố): độ dài cung tâm ngã tư
  junction(n) {
    const k = Math.floor(n / 3), i = n - k * 3;
    return k * CITY.seg + JPOS[i] + (hashR(n * 3.17 + 1.9) - 0.5) * (i === 2 ? 10 : 24);
  }
  // chỉ số ngã tư đầu tiên có tâm >= s
  junctionIndex(s) {
    let n = Math.floor(s / CITY.seg) * 3 - 1;
    while (this.junction(n) < s) n++;
    return n;
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

  _y(x, z, s) { return this.city ? hLow(x, z) : hLow(x, z) + this.dirtAt(s) * bump(s); }

  heading(s) {
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
      const th = this.heading(k * step + step / 2);
      const p = this.pts[k];
      const x = p.x - Math.sin(th) * step, z = p.z - Math.cos(th) * step;
      this.pts.push({ x, z, y: this._y(x, z, (k + 1) * step) });
    }
  }

  // đổi map (địa hình khác) => tính lại độ cao của đường
  recomputeHeights() { this.pts.forEach((p, i) => { p.y = this._y(p.x, p.z, i * ROAD.step); }); }

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
