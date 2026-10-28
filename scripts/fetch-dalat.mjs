// Map Hồ Xuân Hương – Đà Lạt (🌲 id `dalat`, nhóm Chill): dữ liệu từ urban:EXPORT FBX (tâm 11.9449, 108.4456, vùng 2 520 m)
// + đường OpenStreetMap (ODbL, Overpass). FBX: X đông, Y bắc, Z cao (mét, khớp phép chiếu OSM cos(lat) — đã so khớp bờ hồ).
// Toạ độ game: x = X, z = −Y, y = Z − mặt hồ (mặt hồ Xuân Hương = 0).
// Tạo:
// - src/dalat-data.json: vòng khép kín quanh hồ (bước 5 m, chiều kim đồng hồ — hồ bên phải), độ cao đường, DEM 10 m (Int16 dm, base64)
// - docs/assets/dalat/dalat-city.glb: nhà (5 loại) + cầu + mặt nước (nén meshopt)
// - docs/assets/dalat/dalat-trees.json: cây [x, z, cao] (bỏ cây trên đường / dưới nước)
// - docs/assets/dalat/dalat-streets.json: các đường khác trong vùng (dải nhựa phủ trên địa hình)
// Chạy: node scripts/fetch-dalat.mjs [đường/dẫn/file.fbx]   (cache Overpass: <tmp>/chilldrive-osm/dalat)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FBX = process.argv[2] || path.join(ROOT, '.scratch/dalat.fbx');
const OUT = path.join(ROOT, 'docs/assets/dalat');
const CACHE = path.join(process.env.HLG_CACHE || path.join(os.tmpdir(), 'chilldrive-osm'), 'dalat');
const lat0 = 11.9449, lon0 = 108.4456, HALF = 1260;
const KE = Math.cos(lat0 * Math.PI / 180) * 111320, KN = 110574;
const BB = '11.9335,108.4340,11.9563,108.4572';
const STEP = 5, HW = 4.6, NO_HOUSE = 45;   // NO_HOUSE: bỏ toà có phần nào cách tim vòng hồ < 45 m (thực tế quanh hồ chỉ thấy nhà ở xa)
const SOURCE = 'OpenStreetMap contributors (ODbL), Overture Maps, Copernicus DEM — via urban:EXPORT';
fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(CACHE, { recursive: true });

// ---------- OSM ----------
const EPS = ['https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
async function overpass(name, query) {
  const f = path.join(CACHE, name + '.json');
  if (fs.existsSync(f) && fs.statSync(f).size > 1000) return JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const ep of EPS) {
    try {
      const r = await fetch(ep, { method: 'POST', headers: { 'User-Agent': 'chilldrive-mapgen/1.0', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(query) });
      if (!r.ok) { console.warn(ep, r.status); continue; }
      const txt = await r.text(), j = JSON.parse(txt);
      fs.writeFileSync(f, txt); console.log('đã tải', name, (txt.length / 1e3 | 0) + ' KB'); return j;
    } catch (e) { console.warn(ep, e.message); }
  }
  throw new Error('Overpass lỗi');
}
const osm = (await overpass('all', `[out:json][timeout:120];(way["highway"](${BB});way["natural"="water"](${BB});relation["natural"="water"](${BB}););out body geom;`)).elements;
const pr = (g) => [(g.lon - lon0) * KE, (g.lat - lat0) * KN];
// hạ nguồn: suối Cam Ly chui cống dưới đường vòng hồ (s ≈ 475) rồi chảy qua Công viên Ánh Sáng (thung lũng thấp hơn đường ~20 m)
const osmV = (await overpass('valley', `[out:json][timeout:60];(way["waterway"](11.9380,108.4300,11.9520,108.4440);way["leisure"="park"](11.9380,108.4300,11.9520,108.4440););out body geom;`)).elements;
const PARK = osmV.find((e) => e.id === 99660966).geometry.map(pr);                      // Công viên Ánh Sáng (E, N)
const STREAM = [...osmV.find((e) => e.id === 708032746).geometry, ...osmV.find((e) => e.id === 708032747).geometry.slice(1)].map(pr);   // cống + suối Cam Ly

const inPoly = (x, y, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > y) !== (P[j][1] > y) && x < P[i][0] + (P[j][0] - P[i][0]) * (y - P[i][1]) / (P[j][1] - P[i][1])) c = !c; return c; };
const polyDist = (x, y, P) => {
  let d = Infinity;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
    const ax = P[j][0], ay = P[j][1], vx = P[i][0] - ax, vy = P[i][1] - ay, l = vx * vx + vy * vy || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (y - ay) * vy) / l));
    d = Math.min(d, Math.hypot(x - ax - vx * t, y - ay - vy * t));
  }
  return d;
};

