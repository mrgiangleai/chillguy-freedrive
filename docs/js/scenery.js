import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROAD } from './road.js';
import { roadTexture, glowTexture } from './textures.js';

const { halfWidth: HW, chunkLen: L, step: STEP } = ROAD;
const AHEAD = 7;   // số chunk đường dựng phía trước xe
const BEHIND = 1;

function tint(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}
const flat = (g) => (g.index ? g.toNonIndexed() : g);
function merge(parts) {
  return mergeGeometries(parts.map((p) => { const g = flat(p); g.deleteAttribute('uv'); return g; }));
}

// ---- khối cây (dùng chung cho hệ địa hình) ----
export function pineGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.18, 0.28, 1.6, 6).translate(0, 0.8, 0), 0x5a3d2b),
    tint(new THREE.ConeGeometry(2.0, 3.2, 7).translate(0, 1.4 + 1.6, 0), 0x2c5a38),
    tint(new THREE.ConeGeometry(1.55, 2.8, 7).translate(0, 3.0 + 1.4, 0), 0x33673f),
    tint(new THREE.ConeGeometry(1.1, 2.4, 7).translate(0, 4.5 + 1.2, 0), 0x3b7546),
  ]);
}
export function broadleafGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.22, 0.34, 2.6, 6).translate(0, 1.3, 0), 0x634632),
    tint(new THREE.IcosahedronGeometry(1.9, 1).translate(0, 4.0, 0), 0x5b9448),
    tint(new THREE.IcosahedronGeometry(1.3, 1).translate(1.0, 3.4, 0.5), 0x66a04f),
    tint(new THREE.IcosahedronGeometry(1.2, 1).translate(-0.9, 3.2, -0.6), 0x4f873f),
  ]);
}
// bản ít đa giác cho cây ở xa
export function pineLowGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.2, 0.3, 1.6, 4).translate(0, 0.8, 0), 0x5a3d2b),
    tint(new THREE.ConeGeometry(1.9, 5.8, 5).translate(0, 1.2 + 2.9, 0), 0x31653f),
  ]);
}
export function broadLowGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.22, 0.34, 2.6, 4).translate(0, 1.3, 0), 0x634632),
    tint(new THREE.IcosahedronGeometry(2.2, 0).translate(0, 3.9, 0), 0x5b9448),
  ]);
}

function lampGeometry() {
  // cột đèn: cột + tay đòn kéo về phía -x (hướng vào đường)
  return merge([
    new THREE.CylinderGeometry(0.07, 0.1, 7.4, 6).translate(0, 3.7, 0),
    new THREE.BoxGeometry(1.9, 0.08, 0.1).translate(-0.9, 7.4, 0),
    new THREE.BoxGeometry(0.5, 0.1, 0.22).translate(-1.75, 7.33, 0),
  ]);
}

