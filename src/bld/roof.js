// roof.js — deterministic rooftop clutter for flat Manhattan roofs.
//   roofProps(pts, y, seed) -> { pos, nor, col }   (non-indexed triangles)
//
// Plain ES module, no imports. Deterministic: everything derives from `seed`
// through a mulberry32 PRNG (Math.random is never used).
//
// Everything stands on the roof plane y, is inside the footprint polygon `pts`
// and at least 1.5 m away from its edges. Output is vertex coloured and
// capped at 500 triangles per call.

const TAU = Math.PI * 2;
const MAX_TRIS = 500;
const MARGIN = 1.5; // minimum distance from the polygon edges

/* ------------------------------------------------------------------ *
 * deterministic PRNG
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
const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));

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
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
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
// feasible spot: edge clearance >= need, not overlapping anything already placed
function pickSpot(cands, need, radius, rng, occupied) {
  const feas = [];
  let total = 0;
  for (const c of cands) {
    if (c.d < need) continue;
    let bad = false;
    for (const o of occupied) {
      if (Math.hypot(c.x - o.x, c.z - o.z) < o.r + radius + 0.3) { bad = true; break; }
    }
    if (bad) continue;
    const w = 0.1 + (c.d - need);
    total += w;
    feas.push({ x: c.x, z: c.z, w, acc: total });
  }
  if (!feas.length) return null;
  const r = rng() * total;
  let sel = feas[feas.length - 1];
  for (const c of feas) { if (r <= c.acc) { sel = c; break; } }
  return sel;
}

/* ------------------------------------------------------------------ *
 * mesh output
 * ------------------------------------------------------------------ */