// hồ Xuân Hương: ghép các đoạn outer của relation thành 1 vòng
const lakeRel = osm.find((e) => e.tags?.name === 'Hồ Xuân Hương');
const segs = lakeRel.type === 'way' ? [lakeRel.geometry.map(pr)] : lakeRel.members.filter((m) => m.role === 'outer').map((m) => m.geometry.map(pr));
const ring = segs.shift();
while (segs.length) {
  const e = ring.at(-1); let bi = -1, rev = false, bd = Infinity;
  segs.forEach((s, i) => {
    const a = Math.hypot(s[0][0] - e[0], s[0][1] - e[1]), b = Math.hypot(s.at(-1)[0] - e[0], s.at(-1)[1] - e[1]);
    if (a < bd) { bd = a; bi = i; rev = false; } if (b < bd) { bd = b; bi = i; rev = true; }
  });
  const s = segs.splice(bi, 1)[0]; if (rev) s.reverse(); ring.push(...s.slice(1));
}
// điểm trong hồ xa bờ nhất (tâm tia cắt)
let cx = 0, cy = 0;
{ let bb = -1; for (let x = -1000; x < 1000; x += 10) for (let y = -1000; y < 1000; y += 10) if (inPoly(x, y, ring)) { const q = polyDist(x, y, ring); if (q > bb) { bb = q; cx = x; cy = y; } } }

// ---------- vòng quanh hồ: chu trình ngắn nhất cắt tia (cx, cy) → +x số lẻ lần (đồ thị đường xe chạy trong 300 m quanh hồ) ----------
const DRIVE = /^(primary|secondary|tertiary|residential|unclassified|living_street|primary_link|secondary_link|tertiary_link)$/;
const NP = new Map(), E = [];
for (const w of osm) {
  if (w.type !== 'way' || !DRIVE.test(w.tags?.highway || '')) continue;
  w.nodes.forEach((id, i) => NP.set(id, pr(w.geometry[i])));
  for (let i = 0; i + 1 < w.nodes.length; i++) {
    const a = w.nodes[i], b = w.nodes[i + 1], pa = NP.get(a), pb = NP.get(b);
    if (polyDist(pa[0], pa[1], ring) > 300 || polyDist(pb[0], pb[1], ring) > 300) continue;
    if (inPoly((pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2, ring)) continue;
    let cr = 0;
    if ((pa[1] > cy) !== (pb[1] > cy)) { const x = pa[0] + (pb[0] - pa[0]) * (cy - pa[1]) / (pb[1] - pa[1]); if (x > cx) cr = 1; }
    E.push([a, b, Math.hypot(pa[0] - pb[0], pa[1] - pb[1]), cr]);
  }
}
const adj = new Map();
for (const e of E) for (const [u, v] of [[e[0], e[1]], [e[1], e[0]]]) (adj.get(u) || adj.set(u, []).get(u)).push([v, e[2], e[3]]);
let best = null;
for (const s of new Set(E.filter((e) => e[3]).map((e) => e[0]))) {
  const dist = new Map(), prev = new Map(), key = (u, p) => u + ':' + p, pq = [[0, s, 0]];
  dist.set(key(s, 0), 0);
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [dd, u, p] = pq.shift();
    if (dd > (dist.get(key(u, p)) ?? Infinity)) continue;
    if (u === s && p === 1) break;
    for (const [v, w, c] of adj.get(u) || []) {
      const k = key(v, p ^ c), nd = dd + w;
      if (nd < (dist.get(k) ?? Infinity)) { dist.set(k, nd); prev.set(k, key(u, p)); pq.push([nd, v, p ^ c]); }
    }
  }
  const L = dist.get(key(s, 1));
  if (L !== undefined && (!best || L < best.L)) {
    const ids = []; let k = key(s, 1);
    while (k) { ids.push(+k.split(':')[0]); k = prev.get(k); }
    best = { L, ids: ids.reverse() };
  }
}
let P = best.ids.map((id) => NP.get(id));
if (Math.hypot(P[0][0] - P.at(-1)[0], P[0][1] - P.at(-1)[1]) < 0.1) P.pop();
// chiều kim đồng hồ (diện tích có dấu âm) => hồ bên phải xe
let area = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; area += a[0] * b[1] - b[0] * a[1]; }
if (area > 0) P.reverse();
// s = 0 ở điểm cực nam của vòng (bờ nam, đường Trần Quốc Toản)
{ let k = 0; P.forEach((p, i) => { if (p[1] < P[k][1]) k = i; }); P = P.slice(k).concat(P.slice(0, k)); }
const loopIds = new Set(best.ids);

