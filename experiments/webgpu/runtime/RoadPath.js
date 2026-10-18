// Parametric road centreline built from a road descriptor (placement + length +
// width + bends + loop). Points are generated in world space; `at(s)` returns a
// point on the ribbon at arc length s, with `th` the heading used by the mesh
// builder (right = (cos th, 0, -sin th)).
export const ROAD = {halfWidth: 4.6, step: 2, width: 50, length: 200};

const bump = (t, bd) => {
  const c = bd.at ?? 0.5, w = Math.max(0.03, bd.width ?? 0.16);
  const d = t - c;
  return Math.exp(-(d * d) / (w * w));
};

export function createRoadPath({step = ROAD.step, heightAt = () => 0.06, road} = {}) {
  const cfg = road || {};
  const length = Math.max(10, cfg.length || ROAD.length);
  const bends = Array.isArray(cfg.bends) ? cfg.bends : [];
  const loop = !!cfg.loop;
  const cx = cfg.x || 0, cz = cfg.z || 0, rot = cfg.rot || 0;
  const N = Math.max(48, Math.min(1200, Math.round(length / 4)));
  const R = length / (2 * Math.PI);
  const raw = new Array(N);

  for (let i = 0; i < N; i++) {
    const t = i / N;
    let x, z;
    if (loop) {
      const th = t * Math.PI * 2, a = R, b = R * 0.72;
      let lat = 0; for (const bd of bends) lat += bump(t, bd) * (bd.amount || 0);
      const rr = 1 + lat * 0.55;
      x = cx + Math.cos(th) * a * rr;
      z = cz + Math.sin(th) * b * rr;
    } else {
      const dx = Math.cos(rot), dz = Math.sin(rot), rx = -dz, rz = dx, s = t * length;
      let lat = 0; for (const bd of bends) lat += bump(t, bd) * (bd.amount || 0) * length * 0.18;
      x = cx + dx * s + rx * lat;
      z = cz + dz * s + rz * lat;
    }
    raw[i] = { x, z };
  }

  function sample(t) {
    if (loop) {
      const f = ((t % 1) + 1) % 1, fi = f * N;
      const i0 = Math.floor(fi) % N, i1 = (i0 + 1) % N, fr = fi - Math.floor(fi);
      const a = raw[i0], b = raw[i1];
      return { x: a.x + (b.x - a.x) * fr, z: a.z + (b.z - a.z) * fr };
    }
    const f = Math.min(1, Math.max(0, t)), fi = f * (N - 1);
    const i0 = Math.min(N - 2, Math.floor(fi)), fr = fi - i0;
    const a = raw[i0], b = raw[i0 + 1];
    return { x: a.x + (b.x - a.x) * fr, z: a.z + (b.z - a.z) * fr };
  }

  const headingAt = (s) => {
    const t = Math.max(0, s) / length, h = Math.min(0.5, step / length);
    const pa = sample(t - h), pb = sample(t + h);
    const dx = pb.x - pa.x, dz = pb.z - pa.z;
    return Math.atan2(-dx, -dz);
  };

  // Public value at world camera distance s (clamped / wrapped for loops).
  function at(s) {
    s = Math.max(0, Math.min(length, s));
    const t = s / length, p = sample(t);
    return { x: p.x, z: p.z, y: heightAt(p.x, p.z), th: headingAt(s) };
  }

  const heading = (s) => headingAt(s);
  const curvature = (s) => (headingAt(s + 6) - headingAt(s - 6)) / 12;
  const ensure = () => {};
  const points = raw.map((p) => ({ x: p.x, z: p.z, y: heightAt(p.x, p.z) }));

  return { heading, curvature, ensure, at, points, step, length, closed: loop };
}
