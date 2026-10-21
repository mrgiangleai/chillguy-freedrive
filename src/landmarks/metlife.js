// Model low-poly (map New York) — bản nháp do DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// MetLife Building, New York (1963) — low-poly slab for a three.js driving game.
// Units: metres. Origin = centre of footprint at ground level. Main facade faces -Z.
// Footprint: elongated octagon 90 m (X) x 50 m (Z). Height 246 m.
export function build(THREE) {
  const positions = [];
  const normals = [];
  const colors = [];

  // ---- deterministic tiny jitter so concrete panels don't look flat ----
  let seed = 20261021;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  // ---- merge helper: bake a geometry + matrix into the single buffer ----
  function push(geo, matrix, rgb, jitter = 0) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (matrix) g.applyMatrix4(matrix);
    if (!g.attributes.normal) g.computeVertexNormals();
    const p = g.attributes.position.array;
    const n = g.attributes.normal.array;
    const j = jitter ? (rnd() - 0.5) * 2 * jitter : 0;
    const r = Math.min(1, Math.max(0, rgb[0] + j));
    const gg = Math.min(1, Math.max(0, rgb[1] + j));
    const b = Math.min(1, Math.max(0, rgb[2] + j));
    for (let i = 0; i < p.length; i += 3) {
      positions.push(p[i], p[i + 1], p[i + 2]);
      normals.push(n[i], n[i + 1], n[i + 2]);
      colors.push(r, gg, b);
    }
    g.dispose();
  }

  // ---- palette ----
  const CONCRETE  = [0.815, 0.800, 0.762]; // precast fins / trim
  const CONCRETE2 = [0.705, 0.690, 0.658]; // darker piers / cornice shadow
  const CONCRETE3 = [0.585, 0.575, 0.552]; // plinth stone
  const GLASS     = [0.095, 0.115, 0.140]; // dark window glass
  const GLASS2    = [0.125, 0.150, 0.180]; // slightly lighter glass band
  const CHARCOAL  = [0.185, 0.190, 0.200]; // mechanical floors
  const OFFWHITE  = [0.905, 0.892, 0.855]; // METLIFE sign band
  const ROOF      = [0.300, 0.302, 0.312];
  const LOUVER    = [0.460, 0.462, 0.470];
  const DARKDOOR  = [0.055, 0.065, 0.080];

  // ---- footprint: elongated octagon, 90 x 50, chamfered corners ----
  const FOOT = [
    [-45, -17], [-45, 17], [-33, 25], [33, 25],
    [45, 17], [45, -17], [33, -25], [-33, -25],
  ];

  // vertical prism from an octagon (ExtrudeGeometry, rotated upright)
  function prism(sx, sz, y0, y1, rgb, jitter = 0.012) {
    const shape = new THREE.Shape();
    for (let i = 0; i < FOOT.length; i++) {
      const x = FOOT[i][0] * sx;
      const z = FOOT[i][1] * sz;
      // shape lives in (x, -z); -PI/2 X-rotation maps extrusion depth to +Y
      if (i === 0) shape.moveTo(x, -z);
      else shape.lineTo(x, -z);
    }
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, {
      depth: y1 - y0, bevelEnabled: false, steps: 1,
    });
    g.rotateX(-Math.PI / 2);
    g.translate(0, y0, 0);
    push(g, null, rgb, jitter);
    g.dispose();
  }

  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  const _q = new THREE.Quaternion();
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3();
  const _axisY = new THREE.Vector3(0, 1, 0);

  function addBox(cx, cy, cz, sx, sy, sz, rgb, rotY = 0, jitter = 0.015) {
    _q.setFromAxisAngle(_axisY, rotY);
    const m = new THREE.Matrix4().compose(_v.set(cx, cy, cz), _q, _s.set(sx, sy, sz));
    push(unitBox, m, rgb, jitter);
  }

  // ring of vertical fins / piers hugging the octagon faces
  function finRing(counts, y0, y1, width, depth, rgb, jitter = 0.02) {
    const cy = (y0 + y1) / 2;
    const h = y1 - y0;
    for (let e = 0; e < FOOT.length; e++) {
      const a = FOOT[e];
      const b = FOOT[(e + 1) % FOOT.length];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const len = Math.hypot(dx, dz);
      let nx = dz / len;
      let nz = -dx / len;
      const mx = (a[0] + b[0]) / 2;
      const mz = (a[1] + b[1]) / 2;
      if (nx * mx + nz * mz < 0) { nx = -nx; nz = -nz; }
      const tx = dx / len;
      const tz = dz / len;
      const n = counts[e];
      for (let i = 0; i < n; i++) {
        const t = ((i + 0.5) / n) * len;
        const px = a[0] + tx * t;
        const pz = a[1] + tz * t;
        addBox(px - nx * depth * 0.5, cy, pz - nz * depth * 0.5,
               width, h, depth, rgb, Math.atan2(nx, nz), jitter);
      }
    }
  }

  // =====================================================================
  // 1. TEN-STOREY BASE (0 - 40 m), full octagon footprint
  // =====================================================================
  prism(0.995, 0.995, 0.0, 1.7, CONCRETE3);          // granite plinth
  prism(0.988, 0.988, 1.7, 39.6, GLASS2, 0.006);      // glazed base body
  finRing([6, 2, 10, 2, 6, 2, 10, 2], 0.0, 39.6, 2.3, 1.5, CONCRETE2); // piers
  prism(0.994, 0.994, 13.2, 14.1, CONCRETE2);         // spandrel band
  prism(0.994, 0.994, 26.2, 27.1, CONCRETE2);         // spandrel band

  // street level entrance on the -Z facade: dark recess + flat canopy
  addBox(0, 6.2, -24.5, 26, 12.4, 0.95, DARKDOOR, 0, 0.004);
  addBox(0, 12.8, -24.15, 30, 0.55, 1.7, CONCRETE, 0, 0.01);
  for (let i = -2; i <= 2; i++) {
    addBox(i * 6.2, 6.2, -24.35, 0.55, 12.4, 0.7, CONCRETE2, 0, 0.008);
  }
  addBox(-13.2, 4.0, -24.5, 0.9, 8.0, 1.0, CONCRETE2);
  addBox(13.2, 4.0, -24.5, 0.9, 8.0, 1.0, CONCRETE2);
  // secondary glazed bays on the long facades
  addBox(0, 8.0, 24.55, 26, 14, 0.9, DARKDOOR, 0, 0.004);
  addBox(-44.55, 8.0, 0, 0.9, 14, 22, DARKDOOR, 0, 0.004);
  addBox(44.55, 8.0, 0, 0.9, 14, 22, DARKDOOR, 0, 0.004);

  // flared cornice closing the base
  prism(1.0, 1.0, 39.6, 41.8, CONCRETE, 0.01);

  // =====================================================================
  // 2. TOWER SHAFT (41.8 - 204 m): dark glass core + concrete fins
  // =====================================================================
  const glassBands = [
    [41.8, 70], [70, 100], [100, 130], [130, 160], [160, 190], [190, 204],
  ];
  for (let i = 0; i < glassBands.length; i++) {
    prism(0.987, 0.987, glassBands[i][0], glassBands[i][1],
          i % 2 ? GLASS : GLASS2, 0.005);
  }
  // dense vertical fins: 30 per long face, 14 per end, 5 per chamfer
  finRing([14, 5, 30, 5, 14, 5, 30, 5], 41.8, 204, 0.80, 0.62, CONCRETE, 0.022);
  // thin horizontal spandrel lines between the fins
  for (const y of [70, 100, 130, 160, 190]) {
    prism(0.9925, 0.9925, y, y + 0.55, CONCRETE2, 0.008);
  }
  // slightly stronger belt course at the 2/3 mark
  prism(0.995, 0.995, 129.6, 130.4, CONCRETE, 0.008);

  // =====================================================================
  // 3. MECHANICAL FLOORS + METLIFE SIGN BAND (204 - 229 m)
  // =====================================================================
  prism(0.985, 0.985, 204, 216, CHARCOAL, 0.006);
  for (const y of [205.6, 208.4, 211.2, 214.0]) {
    prism(0.9905, 0.9905, y, y + 0.85, LOUVER, 0.01);
  }
  // pale sign zone (the METLIFE lettering would sit here)
  prism(0.9855, 0.9855, 216, 225, OFFWHITE, 0.006);
  // thin dark reveal above and below the sign band
  prism(0.9905, 0.9905, 216.0, 216.7, CHARCOAL, 0.004);
  prism(0.9905, 0.9905, 224.3, 225.0, CHARCOAL, 0.004);
  // shadow slots across the sign band (suggest lettering / grilles)
  for (let i = 0; i < 9; i++) {
    const x = -30 + i * 7.5;
    addBox(x, 220.5, -24.55, 3.4, 5.0, 0.55, CHARCOAL, 0, 0.004);
    addBox(x, 220.5, 24.55, 3.4, 5.0, 0.55, CHARCOAL, 0, 0.004);
  }
  prism(0.9855, 0.9855, 225, 229, CHARCOAL, 0.006);

  // =====================================================================
  // 4. CROWN (229 - 246 m)
  // =====================================================================
  prism(1.0, 1.0, 229, 232.6, CONCRETE, 0.009);      // main roof slab / cornice
  prism(0.86, 0.86, 232.6, 242.6, CONCRETE2, 0.01);  // mechanical penthouse
  for (const y of [235.4, 238.2, 241.0]) {
    prism(0.8665, 0.8665, y, y + 0.65, LOUVER, 0.008);
  }
  prism(0.88, 0.88, 242.6, 246.0, ROOF, 0.008);      // flat roof cap

  // =====================================================================
  // single merged BufferGeometry
  // =====================================================================
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeBoundingBox();
  return { geometry };
}
