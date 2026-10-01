import * as THREE from 'three';
import { CAMERAS } from './config.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerpAngle = (a, b, t) => {
  let d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return a + d * t;
};

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 0;
    this.yaw = 0;
    this.orbit = 0.9;
    this.relP = new THREE.Vector3();   // vị trí camera so với xe (được làm mượt)
    this.relL = new THREE.Vector3();   // điểm nhìn so với xe (được làm mượt)
    this.fov = 60;
    this.first = true;
    this.blend = 0;                    // thời gian chuyển cảnh sau khi đổi camera
    this.cine = 0;                     // 0..1: chế độ cinematic (ống kính tele hơn, camera xa hơn)
    this.intro = -1;                   // >=0: đang chạy cảnh mở đầu (giây)
    this._p = new THREE.Vector3();
    this._l = new THREE.Vector3();
    this._f = new THREE.Vector3();
    this._r = new THREE.Vector3();
  }

  get name() { return CAMERAS[this.mode].name; }

  // cảnh mở đầu: camera lia vòng từ thấp phía trước-bên phải ra sau xe
  startIntro() { this.intro = 0; this.first = true; }

  setMode(i) {
    this.mode = i % CAMERAS.length;
    this.intro = -1;
    this.blend = 0.7;
    const rigid = ['bumper', 'cockpit'].includes(CAMERAS[this.mode].id);
    this.camera.near = rigid ? 0.1 : 0.3;
    this.camera.updateProjectionMatrix();
  }

  // car: { pos, yaw, speed, dim }
  update(dt, car) {
    const id = CAMERAS[this.mode].id;
    const { pos, speed, dim } = car;
    this.yaw = this.first ? car.yaw : lerpAngle(this.yaw, car.yaw, 1 - Math.exp(-dt * 3));
    const fwd = (yaw, v) => v.set(-Math.sin(yaw), 0, -Math.cos(yaw));
    const rgt = (yaw, v) => v.set(Math.cos(yaw), 0, -Math.sin(yaw));
    const f = fwd(this.yaw, this._f), fc = new THREE.Vector3(-Math.sin(car.yaw), 0, -Math.cos(car.yaw));
    const r = rgt(car.yaw, this._r);
    const p = this._p, l = this._l;
    let follow = 5, lookFollow = 7, fov = 60, rigid = false;
    const sp = clamp(speed / 45, 0, 1);
    const fxv = car.fx || 0;                    // hiệu ứng tốc độ cao
    const ci = this.cine;

    switch (id) {
      case 'chase':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 6.2 + 1.4 * fxv + 1.8 * ci)).setY(2.3 + dim.height * 0.4);
        l.copy(pos).addScaledVector(f, 13).setY(1.75);
        fov = 58 + sp * 4 + fxv * 12 - 7 * ci;
        break;
      case 'low':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 4.2)).setY(0.95);
        l.copy(pos).addScaledVector(f, 10).setY(1.0);
        fov = 68 + sp * 4 + fxv * 12;
        break;
      case 'bumper':
        p.copy(pos).addScaledVector(fc, dim.length * 0.5 + 0.25).setY(0.5);
        l.copy(p).addScaledVector(fc, 30).setY(1.0);
        rigid = true; fov = 74 + sp * 3 + fxv * 10;
        break;
      case 'cockpit': {
        const [ex, ey, ez] = dim.eye;
        p.copy(pos).addScaledVector(r, ex).addScaledVector(fc, -ez).setY(ey);
        l.copy(p).addScaledVector(fc, 30).setY(ey - 0.12);
        rigid = true; fov = 72 + sp * 3 + fxv * 10;
        break;
      }
      case 'orbit':
        this.orbit += dt * 0.2;
        p.set(pos.x + Math.cos(this.orbit) * 8.5, 2.2 + Math.sin(this.orbit * 0.7) * 0.8, pos.z + Math.sin(this.orbit) * 8.5);
        l.copy(pos).setY(0.8);
        fov = 48 + fxv * 8;
        break;
      case 'drone':
        p.copy(pos).addScaledVector(f, -15).setY(13);
        l.copy(pos).addScaledVector(f, 6).setY(0.5);
        follow = 3.5; fov = 56 + fxv * 10;
        break;
    }

    // cảnh mở đầu: lia vòng quanh xe (chỉ khi đang ở camera sau xe)
    let intro = false;
    if (this.intro >= 0 && id === 'chase') {
      this.intro += dt;
      const t = Math.min(1, this.intro / 6.5);
      const e = t * t * (3 - 2 * t);
      if (t >= 1) this.intro = -1;
      else {
        intro = true;
        const backDist = dim.length * 0.5 + 6.2 + 1.8 * ci;
        const ang = 0.5 + (Math.PI - 0.5) * e;
        const rad = 6.2 + (backDist - 6.2) * e;
        const hgt = 0.65 + (2.3 + dim.height * 0.4 - 0.65) * e;
        const chaseL = l.clone();
        // lia ở phía tim đường (side), bán kính ngang tối đa 3.4 m để camera luôn nằm trên mặt đường, không chui vào cỏ
        p.copy(pos).addScaledVector(fc, Math.cos(ang) * rad).addScaledVector(r, (car.side || 1) * Math.sin(ang) * Math.min(rad, 3.4)).setY(hgt);
        l.copy(pos).setY(0.7).lerp(chaseL, e);
        fov = 36 + (fov - 36) * e;
      }
    } else if (this.intro >= 0) this.intro = -1;

    // làm mượt phần lệch so với xe (không làm mượt vị trí tuyệt đối để camera không tụt lại khi chạy nhanh)
    this.blend = Math.max(0, this.blend - dt);
    let kp = 1 - Math.exp(-dt * follow), kl = 1 - Math.exp(-dt * lookFollow);
    if (rigid) kp = kl = this.blend > 0 ? 1 - Math.exp(-dt * 9) : 1;
    if (this.first || intro) kp = kl = 1;
    this.relP.lerp(p.sub(pos), kp);
    this.relL.lerp(l.sub(pos), kl);
    this.fov += (fov - this.fov) * (this.first ? 1 : 1 - Math.exp(-dt * 3));
    this.first = false;

    this.camera.position.copy(pos).add(this.relP);
    this._l.copy(pos).add(this.relL);
    this.camera.lookAt(this._l);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
