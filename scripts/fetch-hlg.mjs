// Tải dữ liệu OSM (Overpass) của cao tốc TP.HCM – Long Thành – Dầu Giây (HLG, CT.29) rồi nén thành src/hlg-data.json cho game 3D:
// hướng (heading) mỗi 10 m dọc làn đi An Phú → Dầu Giây + cầu / sông / trạm thu phí / nút giao / giới hạn tốc độ / số làn (toạ độ s = mét dọc đường).
// Cách làm: dựng đồ thị các way motorway (ref CT.29) theo node id, Dijkstra từ đầu An Phú tới đầu Dầu Giây (không dựa vào tên cầu), resample theo cung,
// làm mượt heading ~60 m, tích phân lại vị trí (có hiệu chỉnh nhẹ bám đường gốc) và chiếu mọi đối tượng lên đường đã tích phân.
// Quy ước: E=(lon−lon0)·cos(lat0)·111320, N=(lat−lat0)·110540; game x=E, z=−N; th=atan2(−dE,dN); bước ds: x−=sin(th)·ds, z−=cos(th)·ds.
// Chạy: node scripts/fetch-hlg.mjs   (cache Overpass: env HLG_CACHE, mặc định <tmp>/chilldrive-osm)
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const CACHE = process.env.HLG_CACHE || path.join(os.tmpdir(), 'chilldrive-osm');
const OUT = 'src/hlg-data.json';
const BB = '10.70,106.70,11.02,107.25';
const STEP = 10, SMOOTH = 60, KP = 0.001;
const EPS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];

