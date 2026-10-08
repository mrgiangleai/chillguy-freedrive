import * as THREE from 'three';
import { CITY } from './road.js';
import { withMist } from './mist.js';
import { houseGeometry } from './town.js';

// Map Phố (kiểu phố Nhật): dựng theo từng "khối phố" n = đoạn đường giữa ngã tư n và n+1 (road.junction).
// Mỗi khối: đường ngang + vỉa hè + vạch kẻ của ngã tư n, vạch kẻ đường chính trong khối, vỉa hè hai bên, nhà (dãy mặt tiền,
// dãy nhìn ra đường ngang, nhà bên trong khối tới DEPTH m), biển hiệu dọc, máy bán nước, cột điện + dây điện.
// Nhà = hộp / nhà mái dốc (instancing); mặt tiền vẽ bằng shader: tầng trệt cửa hàng (kính + biển chữ từ atlas), cửa sổ theo
// kiểu nhà (nhà phố hỗn hợp / chung cư có ban công / văn phòng dải kính / nhà ở), ban đêm đèn cửa sổ + biển hiệu sáng.
// Mặt đất phẳng y = 0 (TERRAIN_MAPS.city), đường ở y = 0.05, vỉa hè cao 0.2.
const DEPTH = 180;                  // nhà trải ra hai bên tới cách tim đường (m)
const AHEAD = 1150, BEHIND = 260;
const WALK_Y = 0.2, MARK_Y = 0.055;
const POLE_GAP = 30;
const FONT = '"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif';
// biển ngang cửa hàng: [chữ, nền, màu chữ]
const SHOPS = [
  ['コンビニ', '#1d8f4e', '#ffffff'], ['ベーカリー', '#f3e2c4', '#7a4a1f'], ['カフェ', '#3b2a22', '#f2d7a0'], ['ドラッグ', '#1554a8', '#ffe14a'],
  ['ラーメン', '#c8231c', '#ffffff'], ['そば・うどん', '#f4efe2', '#202020'], ['クリーニング', '#2a7fc0', '#ffffff'], ['花屋', '#f6c8d4', '#6a2440'],
  ['書店', '#24456e', '#ffffff'], ['居酒屋', '#2b2b2b', '#ff9b3d'], ['寿司', '#f6f2e8', '#b3151a'], ['美容室', '#ffffff', '#333333'],
  ['不動産', '#ffd23a', '#1b3a7a'], ['メガネ', '#e6e9ee', '#1d4f91'], ['焼肉', '#151515', '#ff4b2b'], ['ドーナツ', '#ff86b4', '#ffffff'],
];
// biển dọc treo đầu hồi
const VSIGNS = [
  ['ラーメン', '#c8231c', '#ffffff'], ['カラオケ', '#6b2bd9', '#ffffff'], ['居酒屋', '#1b1b1b', '#ffb03a'], ['薬', '#1554a8', '#ffffff'],
  ['歯科', '#ffffff', '#1b6fb8'], ['焼肉', '#2a0d0a', '#ff5a2a'], ['ホテル', '#0f2d55', '#9fe0ff'], ['喫茶', '#4a2e1f', '#ffe3b0'],
  ['不動産', '#ffd23a', '#112233'], ['寿司', '#ffffff', '#b3151a'], ['麻雀', '#0d5a2f', '#ffffff'], ['整骨院', '#ffffff', '#c21f3a'],
  ['美容室', '#f0e6ff', '#5a2a8a'], ['中華', '#d42a1f', '#ffd84a'], ['クリニック', '#e8f6ff', '#0d6aa8'], ['学習塾', '#ff7a00', '#ffffff'],
];
// màu tường (sRGB): gạch men be / trắng / xám nhạt / nâu / kem / xám xanh / xám sẫm / đất nung
const WALLS = [[0.76, 0.69, 0.59], [0.86, 0.86, 0.84], [0.67, 0.68, 0.69], [0.47, 0.35, 0.28], [0.87, 0.81, 0.69], [0.63, 0.69, 0.73], [0.38, 0.39, 0.41], [0.64, 0.45, 0.36]];

function rng(seed) {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// atlas biển ngang: 16 hàng × (512×48)
function shopSignTexture() {
  return canvasTex(512, 16 * 48, (g, W) => {
    SHOPS.forEach(([txt, bg, fg], i) => {
      const y = i * 48;
      g.fillStyle = bg; g.fillRect(0, y, W, 48);
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, y, W, 3); g.fillRect(0, y + 45, W, 3);
      g.font = `bold 32px ${FONT}`;
      const tw = g.measureText(txt).width;
      g.save();
      g.translate(W / 2, y + 25);
      if (tw > W * 0.6) g.scale(W * 0.6 / tw, 1);
      g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(txt, 0, 0);
      g.restore();
    });
  });
}