// lấy mẫu đều 1 m rồi làm mượt vị trí (trung bình trượt 24 m, vòng tròn) => không lệch khỏi tuyến thật
const cum = [0]; for (let i = 1; i <= P.length; i++) { const a = P[i - 1], b = P[i % P.length]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
const RAW = cum.at(-1), N1 = Math.round(RAW), d1 = RAW / N1;
const R1 = [];
{ let j = 0; for (let i = 0; i < N1; i++) { const s = i * d1; while (cum[j + 1] < s) j++; const a = P[j], b = P[(j + 1) % P.length], t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1); R1.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } }
let Q = R1;
for (let pass = 0; pass < 3; pass++) {
  const W = 14, nq = [];
  for (let i = 0; i < N1; i++) { let x = 0, y = 0; for (let k = -W; k <= W; k++) { const q = Q[((i + k) % N1 + N1) % N1]; x += q[0]; y += q[1]; } nq.push([x / (2 * W + 1), y / (2 * W + 1)]); }
  Q = nq;
}
// độ dài sau làm mượt
const qc = [0]; for (let i = 1; i <= N1; i++) { const a = Q[i - 1], b = Q[i % N1]; qc.push(qc[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
const L = qc.at(-1), Nout = Math.round(L / STEP), step = L / Nout;
const qAt = (s) => { s = ((s % L) + L) % L; let lo = 0, hi = N1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (qc[m] <= s) lo = m; else hi = m; } const a = Q[lo], b = Q[(lo + 1) % N1], t = (s - qc[lo]) / (qc[lo + 1] - qc[lo] || 1); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; };
const X = [], Z = [], heading = [];
for (let i = 0; i <= Nout; i++) {
  const s = i * step, a = qAt(s - 1), b = qAt(s + 1), c = qAt(s);
  X.push(+c[0].toFixed(2)); Z.push(+(-c[1]).toFixed(2));
  let h = Math.atan2(-(b[0] - a[0]), b[1] - a[1]);
  if (i) { while (h - heading[i - 1] > Math.PI) h -= 2 * Math.PI; while (h - heading[i - 1] < -Math.PI) h += 2 * Math.PI; }
  heading.push(+h.toFixed(5));
}
const TURN = heading.at(-1) - heading[0];
console.log(`Vòng hồ: ${RAW.toFixed(0)} m thô → ${L.toFixed(0)} m mượt, ${Nout} điểm, tổng góc ${(TURN / Math.PI).toFixed(2)}π`);

// ---------- đọc FBX ----------
console.log('Đọc', FBX);
const buf = fs.readFileSync(FBX);
const root = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '');
root.updateMatrixWorld(true);
const byName = (n) => { let m = null; root.traverse((o) => { if (o.isMesh && o.name === n && !m) m = o; }); return m; };
const worldVerts = (mesh) => {
  const pos = mesh.geometry.attributes.position, v = new THREE.Vector3(), out = new Float64Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld); out[i * 3] = v.x; out[i * 3 + 1] = v.y; out[i * 3 + 2] = v.z; }
  return out;
};
const triList = (mesh, V) => { const ix = mesh.geometry.index; const n = ix ? ix.count : V.length / 3; const T = new Uint32Array(n); for (let i = 0; i < n; i++) T[i] = ix ? ix.getX(i) : i; return T; };