// ---------- tải + cache ----------
fs.mkdirSync(CACHE, { recursive: true });
async function overpass(name, query) {
  const f = path.join(CACHE, name + '.json');
  if (fs.existsSync(f) && fs.statSync(f).size > 100) return JSON.parse(fs.readFileSync(f, 'utf8'));
  for (let t = 0; t < 6; t++) {
    const ep = EPS[t % EPS.length];
    try {
      const r = await fetch(ep, { method: 'POST', headers: { 'User-Agent': 'chilldrive-mapgen/1.0', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(query) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const txt = await r.text(); const j = JSON.parse(txt);
      fs.writeFileSync(f, txt); console.log('đã tải', name, (txt.length / 1e3 | 0) + ' KB'); return j;
    } catch (e) { console.log('lỗi', name, ep, e.message); await new Promise((r) => setTimeout(r, 4000)); }
  }
  throw new Error('không tải được ' + name);
}
const hw = (await overpass('hw', `[out:json][timeout:120];way["highway"~"^(motorway|motorway_link)$"](${BB});out body geom;`)).elements;
const jn = (await overpass('junc', `[out:json][timeout:60];(node["highway"="motorway_junction"](${BB});node["barrier"="toll_booth"](${BB});node["highway"="toll_gantry"](${BB}););out body;`)).elements;
const wat = (await overpass('wat', `[out:json][timeout:120];way["waterway"~"^(river|canal|stream)$"](${BB});out body geom;`)).elements;
const roads = (await overpass('roads', `[out:json][timeout:120];way["highway"~"^(trunk|primary|secondary|tertiary)$"](${BB});out tags geom;`)).elements;
const wpol = (await overpass('wpoly', `[out:json][timeout:120];(way["natural"="water"](10.74,106.75,10.96,107.20);way["waterway"="riverbank"](10.74,106.75,10.96,107.20);rel["natural"="water"](10.74,106.75,10.96,107.20);rel["waterway"="riverbank"](10.74,106.75,10.96,107.20););out geom;`)).elements;

// ---------- đồ thị motorway CT.29, Dijkstra theo node id ----------
const mainW = hw.filter((w) => w.tags.highway === 'motorway' && /CT\.?29/.test(w.tags.ref || ''));
const pos = new Map(), adj = new Map(), eInfo = new Map();
for (const w of mainW) for (let i = 0; i < w.nodes.length; i++) pos.set(w.nodes[i], [w.geometry[i].lat, w.geometry[i].lon]);
const hav = (a, b) => Math.hypot((b[0] - a[0]) * 110540, (b[1] - a[1]) * Math.cos(a[0] * Math.PI / 180) * 111320);
const addE = (a, b, w) => { (adj.get(a) || adj.set(a, []).get(a)).push(b); eInfo.set(a + '>' + b, w); };
for (const w of mainW) for (let i = 0; i + 1 < w.nodes.length; i++) {
  addE(w.nodes[i], w.nodes[i + 1], w);
  if (w.tags.oneway !== 'yes') addE(w.nodes[i + 1], w.nodes[i], w);
}
// đầu An Phú = node đầu của làn đi (không có cạnh vào), cuối Dầu Giây = node cuối không có cạnh ra, chọn theo toạ độ gần nhất
const nearNode = (lat, lon) => [...pos].sort((a, b) => hav(a[1], [lat, lon]) - hav(b[1], [lat, lon]))[0][0];
const START = nearNode(10.7920, 106.7524), END = nearNode(10.9387, 107.1656);
const dist = new Map([[START, 0]]), prev = new Map(), done = new Set();
for (;;) {
  let u = null, du = Infinity;
  for (const [k, v] of dist) if (!done.has(k) && v < du) { u = k; du = v; }
  if (u === null || u === END) break;
  done.add(u);
  for (const v of adj.get(u) || []) { const d = du + hav(pos.get(u), pos.get(v)); if (d < (dist.get(v) ?? Infinity)) { dist.set(v, d); prev.set(v, u); } }
}
if (!dist.has(END)) throw new Error('không nối được An Phú → Dầu Giây');
const rn = [END]; while (rn.at(-1) !== START) rn.push(prev.get(rn.at(-1))); rn.reverse();
const redge = []; for (let i = 0; i + 1 < rn.length; i++) redge.push(eInfo.get(rn[i] + '>' + rn[i + 1]));

// ---------- toạ độ mét + đường gốc ----------
const [lat0, lon0] = pos.get(rn[0]);
const KE = Math.cos(lat0 * Math.PI / 180) * 111320, KN = 110540;
const prj = (lat, lon) => [(lon - lon0) * KE, (lat - lat0) * KN];
const raw = rn.map((n) => prj(...pos.get(n)));
const cum = [0]; for (let i = 1; i < raw.length; i++) cum.push(cum[i - 1] + Math.hypot(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]));
const rawLen = cum.at(-1);
const nodeS = new Map(rn.map((n, i) => [n, cum[i]]));
// mẫu mịn 5 m trên đường gốc
const R5 = [], H = 5;
{ let j = 0; for (let s = 0; s <= rawLen; s += H) { while (cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1); R5.push([raw[j][0] + (raw[j + 1][0] - raw[j][0]) * t, raw[j][1] + (raw[j + 1][1] - raw[j][1]) * t]); } }
const rawAt = (s) => { const f = Math.max(0, Math.min(R5.length - 1.001, s / H)), i = f | 0, t = f - i; return [R5[i][0] + (R5[i + 1][0] - R5[i][0]) * t, R5[i][1] + (R5[i + 1][1] - R5[i][1]) * t]; };
// chiếu điểm lên đường gốc (toàn cục): trả {s, d}
function projRaw(E, N) {
  let best = { d: Infinity, s: 0 };
  for (let i = 0; i + 1 < R5.length; i++) {
    const a = R5[i], b = R5[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((E - a[0]) * dx + (N - a[1]) * dy) / l2)), d = Math.hypot(E - a[0] - dx * t, N - a[1] - dy * t);
    if (d < best.d) best = { d, s: (i + t) * H };
  }
  return best;
}

// ---------- heading: unwrap, làm mượt, tích phân có hiệu chỉnh ----------
const hd = []; for (let i = 0; i + 1 < R5.length; i++) { let a = Math.atan2(-(R5[i + 1][0] - R5[i][0]), R5[i + 1][1] - R5[i][1]); if (i) a += Math.round((hd[i - 1] - a) / (2 * Math.PI)) * 2 * Math.PI; hd.push(a); }
const hw2 = Math.round(SMOOTH / H / 2), sm = hd.map((_, i) => { let s = 0, c = 0; for (let k = i - hw2; k <= i + hw2; k++) { s += hd[Math.max(0, Math.min(hd.length - 1, k))]; c++; } return s / c; });
const smAt = (s) => { const f = Math.max(0, Math.min(sm.length - 1.001, s / H - 0.5)), i = f | 0; return sm[i] + (sm[i + 1] - sm[i]) * (f - i); };
const nSteps = Math.round(rawLen / STEP), heading = [], ip = [[0, 0]]; // ip: (E,N)
let hint = 0;
for (let i = 0; i < nSteps; i++) {
  const [E, N] = ip[i];
  // sai lệch ngang so với đường gốc quanh vị trí hiện tại (cửa sổ ±300 m)
  let bd = Infinity, bs = 0, lat = 0;
  for (let k = Math.max(0, Math.floor((i * STEP - 300) / H)); k < Math.min(R5.length - 1, (i * STEP + 300) / H); k++) {
    const a = R5[k], b = R5[k + 1], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((E - a[0]) * dx + (N - a[1]) * dy) / l2)), px = a[0] + dx * t, py = a[1] + dy * t, d = Math.hypot(E - px, N - py);
    if (d < bd) { bd = d; bs = (k + t) * H; lat = ((E - px) * -dy + (N - py) * dx) / Math.sqrt(l2); }
  }
  const th = smAt(i * STEP + STEP / 2) - KP * lat;   // lat>0 = lệch trái → bẻ phải
  heading.push(th);
  ip.push([E - Math.sin(th) * STEP, N + Math.cos(th) * STEP]);
}
const length = nSteps * STEP;
// chiếu lên đường đã tích phân (cửa sổ quanh gợi ý s)
function projInt(E, N, h) {
  let best = { d: Infinity, s: 0 };
  for (let i = Math.max(0, Math.floor(h / STEP) - 60); i < Math.min(nSteps, Math.floor(h / STEP) + 60); i++) {
    const a = ip[i], b = ip[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((E - a[0]) * dx + (N - a[1]) * dy) / l2)), d = Math.hypot(E - a[0] - dx * t, N - a[1] - dy * t);
    if (d < best.d) best = { d, s: (i + t) * STEP };
  }
  return best.s;
}
const toInt = (sRaw) => { const [E, N] = rawAt(sRaw); return Math.round(projInt(E, N, sRaw)); };
// độ lệch lớn nhất + bán kính cong nhỏ nhất
let maxDev = 0, maxDevS = 0;
for (let i = 0; i <= nSteps; i++) { const d = projRaw(ip[i][0], ip[i][1]).d; if (d > maxDev) { maxDev = d; maxDevS = i * STEP; } }
let minR = Infinity, minRs = 0;
for (let i = 0; i + 5 < nSteps; i++) { const dth = Math.abs(heading[i + 5] - heading[i]); if (dth > 1e-6 && 50 / dth < minR) { minR = 50 / dth; minRs = i * STEP; } }
const endErr = Math.hypot(ip.at(-1)[0] - raw.at(-1)[0], ip.at(-1)[1] - raw.at(-1)[1]);

