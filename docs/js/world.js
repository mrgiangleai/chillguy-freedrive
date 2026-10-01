import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { glowTexture } from './textures.js';
import { Precip } from './particles.js';

const DEG = Math.PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// Thông số từng loại thời tiết (giá trị số được nội suy mượt khi đổi)
//  fog: mật độ sương | overcast: độ âm u | clouds: độ phủ mây | sun: cường độ nắng | rain/snow: lượng mưa/tuyết
//  wet: đường ướt | cover: tuyết phủ | wind: sức gió 0..1 | dark: độ tối của bầu trời/cảnh (bão)
const WEATHER = {
  clear:  { fog: 0.00042, overcast: 0.0,  clouds: 0.52, sun: 1.0,  rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.3,  dark: 0,    tint: '#b9d6ee' },
  cloudy: { fog: 0.0009,  overcast: 0.75, clouds: 0.86, sun: 0.3,  rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.38, dark: 0.12, tint: '#a6b1bb' },
  windy:  { fog: 0.0006,  overcast: 0.2,  clouds: 0.62, sun: 0.85, rain: 0, snow: 0, wet: 0,   cover: 0, wind: 0.95, dark: 0,    tint: '#b4c6d8' },
  rain:   { fog: 0.0016,  overcast: 1.0,  clouds: 1.0,  sun: 0.1,  rain: 0.85, snow: 0, wet: 1, cover: 0, wind: 0.5,  dark: 0.35, tint: '#7a858f' },
  storm:  { fog: 0.0027,  overcast: 1.0,  clouds: 1.0,  sun: 0.03, rain: 1, snow: 0, wet: 1,   cover: 0, wind: 1.0,  dark: 1.0,  tint: '#3f4852' },
  snow:   { fog: 0.0019,  overcast: 0.85, clouds: 1.0,  sun: 0.35, rain: 0, snow: 1, wet: 0,   cover: 1, wind: 0.32, dark: 0.1,  tint: '#d3dbe2' },
  fog:    { fog: 0.0066,  overcast: 0.55, clouds: 0.5,  sun: 0.3,  rain: 0, snow: 0, wet: 0.2, cover: 0, wind: 0.08, dark: 0.05, tint: '#c4c9cd' },
};
const NUM_KEYS = ['fog', 'overcast', 'clouds', 'sun', 'rain', 'snow', 'wet', 'cover', 'wind', 'dark'];

const C_SUNSET = new THREE.Color('#f0a070');
const C_NIGHT = new THREE.Color('#0a1226');
const C_SUN_DAY = new THREE.Color('#fff3df');
const C_SUN_LOW = new THREE.Color('#ff9a50');
const C_MOON = new THREE.Color('#8fb0ff');

