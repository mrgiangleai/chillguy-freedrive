import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { glowTexture, cloudTexture } from './textures.js';
import { Precip } from './particles.js';

const DEG = Math.PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// Thông số từng loại thời tiết (giá trị số được nội suy mượt khi đổi)
const WEATHER = {
  clear:  { fog: 0.00055, overcast: 0.0,  clouds: 0.35, sun: 1.0,  rain: 0, snow: 0, wet: 0,   cover: 0, tint: '#b9d6ee' },
  cloudy: { fog: 0.0009,  overcast: 0.8,  clouds: 1.0,  sun: 0.3,  rain: 0, snow: 0, wet: 0,   cover: 0, tint: '#a6b1bb' },
  rain:   { fog: 0.0016,  overcast: 1.0,  clouds: 1.0,  sun: 0.1,  rain: 1, snow: 0, wet: 1,   cover: 0, tint: '#7a858f' },
  snow:   { fog: 0.0019,  overcast: 0.85, clouds: 1.0,  sun: 0.35, rain: 0, snow: 1, wet: 0,   cover: 1, tint: '#d3dbe2' },
  fog:    { fog: 0.0066,  overcast: 0.55, clouds: 0.4,  sun: 0.3,  rain: 0, snow: 0, wet: 0.2, cover: 0, tint: '#c4c9cd' },
};
const NUM_KEYS = ['fog', 'overcast', 'clouds', 'sun', 'rain', 'snow', 'wet', 'cover'];

const C_SUNSET = new THREE.Color('#f0a070');
const C_NIGHT = new THREE.Color('#0a1226');
const C_SUN_DAY = new THREE.Color('#fff3df');
const C_SUN_LOW = new THREE.Color('#ff9a50');
const C_MOON = new THREE.Color('#8fb0ff');

export class Environment {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.hour = 17.85;
    this.auto = false;
    this.tween = null;
    this.weather = 'clear';
    this.w = { ...WEATHER.clear };
    this.tint = new THREE.Color(WEATHER.clear.tint);
    this.target = WEATHER.clear;

    // --- bầu trời (Sky của three.js) ---
    this.sky = new Sky();
    this.sky.scale.setScalar(2400);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // bản sao để chụp môi trường (PMREM) -> phản chiếu lên sơn xe / mặt đường ướt
    this.envScene = new THREE.Scene();
    this.envSky = new Sky();
    this.envSky.scale.setScalar(1000);
    this.envScene.add(this.envSky);
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

