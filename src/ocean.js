import * as THREE from 'three';
import { ROAD } from './road.js';
import { withMist } from './mist.js';

// Mặt biển của map "Biển": sóng lấy từ model ocean_scene_animated.glb, bake thành atlas assets/tex/ocean-waves.png bằng
// scripts/bake-ocean.mjs (R = độ cao, G/B = độ dốc; 76 khung đã trộn chéo cho lặp liền — bản gốc nhảy mỗi vòng).
// Ô sóng phóng ×2 (54 m), cao ×1.3, chậm √2 (sóng to thì chu kỳ dài). Mép ô gốc không liền nên mỗi điểm trộn 4 lần lấy mẫu
// lệch nửa ô (trọng số sin² bằng 0 đúng ở mép ô).
// - Lưới vuông đều 1.5 m (240 m) gắn theo camera nhưng NẮN THEO BƯỚC LƯỚI => mỗi đỉnh đứng yên tại toạ độ thế giới cố định
//   (không "trôi"/rung sóng khi xe chạy); sóng nhô lên thật trong ~100 m, xa hơn chỉ còn pháp tuyến (vành phẳng tới 6 km).
// - Pixel ở xa lấy mức mipmap thô hơn (bớt lấp lánh răng cưa).
// - Vật liệu PBR: phản chiếu bầu trời/mặt trời/đèn theo Fresnel; gần bờ (đê đường) nước nông xanh ngọc, trong hơn, bọt trắng.
const SCALE = 2, HSCALE = 1.3;
const TILE = 27.119 * SCALE, H0 = -1.317 * HSCALE, H1 = 1.754 * HSCALE, SLOPE = 0.8 * HSCALE / SCALE;
const FRAMES = 76, COLS = 10, ROWS = 8, PERIOD = 6.333 * Math.SQRT2;
// sóng trong model trôi đều ~(−0.5, +2.25) điểm ảnh mỗi khung (đo bằng tương quan giữa các khung liền nhau): nội suy giữa
// hai khung phải DỜI theo hướng trôi, không thì đỉnh sóng mờ đi rồi hiện ở chỗ mới (trông giật ~8 lần/giây)
const DRIFT = [-0.5 / 99, 2.25 / 99];
// "ẩn hiện" chỗ nối vòng lặp: hai lớp sóng lệch nhau nửa vòng; mỗi lớp mờ xuống 30% đúng lúc nó quay về khung đầu,
// lớp kia đang ở giữa vòng (100%) che đi => không thấy điểm nối. Trộn giữ biên độ (chia √(wA² + wB²) quanh giá trị giữa)
const SEAM_MIN = 0.3;
const WAVE_VER = 3;                                                  // đổi khi bake lại atlas (tránh trình duyệt dùng ảnh cũ)
const STEP = 1.5, INNER = 120, OUTER = 400, OSTEP = 8, FAR_R = 6000;   // lưới gần / vành giữa / vành xa (m)
const CARVE0 = ROAD.halfWidth + 1.2, CARVE1 = ROAD.halfWidth + 16;   // khớp terrain.js (đê đường thoải xuống đáy biển)
export const SEA_BED = 7;                                            // đáy biển thấp hơn mặt nước (m)
export const ROAD_N = 27, ROAD_GAP = 12;

function geometry(pos, idx) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(pos.map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}

// lưới vuông [-half, half]² bước `step`, bỏ các ô nằm trong lỗ [-hole, hole]² (hole = 0: không lỗ)
function gridGeometry(half, step, hole = 0) {
  const n = Math.round((2 * half) / step), pos = [], idx = [];
  for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) pos.push(-half + i * step, 0, -half + j * step);
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const x0 = -half + i * step, z0 = -half + j * step;
    if (hole && x0 >= -hole - 1e-6 && x0 + step <= hole + 1e-6 && z0 >= -hole - 1e-6 && z0 + step <= hole + 1e-6) continue;
    const a = j * (n + 1) + i, b = a + 1, c = a + n + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  return geometry(pos, idx);
}

// khung vuông phẳng từ OUTER tới FAR_R (4 hình thang)
function farGeometry() {
  const a = OUTER, b = FAR_R, pos = [-a, 0, -a, a, 0, -a, a, 0, a, -a, 0, a, -b, 0, -b, b, 0, -b, b, 0, b, -b, 0, b];
  const idx = [];
  for (let k = 0; k < 4; k++) { const i0 = k, i1 = (k + 1) % 4, o0 = k + 4, o1 = (k + 1) % 4 + 4; idx.push(i0, o0, i1, i1, o0, o1); }
  return geometry(pos, idx);
}

