import * as THREE from 'three';

// Hậu kỳ: xoá phông (depth of field) + bloom + chỉnh màu phim + hạt phim + tối viền (Cinematic)
// và blur xuyên tâm + vệt tốc độ (Fast drive).
// Cách làm: vẽ cảnh vào render target (màu tuyến tính HDR + độ sâu, có khử răng cưa MSAA), rồi
//  1) xoá phông theo mô hình ống kính thật: vòng nhoè (CoC) = f² / (N·(F − f)) · |z − F| / z
//     - nửa độ phân giải: màu + CoC có dấu (âm = tiền cảnh)
//     - 1/8 độ phân giải: CoC tiền cảnh lớn nhất trong ô rồi loang ra xung quanh, để tiền cảnh nhoè lem lên vật đang nét
//     - nửa độ phân giải: gom mẫu theo đĩa (bokeh), mẫu ở trước "phủ" lên điểm đang xét nếu vòng nhoè của nó đủ lớn
//  2) lọc vùng sáng -> làm mờ ở 1/4 độ phân giải (bloom kéo dãn ngang kiểu anamorphic)
//  3) quad cuối: blur tốc độ + tone mapping ACES (giống hệt three.js) + bloom + chỉnh màu + vignette + grain.
// Khi cả Cinematic lẫn Fast drive đều tắt thì không dùng pass này (vẽ thẳng ra màn hình như bình thường).
const VERT = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

// ACES Filmic (y hệt three r160) + mã hoá sRGB: màu tuyến tính -> màu hiển thị
const DISPLAY = `
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`;

