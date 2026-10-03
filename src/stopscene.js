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
const FACE_DOOR = -Math.PI * 0.75; // nhìn chéo ra trước - ngoài (về phía cánh cửa đang mở)
const WALK = 1.1;                  // m/s
const UP = new THREE.Vector3(0, 1, 0);
const CLOSE_START = 1.25;          // giây hút thuốc: tay rút thuốc đưa lên miệng => máy đẩy nhanh vào cận cảnh
const CLOSE_END = 2.85;            // châm xong (~1.5 s cận cảnh) => máy lùi ra toàn cảnh
const WIDE_FOCAL = 26, FOCAL_MIN = 16, FOCAL_MAX = 35;
const BACK_MAX = 20;               // toàn cảnh: zoom ra quá 16 mm thì máy lùi xa thêm tối đa 20 m
const BACK_PER_LN = 25;            // m lùi thêm cho mỗi đơn vị ln(hệ số zoom) (16→35 mm ≈ 0.78 => ~20 m cùng biên độ thao tác)

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
    this.smoking = { on: false, lit: false, drag: 0, flame: 0, exhale: false, atMouth: 0, err: new THREE.Vector3(), errOK: false,
      F: new THREE.Vector3(), R: new THREE.Vector3(), mouth: new THREE.Vector3() };
    this.handW = 0;
    this.handT = new THREE.Vector3();
    this.closeK = 0;                        // 0 = trung cảnh, 1 = cận trung cảnh hút thuốc
    this.wideK = 0;                         // 1 = toàn cảnh quay quanh xe
    this.zoom = { focal: WIDE_FOCAL, back: 0, focalS: WIDE_FOCAL, backS: 0 };   // ống kính toàn cảnh (người dùng zoom)
    this.orbitA = null;
    this.cyc = { t: 0, n: 0, rest: 3 };     // nhịp hút thuốc
    this.mouthCorr = new THREE.Vector3();
    this.wd = { mode: 'idle', t: 0, dur: 4, face: null, target: new THREE.Vector3() };   // đi lanh quanh
    this.lk = { t: 0, ty: 0, tp: 0, y: 0, p: 0 };                                           // quay đầu nhìn quanh
    this._q1 = new THREE.Quaternion(); this._q2 = new THREE.Quaternion(); this._q3 = new THREE.Quaternion(); this._q4 = new THREE.Quaternion();
    this._pole = new THREE.Vector3();
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
      this.wd.mode = 'idle'; this.wd.t = 0; this.wd.dur = 3 + Math.random() * 3; this.wd.face = null; this.lk.t = 1;
      return true;
    }
    if (this.state === 'parked') {
      // quay lại xe từ chỗ đang đứng (đã đi lanh quanh)
      this.stand.copy(this.person.root.position);
      this.enterYaw = this.person.root.rotation.y;
      this.state = 'enter'; this.t = 0; return true;
    }
    return false;
  }

  // zoom ở toàn cảnh. f > 1: zoom ra — tiêu cự giảm tới 16 mm rồi máy lùi xa thêm (tối đa 20 m);
  // f < 1: zoom vào — máy tiến lại hết 20 m về chỗ cũ (16 mm) rồi mới tăng tiêu cự tới 35 mm. Trả về false nếu không ở toàn cảnh.
  zoomBy(f) {
    if (this.wideK < 0.3) return false;
    const z = this.zoom;
    let ln = Math.log(f);
    if (ln > 0) {
      const toMin = Math.log(z.focal / FOCAL_MIN), use = Math.min(ln, toMin);
      z.focal /= Math.exp(use); ln -= use;
      if (ln > 0) z.back = Math.min(BACK_MAX, z.back + ln * BACK_PER_LN);
    } else if (ln < 0) {
      const use = Math.min(-ln, z.back / BACK_PER_LN);
      z.back -= use * BACK_PER_LN; ln += use;
      if (ln < 0) z.focal = Math.min(FOCAL_MAX, z.focal / Math.exp(ln));
      if (z.back < 1e-6) z.back = 0;
    }
    return true;
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
    } else if (this.state === 'enter') {
      this._enter(dim, dt);
    } else if (this.state === 'parked' && this.smokeU > 3.4) {
      this._wander(dt, dim);
    }
    if (this.smokeU >= 0 && this.state !== 'enter') this._smoke(dt);
    this._hand();
    this._look(dt);
    if (this.state !== 'stopping') this._camera(dt, carRoot);
    else { cam.pos.copy(P); carRoot.localToWorld(cam.pos); cam.look.copy(L); carRoot.localToWorld(cam.look); }
  }

  _enterState(s, dim) {
    this.state = s;
    this.t = 0;
    if (s === 'exit') {
      // góc máy trung cảnh phía trước - bên tài xế, thấy cửa mở và người bước ra
      this.shot.pos.set(-dim.width / 2 - 4.2, 1.45, this.seat.z - 2.7);
      this.shot.look.set(-dim.width / 2 - 0.25, 0.95, this.seat.z - 0.6);
      this.closeK = 0; this.wideK = 0; this.orbitA = null; this.mouthCorr.set(0, 0, 0);
      Object.assign(this.zoom, { focal: WIDE_FOCAL, back: 0, focalS: WIDE_FOCAL, backS: 0 });
    }
  }

  // camera: trung cảnh nhìn theo người bước ra, đi lên trước đầu xe -> rút thuốc đưa lên miệng thì đẩy nhanh vào cận trung
  // cảnh (ống 50 mm, cách ~2.3 m) đúng đoạn châm thuốc ~1.5 s -> lùi ra toàn cảnh (bán kính 10 m, cao 3.4 m; người dùng
  // zoom 16–35 mm và lùi xa thêm tới 20 m) rồi quay chậm quanh xe. Đi tiếp: đang cận thì kéo về trung cảnh, toàn cảnh thì giữ.
  _camera(dt, carRoot) {
    const cam = this.cam, sm = this.smoking, dim = this.cars.dim;
    const smoking = this.smokeU >= CLOSE_START && this.state !== 'enter';
    const wantWide = (smoking && this.smokeU >= CLOSE_END) || (this.state === 'enter' && this.wideK > 0.5) ? 1 : 0;
    this.closeK += ((smoking ? 1 : 0) - this.closeK) * (1 - Math.exp(-dt * (smoking ? 3.2 : 1.6)));
    this.wideK += (wantWide - this.wideK) * (1 - Math.exp(-dt * 0.9));
    const z = this.zoom, kz = 1 - Math.exp(-dt * 6);
    z.focalS += (z.focal - z.focalS) * kz; z.backS += (z.back - z.backS) * kz;
    const k = ease(this.closeK), w = ease(this.wideK);
    // trung cảnh (toạ độ xe)
    const pr = this.person.root.position;
    const P = this._p.copy(this.shot.pos), L = this._l.set(pr.x, 1.2, pr.z);
    this.person.head.getWorldPosition(cam.focus);
    cam.focal = 32; cam.range = 0.8;
    if (k > 1e-3) {
      // cận trung cảnh: máy trước mặt hơi lệch trái, nhìn vào khoảng giữa miệng - ngực, lắc lư nhẹ như quay tay
      const sway = Math.sin(this.t * 0.31) * 0.07;
      const cl = this._t2.copy(sm.mouth).addScaledVector(sm.R, 0.04).addScaledVector(UP, -0.13);
      const cp = this._t1.copy(sm.F).multiplyScalar(0.95).addScaledVector(sm.R, -0.15).normalize().multiplyScalar(2.3)
        .applyAxisAngle(UP, sway).add(cl).addScaledVector(UP, 0.06 + 0.02 * Math.sin(this.t * 0.53));
      P.lerp(carRoot.worldToLocal(cp), k);
      L.lerp(carRoot.worldToLocal(cl), k);
      cam.focus.lerp(sm.mouth, k);
      cam.focal = lerp(32, 50, k);
      cam.range = lerp(0.8, 0.25, k);
    }
    if (w > 1e-3) {
      // toàn cảnh: lùi ra theo hướng đang đứng (không xuyên qua xe) rồi quay chậm quanh xe
      if (this.orbitA === null) this.orbitA = Math.atan2(P.x, P.z + 0.3);
      this.orbitA += dt * 0.1 * w;
      const R = 10 + z.backS;                                       // zoom ra quá 16 mm: lùi xa thêm, cao dần để vẫn nhìn xuống xe
      const op = this._w.set(Math.sin(this.orbitA) * R, 3.4 + z.backS * 0.3, Math.cos(this.orbitA) * R - 0.3);
      P.lerp(op, w);
      L.lerp(this._t1.set(-dim.width * 0.2, 0.8, -0.4), w);
      this.person.head.getWorldPosition(this._t2);
      cam.focus.lerp(this._t2, w);
      cam.focal = lerp(cam.focal, z.focalS, w);
      cam.range = lerp(cam.range, dim.width / 2 + 1.2, w);
    } else this.orbitA = null;
    cam.pos.copy(P); carRoot.localToWorld(cam.pos);
    cam.look.copy(L); carRoot.localToWorld(cam.look);
  }

  _exit(dim, dt) {
    const p = this.person, t = this.t, root = p.root;
    if (t < 2.3) this.cars.setDoor(clamp01(t / 1.1));
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
    // bước ra rồi quay sang đóng cửa (cánh cửa mở chắn phía trước => không đi xuyên qua)
    const tClose = tExit + dExit, dClose = 1.0;
    if (t < tClose + dClose) {
      p.play('Idle_Loop', 0.3);
      root.position.copy(this.out);
      root.rotation.y = lerpAng(FACE_OUT, FACE_DOOR, ease((t - tClose) / 0.35));
      this.cars.setDoor(1 - ease((t - tClose - 0.25) / 0.6));
      return;
    }
    this.cars.setDoor(0);
    // đi vòng qua góc trước bên tài xế tới chỗ đứng trước đầu xe
    const tWalk = tClose + dClose, d1 = this.out.distanceTo(this.corner) / WALK, d2 = this.corner.distanceTo(this.stand) / WALK;
    p.tilt.rotation.x = 0;
    if (t < tWalk + d1 + d2) {
      p.play('Walk_Loop', 0.3);
      this._walk(root, [this.out, this.corner, this.stand], [d1, d2], t - tWalk, dt);
      return;
    }
    // tới nơi: quay mặt sang phải rồi hút thuốc
    p.play('Idle_Loop', 0.4);
    root.position.copy(this.stand);
    if (this.smokeU < 0) { this.smokeU = 0; this.turnFrom = root.rotation.y; this.cyc.t = 0; this.cyc.n = 0; this.cyc.rest = 3; }
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
    // hiệu chỉnh dần để đầu lọc (giữa hai ngón tay, theo smoke.js) đúng ở môi: dời cổ tay theo sai lệch đo được
    if (sm.atMouth > 0.9 && sm.errOK) {
      this.mouthCorr.addScaledVector(sm.err, Math.min(1, dt * 8));
      if (this.mouthCorr.length() > 0.2) this.mouthCorr.setLength(0.2);
    }
    mouthT.add(this.mouthCorr);
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
    // nhịp hút: hạ tay (nhả khói) -> cầm thuốc nghỉ (lần lượt 3 s, 5 s, rồi ngẫu nhiên 5–12 s) -> đưa lên -> rít
    const c = this.cyc;
    c.t += dt;
    const total = 0.8 + c.rest + 0.8 + 1.3;
    if (c.t >= total) { c.t -= total; c.n++; c.rest = c.n === 1 ? 5 : 5 + Math.random() * 7; }
    const q = c.t, r1 = 0.8 + c.rest, r2 = r1 + 0.8;
    if (q < 0.8) { const e = ease(q / 0.8); T.lerpVectors(mouthT, rest, e); sm.atMouth = 1 - e; }     // hạ tay
    else if (q < r1) T.copy(rest);                                                                // cầm thuốc nghỉ
    else if (q < r2) { const e = ease((q - r1) / 0.8); T.lerpVectors(rest, mouthT, e); sm.atMouth = e; }   // đưa lên
    else { T.copy(mouthT); sm.drag = 1; sm.atMouth = 1; }                                         // rít một hơi
    sm.exhale = q > 0.6 && q < 1.6;                                                               // nhả khói
  }

  // đi lanh quanh trước đầu xe (trong vòng 10 m quanh chỗ dừng): đứng nhìn quanh vài giây, thỉnh thoảng đi vài bước
  // tới chỗ khác rồi lại đứng; mọi thứ ngẫu nhiên. Chỉ đi trong làn của mình + lề phải (tránh xe chạy ngược chiều).
  _wander(dt, dim) {
    const p = this.person, root = p.root, w = this.wd;
    w.t += dt;
    if (w.mode === 'idle') {
      p.play('Idle_Loop', 0.4);
      if (w.face !== null) root.rotation.y = lerpAng(root.rotation.y, w.face, Math.min(1, dt * 1.6));   // xoay người tại chỗ
      if (w.t > w.dur) {
        w.t = 0;
        if (Math.random() < 0.6 && this._pickTarget(dim)) { w.mode = 'walk'; return; }
        w.dur = 3 + Math.random() * 6;
        w.face = Math.random() < 0.5 ? root.rotation.y + (Math.random() - 0.5) * 1.6 : null;
      }
      return;
    }
    // đi thong thả tới điểm đích, mặt quay dần theo hướng đi
    p.play('Walk_Loop', 0.35, { timeScale: 0.85 });
    const d = this._t1.subVectors(w.target, root.position).setY(0);
    const dist = d.length();
    const want = Math.atan2(d.x, d.z);
    root.rotation.y = lerpAng(root.rotation.y, want, Math.min(1, dt * 4));
    const facing = Math.cos(root.rotation.y - want);
    const step = Math.min(dist, WALK * 0.8 * dt * Math.max(0, facing));
    root.position.addScaledVector(d.normalize(), step);
    if (dist < 0.05) {
      w.mode = 'idle'; w.t = 0; w.dur = 3 + Math.random() * 7;
      // đứng lại: hay nhìn ra phía bên phải (thung lũng / cánh đồng), đôi khi nhìn xe hoặc nhìn dọc đường
      const r = Math.random();
      w.face = r < 0.5 ? FACE_CAR + (Math.random() - 0.5) * 0.9 : r < 0.75 ? FACE_REAR + (Math.random() - 0.5) * 1.2 : FACE_FRONT + (Math.random() - 0.5) * 1.2;
    }
  }

  // chọn điểm đến ngẫu nhiên cách 1.5–4.5 m, trước đầu xe, trong vòng 10 m quanh chỗ dừng
  _pickTarget(dim) {
    const pos = this.person.root.position, w = this.wd;
    const zMax = -dim.length / 2 - 0.9, zMin = -dim.length / 2 - 8;
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2, r = 1.5 + Math.random() * 3;
      const x = pos.x + Math.sin(a) * r, z = pos.z + Math.cos(a) * r;
      if (x < -1.3 || x > 2.8 || z > zMax || z < zMin || Math.hypot(x, z) > 9.5) continue;
      w.target.set(x, 0, z);
      return true;
    }
    return false;
  }

  // quay đầu nhìn quanh (lên trời, sang hai bên) — ngẫu nhiên, mượt; khi đưa thuốc lên miệng thì nhìn thẳng
  _look(dt) {
    const p = this.person, l = this.lk;
    if (!p.head) return;
    const free = this.state === 'parked' && this.smokeU > 3.4;
    if (free && (l.t -= dt) <= 0) {
      l.t = 1.5 + Math.random() * 3.5;
      const r = Math.random();
      if (r < 0.25) { l.ty = (Math.random() - 0.5) * 0.4; l.tp = 0.35 + Math.random() * 0.25; }     // ngước nhìn trời
      else if (r < 0.75) { l.ty = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.45); l.tp = (Math.random() - 0.4) * 0.2; }   // nhìn sang bên
      else { l.ty = (Math.random() - 0.5) * 0.3; l.tp = (Math.random() - 0.5) * 0.15; }               // nhìn thẳng
    }
    const keep = free ? 1 - this.smoking.atMouth : 0;
    const k = Math.min(1, dt * 2.2);
    l.y += (l.ty * keep - l.y) * k; l.p += (l.tp * keep - l.p) * k;
    if (Math.abs(l.y) + Math.abs(l.p) < 1e-3) return;
    // xoay cổ + đầu (chia đôi) quanh trục đứng và trục ngang của người, ghi đè lên tư thế animation
    p.root.updateMatrixWorld(true);
    const right = this._t2.set(1, 0, 0).applyQuaternion(p.root.getWorldQuaternion(this._q1));
    this._q2.setFromAxisAngle(UP, l.y * 0.5).multiply(this._q3.setFromAxisAngle(right, -l.p * 0.5));
    for (const b of [p.neck, p.head]) {
      if (!b) continue;
      b.getWorldQuaternion(this._q1);
      b.parent.getWorldQuaternion(this._q4);
      b.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1)));
      b.updateMatrixWorld(true);
    }
  }

  // áp IK tay phải (sau khi animation đã đặt tư thế). Khuỷu tay chĩa chéo ra ngoài: đưa lên miệng thì ra ngang - xuống,
  // buông cạnh hông thì ra sau - ngoài => cánh tay không gập vào thân / xuyên qua ngực
  _hand() {
    if (this.handW <= 0.001 || !this.person.arms?.r) return;
    const sm = this.smoking, m = sm.atMouth;
    const pole = this._pole.copy(sm.R).multiplyScalar(0.55 + 0.35 * m).addScaledVector(sm.F, -0.65 * (1 - m) + 0.1 * m).addScaledVector(UP, -0.35 - 0.2 * m);
    const A = this.person.arms.r[2].getWorldPosition(this._A);
    this.person.reach('r', A.lerp(this.handT, this.handW), pole);
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
      root.rotation.y = lerpAng(this.enterYaw ?? FACE_CAR, Math.atan2(this.corner.x - this.stand.x, this.corner.z - this.stand.z), ease(t / 0.6));
      return;
    }
    const tWalk = 0.6, d2 = this.stand.distanceTo(this.corner) / WALK, d1 = this.corner.distanceTo(this.out) / WALK, dWalk = d1 + d2;
    if (t < tWalk + dWalk) {
      p.play('Walk_Loop', 0.3);
      this._walk(root, [this.stand, this.corner, this.out], [d2, d1], t - tWalk, dt);
      return;
    }
    // tới cạnh cửa: quay về phía cửa, mở cửa (cửa đóng sẵn từ lúc bước ra), rồi quay vào xe
    const tTurn = tWalk + dWalk;
    if (t < tTurn + 1.1) {
      p.play('Idle_Loop', 0.25);
      root.position.copy(this.out);
      root.rotation.y = t < tTurn + 0.75 ? lerpAng(FACE_REAR, FACE_DOOR, ease((t - tTurn) / 0.35))
        : lerpAng(FACE_DOOR, FACE_CAR, ease((t - tTurn - 0.75) / 0.35));
      this.cars.setDoor(ease((t - tTurn - 0.15) / 0.6));
      return;
    }
    this.cars.setDoor(1);
    const tSit = tTurn + 1.1, dSit = 1.4;
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
