// Model low-poly plaza pieces — Vinhomes Central Park walking plaza (map TP.HCM).
// build(THREE) => { geometry } (vertex colors linear). Units: metres, +Y up,
// base y = 0, centred at origin. Footprint 24 x 10 (reflecting pool),
// twisted "leaf vase" sculpture 12.6 m tall.
// Rows: stone rim + teal water + one frameless glass rail + planter island,
// sculpture on a round granite pedestal inside the pool.

export function build(THREE) {
  // ------------------------------------------------------------------ palette
  // sRGB hex => linear (same conversion the grading script uses)
  const H = (hex) => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; };
  const CL = {
    rim:      H('#cbbf9f'), // beige stone coping
    water:    H('#1f5d63'), // dark teal water surface
    basin:    H('#144449'), // pool floor (darker teal, reads as depth)
    glass:    H('#9fb7c0'), // pale blue-grey glass rail
    planter:  H('#3a3d40'), // dark stone planter sides
    planterT: H('#4f7d34'), // planter green top
    granite:  H('#2c2d30'), // sculpture pedestal
    leaf:     H('#2fae4a'), // bright green sculpture bands
    leafDark: H('#1f7a35'), // darker green bands
  };

  // ------------------------------------------------------------- merge buffers
  const pos = [], nor = [], col = [];

  function pushV(x, y, z, nx, ny, nz, c) {
    pos.push(x, y, z);
    nor.push(nx, ny, nz);
    col.push(c[0], c[1], c[2]);
  }

  function addGeo(g, c) {
    const ng = g.index ? g.toNonIndexed() : g;
    const pa = ng.attributes.position.array;
    const na = ng.attributes.normal.array;
    for (let i = 0; i < pa.length; i += 3) {
      pushV(pa[i], pa[i + 1], pa[i + 2], na[i], na[i + 1], na[i + 2], c);
    }
    if (ng !== g) ng.dispose();
  }

  function box(w, h, d, x, y, z, c) {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    addGeo(g, c);
    g.dispose();
  }

  // ----------------------------------------------------------- vector helpers
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const cross = (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  function unit(v) {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / l, v[1] / l, v[2] / l];
  }

  function tri(a, b, c2, c) {
    let n = unit(cross(sub(b, a), sub(c2, a)));
    if (!Number.isFinite(n[0])) return;
    pushV(a[0], a[1], a[2], n[0], n[1], n[2], c);
    pushV(b[0], b[1], b[2], n[0], n[1], n[2], c);
    pushV(c2[0], c2[1], c2[2], n[0], n[1], n[2], c);
  }

  // flat quad, wound so its normal points away from `ref` (an interior point)
  function quad(pts, ref, c) {
    let a = pts[0], b = pts[1], d = pts[2], e = pts[3];
    let n = unit(cross(sub(b, a), sub(d, a)));
    const cen = [
      (a[0] + b[0] + d[0] + e[0]) * 0.25,
      (a[1] + b[1] + d[1] + e[1]) * 0.25,
      (a[2] + b[2] + d[2] + e[2]) * 0.25,
    ];
    if (dot(n, sub(cen, ref)) < 0) {
      const tb = b; b = e; e = tb;
      n = unit(cross(sub(b, a), sub(d, a)));
    }
    if (!Number.isFinite(n[0])) return;
    pushV(a[0], a[1], a[2], n[0], n[1], n[2], c);
    pushV(b[0], b[1], b[2], n[0], n[1], n[2], c);
    pushV(d[0], d[1], d[2], n[0], n[1], n[2], c);
    pushV(a[0], a[1], a[2], n[0], n[1], n[2], c);
    pushV(d[0], d[1], d[2], n[0], n[1], n[2], c);
    pushV(e[0], e[1], e[2], n[0], n[1], n[2], c);
  }

  // ================================================================= POOL 1
  // Coping / stone rim: outer 24 x 10, 0.5 m wide, 0.45 m tall (y 0 -> 0.45)
  box(24, 0.45, 0.5, 0, 0.225, 4.75, CL.rim);   // long side +Z
  box(24, 0.45, 0.5, 0, 0.225, -4.75, CL.rim);  // long side -Z
  box(0.5, 0.45, 9, 11.75, 0.225, 0, CL.rim);   // short side +X
  box(0.5, 0.45, 9, -11.75, 0.225, 0, CL.rim);  // short side -X

  // shallow basin floor (darker teal, y 0 -> 0.1)
  box(23, 0.1, 9, 0, 0.05, 0, CL.basin);

  // water surface at y = 0.30, gently subdivided so it shades/animates nicely
  {
    const g = new THREE.PlaneGeometry(23, 9, 40, 16);
    g.rotateX(-Math.PI / 2);
    g.translate(0, 0.3, 0);
    addGeo(g, CL.water);
    g.dispose();
  }

  // frameless glass rail along the long side z = +5 (1.0 m, thin panel + rail)
  box(22.6, 1.0, 0.06, 0, 0.95, 4.72, CL.glass);
  box(22.6, 0.07, 0.14, 0, 1.46, 4.72, CL.glass);

  // low planter island 3 x 3 near x = +5 (rises through the water)
  box(3, 0.55, 3, 5, 0.275, 0, CL.planter);
  box(3, 0.08, 3, 5, 0.57, 0, CL.planterT);

  // =========================================================== SCULPTURE 2
  // Round granite pedestal at (-6, -1), r 1.6, h 0.6 (y 0 -> 0.6)
  {
    const g = new THREE.CylinderGeometry(1.6, 1.6, 0.6, 24, 1);
    g.translate(-6, 0.3, -1);
    addGeo(g, CL.granite);
    g.dispose();
  }

  // Twisted organic "vase / leaf": 24 stacked rings x 10 sides, 12 m tall
  // (y 0.6 -> 12.6). Radius sweeps 0.9 -> 1.6 -> 0.8 -> 1.8 m; centre drifts
  // sideways in an S-curve (ax 1.2 m) with a slight z sway. Rings twist.
  const RN = 24, SIDES = 10, SY0 = 0.6, SH = 12;
  const RAD = [[0, 0.9], [1 / 3, 1.6], [2 / 3, 0.8], [1, 1.8]];

  function sweep(t) { // piecewise smooth cosine interpolation
    for (let k = 0; k < RAD.length - 1; k++) {
      const [t0, r0] = RAD[k], [t1, r1] = RAD[k + 1];
      if (t <= t1 || k === RAD.length - 2) {
        const u = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)));
        const s = u * u * (3 - 2 * u);
        return r0 + (r1 - r0) * s;
      }
    }
    return RAD[RAD.length - 1][1];
  }

  function ringPts(t) {
    const y = SY0 + t * SH;
    const r = sweep(t);
    const cx = -6 + 1.2 * Math.sin(t * Math.PI * 2); // S-curve, xm 1.2 m
    const cz = -1 + 0.35 * Math.sin(t * Math.PI);    // slight sway
    const a0 = t * 1.9;                               // gentle twist
    const pts = [];
    for (let j = 0; j < SIDES; j++) {
      const a = a0 + (j / SIDES) * Math.PI * 2;
      pts.push([cx + Math.cos(a) * r, y, cz + Math.sin(a) * r]);
    }
    return { pts, c: [cx, y, cz] };
  }

  const rings = [];
  for (let i = 0; i < RN; i++) rings.push(ringPts(i / (RN - 1)));

  for (let k = 0; k < RN - 1; k++) {
    const A = rings[k], B = rings[k + 1];
    const ref = [(A.c[0] + B.c[0]) * 0.5, (A.c[1] + B.c[1]) * 0.5, (A.c[2] + B.c[2]) * 0.5];
    const c = k % 2 ? CL.leafDark : CL.leaf; // alternating green bands
    for (let j = 0; j < SIDES; j++) {
      const jp = (j + 1) % SIDES;
      quad([A.pts[j], A.pts[jp], B.pts[jp], B.pts[j]], ref, c);
    }
  }

  // open-flower top cap: fan from the last ring's centre, normal forced +Y
  {
    const T = rings[RN - 1];
    for (let j = 0; j < SIDES; j++) {
      const jp = (j + 1) % SIDES;
      let a = T.pts[j], b = T.pts[jp], c2 = T.c;
      let n = unit(cross(sub(b, a), sub(c2, a)));
      if (n[1] < 0) { const t2 = a; a = b; b = t2; n = unit(cross(sub(b, a), sub(c2, a))); }
      pushV(a[0], a[1], a[2], n[0], n[1], n[2], CL.leafDark);
      pushV(b[0], b[1], b[2], n[0], n[1], n[2], CL.leafDark);
      pushV(c2[0], c2[1], c2[2], n[0], n[1], n[2], CL.leafDark);
    }
  }

  // ------------------------------------------------------------ final buffer
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeBoundingBox();
  geo.computeBoundingSphere();
  return { geometry: geo };
}