// mặt hồ = độ cao phổ biến nhất của các đỉnh nước trong hồ Xuân Hương
const WM = byName('WATER'), WV = worldVerts(WM), WT = triList(WM, WV);
let L0;
{ const hz = new Map(); for (let i = 0; i < WV.length; i += 3) if (inPoly(WV[i], WV[i + 1], ring)) { const k = Math.round(WV[i + 2] * 10); hz.set(k, (hz.get(k) || 0) + 1); }
  L0 = [...hz.entries()].sort((a, b) => b[1] - a[1])[0][0] / 10; }
console.log('Mặt hồ (FBX z):', L0);

// ---------- DEM 10 m từ lưới TERRAIN (raster hoá tam giác) ----------
const CELL = 10, NX = Math.round((2 * HALF + 20) / CELL) + 1, X0 = -HALF - 10;
const dem = new Float32Array(NX * NX).fill(NaN);
function raster(V, T, cb) {
  for (let t = 0; t < T.length; t += 3) {
    const a = T[t] * 3, b = T[t + 1] * 3, c = T[t + 2] * 3;
    const ax = V[a], ay = V[a + 1], bx = V[b], by = V[b + 1], cx2 = V[c], cy2 = V[c + 1];
    const det = (by - cy2) * (ax - cx2) + (cx2 - bx) * (ay - cy2); if (Math.abs(det) < 1e-9) continue;
    const i0 = Math.max(0, Math.ceil((Math.min(ax, bx, cx2) - X0) / CELL)), i1 = Math.min(NX - 1, Math.floor((Math.max(ax, bx, cx2) - X0) / CELL));
    const j0 = Math.max(0, Math.ceil((Math.min(ay, by, cy2) - X0) / CELL)), j1 = Math.min(NX - 1, Math.floor((Math.max(ay, by, cy2) - X0) / CELL));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = X0 + i * CELL, y = X0 + j * CELL;
      const l1 = ((by - cy2) * (x - cx2) + (cx2 - bx) * (y - cy2)) / det, l2 = ((cy2 - ay) * (x - cx2) + (ax - cx2) * (y - cy2)) / det, l3 = 1 - l1 - l2;
      if (l1 < -1e-6 || l2 < -1e-6 || l3 < -1e-6) continue;
      cb(i, j, l1 * V[a + 2] + l2 * V[b + 2] + l3 * V[c + 2]);
    }
  }
}
{ const TM = byName('TERRAIN'), TV = worldVerts(TM); raster(TV, triList(TM, TV), (i, j, z) => { dem[j * NX + i] = z - L0; }); }
// ô trống (mép) lấy từ ô bên cạnh
for (let pass = 0; pass < 6; pass++) for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) {
  const k = j * NX + i; if (!Number.isNaN(dem[k])) continue;
  let a = 0, n = 0; for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const v = dem[(j + dj) * NX + i + di]; if (i + di >= 0 && i + di < NX && j + dj >= 0 && j + dj < NX && !Number.isNaN(v)) { a += v; n++; } }
  if (n) dem[k] = a / n;
}
for (let k = 0; k < dem.length; k++) if (Number.isNaN(dem[k])) dem[k] = 0;
// đáy nước: thấp hơn mặt nước FBX 5.5 m
const wet = new Uint8Array(NX * NX);
const dem0 = dem.slice();                                        // địa hình gốc (trước khi đào lòng nước)
raster(WV, WT, (i, j, z) => { const k = j * NX + i; wet[k] = 1; dem[k] = Math.min(dem[k], z - L0 - 5.5); });   // mặt nước game hạ 3 m (dalat.js WATER_DROP) => đáy sâu 2.5 m dưới mặt nước
// hồ Xuân Hương (đa giác OSM, cả chỗ FBX thiếu nước): đáy sâu dần từ bờ (−3.3 ở mép => −5.5 khi cách bờ ≥ 14 m) thay vì hạ thẳng
// −5.5 (vách đứng bậc thang theo ô 10 m); ngoài bờ 10 m: bờ dốc thoải từ mặt nước lên địa hình gốc (mặt nước game −3 so với FBX)
{
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) {
    const x = X0 + i * CELL, y = X0 + j * CELL, k = j * NX + i;
    if (Math.abs(x - cx) > 1300 || Math.abs(y - cy) > 1300) continue;
    const inside = inPoly(x, y, ring), d = polyDist(x, y, ring);
    if (inside) { wet[k] = 1; dem[k] = Math.min(dem0[k], -3.3 - 2.2 * ss(0, 14, d)); }
    else if (d < 10) dem[k] = Math.min(dem0[k], -3.3 + (dem0[k] + 3.3) * ss(0, 10, d));
  }
}
// vòng xoay chính (OSM 51561593, tâm game −870.9 / 514.5 => đông −870.9, bắc −514.5): mặt đất bằng phẳng trong 50 m (cao độ TB đất gốc
// trong 40 m), chuyển dần về địa hình gốc tới 85 m => vành vòng xoay / nhánh / đường vòng hồ cùng một mặt phẳng, không đất trồi lên
{
  const RX = -870.9, RN = -514.5, ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  let sum = 0, n = 0;
  for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) { const x = X0 + i * CELL, y = X0 + j * CELL; if (Math.hypot(x - RX, y - RN) < 40) { sum += dem0[j * NX + i]; n++; } }
  const H = Math.max(sum / n, 0.8);                               // không thấp hơn mặt đường vòng hồ (≥ mặt hồ cũ + 0.8)
  for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) {
    const x = X0 + i * CELL, y = X0 + j * CELL, d = Math.hypot(x - RX, y - RN), k = j * NX + i;
    if (d < 85 && !wet[k]) dem[k] = H + (dem[k] - H) * ss(50, 85, d);
  }
  console.log('Vòng xoay: san phẳng ở', H.toFixed(2), 'm');
}
// thung lũng Công viên Ánh Sáng: trong đa giác công viên đất hạ sâu dần (20 m khi cách mép ≥ 25 m) dưới mặt đường (0.8), dọc suối thêm lòng suối 1.5 m
{
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const segD = (x, y, P) => { let d = Infinity; for (let i = 0; i + 1 < P.length; i++) { const ax = P[i][0], ay = P[i][1], vx = P[i + 1][0] - ax, vy = P[i + 1][1] - ay, l = vx * vx + vy * vy || 1; const t = Math.max(0, Math.min(1, ((x - ax) * vx + (y - ay) * vy) / l)); d = Math.min(d, Math.hypot(x - ax - vx * t, y - ay - vy * t)); } return d; };
  for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) {
    const x = X0 + i * CELL, y = X0 + j * CELL, k = j * NX + i;
    if (!inPoly(x, y, PARK)) continue;
    const d = polyDist(x, y, PARK), floor = 0.8 - 20 * ss(0, 25, d) - 1.5 * (1 - ss(2, 7, segD(x, y, STREAM)));
    dem[k] = Math.min(dem[k], floor);
  }
}
const demAt = (x, y) => {   // x đông, y bắc
  const fx = Math.min(NX - 1.001, Math.max(0, (x - X0) / CELL)), fy = Math.min(NX - 1.001, Math.max(0, (y - X0) / CELL));
  const i = Math.floor(fx), j = Math.floor(fy), tx = fx - i, ty = fy - j, k = j * NX + i;
  return (dem[k] * (1 - tx) + dem[k + 1] * tx) * (1 - ty) + (dem[k + NX] * (1 - tx) + dem[k + NX + 1] * tx) * ty;
};

