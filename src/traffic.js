import * as THREE from 'three';
import { CARS } from './config.js';

// Xe chạy ngược chiều: thỉnh thoảng (trung bình ~40 s một chiếc, tối đa 2 chiếc cùng lúc) xuất hiện xa phía trước
// ở làn bên kia rồi chạy ngang qua. Model lấy từ các xe có sẵn (khác xe đang lái), tải ngầm sau khi vào game.
// Đi đúng làn đối diện với làn xe mình đang chạy (mình chuyển làn thì xe kia né sang làn còn lại).
// Ban đêm: đèn pha / đèn hậu (đốm sáng) + vệt sáng đèn pha trên mặt đường (không dùng đèn thật cho nhẹ).
const MAX_ACTIVE = 2;
const SPAWN_AHEAD = 430;
const LANE = 1.8;                     // xe ngược chiều chạy hơi lệch vào giữa đường (như xe mình)

function poolTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 112, 4, 32, 96, 100);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.45, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 128);
  return new THREE.CanvasTexture(c);
}

export class Traffic {
  constructor(scene, cars) {
    this.scene = scene;
    this.cars = cars;
    this.pool = [];            // xe đã tải: { root, model, wheels, dim, busy }
    this.active = [];
    this.timer = 12 + Math.random() * 20;
    this.loading = false;
    this.wait = 6;              // chờ vài giây sau khi vào game rồi mới tải ngầm
    this.poolTex = poolTexture();
    this._p = {}; this._q = {};
  }

  async _load(excludeId) {
    this.loading = true;
    const defs = CARS.filter((d) => d.id !== excludeId).sort(() => Math.random() - 0.5).slice(0, 2);
    for (const def of defs) {
      try {
        const entry = await this.cars._load(def);
        if (this.cars.prepare) { try { await this.cars.prepare(entry.group); } catch { /* bỏ qua */ } }
        this.pool.push(this._vehicle(entry));
      } catch (e) { console.warn('traffic', def.id, e); }
    }
  }

  _vehicle(entry) {
    const root = new THREE.Group();
    root.visible = false;
    root.add(entry.group);
    const d = entry.dim, x = d.width * 0.3, y = Math.min(0.7, d.height * 0.45);
    const sprite = (color, size) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.cars.softTex, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      sp.scale.set(size * 1.35, size * 0.7, 1);                  // quầng mềm, dẹt ngang (như đèn xe mình)
      root.add(sp);
      return sp;
    };
    const heads = [-1, 1].map((k) => { const s = sprite(0xffb560, 3.0); s.position.set(k * x, y, -d.length / 2 - 0.05); return s; });
    const tails = [-1, 1].map((k) => { const s = sprite(0xff2412, 1.6); s.position.set(k * x, y + 0.05, d.length / 2 + 0.05); return s; });
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 11).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({
      map: this.poolTex, color: 0xffe2b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    pool.position.set(0, 0.06, -d.length / 2 - 5.2);
    root.add(pool);
    this.scene.add(root);
    return { root, wheels: entry.wheels, dim: d, heads, tails, pool, busy: false, s: 0, v: 0, d: 0 };
  }

  // s: quãng đường xe mình; playerD: lệch ngang của xe mình (+ = bên phải); lamps 0..1; excludeId: xe đang lái
  update(dt, s, playerD, road, lamps, excludeId) {
    if (!this.pool.length) {
      if (!this.loading && (this.wait -= dt) <= 0) this._load(excludeId);
      return;
    }
    const want = playerD >= 0 ? -LANE : LANE;                  // làn đối diện với làn mình
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = 15 + Math.random() * 55;                     // lần sau: 15–70 s (thưa thớt, ngẫu nhiên)
      const free = this.pool.filter((v) => !v.busy);
      if (free.length && this.active.length < MAX_ACTIVE) {
        const v = free[Math.floor(Math.random() * free.length)];
        v.busy = true; v.s = s + SPAWN_AHEAD + Math.random() * 80; v.v = 12 + Math.random() * 8; v.d = want;
        v.root.visible = true;
        this.active.push(v);
      }
    }
    const p = this._p, q = this._q;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const v = this.active[i];
      v.s -= v.v * dt;
      v.d += Math.sign(want - v.d) * Math.min(Math.abs(want - v.d), 2.2 * dt);   // né sang làn trống
      if (v.s < s - 90) { v.busy = false; v.root.visible = false; this.active.splice(i, 1); continue; }
      road.at(v.s, p);
      const yA = road.at(v.s + 2.5, q).y, yB = road.at(v.s - 2.5, q).y;
      v.root.position.set(p.x + Math.cos(p.th) * v.d, p.y, p.z - Math.sin(p.th) * v.d);
      v.root.rotation.set(Math.atan2(yB - yA, 5), p.th + Math.PI, 0, 'YXZ');            // quay đầu ngược chiều đường
      for (const w of v.wheels) w.pivot.rotation.x -= (v.v * dt) / w.radius;
      const L = lamps;
      for (const h of v.heads) h.material.opacity = L;
      for (const t of v.tails) t.material.opacity = 0.25 + 0.6 * L;
      v.pool.material.opacity = 0.5 * L;
      v.pool.visible = L > 0.02;
    }
  }
}
