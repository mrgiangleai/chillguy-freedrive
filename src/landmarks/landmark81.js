// Model low-poly Landmark 81 (map Landmark TP.HCM) — DeepSeek (API) viết theo đề + script chấm `scripts/check-landmark81.mjs` (kích thước thật), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors).
// Landmark 81 (Ho Chi Minh City, 2018) — low-poly landmark for a three.js driving game.
// Units: metres. Origin = centre of the tower footprint at ground level, +Y up,
// main entrance facade (podium) faces -Z.  Tower plan ~56 x 56, total height 461.
// Concept: a bundle of nine square "bamboo stalk" tubes (3 x 3 grid) of different
// heights, stepping up toward the centre tube which carries the crown and spire.

export function build(THREE) {
  // ------------------------------------------------------------------ palette
  const CL = {
    glassA:  [0.25, 0.37, 0.47], // blue-grey curtain wall
    glassB:  [0.31, 0.44, 0.54], // lighter glass panel
    glassC:  [0.18, 0.27, 0.35], // mechanical floor band
    fin:     [0.84, 0.87, 0.89], // white vertical mullion fins
    podBeige:[0.76, 0.71, 0.61], // podium beige stone
    podStone:[0.68, 0.63, 0.53], // podium darker stone
    podGlass:[0.14, 0.20, 0.25], // podium dark glass
    crown:   [0.43, 0.55, 0.65], // crown glass
    metal:   [0.80, 0.82, 0.84], // spire / crown ribs
    roof:    [0.28, 0.31, 0.34], // roof caps
    dark:    [0.07, 0.09, 0.11], // entrance glazing
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
  function tri(a, b, c2, n, c) {
    pushV(a[0], a[1], a[2], n[0], n[1], n[2], c);
    pushV(b[0], b[1], b[2], n[0], n[1], n[2], c);
    pushV(c2[0], c2[1], c2[2], n[0], n[1], n[2], c);
  }

  // flat quad with a desired outward normal (winding is fixed automatically)
  function quadN(a, b, c2, d, n, c) {
    const nn = unit(cross(sub(b, a), sub(c2, a)));
    if (dot(nn, n) < 0) {
      tri(a, d, c2, n, c);
      tri(a, c2, b, n, c);
    } else {
      tri(a, b, c2, n, c);
      tri(a, c2, d, n, c);
    }
  }

  // flat quad whose normal is derived from its own geometry (tapered faces)
  function quadA(a, b, c2, d, hint, c) {
    let n = unit(cross(sub(b, a), sub(c2, a)));
    if (dot(n, hint) < 0) {
      n = [-n[0], -n[1], -n[2]];
      tri(a, d, c2, n, c);
      tri(a, c2, b, n, c);
    } else {
      tri(a, b, c2, n, c);
      tri(a, c2, d, n, c);
    }
  }

  // thin square-section beam between two points (crown ribs)
  function beam(p0, p1, r, c) {
    const mk = (p) => [
      [p[0] - r, p[1], p[2] - r],
      [p[0] + r, p[1], p[2] - r],
      [p[0] + r, p[1], p[2] + r],
      [p[0] - r, p[1], p[2] + r],
    ];
    const A = mk(p0), B = mk(p1);
    const mid = [(p0[0] + p1[0]) * 0.5, (p0[1] + p1[1]) * 0.5, (p0[2] + p1[2]) * 0.5];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      const mx = (A[i][0] + A[j][0]) * 0.5 - mid[0];
      const mz = (A[i][2] + A[j][2]) * 0.5 - mid[2];
      quadA(A[i], A[j], B[j], B[i], [mx, 0, mz], c);
    }
    quadA(B[0], B[1], B[2], B[3], [0, 1, 0], c);
  }

  // ================================================================ PODIUM
  // Vincom Center mall: low wide block 130 x 90, six floors, beige stone with
  // dark glass bands, main entrance atrium on the -Z facade.
  const PX = 65, PZ = 45, PTOP = 28;

  // facade rows: each floor = dark glass strip + beige stone spandrel
  const podRows = [];
  {
    const fh = [7.2, 4.2, 4.2, 4.2, 4.2, 4.0];
    let y = 0;
    for (const h of fh) {
      podRows.push([y, y + h - 2.0, CL.podGlass]);
      podRows.push([y + h - 2.0, y + h, CL.podBeige]);
      y += h;
    }
  }
  function podiumFace(ax, az, bx, bz, hint) {
    for (const r of podRows) {
      quadA([ax, r[0], az], [bx, r[0], bz], [bx, r[1], bz], [ax, r[1], az], hint, r[2]);
    }
  }
  podiumFace(-PX, -PZ, PX, -PZ, [0, 0, -1]); // -Z (entrance)
  podiumFace(PX, -PZ, PX, PZ, [1, 0, 0]);    // +X
  podiumFace(PX, PZ, -PX, PZ, [0, 0, 1]);    // +Z
  podiumFace(-PX, PZ, -PX, -PZ, [-1, 0, 0]); // -X

  // base plinth
  box(131.6, 1.8, 91.6, 0, 0.9, 0, CL.podStone);

  // beige vertical piers on the podium, skipped across the entrance
  for (let x = -60; x <= 60.01; x += 12) {
    if (Math.abs(x) > 15.9) box(1.6, 26, 0.8, x, 13, -PZ - 0.2, CL.podBeige);
    box(1.6, 26, 0.8, x, 13, PZ + 0.2, CL.podBeige);
  }
  for (let z = -36; z <= 36.01; z += 12) {
    box(0.8, 26, 1.6, -PX - 0.2, 13, z, CL.podBeige);
    box(0.8, 26, 1.6, PX + 0.2, 13, z, CL.podBeige);
  }

  // cornice ledges + roof terrace parapet
  box(131.4, 0.9, 91.4, 0, 24, 0, CL.podStone);
  box(132.6, 1.0, 92.6, 0, 28.5, 0, CL.podBeige); // cornice
  box(130.4, 0.5, 90.4, 0, 29.2, 0, CL.roof);     // roof deck
  box(130, 1.5, 0.6, 0, 29.9, -PZ + 0.3, CL.podBeige);
  box(130, 1.5, 0.6, 0, 29.9, PZ - 0.3, CL.podBeige);
  box(0.6, 1.5, 90, -PX + 0.3, 29.9, 0, CL.podBeige);
  box(0.6, 1.5, 90, PX - 0.3, 29.9, 0, CL.podBeige);

  // rooftop plant rooms / skylights on the mall roof
  box(26, 2.6, 12, -30, 30.7, 18, CL.roof);
  box(18, 2.0, 10, 34, 30.4, 22, CL.roof);
  box(22, 1.6, 9, 28, 30.2, -24, CL.roof);
  box(10, 3.2, 10, -46, 31.0, -20, CL.roof);
  box(14, 1.2, 7, -14, 30.0, 34, CL.metal); // skylight

  // entrance: glazed atrium box on -Z, beige frame, canopy, steps
  box(30, 20, 8, 0, 10, -49, CL.podGlass);
  box(2.2, 21, 8.4, -15.6, 10.5, -49, CL.podBeige);
  box(2.2, 21, 8.4, 15.6, 10.5, -49, CL.podBeige);
  box(34, 1.8, 8.6, 0, 21, -49, CL.podBeige);
  box(40, 1.2, 12, 0, 15.8, -50.5, CL.podStone); // canopy
  box(18, 9, 0.7, 0, 4.5, -53.2, CL.dark);       // doors
  box(0.7, 9, 0.7, -9.4, 4.5, -53.2, CL.podBeige);
  box(0.7, 9, 0.7, 9.4, 4.5, -53.2, CL.podBeige);
  box(40, 0.3, 8, 0, 0.15, -57, CL.podStone);
  box(38, 0.6, 5, 0, 0.3, -55.5, CL.podStone);
  box(36, 0.9, 2.5, 0, 0.45, -54.25, CL.podStone);

  // ========================================================== TOWER TUBES
  const TS = 18, GAP = 0.6, STEP = TS + GAP;
  const S = TS / 2;

  // height of each tube, stepping up toward the centre (3 x 3 grid, gx / gz)
  const HEIGHT = [
    [280, 320, 240], // gz = -1 (front)
    [360, 400, 340], // gz = 0
    [200, 350, 160], // gz = +1 (back)
  ];
  // exposed perimeter faces of each tube: index 0 -Z, 1 +X, 2 +Z, 3 -X
  const outer = (gx, gz) => [
    gz === -1, // -Z
    gx === 1,  // +X
    gz === 1,  // +Z
    gx === -1, // -X
  ];
  const NB = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // face -> neighbouring tube

  // horizontal rows: glass panels every ~8 m, a darker mechanical band at each
  // multiple of 40 m → continuous band lines around every tube
  const BAND = 1.5, BLOCK = 40;
  function tubeRows(h) {
    const rows = [];
    let y = 0;
    while (y < h - 0.01) {
      const blockEnd = Math.min(h, (Math.floor(y / BLOCK + 1e-9) + 1) * BLOCK);
      const bandY = blockEnd - BAND;
      const glassEnd = blockEnd - y > BAND + 3 ? bandY : blockEnd;
      const n = Math.max(1, Math.round((glassEnd - y) / 8));
      for (let k = 0; k < n; k++) {
        rows.push([y + ((glassEnd - y) * k) / n, y + ((glassEnd - y) * (k + 1)) / n, k % 2]);
      }
      if (glassEnd < blockEnd) rows.push([glassEnd, blockEnd, 2]);
      y = blockEnd;
    }
    return rows;
  }

  function tube(gx, gz, h) {
    const cx = gx * STEP, cz = gz * STEP;
    const faces = outer(gx, gz);
    const rows = tubeRows(h);
    for (const r of rows) {
      const y0 = r[0], y1 = r[1];
      const c = r[2] === 2 ? CL.glassC : r[2] === 1 ? CL.glassB : CL.glassA;
      quadA([cx - S, y0, cz - S], [cx + S, y0, cz - S], [cx + S, y1, cz - S], [cx - S, y1, cz - S], [0, 0, -1], c);
      quadA([cx + S, y0, cz - S], [cx + S, y0, cz + S], [cx + S, y1, cz + S], [cx + S, y1, cz - S], [1, 0, 0], c);
      quadA([cx + S, y0, cz + S], [cx - S, y0, cz + S], [cx - S, y1, cz + S], [cx + S, y1, cz + S], [0, 0, 1], c);
      quadA([cx - S, y0, cz + S], [cx - S, y0, cz - S], [cx - S, y1, cz - S], [cx - S, y1, cz + S], [-1, 0, 0], c);
    }
    // flat roof
    quadN([cx - S, h, cz - S], [cx + S, h, cz - S], [cx + S, h, cz + S], [cx - S, h, cz + S], [0, 1, 0], CL.roof);

    // thin parapet around each tube roof
    box(TS, 1.1, 0.5, cx, h + 0.55, cz - S + 0.25, CL.fin);
    box(TS, 1.1, 0.5, cx, h + 0.55, cz + S - 0.25, CL.fin);
    box(0.5, 1.1, TS, cx - S + 0.25, h + 0.55, cz, CL.fin);
    box(0.5, 1.1, TS, cx + S - 0.25, h + 0.55, cz, CL.fin);

    // rooftop plant room
    box(4.6, 2.0, 4.6, cx, h + 1.0, cz, CL.roof);

    // white vertical fins. On the tower perimeter they run full height; on
    // faces shared with a neighbouring tube they start where that tube ends,
    // so the stepped mass keeps its mullions on every exposed face.
    for (let f = 0; f < 4; f++) {
      const nbx = gx + NB[f][0], nbz = gz + NB[f][1];
      const inside = nbx >= -1 && nbx <= 1 && nbz >= -1 && nbz <= 1;
      const yStart = inside ? HEIGHT[nbz + 1][nbx + 1] : 0;
      if (h - yStart < 3) continue;
      const nf = faces[f] ? 9 : 7;
      const fh = h - yStart, fy = (yStart + h) / 2;
      for (let k = 0; k < nf; k++) {
        const u = (k + 1) / (nf + 1);
        const along = -S + TS * u;
        if (f === 0) box(0.34, fh, 0.72, cx + along, fy, cz - S - 0.33, CL.fin);
        else if (f === 1) box(0.72, fh, 0.34, cx + S + 0.33, fy, cz + along, CL.fin);
        else if (f === 2) box(0.34, fh, 0.72, cx + along, fy, cz + S + 0.33, CL.fin);
        else box(0.72, fh, 0.34, cx - S - 0.33, fy, cz + along, CL.fin);
      }
    }
    // corner mullions on exposed vertical edges
    const edges = [
      faces[0] && faces[3], faces[0] && faces[1],
      faces[2] && faces[1], faces[2] && faces[3],
    ];
    const ex = [-S, S, S, -S], ez = [-S, -S, S, S];
    for (let i = 0; i < 4; i++) {
      if (!edges[i]) continue;
      box(0.7, h, 0.7, cx + ex[i], h / 2, cz + ez[i], CL.fin);
    }
  }

  for (let gz = -1; gz <= 1; gz++) {
    for (let gx = -1; gx <= 1; gx++) tube(gx, gz, HEIGHT[gz + 1][gx + 1]);
  }

  // ================================================================= CROWN
  // the centre tube narrows in three steps into a slim glass crown, then spire
  function frustum(y0, y1, b, t, color, capC) {
    quadA([-b, y0, -b], [b, y0, -b], [t, y1, -t], [-t, y1, -t], [0, 0, -1], color);
    quadA([b, y0, -b], [b, y0, b], [t, y1, t], [t, y1, -t], [1, 0, 0], color);
    quadA([b, y0, b], [-b, y0, b], [-t, y1, t], [t, y1, t], [0, 0, 1], color);
    quadA([-b, y0, b], [-b, y0, -b], [-t, y1, -t], [-t, y1, t], [-1, 0, 0], color);
    quadN([-t, y1, -t], [t, y1, -t], [t, y1, t], [-t, y1, t], [0, 1, 0], capC || color);
  }

  const CS = [
    [400, 409, 9.0, 5.4],
    [409, 418, 5.4, 3.6],
    [418, 428, 3.6, 2.4],
    [428, 438, 2.4, 1.5],
  ];
  for (const s of CS) frustum(s[0], s[1], s[2], s[3], CL.crown, CL.roof);

  // slim metal ledges between the crown steps
  box(11.4, 0.5, 11.4, 0, 409, 0, CL.metal);
  box(7.8, 0.45, 7.8, 0, 418, 0, CL.metal);
  box(5.2, 0.45, 5.2, 0, 428, 0, CL.metal);
  box(3.4, 0.4, 3.4, 0, 438, 0, CL.metal);

  // slim metal ribs tracking the crown corners
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  for (const sg of corners) {
    for (let i = 0; i < CS.length; i++) {
      const a = CS[i];
      const p0 = [sg[0] * (a[2] + 0.26), a[0], sg[1] * (a[2] + 0.26)];
      const p1 = [sg[0] * (a[3] + 0.26), a[1], sg[1] * (a[3] + 0.26)];
      beam(p0, p1, 0.22, CL.metal);
    }
  }

  // thin white mullions on the tapering crown glass, following each facet
  for (const s of CS) {
    const [y0, y1, b, t] = s;
    for (let f = 0; f < 4; f++) {
      for (let k = 0; k < 4; k++) {
        const u = (k + 1) / 5;                 // position along the facet
        const a0 = -b + 2 * b * u, a1 = -t + 2 * t * u;
        const w = 0.24, o = 0.18;
        let A, B, C2, D, hint;
        if (f === 0) {
          A = [a0 - w, y0, -b - o]; B = [a0 + w, y0, -b - o];
          C2 = [a1 + w, y1, -t - o]; D = [a1 - w, y1, -t - o]; hint = [0, 0, -1];
        } else if (f === 1) {
          A = [b + o, y0, a0 - w]; B = [b + o, y0, a0 + w];
          C2 = [t + o, y1, a1 + w]; D = [t + o, y1, a1 - w]; hint = [1, 0, 0];
        } else if (f === 2) {
          A = [a0 + w, y0, b + o]; B = [a0 - w, y0, b + o];
          C2 = [a1 - w, y1, t + o]; D = [a1 + w, y1, t + o]; hint = [0, 0, 1];
        } else {
          A = [-b - o, y0, a0 + w]; B = [-b - o, y0, a0 - w];
          C2 = [-t - o, y1, a1 - w]; D = [-t - o, y1, a1 + w]; hint = [-1, 0, 0];
        }
        quadA(A, B, C2, D, hint, CL.fin);
      }
    }
  }

  // spire 438 -> 461
  {
    const g = new THREE.CylinderGeometry(0.06, 1.55, 23, 6, 1);
    g.translate(0, 449.5, 0);
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
