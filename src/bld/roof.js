// roof.js — deterministic rooftop clutter for flat Manhattan roofs.
// Export: roofProps(pts, y, seed) -> { pos, nor, col }  (non-indexed triangles)
//
// No imports. Deterministic (seeded PRNG, never Math.random).
// Everything stands on the roof plane y, inside polygon `pts`, >= 1.5 m from its edges.

const TAU = Math.PI * 2;
const MAX_TRIS = 500;
const MARGIN = 1.5; // required distance from polygon edges

/* ------------------------------------------------------------------ *
 * deterministic PRNG (mulberry32) + helpers
 * ------------------------------------------------------------------ */
function rngFrom(seed) {
  let a = (Math.floor(seed) * 2654435761 + 0x9e3779b9) >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rr = (rng, a, b) => a + (b - a) * rng();
const pick = (rng, arr) => arr[Math.min(arr.length - 1, Math.floor(rng() * arr.length))];

/* ------------------------------------------------------------------ *
 * polygon helpers
 * ------------------------------------------------------------------ */
function polyArea(p) {
  let a = 0;
  for (let i = 0; i < p.length; i += 2) {
    const j = (i + 2) % p.length;
    a += p[i] * p[j + 1] - p[j] * p[i + 1];
  }
  return Math.abs(a) / 2;
}
function bboxOf(p) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let i = 0; i < p.length; i += 2) {
    if (p[i] < x0) x0 = p[i];
    if (p[i] > x1) x1 = p[i];
    if (p[i + 1] < z0) z0 = p[i + 1];
    if (p[i + 1] > z1) z1 = p[i + 1];
  }
  return { x0, x1, z0, z1 };
}
function insidePoly(x, z, p) {
  let c = false;
  for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
    const xi = p[i], zi = p[i + 1], xj = p[j], zj = p[j + 1];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}
function distSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l = dx * dx + dz * dz;
  let t = l > 0 ? ((px - ax) * dx + (pz - az) * dz) / l : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const qx = ax + t * dx, qz = az + t * dz;
  return Math.hypot(px - qx, pz - qz);
}
function distEdges(x, z, p) {
  let m = Infinity;
  for (let i = 0; i < p.length; i += 2) {
    const j = (i + 2) % p.length;
    const d = distSeg(x, z, p[i], p[i + 1], p[j], p[j + 1]);
    if (d < m) m = d;
  }
  return m;
}
// interior sample points with their clearance to the polygon edges
function buildCandidates(p) {
  const bb = bboxOf(p);
  const step = 0.5, out = [];
  for (let x = bb.x0 + step * 0.5; x <= bb.x1; x += step) {
    for (let z = bb.z0 + step * 0.5; z <= bb.z1; z += step) {
      if (!insidePoly(x, z, p)) continue;
      out.push({ x, z, d: distEdges(x, z, p) });
    }
  }
  return out;
}
function maxClearance(cands) {
  let m = 0;
  for (const c of cands) if (c.d > m) m = c.d;
  return m;
}
// pick a feasible spot: clearance >= need and no overlap with already placed props
function pickSpot(cands, need, radius, rng, occupied) {
  const feas = [];
  let total = 0;
  for (const c of cands) {
    if (c.d < need) continue;
    let bad = false;
    for (const o of occupied) {
      if (Math.hypot(c.x - o.x, c.z - o.z) < o.r + radius + 0.25) { bad = true; break; }
    }
    if (bad) continue;
    const w = 0.08 + (c.d - need);
    total += w;
    feas.push({ x: c.x, z: c.z, d: c.d, w, acc: total });
  }
  if (!feas.length) return null;
  let r = rng() * total, sel = feas[feas.length - 1];
  for (const c of feas) { if (r <= c.acc) { sel = c; break; } }
  return sel;
}

/* ------------------------------------------------------------------ *
 * mesh output helpers
 * ------------------------------------------------------------------ */
