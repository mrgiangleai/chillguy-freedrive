import * as THREE from 'three';
import { ROAD } from './road.js';
import { withMist } from './mist.js';

// Mặt biển của map "Biển": sóng lấy từ model ocean_scene_animated.glb (100 khung morph, lặp 8.33 s), bake thành atlas
// assets/tex/ocean-waves.png bằng scripts/bake-ocean.mjs (R = độ cao, G/B = độ dốc). Ô sóng 27.12 m lặp khắp mặt biển;
// mép ô không liền nhau nên mỗi điểm trộn 4 lần lấy mẫu lệch nửa ô (trọng số sin² bằng 0 đúng ở mép ô).
// - Lưới tròn quanh camera: dày ở gần (sóng nhô lên thật), thưa dần, ngoài 300 m chỉ còn pháp tuyến (vành phẳng tới 6 km).
// - Vật liệu PBR: phản chiếu bầu trời/mặt trời/đèn theo Fresnel; gần bờ (đê đường) nước nông xanh ngọc, trong hơn, bọt trắng.
const TILE = 27.119, H0 = -1.317, H1 = 1.754, SLOPE = 0.8, PERIOD = 8.333, FRAMES = 100;
const NEAR_R = 300, FAR_R = 6000, SEG = 128, RINGS = 110;
const CARVE0 = ROAD.halfWidth + 1.2, CARVE1 = ROAD.halfWidth + 16;   // khớp terrain.js (đê đường thoải xuống đáy biển)
export const SEA_BED = 7;                                            // đáy biển thấp hơn mặt nước (m)
export const ROAD_N = 27, ROAD_GAP = 12;

function nearGeometry() {
  // vòng đồng tâm: bán kính r_i = R·(i/n)², 128 nan; tâm là quạt tam giác
  const pos = [0, 0, 0], idx = [];
  for (let i = 1; i <= RINGS; i++) {
    const r = NEAR_R * (i / RINGS) ** 2;
    for (let k = 0; k < SEG; k++) { const a = (k / SEG) * Math.PI * 2; pos.push(Math.cos(a) * r, 0, Math.sin(a) * r); }
  }
  const ring = (i, k) => 1 + (i - 1) * SEG + (k % SEG);
  for (let k = 0; k < SEG; k++) idx.push(0, ring(1, k + 1), ring(1, k));
  for (let i = 1; i < RINGS; i++) for (let k = 0; k < SEG; k++) {
    const a = ring(i, k), b = ring(i, k + 1), c = ring(i + 1, k), d = ring(i + 1, k + 1);
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}

function farGeometry() {
  const g = new THREE.RingGeometry(NEAR_R, FAR_R, SEG, 1).rotateX(-Math.PI / 2);
  g.deleteAttribute('uv');
  return g;
}

const WAVE = `
uniform sampler2D uWave;
uniform float uFrame, uSea;
uniform vec3 uCamW;
uniform vec3 uRoad[${ROAD_N}];
const float TILE = ${TILE.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, 10.0), floor(f / 10.0));
  return texture2D(uWave, (o * 100.0 + c * 100.0 + 0.5) / 1000.0).rgb;
}
vec3 waveOne(vec2 uv) {
  float f0 = floor(uFrame), t = uFrame - f0, f1 = mod(f0 + 1.0, ${FRAMES}.0);
  return mix(waveFrame(uv, f0), waveFrame(uv, f1), t);
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
        float fadeH = 1.0 - smoothstep(120.0, 260.0, camD);          // xa: chỉ còn pháp tuyến, mặt phẳng
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
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${H0.toFixed(3)}) / ${(H1 - H0).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
        float n = oNoise(vOW.xz * 0.9 + uFrame * 0.05) * 0.6 + oNoise(vOW.xz * 2.7 - uFrame * 0.08) * 0.4;
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
          vec2 sl = wv.yz / (1.0 + camD / 260.0);                // xa: dịu pháp tuyến (đỡ lấp lánh răng cưa)
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
    this.u = { uWave: { value: null }, uFrame: { value: 0 }, uSea: { value: 0 }, uCamW: { value: new THREE.Vector3() }, uRoad: { value: this.roadPts } };
    this.material = null;
    this._p = {};
  }

  _build() {
    const tex = new THREE.TextureLoader().load('assets/tex/ocean-waves.png');
    tex.colorSpace = THREE.NoColorSpace;
    tex.generateMipmaps = false; tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter;
    this.u.uWave.value = tex;
    this.material = oceanMaterial(this.u);
    for (const g of [nearGeometry(), farGeometry()]) {
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
    this.group.position.set(cam.x, this.level, cam.z);
    const u = this.u;
    u.uFrame.value = ((time / PERIOD) % 1) * FRAMES;
    u.uSea.value = this.level;
    u.uCamW.value.copy(cam);
    const p = this._p;
    for (let k = 0; k < ROAD_N; k++) { road.at(Math.max(0, s + (k - 13) * ROAD_GAP), p); this.roadPts[k].set(p.x, p.y, p.z); }
  }
}