function tri(o, a, b, c, n, col) {
  if (o.tri >= MAX_TRIS) return;
  o.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
  o.nor.push(n[0], n[1], n[2], n[0], n[1], n[2], n[0], n[1], n[2]);
  o.col.push(col[0], col[1], col[2], col[0], col[1], col[2], col[0], col[1], col[2]);
  o.tri++;
}
function quad(o, a, b, c, d, n, col) {
  if (o.tri + 2 > MAX_TRIS) return;
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
const shade = (c, k) => [c[0] * k, c[1] * k, c[2] * k];

/* oriented box: u/v/w orthonormal unit axes, half sizes hu/hv/hw */
function emitBox(o, cx, cy, cz, u, hu, v, hv, w, hw, col) {
  if (o.tri + 12 > MAX_TRIS) return;
  const signs = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
  const P = [];
  for (const s of signs) {
    P.push([
      cx + u[0] * hu * s[0] + v[0] * hv * s[1] + w[0] * hw * s[2],
      cy + u[1] * hu * s[0] + v[1] * hv * s[1] + w[1] * hw * s[2],
      cz + u[2] * hu * s[0] + v[2] * hv * s[1] + w[2] * hw * s[2],
    ]);
  }
  quad(o, P[4], P[5], P[6], P[7], w, col);
  quad(o, P[3], P[2], P[1], P[0], neg(w), col);
  quad(o, P[1], P[5], P[6], P[2], u, col);
  quad(o, P[4], P[0], P[3], P[7], neg(u), col);
  quad(o, P[2], P[6], P[7], P[3], v, col);
  quad(o, P[0], P[1], P[5], P[4], neg(v), col);
}
function emitAABox(o, cx, cy, cz, hx, hy, hz, col, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  emitBox(o, cx, cy, cz, [c, 0, s], hx, [0, 1, 0], hy, [-s, 0, c], hz, col);
}
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
function emitCylinder(o, cx, cy, cz, r, h, sides, col, capTop, capBottom, yaw, vary) {
  if (o.tri + sides * 2 + (capTop ? sides : 0) + (capBottom ? sides : 0) > MAX_TRIS) return;
  for (let i = 0; i < sides; i++) {
    const a0 = yaw + (i / sides) * TAU, a1 = yaw + ((i + 1) / sides) * TAU, am = (a0 + a1) / 2;
    const n = [Math.cos(am), 0, Math.sin(am)];
    const c = vary ? shade(col, 1 + (vary * (i % 5) - vary * 2)) : col;
    const p0 = [cx + Math.cos(a0) * r, cy, cz + Math.sin(a0) * r];
    const p1 = [cx + Math.cos(a1) * r, cy, cz + Math.sin(a1) * r];
    quad(o, p0, p1, [p1[0], cy + h, p1[2]], [p0[0], cy + h, p0[2]], n, c);
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
  if (o.tri + sides > MAX_TRIS) return;
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
const C_WOOD = [0.45, 0.30, 0.20];  // tank staves
const C_HOOP = [0.25, 0.15, 0.09];  // dark iron hoops
const C_DARK = [0.18, 0.17, 0.16];  // conical roof
const C_STEEL = [0.27, 0.27, 0.29]; // legs + cross frame (dark grey)
const C_GREY = [0.74, 0.74, 0.72];  // HVAC
const C_BEIGE = [0.79, 0.72, 0.58]; // bulkhead
const C_ANT = [0.60, 0.61, 0.64];   // antenna mast

/* ------------------------------------------------------------------ *
 * wooden water tower
 * ------------------------------------------------------------------ */
function buildTower(o, x, z, y, br, legH, barH, yaw, sides, detail) {
  const essential = 4 * 12 + sides * 2 + sides + 4;   // legs + tank + cone + finial
  if (o.tri + essential > MAX_TRIS) return null;
  const a = br * 0.72;               // leg half spacing
  const legT = 0.11;                 // leg half thickness
  const c = Math.cos(yaw), s = Math.sin(yaw);
  const L = [];
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    L.push([x + (sx * c - sz * s) * a, z + (sx * s + sz * c) * a]);
  }
  // 4 steel legs
  for (const p of L) emitBeam(o, [p[0], y, p[1]], [p[0], y + legH, p[1]], legT * 2, C_STEEL);
  // wooden tank
  const by = y + legH;
  emitCylinder(o, x, by, z, br, barH, sides, C_WOOD, false, false, yaw, 0.07);
  // conical roof + finial
  const coneH = 1.0 + (detail ? 0.45 : 0.2);
  emitCone(o, x, by + barH, z, br + 0.08, coneH, sides, C_DARK, yaw);
  emitCone(o, x, by + barH + coneH, z, 0.14, 0.42, 4, C_DARK, yaw);
  // cross frame: two levels of horizontal beams + diagonal braces
  const lv = [legH * 0.34, legH * 0.92];
  for (const h of lv) {
    for (let i = 0; i < 4; i++) {
      const p = L[i], q = L[(i + 1) % 4];
      emitBeam(o, [p[0], y + h, p[1]], [q[0], y + h, q[1]], 0.1, C_STEEL);
    }
  }
  if (detail) {
    for (let i = 0; i < 4; i++) {
      const p = L[i], q = L[(i + 1) % 4];
      emitBeam(o, [p[0], y + lv[0], p[1]], [q[0], y + lv[1], q[1]], 0.085, C_STEEL);
    }
    // 2 darker hoops around the staves
    const hr = br + 0.05, hh = 0.15;
    emitCylinder(o, x, by + barH * 0.22, z, hr, hh, sides, C_HOOP, false, false, yaw, 0);
    emitCylinder(o, x, by + barH * 0.68, z, hr, hh, sides, C_HOOP, false, false, yaw, 0);
  }
  return Math.SQRT2 * (a + legT);   // footprint radius used for placement
}

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
  const room = maxClearance(cands);
  const occupied = [];

  /* ---- wooden water tower (big roofs only) ---- */
  if (area > 150 && rng() < 0.52) {
    const rMax = Math.min(2.3, (room - MARGIN - 0.156) / (Math.SQRT2 * 0.72));
    if (rMax >= 1.6) {
      const br = 1.6 + rng() * (rMax - 1.6);
      const legH = rr(rng, 2.5, 3.5);
      const barH = rr(rng, 3.5, 4.5);
      const sides = ri(rng, 10, 12);
      const yaw = rng() * TAU;
      const reach = Math.SQRT2 * (br * 0.72 + 0.11);
      const spot = pickSpot(cands, MARGIN + reach, reach, rng, occupied);
      if (spot) {
        const built = buildTower(o, spot.x, spot.z, y, br, legH, barH, yaw, sides, true);
        if (built !== null) {
          occupied.push({ x: spot.x, z: spot.z, r: reach });
          // rarely a second, smaller tower on the same roof
          if (rng() < 0.08) {
            const br2 = 1.6;
            const reach2 = Math.SQRT2 * (br2 * 0.72 + 0.11);
            const spot2 = pickSpot(cands, MARGIN + reach2, reach2, rng, occupied);
            if (spot2) {
              const b2 = buildTower(o, spot2.x, spot2.z, y, br2, rr(rng, 2.5, 3.2), rr(rng, 3.5, 4.0),
                rng() * TAU, 10, false);
              if (b2 !== null) occupied.push({ x: spot2.x, z: spot2.z, r: reach2 });
            }
          }
        }
      }
    }
  }

  /* ---- mechanical boxes (HVAC units / elevator bulkheads) ---- */
  const nBoxRoll = rng();
  let nBox = nBoxRoll < 0.22 ? 0 : nBoxRoll < 0.55 ? 1 : nBoxRoll < 0.85 ? 2 : 3;
  if (area > 150 && nBox === 0) nBox = 1;   // large roofs always carry some plant
  for (let i = 0; i < nBox; i++) {
    const sx = rr(rng, 2, 6), sz = rr(rng, 2, 6);
    const rad = Math.hypot(sx, sz) / 2;
    const spot = pickSpot(cands, MARGIN + rad, rad, rng, occupied);
    if (!spot) continue;
    const h = rr(rng, 1.5, 3.5);
    const yaw = rng() * TAU;
    const base = rng() < 0.55 ? C_GREY : C_BEIGE;
    emitAABox(o, spot.x, y + h / 2, spot.z, sx / 2, h / 2, sz / 2, shade(base, rr(rng, 0.94, 1.06)), yaw);
    // small curb / vent cap on top of some units
    if (rng() < 0.35 && o.tri + 12 < MAX_TRIS) {
      const cw = sx * 0.5, cd = sz * 0.5;
      emitAABox(o, spot.x, y + h + 0.12, spot.z, cw, 0.12, cd, shade(base, 0.88), yaw);
    }
    occupied.push({ x: spot.x, z: spot.z, r: rad });
  }

  /* ---- antenna mast (~15 % of roofs) ---- */
  if (rng() < 0.15) {
    const mastH = rr(rng, 4, 8);
    const arm = rr(rng, 0.6, 1.1); // half length of the cross arms
    const rad = arm;
    const spot = pickSpot(cands, MARGIN + rad, rad, rng, occupied);
    if (spot) {
      emitAABox(o, spot.x, y + mastH / 2, spot.z, 0.05, mastH / 2, 0.05, C_ANT, rng() * TAU);
      const nb = ri(rng, 1, 3);
      for (let i = 0; i < nb; i++) {
        const h = mastH * (0.55 + 0.4 * (i / Math.max(1, nb - 1)));
        const len = arm * (1 - 0.2 * i);
        const yaw = rng() * TAU;
        emitAABox(o, spot.x, y + h, spot.z, len, 0.035, 0.035, C_ANT, yaw);
      }
      occupied.push({ x: spot.x, z: spot.z, r: rad });
    }
  }

  return { pos: o.pos, nor: o.nor, col: o.col };
}
