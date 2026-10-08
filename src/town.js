import * as THREE from 'three';
import { withMist } from './mist.js';
import { glowTexture } from './textures.js';

// Map núi: thị trấn nhỏ dưới thung lũng (bên phải đường, sâu ~200 m) + đèn đường dọc con đường thung lũng.
// Một "đường thung lũng" ảo chạy song song đường chính, cách về bên phải LAT(s) mét. Thị trấn nằm dọc đường đó
// (mỗi ~1.1 km có thể có 1 thị trấn), đèn đường dày trong thị trấn, thưa thớt ở quãng giữa.
// Nhà: khối hộp + mái dốc (instancing); cửa sổ vẽ bằng shader, ban đêm sáng ngẫu nhiên; ở xa (cửa sổ < 2 điểm ảnh)
// thì hoà thành ánh sáng trung bình để khỏi nhấp nháy. Độ cao lấy từ địa hình (tính 1 lần, nhớ lại).
const TOWN_GAP = 1100;            // m đường giữa các thị trấn
const LIGHT_GAP = 22;             // m giữa các cột đèn trong thị trấn
const AHEAD = 3200, BEHIND = 900;
const MAX_HOUSES = 700, MAX_LIGHTS = 600, MAX_HAZE = 6;
const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const LAT = (s) => 470 + 70 * Math.sin(s / 650 + 1.3) + 25 * Math.sin(s / 230);

function townAt(t) {               // thị trấn thứ t (hoặc null)
  if (hash(t * 3.7 + 1.1) > 0.8) return null;
  const len = 120 + 140 * hash(t * 5.3 + 2.2);
  return { t, s: t * TOWN_GAP + (hash(t * 2.9) - 0.5) * 400, len, n: Math.round(16 + len * 0.22 * (0.7 + 0.6 * hash(t * 7.1))), streets: [0], lat: LAT };
}
// thị trấn lớn: gần đường hơn (~330 m, sườn vẫn đủ thoải), 3 dãy phố song song, nhiều nhà + vài khối nhà cao tầng.
// Cái đầu tiên ~1.3 km sau chỗ xuất phát (sớm thấy), sau đó mỗi BIG_GAP mét lại có
const BIG_GAP = 5000, BIG_LAT = (s) => 330 + 18 * Math.sin(s / 420);
function bigTownAt(b) {
  if (b < 0) return null;
  return { t: 100000 + b, s: 1300 + b * BIG_GAP, len: 450, n: 220, streets: [0, 42, 84], lat: BIG_LAT, big: true };
}

// nhà mẫu 1×1×1 (thân) + mái dốc cao 0.45, nóc chạy theo trục x; aRoof = 1 ở mái
export function houseGeometry() {
  const body = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0).toNonIndexed();
  const o = 0.54, y0 = 1, y1 = 1.45;           // mái chìa ra một chút
  const v = [
    -o, y0, -o, o, y0, -o, o, y1, 0, -o, y0, -o, o, y1, 0, -o, y1, 0,        // mái phía -z
    -o, y0, o, -o, y1, 0, o, y1, 0, -o, y0, o, o, y1, 0, o, y0, o,            // mái phía +z
    -o, y0, -o, -o, y1, 0, -o, y0, o, o, y0, -o, o, y0, o, o, y1, 0,          // 2 đầu hồi
  ];
  const roof = new THREE.BufferGeometry();
  roof.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  roof.computeVertexNormals();
  const g = new THREE.BufferGeometry();
  const bp = body.attributes.position.array, bn = body.attributes.normal.array;
  const rp = roof.attributes.position.array, rn = roof.attributes.normal.array;
  const pos = new Float32Array(bp.length + rp.length), nor = new Float32Array(bn.length + rn.length);
  pos.set(bp); pos.set(rp, bp.length); nor.set(bn); nor.set(rn, bn.length);
  const isRoof = new Float32Array(pos.length / 3);
  isRoof.fill(1, bp.length / 3, pos.length / 3 - 6);           // 2 đầu hồi (6 đỉnh cuối) cùng màu tường
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('aRoof', new THREE.BufferAttribute(isRoof, 1));
  return g;
}

