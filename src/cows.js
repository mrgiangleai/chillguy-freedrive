import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { withMist } from './mist.js';

// Map đồi cỏ: đàn 5 con bò sữa (lông loang đen trắng kiểu Holstein) gặm cỏ bên đường, sau hàng rào gỗ.
// Bò dựng từ khối cơ bản (thân, đầu, 4 chân, đuôi có khớp) => tự làm hoạt cảnh: gặm cỏ (cúi đầu, nhai),
// ngẩng đầu nhìn quanh, thong thả đi vài bước, vẫy đuôi. Mảng lông đen trắng vẽ bằng nhiễu trong shader.
// Đàn bò xuất hiện lần đầu ~270 m sau chỗ xuất phát, rồi cứ HERD_GAP mét lại có một đàn (lần lượt hai bên đường).
const COUNT = 5;
const HERD_GAP = 2400, HERD_S0 = 420, HERD_LAT = 26, HERD_R = 12;
const FENCE_LAT = 12.5, FENCE_HALF = 33, POST_GAP = 3;
const POSTS = Math.floor((FENCE_HALF * 2) / POST_GAP) + 1;
const rnd = (a, b) => a + Math.random() * (b - a);

// gán loại bề mặt cho từng phần: 0 lông loang, 1 da hồng (mõm, bầu vú), 2 đen (móng, mắt), 3 sừng
function part(geo, kind) {
  const g = geo;
  g.setAttribute('aKind', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(kind), 1));
  g.deleteAttribute('uv');
  return g;
}

function cowGeometries() {
  const body = mergeGeometries([
    part(new THREE.CapsuleGeometry(0.42, 1.0, 6, 14).rotateX(Math.PI / 2).scale(0.92, 1.05, 1).translate(0, 1.05, 0), 0),
    part(new THREE.SphereGeometry(0.17, 10, 8).scale(1, 0.75, 1.15).translate(0, 0.62, -0.42), 1),           // bầu vú
    part(new THREE.BoxGeometry(0.5, 0.3, 0.4).translate(0, 1.3, -0.72), 0),                                   // hông
  ]);
  const head = mergeGeometries([
    part(new THREE.BoxGeometry(0.34, 0.42, 0.5).rotateX(-0.5).translate(0, -0.02, 0.16), 0),                 // cổ
    part(new THREE.BoxGeometry(0.3, 0.34, 0.48).translate(0, -0.1, 0.5), 0),                                  // đầu
    part(new THREE.BoxGeometry(0.29, 0.22, 0.16).translate(0, -0.2, 0.78), 1),                                // mõm
    part(new THREE.BoxGeometry(0.2, 0.05, 0.1).rotateZ(0.25).translate(0.23, 0.0, 0.38), 0),                  // tai
    part(new THREE.BoxGeometry(0.2, 0.05, 0.1).rotateZ(-0.25).translate(-0.23, 0.0, 0.38), 0),
    part(new THREE.ConeGeometry(0.028, 0.13, 6).rotateZ(-0.9).translate(0.15, 0.1, 0.42), 3),                 // sừng
    part(new THREE.ConeGeometry(0.028, 0.13, 6).rotateZ(0.9).translate(-0.15, 0.1, 0.42), 3),
    part(new THREE.BoxGeometry(0.035, 0.05, 0.05).translate(0.152, -0.02, 0.56), 2),                          // mắt
    part(new THREE.BoxGeometry(0.035, 0.05, 0.05).translate(-0.152, -0.02, 0.56), 2),
  ]);
  const leg = mergeGeometries([
    part(new THREE.CylinderGeometry(0.08, 0.065, 0.72, 8).translate(0, -0.36, 0), 0),
    part(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 8).translate(0, -0.77, 0), 2),                            // móng
  ]);
  const tail = mergeGeometries([
    part(new THREE.CylinderGeometry(0.025, 0.018, 0.72, 6).translate(0, -0.36, 0), 0),
    part(new THREE.SphereGeometry(0.06, 6, 5).scale(1, 1.8, 1).translate(0, -0.76, 0), 2),                    // chùm lông đuôi
  ]);
  return { body, head, leg, tail };
}

