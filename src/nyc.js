// Map New York (🗽, nhóm Drive): vòng khép kín Midtown Manhattan theo dữ liệu thật (OpenStreetMap, ODbL), tạo bằng
// `node scripts/fetch-nyc.mjs` => `nyc-data.json`. 7th Ave (xuống nam, qua Times Square) → rẽ trái 32nd St (đông) → rẽ trái Park Ave
// (bắc: hầm Park Ave 33–40 St, cầu cạn quanh Grand Central, qua cổng Helmsley Building) → rẽ trái 55th St (tây) → rẽ trái 7th Ave.
// Dùng lại toàn bộ map Phố (`mapKind('nyc') = 'city'`); đường là vòng (`road.setShape('nyc', loop)`): s quấn theo chiều dài vòng.
// Công trình riêng: tường + trần hầm, bản mặt cầu + lan can + trụ cầu cạn (`NycWorks`).
import * as THREE from 'three';
import DATA from './nyc-data.json' with { type: 'json' };
import { CITY } from './road.js';

// start: xe vào map ở s = length + start (1 vòng trước còn chỗ cho phía sau xe); 580 = 7th Ave giữa 46 – 45 St, nhìn xuôi Times Square (chú chọn). Hầm sâu `depth`, cầu cạn cao `high` so với mặt phố;
// trần hầm kín khi mặt đường thấp hơn mặt phố quá `roof` (m). maxGrade: dốc tối đa của các đoạn dốc dẫn.
export const NYC = { data: DATA, length: DATA.length, start: 580, depth: 7, high: 6, roof: -5.6, maxGrade: 0.09, arc: 16, tangent: 20.4 };
// kích thước phố Manhattan (thay CITY của map Phố khi vào map New York): đại lộ 4 làn 3.6 m + lề đỗ xe (mép 9 m), vỉa hè 5.5 m,
// phố ngang 9 m + vỉa hè 3 m
export const NYC_DIM = { hw: 9, walk: 5.5, side: 4.5, sideWalk: 3, lanes: [1.8, 5.4] };
const sm = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

// mốc độ cao [s, h] dọc vòng: xuống hầm từ đầu dốc dẫn thật (way "Park Avenue Tunnel" hở), lên thẳng cầu cạn sau cửa hầm phía bắc
// (40 St → 42 St), xuống lại mặt phố trong cổng Helmsley Building (trước ngã tư 46 St). Giữa 2 mốc: gần tuyến tính, 2 đầu êm (dốc lớn nhất ≈ 1.2·Δh/Δs)
export function nycElevKeys(D = DATA) {
  // khớp OSM (đo 22/10/2026): nắp hầm đúng đoạn tunnel thật (33 → 40 St: sâu ≥ 6 m ở 2 cửa), ra hầm leo thẳng lên cầu cạn, vượt 42 St
  // (~ 20 m sau đầu cầu OSM) đã cao ~5.4 m — 42 St chạy dưới gầm như ngoài đời; xuống lại mặt phố ở cuối cổng Helmsley
  const p0 = D.portals[0].s0, t0 = D.tunnels[0].s0, t1 = D.tunnels[0].s1, b0 = D.bridges[0].s0, v1 = (D.passages[0] || D.bridges.at(-1)).s1 - 2;
  return [[p0 - 6, 0], [t0 + 4, -6], [t0 + 30, -NYC.depth], [t1 - 30, -NYC.depth], [t1 - 4, -6], [b0 + 22, NYC.high - 0.6], [b0 + 40, NYC.high],
    [v1 - 150, NYC.high], [v1, 0]];
}
export function nycElev(keys) {
  const L = DATA.length;
  return (s) => {
    s = ((s % L) + L) % L;
    if (s <= keys[0][0] || s >= keys.at(-1)[0]) return 0;
    let i = 0; while (keys[i + 1][0] < s) i++;
    const [a, ha] = keys[i], [b, hb] = keys[i + 1];
    const t = (s - a) / (b - a);
    return ha + (hb - ha) * (t + 0.4 * (sm(t) - t));      // gần tuyến tính, 2 đầu êm: dốc lớn nhất ≈ 1.2 × dốc trung bình
  };
}

// bố trí vòng cho road.setShape('nyc', …)
let LOOP = null;
export function nycLoop() {
  if (LOOP) return LOOP;
  const keys = nycElevKeys();
  LOOP = { loop: true, length: DATA.length, step: DATA.step, x: DATA.x, z: DATA.z, heading: DATA.heading, turn: Math.round(DATA.turn / (2 * Math.PI)) * 2 * Math.PI,
    elev: nycElev(keys), keys, roof: NYC.roof, junctions: DATA.junctions, corners: DATA.corners, streets: DATA.streets };
  return LOOP;
}
// tên đường đang chạy tại s
export function nycStreet(s) {
  const L = DATA.length, r = ((s % L) + L) % L, S = DATA.streets;
  let name = S.at(-1).name;
  for (const t of S) if (r >= t.s0) name = t.name;
  return name;
}

