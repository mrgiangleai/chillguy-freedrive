// Model low-poly (map New York) — worker MiniMax / DeepSeek viết theo đề + script chấm (kích thước ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
/**
 * model.js — low-poly 3D model of the Lever House
 * 390 Park Avenue, New York · Gordon Bunshaft / Skidmore, Owings & Merrill · 1952
 *
 * ES module, no imports. `build(THREE)` returns { geometry } — one BufferGeometry
 * with position / normal / color attributes (non-indexed, vertex colours).
 *
 * Units: metres.  Origin (0,0,0) = centre of the footprint at ground level.
 * +Y up, the main glass facade faces -Z.
 *
 * Composition
 *   - 2-storey podium  61 x 60 x ~8.7 m, raised on a colonnade of thin columns
 *     over an open ground-floor courtyard.
 *   - Slim vertical slab  55 (X) x 16 (Z) rising to 94 m at the north (+Z) edge,
 *     blue-green glass curtain wall, stainless mullions, dark spandrel bands,
 *     white marble end walls.
 */

export function build(THREE) {
  /* ------------------------------------------------------------------ *
   *  palette
   * ------------------------------------------------------------------ */
  const C = {
    paving:   [0.33, 0.33, 0.32],   // street level paving
    court:    [0.40, 0.39, 0.37],   // courtyard stone
    concrete: [0.57, 0.56, 0.52],   // columns
    marble:   [0.93, 0.92, 0.87],   // white marble
    marbleSh: [0.84, 0.83, 0.78],   // shaded marble
    glass:    [0.27, 0.47, 0.49],   // blue-green curtain wall glass
    glassAlt: [0.21, 0.39, 0.43],   // alternating pane tint
    spandrel: [0.10, 0.12, 0.14],   // dark spandrel band
    steel:    [0.68, 0.70, 0.72],   // stainless steel mullions
    bronze:   [0.50, 0.34, 0.18],   // entrance accent
    dark:     [0.06, 0.08, 0.09],   // glazing shadow / interior
    green:    [0.17, 0.31, 0.20],   // planters
  };

  /* ------------------------------------------------------------------ *
   *  tiny merge helper
   * ------------------------------------------------------------------ */
  const pos = [];
  const nrm = [];
  const col = [];

  const BOX = new THREE.BoxGeometry(1, 1, 1);
  const COL = new THREE.CylinderGeometry(0.45, 0.45, 1, 8, 1, true);

  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _p = new THREE.Vector3();
  const _s = new THREE.Vector3();

  function add(tmpl, color, o) {
    o = o || {};
    const x = o.x || 0, y = o.y || 0, z = o.z || 0;
    const sx = o.sx === undefined ? 1 : o.sx;
    const sy = o.sy === undefined ? 1 : o.sy;
    const sz = o.sz === undefined ? 1 : o.sz;
    const rx = o.rx || 0, ry = o.ry || 0, rz = o.rz || 0;

    let g = tmpl.clone();
    if (g.index) { const ni = g.toNonIndexed(); g.dispose(); g = ni; }

    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    _p.set(x, y, z);
    _s.set(sx, sy, sz);
    _m.compose(_p, _q, _s);
    g.applyMatrix4(_m);

    const pa = g.getAttribute('position');
    if (!g.getAttribute('normal')) g.computeVertexNormals();
    const na = g.getAttribute('normal');

    const p = pa.array, n = na.array;
    const count = p.length / 3;
    for (let i = 0; i < count; i++) {
      pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      nrm.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      col.push(color[0], color[1], color[2]);
    }
    g.dispose();
  }

  const box = (color, o) => add(BOX, color, o);
  /** column: radius 0.45, open ended, standing between y0 and y1 */
  const pillar = (color, x, z, y0, y1) =>
    add(COL, color, { x: x, y: (y0 + y1) / 2, z: z, sy: y1 - y0 });

  /* ================================================================== *
   *  1.  STREET LEVEL — 61 x 60 m ground plate + open courtyard
   * ================================================================== */
  // ground plate (bottom face exactly on y = 0)
  box(C.paving, { y: 0.20, sy: 0.40, sx: 61, sz: 60 });

  // courtyard stone inlay under the podium
  box(C.court, { y: 0.42, sy: 0.08, sx: 46, sz: 42 });

  // colonnade: 8 x 8 grid of slender columns under the podium
  const colX = 8, colZ = 8;
  for (let i = 0; i < colX; i++) {
    const x = -27 + (i * 54) / (colX - 1);
    for (let j = 0; j < colZ; j++) {
      const z = -25.5 + (j * 51) / (colZ - 1);
      pillar(C.concrete, x, z, 0.40, 4.20);
    }
  }

  /* ================================================================== *
   *  2.  PODIUM LEVEL — floor slab, glazed box, spandrels, mullions
   * ================================================================== */
  // structural floor of the 2nd level (its soffit is the courtyard ceiling)
  box(C.marble, { y: 4.55, sy: 0.70, sx: 61, sz: 60 });

  // glazing volume of the 2nd level (recessed inside the envelope)
  box(C.glass, { y: 6.45, sy: 1.90, sx: 60.40, sz: 59.40 });

  // dark spandrel bands top & bottom of the 2nd level glazing
  const bandH = 0.60;
  box(C.spandrel, { y: 4.90 + bandH / 2, sy: bandH, sx: 61, sz: 0.30, z: -29.85 });
  box(C.spandrel, { y: 4.90 + bandH / 2, sy: bandH, sx: 61, sz: 0.30, z: 29.85 });
  box(C.spandrel, { y: 4.90 + bandH / 2, sy: bandH, sz: 60, sx: 0.30, x: -30.35 });
  box(C.spandrel, { y: 4.90 + bandH / 2, sy: bandH, sz: 60, sx: 0.30, x: 30.35 });
  box(C.spandrel, { y: 7.40 + bandH / 2, sy: bandH, sx: 61, sz: 0.30, z: -29.85 });
  box(C.spandrel, { y: 7.40 + bandH / 2, sy: bandH, sx: 61, sz: 0.30, z: 29.85 });
  box(C.spandrel, { y: 7.40 + bandH / 2, sy: bandH, sz: 60, sx: 0.30, x: -30.35 });
  box(C.spandrel, { y: 7.40 + bandH / 2, sy: bandH, sz: 60, sx: 0.30, x: 30.35 });

  // stainless mullions of the 2nd level curtain wall
  const mz = 13; // mullions along X (61 m)
  for (let i = 0; i < mz; i++) {
    const x = -30.5 + (i + 0.5) * (61 / mz);
    box(C.steel, { x: x, y: 6.45, sy: 1.90, sx: 0.25, sz: 0.35, z: -29.80 });
    box(C.steel, { x: x, y: 6.45, sy: 1.90, sx: 0.25, sz: 0.35, z: 29.80 });
  }
  const mx = 12; // mullions along Z (60 m)
  for (let i = 0; i < mx; i++) {
    const z = -30 + (i + 0.5) * (60 / mx);
    box(C.steel, { z: z, y: 6.45, sy: 1.90, sz: 0.25, sx: 0.35, x: -30.325 });
    box(C.steel, { z: z, y: 6.45, sy: 1.90, sz: 0.25, sx: 0.35, x: 30.325 });
  }

  // roof deck of the podium = the plaza
  box(C.marble, { y: 8.35, sy: 0.70, sx: 61, sz: 60 });

  // slim parapet around the plaza
  box(C.marbleSh, { y: 9.00, sy: 0.60, sx: 61, sz: 0.25, z: -29.875 });
  box(C.marbleSh, { y: 9.00, sy: 0.60, sx: 61, sz: 0.25, z: 29.875 });
  box(C.marbleSh, { y: 9.00, sy: 0.60, sz: 60, sx: 0.25, x: -30.375 });
  box(C.marbleSh, { y: 9.00, sy: 0.60, sz: 60, sx: 0.25, x: 30.375 });

  // planters on the plaza
  const planters = [[-22, -12], [-22, 6], [12, -14], [16, 4]];
  for (let i = 0; i < planters.length; i++) {
    box(C.marbleSh, { x: planters[i][0], z: planters[i][1], y: 8.90, sy: 0.40, sx: 5, sz: 5 });
    box(C.green,    { x: planters[i][0], z: planters[i][1], y: 9.45, sy: 0.70, sx: 4.4, sz: 4.4 });
  }

  /* ================================================================== *
   *  3.  ENTRANCE at street level (under the podium, on the main axis)
   * ================================================================== */
  box(C.bronze, { y: 1.80, sy: 3.60, sx: 9, sz: 1.20, z: -30.60 });
  box(C.dark,   { y: 1.60, sy: 3.00, sx: 7, sz: 0.20, z: -31.20 });
  box(C.bronze, { y: 3.80, sy: 0.40, sx: 11, sz: 1.60, z: -30.80 });

  /* ================================================================== *
   *  4.  THE SLAB — 55 (X) x 16 (Z) x 94 m
   * ================================================================== */
  const TX0 = -30.5, TX1 = 24.5;   // 55 m along X
  const TZ0 = 13.8,  TZ1 = 29.8;   // 16 m along Z
  const TCX = (TX0 + TX1) / 2, TCZ = (TZ0 + TZ1) / 2;
  const TY0 = 9.50, TY1 = 91.0;    // glazed height
  const TYC = (TY0 + TY1) / 2, TYT = TY1 - TY0;

  // soffit / base of the slab where it lands on the plaza
  box(C.marble, { x: TCX, z: TCZ, y: 9.10, sy: 0.80, sx: 55, sz: 16 });

  // white marble end walls
  box(C.marble, { x: TX0 + 0.30, z: TCZ, y: TYC, sy: TYT, sx: 0.60, sz: 16 });
  box(C.marble, { x: TX1 - 0.30, z: TCZ, y: TYC, sy: TYT, sx: 0.60, sz: 16 });

  // dark interior behind the glass
  box(C.dark, { x: TCX, z: TCZ, y: TYC, sy: TYT, sx: 53.8, sz: 15.2 });

  // --- curtain wall: 20 bays, 21 mullions ---------------------------
  const bays = 20;
  const step = 55 / bays;
  const paneW = step - 0.30;
  for (let k = 0; k <= bays; k++) {
    const x = TX0 + k * step;
    // front (-Z) mullion
    box(C.steel, { x: x, y: TYC, sy: TYT, sx: 0.30, sz: 0.70, z: 13.85 });
    // back (+Z) mullion
    box(C.steel, { x: x, y: TYC, sy: TYT, sx: 0.30, sz: 0.70, z: 29.65 });
  }
  for (let k = 0; k < bays; k++) {
    const x = TX0 + (k + 0.5) * step;
    const tone = (k % 2 === 0) ? C.glass : C.glassAlt;
    box(tone, { x: x, y: TYC, sy: TYT, sx: paneW, sz: 0.30, z: 14.05 });
    box(tone, { x: x, y: TYC, sy: TYT, sx: paneW, sz: 0.30, z: 29.55 });
  }

  // --- spandrel bands at every floor --------------------------------
  const floors = 20;
  const fh = (TY1 - TY0) / floors;
  for (let f = 0; f <= floors; f++) {
    const y = TY0 + f * fh;
    box(C.spandrel, { x: TCX, y: y, sy: 0.80, sx: 55, sz: 0.625, z: 13.8625 });
    box(C.spandrel, { x: TCX, y: y, sy: 0.80, sx: 55, sz: 0.625, z: 29.6375 });
  }

  // --- roof and penthouse -------------------------------------------
  box(C.marble, { x: TCX, z: TCZ, y: 91.40, sy: 0.80, sx: 55, sz: 16 });
  box(C.marbleSh, { x: -12, z: TCZ, y: 92.90, sy: 2.20, sx: 15, sz: 9 });
  box(C.steel, { x: -12, z: TCZ, y: 92.75, sy: 0.35, sx: 15.4, sz: 9.4 });

  /* ------------------------------------------------------------------ *
   *  assemble
   * ------------------------------------------------------------------ */
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