// atlas biển dọc: 16 cột × (64×512), chữ xếp dọc
function verticalSignTexture() {
  return canvasTex(1024, 512, (g) => {
    VSIGNS.forEach(([txt, bg, fg], i) => {
      const x = i * 64, chars = [...txt];
      g.fillStyle = bg; g.fillRect(x, 0, 64, 512);
      g.strokeStyle = fg; g.globalAlpha = 0.5; g.lineWidth = 3; g.strokeRect(x + 5, 5, 54, 502); g.globalAlpha = 1;
      const fs = Math.min(46, 440 / chars.length);
      g.font = `bold ${fs}px ${FONT}`;
      g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
      const y0 = 256 - (chars.length - 1) * fs * 0.55;
      chars.forEach((ch, k) => g.fillText(ch, x + 32, y0 + k * fs * 1.1));
    });
  });
}

// gạch lát vỉa hè: 1 ô texture = 2 m × 2 m, gạch 0.5 m
function pavingTexture() {
  const t = canvasTex(256, 256, (g) => {
    const r = rng(7);
    for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) {
      const v = 160 + Math.floor(r() * 22);
      g.fillStyle = `rgb(${v},${v - 2},${v - 8})`; g.fillRect(i * 64, j * 64, 64, 64);
    }
    const img = g.getImageData(0, 0, 256, 256);
    for (let i = 0; i < img.data.length; i += 4) { const n = (r() - 0.5) * 18; img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n; }
    g.putImageData(img, 0, 0);
    g.fillStyle = 'rgba(60,58,54,0.55)';
    for (let k = 0; k < 4; k++) { g.fillRect(k * 64, 0, 2, 256); g.fillRect(0, k * 64, 256, 2); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// mặt trước máy bán nước: hàng lon nước + khe lấy hàng
function vendingTexture() {
  return canvasTex(128, 256, (g) => {
    g.fillStyle = '#f4f4f2'; g.fillRect(0, 0, 128, 256);
    g.fillStyle = '#c62026'; g.fillRect(0, 0, 128, 18);
    const cols = ['#d33', '#25a', '#e90', '#2a5', '#fff', '#713', '#39c', '#cb2'];
    const r = rng(3);
    for (let row = 0; row < 3; row++) {
      g.fillStyle = '#dfe9f0'; g.fillRect(8, 24 + row * 38, 112, 34);
      for (let k = 0; k < 6; k++) { g.fillStyle = cols[Math.floor(r() * cols.length)]; g.fillRect(12 + k * 18, 28 + row * 38, 12, 22); }
      g.fillStyle = '#2b2'; for (let k = 0; k < 6; k++) g.fillRect(14 + k * 18, 52 + row * 38, 8, 3);
    }
    g.fillStyle = '#333'; g.fillRect(84, 140, 30, 40);
    g.fillStyle = '#111'; g.fillRect(14, 200, 100, 30);
  });
}

// hộp đơn vị đáy ở gốc + aRoof = 0 (dùng chung shader mặt tiền với nhà mái dốc)
function boxGeometry() {
  const g = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0).toNonIndexed();
  g.deleteAttribute('uv');
  g.setAttribute('aRoof', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count), 1));
  return g;
}

