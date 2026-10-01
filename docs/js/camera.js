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
    this._p = new THREE.Vector3();
    this._l = new THREE.Vector3();
    this._f = new THREE.Vector3();
    this._r = new THREE.Vector3();
  }

  get name() { return CAMERAS[this.mode].name; }

  setMode(i) {
    this.mode = i % CAMERAS.length;
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

    switch (id) {
      case 'chase':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 6.2)).setY(2.5 + dim.height * 0.4);
        l.copy(pos).addScaledVector(f, 7).setY(1.1);
        fov = 58 + sp * 10;
        break;
      case 'low':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 4.2)).setY(0.95);
        l.copy(pos).addScaledVector(f, 10).setY(1.0);
        fov = 68 + sp * 10;
        break;
      case 'bumper':
        p.copy(pos).addScaledVector(fc, dim.length * 0.5 + 0.25).setY(0.5);
        l.copy(p).addScaledVector(fc, 30).setY(1.0);
        rigid = true; fov = 74 + sp * 8;
        break;
      case 'cockpit': {
        const [ex, ey, ez] = dim.eye;
        p.copy(pos).addScaledVector(r, ex).addScaledVector(fc, -ez).setY(ey);
        l.copy(p).addScaledVector(fc, 30).setY(ey - 0.12);
        rigid = true; fov = 72 + sp * 8;
        break;
      }
      case 'orbit':
        this.orbit += dt * 0.2;
        p.set(pos.x + Math.cos(this.orbit) * 8.5, 2.2 + Math.sin(this.orbit * 0.7) * 0.8, pos.z + Math.sin(this.orbit) * 8.5);
        l.copy(pos).setY(0.8);
        fov = 48;
        break;
      case 'drone':
        p.copy(pos).addScaledVector(f, -15).setY(13);
        l.copy(pos).addScaledVector(f, 6).setY(0.5);
        follow = 3.5; fov = 56;
        break;
    }

    // làm mượt phần lệch so với xe (không làm mượt vị trí tuyệt đối để camera không tụt lại khi chạy nhanh)
    this.blend = Math.max(0, this.blend - dt);
    let kp = 1 - Math.exp(-dt * follow), kl = 1 - Math.exp(-dt * lookFollow);
    if (rigid) kp = kl = this.blend > 0 ? 1 - Math.exp(-dt * 9) : 1;
    if (this.first) kp = kl = 1;
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