// ---------- độ cao mặt đường: DEM dọc tuyến làm mượt 60 m, không thấp hơn mặt hồ + 0.8 m ----------
const g0 = []; for (let i = 0; i < Nout; i++) g0.push(demAt(X[i], -Z[i]));
let prof = g0.map((v) => Math.max(v, 0.8));
for (let pass = 0; pass < 3; pass++) { const W = 6; prof = prof.map((_, i) => { let a = 0; for (let k = -W; k <= W; k++) a += prof[((i + k) % Nout + Nout) % Nout]; return a / (2 * W + 1); }); }
const elev = prof.map((v, i) => +(v - g0[i]).toFixed(2)); elev.push(elev[0]);
console.log(`Đường: cao ${Math.min(...prof).toFixed(1)}…${Math.max(...prof).toFixed(1)} m so với mặt hồ, lệch DEM tối đa ${Math.max(...elev.map(Math.abs)).toFixed(1)} m`);

// lưới đoạn tuyến (khoảng cách tới tim vòng hồ, toạ độ game)
const RG = 40, segGrid = new Map();
for (let i = 0; i < Nout; i++) {
  const x0 = Math.min(X[i], X[i + 1]), x1 = Math.max(X[i], X[i + 1]), z0 = Math.min(Z[i], Z[i + 1]), z1 = Math.max(Z[i], Z[i + 1]);
  for (let gx = Math.floor(x0 / RG); gx <= Math.floor(x1 / RG); gx++) for (let gz = Math.floor(z0 / RG); gz <= Math.floor(z1 / RG); gz++) {
    const k = gx + ',' + gz; (segGrid.get(k) || segGrid.set(k, []).get(k)).push(i);
  }
}
function loopDist(x, z) {
  const gx = Math.floor(x / RG), gz = Math.floor(z / RG); let best = 1e9;
  for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) for (const i of segGrid.get((gx + a) + ',' + (gz + b)) || []) {
    const ax = X[i], az = Z[i], vx = X[i + 1] - ax, vz = Z[i + 1] - az, l = vx * vx + vz * vz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / l));
    best = Math.min(best, Math.hypot(x - ax - vx * t, z - az - vz * t));
  }
  return best;
}