// ---------- công trình: hầm + cầu cạn (dựng 1 lần cho cả vòng, chỉ quanh Park Ave) ----------
export class NycWorks {
  constructor(scene, road, roadMat) {
    this.road = road;
    this.roadMat = roadMat;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.concrete = new THREE.MeshStandardMaterial({ color: 0x8f8b84, roughness: 0.9 });
    this.tile = new THREE.MeshStandardMaterial({ color: 0x9a958a, roughness: 0.6, emissive: 0x0b0a08 });   // tường hầm ốp gạch men (tự sáng rất nhẹ)
    // đèn hầm: 1 đèn điểm đi theo xe khi xe ở đoạn có trần (chỉ trong nhóm này => map khác không tốn thêm đèn)
    this.light = new THREE.PointLight(0xffe2b8, 0, 40, 1.4);
    this.group.add(this.light);
    this.steel = new THREE.MeshStandardMaterial({ color: 0x4b5357, roughness: 0.6, metalness: 0.4 });
    this.lampMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffe2b0, emissiveIntensity: 2.2 });
    this.built = false;
  }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.lampMat.emissiveIntensity = 1.6 + 1.4 * k; }
  // pos: vị trí xe; k: 0..1 mức "trong hầm" (mờ dần ở 2 miệng hầm)
  update(pos, k) { this.light.position.set(pos.x, pos.y + 3.6, pos.z); this.light.intensity = 70 * k; }

  _build() {
    this.built = true;
    const road = this.road, HW = CITY.hw, L = NYC.length, keys = nycLoop().keys, e = nycLoop().elev;
    // dựng ở vòng thứ 1 (s ∈ [L, 2L)) và vòng 2 — xe chạy vòng nào cũng thấy (vị trí thế giới trùng nhau)
    const s0 = keys[0][0] - 10, s1 = keys.at(-1)[0] + 10, base = L;
    const B = { conc: mk(), tile: mk(), top: mk(), steel: mk(), lamp: mk() };
    const P = {}, Q = {};
    const pt = (s, u, y) => { road.at(base + s, P); return [P.x + Math.cos(P.th) * u, y, P.z - Math.sin(P.th) * u]; };
    const roadY = (s) => road.at(base + s, P).y, streetY = (s) => roadY(s) - e(s);
    // tường đầu bê tông ở cửa hầm: od = ±1 là hướng vào lòng hầm từ mặt cửa. Mặt đứng hết bề rộng ±(HW + 0.45),
    // từ đáy nắp (g − 1.5) lên đỉnh thành chắn đoạn hở (g + 0.9), pháp tuyến quay về phía đoạn hở; dày 0.5 m
    // về phía hầm kèm mặt trên; dưới đáy nắp để trống (không chắn lòng đường).
    const headWall = (sp, od) => {
      const gw = roadY(sp) - e(sp), gn = roadY(sp + od) - e(sp + od);
      road.at(base + sp, Q);
      const n = [Math.sin(Q.th) * od, 0, Math.cos(Q.th) * od];    // pháp tuyến về phía đoạn hở
      quad(B.conc, [pt(sp, -HW - 0.45, gw - 1.5), pt(sp, HW + 0.45, gw - 1.5), pt(sp, HW + 0.45, gw + 0.9), pt(sp, -HW - 0.45, gw + 0.9)], n, P);
      quad(B.conc, [pt(sp + od, HW + 0.45, gn - 1.5), pt(sp + od, -HW - 0.45, gn - 1.5), pt(sp + od, -HW - 0.45, gn + 0.9), pt(sp + od, HW + 0.45, gn + 0.9)], [-n[0], 0, -n[2]], P);
      quad(B.conc, [pt(sp, -HW - 0.45, gw + 0.9), pt(sp, HW + 0.45, gw + 0.9), pt(sp + od, HW + 0.45, gn + 0.9), pt(sp + od, -HW - 0.45, gn + 0.9)], 0, P);
      for (const su of [-1, 1]) quad(B.conc, [pt(sp, su * (HW + 0.45), gw - 1.5), pt(sp + od, su * (HW + 0.45), gn - 1.5), pt(sp + od, su * (HW + 0.45), gn + 0.9), pt(sp, su * (HW + 0.45), gw + 0.9)], su, P);
    };
    const STEP = 2;
    for (let s = s0; s < s1; s += STEP) {
      const a = s, b = s + STEP, ea = e(a), eb = e(b);
      const ya = roadY(a), yb = roadY(b), ga = ya - ea, gb = yb - eb;
      // ---- hầm: tường ốp gạch hai bên (từ mặt đường lên mặt phố), lan can bê tông 0.9 m ở đoạn hở ----
      if (ea < -0.15 || eb < -0.15) {
        const cov = ea <= NYC.roof && eb <= NYC.roof;
        for (const su of [-1, 1]) {
          const u = su * (HW + 0.15);
          quad(B.tile, [pt(a, u, ya), pt(b, u, yb), pt(b, u, gb), pt(a, u, ga)], -su, P);
          if (!cov) {                                     // thành chắn trên mặt phố (đoạn dốc hở)
            const u2 = su * (HW + 0.45);
            quad(B.conc, [pt(a, u2, ga), pt(b, u2, gb), pt(b, u2, gb + 0.9), pt(a, u2, ga + 0.9)], su, P);
            quad(B.conc, [pt(a, u, ga), pt(b, u, gb), pt(b, u, gb + 0.9), pt(a, u, ga + 0.9)], -su, P);
            quad(B.conc, [pt(a, u, ga + 0.9), pt(b, u, gb + 0.9), pt(b, u2, gb + 0.9), pt(a, u2, ga + 0.9)], 0, P, true);
          }
        }
        if (cov) {                                        // trần: nắp bê tông dày 1.5 m (đáy nắp ở ga − 1.5), mặt trên là mặt phố (nhựa)
          const w = HW + 0.3, lid = 1.5;
          quad(B.conc, [pt(a, -w, ga - lid), pt(b, -w, gb - lid), pt(b, w, gb - lid), pt(a, w, ga - lid)], 0, P, false);
          quad(B.top, [pt(a, -w, ga + 0.05), pt(b, -w, gb + 0.05), pt(b, w, gb + 0.05), pt(a, w, ga + 0.05)], 0, P, true, [[0, a / 12], [0, b / 12], [1, b / 12], [1, a / 12]]);
          if (Math.round(s / STEP) % 6 === 0) for (const u of [-3.5, 3.5]) box(B.lamp, pt(a + 1, u, ga - lid - 0.06), 0.25, 0.08, 1.4, P);   // đèn trần mỗi 12 m, ngay dưới đáy nắp
          if (e(a - STEP) > NYC.roof) headWall(a, +1);    // cửa trước: đoạn kề trước hở
          if (e(b + STEP) > NYC.roof) headWall(b, -1);    // cửa sau: đoạn kề sau hở
        }
      }
      // ---- cầu cạn: bản mặt cầu dày 1.1 m + lan can thép; dưới gầm đoạn cao là mặt phố (nhựa) + trụ đôi mỗi 24 m ----
      if (ea > 0.3 || eb > 0.3) {
        const w = HW + 1.3, bot = (y, g) => Math.max(g + 0.02, y - 1.1);
        for (const su of [-1, 1]) {
          const u = su * w;
          quad(B.conc, [pt(a, u, bot(ya, ga)), pt(b, u, bot(yb, gb)), pt(b, u, yb + 0.35), pt(a, u, ya + 0.35)], su, P);   // mặt bên bản cầu + gờ
          quad(B.conc, [pt(a, su * (HW + 1.0), ya + 0.35), pt(b, su * (HW + 1.0), yb + 0.35), pt(b, u, yb + 0.35), pt(a, u, ya + 0.35)], 0, P, true);
          quad(B.conc, [pt(a, su * (HW + 1.0), ya + 0.04), pt(b, su * (HW + 1.0), yb + 0.04), pt(b, su * (HW + 1.0), yb + 0.35), pt(a, su * (HW + 1.0), ya + 0.35)], -su, P);
          // lan can thép: tay vịn + cột nhỏ mỗi 2 m
          box(B.steel, pt(a + 1, su * (HW + 1.15), (ya + yb) / 2 + 1.05), 0.08, 0.08, STEP + 0.02, P);
          box(B.steel, pt(a, su * (HW + 1.15), ya + 0.7), 0.06, 0.7, 0.06, P);
          if (ea < 3) quad(B.conc, [pt(a, su * (HW + 1.0), ga), pt(b, su * (HW + 1.0), gb), pt(b, su * (HW + 1.0), yb + 0.04), pt(a, su * (HW + 1.0), ya + 0.04)], -su, P);   // mố thấp: tường đặc
        }
        // phần nền giữa mặt đường và mặt bên (đoạn bản mặt cầu rộng hơn mặt đường)
        for (const su of [-1, 1]) quad(B.conc, [pt(a, su * HW, ya + 0.04), pt(b, su * HW, yb + 0.04), pt(b, su * (HW + 1.0), yb + 0.04), pt(a, su * (HW + 1.0), ya + 0.04)], 0, P, true);
        if (ea > 1.6 && eb > 1.6) {                     // gầm đủ cao: đáy bản + mặt phố nhựa dưới gầm (thấp hơn => 2 mặt sát nhau nhấp nháy)
          quad(B.conc, [pt(a, -w, bot(ya, ga)), pt(b, -w, bot(yb, gb)), pt(b, w, bot(yb, gb)), pt(a, w, bot(ya, ga))], 0, P, false);   // đáy bản
          quad(B.top, [pt(a, -w, ga + 0.03), pt(b, -w, gb + 0.03), pt(b, w, gb + 0.03), pt(a, w, ga + 0.03)], 0, P, true, [[0, a / 12], [0, b / 12], [1, b / 12], [1, a / 12]]);
        }
        if (ea > 3 && Math.round(s / STEP) % 12 === 0) {
          for (const u of [-(HW - 1.2), HW - 1.2]) { const c = pt(a, u, (ga + ya - 1.1) / 2); box(B.conc, c, 1.1, ya - 1.1 - ga, 1.1, P); }
          box(B.conc, pt(a, 0, ya - 1.4), 2 * HW, 0.6, 1.3, P);          // xà mũ
        }
      }
    }
    const add = (Bf, mat, uv) => {
      if (!Bf.idx.length) return;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(Bf.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(Bf.nor, 3));
      if (uv) { g.setAttribute('uv', new THREE.Float32BufferAttribute(Bf.uv, 2)); g.setAttribute('aDirt', new THREE.BufferAttribute(new Float32Array(Bf.pos.length / 3), 1)); }
      g.setIndex(Bf.idx);
      const m = new THREE.Mesh(g, mat);
      m.castShadow = mat !== this.roadMat && mat !== this.lampMat; m.receiveShadow = true; m.frustumCulled = false;
      if (mat === this.roadMat) m.layers.set(3);
      this.group.add(m);
    };
    add(B.conc, this.concrete); add(B.tile, this.tile); add(B.steel, this.steel); add(B.lamp, this.lampMat); add(B.top, this.roadMat, true);
  }
}

