import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROAD } from './road.js';
import { roadTexture, glowTexture } from './textures.js';

const { halfWidth: HW, chunkLen: L, step: STEP } = ROAD;
const AHEAD = 7;   // số chunk dựng phía trước xe
const BEHIND = 1;

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

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
  const geos = parts.map((p) => {
    const g = flat(p);
    g.deleteAttribute('uv');
    return g;
  });
  return mergeGeometries(geos);
}

function pineGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.18, 0.28, 1.6, 6).translate(0, 0.8, 0), 0x5a3d2b),
    tint(new THREE.ConeGeometry(2.0, 3.2, 7).translate(0, 1.4 + 1.6, 0), 0x2c5a38),
    tint(new THREE.ConeGeometry(1.55, 2.8, 7).translate(0, 3.0 + 1.4, 0), 0x33673f),
    tint(new THREE.ConeGeometry(1.1, 2.4, 7).translate(0, 4.5 + 1.2, 0), 0x3b7546),
  ]);
}

function broadleafGeometry() {
  return merge([
    tint(new THREE.CylinderGeometry(0.22, 0.34, 2.6, 6).translate(0, 1.3, 0), 0x634632),
    tint(new THREE.IcosahedronGeometry(1.9, 1).translate(0, 4.0, 0), 0x5b9448),
    tint(new THREE.IcosahedronGeometry(1.3, 1).translate(1.0, 3.4, 0.5), 0x66a04f),
    tint(new THREE.IcosahedronGeometry(1.2, 1).translate(-0.9, 3.2, -0.6), 0x4f873f),
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

export class Scenery {
  constructor(scene, road, renderer) {
    this.scene = scene;
    this.road = road;
    this.chunks = new Map();
    this.queue = [];
    this.tmp = {};

    this.roadMat = new THREE.MeshStandardMaterial({
      map: roadTexture(renderer), roughness: 0.9, metalness: 0,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    this.treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 });
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

    this.pineGeo = pineGeometry();
    this.broadGeo = broadleafGeometry();
    this.lampGeo = lampGeometry();
    this.postGeo = new THREE.BoxGeometry(0.12, 0.95, 0.12).translate(0, 0.475, 0);
    this.poolGeo = new THREE.PlaneGeometry(15, 15).rotateX(-Math.PI / 2);
    this.bulbGeo = new THREE.SphereGeometry(0.2, 8, 6);
  }

  // s = độ dài cung hiện tại của xe
  update(s, budget = 2) {
    const k = Math.floor(s / L);
    for (let i = Math.max(0, k - BEHIND); i <= k + AHEAD; i++) {
      if (!this.chunks.has(i) && !this.queue.includes(i)) this.queue.push(i);
    }
    // ưu tiên chunk gần xe nhất
    this.queue.sort((a, b) => a - b);
    for (let n = 0; n < budget && this.queue.length; n++) {
      const i = this.queue.shift();
      if (i >= k - BEHIND && i <= k + AHEAD) this._build(i);
    }
    for (const [i, c] of this.chunks) {
      if (i < k - BEHIND) { this._dispose(c); this.chunks.delete(i); }
    }
  }

  // dựng sẵn toàn bộ khi bắt đầu để tránh pop-in
  prime(s) { this.update(s, 999); }

  apply(st) {
    // đèn đường + vầng sáng
    const on = st.lamps;
    const c = new THREE.Color(0x8a8a86).lerp(new THREE.Color(0xffd9a0), on);
    this.bulbMat.color.copy(c).multiplyScalar(0.6 + 1.6 * on);
    this.poolMat.opacity = on * 0.55;
    this.glowMat.opacity = on * 0.9;
    // đường ướt
    this.roadMat.roughness = 0.9 - 0.62 * st.wet;
    const d = 1 - 0.45 * st.wet;
    this.roadMat.color.setRGB(d, d, d);
    // tuyết phủ lên cây
    const e = 0.2 * st.cover * st.dayF;
    this.treeMat.emissive.setRGB(e, e * 1.02, e * 1.05);
  }

  _build(k) {
    const group = new THREE.Group();
    const r = rng(k * 7919 + 13);
    const road = this.road;
    const s0 = k * L;
    const p = this.tmp;

    // mặt đường
    const N = L / STEP;
    const pos = new Float32Array((N + 1) * 6);
    const uv = new Float32Array((N + 1) * 4);
    const nor = new Float32Array((N + 1) * 6);
    const idx = [];
    for (let i = 0; i <= N; i++) {
      const s = s0 + i * STEP;
      road.at(s, p);
      const rx = Math.cos(p.th), rz = -Math.sin(p.th);
      pos.set([p.x - rx * HW, 0.05, p.z - rz * HW, p.x + rx * HW, 0.05, p.z + rz * HW], i * 6);
      uv.set([0, s / 12, 1, s / 12], i * 4);
      nor.set([0, 1, 0, 0, 1, 0], i * 6);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    const roadMesh = new THREE.Mesh(geo, this.roadMat);
    roadMesh.receiveShadow = true;
    group.add(roadMesh);
    group.userData.own = [geo];

    // cây
    const pines = [], broads = [];
    for (let i = 0; i < 58; i++) {
      const side = r() < 0.5 ? -1 : 1;
      const d = HW + 6 + Math.pow(r(), 1.7) * 75;
      road.at(s0 + r() * L, p);
      const x = p.x + Math.cos(p.th) * d * side;
      const z = p.z - Math.sin(p.th) * d * side;
      (r() < 0.6 ? pines : broads).push([x, z, 0.8 + r() * 0.9, r() * Math.PI * 2, r()]);
    }
    const mkTrees = (list, geo) => {
      if (!list.length) return;
      const m = new THREE.InstancedMesh(geo, this.treeMat, list.length);
      const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
      list.forEach(([x, z, s, yaw, c], i) => {
        q.setFromAxisAngle(up, yaw);
        sc.set(s, s * (0.9 + c * 0.3), s);
        ps.set(x, 0, z);
        mat.compose(ps, q, sc);
        m.setMatrixAt(i, mat);
        col.setHSL(0.27 + (c - 0.5) * 0.12, 0.2 + c * 0.2, 0.62 + (c - 0.5) * 0.5);
        m.setColorAt(i, col);
      });
      m.castShadow = true;
      group.add(m);
    };
    mkTrees(pines, this.pineGeo);
    mkTrees(broads, this.broadGeo);

    // cọc tiêu hai bên đường
    const posts = [];
    for (let s = s0; s < s0 + L; s += 12) {
      road.at(s, p);
      for (const side of [-1, 1]) {
        posts.push([p.x + Math.cos(p.th) * (HW + 0.7) * side, p.z - Math.sin(p.th) * (HW + 0.7) * side]);
      }
    }
    const pm = new THREE.InstancedMesh(this.postGeo, this.postMat, posts.length);
    const m4 = new THREE.Matrix4();
    posts.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); pm.setMatrixAt(i, m4); });
    group.add(pm);

    // đèn đường (xen kẽ hai bên, cách nhau 30 m)
    const lamps = [], bulbs = [], pools = [];
    for (let i = 0; i < 4; i++) {
      const s = s0 + i * 30 + 6;
      road.at(s, p);
      const side = (Math.round(s / 30) % 2) ? 1 : -1;
      const off = HW + 1.4;
      const x = p.x + Math.cos(p.th) * off * side;
      const z = p.z - Math.sin(p.th) * off * side;
      // tay đòn hướng về tim đường: side=+1 (bên phải) => local -x => yaw = th ; bên trái => xoay thêm PI
      const yaw = p.th + (side === 1 ? 0 : Math.PI);
      lamps.push([x, z, yaw]);
      const ax = -Math.cos(yaw) * 1.75, az = Math.sin(yaw) * 1.75;
      bulbs.push([x + ax, 7.25, z + az]);
      pools.push([x + ax * 1.4, z + az * 1.4]);
    }
    const lm = new THREE.InstancedMesh(this.lampGeo, this.poleMat, lamps.length);
    const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    lamps.forEach(([x, z, yaw], i) => {
      q.setFromAxisAngle(up, yaw);
      m4.compose(v.set(x, 0, z), q, one);
      lm.setMatrixAt(i, m4);
    });
    lm.castShadow = true;
    group.add(lm);

    const bm = new THREE.InstancedMesh(this.bulbGeo, this.bulbMat, bulbs.length);
    bulbs.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); bm.setMatrixAt(i, m4); });
    group.add(bm);

    const poolMesh = new THREE.InstancedMesh(this.poolGeo, this.poolMat, pools.length);
    pools.forEach(([x, z], i) => { m4.makeTranslation(x, 0.08, z); poolMesh.setMatrixAt(i, m4); });
    poolMesh.renderOrder = 2;
    group.add(poolMesh);

    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(bulbs.flat(), 3));
    const glowPts = new THREE.Points(gg, this.glowMat);
    glowPts.frustumCulled = false;
    glowPts.renderOrder = 3;
    group.add(glowPts);
    group.userData.own.push(gg);
    group.userData.instanced = [pm, lm, bm, poolMesh];

    this.scene.add(group);
    this.chunks.set(k, group);
  }

  _dispose(group) {
    this.scene.remove(group);
    group.userData.own.forEach((g) => g.dispose());
    group.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
  }
}