// ---------- đường khác (dải nhựa): bỏ đoạn trùng vòng hồ ----------
const SW = { primary: 6, secondary: 5, tertiary: 4.5, primary_link: 3.5, secondary_link: 3.5, tertiary_link: 3.5, residential: 3.2, unclassified: 3, living_street: 2.6, service: 2.2, pedestrian: 2.5 };
const streets = [];
const sGrid = new Map();
for (const w of osm) {
  const hw = SW[w.tags?.highway]; if (w.type !== 'way' || !hw) continue;
  let cur = null;
  const flush = () => { if (cur && cur.length >= 6) streets.push([hw, ...cur]); cur = null; };
  for (let i = 0; i < w.nodes.length; i++) {
    const [e, n] = pr(w.geometry[i]), x = +e.toFixed(1), z = +(-n).toFixed(1);
    const onLoop = loopIds.has(w.nodes[i]) && (i + 1 >= w.nodes.length || loopIds.has(w.nodes[i + 1])) && (i === 0 || loopIds.has(w.nodes[i - 1]));
    if (Math.abs(e) > HALF + 40 || Math.abs(n) > HALF + 40 || onLoop) { if (cur) { cur.push(x, z); } flush(); continue; }
    (cur || (cur = [])).push(x, z);
  }
  flush();
}
for (const st of streets) for (let k = 1; k + 3 < st.length; k += 2) {
  const gx = Math.floor(st[k] / RG), gz = Math.floor(st[k + 1] / RG), key = gx + ',' + gz;
  (sGrid.get(key) || sGrid.set(key, []).get(key)).push([st[0], st[k], st[k + 1], st[k + 2], st[k + 3]]);
}
function nearStreet(x, z) {
  const gx = Math.floor(x / RG), gz = Math.floor(z / RG);
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const [hw, ax, az, bx, bz] of sGrid.get((gx + a) + ',' + (gz + b)) || []) {
    const vx = bx - ax, vz = bz - az, l = vx * vx + vz * vz || 1, t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / l));
    if (Math.hypot(x - ax - vx * t, z - az - vz * t) < hw + 1) return true;
  }
  return false;
}
fs.writeFileSync(path.join(OUT, 'dalat-streets.json'), JSON.stringify({ source: 'OpenStreetMap contributors (ODbL)', s: streets }));
console.log('Đường khác:', streets.length, 'đoạn');

