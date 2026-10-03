import * as THREE from 'three';
import { ROAD } from './road.js';
import { hash2, vnoise } from './terrain-noise.js';
import { withMist } from './mist.js';
import { softGlowTexture } from './textures.js';
import { rockGeometry } from './terrain.js';

// Suối núi đổ qua đường (chỉ map núi). Mỗi ~560 m một dòng, seed theo chỉ số => quay lại vẫn y nguyên.
// - Dòng chảy dò theo dốc địa hình (bên trái: ngược dốc lên núi, bên phải: xuôi xuống vực), quán tính lớn + uốn lượn,
//   rộng hẹp không đều; vách dốc => thác trắng xoá thành vệt, chỗ thoải => nước trong gợn sóng, bọt dạt ven bờ.
// - Chân vách sát đường: bọt tung (nước dội xuống), tràn mỏng qua mặt đường (ngầm tràn) rồi đổ qua mép vực.
// - Lớp đá ướt sẫm, bóng loang lổ quanh dòng nước (mặt đường ướt chỗ nước tràn), đá tảng hai bờ, bụi nước chân thác.
// - Nước dùng vật liệu PBR thật (nắng, đèn pha, bóng đổ, phản chiếu bầu trời) + nhiễu chảy, gợn sóng trong shader.
// - Xe chạy qua: nước bắn ở bánh xe (cả xe NPC) + tiếng ào; tiếng suối to dần khi lại gần.
const HW = ROAD.halfWidth;
const UP = 230, DOWN = 190;          // chiều dài dòng chảy trên sườn núi / xuống vực (m, mặt bằng)
const EDGE = HW + 0.6;               // mép lớp nước trên đường (tới cọc tiêu / hộ lan)
const ACROSS = 6;                    // số ô ngang của dải nước
const WET_N = 4;                     // số ô ngang của lớp đá ướt
const S = 13;                        // số điểm lấy độ cao trên mỗi mặt cắt ngang
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Seed theo vị trí: bề ngang/lưu lượng khác nhau, không đổi khi quay lại hoặc đổi map.
export function waterfallSpec(index) {
  return { index, s: 260 + index * 560 + hash2(index, 71) * 100,
    width: 2 + 3 * hash2(index, 37), flow: 0.25 + 0.75 * hash2(index, 93) };
}

// Đường tâm từ mép đường đi ra một phía, men theo dốc (quán tính lớn), không lệch quá 35° so với pháp tuyến đường;
// dừng nếu chạm một đoạn đường khác (khúc cua vòng).
function trace(spec, road, terrain, side, len) {
  const p = road.at(spec.s, {}), rx = Math.cos(p.th) * side, rz = -Math.sin(p.th) * side;
  const H = (x, z) => terrain.heightAt(x, z), e = 1.5, sg = side < 0 ? 1 : -1, MAX = 0.61;
  let x = p.x + rx * EDGE, z = p.z + rz * EDGE, dx = rx, dz = rz;
  const out = [];
  for (let a = 0; a < len;) {
    if (a > 6) {
      const gx = (H(x + e, z) - H(x - e, z)) * sg, gz = (H(x, z + e) - H(x, z - e)) * sg, gl = Math.hypot(gx, gz);
      if (gl > 1e-6) { const k = 0.25 * sstep(6, 30, a); dx += (gx / gl - dx) * k; dz += (gz / gl - dz) * k; }
      const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      if (dx * rx + dz * rz < Math.cos(MAX)) {
        const ang = Math.sign(rx * dz - rz * dx || 1) * MAX;
        dx = rx * Math.cos(ang) - rz * Math.sin(ang); dz = rx * Math.sin(ang) + rz * Math.cos(ang);
      }
    }
    const step = a < 24 ? 1.2 : 2.4;
    x += dx * step; z += dz * step; a += step;
    H(x, z);
    if (a > 12 && terrain._d < HW + 4) break;
    out.push({ x, z, a, dx, dz });
  }
  return out;
}

// uốn lượn: lệch ngang theo nhiễu (xa đường lượn nhiều hơn, sát đường gần như thẳng góc)
function meander(list, seed) {
  return list.map(({ x, z, a, dx, dz }) => {
    const amp = (2 + 6 * sstep(30, 150, a)) * sstep(10, 40, a);
    const o = amp * ((vnoise(a / 52 + seed, 3.3) - 0.5) * 2 + 0.35 * (vnoise(a / 13 + seed, 8.1) - 0.5) * 2);
    return { x: x - dz * o, z: z + dx * o, a };
  });
}

