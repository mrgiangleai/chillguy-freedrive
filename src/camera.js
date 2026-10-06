import * as THREE from 'three';
import { CAMERAS } from './config.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const FOCAL_MIN = 16, FOCAL_MAX = 35;
const lerpAngle = (a, b, t) => {
  let d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return a + d * t;
};

const CAMERA_DEFAULTS = {
  chase: { distance: 6.2, speedBack: 1.4, cineBack: 1.8, height: 2.3, carHeight: 0.4, lookAhead: 13, lookHeight: 1.75, slopeLook: 10, follow: 5, lookFollow: 7, near: 0.3, focal: 16, aperture: 3.5 },
  low: { distance: 4.2, height: 0.95, lookAhead: 10, lookHeight: 1, slopeLook: 10, follow: 5, lookFollow: 7, near: 0.3, focal: 24, aperture: 3.5 },
  side: { distance: 23.2, height: 4.35, lookHeight: 0.42, follow: 9, lookFollow: 12, near: 0.3, focal: 24, aperture: 1.8 },
  cockpit: { eyeSide: 0, eyeHeight: 0, eyeForward: 0, pitch: 0.24, lookDistance: 30, follow: 9, lookFollow: 9, near: 0.04, focal: 24, aperture: 3.5 },
  orbit: { radius: 30, height: 7.5, heightWave: 3, waveRate: 2, speed: 0.13, lookHeight: 0.8, follow: 5, lookFollow: 7, near: 0.3, focal: 24, aperture: 2.8 },
  drone: { distance: 15, height: 13, lookAhead: 6, lookHeight: 0.5, follow: 3.5, lookFollow: 7, near: 0.3, focal: 24, aperture: 3.5 },
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
    this.transition = null;             // nội suy vị trí, điểm nhìn và ống kính trong 2 giây khi đổi camera
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
    this.tune = structuredClone(CAMERA_DEFAULTS);   // thông số camera chỉnh trực tiếp từ bảng công cụ
    // ống kính (quy đổi full-frame 36x24 mm), mỗi chế độ camera giữ cấu hình riêng
    this.focal = this.focalS = this.focalEff = 24;
    this.aperture = this.apertureS = 3.5;
  }

  // f > 1: zoom ra (góc rộng hơn), f < 1: zoom vào
  zoomBy(f) {
    this.focal = clamp(this.focal / f, FOCAL_MIN, FOCAL_MAX);
    this.tune[CAMERAS[this.mode].id].focal = this.focal;
  }

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

  resetTune(id) { this.tune[id] = structuredClone(CAMERA_DEFAULTS[id]); this.setMode(this.mode); }

  // cảnh mở đầu: camera lia vòng từ thấp phía trước-bên phải ra sau xe
  startIntro() { this.intro = 0; this.first = true; }

  setMode(i) {
    const next = i % CAMERAS.length;
    if (!this.first && next !== this.mode) {
      this.transition = {
        elapsed: 0, duration: 2,
        fromP: this.relP.clone(), fromL: this.relL.clone(),
        fromFocal: this.focalS, fromAperture: this.apertureS, fromNear: this.camera.near,
      };
    }
    this.mode = next;
    this.intro = -1;
    this.sideSign = 0;
    this.look.yaw = this.look.pitch = 0;
    const id = CAMERAS[this.mode].id;
    const tune = this.tune[id];
    this.focal = tune.focal; this.aperture = tune.aperture;
    if (!this.transition) {
      this.focalS = this.focal; this.apertureS = this.aperture;
      this.camera.near = tune.near; this.camera.updateProjectionMatrix();
    }
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
    const t = this.tune[id];
    follow = t.follow; lookFollow = t.lookFollow;

    switch (id) {
      case 'chase':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + t.distance + t.speedBack * fxv + t.cineBack * ci)).setY(pos.y + t.height + dim.height * t.carHeight);
        l.copy(pos).addScaledVector(f, t.lookAhead).setY(pos.y + t.lookHeight + slope * t.slopeLook);
        break;
      case 'low':
        p.copy(pos).addScaledVector(f, -(dim.length * 0.5 + t.distance)).setY(pos.y + t.height);
        l.copy(pos).addScaledVector(f, t.lookAhead).setY(pos.y + t.lookHeight + slope * t.slopeLook);
        break;
      case 'side': {
        // ngang hông xe, cách ~11 m (ống kính 28 mm => xe chiếm ~1/3 bề ngang khung hình). Chọn bên một lần khi vào chế độ
        // (phía tim đường; đường núi: phía thung lũng) để camera không nhảy qua lại khi xe đổi làn
        if (!this.sideSign) this.sideSign = this.sidePref || car.side || 1;
        p.copy(pos).addScaledVector(r, this.sideSign * t.distance).setY(pos.y + t.height);
        l.copy(pos).setY(pos.y + dim.height * t.lookHeight);
        break;
      }
      case 'cockpit': {
        // mắt người lái (xương đầu của người đang ngồi lái); nhìn hơi chúc xuống để thấy hai tay trên vô lăng
        const [ex, ey, ez] = dim.eye;
        if (this.eyeAt && this.eyeAt(this._eye)) p.copy(this._eye);
        else p.copy(pos).addScaledVector(r, ex).addScaledVector(fc, -ez).setY(pos.y + ey - slope * ez);
        p.addScaledVector(r, t.eyeSide).addScaledVector(fc, t.eyeForward); p.y += t.eyeHeight;
        const pitch = this.cockpitPitch == null ? t.pitch : this.cockpitPitch + t.pitch - 0.24;
        l.copy(p).addScaledVector(fc, t.lookDistance).setY(p.y - t.lookDistance * Math.tan(pitch) + slope * t.lookDistance);
        rigid = true;
        break;
      }
      case 'orbit':
        this.orbit += dt * t.speed;
        p.set(pos.x + Math.cos(this.orbit) * t.radius, pos.y + t.height + Math.sin(this.orbit * t.waveRate) * t.heightWave, pos.z + Math.sin(this.orbit) * t.radius);
        l.copy(pos).setY(pos.y + t.lookHeight);
        break;
      case 'drone':
        p.copy(pos).addScaledVector(f, -t.distance).setY(pos.y + t.height);
        l.copy(pos).addScaledVector(f, t.lookAhead).setY(pos.y + t.lookHeight);
        break;
    }

    this.focalEff = this.focalS * (1 - 0.04 * sp);
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
        const ct = this.tune.chase;
        const backDist = dim.length * 0.5 + ct.distance + ct.cineBack * ci;
        const ang = 0.5 + (Math.PI - 0.5) * e;
        const rad = ct.distance + (backDist - ct.distance) * e;
        const hgt = pos.y + 0.65 + (ct.height + dim.height * ct.carHeight - 0.65) * e;
        const chaseL = l.clone();
        // lia ở phía tim đường (side), bán kính ngang tối đa 3.4 m để camera luôn nằm trên mặt đường, không chui vào cỏ
        p.copy(pos).addScaledVector(fc, Math.cos(ang) * rad).addScaledVector(r, (car.side || 1) * Math.sin(ang) * Math.min(rad, 3.4)).setY(hgt);
        l.copy(pos).setY(pos.y + 0.7).lerp(chaseL, e);
        fov = 36 + (fov - 36) * e;
      }
    } else if (this.intro >= 0) this.intro = -1;

    // Nội suy toàn bộ góc camera trong đúng 2 giây; dùng tọa độ tương đối để xe vẫn tiếp tục di chuyển tự nhiên.
    const targetP = p.sub(pos), targetL = l.sub(pos);
    const transitioning = !!this.transition && !intro;
    if (transitioning) {
      const tr = this.transition, q = clamp((tr.elapsed += dt) / tr.duration, 0, 1), e = q * q * (3 - 2 * q);
      this.relP.lerpVectors(tr.fromP, targetP, e); this.relL.lerpVectors(tr.fromL, targetL, e);
      this.focalS = THREE.MathUtils.lerp(tr.fromFocal, this.focal, e);
      this.apertureS = THREE.MathUtils.lerp(tr.fromAperture, this.aperture, e);
      this.camera.near = THREE.MathUtils.lerp(tr.fromNear, t.near, e);
      if (q >= 1) this.transition = null;
    } else {
      let kp = 1 - Math.exp(-dt * follow), kl = 1 - Math.exp(-dt * lookFollow);
      if (rigid) kp = kl = 1;
      if (this.first || intro) kp = kl = 1;
      this.relP.lerp(targetP, kp); this.relL.lerp(targetL, kl);
      this.focalS += (this.focal - this.focalS) * (1 - Math.exp(-dt * 8));
      this.apertureS += (this.aperture - this.apertureS) * (1 - Math.exp(-dt * 8));
      this.camera.near = t.near;
    }
    this.focalEff = this.focalS * (1 - 0.04 * sp);
    if (!intro) fov = this.fovFor(this.focalEff);
    this.fov += (fov - this.fov) * (this.first ? 1 : this.transition ? 1 : 1 - Math.exp(-dt * 3));
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
    if (Math.abs(this.camera.fov - this.fov) > 0.01 || transitioning) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
