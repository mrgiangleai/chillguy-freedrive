import * as THREE from 'three';
import { CITY } from './road.js';
import { withMist } from './mist.js';

// Người đi bộ map Phố (dựng bằng code, 1 InstancedMesh, chân tay đung đưa trong vertex shader theo pha bước chân).
// Mọi người dùng toạ độ đường chính: s (dọc đường), u (ngang, + = bên phải); vận tốc (vs, vu).
// - Đi dọc vỉa hè hai bên; tới đường ngang thì chờ nếu đèn đường chính không xanh (đèn đi bộ qua đường ngang).
// - Đứng chờ ở mép vỉa hè cạnh vạch qua đường chính; khi đèn đường ngang xanh (đèn đi bộ qua đường chính) và còn ≥ 9 s
//   thì băng qua, sang tới nơi thành người đi vỉa hè.
// - Người kịch bản (cảnh sát, nhân viên cấp cứu, người lái bị bắt) do cảnh tai nạn điều khiển (goTo).
const AHEAD = 260, BEHIND = 90;
const WALKERS = 38;
const MAX = 96;
const SHIRTS = ['#e9e6df', '#2b2d33', '#6d7d8f', '#8c2f2f', '#c9a96e', '#3d5f4b', '#d7c6b0', '#5a4a6e', '#b8c4d6', '#1f3552'];
const KIND_COL = { officer: '#1d2a48', medic: '#e9eef2', driver: '#121214' };

// hình người cao ~1.7 m, mặt trước = -z. aSwing: +1/−1 chi đung đưa (chân/tay ngược pha), aPivot: độ cao khớp
function personGeometry() {
  const P = [], N = [], C = [], T = [], S = [], V = [];
  const add = (x0, x1, y0, y1, z0, z1, col, tint, swing = 0, pivot = 0) => {
    const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0).translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2).toNonIndexed();
    const p = g.attributes.position.array, n = g.attributes.normal.array;
    for (let i = 0; i < p.length / 3; i++) {
      P.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]); N.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      C.push(...col); T.push(tint); S.push(swing); V.push(pivot);
    }
  };
  const JEANS = [0.16, 0.2, 0.3], SHOE = [0.07, 0.07, 0.08], SKIN = [0.78, 0.6, 0.48], HAIR = [0.06, 0.05, 0.05], W = [1, 1, 1];
  for (const s of [-1, 1]) {
    add(s * 0.04, s * 0.17, 0.08, 0.86, -0.08, 0.08, JEANS, 0, s, 0.86);              // chân
    add(s * 0.04, s * 0.17, 0.0, 0.08, -0.13, 0.09, SHOE, 0, s, 0.86);                 // giày
    add(s * 0.21, s * 0.31, 0.82, 1.42, -0.06, 0.06, W, 1, -s, 1.42);                  // tay áo
    add(s * 0.215, s * 0.305, 0.74, 0.82, -0.05, 0.05, SKIN, 0, -s, 1.42);             // bàn tay
  }
  add(-0.21, 0.21, 0.84, 1.44, -0.11, 0.11, W, 1);                                     // thân áo
  add(-0.06, 0.06, 1.44, 1.5, -0.05, 0.05, SKIN, 0);                                   // cổ
  add(-0.1, 0.1, 1.5, 1.72, -0.11, 0.1, SKIN, 0);                                      // đầu
  add(-0.11, 0.11, 1.66, 1.76, -0.11, 0.12, HAIR, 0);                                  // tóc
  add(-0.11, 0.11, 1.52, 1.68, 0.07, 0.12, HAIR, 0);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  g.setAttribute('aTint', new THREE.Float32BufferAttribute(T, 1));
  g.setAttribute('aSwing', new THREE.Float32BufferAttribute(S, 1));
  g.setAttribute('aPivot', new THREE.Float32BufferAttribute(V, 1));
  return g;
}

