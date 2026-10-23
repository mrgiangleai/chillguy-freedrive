// Cây map Landmark 81: mỗi con đường một loại cây, công viên trồng thành lùm theo ô 30 m, quảng trường trồng cọ.
// Model GLB (meshopt + WebP) chỉ dựng bản chi tiết trong 100 m quanh camera; xa hơn dùng cây low-poly instanced như cũ.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { sgnStreet } from './sgn.js';

// thứ tự cố định = chỉ số kind trong mảng nội bộ
export const TREE_KINDS = ['urban-round', 'acacia', 'maple', 'palm-date', 'palm-fan', 'urban-tall', 'cypress'];
export const TREE_HEIGHT = { acacia: 9, maple: 10, 'palm-fan': 11, 'palm-date': 9, cypress: 14, 'urban-tall': 13, 'urban-round': 9 };
const KIND = { 'urban-round': 0, acacia: 1, maple: 2, 'palm-date': 3, 'palm-fan': 4, 'urban-tall': 5, cypress: 6 };
const PALM = [KIND['palm-date'], KIND['palm-fan']];
const STREET_KIND = {
  'Nguyễn Hữu Cảnh': 'urban-tall',
  'Vạn Hoa 4': 'maple',
  'Đường Vạn Hoa 3': 'cypress',
  'Trần Trọng Kim': 'palm-date',
};

// băm ổn định theo ô lưới (số nguyên => không trôi theo toạ độ lớn); cùng ô 30 m => cùng lùm
const cellHash = (x, z) => {
  let h = Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};
const treeHash = (x, z) => { const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453; return s - Math.floor(s); };
// tên đường tại s: dùng dữ liệu map nếu có (hàm thuần cho script kiểm tra), không thì hỏi sgn.js
const streetAt = (s, D) => {
  if (D && D.streets && D.streets.length) {
    const L = D.length || 1, r = ((s % L) + L) % L, S = D.streets;
    let name = S[S.length - 1].name;
    for (const t of S) if (r >= t.s0) name = t.name;
    return name;
  }
  return sgnStreet(s || 0);
};

// loại cây của một điểm: [x,z] công viên / cây OSM, [x,z,1] cọ quảng trường, [x,z,2,s] hàng cây theo tên đường
export function treeKind(t, D) {
  const tag = t[2] | 0;
  if (tag === 1) return 'palm-fan';
  if (tag === 2) return STREET_KIND[streetAt(t[3] || 0, D)] || 'urban-round';
  const h = cellHash(Math.floor(t[0] / 30), Math.floor(t[1] / 30));
  return h < 0.35 ? 'urban-round' : h < 0.60 ? 'acacia' : h < 0.80 ? 'maple' : h < 0.90 ? 'palm-date' : 'palm-fan';
}

const LOD2 = 100 * 100, STEP = 0.5, MOVE2 = 15 * 15;

export class SgnTrees {
  constructor(parent, groundAt, list, opts = {}) {
    this.group = new THREE.Group();
    this.group.visible = opts.visible !== false;
    parent.add(this.group);
    this.detail = opts.detail !== false;
    this.state = 'loading'; this._t = 0; this._hasCam = false;
    this._cam = new THREE.Vector3(); this._last = new THREE.Vector3();
    this._m4 = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3();
    this._s = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0); this._col = new THREE.Color();

