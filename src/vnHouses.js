import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { withMist } from './mist.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const PATHS = [
  'assets/models/sgn/houses/tube-house.glb',
  'assets/models/sgn/houses/tube-house3.glb',
  'assets/models/sgn/houses/urban-house.glb',
  'assets/models/sgn/houses/urban-house2.glb',
  'assets/models/sgn/houses/3d-mini-apartment.glb',
];

const MODELS = [
  { key: 'tube-house', target: 4.2 },
  { key: 'tube-house3', target: 4.5 },
  { key: 'urban-house', target: 5 },
  { key: 'urban-house2', target: 5.5 },
  { key: 'mini-apartment', target: 16 },
];

const MIN_W = 4;
const MAX_H = 24;
const MIN_H = 8;

// Hàm thuần để kiểm tra đặt nhà Việt Nam
export function vnPlace(w, rnd) {
  const out = [];
  if (w < MIN_W) return out;
  const r = typeof rnd === 'function' ? rnd : Math.random;
  // Tìm model phù hợp nhất với chiều rộng lô
  const candidates = [];
  for (let i = 0; i < MODELS.length; i++) {
    const m = MODELS[i];
    if (m.key === 'mini-apartment' && w < 14) continue;
    candidates.push({ idx: i, m, diff: Math.abs(m.target - w) });
  }
  if (candidates.length === 0) {
    // Fallback: chọn model nhỏ nhất nếu không có
    for (let i = 0; i < MODELS.length - 1; i++) candidates.push({ idx: i, m: MODELS[i], diff: Math.abs(MODELS[i].target - w) });
  }
  candidates.sort((a, b) => a.diff - b.diff || a.idx - b.idx);
  const best = candidates[0];
  // Thử đặt 2 nhà cạnh nhau nếu fit
  if (best.m.key !== 'mini-apartment' && best.m.target * 2 <= w + 1e-6) {
    const gap = 0.25;
    const total2 = best.m.target * 2 + gap;
    if (total2 <= w + 1e-6) {
      const off = -w / 2 + best.m.target / 2;
      out.push({ model: best.idx, offset: off, scale: 1 });
      out.push({ model: best.idx, offset: off + best.m.target + gap, scale: 1 });
      return out;
    }
  }
  // 1 nhà
  if (best.m.target <= w + 1e-6) {
    out.push({ model: best.idx, offset: 0, scale: 1 });
    return out;
  } else {
    const scale = w / best.m.target;
    out.push({ model: best.idx, offset: 0, scale });
    return out;
  }
}

export class VnHouses {
  constructor() {
    this.loader = new GLTFLoader();
    this.loader.setMeshoptDecoder(MeshoptDecoder);
    this.models = [];
    this.ready = this._load();
    this.loaded = false;
  }

  async _load() {
    const loadOne = (path) => new Promise((resolve, reject) => {
      this.loader.load(path, (gltf) => resolve(gltf), undefined, reject);
    });
    try {
      for (let i = 0; i < PATHS.length; i++) {
        const gltf = await loadOne(PATHS[i]);
        const data = this._prepare(gltf, i);
        this.models.push(data);
      }
      this.loaded = true;
    } catch (e) {
      console.warn('vnHouses load failed', e);
      this.loaded = false;
    }
  }

