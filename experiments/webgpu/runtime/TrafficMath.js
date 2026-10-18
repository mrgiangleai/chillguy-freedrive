// Traffic math — ported from the main game (src/traffic-ai.js).
export const TRAFFIC = {minSpeed: 50 / 3.6, maxSpeed: 200 / 3.6, detect: 30, gapMin: 10, gapMax: 25};
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export const trafficSpeed = (min, max) => min + Math.random() * (max - min);

/** Desired speed considering the curve ahead (60% in a bend). */
export function trafficCurveSpeed(v, path) {
  const cruise = v.cruise ?? v.v, dir = v.dir ?? -1;
  const look = Math.max(12, (cruise * cruise - (cruise * 0.6) ** 2) / 24 + 10);
  let bend = 0;
  for (let d = 0; d <= look; d += 6) {
    const s = Math.max(0, v.s + dir * d), lo = Math.max(0, s - 10), hi = s + 10;
    const angle = path.heading(hi) - path.heading(lo);
    bend = Math.max(bend, Math.abs(Math.atan2(Math.sin(angle), Math.cos(angle))) / (hi - lo));
  }
  v.inCurve = bend >= (v.inCurve ? 0.0012 : 0.0015);
  return cruise * (v.inCurve ? 0.6 : 1);
}

export {clamp};
