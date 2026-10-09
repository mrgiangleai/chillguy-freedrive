import * as THREE from 'three';

// Hiệu ứng va chạm: rung camera mạnh 1 cái (tắt dần ~0.6 s) + khói bốc lên từ nắp capo khi đâm mạnh.
// Khói: kho sprite cố định (không tạo / huỷ vật liệu giữa chừng), mỗi hạt bay lên, nở to, mờ dần; nguồn khói gắn theo
// một điểm trong hệ xe (getPos(out) trả toạ độ thế giới) nên vẫn đúng chỗ nếu xe còn trôi.
const N = 48;

export class CrashFx {
  constructor(scene, tex) {
    this.parts = Array.from({ length: N }, () => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0x9a9a9a, transparent: true, opacity: 0, depthWrite: false, fog: true }));
      sp.visible = false;
      scene.add(sp);
      return { sp, life: 0, max: 1, vel: new THREE.Vector3() };
    });
    this.sources = [];          // { getPos, t, rate, acc }
    this.shake = 0;             // biên độ rung camera (m)
    this._v = new THREE.Vector3();
  }

  // power 0..1: độ mạnh cú va chạm; smoke: có bốc khói không; getPos: nguồn khói (đầu xe)
  hit(power, getPos, smoke) {
    this.shake = Math.max(this.shake, 0.05 + 0.25 * power);
    if (smoke && getPos) this.sources.push({ getPos, t: 4 + 6 * power, rate: 9 + 10 * power, acc: 0, dark: power });
  }

  clear() { this.sources.length = 0; this.shake = 0; for (const p of this.parts) { p.life = 0; p.sp.visible = false; } }

  update(dt, camera) {
    // rung camera: lệch ngẫu nhiên giảm dần
    if (this.shake > 0.002) {
      const k = this.shake;
      camera.position.x += (Math.random() - 0.5) * 2 * k;
      camera.position.y += (Math.random() - 0.5) * 1.4 * k;
      camera.position.z += (Math.random() - 0.5) * 2 * k;
      camera.rotateZ((Math.random() - 0.5) * k * 0.25);
      this.shake *= Math.exp(-dt * 7);
    } else this.shake = 0;
    // phát khói
    for (let i = this.sources.length - 1; i >= 0; i--) {
      const s = this.sources[i];
      s.t -= dt;
      if (s.t <= 0) { this.sources.splice(i, 1); continue; }
      s.acc += dt * s.rate * Math.min(1, s.t / 2);
      while (s.acc >= 1) {
        s.acc -= 1;
        const p = this.parts.find((q) => q.life <= 0);
        if (!p) break;
        s.getPos(this._v);
        p.sp.position.set(this._v.x + (Math.random() - 0.5) * 0.6, this._v.y, this._v.z + (Math.random() - 0.5) * 0.6);
        p.vel.set((Math.random() - 0.5) * 0.4, 0.9 + Math.random() * 0.7, (Math.random() - 0.5) * 0.4);
        p.max = p.life = 2.2 + Math.random() * 1.6;
        p.sp.material.color.setScalar(0.62 - 0.32 * s.dark + Math.random() * 0.1);
        p.sp.visible = true;
      }
    }
    // hạt khói: bay lên, chậm dần, nở to, mờ dần
    for (const p of this.parts) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.sp.visible = false; continue; }
      const a = 1 - p.life / p.max;
      p.sp.position.addScaledVector(p.vel, dt);
      p.vel.multiplyScalar(Math.exp(-dt * 0.6));
      p.vel.x += 0.25 * dt;                                         // gió nhẹ
      const sc = 0.6 + 2.6 * a;
      p.sp.scale.set(sc, sc, 1);
      p.sp.material.opacity = 0.5 * Math.min(1, a * 6) * (1 - a);
    }
  }
}