// Lớp mây: nhiễu fbm chiếu lên mặt phẳng trên cao, tô sáng theo hướng mặt trời (mép sáng, đáy tối)
const CLOUD_VERT = `
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const CLOUD_FRAG = `
  uniform float uTime, uCover, uFlash, uSoft;
  uniform vec2 uDrift;
  uniform vec3 uSunDir, uLit, uShade, uFlashCol;
  varying vec3 vDir;
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; }
    return v;
  }
  void main() {
    vec3 d = normalize(vDir);
    if (d.y <= 0.0) discard;
    vec2 uv = d.xz / (d.y + 0.14);
    vec2 p = uv * 0.72 + uDrift * uTime;
    float base = fbm(p);
    float detail = fbm(p * 3.2 + 7.3 + uDrift * uTime * 0.7);
    float n = base * 0.68 + detail * 0.32;
    float thr = 1.0 - uCover;
    float dens = smoothstep(thr, thr + 0.1 + 0.3 * uSoft, n);
    // sáng ở phía hướng về mặt trời
    vec2 sd = normalize(uSunDir.xz + vec2(1e-4)) * 0.06;
    float n2 = fbm(p + sd) * 0.68 + fbm(p * 3.2 + 7.3 + sd * 3.0) * 0.32;
    float lit = clamp((n - n2) * 3.4 + 0.5, 0.0, 1.0);
    lit = mix(lit, 0.5, uSoft * 0.5);
    vec3 col = mix(uShade, uLit, lit);
    // mép mây phát sáng khi nhìn gần mặt trời
    float sunAlign = pow(max(dot(d, uSunDir), 0.0), 6.0);
    float rim = smoothstep(0.0, 0.5, dens) * (1.0 - smoothstep(0.55, 1.0, dens));
    col += uLit * rim * (0.15 + 0.9 * sunAlign) * 0.7;
    col += uLit * sunAlign * 0.35 * (1.0 - dens * 0.4);
    col *= mix(1.0, 0.72, d.y * uSoft);                      // âm u: tối dần lên đỉnh đầu
    col += uFlashCol * uFlash * (0.35 + 0.65 * n);
    // mây ti: vệt mỏng kéo dài theo hướng gió (chỉ khi trời không âm u)
    vec2 wd = normalize(uDrift + vec2(1e-5, 1e-5));
    vec2 q = vec2(dot(uv, wd) * 0.22, dot(uv, vec2(-wd.y, wd.x)) * 1.5) + uDrift * uTime * 0.6;
    float ci = smoothstep(0.5, 0.88, fbm(q + 3.7)) * (1.0 - uSoft) * 0.55 * (1.0 - dens);
    col = mix(col, uLit * (0.85 + 0.6 * sunAlign), ci / max(dens + ci, 1e-3));
    float alpha = (dens + ci) * smoothstep(0.0, 0.07, d.y);
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

export class Environment {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.hour = 17.55;
    this.auto = false;
    this.tween = null;
    this.weather = 'clear';
    this.w = { ...WEATHER.clear };
    this.tint = new THREE.Color(WEATHER.clear.tint);
    this.target = WEATHER.clear;
    this.windDir = new THREE.Vector2(0.78, 0.62).normalize();

    // --- bầu trời (Sky của three.js) ---
    this.sky = new Sky();
    this.sky.scale.setScalar(2400);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // bản sao để chụp môi trường (PMREM) -> phản chiếu / ánh sáng nền lên xe, cỏ, mặt đường ướt
    this.envScene = new THREE.Scene();
    this.envSky = new Sky();
    this.envSky.scale.setScalar(1000);
    this.envScene.add(this.envSky);
    this.envDome = new THREE.Mesh(new THREE.SphereGeometry(900, 16, 8), new THREE.MeshBasicMaterial({
      color: 0x888888, side: THREE.BackSide, transparent: true, opacity: 0, depthWrite: false, fog: false,
    }));
    this.envScene.add(this.envDome);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envRT = null;
    this.envTimer = 0;
    this.envKey = '';

    // --- sao / trăng ---
    const sp = new Float32Array(1800 * 3);
    for (let i = 0; i < 1800; i++) {
      const v = new THREE.Vector3().randomDirection();
      v.y = Math.abs(v.y) * 0.9 + 0.1;
      v.normalize().multiplyScalar(3200);
      sp.set([v.x, v.y, v.z], i * 3);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({
      color: 0xdfe8ff, size: 2.1, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false,
    }));
    this.stars.renderOrder = 1;
    this.stars.frustumCulled = false;
    scene.add(this.stars);

    const glow = glowTexture();
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(55, 24, 16), new THREE.MeshBasicMaterial({
      color: 0xeef2ff, fog: false, toneMapped: false, transparent: true, depthWrite: false,
    }));
    this.moon.renderOrder = 2;
    this.moon.frustumCulled = false;
    this.moonHalo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glow, color: 0x9fb8ff, transparent: true, opacity: 0.5, depthWrite: false,
      blending: THREE.AdditiveBlending, fog: false,
    }));
    this.moonHalo.scale.setScalar(700);
    this.moon.add(this.moonHalo);
    scene.add(this.moon);

    // quầng sáng quanh mặt trời (Sky shader chỉ có đĩa mặt trời, quầng khá yếu)
    this.sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glow, color: 0xffa860, transparent: true, opacity: 0, depthWrite: false,
      blending: THREE.AdditiveBlending, fog: false,
    }));
    this.sunGlow.renderOrder = 2;
    this.sunGlow2 = this.sunGlow.clone();
    this.sunGlow2.material = this.sunGlow.material.clone();
    scene.add(this.sunGlow, this.sunGlow2);

    // --- lớp mây (shader) ---
    this.cloudMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }, uCover: { value: 0.4 }, uFlash: { value: 0 }, uSoft: { value: 0 },
        uDrift: { value: new THREE.Vector2() },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) },
        uLit: { value: new THREE.Color() }, uShade: { value: new THREE.Color() },
        uFlashCol: { value: new THREE.Color(1.5, 1.7, 2.4) },
      },
      vertexShader: CLOUD_VERT, fragmentShader: CLOUD_FRAG,
      side: THREE.BackSide, transparent: true, depthWrite: false, fog: false,
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(2300, 32, 16), this.cloudMat);
    this.dome.renderOrder = 3;
    this.dome.frustumCulled = false;
    scene.add(this.dome);
    this.cloudTime = 0;

    // --- dải sương chân trời ---
    this.haze = new THREE.Mesh(new THREE.CylinderGeometry(1800, 1800, 1, 48, 1, true), new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color() } },
      side: THREE.DoubleSide, transparent: true, depthWrite: false, fog: false,
      vertexShader: 'varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }',
    }));
    this.haze.renderOrder = 5;
    this.haze.frustumCulled = false;
    scene.add(this.haze);

    // --- tia sét ---
    this.boltGeo = new THREE.BufferGeometry();
    this.boltGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(80 * 2 * 3), 3));
    this.boltGeo.setDrawRange(0, 0);
    this.bolt = new THREE.LineSegments(this.boltGeo, new THREE.LineBasicMaterial({
      color: 0xd6e4ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.bolt.renderOrder = 6;
    this.bolt.frustumCulled = false;
    scene.add(this.bolt);
    this.flashT = -1;
    this.nextStrike = 2;
    this.flash = 0;
    this.onThunder = null;

    // --- ánh sáng ---
    this.sun = new THREE.DirectionalLight(0xffffff, 1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -38; sc.right = 38; sc.top = 38; sc.bottom = -38; sc.near = 1; sc.far = 260;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.04;
    scene.add(this.sun, this.sun.target);
    this.moonLight = new THREE.DirectionalLight(C_MOON, 0);
    scene.add(this.moonLight, this.moonLight.target);
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x405030, 0.4);
    scene.add(this.hemi);

    scene.fog = new THREE.FogExp2(0xb9d6ee, 0.0006);
    this.precip = new Precip(scene);

    // trạng thái chia sẻ cho phần còn lại của app
    this.state = {
      night: 0, lamps: 0, dayF: 1, warm: 0, light: 1, rain: 0, snow: 0, wet: 0, cover: 0, overcast: 0,
      wind: 0.3, dark: 0, drift: 0, flash: 0, windDir: this.windDir,
      fogColor: new THREE.Color(), sunDir: new THREE.Vector3(), elevation: 0,
    };
    this._c = new THREE.Color();
    this._c2 = new THREE.Color();
    this._lit = new THREE.Color();
    this._shade = new THREE.Color();
    this._v = new THREE.Vector3();
  }

  setWeather(id) {
    this.weather = id;
    this.target = WEATHER[id];
    if (id === 'storm') this.nextStrike = Math.min(this.nextStrike, 1.2);
  }

  // hour: đặt giờ (chuyển cảnh mượt). null => bật chế độ tự chạy
  setTime(hour) {
    if (hour == null) { this.auto = true; this.tween = null; return; }
    this.auto = false;
    this.tween = hour;
  }

  get clock() {
    const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60);
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }

  _strike(cam) {
    // dựng tia sét ngoằn ngoèo ở phía xa, rồi báo cho âm thanh (sấm đến chậm hơn chớp)
    const a = Math.random() * Math.PI * 2, D = 800 + Math.random() * 900;
    const g = new THREE.Vector3(cam.x + Math.cos(a) * D, 0, cam.z + Math.sin(a) * D);
    const top = new THREE.Vector3(g.x + (Math.random() - 0.5) * 240, 650 + Math.random() * 200, g.z + (Math.random() - 0.5) * 240);
    const pos = this.boltGeo.attributes.position;
    let n = 0;
    const path = (from, to, segs, jit) => {
      let prev = from.clone();
      for (let i = 1; i <= segs; i++) {
        const t = i / segs;
        const p = from.clone().lerp(to, t);
        if (i < segs) p.add(new THREE.Vector3((Math.random() - 0.5) * jit, 0, (Math.random() - 0.5) * jit));
        pos.setXYZ(n++, prev.x, prev.y, prev.z);
        pos.setXYZ(n++, p.x, p.y, p.z);
        prev = p;
      }
      return prev;
    };
    path(top, g, 16, 110);
    for (let b = 0; b < 3; b++) {
      const t = 0.25 + Math.random() * 0.5;
      const from = top.clone().lerp(g, t);
      const to = from.clone().add(new THREE.Vector3((Math.random() - 0.5) * 380, -(120 + Math.random() * 260), (Math.random() - 0.5) * 380));
      path(from, to, 5, 60);
    }
    pos.needsUpdate = true;
    this.boltGeo.setDrawRange(0, n);
    this.flashT = 0;
    if (this.onThunder) this.onThunder(clamp(D / 340, 0.7, 4.2), clamp(1.3 - D / 1800, 0.35, 1));
  }

  update(dt, focus) {
    const cam = this.camera.position;

    // ---- thời gian ----
    if (this.auto) this.hour = (this.hour + dt * 0.06) % 24;
    else if (this.tween != null) {
      const d = ((this.tween - this.hour + 36) % 24) - 12;      // quãng ngắn nhất, -12..12
      const step = 5 * dt;
      if (Math.abs(d) <= step) { this.hour = this.tween; this.tween = null; }
      else this.hour = (this.hour + Math.sign(d) * step + 24) % 24;
    }

    // ---- thời tiết (nội suy) ----
    const k = 1 - Math.exp(-dt * 1.4);
    for (const key of NUM_KEYS) this.w[key] += (this.target[key] - this.w[key]) * k;
    this.tint.lerp(this._c.set(this.target.tint), k);
    const w = this.w;
    const over = w.overcast;
    const dk = w.dark;

    // ---- sét (chỉ khi đang bão) ----
    if (this.weather === 'storm' && w.dark > 0.5) {
      this.nextStrike -= dt;
      if (this.nextStrike <= 0) { this._strike(cam); this.nextStrike = 3.5 + Math.random() * 7; }
    }
    if (this.flashT >= 0) {
      this.flashT += dt;
      const t = this.flashT;
      this.flash = clamp(Math.exp(-t * 11) + 0.75 * (t > 0.17 ? Math.exp(-(t - 0.17) * 8) : 0), 0, 1);
      if (t > 1.6) { this.flashT = -1; this.flash = 0; this.boltGeo.setDrawRange(0, 0); }
    }
    const flash = this.flash;
    this.bolt.material.opacity = this.flashT >= 0 && this.flashT < 0.5 ? flash : 0;
    this.bolt.visible = this.bolt.material.opacity > 0.02;

    // ---- mặt trời ----
    const e = 65 * Math.sin(((this.hour - 6) / 24) * Math.PI * 2);   // độ cao mặt trời (độ)
    const sunDir = this.state.sunDir;
    sunDir.setFromSphericalCoords(1, Math.PI / 2 - e * DEG, Math.PI + 0.35);
    const dayF = sstep(-4, 14, e);
    const night = 1 - sstep(-12, 0, e);
    const warm = Math.exp(-Math.pow((e - 3) / 10, 2));

    // ---- màu sương mù / chân trời ----
    const fogC = this.state.fogColor.copy(this.tint).multiplyScalar(0.35 + 0.65 * dayF);
    fogC.lerp(C_SUNSET, warm * 0.85 * (1 - 0.55 * over) * (1 - night) * (1 - 0.9 * dk));
    fogC.lerp(C_NIGHT, night);
    fogC.multiplyScalar(1 - 0.35 * dk);
    fogC.lerp(this._c.set('#9db0d8'), flash * 0.5);
    this.scene.fog.color.copy(fogC);
    this.scene.fog.density = w.fog;

    // ---- Sky shader ----
    const u = this.sky.material.uniforms;
    const turb = 2.2 + warm * 5.5 + over * 3;
    const ray = (2.0 + warm * 1.2) * (1 - over * 0.65);
    u.turbidity.value = turb;
    u.rayleigh.value = ray;
    u.mieCoefficient.value = 0.005 + warm * 0.007 + over * 0.01;
    u.mieDirectionalG.value = 0.7 + 0.12 * warm;
    u.sunPosition.value.copy(sunDir);
    this.renderer.toneMappingExposure = (0.5 + 0.12 * warm) * (1 - 0.5 * dk);

    // ---- ánh sáng chính (mặt trời ban ngày, mặt trăng ban đêm) ----
    this.sun.intensity = 3.4 * sstep(-2, 9, e) * w.sun;
    this.sun.color.copy(C_SUN_DAY).lerp(C_SUN_LOW, clamp(warm * 1.3, 0, 1));
    this.moonLight.intensity = 1.0 * sstep(-3, -12, e) * (1 - 0.6 * over);
    if (focus) {
      this.sun.position.copy(focus).addScaledVector(sunDir, 120);
      this.sun.target.position.copy(focus);
      this.moonLight.position.copy(focus).addScaledVector(sunDir, -120);
      this.moonLight.target.position.copy(focus);
    }
    this.hemi.color.copy(fogC).lerp(this._c.set('#6f8cd0'), night * 0.75).lerp(this._c.set('#c4d4ff'), flash);
    this.hemi.groundColor.set('#3a4630').multiplyScalar(0.25 + 0.75 * dayF);
    this.hemi.intensity = (0.12 + 0.35 * dayF + 0.28 * night) * (1 - 0.4 * over) * (1 - 0.35 * dk) + flash * 3.2;

    // ---- đồ vật trên trời bám theo camera ----
    this.sky.position.copy(cam);
    this.stars.position.copy(cam);
    this.dome.position.copy(cam);
    this.haze.position.set(cam.x, 0, cam.z);
    const hazeH = 150 + w.fog * 100000;
    this.haze.scale.y = hazeH;
    this.haze.position.y = hazeH / 2 - 60;
    this.haze.material.uniforms.uColor.value.copy(fogC);

    this.stars.material.opacity = night * (1 - over * 0.95);
    this.stars.visible = this.stars.material.opacity > 0.01;

    this.moon.position.copy(cam).addScaledVector(this._v.copy(sunDir).negate(), 2900);
    this.moon.visible = -e > -4 && over < 0.95;
    this.moon.material.opacity = (1 - over) * clamp((-e + 4) / 8, 0, 1);
    this.moonHalo.material.opacity = 0.5 * this.moon.material.opacity;

    // quầng sáng mặt trời: mạnh nhất lúc nắng thấp, tắt khi âm u / ban đêm
    const sg = clamp(e / 4 + 1, 0, 1) * (1 - over * 0.92) * w.sun;
    const sgPos = this._v.copy(sunDir).multiplyScalar(2900).add(cam);
    this.sunGlow.position.copy(sgPos);
    this.sunGlow2.position.copy(sgPos);
    this.sunGlow.scale.setScalar(1300 + 600 * warm);
    this.sunGlow2.scale.setScalar(4200);
    this.sunGlow.material.opacity = sg * (0.28 + 0.55 * warm);
    this.sunGlow2.material.opacity = sg * (0.1 + 0.25 * warm);
    this.sunGlow.material.color.set('#ffb070').lerp(this._c.set('#fff2d6'), 1 - warm);
    this.sunGlow2.material.color.set('#ff8a55').lerp(this._c.set('#ffe9c4'), 1 - warm);
    this.sunGlow.visible = this.sunGlow2.visible = sg > 0.01;

    // ---- mây ----
    // sáng (lit): trắng ban ngày, cam lúc hoàng hôn, xanh nhạt dưới trăng; tối (shade): xanh xám / tím nhạt
    const cw = clamp(warm * 1.1, 0, 1) * (1 - 0.92 * dk);   // bão: mây luôn xám xanh, không ngả cam
    const lit = this._lit.set('#ffffff').lerp(this._c2.set('#ff9d66'), cw).multiplyScalar(2.4 * dayF);
    lit.add(this._c2.set('#7f98d8').multiplyScalar(0.2 * night * (1 - over * 0.6)));
    const shade = this._shade.set('#6f84a8').lerp(this._c2.set('#a86a7a'), cw * 0.75).multiplyScalar(1.05 * dayF);
    shade.add(this._c2.set('#101b38').multiplyScalar(0.55 * night));
    lit.multiplyScalar(1 - 0.8 * dk);
    shade.multiplyScalar(1 - 0.7 * dk);
    this.cloudTime += dt;
    const cu = this.cloudMat.uniforms;
    cu.uTime.value = this.cloudTime;
    cu.uCover.value = w.clouds;
    cu.uSoft.value = clamp(over * 0.9 + dk * 0.3, 0, 1);
    cu.uFlash.value = flash;
    cu.uDrift.value.copy(this.windDir).multiplyScalar(0.003 + 0.02 * w.wind);
    cu.uSunDir.value.copy(e >= -2 ? sunDir : this._v.copy(sunDir).negate());
    cu.uLit.value.copy(lit);
    cu.uShade.value.copy(shade);

    // ---- trạng thái chia sẻ ----
    const st = this.state;
    st.elevation = e;
    st.dayF = dayF;
    st.night = night;
    st.warm = warm;
    st.overcast = over;
    st.rain = w.rain; st.snow = w.snow; st.wet = w.wet; st.cover = w.cover;
    st.wind = w.wind; st.dark = dk; st.flash = flash;
    st.drift = clamp((w.wind - 0.5) * 2.2, 0, 1) * (1 - w.rain) * (1 - w.snow);
    const bad = clamp(w.rain * 0.35 + w.snow * 0.25 + (w.fog > 0.003 ? 0.3 : 0), 0, 0.5);
    st.lamps = clamp(Math.max(night, 0.7 * (1 - dayF)) + bad * dayF + dk * 0.7, 0, 1);
    st.light = (0.14 + 0.86 * dayF * (1 - 0.3 * over) * (1 - 0.55 * dk)) + flash * 0.6;

    // ---- mưa / tuyết / bông cỏ bay ----
    this.precip.update(dt, cam, st, this.renderer.domElement.height);

    // ---- chụp môi trường (hạn chế tần suất) ----
    this.envTimer -= dt;
    if (this.envTimer <= 0) {
      const key = [e.toFixed(1), over.toFixed(2), dk.toFixed(2), turb.toFixed(1)].join('|');
      if (key !== this.envKey || !this.envRT) {
        this.envKey = key;
        this._captureEnv(sunDir, turb, ray, over, dk, lit, shade);
      }
      this.envTimer = 0.5;
    }
  }

  _captureEnv(sunDir, turb, ray, over, dk, lit, shade) {
    const u = this.envSky.material.uniforms;
    u.turbidity.value = turb + 4 * over;
    u.rayleigh.value = ray * (1 - 0.5 * over) + 0.2;
    u.mieCoefficient.value = 0.005 + over * 0.03;
    u.mieDirectionalG.value = 0.7;
    u.sunPosition.value.copy(sunDir);
    // trời âm u: phủ một vòm xám để ánh sáng nền tối đi theo màu mây
    this.envDome.material.color.copy(shade).lerp(lit, 0.3).multiplyScalar(0.55);
    this.envDome.material.opacity = clamp(over * 0.92 + dk * 0.08, 0, 1);
    const rt = this.pmrem.fromScene(this.envScene, 0, 1, 3000);
    if (this.envRT) this.envRT.dispose();
    this.envRT = rt;
    this.scene.environment = rt.texture;
  }
}
