// Map Landmark 81 – TP.HCM (🌆, nhóm Drive): vòng khép kín theo dữ liệu thật (OpenStreetMap, ODbL), tạo bằng
// `node scripts/fetch-sgn.mjs` => `sgn-data.json`. Nguyễn Hữu Cảnh (qua Landmark 81, về Ba Son) → Tôn Đức Thắng → Võ Văn Kiệt
// → hầm Thủ Thiêm (dưới sông Sài Gòn) → Mai Chí Thọ → nút An Phú → Võ Nguyên Giáp → cầu Sài Gòn → Điện Biên Phủ → Nguyễn Hữu Cảnh.
// Dùng lại map Phố (`mapKind('sgn') = 'city'`, giao thông 2 chiều kiểu VN) + code vòng của New York (`road.setShape('sgn', loop)`).
import DATA from './sgn-data.json' with { type: 'json' };

// start: xe vào map ở s = length + start (Nguyễn Hữu Cảnh, chạy về phía Ba Son). roof: trần hầm kín khi mặt đường thấp hơn mặt phố quá |roof| m
export const SGN = { data: DATA, length: DATA.length, start: 60, roof: -5.6 };

// độ cao mặt đường so với mặt phố theo s (âm: hầm, dương: cầu) — mảng `elev` mỗi `step` m trong dữ liệu (dốc ≤ 5.5 %)
export function sgnElev() {
  const L = DATA.length, E = DATA.elev, st = DATA.step;
  return (s) => {
    const r = ((s % L) + L) % L, f = r / st, i = Math.min(E.length - 2, Math.floor(f)), t = f - i;
    return E[i] + (E[i + 1] - E[i]) * t;
  };
}
// mốc độ cao [s, h] (cho NycWorks dựng tường / trần hầm, bản mặt cầu): bao quanh mọi đoạn có độ cao ≠ 0
function elevKeys() {
  const E = DATA.elev, st = DATA.step, keys = [];
  let a = -1;
  for (let i = 0; i < E.length; i++) {
    const on = Math.abs(E[i]) > 0.05;
    if (on && a < 0) a = i;
    if ((!on || i === E.length - 1) && a >= 0) { keys.push([Math.max(0, (a - 2) * st), 0], [(i + 1) * st, 0]); a = -1; }
  }
  return keys;
}

let LOOP = null;
export function sgnLoop() {
  if (LOOP) return LOOP;
  LOOP = { loop: true, length: DATA.length, step: DATA.step, x: DATA.x, z: DATA.z, heading: DATA.heading, turn: Math.round(DATA.turn / (2 * Math.PI)) * 2 * Math.PI,
    elev: sgnElev(), keys: elevKeys(), roof: SGN.roof, junctions: DATA.junctions, corners: DATA.corners, streets: DATA.streets };
  return LOOP;
}
// tên đường đang chạy tại s
export function sgnStreet(s) {
  const L = DATA.length, r = ((s % L) + L) % L, S = DATA.streets;
  let name = S.at(-1).name;
  for (const t of S) if (r >= t.s0) name = t.name;
  return name;
}
