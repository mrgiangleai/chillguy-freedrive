// Traffic math — ported from the main game (src/traffic-ai.js); curve speed is shared (shared/traffic-curve.js).
export const TRAFFIC = {minSpeed: 50 / 3.6, maxSpeed: 200 / 3.6, detect: 30, gapMin: 10, gapMax: 25};
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export const trafficSpeed = (min, max) => min + Math.random() * (max - min);

/** Desired speed considering the curve ahead (60% in a bend) — shared with the game. */
export {trafficCurveSpeed} from '../../../shared/traffic-curve.js';

export {clamp};
