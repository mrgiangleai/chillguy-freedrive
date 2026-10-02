import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { withMist } from './mist.js';

// Người lái (Quaternius Universal Base Characters + clip từ Universal Animation Library, CC0).
// Cấu trúc: root (vị trí + hướng, gắn vào thân xe) -> tilt (nghiêng người khi dựa xe) -> model đã chuẩn hoá
// (cao 1.78 m, chân ở y = 0, mặt nhìn về +Z của root).
export class Person {
  constructor() {
    this.root = new THREE.Group();
    this.tilt = new THREE.Group();
    this.root.add(this.tilt);
    this.root.visible = false;
    this.ready = false;
    this.actions = {};
    this.current = null;
    this.headOffsetSit = new THREE.Vector3();   // vị trí xương đầu (so với root) ở tư thế lái xe
  }

  async load(url) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.loadAsync(url);
    const model = gltf.scene;
    this.model = model;
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      o.receiveShadow = true;
      o.frustumCulled = false;                    // khung bao của mesh có xương không theo tư thế
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) { m.envMapIntensity = 0.6; withMist(m); }
    });
    this.tilt.add(model);
    this.head = model.getObjectByName('Head');
    this.mixer = new THREE.AnimationMixer(model);
    for (const clip of gltf.animations) this.actions[clip.name] = this.mixer.clipAction(clip);

    // chuẩn hoá chiều cao + hướng mặt
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model, true);
    const h = box.max.y - box.min.y;
    model.scale.setScalar(1.78 / h);
    model.position.y = -box.min.y * (1.78 / h);
    // mắt ở phía nào của đầu => quay để mặt nhìn về +Z
    const eyes = [];
    model.traverse((o) => { if (o.isMesh && /eye/i.test(o.name + ' ' + (o.material?.name || ''))) eyes.push(o); });
    if (eyes.length && this.head) {
      model.updateMatrixWorld(true);
      const e = new THREE.Box3().setFromObject(eyes[0], true).getCenter(new THREE.Vector3());
      const hp = this.head.getWorldPosition(new THREE.Vector3());
      const d = e.sub(hp);
      model.rotation.y = Math.atan2(-d.x, d.z) || 0;   // đưa hướng mắt về +Z
    }

    // model gốc chỉ là thân người cơ bản => "mặc" áo phông trắng, quần jeans, giày sneaker (theo xương chi phối)
    model.updateMatrixWorld(true);
    model.traverse((o) => { if (o.isSkinnedMesh && /superhero|body/i.test(o.name + ' ' + o.material?.name)) dress(o, model); });

    // đo vị trí đầu ở tư thế lái xe (để đặt người vào ghế cho đúng)
    this.play('Driving_Loop', 0);
    this.mixer.update(0.01);
    this.root.updateMatrixWorld(true);
    this.headOffsetSit.copy(this.head.getWorldPosition(new THREE.Vector3()));
    this.root.worldToLocal(this.headOffsetSit);
    this.ready = true;
    return this;
  }

  // chuyển sang clip `name` (hoà trộn trong `fade` giây)
  play(name, fade = 0.35, { once = false, timeScale = 1 } = {}) {
    const a = this.actions[name];
    if (!a || a === this.current) return a;
    a.reset();
    a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    a.clampWhenFinished = once;
    a.timeScale = timeScale;
    a.enabled = true;
    a.setEffectiveWeight(1);
    if (this.current && fade > 0) a.crossFadeFrom(this.current, fade, false);
    else if (this.current) this.current.stop();
    a.play();
    this.current = a;
    return a;
  }

  duration(name) { return this.actions[name]?.getClip().duration ?? 1; }

  update(dt) { if (this.mixer && this.root.visible) this.mixer.update(dt); }
}

// ---- quần áo vẽ lên thân người (màu + độ nhám + làm mờ vân cơ bắp ở chỗ có vải) ----
const SHIRT = new THREE.Color('#e9e4da'), PANTS = new THREE.Color('#2f4366'), SHOES = new THREE.Color('#dedad2');
function dress(mesh, model) {
  const g = mesh.geometry;
  const si = g.attributes.skinIndex, sw = g.attributes.skinWeight, pos = g.attributes.position;
  if (!si || !sw) return;
  const bones = mesh.skeleton.bones;
  const pelvis = bones.find((b) => b.name === 'pelvis');
  const pelvisY = pelvis ? pelvis.getWorldPosition(new THREE.Vector3()).y : 0.9;
  const role = bones.map((b) => (/foot|ball/i.test(b.name) ? 3 : /thigh|calf/i.test(b.name) ? 2
    : /lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(b.name) ? 0 : /pelvis/i.test(b.name) ? 4 : 1));
  const out = new Float32Array(pos.count * 4);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    let best = 0, bw = -1;
    for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > bw) { bw = w; best = si.getComponent(i, k); } }
    let r = role[best];
    if (r === 4) { v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld); r = v.y < pelvisY + 0.09 ? 2 : 1; }
    const c = r === 1 ? SHIRT : r === 2 ? PANTS : r === 3 ? SHOES : null;
    if (c) { out[i * 4] = c.r; out[i * 4 + 1] = c.g; out[i * 4 + 2] = c.b; out[i * 4 + 3] = 1; }
  }
  g.setAttribute('aGarment', new THREE.BufferAttribute(out, 4));
  const m = mesh.material;
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => {
    prev?.call(m, sh, r);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aGarment;\nvarying vec4 vGarment;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvGarment = aGarment;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec4 vGarment;')
      .replace('#include <map_fragment>', '#include <map_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vGarment.rgb * (0.9 + 0.1 * diffuseColor.r), vGarment.a);')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);')
      .replace('mapN.xy *= normalScale;', 'mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);');
  };
  const prevKey = m.customProgramCacheKey?.bind(m);
  m.customProgramCacheKey = () => (prevKey ? prevKey() : '') + '|garment';
}
