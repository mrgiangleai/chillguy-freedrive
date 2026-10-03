import * as THREE from 'three';

// Hậu kỳ: xoá phông (depth of field) + bloom + chỉnh màu phim + hạt phim + tối viền (Cinematic)
// và blur xuyên tâm (Fast drive).
// Cách làm: vẽ cảnh vào render target (màu tuyến tính HDR + độ sâu, có khử răng cưa MSAA), rồi
//  1) xoá phông theo mô hình ống kính thật: vòng nhoè (CoC) = f² / (N·(F − f)) · |z − F| / z
//     - nửa độ phân giải: màu + CoC có dấu (âm = tiền cảnh)
//     - 1/8 độ phân giải: CoC tiền cảnh lớn nhất trong ô rồi loang ra xung quanh, để tiền cảnh nhoè lem lên vật đang nét
//     - nửa độ phân giải: gom mẫu theo đĩa (bokeh), mẫu ở trước "phủ" lên điểm đang xét nếu vòng nhoè của nó đủ lớn
//  2) lọc vùng sáng -> làm mờ ở 1/4 độ phân giải (bloom kéo dãn ngang kiểu anamorphic)
//  3) quad cuối: blur tốc độ + tone mapping ACES (giống hệt three.js) + bloom + chỉnh màu + vignette + grain.
// Cảnh luôn đi qua đây (màu tuyến tính -> tone mapping); Cinematic tắt thì chỉ còn tone mapping (+ blur tốc độ nếu Fast drive).
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

// --- tia nắng (god rays): lấy vùng trời sáng quanh mặt trời (theo độ sâu = trời) rồi kéo dài xuyên tâm về phía mặt trời
// => cây, núi, xe chắn nắng tạo thành các vệt sáng / tối toả ra từ mặt trời
const RAY_MASK = `
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`;
const RAY_BLUR = `
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`;

