// Tải địa hình (SRTM), công trình và loại đất (OSM) quanh cao tốc HLG, nén lại cho game 3D:
//   src/hlg-dem.json       lưới cao độ theo toạ độ đường (hàng mỗi 100 m của s, cột u = −1500..+1500 mỗi 100 m)
//   docs/assets/hlg-env.json  nhà (7 số nguyên mỗi nhà, theo (s,u) so với tim đường) + lưới loại đất (hàng 40 m × cột 40 m)
// Tim đường: tích phân heading trong src/hlg-data.json (bước 10 m, x−=sin(th)·ds, z−=cos(th)·ds), vector phải = (cos th, −sin th).
// Chạy: node scripts/fetch-hlg-env.mjs   (cache: env HLG_CACHE, mặc định <tmp>/chilldrive-osm; ONLY=dem|env để chạy riêng)
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import zlib from 'node:zlib';
import readline from 'node:readline';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const CACHE = process.env.HLG_CACHE || path.join(os.tmpdir(), 'chilldrive-osm');
const ONLY = process.env.ONLY || '';
const EPS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter', 'https://maps.mail.ru/osm/tools/overpass/api/interpreter'];
fs.mkdirSync(CACHE, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const T0 = Date.now();

// ---------- tim đường ----------
const D = JSON.parse(fs.readFileSync('src/hlg-data.json', 'utf8'));
const { lat: lat0, lon: lon0 } = D.origin, STEP = D.step, LEN = D.length, HD = D.heading, NS = HD.length;
const KE = Math.cos(lat0 * Math.PI / 180) * 111320, KN = 110540;
const IX = [0], IZ = [0];
for (let i = 0; i < NS; i++) { IX.push(IX[i] - Math.sin(HD[i]) * STEP); IZ.push(IZ[i] - Math.cos(HD[i]) * STEP); }
const segOf = (s) => Math.max(0, Math.min(NS - 1, Math.floor(s / STEP)));
// (s,u) → (x,z): điểm trên tim + u·vector phải của bước đó
function toXZ(s, u) {
  const i = segOf(s), t = s / STEP - i, th = HD[i];
  return [IX[i] + (IX[i + 1] - IX[i]) * t + u * Math.cos(th), IZ[i] + (IZ[i + 1] - IZ[i]) * t - u * Math.sin(th)];
}
const xzToLL = (x, z) => [lat0 - z / KN, lon0 + x / KE];
const llToXZ = (lat, lon) => [(lon - lon0) * KE, -(lat - lat0) * KN];
// (x,z) → {s,u,ok}: đoạn gần nhất (t kẹp [0,1]); u theo vector phải của đoạn; ngoài hai đầu thì ok=false
function toSU(x, z) {
  let bd = Infinity, bi = 0, bt = 0;
  for (let i = 0; i < NS; i++) {
    const ax = IX[i], az = IZ[i], dx = IX[i + 1] - ax, dz = IZ[i + 1] - az;
    let t = ((x - ax) * dx + (z - az) * dz) / (STEP * STEP);
    const tc = t < 0 ? 0 : t > 1 ? 1 : t, d = Math.hypot(x - ax - dx * tc, z - az - dz * tc);
    if (d < bd) { bd = d; bi = i; bt = t; }
  }
  const th = HD[bi], u = (x - IX[bi] - (IX[bi + 1] - IX[bi]) * Math.max(0, Math.min(1, bt))) * Math.cos(th) - (z - IZ[bi] - (IZ[bi + 1] - IZ[bi]) * Math.max(0, Math.min(1, bt))) * Math.sin(th);
  return { s: (bi + Math.max(0, Math.min(1, bt))) * STEP, u, ok: !((bi === 0 && bt < 0) || (bi === NS - 1 && bt > 1)) };
}
const wrapHalf = (a) => { a = ((a % Math.PI) + Math.PI) % Math.PI; return a > Math.PI / 2 ? a - Math.PI : a; };   // hộp đối xứng 180° → (−π/2, π/2]

// ---------- Overpass có cache ----------
async function overpass(name, query) {
  const f = path.join(CACHE, name + '.json');
  if (fs.existsSync(f) && fs.statSync(f).size > 100) return JSON.parse(fs.readFileSync(f, 'utf8'));
  for (let t = 0; t < 8; t++) {
    const ep = EPS[t % EPS.length];
    try {
      const r = await fetch(ep, { method: 'POST', headers: { 'User-Agent': 'chilldrive-mapgen/1.0', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(query), signal: AbortSignal.timeout(400000) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const txt = await r.text(); const j = JSON.parse(txt);
      if (j.remark && /error|timed out|out of memory/i.test(j.remark)) throw new Error('remark: ' + j.remark);
      fs.writeFileSync(f, txt); console.log('đã tải', name, (txt.length / 1e6).toFixed(1) + ' MB'); return j;
    } catch (e) { console.log('lỗi', name, ep, e.message); await sleep(5000 + t * 3000); }
  }
  throw new Error('không tải được ' + name);
}
// bbox (nam,tây,bắc,đông) quanh đoạn tim đường [s0,s1] mở rộng r mét
function bboxOf(s0, s1, r) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let s = s0; s <= s1 + 1; s += 50) { const [x, z] = toXZ(Math.min(s, LEN), 0); x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
  const a = xzToLL(x0 - r, z1 + r), c = xzToLL(x1 + r, z0 - r);   // z lớn = nam
  return `(${a[0].toFixed(5)},${a[1].toFixed(5)},${c[0].toFixed(5)},${c[1].toFixed(5)})`;
}

// =====================================================================
// 1) CAO ĐỘ
// =====================================================================
async function doDem() {
  const DS = 100, DU = 100, U0 = -1500, COLS = 31, ROWS = Math.floor(LEN / DS) + 1, N = ROWS * COLS;
  const ll = new Array(N);
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { const [x, z] = toXZ(r * DS, U0 + c * DU); ll[r * COLS + c] = xzToLL(x, z); }
  const raw = new Array(N).fill(null);
  const B = 100, nb = Math.ceil(N / B);
  async function fetchBatch(ds, pts) {
    const url = `https://api.opentopodata.org/v1/${ds}?locations=` + pts.map((p) => p[0].toFixed(5) + ',' + p[1].toFixed(5)).join('|');
    for (let t = 0; t < 8; t++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': 'chilldrive-mapgen/1.0' }, signal: AbortSignal.timeout(60000) });
        if (r.status === 429) { console.log('429, chờ'); await sleep(5000 * (t + 1)); continue; }
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const j = await r.json(); if (j.status !== 'OK') throw new Error(j.error || 'status ' + j.status);
        return j.results.map((x) => x.elevation);
      } catch (e) { console.log('lỗi dem', ds, e.message); if (t >= 2) return null; await sleep(3000); }
    }
    return null;
  }
  let calls = 0, fb = 0;
  for (let b = 0; b < nb; b++) {
    const f = path.join(CACHE, `dem-${String(b).padStart(3, '0')}.json`), pts = ll.slice(b * B, (b + 1) * B);
    let vals;
    if (fs.existsSync(f)) vals = JSON.parse(fs.readFileSync(f, 'utf8'));
    else {
      await sleep(1100); vals = await fetchBatch('srtm30m', pts); calls++;
      if (!vals) { fb++; await sleep(1100); vals = await fetchBatch('aster30m', pts); }
      if (!vals) throw new Error('không tải được cao độ lô ' + b);
      fs.writeFileSync(f, JSON.stringify(vals));
    }
    vals.forEach((v, k) => { raw[b * B + k] = v; });
    if (b % 20 === 0) console.log(`DEM lô ${b + 1}/${nb} (gọi ${calls}, aster ${fb}) ${((Date.now() - T0) / 1000).toFixed(0)}s`);
  }
  // ô thiếu dữ liệu: lấy trung bình ô lân cận, không có thì 0
  const nulls = raw.filter((v) => v == null).length;
  const at = (r, c) => (r < 0 || c < 0 || r >= ROWS || c >= COLS ? null : raw[r * COLS + c]);
  const filled = raw.map((v, i) => {
    if (v != null) return v;
    const r = (i / COLS) | 0, c = i % COLS, nb2 = [];
    for (let dr = -2; dr <= 2; dr++) for (let dc = -2; dc <= 2; dc++) { const w = at(r + dr, c + dc); if (w != null) nb2.push(w); }
    return nb2.length ? nb2.reduce((a, b) => a + b) / nb2.length : 0;
  });
  // làm mượt hộp 3×3, kẹp âm về 0, làm tròn 0.1
  const h = new Array(N);
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    let s = 0, n = 0;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) { const rr = r + dr, cc = c + dc; if (rr < 0 || cc < 0 || rr >= ROWS || cc >= COLS) continue; s += filled[rr * COLS + cc]; n++; }
    h[r * COLS + c] = Math.round(Math.max(0, s / n) * 10) / 10;
  }
  fs.writeFileSync('src/hlg-dem.json', JSON.stringify({ ds: DS, du: DU, u0: U0, cols: COLS, rows: ROWS, h }));
  const cc = (COLS - 1) / 2;
  console.log(`\nDEM: ${ROWS} hàng × ${COLS} cột, ô thiếu ${nulls}, lô dùng aster ${fb}, file ${(fs.statSync('src/hlg-dem.json').size / 1024).toFixed(0)} KB`);
  console.log('Cao độ dọc tim đường (m):');
  console.log(Array.from({ length: Math.floor(LEN / 2000) + 1 }, (_, k) => `km${k * 2}:${h[Math.min(ROWS - 1, k * 20) * COLS + cc]}`).join('  '));
  let mn = Infinity, mx = -Infinity; for (const v of h) { if (v < mn) mn = v; if (v > mx) mx = v; }
  const cl = []; for (let r = 0; r < ROWS; r++) cl.push(h[r * COLS + cc]);
  console.log(`min/max toàn lưới: ${mn} / ${mx} m; tim đường: ${Math.min(...cl)} / ${Math.max(...cl)} m`);
}

