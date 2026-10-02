import * as THREE from 'three';
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
const WET_FADE = 1.5;
const NUM_KEYS = ['fog', 'overcast', 'clouds', 'sun', 'rain', 'snow', 'wet', 'cover', 'wind', 'dark'];

// Bầu trời gradient: các mốc màu theo độ cao mặt trời e (độ).
//            e,    đỉnh trời,  giữa,      chân trời, dải ấm phía mặt trời, quầng mặt trời
const SKY_KEYS = [
  [-18, '#040a1a', '#08142c', '#122244', '#122244', '#000000'],
  [-9, '#06102e', '#0e1d47', '#1f2d5a', '#363562', '#24182c'],
  [-4, '#122052', '#2a3c79', '#67588d', '#d06e7a', '#a24a40'],
  [0, '#1d3d80', '#4868ab', '#e3987c', '#ff8a48', '#ff7030'],
  [4, '#2453a0', '#6286c4', '#f0bd92', '#ffb36c', '#ff9a52'],
  [10, '#2a64b4', '#719fd9', '#f1d9bd', '#ffd59c', '#ffcf88'],
  [22, '#2468c8', '#5b9be3', '#c6def3', '#e1edf5', '#fff1d6'],
  [50, '#1e5fc4', '#4f92e0', '#b4d4f2', '#d2e5f3', '#fff7e6'],
].map(([e, ...c]) => [e, ...c.map((h) => new THREE.Color(h))]);
const SKY_I = 2.15;   // hệ số HDR (tone mapping ACES sẽ nén lại)

// tone mapping ACES của three.js (r160) + mã hoá sRGB => màu hiển thị thật trên màn hình.
// Dùng để màu sương xa / dải chân trời khớp đúng màu chân trời của bầu trời.
function displayColor(c, exposure, out) {
  const k = exposure / 0.6;
  const r = c.r * k, g = c.g * k, b = c.b * k;
  const ir = 0.59719 * r + 0.35458 * g + 0.04823 * b;
  const ig = 0.076 * r + 0.90834 * g + 0.01566 * b;
  const ib = 0.0284 * r + 0.13383 * g + 0.83777 * b;
  const f = (v) => (v * (v + 0.0245786) - 0.000090537) / (v * (0.983729 * v + 0.432951) + 0.238081);
  const fr = f(ir), fg = f(ig), fb = f(ib);
  const enc = (v) => { v = Math.min(1, Math.max(0, v)); return v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055; };
  return out.setRGB(
    enc(1.60475 * fr - 0.53108 * fg - 0.07367 * fb),
    enc(-0.10208 * fr + 1.10813 * fg - 0.00605 * fb),
    enc(-0.00327 * fr - 0.07276 * fg + 1.07602 * fb),
  );
}

// ngược lại: màu hiển thị -> màu tuyến tính (HDR) mà sau tone mapping cho đúng màu đó.
// Cả cảnh vẽ tuyến tính rồi hậu kỳ mới tone mapping, nên màu sương / mù phải ở dạng tuyến tính.
const _dl = new THREE.Color();
function linearFromDisplay(d, exposure, out) {
  const dec = (v) => { v = Math.min(0.985, Math.max(0, v)); return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const inv = (x) => { const A = 1 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x); return ((-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A)) * 0.6 / exposure; };
  const t = [dec(d.r), dec(d.g), dec(d.b)];
  out.setRGB(inv(t[0]), inv(t[1]), inv(t[2]));
  for (let i = 0; i < 4; i++) {                      // tinh chỉnh cho đúng cả ma trận màu của ACES
    displayColor(out, exposure, _dl);
    const g = [dec(_dl.r), dec(_dl.g), dec(_dl.b)];
    out.setRGB(out.r * t[0] / Math.max(g[0], 1e-5), out.g * t[1] / Math.max(g[1], 1e-5), out.b * t[2] / Math.max(g[2], 1e-5));
  }
  return out;
}

