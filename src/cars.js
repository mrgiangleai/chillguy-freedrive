import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CARS } from './config.js';
import { glowTexture } from './textures.js';
import { screenPose } from './dashscreen.js';
import { withMist } from './mist.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export class Cars {
  constructor(scene) {
    this.root = new THREE.Group();   // vị trí + hướng trong thế giới
    this.tilt = new THREE.Group();   // nghiêng / nhún của thân xe
    this.root.add(this.tilt);
    scene.add(this.root);

    this.loader = new GLTFLoader();
    this.loader.setMeshoptDecoder(MeshoptDecoder);   // model đã nén meshopt + WebP để tải nhanh
    this.onProgress = null;
    this.prepare = null;
    this.envMap = null;             // async (group) => {} : biên dịch trước shader của xe mới
    this.list = [];
    this.cache = new Map();
    this.current = null;
    this.token = 0;
    this.time = 0;
    this.pitch = 0; this.roll = 0;
    this.lastSpeed = 0;
    this.dim = { length: 4.5, width: 1.9, height: 1.3 };

    // đèn pha + đèn hậu (glow)
    this.glowTex = glowTexture();
    this.lights = new THREE.Group();
    this.root.add(this.lights);
    this.spots = [0, 1].map(() => {
      // chùm rộng, mép rất mềm; suy giảm theo khoảng cách chậm (decay 0.55) => sát đầu xe không loá trắng, ánh sáng toả xa đều
      const s = new THREE.SpotLight(0xffe9cc, 0, 110, 0.8, 1.0, 0.55);
      this.lights.add(s, s.target);
      return s;
    });
    const mk = (color, size) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTex, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      sp.scale.setScalar(size);
      this.lights.add(sp);
      return sp;
    };
    this.headGlow = [mk(0xffeccc, 1.7), mk(0xffeccc, 1.7)];
    this.tailGlow = [mk(0xff2a1a, 1.0), mk(0xff2a1a, 1.0)];
    this.lampLevel = 0;
    this.brake = 0;

    // bóng mờ giả dưới gầm xe (để góc ngang / góc thấp thấy xe "đặt" trên đường)
    this.contact = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({
      alphaMap: contactShadowTexture(), color: 0x000000, transparent: true, opacity: 0.72, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6, fog: false,
    }));
    this.contact.position.y = 0.06;
    this.contact.renderOrder = 1;
    this.root.add(this.contact);

    // đèn trần cabin (luôn có trong cảnh để không phải dịch lại shader; chỉ sáng khi nhìn từ trong xe)
    this.cabin = new THREE.PointLight(0xfff2e0, 0, 2.6, 2);
    this.tilt.add(this.cabin);
    this.cabinLevel = 0;
  }

  // chỉ những xe có file thật mới được đưa vào danh sách (Mustang là tuỳ chọn)
  async probe() {
    const out = [];
    for (const def of CARS) {
      if (!def.optional) { out.push(def); continue; }
      try {
        const r = await fetch(def.file, { method: 'HEAD' });
        const type = r.headers.get('content-type') || '';
        if (r.ok && !type.includes('text/html')) out.push(def);
      } catch { /* không có file -> bỏ qua */ }
    }
    this.list = out;
    return out;
  }

  async select(index) {
    const def = this.list[index];
    const token = ++this.token;
    let entry = this.cache.get(def.id);
    if (!entry) {
      entry = await this._load(def);
      this.cache.set(def.id, entry);
    }
    if (token !== this.token) return false;            // đã chọn xe khác trong lúc tải
    if (this.prepare && !entry.ready) {                 // dịch sẵn shader ở luồng nền trước khi cho xe xuất hiện
      try { await this.prepare(entry.group); } catch (e) { console.warn('prepare', e); }
      entry.ready = true;
      if (token !== this.token) return false;
    }
    if (this.current) this.tilt.remove(this.current.group);
    this.tilt.add(entry.group);
    this.current = entry;
    this.dim = entry.dim;
    this.shield = entry.shield;
    this._placeLights(entry.dim);
    return true;
  }

  async _load(def) {
    const gltf = await this.loader.loadAsync(def.file, (e) => { if (this.onProgress && e.total) this.onProgress(e.loaded / e.total); });
    const model = gltf.scene;
    const holder = new THREE.Group();
    holder.add(model);
    const car = new THREE.Group();
    car.add(holder);

    if (def.hide) {
      const drop = [];
      model.traverse((o) => { if (def.hide.test(o.name || '')) drop.push(o); });
      drop.forEach((o) => o.removeFromParent());
    }
    model.rotation.x = def.rotX || 0;
    holder.updateMatrixWorld(true);
    let box = new THREE.Box3().setFromObject(holder, true);
    let size = box.getSize(new THREE.Vector3());
    // chiều dài xe phải nằm dọc trục Z; đầu xe hướng -Z
    if (size.x > size.z * 1.02) { model.rotation.y += Math.PI / 2; }
    if (def.flip) model.rotation.y += Math.PI;
    holder.updateMatrixWorld(true);
    box.setFromObject(holder, true);
    size = box.getSize(new THREE.Vector3());
    holder.scale.setScalar(def.length / size.z);
    holder.updateMatrixWorld(true);
    box.setFromObject(holder, true);
    const c = box.getCenter(new THREE.Vector3());
    holder.position.set(-c.x, -box.min.y, -c.z);
    car.updateMatrixWorld(true);
    box.setFromObject(car, true);
    const dim = { length: box.max.z - box.min.z, width: box.max.x - box.min.x, height: box.max.y - box.min.y };
    dim.eye = def.eye || [-dim.width * 0.2, Math.min(dim.height * 0.8, 1.15), 0];

    // tuỳ chọn: thay toàn bộ vật liệu bằng kim loại bóng nhẹ cơ bản (giữ màu / ảnh màu gốc, kính vẫn trong suốt)
    if (def.basicMetal) {
      model.traverse((o) => {
        if (!o.isMesh || Array.isArray(o.material)) return;
        const m = o.material;
        if (m.transmission > 0 || (m.transparent && m.opacity < 0.9)) return;
        o.material = new THREE.MeshStandardMaterial({
          name: m.name, color: m.color, map: m.map, side: m.side, ...def.basicMetal,
        });
        m.dispose();
      });
    }

    // vật liệu: bỏ transmission (tốn kém) -> kính trong suốt thường; bật đổ bóng
    const tailMats = [], glassMeshes = [];
    model.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      let glass = false;
      for (const m of mats) {
        if (m.transmission > 0) { m.transmission = 0; m.transparent = true; m.opacity = 0.32; m.depthWrite = false; glass = true; }
        if (m.transparent && m.opacity < 0.9) glass = true;
        if (glass && !m.userData.glass) glassReflect(m);
        if (def.doubleSide && !m.transparent) m.side = THREE.DoubleSide;   // model thiếu mặt trong (mui, cột A) => nhìn từ trong xe vẫn thấy
        if (def.mats && def.mats[m.name]) Object.assign(m, def.mats[m.name]);   // sửa vật liệu bị chuyển đổi sai
        if (/tail|brake|emissivered|rear.?light/i.test(m.name) && m.emissive) { m.emissive.set(0xff1a0a); tailMats.push(m); }
        this._env(m);
        withMist(m);
      }
      o.castShadow = !glass;
      o.receiveShadow = true;
      if (glass) glassMeshes.push(o);
    });

    const wheels = def.wheels ? this._wheels(car, def, dim) : [];
    const door = def.door ? this._door(car, def) : null;
    car.updateMatrixWorld(true);
    const shield = windshield(glassMeshes, dim);
    const wipers = wiperRig(car, model, shield);
    const screen = screenPose(car, dim);
    return { def, group: car, dim, wheels, door, tailMats, wipers, shield, screen, anim: null };
  }

  // môi trường phản chiếu riêng cho xe (có mặt đất tối), cập nhật mỗi lần bầu trời được chụp lại
  _env(m) {
    m.envMap = this.envMap;
    m.envMapIntensity = this.envMap ? 1 : 0.5;     // chưa có: dùng env chung (sáng gấp ~2 lần trời thật)
  }

  setEnvMap(tex) {
    this.envMap = tex;
    for (const e of this.cache.values()) {
      e.group.traverse((o) => {
        if (!o.isMesh) return;
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) this._env(m);
      });
    }
  }

  // cửa tài xế (node tách sẵn trong model): gắn vào bản lề ở mép trước, phía ngoài
  _door(car, def) {
    const nodes = [];
    car.traverse((o) => {
      if (o === car || !def.door.test(o.name || '')) return;
      for (let p = o.parent; p && p !== car; p = p.parent) if (def.door.test(p.name || '')) return;
      nodes.push(o);
    });
    if (!nodes.length) return null;
    car.updateMatrixWorld(true);
    const b = new THREE.Box3();
    for (const n of nodes) b.expandByObject(n, true);
    const pivot = new THREE.Object3D();
    pivot.position.set(b.min.x + 0.04, 0, b.min.z + 0.06);
    car.add(pivot);
    car.updateMatrixWorld(true);
    for (const n of nodes) pivot.attach(n);
    return { pivot, amount: 0 };
  }

  // 0 = đóng, 1 = mở hết (~60°, mép sau xoay ra ngoài)
  setDoor(a) {
    const d = this.current?.door;
    if (!d) return;
    d.amount = a;
    const e = a * a * (3 - 2 * a);
    d.pivot.rotation.y = -1.05 * e;
  }

  // bánh trước phía tài xế (cho cảnh cận bánh xe): toạ độ trong xe
  frontWheel(out) {
    const c = this.current;
    let best = null;
    for (const w of c?.wheels || []) if (!best || w.pivot.position.z < best.pivot.position.z) best = w;
    const d = this.dim;
    if (!best) return out.set(-d.width / 2, 0.33, -d.length * 0.32);
    return out.set(-d.width / 2 + 0.12, best.pivot.position.y, best.pivot.position.z);
  }

  // gom node bánh xe vào "pivot" đặt đúng tâm bánh để quay quanh trục X (trục bánh xe)
  _wheels(car, def, dim) {
    const nodes = [];
    car.traverse((o) => {
      if (o === car || !def.wheels.test(o.name || '')) return;
      for (let p = o.parent; p && p !== car; p = p.parent) if (def.wheels.test(p.name || '')) return;
      nodes.push(o);
    });
    const out = [];
    for (const n of nodes) {
      const b = new THREE.Box3().setFromObject(n, true);
      if (b.isEmpty()) continue;
      const s = b.getSize(new THREE.Vector3());
      const ctr = b.getCenter(new THREE.Vector3());
      const round = Math.abs(s.y - s.z) < 0.28 * Math.max(s.y, s.z);       // bánh tròn trong mặt phẳng YZ
      const ok = round && s.z < dim.length * 0.35 && s.y < dim.height * 0.95 && s.y > dim.height * 0.12 && ctr.y < dim.height * 0.5;
      if (!ok) continue;
      // tâm trục = đỉnh bánh trừ bán kính (lốp hay được dựng bẹt ở đáy => tâm khung bao bị lệch xuống, quay sẽ bị méo)
      const pivot = new THREE.Object3D();
      pivot.position.set(ctr.x, b.max.y - s.z / 2, ctr.z);
      car.add(pivot);
      car.updateMatrixWorld(true);
      pivot.attach(n);
      out.push({ pivot, radius: s.z / 2 });
    }
    return out;
  }

  _placeLights(d) {
    const x = d.width * 0.3, y = Math.min(0.7, d.height * 0.45);
    this.spots.forEach((s, i) => {
      const sx = i ? x : -x;
      s.position.set(sx, y, -d.length / 2 + 0.3);
      s.target.position.set(sx * 0.9, 0, -40);
    });
    this.headGlow.forEach((g, i) => g.position.set(i ? x : -x, y, -d.length / 2 - 0.05));
    this.tailGlow.forEach((g, i) => g.position.set(i ? x : -x, y + 0.05, d.length / 2 + 0.05));
    this.contact.scale.set(d.width * 1.12, 1, d.length * 1.06);
    this.cabin.position.set(d.eye[0] * 0.5, d.eye[1] + 0.05, d.eye[2] - 0.45);
  }

  setLights(level) { this.lampLevel = level; }

  // góc lưỡi gạt (rad, 0 = nằm nghỉ)
  setWiper(th) {
    if (!this.current || th === this.current.wiperTh) return;
    this.current.wiperTh = th;
    for (const set of this.current.wipers) set(th);
  }

  // st: { pos, yaw, speed, latVel }
  update(dt, st) {
    this.time += dt;
    this.root.position.copy(st.pos);
    this.root.rotation.set(st.pitch || 0, st.yaw, 0, 'YXZ');   // ngóc / chúi đầu theo dốc

    // nhún nhẹ khi tăng/giảm tốc & vào cua
    const acc = (st.speed - this.lastSpeed) / Math.max(dt, 1e-3);
    this.brakeAcc = acc;
    this.lastSpeed = st.speed;
    const k = 1 - Math.exp(-dt * 4);
    this.pitch += (clamp(acc * 0.004, -0.04, 0.04) - this.pitch) * k;
    this.roll += (clamp(-st.latVel * 0.012, -0.05, 0.05) - this.roll) * k;
    const f = clamp(st.speed / 20, 0, 1);
    this.tilt.rotation.set(this.pitch, 0, this.roll);
    this.tilt.position.y = (0.005 * Math.sin(this.time * 7.3) + 0.004 * Math.sin(this.time * 12.1)) * f;
    // đường đất: rung xóc nhẹ thêm (thân xe nảy + lắc ngang)
    const r = (st.rough || 0) * f;
    if (r > 0.001) {
      this.tilt.position.y += r * (0.014 * Math.sin(this.time * 19.3) + 0.01 * Math.sin(this.time * 31.7 + 1.1));
      this.tilt.rotation.z += r * (0.006 * Math.sin(this.time * 13.1) + 0.004 * Math.sin(this.time * 23.9));
      this.tilt.rotation.x += r * 0.004 * Math.sin(this.time * 17.7 + 0.4);
    }

    if (this.current) {
      for (const w of this.current.wheels) w.pivot.rotation.x -= (st.speed * dt) / w.radius;
    }

    const L = this.lampLevel;
    this.spots.forEach((s) => { s.intensity = 85 * L; });
    this.headGlow.forEach((g) => { g.material.opacity = 0.6 * L; });
    // đèn hậu: luôn sáng nhẹ, bật đèn thì sáng hẳn; giảm tốc thì sáng thêm (đèn phanh)
    const acc0 = this.brakeAcc || 0;
    this.brake += ((acc0 < -1.2 ? 1 : 0) - this.brake) * (1 - Math.exp(-dt * 8));
    const tail = 0.3 + 0.7 * L + 0.6 * this.brake;
    this.tailGlow.forEach((g) => { g.material.opacity = Math.min(1, 0.95 * tail); g.scale.setScalar(1.15 + 0.5 * tail); });
    for (const m of this.current?.tailMats || []) m.emissiveIntensity = 0.8 + 2.6 * tail;
    this.cabin.intensity = this.cabinLevel;
  }
}