export class CityPeople {
  constructor(scene, road, city) {
    this.road = road;
    this.city = city;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    const g = personGeometry();
    this.phase = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 2), 2).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aWalk', this.phase);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aTint, aSwing, aPivot;\nattribute vec2 aWalk;')
        .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          float pa = sin(aWalk.x) * 0.55 * aWalk.y * aSwing, pc = cos(pa), ps = sin(pa);
          objectNormal = vec3(objectNormal.x, objectNormal.y * pc - objectNormal.z * ps, objectNormal.y * ps + objectNormal.z * pc);`)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          transformed.y -= aPivot;
          transformed = vec3(transformed.x, transformed.y * pc - transformed.z * ps, transformed.y * ps + transformed.z * pc);
          transformed.y += aPivot;`)
        .replace('#include <color_vertex>', `vColor = vec3(1.0);
          vColor *= color;
          #ifdef USE_INSTANCING_COLOR
            vColor = mix(vColor, vColor * instanceColor.xyz, aTint);
          #endif`);
    };
    mat.customProgramCacheKey = () => 'city-person';
    withMist(mat);
    this.mesh = new THREE.InstancedMesh(g, mat, MAX);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
    this.mesh.count = 0; this.mesh.castShadow = true; this.mesh.frustumCulled = false;
    this.group.add(this.mesh);
    this.peds = [];          // { s, u, vs, vu, speed, mode: walk|wait|cross|fallen|script, ph, color, n?, side? }
    this.timers = new Map();
    this._p = {}; this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler(0, 0, 0, 'YXZ');
    this._v = new THREE.Vector3(); this._one = new THREE.Vector3(1, 1, 1); this._c = new THREE.Color();
    this.filled = false;
  }

  set visible(v) { this.group.visible = v; if (!v) { this.peds.length = 0; this.filled = false; this.timers.clear(); } }
  get visible() { return this.group.visible; }

  _walker(s, side, dir) {
    const HW = CITY.hw;
    return { s, u: side * (HW + 1.0 + Math.random() * 2.6), vs: 0, vu: 0, dir, speed: 1.1 + Math.random() * 0.5, mode: 'walk',
      ph: Math.random() * 6.28, color: SHIRTS[Math.floor(Math.random() * SHIRTS.length)] };
  }
  // người kịch bản tại (s, u), loại officer | medic | driver
  spawn(kind, s, u) {
    const p = { s, u, vs: 0, vu: 0, speed: 1.5, mode: 'script', ph: 0, color: KIND_COL[kind] || '#888888', target: null, kind };
    this.peds.push(p);
    return p;
  }
  remove(p) { const i = this.peds.indexOf(p); if (i >= 0) this.peds.splice(i, 1); }
  goTo(p, s, u) { p.target = [s, u]; }
  arrived(p) { return !p.target; }
  // người trong hình chữ nhật [s ± len/2] × [d ± wid/2]
  hitTest(s, d, len, wid) {
    for (const p of this.peds) if (p.mode !== 'fallen' && p.mode !== 'script' && Math.abs(p.s - s) < len / 2 + 0.25 && Math.abs(p.u - d) < wid / 2 + 0.25) return p;
    return null;
  }
  // có người đang băng qua vạch đường chính ở ngã tư gần s (trong dải |u − d| < 3.5)?
  crossingNear(s, d) {
    for (const p of this.peds) if (p.mode === 'cross' && Math.abs(p.s - s) < 3 && Math.abs(p.u - d) < 3.5) return true;
    return false;
  }

  update(dt, s) {
    if (!this.group.visible) return;
    const road = this.road, city = this.city, HW = CITY.hw;
    if (!this.filled) {
      this.filled = true;
      for (let i = 0; i < WALKERS; i++) this.peds.push(this._walker(s - BEHIND + Math.random() * (AHEAD + BEHIND), Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1));
    }
    const walkers = this.peds.filter((p) => p.mode === 'walk' || p.mode === 'wait').length;
    if (walkers < WALKERS && Math.random() < dt * 2) {
      const dir = Math.random() < 0.5 ? -1 : 1, at = dir > 0 ? s - BEHIND + 5 : s + AHEAD - 5;
      this.peds.push(this._walker(at + (Math.random() - 0.5) * 20, Math.random() < 0.5 ? -1 : 1, dir));
    }
    // người chờ qua đường chính ở các góc ngã tư gần
    const n0 = road.junctionIndex(s - 40), n1 = road.junctionIndex(s + 220);
    for (let n = n0; n < n1; n++) {
      let tm = this.timers.get(n) ?? Math.random() * 3;
      tm -= dt;
      if (tm <= 0 && this.peds.length < MAX - 8) {
        tm = 4 + Math.random() * 7;
        const J = road.junction(n), sa = Math.random() < 0.5 ? -1 : 1, su = Math.random() < 0.5 ? -1 : 1;
        const p = this._walker(J + sa * (6.9 + Math.random() * 3), su, 1);
        p.u = su * (HW + 0.75 + Math.random() * 0.5); p.mode = 'wait'; p.n = n; p.side = su; p.crossing = true;
        this.peds.push(p);
      }
      this.timers.set(n, tm);
    }
    for (const k of this.timers.keys()) if (k < n0 - 1 || k > n1) this.timers.delete(k);

    for (const p of this.peds) {
      let vs = 0, vu = 0;
      if (p.mode === 'script') {
        if (p.target) {
          const ds = p.target[0] - p.s, du = p.target[1] - p.u, L = Math.hypot(ds, du);
          if (L < 0.15) { p.target = null; } else { vs = ds / L * p.speed; vu = du / L * p.speed; }
        }
      } else if (p.mode === 'fallen') {
        // nằm yên
      } else if (p.crossing) {
        const ph = city._phase(p.n);
        const remain = 42 - ph.t;                                     // còn bao lâu đèn đi bộ (đường ngang xanh) — xem SIGNAL
        if (p.mode === 'wait' && ph.cross === 0 && remain > 9) p.mode = 'cross';
        if (p.mode === 'cross') {
          vu = -p.side * p.speed * 1.15;
          if (p.u * p.side < -(HW + 0.9)) { p.crossing = false; p.mode = 'walk'; p.u = -p.side * (HW + 1.2 + Math.random() * 2); p.dir = Math.random() < 0.5 ? -1 : 1; }
        }
      } else {
        // đi dọc vỉa hè; tới đường ngang thì chờ đèn đường chính xanh
        const n = p.dir > 0 ? road.junctionIndex(p.s - 4) : road.junctionIndex(p.s + 4) - 1;
        const J = road.junction(n), edge = J - p.dir * (CITY.side + 0.3), dist = (edge - p.s) * p.dir;
        const stopHere = dist > 0 && dist < 1.2 && city._phase(n).main !== 0;
        p.mode = stopHere ? 'wait' : 'walk';
        if (!stopHere) vs = p.dir * p.speed;
      }
      p.s += vs * dt; p.u += vu * dt;
      const sp = Math.hypot(vs, vu);
      p.ph += sp * dt * 5.2;
      p.moving = sp > 0.05 ? 1 : 0;
      if (sp > 0.05) p.head = Math.atan2(vu, vs);
    }
    this.peds = this.peds.filter((p) => p.mode === 'script' || p.mode === 'fallen' || (p.s > s - BEHIND - 10 && p.s < s + AHEAD + 10 && (!p.crossing || (p.n >= n0 - 1))));

    // vẽ
    const m = this._m, q = this._q, v = this._v, P = this._p;
    let i = 0;
    for (const p of this.peds) {
      if (i >= MAX) break;
      road.at(p.s, P);
      const onWalk = Math.abs(p.u) > CITY.hw && road.nearJunction(p.s) !== null && Math.abs(p.s - road.nearJunction(p.s)) > CITY.side;
      const y = P.y + (onWalk ? 0.2 : 0.05);
      const rx = Math.cos(P.th), rz = -Math.sin(P.th), fx = -Math.sin(P.th), fz = -Math.cos(P.th);
      const h = p.head ?? (p.mode === 'wait' && p.crossing ? (p.side > 0 ? -Math.PI / 2 : Math.PI / 2) : 0);
      const dx = fx * Math.cos(h) + rx * Math.sin(h), dz = fz * Math.cos(h) + rz * Math.sin(h);   // hướng nhìn trong thế giới
      const yaw = Math.atan2(-dx, -dz);
      if (p.mode === 'fallen') { q.setFromEuler(this._e.set(-Math.PI / 2, yaw, 0)); v.set(P.x + rx * p.u, y + 0.12, P.z + rz * p.u); }
      else { q.setFromEuler(this._e.set(0, yaw, 0)); v.set(P.x + rx * p.u, y, P.z + rz * p.u); }
      m.compose(v, q, this._one);
      this.mesh.setMatrixAt(i, m);
      this.mesh.setColorAt(i, this._c.set(p.color));
      this.phase.setXY(i, p.ph, p.moving);
      i++;
    }
    this.mesh.count = i;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor.needsUpdate = true;
    this.phase.needsUpdate = true;
  }
}
