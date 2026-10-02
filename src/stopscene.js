import * as THREE from 'three';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ease = (x) => { x = clamp01(x); return x * x * (3 - 2 * x); };
const lerp = (a, b, t) => a + (b - a) * t;
const lerpAng = (a, b, t) => {
  const d = ((((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
  return a + d * t;
};
const FACE_FRONT = Math.PI;        // người nhìn về đầu xe (-Z)
const FACE_OUT = -Math.PI / 2;     // nhìn ra ngoài phía tài xế (-X)
const FACE_REAR = 0;               // nhìn về đuôi xe (+Z)
const FACE_CAR = Math.PI / 2;      // nhìn vào xe (+X)
const WALK = 1.1;                  // m/s

// Cảnh dừng xe: cận cảnh bánh xe chậm dần -> cửa mở, người bước ra, đi lên đầu xe đứng dựa vào xe
// -> camera lùi ra toàn cảnh rồi quay chậm quanh xe. Bấm lần nữa: người quay lại xe, đóng cửa, chạy tiếp.
// Mọi toạ độ tính trong hệ của xe: đầu xe hướng -Z, bên tài xế -X, mặt đường y = 0.
export class StopScene {
  constructor(cars, person) {
    this.cars = cars;
    this.person = person;
    this.state = 'off';            // off | stopping | exit | parked | enter
    this.t = 0;
    this.v0 = 0;
    this.stopT = -1;
    this.seat = new THREE.Vector3();
    this.out = new THREE.Vector3();
    this.walkEnd = new THREE.Vector3();
    this.lean = new THREE.Vector3();
    this.orbitA = 0;
    this.orbitT = 0;
    this.shot = { pos: new THREE.Vector3(), look: new THREE.Vector3() };   // góc máy trung cảnh (trong hệ xe)
    // kết quả cho camera (toạ độ thế giới), tiêu cự, điểm lấy nét và bề dày vùng nét
    this.cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), focus: new THREE.Vector3(), focal: 28, range: 2 };
    this._p = new THREE.Vector3();
    this._l = new THREE.Vector3();
    this._w = new THREE.Vector3();
  }

  get active() { return this.state !== 'off'; }
  get busy() { return this.state === 'stopping' || this.state === 'exit' || this.state === 'enter'; }

  // đặt ghế lái theo vị trí mắt người lái của xe (xương đầu ở tư thế lái nằm ngay dưới-sau mắt)
  place(dim) {
    const h = this.person.headOffsetSit;            // hệ người: mặt +Z; ngồi quay 180° => (-x, y, -z)
    const [ex, ey, ez] = dim.eye;
    this.seat.set(ex + h.x, ey - 0.1 - h.y, ez + 0.06 + h.z);
    this.out.set(-dim.width / 2 - 0.5, 0, this.seat.z - 0.1);
    this.lean.set(-dim.width / 2 - 0.16, 0, -dim.length / 2 + 1.05);   // (bề ngang tính cả gương => sát chắn bùn trước)
    this.walkEnd.set(this.lean.x - 0.3, 0, this.lean.z);
  }

  sit() {
    const p = this.person;
    if (!p.ready) return;
    p.root.position.copy(this.seat);
    p.root.rotation.set(0, FACE_FRONT, 0);
    p.tilt.rotation.set(0, 0, 0);
    p.play('Driving_Loop', 0);
  }

  // bấm nút dừng / đi tiếp. Trả về true nếu chuyển cảnh
  toggle(speed) {
    if (this.state === 'off') {
      this.state = 'stopping'; this.t = 0; this.v0 = Math.max(speed, 0.5); this.stopT = -1;
      return true;
    }
    if (this.state === 'parked') { this.state = 'enter'; this.t = 0; return true; }
    return false;
  }

  // tốc độ xe trong lúc dừng: giảm đều, dừng hẳn sau ~3 giây
  speed(v, dt) {
    if (this.state !== 'stopping') return 0;
    return Math.max(0, v - Math.max(1.5, this.v0 / 3.2) * dt);
  }

  // dt: giây; carRoot: Object3D của xe (để đổi toạ độ xe -> thế giới); speed: tốc độ xe hiện tại
  update(dt, carRoot, speed) {
    this.t += dt;
    const dim = this.cars.dim;
    const cam = this.cam;
    const P = this._p, L = this._l;
    if (this.state === 'stopping') {
      // cận cảnh bánh trước phía tài xế: máy thấp, hơi chéo từ phía trước, từ từ tiến lại
      const w = this.cars.frontWheel(this._w);
      const k = ease(this.t / 5);
      P.set(w.x - 1.55 + 0.3 * k, 0.34, w.z - 1.1 + 0.2 * k);
      L.set(w.x + 0.05, w.y * 0.92, w.z + 0.08);
      cam.focus.copy(w);
      carRoot.localToWorld(cam.focus);
      cam.focal = 45;
      cam.range = 0.35;
      if (speed <= 0.01 && this.stopT < 0) this.stopT = this.t;
      if (this.stopT >= 0 && this.t - this.stopT > 0.9) this._enterState('exit', dim);
    } else if (this.state === 'exit') {
      this._exit(dim);
      this._camera(dim, dt, this.t - this.orbitT);
    } else if (this.state === 'parked') {
      this._camera(dim, dt, 99);
    } else if (this.state === 'enter') {
      this._enter(dim);
      this._camera(dim, dt, 99);
    }
    if (this.state !== 'stopping') {
      P.copy(this._camP); L.copy(this._camL);
      // lấy nét vào người (đang ở cạnh xe), vùng nét đủ trùm cả xe
      this.person.head.getWorldPosition(cam.focus);
    }
    cam.pos.copy(P); carRoot.localToWorld(cam.pos);
    cam.look.copy(L); carRoot.localToWorld(cam.look);
  }

  _enterState(s, dim) {
    this.state = s;
    this.t = 0;
    if (s === 'exit') {
      // góc máy trung cảnh phía trước - bên tài xế, thấy cửa mở và người bước ra
      this.shot.pos.set(-dim.width / 2 - 4.2, 1.45, this.seat.z - 2.7);
      this.shot.look.set(-dim.width / 2 - 0.25, 0.95, this.seat.z - 0.6);
      this.orbitT = 3.4;                              // sau 3.4 s bắt đầu lùi ra toàn cảnh
      this.orbitA = Math.atan2(this.shot.pos.x, this.shot.pos.z + 0.3);
      this._camP = (this._camP || new THREE.Vector3()).copy(this.shot.pos);
      this._camL = (this._camL || new THREE.Vector3()).copy(this.shot.look);
    }
  }

  // camera: trung cảnh -> lùi ra toàn cảnh (bán kính 10 m, cao 3.4 m: nhìn qua ngọn cỏ lau) -> quay chậm quanh xe
  _camera(dim, dt, tOrbit) {
    const cam = this.cam;
    const k = ease(tOrbit / 3.2);
    if (tOrbit > 0) this.orbitA += dt * 0.1 * Math.min(1, tOrbit / 2);
    const r0 = Math.hypot(this.shot.pos.x, this.shot.pos.z + 0.3);
    const r = lerp(r0, 10, k), h = lerp(this.shot.pos.y, 3.4, k);
    const op = this._camP.set(Math.sin(this.orbitA) * r, h, Math.cos(this.orbitA) * r - 0.3);
    if (tOrbit <= 0) op.copy(this.shot.pos);
    this._camL.copy(this.shot.look).lerp(this._w.set(-dim.width * 0.2, 0.8, -0.4), k);
    cam.focal = lerp(32, 26, k);
    cam.range = dim.width / 2 + 1.2;
  }

  _exit(dim) {
    const p = this.person, t = this.t, root = p.root;
    this.cars.setDoor(clamp01(t / 1.1));
    if (t < 1.0) {
      // còn ngồi: xoay người ra phía cửa
      root.position.copy(this.seat);
      root.rotation.y = lerpAng(FACE_FRONT, FACE_OUT, ease((t - 0.45) / 0.6));
      return;
    }
    const tExit = 1.0, dExit = 1.25;
    if (t < tExit + dExit) {
      p.play('Sitting_Exit', 0.25, { once: true, timeScale: p.duration('Sitting_Exit') / dExit });
      const e = ease((t - tExit) / dExit);
      root.position.lerpVectors(this.seat, this.out, e);
      root.rotation.y = FACE_OUT;
      return;
    }
    const tWalk = tExit + dExit, dWalk = this.out.distanceTo(this.walkEnd) / WALK;
    if (t < tWalk + dWalk) {
      p.play('Walk_Loop', 0.3);
      root.position.lerpVectors(this.out, this.walkEnd, clamp01((t - tWalk) / dWalk));
      root.rotation.y = lerpAng(FACE_OUT, FACE_FRONT, ease((t - tWalk) / 0.45));
      return;
    }
    // quay lưng vào xe rồi dựa người ra sau
    const tTurn = tWalk + dWalk;
    p.play('Idle_Loop', 0.4);
    const e = ease((t - tTurn) / 0.7), e2 = ease((t - tTurn - 0.5) / 0.8);
    root.rotation.y = lerpAng(FACE_FRONT, FACE_OUT, e);
    root.position.lerpVectors(this.walkEnd, this.lean, e2);
    p.tilt.rotation.x = -0.17 * e2;
    if (t > tTurn + 1.4) this.state = 'parked';
  }

  _enter(dim) {
    const p = this.person, t = this.t, root = p.root;
    // rời chỗ dựa, quay về phía đuôi xe
    if (t < 0.7) {
      p.play('Idle_Loop', 0.3);
      const e = ease(t / 0.7);
      p.tilt.rotation.x = -0.17 * (1 - e);
      root.position.lerpVectors(this.lean, this.walkEnd, e);
      root.rotation.y = lerpAng(FACE_OUT, FACE_REAR, e);
      return;
    }
    const tWalk = 0.7, dWalk = this.walkEnd.distanceTo(this.out) / WALK;
    if (t < tWalk + dWalk) {
      p.play('Walk_Loop', 0.3);
      root.position.lerpVectors(this.walkEnd, this.out, clamp01((t - tWalk) / dWalk));
      root.rotation.y = FACE_REAR;
      return;
    }
    const tTurn = tWalk + dWalk;
    if (t < tTurn + 0.45) {
      p.play('Idle_Loop', 0.25);
      root.rotation.y = lerpAng(FACE_REAR, FACE_CAR, ease((t - tTurn) / 0.45));
      return;
    }
    const tSit = tTurn + 0.45, dSit = 1.4;
    if (t < tSit + dSit) {
      p.play('Sitting_Enter', 0.25, { once: true, timeScale: p.duration('Sitting_Enter') / dSit });
      const e = ease((t - tSit) / dSit);
      root.position.lerpVectors(this.out, this.seat, e);
      root.rotation.y = lerpAng(FACE_CAR, FACE_FRONT, ease((t - tSit - 0.3) / (dSit - 0.3)));
      return;
    }
    p.play('Driving_Loop', 0.4);
    root.position.copy(this.seat);
    root.rotation.y = FACE_FRONT;
    const tClose = tSit + dSit;
    this.cars.setDoor(1 - clamp01((t - tClose) / 0.9));
    if (t > tClose + 1.0) { this.cars.setDoor(0); this.state = 'off'; }
  }
}
