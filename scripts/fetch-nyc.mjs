// Tải dữ liệu OSM (Overpass) khu Midtown Manhattan rồi nén thành src/nyc-data.json cho map New York (vòng khép kín, không quay đầu):
// 7th Ave (xuống nam, qua Times Square) → rẽ trái 32nd St (đông) → rẽ trái Park Ave (bắc: hầm 33–40 St + cầu cạn quanh Grand Central)
// → rẽ trái 55th St (tây) → rẽ trái 7th Ave. Dò từng chặng bằng Dijkstra trên đồ thị CÓ HƯỚNG (tôn trọng oneway) chỉ gồm các way đúng tên
// => chặng nào sai chiều một chiều thì không dò được và script dừng báo lỗi (đổi sang đường ngang bên cạnh trong ROUTE).
// Chặng Park Ave bắt buộc đi qua ít nhất 1 cạnh hầm (tunnel=yes) và 1 cạnh cầu (bridge=yes).
// Quy ước toạ độ như fetch-hlg.mjs: E=(lon−lon0)·cos(lat0)·111320, N=(lat−lat0)·110540; game x=E, z=−N; th=atan2(−dE,dN).
// Chạy: node scripts/fetch-nyc.mjs   (cache Overpass: env HLG_CACHE, mặc định <tmp>/chilldrive-osm, thư mục con nyc/)
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const CACHE = path.join(process.env.HLG_CACHE || path.join(os.tmpdir(), 'chilldrive-osm'), 'nyc');
const OUT = 'src/nyc-data.json';
const BB = '40.742,-73.992,40.768,-73.966';
const STEP = 5;               // bước dữ liệu xuất ra (m)
const FILLET = 32;            // cửa sổ làm mượt hướng (m) => góc vuông thành cung bán kính ~FILLET·2/π ≈ 20 m (đại lộ rộng 18 m)
const EPS = ['https://overpass.kumi.systems/api/interpreter', 'https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter'];
const DRIVE = '^(primary|secondary|tertiary|residential|unclassified|trunk|primary_link|secondary_link|tertiary_link|living_street|pedestrian)$';
// tuyến: 4 góc (giao của 2 tên đường) + tên đường được đi của mỗi chặng (chặng k: góc k → góc k+1)
const ROUTE = [
  { corner: [/^7th Avenue$/, /^West 55th Street$/], leg: /^7th Avenue$/, name: '7th Ave' },
  { corner: [/^7th Avenue$/, /^West 32nd Street$/], leg: /^(West|East) 32nd Street$/, name: '32nd St' },
  { corner: [/^Park Avenue( South| Tunnel)?$/, /^East 32nd Street$/], leg: /^Park Avenue( South| Tunnel)?$/, name: 'Park Ave', needTunnel: true, needBridge: true },
  { corner: [/^Park Avenue$/, /^East 55th Street$/], leg: /^(East|West) 55th Street$/, name: '55th St' },
];

