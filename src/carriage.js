import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { ROAD } from './road.js';
import { withMist } from './mist.js';
import { softGlowTexture } from './textures.js';

// Xe ngựa cổ tích bay lơ lửng bên phải đường, cao 3 m trên mặt đường, bay ngược chiều về phía xe người chơi
// (ngựa phi theo animation của model, bồng bềnh lên xuống, rắc bụi sao vàng phía sau).
// Cứ 15–30 giây xuất hiện một chiếc phía trước (tối đa 2 chiếc cùng lúc). Model tải ngầm sau khi vào game.
const FILE = 'assets/models/carriage.glb';
const HEIGHT = 3;                      // m trên mặt đường
const SIDE = ROAD.halfWidth + 3;       // lệch sang phải tim đường (ngoài lề / hộ lan)
const GAP_MIN = 15, GAP_MAX = 30;      // giây giữa hai lần xuất hiện
const MAX_ACTIVE = 2;
const AHEAD = 260;                     // xuất hiện phía trước (m), thêm ngẫu nhiên 0–80 m

export class Carriages {
  constructor(scene, road, loader) {
    this.scene = scene; this.road = road; this.loader = loader;
    this.proto = null; this.clip = null; this.loading = false;
    this.wait = 3;                       // vào game vài giây rồi mới tải
    this.timer = 4;                      // chiếc đầu tiên xuất hiện sớm để thấy ngay
    this.active = []; this.pool = [];
    this._p = {}; this._q = {};
    this.sparks = new Sparks(scene);
  }

  async _load() {
    this.loading = true;
    try {
      const gltf = await this.loader.loadAsync(FILE);
      const model = gltf.scene;
      model.traverse((o) => {
        if (!o.isMesh) return;
        // vật liệu gốc để BLEND => ngựa / xe tự che sai thứ tự. Đổi sang cắt alpha (bờm, đuôi, mây bụi vẫn có viền tóc)
        const m = o.material;
        m.transparent = false; m.depthWrite = true; m.alphaTest = 0.4;
        withMist(m);
        o.castShadow = true; o.frustumCulled = false;      // mesh skinned: khung bao gốc không theo animation
      });
      // model hướng đầu ngựa về +Z => xoay 180° cho đầu hướng -Z (như xe); căn giữa, bánh xe chạm y = 0
      model.rotation.y = Math.PI;
      model.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(model, true), c = box.getCenter(new THREE.Vector3());
      model.position.set(-c.x, -box.min.y, -c.z);
      this.proto = model;
      this.clip = gltf.animations[0] || null;
    } catch (e) { console.warn('carriage', e); }
  }

  _make() {
    const root = new THREE.Group(), body = new THREE.Group();
    root.add(body);
    body.add(cloneSkinned(this.proto));
    const mixer = new THREE.AnimationMixer(body);
    if (this.clip) mixer.clipAction(this.clip).play();
    this.scene.add(root);
    return { root, body, mixer, s: 0, v: 0, ph: 0, sparkT: 0 };
  }

  // s: quãng đường xe người chơi; light: độ sáng môi trường 0..1 (bụi sao sáng hơn ban đêm)
  update(dt, s, light = 1) {
    if (!this.proto) {
      if (!this.loading && (this.wait -= dt) <= 0) this._load();
      this.sparks.update(dt, light);
      return;
    }
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN);
      if (this.active.length < MAX_ACTIVE) {
        const c = this.pool.pop() || this._make();
        c.s = s + AHEAD + Math.random() * 80;
        c.v = 9 + Math.random() * 4;                       // 32–47 km/h
        c.ph = Math.random() * 6.28;
        c.mixer.timeScale = c.v / 11;                      // nhịp phi theo tốc độ bay
        c.root.visible = true;
        this.active.push(c);
      }
    }
    const p = this._p, q = this._q;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const c = this.active[i];
      c.s -= c.v * dt;                                     // bay ngược chiều, về phía xe người chơi
      if (c.s < s - 70 || c.s > s + 700) { c.root.visible = false; this.active.splice(i, 1); this.pool.push(c); continue; }
      c.ph += dt;
      this.road.at(c.s, p);
      const yA = this.road.at(c.s + 3, q).y, yB = this.road.at(c.s - 3, q).y;
      const bob = Math.sin(c.ph * 1.3) * 0.35 + Math.sin(c.ph * 0.47) * 0.2;   // bồng bềnh
      const sway = Math.sin(c.ph * 0.6) * 0.6;
      const d = SIDE + sway;
      c.root.position.set(p.x + Math.cos(p.th) * d, p.y + HEIGHT + bob, p.z - Math.sin(p.th) * d);
      // đầu ngựa hướng về phía xe người chơi (ngược chiều tăng s), ngóc lên / chúi xuống theo nhịp bồng bềnh và dốc đường
      const pitch = Math.atan2(yB - yA, 6) + Math.cos(c.ph * 1.3) * 0.06;
      c.root.rotation.set(pitch, p.th + Math.PI + Math.cos(c.ph * 0.6) * 0.05, Math.sin(c.ph * 0.9) * 0.04, 'YXZ');
      c.mixer.update(dt);
      // bụi sao rơi lại phía sau bánh xe
      c.sparkT += dt * 60;
      c.root.updateMatrixWorld();
      while (c.sparkT >= 1) {
        c.sparkT -= 1;
        const b = this.sparks.tmp.set((Math.random() - 0.5) * 2.2, 0.2 + Math.random() * 0.8, 1.2 + Math.random() * 1.5);
        c.root.localToWorld(b);
        this.sparks.emit(b);
      }
    }
    this.sparks.update(dt, light);
  }
}

// hạt bụi sao vàng: trôi chậm, rơi nhẹ, nhấp nháy rồi tắt
class Sparks {
  constructor(scene) {
    const N = this.N = 400;
    this.pos = new Float32Array(N * 3); this.col = new Float32Array(N * 4); this.vel = new Float32Array(N * 3);
    this.life = new Float32Array(N).fill(1); this.max = new Float32Array(N).fill(1); this.seed = new Float32Array(N);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.28, map: softGlowTexture(), transparent: true, depthWrite: false,
      vertexColors: true, blending: THREE.AdditiveBlending, toneMapped: false }));
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.next = 0; this.alive = 0;
    this.tmp = new THREE.Vector3();
  }
  emit(p) {
    const i = this.next; this.next = (i + 1) % this.N;
    this.pos.set([p.x, p.y, p.z], i * 3);
    this.vel.set([(Math.random() - 0.5) * 0.6, -0.2 - Math.random() * 0.5, (Math.random() - 0.5) * 0.6], i * 3);
    this.life[i] = 0; this.max[i] = 0.8 + Math.random() * 1.2; this.seed[i] = Math.random() * 30; this.alive = 2;
  }
  update(dt, light) {
    if (!this.alive) return;
    let any = false;
    const k = 0.9 + 1.6 * (1 - light);                       // ban đêm lấp lánh rõ hơn
    for (let i = 0; i < this.N; i++) {
      const j = i * 3;
      if (this.life[i] < this.max[i]) {
        this.life[i] += dt; any = true;
        this.pos[j] += this.vel[j] * dt; this.pos[j + 1] += this.vel[j + 1] * dt; this.pos[j + 2] += this.vel[j + 2] * dt;
      }
      const f = Math.max(0, 1 - this.life[i] / this.max[i]);
      const tw = 0.6 + 0.4 * Math.sin(this.seed[i] + this.life[i] * 18);
      this.col.set([1.0 * k, 0.82 * k, 0.45 * k, f * tw], i * 4);
    }
    if (!any) this.alive--;
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }
}
