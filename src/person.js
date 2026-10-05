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
    this.hipOffsetSit = new THREE.Vector3();    // vị trí xương chậu (so với root) ở tư thế lái xe
    // 0..1: giày nằm trong hốc để chân tối (ngồi lái) => sẫm lại; model không có che sáng nên giày trắng nổi bật qua vô lăng
    this.footShade = { value: 0 };
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
    this.neck = model.getObjectByName('neck_01');
    const bone = (n) => model.getObjectByName(n);
    this.arms = { l: ['upperarm_l', 'lowerarm_l', 'hand_l'].map(bone), r: ['upperarm_r', 'lowerarm_r', 'hand_r'].map(bone) };
    if (this.arms.l.some((b) => !b)) this.arms.l = null;
    if (this.arms.r.some((b) => !b)) this.arms.r = null;
    this.legs = { l: ['thigh_l', 'calf_l', 'foot_l'].map(bone), r: ['thigh_r', 'calf_r', 'foot_r'].map(bone) };
    this.balls = { l: bone('ball_l'), r: bone('ball_r') };
    if (this.legs.l.some((b) => !b) || this.legs.r.some((b) => !b)) this.legs = null;
    this.spine = bone('spine_01'); this.pelvis = bone('pelvis');
    this.gripFingers = { l: bone('middle_01_l'), r: bone('middle_01_r') };
    this.gripKnuckles = { l: [bone('index_01_l'), bone('pinky_01_l')], r: [bone('index_01_r'), bone('pinky_01_r')] };
    this.mixer = new THREE.AnimationMixer(model);
    for (const clip of gltf.animations) this.actions[clip.name] = this.mixer.clipAction(clip);

    // chuẩn hoá chiều cao + hướng mặt
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model, true);
    const h = box.max.y - box.min.y;
    model.scale.setScalar(HEIGHT / h);
    model.position.y = -box.min.y * (HEIGHT / h);
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

    // model gốc chỉ là thân người cơ bản => "mặc" áo phông đen, quần jeans, giày sneaker (theo xương chi phối)
    model.updateMatrixWorld(true);
    model.traverse((o) => { if (o.isSkinnedMesh && /superhero|body/i.test(o.name + ' ' + o.material?.name)) dress(o, model, this.footShade); });

    // đo vị trí đầu ở tư thế lái xe (để đặt người vào ghế cho đúng)
    this.play('Driving_Loop', 0);
    this.mixer.update(0.01);
    this.root.updateMatrixWorld(true);
    this.headOffsetSit.copy(this.head.getWorldPosition(new THREE.Vector3()));
    this.root.worldToLocal(this.headOffsetSit);
    if (this.pelvis) this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit));
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

  // Hướng các khớp gốc ngón tay về vành; giữ độ cong ngón của animation lái.
  faceGrip(side, normal, tangent = null) {
    const hand = this.arms?.[side]?.[2], middle = this.gripFingers?.[side];
    if (!hand || !middle) return;
    hand.getWorldPosition(_A); middle.getWorldPosition(_B);
    _A.subVectors(_B, _A).normalize(); _B.copy(normal).negate();
    turn(hand, _A, _B); hand.updateMatrixWorld(true);
    const knuckles = this.gripKnuckles?.[side];
    if (tangent && knuckles?.every(Boolean)) {
      // Xoay bàn tay quanh trục lòng bàn tay để hàng khớp ngón chạy dọc vành, không nắm vào nan ngang.
      knuckles[0].getWorldPosition(_A); knuckles[1].getWorldPosition(_B);
      _A.sub(_B).addScaledVector(normal, -_A.dot(normal)).normalize();
      _B.copy(tangent).addScaledVector(normal, -tangent.dot(normal)).normalize();
      const angle = Math.atan2(_D.crossVectors(_A, _B).dot(normal), _A.dot(_B));
      _q.setFromAxisAngle(normal, angle);
      hand.getWorldQuaternion(_qw); hand.parent.getWorldQuaternion(_qp);
      hand.quaternion.copy(_qp.invert().multiply(_q.multiply(_qw))); hand.updateMatrixWorld(true);
    }
  }

  // ngả lưng ra sau `angle` rad (xoay spine_01 quanh trục ngang của người). Gọi sau mixer.update, trước IK tay.
  recline(angle) {
    if (!this.spine || !angle) return;
    // clip không có track cho spine_01 thì mixer không ghi đè => phải trả về góc gốc trước khi ngả, không thì cộng dồn mỗi khung
    const sq = this.spine.quaternion;
    if (this._spOut && sq.equals(this._spOut)) sq.copy(this._spIn);
    (this._spIn ||= new THREE.Quaternion()).copy(sq);
    this.root.getWorldQuaternion(_qp);
    _A.set(1, 0, 0).applyQuaternion(_qp);                       // trục ngang (mặt người nhìn +Z của root)
    _q.setFromAxisAngle(_A, -angle);
    this.spine.getWorldQuaternion(_qw);
    this.spine.parent.getWorldQuaternion(_qp);
    this.spine.quaternion.copy(_qp.invert().multiply(_q.multiply(_qw)));
    (this._spOut ||= new THREE.Quaternion()).copy(sq);
    this.spine.updateMatrixWorld(true);
  }

  // IK chân: đưa cổ chân (side 'l' | 'r') tới `target`, đầu gối chĩa theo `pole`; `toe` (hướng thế giới): mũi bàn chân
  // (cổ chân → khớp ngón) — đặt lên bàn đạp, không chổng lên như animation gốc khi cẳng chân duỗi ra trước
  reachLeg(side, target, pole, toe = null) {
    const leg = this.legs?.[side];
    if (!leg) return;
    ik(leg, target, pole);
    const foot = leg[2], ball = this.balls?.[side];
    if (toe && ball) { foot.getWorldPosition(_A); ball.getWorldPosition(_B); turn(foot, _B.sub(_A).normalize(), _A.copy(toe).normalize()); foot.updateMatrixWorld(true); }
  }

  // IK 2 xương: đưa cổ tay (side 'l' | 'r') tới `target` (toạ độ thế giới); khuỷu tay giữ hướng như animation,
  // hoặc chĩa theo `pole` (hướng thế giới, vd. ra ngoài - xuống dưới) nếu có.
  // Gọi sau mixer.update (animation ghi đè lại mỗi khung hình).
  reach(side, target, pole = null) { const arm = this.arms?.[side]; if (arm) ik(arm, target, pole); }
}

