// Chuyển FBX urban:EXPORT quanh Landmark 81 (1 vòng tròn 2 450 m) thành tài sản game map sgn:
// - docs/assets/sgn-city.bin + sgn-city.json: nhà tách theo connected component (mỗi toà 1 component)
// - docs/assets/sgn-water.json: tam giác mặt nước (sông Sài Gòn, rạch…) ở toạ độ game
// - docs/assets/sgn-ue-trees.json: vị trí cây (bỏ cây z hỏng / trong Vinhomes / sát tuyến)
// Chạy: node scripts/convert-urban-export.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const D = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/sgn-data.json'), 'utf8'));
const FBX = path.join(ROOT, '.scratch/urban-export.fbx');
const OUT = path.join(ROOT, 'docs/assets');
const SOURCE = 'OpenStreetMap contributors (ODbL), Overture Maps, Copernicus DEM — via urban:EXPORT';
const CATS = ['residential', 'public', 'commercial', 'industrial', 'utility', 'other'];
const CAT_ID = {
  BUILDINGS_RESIDENTIAL: 0, BUILDINGS_PUBLIC: 1, BUILDINGS_COMMERCIAL: 2,
  BUILDINGS_INDUSTRIAL: 3, BUILDINGS_UTILITY: 4, BUILDINGS_OTHER: 5,
};

// tâm vòng tròn FBX (lat 10.79514, lon 106.72347) trong mặt phẳng thật
const E0 = (106.72347 - D.origin[1]) * D.KE;
const N0 = (10.79514 - D.origin[0]) * D.KN;

// ---------- offset làm mượt đường: nội suy IDW 8 điểm gần nhất từ D.offs, lưới thô 25 m ----------
const OFF_M = 1300, OFF_S = 25;
const OFF_N = Math.round((2 * OFF_M) / OFF_S) + 1;
const OX0 = E0 - OFF_M, OY0 = N0 - OFF_M;
const offDE = new Float32Array(OFF_N * OFF_N), offDN = new Float32Array(OFF_N * OFF_N);
const OD = new Float64Array(8), OI = new Int32Array(8);
function idw(E, N) {
  let n = 0;
  for (let i = 0; i < D.offs.length; i++) {
    const p = D.offs[i], d2 = (p[0] - E) ** 2 + (p[1] - N) ** 2;
    if (n < 8) {
      let j = n++;
      while (j > 0 && OD[j - 1] > d2) { OD[j] = OD[j - 1]; OI[j] = OI[j - 1]; j--; }
      OD[j] = d2; OI[j] = i;
    } else if (d2 < OD[7]) {
      let j = 7;
      while (j > 0 && OD[j - 1] > d2) { OD[j] = OD[j - 1]; OI[j] = OI[j - 1]; j--; }
      OD[j] = d2; OI[j] = i;
    }
  }
  let w = 0, de = 0, dn = 0;
  for (let k = 0; k < n; k++) {
    const p = D.offs[OI[k]], wk = 1 / (OD[k] + 1e-6);
    w += wk; de += p[2] * wk; dn += p[3] * wk;
  }
  return [de / w, dn / w];
}
for (let gy = 0; gy < OFF_N; gy++) {
  const N = OY0 + gy * OFF_S;
  for (let gx = 0; gx < OFF_N; gx++) {
    const [de, dn] = idw(OX0 + gx * OFF_S, N);
    offDE[gy * OFF_N + gx] = de; offDN[gy * OFF_N + gx] = dn;
  }
}
function offAt(E, N) {
  const fx = Math.min(OFF_N - 1.001, Math.max(0, (E - OX0) / OFF_S));
  const fy = Math.min(OFF_N - 1.001, Math.max(0, (N - OY0) / OFF_S));
  const x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
  const i = y0 * OFF_N + x0, i2 = i + OFF_N;
  return [
    (offDE[i] * (1 - tx) + offDE[i + 1] * tx) * (1 - ty) + (offDE[i2] * (1 - tx) + offDE[i2 + 1] * tx) * ty,
    (offDN[i] * (1 - tx) + offDN[i + 1] * tx) * (1 - ty) + (offDN[i2] * (1 - tx) + offDN[i2 + 1] * tx) * ty,
  ];
}
// FBX (X đông, Y bắc, Z cao) => game (x đông, y cao, z nam)
function toGame(x, y) {
  const E = E0 + x, N = N0 + y, o = offAt(E, N);
  return [E + o[0], -(N + o[1])];
}
const CENTER = toGame(0, 0);