// bóng gầm xe: hình chữ nhật bo góc nhoè (đậm ở giữa, mờ dần ra mép)
function contactShadowTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 256;
  const g = c.getContext('2d');
  g.filter = 'blur(14px)';
  g.fillStyle = '#fff';
  g.beginPath();
  g.roundRect ? g.roundRect(26, 30, 76, 196, 26) : g.rect(26, 30, 76, 196);
  g.fill();
  g.filter = 'blur(6px)';
  g.globalAlpha = 0.5;
  g.fillRect(36, 44, 56, 168);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

// kính: chỗ phản chiếu trời sáng thì kính "đục" hơn => thấy rõ bóng phản chiếu (Fresnel: nhìn xiên phản chiếu mạnh)
// kính lái: gom các tam giác kính phía trước mắt người lái, quay mặt về phía người lái (bỏ kính hông, kính sau, đèn)
// => mặt phẳng xấp xỉ (tâm, pháp tuyến hướng vào trong xe, trục ngang / dọc theo kính) + kích thước.
// Dùng cho giọt mưa + cần gạt mưa vẽ ở hậu kỳ khi ngồi trong xe. Toạ độ trong hệ của xe.
function windshield(meshes, dim) {
  const [ex, ey, ez] = dim.eye;
  const eye = new THREE.Vector3(ex, ey, ez);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3(), m = new THREE.Vector3();
  const N = new THREE.Vector3(), C = new THREE.Vector3(), pts = [];
  let area = 0;
  for (const o of meshes) {
    const pos = o.geometry.attributes.position, idx = o.geometry.index;
    const count = (idx ? idx.count : pos.count) / 3;
    for (let i = 0; i < count; i++) {
      const i0 = idx ? idx.getX(i * 3) : i * 3, i1 = idx ? idx.getX(i * 3 + 1) : i * 3 + 1, i2 = idx ? idx.getX(i * 3 + 2) : i * 3 + 2;
      a.fromBufferAttribute(pos, i0).applyMatrix4(o.matrixWorld);
      b.fromBufferAttribute(pos, i1).applyMatrix4(o.matrixWorld);
      c.fromBufferAttribute(pos, i2).applyMatrix4(o.matrixWorld);
      m.copy(a).add(b).add(c).multiplyScalar(1 / 3);
      if (m.z > ez - 0.25 || m.y < ey - 0.3) continue;
      n.subVectors(b, a).cross(c.clone().sub(a));
      const ar = n.length() / 2;
      if (ar < 1e-7) continue;
      n.normalize();
      if (n.dot(c.subVectors(eye, m)) < 0) n.negate();
      if (Math.abs(n.x) > 0.5 || n.z < 0.25 || n.y > -0.2) continue;   // kính lái nghiêng: pháp tuyến hướng ra sau + xuống
      N.addScaledVector(n, ar); C.addScaledVector(m, ar); area += ar;
      pts.push(a.clone(), b.clone(), m.clone());
    }
  }
  const sh = { center: new THREE.Vector3(), normal: new THREE.Vector3(), right: new THREE.Vector3(), up: new THREE.Vector3(), bounds: [0, 0, 0, 0] };
  if (area < 0.1) {      // không tìm thấy kính: mặt phẳng mặc định trước mắt
    sh.center.set(0, ey + 0.1, ez - 0.62);
    sh.normal.set(0, -0.6, 0.8);
    sh.bounds = [-dim.width * 0.38, dim.width * 0.38, -0.3, 0.3];
  } else {
    sh.center.copy(C).multiplyScalar(1 / area);
    sh.normal.copy(N).normalize();
  }
  sh.right.set(1, 0, 0).addScaledVector(sh.normal, -sh.normal.x).normalize();
  sh.up.crossVectors(sh.normal, sh.right);
  if (sh.up.y < 0) sh.up.negate();
  if (pts.length) {
    const B = [1e9, -1e9, 1e9, -1e9];
    for (const p of pts) {
      p.sub(sh.center);
      const u = p.dot(sh.right), v = p.dot(sh.up);
      B[0] = Math.min(B[0], u); B[1] = Math.max(B[1], u); B[2] = Math.min(B[2], v); B[3] = Math.max(B[3], v);
    }
    sh.bounds = B;
  }
  // cần gạt mặc định (xe không có cần gạt trong model): trục ở 2 mép dưới kính, lúc nghỉ nằm ngang hướng vào giữa.
  // mỗi cần: trục (u, v) trên kính, góc lúc nghỉ, chiều quay (+1 = ngược chiều kim đồng hồ khi nhìn từ trong xe), bán kính lưỡi gạt
  const hw = (sh.bounds[1] - sh.bounds[0]) / 2, mid = (sh.bounds[0] + sh.bounds[1]) / 2, v0 = sh.bounds[2] + 0.03;
  sh.wipers = [
    { u: mid - hw * 0.76, v: v0, rest: 0, sign: 1, r0: hw * 0.1, r1: hw * 0.68 },
    { u: mid + hw * 0.76, v: v0, rest: Math.PI, sign: -1, r0: hw * 0.1, r1: hw * 0.68 },
  ];
  sh.sweep = 1.62;                              // góc quét (rad)
  return sh;
}