// ---------- đối tượng ----------
const rnd = (x) => Math.round(x), km = (s) => (s / 1000).toFixed(2);
const nodeSInt = new Map([...nodeS].map(([n, s]) => [n, toInt(s)]));
// lưới băm đoạn đường gốc để tìm giao cắt nhanh
const CELL = 200, grid = new Map();
for (let i = 0; i + 1 < R5.length; i++) {
  const x0 = Math.min(R5[i][0], R5[i + 1][0]), x1 = Math.max(R5[i][0], R5[i + 1][0]), y0 = Math.min(R5[i][1], R5[i + 1][1]), y1 = Math.max(R5[i][1], R5[i + 1][1]);
  for (let cx = Math.floor(x0 / CELL); cx <= Math.floor(x1 / CELL); cx++) for (let cy = Math.floor(y0 / CELL); cy <= Math.floor(y1 / CELL); cy++) { const k = cx + ',' + cy; (grid.get(k) || grid.set(k, []).get(k)).push(i); }
}
// giao cắt đường polyline (lat/lon) với đường gốc → danh sách s_raw
function crossings(geom) {
  const out = [];
  for (let j = 0; j + 1 < geom.length; j++) {
    const a = prj(geom[j].lat, geom[j].lon), b = prj(geom[j + 1].lat, geom[j + 1].lon);
    const seen = new Set();
    for (let cx = Math.floor(Math.min(a[0], b[0]) / CELL); cx <= Math.floor(Math.max(a[0], b[0]) / CELL); cx++) for (let cy = Math.floor(Math.min(a[1], b[1]) / CELL); cy <= Math.floor(Math.max(a[1], b[1]) / CELL); cy++) for (const i of grid.get(cx + ',' + cy) || []) {
      if (seen.has(i)) continue; seen.add(i);
      const p = R5[i], q = R5[i + 1], r = [q[0] - p[0], q[1] - p[1]], s = [b[0] - a[0], b[1] - a[1]], den = r[0] * s[1] - r[1] * s[0];
      if (Math.abs(den) < 1e-9) continue;
      const t = ((a[0] - p[0]) * s[1] - (a[1] - p[1]) * s[0]) / den, u = ((a[0] - p[0]) * r[1] - (a[1] - p[1]) * r[0]) / den;
      if (t >= 0 && t < 1 && u >= 0 && u <= 1) out.push((i + t) * H);
    }
  }
  return out;
}
// đoạn theo cạnh: gom các cạnh liên tiếp có cùng giá trị
function runs(fn) {
  const res = [];
  for (let i = 0; i < redge.length; i++) {
    const v = fn(redge[i]); if (v == null) continue;
    const s0 = cum[i], s1 = cum[i + 1], l = res.at(-1);
    if (l && l.v === v && Math.abs(l.s1 - s0) < 1) l.s1 = s1; else res.push({ s0, s1, v });
  }
  return res;
}
// giới hạn tốc độ, số làn (thiếu thì lấy giá trị đã biết gần nhất)
const fillRuns = (fn) => { let last = null; const vals = redge.map((w) => { const v = fn(w); if (v != null) last = v; return v ?? last; }); const first = vals.find((v) => v != null); return vals.map((v) => v ?? first); };
function mergeVals(vals, key) {
  const res = [];
  vals.forEach((v, i) => { const l = res.at(-1); if (l && l[key] === v) l.s1 = cum[i + 1]; else res.push({ s0: cum[i], s1: cum[i + 1], [key]: v }); });
  return res.map((r) => ({ s0: toInt(r.s0), s1: r.s1 >= rawLen - 1 ? length : toInt(r.s1), [key]: r[key] }));
}
const limits = mergeVals(fillRuns((w) => parseInt(w.tags.maxspeed) || null), 'kmh');
const lanes = mergeVals(fillRuns((w) => parseInt(w.tags.lanes) || null), 'n');
limits[0].s0 = 0; lanes[0].s0 = 0;
// cầu: gom các cạnh bridge liên tiếp cùng tên; tên chung của đường (Đường cao tốc / Đường dẫn) coi như không tên
const bn = (w) => { const n = w.tags.name || ''; return /^Đường (cao tốc|dẫn)/.test(n) ? '' : n; };
const kindOf = (w) => (w.tags.bridge === 'viaduct' || /viaduct/i.test(w.tags['name:en'] || '') || /cạn/i.test(w.tags.name || '')) ? 'viaduct' : 'bridge';
const bridges = [];
for (let i = 0; i < redge.length; i++) {
  const w = redge[i]; if (!w.tags.bridge || w.tags.bridge === 'no') continue;
  const nm = bn(w), l = bridges.at(-1);
  if (l && l.name === nm && l.kind === kindOf(w) && Math.abs(l.r1 - cum[i]) < 1) l.r1 = cum[i + 1]; else bridges.push({ r0: cum[i], r1: cum[i + 1], name: nm, kind: kindOf(w) });
}
const bridgesOut = bridges.filter((b) => b.name || b.r1 - b.r0 > 80).map((b) => ({ s0: toInt(b.r0), s1: toInt(b.r1), name: b.name, kind: b.kind }));
// mặt nước (polygon) → các khoảng nước dọc đường (đếm chẵn/lẻ giao cắt các vành)
const wcross = [];
for (const e of wpol) {
  const rings = e.type === 'way' ? [e.geometry] : (e.members || []).filter((m) => m.geometry).map((m) => m.geometry);
  for (const g of rings) if (g) for (const s of crossings(g)) wcross.push(s);
}
wcross.sort((a, b) => a - b);
const waterSpan = (s) => { // khoảng [c_k, c_{k+1}] chứa s với k chẵn (vào nước → ra nước)
  let k = wcross.findIndex((x) => x > s) - 1; if (k < 0 || k + 1 >= wcross.length) return 0;
  for (const kk of [k, k - 1]) if (kk >= 0 && kk + 1 < wcross.length && wcross[kk] <= s && wcross[kk + 1] >= s && wcross[kk + 1] - wcross[kk] < 1500) return wcross[kk + 1] - wcross[kk];
  return 0;
};
// sông / kênh / suối cắt đường
const kindW = { river: 'river', canal: 'canal', stream: 'stream' }, defW = { river: 120, canal: 25, stream: 10 };
let rv = [];
for (const w of wat) for (const s of crossings(w.geometry)) {
  const k = kindW[w.tags.waterway]; let width = parseFloat(w.tags.width) || 0;
  const span = waterSpan(s);
  if (!width) width = span > 30 ? span : defW[k];
  rv.push({ r: s, name: w.tags.name || '', kind: k, width: rnd(width), span });
}
rv.sort((a, b) => a.r - b.r);
{ const m = []; for (const x of rv) { const l = m.at(-1); if (l && x.r - l.r < 40) { if ((x.name && !l.name) || x.width > l.width) m[m.length - 1] = { ...x, name: x.name || l.name }; } else m.push(x); } rv = m; }
const rivers = rv.map((x) => ({ s: toInt(x.r), name: x.name, kind: x.kind, width: x.width }));
// trạm thu phí trong 60 m
const tolls = [];
for (const n of jn.filter((n) => n.tags.barrier === 'toll_booth' || n.tags.highway === 'toll_gantry')) {
  const [E, N] = prj(n.lat, n.lon), p = projRaw(E, N); if (p.d > 60) continue;
  const nm = n.tags.name || 'Trạm thu phí', l = tolls.find((t) => t.name === nm && Math.abs(t.r - p.s) < 200);
  if (!l) tolls.push({ r: p.s, name: nm });
}
tolls.sort((a, b) => a.r - b.r);
const tollsOut = tolls.map((t) => ({ s: toInt(t.r), name: t.name }));
// nút giao: cụm diverge / merge / nút motorway_junction trong 2 km
const ev = [];
for (const w of hw.filter((w) => w.tags.highway === 'motorway_link')) {
  const a = w.nodes[0], b = w.nodes.at(-1);
  if (nodeS.has(a)) ev.push({ t: 'x', s: nodeSInt.get(a), name: w.tags.name || w.tags.destination || '' });
  if (nodeS.has(b)) ev.push({ t: 'e', s: nodeSInt.get(b), name: w.tags.name || w.tags.destination || '' });
}
for (const n of jn.filter((n) => n.tags.highway === 'motorway_junction')) {
  const [E, N] = prj(n.lat, n.lon), p = projRaw(E, N); if (p.d > 150) continue;
  ev.push({ t: 'j', s: toInt(p.s), label: n.tags.name || n.tags.ref || '', sa: n.tags.ref === 'SA' });
}
ev.sort((a, b) => a.s - b.s || (a.t === 'j' ? -1 : 0) - (b.t === 'j' ? -1 : 0));
if (process.env.HLG_DEBUG) for (const e of ev) console.log('EV', km(e.s), e.t, e.label || e.name, e.sa ? 'SA' : '');
// cụm: khoảng cách < 1.5 km và không đổi nhãn nút (nhãn khác nhau → tách; SA tách riêng rồi bỏ)
const clusters = [];
for (const e of ev) {
  const lb = e.t === 'j' ? (e.sa ? 'SA' : e.label) : '', l = clusters.at(-1);
  if (l && e.s - l.e.at(-1).s < 1500 && !(lb && l.labels.size && !l.labels.has(lb))) { l.e.push(e); if (lb) l.labels.add(lb); }
  else clusters.push({ e: [e], labels: new Set(lb ? [lb] : []) });
}
const clsRank = { trunk: 0, primary: 1, secondary: 2, tertiary: 3 };
const cr = roads.map((r) => ({ r, xs: crossings(r.geometry) })).filter((x) => x.xs.length);
const ics = [];
for (const c of clusters) {
  if (c.labels.has('SA') && c.labels.size === 1) continue;     // bỏ trạm dừng nghỉ
  if (!c.labels.size && !c.e.some((e) => e.name)) continue;
  const ex = c.e.filter((e) => e.t === 'x'), en = c.e.filter((e) => e.t === 'e'), js = c.e.filter((e) => e.t === 'j' && !e.sa);
  const lo = c.e[0].s, hi = c.e.at(-1).s, jm = js.filter((j) => j.label), mid = jm.length ? jm.reduce((a, j) => a + j.s, 0) / jm.length : (lo + hi) / 2;
  const cand = []; for (const x of cr) for (const sr of x.xs) { const si = toInt(sr); if (si > lo - 700 && si < hi + 700) cand.push({ r: x.r, s: si }); }
  if (!cand.length) { // không có giao cắt hình học (đường kết thúc ở vòng xoay dưới nút giao): lấy đường có đỉnh trong 120 m
    const [mE, mN] = rawAt(Math.min(rawLen, Math.max(0, mid)));
    for (const r of roads) { let bd = 1e9, bs = 0; for (const g of r.geometry) { const [E, N] = prj(g.lat, g.lon); if (Math.abs(E - mE) > 1200 || Math.abs(N - mN) > 1200) continue; const p = projRaw(E, N); if (p.d < bd) { bd = p.d; bs = p.s; } } if (bd < 120) cand.push({ r, s: toInt(bs) }); }
  }
  const score = (x) => (x.r.tags.name ? 0 : 1000) + clsRank[x.r.tags.highway] * 300 + Math.abs(x.s - mid);
  cand.sort((a, b) => score(a) - score(b));
  const best = cand[0];
  const labels = [...new Set(js.map((j) => j.label).filter(Boolean))];
  const lk = ex.concat(en).map((l) => l.name.replace(/^Đi /, '')).filter(Boolean);
  const name = labels[0] || lk[0] || best?.r.tags.name || best?.r.tags.ref || 'Nút giao';
  ics.push({ s: best ? best.s : rnd(mid), name, ref: best?.r.tags.ref || '', exit: ex.length ? ex[0].s : null, entry: en.length ? en.at(-1).s : null, cross: best ? (best.r.tags.name || best.r.tags.ref || null) : null, _n: c.e.length });
}
// điểm kiểm tra: đường gốc mỗi ~500 m (x,z,s trên đường đã tích phân)
const check = [];
for (let sr = 0; sr < rawLen; sr += 500) { const [E, N] = rawAt(sr); check.push([toInt(sr), rnd(E), rnd(-N)]); }
{ const [E, N] = rawAt(rawLen - 0.01); check.push([length, rnd(E), rnd(-N)]); }
const endLL = pos.get(rn.at(-1));

