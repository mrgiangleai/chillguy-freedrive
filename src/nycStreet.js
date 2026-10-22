// Map New York — đồ phố: biển tên đường xanh lá kiểu NYC ("W 53 St", "7 Av") trên cột ở góc ngã tư (tên thật từ OSM), biển ONE WAY
// (đen, mũi tên trắng) theo chiều thật của phố ngang + của đại lộ, trụ cứu hoả đỏ / vàng sát mép vỉa hè, thùng rác xanh ở góc.
// Dựng 1 lần ở vòng 1 (vị trí thế giới mọi vòng trùng nhau).
import * as THREE from 'three';
import { CITY } from './road.js';
import { NYC, nycStreet } from './nyc.js';
import { withMist } from './mist.js';
import { build as subwayGeo } from './subwayEntrance.js';

// "53rd Street" => "53 St", "Madison Avenue" => "Madison Av"; phía đông / tây của 5th Ave: E / W
const short = (n) => n.replace(/(\d+)(st|nd|rd|th)\b/, '$1').replace(/ Street$/, ' St').replace(/ Avenue$/, ' Av').replace(/^(\d+) Av$/, '$1 Av');

function nameAtlas(names) {
  const W = 1024, CH = 96, rows = Math.ceil(names.length / 2), H = THREE.MathUtils.ceilPowerOfTwo(rows * CH);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#0d5c3a'; g.fillRect(0, 0, W, H);
  names.forEach((n, i) => {
    const x = (i % 2) * 512, y = Math.floor(i / 2) * CH;
    g.fillStyle = '#0f6b43'; g.fillRect(x + 4, y + 4, 504, CH - 8);
    g.strokeStyle = '#f2f2f2'; g.lineWidth = 4; g.strokeRect(x + 10, y + 10, 492, CH - 20);
    let fs = 58; g.font = `bold ${fs}px Arial, Helvetica, sans-serif`;
    while (g.measureText(n).width > 460 && fs > 24) { fs -= 2; g.font = `bold ${fs}px Arial, Helvetica, sans-serif`; }
    g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(n, x + 256, y + CH / 2 + 2);
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { t, uv: (i) => { const x = (i % 2) * 0.5, y0 = 1 - (Math.floor(i / 2) * CH) / H, y1 = 1 - ((Math.floor(i / 2) + 1) * CH) / H; return [x, y1, x + 0.5, y0]; } };
}
function oneWayTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = '#111'; g.fillRect(0, 0, 256, 96);
  g.fillStyle = '#fff'; g.beginPath();
  g.moveTo(14, 30); g.lineTo(180, 30); g.lineTo(180, 12); g.lineTo(244, 48); g.lineTo(180, 84); g.lineTo(180, 66); g.lineTo(14, 66); g.closePath(); g.fill();
  g.fillStyle = '#111'; g.font = 'bold 30px Arial, Helvetica, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('ONE WAY', 98, 49);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
// trụ cứu hoả: thân trụ + nắp vòm + 2 vòi ngang (gốc tại đáy)
function hydrantGeo() {
  const parts = [new THREE.CylinderGeometry(0.13, 0.15, 0.55, 10).translate(0, 0.32, 0), new THREE.SphereGeometry(0.14, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 0.59, 0),
    new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10).translate(0, 0.06, 0), new THREE.CylinderGeometry(0.05, 0.05, 0.42, 8).rotateZ(Math.PI / 2).translate(0, 0.42, 0)];
  return merge(parts);
}
function merge(parts) {
  const pos = [], nor = [];
  for (const p of parts) { const g = p.toNonIndexed(); pos.push(...g.attributes.position.array); nor.push(...g.attributes.normal.array); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}
// tô màu đỉnh cho 1 hình (mỗi prop tự chứa màu -> 1 material chung, không cần texture)
function paint(g, hex) {
  const n = g.index ? g.toNonIndexed() : g, c = new THREE.Color(hex), arr = new Float32Array(n.attributes.position.count * 3);
  for (let i = 0; i < arr.length; i += 3) { arr[i] = c.r; arr[i + 1] = c.g; arr[i + 2] = c.b; }
  n.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return n;
}
function mergeColored(parts) {
  const pos = [], nor = [], col = [];
  for (const p of parts) { pos.push(...p.attributes.position.array); nor.push(...p.attributes.normal.array); col.push(...p.attributes.color.array); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  return g;
}

// ── đồ phố mới: nắp hố ga + ống khói hơi, xe bán hàng, biển Koreatown ──────────
export function manholeGeo() { return new THREE.CylinderGeometry(0.4, 0.4, 0.05, 12).translate(0, 0.025, 0); }
export function stackGeo() {                                   // ống khói 1,2 m sọc cam-trắng
  const parts = [];
  for (let i = 0; i < 6; i++) parts.push(paint(new THREE.CylinderGeometry(0.16 - i * 0.009, 0.17 - i * 0.009, 0.2, 8).translate(0, 0.1 + i * 0.2, 0), i % 2 ? 0xf1eee4 : 0xd9541a));
  parts.push(paint(new THREE.CircleGeometry(0.085, 8).rotateX(-Math.PI / 2).translate(0, 1.2, 0), 0x1c1c1a));
  return mergeColored(parts);
}
// xe bán hàng: thùng thép 2,2 × 1,2 × 1,4 m + bạt / dù + biển nhỏ; kind 0,1 = mái bạt, 2,3 = dù
export function cartGeo(kind = 0) {
  const parts = [], AW = [0xe0a11c, 0xc0392b, 0xd9a11a, 0x1f5f9e], col = AW[kind % 4];
  parts.push(paint(new THREE.BoxGeometry(2.2, 1.0, 1.2).translate(0, 0.72, 0), 0xb7bcc1));        // thùng
  parts.push(paint(new THREE.BoxGeometry(2.26, 0.1, 1.26).translate(0, 1.27, 0), 0xe2e5e7));       // mặt bàn
  parts.push(paint(new THREE.BoxGeometry(1.9, 0.4, 0.04).translate(0, 0.6, 0.62), 0x8b9197));      // pano trước
  for (const x of [-0.72, 0.72]) parts.push(paint(new THREE.CylinderGeometry(0.24, 0.24, 0.09, 6, 1, true).rotateX(Math.PI / 2).translate(x, 0.24, 0), 0x222225));
  for (const x of [-1.0, 1.0]) for (const z of [-0.5, 0.5]) parts.push(paint(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 5, 1, true).translate(x, 1.82, z), 0x9aa0a6));
  if (kind % 2 === 0) {                                          // mái bạt + diềm
    parts.push(paint(new THREE.BoxGeometry(2.5, 0.07, 1.5).translate(0, 2.32, 0), col));
    parts.push(paint(new THREE.BoxGeometry(2.5, 0.2, 0.04).translate(0, 2.2, 0.73), col));
  } else {                                                       // dù tròn
    parts.push(paint(new THREE.ConeGeometry(1.3, 0.5, 10, 1, true).translate(0, 2.55, 0), col));
    parts.push(paint(new THREE.CylinderGeometry(0.035, 0.035, 1.25, 5, 1, true).translate(0, 1.9, 0), 0x8d9399));
  }
  parts.push(paint(new THREE.BoxGeometry(0.95, 0.32, 0.05).translate(0, 1.62, 0.64), 0xf3f0e6));   // biển
  parts.push(paint(new THREE.BoxGeometry(0.95, 0.07, 0.06).translate(0, 1.46, 0.65), col));
  return mergeColored(parts);
}
// khói: texture mềm tạo bằng putImageData (không dùng gradient — Safari bị răng cưa)
function steamTex() {
  const N = 64, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d'), im = g.createImageData(N, N);
  let seed = 1337; const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const blobs = []; for (let i = 0; i < 9; i++) blobs.push([rnd() * N, rnd() * N, 8 + rnd() * 13]);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    let a = 0;
    for (const [bx, by, br] of blobs) { const d = Math.hypot(x - bx, y - by) / br; if (d < 1) a += (1 - d) * (1 - d) * 0.55; }
    const dx = (x - N / 2) / (N / 2), dy = (y - N / 2) / (N / 2), rim = Math.max(0, 1 - (dx * dx + dy * dy));
    const k = Math.min(1, a * rim * 1.9) * 255, o = (y * N + x) * 4;
    im.data[o] = im.data[o + 1] = im.data[o + 2] = 245; im.data[o + 3] = k;
  }
  g.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// tên đường "Korea Way" + atlas biển dọc chữ Hàn
function koreaWayTex() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128; const g = c.getContext('2d');
  g.fillStyle = '#0d5c3a'; g.fillRect(0, 0, 512, 128); g.strokeStyle = '#f2f2f2'; g.lineWidth = 6; g.strokeRect(8, 8, 496, 112);
  g.fillStyle = '#fff'; g.font = 'bold 74px Arial, Helvetica, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('KOREA WAY', 256, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
const KT_WORDS = ['식당', '노래방', '카페', '치킨', '바베큐', '마트'];
function ktownAtlas() {
  const CW = 1024 / 6, CH = 512, c = document.createElement('canvas'); c.width = 1024; c.height = CH; const g = c.getContext('2d');
  const BG = ['#c0261f', '#f2f0ea', '#1b3f8f', '#1f6b3a', '#c0261f', '#1b3f8f'], FG = ['#fff', '#c0261f', '#fff', '#fff', '#ffe9a8', '#fff'];
  KT_WORDS.forEach((w, i) => {
    const x = i * CW;
    g.fillStyle = BG[i]; g.fillRect(x + 3, 3, CW - 6, CH - 6);
    g.strokeStyle = FG[i] === '#c0261f' ? '#c0261f' : '#fff'; g.lineWidth = 5; g.strokeRect(x + 12, 12, CW - 24, CH - 24);
    g.fillStyle = FG[i]; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = 'bold 104px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif';
    [...w].forEach((ch, k) => g.fillText(ch, x + CW / 2, 90 + k * 118));
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { t, uv: (i) => [i / KT_WORDS.length, 0, (i + 1) / KT_WORDS.length, 1] };
}

// vị trí thuần (không THREE) để script node kiểm tra dùng lại đúng logic runtime
export function koreatownRange() {
  const st = NYC.data.streets, i = st.findIndex((e) => /32nd/.test(e.name));
  if (i < 0) return null;
  const a = st[i].s0, b = st[(i + 1) % st.length].s0, lo = a, hi = b > a ? b : b + NYC.length;
  const J = NYC.data.junctions.filter((j) => j.s >= lo && j.s <= hi);
  const byName = (re) => J.find((j) => j.names.some((n) => re.test(n)));
  const bwy = byName(/^Broadway$/i), fth = byName(/^5th Avenue$/i);
  if (bwy && fth && fth.s > bwy.s) return { s0: bwy.s, s1: fth.s };   // Korea Way thật: Broadway → 5th Av
  return { s0: lo, s1: hi };
}
export function planNycProps(at) {
  const D = NYC.data, L = NYC.length, HW = CITY.hw, WALK = CITY.walk, SWK = CITY.sideWalk, CW = CITY.side, P = {}, Q = {};
  const J = D.junctions, skip = [...D.portals, ...D.tunnels, ...D.bridges, ...D.passages];
  const inSkip = (s) => skip.some((r) => s > r.s0 - 8 && s < r.s1 + 8);
  // trụ cứu hoả (giữ nguyên quy tắc cũ)
  const hyd = [];
  for (const j of J.filter((e) => !e.corner)) {
    at(j.s, P);
    const fx = -Math.sin(P.th), fz = -Math.cos(P.th), rx = Math.cos(P.th), rz = -Math.sin(P.th);
    for (const su of [-1, 1]) {
      const a = CW + SWK + 14 + ((j.s * 7.3 + su * 13) % 16 + 16) % 16, u = su * (HW + 0.55);
      hyd.push({ x: P.x + fx * a + rx * u, y: P.y + 0.2, z: P.z + fz * a + rz * u, u, su, s: j.s + a, k: (j.s + su) % 3 < 1 ? 1 : 0 });
    }
  }
  // cửa tàu điện ngầm (giữ nguyên quy tắc cũ)
  const subs = [], gap = CW + SWK + 4;
  for (const [x, z, s0] of D.subway || []) {
    if (skip.some((r) => s0 > r.s0 - 30 && s0 < r.s1 + 30)) continue;
    at(s0, P);
    const rx = Math.cos(P.th), rz = -Math.sin(P.th), u = (x - P.x) * rx + (z - P.z) * rz, su = u < 0 ? -1 : 1;
    let s = s0;
    for (const j of J) { const d = s - j.s; if (Math.abs(d) < gap + 2.5) s = j.s + (d < 0 ? -1 : 1) * (gap + 2.5); }
    if (subs.some((q) => Math.abs(q.s - s) < 7 && q.su === su)) continue;
    at(s, P);
    const ex = Math.cos(P.th), ez = -Math.sin(P.th), uc = su * (HW + WALK * 0.5);
    subs.push({ s, su, x: P.x + ex * uc, y: P.y + 0.2, z: P.z + ez * uc, th: P.th + (Math.round(s) % 2 ? Math.PI : 0) });
  }
  // khối phố giữa 2 ngã tư
  const blocks = J.map((j0, i) => { const j1 = J[(i + 1) % J.length]; return { s0: j0.s, s1: j1.s + (i + 1 === J.length ? L : 0), i, corner: !!j0.corner }; });
  // hơi hố ga: 1 cái / 2 dãy phố, giữa khối, trong làn xe
  const steam = [];
  for (const b of blocks) {
    if (b.i % 2 || b.corner || b.s1 - b.s0 < 50) continue;
    let s = (b.s0 + b.s1) / 2 + ((b.i * 37) % 17) - 8;
    s = Math.max(b.s0 + 17, Math.min(b.s1 - 17, s));
    if (inSkip(s)) continue;
    const su = (b.i >> 1) % 2 ? -1 : 1, u = su * (HW * 0.28 + ((b.i * 13) % 10) / 10 * HW * 0.22);
    at(s, Q); const rx = Math.cos(Q.th), rz = -Math.sin(Q.th);
    steam.push({ s, u, su, y: Q.y, x: Q.x + rx * u, z: Q.z + rz * u, stack: (b.i * 7) % 10 < 3 });
  }
  // xe bán hàng: 1 cái / 3 dãy phố, sát góc, 2 bên luân phiên
  const carts = [];
  for (const b of blocks) {
    if (b.i % 3 !== 1 || b.corner || b.s1 - b.s0 < 60) continue;
    const su = b.i % 2 ? 1 : -1, u = su * (HW + WALK * 0.45);
    for (const o of [0, 6, -6, 11, -11]) {
      const s = b.s0 + 13 + ((b.i * 11) % 5) + o;
      if (s - b.s0 < 9 || b.s1 - s < 9 || inSkip(s)) continue;
      at(s, Q);
      const x = Q.x + Math.cos(Q.th) * u, z = Q.z - Math.sin(Q.th) * u;
      if (subs.some((e) => Math.hypot(e.x - x, e.z - z) < 3)) continue;
      if (hyd.some((e) => Math.hypot(e.x - x, e.z - z) < 2.5)) continue;
      if (steam.some((e) => Math.hypot(e.x - x, e.z - z) < 2)) continue;
      carts.push({ s, u, su, x, y: Q.y + 0.2, z, th: Q.th, k: b.i % 4 });
      break;
    }
  }
  // Koreatown (Korea Way, W 32 St giữa Broadway và 5th Av): biển dọc 2 bên, 1 cái / 8 m
  const kt = koreatownRange(), ktown = [], koreaWay = [];
  if (kt) {
    let i = 0;
    for (let s = kt.s0 + 6; s < kt.s1 - 6; s += 8, i++) {
      if (J.some((j) => Math.abs(s - j.s) < 7)) continue;
      at(s, Q);
      const rx = Math.cos(Q.th), rz = -Math.sin(Q.th), y = Q.y + 0.2 + 4.45 + ((i * 1.7) % 2.1);
      for (const su of [-1, 1]) {
        const u = su * (HW + WALK - 0.4);                       // sát mặt tiền, nhô 0,8 m ra vỉa hè
        ktown.push({ s, u, su, x: Q.x + rx * u, y, z: Q.z + rz * u, th: Q.th, ax: rx, az: rz, cell: (i * 2 + (su > 0 ? 1 : 0)) % 6 });
      }
    }
    for (const [s, su] of [[kt.s0, 1], [kt.s1, -1]]) {          // biển "Korea Way" đúng 2 góc Broadway / 5th Av
      at(s, Q); const u = su * (HW + 0.65), rx = Math.cos(Q.th), rz = -Math.sin(Q.th);
      koreaWay.push({ s, u, su, x: Q.x + rx * u, y: Q.y + 0.2 + 3.3, z: Q.z + rz * u, th: Q.th, ax: rx, az: rz });
    }
  }
  return { hyd, subs, steam, carts, ktown, koreaWay, kt };
}

export class NycStreetProps {
  constructor(scene, road) {
    this.road = road;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.built = false;
    this.uLit = { value: 0 };                                    // cầu đèn xanh cửa tàu điện ngầm sáng về đêm
  }
  setLamps(k) { this.uLit.value = k; if (this.steamMat) this.steamMat.uniforms.uLit.value = k; }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); }
  get visible() { return this.group.visible; }

  _build() {
    this.built = true;
    const road = this.road.street, L = NYC.length, P = {}, HW = CITY.hw, WALK = CITY.walk, CW = CITY.side, SWK = CITY.sideWalk;
    const J = NYC.data.junctions.filter((j) => !j.corner);
    const plan = planNycProps((s, o) => road.at(L + s, o));        // vị trí props dùng chung với script check
    // tên (đại lộ / phố ngang) => ô atlas
    const names = [], idx = (n) => { let i = names.indexOf(n); if (i < 0) { i = names.length; names.push(n); } return i; };
    const signs = [], ones = [], poles = [], cans = [];
    for (const j of J) {
      road.at(L + j.s, P);
      const fx = -Math.sin(P.th), fz = -Math.cos(P.th), rx = Math.cos(P.th), rz = -Math.sin(P.th);
      const W = (a, u) => [P.x + fx * a + rx * u, P.z + fz * a + rz * u];
      const main = short(nycStreet(j.s - 30)), cross = short(j.names[0]);
      // cột tên đường: góc trước-phải (phía xe tới), sát mép vỉa hè
      const a0 = -(CW + SWK + 1.2), u0 = HW + 0.7, [px, pz] = W(a0, u0);
      poles.push([px, P.y + 0.2, pz, 4.2]);
      signs.push({ x: px, y: P.y + 0.2 + 3.9, z: pz, ax: rx, az: rz, cell: idx(cross) });   // biển phố ngang: nằm dọc phố ngang (người đi đại lộ đọc)
      signs.push({ x: px, y: P.y + 0.2 + 3.55, z: pz, ax: fx, az: fz, cell: idx(main) });    // biển đại lộ
      if (j.ow) ones.push({ x: px, y: P.y + 0.2 + 3.05, z: pz, ax: rx * j.ow, az: rz * j.ow });   // ONE WAY phố ngang: mũi tên theo chiều thật
      ones.push({ x: px, y: P.y + 0.2 + 2.6, z: pz, ax: fx, az: fz });                            // ONE WAY đại lộ (chiều đi của vòng)
      const [cx, cz] = W(a0 + 1.6, -(HW + 1.0)); cans.push([cx, P.y + 0.2, cz]);
      const [dx, dz] = W(-a0 - 1.6, HW + 1.0); cans.push([dx, P.y + 0.2, dz]);
    }
    // biển: mỗi biển 2 mặt (quad 2 lần ngược chiều), uv theo ô atlas
    const atlas = nameAtlas(names);
    const quadSigns = (list, w, h, uvOf) => {
      const pos = [], uv = [], nor = [], id = [];
      for (const S of list) {
        const nx = -S.az, nz = S.ax, [u0, v0, u1, v1] = uvOf(S);
        for (const side of [1, -1]) {
          const b = pos.length / 3, ox = nx * 0.02 * side, oz = nz * 0.02 * side;
          const A = [S.x - S.ax * w / 2 + ox, S.y - h / 2, S.z - S.az * w / 2 + oz], B = [S.x + S.ax * w / 2 + ox, S.y - h / 2, S.z + S.az * w / 2 + oz];
          pos.push(...A, ...B, B[0], B[1] + h, B[2], A[0], A[1] + h, A[2]);
          for (let k = 0; k < 4; k++) nor.push(nx * side, 0, nz * side);
          // mặt sau đọc ngược chiều => lật u để chữ không bị ngược
          if (side > 0) uv.push(u0, v0, u1, v0, u1, v1, u0, v1); else uv.push(u1, v0, u0, v0, u0, v1, u1, v1);
          if (side > 0) id.push(b, b + 1, b + 2, b, b + 2, b + 3); else id.push(b, b + 2, b + 1, b, b + 3, b + 2);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(id);
      return g;
    };
    const signMat = withMist(new THREE.MeshStandardMaterial({ map: atlas.t, roughness: 0.5 }));
    this.group.add(new THREE.Mesh(quadSigns(signs, 1.9, 0.34, (S) => atlas.uv(S.cell)), signMat));
    const oneMat = withMist(new THREE.MeshStandardMaterial({ map: oneWayTex(), roughness: 0.5 }));
    this.group.add(new THREE.Mesh(quadSigns(ones, 0.92, 0.34, () => [0, 0, 1, 1]), oneMat));
    // cột, trụ cứu hoả, thùng rác: InstancedMesh
    const m4 = new THREE.Matrix4(), v = new THREE.Vector3(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), c = new THREE.Color();
    const inst = (geo, mat, list, fn) => { const im = new THREE.InstancedMesh(geo, mat, list.length); list.forEach((e, i) => { fn(e, i, im); im.setMatrixAt(i, m4); }); im.castShadow = true; im.frustumCulled = false; this.group.add(im); return im; };
    const poleMat = withMist(new THREE.MeshStandardMaterial({ color: 0x3a4a3f, roughness: 0.6, metalness: 0.4 }));
    inst(new THREE.CylinderGeometry(0.05, 0.06, 1, 8).translate(0, 0.5, 0), poleMat, poles, ([x, y, z, h]) => m4.compose(v.set(x, y, z), q.identity(), sc.set(1, h, 1)));
    const hm = inst(hydrantGeo(), withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })), plan.hyd, (e, i, im) => {
      m4.compose(v.set(e.x, e.y, e.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), i), sc.set(1, 1, 1)); im.setColorAt(i, c.set(e.k ? 0xe2b007 : 0xc8231b)); });
    hm.instanceColor.needsUpdate = true;
    inst(new THREE.CylinderGeometry(0.32, 0.28, 0.95, 10).translate(0, 0.475, 0), withMist(new THREE.MeshStandardMaterial({ color: 0x2f5b3a, roughness: 0.7 })), cans,
      ([x, y, z]) => m4.compose(v.set(x, y, z), q.identity(), sc.set(1, 1, 1)));
    // cửa tàu điện ngầm: vị trí thật OSM (nyc-data `subway`), đặt giữa vỉa hè bên đó, dời khỏi miệng ngã tư; bỏ đoạn hầm / cầu cạn
    const subs = plan.subs;
    if (subs.length) {
      const mat = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.2 }));
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uLit = this.uLit;
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uLit;')
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor * step(0.7, vColor.g) * step(vColor.r, 0.5) * (0.25 + 2.2 * uLit);');   // cầu kính xanh
      };
      const sg = subwayGeo(THREE).geometry, sp = sg.attributes.position, scol = sg.attributes.color;
      for (let i = 0; i < sp.count; i++) {                       // lòng cầu thang (dải xám thấp sát mặt hè) tối hẳn: nhìn như lối xuống sâu
        const r = scol.getX(i), g = scol.getY(i), b = scol.getZ(i);
        if (sp.getY(i) < 0.06 && Math.abs(sp.getX(i)) < 0.86 && r < 0.3 && Math.abs(r - g) < 0.05 && Math.abs(g - b) < 0.05) scol.setXYZ(i, r * 0.25, g * 0.25, b * 0.25);
      }
      inst(sg, mat, subs, (e) => m4.compose(v.set(e.x, e.y, e.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), e.th), sc.set(1, 1, 1)));
    }
    // ── hơi hố ga ────────────────────────────────────────────────────────────
    const vents = plan.steam;
    if (vents.length) {
      inst(manholeGeo(), withMist(new THREE.MeshStandardMaterial({ color: 0x3c3c38, roughness: 0.85, metalness: 0.25 })), vents,
        (e) => m4.compose(v.set(e.x, e.y + 0.01, e.z), q.identity(), sc.set(1, 1, 1)));
      const stacks = vents.filter((e) => e.stack);
      if (stacks.length) inst(stackGeo(), withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 })), stacks,
        (e) => m4.compose(v.set(e.x, e.y, e.z), q.identity(), sc.set(1, 1, 1)));
      // khói: quad billboard tự bám camera, chỉ vẽ trong 150 m (shader), 1 draw call
      const SPR = 4, pos = [], nor = [], ctr = [], crn = [], sd = [], id = [];
      for (const e of vents) for (let i = 0; i < SPR; i++) {
        const ph = ((e.s * 0.37 + i * 0.237) % 1 + 1) % 1, sz = 0.7 + ((i * 13) % 10) / 10 * 0.5, spd = 0.1 + ((i * 7) % 5) * 0.012 + (e.stack ? 0.035 : 0);
        const b = pos.length / 3, y0 = e.y + (e.stack ? 1.15 : 0.03);
        for (const [cx, cy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { pos.push(e.x, y0, e.z); nor.push(0, 1, 0); ctr.push(e.x, y0, e.z); crn.push(cx, cy); sd.push(ph, sz, spd); }
        id.push(b, b + 1, b + 2, b, b + 2, b + 3);
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      sg.setAttribute('aCenter', new THREE.Float32BufferAttribute(ctr, 3)); sg.setAttribute('aCorner', new THREE.Float32BufferAttribute(crn, 2));
      sg.setAttribute('aSeed', new THREE.Float32BufferAttribute(sd, 3)); sg.setIndex(id);
      this.uTime = { value: 0 };
      const sm = new THREE.ShaderMaterial({
        uniforms: { uMap: { value: steamTex() }, uTime: this.uTime, uLit: this.uLit },
        vertexShader: `uniform float uTime; attribute vec3 aCenter; attribute vec2 aCorner; attribute vec3 aSeed;
          varying vec2 vUv; varying float vA;
          void main() {
            float t = fract(uTime * aSeed.z + aSeed.x);
            vec3 c = aCenter + vec3(t * 1.15 + sin(uTime * 0.6 + aSeed.x * 6.2831) * 0.28, t * (2.0 + aSeed.y * 1.8), t * 0.55);
            vec4 mv = viewMatrix * vec4(c, 1.0);
            float far = 1.0 - smoothstep(110.0, 150.0, length(c - cameraPosition));
            mv.xy += aCorner * mix(0.62, 2.05, t) * aSeed.y * 1.5;
            gl_Position = projectionMatrix * mv;
            vUv = aCorner * 0.5 + 0.5;
            vA = far * smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.42, 1.0, t)) * 0.42;
          }`,
        fragmentShader: `uniform sampler2D uMap; uniform float uLit; varying vec2 vUv; varying float vA;
          void main() { float a = texture2D(uMap, vUv).a * vA; if (a < 0.004) discard;
            gl_FragColor = vec4(vec3(0.84, 0.86, 0.89) * (0.9 + 0.22 * uLit), a);
            #include <colorspace_fragment>
          }`,
        transparent: true, depthWrite: false, side: THREE.DoubleSide
      });
      this.steamMat = sm;
      const smesh = new THREE.Mesh(sg, sm); smesh.frustumCulled = false;
      smesh.onBeforeRender = () => { this.uTime.value = performance.now() * 0.001; };
      this.group.add(smesh);
    }
    // ── xe bán hàng ──────────────────────────────────────────────────────────
    const cartMat = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15 }));
    for (let k = 0; k < 4; k++) {
      const list = plan.carts.filter((e) => e.k === k);
      if (!list.length) continue;
      inst(cartGeo(k), cartMat, list, (e) => m4.compose(v.set(e.x, e.y, e.z),
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), e.th + Math.PI / 2 + (e.su > 0 ? Math.PI : 0)), sc.set(1, 1, 1)));
    }
    // ── Koreatown: biển dọc chữ Hàn + biển Korea Way ở góc ────────────────────
    if (plan.ktown.length) {
      const KA = ktownAtlas();
      const kMat = withMist(new THREE.MeshStandardMaterial({ map: KA.t, roughness: 0.5, side: THREE.FrontSide }));
      const m = new THREE.Mesh(quadSigns(plan.ktown, 0.8, 3.0, (S) => KA.uv(S.cell)), kMat);   // ax/az ngang = pháp tuyến mặt tiền => biển nhô vuông góc, đọc dọc phố
      m.frustumCulled = false; this.group.add(m);
    }
    if (plan.koreaWay.length) {
      const kwm = new THREE.Mesh(quadSigns(plan.koreaWay, 2.4, 0.55, () => [0, 0, 1, 1]),
        withMist(new THREE.MeshStandardMaterial({ map: koreaWayTex(), roughness: 0.5, side: THREE.DoubleSide })));
      kwm.frustumCulled = false; this.group.add(kwm);
      inst(new THREE.CylinderGeometry(0.05, 0.06, 1, 8).translate(0, 0.5, 0), poleMat, plan.koreaWay,
        (e) => m4.compose(v.set(e.x, e.y - 3.3, e.z), q.identity(), sc.set(1, 3.3, 1)));
    }
    this.count = { names: names.length, signs: signs.length, oneWay: ones.length, hydrants: plan.hyd.length, subway: subs.length,
      steam: vents.length, steamStacks: vents.filter((e) => e.stack).length, carts: plan.carts.length, ktown: plan.ktown.length, koreaWay: plan.koreaWay.length };
  }
}