// ---------- tải + cache ----------
fs.mkdirSync(CACHE, { recursive: true });
async function overpass(name, query) {
  const f = path.join(CACHE, name + '.json');
  if (fs.existsSync(f) && fs.statSync(f).size > 1000) return JSON.parse(fs.readFileSync(f, 'utf8'));
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
const ways = (await overpass('ways', `[out:json][timeout:120];way["highway"~"${DRIVE}"](${BB});out body geom;`)).elements;
const sigs = (await overpass('signals', `[out:json][timeout:60];node["highway"="traffic_signals"](${BB});out body;`)).elements;

// ---------- đồ thị có hướng ----------
const pos = new Map();
for (const w of ways) for (let i = 0; i < w.nodes.length; i++) pos.set(w.nodes[i], [w.geometry[i].lat, w.geometry[i].lon]);
const hav = (a, b) => Math.hypot((b[0] - a[0]) * 110540, (b[1] - a[1]) * Math.cos(a[0] * Math.PI / 180) * 111320);
const car = (w) => w.tags.highway !== 'pedestrian' && w.tags.motor_vehicle !== 'no' && w.tags.access !== 'no';
const ow = (w) => (w.tags.oneway === '-1' ? -1 : w.tags.oneway === 'yes' || w.tags.junction === 'roundabout' ? 1 : 0);
const wayOf = new Map();          // node -> các way chứa node
for (const w of ways) for (const n of w.nodes) (wayOf.get(n) || wayOf.set(n, []).get(n)).push(w);
function edges(allow) {
  const adj = new Map(), add = (a, b, w) => (adj.get(a) || adj.set(a, []).get(a)).push([b, w]);
  for (const w of ways) {
    if (!car(w) || !allow.test(w.tags.name || '')) continue;
    const o = ow(w);
    for (let i = 0; i + 1 < w.nodes.length; i++) {
      if (o >= 0) add(w.nodes[i], w.nodes[i + 1], w);
      if (o <= 0) add(w.nodes[i + 1], w.nodes[i], w);
    }
  }
  return adj;
}
// node chung của 2 nhóm tên (góc phố)
function cornerNodes([A, B]) {
  const out = [];
  for (const [n, ws] of wayOf) if (ws.some((w) => car(w) && A.test(w.tags.name || '')) && ws.some((w) => car(w) && B.test(w.tags.name || ''))) out.push(n);
  return out;
}
// Dijkstra nhiều nguồn; trạng thái = (node, đã qua hầm?, đã qua cầu?) khi chặng bắt buộc đi hầm / cầu
function route(src, dst, allow, needT, needB) {
  const adj = edges(allow), key = (n, f) => n + ':' + f, need = (needT ? 1 : 0) | (needB ? 2 : 0);
  const dist = new Map(), prev = new Map(), done = new Set();
  for (const n of src) dist.set(key(n, 0), 0);
  const goal = new Set(dst);
  let end = null;
  for (;;) {
    let u = null, du = Infinity;
    for (const [k, v] of dist) if (!done.has(k) && v < du) { u = k; du = v; }
    if (u === null) break;
    done.add(u);
    const [n, f] = u.split(':').map(Number);
    if (goal.has(n) && (f & need) === need && du > 30) { end = u; break; }
    for (const [m, w] of adj.get(n) || []) {
      const g = f | (w.tags.tunnel === 'yes' ? 1 : 0) | (w.tags.bridge === 'yes' ? 2 : 0), k = key(m, g & need), d = du + hav(pos.get(n), pos.get(m));
      if (d < (dist.get(k) ?? Infinity)) { dist.set(k, d); prev.set(k, [u, w]); }
    }
  }
  if (!end) return null;
  const nodes = [], wl = [];
  let k = end;
  for (; prev.has(k); k = prev.get(k)[0]) { nodes.push(+k.split(':')[0]); wl.push(prev.get(k)[1]); }
  nodes.push(+k.split(':')[0]);
  return { nodes: nodes.reverse(), ways: wl.reverse(), len: dist.get(end) };
}

const corners = ROUTE.map((R) => cornerNodes(R.corner));
corners.forEach((c, i) => { if (!c.length) throw new Error('không thấy góc ' + ROUTE[i].corner.join(' ∩ ')); });
// quay lui: góc có nhiều node (đường đôi) => thử lần lượt node đích của từng chặng tới khi khép được cả vòng
function solve(k, from, start) {
  if (k === 4) return [];
  const R = ROUTE[k], dsts = k === 3 ? [start] : corners[(k + 1) % 4];
  const tries = dsts.map((d) => route(from, [d], R.leg, R.needTunnel, R.needBridge)).filter(Boolean).sort((a, b) => a.len - b.len);
  for (const r of tries) {
    const rest = solve(k + 1, [r.nodes.at(-1)], start ?? r.nodes[0]);
    if (rest) return [r, ...rest];
  }
  return null;
}
let legs = null;
for (const c of corners[0]) if ((legs = solve(0, [c], c))) break;
if (!legs) {
  for (let k = 0; k < 4; k++) if (!corners[(k + 1) % 4].some((d) => corners[k].some((c) => route([c], [d], ROUTE[k].leg, ROUTE[k].needTunnel, ROUTE[k].needBridge))))
    throw new Error(`chặng ${ROUTE[k].name}: không đi được theo chiều một chiều (đổi sang đường ngang bên cạnh)`);
  throw new Error('không khép được vòng');
}
const path0 = [legs[0].nodes[0]], wpath = [], cornerIdx = [];
legs.forEach((r, k) => {
  console.log(`chặng ${k + 1} ${ROUTE[k].name}: ${Math.round(r.len)} m, ${r.nodes.length} node`);
  cornerIdx.push(path0.length - 1);
  for (let i = 1; i < r.nodes.length; i++) { path0.push(r.nodes[i]); wpath.push(r.ways[i - 1]); }
});
if (path0.at(-1) !== path0[0]) throw new Error('vòng không khép kín: ' + path0[0] + ' ≠ ' + path0.at(-1));

// ---------- kiểm chiều một chiều (ghi lại vào dữ liệu) ----------
const [lat0, lon0] = pos.get(path0[0]);
const KE = Math.cos(lat0 * Math.PI / 180) * 111320, KN = 110540;
const prj = (n) => { const [la, lo] = pos.get(n); return [(lo - lon0) * KE, (la - lat0) * KN]; };
const P = path0.map(prj);
const cum = [0]; for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
const RAW = cum.at(-1);
// trục phố Manhattan: "bắc" phố = lệch 29° về đông so với bắc thật
const AX = 29 * Math.PI / 180, mN = [Math.sin(AX), Math.cos(AX)], mE = [Math.cos(AX), -Math.sin(AX)];
function legDir(k) {
  const a = cornerIdx[k], b = k < 3 ? cornerIdx[k + 1] : P.length - 1;
  const v = [P[b][0] - P[a][0], P[b][1] - P[a][1]], n = v[0] * mN[0] + v[1] * mN[1], e = v[0] * mE[0] + v[1] * mE[1];
  return Math.abs(n) > Math.abs(e) ? (n > 0 ? 'bắc' : 'nam') : (e > 0 ? 'đông' : 'tây');
}
const oneways = new Set();
for (let i = 0; i < wpath.length; i++) if (ow(wpath[i])) oneways.add(wpath[i].tags.name);
const verify = ROUTE.map((R, k) => ({ leg: R.name, dir: legDir(k), oneway: wpath.slice(cornerIdx[k], k < 3 ? cornerIdx[k + 1] : wpath.length).every((w) => ow(w)) }));
const tunW = wpath.filter((w) => w.tags.tunnel === 'yes'), brW = wpath.filter((w) => w.tags.bridge === 'yes');
const wdir = (ws) => { let n = 0; for (const w of ws) { const a = w.geometry[0], b = w.geometry.at(-1); n += ((b.lon - a.lon) * KE * mN[0] + (b.lat - a.lat) * KN * mN[1]) * (ow(w) || 1); } return n > 0 ? 'bắc' : 'nam'; };
verify.push({ leg: 'hầm Park Ave', dir: wdir(tunW), oneway: tunW.every((w) => ow(w)), ways: [...new Set(tunW.map((w) => w.id))] });
verify.push({ leg: 'cầu cạn Park Ave', dir: wdir(brW), oneway: brW.every((w) => ow(w)), ways: [...new Set(brW.map((w) => w.id))] });
for (const v of verify) console.log(`  ${v.leg}: đi ${v.dir}${v.oneway ? ' (một chiều)' : ' (có đoạn 2 chiều)'}`);

// ---------- làm mượt + khép vòng ----------
// mẫu 1 m dọc đường gốc => hướng mỗi mét (unwrap), trung bình trượt vòng FILLET m, tích phân lại, chia sai số khép vòng theo s
const N1 = Math.round(RAW), d1 = RAW / N1;
const at = (s) => { let j = 0; while (j < cum.length - 2 && cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1); return [P[j][0] + (P[j + 1][0] - P[j][0]) * t, P[j][1] + (P[j + 1][1] - P[j][1]) * t]; };
const R1 = []; for (let i = 0; i <= N1; i++) R1.push(at(i * d1));
const h1 = [];
for (let i = 0; i < N1; i++) { const dE = R1[i + 1][0] - R1[i][0], dN = R1[i + 1][1] - R1[i][1]; let h = Math.atan2(-dE, dN); if (i) while (h - h1[i - 1] > Math.PI) h -= 2 * Math.PI; if (i) while (h - h1[i - 1] < -Math.PI) h += 2 * Math.PI; h1.push(h); }
const TURN = Math.round((h1[N1 - 1] - h1[0]) / (2 * Math.PI)) * 2 * Math.PI;   // tổng góc quay 1 vòng (+2π: rẽ trái)
const hx = (i) => h1[((i % N1) + N1) % N1] + TURN * Math.floor(i / N1);
const W = Math.round(FILLET / d1), hs = [];
for (let i = 0; i < N1; i++) { let a = 0; for (let k = -W / 2; k < W / 2; k++) a += hx(i + k); hs.push(a / W); }
const Q = [[0, 0]];
for (let i = 0; i < N1; i++) { const th = hs[i]; Q.push([Q[i][0] - Math.sin(th) * d1, Q[i][1] + Math.cos(th) * d1]); }   // E, N
const err = [Q[N1][0] - Q[0][0], Q[N1][1] - Q[0][1]];
for (let i = 0; i <= N1; i++) { Q[i][0] -= err[0] * i / N1; Q[i][1] -= err[1] * i / N1; }
console.log(`dài ${RAW.toFixed(0)} m, sai số khép vòng ${Math.hypot(...err).toFixed(1)} m (đã chia đều), tổng góc ${(TURN / Math.PI).toFixed(1)}π`);

// điểm đầu vòng s = 0: cách góc 7th Ave / 55th St 120 m về phía nam (không nằm giữa khúc cua)
const S0 = 120;
const L = RAW, Nout = Math.round(L / STEP), step = L / Nout;
const qAt = (s) => { s = ((s % L) + L) % L; const f = s / d1, i = Math.min(N1 - 1, Math.floor(f)), t = f - i; return [Q[i][0] + (Q[i + 1][0] - Q[i][0]) * t, Q[i][1] + (Q[i + 1][1] - Q[i][1]) * t]; };
const x = [], z = [], heading = [];
for (let i = 0; i <= Nout; i++) {
  const s = S0 + i * step, a = qAt(s - 0.5), b = qAt(s + 0.5), c = qAt(s);
  x.push(+c[0].toFixed(2)); z.push(+(-c[1]).toFixed(2));
  let h = Math.atan2(-(b[0] - a[0]), b[1] - a[1]);
  if (i) { while (h - heading[i - 1] > Math.PI) h -= 2 * Math.PI; while (h - heading[i - 1] < -Math.PI) h += 2 * Math.PI; }
  heading.push(+h.toFixed(5));
}
const sOf = (rawS) => ((rawS - S0) % L + L) % L;       // s gốc (từ góc 7th/55th) => s của vòng

// ---------- đối tượng dọc tuyến ----------
const nodeS = path0.map((_, i) => sOf(cum[i]));
const cornersS = cornerIdx.map((i, k) => ({ s: +nodeS[i].toFixed(1), name: [ROUTE[(k + 3) % 4].name, ROUTE[k].name].join(' → ') }));
// hầm / cầu: đoạn s của các cạnh tunnel / bridge (gộp các cạnh liền nhau)
function spans(pred) {
  const out = [];
  for (let i = 0; i < wpath.length; i++) {
    if (!pred(wpath[i])) continue;
    const a = cum[i], b = cum[i + 1], last = out.at(-1);
    if (last && a - last[1] < 5) last[1] = b; else out.push([a, b]);
  }
  return out.map(([a, b]) => ({ s0: +sOf(a).toFixed(1), s1: +(sOf(a) + b - a).toFixed(1) }));
}
const tunnels = spans((w) => w.tags.tunnel === 'yes'), bridges = spans((w) => w.tags.bridge === 'yes');
const passages = spans((w) => w.tags.tunnel === 'building_passage');
// đoạn dốc dẫn vào hầm: các way tên "Park Avenue Tunnel" không gắn tunnel (miệng hầm hở)
const portals = spans((w) => /Tunnel$/.test(w.tags.name || '') && w.tags.tunnel !== 'yes');

// ngã tư: node trên tuyến (ở mặt phố) có way khác tên cắt qua; gộp các node cách nhau < 30 m
const routeNames = new Set(wpath.map((w) => w.tags.name));
const elevated = (i) => [wpath[i - 1], wpath[i]].some((w) => w && (w.tags.tunnel || w.tags.bridge === 'yes' || /Tunnel$/.test(w.tags.name || '')));
const strip = (n) => n.replace(/^(East|West) /, '');
const raw = [];
for (let i = 1; i < path0.length - 1; i++) {
  if (elevated(i)) continue;
  const here = strip(wpath[i - 1].tags.name || '');
  const xs = (wayOf.get(path0[i]) || []).filter((w) => w.tags.name && strip(w.tags.name) !== here && !routeNames.has(w.tags.name) && !w.tags.bridge && !w.tags.tunnel
    && w.tags.highway !== 'pedestrian');
  if (!xs.length) continue;
  // chiều một chiều của đường ngang so với vector phải của tuyến: +1 chạy sang phải (+u), −1 sang trái, 0 hai chiều
  const a = P[i - 1], b = P[i + 1], fwd = [b[0] - a[0], b[1] - a[1]], right = [fwd[1], -fwd[0]];
  let dir = 0;
  for (const w of xs) {
    const o = ow(w); if (!o) continue;
    const k = w.nodes.indexOf(path0[i]), p = w.nodes[Math.max(0, k - 1)], q = w.nodes[Math.min(w.nodes.length - 1, k + 1)];
    const v = [prj(q)[0] - prj(p)[0], prj(q)[1] - prj(p)[1]];
    dir = Math.sign(v[0] * right[0] + v[1] * right[1]) * o;
  }
  raw.push({ s: nodeS[i], name: strip(xs[0].tags.name), ow: dir, lat: pos.get(path0[i])[0], lon: pos.get(path0[i])[1] });
}
raw.sort((p, q) => p.s - q.s);
const junctions = [];
for (const j of raw) {
  const last = junctions.at(-1);
  if (last && j.s - last.s < 30) { if (!last.names.includes(j.name)) last.names.push(j.name); if (!last.ow) last.ow = j.ow; continue; }
  junctions.push({ s: j.s, names: [j.name], ow: j.ow, lat: j.lat, lon: j.lon });
}
// góc rẽ cũng là ngã tư (có đèn); ngã tư thường cách góc < 40 m gộp vào góc
for (const c of cornersS) {
  for (let i = junctions.length - 1; i >= 0; i--) if (Math.min(Math.abs(junctions[i].s - c.s), L - Math.abs(junctions[i].s - c.s)) < 40) junctions.splice(i, 1);
  junctions.push({ s: c.s, names: [c.name], ow: 0, corner: true });
}
junctions.sort((p, q) => p.s - q.s);
for (const j of junctions) {
  j.signal = !!j.corner || sigs.some((n) => j.lat !== undefined && hav([n.lat, n.lon], [j.lat, j.lon]) < 30);
  j.s = +j.s.toFixed(1); delete j.lat; delete j.lon;
}
// số làn theo OSM (chiều đi)
const lanes = [];
for (let i = 0; i < wpath.length; i++) {
  const n = Math.max(1, Math.min(6, parseInt(wpath[i].tags.lanes, 10) || 2)), a = nodeS[i], last = lanes.at(-1);
  if (last && last.n === n && Math.abs(a - last.s1) < 1) last.s1 = +(a + cum[i + 1] - cum[i]).toFixed(1);
  else lanes.push({ s0: +a.toFixed(1), s1: +(a + cum[i + 1] - cum[i]).toFixed(1), n });
}
// tên đường theo đoạn (cho HUD / biển tên)
const streets = cornersS.map((c, k) => ({ s0: c.s, name: ROUTE[k].name }));

const data = {
  source: 'OpenStreetMap contributors (ODbL)', bbox: BB, step: +step.toFixed(4), length: +L.toFixed(1), turn: +TURN.toFixed(5),
  verify, corners: cornersS, streets, tunnels, portals, bridges, passages, junctions, lanes, x, z, heading,
};
fs.writeFileSync(OUT, JSON.stringify(data));
console.log(`=> ${OUT}: ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB, ${junctions.length} ngã tư (${junctions.filter((j) => j.signal).length} có đèn), hầm ${tunnels.map((t) => `${t.s0}–${t.s1}`)}, cầu ${bridges.map((t) => `${t.s0}–${t.s1}`)}`);

// ---------- nhà thật (OSM building, cache nyc/buildings.json) => docs/assets/nyc-buildings.json ----------
// Mỗi nhà dời theo độ lệch của đường đã làm mượt tại điểm tuyến gần nhất (đoạn quanh góc rẽ: nội suy từ 2 bên => không kéo nhà theo cung cua),
// mặt tiền lấn vào vỉa hè (gần tim đường hơn FRONT) thì lùi ra (≤ 9 m, quá thì bỏ — nhà vắt qua đường như Helmsley do model riêng thay).
const BF = path.join(CACHE, 'buildings.json');
if (fs.existsSync(BF)) {
  const FRONT = 9 + 5.5 + 0.4, RANGE = 230;
  const off = R1.map((p, j) => [Q[j][0] - p[0], Q[j][1] - p[1]]);
  for (const ci of cornerIdx) {                                   // vùng góc ±45 m: nội suy tuyến tính độ lệch 2 đầu
    const c = Math.round(cum[ci] / d1), a = c - 45, b = c + 45, A = off[(a + N1) % N1], B = off[b % N1];
    for (let j = a; j <= b; j++) { const t = (j - a) / (b - a); off[(j + N1) % N1] = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t]; }
  }
  const ll = (g) => [(g.lon - lon0) * KE, (g.lat - lat0) * KN];
  const nearest = (E, N, arr) => { let bj = 0, bd = Infinity; for (let j = 0; j < arr.length; j += 2) { const d = (arr[j][0] - E) ** 2 + (arr[j][1] - N) ** 2; if (d < bd) { bd = d; bj = j; } } return [bj, Math.sqrt(bd)]; };
  const segD = (E, N, j) => {            // khoảng cách tới tim đường đã làm mượt quanh mẫu j
    let bd = Infinity;
    for (let k = j - 30; k < j + 30; k++) { const a = Q[(k + N1) % N1], b = Q[(k + 1 + N1) % N1], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
      const t = Math.max(0, Math.min(1, ((E - a[0]) * dx + (N - a[1]) * dy) / l2)); bd = Math.min(bd, Math.hypot(E - a[0] - dx * t, N - a[1] - dy * t)); }
    return bd;
  };
  const hOf = (t) => { const h = parseFloat(t.height); if (h > 2) return h; const l = parseFloat(t['building:levels']); if (l > 0) return l * 3.6 + 2; return null; };
  const out = []; let drop = 0, drop2 = 0, moved = 0, noH = 0;
  for (const w of JSON.parse(fs.readFileSync(BF, 'utf8')).elements) {
    if (!w.geometry || w.geometry.length < 4 || w.tags.building === 'roof' || w.tags.building === 'construction') continue;
    let P = w.geometry.map(ll); P.pop();
    const cE = P.reduce((a, p) => a + p[0], 0) / P.length, cN = P.reduce((a, p) => a + p[1], 0) / P.length;
    const [j, dist] = nearest(cE, cN, R1);
    if (dist > RANGE) continue;
    P = P.map(([E, N]) => [E + off[j][0], N + off[j][1]]);
    const jq = nearest(cE + off[j][0], cN + off[j][1], Q)[0];
    // khoảng cách đường ↔ nhà đo từ các điểm tim đường (±160 m) tới đa giác (nằm trong = 0) — bắt cả nhà to có cạnh vắt qua đường
    let md = Infinity;
    for (let k = jq - 160; k <= jq + 160; k++) {
      const [qx, qy] = Q[(k + N1) % N1];
      let inside = false, dmin = Infinity;
      for (let a = 0, b = P.length - 1; a < P.length; b = a++) {
        const [ax, ay] = P[a], [bx, by] = P[b];
        if ((ay > qy) !== (by > qy) && qx < ax + (bx - ax) * (qy - ay) / (by - ay)) inside = !inside;
        const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((qx - ax) * dx + (qy - ay) * dy) / l2));
        dmin = Math.min(dmin, Math.hypot(qx - ax - dx * t, qy - ay - dy * t));
      }
      md = Math.min(md, inside ? 0 : dmin);
    }
    if (md < FRONT + 0.3) {
      const dl = FRONT + 0.3 - md; if (dl > 9) { drop++; continue; }
      const q = Q[jq], c = [cE + off[j][0], cN + off[j][1]], nl = Math.hypot(c[0] - q[0], c[1] - q[1]) || 1, nx = (c[0] - q[0]) / nl, ny = (c[1] - q[1]) / nl;
      P = P.map(([E, N]) => [E + nx * dl, N + ny * dl]); moved++;
    }
    // kiểm cuối với TOÀN BỘ tuyến (mẫu 2 m): còn lấn vỉa hè thì lùi tiếp theo hướng từ điểm đường gần nhất (tối đa 3 lần), không được thì bỏ
    let ok = false;
    for (let it = 0; it < 4 && !ok; it++) {
      let bd = Infinity, bq = null;
      for (let k = 0; k < N1; k += 2) {
        const [qx, qy] = Q[k];
        if (Math.abs(qx - P[0][0]) > 400 || Math.abs(qy - P[0][1]) > 400) continue;
        let inside = false, dmin = Infinity;
        for (let a = 0, b = P.length - 1; a < P.length; b = a++) {
          const [ax, ay] = P[a], [bx, by] = P[b];
          if ((ay > qy) !== (by > qy) && qx < ax + (bx - ax) * (qy - ay) / (by - ay)) inside = !inside;
          const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((qx - ax) * dx + (qy - ay) * dy) / l2));
          dmin = Math.min(dmin, Math.hypot(qx - ax - dx * t, qy - ay - dy * t));
        }
        const d = inside ? 0 : dmin;
        if (d < bd) { bd = d; bq = Q[k]; }
      }
      if (bd >= FRONT - 0.2) { ok = true; break; }
      if (bd < 3 || it === 3) break;
      const cx2 = P.reduce((a, p) => a + p[0], 0) / P.length, cy2 = P.reduce((a, p) => a + p[1], 0) / P.length;
      const nl = Math.hypot(cx2 - bq[0], cy2 - bq[1]) || 1, d2 = FRONT + 0.3 - bd;
      P = P.map(([E, N]) => [E + (cx2 - bq[0]) / nl * d2, N + (cy2 - bq[1]) / nl * d2]);
    }
    if (!ok) { drop2++; continue; }
    const pts = []; for (const [E, N] of P) { const l = pts.length; if (l && Math.hypot(pts[l - 2] - E, pts[l - 1] + N) < 0.8) continue; pts.push(+E.toFixed(1), +(-N).toFixed(1)); }
    if (pts.length < 6) continue;
    let h = hOf(w.tags); if (!h) { noH++; h = 14 + 10 * Math.random(); }
    const mat = (w.tags['building:material'] || w.tags['building:facade:material'] || '').toLowerCase();
    const cls = /glass/.test(mat) || h >= 110 ? (Math.random() < 0.4 ? 3 : 0) : /brick/.test(mat) || h < 30 ? 4 : /stone|concrete|lime/.test(mat) || h < 110 ? 1 : 2;
    out.push([+Math.min(h, 450).toFixed(1), cls, +sOf(j * d1).toFixed(0), pts]);
  }
  // toạ độ thật của tòa nhà nổi tiếng không nằm sát tuyến (model riêng, game bỏ nhà OSM trùng chỗ)
  const lm = {};
  for (const [name, lat, lon] of [['empire', 40.74844, -73.985664], ['chrysler', 40.751621, -73.975502], ['waldorf', 40.756584, -73.973839],
    ['seagram', 40.758419, -73.972345], ['lever', 40.75953, -73.973176], ['macys', 40.750795, -73.989091], ['msg', 40.750505, -73.993439]]) {
    const [E, N] = ll({ lat, lon }), [j] = nearest(E, N, R1);
    lm[name] = [+(E + off[j][0]).toFixed(1), +(-(N + off[j][1])).toFixed(1)];
  }
  const BO = 'docs/assets/nyc-buildings.json';
  fs.writeFileSync(BO, JSON.stringify({ source: 'OpenStreetMap contributors (ODbL)', lm, b: out }));
  console.log(`=> ${BO}: ${(fs.statSync(BO).size / 1024).toFixed(0)} KB, ${out.length} nhà (lùi ${moved}, bỏ ${drop} + ${drop2} khi kiểm cuối, không có chiều cao ${noH})`);
}
