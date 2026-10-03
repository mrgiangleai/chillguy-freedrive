import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { withMist } from './mist.js';

// Xe ngựa cổ tích (2 ngựa phi) chạy trên đường như xe NPC: traffic.js sinh 15–30 giây/chiếc, tối đa 2, dùng chung
// luật bám/né/phanh/đổi làn của NPC. File này chỉ tải + chuẩn hoá model và tạo bản sao có animation.
const FILE = 'assets/models/carriage.glb';
// khung va chạm đo từ model (đầu ngựa → đuôi xe, bánh xe → bánh xe), không tính mây bụi dưới vó/bánh
const DIM = { length: 5.6, width: 2.8, height: 2.4 };
export const CARRIAGE = { gapMin: 15, gapMax: 30, max: 2, minSpeed: 25 / 3.6, maxSpeed: 40 / 3.6, gallop: 11 };

// trả về hàm tạo một xe ngựa mới: { group, dim, wheels: [], mixer }
export async function loadCarriage(loader) {
  const gltf = await loader.loadAsync(FILE);
  const model = gltf.scene;
  model.traverse((o) => {
    if (!o.isMesh) return;
    // vật liệu gốc để BLEND => ngựa / xe tự che sai thứ tự. Đổi sang cắt alpha (bờm, đuôi, bụi vẫn có viền)
    const m = o.material;
    m.transparent = false; m.depthWrite = true; m.alphaTest = 0.4;
    withMist(m);
    o.castShadow = true; o.receiveShadow = true;
    o.frustumCulled = false;            // mesh skinned: khung bao gốc không theo animation
  });
  // model đầu ngựa hướng +Z => xoay 180° cho đầu hướng -Z (như xe); căn giữa, bánh xe / vó ngựa chạm y = 0
  model.rotation.y = Math.PI;
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model, true), c = box.getCenter(new THREE.Vector3());
  model.position.set(-c.x, -box.min.y, -c.z);
  const clip = gltf.animations[0] || null;
  return () => {
    const group = new THREE.Group();
    group.add(cloneSkinned(model));
    const mixer = new THREE.AnimationMixer(group);
    if (clip) mixer.clipAction(clip).play();
    return { group, dim: { ...DIM }, wheels: [], mixer, carriage: true };
  };
}
