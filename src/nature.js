import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { withMist } from './mist.js';

// Cây / bụi / đá chi tiết (Quaternius Stylized Nature MegaKit, CC0; đã nén ~1 MB).
// Địa hình vẫn rải cây "tấm" nhẹ ở mọi nơi; trong bán kính `radius` quanh camera (theo mức chất lượng)
// cây tấm được giấu đi và thay bằng model chi tiết ở đúng vị trí đó. Bụi cây / dương xỉ chỉ có trong bán kính này.
export const NEAR = { uNearR: { value: 0 }, uNearC: { value: new THREE.Vector2() } };   // dùng chung với shader cây tấm

const KINDS = {
  broad: ['CommonTree_1', 'CommonTree_2', 'CommonTree_3', 'CommonTree_4', 'CommonTree_5'],
  pine: ['Pine_1', 'Pine_2', 'Pine_3', 'Pine_4', 'Pine_5'],
  plant: ['Fern_1', 'Fern_1', 'Fern_1', 'Plant_1_Big'],   // (bụi Bush_Common lá đỏ mùa thu => không dùng)
};
const CARD_H = { broad: 7.2, pine: 9.2 };      // chiều cao cây tấm (để model chi tiết to bằng cây tấm nó thay thế)
const MAX_PER = 220;                            // tối đa số cây mỗi model

export class Nature {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.ready = false;
    this.radius = 0;
    this.models = {};          // tên -> { parts: [{ mesh: InstancedMesh }], h }
    this.rockGeos = null;      // hình khối đá (đã chuẩn hoá ~1 m) cho cụm đá của địa hình
    this._last = new THREE.Vector3(1e9, 0, 0);
    this._m4 = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
  }

  async load(url) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.loadAsync(url);
    const root = gltf.scene;
    root.updateMatrixWorld(true);
    const rocks = [];
    for (const node of root.children) {
      const name = node.name;
      const box = new THREE.Box3().setFromObject(node);
      const h = box.max.y - box.min.y;
      const parts = [];
      node.traverse((o) => {
        if (!o.isMesh) return;
        const geo = toFloat(o.geometry).applyMatrix4(o.matrixWorld);
        geo.translate(0, -box.min.y - 0.05, 0);
        if (/^Rock_/.test(name)) { rocks.push(geo); return; }
        const m = o.material;
        m.side = THREE.DoubleSide;
        if (m.map && /leaf|leaves|grass/i.test(m.name + m.map.name)) { m.alphaTest = 0.4; m.transparent = false; }
        m.envMapIntensity = 0.7;
        withMist(m);
        const im = new THREE.InstancedMesh(geo, m, MAX_PER);
        im.count = 0;
        im.castShadow = true;
        im.receiveShadow = true;
        im.frustumCulled = false;
        im.layers.set(3);
        this.group.add(im);
        parts.push(im);
      });
      if (parts.length) this.models[name] = { parts, h };
    }
    // đá: chuẩn hoá cỡ ~1 m (cạnh dài nhất), đáy ở y = 0
    this.rockGeos = rocks.map((g) => {
      g.computeBoundingBox();
      const b = g.boundingBox, s = 1 / Math.max(b.max.x - b.min.x, b.max.z - b.min.z);
      g.translate(-(b.min.x + b.max.x) / 2, -b.min.y - 0.08, -(b.min.z + b.max.z) / 2);
      g.scale(s, s, s);
      return g;
    });
    this.ready = true;
    return this;
  }

  // bán kính thay cây tấm bằng cây chi tiết (0 = tắt)
  setRadius(r) {
    this.radius = r;
    NEAR.uNearR.value = this.ready ? r : 0;
    this._last.set(1e9, 0, 0);
    if (!r) for (const k in this.models) for (const p of this.models[k].parts) p.count = 0;
  }

  // gom cây / bụi trong bán kính quanh camera từ danh sách của các ô địa hình gần
  update(cam, terrain) {
    NEAR.uNearC.value.set(cam.x, cam.z);
    if (!this.ready || !this.radius) return;
    if (this._last.distanceToSquared(cam) < 4) return;          // camera đi > 2 m mới tính lại
    this._last.copy(cam);
    const R = this.radius, R2 = R * R;
    const lists = {};
    for (const name in this.models) lists[name] = [];
    for (const tile of terrain.tiles.values()) {
      const near = tile.userData.near;
      if (!near) continue;
      const b = tile.userData.box;
      const dx = Math.max(b[0] - cam.x, 0, cam.x - b[2]), dz = Math.max(b[1] - cam.z, 0, cam.z - b[3]);
      if (dx * dx + dz * dz > R2) continue;
      for (const t of near) {
        const ex = t[1] - cam.x, ez = t[3] - cam.z;
        if (ex * ex + ez * ez > R2) continue;
        const names = KINDS[t[0]];
        const name = names[Math.floor(t[6] * 4.999) % names.length];
        if (lists[name] && lists[name].length < MAX_PER) lists[name].push(t);
      }
    }
    const m4 = this._m4, q = this._q, s = this._s, p = this._p;
    for (const name in this.models) {
      const { parts, h } = this.models[name];
      const list = lists[name];
      const kind = name.startsWith('Pine') ? 'pine' : name.startsWith('Common') ? 'broad' : 'plant';
      const k = kind === 'plant' ? 1 : CARD_H[kind] / h;
      for (const im of parts) {
        list.forEach((t, i) => {
          q.setFromAxisAngle(this._up, t[5]);
          const sc = t[4] * k;
          m4.compose(p.set(t[1], t[2], t[3]), q, s.set(sc, sc * (0.92 + t[6] * 0.16), sc));
          im.setMatrixAt(i, m4);
        });
        im.count = list.length;
        im.instanceMatrix.needsUpdate = true;
      }
    }
  }
}

// model nén lượng tử hoá (toạ độ Int16/Int8 chuẩn hoá) => đổi sang Float32 trước khi dời / co giãn hình khối
function toFloat(src) {
  const g = src.clone();
  for (const name of Object.keys(g.attributes)) {
    const a = g.attributes[name];
    if (a.array instanceof Float32Array && !a.isInterleavedBufferAttribute) continue;
    const out = new Float32Array(a.count * a.itemSize);
    const get = [a.getX, a.getY, a.getZ, a.getW];                  // (attribute xen kẽ không có getComponent)
    for (let i = 0; i < a.count; i++) for (let k = 0; k < a.itemSize; k++) out[i * a.itemSize + k] = get[k].call(a, i);
    g.setAttribute(name, new THREE.BufferAttribute(out, a.itemSize));
  }
  return g;
}