// =====================================================================
// 2) NHÀ + LOẠI ĐẤT
// =====================================================================
const COMM = new Set(['commercial', 'office', 'retail', 'supermarket', 'hotel', 'shop', 'mall', 'kiosk_shop', 'bank', 'restaurant', 'fuel_station']);
const INDU = new Set(['industrial', 'warehouse', 'factory', 'manufacture', 'storage_tank', 'hangar', 'depot', 'logistics']);
const OTHER = new Set(['school', 'kindergarten', 'university', 'college', 'temple', 'church', 'pagoda', 'cathedral', 'chapel', 'mosque', 'hospital', 'clinic', 'civic', 'public', 'government', 'train_station', 'transportation', 'service', 'garage', 'garages', 'carport', 'shed', 'hut', 'cabin', 'roof', 'barn', 'farm_auxiliary', 'stable', 'greenhouse', 'toilets', 'sports_hall', 'stadium', 'religious', 'shrine', 'fire_station', 'cowshed', 'sty', 'static_caravan', 'container', 'construction']);
const SMALL = new Set(['service', 'garage', 'garages', 'carport', 'shed', 'hut', 'cabin', 'roof', 'barn', 'farm_auxiliary', 'stable', 'greenhouse', 'toilets', 'cowshed', 'sty', 'container', 'static_caravan']);

