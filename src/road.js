import { hLow } from './terrain-noise.js';

// Đường vô tận: hướng đi theo độ dài cung s là tổng của vài sóng sin (bị chặn) nên đường uốn lượn nhẹ.
// Vị trí được tích phân dần và nhớ lại; độ cao (y) men theo phần đồi lớn của địa hình => lên/xuống dốc êm.
export const ROAD = { halfWidth: 4.6, chunkLen: 120, step: 2 };

const H = (s) => 0.9 * Math.sin(0.0021 * s + 1.0) + 0.5 * Math.sin(0.0053 * s + 2.2) + 0.25 * Math.sin(0.0117 * s + 0.3);
const H0 = H(0);

// Đoạn đường đất xuyên rừng (chỉ ở map đồi thông): dài ~800 m, lặp lại mỗi 2.6 km, chuyển tiếp 70 m.
// Mặt đường đất hơi gồ ghề: vài sóng dài >= 4 m (bước điểm đường 2 m) cộng lại, biên độ ~±15 cm.
export const DIRT = { period: 2600, start: 450, len: 800, ramp: 70 };
const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const bump = (s) => 0.07 * Math.sin(0.9 * s) + 0.045 * Math.sin(1.37 * s + 1.3) + 0.05 * Math.sin(0.31 * s + 2.0);

export class Road {
  constructor() {
    this.pts = [{ x: 0, z: 0, y: hLow(0, 0) }];
    this.dirt = false;            // bật ở map đồi thông
  }

  // 0..1: mức "đường đất" tại độ dài cung s
  dirtAt(s) {
    if (!this.dirt) return 0;
    const m = ((s % DIRT.period) + DIRT.period) % DIRT.period;
    return sst(DIRT.start, DIRT.start + DIRT.ramp, m) * (1 - sst(DIRT.start + DIRT.len - DIRT.ramp, DIRT.start + DIRT.len, m));
  }

  _y(x, z, s) { return hLow(x, z) + this.dirtAt(s) * bump(s); }

  heading(s) { return H(s) - H0; }

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
