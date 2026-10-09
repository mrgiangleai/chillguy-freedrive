import * as THREE from 'three';
import { AVENUE, IC, icS, icIndex, rampU, TOLL, tollS, FLY, flyS, flyIndex, RIVER, riverS, riverIndex } from './road.js';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const RAMP_STEP = 6, RAMP_HW = 2.5;
export const meander = (u) => 40 * Math.sin(u / 300);       // sông uốn nhẹ (cùng công thức trong shader nước)
const DECK_HW = 14.8;                                        // nửa bề rộng bản mặt cầu cạn (chứa cả cột đèn)
const hashR = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const FONT = 'Arial, "Helvetica Neue", sans-serif';

// atlas biển báo 2048×1024: lưới 4 × 4 ô 512×256. Ô 0–3: biển chỉ dẫn cao tốc nền xanh lá chữ trắng (kiểu Việt Nam);
// ô 4–7: biển tròn (vẽ ở nửa trái vuông 256×256 của ô): 120, 100, 60 (tốc độ tối đa, viền đỏ), 60 (tối thiểu, nền xanh dương)
function signTexture() {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 1024;
  const g = c.getContext('2d');
  const cell = (i) => [(i % 4) * 512, Math.floor(i / 4) * 256];
  const green = (i, lines, arrow) => {
    const [x, y] = cell(i);
    g.fillStyle = '#0d7a3f'; g.fillRect(x + 4, y + 4, 504, 248);
    g.strokeStyle = '#fff'; g.lineWidth = 7; g.strokeRect(x + 14, y + 14, 484, 228);
    g.fillStyle = '#fff'; g.textAlign = 'left'; g.textBaseline = 'middle';
    lines.forEach(([txt, size, yy, xx = 40, bold = true]) => { g.font = `${bold ? 'bold ' : ''}${size}px ${FONT}`; g.fillText(txt, x + xx, y + yy); });
    if (arrow) {                                                   // mũi tên chéo lên phải (lối ra)
      g.save(); g.translate(x + 430, y + 128); g.rotate(Math.PI / 4); g.fillStyle = '#fff';
      g.fillRect(-11, -20, 22, 70); g.beginPath(); g.moveTo(-36, -18); g.lineTo(36, -18); g.lineTo(0, -62); g.closePath(); g.fill(); g.restore();
    }
  };
  green(0, [['LỐI RA', 64, 70], ['Đường liên huyện', 40, 140, 40, false], ['1 km', 58, 205]], true);
  green(1, [['LỐI RA', 64, 70], ['Đường liên huyện', 40, 140, 40, false], ['500 m', 58, 205]], true);
  green(2, [['LỐI RA', 82, 128, 60]], true);
  green(3, [['CAO TỐC', 64, 80], ['Tối đa 120 km/h', 40, 150, 40, false], ['Tối thiểu 60 km/h', 40, 200, 40, false]]);
  const round = (i, txt, blue) => {
    const [x, y] = cell(i), cx = x + 128, cy = y + 128;
    g.fillStyle = blue ? '#1d56b8' : '#fff'; g.beginPath(); g.arc(cx, cy, 120, 0, 7); g.fill();
    if (!blue) { g.strokeStyle = '#d0161c'; g.lineWidth = 26; g.beginPath(); g.arc(cx, cy, 106, 0, 7); g.stroke(); }
    else { g.strokeStyle = '#fff'; g.lineWidth = 6; g.beginPath(); g.arc(cx, cy, 112, 0, 7); g.stroke(); }
    g.fillStyle = blue ? '#fff' : '#111'; g.font = `bold ${txt.length > 2 ? 96 : 112}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(txt, cx, cy + 6);
  };
  round(4, '120'); round(5, '100'); round(6, '60'); round(7, '60', true);
  green(8, [['TRẠM THU PHÍ', 54, 80], ['Thu phí tự động ETC', 38, 145, 40, false], ['1 km', 58, 205]]);
  green(9, [['TRẠM THU PHÍ', 54, 80], ['Thu phí tự động ETC', 38, 145, 40, false], ['500 m', 58, 205]]);
  { // 10: dải chữ trên mái trạm: nền xanh dương đậm
    const [x, y] = cell(10);
    g.fillStyle = '#123c7a'; g.fillRect(x, y, 512, 256); g.fillStyle = '#fff'; g.font = `bold 70px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('TRẠM THU PHÍ', x + 256, y + 95); g.font = `38px ${FONT}`; g.fillStyle = '#ffd34a'; g.fillText('ETC · THU PHÍ TỰ ĐỘNG', x + 256, y + 180);
  }
  round(11, '40');
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
const signUV = (i, round) => { const x = (i % 4) / 4, y = 1 - Math.floor(i / 4) / 4; return [x, y - 0.25, x + (round ? 0.125 : 0.25), y]; };   // [u0, v0, u1, v1]
const WALLS = [[0.93, 0.91, 0.86], [0.96, 0.89, 0.72], [0.82, 0.88, 0.8], [0.95, 0.82, 0.74], [0.88, 0.88, 0.9]];
const ROOFS = [[0.62, 0.22, 0.14], [0.25, 0.42, 0.62], [0.42, 0.42, 0.44], [0.5, 0.3, 0.2]];

// Map Đại lộ: đường cao tốc 6 làn (3 làn mỗi chiều), dải phân cách bê tông giữa, lề khẩn cấp, cỏ hai bên (địa hình đồi cỏ).
// Toạ độ theo đường chính: s (dọc), u (ngang, + = bên phải). Dựng theo đoạn CHUNK m quanh xe; vạch kẻ là lưới tam giác
// có màu đỉnh (không texture), dải phân cách là mặt cắt hình "jersey" kéo dọc đường.
// Nút giao (IC trong road.js): đường ngang 2 làn chui dưới cầu vượt, 2 cặp nhánh ra / vào (mỗi chiều 1 cặp) ở cao độ nền.
// `carve(x, z, h)` đào địa hình cho đường ngang (kênh dưới cầu, mái dốc 45° hai bên) và nhánh rẽ; `ic(k)` nhớ khung + điểm nhánh.
const CHUNK = 200, AHEAD = 1400, BEHIND = 300;
const MARK_Y = 0.05;
const DASH = 6, GAP = 9;               // vạch đứt giữa các làn: 6 m sơn, 9 m trống

export class Avenue {
  constructor(scene, road, asphaltTex) {
    this.road = road;
    this.ics = new Map();            // k -> khung nút giao (cho địa hình / xe đường ngang)
    this.icGroups = new Map();       // k -> mesh nút giao
    this.excl = [];                  // đoạn loại cỏ (đường ngang + nhánh) quanh nút giao gần nhất
    this.asphalt = new THREE.MeshStandardMaterial({ map: asphaltTex, roughness: 0.92, envMapIntensity: 0.38 });   // như mặt cao tốc (ít phản chiếu trời)
    const st = signTexture();
    this.signMat = new THREE.MeshStandardMaterial({ map: st, emissiveMap: st, emissive: 0xffffff, emissiveIntensity: 0.05, roughness: 0.45, side: THREE.DoubleSide });
    this.metalMat = new THREE.MeshStandardMaterial({ color: 0x8d9296, roughness: 0.45, metalness: 0.5 });
    this.houseMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
    this.armMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 });
    this.cableMat = new THREE.LineBasicMaterial({ color: 0xd8dadc });
    for (const m of [this.asphalt, this.signMat, this.metalMat, this.houseMat]) withMist(m);
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.chunks = new Map();
    this.markMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.barrierMat = new THREE.MeshStandardMaterial({ color: 0x9a9893, roughness: 0.92 });
    withMist(this.markMat); withMist(this.barrierMat);
    this._p = {};
  }

  set visible(v) { this.group.visible = v; if (!v) this.reset(); }
  // biển phản quang: sáng lên khi bật đèn (đêm)
  setLamps(l) { this.signMat.emissiveIntensity = 0.05 + 0.55 * l; }
  get visible() { return this.group.visible; }

  reset() {
    for (const g of this.chunks.values()) this._dispose(g);
    this.chunks.clear();
    for (const g of this.icGroups.values()) this._dispose(g);
    this.icGroups.clear();
    for (const T of (this.tolls || new Map()).values()) this._dispose(T.group);
    this.tolls?.clear();
    for (const g of (this.bigGroups || new Map()).values()) this._dispose(g);
    this.bigGroups?.clear(); this.flys?.clear(); this.rivers?.clear();
    this.ics.clear();
    this.excl.length = 0;
  }

  // khung nút giao k: tâm P (cao độ nền), vector r / f, cao độ đường ngang, điểm 2 nhánh (phải: chiều +s, trái: chiều −s)
  ic(k) {
    let I = this.ics.get(k);
    if (I) return I;
    const road = this.road, s0 = icS(k), p = road.at(s0, {});
    I = { kind: 'ic', key: 'i' + k, k, s: s0, th: p.th, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th), yc: road.baseY(s0),
      crossLen: IC.crossLen, crossHW: IC.crossHW, laneA: [1.75], flat: 60, blend: 140 };
    I.P = { x: p.x, y: I.yc, z: p.z };
    I.ramps = [1, -1].map((side) => {
      const pts = [];
      for (let t = -IC.rampLen; t <= IC.rampLen; t += RAMP_STEP) {
        const u = side > 0 ? rampU(t) : -rampU(-t), q = road.at(s0 + t, {});
        pts.push({ x: q.x + Math.cos(q.th) * u, z: q.z - Math.sin(q.th) * u, y: road.baseY(s0 + t), t, u });
      }
      const xs = pts.map((q) => q.x), zs = pts.map((q) => q.z);
      return { side, pts, x0: Math.min(...xs) - 16, x1: Math.max(...xs) + 16, z0: Math.min(...zs) - 16, z1: Math.max(...zs) + 16 };
    });
    // đường nhỏ song song (đường gom) rẽ từ đường ngang ở |u| = 78, dài 280–500 m, dẫn vào vài căn nhà hai bên
    I.lines = []; I.houses = []; I.lanes = [];
    const nRoads = hashR(k * 3.1 + 0.7) < 0.6 ? 2 : 1;
    for (let j = 0; j < nRoads; j++) {
      const side = (hashR(k * 5.3 + j * 1.9) < 0.5 ? 1 : -1) * (j === 1 ? -1 : 1), dirT = hashR(k * 7.7 + j * 2.3) < 0.5 ? 1 : -1;
      const uf = side * 78, len = 280 + hashR(k * 9.1 + j) * 220, pts = [];
      const cy0 = this.crossY(I, uf);
      for (let a = IC.crossHW; a <= len; a += 6) {
        const t = dirT * a, q = road.at(s0 + t, {}), x = q.x + Math.cos(q.th) * uf, z = q.z - Math.sin(q.th) * uf;
        pts.push({ x, z, y: cy0 + (hLow(x, z) - cy0) * sm(0, 70, a), t, u: uf });
      }
      I.lanes.push({ pts, hw: 2.1 });
      I.lines.push({ pts, hw: 2.1 });
      for (let a = 40 + hashR(k + j * 4.4) * 20; a < len - 15; a += 55 + hashR(a * 0.37 + k) * 30) {
        const hs = hashR(a * 1.7 + k * 2.9 + j);
        if (hs < 0.2) continue;
        const w = 7 + hashR(a + k * 1.3) * 3, dpt = 8 + hashR(a * 2.1 + k) * 3, fl = hashR(a * 3.3 + k) < 0.45 ? 2 : 1;
        const hu = uf + (hs < 0.6 ? 1 : -1) * (2.1 + 3 + dpt / 2);
        const i0 = Math.min(pts.length - 1, Math.round((a - IC.crossHW) / 6)), py = pts[i0].y + 0.15;
        const H = { t: dirT * a, u: hu, w, d: dpt, h: fl * 3.1, y: py, face: hu > uf ? -1 : 1, wall: WALLS[Math.floor(hashR(a * 4.1 + k) * WALLS.length)], roof: ROOFS[Math.floor(hashR(a * 5.9 + k) * ROOFS.length)] };
        I.houses.push(H);
        const mk = (dt) => { const q = road.at(s0 + H.t + dt, {}); return { x: q.x + Math.cos(q.th) * hu, z: q.z - Math.sin(q.th) * hu, y: py - 0.12 }; };
        I.lines.push({ pts: [mk(-w / 2), mk(w / 2)], hw: dpt / 2 + 1.5 });   // nền nhà phẳng
      }
    }
    for (const L of I.lines) {
      const xs = L.pts.map((q) => q.x), zs = L.pts.map((q) => q.z);
      Object.assign(L, { x0: Math.min(...xs) - 14, x1: Math.max(...xs) + 14, z0: Math.min(...zs) - 14, z1: Math.max(...zs) + 14 });
    }
    const ends = [-1, 1].map((g) => [I.P.x + I.rx * g * IC.crossLen, I.P.z + I.rz * g * IC.crossLen]);
    const X = [...ends.map((e) => e[0]), ...I.ramps.flatMap((R) => [R.x0, R.x1])], Z = [...ends.map((e) => e[1]), ...I.ramps.flatMap((R) => [R.z0, R.z1])];
    I.x0 = Math.min(...X) - 20; I.x1 = Math.max(...X) + 20; I.z0 = Math.min(...Z) - 20; I.z1 = Math.max(...Z) + 20;
    this.ics.set(k, I);
    return I;
  }
  // cao độ đường ngang tại u (bằng nền ±60 m quanh cao tốc, xa dần thì theo địa hình)
  crossY(I, u) {
    const x = I.P.x + I.rx * u, z = I.P.z + I.rz * u;
    return I.yc + (hLow(x, z) - I.yc) * sm(I.flat, I.blend, Math.abs(u));
  }
  // cầu vượt cao k: quốc lộ 4 làn trong hào dưới cầu cạn (cùng dạng khung với nút giao, không có nhánh)
  fly(k) {
    this.flys ||= new Map();
    let F = this.flys.get(k);
    if (F) return F;
    const road = this.road, s0 = flyS(k), p = road.at(s0, {});
    F = { kind: 'fly', key: 'f' + k, k, s: s0, th: p.th, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th),
      yc: road.baseY(s0) - FLY.cut, crossLen: FLY.crossLen, crossHW: FLY.crossHW, laneA: FLY.lanes, flat: 90, blend: 220, viaduct: FLY.viaduct,
      ramps: [], lines: [], lanes: [], houses: [] };
    F.P = { x: p.x, y: F.yc, z: p.z };
    const e = FLY.crossLen + 40;
    const X = [p.x - F.rx * e, p.x + F.rx * e, p.x - F.fx * 300, p.x + F.fx * 300], Z = [p.z - F.rz * e, p.z + F.rz * e, p.z - F.fz * 300, p.z + F.fz * 300];
    F.x0 = Math.min(...X); F.x1 = Math.max(...X); F.z0 = Math.min(...Z); F.z1 = Math.max(...Z);
    this.flys.set(k, F);
    return F;
  }
  // sông lớn k: dải nước rộng 2·hw chạy theo r (uốn nhẹ), mặt nước thấp hơn nền RIVER.drop m
  river(k) {
    this.rivers ||= new Map();
    let R = this.rivers.get(k);
    if (R) return R;
    const road = this.road, s0 = riverS(k), p = road.at(s0, {}), yb = road.baseY(s0);
    R = { kind: 'river', key: 'r' + k, k, s: s0, th: p.th, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th),
      P: { x: p.x, y: yb, z: p.z }, level: yb - RIVER.drop, hw: RIVER.hw, viaduct: RIVER.viaduct };
    this.rivers.set(k, R);
    return R;
  }
  // khoảng cách có dấu tới tim sông (theo f) tại (x, z), đã trừ độ uốn
  riverA(R, x, z) { const dx = x - R.P.x, dz = z - R.P.z, u = dx * R.rx + dz * R.rz; return dx * R.fx + dz * R.fz - meander(u); }
  // các đường ngang (nút giao + cầu vượt cao) có tâm trong [s + lo, s + hi]
  crossings(s, lo, hi) {
    const out = [];
    for (let k = icIndex(s + lo); k <= icIndex(s + hi); k++) { const d = icS(k) - s; if (d >= lo && d <= hi) out.push(this.ic(k)); }
    for (let k = flyIndex(s + lo); k <= flyIndex(s + hi); k++) { const d = flyS(k) - s; if (d >= lo && d <= hi) out.push(this.fly(k)); }
    return out;
  }
  // vị trí + hướng xe trên đường ngang I: u (dọc đường ngang), a (lệch làn theo f), du (hướng chạy)
  crossPose(I, u, a, du, out) {
    out.x = I.P.x + I.rx * u + I.fx * a; out.z = I.P.z + I.rz * u + I.fz * a;
    out.y = this.crossY(I, u) + 0.05; out.yaw = I.th + (du > 0 ? -Math.PI / 2 : Math.PI / 2);
    return out;
  }
  // hộ lan cao tốc hở ở chỗ nhánh rẽ tách / nhập (cả 2 bên)
  railGap(s) { const t = Math.abs(s - icS(icIndex(s))); return t > 300 && t < 495; }
  // cao tốc đang trên cầu cạn ở s? (độ nhô của cầu cao / cầu sông)
  onViaduct(s) { return Math.abs(s - flyS(flyIndex(s))) < FLY.viaduct || Math.abs(s - riverS(riverIndex(s))) < RIVER.viaduct; }

  // địa hình: kênh đường ngang dưới cầu + nền nhánh rẽ (gọi từ terrain._height sau khi đã xẻ theo cao tốc)
  // h0: độ cao tự nhiên (trước khi xẻ theo cao tốc); ns / nd: quãng s và khoảng cách tới tim cao tốc gần nhất (nd < 0: xa đường)
  carve(x, z, h, h0 = h, ns = -1, nd = -1) {
    if (!this.group.visible) return h;
    // dưới cầu cạn (cầu cao / cầu sông): mặt đất giữ tự nhiên, không đắp nền theo mặt cầu
    if (nd >= 0 && nd < 46) {
      for (const [S, V] of [[flyS(flyIndex(ns)), FLY.viaduct], [riverS(riverIndex(ns)), RIVER.viaduct]]) {
        const t = Math.abs(ns - S);
        if (t < V) h += (h0 - h) * (1 - sm(V - 12, V, t));
      }
    }
    for (const F of (this.flys || new Map()).values()) {           // hào quốc lộ dưới cầu cao
      if (x < F.x0 || x > F.x1 || z < F.z0 || z > F.z1) continue;
      const dx = x - F.P.x, dz = z - F.P.z, u = dx * F.rx + dz * F.rz, a = Math.abs(dx * F.fx + dz * F.fz);
      if (Math.abs(u) < F.crossLen + 20 && a < F.crossHW + 22) {
        const cy = this.crossY(F, u) - 0.03;
        h = cy + (h - cy) * sm(F.crossHW + 1.6, F.crossHW + (Math.abs(u) < 60 ? 9 : 16), a);
      }
    }
    for (const R of (this.rivers || new Map()).values()) {         // lòng sông + bờ thoải (bờ cao hơn mặt nước ≥ 1.5 m)
      const a = Math.abs(this.riverA(R, x, z));
      if (a > R.hw + 90) continue;
      const bank = R.level + 1.6;
      if (a < R.hw + 6) h = R.level - RIVER.depth + (bank - R.level + RIVER.depth) * sm(R.hw - 30, R.hw + 6, a);
      else h = bank + (Math.max(h, bank) - bank) * sm(R.hw + 6, R.hw + 90, a);
    }
    for (const I of this.ics.values()) {
      if (x < I.x0 || x > I.x1 || z < I.z0 || z > I.z1) continue;
      const dx = x - I.P.x, dz = z - I.P.z, u = dx * I.rx + dz * I.rz, a = Math.abs(dx * I.fx + dz * I.fz);
      if (Math.abs(u) < IC.crossLen + 20 && a < 22) {
        const cy = this.crossY(I, u) - 0.03;
        h = cy + (h - cy) * sm(IC.crossHW + 1.6, IC.crossHW + (Math.abs(u) < 40 ? 9.5 : 14), a);
      }
      for (const R of I.ramps) {
        if (x < R.x0 || x > R.x1 || z < R.z0 || z > R.z1) continue;
        const P = R.pts;
        let bi = 0, bd = Infinity;
        for (let i = 0; i < P.length; i += 4) { const d = (P[i].x - x) ** 2 + (P[i].z - z) ** 2; if (d < bd) { bd = d; bi = i; } }
        let best = Infinity, by = 0;
        for (let i = Math.max(0, bi - 5); i < Math.min(P.length - 1, bi + 5); i++) {
          const A = P[i], B = P[i + 1], abx = B.x - A.x, abz = B.z - A.z, l2 = abx * abx + abz * abz || 1;
          const t = Math.min(1, Math.max(0, ((x - A.x) * abx + (z - A.z) * abz) / l2));
          const d = Math.hypot(x - A.x - abx * t, z - A.z - abz * t);
          if (d < best) { best = d; by = A.y + (B.y - A.y) * t; }
        }
        if (best < 14) { const ry = by - 0.03; h = ry + (h - ry) * sm(RAMP_HW + 0.6, 11, best); }
      }
      for (const L of I.lines) {                               // đường gom + nền nhà
        if (x < L.x0 || x > L.x1 || z < L.z0 || z > L.z1) continue;
        const P = L.pts;
        let best = Infinity, by = 0;
        for (let i = 0; i + 1 < P.length; i++) {
          const A = P[i], B = P[i + 1], abx = B.x - A.x, abz = B.z - A.z, l2 = abx * abx + abz * abz || 1;
          const t = Math.min(1, Math.max(0, ((x - A.x) * abx + (z - A.z) * abz) / l2));
          const d = Math.hypot(x - A.x - abx * t, z - A.z - abz * t);
          if (d < best) { best = d; by = A.y + (B.y - A.y) * t; }
        }
        if (best < L.hw + 9) { const ry = by - 0.03; h = ry + (h - ry) * sm(L.hw + 0.4, L.hw + 8, best); }
      }
    }
    return h;
  }

  update(s, budget = 1) {
    if (!this.group.visible) return;
    // nút giao: khung (cho địa hình xa) và mesh (gần)
    const kc0 = icIndex(s - 2500), kc1 = icIndex(s + 6500);
    for (let k = kc0; k <= kc1; k++) this.ic(k);
    for (const k of this.ics.keys()) if (k < kc0 || k > kc1) this.ics.delete(k);
    const kg0 = icIndex(s - 700), kg1 = icIndex(s + 1900);
    for (let k = kg0; k <= kg1; k++) {
      const d = icS(k) - s;
      if (d > -700 && d < 1900 && !this.icGroups.has(k)) this.icGroups.set(k, this._buildIC(this.ic(k)));
    }
    for (const [k, g] of this.icGroups) { const d = icS(k) - s; if (d < -800 || d > 2000) { this._dispose(g); this.icGroups.delete(k); } }
    // cầu cao + sông: khung (địa hình xa) và mesh (gần)
    this.flys ||= new Map(); this.rivers ||= new Map(); this.bigGroups ||= new Map();
    for (let k = flyIndex(s - 2500); k <= flyIndex(s + 6500); k++) { const d = flyS(k) - s; if (d > -2500 && d < 6500) this.fly(k); }
    for (const [k, F] of this.flys) if (F.s - s < -2600 || F.s - s > 6600) this.flys.delete(k);
    for (let k = riverIndex(s - 3000); k <= riverIndex(s + 7000); k++) { const d = riverS(k) - s; if (d > -3000 && d < 7000) this.river(k); }
    for (const [k, R] of this.rivers) if (R.s - s < -3100 || R.s - s > 7100) this.rivers.delete(k);
    for (const O of [...this.flys.values(), ...this.rivers.values()]) {
      const d = O.s - s;
      if (d > -800 && d < 2200 && !this.bigGroups.has(O.key)) this.bigGroups.set(O.key, this._buildBig(O));
    }
    for (const [key, g] of this.bigGroups) {
      const O = key[0] === 'f' ? this.flys.get(+key.slice(1)) : this.rivers.get(+key.slice(1));
      if (!O || O.s - s < -900 || O.s - s > 2300) { this._dispose(g); this.bigGroups.delete(key); }
    }
    this.tolls ||= new Map();
    for (let k = Math.max(0, Math.round((s - TOLL.first) / TOLL.period) - 1); k <= Math.round((s - TOLL.first) / TOLL.period) + 1; k++) {
      const d = tollS(k) - s;
      if (d > -600 && d < 1900 && !this.tolls.has(k)) this.tolls.set(k, this._buildToll(k));
    }
    for (const [k, T] of this.tolls) { const d = tollS(k) - s; if (d < -700 || d > 2000) { this._dispose(T.group); this.tolls.delete(k); } }
    this._exclusions(s);
    const k0 = Math.max(0, Math.floor((s - BEHIND) / CHUNK)), k1 = Math.floor((s + AHEAD) / CHUNK);
    const want = [];
    for (let k = k0; k <= k1; k++) if (!this.chunks.has(k)) want.push(k);
    want.sort((a, b) => Math.abs(a * CHUNK - s) - Math.abs(b * CHUNK - s));
    for (let i = 0; i < budget && i < want.length; i++) this.chunks.set(want[i], this._build(want[i]));
    for (const [k, g] of this.chunks) if (k < k0 || k > k1) { this._dispose(g); this.chunks.delete(k); }
  }

  prime(s) { this.update(s, 99); }

  _dispose(g) {
    this.group.remove(g);
    g.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }

  // đoạn loại cỏ quanh nút giao gần nhất: [x0, z0, x1, z1, nửa bề rộng]
  _exclusions(s) {
    const E = this.excl; E.length = 0;
    const road = this.road;
    // cầu cạn: cỏ tính nền theo mặt cầu => bỏ cỏ dọc cầu (±30 m)
    const viaductExcl = (S, V) => { for (let t = -V; t < V && E.length < 32; t += 70) { const a = road.at(S + t, {}), b = road.at(S + Math.min(V, t + 70), {}); E.push([a.x, a.z, b.x, b.z, 30]); } };
    const fk = flyIndex(s), rk = riverIndex(s);
    if (Math.abs(flyS(fk) - s) < 800) {
      const F = this.fly(fk), C = (u) => [F.P.x + F.rx * u, F.P.z + F.rz * u];
      E.push([...C(-F.crossLen), ...C(F.crossLen), F.crossHW + 2]);
      viaductExcl(F.s, FLY.viaduct);
      return;
    }
    if (Math.abs(riverS(rk) - s) < 1400) {
      const R = this.river(rk);
      for (let u = -2400; u < 2400; u += 400) {                   // dải sông (theo độ uốn)
        const P = (uu) => [R.P.x + R.rx * uu + R.fx * meander(uu), R.P.z + R.rz * uu + R.fz * meander(uu)];
        E.push([...P(u), ...P(u + 400), R.hw + 4]);
      }
      viaductExcl(R.s, RIVER.viaduct);
      return;
    }
    const k = icIndex(s);
    if (Math.abs(icS(k) - s) > 900) return;
    const I = this.ic(k), C = (u) => [I.P.x + I.rx * u, I.P.z + I.rz * u];
    E.push([...C(-34), ...C(34), 16], [...C(-IC.crossLen), ...C(IC.crossLen), IC.crossHW + 1.5]);
    for (const R of I.ramps) {
      const P = R.pts, idx = [8, 22, 38, 54, 70, 80, 96, 112, 126, 152].filter((i) => i < P.length);
      for (let j = 0; j + 1 < idx.length && E.length < 32; j++) E.push([P[idx[j]].x, P[idx[j]].z, P[idx[j + 1]].x, P[idx[j + 1]].z, RAMP_HW + 1.2]);
    }
    for (const L of I.lines) {
      const P = L.pts, n = P.length, stp = Math.max(1, Math.ceil(n / 4));
      for (let j = 0; j + 1 < n && E.length < 32; j += stp) { const q = P[Math.min(n - 1, j + stp)]; E.push([P[j].x, P[j].z, q.x, q.z, L.hw + 1]); }
    }
  }

  _buildIC(I) {
    const group = new THREE.Group(), road = this.road;
    const A = { pos: [], nor: [], uv: [], idx: [] }, M = { pos: [], nor: [], col: [], idx: [] }, Cc = { pos: [], nor: [], idx: [] };
    const push = (B, P, n, extra) => {                       // tứ giác P[0..3] (vòng), pháp tuyến n; tự lật cho đúng mặt
      const b = B.pos.length / 3;
      P.forEach((q, i) => { B.pos.push(q[0], q[1], q[2]); B.nor.push(n[0], n[1], n[2]); if (B.uv) B.uv.push(...extra[i]); if (B.col) B.col.push(...extra); });
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2], bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const c = [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
      if (c[0] * n[0] + c[1] * n[1] + c[2] * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    };
    const UP = [0, 1, 0], WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16];
    // ---- đường ngang: dải nhựa dọc trục u, bước 4 m ----
    const X = (u, a, y) => [I.P.x + I.rx * u + I.fx * a, y, I.P.z + I.rz * u + I.fz * a];
    const CH = IC.crossHW, CL = IC.crossLen;
    for (let u = -CL; u < CL; u += 4) {
      const y0 = this.crossY(I, u) + 0.03, y1 = this.crossY(I, u + 4) + 0.03;
      push(A, [X(u, -CH, y0), X(u + 4, -CH, y1), X(u + 4, CH, y1), X(u, CH, y0)], UP, [[u / 8, -CH / 8], [(u + 4) / 8, -CH / 8], [(u + 4) / 8, CH / 8], [u / 8, CH / 8]]);
      const m = (a0, a1, col) => push(M, [X(u, a0, y0 + 0.02), X(u + 4, a0, y1 + 0.02), X(u + 4, a1, y1 + 0.02), X(u, a1, y0 + 0.02)], UP, col);
      m(-0.2, -0.08, YEL); m(0.08, 0.2, YEL); m(-CH + 0.3, -CH + 0.45, WHITE); m(CH - 0.45, CH - 0.3, WHITE);
    }
    // ---- nhánh rẽ: dải nhựa theo điểm nhánh (bỏ phần trùng mặt cao tốc / đường ngang) ----
    for (const R of I.ramps) {
      const P = R.pts;
      for (let i = 0; i + 1 < P.length; i++) {
        const a = P[i], b = P[i + 1];
        if (Math.min(Math.abs(a.u), Math.abs(b.u)) < AVENUE.hw + 1.6 || Math.min(Math.abs(a.t), Math.abs(b.t)) < CH + 0.4) continue;
        const qa = road.at(I.s + a.t, {}), qb = road.at(I.s + b.t, {});
        const E = (q, u, y) => [q.x + Math.cos(q.th) * u, y, q.z - Math.sin(q.th) * u];
        push(A, [E(qa, a.u - RAMP_HW, a.y + 0.03), E(qb, b.u - RAMP_HW, b.y + 0.03), E(qb, b.u + RAMP_HW, b.y + 0.03), E(qa, a.u + RAMP_HW, a.y + 0.03)], UP,
          [[a.t / 8, -0.3], [b.t / 8, -0.3], [b.t / 8, 0.3], [a.t / 8, 0.3]]);
        for (const e of [-1, 1]) {
          const u0 = e * (RAMP_HW - 0.35), u1 = e * (RAMP_HW - 0.2);
          push(M, [E(qa, a.u + u0, a.y + 0.05), E(qb, b.u + u0, b.y + 0.05), E(qb, b.u + u1, b.y + 0.05), E(qa, a.u + u1, a.y + 0.05)], UP, WHITE);
        }
      }
    }
    // ---- cầu vượt: bản mặt cầu (đáy + 2 thành bên có lan can bê tông), trụ + xà mũ hai bên đường ngang ----
    const DECK = 21, SPAN = CH + 2.4;
    const at = (t, u, dy) => { const q = road.at(I.s + t, {}); return [q.x + Math.cos(q.th) * u, q.y + dy, q.z - Math.sin(q.th) * u]; };
    for (let t = -DECK; t < DECK; t += 3) {
      const t1 = Math.min(DECK, t + 3);
      push(Cc, [at(t, -13.7, -1.35), at(t1, -13.7, -1.35), at(t1, 13.7, -1.35), at(t, 13.7, -1.35)], [0, -1, 0]);
      for (const e of [-1, 1]) {
        const n = [I.rx * e, 0, I.rz * e];
        push(Cc, [at(t, e * 13.7, -1.35), at(t1, e * 13.7, -1.35), at(t1, e * 13.7, 0.95), at(t, e * 13.7, 0.95)], n);
        push(Cc, [at(t, e * 13.25, 0), at(t1, e * 13.25, 0), at(t1, e * 13.25, 0.95), at(t, e * 13.25, 0.95)], [-n[0], 0, -n[2]]);
        push(Cc, [at(t, e * 13.25, 0.95), at(t1, e * 13.25, 0.95), at(t1, e * 13.7, 0.95), at(t, e * 13.7, 0.95)], UP);
      }
    }
    const box = (cx, cy, cz, sx, sy, sz) => {                 // hộp theo khung nút giao (sx dọc r, sz dọc f)
      const C = [];
      for (const [i, j, k] of [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1], [-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1]])
        C.push([cx + I.rx * i * sx / 2 + I.fx * k * sz / 2, cy + j * sy / 2, cz + I.rz * i * sx / 2 + I.fz * k * sz / 2]);
      const F = [[0, 1, 2, 3, [0, -1, 0]], [4, 5, 6, 7, UP], [0, 1, 5, 4, [-I.fx, 0, -I.fz]], [3, 2, 6, 7, [I.fx, 0, I.fz]], [0, 3, 7, 4, [-I.rx, 0, -I.rz]], [1, 2, 6, 5, [I.rx, 0, I.rz]]];
      for (const [a, b, c, d, n] of F) push(Cc, [C[a], C[b], C[c], C[d]], n);
    };
    const topY = road.at(I.s, {}).y - 1.35;
    for (const e of [-1, 1]) {
      const [px, , pz] = X(0, e * SPAN, 0);
      for (const u of [-9.5, 0, 9.5]) box(px + I.rx * u, (I.yc + topY - 0.9) / 2, pz + I.rz * u, 1.1, topY - 0.9 - I.yc + 0.2, 1.1);
      box(px, topY - 0.45, pz, 26, 0.9, 1.6);
    }
    // ---- biển báo + giàn biển (mỗi chiều: giàn "Lối ra 1 km" ở t = ∓1000, "500 m" ở ∓500, biển "Lối ra" ở mũi tách nhánh,
    //      biển tốc độ cột bên phải; biển chỉ dẫn cao tốc sau chỗ nhập) ----
    const S = { pos: [], nor: [], uv: [], idx: [] }, Mt = { pos: [], nor: [], idx: [] }, Hs = { pos: [], nor: [], col: [], idx: [] };
    const P3 = (t, u, h, base) => { const q = road.at(I.s + t, {}); return [q.x + Math.cos(q.th) * u, (base ?? q.y) + h, q.z - Math.sin(q.th) * u]; };
    // biển phẳng tại (t, u) quay mặt về xe tới (dir: chiều xe chạy), rộng w, cao hh, mép dưới ở h0 so với mặt đường
    const sign = (t, u, dir, w, hh, h0, cell, round, base) => {
      const [u0, v0, u1, v1] = signUV(cell, round), q = road.at(I.s + t, {});
      const n = [Math.sin(q.th) * dir, 0, Math.cos(q.th) * dir];      // = −f·dir (quay về phía xe tới)
      const a = u - dir * w / 2, b = u + dir * w / 2;                // mép trái / phải nhìn từ xe tới
      push(S, [P3(t, a, h0, base), P3(t, b, h0, base), P3(t, b, h0 + hh, base), P3(t, a, h0 + hh, base)], n, [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]);
    };
    const post = (t, u, h, wd = 0.12, base) => {                      // cột (hộp đứng) từ mặt đất lên h
      const c = P3(t, u, 0, base), q = road.at(I.s + t, {}), rx = Math.cos(q.th), rz = -Math.sin(q.th), fx = -Math.sin(q.th), fz = -Math.cos(q.th);
      const C = (i, k, y) => [c[0] + rx * i * wd + fx * k * wd, c[1] + y, c[2] + rz * i * wd + fz * k * wd];
      for (const [i0, k0, i1, k1, n] of [[-1, -1, 1, -1, [-fx, 0, -fz]], [1, -1, 1, 1, [rx, 0, rz]], [1, 1, -1, 1, [fx, 0, fz]], [-1, 1, -1, -1, [-rx, 0, -rz]]])
        push(Mt, [C(i0, k0, 0), C(i1, k1, 0), C(i1, k1, h), C(i0, k0, h)], n);
    };
    const beam = (t, uA, uB, h, th = 0.45) => {                       // xà ngang giàn biển
      push(Mt, [P3(t - 0.25, uA, h), P3(t - 0.25, uB, h), P3(t - 0.25, uB, h + th), P3(t - 0.25, uA, h + th)], [0, 0, 1]);
      push(Mt, [P3(t + 0.25, uA, h), P3(t + 0.25, uB, h), P3(t + 0.25, uB, h + th), P3(t + 0.25, uA, h + th)], [0, 0, -1]);
      push(Mt, [P3(t - 0.25, uA, h + th), P3(t - 0.25, uB, h + th), P3(t + 0.25, uB, h + th), P3(t + 0.25, uA, h + th)], UP);
      push(Mt, [P3(t - 0.25, uA, h), P3(t - 0.25, uB, h), P3(t + 0.25, uB, h), P3(t + 0.25, uA, h)], [0, -1, 0]);
    };
    for (const dir of [1, -1]) {
      const sd = dir;                                                // bên phải của chiều xe chạy: u cùng dấu dir
      for (const [tt, cell] of [[-1000, 0], [-500, 1]]) {
        const t = tt * dir;
        post(t, 0.0, 7.2, 0.18); post(t, sd * 14.3, 7.2, 0.18); beam(t, 0, sd * 14.3, 6.9);
        sign(t - dir * 0.3, sd * 8.2, dir, 6.4, 3.1, 4.9, cell);
      }
      const tg = -290 * dir, ug = sd * (AVENUE.hw + rampU(-290) - RAMP_HW) / 2;   // mũi tách nhánh (giữa mép cao tốc và mép nhánh)
      post(tg, ug, 3.6, 0.07); sign(tg - dir * 0.1, ug, dir, 2.4, 1.2, 2.3, 2);
      for (const [tt, cell] of [[-1150, 4], [-700, 5], [620, 4]]) { const t = tt * dir; post(t, sd * 14.4, 3.2, 0.05); sign(t - dir * 0.08, sd * 14.4, dir, 1.0, 1.0, 2.2, cell, true); }
      post(560 * dir, sd * 14.6, 3.6, 0.07); post(560 * dir, sd * 17.2, 3.6, 0.07); sign(560 * dir - dir * 0.1, sd * 15.9, dir, 3.2, 1.6, 1.9, 3);
      const tr = -250 * dir, ur = sd * (rampU(-250) + RAMP_HW + 0.8);    // nhánh ra: tốc độ tối đa 60
      post(tr, ur, 3.2, 0.05, road.baseY(I.s + tr)); sign(tr - dir * 0.08, ur, dir, 1.0, 1.0, 2.2, 6, true, road.baseY(I.s + tr));
    }
    // ---- mũi tên trên làn (trước lối ra: làn trong / giữa đi thẳng, làn ngoài thẳng + rẽ phải) + vạch chia nhánh ----
    const mq = (t0, u0, t1, u1, t2, u2, t3, u3, base) => push(M, [P3(t0, u0, 0.055, base), P3(t1, u1, 0.055, base), P3(t2, u2, 0.055, base), P3(t3, u3, 0.055, base)], UP, WHITE);
    const arrow = (t, u, dir, right) => {                            // mũi tên dài ~5 m theo chiều dir
      const F = (a) => t + dir * a, R = (b) => u + dir * b;
      mq(F(-2.6), R(-0.09), F(1.2), R(-0.09), F(1.2), R(0.09), F(-2.6), R(0.09));
      mq(F(1.1), R(-0.45), F(2.6), R(0), F(2.6), R(0), F(1.1), R(0.45));
      if (right) { mq(F(-0.9), R(0.02), F(0.4), R(0.85), F(0.55), R(0.72), F(-0.7), R(-0.1)); mq(F(0.15), R(1.0), F(1.15), R(1.15), F(1.15), R(1.15), F(0.65), R(0.45)); }
    };
    for (const dir of [1, -1]) for (const tt of [-760, -680, -600]) {
      for (const [li, l] of AVENUE.lanes.entries()) arrow(tt * dir, dir * l, dir, li === 2);
    }
    for (const dir of [1, -1]) for (const g of [-1, 1]) {            // vạch chéo vùng tách / nhập nhánh (giữa mép làn ngoài và mép nhánh)
      for (let a = 336; a < 398; a += 4) {
        const t = g * a * dir, uin = rampU(g * a) - RAMP_HW + 0.2;
        if (uin < AVENUE.edge + 0.5) continue;
        const u0 = dir * (AVENUE.edge + 0.15), u1 = dir * uin;
        mq(t, u0, t + 0.5 * dir, u0, t + 2.2 * dir, u1, t + 1.7 * dir, u1);
      }
    }
    // ---- đường gom (nhựa 1 làn) + nhà hai bên: tường sơn, mái dốc hai phía, cửa + cửa sổ phía đường ----
    for (const L of I.lanes) {
      const P = L.pts;
      for (let i = 0; i + 1 < P.length; i++) {
        const a = P[i], b = P[i + 1];
        push(A, [P3(a.t, a.u - L.hw, 0.04, a.y), P3(b.t, b.u - L.hw, 0.04, b.y), P3(b.t, b.u + L.hw, 0.04, b.y), P3(a.t, a.u + L.hw, 0.04, a.y)], UP,
          [[a.t / 8, -0.26], [b.t / 8, -0.26], [b.t / 8, 0.26], [a.t / 8, 0.26]]);
      }
    }
    const hq = (P, n, col) => push(Hs, P, n, col);
    for (const H of I.houses) {
      const q = road.at(I.s + H.t, {}), rx = Math.cos(q.th), rz = -Math.sin(q.th), fx = -Math.sin(q.th), fz = -Math.cos(q.th);
      const cx = q.x + rx * H.u, cz = q.z + rz * H.u, y0 = H.y - 0.15;
      const C = (a, b, y) => [cx + fx * a + rx * b, y, cz + fz * a + rz * b];   // a dọc s (±w/2), b ngang (±d/2)
      const W = H.w / 2, D = H.d / 2, y1 = H.y + H.h, yr = y1 + 2.2, wl = H.wall, rf = H.roof;
      hq([C(-W, -D, y0), C(W, -D, y0), C(W, -D, y1), C(-W, -D, y1)], [-rx, 0, -rz], wl);
      hq([C(-W, D, y0), C(W, D, y0), C(W, D, y1), C(-W, D, y1)], [rx, 0, rz], wl);
      hq([C(-W, -D, y0), C(-W, D, y0), C(-W, D, y1), C(-W, -D, y1)], [-fx, 0, -fz], wl);
      hq([C(W, -D, y0), C(W, D, y0), C(W, D, y1), C(W, -D, y1)], [fx, 0, fz], wl);
      hq([C(-W, -D, y1), C(-W, D, y1), C(-W, 0, yr), C(-W, 0, yr)], [-fx, 0, -fz], wl);   // đầu hồi
      hq([C(W, -D, y1), C(W, D, y1), C(W, 0, yr), C(W, 0, yr)], [fx, 0, fz], wl);
      const k1 = 0.35;                                               // mái chìa 35 cm
      hq([C(-W - k1, -D - k1, y1 - 0.2), C(W + k1, -D - k1, y1 - 0.2), C(W + k1, 0, yr), C(-W - k1, 0, yr)], [-rx * 0.7, 0.7, -rz * 0.7], rf);
      hq([C(-W - k1, D + k1, y1 - 0.2), C(W + k1, D + k1, y1 - 0.2), C(W + k1, 0, yr), C(-W - k1, 0, yr)], [rx * 0.7, 0.7, rz * 0.7], rf);
      const fb = H.face * (D + 0.02), fn = [rx * H.face, 0, rz * H.face], DARK = [0.16, 0.17, 0.19], DOOR = [0.36, 0.24, 0.16];
      hq([C(-0.5, fb, y0 + 0.02), C(0.5, fb, y0 + 0.02), C(0.5, fb, y0 + 2.1), C(-0.5, fb, y0 + 2.1)], fn, DOOR);
      for (let f = 0; f < H.h / 3.1; f++) for (const a of [-W + 1.3, W - 1.3]) {
        const yy = y0 + 1.0 + f * 3.1;
        hq([C(a - 0.6, fb, yy), C(a + 0.6, fb, yy), C(a + 0.6, fb, yy + 1.2), C(a - 0.6, fb, yy + 1.2)], fn, DARK);
      }
    }
    const mk = (B, mat, opts = {}) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      if (B.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      if (B.col) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
      g.setIndex(B.idx);
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true; m.castShadow = !!opts.cast;
      group.add(m);
    };
    mk(A, this.asphalt); mk(M, this.markMat); mk(Cc, this.barrierMat, { cast: true });
    mk(S, this.signMat); mk(Mt, this.metalMat, { cast: true }); mk(Hs, this.houseMat, { cast: true });
    this.group.add(group);
    return group;
  }

  // cầu cạn (cầu vượt cao / cầu sông): bản mặt cầu + gờ lan can bê tông dọc |t| < V, trụ đôi mỗi ~28 m (không đặt trên quốc lộ),
  // tường mố ở 2 đầu; cầu cao: quốc lộ 4 làn dưới gầm (vạch vàng đôi, vạch trắng đứt chia làn); cầu sông: trụ xuống tới lòng sông
  // + 2 tháp dây văng giữa sông (dây thép toả xuống 2 mép cầu)
  _buildBig(O) {
    const road = this.road, group = new THREE.Group(), river = O.kind === 'river', V = O.viaduct;
    const C = { pos: [], nor: [], idx: [] }, A = { pos: [], nor: [], uv: [], idx: [] }, M = { pos: [], nor: [], col: [], idx: [] };
    const push = (B, P, n, extra) => {
      const b = B.pos.length / 3;
      P.forEach((q, i) => { B.pos.push(q[0], q[1], q[2]); B.nor.push(n[0], n[1], n[2]); if (B.uv) B.uv.push(...extra[i]); if (B.col) B.col.push(...extra); });
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2], bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const c = [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
      if (c[0] * n[0] + c[1] * n[1] + c[2] * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    };
    const Q = (t) => road.at(O.s + t, {});
    const P3 = (q, u, y) => [q.x + Math.cos(q.th) * u, y, q.z - Math.sin(q.th) * u];
    const UP = [0, 1, 0], DOWN = [0, -1, 0];
    // ---- bản mặt cầu: mặt dưới (dày 1.6 m), 2 mặt bên, phần mặt trên ngoài mép nhựa (13 → 14.8) + gờ lan can ----
    for (let t = -V; t < V; t += 4) {
      const qa = Q(t), qb = Q(Math.min(V, t + 4)), ya = qa.y, yb = qb.y;
      push(C, [P3(qa, -DECK_HW, ya - 1.6), P3(qb, -DECK_HW, yb - 1.6), P3(qb, DECK_HW, yb - 1.6), P3(qa, DECK_HW, ya - 1.6)], DOWN);
      for (const e of [-1, 1]) {
        const n = [Math.cos(qa.th) * e, 0, -Math.sin(qa.th) * e];
        push(C, [P3(qa, e * DECK_HW, ya - 1.6), P3(qb, e * DECK_HW, yb - 1.6), P3(qb, e * DECK_HW, yb + 1.0), P3(qa, e * DECK_HW, ya + 1.0)], n);
        push(C, [P3(qa, e * AVENUE.hw, ya + 0.01), P3(qb, e * AVENUE.hw, yb + 0.01), P3(qb, e * (DECK_HW - 0.35), yb + 0.01), P3(qa, e * (DECK_HW - 0.35), ya + 0.01)], UP);
        push(C, [P3(qa, e * (DECK_HW - 0.35), ya), P3(qb, e * (DECK_HW - 0.35), yb), P3(qb, e * (DECK_HW - 0.35), yb + 1.0), P3(qa, e * (DECK_HW - 0.35), ya + 1.0)], [-n[0], 0, -n[2]]);
        push(C, [P3(qa, e * (DECK_HW - 0.35), ya + 1.0), P3(qb, e * (DECK_HW - 0.35), yb + 1.0), P3(qb, e * DECK_HW, yb + 1.0), P3(qa, e * DECK_HW, ya + 1.0)], UP);
      }
    }
    // hộp dựng theo khung cao tốc tại t: rộng du (theo r), dài dt (theo f), từ y0 tới y1
    const box = (t, u, du, dt, y0, y1) => {
      const q = Q(t), rx = Math.cos(q.th), rz = -Math.sin(q.th), fx = -Math.sin(q.th), fz = -Math.cos(q.th);
      const cx = q.x + rx * u, cz = q.z + rz * u;
      const Cn = (i, k, y) => [cx + rx * i * du / 2 + fx * k * dt / 2, y, cz + rz * i * du / 2 + fz * k * dt / 2];
      for (const [a, b, c, d, n] of [[[-1, -1], [1, -1], [1, 1], [-1, 1], UP], [[-1, -1], [1, -1], [1, 1], [-1, 1], DOWN]]) {
        const y = n === UP ? y1 : y0;
        push(C, [Cn(...a, y), Cn(...b, y), Cn(...c, y), Cn(...d, y)], n);
      }
      for (const [i0, k0, i1, k1, n] of [[-1, -1, 1, -1, [-fx, 0, -fz]], [1, -1, 1, 1, [rx, 0, rz]], [1, 1, -1, 1, [fx, 0, fz]], [-1, 1, -1, -1, [-rx, 0, -rz]]])
        push(C, [Cn(i0, k0, y0), Cn(i1, k1, y0), Cn(i1, k1, y1), Cn(i0, k0, y1)], n);
    };
    const groundAt = (t, u) => {                                    // đáy trụ: mặt đất tự nhiên / lòng sông / đáy hào
      const q = Q(t), x = q.x + Math.cos(q.th) * u, z = q.z - Math.sin(q.th) * u;
      if (river && Math.abs(this.riverA(O, x, z)) < O.hw + 10) return O.level - RIVER.depth - 0.5;
      return hLow(x, z) - 1.5;
    };
    const clear = river ? 0 : O.crossHW + 3.5;
    for (let t = -V + 20; t <= V - 20; t += 28) {
      if (Math.abs(t) < clear) continue;
      const top = Q(t).y - 1.6;
      for (const u of [-7.5, 7.5]) box(t, u, 1.6, 1.6, groundAt(t, u), top - 1.0);
      box(t, 0, 2 * DECK_HW - 2, 1.8, top - 1.0, top);              // xà mũ
    }
    if (!river) for (const e of [-1, 1]) {                            // 2 hàng trụ sát hai mép quốc lộ
      const t = e * (O.crossHW + 3), top = Q(t).y - 1.6;
      for (const u of [-7.5, 7.5]) box(t, u, 1.6, 1.6, O.yc - 0.5, top - 1.0);
      box(t, 0, 2 * DECK_HW - 2, 1.8, top - 1.0, top);
    }
    for (const e of [-1, 1]) {                                        // tường mố hai đầu cầu
      const t = e * (V - 12), q = Q(t);
      box(t, 0, 2 * DECK_HW, 1.2, Math.min(groundAt(t, -12), groundAt(t, 12), groundAt(t, 0)), q.y - 0.05);
    }
    if (river) {
      // 2 tháp dây văng giữa sông (trên dải phân cách) + dây thép
      const cab = [];
      for (const tp of [-70, 70]) {
        const q = Q(tp), top = q.y + 42;
        box(tp, 0, 2.2, 2.6, groundAt(tp, 0), top);
        box(tp, 0, 6, 3.4, q.y - 1.6 - 3, q.y - 1.6);                  // đế tháp
        for (const e of [-1, 1]) for (let k = 1; k <= 7; k++) for (const sg of [-1, 1]) {
          const ta = tp + sg * k * 14, qa = Q(ta);
          cab.push(...P3(q, 0, top - 2 - k * 2.2), ...P3(qa, e * (DECK_HW - 0.6), qa.y + 1.0));
        }
      }
      const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(cab, 3));
      group.add(new THREE.LineSegments(cg, this.cableMat));
    } else {
      // quốc lộ 4 làn dưới gầm: dải nhựa ±crossHW, vàng đôi giữa, trắng đứt ±3.5, trắng liền mép ±(crossHW − 0.6)
      const X = (u, a, y) => [O.P.x + O.rx * u + O.fx * a, y, O.P.z + O.rz * u + O.fz * a];
      const CH = O.crossHW, WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16];
      for (let u = -O.crossLen; u < O.crossLen; u += 4) {
        const y0 = this.crossY(O, u) + 0.03, y1 = this.crossY(O, u + 4) + 0.03;
        push(A, [X(u, -CH, y0), X(u + 4, -CH, y1), X(u + 4, CH, y1), X(u, CH, y0)], UP, [[u / 8, -CH / 8], [(u + 4) / 8, -CH / 8], [(u + 4) / 8, CH / 8], [u / 8, CH / 8]]);
        const m = (a0, a1, col) => push(M, [X(u, a0, y0 + 0.02), X(u + 4, a0, y1 + 0.02), X(u + 4, a1, y1 + 0.02), X(u, a1, y0 + 0.02)], UP, col);
        m(-0.2, -0.08, YEL); m(0.08, 0.2, YEL); m(-CH + 0.6, -CH + 0.75, WHITE); m(CH - 0.75, CH - 0.6, WHITE);
        if (Math.floor(u / 4) % 3 === 0) { m(-3.57, -3.43, WHITE); m(3.43, 3.57, WHITE); }
      }
    }
    const mk = (B, mat) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      if (B.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      if (B.col) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
      g.setIndex(B.idx);
      const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; group.add(m);
    };
    mk(C, this.barrierMat);
    if (A.pos.length) { mk(A, this.asphalt); mk(M, this.markMat); }
    this.group.add(group);
    return group;
  }

  // barie trạm thu phí: nâng khi có xe trong làn sắp tới vạch (≤ 16 m) hoặc vừa qua (≤ 4 m), hạ khi trống. vehicles: [{s, d, dir}]
  updateToll(dt, vehicles) {
    if (!this.tolls) return;
    for (const T of this.tolls.values()) for (const A of T.arms) {
      const busy = vehicles.some((v) => v.dir === A.dir && Math.abs(v.d - A.lane) < 1.7 && (T.s - v.s) * v.dir < 16 && (T.s - v.s) * v.dir > -4);
      A.k += ((busy ? 1 : 0) - A.k) * Math.min(1, dt * (busy ? 4 : 1.5));
      A.pivot.rotation.z = -A.dir * A.k * Math.PI * 0.47;
    }
  }

  // trạm thu phí: đảo phân làn (bê tông, mũi vàng) trên các vạch chia làn + mép, cabin thu phí, mái che 2 chiều có dải chữ,
  // barie sọc đỏ trắng mỗi làn (tự nâng), biển báo trước trạm 1 km / 500 m + biển tốc độ 40
  _buildToll(k) {
    const road = this.road, group = new THREE.Group(), s0 = tollS(k);
    const C = { pos: [], nor: [], idx: [] }, Hs = { pos: [], nor: [], col: [], idx: [] }, S = { pos: [], nor: [], uv: [], idx: [] }, Mt = { pos: [], nor: [], idx: [] };
    const push = (B, P, n, extra) => {
      const b = B.pos.length / 3;
      P.forEach((q, i) => { B.pos.push(q[0], q[1], q[2]); B.nor.push(n[0], n[1], n[2]); if (B.uv) B.uv.push(...extra[i]); if (B.col) B.col.push(...extra); });
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2], bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const c = [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
      if (c[0] * n[0] + c[1] * n[1] + c[2] * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    };
    const P3 = (t, u, h) => { const q = road.at(s0 + t, {}); return [q.x + Math.cos(q.th) * u, q.y + h, q.z - Math.sin(q.th) * u]; };
    const q0 = road.at(s0, {}), rx = Math.cos(q0.th), rz = -Math.sin(q0.th), fx = -Math.sin(q0.th), fz = -Math.cos(q0.th);
    // hộp theo khung trạm: t0..t1 dọc đường, u0..u1 ngang, h0..h1 cao (so với mặt đường tại t)
    const box = (B, t0, t1, u0, u1, h0, h1, col) => {
      const V = (t, u, h) => P3(t, u, h);
      const F = [[[t0, u0, h1], [t1, u0, h1], [t1, u1, h1], [t0, u1, h1], [0, 1, 0]], [[t0, u0, h0], [t1, u0, h0], [t1, u1, h0], [t0, u1, h0], [0, -1, 0]],
        [[t0, u0, h0], [t1, u0, h0], [t1, u0, h1], [t0, u0, h1], [-rx, 0, -rz]], [[t0, u1, h0], [t1, u1, h0], [t1, u1, h1], [t0, u1, h1], [rx, 0, rz]],
        [[t0, u0, h0], [t0, u1, h0], [t0, u1, h1], [t0, u0, h1], [-fx, 0, -fz]], [[t1, u0, h0], [t1, u1, h0], [t1, u1, h1], [t1, u0, h1], [fx, 0, fz]]];
      for (const f of F) push(B, f.slice(0, 4).map((p) => V(...p)), f[4], col);
    };
    const ISL = [-11.45, -7.5, -4.0, 4.0, 7.5, 11.45], YEL = [0.95, 0.75, 0.1], GREY = [0.62, 0.62, 0.6];
    for (const u of ISL) {
      box(Hs, -15, 15, u - 0.45, u + 0.45, 0, 0.25, GREY);                 // đảo
      box(Hs, -16.2, -15, u - 0.45, u + 0.45, 0, 0.6, YEL); box(Hs, 15, 16.2, u - 0.45, u + 0.45, 0, 0.6, YEL);   // mũi đảo vàng
      // cabin thu phí (trắng, cửa kính tối) phía người lái của làn bên trái đảo theo từng chiều
      const t0 = u > 0 ? -3.2 : 0.4;
      box(Hs, t0, t0 + 2.8, u - 0.55, u + 0.55, 0.25, 2.7, [0.93, 0.93, 0.9]);
      box(Hs, t0 + 0.4, t0 + 2.4, u - 0.57, u + 0.57, 1.2, 2.2, [0.12, 0.16, 0.2]);
      box(Hs, t0 - 0.1, t0 + 2.9, u - 0.65, u + 0.65, 2.7, 2.85, [0.2, 0.42, 0.75]);
      for (const t of [-8, 8]) box(C, t - 0.25, t + 0.25, u - 0.25, u + 0.25, 0.25, 5.7, null);   // cột mái
    }
    for (const t of [-8, 8]) box(C, t - 0.25, t + 0.25, -0.25, 0.25, 0.85, 5.7, null);
    box(C, -12, 12, -14.6, 14.6, 5.7, 6.5, null);                         // mái
    for (const e of [-1, 1]) {                                            // dải chữ 2 mặt mái (mỗi mặt quay về 1 chiều xe)
      const t = e * 12.02, [u0, v0, u1, v1] = signUV(10);
      for (const [a, b] of [[-14, -0.5], [0.5, 14]]) {
        const L = e < 0 ? [a, b] : [b, a];
        push(S, [P3(t, L[0], 5.72), P3(t, L[1], 5.72), P3(t, L[1], 6.48), P3(t, L[0], 6.48)], [fx * e, 0, fz * e], [[u0, v0 + 0.06], [u1, v0 + 0.06], [u1, v1 - 0.06], [u0, v1 - 0.06]]);
      }
    }
    // biển trước trạm (mỗi chiều): 1 km, 500 m (cột đôi bên phải), tốc độ 40 ở 250 m và 120 m
    const sign = (t, u, dir, w, hh, h0, cell, round) => {
      const [u0, v0, u1, v1] = signUV(cell, round), q = road.at(s0 + t, {}), n = [Math.sin(q.th) * dir, 0, Math.cos(q.th) * dir];
      const a = u - dir * w / 2, b = u + dir * w / 2;
      push(S, [P3(t, a, h0), P3(t, b, h0), P3(t, b, h0 + hh), P3(t, a, h0 + hh)], n, [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]);
    };
    const post = (t, u, h, w) => box(Mt, t - w, t + w, u - w, u + w, 0, h, null);
    for (const dir of [1, -1]) {
      for (const [tt, cell] of [[-1000, 8], [-500, 9]]) { const t = tt * dir; post(t, dir * 14.4, 3.8, 0.07); post(t, dir * 17.4, 3.8, 0.07); sign(t - dir * 0.1, dir * 15.9, dir, 3.4, 1.7, 2.0, cell); }
      for (const tt of [-250, -120]) { const t = tt * dir; post(t, dir * 14.4, 3.2, 0.05); sign(t - dir * 0.08, dir * 14.4, dir, 1.0, 1.0, 2.2, 11, true); }
    }
    // barie mỗi làn ở vạch t = 0 (theo chiều xe): bản lề ở đảo bên phải làn, cần sọc đỏ trắng vươn sang trái
    const arms = [];
    const armGeo = new THREE.BoxGeometry(3.0, 0.1, 0.1);
    const pos = armGeo.attributes.position, colA = [];
    for (let i = 0; i < pos.count; i++) { const x = pos.getX(i) + 1.5; const red = Math.floor(x / 0.5) % 2 === 0; colA.push(...(red ? [0.85, 0.1, 0.1] : [0.95, 0.95, 0.95])); }
    armGeo.setAttribute('color', new THREE.Float32BufferAttribute(colA, 3));
    for (const dir of [1, -1]) for (const l of AVENUE.lanes) {
      const g = new THREE.Group(), pivot = new THREE.Group(), lane = dir * l;
      const p = P3(0, dir * (l + 1.75 - 0.45), 1.0);
      g.position.set(...p); g.rotation.set(0, q0.th, 0);
      const m = new THREE.Mesh(armGeo, this.armMat); m.position.x = -dir * 1.5; m.castShadow = true;
      pivot.add(m); g.add(pivot); group.add(g);
      arms.push({ dir, lane, pivot, k: 0 });
    }
    const mk = (B, mat) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      if (B.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      if (B.col) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
      g.setIndex(B.idx);
      const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; group.add(m);
    };
    mk(C, this.barrierMat); mk(Hs, this.houseMat); mk(S, this.signMat); mk(Mt, this.metalMat);
    group.userData.armGeo = armGeo;
    this.group.add(group);
    return { k, s: s0, group, arms };
  }

  _build(k) {
    const road = this.road, group = new THREE.Group();
    const s0 = k * CHUNK, s1 = s0 + CHUNK;
    const at = (s, u, y) => { const p = road.at(s, this._p); return [p.x + Math.cos(p.th) * u, p.y + y, p.z - Math.sin(p.th) * u]; };
    const mark = { pos: [], nor: [], col: [], idx: [] };
    const quad = (B, P, n, col) => {
      const b = B.pos.length / 3;
      for (let i = 0; i < 4; i++) { B.pos.push(...P[i]); B.nor.push(...n); if (B.col) B.col.push(...col); }
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
      const bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const cy = az * bx - ax * bz;
      if (cy * n[1] >= 0 && n[1] !== 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      else if (n[1] !== 0) B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
      else B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3, b, b + 2, b + 1, b, b + 3, b + 2);   // mặt đứng: vẽ cả 2 mặt
    };
    const UP = [0, 1, 0];
    const strip = (sA, sB, u0, u1, col) => {
      const N = Math.max(1, Math.ceil((sB - sA) / 4));
      for (let i = 0; i < N; i++) {
        const a = sA + (sB - sA) * i / N, b = sA + (sB - sA) * (i + 1) / N;
        quad(mark, [at(a, u0, MARK_Y), at(b, u0, MARK_Y), at(b, u1, MARK_Y), at(a, u1, MARK_Y)], UP, col);
      }
    };
    const WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16];
    const A = AVENUE;
    for (const su of [-1, 1]) {
      strip(s0, s1, su * (A.median + 0.15), su * (A.median + 0.3), YEL);          // mép trong (sát dải phân cách): vàng liền
      strip(s0, s1, su * (A.edge - 0.1), su * (A.edge + 0.1), WHITE);             // mép ngoài (lề khẩn cấp): trắng liền
      for (const sep of A.seps) {                                                  // giữa các làn: trắng đứt
        for (let a = Math.ceil(s0 / (DASH + GAP)) * (DASH + GAP); a < s1; a += DASH + GAP) strip(a, Math.min(s1, a + DASH), su * (sep - 0.075), su * (sep + 0.075), WHITE);
      }
    }
    group.add(this._mesh(mark, this.markMat, true));

    // dải phân cách bê tông kiểu "jersey": mặt cắt (u, y) kéo dọc đường, bước 4 m
    const prof = [[-0.3, 0], [-0.17, 0.22], [-0.11, 0.82], [0.11, 0.82], [0.17, 0.22], [0.3, 0]];
    const bar = { pos: [], nor: [], idx: [] };
    const N = Math.ceil(CHUNK / 4);
    for (let i = 0; i < N; i++) {
      const a = s0 + i * 4, b = a + 4;
      for (let j = 0; j + 1 < prof.length; j++) {
        const [u0, y0] = prof[j], [u1, y1] = prof[j + 1];
        const P = [at(a, u0, y0), at(b, u0, y0), at(b, u1, y1), at(a, u1, y1)];
        const p = road.at((a + b) / 2, this._p), du = u1 - u0, dy = y1 - y0, L = Math.hypot(du, dy) || 1;
        const nu = -dy / L, ny = du / L;                                         // pháp tuyến mặt cắt (hướng ra ngoài)
        const n = [Math.cos(p.th) * nu, ny, -Math.sin(p.th) * nu];
        const base = bar.pos.length / 3;
        for (const q of P) { bar.pos.push(...q); bar.nor.push(...n); }
        // chiều quấn: kiểm tra pháp tuyến hình học so với n
        const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
        const bx = P[3][0] - P[0][0], by = P[3][1] - P[0][1], bz = P[3][2] - P[0][2];
        const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
        if (cx * n[0] + cy * n[1] + cz * n[2] >= 0) bar.idx.push(base, base + 1, base + 3, base + 1, base + 2, base + 3);
        else bar.idx.push(base, base + 3, base + 1, base + 1, base + 3, base + 2);
      }
    }
    const bm = this._mesh(bar, this.barrierMat, false);
    bm.castShadow = true;
    group.add(bm);
    this.group.add(group);
    return group;
  }

  _mesh(B, mat, colors) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
    if (colors) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
    g.setIndex(B.idx);
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    return m;
  }
}