    const n = this.n = list.length;
    this.kind = new Uint8Array(n);
    this.x = new Float32Array(n); this.y = new Float32Array(n); this.z = new Float32Array(n);
    this.yawHi = new Float32Array(n); this.yawLo = new Float32Array(n);
    this.sHi = new Float32Array(n); this.sLo = new Float32Array(n); this.col = new Float32Array(n * 3);
    this.counts = new Int32Array(TREE_KINDS.length); this.highNow = new Int32Array(TREE_KINDS.length);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      const t = list[i], x = this.x[i] = t[0], z = this.z[i] = t[1];
      this.y[i] = groundAt(x, z) - 0.1;
      const k = KIND[treeKind(t)] ?? 0; this.kind[i] = k; this.counts[k]++;
      this.yawHi[i] = treeHash(x, z) * 6.283; this.yawLo[i] = treeHash(z, x) * 6.283;
      this.sHi[i] = 0.85 + 0.3 * treeHash(x + 1.7, z - 3.1);      // ±15 %
      this.sLo[i] = 0.8 + 0.5 * treeHash(x, z);
      c.setHSL(0.27 + 0.05 * treeHash(x + 1, z), 0.45, 0.24 + 0.1 * treeHash(x, z + 1));
      this.col[i * 3] = c.r; this.col[i * 3 + 1] = c.g; this.col[i * 3 + 2] = c.b;
    }
    const palmCount = this.counts[KIND['palm-date']] + this.counts[KIND['palm-fan']];
    this.lowRoundCap = n - palmCount; this.lowPalmCap = palmCount;
    this.lowRoundNow = 0; this.lowPalmNow = 0;
    this.high = new Array(TREE_KINDS.length).fill(null);
    this._buildLow(opts);
    this._recompute();                                              // lúc chưa tải xong: tất cả low-poly
    this._load();
  }

  _buildLow(opts) {
    const trunkMat = opts.trunk || new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 });
    const leafMat = opts.leaf || new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true });
    const add = (geo, mat, cap) => {
      if (!cap) return null;
      const im = new THREE.InstancedMesh(geo, mat, cap);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false; im.count = 0;
      this.group.add(im); return im;
    };
    const trunk = new THREE.CylinderGeometry(0.16, 0.24, 3, 6).translate(0, 1.5, 0);
    const crown = new THREE.IcosahedronGeometry(2.3, 0).scale(1, 0.85, 1).translate(0, 4.4, 0);
    const ptrunk = new THREE.CylinderGeometry(0.14, 0.22, 7, 6).translate(0, 3.5, 0);
    const fronds = new THREE.BufferGeometry(), P = [];
    for (let k = 0; k < 7; k++) {
      const a = k / 7 * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      P.push(0, 7, 0, ca * 3.2 - sa * 0.5, 6.2, sa * 3.2 + ca * 0.5, ca * 3.2 + sa * 0.5, 6.2, sa * 3.2 - ca * 0.5);
    }
    fronds.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); fronds.computeVertexNormals();
    const fm = leafMat.clone(); fm.side = THREE.DoubleSide;
    const crownIM = add(crown, leafMat, this.lowRoundCap);
    if (crownIM) crownIM.setColorAt(0, this._col);
    const roundTrunk = add(trunk, trunkMat, this.lowRoundCap);
    const palmTrunk = add(ptrunk, trunkMat, this.lowPalmCap);
    const frondIM = add(fronds, fm, this.lowPalmCap);
    if (frondIM) frondIM.setColorAt(0, this._col);
    this.lowRound = roundTrunk && crownIM ? [roundTrunk, crownIM] : null;
    this.lowPalm = palmTrunk && frondIM ? [palmTrunk, frondIM] : null;
  }

  _load() {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    this.models = {};
    let left = TREE_KINDS.length;
    for (const name of TREE_KINDS) {
      loader.load('assets/models/sgn/trees/' + name + '.glb', (gltf) => {
        this.models[name] = this._extract(gltf, TREE_HEIGHT[name]);
        if (--left === 0) this._ready();
      }, undefined, (e) => {
        console.warn('Cây chi tiết', name, e); this.state = 'failed';
        if (--left === 0) this._ready();
      });
    }
  }

  // gộp world transform vào geometry, chuẩn hoá: cao đúng TREE_HEIGHT, gốc thân (min y, tâm x/z) về (0, 0, 0)
  _extract(gltf, height) {
    const root = gltf.scene; root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const k = height / ((box.max.y - box.min.y) || 1);
    const cx = (box.min.x + box.max.x) / 2, cz = (box.min.z + box.max.z) / 2;
    const norm = new THREE.Matrix4().makeScale(k, k, k)
      .multiply(new THREE.Matrix4().makeTranslation(-cx, -box.min.y, -cz));
    const out = [];
    root.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      const g = o.geometry.clone();
      // meshopt lưu toạ độ / pháp tuyến / uv dạng số nguyên rút gọn (normalized Int16 / Int8): đổi sang Float32 trước khi applyMatrix4,
      // nếu không ghi thẳng vào mảng số nguyên => cây bị bẹp thành bụi sát đất
      for (const name of Object.keys(g.attributes)) {
        const A = g.attributes[name];
        if (A.array instanceof Float32Array && !A.isInterleavedBufferAttribute) continue;
        const n = A.itemSize, f = new Float32Array(A.count * n);
        for (let i = 0; i < A.count; i++) { f[i * n] = A.getX(i); if (n > 1) f[i * n + 1] = A.getY(i); if (n > 2) f[i * n + 2] = A.getZ(i); if (n > 3) f[i * n + 3] = A.getW(i); }
        g.setAttribute(name, new THREE.BufferAttribute(f, n));
      }
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(norm, o.matrixWorld));
      const mats = Array.isArray(o.material) ? o.material.map(cutout) : cutout(o.material);
      g.computeBoundingSphere();
      out.push({ geometry: g, material: mats });
    });
    return out;
  }

  _ready() {
    if (this.state === 'failed') { this.models = {}; return; }
    this.state = 'ready';
    for (let k = 0; k < TREE_KINDS.length; k++) {
      const ms = this.models[TREE_KINDS[k]], cap = this.counts[k];
      if (!ms || !cap) continue;
      const list = [];
      for (const m of ms) {
        const im = new THREE.InstancedMesh(m.geometry, m.material, cap);
        im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false; im.count = 0;
        this.group.add(im); list.push(im);
      }
      if (list.length) this.high[k] = list;
    }
    this._recompute();                                               // model sẵn sàng => chia lại theo camera hiện tại
  }

  setDetail(v) { this.detail = !!v; this._recompute(); }
  setVisible(v) { this.group.visible = !!v; if (v) this._recompute(); }

  update(dt, cam) {
    if (!this.group.visible || this.state !== 'ready') return;
    this._t += dt;
    const moved = !!cam && (!this._hasCam || cam.distanceToSquared(this._last) > MOVE2);
    if (!moved && this._t < STEP) return;
    this._t = 0;
    if (cam) { this._cam.copy(cam); this._last.copy(cam); this._hasCam = true; }
    this._recompute();
  }

  // chia cây theo khoảng cách: trong 100 m => model chi tiết, còn lại => low-poly; chỉ ghi lại ma trận, không cấp phát
  _recompute() {
    const ready = this.state === 'ready' && this.detail && this._hasCam;
    const cam = this._cam, m4 = this._m4, q = this._q, v = this._v, s = this._s, up = this._up, col = this._col;
    this.highNow.fill(0); this.lowRoundNow = 0; this.lowPalmNow = 0;
    for (let i = 0; i < this.n; i++) {
      const k = this.kind[i];
      let hi = false;
      if (ready) { const dx = this.x[i] - cam.x, dz = this.z[i] - cam.z; hi = dx * dx + dz * dz <= LOD2 && !!this.high[k]; }
      const palm = k === PALM[0] || k === PALM[1];
      if (hi) {
        const idx = this.highNow[k]++, list = this.high[k];
        q.setFromAxisAngle(up, this.yawHi[i]); s.setScalar(this.sHi[i]);
        m4.compose(v.set(this.x[i], this.y[i], this.z[i]), q, s);
        for (let j = 0; j < list.length; j++) list[j].setMatrixAt(idx, m4);
        continue;
      }
      const L = palm ? this.lowPalm : this.lowRound;
      if (!L) continue;
      const idx = palm ? this.lowPalmNow++ : this.lowRoundNow++;
      q.setFromAxisAngle(up, this.yawLo[i]); s.setScalar(this.sLo[i]);
      m4.compose(v.set(this.x[i], this.y[i], this.z[i]), q, s);
      L[0].setMatrixAt(idx, m4); L[1].setMatrixAt(idx, m4);
      col.setRGB(this.col[i * 3], this.col[i * 3 + 1], this.col[i * 3 + 2]); L[1].setColorAt(idx, col);
    }
    for (let k = 0; k < TREE_KINDS.length; k++) {
      const list = this.high[k]; if (!list) continue;
      const c = this.highNow[k];
      for (let j = 0; j < list.length; j++) { const im = list[j]; im.count = c; im.instanceMatrix.needsUpdate = true; }
    }
    this._setLowCount(this.lowRound, this.lowRoundNow);
    this._setLowCount(this.lowPalm, this.lowPalmNow);
  }

  _setLowCount(L, c) {
    if (!L) return;
    L[0].count = c; L[0].instanceMatrix.needsUpdate = true;
    L[1].count = c; L[1].instanceMatrix.needsUpdate = true;
    if (L[1].instanceColor) L[1].instanceColor.needsUpdate = true;
  }
}

// lá trong suốt / alpha blend => cắt alpha + 2 mặt để không phải sắp xếp trong suốt
function cutout(mat) {
  const m = mat.clone();
  if (m.transparent || m.blending !== THREE.NormalBlending || m.alphaTest > 0) {
    m.alphaTest = 0.5; m.transparent = false; m.depthWrite = true;
    m.side = THREE.DoubleSide; m.shadowSide = THREE.DoubleSide; m.needsUpdate = true;
  }
  return m;
}
