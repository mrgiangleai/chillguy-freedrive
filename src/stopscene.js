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
const UP = new THREE.Vector3(0, 1, 0);

// Cảnh dừng xe: cận cảnh bánh xe chậm dần -> cửa mở, người bước ra, đi vòng lên trước đầu xe, quay mặt sang phải,
// rút điếu thuốc trong túi ra châm hút (tay đưa lên miệng bằng IK, khói vẽ ở smoke.js)
// -> camera lùi ra toàn cảnh rồi quay chậm quanh xe. Bấm lần nữa: người vứt thuốc, quay lại xe, đóng cửa, chạy tiếp.
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
    this.corner = new THREE.Vector3();      // góc trước bên tài xế (đi vòng qua)
    this.stand = new THREE.Vector3();       // chỗ đứng hút thuốc trước đầu xe
    this.smokeU = -1;                       // giây kể từ lúc đứng vào chỗ (-1 = chưa)
    // trạng thái hút thuốc cho smoke.js (toạ độ thế giới)
    this.smoking = { on: false, lit: false, drag: 0, flame: 0, exhale: false, atMouth: 0,
      F: new THREE.Vector3(), R: new THREE.Vector3(), mouth: new THREE.Vector3() };
    this.handW = 0;
    this.handT = new THREE.Vector3();
    this._A = new THREE.Vector3(); this._O = new THREE.Vector3(); this._H = new THREE.Vector3(); this._t1 = new THREE.Vector3(); this._t2 = new THREE.Vector3();
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
    this.corner.set(-dim.width / 2 - 0.55, 0, -dim.length / 2 - 0.75);
    this.stand.set(-0.15, 0, -dim.length / 2 - 1.2);
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
      this.state = 'stopping'; this.t = 0; this.v0 = Math.max(speed, 0.5); this.stopT = -1; this.smokeU = -1; this.handW = 0;
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
      this._exit(dim, dt);
      this._camera(dim, dt, this.t - this.orbitT);
    } else if (this.state === 'parked') {
      this._camera(dim, dt, 99);
    } else if (this.state === 'enter') {
      this._enter(dim, dt);
      this._camera(dim, dt, 99);
    }
    if (this.smokeU >= 0 && this.state !== 'enter') this._smoke(dt);
    this._hand();
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
    // đi vòng qua góc trước bên tài xế tới chỗ đứng trước đầu xe
    const tWalk = tExit + dExit, d1 = this.out.distanceTo(this.corner) / WALK, d2 = this.corner.distanceTo(this.stand) / WALK;
    p.tilt.rotation.x = 0;
    if (t < tWalk + d1 + d2) {
      p.play('Walk_Loop', 0.3);
      this._walk(root, [this.out, this.corner, this.stand], [d1, d2], t - tWalk, dt);
      return;
    }
    // tới nơi: quay mặt sang phải rồi hút thuốc
    p.play('Idle_Loop', 0.4);
    root.position.copy(this.stand);
    if (this.smokeU < 0) { this.smokeU = 0; this.turnFrom = root.rotation.y; }
    root.rotation.y = lerpAng(this.turnFrom, FACE_CAR, ease(this.smokeU / 0.6));
    if (this.smokeU > 0.8) this.state = 'parked';
  }

  // đi theo các chặng (pts[i] -> pts[i+1] mất dur[i] giây), mặt quay dần theo hướng đi
  _walk(root, pts, dur, w, dt) {
    let i = 0;
    while (i < dur.length - 1 && w > dur[i]) { w -= dur[i]; i++; }
    const a = pts[i], b = pts[i + 1], k = clamp01(w / dur[i]);
    root.position.lerpVectors(a, b, k);
    const dir = Math.atan2(b.x - a.x, b.z - a.z);
    root.rotation.y = lerpAng(root.rotation.y, dir, Math.min(1, dt * 7));
  }

  // hút thuốc: dòng thời gian u (giây) => mục tiêu tay phải + trạng thái điếu thuốc
  _smoke(dt) {
    const u = (this.smokeU += dt), p = this.person, sm = this.smoking;
    if (!p.arms?.r) return;
    p.root.updateMatrixWorld(true);
    const O = p.root.getWorldPosition(this._O), F = p.root.getWorldDirection(sm.F).setY(0).normalize();
    const R = sm.R.crossVectors(F, UP).normalize();                     // bên phải của người
    p.head.getWorldPosition(this._H);
    // miệng ngang tầm xương Head (~1.49 m; mắt ~1.57 m), trước mặt ~10 cm
    const M = sm.mouth.copy(this._H).addScaledVector(F, 0.1);
    const pocket = this._t1.copy(O).addScaledVector(R, 0.2).addScaledVector(UP, 0.92);
    const rest = this._t2.copy(O).addScaledVector(R, 0.27).addScaledVector(UP, 0.97).addScaledVector(F, 0.1);   // buông cạnh hông
    // cổ tay khi rít: thấp hơn miệng, chếch ra trước - sang phải => bàn tay đưa lên từ bên cạnh, không che mặt
    const mouthT = this._A.copy(M).addScaledVector(F, 0.1).addScaledVector(R, 0.1).addScaledVector(UP, -0.12);
    const T = this.handT;
    sm.flame = 0; sm.drag = 0; sm.exhale = false; sm.atMouth = 0;
    if (u < 0.6) { this.handW = 0; sm.on = false; return; }                                       // quay người
    if (u < 1.4) { T.copy(pocket); this.handW = ease((u - 0.6) / 0.6); sm.on = u > 1.25; return; }  // thò tay vào túi
    sm.on = true; this.handW = 1;
    if (u < 2.2) { const e = ease((u - 1.4) / 0.8); T.lerpVectors(pocket, mouthT, e); sm.atMouth = e; return; }   // đưa lên miệng
    if (u < 3.0) {                                                                              // bật lửa châm thuốc
      T.copy(mouthT); sm.atMouth = 1;
      sm.flame = u > 2.3 && u < 2.85 ? 1 : 0;
      sm.lit = u > 2.65; sm.drag = sm.lit ? 1 : 0;
      return;
    }
    sm.lit = true;
    const q = (u - 3.0) % 6.4;
    if (q < 0.8) { const e = ease(q / 0.8); T.lerpVectors(mouthT, rest, e); sm.atMouth = 1 - e; }   // hạ tay
    else if (q < 4.4) T.copy(rest);                                                             // cầm thuốc nghỉ
    else if (q < 5.2) { const e = ease((q - 4.4) / 0.8); T.lerpVectors(rest, mouthT, e); sm.atMouth = e; }   // đưa lên rít
    else { T.copy(mouthT); sm.drag = 1; sm.atMouth = 1; }                                       // rít một hơi
    sm.exhale = q > 0.6 && q < 1.6;                                                             // nhả khói
  }

  // áp IK tay phải (sau khi animation đã đặt tư thế)
  _hand() {
    if (this.handW <= 0.001 || !this.person.arms?.r) return;
    const A = this.person.arms.r[2].getWorldPosition(this._A);
    this.person.reach('r', A.lerp(this.handT, this.handW));
  }

  _enter(dim, dt) {
    const p = this.person, t = this.t, root = p.root;
    // vứt điếu thuốc, hạ tay, quay về phía cửa xe rồi đi vòng lại
    this.smoking.on = false; this.smoking.lit = false;
    this.handW = Math.max(0, this.handW - dt * 2.5);
    this.smokeU = -1;
    p.tilt.rotation.x = 0;
    if (t < 0.6) {
      p.play('Idle_Loop', 0.3);
      root.position.copy(this.stand);
      root.rotation.y = lerpAng(FACE_CAR, Math.atan2(this.corner.x - this.stand.x, this.corner.z - this.stand.z), ease(t / 0.6));
      return;
    }
    const tWalk = 0.6, d2 = this.stand.distanceTo(this.corner) / WALK, d1 = this.corner.distanceTo(this.out) / WALK, dWalk = d1 + d2;
    if (t < tWalk + dWalk) {
      p.play('Walk_Loop', 0.3);
      this._walk(root, [this.stand, this.corner, this.out], [d2, d1], t - tWalk, dt);
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