// ---------- lưới đoạn tuyến: khoảng cách tới tim đường + s (để dùng bề rộng thật) ----------
const RX = D.x, RZ = D.z, RSTEP = D.step, RL = RX.length;
const RG = 60;
const segGrid = new Map();
for (let i = 0; i < RL; i++) {
  const j = (i + 1) % RL;
  const x0 = Math.min(RX[i], RX[j]), x1 = Math.max(RX[i], RX[j]);
  const z0 = Math.min(RZ[i], RZ[j]), z1 = Math.max(RZ[i], RZ[j]);
  for (let gx = Math.floor(x0 / RG); gx <= Math.floor(x1 / RG); gx++)
    for (let gz = Math.floor(z0 / RG); gz <= Math.floor(z1 / RG); gz++) {
      const k = gx + ',' + gz;
      (segGrid.get(k) || segGrid.set(k, []).get(k)).push(i);
    }
}
// trả [d, s]; chỉ xét ô 3×3 quanh điểm (đủ cho ngưỡng ≤ 13 m, xa hơn trả 1e9)
function routeNear(x, z) {
  const gx = Math.floor(x / RG), gz = Math.floor(z / RG);
  let best = 1e9, bs = 0;
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
    const a = segGrid.get((gx + i) + ',' + (gz + j)); if (!a) continue;
    for (const k of a) {
      const p = k, q = (k + 1) % RL;
      const ax = RX[p], az = RZ[p], bx = RX[q], bz = RZ[q];
      const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1;
      let t = ((x - ax) * vx + (z - az) * vz) / l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const dx = x - (ax + vx * t), dz = z - (az + vz * t), d = Math.hypot(dx, dz);
      if (d < best) { best = d; bs = (p + t) * RSTEP; }
    }
  }
  return [best, bs];
}
function routeHalf(s) {
  let hw = 7.2;
  for (const w of D.widths) if (s >= w.s0 && s <= w.s1) hw = w.hw;
  return hw;
}
function inPoly(x, z, P) {
  let c = false;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++)
    if ((P[i][1] > z) !== (P[j][1] > z) && x < P[i][0] + (P[j][0] - P[i][0]) * (z - P[i][1]) / (P[j][1] - P[i][1])) c = !c;
  return c;
}
function polyDist(x, z, P) {
  let d = Infinity;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
    const ax = P[j][0], az = P[j][1], bx = P[i][0], bz = P[i][1];
    const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1;
    let t = ((x - ax) * vx + (z - az) * vz) / l2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    d = Math.min(d, Math.hypot(x - (ax + vx * t), z - (az + vz * t)));
  }
  return d;
}
const nearVinhomes = (x, z) => inPoly(x, z, D.vinhomes) || polyDist(x, z, D.vinhomes) <= 30;
const [LX, LZ] = D.landmark81;

// ---------- đọc FBX ----------
console.log('Đọc', path.relative(ROOT, FBX));
const buf = fs.readFileSync(FBX);
const root = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '');
root.updateMatrixWorld(true);
const meshes = [];
root.traverse((o) => { if (o.isMesh && CAT_ID[o.name] !== undefined) meshes.push(o); });
meshes.sort((a, b) => CAT_ID[a.name] - CAT_ID[b.name]);

const buildings = [];
const reasons = { vinhomes: 0, landmark: 0, road: 0, height: 0 };
let dupTris = 0, totalComps = 0, totalTris = 0;
const px = [], py = [], pz = [];             // vị trí game, y = FBX z (gốc toà = 0)
const bb = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];

