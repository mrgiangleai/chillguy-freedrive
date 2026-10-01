// Đường vô tận: hướng đi theo độ dài cung s là tổng của vài sóng sin (bị chặn) nên đường uốn lượn nhẹ
// nhưng không bao giờ quay đầu / tự cắt chính nó. Vị trí được tích phân dần và nhớ lại.
export const ROAD = { halfWidth: 4.6, chunkLen: 120, step: 2 };

const H = (s) => 0.9 * Math.sin(0.0021 * s + 1.0) + 0.5 * Math.sin(0.0053 * s + 2.2) + 0.25 * Math.sin(0.0117 * s + 0.3);
const H0 = H(0);

export class Road {
  constructor() {
    this.pts = [{ x: 0, z: 0 }];
  }

  heading(s) { return H(s) - H0; }

  _ensure(i) {
    const { step } = ROAD;
    while (this.pts.length <= i + 1) {
      const k = this.pts.length - 1;
      const th = this.heading(k * step + step / 2);
      const p = this.pts[k];
      this.pts.push({ x: p.x - Math.sin(th) * step, z: p.z - Math.cos(th) * step });
    }
  }

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
    out.th = this.heading(s);
    return out;
  }
}
