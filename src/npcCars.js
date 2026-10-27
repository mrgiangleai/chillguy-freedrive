import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Xe thật của chú cho giao thông (bảng 🚦 "Thêm xe thật vào giao thông"): bản NHẸ của từng xe trong CARS
// (`assets/models/npc/<tên>.glb`, simplify + WebP 256 + meshopt, ~24k tam giác/xe — làm lại bằng `scripts/make-npc-cars.sh`).
// Xe người chơi vẫn dùng file gốc (Mazda 1,3 triệu tam giác không simplify).
export const npcFile = (def) => def.file?.replace('assets/models/', 'assets/models/npc/');

// Tải bản nhẹ qua cars._load (cùng xử lý vật liệu sơn / kính / env / sương như xe mình) rồi gộp mọi mảnh theo vật liệu
// => mỗi xe chỉ còn vài hình học tĩnh (bánh không quay) để vẽ bằng InstancedMesh trong cityTraffic.
// Trả về [{ id, dim, lamps: { head, tail }, parts: [{ geometry, material }] }]
export async function loadNpcCars(cars) {
  const out = [];
  for (const def of cars.list) {
    try {
      const entry = await cars._load({ ...def, file: npcFile(def) });
      if (cars.prepare) { try { await cars.prepare(entry.group); } catch { /* bỏ qua */ } }
      out.push({ id: def.id, dim: entry.dim, lamps: entry.dim.lamps, parts: mergeByMaterial(entry.group) });
    } catch (e) { console.warn('npc car', def.id, e); }
  }
  return out;
}

// thuộc tính rút gọn số nguyên (meshopt) => Float32 thường trước khi applyMatrix4 / gộp
function f32(a) {
  const n = a.count, s = a.itemSize, o = new Float32Array(n * s);
  for (let i = 0; i < n; i++) {
    o[i * s] = a.getX(i); if (s > 1) o[i * s + 1] = a.getY(i); if (s > 2) o[i * s + 2] = a.getZ(i); if (s > 3) o[i * s + 3] = a.getW(i);
  }
  return new THREE.BufferAttribute(o, s);
}

function mergeByMaterial(group) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert(), m = new THREE.Matrix4();
  const lists = new Map();                              // vật liệu -> [hình học đã đặt vào khung xe]
  group.traverse((o) => {
    if (!o.isMesh || !o.visible || Array.isArray(o.material)) return;
    const src = o.geometry, mat = o.material, g = new THREE.BufferGeometry();
    g.setAttribute('position', f32(src.attributes.position));
    if (src.attributes.normal) g.setAttribute('normal', f32(src.attributes.normal));
    if (src.index) g.setIndex(Array.from(src.index.array));
    g.applyMatrix4(m.multiplyMatrices(inv, o.matrixWorld));
    if (!src.attributes.normal) g.computeVertexNormals();
    const uv = src.attributes.uv;                      // mảnh không có uv: thêm uv 0 để gộp chung được
    g.setAttribute('uv', uv ? f32(uv) : new THREE.BufferAttribute(new Float32Array(src.attributes.position.count * 2), 2));
    const ng = g.index ? g.toNonIndexed() : g;
    if (!lists.has(mat)) lists.set(mat, []);
    lists.get(mat).push(ng);
  });
  const parts = [];
  for (const [material, gs] of lists) {
    const geometry = mergeGeometries(gs, false);
    if (geometry) parts.push({ geometry, material });
  }
  return parts;
}
