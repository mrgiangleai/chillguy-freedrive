// Model low-poly One Vanderbilt (map New York) — DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// One Vanderbilt (NYC, 2020) - low-poly landmark for a three.js driving game.
// Units: metres. Origin = centre of the footprint at ground level, +Y up,
// main facade (entrance / lobby) faces -Z.  Footprint 70 x 60, height 427.

export function build(THREE) {
  // ------------------------------------------------------------------ palette
  const CL = {
    glassA:  [0.23, 0.35, 0.46], // main blue-grey curtain wall
    glassB:  [0.30, 0.43, 0.54], // lighter glass, gives floor-to-floor variation
    glassC:  [0.15, 0.24, 0.32], // darker / recessed glass
    glassD:  [0.10, 0.17, 0.23], // deepest shadow glass (core)
    lobby:   [0.38, 0.53, 0.62], // tall glass lobby
    terra:   [0.66, 0.42, 0.29], // terracotta
    terraLt: [0.76, 0.54, 0.39], // light terracotta / beige
    trim:    [0.80, 0.77, 0.71], // pale stone trim
    mullion: [0.62, 0.68, 0.72], // thin light mullions
    roof:    [0.24, 0.27, 0.31], // roof caps
    dark:    [0.06, 0.08, 0.10], // entrance glazing
    metal:   [0.70, 0.72, 0.74], // spire
  };

  // ------------------------------------------------------------- merge buffers
  const pos = [], nor = [], col = [];

  function pushV(x, y, z, nx, ny, nz, c) {
    pos.push(x, y, z);
    nor.push(nx, ny, nz);
    col.push(c[0], c[1], c[2]);
  }

  // append a BufferGeometry (already positioned / oriented, with normals)
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

  function tri(a, b, c2, n, c) {
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
      const tb = e, te = b;
      b = tb; e = te;
      n = unit(cross(sub(b, a), sub(d, a)));
    }
    if (!Number.isFinite(n[0])) return;
    tri(a, b, d, n, c);
    tri(a, d, e, n, c);
  }

  // thin rectangular beam from p0 to p1 (vertical-ish accent / mullion)
  function beam(p0, p1, sx, sz, c, capC) {
    const mk = (p) => [
      [p[0] - sx, p[1], p[2] - sz],
      [p[0] + sx, p[1], p[2] - sz],
      [p[0] + sx, p[1], p[2] + sz],
      [p[0] - sx, p[1], p[2] + sz],
    ];
    const A = mk(p0), B = mk(p1);
    const mid = [(p0[0] + p1[0]) * 0.5, (p0[1] + p1[1]) * 0.5, (p0[2] + p1[2]) * 0.5];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      quad([A[i], A[j], B[j], B[i]], mid, c);
    }
    quad([B[0], B[1], B[2], B[3]], [mid[0], mid[1] - 500, mid[2]], capC || c);
  }

  // ------------------------------------------------------------------- tower
  // A faceted volume: rectangular footprint at y0 tapering to a smaller
  // rectangular top at y1, sliced horizontally into glass bands separated by
  // thin terracotta spandrel rings.  The top can be slanted along Z.
  function volume(o) {
    const { bx0, bx1, bz0, bz1, tx0, tx1, tz0, tz1, y0, y1, step, gap, slant } = o;
    const ca = o.ca, cb = o.cb, bandC = o.bandC, capC = o.capC || CL.roof;
    const BX = [bx0, bx1, bx1, bx0], TX = [tx0, tx1, tx1, tx0];
    const BZ = [bz0, bz0, bz1, bz1], TZ = [tz0, tz0, tz1, tz1];
    const yT = [y1 - slant, y1 - slant, y1 + slant, y1 + slant];
    // x/z taper linearly with t; floors stay horizontal, only the very top
    // ring is sliced on a slant (chiselled crown)
    const P = (i, t) => {
      const top = t >= 1 - 1e-9;
      return [
        BX[i] + (TX[i] - BX[i]) * t,
        top ? yT[i] : y0 + (y1 - y0) * t,
        BZ[i] + (TZ[i] - BZ[i]) * t,
      ];
    };

    function ring(ta, tb, c) {
      const A = [], B = [];
      for (let i = 0; i < 4; i++) { A.push(P(i, ta)); B.push(P(i, tb)); }
      const ref = [0, 0, 0];
      for (let i = 0; i < 4; i++) {
        ref[0] += A[i][0] * 0.25;
        ref[1] += A[i][1] * 0.25;
        ref[2] += A[i][2] * 0.25;
      }
      ref[1] = (A[0][1] + B[0][1]) * 0.5;
      for (let i = 0; i < 4; i++) {
        const j = (i + 1) % 4;
        quad([A[i], A[j], B[j], B[i]], ref, c);
      }
    }

    // floors are laid out on a common pitch measured from y0, so the
    // terracotta band lines run continuously around the whole tower
    const totalH = y1 - y0;
    let ya = y0, k = 0;
    while (ya + step < y1 - 0.8) {
      ring((ya - y0) / totalH, (ya + step - y0) / totalH, k % 2 ? cb : ca);
      ya += step;
      if (ya + gap < y1 - 0.5) {
        ring((ya - y0) / totalH, (ya + gap - y0) / totalH, bandC);
        ya += gap;
      }
      k++;
      if (ya >= y1) break;
    }
    if (ya < y1) ring((ya - y0) / totalH, 1, k % 2 ? cb : ca);

    // roof cap of this volume
    const cap = [P(0, 1), P(1, 1), P(2, 1), P(3, 1)];
    const capRef = [
      (cap[0][0] + cap[1][0] + cap[2][0] + cap[3][0]) * 0.25,
      y1 - 60,
      (cap[0][2] + cap[1][2] + cap[2][2] + cap[3][2]) * 0.25,
    ];
    quad(cap, capRef, capC);

    // crisp terracotta corner piers following the taper
    for (let i = 0; i < 4; i++) {
      const a = P(i, 0), b = P(i, 1);
      beam([a[0], y0, a[2]], [b[0], b[1], b[2]], 0.42, 0.42, o.ribC || CL.terraLt);
    }

    // thin light vertical mullions on the outward facing facets
    const faces = o.outer || [];
    for (let k = 0; k < faces.length; k++) {
      const f = faces[k], j = (f + 1) % 4;
      const zFace = (f % 2 === 0);
      for (let m = 0; m < 2; m++) {
        const u = 0.3 + 0.4 * m;
        const a0 = P(f, 0), b0 = P(j, 0), a1 = P(f, 1), b1 = P(j, 1);
        const p0 = [a0[0] + (b0[0] - a0[0]) * u, y0, a0[2] + (b0[2] - a0[2]) * u];
        const p1 = [
          a1[0] + (b1[0] - a1[0]) * u,
          a1[1] + (b1[1] - a1[1]) * u,
          a1[2] + (b1[2] - a1[2]) * u,
        ];
        beam(p0, p1, zFace ? 0.55 : 0.26, zFace ? 0.26 : 0.55, CL.mullion, CL.mullion);
      }
    }
    return P;
  }

  // ============================================================ PODIUM (0-30)
  // tall glass lobby + darker upper base block
  box(70, 13, 60, 0, 6.5, 0, CL.lobby);
  box(70, 15, 60, 0, 20.5, 0, CL.glassC);
  // stone / terracotta cornice slab that also forms the tower terrace
  box(71, 2, 61, 0, 29, 0, CL.terraLt);

  // horizontal terracotta spandrel bands wrapping the podium
  function bandRing(y, h, p, c) {
    box(70 + 2 * p, h, p + 0.5, 0, y, -(30 + p / 2 - 0.25), c);
    box(70 + 2 * p, h, p + 0.5, 0, y, (30 + p / 2 - 0.25), c);
    box(p + 0.5, h, 60 + 2 * p, -(35 + p / 2 - 0.25), y, 0, c);
    box(p + 0.5, h, 60 + 2 * p, (35 + p / 2 - 0.25), y, 0, c);
  }
  bandRing(14.0, 1.0, 0.30, CL.terra);
  bandRing(20.0, 0.8, 0.26, CL.terraLt);
  bandRing(25.5, 0.8, 0.26, CL.terra);

  // terracotta piers / fins around the base
  for (let x = -32; x <= 32.01; x += 8) {
    box(1.6, 27.5, 0.8, x, 13.75, -30.2, CL.terra);
    box(1.6, 27.5, 0.8, x, 13.75, 30.2, CL.terra);
  }
  for (let z = -24; z <= 24.01; z += 8) {
    box(0.8, 27.5, 1.6, -35.2, 13.75, z, CL.terra);
    box(0.8, 27.5, 1.6, 35.2, 13.75, z, CL.terra);
  }

  // entrance portal on the -Z main facade + canopy
  box(1.4, 14, 1.1, -11, 7, -30.3, CL.terraLt);
  box(1.4, 14, 1.1, 11, 7, -30.3, CL.terraLt);
  box(23.4, 1.6, 1.1, 0, 13.6, -30.3, CL.terraLt);
  box(20, 12.4, 0.8, 0, 6.2, -30.15, CL.dark);
  box(22, 1.2, 3.4, 0, 11.4, -31.6, CL.terraLt);
  box(18.5, 0.35, 0.5, 0, 10.6, -33.1, CL.terra);

  // ====================================================== TOWER (30 - 427)
  const T0 = 30;

  // four interlocking faceted volumes, tops staggered, tops sliced on a slant
  // front-right
  volume({
    bx0: 0, bx1: 30, bz0: -25, bz1: 0, tx0: 6, tx1: 26, tz0: -20, tz1: -3,
    y0: T0, y1: 305, bands: 11, gap: 1.1, slant: 8,
    ca: CL.glassA, cb: CL.glassB, bandC: CL.terra, outer: [0, 1],
  });
  // back-right
  volume({
    bx0: 0, bx1: 30, bz0: 0, bz1: 25, tx0: 8, tx1: 27, tz0: 3, tz1: 17,
    y0: T0, y1: 352, bands: 12, gap: 1.1, slant: -8,
    ca: CL.glassB, cb: CL.glassA, bandC: CL.terra, outer: [1, 2],
  });
  // back-left (tallest of the four)
  volume({
    bx0: -30, bx1: 0, bz0: 0, bz1: 25, tx0: -25, tx1: -4, tz0: 3, tz1: 17,
    y0: T0, y1: 380, bands: 13, gap: 1.1, slant: -8,
    ca: CL.glassA, cb: CL.glassB, bandC: CL.terra, outer: [2, 3],
  });
  // front-left
  volume({
    bx0: -30, bx1: 0, bz0: -25, bz1: 0, tx0: -27, tx1: -6, tz0: -21, tz1: -4,
    y0: T0, y1: 272, bands: 10, gap: 1.1, slant: 8,
    ca: CL.glassB, cb: CL.glassA, bandC: CL.terra, outer: [3, 0],
  });

  // recessed central glass core (fills the pinwheel slots, becomes the crown)
  volume({
    bx0: -16, bx1: 16, bz0: -13, bz1: 13, tx0: -7.5, tx1: 7.5, tz0: -6, tz1: 6,
    y0: T0, y1: 392, bands: 9, gap: 1.2, slant: 0,
    ca: CL.glassB, cb: CL.glassA, bandC: CL.glassC, outer: [],
    ribC: CL.terra, capC: CL.roof,
  });

  // crown: the core narrows to a slender lantern below the spire
  volume({
    bx0: -7.5, bx1: 7.5, bz0: -6, bz1: 6, tx0: -1.8, tx1: 1.8, tz0: -1.5, tz1: 1.5,
    y0: 392, y1: 410, bands: 3, gap: 0.8, slant: 0,
    ca: CL.glassA, cb: CL.glassB, bandC: CL.terraLt, outer: [0, 1, 2, 3],
    ribC: CL.terraLt, capC: CL.roof,
  });

  // crown fins converging on the spire
  const crownCorners = [[-7.5, -6], [7.5, -6], [7.5, 6], [-7.5, 6]];
  for (let i = 0; i < 4; i++) {
    const [sx, sz] = crownCorners[i];
    beam([sx, 391.5, sz], [sx * 0.24, 410, sz * 0.25], 0.30, 0.30, CL.metal);
  }

  // spire 410 -> 427
  {
    const g = new THREE.CylinderGeometry(0.12, 2.0, 17, 4, 1);
    g.translate(0, 418.5, 0);
    addGeo(g, CL.metal);
    g.dispose();
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
