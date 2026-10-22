// Setback tiers ("wedding cake") for building footprints.
// Plain ES module, no imports, deterministic per seed.

function rng(seed) {
  let t = (seed >>> 0) + 0x6d2b79f5;
  return function () {
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function area2(p) {
  let a = 0;
  for (let i = 0; i < p.length; i += 2) {
    const j = (i + 2) % p.length;
    a += p[i] * p[j + 1] - p[j] * p[i + 1];
  }
  return a;
}

function absArea(p) {
  return Math.abs(area2(p)) / 2;
}

function clean(p) {
  const out = [];
  const n = p.length / 2;
  for (let i = 0; i < n; i++) {
    const x = p[2 * i], z = p[2 * i + 1];
    if (!Number.isFinite(x) || !Number.isFinite(z)) return null;
    if (out.length >= 2) {
      const dx = x - out[out.length - 2], dz = z - out[out.length - 1];
      if (Math.hypot(dx, dz) < 1e-6) continue;
    }
    out.push(x, z);
  }
  while (out.length >= 4) {
    const dx = out[0] - out[out.length - 2], dz = out[1] - out[out.length - 1];
    if (Math.hypot(dx, dz) < 1e-6) out.length -= 2; else break;
  }
  if (out.length < 6) return null;
  return out;
}

// Orientation-insensitive signed area normalisation: return CCW (positive area).
function canonical(p) {
  if (area2(p) >= 0) return p;
  const out = [];
  for (let i = p.length - 2; i >= 0; i -= 2) out.push(p[i], p[i + 1]);
  return out;
}

function inside(x, z, p) {
  let c = false;
  for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
    const xi = p[i], zi = p[i + 1], xj = p[j], zj = p[j + 1];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}

function orient(a, b, c) {
  return Math.sign((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
}

function segCross(a, b, c, d) {
  const o1 = orient(a, b, c), o2 = orient(a, b, d);
  const o3 = orient(c, d, a), o4 = orient(c, d, b);
  if (o1 * o2 < 0 && o3 * o4 < 0) return true;
  return false;
}

function isSimple(p) {
  const n = p.length / 2;
  const P = (i) => [p[2 * (i % n)], p[2 * (i % n) + 1]];
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segCross(P(i), P(i + 1), P(j), P(j + 1))) return false;
    }
  }
  return true;
}

// Offset a CCW polygon inward by d using edge-line intersections.
function insetOffset(p, d) {
  const n = p.length / 2;
  const e = [];
  for (let i = 0; i < n; i++) {
    const x0 = p[2 * i], z0 = p[2 * i + 1];
    const x1 = p[2 * ((i + 1) % n)], z1 = p[2 * ((i + 1) % n) + 1];
    let dx = x1 - x0, dz = z1 - z0;
    const L = Math.hypot(dx, dz);
    if (L < 1e-9) return null;
    dx /= L; dz /= L;
    e.push({ x0, z0, x1, z1, dx, dz, nx: -dz, nz: dx });
  }
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = e[(i - 1 + n) % n], b = e[i];
    const px = a.x0 + a.nx * d, pz = a.z0 + a.nz * d;
    const qx = b.x0 + b.nx * d, qz = b.z0 + b.nz * d;
    const cr = a.dx * b.dz - a.dz * b.dx;
    if (Math.abs(cr) < 1e-9) {
      out.push((px + qx) / 2, (pz + qz) / 2);
    } else {
      const t = ((qx - px) * b.dz - (qz - pz) * b.dx) / cr;
      out.push(px + a.dx * t, pz + a.dz * t);
    }
  }
  return out;
}

function scaleTo(p, factor) {
  let cx = 0, cz = 0;
  const n = p.length / 2;
  for (let i = 0; i < n; i++) { cx += p[2 * i]; cz += p[2 * i + 1]; }
  cx /= n; cz /= n;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(cx + (p[2 * i] - cx) * factor, cz + (p[2 * i + 1] - cz) * factor);
  }
  return out;
}

function anyEdgeCross(q, prev) {
  const nq = q.length / 2, np = prev.length / 2;
  const A = (i) => [q[2 * i], q[2 * i + 1]];
  const B = (i) => [prev[2 * i], prev[2 * i + 1]];
  for (let i = 0; i < nq; i++) {
    for (let j = 0; j < np; j++) {
      if (segCross(A(i), A((i + 1) % nq), B(j), B((j + 1) % np))) return true;
    }
  }
  return false;
}

