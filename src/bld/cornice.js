// cornice.js — stone cornice band + parapet around a building footprint.
// Export cornice(pts, y, opts) -> { pos, nor, col } non-indexed triangles.
// No imports, deterministic.

export function cornice(pts, y, opts = {}) {
  const depth = opts.depth ?? 0.5;            // band sticks out from wall
  const height = opts.height ?? 0.7;          // band height (y0..y)
  const thick = opts.thickness ?? 0.3;        // parapet wall thickness
  const parH = opts.parapetHeight ?? 0.9;     // parapet height above roof (y)
  const base = opts.color ?? [0.82, 0.78, 0.70];
  const cBand = base;
  const cPar = [base[0] * 0.95, base[1] * 0.95, base[2] * 0.95]; // 5% darker

  const pos = [], nor = [], col = [];
  const ne = pts ? (pts.length >> 1) : 0;
  if (ne < 3) return { pos, nor, col };

  // Signed area -> orientation.
  let area2 = 0;
  for (let i = 0; i < ne; i++) {
    const j = (i + 1) % ne;
    area2 += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1];
  }
  const cw = area2 < 0;

  // Outward unit normal per edge (points away from polygon interior).
  const N = new Array(ne);
  for (let i = 0; i < ne; i++) {
    const j = (i + 1) % ne;
    const dx = pts[2 * j] - pts[2 * i], dz = pts[2 * j + 1] - pts[2 * i + 1];
    const l = Math.hypot(dx, dz);
    N[i] = l < 1e-9 ? null : cw ? [-dz / l, dx / l] : [dz / l, -dx / l];
  }

  // Push one triangle; normal computed from winding (unit). For CW footprints
  // the b/c vertices are swapped so the geometry normal points the same way.
  function tri(ax, ay, az, bx, by, bz, cx, cy, cz, c) {
    if (cw) { const t = bx; bx = cx; cx = t; const t2 = by; by = cy; cy = t2; const t3 = bz; bz = cz; cz = t3; }
    const u1 = bx - ax, u2 = by - ay, u3 = bz - az;
    const v1 = cx - ax, v2 = cy - ay, v3 = cz - az;
    const gx = u2 * v3 - u3 * v2, gy = u3 * v1 - u1 * v3, gz = u1 * v2 - u2 * v1;
    const l = Math.hypot(gx, gy, gz);
    if (!(l > 1e-9)) return;
    const ix = gx / l, iy = gy / l, iz = gz / l;
    pos.push(ax, ay, az, bx, by, bz, cx, cy, cz);
    nor.push(ix, iy, iz, ix, iy, iz, ix, iy, iz);
    col.push(c[0], c[1], c[2], c[0], c[1], c[2], c[0], c[1], c[2]);
  }

  const y0 = y - height, py1 = y + parH;
  for (let i = 0; i < ne; i++) {
    const j = (i + 1) % ne;
    const n = N[i];
    if (!n) continue;
    const ax = pts[2 * i], az = pts[2 * i + 1];
    const bx = pts[2 * j], bz = pts[2 * j + 1];
    if (ax === bx && az === bz) continue;

    // --- cornice band: wall line -> outer offset line ---
    const ox1 = ax + depth * n[0], oz1 = az + depth * n[1];
    const ox2 = bx + depth * n[0], oz2 = bz + depth * n[1];
    // top face (+y)
    tri(ax, y, az, bx, y, bz, ox2, y, oz2, cBand);
    tri(ax, y, az, ox2, y, oz2, ox1, y, oz1, cBand);
    // soffit / bottom face (-y)
    tri(ax, y0, az, ox1, y0, oz1, ox2, y0, oz2, cBand);
    tri(ax, y0, az, ox2, y0, oz2, bx, y0, bz, cBand);
    // outer vertical face
    tri(ox1, y0, oz1, ox2, y, oz2, ox2, y0, oz2, cBand);
    tri(ox1, y0, oz1, ox1, y, oz1, ox2, y, oz2, cBand);

    // --- parapet: wall line (outer, flush) -> inset line (thickness) ---
    const ix1 = ax - thick * n[0], iz1 = az - thick * n[1];
    const ix2 = bx - thick * n[0], iz2 = bz - thick * n[1];
    // outer face (at footprint outline)
    tri(ax, y, az, bx, py1, bz, bx, y, bz, cPar);
    tri(ax, y, az, ax, py1, az, bx, py1, bz, cPar);
    // inner face (facing roof interior)
    tri(ix1, y, iz1, ix2, y, iz2, ix2, py1, iz2, cPar);
    tri(ix1, y, iz1, ix2, py1, iz2, ix1, py1, iz1, cPar);
    // top of parapet
    tri(ax, py1, az, ix2, py1, iz2, ix1, py1, iz1, cPar);
    tri(ax, py1, az, bx, py1, bz, ix2, py1, iz2, cPar);
  }

  // --- corner fills: close the wedge gap at convex vertices (miter) ---
  for (let i = 0; i < ne; i++) {
    const n1 = N[(i - 1 + ne) % ne], n2 = N[i];
    if (!n1 || !n2) continue;
    const px = pts[2 * i], pz = pts[2 * i + 1];
    const p0 = pts[2 * ((i - 1 + ne) % ne)], p0z = pts[2 * ((i - 1 + ne) % ne) + 1];
    const p1 = pts[2 * ((i + 1) % ne)], p1z = pts[2 * ((i + 1) % ne) + 1];
    const cxr = (px - p0) * (p1z - pz) - (pz - p0z) * (p1 - px);
    if (Math.abs(cxr) < 1e-9) continue;
    const convex = cw ? cxr < 0 : cxr > 0;
    if (!convex) continue; // reflex corners overlap, no gap to fill

    // cornice wedge: outer corner points
    const qx1 = px + depth * n1[0], qz1 = pz + depth * n1[1];
    const qx2 = px + depth * n2[0], qz2 = pz + depth * n2[1];
    tri(px, y, pz, qx2, y, qz2, qx1, y, qz1, cBand);      // top fill (+y)
    tri(px, y0, pz, qx1, y0, qz1, qx2, y0, qz2, cBand);   // soffit fill (-y)
    tri(qx1, y0, qz1, qx2, y, qz2, qx2, y0, qz2, cBand);  // outer corner face
    tri(qx1, y0, qz1, qx1, y, qz1, qx2, y, qz2, cBand);

    // parapet wedge: inset corner points, top ring + inner face
    const rx1 = px - thick * n1[0], rz1 = pz - thick * n1[1];
    const rx2 = px - thick * n2[0], rz2 = pz - thick * n2[1];
    tri(px, py1, pz, rx2, py1, rz2, rx1, py1, rz1, cPar); // top fill (+y)
    tri(rx1, y, rz1, rx2, y, rz2, rx2, py1, rz2, cPar);   // inner corner face
    tri(rx1, y, rz1, rx2, py1, rz2, rx1, py1, rz1, cPar);
  }

  return { pos, nor, col };
}