// --- mưa trên kính lái (khi ngồi trong xe): tia nhìn cắt mặt phẳng kính => toạ độ trên kính (m),
// chỉ vẽ ở điểm ảnh nhìn xuyên qua kính (độ sâu cảnh xa hơn kính). Giọt nước đọng dần sau mỗi lần lưỡi gạt quét qua
// (tính đúng thời điểm quét qua từng điểm), giọt mới bắn toé lúc chạm kính, vài giọt chảy thành vệt (lên trên khi xe chạy nhanh).
// Giọt nước như thấu kính nhỏ: ảnh phía sau bị lật ngược + viền tối + đốm sáng.
const RAIN_GLASS = `
  uniform float uGlass, uRearGlass, uNear, uFar, uTanF, uSweep;
  uniform sampler2D tDepth;
  uniform mat4 uInvVP;
  uniform vec3 uCamPos, uCamFwd, uGC, uGN, uGU, uGV;
  uniform vec4 uGB, uPiv, uRest, uBlade, uWipe;     // 2 cần gạt: trục (u,v)×2, (góc nghỉ, chiều quay)×2, (bán kính trong, ngoài)×2
  uniform vec2 uFlow;
  uniform sampler2D tGlassMask;
  // tuổi lớp nước (giây kể từ lần lưỡi gạt quét qua điểm g) với 1 cần gạt (cần gạt 3D vẽ cùng trục / góc)
  float wipeAge(vec2 g, vec2 piv, float rest, float sgn, vec2 rr) {
    vec2 d = g - piv;
    float phi = mod(sgn * (atan(d.y, d.x) - rest) + 3.14159265, 6.2831853) - 3.14159265;
    float r = length(d);
    if (r < rr.x || r > rr.y || phi < 0.0 || phi > uSweep) return 1e3;
    float a = acos(clamp(1.0 - 2.0 * phi / uSweep, -1.0, 1.0));
    float ps = uWipe.x;
    float last = ps >= 6.2831853 - a ? 6.2831853 - a : (ps >= a ? a : -a);
    return (ps - last) / uWipe.y + uWipe.z;
  }
  // một lớp giọt tĩnh trên lưới ô cỡ cell (m): vec4(toạ độ trong giọt, độ phủ, tia bắn toé)
  vec4 drops(vec2 g, float cell, vec2 rr, float seed, float age, float dens) {
    vec2 id = floor(g / cell), f = fract(g / cell) - 0.5;
    float h1 = hash12(id + seed), h2 = hash12(id + seed + 17.3), h3 = hash12(id + seed + 41.9), h4 = hash12(id + seed + 73.1);
    if (h4 > dens) return vec4(0.0);
    float r = mix(rr.x, rr.y, h2 * h2) / cell;
    vec2 c = (vec2(h1, h3) - 0.5) * max(1.0 - 2.0 * r, 0.0);
    float t = age - h1 * 2.6 / (0.35 + dens);               // lúc giọt này rơi xuống (sau lần gạt)
    if (t < 0.0) return vec4(0.0);
    float sp = 1.0 - smoothstep(0.0, 0.14, t);              // vừa chạm kính: loang rộng rồi co lại
    vec2 q = (f - c) / r / (1.0 + 0.45 * sp);
    float l = length(q);
    float ring = sp * smoothstep(0.14, 0.0, abs(l - 1.2 - 1.5 * (1.0 - sp))) * step(0.55, fract(atan(q.y, q.x) * 0.955 + h3 * 7.0));
    return vec4(q, smoothstep(1.0, 0.8, l), ring);
  }
  // giọt chảy thành vệt theo từng cột: vec4(toạ độ trong giọt, độ phủ đầu giọt, vệt nước phía sau)
  vec4 runs(vec2 g, float w, float seed, float dens) {
    float cid = floor(g.x / w);
    float h1 = hash12(vec2(cid, seed)), h2 = hash12(vec2(cid, seed + 9.7)), h3 = hash12(vec2(cid, seed + 23.1));
    if (h3 > dens * 0.55) return vec4(0.0);
    float L = 0.3 + 0.45 * h2;
    float a = fract(((g.y - uFlow.x * (0.6 + 0.8 * h1)) / L + h2) * uFlow.y) * L;   // quãng theo hướng chảy
    float wob = sin(g.y * 31.0 + h1 * 6.0) * 0.004 + sin(g.y * 83.0 + h2 * 3.0) * 0.0015;
    float fx = (fract(g.x / w) - 0.5 - (h2 - 0.5) * 0.4) * w + wob;
    float rd = 0.005 + 0.004 * h1, ah = 0.93 * L, tl = 0.3 * L;
    vec2 q = vec2(fx, (a - ah) * uFlow.y) / rd;
    float head = smoothstep(1.0, 0.8, length(q * vec2(1.0, 0.75)));
    float k = clamp((a - ah + tl) / tl, 0.0, 1.0);
    float trail = step(a, ah) * k * smoothstep(rd * 0.4 * k + 1e-4, rd * 0.15 * k, abs(fx));
    return vec4(q, head, trail);
  }
  vec3 rainGlass(vec3 col, vec2 uv) {
    vec2 g;
    float zg, m;
    if (uRearGlass > 0.5) {
      vec4 glass = texture2D(tGlassMask, uv);
      g = glass.xy; zg = glass.z; m = glass.a;
      // Thu vào một pixel để không phủ lên viền kính ở độ phân giải thấp.
      vec2 px = 1.0 / uRes;
      m = min(m, texture2D(tGlassMask, uv + vec2(px.x, 0.0)).a);
      m = min(m, texture2D(tGlassMask, uv - vec2(px.x, 0.0)).a);
      m = min(m, texture2D(tGlassMask, uv + vec2(0.0, px.y)).a);
      m = min(m, texture2D(tGlassMask, uv - vec2(0.0, px.y)).a);
    } else {
      vec4 wp = uInvVP * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
      vec3 dir = normalize(wp.xyz / wp.w - uCamPos);
      float dn = dot(dir, uGN);
      if (dn > -1e-3) return col;
      float t = dot(uGC - uCamPos, uGN) / dn;
      if (t <= 0.0) return col;
      vec3 hit = uCamPos + dir * t - uGC;
      g = vec2(dot(hit, uGU), dot(hit, uGV));
      float inB = smoothstep(uGB.x, uGB.x + 0.04, g.x) * smoothstep(uGB.y, uGB.y - 0.04, g.x)
                * smoothstep(uGB.z, uGB.z + 0.02, g.y) * smoothstep(uGB.w, uGB.w - 0.03, g.y);
      float zs = uNear * uFar / (uFar - texture2D(tDepth, uv).x * (uFar - uNear));
      zg = t * dot(dir, uCamFwd);
      m = inB * smoothstep(zg - 0.01, zg, zs);
    }
    if (m <= 0.001) return col;
    float age = uRearGlass > 0.5 ? 1e3 : min(wipeAge(g, uPiv.xy, uRest.x, uRest.y, uBlade.xy), wipeAge(g, uPiv.zw, uRest.z, uRest.w, uBlade.zw));
    vec4 A = drops(g, 0.056, vec2(0.008, 0.017), 1.0, age, uGlass * 0.7);
    vec4 B = drops(g + 0.013, 0.026, vec2(0.0035, 0.0075), 5.0, age, uGlass * 0.85);
    vec4 C = drops(g + vec2(0.009, 0.027), 0.04, vec2(0.0055, 0.012), 9.0, age, uGlass * 0.65);
    vec4 R = age > 0.7 ? runs(g, 0.06, 3.0, uGlass) : vec4(0.0);
    vec4 D = A; float rd = 0.011;
    if (B.z > D.z) { D = B; rd = 0.005; }
    if (C.z > D.z) { D = C; rd = 0.008; }
    if (R.z > D.z) { D = vec4(R.xy, R.z, 0.0); rd = 0.007; }
    vec2 k = vec2(1.0 / uAspect, 1.0) / (2.0 * uTanF * zg);     // uv màn hình trên mỗi mét mặt kính
    vec3 o = col;
    if (R.w > 0.0) o = mix(o, sceneAt(clamp(uv + vec2(0.0, 0.006), 0.0, 1.0)) * 0.85, R.w * 0.7);
    if (D.z > 0.0) {
      vec2 q = D.xy;
      float h = sqrt(max(1.0 - dot(q, q), 0.0));
      vec3 refr = sceneAt(clamp(uv - q * rd * 3.0 * k, 0.0, 1.0));
      float l = dot(refr, vec3(0.3, 0.59, 0.11));
      vec3 dc = refr * (0.12 + 1.0 * smoothstep(0.05, 0.75, h));                 // viền giọt tối, giữa sáng
      dc += vec3(0.92, 0.96, 1.0) * (0.3 + l) * 1.5 * smoothstep(0.36, 0.0, length(q - vec2(-0.3, 0.42)));   // đốm sáng
      o = mix(o, dc, D.z);
    }
    o += vec3(0.6) * max(max(A.w, B.w), C.w) * (0.15 + dot(col, vec3(0.3, 0.59, 0.11)));
    return mix(col, o, m);
  }`;