const data = {
  src: '© OpenStreetMap contributors (ODbL)', fetched: new Date().toISOString().slice(0, 10),
  origin: { lat: +lat0.toFixed(6), lon: +lon0.toFixed(6) }, end: { lat: +endLL[0].toFixed(6), lon: +endLL[1].toFixed(6) },
  step: STEP, length, heading: heading.map((h) => +h.toFixed(5)), check,
  ics: ics.map(({ _n, ...r }) => r), bridges: bridgesOut, rivers, tolls: tollsOut, limits, lanes,
};
fs.writeFileSync(OUT, JSON.stringify(data));

// ---------- báo cáo ----------
console.log(`\nHLG: dài raw ${(rawLen / 1000).toFixed(2)} km, tích phân ${(length / 1000).toFixed(2)} km (${nSteps} bước), cạnh ${redge.length}, node ${rn.length}`);
console.log(`lệch tối đa so với OSM: ${maxDev.toFixed(1)} m tại km ${km(maxDevS)}; lệch điểm cuối ${endErr.toFixed(1)} m; bán kính cong nhỏ nhất (50 m): ${minR.toFixed(0)} m tại km ${km(minRs)}`);
console.log(`số mục: ics ${ics.length}, bridges ${bridgesOut.length}, rivers ${rivers.length}, tolls ${tollsOut.length}, limits ${limits.length}, lanes ${lanes.length}`);
console.log('\nNÚT GIAO (km): centre | exit | entry | tên | ref | cross');
for (const i of ics) console.log(`${km(i.s)} | ${i.exit != null ? km(i.exit) : '-'} | ${i.entry != null ? km(i.entry) : '-'} | ${i.name} | ${i.ref} | ${i.cross} (${i._n} sự kiện)`);
console.log('\nCẦU:'); for (const b of bridgesOut) console.log(`${km(b.s0)}–${km(b.s1)} (${b.s1 - b.s0} m) ${b.kind} ${b.name || '(không tên)'}`);
console.log('\nSÔNG:'); for (const r of rivers) console.log(`${km(r.s)} ${r.kind} ${r.width} m ${r.name || '(không tên)'}`);
console.log('\nTRẠM THU PHÍ:'); for (const t of tollsOut) console.log(`${km(t.s)} ${t.name}`);
console.log('\nGIỚI HẠN:', limits.map((l) => `${km(l.s0)}-${km(l.s1)}:${l.kmh}`).join('  '));
console.log('SỐ LÀN:', lanes.map((l) => `${km(l.s0)}-${km(l.s1)}:${l.n}`).join('  '));
console.log(`\nđã ghi ${OUT} (${(fs.statSync(OUT).size / 1024).toFixed(1)} KB)`);