  _prepare(gltf, modelIndex) {
    const root = gltf.scene;
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    // tìm mặt tiền hướng -Z (facade facing -Z in most Sketchfab exports)
    // center x/z at 0, put base at y=0
    const cx = (box.min.x + box.max.x) / 2;
    const cz = (box.min.z + box.max.z) / 2;
    const cy = box.min.y;
    const norm = new THREE.Matrix4().makeTranslation(-cx, -cy, -cz);
    // rotate so facade faces local +Z? spec says "rotate so the facade faces local +Z"
    // if facade is -Z, rotate 180 around Y
    norm.multiply(new THREE.Matrix4().makeRotationY(Math.PI));
    // also maybe need to detect, but try common case
    const parts = [];
    root.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      const g = o.geometry.clone();
      // convert meshopt quantized attributes to Float32 before applyMatrix4
      for (const name of Object.keys(g.attributes)) {
        const A = g.attributes[name];
        if (A.array instanceof Float32Array && !A.isInterleavedBufferAttribute) continue;
        const n = A.itemSize, f = new Float32Array(A.count * n);
        for (let i = 0; i < A.count; i++) {
          f[i * n] = A.getX(i);
          if (n > 1) f[i * n + 1] = A.getY(i);
          if (n > 2) f[i * n + 2] = A.getZ(i);
          if (n > 3) f[i * n + 3] = A.getW(i);
        }
        g.setAttribute(name, new THREE.BufferAttribute(f, n));
      }
      const mat = new THREE.Matrix4().multiplyMatrices(norm, o.matrixWorld);
      g.applyMatrix4(mat);
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      const fixedMats = mats.map((m) => {
        if (!m) return new THREE.MeshStandardMaterial();
        const mm = m.clone();
        withMist(mm);
        mm.receiveShadow = true;
        mm.castShadow = true;
        return mm;
      });
      g.computeBoundingSphere();
      parts.push({ geometry: g, material: fixedMats.length === 1 ? fixedMats[0] : fixedMats });
    });
    // gộp các mảnh cùng vật liệu (model gốc có tới ~70 mảnh => ~70 draw call / chunk): chỉ giữ position + normal (không texture)
    const byMat = new Map();
    for (const p of parts) {
      const m = Array.isArray(p.material) ? p.material[0] : p.material, g = p.geometry.index ? p.geometry.toNonIndexed() : p.geometry;
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
      if (!g.attributes.normal) g.computeVertexNormals();
      (byMat.get(m) || byMat.set(m, []).get(m)).push(g);
    }
    const merged = [];
    for (const [m, gs] of byMat) { const g = mergeGeometries(gs, false); if (g) { g.computeBoundingSphere(); merged.push({ geometry: g, material: m }); } }
    // khung sau khi xoay: mặt tiền quay +Z => rộng theo x, sâu theo z
    const bbox = new THREE.Box3();
    for (const p of merged) { p.geometry.computeBoundingBox(); bbox.union(p.geometry.boundingBox); }
    const bsize = bbox.getSize(new THREE.Vector3());
    const target = MODELS[modelIndex].target;
    let baseScale = target / (bsize.x || target);
    baseScale = Math.min(baseScale, MAX_H / (bsize.y || 1));           // cao tối đa 24 m
    return { parts: merged, baseScale, target, width: bsize.x, depth: bsize.z, height: bsize.y };
  }

  buildChunk(group, placements) {
    // placements: [x,y,z,yaw,modelIndex,scale] or objects
    if (!this.loaded || this.models.length === 0) return false;
    const byKey = new Map();
    for (let i = 0; i < placements.length; i++) {
      const p = placements[i];
      const x = p[0], y = p[1], z = p[2], yaw = p[3], mi = p[4], sc = p[5] !== undefined ? p[5] : 1;
      const model = this.models[mi];
      if (!model) continue;
      for (let j = 0; j < model.parts.length; j++) {
        const part = model.parts[j];
        const key = mi + ':' + j;
        if (!byKey.has(key)) {
          const im = new THREE.InstancedMesh(part.geometry, part.material, placements.length);   // đủ cho mọi vị trí trong chunk
          im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
          im.castShadow = true;
          im.receiveShadow = true;
          im.frustumCulled = false;
          im.count = 0;
          group.add(im);
          byKey.set(key, { im, list: [] });
        }
        const finalScale = sc * (model.baseScale || 1);
        byKey.get(key).list.push({ x, y, z, yaw, sc: finalScale });
      }
    }
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0,1,0);
    for (const entry of byKey.values()) {
      const im = entry.im;
      const list = entry.list;
      im.count = list.length;
      for (let i = 0; i < list.length; i++) {
        const it = list[i];
        q.setFromAxisAngle(up, it.yaw);
        v.set(it.x, it.y, it.z);
        s.setScalar(it.sc);
        m.compose(v, q, s);
        im.setMatrixAt(i, m);
      }
      if (im.instanceMatrix) im.instanceMatrix.needsUpdate = true;
    }
    return true;
  }
}
