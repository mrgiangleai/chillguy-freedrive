// Map Landmark 81 – TP.HCM (🌆, nhóm Drive): vòng khép kín theo dữ liệu thật (OpenStreetMap, ODbL), tạo bằng
// `node scripts/fetch-sgn.mjs` => `sgn-data.json`. Nguyễn Hữu Cảnh (qua Landmark 81, về Ba Son) → Tôn Đức Thắng → Võ Văn Kiệt
// → hầm Thủ Thiêm (dưới sông Sài Gòn) → Mai Chí Thọ → nút An Phú → Võ Nguyên Giáp → cầu Sài Gòn → Điện Biên Phủ → Nguyễn Hữu Cảnh.
// Dùng lại map Phố (`mapKind('sgn') = 'city'`, giao thông 2 chiều kiểu VN) + code vòng của New York (`road.setShape('sgn', loop)`).
import * as THREE from 'three';
import DATA from './sgn-data.json' with { type: 'json' };
import * as landmark81 from './landmarks/landmark81.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

// start: xe vào map ở s = length + start (Nguyễn Hữu Cảnh, chạy về phía Ba Son). roof: trần hầm kín khi mặt đường thấp hơn mặt phố quá |roof| m
export const SGN = { data: DATA, length: DATA.length, start: 60, roof: -5.6 };

// độ cao mặt đường so với mặt phố theo s (âm: hầm, dương: cầu) — mảng `elev` mỗi `step` m trong dữ liệu (dốc ≤ 5.5 %)
export function sgnElev() {
  const L = DATA.length, E = DATA.elev, st = DATA.step;
  return (s) => {
    const r = ((s % L) + L) % L, f = r / st, i = Math.min(E.length - 2, Math.floor(f)), t = f - i;
    return E[i] + (E[i + 1] - E[i]) * t;
  };
}
// mốc độ cao [s, h] (cho NycWorks dựng tường / trần hầm, bản mặt cầu): bao quanh mọi đoạn có độ cao ≠ 0
function elevKeys() {
  const E = DATA.elev, st = DATA.step, keys = [];
  let a = -1;
  for (let i = 0; i < E.length; i++) {
    const on = Math.abs(E[i]) > 0.05;
    if (on && a < 0) a = i;
    if ((!on || i === E.length - 1) && a >= 0) { keys.push([Math.max(0, (a - 2) * st), 0], [(i + 1) * st, 0]); a = -1; }
  }
  return keys;
}

let LOOP = null;
export function sgnLoop() {
  if (LOOP) return LOOP;
  LOOP = { loop: true, length: DATA.length, step: DATA.step, x: DATA.x, z: DATA.z, heading: DATA.heading, turn: Math.round(DATA.turn / (2 * Math.PI)) * 2 * Math.PI,
    elev: sgnElev(), keys: elevKeys(), roof: SGN.roof, junctions: DATA.junctions, corners: DATA.corners, streets: DATA.streets, widths: DATA.widths };
  return LOOP;
}
// khu vực tại s (đoạn cố định dọc tuyến, '' = ngoài các khu có tên)
export function sgnZone(s) {
  const L = DATA.length, r = ((s % L) + L) % L, Z = DATA.zones;
  let name = Z.at(-1).name;
  for (const t of Z) if (r >= t.s0) name = t.name;
  return name;
}
// tên đường đang chạy tại s
export function sgnStreet(s) {
  const L = DATA.length, r = ((s % L) + L) % L, S = DATA.streets;
  let name = S.at(-1).name;
  for (const t of S) if (r >= t.s0) name = t.name;
  return name;
}