    // --- mây (sprite) ---
    this.cloudGroup = new THREE.Group();
    const cloudTex = cloudTexture();
    for (let i = 0; i < 26; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: cloudTex, transparent: true, depthWrite: false, fog: false, opacity: 0,
      }));
      const a = Math.random() * Math.PI * 2, r = 700 + Math.random() * 900;
      const h = 220 + Math.random() * 380;
      sp.position.set(Math.cos(a) * r, h, Math.sin(a) * r);
      const w = 600 + Math.random() * 700;
      sp.scale.set(w, w * 0.42, 1);
      sp.renderOrder = 4;
      this.cloudGroup.add(sp);
    }
    scene.add(this.cloudGroup);

    // --- vòm mây phủ (trời âm u) + dải sương chân trời ---
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(2300, 24, 12), new THREE.ShaderMaterial({
      uniforms: { uTop: { value: new THREE.Color() }, uBottom: { value: new THREE.Color() }, uOpacity: { value: 0 } },
      side: THREE.BackSide, transparent: true, depthWrite: false, fog: false,
      vertexShader: 'varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uTop, uBottom; uniform float uOpacity; varying float vY; void main(){ gl_FragColor = vec4(mix(uBottom, uTop, smoothstep(0.0, 0.8, vY)), uOpacity); }',
    }));
    this.dome.renderOrder = 3;
    this.dome.frustumCulled = false;
    scene.add(this.dome);

    this.haze = new THREE.Mesh(new THREE.CylinderGeometry(1800, 1800, 1, 48, 1, true), new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color() } },
      side: THREE.DoubleSide, transparent: true, depthWrite: false, fog: false,
      vertexShader: 'varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }',
    }));
    this.haze.renderOrder = 5;
    this.haze.frustumCulled = false;
    scene.add(this.haze);

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
      night: 0, lamps: 0, dayF: 1, light: 1, rain: 0, snow: 0, wet: 0, cover: 0, overcast: 0,
      fogColor: new THREE.Color(), sunDir: new THREE.Vector3(), elevation: 0,
    };
    this._c = new THREE.Color();
    this._v = new THREE.Vector3();
  }

  setWeather(id) {
    this.weather = id;
    this.target = WEATHER[id];
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

  update(dt, focus) {
    const cam = this.camera.position;

    // ---- thời gian ----
    if (this.auto) this.hour = (this.hour + dt * 0.06) % 24;
    else if (this.tween != null) {
      let d = ((this.tween - this.hour + 36) % 24) - 12;      // quãng ngắn nhất, -12..12
      const step = 5 * dt;
      if (Math.abs(d) <= step) { this.hour = this.tween; this.tween = null; }
      else this.hour = (this.hour + Math.sign(d) * step + 24) % 24;
    }

    // ---- thời tiết (nội suy) ----
    const k = 1 - Math.exp(-dt * 1.4);
    for (const key of NUM_KEYS) this.w[key] += (this.target[key] - this.w[key]) * k;
    this.tint.lerp(this._c.set(this.target.tint), k);
    const w = this.w;

    // ---- mặt trời ----
    const e = 65 * Math.sin(((this.hour - 6) / 24) * Math.PI * 2);   // độ cao mặt trời (độ)
    const sunDir = this.state.sunDir;
    sunDir.setFromSphericalCoords(1, Math.PI / 2 - e * DEG, Math.PI + 0.35);
    const dayF = sstep(-4, 14, e);
    const night = 1 - sstep(-12, 0, e);
    const warm = Math.exp(-Math.pow((e - 3) / 10, 2));
    const over = w.overcast;

    // ---- màu sương mù / chân trời ----
    const fogC = this.state.fogColor.copy(this.tint).multiplyScalar(0.35 + 0.65 * dayF);
    fogC.lerp(C_SUNSET, warm * 0.7 * (1 - 0.55 * over) * (1 - night));
    fogC.lerp(C_NIGHT, night);
    this.scene.fog.color.copy(fogC);
    this.scene.fog.density = w.fog;

    // ---- Sky shader ----
    const u = this.sky.material.uniforms;
    const turb = 2.5 + warm * 7 + over * 3;
    const ray = (2.0 + warm * 1.2) * (1 - over * 0.65);
    u.turbidity.value = turb;
    u.rayleigh.value = ray;
    u.mieCoefficient.value = 0.005 + over * 0.01;
    u.mieDirectionalG.value = 0.7;
    u.sunPosition.value.copy(sunDir);
    this.renderer.toneMappingExposure = 0.5 + 0.12 * warm;

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
    this.hemi.color.copy(fogC).lerp(new THREE.Color('#6f8cd0'), night * 0.75);
    this.hemi.groundColor.set('#3a4630').multiplyScalar(0.25 + 0.75 * dayF);
    this.hemi.intensity = (0.12 + 0.35 * dayF + 0.28 * night) * (1 - 0.4 * over);

    // ---- đồ vật trên trời bám theo camera ----
    this.sky.position.copy(cam);
    this.stars.position.copy(cam);
    this.dome.position.copy(cam);
    this.cloudGroup.position.set(cam.x, 0, cam.z);
    this.cloudGroup.rotation.y += dt * 0.002;
    this.haze.position.set(cam.x, 0, cam.z);
    const hazeH = 250 + w.fog * 100000;
    this.haze.scale.y = hazeH;
    this.haze.position.y = hazeH / 2 - 60;
    this.haze.material.uniforms.uColor.value.copy(fogC);

    this.stars.material.opacity = night * (1 - over * 0.95);
    this.stars.visible = this.stars.material.opacity > 0.01;

    this.moon.position.copy(cam).addScaledVector(this._v.copy(sunDir).negate(), 2900);
    const moonUp = -e > -4;
    this.moon.visible = moonUp && over < 0.95;
    this.moon.material.opacity = (1 - over) * clamp((-e + 4) / 8, 0, 1);
    this.moonHalo.material.opacity = 0.5 * this.moon.material.opacity;

    const du = this.dome.material.uniforms;
    du.uBottom.value.copy(fogC);
    du.uTop.value.copy(fogC).multiplyScalar(0.72);
    du.uOpacity.value = clamp(over * 0.98, 0, 1);

    // mây: ban ngày trắng, hoàng hôn ngả cam, ban đêm tối
    const cc = this._c.set('#ffffff').lerp(new THREE.Color('#ffc09a'), clamp(warm * 0.9, 0, 1));
    cc.multiplyScalar(0.3 + 0.7 * dayF);
    cc.lerp(fogC.clone().multiplyScalar(1.15), over * 0.7);
    // mây hiện dần theo mức độ (trời nắng chỉ vài đám)
    const nCl = this.cloudGroup.children.length;
    this.cloudGroup.children.forEach((sp, i) => {
      sp.material.color.copy(cc);
      sp.material.opacity = clamp((w.clouds * 1.05 - i / nCl) * 5, 0, 1) * 0.85;
      sp.visible = sp.material.opacity > 0.01;
    });

    // ---- trạng thái chia sẻ ----
    const st = this.state;
    st.elevation = e;
    st.dayF = dayF;
    st.night = night;
    st.overcast = over;
    st.rain = w.rain; st.snow = w.snow; st.wet = w.wet; st.cover = w.cover;
    const bad = clamp(w.rain * 0.35 + w.snow * 0.25 + (w.fog > 0.003 ? 0.3 : 0), 0, 0.5);
    st.lamps = clamp(Math.max(night, 0.7 * (1 - dayF)) + bad * dayF, 0, 1);
    st.light = 0.14 + 0.86 * dayF * (1 - 0.3 * over);

    // ---- mưa / tuyết ----
    this.precip.update(dt, cam, st, this.renderer.domElement.height);

    // ---- chụp môi trường (hạn chế tần suất) ----
    this.envTimer -= dt;
    if (this.envTimer <= 0) {
      const key = [e.toFixed(1), over.toFixed(2), turb.toFixed(1)].join('|');
      if (key !== this.envKey || !this.envRT) {
        this.envKey = key;
        this._captureEnv(sunDir, turb, ray, over);
      }
      this.envTimer = 0.5;
    }
  }

  _captureEnv(sunDir, turb, ray, over) {
    const u = this.envSky.material.uniforms;
    u.turbidity.value = turb + 4 * over;
    u.rayleigh.value = ray * (1 - 0.5 * over) + 0.2;
    u.mieCoefficient.value = 0.005 + over * 0.03;
    u.mieDirectionalG.value = 0.7;
    u.sunPosition.value.copy(sunDir);
    const rt = this.pmrem.fromScene(this.envScene, 0, 1, 3000);
    if (this.envRT) this.envRT.dispose();
    this.envRT = rt;
    this.scene.environment = rt.texture;
  }
}
