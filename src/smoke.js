import * as THREE from 'three';
import { glowTexture } from './textures.js';

// Điếu thuốc trên tay phải người lái (cảnh dừng xe) + khói:
//  - điếu thuốc bám theo cổ tay / cẳng tay (xương hand_r, lowerarm_r), đầu thuốc đỏ, rít thì sáng rực
//  - lửa bật lửa lúc châm
//  - khói mảnh bốc lên từ đầu thuốc, khói nhả ra từ miệng sau mỗi hơi; khói trôi theo gió, loang to rồi tan
// Trạng thái (cầm thuốc / đã châm / đang rít / nhả khói, hướng mặt, vị trí miệng) do StopScene.smoking cung cấp.
const N = 420;
const UP = new THREE.Vector3(0, 1, 0);

const VERT = `
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = `
  uniform vec3 uColor;
  varying float vA, vR;
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    // mỗi hạt một hình loang khác nhau (nhiễu xoay theo hạt) => khói sợi, không tròn như bóng
    vec2 c = gl_PointCoord - 0.5;
    float an = vR * 6.2831853, cs = cos(an), sn = sin(an);
    vec2 q = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs);
    float n = n2(q * 4.0 + vR * 37.0) * 0.65 + n2(q * 9.0 - vR * 13.0) * 0.35;
    float r = length(c) * 2.0;
    float a = smoothstep(1.0, 0.15, r + (n - 0.5) * 0.9);
    a *= a * vA;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }`;

export class Smoke {
  constructor(scene, person) {
    this.person = person;
    // điếu thuốc: thân trắng + đầu lọc vàng cam (dài 8.5 cm; to hơn thật một chút cho dễ thấy)
    this.cig = new THREE.Group();
    const paper = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0055, 0.062, 8).translate(0, 0.0115, 0),
      new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.8 }));
    const filter = new THREE.Mesh(new THREE.CylinderGeometry(0.0057, 0.0057, 0.023, 8).translate(0, -0.031, 0),
      new THREE.MeshStandardMaterial({ color: 0xc98a3c, roughness: 0.7 }));
    this.ember = new THREE.Mesh(new THREE.CylinderGeometry(0.0056, 0.0056, 0.005, 8).translate(0, 0.0425, 0),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.35, 0.08) }));
    this.cig.add(paper, filter, this.ember);
    this.cig.visible = false;
    scene.add(this.cig);
    const glow = glowTexture();
    const sprite = (color, size) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
      s.scale.setScalar(size); s.visible = false; scene.add(s);
      return s;
    };
    this.tipGlow = sprite(0xff5a1a, 0.07);
    this.flame = sprite(0xffb347, 0.09);
    // hạt khói
    this.pos = new Float32Array(N * 3);
    this.vel = new Float32Array(N * 3);
    this.age = new Float32Array(N).fill(99);
    this.life = new Float32Array(N).fill(1);
    this.s0 = new Float32Array(N); this.s1 = new Float32Array(N); this.a0 = new Float32Array(N); this.drag = new Float32Array(N);
    this.aA = new Float32Array(N); this.aS = new Float32Array(N); this.aR = new Float32Array(N);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aA', new THREE.BufferAttribute(this.aA, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aS', new THREE.BufferAttribute(this.aS, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aR', new THREE.BufferAttribute(this.aR, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 500 }, uColor: { value: new THREE.Color(0.7, 0.7, 0.72) } },
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, fog: false,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
    this.next = 0; this.emitTip = 0; this.emitMouth = 0; this.t = 0;
    this._h = new THREE.Vector3(); this._e = new THREE.Vector3(); this._d = new THREE.Vector3(); this._c = new THREE.Vector3();
    this.tip = new THREE.Vector3();
    this._q = new THREE.Quaternion(); this._dir = new THREE.Vector3(); this._r = new THREE.Vector3();
    this._fv = [0, 1, 2, 3].map(() => new THREE.Vector3());
    this.fg = null;                  // xương ngón trỏ / ngón giữa tay phải
  }

  _spawn(p, v, life, s0, s1, a0, drag) {
    const i = this.next; this.next = (this.next + 1) % N;
    this.pos.set([p.x, p.y, p.z], i * 3);
    this.vel.set([v.x, v.y, v.z], i * 3);
    this.age[i] = 0; this.life[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.a0[i] = a0; this.drag[i] = drag; this.aR[i] = Math.random();
  }

  // sm: StopScene.smoking; st: trạng thái môi trường (gió, ánh sáng); scalePx: chiều cao canvas / (2·tan(fov/2))
  update(dt, sm, st, scalePx) {
    this.t += dt;
    const arm = this.person.arms?.r;
    const hold = sm.on && arm && this.person.root.visible;
    this.cig.visible = !!hold;
    sm.errOK = false;
    if (hold) {
      // điếu thuốc kẹp trong khe giữa ngón trỏ và ngón giữa (giữa đốt 2 - 3 của hai ngón), chĩa ngang ra trước - sang phải;
      // đầu lọc cách khe ngón 3 cm (phía miệng), đầu đốt cách 5.5 cm
      if (!this.fg && this.person.model) {
        const f = ['index_02_r', 'index_03_r', 'middle_02_r', 'middle_03_r'].map((n) => this.person.model.getObjectByName(n));
        this.fg = f.every(Boolean) ? f : arm.slice(1);
      }
      const G = this._c;
      if (this.fg.length === 4) {
        const [i2, i3, m2, m3] = this.fg.map((b, k) => b.getWorldPosition(this._fv[k]));
        G.copy(i2).add(m2).multiplyScalar(0.5 * 0.65).addScaledVector(i3.add(m3), 0.5 * 0.35);
      } else {
        const H = arm[2].getWorldPosition(this._h), E = arm[1].getWorldPosition(this._e);
        G.copy(H).addScaledVector(this._d.subVectors(H, E).normalize(), 0.1);
      }
      const dir = this._dir.copy(sm.F).multiplyScalar(0.45).addScaledVector(sm.R, 0.85).addScaledVector(UP, -0.06).normalize();
      this.cig.position.copy(G).addScaledVector(dir, 0.0125);
      this.cig.quaternion.setFromUnitVectors(UP, dir);
      this.tip.copy(G).addScaledVector(dir, 0.055);
      // sai lệch so với chỗ cần đặt khe ngón khi ngậm thuốc (đầu lọc ở môi) => StopScene dời cổ tay bù lại
      sm.err.copy(sm.mouth).addScaledVector(dir, 0.03).sub(G);
      sm.errOK = true;
    }
    // đầu thuốc đỏ: rít thì sáng rực, để yên thì âm ỉ
    const lit = hold && sm.lit;
    this.ember.visible = lit;
    this.tipGlow.visible = lit;
    if (lit) {
      const k = sm.drag ? 1 : 0.45 + 0.08 * Math.sin(this.t * 7);
      this.ember.material.color.setRGB(1.6 * (0.6 + k), 0.35 * (0.4 + k), 0.08);
      this.tipGlow.position.copy(this.tip);
      this.tipGlow.material.opacity = 0.35 + 0.65 * k;
      this.tipGlow.scale.setScalar(0.05 + 0.05 * k);
    }
    this.flame.visible = hold && sm.flame > 0;
    if (this.flame.visible) {
      this.flame.position.copy(this.tip).addScaledVector(UP, -0.015);
      this.flame.material.opacity = 0.7 + 0.3 * Math.sin(this.t * 40);
      this.flame.scale.setScalar(0.08 + 0.02 * Math.sin(this.t * 27));
    }
    // gió đẩy khói
    const wx = (st.windDir?.x || 0) * (0.12 + 0.6 * st.wind), wz = (st.windDir?.y || 0) * (0.12 + 0.6 * st.wind);
    const v = this._d;
    // khói mảnh từ đầu thuốc
    if (lit) {
      this.emitTip += dt * (sm.drag ? 16 : 12);
      while (this.emitTip >= 1) {
        this.emitTip -= 1;
        v.set(wx * 0.3 + (Math.random() - 0.5) * 0.03, 0.16 + Math.random() * 0.06, wz * 0.3 + (Math.random() - 0.5) * 0.03);
        this._spawn(this.tip, v, 2.8 + Math.random(), 0.022, 0.2, 0.3, 0.2);   // khói đầu thuốc (cả lúc không rít)
      }
    }
    // nhả khói từ miệng: luồng phả ra trước rồi chậm lại, loang to
    if (sm.exhale && hold) {
      this.emitMouth += dt * 75;
      while (this.emitMouth >= 1) {
        this.emitMouth -= 1;
        // phả ra trước, chếch nhẹ sang trái người, hơi chúc xuống; chậm lại rồi lơ lửng trước mặt
        v.copy(sm.F).multiplyScalar(0.3).addScaledVector(sm.R, -0.14).multiplyScalar(0.9 + Math.random() * 0.4).addScaledVector(UP, -0.06 + Math.random() * 0.07)
          .add(this._r.set((Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.08));
        this._spawn(sm.mouth, v, 2.4 + Math.random() * 0.8, 0.025, 0.24, 0.42, 1.3);
      }
    } else this.emitMouth = 0;
    // cập nhật hạt
    let alive = 0;
    for (let i = 0; i < N; i++) {
      const a = this.age[i];
      if (a >= this.life[i]) { this.aA[i] = 0; this.aS[i] = 0; continue; }
      alive++;
      this.age[i] = a + dt;
      const k = Math.exp(-this.drag[i] * dt), j = i * 3;
      this.vel[j] = this.vel[j] * k + wx * (1 - k);
      this.vel[j + 1] = this.vel[j + 1] * k + 0.12 * (1 - k) + 0.02 * dt;      // khói nóng bốc lên
      this.vel[j + 2] = this.vel[j + 2] * k + wz * (1 - k);
      this.pos[j] += this.vel[j] * dt + Math.sin(this.t * 1.7 + i) * 0.004;
      this.pos[j + 1] += this.vel[j + 1] * dt;
      this.pos[j + 2] += this.vel[j + 2] * dt + Math.cos(this.t * 1.3 + i * 1.7) * 0.004;
      const f = this.age[i] / this.life[i];
      this.aS[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * Math.sqrt(f);
      this.aA[i] = this.a0[i] * Math.min(1, f * 8) * (1 - f) * (1 - f);
    }
    this.points.visible = alive > 0;
    if (alive) {
      const g = this.points.geometry;
      g.attributes.position.needsUpdate = true; g.attributes.aA.needsUpdate = true; g.attributes.aS.needsUpdate = true; g.attributes.aR.needsUpdate = true;
      this.mat.uniforms.uScale.value = scalePx;
      // khói xám nhạt theo độ sáng cảnh (ban đêm tối đi, vẫn hơi thấy nhờ đèn)
      const L = Math.min(1.1, 0.15 + 0.75 * (st.light ?? 1));
      this.mat.uniforms.uColor.value.setRGB(0.85 * L, 0.85 * L, 0.88 * L);
    }
  }
}
