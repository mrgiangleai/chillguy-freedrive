// Hàm độ cao địa hình — dùng chung cho CPU (JS: lưới địa hình, đường, cây) và GPU (GLSL: cỏ lau).
// Nhiễu dùng phép băm số nguyên 32-bit nên JS và GLSL cho ra cùng một giá trị.
//   hLow    : đồi lớn, thoai thoải (đường đi men theo phần này => lên dốc / xuống dốc êm)
//   hDetail : gợn nhỏ trên mặt đất
//   mountains: núi xa (chỉ CPU) — chỉ mọc ở chỗ cách đường > 500 m nên không bao giờ chạm cỏ lau / đường
export const TERRAIN_MAPS = {
  reed: { low: 9, det: 2.2, fine: 0.4, mount: 330 },
  forest: { low: 24, det: 6.5, fine: 1.1, mount: 440 },
  // đường núi: đường leo dốc dài hơn; địa hình bên trái dựng thành núi, bên phải đổ xuống thung lũng (xem terrain.js)
  mountain: { low: 34, det: 5.5, fine: 1.2, mount: 520, side: true },
};
export const TP = { id: 'reed', ...TERRAIN_MAPS.reed };
export function setTerrainMap(id) { Object.assign(TP, { side: false }, TERRAIN_MAPS[id], { id }); }

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
  return TP.low * ((vnoise(x / 1000 + 11.3, z / 1000 + 7.1) - 0.5) * 1.34 + (vnoise(x / 500 + 3.7, z / 500 + 1.9) - 0.5) * 0.66);
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

// Bản GLSL của hLow + hDetail (uniform uTLow / uTDet / uTFine = TP.low / det / fine)
export const TERRAIN_GLSL = `
uniform float uTLow, uTDet, uTFine;
uint tIhash(ivec2 p) {
  uint h = uint(p.x) * 374761393u + uint(p.y) * 668265263u;
  h = (h ^ (h >> 13u)) * 1274126177u;
  return h ^ (h >> 16u);
}
float tHash(ivec2 p) { return float(tIhash(p)) / 4294967295.0; }
float tNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  f = f * f * (3.0 - 2.0 * f);
  ivec2 q = ivec2(i);
  float a = tHash(q), b = tHash(q + ivec2(1, 0)), c = tHash(q + ivec2(0, 1)), d = tHash(q + ivec2(1, 1));
  return a + (b - a) * f.x + (c - a) * f.y + (a - b - c + d) * f.x * f.y;
}
float tLow(vec2 p) {
  return uTLow * ((tNoise(p / 1000.0 + vec2(11.3, 7.1)) - 0.5) * 1.34 + (tNoise(p / 500.0 + vec2(3.7, 1.9)) - 0.5) * 0.66);
}
float tDetail(vec2 p) {
  return uTDet * (tNoise(p / 165.0 + vec2(5.5, 2.2)) - 0.5) * 2.0 + uTFine * (tNoise(p / 40.0 + vec2(9.1, 4.4)) - 0.5) * 2.0;
}
`;
