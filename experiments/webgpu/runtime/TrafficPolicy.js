// Simplified two-way traffic policy in (s, lateral d, speed v) space.
// Follows the vehicle ahead in-lane, slows for curves, and shifts lane to overtake.
import {trafficCurveSpeed, clamp} from './TrafficMath.js';

const LANE_R = 1.5, LANE_L = -1.8;
export const ownLane = (dir) => (dir > 0 ? LANE_R : LANE_L);

export function stepTraffic(v, others, halfWidth, dt, path) {
  const home = v.home ?? ownLane(v.dir);
  const desired = trafficCurveSpeed(v, path);

  // vehicle directly ahead in (roughly) the same lane
  let lead = null, gap = 1e9;
  for (const o of others) {
    if (o === v) continue;
    if (Math.abs(o.d - v.d) >= (o.w + v.w) / 2 + 0.25) continue;
    const D = (o.s - v.s) * v.dir;
    if (D > 0 && D < gap) { gap = D; lead = o; }
  }
  const leadGap = lead ? gap - (v.len + lead.len) / 2 : 1e9;

  // simple overtake: blocked and other lane clear ahead
  if (lead && leadGap < 14 && Math.abs(v.d - home) < 0.4) {
    const other = -home;
    const clear = others.every((o) => o === v || o === lead || Math.abs(o.d - other) > 1.4 || (o.s - v.s) * v.dir < -20 || (o.s - v.s) * v.dir > 45);
    if (clear) v.home = other;
  } else if (v.home !== home && (!lead || leadGap > 22)) {
    v.home = home; // return to own lane
  }
  const lane = v.home ?? ownLane(v.dir);
  v.d += clamp(lane - v.d, -1.8 * dt, 1.8 * dt);

  let vTarget = desired;
  if (lead) vTarget = Math.min(vTarget, Math.max(0, lead.v + 0.5 * (leadGap - (6 + 1.1 * lead.v))));
  v.v += clamp(vTarget - v.v, -9 * dt, 6 * dt);
  if (v.v < 0) v.v = 0;

  v.s += v.v * dt * v.dir;
  if (v.s < 0) v.s = 0;
}