function tri(o, a, b, c, n, col) {
  o.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
  o.nor.push(n[0], n[1], n[2], n[0], n[1], n[2], n[0], n[1], n[2]);
  o.col.push(col[0], col[1], col[2], col[0], col[1], col[2], col[0], col[1], col[2]);
  o.tri++;
}
function quad(o, a, b, c, d, n, col) {
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
  const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx;
  if (cx * n[0] + cy * n[1] + cz * n[2] < 0) {
    tri(o, a, c, b, n, col);
    tri(o, a, d, c, n, col);
  } else {
    tri(o, a, b, c, n, col);
    tri(o, a, c, d, n, col);
  }
}
function outwardNormal(a, b, c, rx, rz) {
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
  const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  const l = Math.hypot(nx, ny, nz) || 1;
  nx /= l; ny /= l; nz /= l;
  if (nx * rx + nz * rz < 0) { nx = -nx; ny = -ny; nz = -nz; }
  return [nx, ny, nz];
}
const neg = (v) => [-v[0], -v[1], -v[2]];

// oriented box: u/v/w orthonormal unit axes, half sizes hu/hv/hw
function emitBox(o, cx, cy, cz, u, hu, v, hv, w, hw, col) {
  const P = [];
  const signs = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
  for (const s of signs) {
    P.push([
      cx + u[0] * hu * s[0] + v[0] * hv * s[1] + w[0] * hw * s[2],
      cy + u[1] * hu * s[0] + v[1] * hv * s[1] + w[1] * hw * s[2],
      cz + u[2] * hu * s[0] + v[2] * hv * s[1] + w[2] * hw * s[2],
    ]);
  }
  quad(o, P[4], P[5], P[6], P[7], w, col);   // +w
  quad(o, P[3], P[2], P[1], P[0], neg(w), col);
  quad(o, P[1], P[5], P[6], P[2], u, col);   // +u
  quad(o, P[4], P[0], P[3], P[7], neg(u), col);
  quad(o, P[2], P[6], P[7], P[3], v, col);   // +v (up)
  quad(o, P[0], P[1], P[5], P[4], neg(v), col);
}
// axis aligned box
function emitAABox(o, cx, cy, cz, hx, hy, hz, col, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  emitBox(o, cx, cy, cz, [c, 0, s], hx, [0, 1, 0], hy, [-s, 0, c], hz, col);
}
// beam between two points
function emitBeam(o, a, b, th, col) {
  let dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-6) return;
  dx /= len; dy /= len; dz /= len;
  let ux = -dz, uy = 0, uz = dx;
  let ul = Math.hypot(ux, uy, uz);
  if (ul < 1e-6) { ux = 1; uy = 0; uz = 0; ul = 1; }
  ux /= ul; uy /= ul; uz /= ul;
  const vx = dy * uz - dz * uy, vy = dz * ux - dx * uz, vz = dx * uy - dy * ux;
  emitBox(o, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2,
    [dx, dy, dz], len / 2, [ux, uy, uz], th / 2, [vx, vy, vz], th / 2, col);
}
// vertical prism (cylinder) with optional caps
function emitCylinder(o, cx, cy, cz, r, h, sides, col, capTop, capBottom, yaw) {
  for (let i = 0; i < sides; i++) {
    const a0 = yaw + (i / sides) * TAU, a1 = yaw + ((i + 1) / sides) * TAU, am = (a0 + a1) / 2;
    const n = [Math.cos(am), 0, Math.sin(am)];
    const p0 = [cx + Math.cos(a0) * r, cy, cz + Math.sin(a0) * r];
    const p1 = [cx + Math.cos(a1) * r, cy, cz + Math.sin(a1) * r];
    quad(o, p0, p1, [p1[0], cy + h, p1[2]], [p0[0], cy + h, p0[2]], n, col);
  }
  if (capTop) {
    const c = [cx, cy + h, cz];
    for (let i = 0; i < sides; i++) {
      const a0 = yaw + (i / sides) * TAU, a1 = yaw + ((i + 1) / sides) * TAU;
      tri(o, c, [cx + Math.cos(a0) * r, cy + h, cz + Math.sin(a0) * r],
        [cx + Math.cos(a1) * r, cy + h, cz + Math.sin(a1) * r], [0, 1, 0], col);
    }
  }
  if (capBottom) {
    const c = [cx, cy, cz];
    for (let i = 0; i < sides; i++) {
      const a0 = yaw + (i / sides) * TAU, a1 = yaw + ((i + 1) / sides) * TAU;
      tri(o, c, [cx + Math.cos(a1) * r, cy, cz + Math.sin(a1) * r],
        [cx + Math.cos(a0) * r, cy, cz + Math.sin(a0) * r], [0, -1, 0], col);
    }
  }
}
function emitCone(o, cx, cy, cz, r, h, sides, col, yaw) {
  const apex = [cx, cy + h, cz];
  for (let i = 0; i < sides; i++) {
    const a0 = yaw + (i / sides) * TAU, a1 = yaw + ((i + 1) / sides) * TAU, am = (a0 + a1) / 2;
    const p0 = [cx + Math.cos(a0) * r, cy, cz + Math.sin(a0) * r];
    const p1 = [cx + Math.cos(a1) * r, cy, cz + Math.sin(a1) * r];
    tri(o, p0, p1, apex, outwardNormal(p0, p1, apex, Math.cos(am), Math.sin(am)), col);
  }
}

