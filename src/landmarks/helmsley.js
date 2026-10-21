// Model low-poly (map New York) — bản nháp do DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// Helmsley Building, 230 Park Avenue, New York (1929)
// Low-poly model for a three.js driving game.
// Units = metres. Origin = centre of footprint at ground. Main facade faces -Z.
// Overall: X 90, Z 60, Y 172.

export function build(THREE) {
  const parts = [];

  const PAL = {
    stone:  0xd9cfb6, // light limestone walls
    stone2: 0xc3b79c, // trim / cornices
    stone3: 0xa89b80, // shadowed stone / plinth
    win:    0x1b222b, // dark windows
    win2:   0x2c3a49, // glass catching the sky
    gold:   0xd7b04a, // gold roof / accents
    green:  0x3f7059, // oxidised copper
  };

  const add = (g, hex) => parts.push([g, new THREE.Color(hex)]);

  // axis-aligned box from bounds
  function box(x0, x1, y0, y1, z0, z1, hex) {
    const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0);
    g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    add(g, hex);
  }

  // box with rotation around Z, centred at x,y,z
  function boxR(w, h, d, x, y, z, hex, rz) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rz) g.rotateZ(rz);
    g.translate(x, y, z);
    add(g, hex);
  }

  // rectangular frustum (tapered block): base w0*d0 at y, top w1*d1 at y+h
  function frustum(w0, d0, w1, d1, h, x, y, z, hex) {
    const a = w0 / 2, b = d0 / 2, c = w1 / 2, e = d1 / 2;
    const B = [[-a, 0, -b], [a, 0, -b], [a, 0, b], [-a, 0, b]];
    const T = [[-c, h, -e], [c, h, -e], [c, h, e], [-c, h, e]];
    const v = [];
    const quad = (p, q, r, s) => {
      v.push(p[0], p[1], p[2], q[0], q[1], q[2], r[0], r[1], r[2]);
      v.push(p[0], p[1], p[2], r[0], r[1], r[2], s[0], s[1], s[2]);
    };
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      quad(B[i], T[i], T[j], B[j]);
    }
    quad(T[3], T[2], T[1], T[0]); // top (+Y)
    quad(B[0], B[1], B[2], B[3]); // bottom (-Y)
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.computeVertexNormals();
    g.translate(x, y, z);
    add(g, hex);
  }

  // ring of stone voussoirs over an opening (decorative relieving arch)
  function archRing(cx, yBase, r, n, z, hex, thick, depth) {
    const seg = (Math.PI * r) / n;
    for (let i = 0; i < n; i++) {
      const mid = (Math.PI * (i + 0.5)) / n;
      boxR(seg * 1.08, thick || 1.3, depth || 0.9,
        cx + Math.cos(mid) * r, yBase + Math.sin(mid) * r, z, hex, mid + Math.PI / 2);
    }
  }

  // vertical window grid on a face perpendicular to Z (z = centre of the pane slab)
  function faceZ(xs, ys, w, h, z, hex1, hex2) {
    for (let i = 0; i < ys.length; i++) {
      for (let j = 0; j < xs.length; j++) {
        const g = new THREE.BoxGeometry(w, h, 0.9);
        g.translate(xs[j], ys[i], z);
        add(g, ((i * 3 + j) % 7 === 0) ? hex2 : hex1);
      }
    }
  }
  function faceX(zs, ys, w, h, x, hex1, hex2) {
    for (let i = 0; i < ys.length; i++) {
      for (let j = 0; j < zs.length; j++) {
        const g = new THREE.BoxGeometry(0.9, h, w);
        g.translate(x, ys[i], zs[j]);
        add(g, ((i * 5 + j) % 7 === 0) ? hex2 : hex1);
      }
    }
  }
  const seq = (a, b, n) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1));

  // ---------------------------------------------------------------- base block
  // 90 x 60 x 50 with two 14 x 9 road portals at x = -9 / +9 and two pedestrian
  // arches at x = -22 / +22.  Portals are fully open through the Z depth.
  const BX = 45, BZ = 30, BH = 50;

  box(-45, -25, 0, BH, -BZ, BZ, PAL.stone);   // left outer wing
  box(-25, -19, 6, BH, -BZ, BZ, PAL.stone);   // above pedestrian arch
  box(-19, -16, 0, BH, -BZ, BZ, PAL.stone);   // pier between arches
  box(-16, 16, 9, BH, -BZ, BZ, PAL.stone);    // spandrel over the road portals
  box(-2, 2, 0, 9, -BZ, BZ, PAL.stone);       // central pier between portals
  box(16, 19, 0, BH, -BZ, BZ, PAL.stone);
  box(19, 25, 6, BH, -BZ, BZ, PAL.stone);
  box(25, 45, 0, BH, -BZ, BZ, PAL.stone);

  // plinth / darker base course on the solid wings and piers
  box(-45.2, -25, 0, 1.6, -BZ - 0.2, BZ + 0.2, PAL.stone3);
  box(25, 45.2, 0, 1.6, -BZ - 0.2, BZ + 0.2, PAL.stone3);
  box(-19, -16, 0, 1.6, -BZ - 0.2, BZ + 0.2, PAL.stone3);
  box(16, 19, 0, 1.6, -BZ - 0.2, BZ + 0.2, PAL.stone3);

  // portal reveals (frames sit OUTSIDE the openings, never inside)
  for (const s of [-1, 1]) {
    // road portal at x = s*9, half width 7, height 9
    const cx = s * 9;
    box(cx - 8.4, cx - 8.0, 0, 9.4, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(cx + 8.0, cx + 8.4, 0, 9.4, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(cx - 8.4, cx + 8.4, 8.9, 9.4, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(cx - 8.4, cx + 8.4, 8.9, 9.4, BZ - 0.4, BZ + 0.45, PAL.stone2);
    box(cx - 8.4, cx - 8.0, 0, 9.4, BZ - 0.4, BZ + 0.45, PAL.stone2);
    box(cx + 8.0, cx + 8.4, 0, 9.4, BZ - 0.4, BZ + 0.45, PAL.stone2);

    // relieving arch above each portal, on both facades
    for (const zz of [-1, 1]) {
      const z = zz * (BZ + 0.05);
      archRing(cx, 9.2, 7.3, 11, z, PAL.stone2, 2.2, 1.1);
      // imposts where the arch springs from the piers
      box(cx - 8.9, cx - 7.1, 8.6, 9.9, zz * BZ - 0.55, zz * BZ + 0.55, PAL.stone2);
      box(cx + 7.1, cx + 8.9, 8.6, 9.9, zz * BZ - 0.55, zz * BZ + 0.55, PAL.stone2);
      // gold keystone accents
      box(cx - 1.15, cx + 1.15, 15.2, 17.8, zz * BZ + (zz < 0 ? -0.75 : 0.1), zz * BZ + (zz < 0 ? -0.1 : 0.75), PAL.gold);
    }

    // pedestrian arch at x = s*22, 6 wide x 6 tall
    const px = s * 22;
    box(px - 4.0, px - 3.6, 0, 6.3, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(px + 3.6, px + 4.0, 0, 6.3, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(px - 4.0, px + 4.0, 5.9, 6.3, -BZ - 0.45, -BZ + 0.4, PAL.stone2);
    box(px - 4.0, px + 4.0, 5.9, 6.3, BZ - 0.4, BZ + 0.45, PAL.stone2);
    box(px - 4.0, px - 3.6, 0, 6.3, BZ - 0.4, BZ + 0.45, PAL.stone2);
    box(px + 3.6, px + 4.0, 0, 6.3, BZ - 0.4, BZ + 0.45, PAL.stone2);
    archRing(px, 6.2, 3.2, 7, -BZ - 0.05, PAL.stone2, 1.4, 0.9);
    archRing(px, 6.2, 3.2, 7, BZ + 0.05, PAL.stone2, 1.4, 0.9);
  }

  // ------------------------------------------------------- base window bands
  const baseRows = seq(18, 45.9, 7);
  const baseXs = seq(-40, 40, 11);
  faceZ(baseXs, baseRows, 4.6, 2.7, -BZ - 0.05, PAL.win, PAL.win2);
  faceZ(baseXs, baseRows, 4.6, 2.7, BZ + 0.05, PAL.win, PAL.win2);
  const baseZs = seq(-24, 24, 7);
  faceX(baseZs, baseRows, 4.6, 2.7, -BX - 0.05, PAL.win, PAL.win2);
  faceX(baseZs, baseRows, 4.6, 2.7, BX + 0.05, PAL.win, PAL.win2);

  // low mezzanine windows on the solid wings (clear of the arches)
  for (const s of [-1, 1]) {
    for (const a of [29.5, 34.5, 39.5]) {
      box(s * a - 1.7, s * a + 1.7, 11.0, 14.0, -BZ - 0.4, -BZ + 0.2, PAL.win);
      box(s * a - 1.7, s * a + 1.7, 11.0, 14.0, BZ - 0.2, BZ + 0.4, PAL.win);
    }
  }
  for (const s of [-1, 1]) {
    for (const a of baseZs) {
      box(-BX - 0.4, -BX + 0.2, 11.0, 14.0, s * a - 1.7, s * a + 1.7, PAL.win);
      box(BX - 0.2, BX + 0.4, 11.0, 14.0, s * a - 1.7, s * a + 1.7, PAL.win);
    }
  }

  // street-level arcade: tall shop / lobby openings in the solid wings
  for (const s of [-1, 1]) {
    for (const a of [30.5, 35.5, 40.5]) {
      const x = s * a;
      box(x - 2.2, x + 2.2, 1.5, 7.3, -BZ - 0.3, -BZ + 0.5, PAL.win);
      box(x - 2.2, x + 2.2, 1.5, 7.3, BZ - 0.5, BZ + 0.3, PAL.win);
      box(x - 2.5, x + 2.5, 7.3, 8.0, -BZ - 0.4, -BZ + 0.5, PAL.stone2);
      box(x - 2.5, x + 2.5, 7.3, 8.0, BZ - 0.5, BZ + 0.4, PAL.stone2);
    }
  }
  for (const z of seq(-24, 24, 7)) {
    box(-BX - 0.3, -BX + 0.5, 1.5, 7.3, z - 2.2, z + 2.2, PAL.win);
    box(BX - 0.5, BX + 0.3, 1.5, 7.3, z - 2.2, z + 2.2, PAL.win);
    box(-BX - 0.4, -BX + 0.5, 7.3, 8.0, z - 2.5, z + 2.5, PAL.stone2);
    box(BX - 0.5, BX + 0.4, 7.3, 8.0, z - 2.5, z + 2.5, PAL.stone2);
  }

  // vertical pilasters between the bays
  for (const x of seq(-44, 44, 12)) {
    box(x - 0.75, x + 0.75, 10.6, 47.0, -BZ - 0.55, -BZ + 0.2, PAL.stone2);
    box(x - 0.75, x + 0.75, 10.6, 47.0, BZ - 0.2, BZ + 0.55, PAL.stone2);
  }
  for (const z of seq(-28, 28, 8)) {
    box(-BX - 0.55, -BX + 0.2, 10.6, 47.0, z - 0.75, z + 0.75, PAL.stone2);
    box(BX - 0.2, BX + 0.55, 10.6, 47.0, z - 0.75, z + 0.75, PAL.stone2);
  }

  // string courses and crowning cornice of the base
  box(-45.35, 45.35, 9.6, 10.4, -BZ - 0.45, BZ + 0.45, PAL.stone2);
  box(-45.35, 45.35, 46.4, 47.2, -BZ - 0.5, BZ + 0.5, PAL.stone2);
  box(-45.5, 45.5, 47.8, 49.5, -BZ - 0.55, BZ + 0.55, PAL.stone2);
  box(-45.5, 45.5, 49.5, 50.0, -BZ - 0.55, BZ + 0.55, PAL.gold);

  // roof terrace parapet around the base
  box(-45.2, 45.2, 50, 51.4, -30.1, -29.4, PAL.stone2);
  box(-45.2, 45.2, 50, 51.4, 29.4, 30.1, PAL.stone2);
  box(-45.2, -44.5, 50, 51.4, -30.1, 30.1, PAL.stone2);
  box(44.5, 45.2, 50, 51.4, -30.1, 30.1, PAL.stone2);

  // attic / penthouse blocks on the base roof terrace, front and back of the tower
  box(-32, 32, 50, 56.5, -28.5, -16, PAL.stone);
  box(-32, 32, 56.5, 57.2, -29, -15.5, PAL.green);
  box(-30, 30, 50, 58.5, 16, 27.5, PAL.stone);
  box(-30, 30, 58.5, 59.2, 15.5, 28, PAL.green);
  // windows on the attic fronts
  for (const x of seq(-26, 26, 8)) {
    box(x - 1.6, x + 1.6, 51.8, 55.0, -28.9, -28.3, PAL.win);
    box(x - 1.6, x + 1.6, 52.4, 56.5, 27.3, 27.9, PAL.win);
  }
  for (const x of [-31, 31]) {
    box(x - 0.5, x + 0.5, 52, 56, -28.8, -20, PAL.win);
    box(x - 0.5, x + 0.5, 52, 57, 20, 27.4, PAL.win);
  }

  // ---------------------------------------------------------------- tower
  // T1 40x30 up to 102, T2 34x26 to 124, T3 28x22 to 140
  box(-20, 20, 50, 102, -15, 15, PAL.stone);
  box(-17, 17, 102, 124, -13, 13, PAL.stone);
  box(-14, 14, 124, 140, -11, 11, PAL.stone);

  // tower window grids
  const t1Rows = seq(55.5, 96.5, 8);
  const t1Xs = seq(-15, 15, 7);
  faceZ(t1Xs, t1Rows, 2.8, 2.4, -15.05, PAL.win, PAL.win2);
  faceZ(t1Xs, t1Rows, 2.8, 2.4, 15.05, PAL.win, PAL.win2);
  const t1Zs = seq(-10, 10, 5);
  faceX(t1Zs, t1Rows, 2.8, 2.4, -20.05, PAL.win, PAL.win2);
  faceX(t1Zs, t1Rows, 2.8, 2.4, 20.05, PAL.win, PAL.win2);

  const t2Rows = seq(106, 120, 4);
  const t2Xs = seq(-12, 12, 5);
  faceZ(t2Xs, t2Rows, 3.0, 2.4, -13.05, PAL.win, PAL.win2);
  faceZ(t2Xs, t2Rows, 3.0, 2.4, 13.05, PAL.win, PAL.win2);
  const t2Zs = seq(-9, 9, 4);
  faceX(t2Zs, t2Rows, 3.0, 2.4, -17.05, PAL.win, PAL.win2);
  faceX(t2Zs, t2Rows, 3.0, 2.4, 17.05, PAL.win, PAL.win2);

  const t3Rows = [128, 132.5, 137];
  const t3Xs = seq(-10, 10, 5);
  faceZ(t3Xs, t3Rows, 2.7, 2.2, -11.05, PAL.win, PAL.win2);
  faceZ(t3Xs, t3Rows, 2.7, 2.2, 11.05, PAL.win, PAL.win2);
  const t3Zs = seq(-7, 7, 3);
  faceX(t3Zs, t3Rows, 2.7, 2.2, -14.05, PAL.win, PAL.win2);
  faceX(t3Zs, t3Rows, 2.7, 2.2, 14.05, PAL.win, PAL.win2);

  // tower pilasters on the main shaft
  for (const x of seq(-17.5, 17.5, 8)) {
    box(x - 0.6, x + 0.6, 52, 100, -15.5, -14.8, PAL.stone2);
    box(x - 0.6, x + 0.6, 52, 100, 14.8, 15.5, PAL.stone2);
  }
  for (const z of seq(-12.5, 12.5, 6)) {
    box(-20.5, -19.8, 52, 100, z - 0.6, z + 0.6, PAL.stone2);
    box(19.8, 20.5, 52, 100, z - 0.6, z + 0.6, PAL.stone2);
  }

  // tower cornices at each setback
  box(-20.6, 20.6, 100.4, 102.2, -15.6, 15.6, PAL.stone2);
  box(-17.6, 17.6, 122.4, 124.2, -13.6, 13.6, PAL.stone2);
  box(-14.6, 14.6, 138.2, 140.2, -11.6, 11.6, PAL.stone2);
  box(-14.6, 14.6, 140.2, 140.8, -11.6, 11.6, PAL.gold);

  // ------------------------------------------------------------------ roof
  // green copper cornice, gold pyramid, green drum, gold lantern & dome
  box(-15.2, 15.2, 140.8, 142.2, -12.2, 12.2, PAL.green);
  frustum(24, 18, 8, 6, 14.5, 0, 142.2, 0, PAL.gold);           // 142.2 -> 156.7
  box(-5.4, 5.4, 156.7, 157.6, -4.4, 4.4, PAL.gold);

  // corner pinnacles on the pyramid
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    frustum(2.2, 2.2, 0.5, 0.5, 10.0, sx * 9.6, 142.2, sz * 7.2, PAL.gold);
  }

  // lantern drum (green copper)
  {
    const g = new THREE.CylinderGeometry(3.3, 3.6, 5.0, 12);
    g.translate(0, 160.1, 0);
    add(g, PAL.green);
  }
  // lantern (gold, with dark openings on four sides)
  box(-2.6, 2.6, 162.6, 166.2, -2.6, 2.6, PAL.gold);
  box(-1.9, 1.9, 163.4, 165.4, -2.85, -2.55, PAL.win);
  box(-1.9, 1.9, 163.4, 165.4, 2.55, 2.85, PAL.win);
  box(-2.85, -2.55, 163.4, 165.4, -1.9, 1.9, PAL.win);
  box(2.55, 2.85, 163.4, 165.4, -1.9, 1.9, PAL.win);
  // small gold finial ring under the dome
  box(-3.0, 3.0, 166.2, 166.8, -3.0, 3.0, PAL.gold);

  // ogee dome up to exactly 172 m
  {
    const pts = [
      [3.35, 0.0], [3.45, 0.75], [3.15, 1.9], [2.5, 3.1],
      [1.65, 4.25], [0.85, 5.25], [0.3, 6.0], [0.0, 6.4],
    ].map((p) => new THREE.Vector2(p[0], p[1]));
    const g = new THREE.LatheGeometry(pts, 12);
    g.translate(0, 165.6, 0);
    add(g, PAL.gold);
  }

  // ---------------------------------------------------------------- merge all
  const pos = [], nor = [], col = [];
  for (const [g, c] of parts) {
    const ng = g.index ? g.toNonIndexed() : g;
    const p = ng.attributes.position.array;
    const n = ng.attributes.normal.array;
    for (let i = 0; i < p.length; i += 3) {
      pos.push(p[i], p[i + 1], p[i + 2]);
      nor.push(n[i], n[i + 1], n[i + 2]);
      col.push(c.r, c.g, c.b);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geometry.computeBoundingBox();

  return { geometry };
}