// Dựng toàn bộ dữ liệu một dòng suối (toạ độ tương đối so với origin = tim đường tại spec.s).
export function waterfallGeometry(spec, road, terrain) {
  const oldCar = terrain.iCar;
  terrain.setCar(spec.s);
  const p0 = road.at(spec.s, {}), Rx = Math.cos(p0.th), Rz = -Math.sin(p0.th);
  const origin = new THREE.Vector3(p0.x, p0.y, p0.z);
  const seed = spec.index * 3.17 + 0.37, W = spec.width, flow = spec.flow;
  const sheet = W * 0.6, stream = W * (0.17 + 0.1 * flow);
  const nodes = [];
  const mount = meander(trace(spec, road, terrain, -1, UP), seed), valley = meander(trace(spec, road, terrain, 1, DOWN), seed + 41);
  const mLen = mount.length ? mount[mount.length - 1].a : 0, vLen = valley.length ? valley[valley.length - 1].a : 0;
  for (let i = mount.length - 1; i >= 0; i--) nodes.push({ ...mount[i], side: -1, end: mLen, road: false });
  const RN = 16;
  for (let i = 0; i <= RN; i++) {
    const d = -EDGE + 2 * EDGE * i / RN;
    nodes.push({ x: p0.x + Rx * d, z: p0.z + Rz * d, d, a: 0, side: 0, road: true });
  }
  for (const n of valley) nodes.push({ ...n, side: 1, end: vLen, road: false });

  // hướng chảy, bề rộng, mặt cắt ngang (độ cao địa hình / mặt đường)
  const q = {};
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.road) { n.tx = Rx; n.tz = Rz; } else {
      const A = nodes[Math.max(0, i - 1)], B = nodes[Math.min(nodes.length - 1, i + 1)], l = Math.hypot(B.x - A.x, B.z - A.z) || 1;
      n.tx = (B.x - A.x) / l; n.tz = (B.z - A.z) / l;
    }
    n.px = n.tz; n.pz = -n.tx;                   // ngang dòng chảy (trên đường: dọc theo đường, chiều s tăng)
    let hw;
    if (n.road) hw = sheet;
    else {
      hw = stream * (0.7 + 0.6 * vnoise(n.a / 17 + seed, 5.5 + n.side));
      if (n.side < 0) hw *= 1 + 0.6 * (1 - sstep(4, 22, n.a));                           // chân thác: nước dội xuống toả rộng
      hw += (sheet - hw) * (1 - sstep(0, n.side < 0 ? 6 : 3, n.a));                  // loe ra thành lớp tràn qua đường
      hw *= 0.3 + 0.7 * sstep(0, 30, n.end - n.a);                                   // đầu nguồn / cuối dòng thu nhỏ
    }
    n.hw = hw;
    n.wb = n.road ? hw + 0.9 : hw * 1.7 + 0.45;  // nửa bề rộng lớp đá ướt
    n.xs = []; n.ys = []; n.zs = [];
    for (let k = 0; k < S; k++) {
      const l = n.wb * (2 * k / (S - 1) - 1);
      let x, y, z;
      if (n.road) {
        road.at(spec.s + l, q);
        x = q.x + Math.cos(q.th) * n.d; z = q.z - Math.sin(q.th) * n.d;
        y = Math.abs(n.d) <= HW ? q.y + 0.05 : terrain.heightAt(x, z);
      } else { x = n.x + n.px * l; z = n.z + n.pz * l; y = terrain.heightAt(x, z); }
      n.xs.push(x); n.ys.push(y); n.zs.push(z);
    }
    n.y = n.ys[(S - 1) / 2];
  }
  terrain.iCar = oldCar;

  // độ dốc (0..1), xoáy bọt chỗ nước dội xuống (dốc giảm đột ngột), mờ hai đầu
  let along = 0;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i], A = nodes[Math.max(0, i - 1)], B = nodes[Math.min(nodes.length - 1, i + 1)];
    n.slope = n.road ? 0 : Math.abs(B.y - A.y) / (Math.hypot(B.x - A.x, B.z - A.z) || 1);
    if (i) along += Math.hypot(n.x - nodes[i - 1].x, n.y - nodes[i - 1].y, n.z - nodes[i - 1].z);
    n.along = along;
  }
  const total = along;
  for (let pass = 0; pass < 2; pass++) {
    const sl = nodes.map(n => n.slope);
    for (let i = 1; i < nodes.length - 1; i++) if (!nodes[i].road) nodes[i].slope = sl[i - 1] * 0.25 + sl[i] * 0.5 + sl[i + 1] * 0.25;
  }
  let turb = 0;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    let up = 0;
    for (let j = i - 1; j >= 0 && n.along - nodes[j].along < 8; j--) up = Math.max(up, nodes[j].slope);
    const dl = i ? n.along - nodes[i - 1].along : 0;
    turb = Math.max(Math.min(1, Math.max(0, (up - n.slope) * 0.8)), turb * Math.exp(-dl / (n.road ? 1.3 : 3.5)));   // trên đường bọt tan nhanh
    n.turb = n.road ? turb * 0.4 : turb;
    n.st = Math.min(1, n.slope / 1.3);
    n.fade = sstep(0, 25, n.along) * sstep(0, 30, total - n.along);
    const dlt = i ? n.along - nodes[i - 1].along : 0, spd = (0.6 + 4.4 * n.st) * (0.75 + 0.5 * flow);
    n.tau = i ? nodes[i - 1].tau + dlt / spd : 0;                                  // thời gian nước chảy tới đây (s)
    if (!n.road) n.fade *= 1 - sstep(40, 90, n.a) * (1 - sstep(0.3, 0.62, vnoise(n.a / 45 + seed, 13.7 + n.side)));
  }

  // lưới: dải nước + lớp đá ướt
  const lerpS = (arr, l, wb) => { const f = Math.min(S - 1.0001, Math.max(0, (l / wb + 1) * (S - 1) / 2)), k = Math.floor(f), t = f - k; return arr[k] + (arr[k + 1] - arr[k]) * t; };
  const mk = (cols, half, lift, info) => {
    const pos = [], wuv = [], inf = [], idx = [];
    nodes.forEach((n, i) => {
      const h = half(n), lf = lift(n);
      for (let j = 0; j <= cols; j++) {
        const l = h * (2 * j / cols - 1);
        pos.push(lerpS(n.xs, l, n.wb) - origin.x, lerpS(n.ys, l, n.wb) + lf - origin.y, lerpS(n.zs, l, n.wb) - origin.z);
        wuv.push(l, n.along, n.tau, flow);
        inf.push(...info(n, h));
        if (i && j < cols) { const a = (i - 1) * (cols + 1) + j, b = i * (cols + 1) + j; idx.push(a, b, a + 1, a + 1, b, b + 1); }
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aWUV', new THREE.Float32BufferAttribute(wuv, 4));
    g.setAttribute('aInfo', new THREE.Float32BufferAttribute(inf, 4));
    g.setIndex(idx); g.computeVertexNormals(); g.computeBoundingSphere();
    return g;
  };
  // vách dốc lồi lõm: nâng thêm theo độ dốc để mặt nước không chìm giữa hai điểm lấy độ cao
  const waterLift = n => n.road ? 0.035 + 0.02 * flow : 0.07 + 0.13 * sstep(15, 120, n.a) + 0.4 * n.st;
  const water = mk(ACROSS, n => n.hw, waterLift, (n, h) => [n.st, n.turb, n.fade, h]);
  const wet = mk(WET_N, n => n.wb, n => n.road ? 0.012 : waterLift(n) * 0.55, (n, h) => [n.st, n.road ? 1 : 0, n.fade, h]);

  // đá tảng hai bờ (dày ở gần đường), vài hòn nhỏ giữa dòng chỗ dốc; không đặt trên mặt đường / cạnh cọc tiêu, hộ lan
  const rocks = [];
  nodes.forEach((n, i) => {
    if (n.road || n.a < 1.3 || n.fade < 0.3) return;
    const pr = (n.a < 25 ? 0.5 : n.a < 80 ? 0.22 : 0.08) * (1 - 0.65 * sstep(0.55, 0.9, n.st));
    for (const sd of [-1, 1]) {
      const r = hash2(spec.index * 977 + i, sd > 0 ? 11 : 23);
      if (r > pr) continue;
      const r2 = hash2(spec.index * 977 + i, sd > 0 ? 31 : 47), size = n.a < 12 ? 0.45 + 0.65 * r2 : 0.25 + 0.45 * r2;
      const l = sd * Math.min(n.wb - 0.05, n.hw + 0.05 + 0.35 * size * hash2(i, 59));
      rocks.push({ x: lerpS(n.xs, l, n.wb) - origin.x, y: lerpS(n.ys, l, n.wb) - (0.28 + 0.2 * n.st) * size - origin.y, z: lerpS(n.zs, l, n.wb) - origin.z,
        s: size, yaw: r2 * 6.283, k: Math.floor(hash2(i, sd + 71) * 2.999), c: 0.75 + 0.35 * hash2(i, sd + 83) });
    }
    if (n.st > 0.5 && hash2(spec.index * 977 + i, 97) < 0.12) {
      const l = (hash2(i, 101) - 0.5) * n.hw, size = 0.2 + 0.2 * hash2(i, 103);
      rocks.push({ x: lerpS(n.xs, l, n.wb) - origin.x, y: lerpS(n.ys, l, n.wb) - 0.1 - origin.y, z: lerpS(n.zs, l, n.wb) - origin.z,
        s: size, yaw: hash2(i, 107) * 6.283, k: 0, c: 0.7 });
    }
  });

  // bụi nước: chân vách sát đường (nước dội xuống) và chỗ đổ qua mép vực
  const sprays = [];
  const at = (side, a) => nodes.filter(n => n.side === side).reduce((b, n) => (!b || Math.abs(n.a - a) < Math.abs(b.a - a) ? n : b), null);
  for (const [n, k] of [[at(-1, 2.5), 1], [at(1, 9), 0.8]]) {
    if (n) sprays.push({ x: n.x - origin.x, y: n.y + 0.3 - origin.y, z: n.z - origin.z, w: Math.max(2.2, n.hw * 2.4), h: 1.2 + 1.6 * flow, op: (0.1 + 0.14 * flow) * k });
  }
  return { origin, water, wet, rocks, sprays, nodes, sheet };
}

const NOISE = `
float wHash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), f.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float wFbm(vec2 p) { return wNoise(p) * 0.62 + wNoise(p * 2.03 + 5.2) * 0.38; }
// gợn sóng: nghiêng pháp tuyến theo đạo hàm màn hình của độ cao (như bump map)
vec3 wPerturb(vec3 pos, vec3 n, vec2 dH, float face) {
  vec3 sx = dFdx(pos), sy = dFdy(pos), r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1) * face;
  return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
}
`;

// pull: kéo đỉnh về phía camera một tỉ lệ khoảng cách (chỉ đổi độ sâu, không đổi vị trí trên màn hình)
// => không chìm vào lưới địa hình thô ở xa
function patchVertex(sh, pull) {
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute vec4 aWUV;\nattribute vec4 aInfo;\nvarying vec4 vWUV;\nvarying vec4 vInfo;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWUV = aWUV; vInfo = aInfo;')
    .replace('#include <project_vertex>', `#include <project_vertex>
      mvPosition.xyz *= ${(1 - pull).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`);
}

function waterMaterial(uTime) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0, envMapIntensity: 0.7, transparent: true, depthWrite: false,
    side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -12 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    patchVertex(sh, 0.005);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${NOISE}`)
      .replace('#include <map_fragment>', `
        float lat = vWUV.x, along = vWUV.y, tau = vWUV.z, flow = vWUV.w;
        float slope = vInfo.x, turb = vInfo.y, hw = max(vInfo.w, 0.05);
        // toạ độ dọc dòng theo thời gian chảy: chỗ dốc nước nhanh => vệt kéo dài; chỗ thoải => gợn ngắn
        float n1 = wFbm(vec2(lat * 1.3, (tau - uTime) * 0.75));
        float n2 = wFbm(vec2(lat * 2.2 + 4.1, (tau - uTime * 1.35) * 1.4 + 1.7));
        float n = n1 * 0.7 + n2 * 0.3;
        float e = abs(lat) / hw;
        float edge = 0.76 + 0.45 * (wNoise(vec2(along * 0.42 + (lat > 0.0 ? 3.1 : 17.7), uTime * 0.15)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.7, lat * 0.3 + uTime * 0.3)) - 0.5);
        float body = 1.0 - smoothstep(edge - 0.22, edge + 0.04, e + 0.25 * (n2 - 0.5));   // mép nham nhở, đổi theo dòng chảy
        // vách dốc: nước tách thành vài nhánh, đổi dần theo chiều dài dòng
        float strands = wNoise(vec2(lat / hw * 2.3 + flow * 7.0, along * 0.045));
        body *= mix(1.0, smoothstep(0.22, 0.42, strands), smoothstep(0.35, 0.8, slope) * 0.85);
        float fa = clamp(slope * 1.1 + turb, 0.0, 1.0);
        float nF = wFbm(vec2(lat * 3.2 + 2.0, (tau - uTime) * 1.8));                                    // chỗ thoải: bọt vụn nhỏ
        float foamC = smoothstep(0.62 - 0.25 * fa, 0.75 - 0.15 * fa, mix(nF, n, smoothstep(0.15, 0.5, slope))) * smoothstep(0.05, 0.4, fa);   // thác / ghềnh: trắng xoá
        float rid = 1.0 - abs(wNoise(vec2(lat * 2.2 + 9.1, (tau - uTime) * 0.55)) * 2.0 - 1.0);
        float foamL = smoothstep(0.9, 0.99, rid) * 0.35 * (1.0 - 0.6 * turb) * (1.0 - slope) * (1.0 - smoothstep(10.0, 40.0, length(vViewPosition)));    // chỗ thoải: vệt bọt mảnh trôi theo dòng
        float foam = max(foamC, foamL) * body;
        wFoam = foam;
        wMask = body * vInfo.z;
        vec3 thin = mix(vec3(0.03, 0.045, 0.04), vec3(0.14, 0.16, 0.17), slope);   // màng nước mỏng trên đá: hơi trắng đục khi dốc
        diffuseColor.rgb = mix(thin, vec3(0.62, 0.65, 0.66), foam);
        diffuseColor.a = mix(mix(0.18, 0.32, flow) * (0.65 + 0.35 * (1.0 - e * e)) * (1.0 + 1.2 * slope), 0.9, foam) * wMask;
        wHgt = (wNoise(vec2(lat * 3.1, (tau - uTime) * 1.5)) * 0.6 + n2 * 0.4) * 0.03 * (1.0 - slope) * (1.0 - foam);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(mix(roughnessFactor, 0.55, vInfo.x), 0.9, wFoam);   // nước sủi bọt / màng nước trên vách: nhám, không bóng như gương')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        normal = wPerturb(-vViewPosition, normal, vec2(dFdx(wHgt), dFdy(wHgt)) / (1.0 + length(vViewPosition) / 12.0), faceDirection);`)
      // nước trong vẫn phản chiếu rõ trời / đèn (phản xạ không bị độ trong suốt làm mờ)
      .replace('#include <opaque_fragment>', `
        float wSpec = dot(reflectedLight.directSpecular + reflectedLight.indirectSpecular, vec3(0.3333));
        diffuseColor.a = clamp(diffuseColor.a + wSpec * 0.6 * (1.0 - wFoam) * (1.0 - vInfo.x) * wMask, 0.0, 1.0);
        #include <opaque_fragment>`);
  };
  m.customProgramCacheKey = () => 'waterfall-water';
  return withMist(m);
}

