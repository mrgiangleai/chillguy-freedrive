import * as THREE from 'three';
import { plumeTexture } from './textures.js';
import { ROAD } from './road.js';

// Cánh đồng cỏ lau vô tận.
// - Mỗi "khóm" = vài lá cỏ cong + 1 cặp bông trắng; vẽ bằng instancing (không có cập nhật CPU theo từng khóm).
// - Vị trí khóm được "cuộn vòng" quanh camera ngay trong vertex shader => cánh đồng đi theo camera, không bao giờ hết.
// - Gió: sóng gió chạy ngang cánh đồng + rung nhẹ, biên độ theo uWind.
// - Khóm cỏ tự thu nhỏ về 0 khi tới gần mặt đường (đường được truyền dưới dạng đường gấp khúc).
export const ROAD_PTS = 27;
export const ROAD_PT_GAP = 12;

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function leafGeometry() {
  const r = rng(3);
  const pos = [], nor = [], col = [], idx = [];
  const cBase = new THREE.Color(0x6a6030), cMid = new THREE.Color(0xa99a56), cTip = new THREE.Color(0xe0cf92);
  const push = (x, y, z, c, n) => { pos.push(x, y, z); col.push(c.r, c.g, c.b); nor.push(n[0], n[1], n[2]); };
  const BL = 5;
  for (let b = 0; b < BL; b++) {
    const a = (b / BL) * Math.PI * 2 + (r() - 0.5) * 0.7;
    const dx = Math.cos(a), dz = Math.sin(a), px = -dz, pz = dx;
    const H = 1.05 + r() * 0.6, L = 0.35 + r() * 0.45;
    const n = new THREE.Vector3(dx * 0.35, 1, dz * 0.35).normalize().toArray();
    const rows = [
      { c: [dx * 0.03, 0, dz * 0.03], hw: 0.034, col: cBase },
      { c: [dx * L * 0.4, H * 0.6, dz * L * 0.4], hw: 0.03, col: cMid },
    ];
    const v0 = pos.length / 3;
    for (const row of rows) {
      push(row.c[0] - px * row.hw, row.c[1], row.c[2] - pz * row.hw, row.col, n);
      push(row.c[0] + px * row.hw, row.c[1], row.c[2] + pz * row.hw, row.col, n);
    }
    push(dx * L, H * 0.92, dz * L, cTip, n);                 // đầu lá
    idx.push(v0, v0 + 1, v0 + 2, v0 + 1, v0 + 3, v0 + 2, v0 + 2, v0 + 3, v0 + 4);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

function plumeGeometry() {
  const pos = [], nor = [], uv = [], idx = [];
  const quad = (yaw, top, w, h, lean) => {
    const cs = Math.cos(yaw), sn = Math.sin(yaw);
    const v0 = pos.length / 3;
    for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
      const x = (u - 0.5) * w, y = top - h + v * h;
      const lx = lean * v * v;
      pos.push(x * cs + lx, y, x * sn);
      nor.push(0, 1, 0);
      uv.push(u, v);
    }
    idx.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
  };
  quad(0.3, 2.0, 0.34, 0.98, 0.1);
  quad(0.3 + Math.PI / 2, 2.0, 0.34, 0.98, 0.1);
  quad(1.3, 1.72, 0.27, 0.74, -0.06);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

const VERT_PARS = `
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec2 uRoad[${ROAD_PTS}];
float roadDist(vec2 p) {
  float dm = 1e9;
  for (int i = 0; i < ${ROAD_PTS - 1}; i++) {
    vec2 a = uRoad[i], b = uRoad[i + 1], ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    dm = min(dm, length(p - a - ab * t));
  }
  return dm;
}
`;

const VERT_BODY = `
vec2 basePos = aSeed.xy * uCell;
vec2 rel = mod(basePos - uCam.xz + uCell * 0.5, uCell) - uCell * 0.5;
vec2 wp = uCam.xz + rel;
float dist = length(rel);
float vis = smoothstep(uIn0, uIn1, dist) * (1.0 - smoothstep(uOut0, uOut1, dist));
vis *= smoothstep(uCorr, uCorr + 1.5, roadDist(wp));
float h = (0.72 + 0.6 * aSeed.w) * uScale * vis;
float ang = aSeed.z * 6.2831853;
float cs = cos(ang), sn = sin(ang);
float tip = clamp(position.y / 1.95, 0.0, 1.0);
vec3 transformed = vec3(position.x * cs - position.z * sn, position.y, position.x * sn + position.z * cs) * h;
// gió: sóng chạy theo hướng gió + sóng ngang + rung
float phase = dot(wp, uWindDir) * 0.07 - uTime * (1.1 + uWind * 1.7);
float wave = 0.5 + 0.5 * sin(phase);
float wave2 = 0.5 + 0.5 * sin(dot(wp, vec2(-uWindDir.y, uWindDir.x)) * 0.12 + uTime * 0.9 + phase * 0.35);
float amp = (0.07 + 0.95 * uWind) * (0.3 + 0.7 * wave) * (0.65 + 0.35 * wave2);
float bend = amp * tip * tip;
transformed.xz += uWindDir * bend * h * 1.15;
transformed.xz += vec2(sin(uTime * 7.0 + wp.x * 1.7), cos(uTime * 8.3 + wp.y * 1.9)) * 0.035 * uWind * tip * h;
transformed.y -= bend * bend * 0.4 * h;
transformed += vec3(wp.x, 0.0, wp.y);
`;

export class ReedField {
  constructor(scene, renderer) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.density = 1;
    this.roadPts = Array.from({ length: ROAD_PTS }, () => new THREE.Vector2());
    this.shared = {
      uCam: { value: new THREE.Vector3() },
      uTime: { value: 0 },
      uWind: { value: 0.3 },
      uWindDir: { value: new THREE.Vector2(0.78, 0.62).normalize() },
      uRoad: { value: this.roadPts },
      uCorr: { value: ROAD.halfWidth + 1.0 },
    };

    this.leafGeo = leafGeometry();
    this.plumeGeo = plumeGeometry();
    const plumeMap = plumeTexture();
    plumeMap.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());

    // [cell (m), số khóm, thang tỉ lệ, vào mờ, vào đủ, ra đầu, ra hết]
    const layers = [
      { cell: 86, count: 19000, scale: 1.0, in0: -1, in1: 0, out0: 30, out1: 43, seed: 1 },
      { cell: 340, count: 11000, scale: 1.55, in0: 27, in1: 46, out0: 118, out1: 165, seed: 2 },
    ];
    this.layers = layers.map((L) => {
      const r = rng(L.seed * 977);
      const seeds = new Float32Array(L.count * 4);
      for (let i = 0; i < seeds.length; i++) seeds[i] = r();
      const attr = new THREE.InstancedBufferAttribute(seeds, 4);
      const uni = {
        uCell: { value: L.cell }, uScale: { value: L.scale },
        uIn0: { value: L.in0 }, uIn1: { value: L.in1 }, uOut0: { value: L.out0 }, uOut1: { value: L.out1 },
      };
      const leaves = this._mesh(this.leafGeo, attr, L.count, uni, new THREE.MeshLambertMaterial({
        vertexColors: true, side: THREE.DoubleSide,
      }), true);
      const plumes = this._mesh(this.plumeGeo, attr, L.count, uni, new THREE.MeshLambertMaterial({
        map: plumeMap, side: THREE.DoubleSide, alphaTest: 0.2, alphaToCoverage: true,
      }), false);
      return { max: L.count, meshes: [leaves, plumes] };
    });
    this.mats = this.layers.flatMap((l) => l.meshes.map((m) => m.material));
    this.group.visible = true;
  }

  _mesh(base, seedAttr, count, layerUniforms, material, tintColors) {
    const g = new THREE.InstancedBufferGeometry();
    g.index = base.index;
    for (const name of Object.keys(base.attributes)) g.setAttribute(name, base.attributes[name]);
    g.setAttribute('aSeed', seedAttr);
    g.instanceCount = count;
    const shared = this.shared;
    material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, shared, layerUniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\n' + VERT_PARS)
        .replace('#include <begin_vertex>', VERT_BODY);
      if (tintColors) {
        shader.vertexShader = shader.vertexShader.replace(
          '#include <color_vertex>',
          '#include <color_vertex>\n#ifdef USE_COLOR\nvColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);\n#endif');
      }
      // lá/bông là mặt phẳng mỏng: bỏ đảo pháp tuyến mặt sau để sáng đều 2 mặt
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', ''))
        // phát sáng nhẹ theo albedo (giả lập xuyên sáng ngược nắng)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance = emissive * diffuseColor.rgb;');
    };
    const mesh = new THREE.Mesh(g, material);
    mesh.frustumCulled = false;
    this.group.add(mesh);
    return mesh;
  }

  set visible(v) { this.group.visible = v; }
  get visible() { return this.group.visible; }

  setDensity(f) {
    this.density = f;
    for (const l of this.layers) for (const m of l.meshes) m.geometry.instanceCount = Math.floor(l.max * f);
  }

  // road: đối tượng Road, s: độ dài cung của xe
  update(time, cam, road, s, st) {
    const sh = this.shared;
    sh.uTime.value = time;
    sh.uCam.value.copy(cam);
    sh.uWind.value = st.wind;
    sh.uWindDir.value.copy(st.windDir);
    const p = {};
    for (let k = 0; k < ROAD_PTS; k++) {
      road.at(s + (k - 12) * ROAD_PT_GAP, p);
      this.roadPts[k].set(p.x, p.z);
    }
    // ánh sáng "xuyên" ngược nắng: bông & lá ngả vàng cam khi nắng thấp
    const glow = 0.5 * st.dayF * (1 - st.overcast * 0.85) * (0.4 + 0.6 * st.warm);
    const e = new THREE.Color(1.0, 0.72 + 0.2 * (1 - st.warm), 0.42 + 0.45 * (1 - st.warm)).multiplyScalar(glow);
    // Lambert không dùng ánh sáng môi trường => thêm một ít sáng nền để cỏ không đen kịt khi âm u / ban đêm
    const amb = (0.2 * st.dayF * (1 - 0.55 * st.dark) + 0.05 * st.night) * (0.6 + 0.4 * st.overcast) + st.flash * 0.9;
    e.add(new THREE.Color(0.8, 0.88, 1.0).multiplyScalar(amb));
    const wet = 1 - 0.28 * st.wet;
    for (const l of this.layers) {
      l.meshes[0].material.emissive.copy(e);
      l.meshes[1].material.emissive.copy(e).multiplyScalar(1.7);   // bông trắng phát sáng mạnh hơn lá
    }
    for (const m of this.mats) m.color.setScalar(wet * (1 - 0.15 * st.dark));
  }
}