for (const mesh of meshes) {
  const cat = CAT_ID[mesh.name];
  const pos = mesh.geometry.attributes.position, nTri = Math.floor(pos.count / 3), m = mesh.matrixWorld;
  const vx = new Float32Array(pos.count), vy = new Float32Array(pos.count), vz = new Float32Array(pos.count);
  const qx = new Int32Array(pos.count), qy = new Int32Array(pos.count), qz = new Int32Array(pos.count);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).applyMatrix4(m);
    const [gx, gz] = toGame(v.x, v.y);
    vx[i] = gx; vy[i] = v.z; vz[i] = gz;
    qx[i] = Math.round(gx * 100); qy[i] = Math.round(v.z * 100); qz[i] = Math.round(gz * 100);
  }
  const parent = new Int32Array(nTri);
  for (let i = 0; i < nTri; i++) parent[i] = i;
  const find = (a) => { while (parent[a] !== a) { parent[a] = parent[parent[a]]; a = parent[a]; } return a; };
  const uni = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[b] = a; };
  const first = new Map(), seenTri = new Set();
  const keptTri = [];
  const key = (i) => qx[i] + ',' + qy[i] + ',' + qz[i];
  for (let t = 0; t < nTri; t++) {
    const a = t * 3, b = a + 1, c = a + 2;
    const ka = key(a), kb = key(b), kc = key(c);
    const dk = [ka, kb, kc].sort().join('|');
    if (seenTri.has(dk)) { dupTris++; continue; }
    seenTri.add(dk);
    const ti = keptTri.length; keptTri.push(t);
    totalTris++;
    for (const k of [ka, kb, kc]) {
      const f = first.get(k);
      if (f === undefined) first.set(k, ti); else uni(ti, f);
    }
  }
  const comps = new Map();
  for (let ti = 0; ti < keptTri.length; ti++) {
    const r = find(ti);
    let arr = comps.get(r); if (!arr) comps.set(r, arr = []);
    arr.push(keptTri[ti]);
  }
  totalComps += comps.size;
  console.log(`${mesh.name}: ${nTri} tam giác → ${comps.size} toà (${CATS[cat]})`);
  for (const tris of comps.values()) {
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const t of tris) for (let k = t * 3; k < t * 3 + 3; k++) {
      const x = vx[k], y = vy[k], z = vz[k];
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (z < z0) z0 = z; if (z > z1) z1 = z;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, h = y1 - y0;
    if ((cx - LX) ** 2 + (cz - LZ) ** 2 < 90 * 90) { reasons.landmark++; continue; }   // Landmark 81 + khối đế
    if (nearVinhomes(cx, cz)) { reasons.vinhomes++; continue; }
    let nearRoad = false;
    for (const t of tris) {
      for (let k = t * 3; k < t * 3 + 3; k++) {
        const [d, s] = routeNear(vx[k], vz[k]);
        if (d < routeHalf(s) + 4.5) { nearRoad = true; break; }
      }
      if (nearRoad) break;
    }
    if (nearRoad) { reasons.road++; continue; }
    if (h < 2.5) { reasons.height++; continue; }

    const firstTri = px.length / 3;
    for (const t of tris) for (let k = t * 3; k < t * 3 + 3; k++) {
      const x = vx[k], y = vy[k] - y0, z = vz[k];
      px.push(x); py.push(y); pz.push(z);
      if (x < bb[0]) bb[0] = x; if (y < bb[1]) bb[1] = y; if (z < bb[2]) bb[2] = z;
      if (x > bb[3]) bb[3] = x; if (y > bb[4]) bb[4] = y; if (z > bb[5]) bb[5] = z;
    }
    buildings.push({ firstTri, triCount: tris.length, cat, height: h });
  }
}

