// Model low-poly (map New York) — bản nháp do DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// Low-poly Chrysler Building (New York, 1930) for a three.js driving game.
// Everything is merged into a single non-indexed BufferGeometry with
// position / normal / color attributes.

export function build(THREE) {
  const positions = [];
  const normals = [];
  const colors = [];

  const _color = new THREE.Color();

  // ---------------------------------------------------------------------------
  // merge helpers
  // ---------------------------------------------------------------------------
  function addGeo(geo, color, matrix) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (matrix) g.applyMatrix4(matrix);
    const p = g.attributes.position;
    const n = g.attributes.normal;
    _color.set(color);
    for (let i = 0; i < p.count; i++) {
      positions.push(p.getX(i), p.getY(i), p.getZ(i));
      normals.push(n.getX(i), n.getY(i), n.getZ(i));
      colors.push(_color.r, _color.g, _color.b);
    }
    if (g !== geo) g.dispose();
    geo.dispose();
  }

  function transform(x, y, z, ry) {
    const m = new THREE.Matrix4();
    if (ry) m.makeRotationY(ry);
    m.setPosition(x, y, z);
    return m;
  }

  function addBox(w, h, d, x, y, z, color, ry) {
    addGeo(new THREE.BoxGeometry(w, h, d), color, transform(x, y, z, ry || 0));
  }

  function addCylinder(rTop, rBottom, h, seg, x, y, z, color, openEnded) {
    addGeo(
      new THREE.CylinderGeometry(rTop, rBottom, h, seg, 1, !!openEnded),
      color,
      transform(x, y, z, 0)
    );
  }

  function addLathe(points, seg, color) {
    const v = points.map((p) => new THREE.Vector2(p[0], p[1]));
    addGeo(new THREE.LatheGeometry(v, seg), color, null);
  }

  // flat triangular panel, local +Z normal, rotated around Y
  function addTrianglePanel(w, h, x, y, z, angle, color) {
    const hw = w / 2;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        [-hw, -h / 2, 0, hw, -h / 2, 0, 0, h / 2, 0],
        3
      )
    );
    geo.setAttribute(
      'normal',
      new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3)
    );
    addGeo(geo, color, transform(x, y, z, angle));
  }

  // rows of individual windows on the four facades of a block
  function addFacadeWindows(w, d, rows, countX, countZ, winW, winH, skipFront) {
    const depth = 0.18;
    for (const y of rows) {
      for (let i = 0; i < countX; i++) {
        const x = -w / 2 + ((i + 0.5) * w) / countX;
        if (!(skipFront && skipFront(x, y))) {
          addBox(winW, winH, depth, x, y, -d / 2 - depth / 2, WINDOW);
        }
        addBox(winW, winH, depth, x, y, d / 2 + depth / 2, WINDOW);
      }
      for (let i = 0; i < countZ; i++) {
        const z = -d / 2 + ((i + 0.5) * d) / countZ;
        addBox(depth, winH, winW, -w / 2 - depth / 2, y, z, WINDOW);
        addBox(depth, winH, winW, w / 2 + depth / 2, y, z, WINDOW);
      }
    }
  }

  // white vertical brick piers running up a block
  function addVerticalBands(w, d, y0, y1, countX, countZ, bandW, color) {
    const h = y1 - y0;
    const yc = (y0 + y1) / 2;
    const depth = 0.28;
    for (let i = 0; i <= countX; i++) {
      const x = -w / 2 + (i * w) / countX;
      addBox(bandW, h, depth, x, yc, -d / 2 - depth / 2, color);
      addBox(bandW, h, depth, x, yc, d / 2 + depth / 2, color);
    }
    for (let i = 0; i <= countZ; i++) {
      const z = -d / 2 + (i * d) / countZ;
      addBox(depth, h, bandW, -w / 2 - depth / 2, yc, z, color);
      addBox(depth, h, bandW, w / 2 + depth / 2, yc, z, color);
    }
  }

  function addCornerPilasters(w, d, y0, y1, width, color) {
    const h = y1 - y0;
    const yc = (y0 + y1) / 2;
    const off = width / 2 - 0.1;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        addBox(width, h, width, sx * (w / 2 - off), yc, sz * (d / 2 - off), color);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // palette
  // ---------------------------------------------------------------------------
  const BRICK = 0x513529; // dark brown brick
  const WHITE = 0xe9e2d4; // white brick bands / trim
  const STONE = 0xb2ac9f; // granite plinth
  const WINDOW = 0x46545f; // grey window rows
  const WINDOW_DARK = 0x202931;
  const SILVER = 0xd2d7de; // stainless crown
  const SILVER_LIGHT = 0xf2f4f8; // crown rims / needle
  const DARK = 0x141920; // crown triangular windows
  const GOLD = 0xb08a48; // entrance accents

  // ---------------------------------------------------------------------------
  // base block: 61 x 58 x 60 m
  // ---------------------------------------------------------------------------
  addBox(61, 60, 58, 0, 30, 0, BRICK);

  // granite plinth
  addBox(61.4, 3.2, 58.4, 0, 1.6, 0, STONE);

  // white vertical brick bands (strong Art Deco stripes)
  addVerticalBands(61, 58, 0, 60, 9, 8, 0.85, WHITE);

  // cornice at the top of the base + one horizontal belt
  addBox(61.8, 1.6, 58.8, 0, 59.2, 0, WHITE);
  addBox(61.4, 0.8, 58.4, 0, 33.5, 0, WHITE);

  // window rows (11 floors), entrance cut out of the front facade
  const baseRows = [];
  for (let r = 0; r < 11; r++) baseRows.push(6 + r * 5);
  addFacadeWindows(61, 58, baseRows, 9, 8, 3.6, 2.9, (x, y) => {
    return y < 13 && Math.abs(x) < 10;
  });

  // grand entrance on the -Z facade
  addBox(14.5, 11, 0.35, 0, 5.6, -29.2, DARK);
  addBox(0.8, 12.2, 0.7, -7.9, 6.1, -29.35, GOLD);
  addBox(0.8, 12.2, 0.7, 7.9, 6.1, -29.35, GOLD);
  addBox(16.6, 0.9, 0.7, 0, 12.3, -29.35, GOLD);
  addBox(18.2, 0.7, 0.7, 0, 13.3, -29.3, SILVER);
  addBox(5.4, 9.6, 0.25, -3.0, 4.8, -29.45, WINDOW_DARK);
  addBox(5.4, 9.6, 0.25, 3.0, 4.8, -29.45, WINDOW_DARK);

  // ---------------------------------------------------------------------------
  // setbacks: four stepped blocks narrowing towards the 30 x 30 tower
  // ---------------------------------------------------------------------------
  const setbacks = [
    { w: 54, d: 51, y0: 60, y1: 78, rows: [64, 70, 76], nx: 6, nz: 5, ww: 3.2, wh: 2.7 },
    { w: 47, d: 45, y0: 78, y1: 96, rows: [82, 88, 94], nx: 5, nz: 5, ww: 3.0, wh: 2.7 },
    { w: 41, d: 39, y0: 96, y1: 112, rows: [101, 107], nx: 4, nz: 4, ww: 3.0, wh: 2.7 },
    { w: 35, d: 34, y0: 112, y1: 126, rows: [116, 122], nx: 4, nz: 4, ww: 2.8, wh: 2.7 },
  ];

  for (const b of setbacks) {
    const h = b.y1 - b.y0;
    addBox(b.w, h, b.d, 0, (b.y0 + b.y1) / 2, 0, BRICK);
    addCornerPilasters(b.w, b.d, b.y0, b.y1, 1.1, WHITE);
    addFacadeWindows(b.w, b.d, b.rows, b.nx, b.nz, b.ww, b.wh);
    addBox(b.w + 1.4, 1.2, b.d + 1.4, 0, b.y1 - 0.6, 0, WHITE);
  }

  // ---------------------------------------------------------------------------
  // tower shaft: 30 x 30 m, from 126 m to 240 m
  // ---------------------------------------------------------------------------
  addBox(30, 114, 30, 0, 183, 0, BRICK);

  // white vertical piers (six per facade)
  for (let i = 0; i <= 5; i++) {
    const p = -15 + i * 6;
    addBox(1.0, 112, 0.4, p, 182, -15.2, WHITE);
    addBox(1.0, 112, 0.4, p, 182, 15.2, WHITE);
    addBox(0.4, 112, 1.0, -15.2, 182, p, WHITE);
    addBox(0.4, 112, 1.0, 15.2, 182, p, WHITE);
  }

  // recessed grey window strips between the piers
  for (const p of [-12, -6, 0, 6, 12]) {
    addBox(4.6, 106, 0.18, p, 183, -15.09, WINDOW);
    addBox(4.6, 106, 0.18, p, 183, 15.09, WINDOW);
    addBox(0.18, 106, 4.6, -15.09, 183, p, WINDOW);
    addBox(0.18, 106, 4.6, 15.09, 183, p, WINDOW);
  }

  // thin horizontal spandrels
  for (let k = 0; k < 7; k++) {
    const y = 133 + k * 15;
    addBox(30.2, 0.5, 0.3, 0, y, -15.15, WHITE);
    addBox(30.2, 0.5, 0.3, 0, y, 15.15, WHITE);
    addBox(0.3, 0.5, 30.2, -15.15, y, 0, WHITE);
    addBox(0.3, 0.5, 30.2, 15.15, y, 0, WHITE);
  }

  // silver cornice below the crown
  addBox(31.0, 1.4, 31.0, 0, 238.3, 0, WHITE);
  addBox(31.6, 0.8, 31.6, 0, 239.5, 0, SILVER_LIGHT);

  // ---------------------------------------------------------------------------
  // crown: 7 stacked terraced arches, 240 m -> 288 m
  // ---------------------------------------------------------------------------
  const TIERS = 7;
  const TIER_H = 6.4;
  const CROWN_BASE = 240;

  const crownProfile = [];
  for (let i = 0; i < TIERS; i++) {
    const r = 15 - i * 1.25;
    const y0 = CROWN_BASE + i * TIER_H;
    crownProfile.push([r, y0]);
    crownProfile.push([r * 1.03, y0 + 0.6]);
    crownProfile.push([r * 1.0, y0 + 1.8]);
    crownProfile.push([r * 0.94, y0 + 3.4]);
    crownProfile.push([r * 0.86, y0 + 5.0]);
    crownProfile.push([r * 0.8, y0 + 6.2]);
  }
  // shoulder tapering out of the top tier into the needle base
  crownProfile.push([5.6, 285.4]);
  crownProfile.push([3.6, 286.6]);
  crownProfile.push([2.2, 288.0]);
  addLathe(crownProfile, 16, SILVER);

  // bright rims marking each of the seven terraces
  for (let i = 0; i < TIERS; i++) {
    const r = 15 - i * 1.25;
    const y0 = CROWN_BASE + i * TIER_H;
    addCylinder(r + 0.24, r + 0.24, 0.7, 16, 0, y0 + 0.35, 0, SILVER_LIGHT, true);
  }

  // dark triangular windows radiating around every tier
  for (let i = 0; i < TIERS; i++) {
    const r = 15 - i * 1.25;
    const y0 = CROWN_BASE + i * TIER_H;
    const n = 16;
    const tw = 1.0 + r * 0.055;
    const th = 2.1 + r * 0.065;
    const rr = r + 0.3;
    for (let k = 0; k < n; k++) {
      const a = ((k + 0.5) * Math.PI * 2) / n;
      addTrianglePanel(
        tw,
        th,
        Math.sin(a) * rr,
        y0 + 3.4,
        Math.cos(a) * rr,
        a,
        DARK
      );
    }
  }

  // ---------------------------------------------------------------------------
  // needle spire: 288 m -> 319 m
  // ---------------------------------------------------------------------------
  addLathe(
    [
      [2.2, 288.0],
      [1.6, 291.0],
      [1.1, 295.5],
      [0.75, 301.0],
      [0.5, 307.0],
      [0.3, 313.0],
      [0.12, 317.0],
      [0.01, 319.0],
    ],
    16,
    SILVER_LIGHT
  );

  // small bright collars along the spire
  addCylinder(1.72, 1.72, 0.28, 12, 0, 291.0, 0, SILVER, true);
  addCylinder(1.2, 1.2, 0.25, 12, 0, 296.5, 0, SILVER, true);
  addCylinder(0.82, 0.82, 0.22, 12, 0, 302.0, 0, SILVER, true);

  // ---------------------------------------------------------------------------
  // merge into one geometry
  // ---------------------------------------------------------------------------
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return { geometry };
}
