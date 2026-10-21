// Hàm độ cao địa hình — phần JS nằm ở module dùng chung shared/terrain-noise.js (editor experiments/webgpu cũng import);
// file này giữ thêm bản GLSL (cỏ lau). Nhiễu dùng phép băm số nguyên 32-bit nên JS và GLSL cho ra cùng một giá trị.
export { TERRAIN_MAPS, TP, setTerrainMap, hash2, vnoise, hLow, hDetail, mountains, demAt } from '../shared/terrain-noise.js';

// Bản GLSL của hLow + hDetail (uniform uTLow / uTDet / uTFine = TP.low / det / fine)
export const TERRAIN_GLSL = `
uniform float uTLow, uTDet, uTFine;
uniform sampler2D uDem;                // độ cao thật (map HLG): lưới R32F, uDemBox = (x0, z0, cell, bật), uDemN = (nx, nz)
uniform vec4 uDemBox;
uniform vec2 uDemN;
float tDem(vec2 p) {
  if (uDemBox.w < 0.5) return 0.0;
  vec2 f = clamp((p - uDemBox.xy) / uDemBox.z, vec2(0.0), uDemN - 1.001);
  ivec2 i = ivec2(floor(f)); vec2 t = f - vec2(i);
  float a = texelFetch(uDem, i, 0).r, b = texelFetch(uDem, i + ivec2(1, 0), 0).r;
  float c = texelFetch(uDem, i + ivec2(0, 1), 0).r, d = texelFetch(uDem, i + ivec2(1, 1), 0).r;
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}
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
  return uTLow * ((tNoise(p / 1000.0 + vec2(11.3, 7.1)) - 0.5) * 1.34 + (tNoise(p / 500.0 + vec2(3.7, 1.9)) - 0.5) * 0.66) + tDem(p);
}
float tDetail(vec2 p) {
  return uTDet * (tNoise(p / 165.0 + vec2(5.5, 2.2)) - 0.5) * 2.0 + uTFine * (tNoise(p / 40.0 + vec2(9.1, 4.4)) - 0.5) * 2.0;
}
`;