// cần gạt 3D quay theo góc lưỡi gạt (cùng trục / góc với lớp nước trên kính ở hậu kỳ).
// Model có cần gạt (WiperBladeArm*: cần + lưỡi): tìm trục quay ở đầu cần xa lưỡi nhất, quay quanh pháp tuyến kính,
// và cập nhật sh.wipers cho đúng cần thật. Không có: dựng cần gạt đơn giản theo sh.wipers mặc định.
function wiperRig(car, model, sh) {
  const arms = [];
  model.traverse((o) => { if (/^WiperBladeArm\d*$/i.test(o.name) && !o.isMesh) arms.push(o); });
  const rig = [];
  const N = sh.normal;
  if (arms.length) {
    const found = [];
    for (const arm of arms) {
      const armPts = [], bladePts = [];
      arm.children.forEach((c) => c.traverse((o) => {
        if (!o.isMesh) return;
        const pos = o.geometry.attributes.position, list = c.isMesh ? armPts : bladePts;
        for (let i = 0; i < pos.count; i++) list.push(new THREE.Vector3().fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld));
      }));
      if (!armPts.length || !bladePts.length) continue;
      const bc = bladePts.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / bladePts.length);
      let far = armPts[0];
      for (const p of armPts) if (p.distanceToSquared(bc) > far.distanceToSquared(bc)) far = p;
      const near = armPts.filter((p) => p.distanceTo(far) < 0.03);
      const P = near.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / near.length);
      const rel = P.clone().sub(sh.center), u = rel.dot(sh.right), v = rel.dot(sh.up);
      const bd = bc.clone().sub(P), rest = Math.atan2(bd.dot(sh.up), bd.dot(sh.right));
      const dir = new THREE.Vector2(Math.cos(rest), Math.sin(rest));
      let r0 = 1e9, r1 = 0;
      for (const p of bladePts) {
        const d = p.clone().sub(P), a = d.dot(sh.right) * dir.x + d.dot(sh.up) * dir.y;
        r0 = Math.min(r0, a); r1 = Math.max(r1, a);
      }
      const sign = Math.cos(rest) >= 0 ? 1 : -1;
      arm.updateMatrixWorld(true);
      const restM = arm.matrixWorld.clone(), parentInv = arm.parent.matrixWorld.clone().invert();
      arm.matrixAutoUpdate = false;
      const T = new THREE.Matrix4(), R = new THREE.Matrix4(), T2 = new THREE.Matrix4().makeTranslation(-P.x, -P.y, -P.z);
      T.makeTranslation(P.x, P.y, P.z);
      rig.push((th) => {
        R.makeRotationAxis(N, sign * th);
        arm.matrix.copy(parentInv).multiply(T).multiply(R).multiply(T2).multiply(restM);
        arm.matrixWorldNeedsUpdate = true;
      });
      found.push({ u, v, rest, sign, r0: Math.max(0, r0), r1 });
    }
    if (found.length) {
      found.sort((a, b) => a.u - b.u);
      while (found.length < 2) found.push(found[0]);
      sh.wipers = found.slice(0, 2);
    }
  }
  if (!rig.length) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.55, metalness: 0.4 });
    const basis = new THREE.Matrix4().makeBasis(sh.right, sh.up, N);
    for (const w of sh.wipers) {
      const g = new THREE.Group();
      g.position.copy(sh.center).addScaledVector(sh.right, w.u).addScaledVector(sh.up, w.v).addScaledVector(N, -0.02);
      g.quaternion.setFromRotationMatrix(basis);
      const spin = new THREE.Group();
      g.add(spin);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(w.r1 * 0.97, 0.008, 0.008), mat);
      arm.position.set(w.r1 * 0.485, 0, -0.014);
      const blade = new THREE.Mesh(new THREE.BoxGeometry(w.r1 - w.r0, 0.012, 0.012), mat);
      blade.position.set((w.r0 + w.r1) / 2, 0, -0.004);
      spin.add(arm, blade);
      spin.rotation.z = w.rest;
      car.add(g);
      rig.push((th) => { spin.rotation.z = w.rest + w.sign * th; });
    }
  }
  return rig;
}

function glassReflect(m) {
  m.userData.glass = true;
  m.metalness = 0;
  m.roughness = Math.min(m.roughness, 0.04);
  m.depthWrite = false;
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`);
  };
  m.customProgramCacheKey = () => 'glass-reflect';
}
