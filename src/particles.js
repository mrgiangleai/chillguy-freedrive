import * as THREE from 'three';
import { DISPLAY_TO_LINEAR } from './colorspace.js';

// Mưa / tuyết / bông cỏ bay: toàn bộ chuyển động tính trong vertex shader quanh vị trí camera nên gần như không tốn CPU.
function seeds(n, perVertex = 1) {
  const a = new Float32Array(n * perVertex * 3);
  for (let i = 0; i < n; i++) {
    const x = Math.random(), y = Math.random(), z = Math.random();
    for (let k = 0; k < perVertex; k++) a.set([x, y, z], (i * perVertex + k) * 3);
  }
  return a;
}

const POINT_VERT = `
  attribute vec3 seed;
  uniform float uTime, uSize, uScale, uFall, uSway;
  uniform vec3 uCam, uBox;
  uniform vec2 uDrift;
  varying float vA;
  void main() {
    vec3 p = seed * uBox;
    p.y -= uTime * uFall * (0.6 + seed.z * 0.9);
    p.xz += uDrift * uTime * (0.7 + seed.x * 0.6);
    p.x += sin(uTime * 0.6 + seed.y * 30.0) * uSway;
    p.z += cos(uTime * 0.5 + seed.x * 30.0) * uSway;
    p.y += sin(uTime * 1.3 + seed.x * 40.0) * uSway * 0.4;
    vec3 rel = mod(p - uCam, uBox);
    vec3 w = uCam + rel - uBox * 0.5;
    vec3 e = abs(rel / uBox - 0.5) * 2.0;
    vA = 1.0 - smoothstep(0.7, 1.0, max(max(e.x, e.y), e.z));
    vec4 mv = viewMatrix * vec4(w, 1.0);
    gl_PointSize = clamp(uSize * (0.6 + seed.y) * uScale / -mv.z, 1.0, 14.0);
    gl_Position = projectionMatrix * mv;
  }`;
const POINT_FRAG = `
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${DISPLAY_TO_LINEAR}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`;

export class Precip {
  constructor(scene) {
    this.time = 0;
    const box = new THREE.Vector3(40, 26, 40);
    // mỗi vật liệu phải có object uniform riêng (dùng chung sẽ bị ghi đè lẫn nhau)
    const common = () => ({
      uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: box.clone() },
      uOpacity: { value: 0 }, uLight: { value: 1 }, uExposure: { value: 0.6 },
    });

    // --- mưa: các đoạn thẳng, nghiêng theo gió ---
    const RN = 14000;
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(RN * 2 * 3), 3));
    rg.setAttribute('seed', new THREE.BufferAttribute(seeds(RN, 2), 3));
    const tail = new Float32Array(RN * 2);
    for (let i = 0; i < RN; i++) tail[i * 2 + 1] = 1;
    rg.setAttribute('tail', new THREE.BufferAttribute(tail, 1));
    this.rain = new THREE.LineSegments(rg, new THREE.ShaderMaterial({
      uniforms: { ...common(), uSpeed: { value: 24 }, uLen: { value: 1.1 }, uWind: { value: new THREE.Vector2(2, 1) } },
      transparent: true, depthWrite: false,
      vertexShader: `
        attribute vec3 seed; attribute float tail;
        uniform float uTime, uSpeed, uLen; uniform vec3 uCam, uBox; uniform vec2 uWind;
        varying float vA;
        void main() {
          vec3 p = seed * uBox;
          p.y -= uTime * uSpeed;
          p.xz += uWind * uTime;
          vec3 rel = mod(p - uCam, uBox);
          vec3 w = uCam + rel - uBox * 0.5;
          vec3 d = normalize(vec3(uWind.x, -uSpeed, uWind.y));
          w -= d * uLen * tail;
          vec3 e = abs(rel / uBox - 0.5) * 2.0;
          vA = (1.0 - smoothstep(0.7, 1.0, max(max(e.x, e.y), e.z))) * (1.0 - 0.55 * tail);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }`,
      fragmentShader: `
        uniform float uOpacity, uLight; varying float vA;
        ${DISPLAY_TO_LINEAR}
        void main() { gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA); }`,
    }));
    this.rain.frustumCulled = false;
    this.rain.layers.set(3);
    this.rain.renderOrder = 10;
    this.rain.visible = false;
    scene.add(this.rain);

    // --- tuyết & bông cỏ/bụi bay: cùng một shader điểm, khác thông số ---
    const points = (count, extra, color) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
      g.setAttribute('seed', new THREE.BufferAttribute(seeds(count), 3));
      const o = new THREE.Points(g, new THREE.ShaderMaterial({
        uniforms: { ...common(), uScale: { value: 400 }, uColor: { value: new THREE.Color(...color) }, ...extra },
        transparent: true, depthWrite: false, vertexShader: POINT_VERT, fragmentShader: POINT_FRAG,
      }));
      o.frustumCulled = false;
      o.layers.set(3);
      o.renderOrder = 10;
      o.visible = false;
      scene.add(o);
      return o;
    };
    this.snow = points(10000, { uSize: { value: 0.09 }, uFall: { value: 1.6 }, uSway: { value: 0.9 }, uDrift: { value: new THREE.Vector2() } }, [0.96, 0.98, 1.0]);
    this.drift = points(2600, { uSize: { value: 0.05 }, uFall: { value: 0.12 }, uSway: { value: 0.25 }, uDrift: { value: new THREE.Vector2() } }, [0.95, 0.9, 0.78]);
  }

  update(dt, cam, st, viewportH) {
    this.time += dt;
    const wind = st.windDir.clone().multiplyScalar(1.5 + st.wind * 11);   // m/s
    for (const o of [this.rain, this.snow, this.drift]) {
      const u = o.material.uniforms;
      u.uTime.value = this.time;
      u.uCam.value.copy(cam);
      u.uLight.value = st.light;
      u.uExposure.value = st.exposure || 0.6;
    }
    const ru = this.rain.material.uniforms;
    ru.uOpacity.value = 0.55 * st.rain * (1 + 0.25 * st.dark);
    ru.uWind.value.copy(wind);
    this.rain.visible = st.rain > 0.02;

    const su = this.snow.material.uniforms;
    su.uOpacity.value = 0.95 * st.snow;
    su.uScale.value = viewportH * 0.5;
    su.uDrift.value.copy(wind).multiplyScalar(0.35);
    this.snow.visible = st.snow > 0.02;

    const du = this.drift.material.uniforms;
    du.uOpacity.value = 0.8 * st.drift;
    du.uScale.value = viewportH * 0.5;
    du.uDrift.value.copy(wind).multiplyScalar(0.9);
    this.drift.visible = st.drift > 0.02;
  }
}