// Lớp đá ướt / mặt đường ướt: chỉ làm tối màu bên dưới (nhân màu), không tự phản chiếu => không loá viền quanh thác.
// Rìa ngả màu rêu; hiệu ứng nhạt dần theo khoảng cách (sương xa tự che).
function wetMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
    polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8,
    vertexShader: `
      attribute vec4 aWUV; attribute vec4 aInfo;
      varying vec4 vWUV; varying vec4 vInfo; varying float vDist;
      void main() {
        vWUV = aWUV; vInfo = aInfo;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDist = -mvPosition.z;
        mvPosition.xyz *= 0.997;
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: `
      varying vec4 vWUV; varying vec4 vInfo; varying float vDist;
      ${NOISE}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`,
  });
}

// hạt nước bắn từ bánh xe
class Splash {
  constructor(parent, tex) {
    const N = this.N = 320;
    this.pos = new Float32Array(N * 3); this.col = new Float32Array(N * 4); this.vel = new Float32Array(N * 3);
    this.life = new Float32Array(N).fill(1); this.max = new Float32Array(N).fill(1);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.6, map: tex, transparent: true, depthWrite: false, vertexColors: true }));
    // kéo về phía camera 4% => không bị mặt đường (polygonOffset) che khi hạt còn sát mặt đường
    this.points.material.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nmvPosition.xyz *= 0.96;\ngl_Position = projectionMatrix * mvPosition;');
    };
    this.points.frustumCulled = false;
    parent.add(this.points);
    this.next = 0; this.alive = 0;
  }
  emit(x, y, z, vx, vy, vz) {
    const i = this.next; this.next = (i + 1) % this.N;
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3);
    this.life[i] = 0; this.max[i] = 0.45 + Math.random() * 0.6; this.alive = 2;
  }
  update(dt, light) {
    if (!this.alive) return;
    let any = false;
    const c = 0.3 + 0.6 * light;
    for (let i = 0; i < this.N; i++) {
      const k = i * 3;
      if (this.life[i] < this.max[i]) {
        this.life[i] += dt; this.vel[k + 1] -= 9.8 * dt;
        this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
        any = true;
      }
      const f = Math.max(0, 1 - this.life[i] / this.max[i]);
      this.col.set([c, c * 1.02, c * 1.04, 0.9 * f * Math.sqrt(f)], i * 4);
    }
    if (!any) this.alive--;
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }
}

export class Waterfalls {
  constructor(scene, road, terrain) {
    this.road = road; this.terrain = terrain; this.items = new Map();
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.uTime = { value: 0 };
    this.material = waterMaterial(this.uTime);
    this.wetMaterial = wetMaterial();
    this.rockGeos = [0, 1, 2].map(k => rockGeometry(k, 2));
    this.rockMat = terrain.rockMat;
    this.tex = softGlowTexture();
    this.splash = new Splash(this.group, this.tex);
    this.last = null; this.inWater = false; this._p = {}; this._v = new THREE.Vector3(); this._r = new THREE.Vector3();
  }

  setMap(id) {
    this.group.visible = id === 'mountain';
    for (const item of this.items.values()) this._remove(item);
    this.items.clear();
  }

  _remove(item) {
    this.group.remove(item.group);
    item.water.geometry.dispose(); item.wet.geometry.dispose();
    if (item.rocks) item.rocks.forEach(m => m.dispose());
    for (const s of item.sprays) s.sprite.material.dispose();
  }

  _build(spec) {
    const g = waterfallGeometry(spec, this.road, this.terrain);
    const group = new THREE.Group();
    group.position.copy(g.origin);
    const wet = new THREE.Mesh(g.wet, this.wetMaterial), water = new THREE.Mesh(g.water, this.material);
    wet.receiveShadow = water.receiveShadow = true;
    wet.renderOrder = 1; water.renderOrder = 2;
    group.add(wet, water);
    let rocks = null;
    if (this.rockMat && g.rocks.length) {
      const per = this.rockGeos.map(() => []);
      g.rocks.forEach(r => per[r.k].push(r));
      const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
      const cl = new THREE.Color(), wetRock = new THREE.Color('#968c80');
      rocks = per.filter(l => l.length).map((list) => {
        const m = new THREE.InstancedMesh(this.rockGeos[list[0].k], this.rockMat, list.length);
        list.forEach((r, i) => {
          q.setFromEuler(e.set((r.c - 0.9) * 0.6, r.yaw, (r.c - 0.9) * 0.5));
          m.setMatrixAt(i, m4.compose(ps.set(r.x, r.y, r.z), q, sc.set(r.s, r.s * (0.6 + 0.35 * r.c), r.s)));
          m.setColorAt(i, cl.copy(wetRock).multiplyScalar(r.c));
        });
        m.castShadow = m.receiveShadow = true;
        group.add(m);
        return m;
      });
    }
    const sprays = [];
    g.sprays.forEach((sp, j) => {
      for (let k = 0; k < 3; k++) {
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tex, color: 0xdfeaec, transparent: true, opacity: 0, depthWrite: false }));
        sprite.position.set(sp.x, sp.y, sp.z);
        group.add(sprite);
        sprays.push({ sprite, sp, ph: k / 3 + j * 0.17 });
      }
    });
    this.group.add(group);
    return { spec, group, water, wet, rocks, sprays, sheet: g.sheet };
  }

  // o: { d, v, dim (xe người chơi), npcs (traffic.active), cam (camera), audio }
  update(time, s, light, o = {}) {
    if (!this.group.visible) { o.audio?.setWater?.(0); return; }
    const dt = this.last === null ? 0 : Math.min(0.1, Math.max(0, time - this.last));
    this.last = time;
    this.uTime.value = time;
    const first = Math.max(0, Math.floor((s - 420) / 560)), last = Math.floor((s + 950) / 560);
    for (const [index, item] of this.items) if (index < first || index > last) { this._remove(item); this.items.delete(index); }
    // dựng mỗi khung hình tối đa một dòng (rải chi phí dò địa hình)
    for (let index = first; index <= last; index++) if (!this.items.has(index)) { this.items.set(index, this._build(waterfallSpec(index))); break; }

    let near = null, nd = Infinity;
    for (const item of this.items.values()) {
      for (const { sprite, sp, ph } of item.sprays) {
        const k = (time * 0.32 + ph) % 1;
        sprite.position.y = sp.y + k * sp.h * 0.8;
        sprite.scale.set(sp.w * (0.6 + 0.7 * k), sp.h * (0.5 + 0.8 * k), 1);
        sprite.material.opacity = sp.op * Math.sin(Math.PI * k);
        sprite.material.color.setRGB(0.88, 0.92, 0.93).multiplyScalar(0.2 + 0.8 * light);
      }
      const dist = Math.abs(item.spec.s - s);
      if (dist < nd) { nd = dist; near = item; }
    }

    // nước bắn khi xe (người chơi + NPC) chạy qua lớp nước tràn trên đường
    const wheels = (cs, cd, v, dim, dir, rate) => {
      const item = near;
      if (!item || v < 0.8 || Math.abs(cs - item.spec.s) > item.sheet + dim.length / 2) return false;
      const p = this.road.at(cs, this._p), rx = Math.cos(p.th), rz = -Math.sin(p.th), fx = -Math.sin(p.th) * dir, fz = -Math.cos(p.th) * dir;
      const k = Math.min(1.6, Math.max(0.35, v / 15));
      let hit = false;
      for (const a of [-0.33, 0.33]) {
        const ws = cs + a * dim.length * dir;
        if (Math.abs(ws - item.spec.s) > item.sheet * 0.95) continue;
        hit = true;
        for (const b of [-1, 1]) {
          const n = rate * k * dt + Math.random();
          for (let j = 1; j <= n; j++) {
            const x = p.x + rx * (cd + b * dim.width * 0.42) + fx * a * dim.length, z = p.z + rz * (cd + b * dim.width * 0.42) + fz * a * dim.length;
            const side = b * (0.8 + 2.2 * Math.random()) * k, fwd = v * (0.1 + 0.3 * Math.random());
            this.splash.emit(x, p.y + 0.25, z, rx * side + fx * fwd, (1.2 + 2.6 * Math.random()) * k, rz * side + fz * fwd);
          }
        }
      }
      return hit;
    };
    let wet = false;
    if (o.dim && o.v !== undefined) wet = wheels(s, o.d || 0, o.v, o.dim, 1, 40);
    for (const npc of o.npcs || []) wheels(npc.s, npc.d, npc.v, npc.dim, npc.direction ?? -1, 30);
    this.splash.update(dt, light);
    if (wet && !this.inWater) o.audio?.splash?.(Math.min(1.3, Math.max(0.25, o.v / 20)));
    this.inWater = wet;

    // tiếng suối: to dần khi lại gần chỗ nước đổ, lệch trái/phải theo hướng camera
    if (o.audio?.setWater) {
      let level = 0, pan = 0;
      if (near && o.cam) {
        const c = o.cam.position, g = near.group.position;
        const dx = g.x - c.x, dz = g.z - c.z, dist = Math.max(0, Math.hypot(dx, dz, g.y - c.y) - 4);
        level = near.spec.flow * (0.35 + 0.65 * near.spec.flow) / (1 + (dist / 28) ** 2);
        const r = this._r.set(1, 0, 0).applyQuaternion(o.cam.quaternion);
        pan = Math.max(-0.8, Math.min(0.8, (dx * r.x + dz * r.z) / (Math.hypot(dx, dz) || 1)));
      }
      o.audio.setWater(level, pan);
    }
  }
}
