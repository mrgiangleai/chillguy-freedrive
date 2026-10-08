import * as THREE from 'three';

// Đom đóm: nhiều đám bay lượn hai bên đường (tới ~16 m) lúc trời tối (không mưa / tuyết).
// Vị trí gắn với từng "ô" dọc theo đường (mỗi SLOT mét) nên đứng yên với thế giới khi xe chạy qua;
// có đom đóm hay không do nhiễu theo quãng đường (từng đoạn có, từng đoạn không). Nhấp nháy theo nhịp riêng từng con.
const SLOT = 5;              // m
const AHEAD = 200, BEHIND = 40;
const MAX = 200;
const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const vnoise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return hash(i) * (1 - u) + hash(i + 1) * u; };
const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const VERT = `
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = `
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`;

export class Fireflies {
  constructor(scene) {
    this.pos = new Float32Array(MAX * 3);
    this.glow = new Float32Array(MAX);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aGlow', new THREE.BufferAttribute(this.glow, 1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 500 }, uFogD: { value: 0 }, uColor: { value: new THREE.Color(9, 12, 2.6) }, uAmt: { value: 0 } },
      vertexShader: VERT, fragmentShader: FRAG,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    this.points.visible = false;
    scene.add(this.points);
    this.ground = new Map();     // ô -> độ cao mặt đất ở mép đường (tính 1 lần)
    this._p = {};
  }

  // t: giây; s: quãng đường của xe; amt: 0..1 (đêm, không mưa); scalePx: chiều cao canvas / (2·tan(fov/2))
  update(t, s, road, terrain, amt, scalePx, fogD = 0) {
    this.mat.uniforms.uAmt.value = amt;
    this.mat.uniforms.uScale.value = scalePx;
    this.mat.uniforms.uFogD.value = fogD;
    this.points.visible = amt > 0.01;
    if (!this.points.visible) return;
    const p = this._p;
    let n = 0;
    const k0 = Math.floor((s - BEHIND) / SLOT), k1 = Math.floor((s + AHEAD) / SLOT);
    for (let k = k0; k <= k1 && n < MAX; k++) {
      // đoạn có đom đóm: nhiễu theo quãng đường (đám dài ~150–300 m, khoảng 2/3 chiều dài đường), trong đoạn đó mỗi ô 90% có
      const zone = sst(0.38, 0.58, vnoise(k * SLOT / 140 + 3.7));
      if (zone <= 0 || hash(k * 1.31) > zone * 0.9) continue;
      const cnt = 1 + Math.floor(hash(k * 2.17) * 3);    // 1–3 con/ô
      for (let j = 0; j < cnt && n < MAX; j++) {
        const id = k * 8 + j;
        const h1 = hash(id * 3.1 + 0.5), h2 = hash(id * 5.7 + 1.3), h3 = hash(id * 7.3 + 2.9), h4 = hash(id * 9.1 + 4.4);
        const sk = k * SLOT + h1 * SLOT;
        road.at(sk, p);
        const side = h2 < 0.5 ? -1 : 1, lat = side * (4.6 + 16 * h3 * h3);  // từ mép đường ra tới ~16 m (dày ở gần)
        const rx = Math.cos(p.th), rz = -Math.sin(p.th);
        const x = p.x + rx * lat, z = p.z + rz * lat;
        let gy = this.ground.get(id);
        if (gy === undefined) {
          gy = terrain ? terrain.heightAt(x, z) : p.y;
          if (!(gy > p.y - 3 && gy < p.y + 4)) gy = p.y;   // vách cắt / hố sâu: bám theo mặt đường
          this.ground.set(id, gy);
        }
        // bay lượn chậm quanh chỗ của nó
        const w1 = 0.35 + h4 * 0.3, w2 = 0.5 + h1 * 0.4;
        this.pos[n * 3] = x + Math.sin(t * w1 + h2 * 20) * 0.9 + Math.sin(t * w2 * 1.7 + h3 * 9) * 0.3;
        this.pos[n * 3 + 1] = gy + 0.7 + 2.6 * h4 + Math.sin(t * w2 + h1 * 13) * 0.35;   // trên ngọn cỏ, có con bay cao
        this.pos[n * 3 + 2] = z + Math.cos(t * w2 + h3 * 17) * 0.9 + Math.cos(t * w1 * 1.9 + h4 * 7) * 0.3;
        // nhấp nháy: sáng lên chừng nửa giây rồi tắt, mỗi con một nhịp
        const ph = Math.sin(t * (0.9 + 0.8 * h3) + h1 * 40);
        this.glow[n] = 0.12 + 0.88 * sst(0.25, 0.9, ph) * (0.6 + 0.4 * h2);
        n++;
      }
    }
    if (this.ground.size > 1500) {          // bỏ ô đã đi qua
      for (const key of this.ground.keys()) if (key < k0 * 8) this.ground.delete(key);
    }
    const g = this.points.geometry;
    g.setDrawRange(0, n);
    g.attributes.position.needsUpdate = true;
    g.attributes.aGlow.needsUpdate = true;
  }
}
