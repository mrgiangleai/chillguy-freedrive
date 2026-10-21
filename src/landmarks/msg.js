// Model low-poly (map New York) — worker MiniMax / DeepSeek viết theo đề + script chấm (kích thước ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// ---------------------------------------------------------------------------
// Madison Square Garden (New York) — low-poly arena for a three.js driving game
//
// Units: metres.  Origin (0,0,0) = centre of the building footprint at ground
// level, +Y up, the main facade (entrance pavilion + LED marquee) faces -Z.
//
// Built from plain primitives and merged into ONE BufferGeometry that carries
// `position`, `normal` and `color` (vertex colours, RGB 0..1).
// Nothing is imported: THREE is handed in by the caller.
// ---------------------------------------------------------------------------

export function build(THREE) {
  const POS = [];
  const NOR = [];
  const COL = [];

  // ---------------------------------------------------------------- palette
  const C = {
    podium: [0.44, 0.43, 0.41], // site plinth / plaza concrete
    plinth: [0.30, 0.30, 0.30], // dark shadow collar at the drum foot
    wall: [0.57, 0.55, 0.49], // recessed precast wall between the fins
    fin: [0.83, 0.81, 0.74], // light precast vertical fins
    glass: [0.08, 0.11, 0.16], // dark glazing band
    glassF: [0.17, 0.31, 0.37], // front curtain wall glazing
    roof: [0.52, 0.52, 0.49], // roof deck
    rim: [0.21, 0.22, 0.24], // parapet / roof plant
    led: [0.04, 0.05, 0.07], // marquee LED screen
    gold: [0.88, 0.70, 0.26], // marquee lettering + trim
    red: [0.71, 0.14, 0.12], // accent banners
    dark: [0.16, 0.16, 0.18], // street furniture
    green: [0.17, 0.31, 0.20], // planters
    stone: [0.70, 0.68, 0.62], // pavilion cladding
    step: [0.74, 0.73, 0.70], // entrance steps
  };

  // --------------------------------------------------------- merge helpers
  function compose(px, py, pz, rx, ry, rz, sx, sy, sz) {
    const q = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(rx || 0, ry || 0, rz || 0)
    );
    const p = new THREE.Vector3(px, py, pz);
    const s = new THREE.Vector3(
      sx === undefined ? 1 : sx,
      sy === undefined ? 1 : sy,
      sz === undefined ? 1 : sz
    );
    return new THREE.Matrix4().compose(p, q, s);
  }

  /** Append one primitive (already positioned) into the big attribute soup. */
  function add(geo, color, matrix) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (matrix) g.applyMatrix4(matrix);
    const p = g.attributes.position.array;
    const n = g.attributes.normal.array;
    for (let i = 0; i < p.length; i += 3) {
      POS.push(p[i], p[i + 1], p[i + 2]);
      NOR.push(n[i], n[i + 1], n[i + 2]);
      COL.push(color[0], color[1], color[2]);
    }
    g.dispose();
  }

  function box(w, h, d, px, py, pz, color, ry) {
    add(
      new THREE.BoxGeometry(w, h, d),
      color,
      compose(px, py, pz, 0, ry || 0, 0)
    );
  }

  function cyl(rt, rb, h, seg, px, py, pz, color, open) {
    add(
      new THREE.CylinderGeometry(rt, rb, h, seg, 1, !!open),
      color,
      compose(px, py, pz, 0, 0, 0)
    );
  }

  // =======================================================================
  // 1. SITE PLINTH  — chamfered 150 x 150 m podium the whole arena stands on
  // =======================================================================
  {
    const shape = new THREE.Shape();
    const pts = [
      [75, -47], [47, -75], [-47, -75], [-75, -47],
      [-75, 47], [-47, 75], [47, 75], [75, 47],
    ];
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 4,
      bevelEnabled: false,
      curveSegments: 1,
    });
    // shape (x,y) extruded along +z  ->  rotate so the extrusion runs up +Y
    add(geo, C.podium, compose(0, 0, 0, -Math.PI / 2, 0, 0));
  }

  // =======================================================================
  // 2. THE DRUM  — cylindrical arena, centre (0, 5), radius 63 m
  // =======================================================================
  const DRUM_Z = 5.0;
  const R = 63.0;

  // dark shadow collar / foot of the drum
  cyl(67.0, 67.4, 2.2, 48, 0, 5.1, DRUM_Z, C.plinth);
  cyl(66.4, 66.4, 0.5, 48, 0, 6.4, DRUM_Z, C.wall);

  // main precast wall (recessed behind the fins), 6 m -> 41 m
  cyl(R, R, 35, 48, 0, 23.5, DRUM_Z, C.wall, true);

  // dark glazed lobby band behind the fins, 6 m -> 12 m
  cyl(R + 0.08, R + 0.08, 6, 48, 0, 9.0, DRUM_Z, C.glass, true);

  // ---- vertical precast fins (the signature of the facade) --------------
  const FINS = 84;
  const finW = 1.7;
  const finD = 1.35;
  for (let i = 0; i < FINS; i++) {
    const a = (i / FINS) * Math.PI * 2;
    const rr = R + 0.25;
    add(
      new THREE.BoxGeometry(finW, 35, finD),
      C.fin,
      compose(
        rr * Math.cos(a),
        23.5,
        DRUM_Z + rr * Math.sin(a),
        0,
        Math.PI / 2 - a,
        0
      )
    );
  }

  // ---- upper dark glass band, 41 m -> 47 m ------------------------------
  cyl(R + 0.35, R + 0.35, 6, 48, 0, 44.0, DRUM_Z, C.glass, true);

  // trim rings top and bottom of the glass band
  cyl(R + 1.0, R + 1.0, 0.5, 48, 0, 41.2, DRUM_Z, C.rim);
  cyl(R + 1.0, R + 1.0, 0.5, 48, 0, 46.8, DRUM_Z, C.rim);

  // =======================================================================
  // 3. ROOF  — flat deck + slight dome cap, top of the model at y = 50 m
  // =======================================================================
  cyl(66.5, 66.5, 1.2, 48, 0, 47.4, DRUM_Z, C.roof);

  // rounded parapet rim
  add(
    new THREE.TorusGeometry(66.5, 0.45, 3, 48),
    C.rim,
    compose(0, 48.35, DRUM_Z, Math.PI / 2, 0, 0)
  );

  // shallow dome cap
  {
    const profile = [
      [0, 50.0], [13, 49.92], [26, 49.62], [38, 49.18],
      [47, 48.7], [52, 48.24], [54, 48.0],
    ].map((p) => new THREE.Vector2(p[0], p[1]));
    add(
      new THREE.LatheGeometry(profile, 48),
      C.roof,
      compose(0, 0, DRUM_Z, 0, 0, 0)
    );
  }

  // roof plant / vents on the deck ring outside the dome
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.3;
    const rr = 58.5;
    box(
      3.6, 1.5, 3.6,
      rr * Math.cos(a), 48.75, DRUM_Z + rr * Math.sin(a),
      C.rim, -a
    );
  }

  // slim crown posts around the roof edge (silhouette detail)
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.12;
    const rr = 63.0;
    box(
      0.55, 2.0, 0.55,
      rr * Math.cos(a), 49.0, DRUM_Z + rr * Math.sin(a),
      C.dark, -a
    );
  }

  // =======================================================================
  // 4. ENTRANCE PAVILION  — glazed hall + big LED marquee on the -Z side
  // =======================================================================
  // main stone volume of the pavilion (merges into the drum)
  box(56, 21, 20, 0, 14.5, -60, C.stone);

  // flat roof / cornice of the pavilion
  box(57, 0.7, 20.4, 0, 25.35, -59.8, C.rim);

  // glazed curtain wall facing -Z
  box(52, 14, 0.7, 0, 11.0, -70.35, C.glassF);

  // vertical mullions on the curtain wall
  for (let i = 0; i < 9; i++) {
    box(0.42, 14, 0.42, -24 + i * 6, 11.0, -70.85, C.dark);
  }

  // marquee housing
  box(62, 7.5, 4.0, 0, 21.75, -72.0, C.plinth);
  box(63, 0.7, 4.2, 0, 25.8, -71.9, C.rim);

  // dark LED screen
  box(57, 5.8, 0.35, 0, 21.5, -74.15, C.led);

  // gold frame around the LED screen
  box(58, 0.5, 0.55, 0, 24.65, -74.15, C.gold);
  box(58, 0.5, 0.55, 0, 18.35, -74.15, C.gold);
  box(0.5, 5.8, 0.55, -28.75, 21.5, -74.15, C.gold);
  box(0.5, 5.8, 0.55, 28.75, 21.5, -74.15, C.gold);

  // block "letters" of the garden name on the marquee
  for (let i = 0; i < 9; i++) {
    box(3.2, 3.6, 0.28, -24 + i * 6, 21.5, -74.48, C.gold);
  }

  // two red accent panels flanking the marquee
  box(2.2, 6.2, 0.3, -32.2, 21.5, -73.6, C.red);
  box(2.2, 6.2, 0.3, 32.2, 21.5, -73.6, C.red);

  // entrance steps up to the podium level
  box(40, 0.25, 1.5, 0, 4.125, -73.95, C.step);
  box(40, 0.5, 1.5, 0, 4.25, -72.45, C.step);
  box(40, 0.75, 1.5, 0, 4.375, -70.95, C.step);

  // side stair walls
  box(1.0, 1.0, 4.8, -20.5, 4.5, -72.4, C.stone);
  box(1.0, 1.0, 4.8, 20.5, 4.5, -72.4, C.stone);

  // =======================================================================
  // 5. STREET LEVEL FURNITURE around the drum
  // =======================================================================
  const lampAngles = [0.1, 0.6, 1.05, 1.6, 2.15, 2.7, 3.3, 3.85, 4.4, 5.2, 5.75];
  for (let i = 0; i < lampAngles.length; i++) {
    const a = lampAngles[i];
    const rr = 68.0;
    const x = rr * Math.cos(a);
    const z = DRUM_Z + rr * Math.sin(a);
    cyl(0.22, 0.3, 6.4, 6, x, 7.2, z, C.dark, true);
    box(1.0, 0.4, 0.55, x, 10.5, z, C.dark, -a);
  }

  // planters / shrubs
  const planterAngles = [0.05, 0.65, 2.55, 3.15, 3.85, 5.65];
  for (let i = 0; i < planterAngles.length; i++) {
    const a = planterAngles[i];
    const rr = 70.0;
    const x = rr * Math.cos(a);
    const z = DRUM_Z + rr * Math.sin(a);
    box(3.2, 1.1, 3.2, x, 4.55, z, C.stone, -a);
    box(2.8, 0.9, 2.8, x, 5.4, z, C.green, -a);
  }

  // banner masts near the entrance
  const bannerAngles = [3.95, 4.35, 5.1, 5.5];
  for (let i = 0; i < bannerAngles.length; i++) {
    const a = bannerAngles[i];
    const rr = 66.0;
    const x = rr * Math.cos(a);
    const z = DRUM_Z + rr * Math.sin(a);
    cyl(0.18, 0.22, 9.0, 6, x, 8.5, z, C.dark, true);
    box(1.6, 4.2, 0.2, x, 11.0, z, C.red, -a);
  }

  // =======================================================================
  // 6. ASSEMBLE
  // =======================================================================
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(NOR, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
