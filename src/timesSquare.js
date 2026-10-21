// Times Square (map New York, 7th Ave 47 St → 42 St): nhà chọc trời kính 2 bên (thay nhà map Phố trong vùng `TS`), biển LED quảng cáo
// đổi hình liên tục (atlas 4×4 thương hiệu tự chế, `adAtlas.js`), tháp One Times Square phủ biển ở góc 42–43 St (bên trái chiều đi),
// quảng trường đi bộ lát gạch (Duffy Square bên phải 46–47 St có bậc đỏ TKTS; quảng trường bên trái 43–45 St).
// Dựng 1 lần ở vòng thứ 1 (vị trí thế giới của mọi vòng trùng nhau), như `NycWorks`.
import * as THREE from 'three';
import { CITY } from './road.js';
import { NYC } from './nyc.js';
import { withMist } from './mist.js';
import { adAtlas } from './adAtlas.js';

// s (trong vòng) của vùng Times Square + mép khối (ngã tư 47 … 42 St lấy từ dữ liệu)
export const TS = { s0: 470, s1: 960, depth: 175 };
const FRONT = CITY.hw + CITY.walk + 0.4, GAP = CITY.side + CITY.sideWalk + 0.4;

function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// mặt tiền kính: lưới cửa sổ (map) + cửa sổ sáng đèn ban đêm (emissiveMap); 1 ô texture = 4 tầng × 4 ô cửa (12 × 14 m)
function facadeTex(kind) {
  const W = 256, H = 256, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d'), r = rng(kind * 97 + 5);
  const [wall, glass, glass2] = [['#2b333b', '#5d7790', '#3a4f63'], ['#a89a83', '#2d3640', '#46525e'], ['#1d2126', '#46596b', '#2a3744']][kind];
  g.fillStyle = wall; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  for (let fy = 0; fy < 4; fy++) for (let fx = 0; fx < 4; fx++) {
    const x = fx * 64 + (kind === 1 ? 10 : 4), y = fy * 64 + (kind === 1 ? 12 : 6), w = kind === 1 ? 44 : 56, h = kind === 1 ? 40 : 52;
    const gr = g.createLinearGradient(x, y, x + w, y + h); gr.addColorStop(0, glass); gr.addColorStop(1, glass2);
    g.fillStyle = gr; g.fillRect(x, y, w, h);
    if (r() < 0.45) { ge.fillStyle = ['#ffd9a0', '#fff1d6', '#cfe4ff'][Math.floor(r() * 3)]; ge.fillRect(x + 2, y + 2, w - 4, h - 4); }
  }
  const mk = (cv) => { const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  return [mk(c), mk(e)];
}

export class TimesSquare {
  constructor(scene, road, city) {
    this.road = road; this.city = city;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.built = false; this.obb = [];
    this.crowd = []; this.near = []; this.density = 1;     // đám đông: density theo chất lượng (Low 0.6)
    this.uTime = { value: 0 }; this.uK = { value: 1 };
    this.mats = [0, 1, 2].map((k) => { const [map, em] = facadeTex(k); return withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: k === 1 ? 0.8 : 0.3, metalness: k === 1 ? 0 : 0.35 })); });
    this.dark = withMist(new THREE.MeshStandardMaterial({ color: 0x1d2024, roughness: 0.6, metalness: 0.3 }));
    this.red = withMist(new THREE.MeshStandardMaterial({ color: 0xc4141c, emissive: 0x8a0008, emissiveIntensity: 0.2, roughness: 0.25 }));
    this.glass = withMist(new THREE.MeshStandardMaterial({ color: 0x9fb8c8, roughness: 0.1, metalness: 0.5, transparent: true, opacity: 0.55 }));
    this.green = withMist(new THREE.MeshStandardMaterial({ color: 0x3d6b2e, roughness: 0.9 }));
    // biển LED: MeshBasic (tự sáng), mỗi biển 1 ô atlas đổi theo thời gian (aAd: ô gốc, lệch pha, giây / hình)
    const atlas = adAtlas(THREE);
    this.adMat = new THREE.MeshBasicMaterial({ map: atlas.texture });
    this.adMat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uTime; sh.uniforms.uK = this.uK;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec3 aAd;\nuniform float uTime;')
        .replace('#include <uv_vertex>', `#include <uv_vertex>
          float cell = mod(aAd.x + floor(uTime / aAd.z + aAd.y), 16.0);
          vMapUv = (uv + vec2(mod(cell, 4.0), 3.0 - floor(cell / 4.0))) / 4.0;`);
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uK;')
        .replace('#include <map_fragment>', '#include <map_fragment>\ndiffuseColor.rgb *= uK;');
    };
    this.adMat.customProgramCacheKey = () => 'ts-ad';
    withMist(this.adMat);
  }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); this.city.exclude = v ? this._excl : null; this.city.extraObb = v ? this.obb : null; }
  get visible() { return this.group.visible; }
  // lamps 0..1: cửa sổ sáng + biển sáng hơn ban đêm
  update(dt, lamps, car) {
    this.uTime.value += dt;
    if (this.built) this._crowd(dt, car);
    this.uK.value = 0.85 + 0.75 * lamps;
    for (const m of this.mats) m.emissiveIntensity = 1.4 * lamps;
    this.red.emissiveIntensity = 0.2 + 1.2 * lamps;
  }

  _build() {
    this.built = true;
    const road = this.road.street, L = NYC.length, base = L, P = {}, r = rng(4242);
    // khung theo đường: 7th Ave đoạn này thẳng => 1 khung cho cả vùng
    road.at(base + TS.s0, P);
    const F = { x: P.x, y: P.y, z: P.z, fx: -Math.sin(P.th), fz: -Math.cos(P.th), rx: Math.cos(P.th), rz: -Math.sin(P.th), th: P.th };
    const W = (s, u) => [F.x + F.fx * (s - TS.s0) + F.rx * u, F.z + F.fz * (s - TS.s0) + F.rz * u];
    const y0 = F.y;
    // vùng loại nhà map Phố (tứ giác thế giới)
    const Q = [W(TS.s0, -TS.depth), W(TS.s1, -TS.depth), W(TS.s1, TS.depth), W(TS.s0, TS.depth)];
    this._excl = (x, z) => { for (let i = 0; i < 4; i++) { const [ax, az] = Q[i], [bx, bz] = Q[(i + 1) % 4]; if ((bx - ax) * (z - az) - (bz - az) * (x - ax) < 0) return false; } return true; };
    if (!this._excl(...W((TS.s0 + TS.s1) / 2, 0))) { Q.reverse(); }
    // khối giữa các ngã tư trong vùng
    const J = NYC.data.junctions.map((j) => j.s).filter((s) => s > TS.s0 - 90 && s < TS.s1 + 90);
    const blocks = [];
    for (let i = 0; i + 1 < J.length; i++) { const a = Math.max(TS.s0, J[i] + GAP), b = Math.min(TS.s1, J[i + 1] - GAP); if (b - a > 20) blocks.push([a, b, i]); }
    const nb = blocks.length;
    // quảng trường: khối đầu (47→46) bên phải = Duffy Square; khối 3 + 4 (45→43) bên trái; khối cuối (43→42) bên trái = tháp
    const plaza = (k, su) => (su > 0 && k === 0) || (su < 0 && (k === 2 || k === 3));
    const tower = (k, su) => su < 0 && k === nb - 1;
    const geo = [[], [], []], ads = [];   // geo[kind] = [[s0, s1, u0, u1, y0, y1]] (toạ độ đường)
    const addBox = (kind, s0, s1, u0, u1, h0, h1) => { (geo[kind] = geo[kind] || []).push([s0, s1, u0, u1, h0, h1]); };
    const obbBox = (s0, s1, u0, u1, h) => { const [x, z] = W((s0 + s1) / 2, (u0 + u1) / 2); this.obb.push(x, z, Math.cos(F.th), Math.sin(F.th), Math.abs(u1 - u0) / 2, Math.abs(s1 - s0) / 2, y0 + h); };   // như obb nhà map Phố (yaw = hướng đường)
    // tòa nhà nhiều bậc lùi: [s0, s1] dọc đường, u0 → u0 + su·d; trả về chiều cao
    const tall = (s0, s1, u0, su, d, hMax, front, north = false) => {
      const kind = Math.floor(r() * 3);
      let h = 0, a = s0, b = s1, u = u0, dd = d;
      const tiers = 1 + Math.floor(r() * 3);
      for (let t = 0; t < tiers; t++) {
        const th = (hMax / tiers) * (0.7 + 0.6 * r()), h1 = h + th;
        addBox(kind, a, b, su > 0 ? u : u - dd, su > 0 ? u + dd : u, h, h1);
        h = h1; const ins = Math.min((b - a) * 0.12, 3); a += ins; b -= ins; u += su * 2.5; dd -= 4; if (dd < 8 || b - a < 8) break;
      }
      obbBox(s0, s1, u0, u0 + su * d, h);
      // biển LED trên mặt tiền nhìn ra đường (1–3 tấm), mặt nhìn về −su
      if (front) {
        // dải biển thấp ngang tầng trệt + 2–4 tấm lớn xếp lên cao
        if (r() < 0.8) ads.push([(s0 + s1) / 2, u0 - su * 0.25, 5.4, s1 - s0 - 1.5, 3.2, su > 0 ? -1 : 1, 0]);
        const n = 2 + Math.floor(r() * 3);
        let yb = 8 + r() * 2;
        for (let i = 0; i < n && yb < h - 6; i++) {
          const w = Math.min(s1 - s0 - 2, 8 + r() * 10), hh = Math.min(h - yb - 2, w * (0.6 + r() * 0.9));
          const sc = s0 + 1 + r() * Math.max(0, s1 - s0 - 2 - w) + w / 2;
          ads.push([sc, u0 - su * 0.25, yb + hh / 2, w, hh, su > 0 ? -1 : 1, 0]);
          yb += hh + 1 + r() * 4;
        }
      }
      // nhà đầu khối: mặt bắc (nhìn về xe đang tới) phủ biển xếp chồng
      if (north) {
        const w = Math.min(d - 2, 16);
        for (let yb = 6; yb < Math.min(h - 6, 70);) { const hh = Math.min(h - 4 - yb, 8 + r() * 10); ads.push([s0 - 0.25, u0 + su * (1 + w / 2), yb + hh / 2, w, hh, 0, 1]); yb += hh + 1 + r() * 3; }
      }
      return h;
    };
    this.zones = [];
    for (const [a, b] of blocks) for (const su of [-1, 1])            // vỉa hè đông người dọc 7th Ave
      this.zones.push({ kind: 'walk', s0: a - 3, s1: b + 3, u0: su > 0 ? CITY.hw + 0.7 : -FRONT + 0.6, u1: su > 0 ? FRONT - 0.6 : -CITY.hw - 0.7, n: Math.round((b - a) / 5), su });
    for (const [a, b, k] of blocks) for (const su of [-1, 1]) {
      if (tower(k, su)) {
        // One Times Square: tháp hẹp cao 110 m, mặt bắc (nhìn về xe đang tới, −s) + mặt nhìn ra đường phủ biển xếp chồng
        const s0 = a + 2, s1 = s0 + 24, u0 = -(FRONT + 2), u1 = u0 - 15;
        addBox(-1, s0, s1, u1, u0, 0, 112); obbBox(s0, s1, u0, u1, 112);
        for (let i = 0; i < 7; i++) {
          const yb = 6 + i * 13.5;
          ads.push([s0 - 0.3, (u0 + u1) / 2, yb + 6, 14.6, 12.5, 0, 1]);                 // mặt bắc (−s)
          ads.push([(s0 + s1) / 2, u0 + 0.3, yb + 6, 23.4, 12.5, 1, 0]);                  // mặt nhìn ra 7th Ave (+u)
        }
        ads.push([s0 - 0.3, (u0 + u1) / 2, 104, 14.6, 10, 0, 1]);
        tall(s1 + 6, b, -(FRONT), -1, 26, 70 + r() * 50, true);
        tall(a, b, -(FRONT + 36), -1, 28, 120 + r() * 80, false);
        continue;
      }
      const uStart = plaza(k, su) ? FRONT + 34 : FRONT;
      // dãy mặt tiền (tòa 18–34 m) + 2 dãy phía sau cao dần
      for (const [uo, hMin, hVar, front] of [[uStart, 35, 90, true], [uStart + 32, 70, 130, false], [uStart + 64, 90, 160, false]]) {
        if (uo > TS.depth - 25) break;
        for (let s = a; s < b - 8;) {
          const w = Math.min(b - s, 18 + r() * 16);
          const fr = front && !plaza(k, su), no = s === a && (fr || uo < FRONT + 40);
          if (b - s - w < 10) { tall(s, b, su * uo, su, 26 + r() * 4, hMin + r() * hVar, fr, no); break; }
          tall(s, s + w, su * uo, su, 26 + r() * 4, hMin + r() * hVar, fr, no);
          s += w + 0.6;
        }
      }
      // quảng trường lát gạch + bàn ghế đỏ, bồn cây
      if (plaza(k, su)) {
        const u0 = su * (FRONT - 0.2), u1 = su * (FRONT + 33);
        this.zones.push({ kind: 'plaza', s0: a + 1, s1: b - 1, u0: Math.min(u0, u1) + 0.5, u1: Math.max(u0, u1) - 0.5, n: Math.round((b - a) * 33 / 24), su });
        geo.plaza = geo.plaza || []; geo.plaza.push([a, b, Math.min(u0, u1), Math.max(u0, u1), 0.2, 0.2]);
        for (let i = 0; i < 18; i++) { const s = a + 4 + r() * (b - a - 8), u = su * (FRONT + 4 + r() * 26); (geo.props = geo.props || []).push(['red', s, u, 0.75, 0.75, 0.75]); }
        for (let s = a + 6; s < b - 6; s += 12) geo.props.push(['green', s, su * (FRONT + 1.6), 1.6, 0.8, 4]);
        // bậc đỏ TKTS (Duffy Square): 13 bậc dâng về phía bắc (−s), nhìn xuống quảng trường phía nam
        if (su > 0) {
          const sB = b - 6, uA = FRONT + 8, uB = FRONT + 24;
          this.zones.push({ kind: 'steps', s0: sB - 12.35, s1: sB - 0.3, u0: uA + 0.5, u1: uB - 0.5, n: 40 });
          for (let i = 0; i < 13; i++) geo.props.push(['redstep', sB - i * 0.95 - 0.475, (uA + uB) / 2, 0.95, (i + 1) * 0.42, uB - uA]);
          geo.props.push(['glass', sB - 13 * 0.95 - 2.5, (uA + uB) / 2, 5, 5.46, uB - uA]);
        }
      }
    }
    // ---- dựng lưới ----
    const box = (B, s0, s1, u0, u1, h0, h1, uvScale) => {
      const C = (s, u, h) => { const [x, z] = W(s, u); return [x, y0 + h, z]; };
      const faces = [
        [[s0, u0], [s1, u0], -1, 'u'], [[s1, u1], [s0, u1], 1, 'u'], [[s1, u0], [s1, u1], 1, 's'], [[s0, u1], [s0, u0], -1, 's']];
      for (const [[sa, ua], [sb, ub], sg, ax] of faces) {
        const n = ax === 'u' ? [F.rx * sg, 0, F.rz * sg] : [F.fx * sg, 0, F.fz * sg], len = Math.hypot(sb - sa, ub - ua);
        quad(B, [C(sa, ua, h0), C(sb, ub, h0), C(sb, ub, h1), C(sa, ua, h1)], n, uvScale ? [[0, h0 / 14], [len / 12, h0 / 14], [len / 12, h1 / 14], [0, h1 / 14]] : null);
      }
      quad(B, [C(s0, u0, h1), C(s1, u0, h1), C(s1, u1, h1), C(s0, u1, h1)], [0, 1, 0], uvScale ? [[0, 0], [0.2, 0], [0.2, 0.2], [0, 0.2]] : null);
    };
    const mesh = (B, mat, shadow = true) => {
      if (!B.idx.length) return;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2)); g.setIndex(B.idx);
      const m = new THREE.Mesh(g, mat); m.castShadow = shadow; m.receiveShadow = true; m.frustumCulled = false; this.group.add(m);
    };
    for (let k = 0; k < 3; k++) { const B = mk(); for (const b of geo[k]) box(B, ...b, true); mesh(B, this.mats[k]); }
    { const B = mk(); for (const b of geo[-1] || []) box(B, ...b, false); mesh(B, this.dark); }
    { const B = mk(); for (const [a, b, u0, u1, h] of geo.plaza || []) { const C = (s, u) => { const [x, z] = W(s, u); return [x, y0 + h, z]; }; quad(B, [C(a, u0), C(b, u0), C(b, u1), C(a, u1)], [0, 1, 0], [[u0 / 2, a / 2], [u0 / 2, b / 2], [u1 / 2, b / 2], [u1 / 2, a / 2]]); } mesh(B, this.city.walkMat, false); }
    for (const [key, mat] of [['red', this.red], ['redstep', this.red], ['green', this.green], ['glass', this.glass]]) {
      const B = mk();
      for (const [kk, s, u, ls, h, lu] of geo.props || []) if (kk === key) box(B, s - ls / 2, s + ls / 2, u - lu / 2, u + lu / 2, 0.2, 0.2 + h, false);
      mesh(B, mat);
    }
    // biển LED: InstancedMesh mặt phẳng, xoay theo hướng mặt (dir u: ±1 nhìn về ±u; dir s: 1 nhìn về −s)
    const pg = new THREE.PlaneGeometry(1, 1);
    const im = new THREE.InstancedMesh(pg, this.adMat, ads.length), aAd = new Float32Array(ads.length * 3);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(), sc = new THREE.Vector3();
    ads.forEach(([s, u, y, w, h, du, ds], i) => {
      const [x, z] = W(s, u);
      const nx = du ? F.rx * du : -F.fx * ds, nz = du ? F.rz * du : -F.fz * ds;      // pháp tuyến mặt biển
      q.setFromAxisAngle(up, Math.atan2(nx, nz));
      m4.compose(v.set(x, y0 + y, z), q, sc.set(w, h, 1)); im.setMatrixAt(i, m4);
      aAd.set([Math.floor(r() * 16), r() * 7, 5 + r() * 6], i * 3);
    });
    pg.setAttribute('aAd', new THREE.InstancedBufferAttribute(aAd, 3));
    im.frustumCulled = false; this.group.add(im);
    this.W = W; this.F = F; this.y0 = y0;
    this._spawnCrowd();
    this.count = { buildings: geo[0].length + geo[1].length + geo[2].length, ads: ads.length };
  }
}

