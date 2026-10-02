import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CARS } from './config.js';
import { glowTexture } from './textures.js';
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
      const s = new THREE.SpotLight(0xfff1d8, 0, 110, 0.62, 0.7, 1.1);
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
    this.headGlow = [mk(0xfff0d0, 1.0), mk(0xfff0d0, 1.0)];
    this.tailGlow = [mk(0xff2a1a, 1.0), mk(0xff2a1a, 1.0)];
    this.lampLevel = 0;
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
    model.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      let glass = false;
      for (const m of mats) {
        if (m.transmission > 0) { m.transmission = 0; m.transparent = true; m.opacity = 0.32; m.depthWrite = false; glass = true; }
        if (m.transparent && m.opacity < 0.9) glass = true;
        if (def.doubleSide && !m.transparent) m.side = THREE.DoubleSide;   // model thiếu mặt trong (mui, cột A) => nhìn từ trong xe vẫn thấy
        if (def.mats && def.mats[m.name]) Object.assign(m, def.mats[m.name]);   // sửa vật liệu bị chuyển đổi sai
        this._env(m);
        withMist(m);
      }
      o.castShadow = !glass;
      o.receiveShadow = true;
    });

    const wheels = def.wheels ? this._wheels(car, def, dim) : [];
    const door = def.door ? this._door(car, def) : null;
    return { def, group: car, dim, wheels, door, anim: null };
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
      s.target.position.set(sx * 0.6, 0, -34);
    });
    this.headGlow.forEach((g, i) => g.position.set(i ? x : -x, y, -d.length / 2 - 0.05));
    this.tailGlow.forEach((g, i) => g.position.set(i ? x : -x, y + 0.05, d.length / 2 + 0.05));
  }

  setLights(level) { this.lampLevel = level; }

  // st: { pos, yaw, speed, latVel }
  update(dt, st) {
    this.time += dt;
    this.root.position.copy(st.pos);
    this.root.rotation.set(st.pitch || 0, st.yaw, 0, 'YXZ');   // ngóc / chúi đầu theo dốc

    // nhún nhẹ khi tăng/giảm tốc & vào cua
    const acc = (st.speed - this.lastSpeed) / Math.max(dt, 1e-3);
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
    this.spots.forEach((s) => { s.intensity = 1800 * L; });
    this.headGlow.forEach((g) => { g.material.opacity = 0.9 * L; });
    this.tailGlow.forEach((g) => { g.material.opacity = 0.85 * L; });
  }
}
