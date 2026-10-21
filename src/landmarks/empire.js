// Model low-poly (map New York) — bản nháp do DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// Empire State Building (New York, 1931) — low-poly Art Deco model.
// Units: metres. Origin at centre of the footprint, ground at y = 0.
// Main facade faces -Z. Everything is merged into one BufferGeometry with
// position / normal / color attributes (no textures, no external imports).

export function build(THREE) {
  const positions = [];
  const normals = [];
  const colors = [];

  // ------------------------------------------------------------------ palette
  const C = (r, g, b) => new THREE.Color(r, g, b);
  const COL = {
    stone: C(0.88, 0.84, 0.73),      // Indiana limestone, sunlit
    stoneWarm: C(0.78, 0.73, 0.60),  // limestone in shade / cornices
    stoneDark: C(0.55, 0.52, 0.45),  // granite plinth
    window: C(0.10, 0.13, 0.16),    // dark bronze window columns
    glass: C(0.20, 0.27, 0.33),      // shopfront glass
    alu: C(0.68, 0.72, 0.75),        // aluminium spandrels
    gold: C(0.80, 0.64, 0.29),       // brass entrance / accents
    roof: C(0.36, 0.39, 0.41),       // roof decks
    mast: C(0.62, 0.65, 0.67)        // mast / antenna steel
  };

  // ------------------------------------------------------------ merge helpers
  function push(geo, color) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const p = g.attributes.position;
    const n = g.attributes.normal;
    for (let i = 0; i < p.count; i++) {
      positions.push(p.getX(i), p.getY(i), p.getZ(i));
      normals.push(n.getX(i), n.getY(i), n.getZ(i));
      colors.push(color.r, color.g, color.b);
    }
    if (g !== geo) g.dispose();
    geo.dispose();
  }

  function box(w, h, d, x, y, z, color) {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    push(g, color);
  }

  function cyl(radiusTop, radiusBottom, h, segments, x, y, z, color) {
    const g = new THREE.CylinderGeometry(radiusTop, radiusBottom, h, segments);
    g.translate(x, y, z);
    push(g, color);
  }

  // A tier: dark window mass + light limestone piers on all four faces.
  // W / D are the OUTER envelope dimensions (pier faces included).
  function stripedTier(W, D, y0, y1, longCount, shortCount, depth, pierW,
                       bodyColor, pierColor) {
    const h = y1 - y0;
    const yc = (y0 + y1) * 0.5;
    const bodyW = W - 2 * depth;
    const bodyD = D - 2 * depth;

    box(bodyW, h, bodyD, 0, yc, 0, bodyColor);

    const spanX = W - 2 * pierW;
    for (let i = 0; i < longCount; i++) {
      const t = longCount === 1 ? 0.5 : i / (longCount - 1);
      const x = -spanX * 0.5 + t * spanX;
      box(pierW, h, depth, x, yc,  bodyD * 0.5 + depth * 0.5, pierColor);
      box(pierW, h, depth, x, yc, -bodyD * 0.5 - depth * 0.5, pierColor);
    }

    const spanZ = D - 2 * pierW;
    for (let i = 0; i < shortCount; i++) {
      const t = shortCount === 1 ? 0.5 : i / (shortCount - 1);
      const z = -spanZ * 0.5 + t * spanZ;
      box(depth, h, pierW,  bodyW * 0.5 + depth * 0.5, yc, z, pierColor);
      box(depth, h, pierW, -bodyW * 0.5 - depth * 0.5, yc, z, pierColor);
    }

    // four corner piers tie the faces together
    const cx = (W - pierW) * 0.5;
    const cz = (D - pierW) * 0.5;
    box(pierW, h, pierW,  cx, yc,  cz, pierColor);
    box(pierW, h, pierW, -cx, yc,  cz, pierColor);
    box(pierW, h, pierW,  cx, yc, -cz, pierColor);
    box(pierW, h, pierW, -cx, yc, -cz, pierColor);

    return { bodyW, bodyD };
  }

  // Thin aluminium spandrel lines running just behind the piers.
  function spandrels(bodyW, bodyD, y0, y1, levels, color) {
    for (let i = 0; i < levels; i++) {
      const y = y0 + (i + 0.55) * (y1 - y0) / levels;
      box(bodyW + 0.35, 0.30, 0.35, 0, y,  bodyD * 0.5 + 0.17, color);
      box(bodyW + 0.35, 0.30, 0.35, 0, y, -bodyD * 0.5 - 0.17, color);
      box(0.35, 0.30, bodyD + 0.35,  bodyW * 0.5 + 0.17, y, 0, color);
      box(0.35, 0.30, bodyD + 0.35, -bodyW * 0.5 - 0.17, y, 0, color);
    }
  }

  function cornice(W, D, y, t, color) {
    box(W, t, D, 0, y, 0, color);
  }

  // =====================================================================
  // 1. FIVE-FLOOR PODIUM — 129 x 57 m, 25 m tall
  // =====================================================================
  // granite plinth / ground floor
  box(129, 4, 57, 0, 2, 0, COL.stoneDark);

  // dark storefront glazing along the street faces
  for (let i = 0; i < 11; i++) {
    const x = -54 + i * 10.8;
    box(6.4, 2.6, 0.35, x, 2.1, -28.55, COL.glass);
    box(6.4, 2.6, 0.35, x, 2.1,  28.55, COL.glass);
  }
  for (let i = 0; i < 5; i++) {
    const z = -20 + i * 10;
    box(0.35, 2.6, 5.2, -64.55, 2.1, z, COL.glass);
    box(0.35, 2.6, 5.2,  64.55, 2.1, z, COL.glass);
  }

  // podium body with vertical limestone piers and dark window columns
  const p = stripedTier(129, 57, 4, 24.9, 21, 9, 0.7, 3.2,
                        COL.window, COL.stone);
  spandrels(p.bodyW, p.bodyD, 4, 24.9, 6, COL.alu);

  // main entrance on -Z: dark glass, brass frame and flat canopy
  box(17.4, 10.4, 0.4, 0, 9.1, -28.65, COL.glass);
  box(0.55, 10.8, 0.55, -8.8, 9.1, -28.85, COL.gold);
  box(0.55, 10.8, 0.55,  8.8, 9.1, -28.85, COL.gold);
  box(18.2, 0.6, 0.55, 0, 14.2, -28.85, COL.gold);
  box(0.32, 10.4, 0.4, -2.9, 9.1, -28.9, COL.gold);
  box(0.32, 10.4, 0.4,  2.9, 9.1, -28.9, COL.gold);
  box(18.2, 0.32, 0.4, 0, 11.2, -28.9, COL.gold);
  box(23, 0.8, 2.0, 0, 15.0, -29.2, COL.gold);
  box(0.6, 5.8, 0.6, -10.7, 12.1, -29.9, COL.gold);
  box(0.6, 5.8, 0.6,  10.7, 12.1, -29.9, COL.gold);

  // roof of the podium forms the first setback terrace
  cornice(129, 57, 24.6, 0.8, COL.stoneWarm);

  // =====================================================================
  // 2. LOWER BLOCK — 100 x 48 m, from 25 to 80 m
  // =====================================================================
  const b2 = stripedTier(100, 48, 25, 79.4, 17, 8, 0.6, 3.3,
                         COL.window, COL.stone);
  spandrels(b2.bodyW, b2.bodyD, 25, 79.4, 11, COL.alu);
  cornice(102, 50, 79.5, 1.2, COL.stoneWarm);

  // =====================================================================
  // 3. MAIN SHAFT — 56 x 40 m, from 80 to 260 m
  // =====================================================================
  const b3 = stripedTier(56, 40, 80, 259.4, 9, 7, 0.6, 3.5,
                         COL.window, COL.stone);
  spandrels(b3.bodyW, b3.bodyD, 80, 259.4, 22, COL.alu);
  cornice(58.5, 42.5, 259.7, 1.2, COL.stoneWarm);

  // =====================================================================
  // 4. SLENDER UPPER SHAFT — 49 x 36 m, from 260 to 320 m
  // =====================================================================
  const b4 = stripedTier(49, 36, 260, 319.4, 9, 7, 0.55, 3.0,
                         COL.window, COL.stone);
  spandrels(b4.bodyW, b4.bodyD, 260, 319.4, 9, COL.alu);

  // 86th-floor observation deck: projecting slab + railing
  box(53, 1.4, 40.5, 0, 320.3, 0, COL.stone);
  box(53.6, 0.75, 0.25, 0, 321.25,  20.3, COL.mast);
  box(53.6, 0.75, 0.25, 0, 321.25, -20.3, COL.mast);
  box(0.25, 0.75, 40.5,  26.6, 321.25, 0, COL.mast);
  box(0.25, 0.75, 40.5, -26.6, 321.25, 0, COL.mast);

  // =====================================================================
  // 5. STEPPED CROWN — 320 to 373 m
  // =====================================================================
  const c1 = stripedTier(44, 32, 321.0, 335.6, 9, 7, 0.5, 3.0,
                         COL.window, COL.stone);
  spandrels(c1.bodyW, c1.bodyD, 321.0, 335.6, 4, COL.alu);
  cornice(46, 34, 335.9, 0.7, COL.stoneWarm);

  const c2 = stripedTier(36, 26, 336.3, 350.1, 7, 5, 0.45, 2.8,
                         COL.window, COL.stone);
  spandrels(c2.bodyW, c2.bodyD, 336.3, 350.1, 4, COL.alu);
  cornice(38, 28, 350.3, 0.65, COL.stoneWarm);

  const c3 = stripedTier(28, 20, 350.6, 362.1, 6, 5, 0.45, 2.4,
                         COL.window, COL.stone);
  spandrels(c3.bodyW, c3.bodyD, 350.6, 362.1, 3, COL.alu);
  cornice(30, 22, 362.3, 0.6, COL.stoneWarm);

  const c4 = stripedTier(20, 14, 362.6, 369.1, 5, 4, 0.4, 1.9,
                         COL.window, COL.stone);
  cornice(22, 16, 369.3, 0.55, COL.stoneWarm);

  // solid pinnacle block with brass band
  box(12, 4, 9, 0, 371.5, 0, COL.stone);
  box(12.6, 0.5, 9.6, 0, 371.8, 0, COL.gold);

  // 102nd-floor observation deck ringing the base of the lantern
  box(14.5, 0.9, 11.5, 0, 373.0, 0, COL.stone);

  // octagonal lantern at the base of the mast
  cyl(3.0, 4.1, 4.0, 8, 0, 375.2, 0, COL.stone);
  cyl(4.25, 4.25, 0.45, 8, 0, 373.4, 0, COL.gold);

  // mast / antenna, total height 381 m
  cyl(0.32, 0.55, 4.0, 8, 0, 379.0, 0, COL.mast);

  // =====================================================================
  // final merged geometry
  // =====================================================================
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
