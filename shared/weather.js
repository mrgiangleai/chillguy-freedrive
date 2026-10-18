// Module dùng chung (game src/world.js + editor experiments/webgpu/editor/core/weather.js): thông số từng loại thời tiết.
//  fog: mật độ sương | overcast: độ âm u | clouds: độ phủ mây | sun: cường độ nắng | rain/snow: lượng mưa/tuyết
//  wet: đường ướt | cover: tuyết phủ | wind: sức gió 0..1 | dark: độ tối của bầu trời/cảnh (bão) | tint: màu sương/không khí
// Bảng gốc của game; bên nào cần lệch số thì dùng weatherPresets(keys, overrides) để có bản sao riêng.
export const WEATHER = {
  clear:  { fog: 0.00042, overcast: 0.0,  clouds: 0.52, sun: 1.0,  rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.3,  dark: 0,    tint: '#b9d6ee' },
  cloudy: { fog: 0.0009,  overcast: 0.75, clouds: 0.86, sun: 0.3,  rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.38, dark: 0.12, tint: '#a6b1bb' },
  windy:  { fog: 0.0006,  overcast: 0.2,  clouds: 0.62, sun: 0.85, rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.95, dark: 0,    tint: '#b4c6d8' },
  rain:   { fog: 0.0016,  overcast: 1.0,  clouds: 1.0,  sun: 0.1,  rain: 0.85, snow: 0, wet: 1, cover: 0, wind: 0.5,  dark: 0.35, tint: '#7a858f' },
  storm:  { fog: 0.0027,  overcast: 1.0,  clouds: 1.0,  sun: 0.03, rain: 1, snow: 0, wet: 1,   cover: 0, wind: 1.0,  dark: 1.0,  tint: '#3f4852' },
  snow:   { fog: 0.0019,  overcast: 0.85, clouds: 1.0,  sun: 0.35, rain: 0, snow: 1, wet: 0,   cover: 1, wind: 0.32, dark: 0.1,  tint: '#d3dbe2' },
  fog:    { fog: 0.0066,  overcast: 0.55, clouds: 0.5,  sun: 0.3,  rain: 0, snow: 0, wet: 0.2, cover: 0, wind: 0.08, dark: 0.05, tint: '#c4c9cd' },
};
export const WEATHER_IDS = Object.keys(WEATHER);

// Bản sao bảng thời tiết: chỉ giữ các trường `keys` (null = tất cả) rồi ghi đè `overrides[id]` (số riêng của bên gọi).
export function weatherPresets(keys = null, overrides = {}) {
  const out = {};
  for (const id of WEATHER_IDS) {
    const base = WEATHER[id], p = {};
    for (const k of keys || Object.keys(base)) if (k in base) p[k] = base[k];
    out[id] = Object.assign(p, overrides[id]);
  }
  return out;
}