function ik(chain, target, pole) {
  {
    const [up, lo, hand] = chain;
    const S = up.getWorldPosition(_S), E = lo.getWorldPosition(_E), W = hand.getWorldPosition(_W);
    const a = S.distanceTo(E), c = E.distanceTo(W);
    const dir = _D.subVectors(target, S);
    let d = dir.length();
    dir.multiplyScalar(1 / d);
    d = Math.min(Math.max(d, Math.abs(a - c) + 1e-3), a + c - 1e-3);
    const cosA = (a * a + d * d - c * c) / (2 * a * d), sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
    const pv = pole ? _P.copy(pole) : _P.subVectors(E, S);
    pv.addScaledVector(dir, -pv.dot(dir));
    if (pv.lengthSq() < 1e-8) pv.set(0, -1, 0);
    pv.normalize();
    const E2 = _E2.copy(S).addScaledVector(dir, a * cosA).addScaledVector(pv, a * sinA);
    turn(up, _A.subVectors(E, S).normalize(), _B.subVectors(E2, S).normalize());
    up.updateMatrixWorld(true);
    lo.getWorldPosition(E); hand.getWorldPosition(W);
    turn(lo, _A.subVectors(W, E).normalize(), _B.subVectors(target, E).normalize());
    lo.updateMatrixWorld(true);
  }
}

export const HEIGHT = 1.70;          // chiều cao người lái (m) — vừa cabin Mustang (trần thấp, ghế đã hạ)
const _S = new THREE.Vector3(), _E = new THREE.Vector3(), _W = new THREE.Vector3(), _D = new THREE.Vector3(), _P = new THREE.Vector3();
const _E2 = new THREE.Vector3(), _A = new THREE.Vector3(), _B = new THREE.Vector3();
const _q = new THREE.Quaternion(), _qw = new THREE.Quaternion(), _qp = new THREE.Quaternion();
// xoay xương để hướng `from` (thế giới) thành `to`
function turn(bone, from, to) {
  _q.setFromUnitVectors(from, to);
  bone.getWorldQuaternion(_qw);
  bone.parent.getWorldQuaternion(_qp);
  bone.quaternion.copy(_qp.invert().multiply(_q.multiply(_qw)));
}

// ---- quần áo vẽ lên thân người (màu + độ nhám + làm mờ vân cơ bắp ở chỗ có vải) ----
const SHIRT = new THREE.Color('#1c1c1f'), PANTS = new THREE.Color('#2f4366'), SHOES = new THREE.Color('#dedad2');
function dress(mesh, model, footShade) {
  const g = mesh.geometry;
  const si = g.attributes.skinIndex, sw = g.attributes.skinWeight, pos = g.attributes.position;
  if (!si || !sw) return;
  const bones = mesh.skeleton.bones;
  const pelvis = bones.find((b) => b.name === 'pelvis');
  const pelvisY = pelvis ? pelvis.getWorldPosition(new THREE.Vector3()).y : 0.9;
  const role = bones.map((b) => (/foot|ball/i.test(b.name) ? 3 : /thigh|calf/i.test(b.name) ? 2
    : /lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(b.name) ? 0 : /pelvis/i.test(b.name) ? 4 : 1));
  const out = new Float32Array(pos.count * 4), shoe = new Float32Array(pos.count);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    let best = 0, bw = -1;
    for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > bw) { bw = w; best = si.getComponent(i, k); } }
    let r = role[best];
    if (r === 4) { v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld); r = v.y < pelvisY + 0.09 ? 2 : 1; }
    const c = r === 1 ? SHIRT : r === 2 ? PANTS : r === 3 ? SHOES : null;
    if (c) { out[i * 4] = c.r; out[i * 4 + 1] = c.g; out[i * 4 + 2] = c.b; out[i * 4 + 3] = 1; }
    shoe[i] = r === 3 ? 1 : 0;
  }
  g.setAttribute('aGarment', new THREE.BufferAttribute(out, 4));
  g.setAttribute('aShoe', new THREE.BufferAttribute(shoe, 1));
  const m = mesh.material;
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => {
    prev?.call(m, sh, r);
    sh.uniforms.uFootShade = footShade;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aGarment;\nattribute float aShoe;\nvarying vec4 vGarment;\nvarying float vShoe;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvGarment = aGarment;\nvShoe = aShoe;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec4 vGarment;\nvarying float vShoe;\nuniform float uFootShade;')
      .replace('#include <map_fragment>', '#include <map_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vGarment.rgb * (0.9 + 0.1 * diffuseColor.r), vGarment.a);\ndiffuseColor.rgb *= 1.0 - 0.88 * uFootShade * vShoe;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);')
      .replace('mapN.xy *= normalScale;', 'mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);');
  };
  const prevKey = m.customProgramCacheKey?.bind(m);
  m.customProgramCacheKey = () => (prevKey ? prevKey() : '') + '|garment';
}
