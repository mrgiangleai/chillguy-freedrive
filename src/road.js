import { hLow } from './terrain-noise.js';

// Đường vô tận: hướng đi theo độ dài cung s là tổng của vài sóng sin (bị chặn) nên đường uốn lượn nhẹ.
// Vị trí được tích phân dần và nhớ lại; độ cao (y) men theo phần đồi lớn của địa hình => lên/xuống dốc êm.
export const ROAD = { halfWidth: 4.6, chunkLen: 120, step: 2 };

const H = (s) => 0.9 * Math.sin(0.0021 * s + 1.0) + 0.5 * Math.sin(0.0053 * s + 2.2) + 0.25 * Math.sin(0.0117 * s + 0.3);
const H0 = H(0);

export class Road {
  constructor() {
    this.pts = [{ x: 0, z: 0, y: hLow(0, 0) }];
  }

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
      this.pts.push({ x, z, y: hLow(x, z) });
    }
  }

  // đổi map (địa hình khác) => tính lại độ cao của đường
  recomputeHeights() { for (const p of this.pts) p.y = hLow(p.x, p.z); }

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
