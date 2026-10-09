import * as THREE from 'three';
import { CITY } from './road.js';
import { withMist } from './mist.js';
import { hLow } from './terrain-noise.js';
import { houseGeometry } from './town.js';
import { broadleafGeometry } from './scenery.js';

// Map Phố (kiểu phố Nhật): dựng theo từng "khối phố" n = đoạn đường giữa ngã tư n và n+1 (road.junction).
// Mỗi khối: đường ngang + vỉa hè + vạch kẻ của ngã tư n, vạch kẻ đường chính trong khối, vỉa hè hai bên, nhà (dãy mặt tiền,
// dãy nhìn ra đường ngang, nhà bên trong khối tới DEPTH m), biển hiệu dọc, máy bán nước, cột điện + dây điện.
// Nhà = hộp / nhà mái dốc (instancing); mặt tiền vẽ bằng shader: tầng trệt cửa hàng (kính + biển chữ từ atlas), cửa sổ theo
// kiểu nhà (nhà phố hỗn hợp / chung cư có ban công / văn phòng dải kính / nhà ở), ban đêm đèn cửa sổ + biển hiệu sáng.
// Mặt đất theo địa hình (vài vùng đồi dốc): sát đường bằng mặt đường, xa dần về địa hình tự nhiên (giống terrain.js);
// nhà có "chân móng" (plinth) bê tông lộ ra khi đất dốc. Giữa các nhà thỉnh thoảng có hẻm bậc thang đi lên / bãi đất trống.
// camera không xuyên nhà: collide() kéo camera về phía xe khi tia xe→camera cắt khối nhà.
const DEPTH = 180;                  // nhà trải ra hai bên tới cách tim đường (m)
const AHEAD = 1150, BEHIND = 260;
const WALK_Y = 0.2, MARK_Y = 0.055;          // so với mặt đường tại chỗ đó
const POLE_GAP = 30;
// đèn giao thông mỗi ngã tư (chu kỳ 46 s, lệch pha ngẫu nhiên theo ngã tư): đường chính xanh 22 s → vàng 3 s → đỏ;
// đường ngang xanh 15.5 s → vàng 3 s; giữa hai pha đỏ cả hai 1.5 s
export const SIGNAL = { cycle: 46, mainG: 22, y: 3, allRed: 1.5, crossG: 15.5, stopA: 11.45 };
const LENS_ON = [[0.15, 1.0, 0.6], [1.0, 0.72, 0.05], [1.0, 0.08, 0.04]], LENS_OFF = [[0.03, 0.06, 0.05], [0.07, 0.06, 0.02], [0.07, 0.02, 0.02]];
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