const LIGHT_VERT = `
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`;
const LIGHT_FRAG = `
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`;

export class ValleyTown {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.uLit = { value: 0 };
    // nhà
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uLit = this.uLit;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          attribute float aRoof;
          varying vec3 vWall, vNL, vSize; varying float vRoof, vId;`)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vWall = position * vSize; vNL = normal; vRoof = aRoof;
          vId = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uLit;
          varying vec3 vWall, vNL, vSize; varying float vRoof, vId;
          float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          // mái: đỏ sẫm / nâu / xám đá theo từng nhà
          vec3 roofC = vId < 0.4 ? vec3(0.28, 0.07, 0.05) : vId < 0.7 ? vec3(0.17, 0.12, 0.09) : vec3(0.13, 0.14, 0.16);
          diffuseColor.rgb = mix(diffuseColor.rgb, roofC, vRoof);
          // cửa sổ trên tường: lưới ô 2.6 m × 2.9 m (mỗi tầng), chừa mép tường
          float wall = (1.0 - vRoof) * step(abs(vNL.y), 0.5);
          bool alongX = abs(vNL.z) > 0.5;
          float u = alongX ? vWall.x : vWall.z;
          float halfW = alongX ? vSize.x * 0.5 : vSize.z * 0.5;
          vec2 cell = vec2(u / 2.6 + 0.5, (vWall.y - 0.9) / 2.9);
          vec2 f = fract(cell), id = floor(cell);
          float win = step(0.28, f.x) * step(f.x, 0.72) * step(0.25, f.y) * step(f.y, 0.75)
                    * step(0.0, cell.y) * step(vWall.y, vSize.y - 0.5) * step(abs(u), halfW - 0.7) * wall;
          float lit = step(hh(id + vec2(vId * 91.0, dot(vNL, vec3(3.0, 5.0, 7.0)))), 0.45);
          // ở xa: ô cửa sổ nhỏ hơn ~2 điểm ảnh => dùng giá trị trung bình (không lấp lánh răng cưa)
          float far = smoothstep(0.25, 0.6, max(fwidth(cell.x), fwidth(cell.y)));
          win = mix(win, 0.2 * wall * step(0.0, cell.y) * step(vWall.y, vSize.y - 0.5), far);
          lit = mix(lit, 0.45, far);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.06, 0.07), win);
          vec3 winGlow = vec3(1.0, 0.62, 0.3) * 5.0 * uLit * win * lit;`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          totalEmissiveRadiance += winGlow;`);
    };
    mat.customProgramCacheKey = () => 'valley-house';
    withMist(mat);
    this.houses = new THREE.InstancedMesh(houseGeometry(), mat, MAX_HOUSES);
    this.houses.count = 0;
    this.houses.frustumCulled = false;
    this.houses.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_HOUSES * 3), 3);
    this.group.add(this.houses);
    // đèn đường (đốm sáng natri vàng cam)
    this.lightPos = new Float32Array(MAX_LIGHTS * 3);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(this.lightPos, 3));
    lg.setDrawRange(0, 0);
    this.lightMat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 500 }, uFogD: { value: 0 }, uAmt: { value: 0 }, uColor: { value: new THREE.Color(8.0, 4.3, 1.4) } },
      vertexShader: LIGHT_VERT, fragmentShader: LIGHT_FRAG,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    });
    this.lights = new THREE.Points(lg, this.lightMat);
    this.lights.frustumCulled = false;
    this.lights.renderOrder = 4;
    this.group.add(this.lights);
    // quầng sáng ấm phủ trên mỗi thị trấn ban đêm
    const tex = glowTexture();
    this.hazes = Array.from({ length: MAX_HAZE }, () => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, color: 0xff9a50, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      sp.visible = false;
      this.group.add(sp);
      return sp;
    });
    this.heights = new Map();        // id -> độ cao mặt đất (nhớ lại)
    this.built = null;               // [k0, k1] đoạn đường đã dựng
    this._p = {};
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3();
    this._c = new THREE.Color(); this._up = new THREE.Vector3(0, 1, 0);
  }

  set visible(v) { this.group.visible = v; }
  get visible() { return this.group.visible; }

  // đổi map: địa hình khác => tính lại độ cao
  reset() { this.heights.clear(); this.built = null; }

  _h(key, x, z, terrain) {
    let h = this.heights.get(key);
    if (h === undefined) { h = terrain.heightAt(x, z); this.heights.set(key, h); }
    return h;
  }

  // điểm trên đường thung lũng tại quãng s, lệch thêm `off` mét sang ngang, `along` mét dọc
  _valley(s, road, off, along, out, latFn = LAT) {
    const p = road.at(s, this._p);
    const rx = Math.cos(p.th), rz = -Math.sin(p.th), fx = -Math.sin(p.th), fz = -Math.cos(p.th);
    const lat = latFn(s) + off;
    out.x = p.x + rx * lat + fx * along; out.z = p.z + rz * lat + fz * along; out.th = p.th;
    return out;
  }

  _build(s, road, terrain) {
    const sA = s - BEHIND, sB = s + AHEAD;
    const m = this._m, q = this._q, sc = this._s, c = this._c, P = {};
    let nh = 0, nl = 0, nz = 0;
    const towns = [];
    for (let t = Math.floor(sA / TOWN_GAP) - 1; t <= Math.ceil(sB / TOWN_GAP) + 1; t++) {
      const T = townAt(t);
      if (T && T.s > sA - T.len && T.s < sB + T.len) towns.push(T);
    }
    for (let b = Math.floor((sA - 1300) / BIG_GAP); b <= Math.ceil((sB - 1300) / BIG_GAP); b++) {
      const T = bigTownAt(b);
      if (T && T.s > sA - T.len && T.s < sB + T.len) towns.push(T);
    }
    // nhà
    for (const T of towns) {
      for (let i = 0; i < T.n && nh < MAX_HOUSES; i++) {
        const id = T.t * 1000 + i;
        const h1 = hash(id * 1.3), h2 = hash(id * 2.7 + 5), h3 = hash(id * 4.1 + 9), h4 = hash(id * 6.7 + 3);
        const side = h2 < 0.5 ? -1 : 1, street = T.streets[Math.floor(hash(id * 11.3) * T.streets.length)];
        const off = street + side * (9 + (T.big ? 12 : 30) * h3 * h3);
        this._valley(T.s + (h1 - 0.5) * T.len, road, off, 0, P, T.lat);
        const y = this._h('h' + id, P.x, P.z, terrain);
        const yb = this._h('b' + id, P.x + 7, P.z + 7, terrain);
        if (Math.abs(yb - y) > 4) continue;                       // dốc quá: bỏ
        let w = 7 + 5 * h4, d = 6 + 3 * hash(id * 8.3), ht = (h4 > 0.88 ? 8.5 : h2 * 7 % 1 > 0.6 ? 6 : 3.4) + hash(id * 9.9);
        if (T.big && hash(id * 12.7) < 0.14) { w = 14 + 8 * h4; d = 10 + 4 * h3; ht = 11 + 9 * hash(id * 13.1); }   // khối nhà cao tầng
        q.setFromAxisAngle(this._up, P.th + Math.PI / 2 + (side > 0 ? 0 : Math.PI) + (hash(id * 3.3) - 0.5) * 0.35);   // mặt dài dọc theo phố
        m.compose(this._v.set(P.x, Math.min(y, yb) - 0.8, P.z), q, sc.set(w, ht, d));
        this.houses.setMatrixAt(nh, m);
        // tường: trắng vôi / kem / vàng nhạt / xám
        const k = hash(id * 5.9);
        c.setRGB(...(k < 0.35 ? [0.82, 0.8, 0.74] : k < 0.6 ? [0.86, 0.75, 0.55] : k < 0.8 ? [0.72, 0.68, 0.62] : [0.62, 0.66, 0.68]));
        this.houses.setColorAt(nh, c);
        nh++;
      }
      // quầng sáng thị trấn
      if (nz < MAX_HAZE) {
        this._valley(T.s, road, T.big ? 42 : 0, 0, P, T.lat);
        const hz = this.hazes[nz++];
        hz.position.set(P.x, this._h('z' + T.t, P.x, P.z, terrain) + (T.big ? 40 : 25), P.z);
        hz.scale.set(T.len * 2.2, T.len * (T.big ? 0.8 : 1.1), 1);
        hz.userData.on = true;
      }
    }
    for (let i = nz; i < MAX_HAZE; i++) this.hazes[i].userData.on = false;
    // thị trấn lớn: đèn dọc từng dãy phố
    for (const T of towns) {
      if (!T.big) continue;
      for (let si = 0; si < T.streets.length; si++) {
        for (let a = -T.len / 2; a <= T.len / 2 && nl < MAX_LIGHTS; a += LIGHT_GAP) {
          const ka = Math.round(a / LIGHT_GAP);
          this._valley(T.s + a, road, T.streets[si] + (ka % 2 ? 6 : -6), 0, P, T.lat);
          const y = this._h('L' + T.t + '_' + si + '_' + ka, P.x, P.z, terrain);
          this.lightPos.set([P.x, y + 6.5, P.z], nl * 3);
          nl++;
        }
      }
    }
    // đèn đường: dày trong thị trấn (2 bên so le), thưa ở quãng giữa
    for (let k = Math.floor(sA / LIGHT_GAP); k * LIGHT_GAP < sB && nl < MAX_LIGHTS; k++) {
      const sk = k * LIGHT_GAP;
      let inTown = false;
      for (const T of towns) if (!T.big && Math.abs(sk - T.s) < T.len / 2 + 15) { inTown = true; break; }
      if (!inTown && hash(k * 1.7 + 0.3) > 0.22) continue;
      const off = inTown ? (k % 2 ? 6 : -6) : 5;
      this._valley(sk, road, off, 0, P);
      const y = this._h('l' + k, P.x, P.z, terrain);
      this.lightPos.set([P.x, y + 6.5, P.z], nl * 3);
      nl++;
    }
    this.houses.count = nh;
    this.houses.instanceMatrix.needsUpdate = true;
    if (this.houses.instanceColor) this.houses.instanceColor.needsUpdate = true;
    const lg = this.lights.geometry;
    lg.setDrawRange(0, nl);
    lg.attributes.position.needsUpdate = true;
    // quên độ cao của đoạn đã đi qua
    if (this.heights.size > 6000) this.heights.clear();
  }

  // s: quãng đường xe; lamps: 0..1 (đèn bật); scalePx: chiều cao canvas / (2·tan(fov/2)); fogD: mật độ sương
  update(s, road, terrain, lamps, scalePx, fogD) {
    if (!this.group.visible) return;
    const k = Math.floor(s / 400);
    if (this.built !== k) { this._build(s, road, terrain); this.built = k; }
    this.uLit.value = lamps;
    const lu = this.lightMat.uniforms;
    lu.uAmt.value = lamps; lu.uScale.value = scalePx; lu.uFogD.value = fogD;
    this.lights.visible = lamps > 0.02;
    for (const hz of this.hazes) {
      hz.visible = hz.userData.on && lamps > 0.02;
      hz.material.opacity = 0.13 * lamps;
    }
  }
}
