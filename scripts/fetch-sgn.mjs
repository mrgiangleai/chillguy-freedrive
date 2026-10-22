// Tải dữ liệu OSM (Overpass) quanh Landmark 81 (TP.HCM) rồi nén thành src/sgn-data.json cho map Landmark (vòng khép kín, không quay đầu):
// Nguyễn Hữu Cảnh → khu Vinhomes Central Park (Vạn Hoa 4 / 5, Trần Trọng Kim sát Landmark 81) → cầu Sài Gòn → Võ Nguyên Giáp (Xa lộ Hà Nội cũ)
// → nút An Phú → Mai Chí Thọ → hầm Thủ Thiêm (Hầm Sông Sài Gòn) → Quận 1 → Tôn Đức Thắng → Nguyễn Hữu Cảnh (xem WAY).
// Đường VN phần lớn là đường đôi vẽ thành 2 way một chiều => dò từng chặng giữa các điểm mốc bằng Dijkstra trên đồ thị CÓ HƯỚNG
// (tôn trọng oneway; đường ngoài danh sách tuyến bị phạt ×6, nhánh nối không tên ×1.3, đường gom cùng tên cấp thấp hơn ×1.5).
// Quy ước toạ độ như fetch-nyc.mjs: E=(lon−lon0)·cos(lat0)·111320, N=(lat−lat0)·110540; game x=E, z=−N; th=atan2(−dE,dN).
// Chạy: node scripts/fetch-sgn.mjs   (cache Overpass: env HLG_CACHE, mặc định <tmp>/chilldrive-osm, thư mục con sgn/)
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const CACHE = path.join(process.env.HLG_CACHE || path.join(os.tmpdir(), 'chilldrive-osm'), 'sgn');
const OUT = 'src/sgn-data.json';
const BB = '10.765,106.700,10.812,106.770';
const STEP = 5;               // bước dữ liệu xuất ra (m)
const FILLET = 36;            // cửa sổ làm mượt hướng (m): nhánh rẽ Điện Biên Phủ → Nguyễn Hữu Cảnh gắt (> 120°) => cung R ≥ 12 m
const EPS = ['https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const DRIVE = '^(motorway|trunk|primary|secondary|tertiary|motorway_link|trunk_link|primary_link|secondary_link|tertiary_link|residential|unclassified)$';
const ROUTE_NAMES = /^(Nguyễn Hữu Cảnh|Tôn Đức Thắng|Hầm Sông Sài Gòn|Võ Văn Kiệt|Mai Chí Thọ|Võ Nguyên Giáp|Cầu Sài Gòn( 2)?|Điện Biên Phủ|Hầm chui Nguyễn Hữu Cảnh|Cầu vượt Nguyễn Hữu Cảnh|(Đường )?Vạn Hoa \d|Trần Trọng Kim)$/;
// điểm mốc theo chiều chạy (dir: hướng la bàn của chiều đi, độ — chỉ nhận đoạn way đi đúng hướng ±60°). Chiều kim đồng hồ (chú chốt 23/10/2026):
// Nguyễn Hữu Cảnh (về phía cầu SG) → rẽ vào khu Vinhomes Central Park: Vạn Hoa 4 → Vạn Hoa 3 → Trần Trọng Kim (sát chân Landmark 81)
// → vòng bầu dục Điện Biên Phủ → cầu Sài Gòn 2 → Võ Nguyên Giáp → An Phú → Mai Chí Thọ → hầm Thủ Thiêm → Quận 1 → Tôn Đức Thắng → Nguyễn Hữu Cảnh.
// s = 0 tại mốc đầu (Nguyễn Hữu Cảnh, ~300 m trước chỗ rẽ vào khu)
const WAY = [
  { lat: 10.7925, lon: 106.7175, name: /^Nguyễn Hữu Cảnh$/, label: 'Nguyễn Hữu Cảnh', dir: 45 },
  { lat: 10.7948, lon: 106.7198, name: /Vạn Hoa 4$/, label: 'Vạn Hoa 4', dir: 140, r: 200 },
  { lat: 10.7936, lon: 106.7215, name: /Vạn Hoa 3$/, label: 'Vạn Hoa 3', dir: 90, r: 150 },
  { lat: 10.7950, lon: 106.7232, name: /^Trần Trọng Kim$/, label: 'Trần Trọng Kim', dir: 15, r: 200 },
  // nút giao chân cầu (vòng bầu dục Điện Biên Phủ): đi trên đỉnh vòng về tây, vòng qua đầu tây, theo cạnh dưới về đông lên cầu Sài Gòn 2
  { lat: 10.79905, lon: 106.7215, name: /^Điện Biên Phủ$/, label: 'Điện Biên Phủ', dir: 270, r: 60 },
  { lat: 10.7977, lon: 106.7218, name: /^Điện Biên Phủ$/, label: 'Điện Biên Phủ', dir: 90, r: 60 },
  { lat: 10.7990, lon: 106.7280, name: /^Cầu Sài Gòn( 2)?$/, label: 'Cầu Sài Gòn', dir: 75 },
  { lat: 10.8010, lon: 106.7400, name: /^Võ Nguyên Giáp$/, label: 'Võ Nguyên Giáp', dir: 100 },
  { lat: 10.7965, lon: 106.7528, name: /^Mai Chí Thọ$/, label: 'Mai Chí Thọ', trunk: true, dir: 190 },
  { lat: 10.7790, lon: 106.7340, name: /^Mai Chí Thọ$/, label: 'Mai Chí Thọ', trunk: true, dir: 240 },
  { lat: 10.7695, lon: 106.7080, name: /^Hầm Sông Sài Gòn$/, label: 'Hầm Thủ Thiêm', tunnel: true, dir: 255, r: 900 },
  { lat: 10.7800, lon: 106.7062, name: /^Tôn Đức Thắng$/, label: 'Tôn Đức Thắng', dir: 20 },
];

// ---------- tải + cache ----------
fs.mkdirSync(CACHE, { recursive: true });
async function overpass(name, query) {
  const f = path.join(CACHE, name + '.json');
  if (fs.existsSync(f) && fs.statSync(f).size > 1000) return JSON.parse(fs.readFileSync(f, 'utf8'));
  for (let t = 0; t < 9; t++) {
    const ep = EPS[t % EPS.length];
    try {
      const r = await fetch(ep, { method: 'POST', headers: { 'User-Agent': 'chilldrive-mapgen/1.0', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(query) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const txt = await r.text(); const j = JSON.parse(txt);
      fs.writeFileSync(f, txt); console.log('đã tải', name, (txt.length / 1e3 | 0) + ' KB'); return j;
    } catch (e) { console.log('lỗi', name, ep, e.message); await new Promise((r) => setTimeout(r, 5000 * (1 + t))); }
  }
  throw new Error('không tải được ' + name);
}
const all = (await overpass('roads', `[out:json][timeout:170];way["highway"~"${DRIVE}"](${BB});out body geom;node["highway"="traffic_signals"](${BB});out body;`)).elements;
const ways = all.filter((e) => e.type === 'way'), sigs = all.filter((e) => e.type === 'node');

// ---------- đồ thị có hướng ----------
const pos = new Map();
for (const w of ways) for (let i = 0; i < w.nodes.length; i++) pos.set(w.nodes[i], [w.geometry[i].lat, w.geometry[i].lon]);
const hav = (a, b) => Math.hypot((b[0] - a[0]) * 110540, (b[1] - a[1]) * Math.cos(a[0] * Math.PI / 180) * 111320);
const car = (w) => w.tags.motor_vehicle !== 'no' && w.tags.access !== 'no' && w.tags.access !== 'private';
const ow = (w) => (w.tags.oneway === '-1' ? -1 : w.tags.oneway === 'yes' || w.tags.junction === 'roundabout' || /^(motorway|motorway_link)$/.test(w.tags.highway) ? 1 : 0);
const wayOf = new Map();
for (const w of ways) for (const n of w.nodes) (wayOf.get(n) || wayOf.set(n, []).get(n)).push(w);
const cost = (w) => {
  const nm = w.tags.name || '', hw = w.tags.highway;
  if (!nm) return /_link$/.test(hw) ? 1.3 : 8;
  if (!ROUTE_NAMES.test(nm)) return 6;
  return hw === 'trunk' || hw === 'motorway' ? 1 : hw === 'primary' ? 1.15 : 1.5;
};
const adj = new Map();
{
  const add = (a, b, w) => (adj.get(a) || adj.set(a, []).get(a)).push([b, w]);
  for (const w of ways) {
    if (!car(w)) continue;
    const o = ow(w);
    for (let i = 0; i + 1 < w.nodes.length; i++) {
      if (o >= 0) add(w.nodes[i], w.nodes[i + 1], w);
      if (o <= 0) add(w.nodes[i + 1], w.nodes[i], w);
    }
  }
}
// heap nhị phân nhỏ cho Dijkstra
class Heap {
  constructor() { this.a = []; }
  push(k, v) { const a = this.a; a.push([k, v]); let i = a.length - 1; while (i) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; } }
  pop() { const a = this.a, top = a[0], last = a.pop(); if (a.length) { a[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < a.length && a[l][0] < a[m][0]) m = l; if (r < a.length && a[r][0] < a[m][0]) m = r; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; } } return top; }
  get size() { return this.a.length; }
}
function route(src, dstSet, minLen = 30) {
  const dist = new Map(), len = new Map(), prev = new Map(), h = new Heap();
  dist.set(src, 0); len.set(src, 0); h.push(0, src);
  while (h.size) {
    const [d, u] = h.pop();
    if (d > dist.get(u)) continue;
    if (dstSet.has(u) && len.get(u) > minLen) {
      const nodes = [u], wl = []; let k = u;
      while (prev.has(k)) { const [p, w] = prev.get(k); wl.push(w); nodes.push(p); k = p; }
      return { nodes: nodes.reverse(), ways: wl.reverse(), len: len.get(u), cost: d };
    }
    for (const [m, w] of adj.get(u) || []) {
      const l = hav(pos.get(u), pos.get(m)), nd = d + l * cost(w);
      if (nd < (dist.get(m) ?? Infinity)) { dist.set(m, nd); len.set(m, len.get(u) + l); prev.set(m, [u, w]); h.push(nd, m); }
    }
  }
  return null;
}
// ứng viên điểm mốc: node trên way đúng tên (trunk nếu yêu cầu, hầm nếu yêu cầu) trong 300 m, gần nhất trước
const cands = WAY.map((P) => {
  const out = [];
  for (const w of ways) {
    if (!car(w) || !P.name.test(w.tags.name || '')) continue;
    if (P.trunk && w.tags.highway !== 'trunk') continue;
    if (P.tunnel && w.tags.tunnel !== 'yes') continue;
    const o = ow(w);
    for (let i = 0; i < w.nodes.length; i++) {
      const n = w.nodes[i], d = hav([P.lat, P.lon], pos.get(n)); if (d >= (P.r || 300)) continue;
      // hướng đi của way tại node (theo chiều một chiều; 2 chiều: nhận cả 2 hướng)
      const a = pos.get(w.nodes[Math.max(0, i - 1)]), b = pos.get(w.nodes[Math.min(w.nodes.length - 1, i + 1)]);
      const brg = Math.atan2((b[1] - a[1]) * Math.cos(a[0] * Math.PI / 180), b[0] - a[0]) * 180 / Math.PI;
      const dd = (t) => Math.abs(((t - P.dir) % 360 + 540) % 360 - 180);
      if (o === 1 && dd(brg) > 60) continue;
      if (o === -1 && dd(brg + 180) > 60) continue;
      if (!o && Math.min(dd(brg), dd(brg + 180)) > 60) continue;
      out.push([d, n]);
    }
  }
  out.sort((a, b) => a[0] - b[0]);
  const seen = new Set(), res = [];
  for (const [, n] of out) if (!seen.has(n)) { seen.add(n); res.push(n); if (res.length >= 10) break; }
  if (!res.length) throw new Error('không thấy điểm mốc ' + P.label);
  return res;
});
// quay lui: thử lần lượt node của điểm mốc đầu; mỗi chặng tới tập ứng viên mốc kế tiếp (chặng cuối: đúng node xuất phát)
let legs = null;
for (const start of cands[0]) {
  const L = []; let from = start, ok = true;
  for (let k = 0; k < WAY.length; k++) {
    const dst = k === WAY.length - 1 ? new Set([start]) : new Set(cands[k + 1]);
    const r = route(from, dst);
    if (!r) { ok = false; break; }
    L.push(r); from = r.nodes.at(-1);
  }
  if (ok) { legs = L; break; }
}
if (!legs) throw new Error('không khép được vòng');
const path0 = [legs[0].nodes[0]], wpath = [], legIdx = [];
legs.forEach((r, k) => {
  const names = [...new Set(r.ways.map((w) => w.tags.name || '·'))];
  console.log(`chặng ${k + 1} ${WAY[k].label} → ${WAY[(k + 1) % WAY.length].label}: ${Math.round(r.len)} m — ${names.join(', ')}`);
  legIdx.push(path0.length - 1);
  for (let i = 1; i < r.nodes.length; i++) { path0.push(r.nodes[i]); wpath.push(r.ways[i - 1]); }
});
const offRoute = wpath.filter((w) => !ROUTE_NAMES.test(w.tags.name || '') && !/_link$/.test(w.tags.highway));
if (offRoute.length) console.log('  ! đi qua đường ngoài tuyến:', [...new Set(offRoute.map((w) => w.tags.name || w.id))].join(', '));

// ---------- toạ độ phẳng ----------
const [lat0, lon0] = pos.get(path0[0]);
const KE = Math.cos(lat0 * Math.PI / 180) * 111320, KN = 110540;
const prj = (n) => { const [la, lo] = pos.get(n); return [(lo - lon0) * KE, (la - lat0) * KN]; };
const P = path0.map(prj);
const cum = [0]; for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
const RAW = cum.at(-1);

// ---------- làm mượt + khép vòng (như fetch-nyc) ----------
const N1 = Math.round(RAW), d1 = RAW / N1;
const at = (s) => { let j = 0; while (j < cum.length - 2 && cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1); return [P[j][0] + (P[j + 1][0] - P[j][0]) * t, P[j][1] + (P[j + 1][1] - P[j][1]) * t]; };
const R1 = []; for (let i = 0; i <= N1; i++) R1.push(at(i * d1));
const h1 = [];
for (let i = 0; i < N1; i++) { const dE = R1[i + 1][0] - R1[i][0], dN = R1[i + 1][1] - R1[i][1]; let h = Math.atan2(-dE, dN); if (i) while (h - h1[i - 1] > Math.PI) h -= 2 * Math.PI; if (i) while (h - h1[i - 1] < -Math.PI) h += 2 * Math.PI; h1.push(h); }
const TURN = Math.round((h1[N1 - 1] - h1[0]) / (2 * Math.PI)) * 2 * Math.PI;
const hx = (i) => h1[((i % N1) + N1) % N1] + TURN * Math.floor(i / N1);
const W = Math.round(FILLET / d1), hs = [];
for (let i = 0; i < N1; i++) { let a = 0; for (let k = -W / 2; k < W / 2; k++) a += hx(i + k); hs.push(a / W); }
const Q = [[0, 0]];
for (let i = 0; i < N1; i++) { const th = hs[i]; Q.push([Q[i][0] - Math.sin(th) * d1, Q[i][1] + Math.cos(th) * d1]); }
const err = [Q[N1][0] - Q[0][0], Q[N1][1] - Q[0][1]];
for (let i = 0; i <= N1; i++) { Q[i][0] -= err[0] * i / N1; Q[i][1] -= err[1] * i / N1; }
// đưa tâm về điểm đầu thật (toạ độ game gần toạ độ OSM, nhà / sông dời theo `off` ở bước sau)
console.log(`dài ${RAW.toFixed(0)} m, sai số khép vòng ${Math.hypot(...err).toFixed(1)} m (đã chia đều), tổng góc ${(TURN / Math.PI).toFixed(1)}π`);

const L = RAW, Nout = Math.round(L / STEP), step = L / Nout;
const qAt = (s) => { s = ((s % L) + L) % L; const f = s / d1, i = Math.min(N1 - 1, Math.floor(f)), t = f - i; return [Q[i][0] + (Q[i + 1][0] - Q[i][0]) * t, Q[i][1] + (Q[i + 1][1] - Q[i][1]) * t]; };
const x = [], z = [], heading = [];
for (let i = 0; i <= Nout; i++) {
  const s = i * step, a = qAt(s - 0.5), b = qAt(s + 0.5), c = qAt(s);
  x.push(+c[0].toFixed(2)); z.push(+(-c[1]).toFixed(2));
  let h = Math.atan2(-(b[0] - a[0]), b[1] - a[1]);
  if (i) { while (h - heading[i - 1] > Math.PI) h -= 2 * Math.PI; while (h - heading[i - 1] < -Math.PI) h += 2 * Math.PI; }
  heading.push(+h.toFixed(5));
}
const nodeS = cum;

// ---------- hầm / cầu ----------
function spans(pred) {
  const out = [];
  for (let i = 0; i < wpath.length; i++) {
    if (!pred(wpath[i])) continue;
    const a = cum[i], b = cum[i + 1], last = out.at(-1);
    if (last && a - last[1] < 5) last[1] = b; else out.push([a, b]);
  }
  return out.map(([a, b]) => ({ s0: +a.toFixed(1), s1: +b.toFixed(1) }));
}
const tunnels = spans((w) => w.tags.tunnel === 'yes'), bridges = spans((w) => w.tags.bridge === 'yes' || w.tags.bridge === 'viaduct');
for (const t of tunnels) t.name = (wpath[cum.findIndex((c) => c >= t.s0)]?.tags.name) || '';
for (const b of bridges) { const w = wpath[Math.min(wpath.length - 1, cum.findIndex((c) => c >= b.s0))]; b.name = w?.tags.bridge_name || w?.tags['bridge:name'] || w?.tags.name || ''; }

// mặt cắt dọc: hầm dài (> 300 m, dưới sông) sâu DEEP, hầm chui ngắn sâu 6.5 m; cầu dài (> 600 m, qua sông) cao HIGH, cầu vượt 300–600 m 7.5 m, cầu 60–300 m cao 4.5 m,
// cầu ngắn (qua kênh) 1.2 m. Ngoài đoạn: đổi độ cao với dốc ≤ GRADE (đoạn dốc nằm ngoài hầm / cầu như ngoài đời: miệng hầm hở, dốc dẫn lên cầu).
const DEEP = 11, HIGH = 12, GRADE = 0.055;
const N5 = Math.round(L / STEP), el = new Float64Array(N5 + 1);
const cyc = (a, b) => { const d = ((b - a) % L + L) % L; return Math.min(d, L - d); };
const inSpan = (s, sp) => (sp.s1 - sp.s0 < L / 2 ? s >= sp.s0 && s <= sp.s1 : false);
// chỗ tuyến tự cắt nhau (vd. dốc lên cầu Sài Gòn 2 vượt qua Trần Trọng Kim): nhánh có độ cao sẵn lớn hơn thành cầu vượt ≥ OVER m
// (thêm 1 "cầu" ảo dài 40 m tại đó, dốc hai đầu như cầu thật). Dò cắt nhau giữa các đoạn 5 m cách nhau > 300 m dọc tuyến
const OVER = 6.5, crossings = [];
{
  const seg = (i) => [x[i], z[i], x[i + 1], z[i + 1]];
  const hit = (A, B) => { const d = (B[2] - B[0]) * (A[3] - A[1]) - (B[3] - B[1]) * (A[2] - A[0]); if (Math.abs(d) < 1e-9) return false;
    const t = ((B[0] - A[0]) * (B[3] - B[1]) - (B[1] - A[1]) * (B[2] - B[0])) / -d, u = ((B[0] - A[0]) * (A[3] - A[1]) - (B[1] - A[1]) * (A[2] - A[0])) / -d;
    return t >= 0 && t <= 1 && u >= 0 && u <= 1; };
  for (let i = 0; i < Nout; i++) for (let j = i + 60; j < Nout; j++) {
    if ((Nout - j) + i < 60) continue;
    if (Math.abs(x[i] - x[j]) > 12 || Math.abs(z[i] - z[j]) > 12) continue;
    if (hit(seg(i), seg(j))) crossings.push([i * step, j * step]);
  }
}
const baseUp = (s) => { let up = 0; for (const b of bridges) { const len = b.s1 - b.s0, H = len > 600 ? HIGH : len > 300 ? 7.5 : len > 60 ? 4.5 : 1.2, d = (s >= b.s0 && s <= b.s1) ? 0 : Math.min(cyc(s, b.s0), cyc(s, b.s1)); up = Math.max(up, H - GRADE * d); } return up; };
for (const [sa, sb] of crossings) { const hi = baseUp(sa) >= baseUp(sb) ? sa : sb; bridges.push({ s0: +(hi - 20).toFixed(1), s1: +(hi + 20).toFixed(1), name: 'cầu vượt', over: true }); }
if (crossings.length) console.log('  tự cắt:', crossings.map(([a, b]) => `${a.toFixed(0)} × ${b.toFixed(0)}`).join(', '));
for (let i = 0; i <= N5; i++) {
  const s = i * step; let up = 0, dn = 0;
  for (const b of bridges) { const len = b.s1 - b.s0, H = b.over ? OVER : len > 600 ? HIGH : len > 300 ? 7.5 : len > 60 ? 4.5 : 1.2, d = inSpan(s, b) ? 0 : Math.min(cyc(s, b.s0), cyc(s, b.s1)); up = Math.max(up, H - GRADE * d); }
  for (const t of tunnels) { const len = t.s1 - t.s0, D = len > 300 ? DEEP : 6.5, d = inSpan(s, t) ? 0 : Math.min(cyc(s, t.s0), cyc(s, t.s1)); dn = Math.min(dn, -D + GRADE * d); }
  el[i] = Math.max(0, up) + Math.min(0, dn);
}
// làm mượt 40 m (2 đầu dốc êm)
const elev = [];
{ const K = Math.round(20 / step); for (let i = 0; i <= N5; i++) { let a = 0, n = 0; for (let k = -K; k <= K; k++) { a += el[((i + k) % N5 + N5) % N5]; n++; } elev.push(+(a / n).toFixed(2)); } elev[N5] = elev[0]; }

// ---------- khúc rẽ lớn (đổi hướng > 45° trong 70 m) => xi nhan + giảm tốc ----------
const corners = [];
for (let i = 0; i < Nout; i++) {
  const j = Math.min(Nout, i + Math.round(70 / step)), dh = heading[j] - heading[i];
  if (Math.abs(dh) > 0.8) {
    // tâm khúc rẽ = chỗ đổi hướng nhanh nhất trong cửa sổ
    let bk = i, bv = 0; for (let k = i; k < j; k++) { const v = Math.abs(heading[k + 1] - heading[k]); if (v > bv) { bv = v; bk = k; } }
    const s = bk * step, last = corners.at(-1);
    if (!last || s - last.s > 90) corners.push({ s: +s.toFixed(1), dir: Math.sign(dh) > 0 ? 'trái' : 'phải' });
  }
}

// ---------- ngã tư: node trên tuyến có way khác tên (không phải nhánh nối) cắt qua; gộp các node cách nhau < 45 m ----------
const routeNames = new Set(wpath.map((w) => w.tags.name).filter(Boolean));
const raw = [];
for (let i = 1; i < path0.length - 1; i++) {
  const here = wpath[i - 1];
  if (here.tags.tunnel || here.tags.bridge || wpath[i]?.tags.tunnel || wpath[i]?.tags.bridge) continue;
  const xs = (wayOf.get(path0[i]) || []).filter((w) => w.tags.name && !routeNames.has(w.tags.name) && !w.tags.bridge && !w.tags.tunnel
    && !/_link$/.test(w.tags.highway) && car(w) && !/^(service|footway|cycleway)$/.test(w.tags.highway));
  if (!xs.length) continue;
  raw.push({ s: nodeS[i], name: xs[0].tags.name, hw: xs[0].tags.highway, lat: pos.get(path0[i])[0], lon: pos.get(path0[i])[1] });
}
const junctions = [];
for (const j of raw) {
  const last = junctions.at(-1);
  if (last && j.s - last.s < 45) { if (!last.names.includes(j.name)) last.names.push(j.name); continue; }
  junctions.push({ s: j.s, names: [j.name], hw: j.hw, ow: 0, lat: j.lat, lon: j.lon });
}
for (const j of junctions) {
  j.signal = sigs.some((n) => hav([n.lat, n.lon], [j.lat, j.lon]) < 40);
  j.s = +j.s.toFixed(1); delete j.lat; delete j.lon;
}
// ngã tư quá gần khúc rẽ (< 25 m) bỏ (giữ khúc rẽ sạch); ngã tư không đèn trên đường cấp thấp bỏ (hẻm nhỏ)
for (let i = junctions.length - 1; i >= 0; i--) {
  const j = junctions[i];
  if (!j.signal && /^(residential|unclassified)$/.test(j.hw)) junctions.splice(i, 1);
}
junctions.forEach((j) => delete j.hw);
// ngã tư rơi vào đoạn dốc lên cầu / xuống hầm (đường cao / thấp hơn mặt phố > 0.3 m) bỏ: đường ngang không nối được
for (let i = junctions.length - 1; i >= 0; i--) if (Math.abs(elev[Math.round(junctions[i].s / step) % N5]) > 0.3) junctions.splice(i, 1);
// số làn theo OSM (chiều đi)
const lanes = [];
for (let i = 0; i < wpath.length; i++) {
  const n = Math.max(1, Math.min(6, parseInt(wpath[i].tags.lanes, 10) || 2)), a = nodeS[i], last = lanes.at(-1);
  if (last && last.n === n && Math.abs(a - last.s1) < 1) last.s1 = +(a + cum[i + 1] - cum[i]).toFixed(1);
  else lanes.push({ s0: +a.toFixed(1), s1: +(a + cum[i + 1] - cum[i]).toFixed(1), n });
}
// tên đường theo đoạn (bỏ nhánh không tên, gộp liền nhau)
const streets = [];
for (let i = 0; i < wpath.length; i++) {
  let nm = wpath[i].tags.name; if (!nm) continue;
  if (/^Hầm chui /.test(nm)) nm = nm.replace(/^Hầm chui /, '');
  if (streets.at(-1)?.name === nm) continue;
  if (streets.length && nodeS[i] - streets.at(-1).s0 < 40 && streets.length > 1) streets.pop();
  streets.push({ s0: +nodeS[i].toFixed(1), name: nm === 'Hầm Sông Sài Gòn' ? 'Hầm Thủ Thiêm' : nm });
}
for (let i = streets.length - 1; i > 0; i--) if (streets[i].name === streets[i - 1].name) streets.splice(i, 1);

// ---------- khu vực (tên hiện dưới tốc độ / giữa màn hình / trên bản đồ tròn): toạ độ thật => toạ độ game (dời theo độ lệch đường đã làm mượt
// tại điểm tuyến gần nhất, như nhà NYC). r: bán kính khu (m); xe trong nhiều khu => khu gần tâm nhất (theo d / r)
const AREAS = [
  ['Landmark 81 · Vinhomes Central Park', 10.7949, 106.7219, 700],
  ['Bình Thạnh · Thị Nghè', 10.7905, 106.7125, 450],
  ['Ba Son', 10.7838, 106.7072, 380],
  ['Quận 1 · Bến Bạch Đằng', 10.7742, 106.7055, 520],
  ['Sông Sài Gòn', 10.7695, 106.7085, 330],
  ['Thủ Thiêm', 10.7765, 106.7240, 900],
  ['An Khánh', 10.7860, 106.7430, 600],
  ['An Phú', 10.8000, 106.7510, 650],
  ['Thảo Điền', 10.8035, 106.7350, 650],
  ['Chân cầu Sài Gòn', 10.7985, 106.7215, 300],
];
const off = R1.map((p, j) => [Q[j][0] - p[0], Q[j][1] - p[1]]);
const toGame = (lat, lon) => {
  const E = (lon - lon0) * KE, N = (lat - lat0) * KN;
  let bj = 0, bd = Infinity; for (let j = 0; j < R1.length; j += 2) { const d = (R1[j][0] - E) ** 2 + (R1[j][1] - N) ** 2; if (d < bd) { bd = d; bj = j; } }
  return [+(E + off[bj][0]).toFixed(1), +(-(N + off[bj][1])).toFixed(1)];
};
const areas = AREAS.map(([name, la, lo, r]) => { const [x, z] = toGame(la, lo); return { name, x, z, r }; });
// khu theo đoạn dọc tuyến (cố định, không nhấp nháy ở mép): mẫu mỗi 25 m lấy khu có d / r nhỏ nhất (< 1), gộp liền nhau,
// đoạn ngắn hơn 150 m nhập vào đoạn trước. zones: [{ s0, name }] (name '' = không thuộc khu nào)
const zones = [];
for (let s = 0; s < L; s += 25) {
  const i = Math.round(s / step), x0 = x[i], z0 = z[i];
  let name = '', bk = 1; for (const A of areas) { const k = Math.hypot(A.x - x0, A.z - z0) / A.r; if (k < bk) { bk = k; name = A.name; } }
  if (zones.at(-1)?.name !== name) zones.push({ s0: s, name });
}
for (let k = zones.length - 1; k > 0; k--) {
  const len = (zones[k + 1]?.s0 ?? L) - zones[k].s0;
  if (len < 150) zones.splice(k, 1);
}
for (let k = zones.length - 1; k > 0; k--) if (zones[k].name === zones[k - 1].name) zones.splice(k, 1);
// Landmark 81 (toà tháp): vị trí thật cho bản đồ tròn + bước dựng nhà sau
const landmark81 = toGame(10.79496, 106.72183);
// ranh khu Vinhomes Central Park (đa giác gần đúng: bờ đông Nguyễn Hữu Cảnh → chân Điện Biên Phủ → bờ sông) — game không dựng nhà map Phố trong đó
const vinhomes = [[10.7963, 106.7193], [10.7976, 106.7215], [10.7979, 106.7262], [10.7889, 106.7262], [10.7889, 106.7198], [10.7925, 106.7189]].map(([la, lo]) => toGame(la, lo));

const data = {
  source: 'OpenStreetMap contributors (ODbL)', bbox: BB, origin: [lat0, lon0], step: +step.toFixed(4), length: +L.toFixed(1), turn: +TURN.toFixed(5),
  corners, streets, tunnels, bridges, junctions, lanes, areas, zones, landmark81, vinhomes, elev, x, z, heading,
};
fs.writeFileSync(OUT, JSON.stringify(data));
console.log(`=> ${OUT}: ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB, ${junctions.length} ngã tư (${junctions.filter((j) => j.signal).length} có đèn), ${corners.length} khúc rẽ lớn`);
console.log('  hầm', tunnels.map((t) => `${t.name} ${t.s0}–${t.s1}`).join('; '));
console.log('  cầu', bridges.map((t) => `${t.name} ${t.s0}–${t.s1}`).join('; '));
console.log('  đường', streets.map((t) => `${t.s0} ${t.name}`).join(' | '));
console.log('  khu', zones.map((t) => `${t.s0} ${t.name || '–'}`).join(' | '));
console.log('  rẽ', corners.map((c) => `${c.s} ${c.dir}`).join(', '));