const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
// tứ giác: n = hướng pháp tuyến ngang (±1 theo vector phải của đường tại P, 0 = mặt nằm: up / down), tự lật cho đúng chiều
function quad(B, V, n, P, up = true, uvs = null) {
  const rx = Math.cos(P.th), rz = -Math.sin(P.th);
  const N = n ? (Array.isArray(n) ? n : [rx * n, 0, rz * n]) : [0, up ? 1 : -1, 0];
  const b = B.pos.length / 3;
  for (let i = 0; i < 4; i++) { B.pos.push(...V[i]); B.nor.push(...N); B.uv.push(...(uvs ? uvs[i] : [0, 0])); }
  const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
  const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
  if (cx * N[0] + cy * N[1] + cz * N[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
}
// hộp tâm c, kích thước (rộng theo u, cao, dài theo s) xoay theo hướng đường tại P
function box(B, c, w, h, l, P) {
  const rx = Math.cos(P.th), rz = -Math.sin(P.th), fx = -Math.sin(P.th), fz = -Math.cos(P.th);
  const at = (i, j, k) => [c[0] + rx * w / 2 * i + fx * l / 2 * k, c[1] + h / 2 * j, c[2] + rz * w / 2 * i + fz * l / 2 * k];
  const F = [[[1, -1, -1], [1, -1, 1], [1, 1, 1], [1, 1, -1], [rx, 0, rz]], [[-1, -1, 1], [-1, -1, -1], [-1, 1, -1], [-1, 1, 1], [-rx, 0, -rz]],
    [[-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1], [0, 1, 0]], [[-1, -1, 1], [1, -1, 1], [1, -1, -1], [-1, -1, -1], [0, -1, 0]],
    [[-1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, 1], [fx, 0, fz]], [[1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, -1], [-fx, 0, -fz]]];
  for (const f of F) {
    const b = B.pos.length / 3, N = f[4];
    for (let i = 0; i < 4; i++) { B.pos.push(...at(...f[i])); B.nor.push(...N); B.uv.push(0, 0); }
    const V = [0, 1, 2].map((i) => at(...f[i]));
    const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
    const d = (ay * bz - az * by) * N[0] + (az * bx - ax * bz) * N[1] + (ax * by - ay * bx) * N[2];
    if (d >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
  }
}
