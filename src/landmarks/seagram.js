// Model low-poly (map New York) — worker MiniMax / DeepSeek viết theo đề + script chấm (kích thước ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// ---------------------------------------------------------------------------
// Low-poly 3D model of the Seagram Building, 375 Park Avenue, New York (1958)
// Mies van der Rohe / Philip Johnson — International Style glass slab tower.
//
// Units: metres. +Y up. Origin (0,0,0) = centre of the footprint at ground
// level. The main (Park Avenue) facade faces -Z.
//
// The building is assembled from simple primitives (Box / Cylinder) which are
// merged by hand into a single non-indexed BufferGeometry carrying
// position / normal / color attributes. Nothing is imported: THREE is passed
// in by the caller.
// ---------------------------------------------------------------------------

export function build(THREE) {
  // ------------------------------------------------------------------ colour
  const C = {
    glassFront: [0.205, 0.165, 0.115], // bronze-tinted curtain wall, sunlit
    glassSide: [0.140, 0.115, 0.082], //  shaded long elevations
    glassBack: [0.100, 0.086, 0.066], //  north elevation
    glassDark: [0.075, 0.066, 0.055], // window glass of podium + rear wing
    bronze: [0.300, 0.205, 0.115], //    vertical mullions
    bronzeDk: [0.215, 0.145, 0.082], //  spandrel bands / cornices
    travertine: [0.585, 0.545, 0.470], // podium stone
    wingStone: [0.455, 0.435, 0.405], // rear annex stone
    granite: [0.640, 0.620, 0.580], //    plaza paving
    graniteAlt: [0.600, 0.580, 0.545], //  plaza paving, alternate bay
    curb: [0.730, 0.710, 0.665], //       pool coping
    joint: [0.505, 0.490, 0.460], //      paving joints
    water: [0.115, 0.320, 0.350], //      fountain water
    roof: [0.520, 0.500, 0.465], //       roof slab
    mech: [0.300, 0.285, 0.265], //       mechanical penthouse
    metal: [0.330, 0.320, 0.300], //      lamp posts
    lamp: [0.930, 0.885, 0.740], //       lamp lens
    hedge: [0.150, 0.310, 0.135], //      planters
  };

  // --------------------------------------------------- tiny merge helper ---
  const pos = [];
  const nor = [];
  const col = [];

  /**
   * Append one primitive (already positioned) to the merged buffers.
   * @param {THREE.BufferGeometry} geo  source geometry (consumed, not mutated)
   * @param {number[]} color            rgb triple 0..1
   * @param {{x?:number,y?:number,z?:number,rx?:number,ry?:number,rz?:number}} t
   */
  function addPart(geo, color, t) {
    const g = geo.index !== null ? geo.toNonIndexed() : geo.clone();
    if (t.rx) g.rotateX(t.rx);
    if (t.ry) g.rotateY(t.ry);
    if (t.rz) g.rotateZ(t.rz);
    g.translate(t.x || 0, t.y || 0, t.z || 0);
    if (!g.attributes.normal) g.computeVertexNormals();
    const p = g.attributes.position.array;
    const n = g.attributes.normal.array;
    const count = p.length / 3;
    for (let i = 0; i < count; i++) {
      pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      col.push(color[0], color[1], color[2]);
    }
  }

  /** Axis aligned box given by its centre and full size. */
  function box(w, h, d, x, y, z, color) {
    addPart(new THREE.BoxGeometry(w, h, d), color, { x, y, z });
  }

  /** Box given by its minimum corner and full size. */
  function boxAt(x0, y0, z0, w, h, d, color) {
    box(w, h, d, x0 + w / 2, y0 + h / 2, z0 + d / 2, color);
  }

  // =========================================================================
  // KEY DIMENSIONS
  // =========================================================================
  const PLZ_X = 42.5; //  plaza half width  -> 85 m overall
  const PLZ_Z0 = -30; //  plaza front edge
  const PLZ_Z1 = 0; //    plaza back edge
  const PLZ_TOP = 0.6; //  plaza slab height

  const TOW_X = 23; //    tower half length  -> 46 m along X
  const TOW_Z0 = -2; //   tower front face
  const TOW_Z1 = 24; //   tower back face    -> 26 m along Z
  const TOW_H = 157; //   total height

  const POD_X = 24; //    podium half width
  const POD_Z0 = -3;
  const POD_Z1 = 25;
  const POD_TOP = 8.0;

  const SHAFT_Y0 = 8.4;
  const SHAFT_Y1 = 150.4;
  const SHAFT_CZ = (TOW_Z0 + TOW_Z1) / 2; // 11

  const WING_X = 29;
  const WING_Z0 = 24.9;
  const WING_Z1 = 29.8;
  const WING_H = 42; //  10 floors x 4.2 m

  // =========================================================================
  // 1. THE GRANITE PLAZA  (85 m x 30 m, in front of the tower, -Z side)
  // =========================================================================
  const px = [-PLZ_X, -24, -10, 10, 24, PLZ_X];
  const pz = [PLZ_Z0, -18, -12, PLZ_Z1];
  const pools = [
    { x0: -24, x1: -10, z0: -18, z1: -12 },
    { x0: 10, x1: 24, z0: -18, z1: -12 },
  ];
  const inPool = (x0, x1, z0, z1) =>
    pools.find((p) => x0 >= p.x0 - 1e-6 && x1 <= p.x1 + 1e-6 && z0 >= p.z0 - 1e-6 && z1 <= p.z1 + 1e-6);
  const touchesPool = (x0, x1, z0, z1) =>
    pools.some((p) => {
      const overlapX = x1 > p.x0 && x0 < p.x1;
      const overlapZ = z1 > p.z0 && z0 < p.z1;
      const sharedEdge =
        (Math.abs(x1 - p.x0) < 1e-6 || Math.abs(x0 - p.x1) < 1e-6) && overlapZ
        || (Math.abs(z1 - p.z0) < 1e-6 || Math.abs(z0 - p.z1) < 1e-6) && overlapX;
      return overlapX && overlapZ && sharedEdge;
    });

  for (let i = 0; i < px.length - 1; i++) {
    for (let j = 0; j < pz.length - 1; j++) {
      const x0 = px[i];
      const x1 = px[i + 1];
      const z0 = pz[j];
      const z1 = pz[j + 1];
      const w = x1 - x0;
      const d = z1 - z0;
      if (inPool(x0, x1, z0, z1)) {
        // recessed fountain pool: water surface sits below the plaza level
        boxAt(x0, 0, z0, w, 0.34, d, C.water);
        continue;
      }
      const curb = touchesPool(x0, x1, z0, z1);
      const h = curb ? 0.78 : PLZ_TOP;
      const tone = (i + j) % 2 === 0 ? C.granite : C.graniteAlt;
      boxAt(x0, 0, z0, w, h, d, curb ? C.curb : tone);
    }
  }

  // paving joints: shallow inlaid strips
  for (const z of [-28.2, -24.0, -20.6, -8.0, -4.0]) {
    box(2 * PLZ_X, 0.05, 0.28, 0, PLZ_TOP + 0.02, z, C.joint);
  }
  for (const x of [-33, 0, 33]) {
    box(0.28, 0.09, PLZ_Z1 - PLZ_Z0, x, PLZ_TOP + 0.04, (PLZ_Z0 + PLZ_Z1) / 2, C.joint);
  }

  // granite planters with clipped hedge
  for (const x of [-30, -12, 12, 30]) {
    box(4.5, 0.55, 1.6, x, 0.28, -25.5, C.granite);
    box(4.1, 0.46, 1.2, x, 0.78, -25.5, C.hedge);
  }

  // street lamps along the plaza edge
  for (const x of [-36, -24, -12, 0, 12, 24, 36]) {
    addPart(new THREE.CylinderGeometry(0.13, 0.17, 7.2, 6, 1), C.metal, { x, y: 3.6, z: -28.4 });
    box(1.0, 0.22, 0.5, x, 7.35, -28.4, C.metal);
    box(0.72, 0.1, 0.36, x, 7.18, -28.4, C.lamp);
  }

  // =========================================================================
  // 2. PODIUM  (2 storeys of travertine, houses the restaurant)
  // =========================================================================
  const podW = 2 * POD_X; //  48
  const podD = POD_Z1 - POD_Z0; //  28
  const podCz = (POD_Z0 + POD_Z1) / 2; //  11
  boxAt(-POD_X, 0, POD_Z0, podW, 3.4, podD, C.travertine);
  // recessed ribbon glazing at the restaurant level
  boxAt(-POD_X + 0.3, 3.4, POD_Z0 + 0.3, podW - 0.6, 0.62, podD - 0.6, C.glassDark);
  boxAt(-POD_X, 4.02, POD_Z0, podW, POD_TOP - 4.02, podD, C.travertine);
  // bronze cornice crowning the podium
  boxAt(-POD_X - 0.3, POD_TOP, POD_Z0 - 0.3, podW + 0.6, 0.4, podD + 0.6, C.bronzeDk);

  // =========================================================================
  // 3. GLASS SHAFT  (46 x 26 m curtain wall, bronze vertical mullions)
  // =========================================================================
  const shaftH = SHAFT_Y1 - SHAFT_Y0;
  const shaftCy = (SHAFT_Y0 + SHAFT_Y1) / 2;
  const t = 0.8; // wall thickness

  // four separate wall slabs -> a different glass tone per elevation
  boxAt(-TOW_X, SHAFT_Y0, TOW_Z0, 2 * TOW_X, shaftH, t, C.glassFront); //  -Z, Park Ave.
  boxAt(-TOW_X, SHAFT_Y0, TOW_Z1 - t, 2 * TOW_X, shaftH, t, C.glassBack); // +Z
  boxAt(-TOW_X, SHAFT_Y0, TOW_Z0 + t, t, shaftH, TOW_Z1 - TOW_Z0 - 2 * t, C.glassSide); // -X
  boxAt(TOW_X - t, SHAFT_Y0, TOW_Z0 + t, t, shaftH, TOW_Z1 - TOW_Z0 - 2 * t, C.glassSide); // +X

  // vertical bronze mullions, full height, closely spaced
  const mullW = 0.4;
  for (let x = -22; x <= 22.0001; x += 2.0) {
    box(mullW, shaftH, 0.4, x, shaftCy, TOW_Z0 - 0.1, C.bronze); //   front
    box(mullW, shaftH, 0.4, x, shaftCy, TOW_Z1 + 0.1, C.bronze); //   back
  }
  for (let z = 0.5; z <= 25.0001; z += 2.0) {
    box(0.4, shaftH, mullW, -TOW_X - 0.1, shaftCy, z, C.bronze); //  left
    box(0.4, shaftH, mullW, TOW_X + 0.1, shaftCy, z, C.bronze); //   right
  }

  // horizontal spandrel bands marking the floor lines
  const floors = 30;
  for (let i = 1; i <= floors; i++) {
    const y = SHAFT_Y0 + (shaftH * i) / (floors + 1);
    boxAt(-TOW_X - 0.15, y - 0.25, TOW_Z0 - 0.15, 2 * TOW_X + 0.3, 0.5, 26 + 0.3, C.bronzeDk);
  }

  // =========================================================================
  // 4. CROWN  (set-back mechanical penthouse + roof slab)
  // =========================================================================
  boxAt(-TOW_X - 0.2, SHAFT_Y1, TOW_Z0 - 0.2, 2 * TOW_X + 0.4, 0.6, 26 + 0.4, C.bronzeDk);
  boxAt(-20.5, SHAFT_Y1 + 0.6, SHAFT_CZ - 11.5, 41, 4.9, 23, C.mech);
  boxAt(-23.7, SHAFT_Y1 + 5.5, SHAFT_CZ - 13.7, 47.4, TOW_H - (SHAFT_Y1 + 5.5), 27.4, C.roof);

  // =========================================================================
  // 5. LOWER REAR WING  (10 floors, set behind the tower)
  // =========================================================================
  boxAt(-WING_X, 0, WING_Z0, 2 * WING_X, WING_H, WING_Z1 - WING_Z0, C.wingStone);
  for (let f = 0; f < 10; f++) {
    const y = f * 4.2 + 2.3;
    // side elevations (the only ones really visible from the plaza)
    box(0.16, 2.2, 3.3, -WING_X - 0.08, y, 27.4, C.glassDark);
    box(0.16, 2.2, 3.3, WING_X + 0.08, y, 27.4, C.glassDark);
    // rear elevation
    box(2 * WING_X - 1.4, 2.2, 0.16, 0, y, WING_Z1 + 0.08, C.glassDark);
    // front elevation (mostly hidden behind the tower)
    box(2 * WING_X - 1.4, 2.2, 0.16, 0, y, WING_Z0 - 0.08, C.glassDark);
  }
  boxAt(-WING_X - 0.4, WING_H, WING_Z0 - 0.6, 2 * WING_X + 0.8, 0.8, WING_Z1 - WING_Z0 + 0.8, C.roof);

  // =========================================================================
  // merge everything into a single non-indexed BufferGeometry
  // =========================================================================
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
