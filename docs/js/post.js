import * as THREE from 'three';

// Hậu kỳ: bloom + chỉnh màu phim + hạt phim + tối viền (Cinematic) và blur xuyên tâm + vệt tốc độ (Fast drive).
// Cách làm: vẽ cảnh như bình thường, chép khung hình vừa vẽ (đã tone-mapping) vào texture, rồi
//  1) lọc vùng sáng -> làm mờ ở độ phân giải 1/4 (bloom, kéo dãn theo chiều ngang kiểu ống kính anamorphic)
//  2) vẽ đè một quad toàn màn hình: blur tốc độ + cộng bloom + chỉnh màu + vignette + grain.
// Khi cả hai hiệu ứng đều tắt thì bỏ qua hẳn pass này (hình ảnh y hệt bình thường, không tốn gì).
const VERT = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const BRIGHT = `
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  void main() {
    vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
            + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`;

const BLUR = `
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`;

const FINAL = `
  uniform sampler2D tScene, tBloom;
  uniform float uFx, uCine, uTime, uAspect;
  uniform vec2 uRes;
  varying vec2 vUv;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float vnoise(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), f); }
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  void main() {
    vec2 d = vUv - vec2(0.5);
    vec2 da = d * vec2(uAspect, 1.0);
    float dist = length(da);
    float amt = uFx * smoothstep(0.04, 0.8, dist) * 0.11;
    vec3 col;
    if (uFx > 0.01) {
      // blur xuyên tâm: càng xa tâm càng bị kéo dài (như đang lao về phía trước)
      col = vec3(0.0);
      float tot = 0.0;
      for (int i = 0; i < 16; i++) {
        float t = float(i) / 15.0;
        float w = 1.0 - 0.55 * t;
        col += texture2D(tScene, vUv - d * amt * t).rgb * w;
        tot += w;
      }
      col /= tot;
    } else {
      col = texture2D(tScene, vUv).rgb;
    }
    // quang sai nhẹ ở mép khung hình
    float ca = uCine * 0.0008 * smoothstep(0.2, 1.0, dist);   // chỉ ở chế độ cinematic; blur tốc độ không tách màu (tránh lốm đốm)
    if (ca > 0.0) {
      col.r = mix(col.r, texture2D(tScene, vUv - d * (amt + ca)).r, 0.5);
      col.b = mix(col.b, texture2D(tScene, vUv - d * max(amt - ca, 0.0)).b, 0.5);
    }
    // bloom
    col += texture2D(tBloom, vUv).rgb * 0.45 * uCine;
    // vệt tốc độ toả ra từ tâm
    float ang = atan(da.y, da.x);
    float n = vnoise(ang * 48.0 + floor(uTime * 16.0) * 7.31);
    col += vec3(smoothstep(0.7, 1.0, n) * smoothstep(0.34, 0.85, dist) * uFx * 0.11);
    // chỉnh màu phim: bóng ngả xanh lam, vùng sáng ngả ấm, tương phản chữ S, đen hơi "sữa"
    col = clamp(col, 0.0, 1.0);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 g = col * mix(vec3(0.93, 1.0, 1.07), vec3(1.04, 1.0, 0.95), smoothstep(0.1, 0.7, l));
    g = clamp(g, 0.0, 1.0);
    g = mix(g, g * g * (3.0 - 2.0 * g), 0.38);
    g = mix(vec3(dot(g, vec3(0.299, 0.587, 0.114))), g, 1.1);
    g = g * 0.965 + 0.014;
    col = mix(col, g, uCine);
    // tối viền
    col *= 1.0 - (uCine * 0.3 + uFx * 0.42) * smoothstep(0.38, 1.05, dist);
    // hạt phim
    col += (hash12(vUv * uRes + fract(uTime) * 173.0) - 0.5) * 0.036 * uCine * (1.0 - l * 0.5);
    gl_FragColor = vec4(col, 1.0);
  }`;

export class Post {
  constructor(renderer) {
    this.renderer = renderer;
    this.enabled = true;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mk = (uniforms, frag) => new THREE.ShaderMaterial({
      uniforms, vertexShader: VERT, fragmentShader: frag, depthTest: false, depthWrite: false, toneMapped: false,
    });
    this.bright = mk({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThresh: { value: 0.92 } }, BRIGHT);
    this.blur = mk({ tSrc: { value: null }, uDir: { value: new THREE.Vector2() } }, BLUR);
    this.final = mk({
      tScene: { value: null }, tBloom: { value: null },
      uFx: { value: 0 }, uCine: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1 }, uRes: { value: new THREE.Vector2(1, 1) },
    }, FINAL);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.bright);
    this.scene.add(this.quad);
    this.size = new THREE.Vector2();
    this.zero = new THREE.Vector2(0, 0);
    this.tex = null;
    this.rtA = this.rtB = null;
    this.resize();
  }

  // gọi mỗi khi đổi kích thước canvas / pixel ratio
  resize() {
    this.renderer.getDrawingBufferSize(this.size);
    const w = this.size.x, h = this.size.y;
    if (this.tex) this.tex.dispose();
    this.tex = new THREE.FramebufferTexture(w, h);
    this.tex.minFilter = this.tex.magFilter = THREE.LinearFilter;
    const bw = Math.max(16, Math.ceil(w / 4)), bh = Math.max(16, Math.ceil(h / 4));
    for (const k of ['rtA', 'rtB']) {
      if (this[k]) this[k].dispose();
      this[k] = new THREE.WebGLRenderTarget(bw, bh, {
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, stencilBuffer: false,
      });
    }
    this.bright.uniforms.uTexel.value.set(1 / bw, 1 / bh);
    this.final.uniforms.uAspect.value = w / h;
    this.final.uniforms.uRes.value.set(w, h);
  }

  _pass(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.cam);
  }

  // gọi SAU khi đã vẽ cảnh. cine, fx: 0..1
  render(time, cine, fx) {
    const r = this.renderer;
    const bu = this.blur.uniforms;
    r.copyFramebufferToTexture(this.zero, this.tex);

    if (cine > 0.01) {
      const bw = this.rtA.width, bh = this.rtA.height;
      this.bright.uniforms.tSrc.value = this.tex;
      this._pass(this.bright, this.rtA);
      // 2 vòng làm mờ; theo chiều ngang rộng gấp 2.2 lần => quầng sáng kéo dãn kiểu anamorphic
      for (let i = 0; i < 2; i++) {
        bu.tSrc.value = this.rtA.texture; bu.uDir.value.set((2.2 + i) / bw, 0);
        this._pass(this.blur, this.rtB);
        bu.tSrc.value = this.rtB.texture; bu.uDir.value.set(0, (1.2 + i * 0.6) / bh);
        this._pass(this.blur, this.rtA);
      }
    }

    const u = this.final.uniforms;
    u.tScene.value = this.tex;
    u.tBloom.value = this.rtA.texture;
    u.uCine.value = cine;
    u.uFx.value = fx;
    u.uTime.value = time;
    r.setRenderTarget(null);
    this._pass(this.final, null);
  }
}
