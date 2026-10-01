import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CARS } from './config.js';
import { glowTexture } from './textures.js';

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

    // vật liệu: bỏ transmission (tốn kém) -> kính trong suốt thường; bật đổ bóng
    model.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      let glass = false;
      for (const m of mats) {
        if (m.transmission > 0) { m.transmission = 0; m.transparent = true; m.opacity = 0.32; m.depthWrite = false; glass = true; }
        if (m.transparent && m.opacity < 0.9) glass = true;
        m.envMapIntensity = 1;
      }
      o.castShadow = !glass;
      o.receiveShadow = true;
    });

    const wheels = def.wheels ? this._wheels(car, def, dim) : [];
    return { def, group: car, dim, wheels, anim: null };
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
      const pivot = new THREE.Object3D();
      pivot.position.copy(ctr);
      car.add(pivot);
      car.updateMatrixWorld(true);
      pivot.attach(n);
      out.push({ pivot, radius: s.y / 2 });
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

    if (this.current) {
      for (const w of this.current.wheels) w.pivot.rotation.x -= (st.speed * dt) / w.radius;
    }

    const L = this.lampLevel;
    this.spots.forEach((s) => { s.intensity = 1800 * L; });
    this.headGlow.forEach((g) => { g.material.opacity = 0.9 * L; });
    this.tailGlow.forEach((g) => { g.material.opacity = 0.85 * L; });
  }
}
