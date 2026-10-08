import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROAD } from './road.js';
import { roadTexture, glowTexture, photoTexture } from './textures.js';
import { withMist } from './mist.js';

const { chunkLen: L, step: STEP } = ROAD;
let HW = ROAD.halfWidth;                // đổi theo map (đọc lại ở setMap)
const AHEAD = 7;   // số chunk đường dựng phía trước xe
const BEHIND = 1;

function tint(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}
const flat = (g) => (g.index ? g.toNonIndexed() : g);
function merge(parts) {
  return mergeGeometries(parts.map((p) => { const g = flat(p); g.deleteAttribute('uv'); return g; }));
}

// ---- khối cây (dùng chung cho hệ địa hình) ----
export function pineGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.18, 0.28, 1.6, 6).translate(0, 0.8, 0), 0x5a3d2b),
    tint(new THREE.ConeGeometry(2.0, 3.2, 7).translate(0, 1.4 + 1.6, 0), 0x2c5a38),
    tint(new THREE.ConeGeometry(1.55, 2.8, 7).translate(0, 3.0 + 1.4, 0), 0x33673f),
    tint(new THREE.ConeGeometry(1.1, 2.4, 7).translate(0, 4.5 + 1.2, 0), 0x3b7546),
  ]);
}
export function broadleafGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.22, 0.34, 2.6, 6).translate(0, 1.3, 0), 0x634632),
    tint(new THREE.IcosahedronGeometry(1.9, 1).translate(0, 4.0, 0), 0x5b9448),
    tint(new THREE.IcosahedronGeometry(1.3, 1).translate(1.0, 3.4, 0.5), 0x66a04f),
    tint(new THREE.IcosahedronGeometry(1.2, 1).translate(-0.9, 3.2, -0.6), 0x4f873f),
  ]);
}
// bản ít đa giác cho cây ở xa
export function pineLowGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.2, 0.3, 1.6, 4).translate(0, 0.8, 0), 0x5a3d2b),
    tint(new THREE.ConeGeometry(1.9, 5.8, 5).translate(0, 1.2 + 2.9, 0), 0x31653f),
  ]);
}
export function broadLowGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.22, 0.34, 2.6, 4).translate(0, 1.3, 0), 0x634632),
    tint(new THREE.IcosahedronGeometry(2.2, 0).translate(0, 3.9, 0), 0x5b9448),
  ]);
}