const SKY_VERT = `
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const SKY_FRAG = `
  uniform vec3 uZenith, uMid, uHorizon, uBand, uSunCol, uSunDir;
  uniform float uGlow, uDisc, uBandAmt, uScale;
  uniform vec4 uGround;                                                     // rgb + độ phủ: mặt đất tối dưới chân trời (chỉ khi chụp môi trường cho xe)
  uniform vec3 uVeilCol; uniform vec2 uVeil;                                // sương phủ bầu trời: (độ đậm, độ cao)
  uniform vec3 uMoonDir, uMoonCol; uniform float uMoon;                     // mặt trăng: hướng, màu (HDR), độ hiện
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.24, h));
    col = mix(col, uZenith, smoothstep(0.16, 0.92, h));
    col = mix(col, uHorizon * 0.9, smoothstep(0.0, -0.1, d.y));            // dưới chân trời
    col = mix(col, uGround.rgb, uGround.a * smoothstep(-0.004, -0.05, d.y));
    float sd = max(dot(d, uSunDir), 0.0);
    float band = pow(sd, 2.2) * (1.0 - smoothstep(0.0, 0.34, h));           // dải ấm dọc chân trời phía mặt trời
    col = mix(col, uBand, clamp(band * uBandAmt, 0.0, 1.0));
    col += uSunCol * (pow(sd, 5.0) * 0.32 + pow(sd, 42.0) * 0.85) * uGlow;  // quầng sáng
    // mặt trăng: đĩa có vân (biển trăng), tối nhẹ ở rìa
    float mc = dot(d, uMoonDir);
    vec3 moon = vec3(0.0);
    if (uMoon > 0.0 && mc > 0.99) {
      vec3 mt = normalize(cross(vec3(0.0, 1.0, 0.0), uMoonDir)), mb = cross(uMoonDir, mt);
      vec2 q = vec2(dot(d, mt), dot(d, mb)) / 0.021;
      float r = length(q);
      float m = exp(-dot(q - vec2(-0.28, 0.3), q - vec2(-0.28, 0.3)) * 8.0)
              + 0.8 * exp(-dot(q - vec2(0.22, 0.18), q - vec2(0.22, 0.18)) * 13.0)
              + 0.7 * exp(-dot(q - vec2(0.02, -0.36), q - vec2(0.02, -0.36)) * 10.0)
              + 0.5 * exp(-dot(q - vec2(-0.5, -0.18), q - vec2(-0.5, -0.18)) * 18.0)
              + 0.35 * exp(-dot(q - vec2(0.45, -0.1), q - vec2(0.45, -0.1)) * 22.0);
      float tone = (1.0 - 0.42 * clamp(m, 0.0, 1.0)) * (0.72 + 0.28 * sqrt(max(1.0 - r * r, 0.0)));
      float disc = smoothstep(1.0, 0.93, r);
      col = mix(col, vec3(0.0), disc * uMoon);
      moon = uMoonCol * tone * disc * uMoon;
    }
    moon += uMoonCol * (0.05 * pow(max(mc, 0.0), 1400.0) + 0.012 * pow(max(mc, 0.0), 90.0)) * uMoon;   // quầng trăng
    vec3 disc = uSunCol * smoothstep(0.99975, 0.9999, sd) * uDisc;           // đĩa mặt trời
    float veil = uVeil.x * exp(-max(d.y, 0.0) / uVeil.y);
    col = mix(col, uVeilCol, veil);                                          // sương mù phủ lên trời
    col += (disc + moon) * (1.0 - 0.8 * veil);                               // mặt trời / trăng vẫn lấp ló qua sương
    gl_FragColor = vec4(col * uScale, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    // nhiễu rất nhẹ để gradient không bị phân dải
    gl_FragColor.rgb += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
  }`;

const C_SUN_DAY = new THREE.Color('#fff3df');
const C_SUN_LOW = new THREE.Color('#ff9a50');
const C_MOON = new THREE.Color('#9ab6ff');                   // ánh trăng
const C_MOON_DISC = new THREE.Color(1.7, 1.78, 1.95);        // đĩa trăng (HDR, sau tone mapping gần trắng)
// hướng đường trung bình (road.js): góc ≈ −1.24 rad => đường chủ yếu chạy về phía +X, hơi chếch −Z.
// Mặt trời lặn / trăng treo gần hướng đó (hơi lệch phải) để hay lọt vào khung hình khi chạy.
const SUN_AZ = Math.PI - 1.0;
const MOON_AZ = Math.PI - 1.15;

// Lớp mây: nhiễu fbm chiếu lên mặt phẳng trên cao, tô sáng theo hướng mặt trời (mép sáng, đáy tối)
const CLOUD_VERT = `
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const CLOUD_FRAG = `
  uniform float uTime, uCover, uFlash, uSoft;
  uniform vec2 uDrift;
  uniform vec3 uSunDir, uLit, uShade, uFlashCol;
  uniform vec3 uVeilCol; uniform vec2 uVeil;
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
    col = mix(col, uVeilCol, uVeil.x * exp(-d.y / uVeil.y));               // mây cũng chìm trong sương
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

    // sương phủ trời + mây (dùng chung)
    this._fogDisp = new THREE.Color();
    this.veil = { uVeilCol: { value: new THREE.Color() }, uVeil: { value: new THREE.Vector2(0, 0.2) } };
    this.mistCover = 0.35; this.mistDens = 0.2;   // theo thanh trượt sương (main.js gán)

    // --- bầu trời gradient ---
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        ...this.veil,
        uZenith: { value: new THREE.Color() }, uMid: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() },
        uBand: { value: new THREE.Color() }, uSunCol: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 1, 0) },
        uGlow: { value: 1 }, uDisc: { value: 1 }, uBandAmt: { value: 1 }, uScale: { value: 1 },
        uGround: { value: new THREE.Vector4(0, 0, 0, 0) },
        uMoonDir: { value: new THREE.Vector3(0, 1, 0) }, uMoonCol: { value: new THREE.Color(C_MOON_DISC) }, uMoon: { value: 0 },
      },
      vertexShader: SKY_VERT, fragmentShader: SKY_FRAG,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(2400, 48, 24), this.skyMat);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);
    this.skyC = { zen: new THREE.Color(), mid: new THREE.Color(), hor: new THREE.Color(), band: new THREE.Color(), sun: new THREE.Color() };

    // bản sao để chụp môi trường (PMREM) -> phản chiếu / ánh sáng nền lên xe, cỏ, mặt đường ướt
    this.envScene = new THREE.Scene();
    this.envScene.add(new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), this.skyMat));
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


    // --- lớp mây (shader) ---
    this.cloudMat = new THREE.ShaderMaterial({
      uniforms: {
        ...this.veil,
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
    sc.layers.enable(3);
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x405030, 0.4);
    scene.add(this.hemi);

    scene.fog = new THREE.FogExp2(0xb9d6ee, 0.0006);
    this.precip = new Precip(scene);

    // trạng thái chia sẻ cho phần còn lại của app
    this.state = {
      night: 0, lamps: 0, dayF: 1, warm: 0, light: 1, rain: 0, snow: 0, wet: 0, cover: 0, overcast: 0,
      wind: 0.3, dark: 0, drift: 0, flash: 0, windDir: this.windDir,
      fogColor: new THREE.Color(), mistColor: new THREE.Color(), sunDir: new THREE.Vector3(), elevation: 0,
      moonDir: new THREE.Vector3(), lightDir: new THREE.Vector3(), moon: 0,
      rays: 0, rayDir: new THREE.Vector3(), rayCol: new THREE.Color(),   // tia nắng / tia trăng (hậu kỳ)
    };
    this._c = new THREE.Color();
    this._c2 = new THREE.Color();
    this._lit = new THREE.Color();
    this._shade = new THREE.Color();
    this._v = new THREE.Vector3();
  }

  // đặt thời tiết ngay lập tức (không chuyển dần) — dùng lúc vào game
  snapWeather(id) {
    this.setWeather(id);
    Object.assign(this.w, this.target);
    this.tint.set(this.target.tint);
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
    for (const key of NUM_KEYS) if (key !== 'wet') this.w[key] += (this.target[key] - this.w[key]) * k;
    // mặt đường ướt: như lớp đường khô phủ trên lớp đường mưa (vũng nước đã sẵn hình),
    // lớp khô mờ dần đều trong WET_FADE giây (và hiện lại khi tạnh)
    const dw = this.target.wet - this.w.wet;
    this.w.wet += Math.sign(dw) * Math.min(Math.abs(dw), dt / WET_FADE);
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
    sunDir.setFromSphericalCoords(1, Math.PI / 2 - e * DEG, SUN_AZ);
    const dayF = sstep(-4, 14, e);
    const night = 1 - sstep(-12, 0, e);
    const warm = Math.exp(-Math.pow((e - 3) / 10, 2));
    // trăng: mọc lúc chạng vạng, treo thấp (~12°) phía trước đường => dễ thấy trong khung hình.
    // ánh trăng chiếu từ cao hơn (cùng phương) để mặt đất đủ sáng, bóng không dài quá
    const moonDir = this.state.moonDir;
    moonDir.setFromSphericalCoords(1, Math.PI / 2 - (3 + 9 * sstep(-3, -30, e)) * DEG, MOON_AZ);
    const moonLightDir = this._v.setFromSphericalCoords(1, Math.PI / 2 - 38 * DEG, MOON_AZ);
    const moonUp = sstep(-2, -11, e);

    // ---- bầu trời gradient: nội suy mốc màu theo độ cao mặt trời ----
    const K = SKY_KEYS;
    let ki = 0;
    while (ki < K.length - 2 && e > K[ki + 1][0]) ki++;
    const ka = K[ki], kb = K[ki + 1];
    const kt = clamp((e - ka[0]) / (kb[0] - ka[0]), 0, 1);
    const S = this.skyC;
    ['zen', 'mid', 'hor', 'band', 'sun'].forEach((n, j) => S[n].copy(ka[j + 1]).lerp(kb[j + 1], kt));
    // trời âm u: chuyển dần sang gradient xám theo màu thời tiết; bão: tối hẳn
    const light = 0.07 + 0.93 * dayF;
    const m = clamp(over * 0.92 + dk * 0.08, 0, 1);
    const oc = this._c.copy(this.tint).multiplyScalar(light).lerp(this._c2.set('#c9997f').multiplyScalar(light), warm * 0.35 * (1 - dk));
    S.zen.lerp(this._lit.copy(oc).multiplyScalar(0.8), m);
    S.mid.lerp(this._lit.copy(oc).multiplyScalar(0.92), m);
    S.hor.lerp(oc, m);
    S.band.lerp(oc, m);
    const skyI = SKY_I * (1 - 0.6 * dk);
    for (const n of ['zen', 'mid', 'hor', 'band']) S[n].multiplyScalar(skyI).add(this._c2.setRGB(0.55, 0.65, 1.0).multiplyScalar(flash * 1.6));
    const su = this.skyMat.uniforms;
    su.uZenith.value.copy(S.zen); su.uMid.value.copy(S.mid); su.uHorizon.value.copy(S.hor); su.uBand.value.copy(S.band);
    su.uSunCol.value.copy(S.sun).multiplyScalar(SKY_I);
    su.uSunDir.value.copy(sunDir);
    su.uGlow.value = (1 - over * 0.95) * sstep(-6, 1, e) * (1 - dk);
    su.uDisc.value = (1 - over) * sstep(-1.5, 0.5, e) * 22;
    su.uBandAmt.value = (1 - over * 0.85) * (0.25 + 0.75 * warm) * sstep(-11, -2, e);
    su.uMoonDir.value.copy(moonDir);
    su.uMoon.value = moonUp * clamp(1 - over * 1.05, 0, 1) * (1 - dk);
    // ban đêm phơi sáng nhiều hơn (mắt quen bóng tối) => cảnh dưới trăng rõ hơn
    this.renderer.toneMappingExposure = (0.5 + 0.12 * warm) * (1 - 0.5 * dk) * (1 + 0.45 * night);

    // ---- màu sương xa = đúng màu hiển thị của chân trời (liền mạch đất - trời) ----
    // (màu tuyến tính = đúng radiance chân trời; fogC = màu hiển thị của nó, dùng cho ánh sáng nền)
    const exposure = this.renderer.toneMappingExposure;
    this.state.exposure = exposure;
    this.state.fogColor.copy(this._lit.copy(S.hor).lerp(S.band, 0.2 * su.uBandAmt.value));
    const fogC = displayColor(this.state.fogColor, exposure, this._fogDisp);
    this.scene.fog.color.copy(this.state.fogColor);
    this.scene.fog.density = w.fog;
    // màu sương tầng thấp: sáng hơn sương xa một chút (ban đêm / bão tối theo) — chọn ở dạng hiển thị rồi đổi về tuyến tính
    this._c2.copy(fogC).lerp(this._c.setRGB(0.93, 0.95, 0.97).multiplyScalar(0.1 + 0.9 * dayF * (1 - 0.6 * dk)), 0.3);
    linearFromDisplay(this._c2, exposure, this.state.mistColor);
    // sương phủ bầu trời: theo thanh trượt sương (độ dày -> độ đậm, độ phủ -> lên cao tới đâu) và thời tiết sương mù
    {
      const mistAmt = sstep(0, 0.6, this.mistDens) * (0.35 + 0.65 * this.mistCover);
      const fogAmt = sstep(0.0012, 0.0075, w.fog) * 0.85;
      const v = this.veil;
      v.uVeil.value.set(Math.max(mistAmt, fogAmt), Math.max(0.05 + 0.5 * Math.pow(this.mistCover, 1.5), fogAmt > mistAmt ? 0.3 : 0));
      v.uVeilCol.value.copy(this.state.mistColor);
    }

    // ---- ánh sáng chính (mặt trời ban ngày, mặt trăng ban đêm) ----
    // (một đèn có đổ bóng: theo mặt trời khi còn nắng, theo mặt trăng khi trời tối)
    const byMoon = e < -2.5;
    const lightDir = this.state.lightDir.copy(byMoon ? moonLightDir : sunDir);
    if (byMoon) {
      this.sun.intensity = 0.6 * moonUp * (1 - 0.8 * over) * (1 - dk);
      this.sun.color.copy(C_MOON);
    } else {
      this.sun.intensity = 3.4 * sstep(-2, 9, e) * w.sun;
      this.sun.color.copy(C_SUN_DAY).lerp(C_SUN_LOW, clamp(warm * 1.3, 0, 1));
    }
    if (focus) {
      this.sun.position.copy(focus).addScaledVector(lightDir, 120);
      this.sun.target.position.copy(focus);
    }
    this.hemi.color.copy(fogC).lerp(this._c.set('#6f8cd0'), night * 0.75).lerp(this._c.set('#c4d4ff'), flash);
    this.hemi.groundColor.set('#3a4630').multiplyScalar(0.25 + 0.75 * dayF);
    this.hemi.intensity = (0.16 + 0.45 * dayF + 0.4 * night) * (1 - 0.4 * over) * (1 - 0.35 * dk) + flash * 3.2;

    // ---- đồ vật trên trời bám theo camera ----
    this.sky.position.copy(cam);
    this.stars.position.copy(cam);
    this.dome.position.copy(cam);
    this.haze.position.set(cam.x, 0, cam.z);
    const hazeH = 150 + w.fog * 100000;
    this.haze.scale.y = hazeH;
    this.haze.position.y = hazeH / 2 - 60;
    this.haze.material.uniforms.uColor.value.copy(this.state.fogColor);

    this.stars.material.opacity = night * (1 - over * 0.95);
    this.stars.visible = this.stars.material.opacity > 0.01;


    // ---- mây ----
    // sáng (lit): trắng ban ngày, cam lúc hoàng hôn, xanh nhạt dưới trăng; tối (shade): xanh xám / tím nhạt
    const cw = clamp(warm * 1.1, 0, 1) * (1 - 0.92 * dk);   // bão: mây luôn xám xanh, không ngả cam
    const lit = this._lit.set('#ffffff').lerp(this._c2.set('#ff9d66'), cw).multiplyScalar(2.4 * dayF);
    lit.add(this._c2.set('#8fa6e0').multiplyScalar(0.32 * night * (1 - over * 0.6)));   // mây được trăng chiếu
    // phần tối của mây lấy theo màu trời (hài hoà với gradient), ngả tím hồng lúc hoàng hôn
    const shade = this._shade.copy(S.mid).multiplyScalar(0.5).lerp(this._c2.copy(S.hor).multiplyScalar(0.62), 0.45)
      .lerp(this._c2.set('#a86a7a').multiplyScalar(1.05 * dayF), cw * 0.5);
    shade.add(this._c2.set('#101b38').multiplyScalar(0.3 * night));
    lit.multiplyScalar(1 - 0.8 * dk);
    this.cloudTime += dt;
    const cu = this.cloudMat.uniforms;
    cu.uTime.value = this.cloudTime;
    cu.uCover.value = w.clouds;
    cu.uSoft.value = clamp(over * 0.9 + dk * 0.3, 0, 1);
    cu.uFlash.value = flash;
    cu.uDrift.value.copy(this.windDir).multiplyScalar(0.003 + 0.02 * w.wind);
    cu.uSunDir.value.copy(e >= -2 ? sunDir : moonDir);
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
    st.moon = su.uMoon.value;
    // tia nắng: rõ khi mặt trời thấp và khi có sương (ánh sáng tán xạ); ban đêm tia trăng rất nhẹ
    const fogK = sstep(0.0005, 0.0065, w.fog);
    st.rays = byMoon ? 0.22 * su.uMoon.value * (1 + fogK)
      : sstep(-2.5, 2.5, e) * (1 - 0.55 * over) * (1 - dk) * (0.55 + 0.45 * warm) * (1 + 1.3 * fogK);
    st.rayDir.copy(byMoon ? moonDir : sunDir);
    st.rayCol.copy(byMoon ? C_MOON : this.sun.color);
    st.light = (0.14 + 0.08 * night + 0.86 * dayF * (1 - 0.3 * over) * (1 - 0.55 * dk)) + flash * 0.6;

    // ---- mưa / tuyết / bông cỏ bay ----
    this.precip.update(dt, cam, st, this.renderer.domElement.height);

    // ---- chụp môi trường (hạn chế tần suất) ----
    this.envTimer -= dt;
    if (this.envTimer <= 0) {
      // lượng tử hoá thô: lúc đổi thời tiết chỉ chụp lại vài lần thay vì liên tục
      const key = [e.toFixed(1), Math.round(over * 12), Math.round(dk * 12)].join('|');
      if (key !== this.envKey || !this.envRT) {
        this.envKey = key;
        this._captureEnv();
      }
      this.envTimer = 0.7;
    }
  }

  setShadowSize(n) {
    const sh = this.sun.shadow;
    if (sh.mapSize.x === n) return;
    sh.mapSize.set(n, n);
    if (sh.map) { sh.map.dispose(); sh.map = null; }
  }

  _captureEnv() {
    // ánh sáng nền từ bầu trời: sáng hơn bầu trời hiển thị (giống bầu trời thật toả sáng khắp nơi)
    const su = this.skyMat.uniforms;
    const disc = su.uDisc.value;
    su.uScale.value = 2.1;
    su.uDisc.value = Math.min(disc, 4);
    const rt = this.pmrem.fromScene(this.envScene, 0, 1, 3000);
    // bản riêng cho xe: trời đúng độ sáng thật + mặt đất tối phía dưới
    // (xe thật phản chiếu mặt đường ở nửa dưới thân => không bị bóng loáng như nhựa)
    su.uScale.value = 1;
    su.uGround.value.set(su.uHorizon.value.r * 0.13, su.uHorizon.value.g * 0.13, su.uHorizon.value.b * 0.12, 1);
    const crt = this.pmrem.fromScene(this.envScene, 0, 1, 3000);
    su.uGround.value.w = 0;
    su.uDisc.value = disc;
    if (this.envRT) this.envRT.dispose();
    if (this.carEnvRT) this.carEnvRT.dispose();
    this.envRT = rt;
    this.carEnvRT = crt;
    this.scene.environment = rt.texture;
    if (this.onCarEnv) this.onCarEnv(crt.texture);
  }
}
