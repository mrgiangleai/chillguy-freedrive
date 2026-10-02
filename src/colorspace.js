// Cả cảnh được vẽ ở màu tuyến tính (HDR); hậu kỳ mới tone mapping ACES + sRGB.
// GLSL: màu hiển thị -> tuyến tính (gần đúng) cho shader tự tô màu (mưa, tuyết, bông cỏ bay)
export const DISPLAY_TO_LINEAR = `
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;
