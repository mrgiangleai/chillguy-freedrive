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
let FRONT = 0, GAP = 0;              // theo kích thước phố lúc dựng (NYC_DIM)

function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// mặt tiền kính: lưới cửa sổ (map) + cửa sổ sáng đèn ban đêm (emissiveMap); 1 ô texture = 4 tầng × 4 ô cửa (12 × 14 m)
export function facadeTex(kind) {
  const W = 256, H = 256, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d'), r = rng(kind * 97 + 5);
  const [wall, glass, glass2] = [['#2b333b', '#5d7790', '#3a4f63'], ['#a89a83', '#2d3640', '#46525e'], ['#1d2126', '#46596b', '#2a3744'], ['#20262c', '#3c4d5c', '#27333f'], ['#7b4433', '#262b31', '#3a4048']][kind];   // 4: gạch đỏ nâu (nhà thấp)
  g.fillStyle = wall; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  for (let fy = 0; fy < 4; fy++) for (let fx = 0; fx < 4; fx++) {
    const pun = kind === 1 || kind === 4, x = fx * 64 + (pun ? 10 : 4), y = fy * 64 + (pun ? 12 : 6), w = pun ? 44 : 56, h = pun ? 40 : 52;   // tường đá / gạch: cửa sổ đục lỗ
    const gr = g.createLinearGradient(x, y, x + w, y + h); gr.addColorStop(0, glass); gr.addColorStop(1, glass2);
    g.fillStyle = gr; g.fillRect(x, y, w, h);
    if (r() < 0.45) { ge.fillStyle = ['#ffd9a0', '#fff1d6', '#cfe4ff'][Math.floor(r() * 3)]; ge.fillRect(x + 2, y + 2, w - 4, h - 4); }
  }
  const mk = (cv) => { const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  return [mk(c), mk(e)];
}

// màu trung bình 16 ô atlas: thu nhỏ 64×64 (mỗi ô 16×16), kéo kênh lớn nhất = 1 (giữ sắc) rồi pha 15 % trắng
function adColors(tex) {
  const N = 64, cv = document.createElement('canvas'), g = cv.getContext('2d');
  cv.width = cv.height = N;
  g.drawImage(tex.image, 0, 0, N, N);
  const d = g.getImageData(0, 0, N, N).data, out = [], white = new THREE.Color(1, 1, 1);
  for (let i = 0; i < 16; i++) {
    const cx = (i % 4) * 16, cy = Math.floor(i / 4) * 16;
    let r = 0, gg = 0, b = 0;
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const k = ((cy + y) * N + cx + x) * 4; r += d[k]; gg += d[k + 1]; b += d[k + 2]; }
    const c = new THREE.Color().setRGB(r / 65280, gg / 65280, b / 65280, THREE.SRGBColorSpace);
    out.push(c.multiplyScalar(1 / (Math.max(c.r, c.g, c.b) || 1)).lerp(white, 0.15));
  }
  return out;
}