/* ------------------------------------------------------------------ *
 * colours
 * ------------------------------------------------------------------ */
const C_WOOD = [0.45, 0.30, 0.20];
const C_HOOP = [0.26, 0.16, 0.10];
const C_DARK = [0.18, 0.17, 0.16];
const C_STEEL = [0.27, 0.27, 0.29];
const C_GREY = [0.74, 0.74, 0.72];
const C_BEIGE = [0.78, 0.71, 0.58];
const C_ANT = [0.62, 0.63, 0.66];

/* ------------------------------------------------------------------ *
 * main
 * ------------------------------------------------------------------ */
export function roofProps(pts, y, seed) {
  const o = { pos: [], nor: [], col: [], tri: 0 };
  const p = pts;
  if (!p || p.length < 6) return o;
  const area = polyArea(p);
  if (area < 20) return o;

  const rng = rngFrom(seed);
  const cands = buildCandidates(p);
  if (!cands.length) return o;

  const occupied = [];

  /* ---- water tower (basic: 4 legs + barrel + cone) ---- */
  if (area > 150 && rng() < 0.45) {
    const maxD = maxClearance(cands);
    const rMax = Math.min(2.3, (maxD - MARGIN - 0.11) / 1.018);
    if (rMax >= 1.6) {
      const br = 1.6 + rng() * (rMax - 1.6);
      const legH = 2.5 + rng() * 1.0;
      const barH = 3.5 + rng() * 1.0;
      const a = br * 0.72;                    // leg half spacing
      const reach = Math.SQRT2 * a + 0.11;     // outermost footprint radius
      const need = MARGIN + reach;
      const spot = pickSpot(cands, need, reach, rng, occupied);
      if (spot) {
        const yaw = rng() * TAU;
        const c = Math.cos(yaw), s = Math.sin(yaw);
        const leg = (sx, sz) => [spot.x + (sx * c - sz * s) * a, y, spot.z + (sx * s + sz * c) * a];
        const L = [leg(-1, -1), leg(1, -1), leg(1, 1), leg(-1, 1)];
        for (const p0 of L) {
          emitBeam(o, [p0[0], y, p0[2]], [p0[0], y + legH, p0[2]], 0.22, C_STEEL);
        }
        // wooden barrel
        const by = y + legH;
        const sides = 10 + Math.floor(rng() * 3);
        emitCylinder(o, spot.x, by, spot.z, br, barH, sides, C_WOOD, false, false, yaw);
        // conical roof + finial
        const coneH = 1.0 + rng() * 0.4;
        emitCone(o, spot.x, by + barH, spot.z, br + 0.08, coneH, sides, C_DARK, yaw);
        emitCone(o, spot.x, by + barH + coneH, spot.z, 0.14, 0.4, 4, C_DARK, yaw);
        occupied.push({ x: spot.x, z: spot.z, r: reach });
      }
    }
  }

  /* ---- one mechanical box ---- */
  {
    const s = 2 + rng() * 4;
    const rad = s * 0.70711; // circumradius of the square footprint
    const need = MARGIN + rad;
    const spot = pickSpot(cands, need, rad, rng, occupied);
    if (spot) {
      const h = 1.5 + rng() * 2.0;
      const yaw = rng() * TAU;
      emitAABox(o, spot.x, y + h / 2, spot.z, s / 2, h / 2, s / 2, rng() < 0.5 ? C_GREY : C_BEIGE, yaw);
      occupied.push({ x: spot.x, z: spot.z, r: rad });
    }
  }

  return { pos: o.pos, nor: o.nor, col: o.col };
}
