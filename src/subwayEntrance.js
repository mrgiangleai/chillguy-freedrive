// Map New York — cửa tàu điện ngầm kiểu NYC (lòng cầu thang giả bằng dải tối, lan can sắt xanh, 2 cột cầu đèn xanh, biển). Gốc = tâm đáy, cầu thang xuống về −Z.
// Bản DeepSeek theo đề (thi song song với GLM), Claude soát.
// Low-poly NYC sidewalk subway entrance. build(THREE) -> { geometry }
// Units: metres. Origin = centre of footprint at sidewalk level, +Y up.
export function build(THREE) {
  const pos = [], nor = [], col = [];

  const vert = (x, y, z, nx, ny, nz, c) => {
    pos.push(x, y, z);
    nor.push(nx, ny, nz);
    col.push(c[0], c[1], c[2]);
  };

  const tri = (a, b, c, n, color) => {
    vert(a[0], a[1], a[2], n[0], n[1], n[2], color);
    vert(b[0], b[1], b[2], n[0], n[1], n[2], color);
    vert(c[0], c[1], c[2], n[0], n[1], n[2], color);
  };

  const quad = (a, b, c, d, n, color) => {
    tri(a, b, c, n, color);
    tri(a, c, d, n, color);
  };

  function box(cx, cy, cz, sx, sy, sz, color) {
    const x0 = cx - sx / 2, x1 = cx + sx / 2;
    const y0 = cy - sy / 2, y1 = cy + sy / 2;
    const z0 = cz - sz / 2, z1 = cz + sz / 2;
    quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], color);
    quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], color);
    quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], color);
    quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], color);
    quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], color);
    quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], color);
  }

  function sphere(cx, cy, cz, r, color, seg = 12, rings = 8) {
    const pt = (i, j) => {
      const th = Math.PI * j / rings;
      const ph = 2 * Math.PI * i / seg;
      return [
        cx + r * Math.sin(th) * Math.cos(ph),
        cy + r * Math.cos(th),
        cz + r * Math.sin(th) * Math.sin(ph)
      ];
    };
    const nrm = (p) => {
      const dx = p[0] - cx, dy = p[1] - cy, dz = p[2] - cz;
      const l = Math.hypot(dx, dy, dz) || 1;
      return [dx / l, dy / l, dz / l];
    };
    for (let j = 0; j < rings; j++) {
      for (let i = 0; i < seg; i++) {
        const a = pt(i, j), b = pt(i + 1, j), c = pt(i + 1, j + 1), d = pt(i, j + 1);
        tri(a, b, c, nrm(a), color);
        tri(a, c, d, nrm(a), color);
      }
    }
  }

  const IRON = [0.12, 0.30, 0.17];
  const IRON_DK = [0.10, 0.26, 0.15];
  const GLOBE = [0.25, 0.95, 0.40];
  const CURB = [0.62, 0.62, 0.60];
  const WHITE = [0.92, 0.92, 0.90];
  const BLACK = [0.05, 0.05, 0.05];

  // --- stairwell opening: 12 flat strips, alternating greys, darker toward -Z ---
  const X0 = -0.85, X1 = 0.85, Z0 = -2.4, Z1 = 2.4;
  const NSTRIP = 12;
  const dz = (Z1 - Z0) / NSTRIP;
  for (let i = 0; i < NSTRIP; i++) {
    const za = Z1 - i * dz, zb = Z1 - (i + 1) * dz;
    const g = 0.225 - 0.125 * (i / (NSTRIP - 1)) + (i % 2 ? -0.012 : 0.012);
    const c = [g * 0.97, g * 0.97, g];
    quad([X0, 0.03, za], [X1, 0.03, za], [X1, 0.03, zb], [X0, 0.03, zb], [0, 1, 0], c);
  }

  // --- low stone curb around the opening ---
  box(-0.91, 0.06, 0, 0.12, 0.12, 4.8, CURB);
  box(0.91, 0.06, 0, 0.12, 0.12, 4.8, CURB);
  box(0, 0.06, 2.45, 1.94, 0.12, 0.10, CURB);
  box(0, 0.06, -2.45, 1.94, 0.12, 0.10, CURB);

  // --- railings: top rail, bottom rail, vertical bars ---
  const RAIL_X = 0.95;
  const RAIL_Z0 = -2.44, RAIL_Z1 = 2.40;
  const railLen = RAIL_Z1 - RAIL_Z0, railMid = (RAIL_Z0 + RAIL_Z1) / 2;
  for (const s of [-1, 1]) {
    box(s * RAIL_X, 1.02, railMid, 0.055, 0.06, railLen, IRON);   // top rail
    box(s * RAIL_X, 0.13, railMid, 0.05, 0.05, railLen, IRON_DK); // bottom rail
  }
  // bars on the two sides
  for (let z = -2.30; z <= 2.31; z += 0.25) {
    for (const s of [-1, 1]) {
      box(s * RAIL_X, 0.575, z, 0.04, 0.83, 0.04, IRON);
    }
  }
  // back railing (z = -2.47) across the top of the stairs
  box(0, 1.02, -2.47, 1.9, 0.06, 0.055, IRON);
  box(0, 0.13, -2.47, 1.9, 0.05, 0.05, IRON_DK);
  for (let x = -0.85; x <= 0.86; x += 0.25) {
    box(x, 0.575, -2.47, 0.04, 0.83, 0.04, IRON);
  }

  // --- sign plate on the back railing ---
  box(0, 1.20, -2.42, 1.4, 0.25, 0.03, WHITE);
  box(0, 1.20, -2.402, 1.3, 0.09, 0.014, BLACK);

  // --- lamp posts + green glass globes at the entrance corners ---
  for (const s of [-1, 1]) {
    const px = s * 0.90;
    box(px, 0.15, 2.45, 0.19, 0.30, 0.19, IRON_DK);        // plinth
    box(px, 1.22, 2.45, 0.075, 1.84, 0.075, IRON_DK);      // shaft (0.30..2.14)
    box(px, 2.175, 2.45, 0.12, 0.07, 0.12, IRON);          // collar
    sphere(px, 2.29, 2.45, 0.16, GLOBE, 14, 9);            // glass globe
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeBoundingBox();
  return { geometry: g };
}