function hull(pts) {   // bao lồi (monotone chain)
  const p = pts.map((q) => q).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]), lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo.at(-2), lo.at(-1), q) <= 0) lo.pop(); lo.push(q); }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cr(up.at(-2), up.at(-1), q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
// hộp chữ nhật diện tích nhỏ nhất: {cx,cz,w,d,a}; trục +x cục bộ = (cos a, −sin a) trong (x,z)
function minBox(pts) {
  const h = hull(pts); if (h.length < 3) return null;
  let best = null;
  for (let i = 0; i < h.length; i++) {
    const p = h[i], q = h[(i + 1) % h.length], l = Math.hypot(q[0] - p[0], q[1] - p[1]); if (l < 1e-6) continue;
    const ex = (q[0] - p[0]) / l, ez = (q[1] - p[1]) / l, nx = -ez, nz = ex;
    let e0 = Infinity, e1 = -Infinity, n0 = Infinity, n1 = -Infinity;
    for (const v of h) { const e = v[0] * ex + v[1] * ez, n = v[0] * nx + v[1] * nz; if (e < e0) e0 = e; if (e > e1) e1 = e; if (n < n0) n0 = n; if (n > n1) n1 = n; }
    const area = (e1 - e0) * (n1 - n0);
    if (!best || area < best.area) { const em = (e0 + e1) / 2, nm = (n0 + n1) / 2; best = { area, cx: ex * em + nx * nm, cz: ez * em + nz * nm, w: e1 - e0, d: n1 - n0, a: Math.atan2(-ez, ex) }; }
  }
  return best;
}
const polyArea = (pts) => { let s = 0; for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; s += p[0] * q[1] - q[0] * p[1]; } return Math.abs(s) / 2; };

function classify(tags, area) {   // → {h, kind}
  const t = tags.building || 'yes';
  let h = parseFloat(String(tags.height || '').replace(',', '.')), lv = parseFloat(tags['building:levels']);
  if (!(h > 0)) h = lv > 0 ? lv * 3.2 : 0;
  let kind;
  if (INDU.has(t)) { kind = 3; if (!h) h = 9; }
  else if (COMM.has(t)) { kind = 2; if (!h) h = 6 * 3.2; }
  else if (OTHER.has(t)) { kind = 4; if (!h) h = SMALL.has(t) ? 3.5 : 3 * 3.2; }
  else if (t === 'apartments' || t === 'dormitory') { kind = 1; if (!h) h = 12 * 3.2; }
  else { if (!h) h = (area < 200 ? 2 : 3) * 3.2; kind = h >= 20 ? 1 : 0; }
  if (kind === 1 && h < 20 && (t === 'apartments' || t === 'dormitory')) kind = 1;
  return { h: Math.max(2.5, h), kind };
}