const FINAL = `
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${DISPLAY}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${RAIN_GLASS}
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
    col += texture2D(tRays, vUv).rgb * uRayCol;                // tia nắng (cộng vào ánh sáng tuyến tính)
    // quang sai nhẹ ở mép khung hình
    float ca = uCine * 0.0008 * smoothstep(0.2, 1.0, dist);   // chỉ ở chế độ cinematic; blur tốc độ không tách màu (tránh lốm đốm)
    if (ca > 0.0) {
      col.r = mix(col.r, sceneAt(vUv - d * (amt + ca)).r, 0.5);
      col.b = mix(col.b, sceneAt(vUv - d * max(amt - ca, 0.0)).b, 0.5);
    }
    if (uGlass > 0.0) col = rainGlass(col, vUv);              // (sau quang sai: không bị viền tím quanh giọt)
    col = toDisplay(col);
    // bloom
    col += texture2D(tBloom, vUv).rgb * 0.45 * uCine;
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
      tRays: { value: null }, uRayCol: { value: new THREE.Color(0, 0, 0) },
      // mưa trên kính lái (Wipers.apply gán)
      uGlass: { value: 0 }, uRearGlass: { value: 0 }, tDepth: { value: null }, uNear: { value: 0.1 }, uFar: { value: 1000 }, uTanF: { value: 1 },
      uInvVP: { value: new THREE.Matrix4() }, uCamPos: { value: new THREE.Vector3() }, uCamFwd: { value: new THREE.Vector3() },
      uGC: { value: new THREE.Vector3() }, uGN: { value: new THREE.Vector3() }, uGU: { value: new THREE.Vector3() }, uGV: { value: new THREE.Vector3() },
      uBlade: { value: new THREE.Vector4() }, uGB: { value: new THREE.Vector4() }, uPiv: { value: new THREE.Vector4() }, uWipe: { value: new THREE.Vector4() },
      uRest: { value: new THREE.Vector4() }, uSweep: { value: 1.6 },
      uFlow: { value: new THREE.Vector2() },
      tGlassMask: { value: null },
      uFx: { value: 0 }, uCine: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1 }, uRes: { value: new THREE.Vector2(1, 1) },
    }, FINAL);
    this.rayMask = mk({
      tScene: { value: null }, tDepth: { value: null }, uNear: { value: 0.1 }, uFar: { value: 1000 }, uAspect: { value: 1 }, uSun: { value: new THREE.Vector2() },
    }, RAY_MASK);
    this.rayBlur = mk({ tSrc: { value: null }, uSun: { value: new THREE.Vector2() }, uLen: { value: 1 } }, RAY_BLUR);
    // main.js gán: vị trí mặt trời trên màn hình (uv), màu * độ mạnh (0 = tắt), near/far của camera
    this.rays = { uv: new THREE.Vector2(0.5, 0.5), color: new THREE.Color(0, 0, 0), near: 0.1, far: 1000 };
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.bright);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.size = new THREE.Vector2();
    this.rts = {};
    // cảnh vẽ vào đây (màu HDR tuyến tính + độ sâu) khi hậu kỳ đang bật
    this.sceneRT = new THREE.WebGLRenderTarget(16, 16, {
      type: THREE.HalfFloatType, samples, depthBuffer: true, depthTexture: new THREE.DepthTexture(16, 16, THREE.UnsignedIntType),
    });
    this.glassScene = new THREE.Scene();
    this.glassMaterial = new THREE.ShaderMaterial({
      uniforms: { tDepth: { value: this.sceneRT.depthTexture }, uRes: { value: this.size }, uNear: { value: 0.1 }, uFar: { value: 1000 } },
      side: THREE.DoubleSide, depthTest: false, depthWrite: false, toneMapped: false,
      vertexShader: `
        attribute vec2 glassUV; varying vec2 vGlassUV; varying float vDepth;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vGlassUV = glassUV; vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform sampler2D tDepth; uniform vec2 uRes; uniform float uNear, uFar;
        varying vec2 vGlassUV; varying float vDepth;
        void main() {
          float d = texture2D(tDepth, gl_FragCoord.xy / uRes).x;
          float sceneDepth = uNear * uFar / (uFar - d * (uFar - uNear));
          if (sceneDepth < vDepth) discard;
          gl_FragColor = vec4(vGlassUV, vDepth, 1.0);
        }`,
    });
    this.glassMesh = new THREE.Mesh(new THREE.BufferGeometry(), this.glassMaterial);
    this.glassMesh.matrixAutoUpdate = false;
    this.glassScene.add(this.glassMesh);
    this._clearColor = new THREE.Color();
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
    this._rt('rayA', bw, bh); this._rt('rayB', bw, bh);
    const glassRT = this._rt('glass', w, h, true);
    glassRT.texture.minFilter = glassRT.texture.magFilter = THREE.NearestFilter;
    this.final.uniforms.tGlassMask.value = glassRT.texture;
    this.rayMask.uniforms.uAspect.value = w / h;
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

  // Kính sau: raster đúng mặt kính cong và so độ sâu với cabin đã vẽ.
  renderGlassMask(camera, tilt, shield) {
    const u = this.final.uniforms;
    if (u.uRearGlass.value < 0.5 || u.uGlass.value <= 0 || !shield?.geometry) return;
    this.glassMesh.geometry = shield.geometry;
    this.glassMesh.matrix.copy(tilt.matrixWorld);
    this.glassMaterial.uniforms.uNear.value = camera.near;
    this.glassMaterial.uniforms.uFar.value = camera.far;
    const r = this.renderer, alpha = r.getClearAlpha();
    r.getClearColor(this._clearColor);
    r.setClearColor(0x000000, 0);
    r.setRenderTarget(this.rts.glass);
    r.render(this.glassScene, camera);
    r.setClearColor(this._clearColor, alpha);
  }

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

    const ray = this.rays, rayOn = ray.color.r + ray.color.g + ray.color.b > 0.002;
    if (rayOn) {
      const m = this.rayMask.uniforms, b = this.rayBlur.uniforms;
      m.tScene.value = src; m.tDepth.value = this.sceneRT.depthTexture;
      m.uNear.value = ray.near; m.uFar.value = ray.far; m.uSun.value.copy(ray.uv);
      this._pass(this.rayMask, this.rts.rayA);
      // 2 lượt: lượt đầu kéo dài gần tới mặt trời, lượt sau bước ngắn để xoá vân bậc thang
      b.uSun.value.copy(ray.uv);
      b.tSrc.value = this.rts.rayA.texture; b.uLen.value = 0.85;
      this._pass(this.rayBlur, this.rts.rayB);
      b.tSrc.value = this.rts.rayB.texture; b.uLen.value = 0.85 / 10;
      this._pass(this.rayBlur, this.rts.rayA);
    }

    const u = this.final.uniforms;
    u.tScene.value = src;
    u.tRays.value = this.rts.rayA.texture;
    u.tDepth.value = this.sceneRT.depthTexture;
    if (rayOn) u.uRayCol.value.copy(ray.color); else u.uRayCol.value.setRGB(0, 0, 0);
    u.tBloom.value = this.rts.bloomA.texture;
    u.tDof.value = this.rts.dof.texture;
    u.uDof.value = dofOn ? dof.amt : 0;
    u.uCine.value = cine;
    u.uFx.value = fx;
    u.uTime.value = time;
    this._pass(this.final, null);
  }
}