// cột điện bê tông: cột 11 m, 2 xà ngang (vuông góc với đường), bình biến áp
function poleGeometry() {
  const parts = [
    new THREE.CylinderGeometry(0.12, 0.17, 11, 8).translate(0, 5.5, 0),
    new THREE.BoxGeometry(0.12, 0.12, 2.0).translate(0, 9.6, 0),
    new THREE.BoxGeometry(0.1, 0.1, 1.5).translate(0, 10.4, 0),
    new THREE.CylinderGeometry(0.3, 0.3, 0.9, 10).translate(0, 7.6, -0.42),
  ].map((p) => { const q = p.index ? p.toNonIndexed() : p; q.deleteAttribute('uv'); return q; });
  const pos = [], nor = [];
  for (const p of parts) { pos.push(...p.attributes.position.array); nor.push(...p.attributes.normal.array); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}

const FACADE_VERT_PARS = `#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`;
const FACADE_VERT = `#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`;
const FACADE_FRAG_PARS = `#include <common>
uniform float uLit; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`;
// aInfo: x = kiểu (0 nhà phố hỗn hợp, 1 chung cư, 2 văn phòng, 3 nhà ở), y = số ngẫu nhiên, z = có cửa hàng tầng trệt, w = hàng biển hiệu
const FACADE_FRAG = `#include <color_fragment>
vec3 cEmis = vec3(0.0); float cGlass = 0.0;
{
  float type = vInfo.x, seed = vInfo.y, shop = vInfo.z, row = vInfo.w;
  vec3 wallC = diffuseColor.rgb;
  float roofK = max(vRoof, step(0.5, vNL.y));
  float wall = (1.0 - roofK) * step(abs(vNL.y), 0.5);
  bool front = vNL.z > 0.5;
  bool alongX = abs(vNL.z) > 0.5;
  float u = alongX ? vWall.x : vWall.z;
  float halfW = (alongX ? vSize.x : vSize.z) * 0.5;
  float y = vWall.y;
  vec3 roofC = vRoof > 0.5 ? (seed < 0.4 ? vec3(0.07, 0.08, 0.1) : seed < 0.7 ? vec3(0.18, 0.07, 0.05) : vec3(0.13, 0.14, 0.15)) : vec3(0.17) * (0.85 + 0.3 * seed);
  diffuseColor.rgb = mix(diffuseColor.rgb, roofC, roofK);
  float gf = shop > 0.5 ? 3.6 : 0.0;
  if (front && shop > 0.5 && y < gf && wall > 0.5) {
    // tầng trệt cửa hàng: biển chữ + mặt kính (khung kính 1.7 m)
    if (y > 2.78 && y < 3.42 && abs(u) < halfW - 0.2) {
      vec2 suv = vec2((u + halfW - 0.2) / (2.0 * halfW - 0.4), (y - 2.78) / 0.64);
      vec3 sc = texture2D(uSignTex, vec2(suv.x, 1.0 - (row + 1.0 - suv.y) / 16.0)).rgb;
      diffuseColor.rgb = sc;
      cEmis = sc * (0.12 + 1.4 * uLit);
    } else if (y > 0.1 && y < 2.62 && abs(u) < halfW - 0.35) {
      float fx = fract(u / 1.7 + 0.5);
      float g = step(0.035, fx) * step(fx, 0.965) * step(y, 2.52) * step(0.16, y);
      diffuseColor.rgb = mix(wallC * 0.3, vec3(0.04, 0.05, 0.055), g);
      cGlass = g;
      vec3 inside = mix(vec3(1.0, 0.85, 0.62), vec3(0.9, 0.96, 1.0), step(0.5, fract(seed * 7.0)));
      cEmis = inside * g * (0.15 + 2.4 * uLit) * (1.0 - 0.35 * smoothstep(1.4, 2.5, y));
    } else diffuseColor.rgb = wallC * 0.5;
  } else if (wall > 0.5) {
    float yy = y - gf;
    vec2 cell; float win = 0.0;
    if (type < 0.5) {                       // nhà phố hỗn hợp: cửa sổ rời; tường hông không có cửa
      cell = vec2(u / 2.4 + 0.5, yy / 3.0);
      vec2 f = fract(cell);
      win = step(0.22, f.x) * step(f.x, 0.78) * step(0.3, f.y) * step(f.y, 0.82);
      if (!front && abs(vNL.x) > 0.5) win = 0.0;
    } else if (type < 1.5) {                // chung cư: mặt trước có ban công từng tầng
      cell = vec2(u / 3.6 + 0.5, yy / 3.0);
      vec2 f = fract(cell);
      if (front) {
        float bal = step(f.y, 0.36) * step(0.0, yy) * step(y, vSize.y - 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, wallC * 1.12 + 0.03, bal);
        win = (1.0 - bal) * step(0.06, f.x) * step(f.x, 0.94) * step(f.y, 0.92);
      } else win = step(0.35, f.x) * step(f.x, 0.65) * step(0.35, f.y) * step(f.y, 0.8);
    } else if (type < 2.5) {                // văn phòng: dải kính
      cell = vec2(u / 1.6 + 0.5, yy / 3.6);
      vec2 f = fract(cell);
      win = step(0.04, f.x) * step(f.x, 0.96) * step(0.3, f.y) * step(f.y, 0.97);
    } else {                                // nhà ở
      cell = vec2(u / 3.0 + 0.5, yy / 2.9);
      vec2 f = fract(cell);
      win = step(0.3, f.x) * step(f.x, 0.7) * step(0.3, f.y) * step(f.y, 0.72);
    }
    float inside = step(0.0, yy) * step(y, vSize.y - 0.7) * step(abs(u), halfW - 0.5);
    win *= inside;
    vec2 id = floor(cell);
    float lit = step(hh(id + vec2(seed * 91.0, dot(vNL, vec3(3.0, 5.0, 7.0)))), 0.42);
    // ở xa (ô cửa nhỏ hơn ~2 điểm ảnh): dùng giá trị trung bình, khỏi lấp lánh
    float far = smoothstep(0.25, 0.6, max(fwidth(cell.x), fwidth(cell.y)));
    win = mix(win, 0.3 * inside, far);
    lit = mix(lit, 0.42, far);
    vec3 glassC = (type > 1.5 && type < 2.5) ? vec3(0.06, 0.09, 0.12) : vec3(0.045, 0.05, 0.055);
    diffuseColor.rgb = mix(diffuseColor.rgb, glassC, win);
    cGlass = win * (1.0 - far);
    vec3 warm = mix(vec3(1.0, 0.66, 0.36), vec3(0.85, 0.92, 1.0), step(0.7, hh(id + 3.1)));
    cEmis += warm * 3.2 * uLit * win * lit;
  }
}`;

export class City {
  constructor(scene, road, roadMat) {
    this.scene = scene;
    this.road = road;
    this.roadMat = roadMat;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.blocks = new Map();
    this.uLit = { value: 0 };
    this.uSignTex = { value: shopSignTexture() };
    this.facade = new THREE.MeshStandardMaterial({ roughness: 0.82, metalness: 0 });
    this.facade.onBeforeCompile = (sh) => {
      sh.uniforms.uLit = this.uLit; sh.uniforms.uSignTex = this.uSignTex;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', FACADE_VERT_PARS).replace('#include <begin_vertex>', FACADE_VERT);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', FACADE_FRAG_PARS)
        .replace('#include <color_fragment>', FACADE_FRAG)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.06, cGlass);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += cEmis;');
    };
    this.facade.customProgramCacheKey = () => 'city-facade';
    this.walkMat = new THREE.MeshStandardMaterial({ map: pavingTexture(), roughness: 0.92 });
    this.markMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.poleMat = new THREE.MeshStandardMaterial({ color: 0x8e8d87, roughness: 0.85 });
    this.wireMat = new THREE.LineBasicMaterial({ color: 0x1b1b1d });
    this.uGlow = { value: 0 };
    this.signMat = new THREE.MeshStandardMaterial({ map: verticalSignTexture(), roughness: 0.55 });
    this.signMat.onBeforeCompile = (sh) => {
      sh.uniforms.uGlow = this.uGlow;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aCell;')
        .replace('#include <uv_vertex>', '#include <uv_vertex>\nvMapUv.x = (vMapUv.x + aCell) / 16.0;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uGlow;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * uGlow;');
    };
    this.signMat.customProgramCacheKey = () => 'city-vsign';
    const vend = vendingTexture();
    this.vendBody = new THREE.MeshStandardMaterial({ color: 0xe9e9e6, roughness: 0.45, metalness: 0.15 });
    this.vendFront = new THREE.MeshStandardMaterial({ map: vend, emissiveMap: vend, emissive: 0xffffff, emissiveIntensity: 0.3, roughness: 0.25 });
    for (const m of [this.facade, this.walkMat, this.markMat, this.poleMat, this.wireMat, this.signMat, this.vendBody, this.vendFront]) withMist(m);
    this.boxGeo = boxGeometry();
    this.houseGeo = houseGeometry();
    this.poleGeo = poleGeometry();
    this.signGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    this.vendGeo = new THREE.BoxGeometry(1, 1.83, 0.75).translate(0, 0.915, 0);
    this._p = {}; this._q = {};
    this._m = new THREE.Matrix4(); this._qt = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0); this._c = new THREE.Color();
    this.lastS = 0;
  }

  set visible(v) { this.group.visible = v; if (!v) this.reset(); }
  get visible() { return this.group.visible; }

  reset() {
    for (const g of this.blocks.values()) this._dispose(g);
    this.blocks.clear();
  }

  // s: quãng đường xe; lamps: 0..1 (đèn bật)
  update(s, lamps, budget = 1) {
    if (!this.group.visible) return;
    this.lastS = s;
    this.uLit.value = lamps;
    this.uGlow.value = 0.15 + 1.6 * lamps;
    this.vendFront.emissiveIntensity = 0.25 + 1.1 * lamps;
    const road = this.road;
    const n0 = road.junctionIndex(s - BEHIND) - 1, n1 = road.junctionIndex(s + AHEAD);
    // dựng khối gần xe trước
    const want = [];
    for (let n = n0; n <= n1; n++) if (!this.blocks.has(n)) want.push(n);
    want.sort((a, b) => Math.abs(road.junction(a) - s) - Math.abs(road.junction(b) - s));
    for (let i = 0; i < budget && i < want.length; i++) this.blocks.set(want[i], this._build(want[i]));
    for (const [n, g] of this.blocks) if (n < n0 || n > n1) { this._dispose(g); this.blocks.delete(n); }
  }

  prime(s) { if (this.group.visible) this.update(s, this.uLit.value, 99); }

  _dispose(g) {
    this.group.remove(g);
    g.traverse((o) => {
      if (o.isInstancedMesh) o.dispose();
      if (o.geometry && o.geometry.userData.own) o.geometry.dispose();
    });
  }

  // khung toạ độ tại quãng s: tâm đường + vector phải r + vector tiến f
  _frame(s) {
    const p = this.road.at(s, {});
    return { x: p.x, z: p.z, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th), th: p.th };
  }

  _build(n) {
    const road = this.road, group = new THREE.Group();
    const sJ = road.junction(n), sK = road.junction(n + 1);
    const HW = CITY.hw, SW = CITY.walk, CW = CITY.side;
    const mark = { pos: [], nor: [], col: [], idx: [] };
    const walk = { pos: [], nor: [], uv: [], idx: [] };
    const cross = { pos: [], nor: [], uv: [], idx: [] };
    const WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16], TACT = [0.85, 0.7, 0.12];
    // thêm 1 tứ giác (4 góc theo thứ tự vòng), tự lật chiều để pháp tuyến cùng hướng `n`
    const quad = (B, P, n, col, uvs) => {
      const b = B.pos.length / 3;
      for (let i = 0; i < 4; i++) {
        B.pos.push(P[i][0], P[i][1], P[i][2]); B.nor.push(n[0], n[1], n[2]);
        if (B.col) B.col.push(...col);
        if (B.uv) B.uv.push(...(uvs ? uvs[i] : [0, 0]));
      }
      const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
      const bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
      const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
      if (cx * n[0] + cy * n[1] + cz * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    };
    const at = (s, u, y) => { const p = road.at(s, this._p); return [p.x + Math.cos(p.th) * u, y, p.z - Math.sin(p.th) * u]; };
    const UP = [0, 1, 0];
    // dải dọc đường chính từ sA tới sB, ngang u0..u1 (lấy mẫu mỗi 2 m theo đường cong)
    const strip = (B, sA, sB, u0, u1, y, col, uvFn) => {
      if (sB <= sA) return;
      const N = Math.max(1, Math.ceil((sB - sA) / 2));
      for (let i = 0; i < N; i++) {
        const a = sA + (sB - sA) * i / N, b = sA + (sB - sA) * (i + 1) / N;
        quad(B, [at(a, u0, y), at(b, u0, y), at(b, u1, y), at(a, u1, y)], UP, col,
          uvFn && [uvFn(a, u0), uvFn(b, u0), uvFn(b, u1), uvFn(a, u1)]);
      }
    };
    // mặt đứng dọc đường (bó vỉa) tại u, từ y0 tới y1
    const wallStrip = (B, sA, sB, u, y0, y1, side) => {
      const N = Math.max(1, Math.ceil((sB - sA) / 2));
      for (let i = 0; i < N; i++) {
        const a = sA + (sB - sA) * i / N, b = sA + (sB - sA) * (i + 1) / N;
        const p = road.at((a + b) / 2, this._q), nn = [-Math.cos(p.th) * side, 0, Math.sin(p.th) * side];
        quad(B, [at(a, u, y0), at(b, u, y0), at(b, u, y1), at(a, u, y1)], nn, null, [[0, a / 2], [0, b / 2], [0.1, b / 2], [0.1, a / 2]]);
      }
    };
    // toạ độ trong khung ngã tư (a dọc đường chính, u ngang)
    const F = this._frame(sJ);
    const J = (a, u, y) => [F.x + F.fx * a + F.rx * u, y, F.z + F.fz * a + F.rz * u];
    const jquad = (B, a0, a1, u0, u1, y, col, uvFn) => quad(B, [J(a0, u0, y), J(a1, u0, y), J(a1, u1, y), J(a0, u1, y)], UP, col,
      uvFn && [uvFn(a0, u0), uvFn(a1, u0), uvFn(a1, u1), uvFn(a0, u1)]);

    // ---- ngã tư n: đường ngang + vỉa hè dọc đường ngang + vạch ----
    for (const su of [-1, 1]) {
      const uA = su * HW, uB = su * DEPTH;
      jquad(cross, -CW, CW, uA, uB, 0.05, null, (a, u) => [(a + CW) / (2 * CW), u / 12]);
      for (const sa of [-1, 1]) {
        // vỉa hè hai bên đường ngang (từ sau vỉa hè đường chính ra tới DEPTH)
        jquad(walk, sa * CW, sa * (CW + CITY.sideWalk), su * (HW + SW + 0.4), uB, WALK_Y, null, (a, u) => [a / 2, u / 2]);
        quad(walk, [J(sa * CW, su * (HW + SW + 0.4), 0.03), J(sa * CW, uB, 0.03), J(sa * CW, uB, WALK_Y), J(sa * CW, su * (HW + SW + 0.4), WALK_Y)],
          [-sa * F.fx, 0, -sa * F.fz], null, [[0, 0], [0, 40], [0.1, 40], [0.1, 0]]);
      }
      // vạch qua đường ngang (người đi dọc vỉa hè đường chính băng qua đường ngang)
      for (let a = -CW + 0.35; a < CW - 0.3; a += 0.9) jquad(mark, a, a + 0.45, su * (HW + 0.7), su * (HW + 3.4), MARK_Y, WHITE);
      // vạch dừng trên đường ngang (làn đi về phía đường chính)
      jquad(mark, su * 0.15, su * (CW - 0.2), su * (HW + 4.0), su * (HW + 4.45), MARK_Y, WHITE);
      // tim đường ngang: vạch đứt 3 m / 3 m
      for (let u = HW + SW + 3; u < DEPTH - 3; u += 6) jquad(mark, -0.07, 0.07, su * u, su * (u + 3), MARK_Y, WHITE);
    }
    // vạch qua đường chính (vằn ngựa) hai bên ngã tư + vạch dừng
    for (const sa of [-1, 1]) {
      for (let u = -HW + 0.35; u < HW - 0.4; u += 0.9) jquad(mark, sa * 6.4, sa * 10.4, u, u + 0.45, MARK_Y, WHITE);
    }
    jquad(mark, -11.9, -11.45, 0.2, HW - 0.3, MARK_Y, WHITE);         // chiều mình: dừng trước vạch qua đường
    jquad(mark, 11.45, 11.9, -HW + 0.3, -0.2, MARK_Y, WHITE);         // chiều ngược lại

    // ---- vạch đường chính trong khối [sJ, sK] ----
    const zA = sJ + 10.4, zB = sK - 10.4;                    // ngoài vùng vạch qua đường
    for (const su of [-1, 1]) {
      strip(mark, zA, zB, su * 0.1, su * 0.25, MARK_Y, YEL);                                 // tim đường: 2 vạch vàng liền
      strip(mark, sJ + 6, sK - 6, su * (HW - 0.4), su * (HW - 0.25), MARK_Y, WHITE);         // vạch biên
      // vạch chia làn: liền 30 m trước ngã tư (cấm đổi làn), còn lại đứt 5 m / 5 m
      const lA = sJ + 12, lB = sK - 12;
      strip(mark, lA, Math.min(lB, lA + 30), su * 3.42, su * 3.58, MARK_Y, WHITE);
      strip(mark, Math.max(lA, lB - 30), lB, su * 3.42, su * 3.58, MARK_Y, WHITE);
      for (let k = Math.ceil((lA + 30) / 10); k * 10 + 5 < lB - 30; k++) strip(mark, k * 10, k * 10 + 5, su * 3.42, su * 3.58, MARK_Y, WHITE);
    }
    // mũi tên đi thẳng trước vạch dừng (2 làn chiều mình)
    for (const lu of CITY.lanes) {
      const sa = sK - 11.9 - 8;
      strip(mark, sa - 3.2, sa, lu - 0.08, lu + 0.08, MARK_Y, WHITE);
      for (let k = 0; k < 4; k++) { const w = 0.45 - k * 0.11; strip(mark, sa + k * 0.25, sa + (k + 1) * 0.25, lu - w, lu + w, MARK_Y, WHITE); }
    }

    // ---- vỉa hè đường chính hai bên ----
    const wA = sJ + CW, wB = sK - CW;
    for (const su of [-1, 1]) {
      const u0 = su * HW, u1 = su * (HW + SW + 0.4);
      strip(walk, wA, wB, u0, u1, WALK_Y, null, (s, u) => [u / 2, s / 2]);
      wallStrip(walk, wA, wB, u0, 0.03, WALK_Y, su);
      for (const [s, dir] of [[wA, 1], [wB, -1]]) {
        const p = road.at(s, this._q);
        quad(walk, [at(s, u0, 0.03), at(s, u1, 0.03), at(s, u1, WALK_Y), at(s, u0, WALK_Y)], [Math.sin(p.th) * dir, 0, Math.cos(p.th) * dir], null,
          [[0, 0], [2, 0], [2, 0.1], [0, 0.1]]);
      }
      strip(mark, wA + 0.5, wB - 0.5, su * (HW + 2.3), su * (HW + 2.6), WALK_Y + 0.006, TACT);   // gạch dẫn đường cho người khiếm thị
    }

    const mkMesh = (B, mat, withUv, withCol) => {
      if (!B.idx.length) return null;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
      if (withUv) g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      if (withCol) g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3));
      g.setIndex(B.idx);
      g.userData.own = true;
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true;
      group.add(m);
      return m;
    };
    const cm = mkMesh(cross, this.roadMat, true, false);
    if (cm) { cm.geometry.setAttribute('aDirt', new THREE.BufferAttribute(new Float32Array(cross.pos.length / 3), 1)); cm.layers.set(3); }
    mkMesh(walk, this.walkMat, true, false);
    mkMesh(mark, this.markMat, false, true);

    // ---- nhà ----
    const B = [];             // [x, z, yaw, w, h, d, type, seed, shop, row, color, house]
    const signs = [], vends = [];
    const r = rng(n * 7919 + 17);
    const floors = (type, far) => {
      const k = r();
      if (type === 3) return 2;
      if (type === 2) return 5 + Math.floor(k * (far ? 14 : 8));
      if (type === 1) return 4 + Math.floor(k * (far ? 9 : 6));
      return 2 + Math.floor(k * k * 5);
    };
    const add = (x, z, yaw, w, d, type, shop, far) => {
      const fl = floors(type, far), seed = r();
      const h = (shop ? 3.6 : 0) + fl * (type === 2 ? 3.6 : type === 3 ? 2.9 : 3.0) + (type === 3 ? 0 : 0.6);
      const wc = WALLS[type === 2 ? (r() < 0.5 ? 2 : 5) : Math.floor(r() * WALLS.length)];
      B.push([x, z, yaw, w, h, d, type, seed, shop ? 1 : 0, Math.floor(r() * 16), wc, type === 3]);
      return h;
    };
    const pickType = (front) => { const k = r(); return front ? (k < 0.58 ? 0 : k < 0.83 ? 1 : k < 0.96 ? 2 : 3) : (k < 0.3 ? 3 : k < 0.6 ? 1 : k < 0.8 ? 0 : 2); };
    for (const su of [-1, 1]) {
      // dãy mặt tiền nhìn ra đường chính
      let s = sJ + CW + CITY.sideWalk + 0.4;
      const sEnd = sK - CW - CITY.sideWalk - 0.4;
      while (s < sEnd - 4) {
        const w = Math.min(sEnd - s, 5 + 9 * r() * r() + 2 * r()), d = 10 + 8 * r();
        const p = road.at(s + w / 2, this._p);
        const u = su * (HW + SW + 0.4 + d / 2);
        const x = p.x + Math.cos(p.th) * u, z = p.z - Math.sin(p.th) * u;
        const yaw = p.th + (su > 0 ? -Math.PI / 2 : Math.PI / 2);
        const type = pickType(true), shop = type !== 3 && r() < 0.8;
        const h = add(x, z, yaw, w, d, type, shop, false);
        // biển dọc treo ở mép mặt tiền (nhà phố hỗn hợp, đủ cao)
        if (type === 0 && h > 9 && r() < 0.6) {
          const lx = (r() < 0.5 ? -1 : 1) * (w / 2 - 0.45), lz = d / 2 + 0.42;
          const hs = Math.min(h - 5, 3 + 4 * r());
          const cs = Math.cos(yaw), sn = Math.sin(yaw);
          signs.push([x + cs * lx + sn * lz, z - sn * lx + cs * lz, yaw, 4.3, hs, Math.floor(r() * 16)]);
        }
        // máy bán nước sát mặt tiền
        if (shop && r() < 0.22) {
          const sv = s + 0.8 + r() * Math.max(0.1, w - 1.6), pv = road.at(sv, this._q), uv = su * (HW + SW - 0.05);
          vends.push([pv.x + Math.cos(pv.th) * uv, pv.z - Math.sin(pv.th) * uv, yaw]);
        }
        s += w + (r() < 0.3 ? 0.4 + r() * 1.2 : 0.05);
      }
      // dãy nhìn ra đường ngang (đầu khối nhìn về ngã tư n, cuối khối nhìn về ngã tư n+1) + nhà bên trong khối
      const uIn = HW + SW + 19;
      for (const [sEdge, dir] of [[sJ + CW + CITY.sideWalk + 0.3, 1], [sK - CW - CITY.sideWalk - 0.3, -1]]) {
        const Fe = this._frame(sEdge);
        let u = uIn;
        while (u < DEPTH - 8) {
          const w = 7 + 7 * r(), d = 10 + 6 * r();
          const a = dir * d / 2, uc = su * (u + w / 2);
          const x = Fe.x + Fe.fx * a + Fe.rx * uc, z = Fe.z + Fe.fz * a + Fe.rz * uc;
          const type = pickType(false);
          add(x, z, Fe.th + (dir > 0 ? 0 : Math.PI), w, d, type, type !== 3 && u < 70 && r() < 0.5, u > 90);
          u += w + 0.3 + r() * 1.5;
        }
      }
      const iA = sJ + CW + CITY.sideWalk + 18, iB = sK - CW - CITY.sideWalk - 18;
      for (let s2 = iA; s2 < iB - 9; s2 += 15) {
        const Fi = this._frame(s2 + 7.5);
        for (let u = uIn; u < DEPTH - 10; u += 17) {
          if (r() < 0.15) continue;
          const w = 8 + 5 * r(), d = 9 + 5 * r(), uc = su * (u + 8.5), a = (r() - 0.5) * 2;
          const x = Fi.x + Fi.fx * a + Fi.rx * uc, z = Fi.z + Fi.fz * a + Fi.rz * uc;
          const far = u > 90, type = far && r() < 0.12 ? 2 : pickType(false);
          add(x, z, Fi.th + (r() < 0.5 ? 0 : Math.PI) + (r() < 0.5 ? Math.PI / 2 : 0), w, d, type, false, far);
        }
      }
    }
    const m = this._m, q = this._qt, v = this._v, sc = this._s, c = this._c;
    for (const house of [false, true]) {
      const list = B.filter((b) => b[11] === house);
      if (!list.length) continue;
      const base = house ? this.houseGeo : this.boxGeo;
      const g = new THREE.BufferGeometry();
      for (const k of ['position', 'normal', 'aRoof']) g.setAttribute(k, base.attributes[k].clone());   // bản riêng: giải phóng cùng khối
      const info = new Float32Array(list.length * 4);
      const im = new THREE.InstancedMesh(g, this.facade, list.length);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(list.length * 3), 3);
      list.forEach(([x, z, yaw, w, h, d, type, seed, shop, row, wc], i) => {
        q.setFromAxisAngle(this._up, yaw);
        m.compose(v.set(x, -0.3, z), q, sc.set(w, house ? h / 1.0 : h + 0.3, d));
        im.setMatrixAt(i, m);
        im.setColorAt(i, c.setRGB(wc[0], wc[1], wc[2], THREE.SRGBColorSpace));
        info.set([type, seed, shop, row], i * 4);
      });
      g.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 4));
      g.userData.own = true;
      im.castShadow = im.receiveShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
    // biển dọc
    if (signs.length) {
      const g = new THREE.BufferGeometry();
      for (const k of ['position', 'normal', 'uv']) g.setAttribute(k, this.signGeo.attributes[k].clone());
      g.setIndex(this.signGeo.index.clone());
      g.userData.own = true;
      const cell = new Float32Array(signs.length);
      const im = new THREE.InstancedMesh(g, this.signMat, signs.length);
      signs.forEach(([x, z, yaw, y0, hs, cl], i) => {
        q.setFromAxisAngle(this._up, yaw);
        m.compose(v.set(x, y0, z), q, sc.set(0.14, hs, 0.8));
        im.setMatrixAt(i, m);
        cell[i] = cl;
      });
      g.setAttribute('aCell', new THREE.InstancedBufferAttribute(cell, 1));
      im.castShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
    // máy bán nước
    if (vends.length) {
      const im = new THREE.InstancedMesh(this.vendGeo, [this.vendBody, this.vendBody, this.vendBody, this.vendBody, this.vendFront, this.vendBody], vends.length);
      vends.forEach(([x, z, yaw], i) => { q.setFromAxisAngle(this._up, yaw); m.compose(v.set(x, WALK_Y, z), q, sc.set(1, 1, 1)); im.setMatrixAt(i, m); });
      im.castShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
    // cột điện (lưới toàn cục mỗi POLE_GAP m, bỏ cột rơi vào ngã tư) + dây điện võng giữa các cột
    const poleAt = (k) => { const s = k * POLE_GAP + 8, j = road.nearJunction(s); return Math.abs(s - j) < 9 ? null : s; };
    const poles = [], wires = [];
    for (let k = Math.ceil((sJ - 8) / POLE_GAP); k * POLE_GAP + 8 < sK; k++) {
      const s = poleAt(k);
      if (s === null) continue;
      let k2 = k + 1, s2 = poleAt(k2);
      if (s2 === null) s2 = poleAt(++k2);
      for (const su of [-1, 1]) {
        const u = su * (HW + 0.45);
        const p = road.at(s, this._p);
        poles.push([p.x + Math.cos(p.th) * u, p.z - Math.sin(p.th) * u, p.th]);
        if (s2 === null) continue;
        const p2 = road.at(s2, this._q);
        for (const [du, y, sag] of [[-0.9, 9.66, 0.55], [0, 9.66, 0.55], [0.9, 9.66, 0.55], [-0.7, 10.46, 0.45], [0.7, 10.46, 0.45], [0.15, 6.3, 0.8]]) {
          const ua = u + du;
          const ax = p.x + Math.cos(p.th) * ua, az = p.z - Math.sin(p.th) * ua, bx = p2.x + Math.cos(p2.th) * ua, bz = p2.z - Math.sin(p2.th) * ua;
          const span = Math.hypot(bx - ax, bz - az), sg = sag * span / POLE_GAP;
          let px = ax, py = y, pz = az;
          for (let i = 1; i <= 8; i++) {
            const t = i / 8, nx = ax + (bx - ax) * t, nz = az + (bz - az) * t, ny = y - 4 * sg * t * (1 - t);
            wires.push(px, py, pz, nx, ny, nz);
            px = nx; py = ny; pz = nz;
          }
        }
      }
    }
    if (poles.length) {
      const im = new THREE.InstancedMesh(this.poleGeo, this.poleMat, poles.length);
      poles.forEach(([x, z, th], i) => { q.setFromAxisAngle(this._up, th + Math.PI / 2); m.compose(v.set(x, WALK_Y, z), q, sc.set(1, 1, 1)); im.setMatrixAt(i, m); });
      im.castShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
    if (wires.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(wires, 3));
      g.userData.own = true;
      const ls = new THREE.LineSegments(g, this.wireMat);
      ls.frustumCulled = false;
      group.add(ls);
    }
    this.group.add(group);
    return group;
  }
}