// Mặt đường + cọc tiêu + đèn đường, dựng theo từng đoạn (chunk) dọc đường
export class Scenery {
  constructor(scene, road, renderer) {
    this.scene = scene;
    this.road = road;
    this.chunks = new Map();
    this.queue = [];
    this.tmp = {};
    this.map = 'reed';
    this.lastS = 150;

    this.roadMat = new THREE.MeshStandardMaterial({
      map: roadTexture(renderer), roughness: 0.9, metalness: 0,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    this.poleMat = new THREE.MeshStandardMaterial({ color: 0x4a4f55, roughness: 0.6, metalness: 0.4 });
    this.postMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e0, roughness: 0.7 });
    this.bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false });

    const glow = glowTexture();
    this.poolMat = new THREE.MeshBasicMaterial({
      map: glow, color: 0xffc27a, transparent: true, opacity: 0, depthWrite: false,
      blending: THREE.AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    });
    this.glowMat = new THREE.PointsMaterial({
      map: glow, color: 0xffc98a, size: 9, transparent: true, opacity: 0, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });

    this.lampGeo = lampGeometry();
    this.postGeo = new THREE.BoxGeometry(0.12, 0.95, 0.12).translate(0, 0.475, 0);
    this.poolGeo = new THREE.PlaneGeometry(15, 15).rotateX(-Math.PI / 2);
    this.bulbGeo = new THREE.SphereGeometry(0.2, 8, 6);
  }

  // dựng lại toàn bộ (đổi map => đổi độ cao đường)
  setMap(map) {
    this.map = map;
    for (const c of this.chunks.values()) this._dispose(c);
    this.chunks.clear();
    this.queue.length = 0;
    this.prime(this.lastS);
  }

  // s = độ dài cung hiện tại của xe
  update(s, budget = 2) {
    this.lastS = s;
    const k = Math.floor(s / L);
    for (let i = Math.max(0, k - BEHIND); i <= k + AHEAD; i++) {
      if (!this.chunks.has(i) && !this.queue.includes(i)) this.queue.push(i);
    }
    this.queue.sort((a, b) => a - b);
    for (let n = 0; n < budget && this.queue.length; n++) {
      const i = this.queue.shift();
      if (i >= k - BEHIND && i <= k + AHEAD) this._build(i);
    }
    for (const [i, c] of this.chunks) {
      if (i < k - BEHIND) { this._dispose(c); this.chunks.delete(i); }
    }
  }

  prime(s) { this.update(s, 999); }

  apply(st) {
    const on = st.lamps;
    const c = new THREE.Color(0x8a8a86).lerp(new THREE.Color(0xffd9a0), on);
    this.bulbMat.color.copy(c).multiplyScalar(0.6 + 1.6 * on);
    this.poolMat.opacity = on * 0.55;
    this.glowMat.opacity = on * 0.9;
    this.roadMat.roughness = 0.9 - 0.62 * st.wet;
    const d = (1 - 0.45 * st.wet) * (1 - 0.25 * st.dark);
    this.roadMat.color.setRGB(d, d, d);
  }

  _build(k) {
    const group = new THREE.Group();
    const road = this.road;
    const s0 = k * L;
    const p = this.tmp;

    // mặt đường (cao hơn mặt đất 5 cm)
    const N = L / STEP;
    const pos = new Float32Array((N + 1) * 6);
    const uv = new Float32Array((N + 1) * 4);
    const nor = new Float32Array((N + 1) * 6);
    const idx = [];
    for (let i = 0; i <= N; i++) {
      const s = s0 + i * STEP;
      road.at(s, p);
      const rx = Math.cos(p.th), rz = -Math.sin(p.th), y = p.y + 0.05;
      pos.set([p.x - rx * HW, y, p.z - rz * HW, p.x + rx * HW, y, p.z + rz * HW], i * 6);
      uv.set([0, s / 12, 1, s / 12], i * 4);
      nor.set([0, 1, 0, 0, 1, 0], i * 6);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const roadMesh = new THREE.Mesh(geo, this.roadMat);
    roadMesh.receiveShadow = true;
    group.add(roadMesh);
    group.userData.own = [geo];

    // cọc tiêu hai bên đường
    const posts = [];
    for (let s = s0; s < s0 + L; s += 12) {
      road.at(s, p);
      for (const side of [-1, 1]) {
        posts.push([p.x + Math.cos(p.th) * (HW + 0.7) * side, p.y, p.z - Math.sin(p.th) * (HW + 0.7) * side]);
      }
    }
    const pm = new THREE.InstancedMesh(this.postGeo, this.postMat, posts.length);
    const m4 = new THREE.Matrix4();
    posts.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); pm.setMatrixAt(i, m4); });
    group.add(pm);

    // đèn đường (xen kẽ hai bên)
    const lamps = [], bulbs = [], pools = [];
    const lampN = this.map === 'reed' ? 2 : 3, lampGap = L / lampN;
    for (let i = 0; i < lampN; i++) {
      const s = s0 + i * lampGap + 6;
      road.at(s, p);
      const side = (Math.round(s / lampGap) % 2) ? 1 : -1;
      const off = HW + 1.4;
      const x = p.x + Math.cos(p.th) * off * side;
      const z = p.z - Math.sin(p.th) * off * side;
      // tay đòn hướng về tim đường: side=+1 (bên phải) => local -x => yaw = th ; bên trái => xoay thêm PI
      const yaw = p.th + (side === 1 ? 0 : Math.PI);
      lamps.push([x, p.y, z, yaw]);
      const ax = -Math.cos(yaw) * 1.75, az = Math.sin(yaw) * 1.75;
      bulbs.push([x + ax, p.y + 7.25, z + az]);
      pools.push([x + ax * 1.4, p.y + 0.08, z + az * 1.4]);
    }
    const lm = new THREE.InstancedMesh(this.lampGeo, this.poleMat, lamps.length);
    const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    lamps.forEach(([x, y, z, yaw], i) => {
      q.setFromAxisAngle(up, yaw);
      m4.compose(v.set(x, y, z), q, one);
      lm.setMatrixAt(i, m4);
    });
    lm.castShadow = true;
    group.add(lm);

    const bm = new THREE.InstancedMesh(this.bulbGeo, this.bulbMat, bulbs.length);
    bulbs.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); bm.setMatrixAt(i, m4); });
    group.add(bm);

    const poolMesh = new THREE.InstancedMesh(this.poolGeo, this.poolMat, pools.length);
    pools.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); poolMesh.setMatrixAt(i, m4); });
    poolMesh.renderOrder = 2;
    group.add(poolMesh);

    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(bulbs.flat(), 3));
    const glowPts = new THREE.Points(gg, this.glowMat);
    glowPts.frustumCulled = false;
    glowPts.renderOrder = 3;
    group.add(glowPts);
    group.userData.own.push(gg);

    this.scene.add(group);
    this.chunks.set(k, group);
  }

  _dispose(group) {
    this.scene.remove(group);
    group.userData.own.forEach((g) => g.dispose());
    group.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
  }
}
