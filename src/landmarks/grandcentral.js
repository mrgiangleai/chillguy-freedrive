// Model low-poly (map New York) — bản nháp do DeepSeek viết theo đề + script chấm (kích thước thật ±8 %), Claude soát. build(THREE) => { geometry } (vertex colors, mặt chính nhìn −Z).
// Grand Central Terminal (New York, 1913) — low-poly Beaux-Arts station
// Footprint 90 x 120 m, height ~34 m, main facade faces -Z (42nd Street).
export function build(THREE) {
  const parts = [];

  // ---------------------------------------------------------------- palette
  const C = {
    base:     [0.70, 0.64, 0.57], // granite plinth
    baseDk:   [0.58, 0.52, 0.46],
    wall:     [0.94, 0.88, 0.81], // pale pink-beige limestone
    wall2:    [0.90, 0.83, 0.75],
    trim:     [0.98, 0.95, 0.89], // cornices, columns
    trimDk:   [0.84, 0.77, 0.69],
    glass:    [0.10, 0.13, 0.17], // dark window glass
    glass2:   [0.15, 0.20, 0.24],
    copper:   [0.26, 0.56, 0.45], // green copper roof
    copperDk: [0.17, 0.41, 0.33],
    statue:   [0.87, 0.85, 0.79],
    gold:     [0.82, 0.67, 0.30],
    bronze:   [0.33, 0.29, 0.25],
  };

  // ---------------------------------------------------------------- helpers
  const mat = (x, y, z, rx, ry, rz) => {
    const m = new THREE.Matrix4();
    if (rx || ry || rz) m.makeRotationFromEuler(new THREE.Euler(rx, ry, rz, 'XYZ'));
    m.setPosition(x, y, z);
    return m;
  };

  function push(geo, color, m) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (m) g.applyMatrix4(m);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = color[0];
      col[i * 3 + 1] = color[1];
      col[i * 3 + 2] = color[2];
    }
    parts.push({
      pos: g.attributes.position.array,
      nor: g.attributes.normal.array,
      col,
    });
    g.dispose();
    if (g !== geo) geo.dispose();
  }

  const box = (w, h, d, color, x, y, z, rx, ry, rz) =>
    push(new THREE.BoxGeometry(w, h, d), color, mat(x, y, z, rx, ry, rz));

  const cyl = (rt, rb, h, seg, color, x, y, z, rx, ry, rz) =>
    push(new THREE.CylinderGeometry(rt, rb, h, seg), color, mat(x, y, z, rx, ry, rz));

  const sph = (r, color, x, y, z, ws = 8, hs = 6) =>
    push(new THREE.SphereGeometry(r, ws, hs), color, mat(x, y, z));

  // rectangular panel with a semicircular head, extruded towards +Z
  function archPanel(halfW, straight, depth, color, x, y, z) {
    const s = new THREE.Shape();
    s.moveTo(-halfW, 0);
    s.lineTo(-halfW, straight);
    s.absarc(0, straight, halfW, Math.PI, 0, true);
    s.lineTo(halfW, 0);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, {
      depth,
      bevelEnabled: false,
      curveSegments: 10,
      steps: 1,
    });
    push(g, color, mat(x, y, z));
  }

  // ring of voussoir blocks around a semicircular arch head
  function archRing(cx, springY, rIn, rOut, depth, color, z) {
    const n = 9;
    const R = (rIn + rOut) / 2;
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * (i + 0.5)) / n;
      box(
        (Math.PI * R / n) * 1.18, rOut - rIn, depth, color,
        cx + Math.cos(a) * R, springY + Math.sin(a) * R, z,
        0, 0, a - Math.PI / 2
      );
    }
  }

  const HALF_X = 45;
  const HALF_Z = 60;

  // ================================================================ plinth
  box(90, 4, 120, C.base, 0, 2, 0);
  box(90.05, 0.9, 120.05, C.baseDk, 0, 4.0, 0);        // base cap
  // rusticated base courses on the street side
  for (let i = 0; i < 4; i++) {
    box(90.1, 0.12, 0.4, C.baseDk, 0, 0.9 + i * 0.85, -59.9);
  }

  // ================================================================ wings
  // slightly lower side wings: |x| 32 .. 44.7, up to y 21
  for (const s of [-1, 1]) {
    const cx = s * 38.35;
    box(12.7, 16.6, 118.8, C.wall2, cx, 12.7, 0);          // wall y 4.4..21
    box(13.6, 1.5, 119.6, C.trim, cx, 21.75, 0);           // cornice 21..22.5
    box(13.6, 0.35, 119.6, C.copper, cx, 22.65, 0);        // copper edge
    box(12.6, 1.1, 118.6, C.wall2, cx, 23.05, 0);          // parapet
    box(12.9, 0.3, 118.9, C.copperDk, cx, 23.7, 0);        // parapet cap

    // wing front pilasters (facade side)
    for (const px of [33.1, 38.35, 43.6]) {
      box(0.9, 16.6, 0.55, C.trim, s * px, 12.7, -59.65);
    }
    // wing front windows
    for (const px of [35.6, 41.0]) {
      for (const wy of [8.8, 15.2]) {
        box(2.6, 5.0, 0.30, C.glass, s * px, wy, -59.55);
        box(3.1, 0.35, 0.42, C.trim, s * px, wy + 2.75, -59.6); // lintel
        box(3.1, 0.30, 0.42, C.trimDk, s * px, wy - 2.65, -59.6); // sill
      }
    }
  }

  // ================================================================ core
  box(64, 21.6, 118.8, C.wall, 0, 15.2, 0);                // y 4.4..26
  box(65.0, 0.7, 119.2, C.trimDk, 0, 14.0, 0);             // string course
  box(66.5, 2.0, 120.0, C.trim, 0, 27.0, 0);               // great cornice
  box(65.4, 0.6, 119.4, C.trimDk, 0, 25.7, 0);             // cornice bed mould

  // dentils under the great cornice (front + rear)
  for (let x = -31; x <= 31; x += 2.3) {
    box(1.15, 0.95, 0.55, C.trimDk, x, 25.5, -59.68);
    box(1.15, 0.95, 0.55, C.trimDk, x, 25.5, 59.68);
  }

  // ================================================================ roof
  box(63, 0.6, 116, C.copperDk, 0, 28.3, 0);               // flat deck
  box(63.6, 0.9, 1.5, C.copper, 0, 28.45, -59.2);          // copper copings
  box(63.6, 0.9, 1.5, C.copper, 0, 28.45, 59.2);
  box(1.5, 0.9, 118.6, C.copper, -31.5, 28.45, 0);
  box(1.5, 0.9, 118.6, C.copper, 31.5, 28.45, 0);
  // stepped copper mass over the concourse
  box(46, 1.2, 88, C.copper, 0, 29.2, 6);
  box(38, 1.0, 76, C.copperDk, 0, 30.2, 6);
  box(26, 0.8, 62, C.copper, 0, 31.1, 6);
  box(26.4, 0.25, 62.4, C.copperDk, 0, 31.55, 6);

  // ================================================================ pavilion
  // central projecting block carrying the three great arches
  box(48, 19.6, 2.0, C.wall, 0, 14.2, -59.0);              // y 4.4..24.0
  // shallow pilasters at pavilion corners
  for (const s of [-1, 1]) box(2.0, 19.6, 1.0, C.wall2, s * 23.6, 14.2, -59.9);

  box(50.5, 1.8, 3.0, C.trim, 0, 24.9, -59.2);             // entablature 24.0..25.8
  box(49.4, 0.6, 3.05, C.trimDk, 0, 25.35, -59.2);         // frieze
  box(46.0, 1.8, 2.6, C.wall, 0, 26.7, -59.0);             // attic 25.8..27.6
  box(47.6, 1.3, 3.0, C.trim, 0, 28.25, -59.0);            // attic cornice 27.6..28.9
  box(46.8, 0.3, 2.7, C.copper, 0, 29.05, -59.0);          // copper cap

  // pavilion dentils
  const archX = [-15.5, 0, 15.5];
  for (let x = -23.2; x <= 23.2; x += 2.1) {
    if (archX.some((cx) => Math.abs(x - cx) < 1.6)) continue;
    box(1.0, 0.75, 0.6, C.trimDk, x, 23.6, -60.28);
  }

  // ------------------------------------------------------------ three arches
  const SPRING = 18;          // spring line of the arches (y)
  const archStraight = 12;    // glass: 6 .. 18 straight, 18 .. 23 head
  const glassY = 6;

  for (const cx of archX) {
    // dark glass, slightly proud of the wall plane (z = -60)
    archPanel(5.0, archStraight, 0.36, C.glass, cx, glassY, -60.26);
    // stone jambs
    for (const s of [-1, 1]) {
      box(1.0, 12.5, 0.8, C.trim, cx + s * 5.5, 11.8, -60.0);
    }
    // semicircular voussoir ring
    archRing(cx, SPRING, 5.0, 6.0, 0.8, C.trim, -60.0);
    // keystone
    box(1.1, 1.15, 0.95, C.trimDk, cx, 23.55, -60.0);
    // sill
    box(11.0, 0.6, 1.0, C.trimDk, cx, 5.6, -60.0);
    // glazing bars
    box(0.30, 16.8, 0.22, C.bronze, cx, 14.4, -60.42);
    for (const dx of [-2.55, 2.55]) {
      box(0.22, 14.4, 0.22, C.bronze, cx + dx, 13.2, -60.42);
    }
    for (const ty of [12.5, 18.4]) {
      box(9.6, 0.24, 0.22, C.bronze, cx, ty, -60.42);
    }
    // entrance doors below (only the central arch gets a door group)
    if (cx === 0) {
      for (const dx of [-3.3, 0, 3.3]) {
        box(2.8, 4.0, 0.35, C.glass2, dx, 2.0, -60.1);
        box(3.2, 0.35, 0.5, C.trimDk, dx, 4.2, -60.15);
      }
    }
  }

  // paired columns between / beside the arches
  const colX = [-22, -8.15, -6.55, 6.55, 8.15, 22];
  for (const x of colX) {
    cyl(0.55, 0.64, 17.2, 16, C.trim, x, 14.0, -60.05);        // y 5.4..22.6
    box(1.75, 1.0, 1.75, C.trim, x, 4.9, -60.05);              // base
    box(1.9, 1.0, 1.9, C.trim, x, 23.1, -60.05);               // capital
    box(2.05, 0.4, 2.05, C.trimDk, x, 23.8, -60.05);           // abacus
  }

  // ------------------------------------------------------------ sculpture group
  box(18, 1.0, 2.2, C.trimDk, 0, 29.7, -58.4);                 // plinth 29.2..30.2
  box(19.5, 0.3, 2.6, C.trim, 0, 30.0, -58.4);
  box(17.0, 0.5, 2.0, C.trimDk, 0, 30.35, -58.4);

  // clock disc behind the group
  cyl(2.20, 2.20, 0.55, 28, C.bronze, 0, 32.15, -57.0, Math.PI / 2, 0, 0);
  cyl(1.95, 1.95, 0.32, 28, C.trim, 0, 32.15, -57.2, Math.PI / 2, 0, 0);
  cyl(0.10, 0.10, 0.10, 8, C.gold, 0, 32.15, -57.42, Math.PI / 2, 0, 0);
  box(0.13, 1.30, 0.10, C.gold, 0, 32.70, -57.42);
  box(0.95, 0.13, 0.10, C.gold, 0.34, 32.15, -57.42);
  box(4.8, 2.8, 0.9, C.wall2, 0, 31.0, -56.55);                // clock backing

  // winged Mercury, centre
  cyl(0.55, 1.15, 2.2, 10, C.statue, 0, 31.3, -58.45);
  cyl(0.45, 0.60, 1.2, 10, C.statue, 0, 33.0, -58.45);
  sph(0.45, C.statue, 0, 33.85, -58.45);
  box(0.24, 1.7, 0.24, C.statue, 0.75, 33.55, -58.45, 0, 0, 0.32);   // raised arm
  box(0.18, 1.7, 0.18, C.statue, -0.70, 33.30, -58.45, 0, 0, -0.25); // staff arm
  box(0.15, 1.7, 0.8, C.statue, -1.15, 32.95, -58.15, 0, 0.25, -0.55); // wing
  box(0.15, 1.7, 0.8, C.statue, 1.15, 32.95, -58.15, 0, -0.25, 0.55);  // wing
  box(0.07, 1.3, 0.07, C.gold, 0.92, 34.10, -58.45, 0, 0, 0.32);       // caduceus

  // flanking allegorical figures
  for (const s of [-1, 1]) {
    cyl(0.40, 0.95, 1.8, 8, C.statue, s * 7.2, 31.1, -58.3);
    cyl(0.34, 0.45, 0.95, 8, C.statue, s * 7.2, 32.45, -58.3);
    sph(0.34, C.statue, s * 7.2, 33.15, -58.3);
    box(0.13, 1.3, 0.55, C.statue, s * 7.95, 32.6, -58.1, 0, 0, s * 0.5);
    cyl(0.45, 0.32, 0.55, 8, C.statue, s * 6.1, 30.7, -58.3);
  }

  // urns on the attic corners
  for (const s of [-1, 1]) {
    cyl(0.55, 0.38, 0.35, 8, C.trimDk, s * 21.4, 29.0, -59.1);
    cyl(0.42, 0.30, 0.85, 8, C.trim, s * 21.4, 29.6, -59.1);
    sph(0.42, C.trim, s * 21.4, 30.25, -59.1);
  }

  // ================================================================ windows
  // core front, flanking the pavilion
  for (const s of [-1, 1]) {
    for (const wy of [9.0, 15.0, 20.6]) {
      box(3.4, 4.4, 0.30, C.glass, s * 28.2, wy, -59.55);
      box(4.0, 0.35, 0.45, C.trim, s * 28.2, wy + 2.45, -59.6);
      box(0.30, 4.2, 0.42, C.bronze, s * 28.2, wy, -59.68);
    }
  }

  // long flanks (x = ±44.7)
  for (const s of [-1, 1]) {
    // corner pavilions + central break, breaking up the 120 m elevation
    for (const [zc, dz] of [[-54.8, 8.8], [54.8, 8.8], [0, 9.2]]) {
      const top = zc === 0 ? 22.4 : 22.0;
      box(13.2, top - 4.4, dz, C.wall2, s * 38.6, (top + 4.4) / 2, zc);
      box(13.7, 1.2, dz + 0.6, C.trim, s * 38.6, top + 0.6, zc);
      box(13.7, 0.3, dz + 0.6, C.copper, s * 38.6, top + 1.35, zc);
      for (const dz2 of [-dz / 2 + 0.7, dz / 2 - 0.7]) {
        box(0.7, top - 4.9, 1.0, C.trim, s * 45.0, (top + 4.4) / 2, zc + dz2);
      }
      for (const dz2 of [-(dz / 2 - 2.4), dz / 2 - 2.4]) {
        for (const wy of [9.0, 15.3]) {
          box(0.30, 4.8, 1.7, C.glass, s * 45.22, wy, zc + dz2);
          box(0.40, 0.32, 2.1, C.trim, s * 45.26, wy + 2.7, zc + dz2);
        }
      }
    }

    // string course between the two storeys
    box(0.55, 0.6, 101, C.trimDk, s * 44.8, 12.4, 0);

    // ten window bays
    for (let i = 0; i < 12; i++) {
      const z = -44 + i * 8;
      if (Math.abs(z) < 6) continue;
      for (const wy of [9.0, 15.3]) {
        box(0.30, 5.0, 3.0, C.glass, s * 44.85, wy, z);
        box(0.45, 0.35, 3.5, C.trim, s * 44.92, wy + 2.85, z);
        box(0.40, 0.25, 3.5, C.trimDk, s * 44.92, wy - 2.7, z);
      }
    }
    // pilasters between the bays
    for (const z of [-48, -40, -32, -24, -16, -8, 8, 16, 24, 32, 40, 48]) {
      box(0.7, 16.4, 1.1, C.trim, s * 44.9, 12.6, z);
    }
  }

  // rear elevation (z = +59.4)
  for (let i = 0; i < 13; i++) {
    const x = -42 + i * 7;
    if (Math.abs(x) < 10) continue;
    for (const wy of [9.0, 15.5]) {
      box(3.2, 5.0, 0.30, C.glass, x, wy, 59.55);
      box(3.8, 0.35, 0.45, C.trim, x, wy + 2.75, 59.6);
    }
  }
  archPanel(5.5, 8, 0.4, C.glass, 0, 6, 59.3);
  archRing(0, 14, 5.5, 6.5, 0.8, C.trim, 59.45);
  for (const s of [-1, 1]) box(1.0, 8.5, 0.8, C.trim, s * 6.0, 10.2, 59.45);

  // ================================================================ merge
  let total = 0;
  for (const p of parts) total += p.pos.length;

  const posArr = new Float32Array(total);
  const norArr = new Float32Array(total);
  const colArr = new Float32Array(total);
  let off = 0;
  for (const p of parts) {
    posArr.set(p.pos, off);
    norArr.set(p.nor, off);
    colArr.set(p.col, off);
    off += p.pos.length;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(norArr, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  // expose the reference metrics of the footprint
  geometry.userData = { footprint: [HALF_X * 2, (HALF_Z) * 2] };

  return { geometry };
}