export class TimesSquare {
  constructor(scene, road, city) {
    this.road = road; this.city = city;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.built = false; this.obb = [];
    this.crowd = []; this.near = []; this.density = 1;     // đám đông: density theo chất lượng (Low 0.6)
    this.uTime = { value: 0 }; this.uK = { value: 1 };
    this.signK = 1; this.winK = 1;                       // bảng 💡 Lighting: độ sáng biển LED / cửa sổ nhà (main applyLightTune)
    this.mats = [0, 1, 2, 3].map((k) => { const [map, em] = facadeTex(k); return withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: k === 1 ? 0.8 : 0.3, metalness: k === 1 ? 0 : 0.35 })); });
    // kính gương (kiểu 3, ~35 % tòa): phản chiếu cảnh Times Square chụp bằng CubeCamera đặt giữa phố (chụp lại khi trời đổi sáng / mỗi 15 s)
    this.cubeRT = new THREE.WebGLCubeRenderTarget(256, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    this.cube = new THREE.CubeCamera(2, 2500, this.cubeRT);
    for (const c of this.cube.children) c.layers.enableAll();
    this.mirror = true; this._capT = 0; this._capL = -1;
    this.setMirror(true);
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
    this.adColors = adColors(atlas.texture);
    // đèn điểm màu lấy từ biển (tạo 1 lần, không thêm / bớt để số đèn trong shader luôn cố định) — như đèn hiệu xe cảnh sát:
    // ánh sáng thật rọi lên mặt đường, xe, người (thay vệt dán cộng màu trên mặt đất trước đây: lốm đốm, phủ cả bánh xe)
    this.plights = [];
    for (let i = 0; i < 2; i++) {                        // 2 đèn (4 đèn làm mỗi khung hình nặng hẳn — máy ảo quá 30 s / khung)
      const l = new THREE.PointLight(0xffffff, 0, 55, 1.3);
      l.userData = { tc: new THREE.Color(), tp: new THREE.Vector3(), ti: 0 };
      this.group.add(l); this.plights.push(l);
    }
    this.adInfo = []; this._lt = 0;
  }
  // bật / tắt phản chiếu kính (bảng 🚦 ở map New York)
  setMirror(on) {
    this.mirror = on;
    const m = this.mats[3];
    Object.assign(m, on ? { envMap: this.cubeRT.texture, envMapIntensity: 1.1, roughness: 0.06, metalness: 0.9 } : { envMap: null, roughness: 0.3, metalness: 0.35 });
    m.needsUpdate = true;
    this._capL = -1;
  }
  // chụp lại cảnh xung quanh cho kính gương: lần đầu, khi độ sáng đèn đổi > 0.12, hoặc mỗi 15 s
  capture(renderer, scene, dt, lamps) {
    if (!this.built || !this.mirror || !this.group.visible) return;
    this._capT -= dt;
    if (this._capL >= 0 && this._capT > 0 && Math.abs(lamps - this._capL) < 0.12) return;
    this._capT = 15; this._capL = lamps;
    const [x, z] = this.W((TS.s0 + TS.s1) / 2, 0);
    this.cube.position.set(x, this.y0 + 22, z);
    this.mats[3].envMap = null;                       // không tự phản chiếu chính mình khi chụp
    this.cube.update(renderer, scene);
    this.mats[3].envMap = this.cubeRT.texture;
  }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); this.city.exclude = v ? this._excl : null; this.city.extraObb = v ? this.obb : null; }
  get visible() { return this.group.visible; }
  get excl() { return this._excl; }
  // lamps 0..1: cửa sổ sáng + biển sáng hơn ban đêm
  update(dt, lamps, car, carS) {
    this.carS = carS;
    this.uTime.value += dt;
    if (this.built) this._crowd(dt, car);
    this.uK.value = (0.85 + 0.75 * lamps) * this.signK;
    for (const m of this.mats) m.emissiveIntensity = (m === this.mats[3] && this.mirror ? 0.8 : 1.4) * lamps * this.winK;
    this.red.emissiveIntensity = 0.2 + 1.2 * lamps;
    if (this.built) this._lights(dt, lamps, car);
  }
  // 2 đèn điểm: 0.25 s chọn lại 2 biển lớn gần xe nhất, mỗi khung hình làm mượt màu + cường độ
  _lights(dt, lamps, car) {
    const P = this.plights, k = 1 - Math.exp(-dt * 4), t = this.uTime.value, C = this.adColors;
    if (!car) { for (const l of P) l.intensity = 0; return; }
    this._lt -= dt;
    if (this._lt <= 0) {
      this._lt = 0.25;
      const cand = [];
      for (const a of this.adInfo) if (a.w * a.h > 60) cand.push([(a.x - car.x) ** 2 + (a.z - car.z) ** 2, a]);
      cand.sort((p, q) => p[0] - q[0]);
      for (let i = 0; i < P.length; i++) {
        const u = P[i].userData, a = cand[i] && cand[i][1];
        if (!a) { u.ti = 0; continue; }
        u.ti = 70 * this.signK * (0.15 + 0.85 * lamps);
        u.tc.copy(C[((a.base + Math.floor(t / a.rate + a.phase)) % 16 + 16) % 16]);
        u.tp.set(a.x + a.nx * 7, Math.min(a.y, this.y0 + 9), a.z + a.nz * 7);   // hạ thấp, ra trước biển => quầng màu rõ trên đường + vỉa hè
      }
    }
    for (const l of P) {
      const u = l.userData;
      l.position.lerp(u.tp, k); l.color.lerp(u.tc, k); l.intensity += (u.ti - l.intensity) * k;
    }
  }

  _build() {
    this.built = true;
    FRONT = CITY.hw + CITY.walk + 0.4; GAP = CITY.side + CITY.sideWalk + 0.4;
    const road = this.road.street, L = NYC.length, base = L, P = {}, r = rng(4242);
    // khung theo đường: 7th Ave đoạn này thẳng => 1 khung cho cả vùng
    road.at(base + TS.s0, P);
    const F = { x: P.x, y: P.y, z: P.z, fx: -Math.sin(P.th), fz: -Math.cos(P.th), rx: Math.cos(P.th), rz: -Math.sin(P.th), th: P.th };
    // vị trí theo khung đường tại chính s (7th Ave đoạn này lệch ~3.5 m so với đường thẳng => không lấn vỉa hè)
    const PW = {}, W = (s, u) => { road.at(base + s, PW); return [PW.x + Math.cos(PW.th) * u, PW.z - Math.sin(PW.th) * u]; };
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
    // Broadway: đường chéo cắt 7th Ave quanh s = 696 — bỏ nhà / biển trong 14 m quanh tim đường (dải đi bộ bên dưới)
    const BWAY = NYC.data.broadway;
    const segDist = (x, z, ax, az, bx, bz) => {
      const dx = bx - ax, dz = bz - az, dd = dx * dx + dz * dz || 1, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / dd));
      return Math.hypot(x - ax - dx * t, z - az - dz * t);
    };
    const onBway = (x, z) => !!BWAY && segDist(x, z, BWAY[0][0], BWAY[0][1], BWAY[1][0], BWAY[1][1]) < 14;
    // tòa nhà nhiều bậc lùi: [s0, s1] dọc đường, u0 → u0 + su·d; trả về chiều cao
    const tall = (s0, s1, u0, su, d, hMax, front, north = false) => {
      // nằm trong dải Broadway: không dựng nhà (và không có biển của nó)
      if (BWAY) {
        const ua = Math.min(u0, u0 + su * d), ub = Math.max(u0, u0 + su * d), [mx, mz] = W((s0 + s1) / 2, (ua + ub) / 2);
        let hit = onBway(mx, mz);
        for (let i = 0; !hit && i < 4; i++) {
          const [x, z] = W(i < 2 ? s0 : s1, i % 2 ? ub : ua);
          hit = onBway(x, z);
        }
        if (hit) return 0;
      }
      const kind = r() < 0.35 ? 3 : Math.floor(r() * 3);
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
    // người qua đường ở các ngã tư giữa vùng: đứng chờ 2 bên, qua đường theo đèn ngang xanh
    for (const j of NYC.data.junctions) if (!j.corner && j.s > TS.s0 && j.s < TS.s1) this.zones.push({ kind: 'cross', J: j.s, n: 14 });
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
    for (let k = 0; k < 4; k++) { const B = mk(); for (const b of geo[k] || []) box(B, ...b, true); mesh(B, this.mats[k]); }
    { const B = mk(); for (const b of geo[-1] || []) box(B, ...b, false); mesh(B, this.dark); }
    { const B = mk(); for (const [a, b, u0, u1, h] of geo.plaza || []) { const C = (s, u) => { const [x, z] = W(s, u); return [x, y0 + h, z]; }; quad(B, [C(a, u0), C(b, u0), C(b, u1), C(a, u1)], [0, 1, 0], [[u0 / 2, a / 2], [u0 / 2, b / 2], [u1 / 2, b / 2], [u1 / 2, a / 2]]); } mesh(B, this.city.walkMat, false); }
    for (const [key, mat] of [['red', this.red], ['redstep', this.red], ['green', this.green], ['glass', this.glass]]) {
      const B = mk();
      for (const [kk, s, u, ls, h, lu] of geo.props || []) if (kk === key) box(B, s - ls / 2, s + ls / 2, u - lu / 2, u + lu / 2, 0.2, 0.2 + h, false);
      mesh(B, mat);
    }
    // ---- Broadway: dải đi bộ chéo cắt 7th Ave (lát gạch ngoài lòng đường, vạch kẻ trắng qua đường) ----
    if (BWAY) {
      const [ax, az] = BWAY[0], [bx, bz] = BWAY[1];
      const dx = bx - ax, dz = bz - az, len = Math.hypot(dx, dz), ux = dx / len, uz = dz / len, px = -uz, pz = ux;
      const P6 = road.at(base + 696, {}), r6x = Math.cos(P6.th), r6z = -Math.sin(P6.th);
      const uk = P6.x * r6x + P6.z * r6z, half = 12, edge = CITY.hw + 0.3;     // u = r6·(p − P6)
      const U = (x, z) => x * r6x + z * r6z - uk;
      const PB = mk();
      for (let t = 0; t + 2 <= len + 1e-6; t += 2) {                            // từng mảnh 2 m: sàn 24 m ngang dải, cắt đúng mép đường
        const uc = U(ax + ux * (t + 1), az + uz * (t + 1));
        if (Math.abs(uc) <= edge) continue;
        const sgn = uc > 0 ? 1 : -1, a0 = t, a1 = t + 2;
        const V = [
          [ax + ux * a0 + px * half, y0 + 0.21, az + uz * a0 + pz * half],
          [ax + ux * a0 - px * half, y0 + 0.21, az + uz * a0 - pz * half],
          [ax + ux * a1 - px * half, y0 + 0.21, az + uz * a1 - pz * half],
          [ax + ux * a1 + px * half, y0 + 0.21, az + uz * a1 + pz * half]];
        polyUp(PB, clipPlane(V, sgn * r6x, sgn * r6z, edge + sgn * uk), [0, 1, 0], true);
      }
      mesh(PB, this.city.walkMat, false);
      // vạch kẻ ngang dải (0,5 m mỗi 1,1 m) trên lòng đường; 2 đầu dải nằm dưới vỉa hè nên bị che
      const SB = mk(), stripeMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e2, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -4 });
      const f6x = -Math.sin(P6.th), f6z = -Math.cos(P6.th), fk = P6.x * f6x + P6.z * f6z, xw = CITY.side + CITY.sideWalk + 4;
      const nearJ = NYC.data.junctions.filter((j) => !j.corner && Math.abs(j.s - 696) < 80).map((j) => j.s - 696);
      for (let t = 0.55; t < len; t += 1.1) {
        if (Math.abs(U(ax + ux * t, az + uz * t)) > CITY.hw) continue;
        const sa = (ax + ux * t) * f6x + (az + uz * t) * f6z - fk;               // vị trí dọc tuyến so với s 696
        if (nearJ.some((d) => Math.abs(sa - d) < xw)) continue;          // không chồng lên vạch qua đường của ngã tư (45 St)
        const a0 = t - 0.25, a1 = t + 0.25;
        polyUp(SB, [
          [ax + ux * a0 + px * half, y0 + 0.06, az + uz * a0 + pz * half],
          [ax + ux * a0 - px * half, y0 + 0.06, az + uz * a0 - pz * half],
          [ax + ux * a1 - px * half, y0 + 0.06, az + uz * a1 - pz * half],
          [ax + ux * a1 + px * half, y0 + 0.06, az + uz * a1 + pz * half]], [0, 1, 0], false);
      }
      mesh(SB, stripeMat, false);
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
      const cell0 = Math.floor(r() * 16), phase = r() * 7, rate = 5 + r() * 6;
      aAd.set([cell0, phase, rate], i * 3);
      this.adInfo.push({ x, y: y0 + y, z, nx, nz, w, h, base: cell0, phase, rate });
    });
    pg.setAttribute('aAd', new THREE.InstancedBufferAttribute(aAd, 3));
    im.frustumCulled = false; this.group.add(im);
    // biển cong bọc góc nhà ở 2 đầu mỗi khối (1/4 trụ R = 5, mặt đường + mặt phố ngang)
    {
      const boards = [];
      for (const [a, b, k] of blocks) for (const su of [-1, 1]) {
        if (plaza(k, su) || tower(k, su)) continue;
        boards.push([a, su, -1], [b, su, 1]);
      }
      const R = 5, cn = boards.length;
      if (cn) {
        const cg = new THREE.CylinderGeometry(R + 0.3, R + 0.3, 1, 12, 1, true, 0, Math.PI / 2);
        const cim = new THREE.InstancedMesh(cg, this.adMat, cn), cAd = new Float32Array(cn * 3);
        const Y = new THREE.Vector3(0, 1, 0), X = new THREE.Vector3(), Z = new THREE.Vector3(), M = new THREE.Matrix4();
        boards.forEach(([end, su, ds], i) => {
          const [wx, wz] = W(end, su * FRONT);
          const d1x = -su * F.rx, d1z = -su * F.rz, d2x = F.fx * ds, d2z = F.fz * ds;   // D1 về phía đường, D2 về phía phố ngang
          // cross(D2, up) = (−d2z, 0, d2x) bằng D1 => (X = D2, Y = up, Z = D1) là hệ phải
          const right = -d2z * d1x + d2x * d1z > 0.5;
          X.set(right ? d2x : d1x, 0, right ? d2z : d1z);
          Z.set(right ? d1x : d2x, 0, right ? d1z : d2z);
          const cx = wx - (d1x + d2x) * R, cz = wz - (d1z + d2z) * R;                    // C = góc − D1·R − D2·R
          M.makeBasis(X, Y, Z); M.setPosition(cx, y0 + 13, cz); M.scale(new THREE.Vector3(1, 14, 1));
          cim.setMatrixAt(i, M);
          const cell0 = Math.floor(r() * 16), phase = r() * 7, rate = 5 + r() * 6;
          cAd.set([cell0, phase, rate], i * 3);
          if (this.adInfo) {
            const sx = d1x + d2x, sz = d1z + d2z, sl = Math.hypot(sx, sz) || 1;
            this.adInfo.push({ x: cx + sx * R * 0.7, y: y0 + 13, z: cz + sz * R * 0.7, nx: sx / sl, nz: sz / sl, w: 12, h: 14, base: cell0, phase, rate });
          }
        });
        cg.setAttribute('aAd', new THREE.InstancedBufferAttribute(cAd, 3));
        cim.frustumCulled = false; this.group.add(cim);
      }
    }
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
    if (z.kind === 'cross') {                                        // đứng chờ ở 2 mép vỉa hè của vạch qua đường
      const side = i % 2 ? 1 : -1;
      this.crowd.push({ zn: z, s: z.J - 8.4 + (r() - 0.5) * 3.2, u: side * (CITY.hw + 0.8 + r() * 1.8), ts: 0, tu: 0, speed: 1.3 + r() * 0.4, wait: 0, ph: r() * 6.28,
        moving: 0, acc: r() < 0.2 ? 2 : r() < 0.35 ? 1 : 0, color: SHIRTS[Math.floor(r() * SHIRTS.length)], ds: 0, du: -side, x: 0, y: 0, z: 0, fx: 0, fz: 1,
        side, delay: r() * 1.5, state: 'wait' });
      continue;
    }
    const p = { zn: z, s: z.s0 + r() * (z.s1 - z.s0), u: z.u0 + r() * (z.u1 - z.u0), ts: 0, tu: 0, speed: 0.9 + r() * 0.6, wait: r() * 6, ph: r() * 6.28,
      moving: 0, acc: r() < 0.2 ? 2 : r() < 0.35 ? 1 : 0, color: SHIRTS[Math.floor(r() * SHIRTS.length)], ds: 1, du: 0, x: 0, y: 0, z: 0, fx: 0, fz: 1 };
    this._target(p);
    this.crowd.push(p);
  }
};
TimesSquare.prototype._target = function (p) {
  const z = p.zn, r = Math.random;
  if (z.kind === 'walk') { p.ts = Math.min(z.s1, Math.max(z.s0, p.s + (r() < 0.5 ? -1 : 1) * (20 + r() * 60))); p.tu = z.u0 + r() * (z.u1 - z.u0); }
  else { p.ts = z.s0 + r() * (z.s1 - z.s0); p.tu = z.u0 + r() * (z.u1 - z.u0); }
};
TimesSquare.prototype._crowd = function (dt, car) {
  const W = this.W, F = this.F, near = this.near;
  near.length = 0;
  for (const p of this.crowd) {
    const z = p.zn;
    if (z.kind === 'steps') { p.moving = 0; p.ds = 1; p.du = 0; }
    else if (z.kind === 'cross') {                                    // chờ đèn rồi qua 7th Ave theo từng đợt
      if (!p.moving) {
        p.ds = 0; p.du = -p.side;                                     // quay mặt về phía đường
        const ph = this.carS === undefined ? null : this.city._phase(this.road.junctionIndex(Math.floor(this.carS / NYC.length) * NYC.length + z.J));
        if (ph && ph.cross === 0 && ph.crossEnd - ph.t > 6) {
          p.delay -= dt;
          if (p.delay <= 0) { p.tu = -p.side * (CITY.hw + 0.8 + Math.random() * 1.8); p.moving = 1; p.state = 'walk'; }
        } else p.delay = Math.random() * 1.5;                         // đèn đỏ: chờ, đợt xanh sau trễ lại ngẫu nhiên
      } else {
        const dir = p.tu > p.u ? 1 : -1;
        p.u += dir * p.speed * dt; p.ph += p.speed * dt * 5.2;
        p.ds = 0; p.du = dir;
        if ((dir > 0 && p.u >= p.tu) || (dir < 0 && p.u <= p.tu)) {    // tới mép bên kia: đổi bên, chờ đèn xanh kế
          p.u = p.tu; p.moving = 0; p.state = 'wait'; p.side = -p.side;
          p.du = -p.side; p.ds = 0; p.delay = Math.random() * 1.5;
        }
      }
    }
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
    else if (z.kind === 'cross' && Math.abs(p.u) <= CITY.hw) y = this.y0 + 0.05;      // đang ở trên lòng đường
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
// đa giác lồi phẳng (giữ nguyên y): tam giác quạt, pháp tuyến N; uv = world x/2, z/2 nếu cần
function polyUp(B, V, N, uv) {
  if (V.length < 3) return;
  const b = B.pos.length / 3;
  for (const P of V) { B.pos.push(P[0], P[1], P[2]); B.nor.push(...N); B.uv.push(...(uv ? [P[0] / 2, P[2] / 2] : [0, 0])); }
  for (let i = 1; i + 1 < V.length; i++) {
    const A = V[0], C = V[i], D = V[i + 1], cy = (C[2] - A[2]) * (D[0] - A[0]) - (C[0] - A[0]) * (D[2] - A[2]);   // thành phần y của (C−A)×(D−A)
    if (cy >= 0) B.idx.push(b, b + i, b + i + 1); else B.idx.push(b, b + i + 1, b + i);
  }
}
// cắt đa giác lồi nằm ngang bằng nửa mặt phẳng nx·x + nz·z ≥ d
function clipPlane(V, nx, nz, d) {
  const out = [];
  for (let i = 0; i < V.length; i++) {
    const A = V[i], Bp = V[(i + 1) % V.length], da = nx * A[0] + nz * A[2] - d, db = nx * Bp[0] + nz * Bp[2] - d;
    if (da >= 0) out.push(A);
    if ((da >= 0) !== (db >= 0)) { const t = da / (da - db); out.push([A[0] + (Bp[0] - A[0]) * t, A[1] + (Bp[1] - A[1]) * t, A[2] + (Bp[2] - A[2]) * t]); }
  }
  return out;
}
