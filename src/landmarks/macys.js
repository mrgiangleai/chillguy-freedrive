// Model low-poly (map New York) — worker MiniMax / DeepSeek viết theo đề + script chấm (kích thước ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// Macy's Herald Square — low-poly block for a three.js driving game.
// Units: metres. Origin = centre of the footprint at ground level. Main facade faces -Z.

export function build(THREE) {
  const pos = [];
  const nor = [];
  const col = [];

  const color = new THREE.Color();
  const m4 = new THREE.Matrix4();
  const quat = new THREE.Quaternion();
  const eul = new THREE.Euler();
  const tr = new THREE.Vector3();
  const sc = new THREE.Vector3();

  const BOX = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const CYL = new THREE.CylinderGeometry(1, 1, 1, 12, 1, false).toNonIndexed();

  function emit(geo, matrix, hex) {
    const g = geo.clone().applyMatrix4(matrix);
    const p = g.attributes.position.array;
    const n = g.attributes.normal.array;
    color.setHex(hex);
    const r = color.r, gg = color.g, b = color.b;
    for (let i = 0; i < p.length; i += 3) {
      pos.push(p[i], p[i + 1], p[i + 2]);
      nor.push(n[i], n[i + 1], n[i + 2]);
      col.push(r, gg, b);
    }
    g.dispose();
    return g;
  }

  function box(w, h, d, x, y, z, hex, rx, ry, rz) {
    m4.compose(
      tr.set(x, y, z),
      quat.setFromEuler(eul.set(rx || 0, ry || 0, rz || 0, 'XYZ')),
      sc.set(w, h, d)
    );
    emit(BOX, m4, hex);
  }

  function cyl(r, h, x, y, z, hex, rx, ry, rz) {
    m4.compose(
      tr.set(x, y, z),
      quat.setFromEuler(eul.set(rx || 0, ry || 0, rz || 0, 'XYZ')),
      sc.set(r, h, r)
    );
    emit(CYL, m4, hex);
  }

  // ---------------------------------------------------------------- palette
  const STONE      = 0xd5c5a3; // main limestone body
  const STONE_WARM = 0xbfa47c; // podium / warm brown stone
  const STONE_DEEP = 0xa58c66; // plinth
  const STONE_LITE = 0xf0e7d3; // cornice, trim, string courses
  const GLASS      = 0x2b3742; // windows
  const GLASS_LITE = 0x4a5a64; // shopfront glazing
  const RED        = 0x9c1c26; // sign band / awnings
  const RED_DARK   = 0x7a131b;
  const WHITE      = 0xf7f3e9; // star, awning stripes
  const ROOF       = 0x514d47;
  const GOLD       = 0xc2a04a;

  // ---------------------------------------------------------------- podium
  // footprint 140 x 110, ground floor is taller than the floors above
  box(140, 1.5, 110, 0, 0.75, 0, STONE_DEEP);        // plinth
  box(139.2, 7.0, 109.2, 0, 5.0, 0, STONE_WARM);     // storefront wall (1.5 - 8.5)

  // ground-floor shopfront glazing, main facade
  for (let i = 0; i < 18; i++) {
    const x = -56.1 + i * 6.6;
    if (Math.abs(x) < 13) continue;                   // leave room for the entrance
    box(5.2, 4.4, 0.5, x, 3.9, -54.82, GLASS_LITE);
    box(5.2, 0.35, 0.6, x, 6.2, -54.85, STONE_LITE);  // lintel
  }
  // ground-floor shopfront glazing, side facades
  for (let i = 0; i < 12; i++) {
    const z = -40.5 + i * 7.36;
    for (const s of [-1, 1]) {
      box(0.5, 4.4, 5.4, s * 69.82, 3.9, z, GLASS_LITE);
      box(0.6, 0.35, 5.4, s * 69.85, 6.2, z, STONE_LITE);
    }
  }

  // main entrance: recessed glazing, gold mullions, stone header
  box(23, 6.6, 0.45, 0, 3.3, -54.85, GLASS);
  for (const x of [-6.9, 0, 6.9]) box(4.6, 5.6, 0.28, x, 2.95, -55.0, GLASS_LITE);
  for (const x of [-3.5, 3.5]) box(0.32, 6.1, 0.36, x, 3.1, -55.02, GOLD);
  box(24.2, 1.3, 1.3, 0, 7.3, -54.9, STONE_LITE);

  // entrance marquee: red canopy with a white edge, on slim gold tie rods
  box(25, 0.35, 3.6, 0, 7.55, -55.9, RED);
  box(25, 0.55, 0.22, 0, 7.35, -57.6, WHITE);
  for (const x of [-11.5, 11.5]) {
    box(0.2, 0.9, 0.2, x, 7.0, -57.4, GOLD);
  }

  // ---------------------------------------------------------------- body
  box(137.6, 42.0, 107.6, 0, 29.5, 0, STONE);        // 8.5 - 50.5

  // corner pavilions give the block its strong vertical corners
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(8.6, 42.0, 9.2, sx * 65.6, 29.5, sz * 50.3, STONE);
      box(8.9, 1.0, 9.5, sx * 65.6, 8.9, sz * 50.3, STONE_LITE);
    }
  }

  const ROWS = [11.5, 16.1, 20.7, 25.3, 29.9, 34.5, 39.1, 43.7, 48.3];

  // window rows, main facade (-Z)
  for (let r = 0; r < ROWS.length; r++) {
    const y = ROWS[r];
    for (let i = 0; i < 21; i++) {
      const x = -58 + i * 5.8;
      if (r === 0 && Math.abs(x) < 34) continue;      // hidden behind the sign band
      box(2.7, 3.3, 0.6, x, y, -53.95, GLASS);
      box(3.0, 0.22, 0.75, x, y - 1.78, -53.98, STONE_LITE); // sill
    }
  }

  // window rows, side facades (+/-X)
  for (let r = 0; r < ROWS.length; r++) {
    const y = ROWS[r];
    for (let i = 0; i < 15; i++) {
      const z = -44 + i * 6.286;
      for (const s of [-1, 1]) {
        box(0.6, 3.3, 2.7, s * 68.95, y, z, GLASS);
      }
    }
  }

  // back facade (+Z): cheap colour bands
  for (let r = 0; r < ROWS.length; r++) {
    box(128, 2.9, 0.5, 0, ROWS[r], 53.95, GLASS);
  }

  // vertical pilaster strips between the bays
  for (let i = 0; i < 20; i++) {
    const x = -58 + 5.8 * (i + 0.5);
    box(1.15, 41.6, 0.2, x, 29.8, -53.88, STONE_WARM);
  }
  for (let i = 0; i < 14; i++) {
    const z = -44 + 6.286 * (i + 0.5);
    for (const s of [-1, 1]) box(0.2, 41.6, 1.15, s * 68.88, 29.8, z, STONE_WARM);
  }

  // horizontal string courses on each floor line
  for (let r = 0; r < ROWS.length; r++) {
    const y = ROWS[r] - 2.15;
    box(137.9, 0.3, 0.3, 0, y, -53.9, STONE_LITE);
    box(0.3, 0.3, 107.9, -68.9, y, 0, STONE_LITE);
    box(0.3, 0.3, 107.9, 68.9, y, 0, STONE_LITE);
  }

  // ---------------------------------------------------------------- awnings
  // red & white awnings over the shopfronts on the main facade
  for (let i = 0; i < 18; i++) {
    const x = -56.1 + i * 6.6;
    if (Math.abs(x) < 13) continue;
    box(6.0, 0.22, 2.6, x, 6.85, -55.9, RED, -0.30, 0, 0);
    // white stripes laid on top of the red canvas
    for (const dx of [-1.55, 1.55]) {
      box(0.95, 0.12, 2.6, x + dx, 6.99, -55.94, WHITE, -0.30, 0, 0);
    }
    // valance along the outer edge
    box(6.0, 0.55, 0.16, x, 6.2, -57.05, WHITE, -0.30, 0, 0);
  }

  // ---------------------------------------------------------------- sign band
  box(66, 4.8, 0.8, 0, 11.9, -54.2, RED);            // big red band above the entrance
  box(66, 0.3, 0.34, 0, 14.45, -54.62, WHITE);       // white frame
  box(66, 0.3, 0.34, 0, 9.35, -54.62, WHITE);
  box(0.3, 5.1, 0.34, -33.0, 11.9, -54.62, WHITE);
  box(0.3, 5.1, 0.34, 33.0, 11.9, -54.62, WHITE);
  // slightly darker inner panel so the band reads as a sign, not a wall
  box(63.4, 4.2, 0.2, 0, 11.9, -54.66, RED_DARK);

  // white five-point star, extruded
  {
    const shape = new THREE.Shape();
    const outer = 2.15, inner = 0.9;
    for (let i = 0; i < 10; i++) {
      const a = Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 === 0 ? outer : inner;
      const px = Math.cos(a) * r, py = Math.sin(a) * r;
      if (i === 0) shape.moveTo(px, py);
      else shape.lineTo(px, py);
    }
    shape.closePath();
    let star = new THREE.ExtrudeGeometry(shape, {
      depth: 0.35, bevelEnabled: false, curveSegments: 1
    });
    if (star.index) { const s2 = star.toNonIndexed(); star.dispose(); star = s2; }
    m4.compose(tr.set(0, 11.9, -54.95), quat.identity(), sc.set(1, 1, 1));
    emit(star, m4, WHITE);
    star.dispose();
  }

  // ---------------------------------------------------------------- cornice
  box(139.6, 1.7, 109.6, 0, 51.35, 0, STONE_LITE);   // main cornice 50.5 - 52.2
  box(139.0, 1.2, 109.0, 0, 52.80, 0, STONE_WARM);   // frieze
  box(140.0, 0.8, 110.0, 0, 53.80, 0, STONE_LITE);   // projecting lip
  box(137.0, 1.0, 107.0, 0, 54.70, 0, STONE_WARM);   // parapet
  box(136.0, 0.6, 106.0, 0, 54.50, 0, ROOF);         // roof slab

  // ---------------------------------------------------------------- roof
  box(46, 4.5, 24, 0, 57.15, 0, STONE);              // rooftop mass 54.9 - 59.4
  box(46.5, 1.7, 24.5, 0, 57.1, 0, GLASS);           // its window band
  box(48, 0.6, 26, 0, 59.70, 0, STONE_LITE);         // cap -> top of the building at y = 60
  for (const s of [-1, 1]) {
    box(20, 3.0, 16, s * 33, 56.40, 5, STONE_WARM);  // lower roof blocks
    box(10, 2.4, 8, s * 40, 55.80, -22, ROOF);       // plant / HVAC
  }
  // rooftop flagpoles standing on the roof slab (top out at y = 60)
  for (const s of [-1, 1]) {
    cyl(0.16, 5.2, s * 48, 57.4, -30, GOLD, 0, 0, 0);
    box(0.1, 1.3, 2.0, s * 48.9, 58.9, -29.0, WHITE);
    box(0.1, 0.45, 2.0, s * 48.9, 58.45, -29.0, RED);
  }

  // ---------------------------------------------------------------- merge
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return { geometry };
}