// Mặt đất, lớp tuyết phủ, dãy núi xa — đi theo xe
export class Backdrop {
  constructor(scene, renderer) {
    const tex = new THREE.TextureLoader().load('assets/grass.jpg');
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    this.tile = 10;
    const size = 4000;
    tex.repeat.set(size / this.tile, size / this.tile);

    // chia lưới nhỏ: tam giác khổng lồ làm depth bị sai số gần camera (đường bị mặt đất đè mất)
    const geo = new THREE.PlaneGeometry(size, size, 100, 100).rotateX(-Math.PI / 2);
    this.ground = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, color: 0xa9b69a, roughness: 1 }));
    this.ground.receiveShadow = true;
    scene.add(this.ground);

    this.snow = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0xeef3f8, roughness: 1, transparent: true, opacity: 0, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
    }));
    this.snow.position.y = 0.02;
    this.snow.receiveShadow = true;
    this.snow.visible = false;
    scene.add(this.snow);

    // núi: hình nón bị xô lệch, đỉnh phủ tuyết (tô màu theo đỉnh)
    const r = rng(42);
    this.mountMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, fog: false });
    this.mountains = new THREE.Group();
    for (let i = 0; i < 44; i++) {
      const rad = 260 + r() * 420, h = 140 + r() * 320;
      const g = new THREE.ConeGeometry(rad, h, 7, 3);
      const p = g.attributes.position;
      const col = new Float32Array(p.count * 3);
      const rock = new THREE.Color(0x586070), snowC = new THREE.Color(0xf2f5fa), c = new THREE.Color();
      for (let j = 0; j < p.count; j++) {
        const y = p.getY(j) / h + 0.5;           // 0 chân núi .. 1 đỉnh
        if (y < 0.98) {
          p.setX(j, p.getX(j) + (r() - 0.5) * rad * 0.28);
          p.setZ(j, p.getZ(j) + (r() - 0.5) * rad * 0.28);
          p.setY(j, p.getY(j) + (r() - 0.5) * h * 0.1);
        }
        const t = Math.min(1, Math.max(0, (y - 0.62) / 0.2));
        c.copy(rock).lerp(snowC, t * t * (3 - 2 * t));
        col.set([c.r, c.g, c.b], j * 3);
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const m = new THREE.Mesh(g, this.mountMat);
      const a = (i / 44) * Math.PI * 2 + r() * 0.1, dist = 1950 + r() * 450;
      m.position.set(Math.cos(a) * dist, h * 0.5 - 8, Math.sin(a) * dist);
      m.rotation.y = r() * 6;
      this.mountains.add(m);
    }
    scene.add(this.mountains);
  }

  update(pos) {
    const t = this.tile;
    const x = Math.round(pos.x / t) * t, z = Math.round(pos.z / t) * t;
    this.ground.position.set(x, 0, z);
    this.snow.position.x = x; this.snow.position.z = z;
    this.mountains.position.set(pos.x, 0, pos.z);
  }

  apply(st) {
    this.snow.visible = st.cover > 0.01;
    this.snow.material.opacity = st.cover * 0.93;
    // ban đêm / chiều tối mặt đất tối đi nhờ ánh sáng; chỉ cần ngả màu nhẹ khi trời mù
    const g = this.ground.material.color;
    g.setRGB(0.66, 0.71, 0.6).multiplyScalar(1 - 0.12 * st.wet);
    // núi ở xa: ngả theo màu sương mù (không bị đen khi nắng thấp)
    this.mountMat.color.setRGB(0.8, 0.8, 0.85);
    this.mountMat.emissive.copy(st.fogColor).multiplyScalar(0.55);
  }
}
