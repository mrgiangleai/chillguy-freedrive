// Model low-poly (map New York) — worker MiniMax / DeepSeek viết theo đề + script chấm (kích thước ±8 %), Claude soát ảnh dựng. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// ---------------------------------------------------------------------------
// model.js — low-poly Waldorf Astoria New York (301 Park Avenue, 1931)
// Art Deco hotel for a three.js driving game.
//
// Units: metres.  Origin = centre of the building footprint at ground level.
// +Y is up, the main facade (Park Avenue entrance) faces -Z.
//
// Returns a single merged BufferGeometry with position / normal / color
// attributes.  Built only from BoxGeometry, CylinderGeometry and
// OctahedronGeometry primitives; no external imports, no BufferGeometryUtils.
// ---------------------------------------------------------------------------

export function build(THREE) {
  const parts = [];

  const V3 = THREE.Vector3;
  const Q = THREE.Quaternion;
  const M4 = THREE.Matrix4;
  const UP = new V3(0, 1, 0);

  // ------------------------------------------------------------------ palette
  const STONE      = [0.820, 0.792, 0.716]; // pale limestone
  const STONE_WARM = [0.760, 0.720, 0.628]; // slightly warmer setback mass
  const STONE_PALE = [0.884, 0.860, 0.802]; // cornices / floor lines
  const GLASS      = [0.098, 0.128, 0.172]; // dark recessed window strips
  const GLASS_SOFT = [0.215, 0.235, 0.250]; // lighter glazing
  const BRONZE     = [0.430, 0.305, 0.125]; // window surrounds / spandrels
  const BRONZE_LT  = [0.575, 0.442, 0.196]; // bright bronze highlights
  const VERDIGRIS  = [0.245, 0.400, 0.325]; // bronze-green crown
  const GRANITE    = [0.225, 0.225, 0.235]; // dark granite base course
  const ROOFDECK   = [0.310, 0.300, 0.292]; // roof terrace
  const GOLD       = [0.690, 0.552, 0.232]; // crown finial / spire

  // --------------------------------------------------------------- primitives
  function add(geo, color, x, y, z, rotY) {
    const q = new Q();
    if (rotY) q.setFromAxisAngle(UP, rotY);
    const m = new M4().compose(new V3(x, y, z), q, new V3(1, 1, 1));
    parts.push({ geo, color, m });
  }
  const box = (w, h, d, x, y, z, c, ry) =>
    add(new THREE.BoxGeometry(w, h, d), c, x, y, z, ry);
  const cyl = (rt, rb, h, seg, x, y, z, c, ry) =>
    add(new THREE.CylinderGeometry(rt, rb, h, seg), c, x, y, z, ry);
  const octa = (r, x, y, z, c) =>
    add(new THREE.OctahedronGeometry(r), c, x, y, z);

  // ============================================================== PODIUM ======
  // 18-storey base filling the whole block: 200 m of Park Avenue frontage,
  // 60 m deep, ~60 m tall, with three ziggurat setbacks.

  const D = 60;   // podium depth along Z
  const HX = 100; // half width along X

  // dark granite base course
  box(200, 3.6, D, 0, 1.8, 0, GRANITE);

  const TIERS = [
    { w: 200, d: D,  y0: 3.6,  y1: 23.0, floors: 6, col: STONE },
    { w: 188, d: 54, y0: 23.0, y1: 42.0, floors: 6, col: STONE_WARM },
    { w: 174, d: 48, y0: 42.0, y1: 60.0, floors: 5, col: STONE },
  ];

  for (const t of TIERS) {
    const h = t.y1 - t.y0;
    box(t.w, h, t.d, 0, t.y0 + h / 2, 0, t.col);
    // bronze cornice / setback band
    box(t.w + 1.2, 1.4, t.d + 1.2, 0, t.y1 - 0.5, 0, BRONZE);
    // roof terrace slab set back from the cornice
    box(t.w - 2.4, 0.8, t.d - 2.4, 0, t.y1 + 0.4, 0, ROOFDECK);
  }

  // --- vertical dark window strips on every podium facade -------------------
  function podiumStrips(t, spacing, sw) {
    const y0 = t.y0 + 3.9;      // clear of the storefront band
    const y1 = t.y1 - 2.2;
    const h = y1 - y0;
    const cy = (y0 + y1) / 2;

    const n = Math.max(2, Math.floor((t.w - 14) / spacing));
    const x0 = -((n - 1) * spacing) / 2;
    for (let i = 0; i < n; i++) {
      const x = x0 + i * spacing;
      box(sw, h, 0.7, x, cy, -(t.d / 2) - 0.15, GLASS);      // Park Ave (-Z)
      box(sw, h, 0.7, x, cy, (t.d / 2) + 0.15, GLASS);       // rear (+Z)
    }
    const spX = spacing * 0.62;                              // denser on the end walls
    const m = Math.max(2, Math.floor((t.d - 12) / spX));
    const z0 = -((m - 1) * spX) / 2;
    for (let i = 0; i < m; i++) {
      const z = z0 + i * spX;
      box(0.7, h, sw * 0.88, -(t.w / 2) - 0.15, cy, z, GLASS);   // -X side
      box(0.7, h, sw * 0.88, (t.w / 2) + 0.15, cy, z, GLASS);    // +X side
    }
  }

  // --- thin horizontal floor lines (window rows) ---------------------------
  function floorLines(t) {
    const fh = (t.y1 - t.y0) / t.floors;
    for (let f = 1; f < t.floors; f++) {
      const y = t.y0 + f * fh;
      box(t.w - 1.0, 0.45, 0.6, 0, y, -(t.d / 2) - 0.2, STONE_PALE);
      box(t.w - 1.0, 0.45, 0.6, 0, y, (t.d / 2) + 0.2, STONE_PALE);
      box(0.6, 0.45, t.d - 1.0, -(t.w / 2) - 0.2, y, 0, STONE_PALE);
      box(0.6, 0.45, t.d - 1.0, (t.w / 2) + 0.2, y, 0, STONE_PALE);
    }
  }

  // --- two-storey storefront glazing at street level ------------------------
  function storefront(t) {
    const n = Math.max(4, Math.floor((t.w - 12) / 9.5));
    const x0 = -((n - 1) * 9.5) / 2;
    const y0 = t.y0 + 0.5;
    const h = 3.2;
    const cy = y0 + h / 2;
    for (let i = 0; i < n; i++) {
      const x = x0 + i * 9.5;
      box(6.4, h, 0.6, x, cy, -(t.d / 2) - 0.1, GLASS_SOFT);
      box(6.4, h, 0.6, x, cy, (t.d / 2) + 0.1, GLASS_SOFT);
    }
    const m = Math.max(2, Math.floor((t.d - 12) / 7.5));
    const z0 = -((m - 1) * 7.5) / 2;
    for (let i = 0; i < m; i++) {
      const z = z0 + i * 7.5;
      box(0.6, h, 5.0, -(t.w / 2) - 0.1, cy, z, GLASS_SOFT);
      box(0.6, h, 5.0, (t.w / 2) + 0.1, cy, z, GLASS_SOFT);
    }
    // continuous bronze sill
    box(t.w + 0.2, 0.7, 0.5, 0, y0 - 0.35, -(t.d / 2) - 0.2, BRONZE);
    box(t.w + 0.2, 0.7, 0.5, 0, y0 - 0.35, (t.d / 2) + 0.2, BRONZE);
  }

  TIERS.forEach((t, i) => {
    podiumStrips(t, i === 0 ? 10 : 9.5, i === 0 ? 5.2 : 4.6);
    floorLines(t);
  });
  storefront(TIERS[0]);

  // ============================================================== TOWERS ======
  // Twin slender towers rising from the middle of the block.

  const TCZ = 3;              // tower centre line in Z (slightly to the rear)
  const TOWERS = [-31, 31];
  const TT = [
    { w: 38, d: 32, y0: 60,  y1: 104 },
    { w: 34, d: 29, y0: 104, y1: 146 },
    { w: 30, d: 26, y0: 146, y1: 166 },
  ];

  function towerStrips(cx, t, spacing, sw) {
    const bot = t.y0 + 1.6;
    const top = t.y1 - 2.2;
    const gap = 1.5;
    let nSeg = Math.max(1, Math.round((top - bot) / 11));
    const segH = (top - bot - (nSeg - 1) * gap) / nSeg;

    const n = Math.max(2, Math.floor((t.w - 12) / spacing));
    const x0 = -((n - 1) * spacing) / 2;
    const m = Math.max(2, Math.floor((t.d - 12) / spacing));
    const z0 = -((m - 1) * spacing) / 2;

    for (let s = 0; s < nSeg; s++) {
      const cy = bot + s * (segH + gap) + segH / 2;
      for (let i = 0; i < n; i++) {
        const x = x0 + i * spacing;
        box(sw, segH, 0.6, cx + x, cy, TCZ - (t.d / 2) - 0.12, GLASS);
        box(sw, segH, 0.6, cx + x, cy, TCZ + (t.d / 2) + 0.12, GLASS);
      }
      for (let i = 0; i < m; i++) {
        const z = z0 + i * spacing;
        box(0.6, segH, sw, cx - (t.w / 2) - 0.12, cy, TCZ + z, GLASS);
        box(0.6, segH, sw, cx + (t.w / 2) + 0.12, cy, TCZ + z, GLASS);
      }
    }
  }

  for (const cx of TOWERS) {
    for (let i = 0; i < TT.length; i++) {
      const t = TT[i];
      const h = t.y1 - t.y0;
      box(t.w, h, t.d, cx, t.y0 + h / 2, TCZ, STONE);

      // corner piers (Art Deco buttresses)
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          box(2.2, h, 2.2, cx + sx * (t.w / 2 - 0.4), t.y0 + h / 2,
              TCZ + sz * (t.d / 2 - 0.4), STONE_PALE);
        }
      }
      // bronze setback band on top of each stage
      box(t.w + 1.0, 1.2, t.d + 1.0, cx, t.y1 - 0.4, TCZ, BRONZE);

      towerStrips(cx, t, 7.0, 4.0);
    }

    // ---- crown: octagonal bronze-green drum, lantern and short spire -------
    const capY = TT[TT.length - 1].y1;                       // 166
    cyl(15.6, 15.6, 1.4, 8, cx, capY + 0.7, TCZ, BRONZE, Math.PI / 8);
    cyl(12.5, 15.0, 8.0, 8, cx, capY + 5.4, TCZ, VERDIGRIS, Math.PI / 8);
    cyl(12.8, 12.8, 0.9, 8, cx, capY + 9.8, TCZ, BRONZE_LT, Math.PI / 8);
    cyl(9.0, 12.5, 3.4, 8, cx, capY + 12.4, TCZ, VERDIGRIS, Math.PI / 8);
    cyl(9.3, 9.3, 0.8, 8, cx, capY + 14.5, TCZ, GOLD, Math.PI / 8);
    cyl(0.35, 9.0, 9.2, 8, cx, capY + 18.7, TCZ, GOLD, Math.PI / 8);
    octa(1.7, cx, capY + 23.3, TCZ, BRONZE_LT);

    // lit windows around the octagonal drum
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 4;
      const r = 13.7;
      box(2.3, 5.0, 0.7, cx + Math.sin(a) * r, capY + 5.4,
          TCZ + Math.cos(a) * r, GLASS_SOFT, a);
    }
  }

  // ================================================= CORNER PAVILIONS ========
  // Four small lantern towers punctuating the podium roof.
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const px = sx * 74;
      const pz = sz * 17;
      box(13, 11.5, 13, px, 60 + 5.75, pz, STONE_WARM);
      box(14.2, 1.1, 14.2, px, 60 + 11.9, pz, BRONZE);
      box(2.6, 6.4, 2.6, px - 3.4, 60 + 3.2, pz + 3.4, GLASS);
      box(2.6, 6.4, 2.6, px + 3.4, 60 + 3.2, pz - 3.4, GLASS);
      cyl(7.0, 5.2, 3.6, 8, px, 60 + 14.3, pz, VERDIGRIS, Math.PI / 8);
      cyl(3.0, 3.0, 1.4, 8, px, 60 + 16.8, pz, BRONZE, Math.PI / 8);
      octa(1.4, px, 60 + 18.6, pz, BRONZE_LT);
    }
  }

  // ============================================ CENTRAL FRONT PAVILION =========
  // Stepped Art Deco crown over the main entrance axis.
  box(40, 8, 8, 0, 64, -20, STONE);
  box(41.2, 1.2, 9.0, 0, 68.6, -20, BRONZE);
  box(30, 2.6, 6.2, 0, 70.5, -20.6, STONE_PALE);
  box(31.2, 0.9, 6.8, 0, 72.2, -20.6, BRONZE_LT);
  box(17, 2.2, 4.2, 0, 73.8, -21.0, STONE);
  box(18.0, 0.8, 4.8, 0, 75.3, -21.0, GOLD);
  octa(1.3, 0, 77.0, -21.0, BRONZE_LT);

  // rooftop plant on the podium roof
  box(9, 3.2, 7, -2, 61.6, 6, ROOFDECK);
  box(6, 2.0, 5, 8, 61.0, -2, ROOFDECK);
  box(3.0, 5.0, 3.0, -8, 62.5, 8, STONE_WARM);

  // ================================================ ENTRANCE CANOPY ==========
  // Main facade (-Z): stone surround, bronze-and-glass canopy on columns.
  box(17, 6.4, 0.6, 0, 3.4, -30.05, STONE_PALE);
  box(14.5, 5.6, 0.8, 0, 3.1, -30.35, GLASS);
  box(0.7, 5.6, 0.9, 0, 3.1, -30.35, BRONZE);

  box(30.0, 1.0, 3.4, 0, 7.3, -31.7, STONE_PALE);
  box(28.6, 0.6, 3.2, 0, 6.6, -31.6, BRONZE);
  box(30.6, 0.7, 0.5, 0, 7.8, -33.1, BRONZE_LT);
  for (let i = 0; i < 6; i++) {
    const cx = -12.5 + i * 5;
    cyl(0.32, 0.32, 6.2, 8, cx, 3.6, -32.6, BRONZE);
  }
  // bronze pilasters flanking the entrance
  box(1.0, 18.0, 0.9, -20.5, 13.0, -30.3, BRONZE);
  box(1.0, 18.0, 0.9, 20.5, 13.0, -30.3, BRONZE);

  // ============================================================== MERGE =======
  let total = 0;
  const flat = [];
  for (const p of parts) {
    let g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
    g.applyMatrix4(p.m);
    flat.push(g);
    total += g.attributes.position.count;
    p.geo.dispose();
  }

  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const col = new Float32Array(total * 3);

  let off = 0;
  for (let i = 0; i < flat.length; i++) {
    const g = flat[i];
    const c = parts[i].color;
    const P = g.attributes.position.array;
    const N = g.attributes.normal.array;
    const cnt = g.attributes.position.count;
    for (let v = 0; v < cnt; v++) {
      const o = (off + v) * 3;
      pos[o] = P[v * 3];
      pos[o + 1] = P[v * 3 + 1];
      pos[o + 2] = P[v * 3 + 2];
      nor[o] = N[v * 3];
      nor[o + 1] = N[v * 3 + 1];
      nor[o + 2] = N[v * 3 + 2];
      col[o] = c[0];
      col[o + 1] = c[1];
      col[o + 2] = c[2];
    }
    off += cnt;
    g.dispose();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
