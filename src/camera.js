import * as THREE from 'three';
import { CAMERAS } from './config.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const FOCAL_MIN = 16, FOCAL_MAX = 35;
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
    this._cp = new THREE.Vector3();
    this._cl = new THREE.Vector3();
    this._dl = new THREE.Vector3();
    this._eye = new THREE.Vector3();
    this.eyeAt = null;               // (out) => true nếu có vị trí mắt người lái thật (toạ độ thế giới)
    // nhìn xung quanh khi bấm giữ + rê (radian); thả ra vẫn giữ nguyên góc đã xoay (đổi camera thì về 0)
    this.look = { yaw: 0, pitch: 0, hold: false, idle: 0 };
    this.sideSign = 0;                 // camera bên hông: -1 trái / +1 phải (0 = chưa chọn)
    this.sidePref = 0;                 // ưu tiên bên (đường núi: phía thung lũng)
    // ống kính (quy đổi full-frame 36x24 mm): mặc định 28 mm, zoom trong khoảng 16–35 mm
    this.focal = 28;                   // tiêu cự đặt (mm)
    this.focalS = 28;                  // đã làm mượt
    this.focalEff = 28;                // tiêu cự thực tế khung hình này (Fast drive mở rộng góc)
  }

  // f > 1: zoom ra (góc rộng hơn), f < 1: zoom vào
  zoomBy(f) { this.focal = clamp(this.focal / f, FOCAL_MIN, FOCAL_MAX); }

  // góc nhìn dọc (độ) của ống kính tiêu cự f mm: cạnh dài khung hình ứng với cạnh 36 mm của cảm biến
  fovFor(f) {
    const half = Math.atan(18 / f), aspect = this.camera.aspect || 1.6;
    return ((aspect >= 1 ? 2 * Math.atan(Math.tan(half) / aspect) : 2 * half) * 180) / Math.PI;
  }

  // dx > 0: rê sang phải, dy > 0: rê xuống (kiểu "nắm kéo cảnh": cảnh chạy theo tay)
  lookBy(dx, dy) {
    const lk = this.look;
    lk.yaw = Math.atan2(Math.sin(lk.yaw - dx), Math.cos(lk.yaw - dx));
    lk.pitch = clamp(lk.pitch + dy, -1.2, 1.2);
  }

  get name() { return CAMERAS[this.mode].name; }

  // cảnh mở đầu: camera lia vòng từ thấp phía trước-bên phải ra sau xe
  startIntro() { this.intro = 0; this.first = true; }

  setMode(i) {
    this.mode = i % CAMERAS.length;
    this.intro = -1;
    this.sideSign = 0;
    this.blend = 0.7;
    this.look.yaw = this.look.pitch = 0;
    const rigid = CAMERAS[this.mode].id === 'cockpit';
    this.camera.near = rigid ? 0.04 : 0.3;
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
    let follow = 5, lookFollow = 7, rigid = false;
    const sp = clamp(speed / 45, 0, 1);
    const fxv = car.fx || 0;                    // hiệu ứng tốc độ cao
    const slope = Math.tan(car.pitch || 0);     // độ dốc mặt đường (lên dốc > 0)
    const ci = this.cine;

    switch (id) {
      case 'chase':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 6.2 + 1.4 * fxv + 1.8 * ci)).setY(pos.y + 2.3 + dim.height * 0.4);
        l.copy(pos).addScaledVector(f, 13).setY(pos.y + 1.75 + slope * 10);
        break;
      case 'low':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + 4.2)).setY(pos.y + 0.95);
        l.copy(pos).addScaledVector(f, 10).setY(pos.y + 1.0 + slope * 10);
        break;
      case 'side': {
        // ngang hông xe, cách ~11 m (ống kính 28 mm => xe chiếm ~1/3 bề ngang khung hình). Chọn bên một lần khi vào chế độ
        // (phía tim đường; đường núi: phía thung lũng) để camera không nhảy qua lại khi xe đổi làn
        if (!this.sideSign) this.sideSign = this.sidePref || car.side || 1;
        const D = 11;
        p.copy(pos).addScaledVector(r, this.sideSign * D).setY(pos.y + 1.5);
        l.copy(pos).setY(pos.y + dim.height * 0.42);
        follow = 9; lookFollow = 12;
        break;
      }
      case 'cockpit': {
        // mắt người lái (xương đầu của người đang ngồi lái); nhìn hơi chúc xuống để thấy hai tay trên vô lăng
        const [ex, ey, ez] = dim.eye;
        if (this.eyeAt && this.eyeAt(this._eye)) p.copy(this._eye);
        else p.copy(pos).addScaledVector(r, ex).addScaledVector(fc, -ez).setY(pos.y + ey - slope * ez);
        l.copy(p).addScaledVector(fc, 30).setY(p.y - 30 * Math.tan(this.cockpitPitch ?? 0.24) + slope * 30);
        rigid = true;
        break;
      }
      case 'orbit':
        this.orbit += dt * 0.2;
        p.set(pos.x + Math.cos(this.orbit) * 8.5, pos.y + 2.2 + Math.sin(this.orbit * 0.7) * 0.8, pos.z + Math.sin(this.orbit) * 8.5);
        l.copy(pos).setY(pos.y + 0.8);
        break;
      case 'drone':
        p.copy(pos).addScaledVector(f, -15).setY(pos.y + 13);
        l.copy(pos).addScaledVector(f, 6).setY(pos.y + 0.5);
        follow = 3.5;
        break;
    }

    // ống kính: zoom mượt; chạy nhanh thì góc rộng ra một chút (28 -> ~20 mm khi Fast drive)
    this.focalS += (this.focal - this.focalS) * (1 - Math.exp(-dt * 8));
    this.focalEff = this.focalS * (1 - 0.04 * sp);    // (180 km/h: góc rộng do đổi sang 16 mm, xem setGear)
    let fov = this.fovFor(this.focalEff);

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
        const hgt = pos.y + 0.65 + (2.3 + dim.height * 0.4 - 0.65) * e;
        const chaseL = l.clone();
        // lia ở phía tim đường (side), bán kính ngang tối đa 3.4 m để camera luôn nằm trên mặt đường, không chui vào cỏ
        p.copy(pos).addScaledVector(fc, Math.cos(ang) * rad).addScaledVector(r, (car.side || 1) * Math.sin(ang) * Math.min(rad, 3.4)).setY(hgt);
        l.copy(pos).setY(pos.y + 0.7).lerp(chaseL, e);
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

    // nhìn xung quanh: camera ngoài bay vòng quanh xe, camera trong xe thì quay đầu
    const lk = this.look;
    const cp = this._cp.copy(this.relP), cl = this._cl.copy(this.relL);
    if (Math.abs(lk.yaw) > 1e-4 || Math.abs(lk.pitch) > 1e-4) {
      if (rigid) {
        const d = this._dl.copy(cl).sub(cp), len = d.length();   // (vector riêng: trước đây ghi đè lên cl => camera nhảy loạn)
        const az = Math.atan2(d.x, d.z) - lk.yaw;
        const el = clamp(Math.atan2(d.y, Math.hypot(d.x, d.z)) + lk.pitch, -1.2, 1.2);
        d.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(len);
        cl.copy(cp).add(d);
      } else {
        const c = Math.cos(lk.yaw), s = Math.sin(lk.yaw);
        cp.set(cp.x * c + cp.z * s, cp.y, -cp.x * s + cp.z * c);
        cl.set(cl.x * c + cl.z * s, cl.y, -cl.x * s + cl.z * c);
        const h = Math.hypot(cp.x, cp.z), R = cp.length();
        const el = clamp(Math.atan2(cp.y, h) + lk.pitch, 0.03, 1.35);
        const f = (R * Math.cos(el)) / Math.max(h, 1e-3);
        cp.set(cp.x * f, R * Math.sin(el), cp.z * f);
      }
    }

    this.camera.position.copy(pos).add(cp);
    // không để camera chui xuống đất (đồi bên đường)
    if (this.groundAt) {
      const g = this.groundAt(this.camera.position.x, this.camera.position.z) + 0.6;
      if (this.camera.position.y < g) this.camera.position.y = g;
    }
    this._l.copy(pos).add(cl);
    this.camera.lookAt(this._l);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