// ---------- nhà (tách toà theo component, bỏ toà chạm vòng hồ) + cầu + nước => GLB ----------
const CATS = ['BUILDINGS_RESIDENTIAL', 'BUILDINGS_PUBLIC', 'BUILDINGS_COMMERCIAL', 'BUILDINGS_UTILITY', 'BUILDINGS_OTHER'];
const COLOR = { BUILDINGS_RESIDENTIAL: [0.85, 0.81, 0.74], BUILDINGS_PUBLIC: [0.73, 0.78, 0.81], BUILDINGS_COMMERCIAL: [0.85, 0.76, 0.65], BUILDINGS_UTILITY: [0.81, 0.8, 0.78], BUILDINGS_OTHER: [0.79, 0.78, 0.76], BRIDGES: [0.42, 0.42, 0.44], WATER: [0.18, 0.33, 0.41] };
const meshes = [];
let dropped = 0, kept = 0;
for (const name of CATS) {
  const M = byName(name); if (!M) continue;
  const V = worldVerts(M), T = triList(M, V), nTri = T.length / 3;
  const parent = new Int32Array(nTri); for (let i = 0; i < nTri; i++) parent[i] = i;
  const find = (a) => { while (parent[a] !== a) { parent[a] = parent[parent[a]]; a = parent[a]; } return a; };
  const first = new Map(), q = (i) => Math.round(V[i * 3] * 100) + ',' + Math.round(V[i * 3 + 1] * 100) + ',' + Math.round(V[i * 3 + 2] * 100);
  for (let t = 0; t < nTri; t++) for (let k = 0; k < 3; k++) { const key = q(T[t * 3 + k]), f = first.get(key); if (f === undefined) first.set(key, t); else { const a = find(t), b = find(f); if (a !== b) parent[b] = a; } }
  const comps = new Map(); for (let t = 0; t < nTri; t++) { const r = find(t); (comps.get(r) || comps.set(r, []).get(r)).push(t); }
  const pos = [];
  for (const tris of comps.values()) {
    let hit = false;
    for (const t of tris) { for (let k = 0; k < 3; k++) { const i = T[t * 3 + k]; if (loopDist(V[i * 3], -V[i * 3 + 1]) < NO_HOUSE || inPoly(V[i * 3], V[i * 3 + 1], PARK)) { hit = true; break; } } if (hit) break; }
    if (hit) { dropped++; continue; }
    kept++;
    for (const t of tris) for (let k = 0; k < 3; k++) { const i = T[t * 3 + k]; pos.push(V[i * 3], V[i * 3 + 2] - L0, -V[i * 3 + 1]); }
  }
  meshes.push({ name, pos });
}
for (const name of ['BRIDGES', 'WATER']) {
  const M = byName(name), V = worldVerts(M), T = triList(M, V), pos = [];
  for (let t = 0; t < T.length; t++) { const i = T[t]; pos.push(V[i * 3], V[i * 3 + 2] - L0 + (name === 'WATER' ? 0.05 : 0), -V[i * 3 + 1]); }
  meshes.push({ name, pos });   // (X, Y, Z) → (X, Z, −Y) là phép quay => giữ chiều tam giác
}
console.log(`Nhà: giữ ${kept} toà, bỏ ${dropped} toà chạm vòng hồ`);

function writeGLB(file, list) {
  const bins = [], json = { asset: { version: '2.0', generator: 'chilldrive fetch-dalat' }, scene: 0, scenes: [{ nodes: [] }], nodes: [], meshes: [], materials: [], accessors: [], bufferViews: [], buffers: [] };
  let off = 0;
  for (const m of list) {
    const p = new Float32Array(m.pos), g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.computeVertexNormals();
    const n = g.attributes.normal.array;
    const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[i + k]); mx[k] = Math.max(mx[k], p[i + k]); }
    const ai = json.accessors.length;
    for (const [arr, extra] of [[p, { min: mn, max: mx }], [n, {}]]) {
      const b = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
      json.bufferViews.push({ buffer: 0, byteOffset: off, byteLength: b.length, target: 34962 });
      json.accessors.push({ bufferView: json.bufferViews.length - 1, componentType: 5126, count: arr.length / 3, type: 'VEC3', ...extra });
      bins.push(b); off += b.length;
    }
    json.materials.push({ name: m.name, pbrMetallicRoughness: { baseColorFactor: [...COLOR[m.name], 1], metallicFactor: 0, roughnessFactor: 0.85 }, doubleSided: m.name === 'WATER' });
    json.meshes.push({ name: m.name, primitives: [{ attributes: { POSITION: ai, NORMAL: ai + 1 }, material: json.materials.length - 1 }] });
    json.nodes.push({ name: m.name, mesh: json.meshes.length - 1 });
    json.scenes[0].nodes.push(json.nodes.length - 1);
  }
  const bin = Buffer.concat(bins); json.buffers.push({ byteLength: bin.length });
  let js = Buffer.from(JSON.stringify(json)); js = Buffer.concat([js, Buffer.alloc((4 - js.length % 4) % 4, 0x20)]);
  const total = 12 + 8 + js.length + 8 + bin.length, h = Buffer.alloc(12);
  h.writeUInt32LE(0x46546C67, 0); h.writeUInt32LE(2, 4); h.writeUInt32LE(total, 8);
  const c1 = Buffer.alloc(8); c1.writeUInt32LE(js.length, 0); c1.writeUInt32LE(0x4E4F534A, 4);
  const c2 = Buffer.alloc(8); c2.writeUInt32LE(bin.length, 0); c2.writeUInt32LE(0x004E4942, 4);
  fs.writeFileSync(file, Buffer.concat([h, c1, js, c2, bin]));
}
const rawGlb = path.join(ROOT, '.scratch/dalat-city-raw.glb'), glb = path.join(OUT, 'dalat-city.glb');
writeGLB(rawGlb, meshes);
execSync(`npx --yes @gltf-transform/cli@4 meshopt "${rawGlb}" "${glb}"`, { stdio: 'inherit' });
console.log('GLB:', (fs.statSync(rawGlb).size / 1048576).toFixed(1), 'MB →', (fs.statSync(glb).size / 1048576).toFixed(2), 'MB');