const WAVE = `
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${ROAD_N}];
const float TILE = ${TILE.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${COLS}.0), floor(f / ${COLS}.0));
  return textureLod(uWave, (o * 100.0 + 0.5 + c * 99.0) / vec2(${COLS * 100}.0, ${ROWS * 100}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${FRAMES}.0);
  vec2 v = vec2(${DRIFT[0].toFixed(5)}, ${DRIFT[1].toFixed(5)});
  return mix(waveFrame(uv - v * t, f0), waveFrame(uv + v * (1.0 - t), f1), t);
}
vec3 waveOne(vec2 uv) {
  return 0.5 + ((waveLayer(uv, uFrame) - 0.5) * uWA + (waveLayer(uv, uFrameB) - 0.5) * uWB) / sqrt(uWA * uWA + uWB * uWB);
}
// (độ cao, dh/dx, dh/dz) tại điểm thế giới p (xz)
vec3 waveAt(vec2 p) {
  vec2 uv = ROT * p / TILE;
  vec2 s = sin(3.14159265 * fract(uv)); vec2 w = s * s;
  vec3 a = waveOne(uv) * (w.x * w.y) + waveOne(uv + vec2(0.5, 0.0)) * ((1.0 - w.x) * w.y)
         + waveOne(uv + vec2(0.0, 0.5)) * (w.x * (1.0 - w.y)) + waveOne(uv + 0.5) * ((1.0 - w.x) * (1.0 - w.y));
  float h = mix(${H0.toFixed(3)}, ${H1.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2 * SLOPE).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;

function oceanMaterial(u) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0, transparent: true, depthWrite: true });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${WAVE}\nvarying vec3 vOW; varying float vDepth, vShore;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${ROAD_N - 1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${SEA_BED.toFixed(1)}, smoothstep(${CARVE0.toFixed(2)}, ${CARVE1.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\n${WAVE}\nvarying vec3 vOW; varying float vDepth, vShore;\nfloat oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`)
      .replace('#include <map_fragment>', `
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (atlas khung 100 px => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${H0.toFixed(3)}) / ${(H1 - H0).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
        // bọt trôi theo thời gian liên tục (trước dùng uFrame => bọt nhảy mỗi lần vòng sóng quay về đầu)
        float n = oNoise(vOW.xz * 0.9 + uT * 0.45) * 0.6 + oNoise(vOW.xz * 2.7 - uT * 0.7) * 0.4;
        float dep = mix(20.0, vDepth, vShore);
        float shallow = 1.0 - smoothstep(0.5, 6.0, dep);
        // bọt: ven bờ (nước rất nông, vỗ theo nhịp sóng) + đầu ngọn sóng cao
        oFoam = clamp((1.0 - smoothstep(0.0, 0.9 + 0.5 * n, dep)) * (0.55 + 0.45 * n) + crest * smoothstep(0.62, 0.9, n) * 0.5, 0.0, 1.0);
        vec3 deep = vec3(0.010, 0.050, 0.065), turq = vec3(0.05, 0.30, 0.30);
        diffuseColor.rgb = mix(mix(deep, turq, shallow), vec3(0.75, 0.80, 0.82), oFoam);
        diffuseColor.a = mix(mix(1.0, 0.55, shallow), 0.95, oFoam);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor + smoothstep(150.0, 1500.0, camD) * 0.12, 0.85, oFoam);')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec2 sl = wv.yz / (1.0 + camD / 400.0);                // xa: dịu pháp tuyến (đỡ lấp lánh răng cưa)
          vec3 nw = normalize(vec3(-sl.x, 1.0, -sl.y));
          normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
        }`);
  };
  m.customProgramCacheKey = () => 'ocean';
  return withMist(m);
}

export class Ocean {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.level = 0;
    this.roadPts = Array.from({ length: ROAD_N }, () => new THREE.Vector3());
    this.u = { uWave: { value: null }, uFrame: { value: 0 }, uFrameB: { value: 0 }, uWA: { value: 1 }, uWB: { value: 0 }, uT: { value: 0 }, uSea: { value: 0 }, uLod: { value: 3000 }, uCamW: { value: new THREE.Vector3() }, uRoad: { value: this.roadPts } };
    this.material = null;
    this._p = {};
  }

  _build() {
    const tex = new THREE.TextureLoader().load('assets/tex/ocean-waves.png?v=' + WAVE_VER);
    tex.colorSpace = THREE.NoColorSpace;
    tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    this.u.uWave.value = tex;
    this.material = oceanMaterial(this.u);
    for (const g of [gridGeometry(INNER, STEP), gridGeometry(OUTER, OSTEP, INNER), farGeometry()]) {
      const m = new THREE.Mesh(g, this.material);
      m.frustumCulled = false;
      m.receiveShadow = true;
      m.renderOrder = 1;
      this.group.add(m);
    }
  }

  // on: map biển; level: mực nước (m)
  setMap(on, level = 0) {
    this.group.visible = on;
    this.level = level;
    if (on && !this.material) this._build();
  }

  update(time, cam, road, s) {
    if (!this.group.visible) return;
    // nắn theo bước lưới gần: đỉnh lưới luôn ở toạ độ thế giới cố định => sóng không trôi / rung khi camera di chuyển
    this.group.position.set(Math.round(cam.x / STEP) * STEP, this.level, Math.round(cam.z / STEP) * STEP);
    const u = this.u;
    const ph = (time / PERIOD) % 1, sA = Math.sin(Math.PI * ph) ** 2;
    u.uFrame.value = ph * FRAMES;
    u.uT.value = time % 1000;
    u.uFrameB.value = ((ph + 0.5) % 1) * FRAMES;
    u.uWA.value = SEAM_MIN + (1 - SEAM_MIN) * sA;            // lớp A: 30% ở chỗ nối của nó (ph = 0), 100% giữa vòng
    u.uWB.value = SEAM_MIN + (1 - SEAM_MIN) * (1 - sA);      // lớp B: ngược lại
    u.uSea.value = this.level;
    u.uCamW.value.copy(cam);
    u.uLod.value = 1500 * Math.max(1, (cam.y - this.level) / 3);   // camera cao: nhìn bớt xiên => mipmap mịn hơn
    const p = this._p;
    // điểm tim đường nắn theo bước 12 m (cố định trên đường) => dải nước nông / bọt ven đê không "thở" theo xe
    const s0 = Math.round(s / ROAD_GAP) * ROAD_GAP;
    for (let k = 0; k < ROAD_N; k++) { road.at(Math.max(0, s0 + (k - 13) * ROAD_GAP), p); this.roadPts[k].set(p.x, p.y, p.z); }
  }
}
