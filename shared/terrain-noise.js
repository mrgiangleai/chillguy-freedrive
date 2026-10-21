// Module dùng chung (game src/ + editor experiments/webgpu/): hàm độ cao địa hình, chỉ JS thuần, không phụ thuộc three.
// Nhiễu dùng phép băm số nguyên 32-bit nên JS và GLSL (src/terrain-noise.js) cho ra cùng một giá trị.
//   hLow    : đồi lớn, thoai thoải (đường đi men theo phần này => lên dốc / xuống dốc êm)
//   hDetail : gợn nhỏ trên mặt đất
//   mountains: núi xa (chỉ CPU) — chỉ mọc ở chỗ cách đường > 500 m nên không bao giờ chạm cỏ lau / đường
export const TERRAIN_MAPS = {
  reed: { low: 9, det: 2.2, fine: 0.4, mount: 330 },
  forest: { low: 24, det: 6.5, fine: 1.1, mount: 440 },
  // đường núi: đường leo dốc dài hơn; địa hình bên trái dựng thành núi, bên phải đổ xuống thung lũng (xem terrain.js)
  mountain: { low: 34, det: 5.5, fine: 1.2, mount: 520, side: true },
  // đồi cỏ: đồi thoải lượn sóng, chỉ có cỏ
  meadow: { low: 22, det: 3.2, fine: 0.5, mount: 380 },
  // biển: đường chạy trên đê giữa biển (lên xuống nhẹ), xa xa có đảo; mực nước đặt ở main (thấp hơn chỗ thấp nhất của đường 3 m)
  sea: { low: 7, det: 2.5, fine: 0.4, mount: 260, sea: true },
  // phố: mặt đất trơn (không gợn), phần lớn bằng phẳng; vài vùng đồi dốc tới ~10% (hill); đồi núi xanh ở xa (> 500 m)
  city: { low: 0, det: 0, fine: 0, mount: 300, hill: 9 },
  // đại lộ: đồi cỏ thấp hơn (cao tốc lên xuống rất nhẹ)
  avenue: { low: 11, det: 2.6, fine: 0.45, mount: 380 },
};
export const TP = { id: 'reed', ...TERRAIN_MAPS.reed };
// id lạ => về cỏ lau
export function setTerrainMap(id) {
  if (!TERRAIN_MAPS[id]) id = 'reed';
  Object.assign(TP, { side: false, sea: false, hill: 0, dem: null, land: null }, TERRAIN_MAPS[id], { id });
}

export function hash2(ix, iz) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

export function vnoise(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  let fx = x - ix, fz = z - iz;
  fx = fx * fx * (3 - 2 * fx);
  fz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
}

export function hLow(x, z) {
  if (TP.hill) {
    // phố: đồi ~260 m, chỉ ở các vùng (mặt nạ ~900 m) => có đoạn dốc, còn lại bằng
    const m = vnoise(x / 900 + 2.1, z / 900 + 8.4), k = m < 0.45 ? 0 : m > 0.62 ? 1 : (m - 0.45) / 0.17;
    return TP.hill * k * k * (3 - 2 * k) * (vnoise(x / 260 + 6.6, z / 260 + 3.2) - 0.5) * 2;
  }
  return TP.low * ((vnoise(x / 1000 + 11.3, z / 1000 + 7.1) - 0.5) * 1.34 + (vnoise(x / 500 + 3.7, z / 500 + 1.9) - 0.5) * 0.66)
    + (TP.dem ? demAt(TP.dem, x, z) : 0);
}
// độ cao thật (map Cao tốc HLG): lưới vuông theo thế giới { x0, z0, cell, nx, nz, h: Float32Array }, nội suy song tuyến
// (GLSL trong src/terrain-noise.js đọc cùng lưới bằng texelFetch => khớp CPU)
export function demAt(D, x, z) {
  const fx = Math.min(D.nx - 1.001, Math.max(0, (x - D.x0) / D.cell)), fz = Math.min(D.nz - 1.001, Math.max(0, (z - D.z0) / D.cell));
  const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j, H = D.h, n = D.nx, k = j * n + i;
  return (H[k] * (1 - tx) + H[k + 1] * tx) * (1 - tz) + (H[k + n] * (1 - tx) + H[k + n + 1] * tx) * tz;
}

export function hDetail(x, z) {
  return TP.det * (vnoise(x / 165 + 5.5, z / 165 + 2.2) - 0.5) * 2 + TP.fine * (vnoise(x / 40 + 9.1, z / 40 + 4.4) - 0.5) * 2;
}

// núi kiểu "sống lưng" (ridged), 0..~1 * TP.mount
export function mountains(x, z) {
  let v = 0, amp = 0.62, f = 1 / 1500;
  for (let o = 0; o < 4; o++) {
    const n = vnoise(x * f + 31.7 * o, z * f + 17.3 * o);
    const r = 1 - Math.abs(n * 2 - 1);
    v += amp * r * r;
    amp *= 0.45;
    f *= 2.1;
  }
  return TP.mount * v;
}