function cowMaterial(seed) {
  const m = new THREE.MeshStandardMaterial({ roughness: 0.82, metalness: 0 });
  const uSeed = { value: seed };
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uSeed = uSeed;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aKind;\nvarying float vKind;\nvarying vec3 vCP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvKind = aKind;\nvCP = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uSeed;
        varying float vKind;
        varying vec3 vCP;
        float cH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float cN(vec3 x) {
          vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(cH(i), cH(i + vec3(1, 0, 0)), f.x), mix(cH(i + vec3(0, 1, 0)), cH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(cH(i + vec3(0, 0, 1)), cH(i + vec3(1, 0, 1)), f.x), mix(cH(i + vec3(0, 1, 1)), cH(i + vec3(1, 1, 1)), f.x), f.y), f.z);
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 cowC;
        if (vKind < 0.5) {
          // mảng loang: nhiễu 2 tầng, mép hơi răng cưa như lông thật
          float n = cN(vCP * 2.4 + uSeed) * 0.75 + cN(vCP * 7.0 + uSeed * 1.7) * 0.25;
          cowC = mix(vec3(0.62, 0.6, 0.56), vec3(0.018, 0.016, 0.016), smoothstep(0.5, 0.53, n));
        } else if (vKind < 1.5) cowC = vec3(0.62, 0.34, 0.33);
        else if (vKind < 2.5) cowC = vec3(0.02);
        else cowC = vec3(0.62, 0.57, 0.44);
        diffuseColor.rgb = cowC;`);
  };
  m.customProgramCacheKey = () => 'cow';
  return withMist(m);
}

class Cow {
  constructor(geos, i) {
    const mat = cowMaterial(new THREE.Vector3(i * 17.3, i * 5.1, i * 11.7));
    const mesh = (g) => { const o = new THREE.Mesh(g, mat); o.castShadow = true; o.receiveShadow = true; return o; };
    this.root = new THREE.Group();
    this.root.add(mesh(geos.body));
    this.neck = new THREE.Group();
    this.neck.position.set(0, 1.15, 0.85);
    this.neck.add(mesh(geos.head));
    this.root.add(this.neck);
    this.legs = [[0.24, 0.6], [-0.24, 0.6], [0.24, -0.6], [-0.24, -0.6]].map(([x, z]) => {
      const g = new THREE.Group();
      g.position.set(x, 0.81, z);
      g.add(mesh(geos.leg));
      this.root.add(g);
      return g;
    });
    this.tail = new THREE.Group();
    this.tail.position.set(0, 1.4, -0.92);
    this.tail.add(mesh(geos.tail));
    this.root.add(this.tail);
    const s = rnd(0.92, 1.06);
    this.root.scale.setScalar(s);
    this.seed = Math.random() * 100;
    this.mode = 'graze'; this.timer = rnd(1, 8);
    this.head = 1.2; this.headY = 0; this.gait = 0;
    this.x = 0; this.z = 0; this.yaw = 0; this.y = 0; this.hx = 1e9; this.hz = 1e9;
  }
}

export class Cows {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    const geos = cowGeometries();
    this.cows = Array.from({ length: COUNT }, (_, i) => { const c = new Cow(geos, i); this.group.add(c.root); return c; });
    // hàng rào gỗ (cột + 2 thanh ngang)
    const wood = withMist(new THREE.MeshStandardMaterial({ color: 0x5a3e27, roughness: 0.92 }));
    this.posts = new THREE.InstancedMesh(new THREE.BoxGeometry(0.13, 1.25, 0.13).translate(0, 0.62, 0), wood, POSTS);
    this.rails = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.1, 0.05), wood, (POSTS - 1) * 2);
    for (const m of [this.posts, this.rails]) { m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; this.group.add(m); }
    this.herd = null;            // chỉ số đàn đang hiện
    this.enabled = false;
    this.onBuild = null;         // gọi lần đầu dựng (để dịch sẵn shader)
    this._p = {};
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
  }

  set visible(v) { this.enabled = v; if (!v) this.group.visible = false; this.herd = null; }
  get visible() { return this.enabled; }
  reset() { this.herd = null; }

  _place(k, road, terrain) {
    const sk = HERD_S0 + k * HERD_GAP, side = k % 2 ? -1 : 1;
    const p = road.at(sk, this._p);
    const rx = Math.cos(p.th), rz = -Math.sin(p.th), fx = -Math.sin(p.th), fz = -Math.cos(p.th);
    this.cx = p.x + rx * side * HERD_LAT; this.cz = p.z + rz * side * HERD_LAT;
    this.cows.forEach((c, i) => {
      const a = (i / COUNT) * Math.PI * 2 + rnd(-0.4, 0.4), r = rnd(2, HERD_R * 0.7);
      c.x = this.cx + Math.cos(a) * r; c.z = this.cz + Math.sin(a) * r;
      c.yaw = rnd(0, Math.PI * 2); c.hx = 1e9;
      c.mode = 'graze'; c.timer = rnd(1, 8);
    });
    // hàng rào dọc đường, giữa đường và đàn bò
    const m = this._m, q = this._q, v = this._v, s = this._s, pts = [];
    for (let i = 0; i < POSTS; i++) {
      const pp = road.at(sk - FENCE_HALF + i * POST_GAP, this._p);
      const x = pp.x + Math.cos(pp.th) * side * FENCE_LAT, z = pp.z - Math.sin(pp.th) * side * FENCE_LAT;
      const y = terrain.heightAt(x, z);
      pts.push([x, y, z]);
      m.compose(v.set(x, y - 0.05, z), q.setFromAxisAngle(this._up, pp.th), s.set(1, 1, 1));
      this.posts.setMatrixAt(i, m);
    }
    for (let i = 0; i < POSTS - 1; i++) {
      const [x0, y0, z0] = pts[i], [x1, y1, z1] = pts[i + 1];
      const len = Math.hypot(x1 - x0, z1 - z0), yaw = Math.atan2(-(z1 - z0), x1 - x0), pitch = Math.atan2(y1 - y0, len);
      for (let r = 0; r < 2; r++) {
        q.setFromEuler(new THREE.Euler(0, yaw, pitch, 'YZX'));
        m.compose(v.set((x0 + x1) / 2, (y0 + y1) / 2 + (r ? 1.0 : 0.55), (z0 + z1) / 2), q, s.set(len + 0.1, 1, 1));
        this.rails.setMatrixAt(i * 2 + r, m);
      }
    }
    this.posts.instanceMatrix.needsUpdate = true;
    this.rails.instanceMatrix.needsUpdate = true;
    if (this.onBuild) { this.onBuild(this.group); this.onBuild = null; }
  }

  update(dt, s, road, terrain) {
    if (!this.enabled) return;
    // đàn gần nhất phía trước / vừa đi qua
    const k = Math.round((s + 150 - HERD_S0) / HERD_GAP);
    const sk = HERD_S0 + k * HERD_GAP;
    if (k < 0 || sk < s - 250 || sk > s + 750) { this.group.visible = false; this.herd = null; return; }
    if (this.herd !== k) { this._place(k, road, terrain); this.herd = k; }
    this.group.visible = true;
    const t = performance.now() / 1000;
    for (const c of this.cows) this._cow(c, dt, t, terrain);
  }

  _cow(c, dt, t, terrain) {
    c.timer -= dt;
    if (c.timer <= 0) {
      const r = Math.random();
      if (c.mode === 'walk' || r < 0.5) { c.mode = 'graze'; c.timer = rnd(5, 14); }
      else if (r < 0.75) { c.mode = 'look'; c.timer = rnd(2, 5); c.lookY = rnd(-0.45, 0.45); }
      else { c.mode = 'walk'; c.timer = rnd(2.5, 6); c.turn = rnd(-0.35, 0.35); }
    }
    let head = 1.2 + 0.05 * Math.sin(t * 3.1 + c.seed), headY = 0, speed = 0;
    if (c.mode === 'look') { head = -0.12; headY = c.lookY; }
    if (c.mode === 'walk') {
      head = 0.35; speed = 0.55;
      // ra xa giữa đàn quá thì quay về
      const dx = this.cx - c.x, dz = this.cz - c.z;
      if (dx * dx + dz * dz > HERD_R * HERD_R) {
        const want = Math.atan2(dx, dz);
        c.yaw += Math.atan2(Math.sin(want - c.yaw), Math.cos(want - c.yaw)) * Math.min(1, dt * 1.5);
      } else c.yaw += c.turn * dt;
    }
    // không đứng chồng lên nhau
    for (const o of this.cows) {
      if (o === c) continue;
      const dx = c.x - o.x, dz = c.z - o.z, d2 = dx * dx + dz * dz;
      if (d2 < 6.25 && d2 > 1e-6) { const d = Math.sqrt(d2), push = (2.5 - d) * dt; c.x += (dx / d) * push; c.z += (dz / d) * push; }
    }
    c.x += Math.sin(c.yaw) * speed * dt; c.z += Math.cos(c.yaw) * speed * dt;
    if (Math.hypot(c.x - c.hx, c.z - c.hz) > 0.4) { c.y = terrain.heightAt(c.x, c.z); c.hx = c.x; c.hz = c.z; }
    const k = 1 - Math.exp(-dt * 2.2);
    c.head += (head - c.head) * k;
    c.headY += (headY - c.headY) * k;
    c.gait += ((speed > 0 ? 1 : 0) - c.gait) * Math.min(1, dt * 3);
    c.phase = (c.phase || 0) + dt * 5.2 * c.gait;
    c.root.position.set(c.x, c.y, c.z);
    c.root.rotation.y = c.yaw;
    c.neck.rotation.set(c.head, c.headY, 0, 'YXZ');
    const sw = 0.38 * c.gait * Math.sin(c.phase);
    c.legs[0].rotation.x = sw; c.legs[3].rotation.x = sw;
    c.legs[1].rotation.x = -sw; c.legs[2].rotation.x = -sw;
    // vẫy đuôi, thỉnh thoảng quất mạnh
    const flick = Math.max(0, Math.sin(t * 0.37 + c.seed) - 0.85) * 6;
    c.tail.rotation.set(0.12, 0, 0.12 * Math.sin(t * 1.6 + c.seed) + 0.5 * flick * Math.sin(t * 9));
  }
}