// biển báo (atlas 4 ô 128 px): 0 vạch qua đường (xanh dương, tam giác trắng + người đi bộ), 1 dừng lại "止まれ" (tam giác đỏ ngược),
// 2 tốc độ tối đa 40, 3 cấm đỗ xe
function roadSignTexture() {
  return canvasTex(512, 128, (g) => {
    // 0
    g.fillStyle = '#1b4fb4'; g.fillRect(4, 4, 120, 120); g.strokeStyle = '#fff'; g.lineWidth = 4; g.strokeRect(9, 9, 110, 110);
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(64, 18); g.lineTo(112, 108); g.lineTo(16, 108); g.closePath(); g.fill();
    g.fillStyle = '#1b2a44'; g.beginPath(); g.arc(64, 48, 7, 0, 7); g.fill();
    g.lineWidth = 6; g.strokeStyle = '#1b2a44'; g.lineCap = 'round';
    g.beginPath(); g.moveTo(64, 57); g.lineTo(60, 78); g.lineTo(50, 98); g.moveTo(60, 78); g.lineTo(72, 97); g.moveTo(62, 64); g.lineTo(76, 72); g.moveTo(62, 64); g.lineTo(50, 74); g.stroke();
    g.fillStyle = '#1b2a44'; for (let k = 0; k < 5; k++) g.fillRect(28 + k * 15, 101, 9, 4);
    // 1
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(132, 10); g.lineTo(252, 10); g.lineTo(192, 120); g.closePath(); g.fill();
    g.fillStyle = '#c8161d'; g.beginPath(); g.moveTo(140, 15); g.lineTo(244, 15); g.lineTo(192, 110); g.closePath(); g.fill();
    g.fillStyle = '#fff'; g.font = `bold 26px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('止まれ', 192, 42);
    // 2
    g.fillStyle = '#fff'; g.beginPath(); g.arc(320, 64, 60, 0, 7); g.fill();
    g.strokeStyle = '#c8161d'; g.lineWidth = 12; g.beginPath(); g.arc(320, 64, 52, 0, 7); g.stroke();
    g.fillStyle = '#1b3f9a'; g.font = 'bold 54px Arial, sans-serif'; g.fillText('40', 320, 68);
    // 3
    g.fillStyle = '#1b4fb4'; g.beginPath(); g.arc(448, 64, 58, 0, 7); g.fill();
    g.strokeStyle = '#c8161d'; g.lineWidth = 11; g.beginPath(); g.arc(448, 64, 53, 0, 7); g.stroke();
    g.beginPath(); g.moveTo(412, 28); g.lineTo(484, 100); g.stroke();
  });
}

// bãi đất trống: sỏi + đất loang
function gravelTexture() {
  const t = canvasTex(256, 256, (g) => {
    const r = rng(11);
    g.fillStyle = '#8a8274'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) {
      const v = 95 + Math.floor(r() * 90);
      g.fillStyle = `rgb(${v},${v - 6},${v - 16})`;
      g.fillRect(r() * 256, r() * 256, 1 + r() * 3, 1 + r() * 3);
    }
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(70,85,40,${0.25 + r() * 0.3})`; g.beginPath(); g.arc(r() * 256, r() * 256, 4 + r() * 14, 0, 7); g.fill(); }
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
uniform float uLit, uWin, uSignK; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`;
// aInfo: x = kiểu (0 nhà phố hỗn hợp, 1 chung cư, 2 văn phòng, 3 nhà ở), y = số ngẫu nhiên, z = có cửa hàng tầng trệt, w = hàng biển hiệu
const FACADE_FRAG = `#include <color_fragment>
vec3 cEmis = vec3(0.0); float cGlass = 0.0;
{
  float type = vInfo.x, seed = vInfo.y, row = vInfo.w;
  float shop = mod(vInfo.z, 2.0) > 0.5 ? 1.0 : 0.0, plinth = floor(vInfo.z * 0.5 + 0.01) / 50.0;   // z = có cửa hàng + 2·(chân móng ×50)
  vec3 wallC = diffuseColor.rgb;
  float roofK = max(vRoof, step(0.5, vNL.y));
  float wall = (1.0 - roofK) * step(abs(vNL.y), 0.5);
  bool front = vNL.z > 0.5;
  bool alongX = abs(vNL.z) > 0.5;
  float u = alongX ? vWall.x : vWall.z;
  float halfW = (alongX ? vSize.x : vSize.z) * 0.5;
  float y = vWall.y - plinth, Ht = vSize.y - plinth;
  vec3 roofC = vRoof > 0.5 ? (seed < 0.4 ? vec3(0.07, 0.08, 0.1) : seed < 0.7 ? vec3(0.18, 0.07, 0.05) : vec3(0.13, 0.14, 0.15)) : vec3(0.17) * (0.85 + 0.3 * seed);
  diffuseColor.rgb = mix(diffuseColor.rgb, roofC, roofK);
  float gf = shop > 0.5 ? 3.6 : 0.0;
  if (y < 0.0 && wall > 0.5) {
    // chân móng bê tông (đất dốc)
    diffuseColor.rgb = vec3(0.4, 0.39, 0.37) * (0.85 + 0.3 * hh(floor(vWall.xz * 0.5 + vWall.y)));
  } else if (front && shop > 0.5 && y < gf && wall > 0.5) {
    // tầng trệt cửa hàng: biển chữ + mặt kính (khung kính 1.7 m)
    if (y > 2.78 && y < 3.42 && abs(u) < halfW - 0.2) {
      vec2 suv = vec2((u + halfW - 0.2) / (2.0 * halfW - 0.4), (y - 2.78) / 0.64);
      vec3 sc = texture2D(uSignTex, vec2(suv.x, 1.0 - (row + 1.0 - suv.y) / 16.0)).rgb;
      diffuseColor.rgb = sc;
      cEmis = sc * (0.12 + 1.4 * uLit) * uSignK;
    } else if (y > 0.1 && y < 2.62 && abs(u) < halfW - 0.35) {
      float fx = fract(u / 1.7 + 0.5);
      float g = step(0.035, fx) * step(fx, 0.965) * step(y, 2.52) * step(0.16, y);
      diffuseColor.rgb = mix(wallC * 0.3, vec3(0.04, 0.05, 0.055), g);
      cGlass = g;
      vec3 inside = mix(vec3(1.0, 0.85, 0.62), vec3(0.9, 0.96, 1.0), step(0.5, fract(seed * 7.0)));
      cEmis = inside * g * (0.15 + 2.4 * uLit) * (1.0 - 0.35 * smoothstep(1.4, 2.5, y)) * uWin;
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
        float bal = step(f.y, 0.36) * step(0.0, yy) * step(y, Ht - 0.7);
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
    float inside = step(0.0, yy) * step(y, Ht - 0.7) * step(abs(u), halfW - 0.5);
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
    cEmis += warm * 3.2 * uLit * win * lit * uWin;
  }
}`;

export class City {
  constructor(scene, road, roadMat, scenery) {
    this.scenery = scenery;
    this.scene = scene;
    this.road = road;
    this.roadMat = roadMat;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.blocks = new Map();
    this.uLit = { value: 0 }; this.uWin = { value: 1 }; this.uSignK = { value: 1 };
    this.uSignTex = { value: shopSignTexture() };
    this.facade = new THREE.MeshStandardMaterial({ roughness: 0.82, metalness: 0 });
    this.facade.onBeforeCompile = (sh) => {
      sh.uniforms.uLit = this.uLit; sh.uniforms.uSignTex = this.uSignTex; sh.uniforms.uWin = this.uWin; sh.uniforms.uSignK = this.uSignK;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', FACADE_VERT_PARS).replace('#include <begin_vertex>', FACADE_VERT);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', FACADE_FRAG_PARS)
        .replace('#include <color_fragment>', FACADE_FRAG)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.06, cGlass);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += cEmis;');
    };
    this.facade.customProgramCacheKey = () => 'city-facade';
    this.walkMat = new THREE.MeshStandardMaterial({ map: pavingTexture(), roughness: 0.92 });
    this.lotMat = new THREE.MeshStandardMaterial({ map: gravelTexture(), roughness: 1 });
    // khu chung cư có công viên: cỏ, hàng rào cây, cây tán tròn, ghế, ban công (sàn + lan can)
    this.lawnMat = new THREE.MeshStandardMaterial({ map: gravelTexture(), color: 0x6f9a4a, roughness: 1 });
    this.propMats = {
      slab: new THREE.MeshStandardMaterial({ color: 0xd9d8d2, roughness: 0.8 }),
      rail: new THREE.MeshStandardMaterial({ color: 0xbfc4c7, roughness: 0.4, metalness: 0.2 }),
      hedge: new THREE.MeshStandardMaterial({ color: 0x2f5a2a, roughness: 0.95 }),
      bench: new THREE.MeshStandardMaterial({ color: 0x7a5233, roughness: 0.8 }),
      tree: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }),
    };
    this.unitBox = new THREE.BoxGeometry(1, 1, 1);
    this.treeGeo = broadleafGeometry();
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
    for (const m of [this.facade, this.lotMat, this.lawnMat, ...Object.values(this.propMats), this.walkMat, this.markMat, this.poleMat, this.wireMat, this.signMat, this.vendBody, this.vendFront]) withMist(m);
    this.boxGeo = boxGeometry();
    this.houseGeo = houseGeometry();
    this.poleGeo = poleGeometry();
    this.signGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    this.vendGeo = new THREE.BoxGeometry(1, 1.83, 0.75).translate(0, 0.915, 0);
    this._p = {}; this._q = {};
    this._m = new THREE.Matrix4(); this._qt = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0); this._c = new THREE.Color();
    this.lastS = 0;
    this.camF = 1;
    this.clock = 0;                                              // đồng hồ đèn giao thông (s)
    this.clockRate = 1;                                          // < 1 => pha đèn dài hơn (bảng 🚦)
    this.sigMat = new THREE.MeshStandardMaterial({ color: 0x2b2d30, roughness: 0.6, metalness: 0.3 });
    this.lensMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
    withMist(this.sigMat); withMist(this.lensMat);
    this.headGeo = new THREE.BoxGeometry(1.3, 0.44, 0.3);
    this.lensGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.04, 14).rotateX(Math.PI / 2);
    this.sigPoleGeo = new THREE.CylinderGeometry(0.1, 0.12, 1, 8).translate(0, 0.5, 0);
    this.armGeo = new THREE.BoxGeometry(1, 0.1, 0.1).translate(0.5, 0, 0);
    // biển báo: tấm mặt trước (atlas) + mặt sau xám + cột
    this.signTex = roadSignTexture();
    this.roadSignMat = new THREE.MeshStandardMaterial({ map: this.signTex, roughness: 0.5, alphaTest: 0.5, transparent: false });
    this.roadSignMat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aCell;')
        .replace('#include <uv_vertex>', '#include <uv_vertex>\nvMapUv.x = (vMapUv.x + aCell) / 4.0;');
    };
    this.roadSignMat.customProgramCacheKey = () => 'city-roadsign';
    this.signBackMat = new THREE.MeshStandardMaterial({ map: this.signTex, color: 0x2e3033, roughness: 0.7, alphaTest: 0.5 });
    this.signBackMat.onBeforeCompile = this.roadSignMat.onBeforeCompile;
    this.signBackMat.customProgramCacheKey = () => 'city-roadsign-back';
    withMist(this.roadSignMat); withMist(this.signBackMat);
    this.signPlate = new THREE.PlaneGeometry(0.75, 0.75);
    this.signPost = new THREE.CylinderGeometry(0.035, 0.035, 1, 6).translate(0, 0.5, 0);
    // quầng sáng đèn giao thông (như đèn hậu xe mình): điểm vẽ to dần theo khoảng cách để nhìn rõ từ xa, chỉ thấy từ phía trước mặt đèn
    this.uSig = { uScale: { value: 500 }, uFogD: { value: 0 }, uDay: { value: 1 }, uGain: { value: 1 }, uSize: { value: 1 } };
    this.sigGlowMat = new THREE.ShaderMaterial({
      uniforms: this.uSig, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
      vertexShader: `attribute vec3 aCol; attribute vec3 aDir; uniform float uScale, uFogD, uGain, uSize; varying vec3 vCol;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0); vec4 mv = viewMatrix * wp;
          float face = smoothstep(-0.1, 0.45, dot(normalize(cameraPosition - wp.xyz), aDir));
          float fd = uFogD * -mv.z;
          vCol = aCol * face * exp(-fd * fd * 0.5) * uGain;
          gl_PointSize = clamp(1.9 * uScale / -mv.z, 11.0, 90.0) * uSize;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `uniform float uDay; varying vec3 vCol;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(0.32, 0.0, d) + exp(-d * d * 4.0) * 0.55;
          if (a * max(vCol.r, max(vCol.g, vCol.b)) < 0.004) discard;
          gl_FragColor = vec4(vCol * a * mix(1.6, 0.9, uDay), 1.0);
        }`,
    });
  }

  // pha đèn đường chính / đường ngang tại ngã tư n: 0 xanh, 1 vàng, 2 đỏ
  _phase(n) {
    const S = SIGNAL, off = (Math.sin(n * 91.7 + 13.1) * 43758.5453 % 1 + 1) % 1 * S.cycle;
    const t = ((this.clock + off) % S.cycle + S.cycle) % S.cycle;
    const main = t < S.mainG ? 0 : t < S.mainG + S.y ? 1 : 2;
    const c0 = S.mainG + S.y + S.allRed;
    const cross = t >= c0 && t < c0 + S.crossG ? 0 : t >= c0 + S.crossG && t < c0 + S.crossG + S.y ? 1 : 2;
    return { main, cross, t };
  }
  mainLight(n) { return this._phase(n).main; }

  // khoảng cách tới vạch dừng phía trước (theo chiều dir) nếu đèn bắt dừng; Infinity nếu được đi.
  // Đèn vàng: chỉ dừng khi còn kịp phanh êm (≥ v²/8 m)
  stopAhead(s, dir, v) {
    if (!this.group.visible) return Infinity;
    const road = this.road, A = SIGNAL.stopA;
    const n = dir > 0 ? road.junctionIndex(s + A - 1) : road.junctionIndex(s - A + 1) - 1;
    const line = road.junction(n) - dir * A, dist = (line - s) * dir;
    if (dist > 160 || dist < -1) return Infinity;
    const ph = this._phase(n).main;
    if (ph === 2 || (ph === 1 && dist > v * v / 8)) return dist;
    return Infinity;
  }

  // camera không xuyên nhà: đi dọc tia từ xe (cao 1.3 m) tới camera, gặp khối nhà (nới 0.6 m) thì kéo camera về trước chỗ đó.
  // Kéo vào tức thì, nhả ra từ từ (không giật khi lướt qua khe giữa hai nhà).
  collide(pos, cam, dt) {
    if (!this.group.visible) { this.camF = 1; return; }
    const ax = pos.x, ay = pos.y + 1.3, az = pos.z;
    const dx = cam.x - ax, dy = cam.y - ay, dz = cam.z - az, L = Math.hypot(dx, dy, dz);
    if (L < 0.5) return;
    const near = this._near || (this._near = []);
    near.length = 0;
    const R = L + 25;
    for (const g of this.blocks.values()) {
      const o = g.userData.obb;
      for (let i = 0; i < o.length; i += 7) if (Math.abs(o[i] - ax) < R && Math.abs(o[i + 1] - az) < R) near.push(i, o);
    }
    let f = 1;
    const M = 0.6;
    for (let t = 0.8; t <= L + M && f === 1; t += 0.35) {
      const x = ax + dx * t / L, y = ay + dy * t / L, z = az + dz * t / L;
      for (let k = 0; k < near.length; k += 2) {
        const i = near[k], o = near[k + 1];
        if (y > o[i + 6] + M) continue;
        const ex = x - o[i], ez = z - o[i + 1];
        const lx = ex * o[i + 2] - ez * o[i + 3], lz = ex * o[i + 3] + ez * o[i + 2];
        if (Math.abs(lx) < o[i + 4] + M && Math.abs(lz) < o[i + 5] + M) { f = Math.max(0.05, (t - M) / L); break; }
      }
    }
    this.camF = f < this.camF ? f : this.camF + (f - this.camF) * (1 - Math.exp(-dt * 2.5));
    if (this.camF < 0.999) cam.set(ax + dx * this.camF, ay + dy * this.camF, az + dz * this.camF);
  }

  set visible(v) { this.group.visible = v; if (!v) this.reset(); }
  get visible() { return this.group.visible; }

  reset() {
    for (const g of this.blocks.values()) this._dispose(g);
    this.blocks.clear();
  }

  // s: quãng đường xe; lamps: 0..1 (đèn bật)
  update(s, lamps, dt = 0, budget = 1, scalePx = 500, fogD = 0) {
    if (!this.group.visible) return;
    this.uSig.uScale.value = scalePx; this.uSig.uFogD.value = fogD; this.uSig.uDay.value = 1 - lamps;
    this.clock += dt * this.clockRate;
    const c = this._c;
    for (const [n, g] of this.blocks) {
      const L = g.userData.lens;
      if (!L) continue;
      const ph = this._phase(n), k = 3 + 4 * lamps;
      for (let i = 0; i < L.kind.length; i++) {
        const on = (L.kind[i] ? ph.cross : ph.main) === L.col[i];
        const v = on ? LENS_ON[L.col[i]] : LENS_OFF[L.col[i]];
        L.mesh.setColorAt(i, c.setRGB(v[0] * (on ? k : 1), v[1] * (on ? k : 1), v[2] * (on ? k : 1)));
      }
      L.mesh.instanceColor.needsUpdate = true;
      if (L.glow) {
        const a = L.glow.geometry.attributes.aCol;
        for (let i = 0; i < L.kind.length; i++) {
          const on = (L.kind[i] ? ph.cross : ph.main) === L.col[i], v = LENS_ON[L.col[i]];
          a.setXYZ(i, on ? v[0] * 3 : 0, on ? v[1] * 3 : 0, on ? v[2] * 3 : 0);
        }
        a.needsUpdate = true;
      }
    }
    this.lastS = s;
    this.uLit.value = lamps;
    this.uGlow.value = (0.15 + 1.6 * lamps) * this.uSignK.value;
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

  prime(s) { if (this.group.visible) this.update(s, this.uLit.value, 0, 99); }

  // đèn đường góc ngã tư (cho scenery gán SpotLight dùng chung)
  lamps() { const out = []; if (this.group.visible) for (const g of this.blocks.values()) for (const L of g.userData.lampsJ || []) out.push(L); return out; }

  _dispose(g) {
    this.group.remove(g);
    g.traverse((o) => {
      if (o.isInstancedMesh) o.dispose();
      if (o.geometry && o.geometry.userData.own) o.geometry.dispose();
    });
  }

  // cao độ mặt đất trên trục đường ngang của ngã tư có khung F, cách tim đường chính u
  groundJ(F, u) {
    const x = F.x + F.rx * u, z = F.z + F.rz * u, a = Math.abs(u);
    const t = Math.min(1, Math.max(0, (a - CITY.hw - 1.2) / 14.8));
    return F.y + (hLow(x, z) - F.y) * t * t * (3 - 2 * t) - 0.02;
  }

  // khung toạ độ tại quãng s: tâm đường + vector phải r + vector tiến f
  _frame(s) {
    const p = this.road.at(s, {});
    return { x: p.x, y: p.y, z: p.z, rx: Math.cos(p.th), rz: -Math.sin(p.th), fx: -Math.sin(p.th), fz: -Math.cos(p.th), th: p.th };
  }


  _build(n) {
    const road = this.road, group = new THREE.Group();
    const sJ = road.junction(n), sK = road.junction(n + 1);
    const HW = CITY.hw, SW = CITY.walk, CW = CITY.side, SWK = CITY.sideWalk;
    const FRONT = HW + SW + 0.4;                               // mép trong của dãy nhà mặt tiền
    const mark = { pos: [], nor: [], col: [], idx: [] };
    const walk = { pos: [], nor: [], uv: [], idx: [] };
    const cross = { pos: [], nor: [], uv: [], idx: [] };
    const lot = { pos: [], nor: [], uv: [], idx: [] };
    const wires = [];
    const WHITE = [0.86, 0.86, 0.83], YEL = [0.86, 0.66, 0.16], TACT = [0.85, 0.7, 0.12];
    // mặt đất tại (x, z) cách tim đường |u| (giống terrain.js: sát đường bằng mặt đường ry, xa dần về địa hình)
    const ground = (x, z, ry, u) => { const a = Math.abs(u), t = Math.min(1, Math.max(0, (a - HW - 1.2) / 14.8)); return ry + (hLow(x, z) - ry) * t * t * (3 - 2 * t) - 0.02; };
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
    const UP = [0, 1, 0];
    // điểm trên đường chính: quãng s, lệch u, cao y so với mặt đường
    const at = (s, u, y) => { const p = road.at(s, this._p); return [p.x + Math.cos(p.th) * u, p.y + y, p.z - Math.sin(p.th) * u]; };
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
    // khung ngã tư (a dọc đường chính, u ngang); độ cao theo mặt đất dọc đường ngang
    const F = this._frame(sJ);
    const JX = (a, u) => F.x + F.fx * a + F.rx * u, JZ = (a, u) => F.z + F.fz * a + F.rz * u;
    const gJ = (u) => ground(JX(0, u), JZ(0, u), F.y, u);
    const J = (a, u, y) => [JX(a, u), gJ(u) + y, JZ(a, u)];
    // tứ giác trên đường ngang, chia theo lưới u mỗi 4 m (khớp mặt đường ngang)
    const jquad = (B, a0, a1, u0, u1, y, col, uvFn) => {
      const lo = Math.min(u0, u1), hi = Math.max(u0, u1), cuts = [lo];
      for (let k = Math.ceil((lo - HW) / 4); HW + k * 4 < hi; k++) { const c = HW + k * 4; if (c > lo) cuts.push(c); }
      for (let k = Math.ceil((lo + HW) / 4); -HW + k * 4 < hi; k++) { const c = -HW + k * 4; if (c > lo && c < 0) cuts.push(c); }
      cuts.push(hi); cuts.sort((p, q) => p - q);
      for (let i = 0; i + 1 < cuts.length; i++) {
        const v0 = cuts[i], v1 = cuts[i + 1];
        if (v1 - v0 < 1e-3) continue;
        quad(B, [J(a0, v0, y), J(a1, v0, y), J(a1, v1, y), J(a0, v1, y)], UP, col, uvFn && [uvFn(a0, v0), uvFn(a1, v0), uvFn(a1, v1), uvFn(a0, v1)]);
      }
    };

    // ---- ngã tư n: đường ngang + vỉa hè dọc đường ngang + vạch ----
    for (const su of [-1, 1]) {
      const uA = su * HW, uB = su * DEPTH;
      jquad(cross, -CW, CW, uA, uB, 0.05, null, (a, u) => [(a + CW) / (2 * CW), u / 12]);
      for (const sa of [-1, 1]) {
        jquad(walk, sa * CW, sa * (CW + SWK), su * FRONT, uB, WALK_Y, null, (a, u) => [a / 2, u / 2]);
        for (let u = FRONT; u < DEPTH; u += 4) {                // bó vỉa dọc đường ngang
          const u1 = Math.min(DEPTH, u + 4);
          quad(walk, [J(sa * CW, su * u, 0.03), J(sa * CW, su * u1, 0.03), J(sa * CW, su * u1, WALK_Y), J(sa * CW, su * u, WALK_Y)],
            [-sa * F.fx, 0, -sa * F.fz], null, [[0, u / 2], [0, u1 / 2], [0.1, u1 / 2], [0.1, u / 2]]);
        }
      }
      for (let a = -CW + 0.35; a < CW - 0.3; a += 0.9) jquad(mark, a, a + 0.45, su * (HW + 0.7), su * (HW + 3.4), MARK_Y, WHITE);
      jquad(mark, su * 0.15, su * (CW - 0.2), su * (HW + 4.0), su * (HW + 4.45), MARK_Y, WHITE);
      for (let u = FRONT + 3; u < DEPTH - 3; u += 6) jquad(mark, -0.07, 0.07, su * u, su * (u + 3), MARK_Y, WHITE);
    }
    for (const sa of [-1, 1]) for (let u = -HW + 0.35; u < HW - 0.4; u += 0.9) jquad(mark, sa * 6.4, sa * 10.4, u, u + 0.45, MARK_Y, WHITE);
    jquad(mark, -11.9, -11.45, 0.2, HW - 0.3, MARK_Y, WHITE);
    jquad(mark, 11.45, 11.9, -HW + 0.3, -0.2, MARK_Y, WHITE);

    // ---- vạch đường chính trong khối ----
    const zA = sJ + 10.4, zB = sK - 10.4;
    for (const su of [-1, 1]) {
      strip(mark, zA, zB, su * 0.1, su * 0.25, MARK_Y, YEL);
      strip(mark, sJ + 6, sK - 6, su * (HW - 0.4), su * (HW - 0.25), MARK_Y, WHITE);
      const lA = sJ + 12, lB = sK - 12;
      strip(mark, lA, Math.min(lB, lA + 30), su * 3.42, su * 3.58, MARK_Y, WHITE);
      strip(mark, Math.max(lA, lB - 30), lB, su * 3.42, su * 3.58, MARK_Y, WHITE);
      for (let k = Math.ceil((lA + 30) / 10); k * 10 + 5 < lB - 30; k++) strip(mark, k * 10, k * 10 + 5, su * 3.42, su * 3.58, MARK_Y, WHITE);
    }
    for (const lu of CITY.lanes) {
      const sa = sK - 11.9 - 8;
      strip(mark, sa - 3.2, sa, lu - 0.08, lu + 0.08, MARK_Y, WHITE);
      for (let k = 0; k < 4; k++) { const w = 0.45 - k * 0.11; strip(mark, sa + k * 0.25, sa + (k + 1) * 0.25, lu - w, lu + w, MARK_Y, WHITE); }
    }

    // ---- vỉa hè đường chính ----
    const wA = sJ + CW, wB = sK - CW;
    for (const su of [-1, 1]) {
      const u0 = su * HW, u1 = su * FRONT;
      strip(walk, wA, wB, u0, u1, WALK_Y, null, (s, u) => [u / 2, s / 2]);
      wallStrip(walk, wA, wB, u0, 0.03, WALK_Y, su);
      for (const [s, dir] of [[wA, 1], [wB, -1]]) {
        const p = road.at(s, this._q);
        quad(walk, [at(s, u0, 0.03), at(s, u1, 0.03), at(s, u1, WALK_Y), at(s, u0, WALK_Y)], [Math.sin(p.th) * dir, 0, Math.cos(p.th) * dir], null,
          [[0, 0], [2, 0], [2, 0.1], [0, 0.1]]);
      }
      strip(mark, wA + 0.5, wB - 0.5, su * (HW + 2.3), su * (HW + 2.6), WALK_Y + 0.006, TACT);
    }

    // ---- nhà ----
    const B = [];             // [x, z, yaw, w, h, d, type, seed, shop, row, color, house, base, plinth]
    const obb = [];           // cho camera: [x, z, cos, sin, nửa rộng, nửa sâu, đỉnh]
    const signs = [], vends = [];
    const r = rng(n * 7919 + 17);
    const floors = (type, far) => {
      const k = r();
      if (type === 3) return 2;
      if (type === 2) return 5 + Math.floor(k * (far ? 14 : 8));
      if (type === 1) return 4 + Math.floor(k * (far ? 9 : 6));
      return 2 + Math.floor(k * k * 5);
    };
    // phía trong khúc cua: bỏ nhà ở quá xa (vượt qua tâm cong => chồng lên nhà của đoạn khác)
    const inner = (s, u) => { const k = road.curvature(s); return k * u < 0 && Math.abs(u) > 0.55 / Math.max(Math.abs(k), 1e-6); };
    // nhà tâm (x, z), mặt tiền hướng yaw; g0 = cao độ mặt đất phía trước nhà (tầng trệt bắt đầu từ đây)
    const add = (x, z, yaw, w, d, type, shop, far, g0, flSet) => {
      const cs = Math.cos(yaw), sn = Math.sin(yaw);
      let lo = g0;
      for (const [lx, lz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2]]) lo = Math.min(lo, hLow(x + cs * lx + sn * lz, z - sn * lx + cs * lz));
      const base = lo - 0.4, plinth = Math.round((g0 - base) * 50) / 50;
      const fl = flSet || floors(type, far), seed = r();
      const h = (shop ? 3.6 : 0) + fl * (type === 2 ? 3.6 : type === 3 ? 2.9 : 3.0) + (type === 3 ? 0 : 0.6);
      add.last = fl;
      const wc = WALLS[type === 2 ? (r() < 0.5 ? 2 : 5) : Math.floor(r() * WALLS.length)];
      B.push([x, z, yaw, w, h, d, type, seed, shop ? 1 : 0, Math.floor(r() * 16), wc, type === 3, base, plinth]);
      obb.push(x, z, cs, sn, w / 2, d / 2, g0 + h * (type === 3 ? 1.45 : 1));
      return h;
    };
    const pickType = (front) => { const k = r(); return front ? (k < 0.58 ? 0 : k < 0.83 ? 1 : k < 0.96 ? 2 : 3) : (k < 0.3 ? 3 : k < 0.6 ? 1 : k < 0.8 ? 0 : 2); };
    const iA = sJ + CW + SWK + 18, iB = sK - CW - SWK - 18;
    const props = { slab: [], rail: [], hedge: [], bench: [], tree: [] };   // [x, y, z, yaw, sx, sy, sz] (tâm hộp)
    const lawn = { pos: [], nor: [], uv: [], idx: [] };
    // khu chung cư: tòa nhà lùi vào 11 m, phía trước là công viên nhỏ (cỏ, hàng rào cây, cây, ghế) + bậc thang lên sân sảnh,
    // tòa nhà có ban công từng tầng. Mẫu A: cao 10–13 tầng, bậc hẹp, 4 cây; mẫu B: 6–8 tầng, bậc rộng, quảng trường + ghế.
    const apts = [];
    const apartment = (s0, W, su, kind) => {
      apts.push([su, s0, s0 + W]);
      const Fa = this._frame(s0 + W / 2), cs = Math.cos(Fa.th), sn = Math.sin(Fa.th);
      const X = (a, u) => Fa.x + Fa.fx * a + Fa.rx * su * u, Z = (a, u) => Fa.z + Fa.fz * a + Fa.rz * su * u;
      const P3 = (a, u, y) => [X(a, u), y, Z(a, u)];
      const yS = Fa.y + WALK_Y, hT = kind ? 0.75 : 1.05, half = kind ? 4.2 : 2.3, yaw = Fa.th + (su > 0 ? -Math.PI / 2 : Math.PI / 2);
      const toRoad = [-Fa.rx * su, 0, -Fa.rz * su], UPn = [0, 1, 0];
      const uSt = FRONT + 3.8, uTer = FRONT + 7.6, uB = FRONT + 11, bd = 14, bw = W - (kind ? 2 : 3.5);
      // tòa nhà (sàn tầng trệt = sân sảnh)
      add(X(0, uB + bd / 2), Z(0, uB + bd / 2), yaw, bw, bd, 1, false, false, yS + hT, kind ? 6 + Math.floor(r() * 3) : 10 + Math.floor(r() * 4));
      const fl = add.last;
      // lối vào + bậc thang + sân sảnh
      this._q4(walk, [P3(-half, FRONT - 0.1, yS + 0.005), P3(half, FRONT - 0.1, yS + 0.005), P3(half, uSt, yS + 0.005), P3(-half, uSt, yS + 0.005)], UPn,
        [[0, 0], [half, 0], [half, 2], [0, 2]]);
      const n = Math.round(hT / 0.15), run = (uTer - uSt) / n, h = hT / n;
      for (let i = 0; i < n; i++) {
        const u0 = uSt + i * run, u1 = u0 + run, yb = yS + i * h, yt = yb + h;
        this._q4(walk, [P3(-half, u0, yb), P3(half, u0, yb), P3(half, u0, yt), P3(-half, u0, yt)], toRoad, [[0, 0], [half, 0], [half, .1], [0, .1]]);
        this._q4(walk, [P3(-half, u0, yt), P3(half, u0, yt), P3(half, u1, yt), P3(-half, u1, yt)], UPn, [[0, u0 / 2], [half, u0 / 2], [half, u1 / 2], [0, u1 / 2]]);
      }
      const tw = kind ? 8 : 5.5, yt = yS + hT;
      this._q4(walk, [P3(-tw, uTer, yt), P3(tw, uTer, yt), P3(tw, uB + 0.4, yt), P3(-tw, uB + 0.4, yt)], UPn, [[0, 0], [tw, 0], [tw, 2], [0, 2]]);
      for (const sa of [-1, 1]) {                                   // thành sân sảnh hai bên bậc + mặt trước
        this._q4(walk, [P3(sa * half, uTer, yS), P3(sa * tw, uTer, yS), P3(sa * tw, uTer, yt), P3(sa * half, uTer, yt)], toRoad, [[0, 0], [1, 0], [1, .2], [0, .2]]);
        this._q4(walk, [P3(sa * tw, uTer, yS), P3(sa * tw, uB + 0.4, yS), P3(sa * tw, uB + 0.4, yt), P3(sa * tw, uTer, yt)], [Fa.fx * sa, 0, Fa.fz * sa], [[0, 0], [1, 0], [1, .2], [0, .2]]);
      }
      // cỏ hai bên + hàng rào cây sát vỉa hè + cây + ghế
      for (const sa of [-1, 1]) {
        const a0 = sa * (half + 0.4), a1 = sa * (W / 2 - 0.4);
        this._q4(lawn, [P3(a0, FRONT + 0.2, yS + 0.02), P3(a1, FRONT + 0.2, yS + 0.02), P3(a1, uB + 0.4, yS + 0.02), P3(a0, uB + 0.4, yS + 0.02)], UPn,
          [[0, 0], [W / 6, 0], [W / 6, 4], [0, 4]]);
        const hl = Math.abs(a1 - a0), ha = (a0 + a1) / 2;
        props.hedge.push([X(ha, FRONT + 0.55), yS + 0.35, Z(ha, FRONT + 0.55), yaw, hl, 0.7, 0.6]);
        const trees = kind ? [[0.5, 5.5]] : [[0.3, 3.2], [0.72, 8.2]];
        for (const [t, u] of trees) props.tree.push([X(a0 + (a1 - a0) * t, FRONT + u), yS, Z(a0 + (a1 - a0) * t, FRONT + u), r() * 6.28, 0.75 + r() * 0.3, 0.75 + r() * 0.3, 0.75 + r() * 0.3]);
        if (kind) for (const u of [3.2, 7.4]) props.bench.push([X(sa * (half + 1.8), FRONT + u), yS + 0.25, Z(sa * (half + 1.8), FRONT + u), yaw + Math.PI / 2, 1.6, 0.45, 0.5]);
      }
      // ban công: sàn + lan can đặc mỗi tầng (trừ tầng trệt)
      const zf = bd / 2;
      for (let k = 1; k < fl; k++) {
        const y = yt + k * 3.0;
        const cx = X(0, uB - 0.6), cz = Z(0, uB - 0.6), rx = X(0, uB - 1.15), rz = Z(0, uB - 1.15);
        props.slab.push([cx, y + 0.07, cz, yaw, bw - 1.2, 0.14, 1.2]);
        props.rail.push([rx, y + 0.6, rz, yaw, bw - 1.2, 0.95, 0.08]);
      }
      return s0 + W;
    };
    for (const su of [-1, 1]) {
      // dãy mặt tiền nhìn ra đường chính; thỉnh thoảng có hẻm bậc thang / bãi đất trống
      let s = sJ + CW + SWK + 0.4;
      const sEnd = sK - CW - SWK - 0.4;
      let lastGap = s;
      while (s < sEnd - 4) {
        const k = r(), canGap = s > iA && s < iB - 20 && s - lastGap > 25;
        if (canGap && k < 0.13) { s = this._alley(s, 2.6 + 1.3 * r(), su, walk, wires, ground, FRONT); lastGap = s; continue; }
        if (canGap && k < 0.21) { s = this._lot(s, 10 + 8 * r(), su, lot, wires, ground, FRONT); lastGap = s; continue; }
        if (canGap && k < 0.3 && iB - s > 40) { s = apartment(s, 28 + 6 * r(), su, r() < 0.5 ? 0 : 1); lastGap = s; continue; }
        const w = Math.min(sEnd - s, 5 + 9 * r() * r() + 2 * r()), d = 10 + 8 * r();
        const p = road.at(s + w / 2, this._p);
        const u = su * (FRONT + d / 2);
        const x = p.x + Math.cos(p.th) * u, z = p.z - Math.sin(p.th) * u;
        const yaw = p.th + (su > 0 ? -Math.PI / 2 : Math.PI / 2);
        const type = pickType(true), shop = type !== 3 && r() < 0.8;
        const g0 = p.y + WALK_Y;
        const h = add(x, z, yaw, w, d, type, shop, false, g0);
        if (type === 0 && h > 9 && r() < 0.6) {
          const lx = (r() < 0.5 ? -1 : 1) * (w / 2 - 0.45), lz = d / 2 + 0.42;
          const hs = Math.min(h - 5, 3 + 4 * r());
          const cs = Math.cos(yaw), sn = Math.sin(yaw);
          signs.push([x + cs * lx + sn * lz, z - sn * lx + cs * lz, yaw, g0 + 4.3, hs, Math.floor(r() * 16)]);
        }
        if (shop && r() < 0.22) {
          const sv = s + 0.8 + r() * Math.max(0.1, w - 1.6), pv = road.at(sv, this._q), uv = su * (HW + SW - 0.05);
          vends.push([pv.x + Math.cos(pv.th) * uv, pv.y + WALK_Y, pv.z - Math.sin(pv.th) * uv, yaw]);
        }
        s += w + (r() < 0.3 ? 0.4 + r() * 1.2 : 0.05);
      }
      // dãy nhìn ra đường ngang + nhà bên trong khối
      const uIn = FRONT + 18.6;
      for (const [sEdge, dir] of [[sJ + CW + SWK + 0.3, 1], [sK - CW - SWK - 0.3, -1]]) {
        const Fe = this._frame(sEdge);
        let u = uIn;
        while (u < DEPTH - 8) {
          const w = 7 + 7 * r(), d = 10 + 6 * r();
          const a = dir * d / 2, uc = su * (u + w / 2);
          if (!inner(sEdge, uc)) {
            const x = Fe.x + Fe.fx * a + Fe.rx * uc, z = Fe.z + Fe.fz * a + Fe.rz * uc;
            const gx = Fe.x + Fe.rx * uc, gz = Fe.z + Fe.rz * uc;
            const type = pickType(false);
            add(x, z, Fe.th + (dir > 0 ? 0 : Math.PI), w, d, type, type !== 3 && u < 70 && r() < 0.5, u > 90, ground(gx, gz, Fe.y, uc) + WALK_Y);
          }
          u += w + 0.3 + r() * 1.5;
        }
      }
      for (let s2 = iA; s2 < iB - 9; s2 += 15) {
        const Fi = this._frame(s2 + 7.5);
        for (let u = uIn; u < DEPTH - 10; u += 17) {
          const skip = r() < 0.15, w = 8 + 5 * r(), d = 9 + 5 * r(), uc = su * (u + 8.5), a = (r() - 0.5) * 2;
          if (skip || inner(s2 + 7.5, uc)) continue;
          if (u < FRONT + 27 && apts.some(([sa, a0, a1]) => sa === su && s2 < a1 && s2 + 15 > a0)) continue;   // chừa chỗ khu chung cư
          const x = Fi.x + Fi.fx * a + Fi.rx * uc, z = Fi.z + Fi.fz * a + Fi.rz * uc;
          const far = u > 90, type = far && r() < 0.12 ? 2 : pickType(false);
          add(x, z, Fi.th + (r() < 0.5 ? 0 : Math.PI) + (r() < 0.5 ? Math.PI / 2 : 0), w, d, type, false, far, hLow(x, z));
        }
      }
    }
    group.userData.obb = obb;

    const mkMesh = (Bf, mat, withUv, withCol) => {
      if (!Bf.idx.length) return null;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(Bf.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(Bf.nor, 3));
      if (withUv) g.setAttribute('uv', new THREE.Float32BufferAttribute(Bf.uv, 2));
      if (withCol) g.setAttribute('color', new THREE.Float32BufferAttribute(Bf.col, 3));
      g.setIndex(Bf.idx);
      g.userData.own = true;
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true;
      group.add(m);
      return m;
    };
    const cm = mkMesh(cross, this.roadMat, true, false);
    if (cm) { cm.geometry.setAttribute('aDirt', new THREE.BufferAttribute(new Float32Array(cross.pos.length / 3), 1)); cm.layers.set(3); }
    mkMesh(walk, this.walkMat, true, false);
    mkMesh(lot, this.lotMat, true, false);
    mkMesh(lawn, this.lawnMat, true, false);
    mkMesh(mark, this.markMat, false, true);

    const m = this._m, q = this._qt, v = this._v, sc = this._s, c = this._c;
    for (const [k, list] of Object.entries(props)) {
      if (!list.length) continue;
      const im = new THREE.InstancedMesh(k === 'tree' ? this.treeGeo : this.unitBox, this.propMats[k], list.length);
      list.forEach(([x, y, z, yw, a, b, d], i) => { q.setFromAxisAngle(this._up, yw); m.compose(v.set(x, y, z), q, sc.set(a, b, d)); im.setMatrixAt(i, m); });
      im.castShadow = true; im.receiveShadow = k !== 'tree'; im.frustumCulled = false;
      group.add(im);
    }
    for (const house of [false, true]) {
      const list = B.filter((b) => b[11] === house);
      if (!list.length) continue;
      const base = house ? this.houseGeo : this.boxGeo;
      const g = new THREE.BufferGeometry();
      for (const k of ['position', 'normal', 'aRoof']) g.setAttribute(k, base.attributes[k].clone());   // bản riêng: giải phóng cùng khối
      const info = new Float32Array(list.length * 4);
      const im = new THREE.InstancedMesh(g, this.facade, list.length);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(list.length * 3), 3);
      list.forEach(([x, z, yaw, w, h, d, type, seed, shop, row, wc, , by, plinth], i) => {
        q.setFromAxisAngle(this._up, yaw);
        m.compose(v.set(x, by, z), q, sc.set(w, h + plinth, d));
        im.setMatrixAt(i, m);
        im.setColorAt(i, c.setRGB(wc[0], wc[1], wc[2], THREE.SRGBColorSpace));
        info.set([type, seed, shop + 2 * Math.round(plinth * 50), row], i * 4);
      });
      g.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 4));
      g.userData.own = true;
      im.castShadow = im.receiveShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
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
    if (vends.length) {
      const im = new THREE.InstancedMesh(this.vendGeo, [this.vendBody, this.vendBody, this.vendBody, this.vendBody, this.vendFront, this.vendBody], vends.length);
      vends.forEach(([x, y, z, yaw], i) => { q.setFromAxisAngle(this._up, yaw); m.compose(v.set(x, y, z), q, sc.set(1, 1, 1)); im.setMatrixAt(i, m); });
      im.castShadow = true;
      im.frustumCulled = false;
      group.add(im);
    }
    // cột điện + dây võng
    const poleAt = (k) => { const s = k * POLE_GAP + 8, j = road.nearJunction(s); return Math.abs(s - j) < 9 ? null : s; };
    const poles = [];
    for (let k = Math.ceil((sJ - 8) / POLE_GAP); k * POLE_GAP + 8 < sK; k++) {
      const s = poleAt(k);
      if (s === null) continue;
      let k2 = k + 1, s2 = poleAt(k2);
      if (s2 === null) s2 = poleAt(++k2);
      for (const su of [-1, 1]) {
        const u = su * (HW + 0.45);
        const p = road.at(s, this._p);
        poles.push([p.x + Math.cos(p.th) * u, p.y + WALK_Y, p.z - Math.sin(p.th) * u, p.th]);
        if (s2 === null) continue;
        const p2 = road.at(s2, this._q);
        for (const [du, y, sag] of [[-0.9, 9.66, 0.55], [0, 9.66, 0.55], [0.9, 9.66, 0.55], [-0.7, 10.46, 0.45], [0.7, 10.46, 0.45], [0.15, 6.3, 0.8]]) {
          const ua = u + du;
          const ax = p.x + Math.cos(p.th) * ua, az = p.z - Math.sin(p.th) * ua, bx = p2.x + Math.cos(p2.th) * ua, bz = p2.z - Math.sin(p2.th) * ua;
          const ay = p.y + WALK_Y + y, by = p2.y + WALK_Y + y;
          const span = Math.hypot(bx - ax, bz - az), sg = sag * span / POLE_GAP;
          let px = ax, py = ay, pz = az;
          for (let i = 1; i <= 8; i++) {
            const t = i / 8, nx = ax + (bx - ax) * t, nz = az + (bz - az) * t, ny = ay + (by - ay) * t - 4 * sg * t * (1 - t);
            wires.push(px, py, pz, nx, ny, nz);
            px = nx; py = ny; pz = nz;
          }
        }
      }
    }
    if (poles.length) {
      const im = new THREE.InstancedMesh(this.poleGeo, this.poleMat, poles.length);
      poles.forEach(([x, y, z, th], i) => { q.setFromAxisAngle(this._up, th + Math.PI / 2); m.compose(v.set(x, y, z), q, sc.set(1, 1, 1)); im.setMatrixAt(i, m); });
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
    this._signals(group, F, gJ);
    this.group.add(group);
    return group;
  }

  // đèn giao thông ngã tư (khung F): 2 cột tay vươn cho đường chính (đặt phía bên kia ngã tư, đầu đèn ngang trên làn),
  // 2 cột thấp cho đường ngang. Mặt đèn: xanh – vàng – đỏ từ trái sang phải (nhìn từ người lái)
  _signals(group, F, gJ) {
    const HW = CITY.hw, CW = CITY.side;
    const P = (a, u) => [F.x + F.fx * a + F.rx * u, F.z + F.fz * a + F.rz * u];
    const heads = [], poles = [], arms = [];
    // [a cột, u cột, u đầu đèn, a đầu đèn, hướng mặt đèn (vector), cao, kiểu]
    const yaw = (dx, dz) => Math.atan2(dx, dz);
    const y0 = gJ(0) + 0.2;
    const mainHead = (a, su) => {
      const [px, pz] = P(a, su * (HW + 0.7));
      const [hx, hz] = P(a, su * 3.6);
      poles.push([px, y0, pz, 5.9]);
      arms.push([px, y0 + 5.7, pz, Math.atan2(-(hz - pz), hx - px), Math.hypot(hx - px, hz - pz) + 0.7]);
      heads.push([hx, y0 + 5.55, hz, yaw(su > 0 ? -F.fx : F.fx, su > 0 ? -F.fz : F.fz), 0]);
    };
    mainHead(11.0, 1);          // chiều mình (đi theo +f): đèn bên phải, phía bên kia ngã tư, quay về phía xe tới
    mainHead(-11.0, -1);        // chiều ngược lại
    for (const su of [-1, 1]) {
      // xe trên đường ngang đi về phía -su (tới đường chính từ phía su): đèn ở phía bên kia (−su), quay mặt về +su
      const a = su * (CW + 1.0), [px, pz] = P(a, -su * (HW + 0.8));
      poles.push([px, y0, pz, 4.4]);
      heads.push([px, y0 + 4.2, pz, yaw(su * F.rx, su * F.rz), 1]);
    }
    const m = this._m, q = this._qt, v = this._v, sc = this._s;
    const add = (geo, mat, list, fn) => {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach((e, i) => { fn(e); im.setMatrixAt(i, m); });
      im.castShadow = true; im.frustumCulled = false;
      group.add(im);
      return im;
    };
    add(this.sigPoleGeo, this.sigMat, poles, ([x, y, z, h]) => m.compose(v.set(x, y, z), q.identity(), sc.set(1, h, 1)));
    add(this.armGeo, this.sigMat, arms, ([x, y, z, a, L]) => m.compose(v.set(x, y, z), q.setFromAxisAngle(this._up, a), sc.set(L, 1, 1)));
    add(this.headGeo, this.sigMat, heads, ([x, y, z, yw]) => m.compose(v.set(x, y, z), q.setFromAxisAngle(this._up, yw), sc.set(1, 1, 1)));
    const lens = [], kind = [], col = [];
    for (const [x, y, z, yw, k] of heads) {
      const cs = Math.cos(yw), sn = Math.sin(yw);
      for (let i = 0; i < 3; i++) {
        const lx = (i - 1) * 0.42, lz = 0.16;
        lens.push([x + cs * lx + sn * lz, y, z - sn * lx + cs * lz, yw]);
        kind.push(k); col.push(i);
      }
    }
    const lm = add(this.lensGeo, this.lensMat, lens, ([x, y, z, yw]) => m.compose(v.set(x, y, z), q.setFromAxisAngle(this._up, yw), sc.set(1, 1, 1)));
    lm.castShadow = false;
    lm.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(lens.length * 3), 3);
    // quầng sáng các thấu kính
    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(lens.flatMap(([x, y, z, yw]) => [x + Math.sin(yw) * 0.05, y, z + Math.cos(yw) * 0.05]), 3));
    gg.setAttribute('aDir', new THREE.Float32BufferAttribute(lens.flatMap(([, , , yw]) => [Math.sin(yw), 0, Math.cos(yw)]), 3));
    gg.setAttribute('aCol', new THREE.Float32BufferAttribute(new Float32Array(lens.length * 3), 3));
    gg.userData.own = true;
    const glow = new THREE.Points(gg, this.sigGlowMat);
    glow.frustumCulled = false; glow.renderOrder = 6;
    group.add(glow);
    group.userData.lens = { mesh: lm, kind: Int8Array.from(kind), col: Int8Array.from(col), glow };

    // đèn đường 4 góc ngã tư (tay đòn chĩa vào tâm ngã tư)
    const S = this.scenery, lamps = [], bulbs = [];
    for (const sa of [-1, 1]) for (const su of [-1, 1]) {
      const [px, pz] = P(sa * (CW + 3.4), su * (HW + 0.9)), dx = F.x - px, dz = F.z - pz, L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L;
      const yw = Math.atan2(uz, -ux);
      lamps.push([px, y0, pz, yw]);
      const b = [px + ux * 1.75, y0 + 10.88, pz + uz * 1.75];
      bulbs.push([b, [px + ux * 7.9, y0, pz + uz * 7.9]]);
    }
    if (S) {
      add(S.lampGeo, S.poleMat, lamps, ([x, y, z, yw]) => m.compose(v.set(x, y, z), q.setFromAxisAngle(this._up, yw), sc.set(1, 1, 1)));
      add(S.bulbGeo, S.bulbMat, bulbs, ([b]) => m.compose(v.set(b[0], b[1], b[2]), q.identity(), sc.set(1, 1, 1))).castShadow = false;
      const bg = new THREE.BufferGeometry();
      bg.setAttribute('position', new THREE.Float32BufferAttribute(bulbs.flatMap(([b]) => b), 3));
      bg.userData.own = true;
      const pts = new THREE.Points(bg, S.glowMat); pts.frustumCulled = false; pts.renderOrder = 3;
      group.add(pts);
    }
    group.userData.lampsJ = bulbs;

    // biển báo: vạch qua đường (2 phía tới), "止まれ" trên đường ngang, tốc độ 40 + cấm đỗ giữa khối
    const signs = [];
    const sign = (a, u, fx, fz, cell, h = 2.5) => { const [x, z] = P(a, u); signs.push([x, gJ(u) + 0.2, z, Math.atan2(fx, fz), cell, h]); };
    sign(-11.2, HW + 0.55, -F.fx, -F.fz, 0);                    // chiều mình tới ngã tư: biển vạch qua đường bên phải
    sign(11.2, -(HW + 0.55), F.fx, F.fz, 0);                    // chiều ngược lại
    sign(CW + 0.7, HW + 4.6, F.rx, F.rz, 1, 2.2);              // đường ngang phía phải: dừng lại
    sign(-(CW + 0.7), -(HW + 4.6), -F.rx, -F.rz, 1, 2.2);
    sign(60, HW + 0.55, -F.fx, -F.fz, 2);                       // giữa khối: tốc độ tối đa 40
    sign(95, -(HW + 0.55), F.fx, F.fz, 3);                      // cấm đỗ
    const mkPlates = (mat, back) => {
      const g = new THREE.BufferGeometry();
      for (const k of ['position', 'normal', 'uv']) g.setAttribute(k, this.signPlate.attributes[k].clone());
      g.setIndex(this.signPlate.index.clone());
      g.setAttribute('aCell', new THREE.InstancedBufferAttribute(Float32Array.from(signs.map((e) => e[4])), 1));
      g.userData.own = true;
      add(g, mat, signs, ([x, y, z, yw, , h]) => m.compose(v.set(x - Math.sin(yw) * (back ? 0.012 : 0), y + h, z - Math.cos(yw) * (back ? 0.012 : 0)),
        q.setFromAxisAngle(this._up, yw + (back ? Math.PI : 0)), sc.set(1, 1, 1)));
    };
    mkPlates(this.roadSignMat, false);
    mkPlates(this.signBackMat, true);
    add(this.signPost, this.sigMat, signs, ([x, y, z, yw, , h]) => m.compose(v.set(x - Math.sin(yw) * 0.03, y, z - Math.cos(yw) * 0.03), q.identity(), sc.set(1, h + 0.1, 1)));
  }

  // hẻm bậc thang giữa hai nhà mặt tiền: từ mép vỉa hè đi lên (cao thêm theo địa hình phía sau, 1–6 m) rồi lối đi phẳng
  // tới dãy nhà bên trong; tay vịn giữa hẻm. Trả về quãng s kế tiếp.
  _alley(s, w, su, walk, wires, ground, FRONT) {
    const F = this._frame(s + w / 2), END = FRONT + 18.2;
    const P = (a, u, y) => [F.x + F.fx * a + F.rx * su * u, y, F.z + F.fz * a + F.rz * su * u];
    const y0 = F.y + WALK_Y;
    const yE = ground(F.x + F.rx * su * END, F.z + F.rz * su * END, F.y, END);
    const rise = Math.min(6, Math.max(1, yE - y0 + 1.2)), n = Math.round(rise / 0.17), h = rise / n, run = 0.3;
    const a0 = -w / 2 + 0.05, a1 = w / 2 - 0.05, toRoad = [-F.rx * su, 0, -F.rz * su];
    for (let i = 0; i < n; i++) {
      const u0 = FRONT + i * run, u1 = u0 + run, yb = y0 + i * h, yt = yb + h;
      this._q4(walk, [P(a0, u0, yb), P(a1, u0, yb), P(a1, u0, yt), P(a0, u0, yt)], toRoad, [[0, 0], [w / 2, 0], [w / 2, 0.1], [0, 0.1]]);
      this._q4(walk, [P(a0, u0, yt), P(a1, u0, yt), P(a1, u1, yt), P(a0, u1, yt)], [0, 1, 0], [[0, u0 / 2], [w / 2, u0 / 2], [w / 2, u1 / 2], [0, u1 / 2]]);
    }
    const uT = FRONT + n * run, yT = y0 + rise;
    this._q4(walk, [P(a0, uT, yT), P(a1, uT, yT), P(a1, END, yT), P(a0, END, yT)], [0, 1, 0], [[0, uT / 2], [w / 2, uT / 2], [w / 2, END / 2], [0, END / 2]]);
    // tay vịn
    const A = P(0, FRONT - 0.2, y0 + 0.9), Bp = P(0, uT, yT + 0.9), C = P(0, uT + 1.5, yT + 0.9);
    wires.push(...A, ...Bp, ...Bp, ...C);
    for (const [pp, yy] of [[A, y0], [Bp, yT]]) wires.push(pp[0], yy, pp[2], ...pp);
    return s + w;
  }

  // bãi đất trống: sỏi + cỏ dại theo dốc địa hình, rào dây thấp dọc vỉa hè. Trả về quãng s kế tiếp.
  _lot(s, w, su, lot, wires, ground, FRONT) {
    const F = this._frame(s + w / 2), END = FRONT + 18.2;
    const P = (a, u) => { const x = F.x + F.fx * a + F.rx * su * u, z = F.z + F.fz * a + F.rz * su * u; return [x, ground(x, z, F.y, u) + 0.03, z]; };
    for (let u = FRONT - 0.3; u < END; u += 4) {
      const u1 = Math.min(END + 1, u + 4);
      this._q4(lot, [P(-w / 2, u), P(w / 2, u), P(w / 2, u1), P(-w / 2, u1)], [0, 1, 0], [[0, u / 3], [w / 3, u / 3], [w / 3, u1 / 3], [0, u1 / 3]]);
    }
    // rào: cọc mỗi 2 m + 2 dây ngang
    const y0 = F.y + WALK_Y;
    const Q = (a, y) => [F.x + F.fx * a + F.rx * su * (FRONT - 0.1), y0 + y, F.z + F.fz * a + F.rz * su * (FRONT - 0.1)];
    for (let a = -w / 2 + 0.3; a <= w / 2 - 0.3; a += 2) wires.push(...Q(a, 0), ...Q(a, 1.1));
    for (const y of [0.5, 1.05]) wires.push(...Q(-w / 2 + 0.3, y), ...Q(w / 2 - 0.3, y));
    return s + w;
  }

  // tứ giác tự lật chiều theo pháp tuyến n (dùng cho hẻm / bãi đất)
  _q4(B, P, n, uvs) {
    const b = B.pos.length / 3;
    for (let i = 0; i < 4; i++) { B.pos.push(...P[i]); B.nor.push(...n); B.uv.push(...uvs[i]); }
    const ax = P[1][0] - P[0][0], ay = P[1][1] - P[0][1], az = P[1][2] - P[0][2];
    const bx = P[2][0] - P[0][0], by = P[2][1] - P[0][1], bz = P[2][2] - P[0][2];
    const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
    if (cx * n[0] + cy * n[1] + cz * n[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
    else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
  }
}
