// Low-poly helix pedestrian bridge next to Landmark 81 (Ho Chi Minh City).
// build(THREE) => { geometry } with vertex colours (linear).
// Units: metres. Origin = centre of the bridge at ground level, +Y up,
// bridge span along X.  Deck bottom 6.0 m, two stair towers at x = ±27, z = +3.5.
// Straight deck with handrails, a double red tube helix around the span,
// three groups of yellow hoops, and striped cylindrical stair towers.

export function build(THREE) {
  // ------------------------------------------------------------------ palette
  const C = (hex) => {
    const c = new THREE.Color(hex);
    return [c.r, c.g, c.b];
  };
  const CL = {
    steel:   C(0x5b6066), // deck steel
    steelDk: C(0x3a3e43), // under-deck ribs / fascia
    deckTop: C(0x6d7278), // walking surface
    rail:    C(0xb9bec4), // handrails
    red:     C(0xb3262a), // helix tubes
    yellow:  C(0xe5b52a), // hoops
    black:   C(0x1e1f22), // tower bands
    silver:  C(0xc9ccd0), // tower bands
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
  // Rodrigues rotation of v around a unit axis
  function rotate(v, k, ang) {
    const ca = Math.cos(ang), sa = Math.sin(ang);
    const kv = cross(k, v), kd = dot(k, v);
    return [
      v[0] * ca + kv[0] * sa + k[0] * kd * (1 - ca),
      v[1] * ca + kv[1] * sa + k[1] * kd * (1 - ca),
      v[2] * ca + kv[2] * sa + k[2] * kd * (1 - ca),
    ];
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

  // ---------------------------------------------------------- swept tube mesh
  // Polyline -> tube of `r` with `sides` facets, parallel-transported frames.
  function tube(pts, r, sides, c, capEnds) {
    const n = pts.length;
    const T = [];
    for (let i = 0; i < n; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
      T.push(unit(sub(b, a)));
    }
    let N = unit(cross(T[0], Math.abs(T[0][1]) > 0.9 ? [1, 0, 0] : [0, 1, 0]));
    const rings = [];
    let prevT = T[0];
    for (let i = 0; i < n; i++) {
      if (i > 0) {
        const axis = cross(prevT, T[i]);
        const s = Math.hypot(axis[0], axis[1], axis[2]);
        if (s > 1e-9) {
          N = rotate(N, [axis[0] / s, axis[1] / s, axis[2] / s], Math.atan2(s, dot(prevT, T[i])));
        }
        const d = dot(N, T[i]);
        N = unit([N[0] - T[i][0] * d, N[1] - T[i][1] * d, N[2] - T[i][2] * d]);
        prevT = T[i];
      }
      const B = cross(T[i], N);
      const ring = [];
      for (let k = 0; k < sides; k++) {
        const a = (k / sides) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
        ring.push([
          pts[i][0] + (N[0] * ca + B[0] * sa) * r,
          pts[i][1] + (N[1] * ca + B[1] * sa) * r,
          pts[i][2] + (N[2] * ca + B[2] * sa) * r,
        ]);
      }
      rings.push(ring);
    }
    for (let i = 0; i < n - 1; i++) {
      const ref = [
        (pts[i][0] + pts[i + 1][0]) * 0.5,
        (pts[i][1] + pts[i + 1][1]) * 0.5,
        (pts[i][2] + pts[i + 1][2]) * 0.5,
      ];
      const A = rings[i], Bq = rings[i + 1];
      for (let k = 0; k < sides; k++) {
        const k2 = (k + 1) % sides;
        quad([A[k], A[k2], Bq[k2], Bq[k]], ref, c);
      }
    }
    if (capEnds) {
      const c0 = pts[0], r0 = rings[0], t0 = T[0];
      for (let k = 0; k < sides; k++) {
        const k2 = (k + 1) % sides;
        tri(c0, r0[k2], r0[k], [-t0[0], -t0[1], -t0[2]], c);
      }
      const c1 = pts[n - 1], r1 = rings[n - 1], t1 = T[n - 1];
      for (let k = 0; k < sides; k++) {
        const k2 = (k + 1) % sides;
        tri(c1, r1[k], r1[k2], t1, c);
      }
    }
  }

  // =================================================================== DECK
  const DECK_L = 54, DECK_W = 3.2, DECK_Y = 6.0, DECK_T = 0.8;
  const deckTop = DECK_Y + DECK_T;      // 6.8
  const deckZ = DECK_W * 0.5;           // 1.6

  box(DECK_L, DECK_T, DECK_W, 0, DECK_Y + DECK_T * 0.5, 0, CL.steel);          // slab
  box(DECK_L, 0.06, DECK_W - 0.16, 0, deckTop + 0.03, 0, CL.deckTop);           // surface
  box(DECK_L, 0.5, 0.14, 0, deckTop - 0.18, deckZ - 0.03, CL.steelDk);          // fascia
  box(DECK_L, 0.5, 0.14, 0, deckTop - 0.18, -deckZ + 0.03, CL.steelDk);

  for (let x = -25.5; x <= 25.6; x += 3) {
    box(0.22, 0.42, DECK_W, x, DECK_Y - 0.21, 0, CL.steelDk);                   // ribs
  }

  // handrails: top / mid / low rail + thin vertical mesh posts
  for (const s of [-1, 1]) {
    const z = (deckZ - 0.1) * s;
    box(DECK_L, 0.09, 0.09, 0, deckTop + 1.1, z, CL.rail);
    box(DECK_L, 0.05, 0.05, 0, deckTop + 0.6, z, CL.rail);
    box(DECK_L, 0.05, 0.05, 0, deckTop + 0.15, z, CL.rail);
    for (let x = -25.8; x <= 25.9; x += 1.2) {
      box(0.05, 1.1, 0.05, x, deckTop + 0.55, z, CL.rail);
    }
    // thin vertical mesh infill between the main posts
    for (let x = -26.4; x <= 26.4; x += 0.4) {
      box(0.025, 0.95, 0.025, x, deckTop + 0.52, z, CL.rail);
    }
  }

  // ============================================================= HELIX FRAME
  const HLX_R = 2.6, HLX_Y = DECK_Y + 1.0, PITCH = 10;
  const X0 = -DECK_L / 2, X1 = DECK_L / 2;
  for (const phase of [0, Math.PI]) {
    const pts = [];
    for (let x = X0; x <= X1 + 1e-6; x += 0.5) {
      const a = ((x - X0) / PITCH) * Math.PI * 2 + phase;
      pts.push([x, HLX_Y + HLX_R * Math.cos(a), HLX_R * Math.sin(a)]);
    }
    tube(pts, 0.15, 8, CL.red, true);
  }

  // yellow hoops: 3 groups x 6 m, one hoop every 1.5 m
  for (const gx of [-18, 0, 18]) {
    for (let k = -2; k <= 2; k++) {
      const g = new THREE.TorusGeometry(2.5, 0.08, 8, 20);
      g.rotateY(Math.PI / 2);
      g.translate(gx + k * 1.5, HLX_Y, 0);
      addGeo(g, CL.yellow);
      g.dispose();
    }
  }

  // ================================================================= TOWERS
  const TOWER_X = [-27, 27], TOWER_Z = 3.5, TOWER_R = 2.2, TOWER_H = 9;
  for (const tx of TOWER_X) {
    for (let k = 0; k < 8; k++) {
      const h = k === 7 ? 0.6 : 1.2;
      const g = new THREE.CylinderGeometry(TOWER_R, TOWER_R, h, 16, 1, true);
      g.translate(tx, k * 1.2 + h * 0.5, TOWER_Z);
      addGeo(g, k % 2 ? CL.silver : CL.black);
      g.dispose();
    }
    // top plate + parapet ring
    const cap = new THREE.CylinderGeometry(2.3, 2.3, 0.22, 16);
    cap.translate(tx, TOWER_H + 0.05, TOWER_Z);
    addGeo(cap, CL.steelDk);
    cap.dispose();

    const par = new THREE.CylinderGeometry(2.16, 2.16, 0.65, 16, 1, true);
    par.translate(tx, TOWER_H + 0.44, TOWER_Z);
    addGeo(par, CL.black);
    par.dispose();

    // vertical seams breaking up the striped drum
    for (let s = 0; s < 8; s++) {
      const a = (s / 8) * Math.PI * 2 + Math.PI / 8;
      box(0.1, TOWER_H, 0.1, tx + Math.sin(a) * 2.18, TOWER_H * 0.5, TOWER_Z + Math.cos(a) * 2.18, CL.steel);
    }

    // landing where the stair ramp meets the deck end
    box(2.4, 0.3, 2.6, tx, 5.85, 1.35, CL.steel);
    box(2.4, 0.9, 0.06, tx, 6.45, 2.6, CL.rail);

    // spiral stair ramp, half a turn around the tower
    const SEG = 12, A0 = 0.12, A1 = Math.PI + 0.12;
    const RI = 1.55, RO = 2.45, TH = 0.22, Y0 = 0.5, Y1 = 5.4;
    const at = (i, r, y) => {
      const a = A0 + ((A1 - A0) * i) / SEG;
      return [tx + r * Math.sin(a), y, TOWER_Z + r * Math.cos(a)];
    };
    for (let i = 0; i < SEG; i++) {
      const yA = Y0 + ((Y1 - Y0) * i) / SEG;
      const yB = Y0 + ((Y1 - Y0) * (i + 1)) / SEG;
      const oA0 = at(i, RO, yA), oA1 = at(i + 1, RO, yB);
      const iA0 = at(i, RI, yA), iA1 = at(i + 1, RI, yB);
      const oB0 = [oA0[0], yA - TH, oA0[2]], oB1 = [oA1[0], yB - TH, oA1[2]];
      const iB0 = [iA0[0], yA - TH, iA0[2]], iB1 = [iA1[0], yB - TH, iA1[2]];
      const midY = (yA + yB) * 0.5;
      quad([iA0, oA0, oA1, iA1], [tx, midY - 3, TOWER_Z], CL.steel);       // tread
      quad([iB0, oB0, oB1, iB1], [tx, midY + 3, TOWER_Z], CL.steelDk);     // soffit
      quad([oA0, oA1, oB1, oB0], [tx, midY, TOWER_Z], CL.steelDk);         // outer cheek
      quad([iA0, iA1, iB1, iB0], [tx, midY, TOWER_Z], CL.steelDk);         // inner cheek
      if (i % 2 === 0) {
        const p = at(i, RO - 0.06, yA);
        box(0.06, 0.95, 0.06, p[0], yA + 0.47, p[2], CL.rail);
      }
    }
  }

  // ====================================================== SUPPORT STRUTS
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const x = sx * 20;
      tube([
        [x, DECK_Y - 0.05, sz * 1.4],
        [x, 3.0, sz * 2.45],
        [x, 0.1, sz * 3.4],
      ], 0.26, 6, CL.steelDk, true);
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
