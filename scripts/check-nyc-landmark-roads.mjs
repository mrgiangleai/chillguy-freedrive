// Kiểm tra tòa nổi tiếng map New York không đè lên mặt phố mà nycNet VẼ (toàn mạng, không chỉ quanh Grand Central):
// dựng landmarks + tính đúng các mảnh nycNet được vẽ (sau khi cắt mảnh phố đi bộ dưới tòa), lấy mẫu tim từng mảnh mỗi 2 m
// với nửa bề rộng của nó; FAIL nếu mẫu nằm trong khung tòa (nới 0.5 m). Cũng FAIL nếu tòa chồng nhau hoặc chồng tim tuyến
// (miễn trừ Helmsley ở cổng cầu cạn theo thiết kế). Node thuần, không cần trình duyệt; cần `node build.mjs` trước.
import * as THREE from 'three';
import fs from 'node:fs';
import { Road, CITY } from '../src/road.js';
import { NYC, NYC_DIM, nycLoop, nycElev, nycElevKeys } from '../src/nyc.js';
import { buildNet, routeMask, obbHit, pieceHitsRects } from '../src/nycNet.js';
import { NycBuildings } from '../src/nycBuildings.js';

// node thuần: stub canvas tối thiểu cho texture của NycBuildings (không dùng tới khi chỉ dò vị trí)
const ctx = () => new Proxy({}, { get: (t, k) => (k in t ? t[k] : () => ctx()), set: (t, k, v) => ((t[k] = v), true) });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: ctx }) };

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };

const read = (p) => JSON.parse(fs.readFileSync(new URL('../' + p, import.meta.url), 'utf8'));
const B = read('docs/assets/nyc-buildings.json');
const S = read('docs/assets/nyc-streets.json').s;

const road = new Road();
road.setShape('nyc', nycLoop());

// 1. dựng landmarks đúng như game (dùng dữ liệu phố để tránh lòng đường xe)
const bld = new NycBuildings(new THREE.Scene(), null, road);
const t0 = performance.now();
bld._landmarks(B.lm || {}, S);
console.log(`_landmarks: ${(performance.now() - t0).toFixed(0)} ms`);
const R = bld.lmRects, LM = R.map((f) => f.lm);
const inside = (x, z, m = 0.5) => { for (const f of R) if (f(x, z, m)) return f; return null; };

// 2. mạng phố đúng như nycNet dựng: routeMask + cắt mảnh phố đi bộ (type 1) dưới chân tòa
const rm = routeMask(NYC.data, nycElev(nycElevKeys()), NYC_DIM.hw + 0.3);
const clip = (x0, z0, x1, z1, hw) => pieceHitsRects(R, x0, z0, x1, z1, hw, 0.5);
const drawn = buildNet(THREE, S, {}, () => 0, rm, clip, true).userData.drawn;
const all = buildNet(THREE, S, {}, () => 0, rm, null, true).userData.drawn;
const pedAll = all.filter((p) => p[5] === 1).length, pedDrawn = drawn.filter((p) => p[5] === 1).length;
console.log(`phố đi bộ: cắt ${pedAll - pedDrawn}/${pedAll} mảnh dưới chân tòa · còn vẽ ${drawn.length} mảnh (cả phố xe)`);

// 3. từng mảnh / đĩa nối được vẽ (cả lòng đường + vỉa hè) không chạm khung tòa — OBB chính xác, nới 0.5 m;
// phố xe được lấn 1 m mép ngoài vỉa hè (`ALLOW`, khớp streetClear trong nycBuildings)
const ALLOW = 1, bad = new Map();
for (const [x0, z0, x1, z1, hw, kind] of drawn) {
  for (const f of R) if (pieceHitsRects([f], x0, z0, x1, z1, kind === 0 ? hw - ALLOW : hw, 0.5)) { bad.set(f.lm, (bad.get(f.lm) || 0) + 1); if (process.env.DBG) console.log(f.lm, kind, hw, x0.toFixed(1), z0.toFixed(1), x1.toFixed(1), z1.toFixed(1)); }
}
const bl = [...bad].sort((a, b) => b[1] - a[1]);
ok(!bl.length, `${drawn.length} mảnh / đĩa nối phố vẽ ra không chạm tòa nổi tiếng (OBB chính xác)` +
  (bl.length ? ': ' + bl.map(([n, c]) => `${n} ${c} mảnh`).join(', ') : ''));

// 4. tòa không chồng nhau (khung chính xác)
const ov = [];
for (let i = 0; i < R.length; i++) for (let j = i + 1; j < R.length; j++) {
  const a = R[i].rect, b = R[j].rect;
  if (obbHit(a[0], a[1], a[2], a[3], a[4], a[5], b[0], b[1], b[2], b[3], b[4], b[5], 0)) ov.push(`${R[i].lm}/${R[j].lm}`);
}
ok(!ov.length, `${R.length} tòa nổi tiếng không chồng nhau` + (ov.length ? ': ' + ov.join(', ') : ''));

// 5. tim tuyến (mặt phố) không chạy xuyên tòa; Helmsley miễn trừ đúng lòng cổng (tuyến xuyên cổng theo thiết kế)
const L = NYC.length, P = {}, HW = CITY.hw, helm = R.find((f) => f.lm === 'helmsley');
const inPortal = (x, z) => {
  if (!helm || !helm.portal) return false;
  const [hx0, hz0, c, sn, p0, p1, half] = helm.portal, ex = x - hx0, ez = z - hz0;
  const lx = ex * c - ez * sn, lz = ex * sn + ez * c;
  return lx > p0 - 0.5 && lx < p1 + 0.5 && Math.abs(lz) < half + 0.5;
};
const rbad = new Map();
for (let s = 0; s < L; s += 2) {
  road.at(L + s, P);
  for (const u of [-HW, -HW / 2, 0, HW / 2, HW]) {
    const x = P.x + Math.cos(P.th) * u, z = P.z - Math.sin(P.th) * u, f = inside(x, z, 0.5);
    if (!f || (f.lm === 'helmsley' && inPortal(x, z))) continue;
    rbad.set(f.lm, (rbad.get(f.lm) || 0) + 1);
  }
}
const rl = [...rbad].sort((a, b) => b[1] - a[1]);
ok(!rl.length, 'tuyến không chạy xuyên tòa nổi tiếng (trừ cổng Helmsley)' +
  (rl.length ? ': ' + rl.map(([n, c]) => `${n} ${c} mẫu`).join(', ') : ''));

// 6. báo cáo từng tòa
const st = bld.lmStats || { moved: [], scaled: [], skipped: [] };
const fmt = (v) => v.map(([n, d]) => `${n} ${typeof d === 'number' ? d.toFixed(2) : d}`).join(', ');
console.log(`\ntòa đã dời (m): ${fmt(st.moved) || 'không'}`);
console.log(`tòa thu nhỏ (hệ số): ${fmt(st.scaled) || 'không'}`);
console.log(`tòa bị bỏ (skipped): ${(st.skipped || []).join(', ') || 'không'}`);
console.log(`đã đặt ${R.length}/${LM.length + (st.skipped || []).length} tòa: ${LM.join(', ')}`);

console.log(fail ? `\n${fail} lỗi` : '\nTất cả PASS');
process.exit(fail ? 1 : 0);