const LU_MAP = (tags) => {
  const l = tags.landuse, n = tags.natural;
  if (n === 'water' || tags.waterway === 'riverbank' || l === 'reservoir' || l === 'basin' || l === 'aquaculture') return 'w';
  if (l === 'industrial' || l === 'quarry') return 'i';
  if (l === 'commercial' || l === 'retail') return 'c';
  if (l === 'residential') return 'r';
  if (l === 'forest' || l === 'orchard' || l === 'vineyard' || l === 'plant_nursery' || n === 'wood' || n === 'scrub' || (l === 'farmland' && /rubber/i.test(tags.crop || tags.trees || ''))) return 'f';
  if (l === 'farmland' || l === 'meadow' || l === 'grass' || l === 'farmyard' || l === 'greenhouse_horticulture' || n === 'grassland' || n === 'wetland') return 'p';
  return null;
};

// ---------- Microsoft Global ML Building Footprints ----------
const MS_INDEX = 'https://minedbuildings.z5.web.core.windows.net/global-buildings/dataset-links.csv';
const MSDIR = path.join(CACHE, 'ms'); fs.mkdirSync(MSDIR, { recursive: true });
async function download(url, f) {
  if (fs.existsSync(f) && fs.statSync(f).size > 0) return;
  for (let t = 0; t < 5; t++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'chilldrive-mapgen/1.0' } });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await pipeline(Readable.fromWeb(r.body), fs.createWriteStream(f + '.part')); fs.renameSync(f + '.part', f); return;
    } catch (e) { console.log('lỗi tải', url.slice(-60), e.message); await sleep(4000); }
  }
  throw new Error('không tải được ' + url);
}
// các quadkey zoom 9 phủ bbox hành lang (tim đường ±700 m)
function corridorQuadkeys(Z = 9) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let s = 0; s <= LEN; s += 50) for (const u of [-700, 0, 700]) { const [x, z] = toXZ(s, u); x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
  const a = xzToLL(x0, z1), c = xzToLL(x1, z0), n = 2 ** Z;
  const tx = (lon) => Math.floor((lon + 180) / 360 * n);
  const ty = (lat) => { const r = lat * Math.PI / 180; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * n); };
  const qs = [];
  for (let X = tx(a[1]); X <= tx(c[1]); X++) for (let Y = ty(c[0]); Y <= ty(a[0]); Y++) {
    let q = ''; for (let i = Z; i > 0; i--) { const m = 1 << (i - 1); q += (X & m ? 1 : 0) + (Y & m ? 2 : 0); } qs.push(q);
  }
  return { qs, bbox: [a[0], a[1], c[0], c[1]] };
}
const hash01 = (x, z) => { let h = (Math.round(x * 10) * 73856093) ^ (Math.round(z * 10) * 19349663); h = Math.imul(h ^ (h >>> 13), 0x5bd1e995); h ^= h >>> 15; return (h >>> 0) / 4294967296; };
// ô 100 m cách tim ≤ ~520 m (lọc nhanh trước khi gọi toSU)
function corridorCells() {
  const set = new Set();
  for (let s = 0; s <= LEN; s += 40) { const [x, z] = toXZ(s, 0); for (let dx = -6; dx <= 6; dx++) for (let dz = -6; dz <= 6; dz++) set.add((Math.floor(x / 100) + dx) + ',' + (Math.floor(z / 100) + dz)); }
  return set;
}
async function loadMS() {
  const { qs, bbox } = corridorQuadkeys();
  const lines = fs.existsSync(path.join(MSDIR, 'index.csv')) ? null : (await download(MS_INDEX, path.join(MSDIR, 'index.csv')), 0);
  const rows = fs.readFileSync(path.join(MSDIR, 'index.csv'), 'utf8').split('\n').slice(1).map((l) => l.split(',')).filter((c) => c.length >= 3);
  const locs = [...new Set(rows.map((c) => c[0]))].filter((l) => /^viet/i.test(l));
  console.log('MS index: Location khớp', locs.join('|'), '; quadkey zoom 9 phủ hành lang:', qs.join(' '), 'bbox', bbox.map((v) => v.toFixed(3)).join(','));
  const mine = rows.filter((c) => /^viet/i.test(c[0]) && qs.includes(c[1]));
  console.log('tệp MS cần dùng:', mine.map((c) => c[1] + ' ' + c[3]).join(', '));
  const cells = corridorCells(), out = [];
  let seen = 0, near = 0;
  for (const c of mine) {
    const f = path.join(MSDIR, c[1] + '-' + (c[2].match(/part-(\d+)/) || [])[1] + '.csv.gz');
    await download(c[2], f);
    const rl = readline.createInterface({ input: fs.createReadStream(f).pipe(zlib.createGunzip()), crlfDelay: Infinity });
    for await (const line of rl) {
      seen++;
      const i = line.indexOf('[[['); if (i < 0) continue;
      const m = /^\[\[\[(-?[\d.]+),\s*(-?[\d.]+)/.exec(line.slice(i)); if (!m) continue;
      const [x0, z0] = llToXZ(+m[2], +m[1]);
      if (!cells.has(Math.floor(x0 / 100) + ',' + Math.floor(z0 / 100))) continue;
      near++;
      let ft; try { ft = JSON.parse(line); } catch { continue; }
      const g = ft.geometry; if (!g) continue;
      const ring = g.type === 'Polygon' ? g.coordinates[0] : g.type === 'MultiPolygon' ? g.coordinates[0][0] : null; if (!ring || ring.length < 4) continue;
      const pr = ft.properties || {}; if (pr.confidence != null && pr.confidence >= 0 && pr.confidence < 0.6) continue;
      const pts = ring.slice(0, -1).map((p) => llToXZ(p[1], p[0]));
      const area = polyArea(pts); if (area < 25) continue;
      let cx = 0, cz = 0; for (const p of pts) { cx += p[0]; cz += p[1]; } cx /= pts.length; cz /= pts.length;
      const su = toSU(cx, cz); if (!su.ok || Math.abs(su.u) < 22 || Math.abs(su.u) > 450) continue;
      const bx = minBox(pts); if (!bx) continue;
      out.push({ area, ph: pr.height > 0 ? +pr.height : 0, s: su.s, u: su.u, bx, pts });
    }
    console.log(`  ${c[1]}: đã đọc tổng ${seen} dòng, gần hành lang ${near}, giữ ${out.length}`);
  }
  return out;
}
function msClassify(o) {
  const { area, bx, ph } = o, r = hash01(bx.cx, bx.cz), asp = Math.max(bx.w, bx.d) / Math.max(1, Math.min(bx.w, bx.d));
  let h = ph, ind = false;
  if (!(h > 0)) {
    if (area < 150) h = (r < 0.6 ? 2 : r < 0.9 ? 1 : 3) * 3.3;
    else if (area < 600) h = (r < 0.6 ? 2 : 3) * 3.3;
    else if (area <= 3000) { if (asp >= 2.5 || area > 1500) { h = 8 + 2 * r; ind = true; } else h = 3 * 3.3; }
    else { h = 10; ind = true; }
  }
  let kind;
  if (h >= 20) kind = 1; else if (ind || (area > 1200 && h < 14)) kind = 3; else if (area >= 300 && area <= 1200 && h >= 9) kind = 2; else kind = 0;
  return { h: Math.max(2.5, h), kind };
}

async function doEnv() {
  // --- tải nhà + đất theo các đoạn tim đường ---
  const NB = 18, NL = 6, bld = new Map();
  for (let k = 0; k < NB; k++) {
    const s0 = LEN * k / NB, s1 = LEN * (k + 1) / NB;
    const j = await overpass(`bbld-${k}of${NB}`, `[out:json][timeout:180];way["building"]${bboxOf(s0, s1, 650)};out geom tags;`);
    for (const e of j.elements) if (e.type === 'way' && e.geometry && !bld.has(e.id)) bld.set(e.id, e);
  }
  const luEl = new Map();
  const LUQ = 'landuse"~"^(residential|commercial|retail|industrial|quarry|forest|orchard|vineyard|plant_nursery|farmland|meadow|grass|farmyard|greenhouse_horticulture|reservoir|basin|aquaculture)$';
  for (let k = 0; k < NL; k++) {
    const s0 = LEN * k / NL, s1 = LEN * (k + 1) / NL, ar = bboxOf(s0, s1, 700);
    const sel = (kind) => `${kind}["${LUQ}"]${ar};${kind}["natural"~"^(water|wood|scrub|grassland|wetland)$"]${ar};${kind}["waterway"="riverbank"]${ar};`;
    const j = await overpass(`blu-${k}of${NL}`, `[out:json][timeout:180];(${sel('way')}${sel('rel')});out geom tags;`);
    for (const e of j.elements) luEl.set(e.type + e.id, e);
  }
  console.log(`\nOSM: ${bld.size} nhà thô, ${luEl.size} vùng đất`);

  // --- nhà → hộp (s,u) ---
  const items = [];
  for (const e of bld.values()) {
    const g = e.geometry; if (g.length < 4) continue;
    const pts = g.slice(0, -1).map((p) => llToXZ(p.lat, p.lon));
    const bx = minBox(pts); if (!bx) continue;
    const su = toSU(bx.cx, bx.cz); if (!su.ok || Math.abs(su.u) > 600 || Math.abs(su.u) < 22) continue;
    const area = polyArea(pts), { h, kind } = classify(e.tags || {}, area);
    const w = Math.max(4, bx.w), d = Math.max(4, bx.d), rel = wrapHalf(bx.a - HD[segOf(su.s)]);
    items.push({ id: e.id, area, h, kind, s: su.s, u: su.u, w, d, rel, x: bx.cx, z: bx.cz, a: bx.a });
  }
  const nOsm = items.length;
  for (const it of items) it.src = 'osm';
  // --- Microsoft footprints, gộp (OSM thắng) ---
  const ms = await loadMS();
  const GC = 50, grid = new Map();
  for (const it of items) { const k = Math.floor(it.x / GC) + ',' + Math.floor(it.z / GC); (grid.get(k) || grid.set(k, []).get(k)).push(it); }
  const insideOsm = (px, pz) => {
    const gx = Math.floor(px / GC), gz = Math.floor(pz / GC);
    for (let a = -1; a <= 1; a++) for (let c = -1; c <= 1; c++) for (const it of grid.get((gx + a) + ',' + (gz + c)) || []) {
      const dx = px - it.x, dz = pz - it.z;
      if (Math.hypot(dx, dz) <= 3) return true;
      const ca = Math.cos(it.a), sa = Math.sin(it.a);
      if (Math.abs(dx * ca - dz * sa) <= it.w / 2 + 0.5 && Math.abs(dx * sa + dz * ca) <= it.d / 2 + 0.5) return true;
    }
    return false;
  };
  let nMs = 0, dup = 0;
  for (const o of ms) {
    if (insideOsm(o.bx.cx, o.bx.cz)) { dup++; continue; }
    const su = toSU(o.bx.cx, o.bx.cz); if (!su.ok || Math.abs(su.u) < 22 || Math.abs(su.u) > 450) continue;
    const { h, kind } = msClassify(o);
    items.push({ src: 'ms', ring: o.pts, area: o.area, h, kind, s: su.s, u: su.u, w: Math.max(4, o.bx.w), d: Math.max(4, o.bx.d), rel: wrapHalf(o.bx.a - HD[segOf(su.s)]), x: o.bx.cx, z: o.bx.cz }); nMs++;
  }
  console.log(`MS: ${ms.length} bóng sau lọc, trùng OSM bỏ ${dup}, thêm ${nMs}; OSM ${nOsm}; gộp ${items.length}`);
  const MAXB = 70000;
  let kept = items;
  if (items.length > MAXB) {
    const tall = items.filter((b) => b.h >= 20), rest = items.filter((b) => b.h < 20).sort((a, b) => ((Math.abs(a.u) > 200) - (Math.abs(b.u) > 200)) || b.area - a.area);
    kept = tall.concat(rest.slice(0, Math.max(0, MAXB - tall.length)));
    console.log(`vượt ${MAXB}: bỏ ${items.length - kept.length} nhà nhỏ xa đường`);
  }
  kept.sort((a, b) => a.s - b.s);
  const b = []; for (const k of kept) b.push(Math.round(k.s), Math.round(k.u * 10), Math.round(k.w * 10), Math.round(k.d * 10), Math.round(k.rel * 1000), Math.round(k.h * 10), k.kind);

  // --- loại đất: lưới băm các vùng, thắng = nước, sau đó vùng nhỏ hơn ---
  const ptsOf = (g) => g.map((p) => llToXZ(p.lat, p.lon));
  const feats = [];
  for (const e of luEl.values()) {
    const code = LU_MAP(e.tags || {}); if (!code) continue;
    let rings = [];
    if (e.type === 'way') { const g = e.geometry; if (g && g.length > 3 && g[0].lat === g.at(-1).lat && g[0].lon === g.at(-1).lon) rings.push(ptsOf(g)); }
    else if (e.type === 'relation') {
      const segs = (e.members || []).filter((m) => m.type === 'way' && m.geometry && (m.role === 'outer' || m.role === 'inner' || !m.role)).map((m) => ptsOf(m.geometry));
      while (segs.length) {   // nối đoạn thành vành theo đầu mút trùng nhau
        let cur = segs.pop(), grow = true;
        while (grow && !(cur.length > 3 && cur[0][0] === cur.at(-1)[0] && cur[0][1] === cur.at(-1)[1])) {
          grow = false;
          for (let i = 0; i < segs.length; i++) {
            const sg = segs[i], eq = (a, c) => a[0] === c[0] && a[1] === c[1];
            if (eq(cur.at(-1), sg[0])) cur = cur.concat(sg.slice(1)); else if (eq(cur.at(-1), sg.at(-1))) cur = cur.concat(sg.slice(0, -1).reverse());
            else if (eq(cur[0], sg.at(-1))) cur = sg.concat(cur.slice(1)); else if (eq(cur[0], sg[0])) cur = sg.slice(1).reverse().concat(cur);
            else continue;
            segs.splice(i, 1); grow = true; break;
          }
        }
        if (cur.length > 3) rings.push(cur);
      }
    }
    if (!rings.length) continue;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const r of rings) for (const p of r) { if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0]; if (p[1] < z0) z0 = p[1]; if (p[1] > z1) z1 = p[1]; }
    feats.push({ code, rings, x0, x1, z0, z1, ba: (x1 - x0) * (z1 - z0) });
  }
  feats.sort((a, b) => (b.code === 'w') - (a.code === 'w') || a.ba - b.ba);
  const CELL = 500, gidx = new Map();
  for (const f of feats) for (let cx = Math.floor(f.x0 / CELL); cx <= Math.floor(f.x1 / CELL); cx++) for (let cz = Math.floor(f.z0 / CELL); cz <= Math.floor(f.z1 / CELL); cz++) { const k = cx + ',' + cz; (gidx.get(k) || gidx.set(k, []).get(k)).push(f); }
  const inRing = (x, z, r) => { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) if ((r[i][1] > z) !== (r[j][1] > z) && x < (r[j][0] - r[i][0]) * (z - r[i][1]) / (r[j][1] - r[i][1]) + r[i][0]) c = !c; return c; };
  const LDS = 40, LDU = 40, LU0 = -600, LC = 31, LR = Math.floor(LEN / LDS) + 1, hist = {}, rows = [];
  const rowDom = [];
  for (let r = 0; r < LR; r++) {
    let line = '';
    for (let c = 0; c < LC; c++) {
      const [x, z] = toXZ(r * LDS, LU0 + c * LDU); let ch = '-';
      for (const f of gidx.get(Math.floor(x / CELL) + ',' + Math.floor(z / CELL)) || []) {
        if (x < f.x0 || x > f.x1 || z < f.z0 || z > f.z1) continue;
        let n = 0; for (const rg of f.rings) if (inRing(x, z, rg)) n++;
        if (n & 1) { ch = f.code; break; }
      }
      line += ch; hist[ch] = (hist[ch] || 0) + 1;
    }
    rows.push(line);
  }

  // --- điền ô '-' : mật độ nhà, sau đó DEM ---
  const hist0 = { ...hist };
  const cnt = new Float32Array(LR * LC), ar = new Float32Array(LR * LC), indA = new Float32Array(LR * LC), indN = new Int32Array(LR * LC);
  for (const k of kept) {
    const r = Math.round(k.s / LDS), c = Math.round((k.u - LU0) / LDU); if (r < 0 || r >= LR || c < 0 || c >= LC) continue;
    const i = r * LC + c; cnt[i]++; ar[i] += k.w * k.d; if (k.kind === 3) { indA[i] += k.w * k.d; indN[i]++; }
  }
  const nbSum = (arr, r, c) => { let t = 0; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const rr = r + a, cc = c + b; if (rr >= 0 && rr < LR && cc >= 0 && cc < LC) t += arr[rr * LC + cc]; } return t; };
  let dem = null; try { dem = JSON.parse(fs.readFileSync('src/hlg-dem.json', 'utf8')); } catch {}
  const elev = (s, u) => {
    const fr = Math.max(0, Math.min(dem.rows - 1.001, s / dem.ds)), fc = Math.max(0, Math.min(dem.cols - 1.001, (u - dem.u0) / dem.du)), r = Math.floor(fr), c = Math.floor(fc), tr = fr - r, tc = fc - c, H = (a, b) => dem.h[(r + a) * dem.cols + c + b];
    return (H(0, 0) * (1 - tc) + H(0, 1) * tc) * (1 - tr) + (H(1, 0) * (1 - tc) + H(1, 1) * tc) * tr;
  };
  const nearW = (r, c) => { for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) { const rr = r + a, cc = c + b; if (rr >= 0 && rr < LR && cc >= 0 && cc < LC && rows[rr][cc] === 'w') return true; } return false; };
  const orig = rows.slice(), fillN = { r: 0, i: 0, p: 0, f: 0, left: 0 };
  for (let r = 0; r < LR; r++) {
    const chars = orig[r].split('');
    for (let c = 0; c < LC; c++) {
      if (orig[r][c] !== '-') continue;
      const i = r * LC + c, nA = nbSum(ar, r, c), nI = nbSum(indA, r, c); let ch = '-';
      if (indN[i] > 0 || (nI >= 400 && nI >= 0.5 * nA)) ch = 'i';
      else if (cnt[i] >= 2 || ar[i] >= 400) ch = 'r';
      else if (dem) {
        const e = elev(r * LDS, LU0 + c * LDU), hv = hash01(Math.floor(r / 5), Math.floor(c / 5));
        if (e < 5) ch = nearW(r, c) ? '-' : 'p';
        else if (e < 14) ch = hv < 0.5 ? 'p' : 'f';
        else ch = hv < 0.15 ? 'p' : 'f';
      }
      if (ch === '-') fillN.left++; else fillN[ch]++;
      chars[c] = ch;
    }
    rows[r] = chars.join('');
  }
  for (const k of Object.keys(hist)) delete hist[k];
  for (const l of rows) for (const ch of l) hist[ch] = (hist[ch] || 0) + 1;
  console.log('đất trước khi điền:', Object.entries(hist0).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join('  '), '; đã điền:', JSON.stringify(fillN), dem ? '' : '(không có DEM)');

  const out = { src: '© OpenStreetMap contributors (ODbL); Microsoft Global ML Building Footprints (ODbL)', fetched: new Date().toISOString(), b, bn: kept.length, lu: { ds: LDS, du: LDU, u0: LU0, rows } };
  fs.mkdirSync('docs/assets', { recursive: true });
  fs.writeFileSync('docs/assets/hlg-env.json', JSON.stringify(out));

  // --- báo cáo ---
  const names = ['nhà ở', 'chung cư', 'thương mại', 'công nghiệp', 'khác'], bk = [0, 0, 0, 0, 0];
  for (const k of kept) bk[k.kind]++;
  console.log(`OSM ${items.filter((k) => k.src === 'osm').length} / MS ${items.filter((k) => k.src === 'ms').length} / gộp ${items.length}; giữ theo nguồn OSM ${kept.filter((k) => k.src === 'osm').length} MS ${kept.filter((k) => k.src === 'ms').length}`);
  console.log(`nhà trong hành lang: ${items.length}, giữ ${kept.length}; theo loại: ` + bk.map((n, i) => `${i}-${names[i]}:${n}`).join('  ') + `; h≥20: ${kept.filter((k) => k.h >= 20).length}`);
  console.log(`hlg-env.json: ${(fs.statSync('docs/assets/hlg-env.json').size / 1024).toFixed(0)} KB`);
  console.log('đất (số ô):', Object.entries(hist).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join('  '), ` (vùng đất dùng: ${feats.length})`);
  console.log('mỗi 5 km: nhà | đất chiếm nhiều nhất (không tính "-") | đất tính cả "-"');
  for (let a = 0; a < LEN; a += 5000) {
    const nb = kept.filter((k) => k.s >= a && k.s < a + 5000).length, cnt = {};
    for (let r = Math.floor(a / LDS); r < Math.min(LR, Math.floor((a + 5000) / LDS)); r++) for (const ch of rows[r]) cnt[ch] = (cnt[ch] || 0) + 1;
    const tot = Object.values(cnt).reduce((x, y) => x + y, 0), top = Object.entries(cnt).filter(([k]) => k !== '-').sort((x, y) => y[1] - x[1])[0];
    console.log(`km ${a / 1000}-${Math.min(LEN, a + 5000) / 1000}: ${nb} nhà | ${top ? top[0] + ' ' + (100 * top[1] / tot | 0) + '%' : '(không có)'} | '-' ${(100 * (cnt['-'] || 0) / tot) | 0}%`);
  }
  // kiểm tra 3 nhà: dựng lại từ (s,u) → lat/lon, xác nhận điểm nằm trong footprint OSM
  console.log('kiểm tra dựng lại:');
  const msIdx = kept.map((k, i) => (k.src === 'ms' ? i : -1)).filter((i) => i >= 0);
  for (const q of [0.15, 0.5, 0.85]) {
    const i = msIdx[Math.floor(msIdx.length * q)], k = kept[i], [x, z] = toXZ(Math.round(k.s), Math.round(k.u * 10) / 10), [la, lo] = xzToLL(x, z);
    const ring = k.src === 'ms' ? k.ring : bld.get(k.id).geometry.map((p) => llToXZ(p.lat, p.lon));
    console.log(`  #${i} s=${Math.round(k.s)} u=${k.u.toFixed(1)} → ${la.toFixed(6)},${lo.toFixed(6)}  ${k.src === 'ms' ? 'MS' : 'way/' + k.id}  trong footprint: ${inRing(x, z, ring)}  lệch tâm hộp ${Math.hypot(x - k.x, z - k.z).toFixed(1)} m  ${k.w.toFixed(0)}×${k.d.toFixed(0)} h=${k.h.toFixed(0)} kind=${k.kind}`);
  }
}

if (ONLY !== 'dem') await doEnv();
if (ONLY !== 'env') await doDem();
console.log(`\nxong sau ${((Date.now() - T0) / 1000).toFixed(0)}s`);