// ---- cây "tấm" kiểu slowroads: thân trụ + các tấm lá đan chéo dùng atlas foliageAtlas() ----
function cardTree(crown, trunk) {
  const pos = [], nor = [], uv = [], idx = [];
  const [cx, cy, cz] = crown.center;
  const push = (x, y, z, u, v) => {
    const n = new THREE.Vector3(x - cx, (y - cy) * 0.7, z - cz).normalize().add(new THREE.Vector3(0, 0.35, 0)).normalize();
    pos.push(x, y, z); nor.push(n.x, n.y, n.z); uv.push(u, v);
  };
  for (const yaw of crown.yaws) {
    const cs = Math.cos(yaw), sn = Math.sin(yaw), b = pos.length / 3, w = crown.w / 2, h = crown.h / 2;
    push(cx - w * cs, cy - h, cz - w * sn, crown.u0, 0);
    push(cx + w * cs, cy - h, cz + w * sn, crown.u1, 0);
    push(cx + w * cs, cy + h, cz + w * sn, crown.u1, 1);
    push(cx - w * cs, cy + h, cz - w * sn, crown.u0, 1);
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
  if (crown.top) {                                   // tấm nằm ngang để nhìn từ trên xuống không bị thủng
    const b = pos.length / 3, w = crown.top / 2, y = crown.topY;
    push(cx - w, y, cz - w, crown.u0, 0); push(cx + w, y, cz - w, crown.u1, 0);
    push(cx + w, y, cz + w, crown.u1, 1); push(cx - w, y, cz + w, crown.u0, 1);
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  const t = new THREE.CylinderGeometry(trunk.r0, trunk.r1, trunk.h, 6).translate(0, trunk.h / 2, 0);
  const tuv = t.attributes.uv;
  for (let i = 0; i < tuv.count; i++) tuv.setXY(i, 0.94, 0.88);   // vùng màu vỏ cây trong atlas
  return mergeGeometries([t, g]);
}
export function cardBroadleafGeometry() {
  return cardTree({ center: [0, 4.7, 0], w: 5.4, h: 5.0, yaws: [0, Math.PI / 3, (2 * Math.PI) / 3], u0: 0, u1: 0.5, top: 4.4, topY: 5.0 },
    { r0: 0.16, r1: 0.26, h: 3.0 });
}
export function cardPineGeometry() {
  return cardTree({ center: [0, 5.1, 0], w: 3.8, h: 8.2, yaws: [0, Math.PI / 3, (2 * Math.PI) / 3], u0: 0.5, u1: 0.75 },
    { r0: 0.13, r1: 0.22, h: 1.8 });
}

// Đèn đường: cột cao 11.1 m (×1.5 so với trước), bóng đèn ở 10.9 m
const LAMP_H = 11.1, BULB_H = LAMP_H - 0.22;
// Ánh sáng đèn đường = SpotLight thật (chiếu cả mặt đường, cỏ, cây, xe). Số đèn cố định (không biên dịch lại shader),
// gán cho các cột gần camera nhất; đèn sắp bị đổi sang cột khác mờ dần về 0 trước khi đổi => không chớp.
const LAMP_LIGHTS = 3;
export const STREETLIGHT_DEFAULTS = Object.freeze({
  intensity: 28, distance: 118, angle: 1.2, penumbra: 0.8, decay: 0.6,
  glowOpacity: 0.9, glowSize: 9, color: '#ffc98a',
});

function lampGeometry() {
  // cột đèn: cột + tay đòn kéo về phía -x (hướng vào đường)
  return merge([
    new THREE.CylinderGeometry(0.08, 0.13, LAMP_H, 6).translate(0, LAMP_H / 2, 0),
    new THREE.BoxGeometry(1.9, 0.08, 0.1).translate(-0.9, LAMP_H, 0),
    new THREE.BoxGeometry(0.5, 0.1, 0.22).translate(-1.75, LAMP_H - 0.07, 0),
  ]);
}

// ---- shader mặt đường ướt ----
const ROAD_PARS = `#include <common>
varying vec3 vRW;
uniform float uWet, uPuddle, uRain, uRainT, uReflOn, uPlaneY;
uniform sampler2D uReflTex, uDirtTex;
uniform float uSunHide;
uniform vec3 uGrassCol;
varying float vDirt;
uniform mat4 uReflMat;
float rHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float rNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(rHash(i), rHash(i + vec2(1.0, 0.0)), f.x), mix(rHash(i + vec2(0.0, 1.0)), rHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// gợn sóng tròn do giọt mưa (trả về độ dốc theo x,z)
vec2 rRipple(vec2 p, float t) {
  vec2 g = vec2(0.0);
  for (int k = 0; k < 2; k++) {
    vec2 q = p * (k == 0 ? 2.3 : 3.4) + float(k) * 17.0;
    vec2 cell = floor(q), f = fract(q);
    vec2 c = vec2(rHash(cell + 1.7), rHash(cell + 3.1)) * 0.6 + 0.2;
    float ph = fract(t * (0.8 + 0.4 * rHash(cell + 9.3)) + rHash(cell));
    vec2 dv = f - c;
    float r = length(dv), rr = ph * 0.5;
    float ring = sin((r - rr) * 70.0) * (1.0 - ph) * (1.0 - smoothstep(0.0, 0.06, abs(r - rr)));
    g += dv / max(r, 1e-3) * ring;
  }
  return g;
}`;
const ROAD_PUDDLE = `
float across = vMapUv.x;
// đường đất xuyên rừng: đất có vệt bánh xe, mép cỏ lấn vào (lòng đường hẹp lại), không vạch kẻ
if (vDirt > 0.001) {
  vec3 dirt = texture2D(uDirtTex, vRW.xz / 3.2).rgb * (0.82 + 0.36 * rNoise(vRW.xz * 0.35));
  float rut = min(abs(across - 0.37), abs(across - 0.63));
  dirt *= 1.0 - 0.3 * (1.0 - smoothstep(0.0, 0.06, rut));
  float en = (rNoise(vRW.xz * 0.55) - 0.5) * 0.12 + (rNoise(vRW.xz * 2.1) - 0.5) * 0.05;
  float grassK = smoothstep(0.29, 0.36, abs(across - 0.5) + en);
  vec3 grass = uGrassCol * (0.7 + 0.6 * rNoise(vRW.xz * 1.9)) * (0.85 + 0.3 * rNoise(vRW.xz * 0.21));
  diffuseColor.rgb = mix(diffuseColor.rgb, mix(dirt, grass, grassK) * diffuse, vDirt);
}
float rut = 1.0 - smoothstep(0.0, 0.07, min(abs(across - 0.27), abs(across - 0.73)));
float edgeW = 1.0 - smoothstep(0.0, 0.12, min(across, 1.0 - across));
float pn = rNoise(vRW.xz * 0.2) * 0.6 + rNoise(vRW.xz * 0.85 + 3.1) * 0.4;
float pth = 0.6 - 0.13 * rut - 0.1 * edgeW;
float puddle = smoothstep(pth, pth + 0.05, pn) * uPuddle;
diffuseColor.rgb *= mix(1.0, 0.32, puddle);
vec2 ripG = rRipple(vRW.xz, uRainT) * uRain * puddle;
`;
const ROAD_REFL = `
if (uReflOn > 0.5) {
  vec4 rc = uReflMat * vec4(vRW, 1.0);
  vec2 ruv = rc.xy / rc.w + ripG * 0.012;
  vec3 refl = vec3(0.0);
  float spread = mix(0.012, 0.004, puddle);                 // đường ướt (không vũng) => phản chiếu kéo dọc, nhoè
  for (int k = 0; k < 4; k++) refl += texture2D(uReflTex, ruv + vec2(0.0, float(k) * spread)).rgb;
  refl *= 0.25;
  vec3 V = normalize(cameraPosition - vRW);
  float fres = 0.02 + 0.98 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
  float fade = (1.0 - smoothstep(1.0, 4.0, abs(vRW.y - uPlaneY))) * (1.0 - smoothstep(90.0, 170.0, length(vRW - cameraPosition)));
  float kR = clamp((puddle * 0.95 + 0.15 * uWet * (1.0 - puddle)) * fres * fade, 0.0, 1.0);   // ngoài vũng: chỉ loáng nhẹ
  outgoingLight = mix(outgoingLight, refl, kR);
}`;

// Mặt đường + cọc tiêu + đèn đường, dựng theo từng đoạn (chunk) dọc đường
export class Scenery {
  constructor(scene, road, renderer) {
    this.scene = scene;
    this.road = road;
    this.chunks = new Map();
    this.queue = [];
    this.tmp = {};
    this.map = 'reed';
    this.lastS = 150;

    this.roadTex = roadTexture(renderer);
    this.cityTex = roadTexture(renderer, true);       // phố: nhựa trơn, vạch kẻ vẽ riêng (city.js)
    this.roadMat = new THREE.MeshStandardMaterial({
      map: this.roadTex, roughness: 0.9, metalness: 0,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    // đường ướt: vũng nước + gợn sóng giọt mưa + phản chiếu (planar reflection)
    this.roadU = {
      uWet: { value: 0 }, uPuddle: { value: 0 }, uRain: { value: 0 }, uRainT: { value: 0 },
      uReflTex: { value: null }, uReflMat: { value: new THREE.Matrix4() }, uReflOn: { value: 0 }, uPlaneY: { value: 0 },
      uSunHide: { value: 0 }, uDirtTex: { value: photoTexture('dirt', renderer) }, uGrassCol: { value: new THREE.Color('#5c6b34') },
    };
    this.roadMat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.roadU);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vRW;\nattribute float aDirt;\nvarying float vDirt;')
        .replace('#include <project_vertex>', '#include <project_vertex>\nvRW = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvDirt = aDirt;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', ROAD_PARS)
        .replace('#include <map_fragment>', '#include <map_fragment>\n' + ROAD_PUDDLE)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          // nhựa đường sần: hạt nhám làm độ nhám lốm đốm (không trơn bóng đều), vũng nước vẫn nhẵn
          float agg = rNoise(vRW.xz * 26.0) * 0.6 + rNoise(vRW.xz * 83.0) * 0.4;
          roughnessFactor = clamp(roughnessFactor + (agg - 0.5) * 0.35, 0.45, 1.0);
          roughnessFactor = mix(roughnessFactor, max(roughnessFactor, 0.97 - 0.45 * uWet), vDirt);
          roughnessFactor = mix(roughnessFactor, 0.03, puddle);`)
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          normal = normalize(normal + (viewMatrix * vec4(ripG.x, 0.0, ripG.y, 0.0)).xyz * 0.35);
          // vân hạt nhựa đường (bump theo đạo hàm màn hình, mờ dần ở xa để không lấp lánh)
          {
            float gh = rNoise(vRW.xz * 26.0) * 0.55 + rNoise(vRW.xz * 83.0) * 0.45;
            vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
            vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
            float det = dot(dpx, r1);
            float fade = (1.0 - smoothstep(0.25, 0.9, fwidth(vRW.x * 83.0) + fwidth(vRW.z * 83.0))) * (1.0 - puddle);
            vec3 grad = sign(det) * (dFdx(gh) * r1 + dFdy(gh) * r2);
            normal = normalize(abs(det) * normal - grad * 0.22 * fade);
          }`)
        .replace('#include <lights_fragment_end>', '#include <lights_fragment_end>\n// trời âm u / mưa: mặt trời bị mây che => vũng nước không loé sáng như soi mặt trời\nreflectedLight.directSpecular *= 1.0 - uSunHide * puddle;')
        .replace('#include <opaque_fragment>', ROAD_REFL + '\n#include <opaque_fragment>');
    };
    this.railMat = new THREE.MeshStandardMaterial({ color: 0xb9bec4, roughness: 0.35, metalness: 0.75, side: THREE.DoubleSide });
    this.poleMat = new THREE.MeshStandardMaterial({ color: 0x4a4f55, roughness: 0.6, metalness: 0.4 });
    this.postMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e0, roughness: 0.7 });
    this.bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false });

    const glow = glowTexture();
    this.glowMat = new THREE.PointsMaterial({
      map: glow, color: 0xffc98a, size: 9, transparent: true, opacity: 0, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });

    for (const m of [this.roadMat, this.poleMat, this.postMat, this.bulbMat, this.glowMat, this.railMat]) withMist(m);
    // nón sáng rộng (nửa góc 1.2 rad, chếch vào lòng đường như chao đèn đường thật => vùng sáng ~Ø 60 m dọc đường),
    // suy giảm chậm (decay 0.6, như đèn pha) để vùng sáng trải đều thay vì một đốm gắt dưới chân cột
    this.lampOn = 0;
    this.lampTune = { ...STREETLIGHT_DEFAULTS };
    this.lampLights = Array.from({ length: LAMP_LIGHTS }, () => {
      const l = new THREE.SpotLight(0xffc98a, 0, 80, 1.2, 0.8, 0.6);
      this.scene.add(l, l.target);
      return l;
    });
    this._lampList = [];
    this.lampGeo = lampGeometry();
    this.railPostGeo = new THREE.BoxGeometry(0.12, 0.8, 0.12).translate(0, 0.4, 0);
    this.postGeo = new THREE.BoxGeometry(0.12, 0.95, 0.12).translate(0, 0.475, 0);
    this.bulbGeo = new THREE.SphereGeometry(0.2, 8, 6);
  }

  // dựng lại toàn bộ (đổi map => đổi độ cao đường)
  setMap(map) {
    this.map = map;
    HW = ROAD.halfWidth;
    this.roadMat.map = map === 'city' ? this.cityTex : this.roadTex;
    for (const c of this.chunks.values()) this._dispose(c);
    this.chunks.clear();
    this.queue.length = 0;
    this.prime(this.lastS);
  }

  // s = độ dài cung hiện tại của xe
  update(s, budget = 2) {
    this.lastS = s;
    const k = Math.floor(s / L);
    for (let i = Math.max(0, k - BEHIND); i <= k + AHEAD; i++) {
      if (!this.chunks.has(i) && !this.queue.includes(i)) this.queue.push(i);
    }
    this.queue.sort((a, b) => a - b);
    for (let n = 0; n < budget && this.queue.length; n++) {
      const i = this.queue.shift();
      if (i >= k - BEHIND && i <= k + AHEAD) this._build(i);
    }
    for (const [i, c] of this.chunks) {
      if (i < k - BEHIND) { this._dispose(c); this.chunks.delete(i); }
    }
  }

  prime(s) { this.update(s, 999); }

  apply(st) {
    const on = st.lamps;
    const c = new THREE.Color(0x8a8a86).lerp(new THREE.Color(this.lampTune.color), on);
    this.bulbMat.color.copy(c).multiplyScalar(0.6 + 1.6 * on);
    this.lampOn = on;
    this.glowMat.opacity = on * this.lampTune.glowOpacity;
    this.glowMat.size = this.lampTune.glowSize;
    this.glowMat.color.set(this.lampTune.color);
    this.roadMat.roughness = 0.92 - 0.3 * st.wet;          // ướt vẫn sần (chỉ vũng nước mới nhẵn bóng)
    this.roadMat.envMapIntensity = 0.38 + 0.3 * st.wet;    // đường khô: ít phản chiếu trời (không bị ngả xanh)
    const d = (1 - 0.4 * st.wet) * (1 - 0.25 * st.dark);
    this.roadMat.color.setRGB(d, d, d);
    const u = this.roadU;
    u.uWet.value = st.wet;
    u.uPuddle.value = st.wet;                               // vũng nước giữ nguyên hình, chỉ hiện dần (crossfade)
    u.uRain.value = st.rain;
    u.uSunHide.value = Math.min(1, st.overcast * 1.2 + st.rain);
  }

  // gán SpotLight cho các cột đèn gần camera nhất. Mức sáng của đèn thứ i giảm dần khi khoảng cách của nó tiến tới khoảng
  // cách cột kế tiếp (cột sẽ thay chỗ) => lúc đổi cột cả hai đều ~0, không thấy chớp.
  updateLights(cam) {
    const list = this._lampList; list.length = 0;
    for (const c of this.chunks.values()) for (const L of c.userData.lamps || []) {
      const [b] = L;
      list.push({ L, d: Math.hypot(b[0] - cam.x, b[1] - cam.y, b[2] - cam.z) });
    }
    list.sort((a, b) => a.d - b.d);
    const dNext = list.length > LAMP_LIGHTS ? list[LAMP_LIGHTS].d : Infinity;
    this.lampLights.forEach((l, i) => {
      const e = list[i];
      if (!e || this.lampOn <= 0) { l.intensity = 0; return; }
      const fade = dNext === Infinity ? 1 : Math.min(1, Math.max(0, (dNext - e.d) / (0.3 * dNext)));
      const [b, t] = e.L;
      l.position.set(b[0], b[1], b[2]);
      l.target.position.set(t[0], t[1], t[2]);
      l.target.updateMatrixWorld();
      const tune = this.lampTune;
      l.color.set(tune.color); l.distance = tune.distance; l.angle = tune.angle;
      l.penumbra = tune.penumbra; l.decay = tune.decay;
      l.intensity = tune.intensity * this.lampOn * fade * fade * (3 - 2 * fade);
    });
  }

  // Trả về true khi người dùng bấm gần một bóng đèn đường đang nhìn thấy.
  hitLamp(camera, clientX, clientY, rect, radius = 48) {
    const p = new THREE.Vector3();
    for (const c of this.chunks.values()) for (const [b] of c.userData.lamps || []) {
      p.set(b[0], b[1], b[2]).project(camera);
      if (p.z < -1 || p.z > 1) continue;
      const x = rect.left + (p.x + 1) * rect.width * 0.5;
      const y = rect.top + (1 - p.y) * rect.height * 0.5;
      if (Math.hypot(clientX - x, clientY - y) <= radius) return true;
    }
    return false;
  }

  // gắn texture phản chiếu (hoặc tắt) cho mặt đường
  setReflection(refl, time) {
    const u = this.roadU;
    u.uRainT.value = time;
    u.uReflOn.value = refl.active ? 1 : 0;
    if (refl.active) {
      u.uReflTex.value = refl.rt.texture;
      u.uReflMat.value.copy(refl.texMatrix);
      u.uPlaneY.value = refl.planeY;
    }
  }

  _build(k) {
    const group = new THREE.Group();
    const road = this.road;
    const s0 = k * L;
    const p = this.tmp;

    // mặt đường (cao hơn mặt đất 5 cm)
    const N = L / STEP;
    const pos = new Float32Array((N + 1) * 6);
    const uv = new Float32Array((N + 1) * 4);
    const nor = new Float32Array((N + 1) * 6);
    const dirt = new Float32Array((N + 1) * 2);
    const idx = [];
    for (let i = 0; i <= N; i++) {
      const s = s0 + i * STEP;
      road.at(s, p);
      const rx = Math.cos(p.th), rz = -Math.sin(p.th), y = p.y + 0.05;
      pos.set([p.x - rx * HW, y, p.z - rz * HW, p.x + rx * HW, y, p.z + rz * HW], i * 6);
      uv.set([0, s / 12, 1, s / 12], i * 4);
      nor.set([0, 1, 0, 0, 1, 0], i * 6);
      const dk = road.dirtAt(s);
      dirt[i * 2] = dirt[i * 2 + 1] = dk;
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setAttribute('aDirt', new THREE.BufferAttribute(dirt, 1));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const roadMesh = new THREE.Mesh(geo, this.roadMat);
    roadMesh.receiveShadow = true;
    roadMesh.layers.set(3);
    group.add(roadMesh);
    group.userData.own = [geo];

    // cọc tiêu hai bên đường
    const posts = [];
    for (let s = s0; s < s0 + L && this.map !== 'city'; s += 12) {
      if (road.dirtAt(s) > 0.05) continue;          // đường đất: không có cọc tiêu
      road.at(s, p);
      for (const side of (this.map === 'mountain' ? [-1] : [-1, 1])) {
        posts.push([p.x + Math.cos(p.th) * (HW + 0.7) * side, p.y, p.z - Math.sin(p.th) * (HW + 0.7) * side]);
      }
    }
    const pm = new THREE.InstancedMesh(this.postGeo, this.postMat, posts.length);
    const m4 = new THREE.Matrix4();
    posts.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); pm.setMatrixAt(i, m4); });
    group.add(pm);

    // hộ lan bên vực (map đường núi): dải thép + cột mỗi 4 m
    if (this.map === 'mountain') {
      const RN = L / STEP, rp = new Float32Array((RN + 1) * 6), ri = [];
      const rposts = [];
      for (let i = 0; i <= RN; i++) {
        const s = s0 + i * STEP;
        road.at(s, p);
        const x = p.x + Math.cos(p.th) * (HW + 0.55), z = p.z - Math.sin(p.th) * (HW + 0.55);
        rp.set([x, p.y + 0.5, z, x, p.y + 0.82, z], i * 6);
        if (i < RN) { const a = i * 2; ri.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
        if (i % 2 === 0) rposts.push([x, p.y, z]);
      }
      const rg = new THREE.BufferGeometry();
      rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
      rg.setIndex(ri);
      rg.computeVertexNormals();
      const rail = new THREE.Mesh(rg, this.railMat);
      rail.castShadow = true;
      group.add(rail);
      group.userData.own.push(rg);
      const rpm = new THREE.InstancedMesh(this.railPostGeo, this.poleMat, rposts.length);
      rposts.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); rpm.setMatrixAt(i, m4); });
      group.add(rpm);
    }

    // đèn đường (xen kẽ hai bên)
    const lamps = [], bulbs = [], targets = [];
    const city = this.map === 'city';
    const lampN = city ? 4 : this.map === 'reed' ? 2 : 1, lampGap = L / lampN;
    for (let i = 0; i < lampN; i++) {
      const s = s0 + i * lampGap + (city ? 21 : 6);          // phố: lệch khỏi cột điện (mỗi 30 m, ở +8)
      if (road.dirtAt(s) > 0.05) continue;          // đường đất: không có đèn đường
      if (city) { const j = road.nearJunction(s); if (j !== null && Math.abs(s - j) < 16) continue; }   // phố: không đặt giữa ngã tư / vạch qua đường
      road.at(s, p);
      const side = this.map === 'mountain' ? -1 : (Math.round(s / lampGap) % 2) ? 1 : -1;
      const off = HW + (city ? 0.9 : 1.4);
      const x = p.x + Math.cos(p.th) * off * side;
      const z = p.z - Math.sin(p.th) * off * side;
      // tay đòn hướng về tim đường: side=+1 (bên phải) => local -x => yaw = th ; bên trái => xoay thêm PI
      const yaw = p.th + (side === 1 ? 0 : Math.PI);
      lamps.push([x, p.y, z, yaw]);
      const ax = -Math.cos(yaw) * 1.75, az = Math.sin(yaw) * 1.75;
      bulbs.push([x + ax, p.y + BULB_H, z + az]);
      // hướng chiếu: thẳng xuống, hơi chếch vào lòng đường
      targets.push([x + ax * 4.5, p.y, z + az * 4.5]);
    }
    const lm = new THREE.InstancedMesh(this.lampGeo, this.poleMat, lamps.length);
    const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    lamps.forEach(([x, y, z, yaw], i) => {
      q.setFromAxisAngle(up, yaw);
      m4.compose(v.set(x, y, z), q, one);
      lm.setMatrixAt(i, m4);
    });
    lm.castShadow = true;
    group.add(lm);

    const bm = new THREE.InstancedMesh(this.bulbGeo, this.bulbMat, bulbs.length);
    bulbs.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); bm.setMatrixAt(i, m4); });
    group.add(bm);

    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(bulbs.flat(), 3));
    const glowPts = new THREE.Points(gg, this.glowMat);
    glowPts.frustumCulled = false;
    glowPts.renderOrder = 3;
    group.add(glowPts);
    group.userData.own.push(gg);
    group.userData.lamps = bulbs.map((b, i) => [b, targets[i]]);

    this.scene.add(group);
    this.chunks.set(k, group);
  }

  _dispose(group) {
    this.scene.remove(group);
    group.userData.own.forEach((g) => g.dispose());
    group.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
  }
}