// công trình riêng map Landmark: tháp Landmark 81 ở toạ độ thật. Model chính: `assets/models/sgn/landmark81.glb` ("Landmark 81" — Dave Love,
// Sketchfab, CC-BY-4.0; nén WebP + meshopt), phóng đúng cao 461 m, tâm thân tháp đặt vào toạ độ thật. Trong lúc tải / tải lỗi: model code
// `landmarks/landmark81.js` (DeepSeek). Dựng khi vào map lần đầu
export class SgnScene {
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.built = false;
    this.led = { value: 0 }; this.ledY = { value: 0 };      // đèn LED dọc mặt tháp (0 ngày → 1 đêm), main gọi setLamps
  }
  setLamps(k) { this.led.value = k; }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); }
  get visible() { return this.group.visible; }
  _build() {
    this.built = true;
    const [x, z] = DATA.landmark81, y = this.groundAt(x, z);
    this.ledY.value = y;
    const { geometry } = landmark81.build(THREE);
    const code = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.25 }));
    code.position.set(x, y, z);
    code.castShadow = true; code.receiveShadow = true;
    this.group.add(code);
    this.tower = code;
    const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load('assets/models/sgn/landmark81.glb', (gltf) => {
      const root = gltf.scene;
      root.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(root), k = 461 / (box.max.y - box.min.y);
      // tâm thân tháp: trung bình x / z các đỉnh ở nửa trên (khối đế lệch một phía không kéo lệch tâm)
      let sx = 0, sz = 0, n = 0; const v = new THREE.Vector3(), yTop = box.min.y + (box.max.y - box.min.y) * 0.5;
      root.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        o.material = ledMaterial(o.material, this.led, this.ledY);
        const P = o.geometry.attributes.position;
        for (let i = 0; i < P.count; i += 3) { v.fromBufferAttribute(P, i).applyMatrix4(o.matrixWorld); if (v.y > yTop) { sx += v.x; sz += v.z; n++; } }
      });
      const wrap = new THREE.Group();
      root.position.set(-(n ? sx / n : 0), -box.min.y, -(n ? sz / n : 0));
      wrap.add(root); wrap.scale.setScalar(k); wrap.position.set(x, y, z);
      this.group.remove(code); geometry.dispose();
      this.group.add(wrap);
      this.tower = wrap;
    }, undefined, (e) => console.warn('Landmark 81 GLB', e));
  }
}

// LED dọc Landmark 81 ban đêm (theo ảnh chú gửi): sọc sáng dọc mỗi ~4.5 m theo phương ngang của mặt tháp (toạ độ thế giới), 1/3 dưới vàng ấm,
// lên cao trắng, đoạn 300–380 m ánh tím (đèn trình diễn). Cường độ × led.value (0 ngày, 1 đêm). Chèn vào vật liệu gốc của GLB (onBeforeCompile)
function ledMaterial(mat, led, ledY) {
  const m = mat.clone();
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uLed = led; sh.uniforms.uLedY = ledY;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLedP; varying vec3 vLedN;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvLedP = (modelMatrix * vec4(transformed, 1.0)).xyz; vLedN = normalize(mat3(modelMatrix) * objectNormal);');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uLed; uniform float uLedY; varying vec3 vLedP; varying vec3 vLedN;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      if (uLed > 0.01 && abs(vLedN.y) < 0.5) {
        vec2 t = normalize(vec2(-vLedN.z, vLedN.x));
        float u = dot(vLedP.xz, t) / 4.5, w = fwidth(u) * 2.0, d = abs(fract(u) - 0.5) * 2.0;   // d = 1 ở đường LED (mỗi 4.5 m)
        // nhìn xa (1 điểm ảnh > khoảng sọc): về độ phủ trung bình 12 % thay vì loang thành mảng sáng
        float stripe = mix(smoothstep(0.88 - w, 0.88 + w, d), 0.12, clamp(w * 1.5 - 0.3, 0.0, 1.0));
        float hy = vLedP.y - uLedY;
        vec3 c = mix(vec3(1.0, 0.72, 0.32), vec3(0.95, 0.95, 1.0), smoothstep(110.0, 190.0, hy));
        c = mix(c, vec3(0.95, 0.35, 0.85), smoothstep(290.0, 310.0, hy) * (1.0 - smoothstep(370.0, 390.0, hy)));
        totalEmissiveRadiance += c * stripe * uLed * 1.8;
      }`);
  };
  m.customProgramCacheKey = () => 'sgn-led';
  return m;
}