// ---------- cây ----------
const trees = []; let tBad = 0, tRoad = 0, tWet = 0;
const box = new THREE.Box3();
root.traverse((o) => {
  if (!o.isMesh || o.name !== 'TREE') return;
  box.setFromObject(o);
  if (!Number.isFinite(box.min.z) || Math.abs(box.min.z) > 1e5) { tBad++; return; }
  const e = (box.min.x + box.max.x) / 2, n = (box.min.y + box.max.y) / 2, x = e, z = -n;
  const fi = Math.round((e - X0) / CELL), fj = Math.round((n - X0) / CELL);
  if (fi >= 0 && fj >= 0 && fi < NX && fj < NX && wet[fj * NX + fi]) { tWet++; return; }
  if (loopDist(x, z) < HW + 3 || nearStreet(x, z)) { tRoad++; return; }
  trees.push(+x.toFixed(1), +z.toFixed(1), +Math.min(30, Math.max(3, box.max.z - box.min.z)).toFixed(1));
});
fs.writeFileSync(path.join(OUT, 'dalat-trees.json'), JSON.stringify(trees));
console.log(`Cây: giữ ${trees.length / 3}, bỏ ${tBad} hỏng / ${tRoad} trên đường / ${tWet} dưới nước`);

// ---------- dữ liệu tuyến + DEM ----------
const q16 = new Int16Array(dem.length); for (let k = 0; k < dem.length; k++) q16[k] = Math.round(dem[k] * 10);
// DEM theo toạ độ game: hàng j theo z tăng (z = −bắc) => lật hàng
const g16 = new Int16Array(dem.length); for (let j = 0; j < NX; j++) for (let i = 0; i < NX; i++) g16[j * NX + i] = q16[(NX - 1 - j) * NX + i];
const lakeG = ring.filter((_, i) => i % 2 === 0).map(([e, n]) => [+e.toFixed(1), +(-n).toFixed(1)]);
const data = {
  source: SOURCE, origin: [lat0, lon0], KE, KN, lakeLevel: L0,
  step: +step.toFixed(4), length: +L.toFixed(1), turn: +TURN.toFixed(5), start: 40,
  dem: { x0: X0, z0: -(X0 + (NX - 1) * CELL), cell: CELL, nx: NX, nz: NX, scale: 0.1, b64: Buffer.from(g16.buffer).toString('base64') },
  lake: lakeG, park: PARK.map(([e, n]) => [+e.toFixed(1), +(-n).toFixed(1)]), stream: STREAM.map(([e, n]) => [+e.toFixed(1), +(-n).toFixed(1)]), elev, road: prof.map((v) => +v.toFixed(2)).concat(+prof[0].toFixed(2)), x: X, z: Z, heading,
};
fs.writeFileSync(path.join(ROOT, 'src/dalat-data.json'), JSON.stringify(data));
console.log('Ghi src/dalat-data.json', (fs.statSync(path.join(ROOT, 'src/dalat-data.json')).size / 1024).toFixed(0), 'KB');