const BRIGHT = `
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${DISPLAY}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
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

// --- xoá phông ---
// màu (nửa độ phân giải) + CoC có dấu, tính bằng pixel ảnh gốc; âm = ở trước điểm lấy nét
const DOF_PREP = `
  uniform sampler2D tScene, tDepth; uniform vec2 uTexel;
  uniform float uNear, uFar, uFocus, uFocusRange, uCocK, uMaxCoc;
  varying vec2 vUv;
  float dist(vec2 uv) { float d = texture2D(tDepth, uv).x; return uNear * uFar / (uFar - d * (uFar - uNear)); }
  // trong khoảng ±uFocusRange quanh điểm lấy nét (bề dày chiếc xe) thì nét hoàn toàn
  float coc(float z) { float d = z - uFocus; d = sign(d) * max(abs(d) - uFocusRange, 0.0); return clamp(uCocK * d / max(z, 1e-3), -uMaxCoc, uMaxCoc); }
  void main() {
    vec2 o = uTexel * 0.5;
    vec3 c = (texture2D(tScene, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tScene, vUv + vec2(o.x, -o.y)).rgb
            + texture2D(tScene, vUv + vec2(-o.x, o.y)).rgb + texture2D(tScene, vUv + vec2(o.x, o.y)).rgb) * 0.25;
    // lấy CoC "gần nhất" trong 4 điểm ảnh gốc để viền tiền cảnh không bị hụt
    float z = min(min(dist(vUv + vec2(-o.x, -o.y)), dist(vUv + vec2(o.x, -o.y))), min(dist(vUv + vec2(-o.x, o.y)), dist(vUv + vec2(o.x, o.y))));
    gl_FragColor = vec4(min(c, vec3(64.0)), coc(z));
  }`;

// CoC tiền cảnh lớn nhất trong ô 4x4 (của ảnh nửa độ phân giải)
const DOF_TILE = `
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`;

// loang CoC tiền cảnh ra các ô xung quanh (bán kính 3 ô = 24 điểm ảnh gốc)
const DOF_DILATE = `
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = -3; y <= 3; y++) for (int x = -3; x <= 3; x++) {
      vec2 d = vec2(float(x), float(y));
      float v = texture2D(tSrc, vUv + d * uTexel).r;
      m = max(m, v * step(length(d) - 0.5, v / 8.0 + 1.0));   // ô ở xa chỉ tính nếu vòng nhoè của nó với tới
    }
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`;

// gom mẫu theo đĩa Vogel (góc vàng); bán kính tìm = max(CoC của điểm này, CoC tiền cảnh quanh đó)
const DOF_BLUR = `
  uniform sampler2D tSrc, tNear; uniform vec2 uTexelFull; uniform float uMaxCoc; uniform int uN;
  varying vec2 vUv;
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  void main() {
    vec4 c0 = texture2D(tSrc, vUv);
    float cc = abs(c0.a);
    float R = clamp(max(cc, texture2D(tNear, vUv).r), 0.0, uMaxCoc);
    if (R < 0.75) { gl_FragColor = vec4(c0.rgb, 0.0); return; }
    vec3 col = c0.rgb; float tot = 1.0; float fg = 0.0;
    float rot = hash12(gl_FragCoord.xy) * 6.2831853;
    float fN = float(uN);
    float band = R * (1.0 / sqrt(fN)) + 0.5;
    for (int i = 0; i < 64; i++) {
      if (i >= uN) break;
      float r = R * sqrt((float(i) + 0.5) / fN);
      float a = float(i) * 2.39996323 + rot;
      vec4 s = texture2D(tSrc, vUv + vec2(cos(a), sin(a)) * r * uTexelFull);
      float cs = abs(s.a);
      if (s.a > c0.a) cs = min(cs, cc * 2.0);             // mẫu ở sau: không lem lên vật phía trước đang nét
      float m = smoothstep(r - band, r + band, cs);
      col += mix(col / tot, s.rgb, m);
      tot += 1.0;
      fg += m * step(s.a, c0.a - 1.0);                     // phần tiền cảnh phủ lên điểm này
    }
    col /= tot;
    float k = max(smoothstep(0.6, 2.2, cc), clamp(fg * 3.0 / fN, 0.0, 1.0));
    gl_FragColor = vec4(col, k);
  }`;

const FINAL = `
  uniform sampler2D tScene, tBloom, tDof;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${DISPLAY}
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float vnoise(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), f); }
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
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
        col += sceneAt(vUv - d * amt * t) * w;
        tot += w;
      }
      col /= tot;
    } else {
      col = sceneAt(vUv);
    }
    // quang sai nhẹ ở mép khung hình
    float ca = uCine * 0.0008 * smoothstep(0.2, 1.0, dist);   // chỉ ở chế độ cinematic; blur tốc độ không tách màu (tránh lốm đốm)
    if (ca > 0.0) {
      col.r = mix(col.r, sceneAt(vUv - d * (amt + ca)).r, 0.5);
      col.b = mix(col.b, sceneAt(vUv - d * max(amt - ca, 0.0)).b, 0.5);
    }
    col = toDisplay(col);
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
  constructor(renderer, samples = 4) {
    this.renderer = renderer;
    this.enabled = true;
    this.samples = samples;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mk = (uniforms, frag) => new THREE.ShaderMaterial({
      uniforms, vertexShader: VERT, fragmentShader: frag, depthTest: false, depthWrite: false, toneMapped: false,
    });
    const exposure = { value: 1 };
    this.exposure = exposure;
    this.bright = mk({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThresh: { value: 0.92 }, uExposure: exposure }, BRIGHT);
    this.blur = mk({ tSrc: { value: null }, uDir: { value: new THREE.Vector2() } }, BLUR);
    this.dofPrep = mk({
      tScene: { value: null }, tDepth: { value: null }, uTexel: { value: new THREE.Vector2() },
      uNear: { value: 0.1 }, uFar: { value: 1000 }, uFocus: { value: 10 }, uFocusRange: { value: 0 }, uCocK: { value: 0 }, uMaxCoc: { value: 24 },
    }, DOF_PREP);
    this.dofTile = mk({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } }, DOF_TILE);
    this.dofDilate = mk({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } }, DOF_DILATE);
    this.dofBlur = mk({ tSrc: { value: null }, tNear: { value: null }, uTexelFull: { value: new THREE.Vector2() }, uMaxCoc: { value: 24 }, uN: { value: 24 } }, DOF_BLUR);
    this.final = mk({
      tScene: { value: null }, tBloom: { value: null }, tDof: { value: null }, uDof: { value: 0 }, uExposure: exposure,
      uFx: { value: 0 }, uCine: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1 }, uRes: { value: new THREE.Vector2(1, 1) },
    }, FINAL);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.bright);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.size = new THREE.Vector2();
    this.rts = {};
    // cảnh vẽ vào đây (màu HDR tuyến tính + độ sâu) khi hậu kỳ đang bật
    this.sceneRT = new THREE.WebGLRenderTarget(16, 16, {
      type: THREE.HalfFloatType, samples, depthBuffer: true, depthTexture: new THREE.DepthTexture(16, 16, THREE.UnsignedIntType),
    });
    this.resize();
  }

  _rt(name, w, h, half = false) {
    let rt = this.rts[name];
    if (!rt) {
      rt = this.rts[name] = new THREE.WebGLRenderTarget(w, h, {
        type: half ? THREE.HalfFloatType : THREE.UnsignedByteType,
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, stencilBuffer: false,
      });
    } else rt.setSize(w, h);
    return rt;
  }

  // gọi mỗi khi đổi kích thước canvas / pixel ratio
  resize() {
    this.renderer.getDrawingBufferSize(this.size);
    const w = this.size.x, h = this.size.y;
    this.sceneRT.setSize(w, h);
    const bw = Math.max(16, Math.ceil(w / 4)), bh = Math.max(16, Math.ceil(h / 4));
    this._rt('bloomA', bw, bh); this._rt('bloomB', bw, bh);
    const hw = Math.max(16, Math.ceil(w / 2)), hh = Math.max(16, Math.ceil(h / 2));
    this._rt('prep', hw, hh, true); this._rt('dof', hw, hh, true);
    const tw = Math.max(4, Math.ceil(hw / 4)), th = Math.max(4, Math.ceil(hh / 4));
    this._rt('tile', tw, th, true); this._rt('near', tw, th, true);
    this.bright.uniforms.uTexel.value.set(1 / bw, 1 / bh);
    this.dofPrep.uniforms.uTexel.value.set(1 / w, 1 / h);
    this.dofTile.uniforms.uTexel.value.set(1 / hw, 1 / hh);
    this.dofDilate.uniforms.uTexel.value.set(1 / tw, 1 / th);
    this.dofBlur.uniforms.uTexelFull.value.set(1 / w, 1 / h);
    this.final.uniforms.uAspect.value = w / h;
    this.final.uniforms.uRes.value.set(w, h);
  }

  // số mẫu khử răng cưa của render target cảnh (đổi => tạo lại)
  setSamples(n) {
    if (this.sceneRT.samples === n) return;
    this.sceneRT.samples = n;
    this.sceneRT.dispose();
  }

  get longSide() { return Math.max(this.size.x, this.size.y); }

  _pass(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.cam);
  }

  // gọi TRƯỚC khi vẽ cảnh: cảnh sẽ vẽ vào render target của hậu kỳ
  begin() { this.renderer.setRenderTarget(this.sceneRT); }

  // gọi SAU khi đã vẽ cảnh. cine, fx: 0..1
  // dof: { amt 0..1, samples, near, far, focus (m), cocK (px), maxCoc (px) } hoặc null
  render(time, cine, fx, dof) {
    const r = this.renderer;
    const bu = this.blur.uniforms;
    const src = this.sceneRT.texture;
    this.exposure.value = r.toneMappingExposure;

    let dofOn = false;
    if (dof && dof.amt > 0.01 && dof.samples > 0 && dof.cocK > 0.05) {
      dofOn = true;
      const p = this.dofPrep.uniforms;
      p.tScene.value = src; p.tDepth.value = this.sceneRT.depthTexture;
      p.uNear.value = dof.near; p.uFar.value = dof.far; p.uFocus.value = dof.focus; p.uFocusRange.value = dof.range || 0;
      p.uCocK.value = dof.cocK; p.uMaxCoc.value = dof.maxCoc;
      this._pass(this.dofPrep, this.rts.prep);
      this.dofTile.uniforms.tSrc.value = this.rts.prep.texture;
      this._pass(this.dofTile, this.rts.tile);
      this.dofDilate.uniforms.tSrc.value = this.rts.tile.texture;
      this._pass(this.dofDilate, this.rts.near);
      const b = this.dofBlur.uniforms;
      b.tSrc.value = this.rts.prep.texture; b.tNear.value = this.rts.near.texture; b.uMaxCoc.value = dof.maxCoc; b.uN.value = dof.samples;
      this._pass(this.dofBlur, this.rts.dof);
    }

    if (cine > 0.01) {
      const A = this.rts.bloomA, B = this.rts.bloomB;
      this.bright.uniforms.tSrc.value = src;
      this._pass(this.bright, A);
      // 2 vòng làm mờ; theo chiều ngang rộng gấp 2.2 lần => quầng sáng kéo dãn kiểu anamorphic
      for (let i = 0; i < 2; i++) {
        bu.tSrc.value = A.texture; bu.uDir.value.set((2.2 + i) / A.width, 0);
        this._pass(this.blur, B);
        bu.tSrc.value = B.texture; bu.uDir.value.set(0, (1.2 + i * 0.6) / A.height);
        this._pass(this.blur, A);
      }
    }

    const u = this.final.uniforms;
    u.tScene.value = src;
    u.tBloom.value = this.rts.bloomA.texture;
    u.tDof.value = this.rts.dof.texture;
    u.uDof.value = dofOn ? dof.amt : 0;
    u.uCine.value = cine;
    u.uFx.value = fx;
    u.uTime.value = time;
    this._pass(this.final, null);
  }
}