// Vertices, midpoints and quarter points strictly inside, and no edge crossings.
function contained(q, prev) {
  for (let i = 0; i < q.length; i += 2) {
    if (!inside(q[i], q[i + 1], prev)) return false;
  }
  for (let i = 0; i < q.length; i += 2) {
    const j = (i + 2) % q.length;
    for (const t of [0.25, 0.5, 0.75]) {
      const mx = q[i] + (q[j] - q[i]) * t;
      const mz = q[i + 1] + (q[j + 1] - q[i + 1]) * t;
      if (!inside(mx, mz, prev)) return false;
    }
  }
  if (anyEdgeCross(q, prev)) return false;
  return true;
}

function valid(q, prev, baseArea) {
  if (!q || q.length !== prev.length || q.length < 6) return false;
  for (const v of q) if (!Number.isFinite(v)) return false;
  if (!isSimple(q)) return false;
  const a = absArea(q);
  if (!(a > 0)) return false;
  if (!(a < absArea(prev))) return false;
  if (a < 0.2 * baseArea - 1e-6) return false;
  return contained(q, prev);
}

function makeInset(prev, baseArea, d) {
  // Prefer the seeded distance, then descend but always try the 2.5 m floor
  // before falling back to smaller (still valid) insets.
  const tries = [d, d * 0.9, d * 0.8, d * 0.7, d * 0.6].filter((t) => t >= 2.5);
  tries.push(2.5, 2.2, 1.9, 1.6, 1.3, 1.0, 0.8, 0.6, 0.45, 0.35, 0.25);
  for (const t of tries) {
    if (t <= 0.15) continue;
    const q = insetOffset(prev, t);
    if (valid(q, prev, baseArea)) return q;
  }
  // Centroid shrink fallbacks: displacement roughly d, never below sqrt(0.2).
  const n = prev.length / 2;
  let cx = 0, cz = 0, rmax = 0;
  for (let i = 0; i < n; i++) { cx += prev[2 * i]; cz += prev[2 * i + 1]; }
  cx /= n; cz /= n;
  for (let i = 0; i < n; i++) rmax = Math.max(rmax, Math.hypot(prev[2 * i] - cx, prev[2 * i + 1] - cz));
  const scales = [];
  if (rmax > 1e-6) scales.push(1 - d / rmax);
  scales.push(0.85, 0.75, 0.65, 0.55, 0.47);
  for (const s of scales) {
    if (s <= 0.46) continue;
    const q = scaleTo(prev, s);
    if (valid(q, prev, baseArea)) return q;
  }
  return null;
}

function heightsFor(h, rv, n) {
  // Cumulative fractions for n tiers, seeded jitter, strictly increasing, ending at 1.
  let w;
  if (n === 2) w = [0.55 + 0.25 * rv()]; // 0.55..0.8 per spec
  else if (n === 3) w = [0.44, 0.31, 0.25];
  else w = [0.37, 0.27, 0.21, 0.15];
  if (n > 2) {
    w = w.map((v) => v * (0.8 + 0.4 * rv()));
    const s = w.reduce((a, b) => a + b, 0);
    w = w.map((v) => v / s);
  }
  const c = [];
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += w[i];
    c.push(i === n - 1 ? 1 : Math.min(acc, 0.97));
  }
  // Ensure minimum tier height of 6% and strictly increasing.
  for (let i = 1; i < n; i++) {
    if (c[i] < c[i - 1] + 0.06) c[i] = c[i - 1] + 0.06;
  }
  const s = c[n - 1];
  return c.map((v) => (v / s) * h);
}

export function tiers(pts, h, seed) {
  if (!Array.isArray(pts) || pts.length < 6 || !(h > 0)) {
    return [{ pts: Array.isArray(pts) ? pts.slice() : [], y0: 0, y1: h }];
  }
  // Low buildings keep the original footprint untouched.
  if (h < 40) return [{ pts: pts.slice(), y0: 0, y1: h }];

  const base = clean(pts);
  if (!base) return [{ pts: pts.slice(), y0: 0, y1: h }];
  const p0 = canonical(base);
  const baseArea = absArea(p0);
  if (!(baseArea > 1e-6)) return [{ pts: p0, y0: 0, y1: h }];

  const rv = rng(seed);
  const n = h >= 120 ? (rv() < 0.55 ? 4 : 3) : 2;

  const ys = heightsFor(h, rv, n);
  const polys = [p0];
  for (let i = 1; i < n; i++) {
    const d = h >= 120 ? 2.5 + 2.5 * rv() : 2.5 + 2.0 * rv();
    const q = makeInset(polys[i - 1], baseArea, d);
    if (!q) break;
    polys.push(q);
  }
  // If a tier failed, stop (fewer tiers) and stretch the last to h.
  const m = polys.length;
  const out = [];
  for (let i = 0; i < m; i++) {
    const y0 = i === 0 ? 0 : ys[i - 1];
    const y1 = i === m - 1 ? h : ys[i];
    out.push({ pts: polys[i], y0, y1 });
  }
  return out;
}
