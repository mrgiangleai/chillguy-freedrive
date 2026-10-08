// Procedural road path — ported from the main game (src/road.js).
// Heading is a bounded sum of sine waves; points are integrated along arc length.
export const ROAD = {halfWidth: 4.6, step: 2};

const H = (s) => 0.9 * Math.sin(0.0021 * s + 1.0) + 0.5 * Math.sin(0.0053 * s + 2.2) + 0.25 * Math.sin(0.0117 * s + 0.3);
const H0 = H(0);

export function createRoadPath({step = ROAD.step, heightAt = () => 0.06} = {}) {
  const pts = [];
  const heading = (s) => H(s) - H0;
  const curvature = (s) => { const lo = Math.max(0, s - 6), hi = s + 6; return (heading(hi) - heading(lo)) / (hi - lo); };

  function pointAt(i) {
    while (pts.length <= i) {
      const k = pts.length - 1;
      if (k < 0) { pts.push({x: 0, z: 0, y: heightAt(0, 0)}); continue; }
      const th = heading(k * step + step / 2), p = pts[k];
      const x = p.x - Math.sin(th) * step, z = p.z - Math.cos(th) * step;
      pts.push({x, z, y: heightAt(x, z)});
    }
    return pts[i];
  }
  function ensure(s) { pointAt(Math.max(0, Math.ceil(s / step) + 2)); }

  /** Centre point at arc length s. th = heading (0 = travelling -Z); right = (cos th, 0, -sin th). */
  function at(s) {
    s = Math.max(0, s);
    const i = Math.floor(s / step), a = pointAt(i), b = pointAt(i + 1), t = (s - i * step) / step;
    return {x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, y: a.y + (b.y - a.y) * t, th: heading(s)};
  }
  return {heading, curvature, ensure, at, points: pts, step};
}