const SHIRTS = ['#e9e6df', '#2b2d33', '#6d7d8f', '#8c2f2f', '#c9a96e', '#3d5f4b', '#d7c6b0', '#5a4a6e', '#b8c4d6', '#1f3552', '#d9482b', '#f2c94c', '#2f80ed'];
// ---- đám đông: tản bộ trong vùng (quảng trường / vỉa hè), đứng ngắm biển, giơ điện thoại chụp; trên bậc TKTS đứng nhìn về phía nam ----
TimesSquare.prototype._spawnCrowd = function () {
  const r = Math.random;
  this.crowd = [];
  for (const z of this.zones) for (let i = 0; i < Math.round(z.n * this.density); i++) {
    const p = { z, s: z.s0 + r() * (z.s1 - z.s0), u: z.u0 + r() * (z.u1 - z.u0), ts: 0, tu: 0, speed: 0.9 + r() * 0.6, wait: r() * 6, ph: r() * 6.28,
      moving: 0, acc: r() < 0.2 ? 2 : r() < 0.35 ? 1 : 0, color: SHIRTS[Math.floor(r() * SHIRTS.length)], ds: 1, du: 0, x: 0, y: 0, z: 0, fx: 0, fz: 1 };
    this._target(p);
    this.crowd.push(p);
  }
};
TimesSquare.prototype._target = function (p) {
  const z = p.z, r = Math.random;
  if (z.kind === 'walk') { p.ts = Math.min(z.s1, Math.max(z.s0, p.s + (r() < 0.5 ? -1 : 1) * (20 + r() * 60))); p.tu = z.u0 + r() * (z.u1 - z.u0); }
  else { p.ts = z.s0 + r() * (z.s1 - z.s0); p.tu = z.u0 + r() * (z.u1 - z.u0); }
};
TimesSquare.prototype._crowd = function (dt, car) {
  const W = this.W, F = this.F, near = this.near;
  near.length = 0;
  for (const p of this.crowd) {
    const z = p.z;
    if (z.kind === 'steps') { p.moving = 0; p.ds = 1; p.du = 0; }
    else if (p.wait > 0) {                                            // đứng: ngắm biển (nhìn ra đường / lên cao), có người giơ điện thoại
      p.wait -= dt; p.moving = 0;
      if (p.wait <= 0) this._target(p);
    } else {
      const ds = p.ts - p.s, du = p.tu - p.u, L = Math.hypot(ds, du);
      if (L < 0.3) { p.wait = z.kind === 'plaza' ? 3 + Math.random() * 14 : Math.random() < 0.15 ? 2 + Math.random() * 5 : 0; p.ds = Math.random() - 0.5; p.du = -(z.su || 1); if (!p.wait) this._target(p); }
      else { const v = Math.min(L, p.speed * dt); p.s += ds / L * v; p.u += du / L * v; p.ds = ds / L; p.du = du / L; p.ph += p.speed * dt * 5.2; p.moving = 1; }
    }
    const [x, zz] = W(p.s, p.u);
    if (car && Math.abs(x - car.x) + Math.abs(zz - car.z) > 230) continue;     // chỉ vẽ người quanh xe
    let y = this.y0 + 0.2;
    if (z.kind === 'steps') y += (Math.floor((z.s1 + 0.3 - p.s) / 0.95) + 1) * 0.42;
    const l = Math.hypot(p.ds, p.du) || 1;
    p.x = x; p.y = y; p.z = zz; p.fx = (F.fx * p.ds + F.rx * p.du) / l; p.fz = (F.fz * p.ds + F.rz * p.du) / l;
    near.push(p);
  }
};

const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
function quad(B, V, N, uvs) {
  const b = B.pos.length / 3;
  for (let i = 0; i < 4; i++) { B.pos.push(...V[i]); B.nor.push(...N); B.uv.push(...(uvs ? uvs[i] : [0, 0])); }
  const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
  if ((ay * bz - az * by) * N[0] + (az * bx - ax * bz) * N[1] + (ax * by - ay * bx) * N[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
}
