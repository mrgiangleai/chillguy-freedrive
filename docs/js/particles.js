import * as THREE from 'three';

// Mưa / tuyết: toàn bộ chuyển động tính trong vertex shader quanh vị trí camera nên gần như không tốn CPU.
function seeds(n, perVertex = 1) {
  const a = new Float32Array(n * perVertex * 3);
  for (let i = 0; i < n; i++) {
    const x = Math.random(), y = Math.random(), z = Math.random();
    for (let k = 0; k < perVertex; k++) a.set([x, y, z], (i * perVertex + k) * 3);
  }
  return a;
}

export class Precip {
  constructor(scene) {
    this.time = 0;
    const box = new THREE.Vector3(40, 26, 40);
    // mỗi vật liệu phải có object uniform riêng (dùng chung sẽ bị ghi đè lẫn nhau)
    const common = () => ({
      uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: box.clone() },
      uOpacity: { value: 0 }, uLight: { value: 1 },
    });

    // --- mưa: các đoạn thẳng ---
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
        void main() { gl_FragColor = vec4(vec3(0.78, 0.84, 0.92) * uLight, uOpacity * vA); }`,
    }));
    this.rain.frustumCulled = false;
    this.rain.renderOrder = 10;
    this.rain.visible = false;
    scene.add(this.rain);

    // --- tuyết: các điểm tròn mềm ---
    const SN = 10000;
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SN * 3), 3));
    sg.setAttribute('seed', new THREE.BufferAttribute(seeds(SN), 3));
    this.snow = new THREE.Points(sg, new THREE.ShaderMaterial({
      uniforms: { ...common(), uSize: { value: 0.09 }, uScale: { value: 400 } },
      transparent: true, depthWrite: false,
      vertexShader: `
        attribute vec3 seed;
        uniform float uTime, uSize, uScale; uniform vec3 uCam, uBox;
        varying float vA;
        void main() {
          vec3 p = seed * uBox;
          p.y -= uTime * (1.1 + seed.z * 1.1);
          p.x += sin(uTime * 0.6 + seed.y * 30.0) * 0.9;
          p.z += cos(uTime * 0.5 + seed.x * 30.0) * 0.9;
          vec3 rel = mod(p - uCam, uBox);
          vec3 w = uCam + rel - uBox * 0.5;
          vec3 e = abs(rel / uBox - 0.5) * 2.0;
          vA = 1.0 - smoothstep(0.7, 1.0, max(max(e.x, e.y), e.z));
          vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_PointSize = clamp(uSize * (0.6 + seed.y) * uScale / -mv.z, 1.0, 14.0);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform float uOpacity, uLight; varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(1.0, 0.25, r);
          gl_FragColor = vec4(vec3(0.96, 0.98, 1.0) * uLight, a * uOpacity * vA);
        }`,
    }));
    this.snow.frustumCulled = false;
    this.snow.renderOrder = 10;
    this.snow.visible = false;
    scene.add(this.snow);
  }

  update(dt, cam, st, viewportH) {
    this.time += dt;
    for (const o of [this.rain, this.snow]) {
      const u = o.material.uniforms;
      u.uTime.value = this.time;
      u.uCam.value.copy(cam);
      u.uLight.value = st.light;
    }
    this.rain.material.uniforms.uOpacity.value = 0.55 * st.rain;
    this.rain.visible = st.rain > 0.02;
    this.snow.material.uniforms.uOpacity.value = 0.95 * st.snow;
    this.snow.material.uniforms.uScale.value = viewportH * 0.5;
    this.snow.visible = st.snow > 0.02;
  }
}