// ---------- ghi sgn-city.bin + header ----------
const n = buildings.length, triCount = px.length / 3;
const table = new Uint32Array(n * 3);
const f32 = new Float32Array(px.length * 3);
buildings.forEach((b, i) => {
  table[i * 3] = b.firstTri; table[i * 3 + 1] = b.triCount; table[i * 3 + 2] = b.cat;
  const src = b.firstTri * 3;
  let dst = b.firstTri * 9;
  for (let k = 0; k < b.triCount * 3; k++) {
    f32[dst++] = px[src + k]; f32[dst++] = py[src + k]; f32[dst++] = pz[src + k];
  }
});
const bin = Buffer.alloc(table.byteLength + f32.byteLength);
Buffer.from(table.buffer, table.byteOffset, table.byteLength).copy(bin, 0);
Buffer.from(f32.buffer, f32.byteOffset, f32.byteLength).copy(bin, table.byteLength);
fs.writeFileSync(path.join(OUT, 'sgn-city.bin'), bin);
const header = {
  format: 'sgn-city', version: 1, source: SOURCE,
  buildings: n, tris: triCount, vertices: triCount * 3,
  tableOffset: 0, tableCount: n, posOffset: table.byteLength,
  bbox: bb.map((v) => +v.toFixed(2)), center: CENTER.map((v) => +v.toFixed(2)), radius: 1225,
  categories: CATS, tallest: +Math.max(0, ...buildings.map((b) => b.height)).toFixed(2),
  dropped: { ...reasons, duplicateTris: dupTris },
};
fs.writeFileSync(path.join(OUT, 'sgn-city.json'), JSON.stringify(header));

// ---------- nước ----------
let wm = null;
root.traverse((o) => { if (o.isMesh && o.name === 'WATER') wm = o; });
const wp = wm.geometry.attributes.position, wm4 = wm.matrixWorld, wv = new THREE.Vector3(), wtris = [];
for (let i = 0; i < wp.count; i++) {
  wv.fromBufferAttribute(wp, i).applyMatrix4(wm4);
  const [x, z] = toGame(wv.x, wv.y);
  wtris.push(+x.toFixed(2), +z.toFixed(2));
}
fs.writeFileSync(path.join(OUT, 'sgn-water.json'), JSON.stringify({ tris: wtris }));
console.log(`Nước: ${wtris.length / 6} tam giác`);

// ---------- cây ----------
const treePts = [];
let treeBad = 0, treeVin = 0, treeRoad = 0;
const tmp = new THREE.Vector3();
root.traverse((o) => {
  if (!o.isMesh || o.name !== 'TREE') return;
  const e = o.matrixWorld.elements, z = e[14];
  if (!Number.isFinite(z) || Math.abs(z) > 1e5) { treeBad++; return; }
  const [x, gz] = toGame(e[12], e[13]);
  if (inPoly(x, gz, D.vinhomes)) { treeVin++; return; }
  if (routeNear(x, gz)[0] < 9) { treeRoad++; return; }
  treePts.push(+x.toFixed(1), +gz.toFixed(1));
});
fs.writeFileSync(path.join(OUT, 'sgn-ue-trees.json'), JSON.stringify(treePts));
console.log(`Cây: giữ ${treePts.length / 2}, bỏ ${treeBad} z hỏng / ${treeVin} Vinhomes / ${treeRoad} sát tuyến`);

// ---------- tổng kết ----------
console.log(`Nhà: ${n} toà / ${triCount} tam giác (${(bin.length / 1048576).toFixed(2)} MB), bỏ:`,
  `vinhomes ${reasons.vinhomes}, landmark ${reasons.landmark}, đường ${reasons.road}, thấp ${reasons.height}, trùng ${dupTris};`,
  `${totalComps} component / ${totalTris} tam giác sau lọc trùng`);
console.log('Tâm vòng tròn (game):', CENTER.map((v) => v.toFixed(1)).join(', '));
if (bin.length > 12 * 1048576) console.warn('CẢNH BÁO: sgn-city.bin > 12 MB');
