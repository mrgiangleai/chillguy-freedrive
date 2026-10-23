import * as THREE from 'three';

// Camera quan sát tự do cho chế độ Stop (bật/tắt bằng phím ` hoặc nút Setting 🛠️).
// 4 góc: Top (từ trên xuống) / Front (trước đầu xe) / Side (bên hông) / Free (bay tự do).
// Module tự lo phím + chuột của chế độ này; main.js chỉ gọi update() và enter()/exit().
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const MODES = [
  { id: 'top', name: 'Top' },
  { id: 'front', name: 'Front' },
  { id: 'side', name: 'Side' },
  { id: 'free', name: 'Free' },
];
const EL_TOP = Math.PI / 2 - 0.004;      // gần thẳng đứng, tránh lookAt suy biến khi nhìn đúng trục Y
const EL_SIDE = Math.asin(1.6 / 12);     // Front / Side: cao 1.6 m ở khoảng cách 12 m
const FREE_KEYS = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyE', 'KeyQ', 'KeyC', 'Space', 'ShiftLeft', 'ShiftRight'];

export class AdminCam {
  constructor(camera) {
    this.camera = camera;
    this.active = false;
    this.mode = 'top';
    this.dist = { top: 40, front: 12, side: 12 };   // khoảng cách từng góc (m), lăn chuột chỉnh trong 2–800
    this.az = 0;                                    // góc quanh xe so với đầu xe (rad)
    this.el = EL_TOP;                               // cao độ camera (rad)
    this.free = { pos: new THREE.Vector3(), yaw: 0, pitch: 0, speed: 30 };
    this.s = 0;                                     // drive.s để hiện trong bảng
    this.focus = null;                              // bản đồ Stop: tâm quay thay cho xe ({x, z, y})
    this._carY = 0;                                 // cao độ xe lúc cập nhật (giữ độ cao camera khi dời)
    this.held = new Set();
    this.pointers = new Map();
    this.pinch = 0;
    this.infoT = 0;
    this.onExit = null;                             // main.js gắn hàm trả thời tiết / giờ
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this.dom = {
      panel: document.getElementById('admin'),
      name: document.getElementById('admin-name'),
      pos: document.getElementById('admin-pos'),
      s: document.getElementById('admin-s'),
      info: document.getElementById('admin-info'),
      exit: document.getElementById('admin-exit'),
      cams: [...document.querySelectorAll('#admin [data-cam]')],
    };
    for (const b of this.dom.cams) b.addEventListener('click', () => this.setMode(b.dataset.cam));
    this.dom.exit?.addEventListener('click', () => this.onExit?.());
    this.onKey = (e) => {
      if (!this.active) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
      if (e.type === 'keydown') {
        if (e.repeat) return;
        const n = e.code.replace('Numpad', 'Digit');
        if (n === 'Digit1') return this.setMode('top');
        if (n === 'Digit2') return this.setMode('front');
        if (n === 'Digit3') return this.setMode('side');
        if (n === 'Digit4') return this.setMode('free');
        if (n === 'Digit0') return this.clearFocus();       // về xe: bỏ tâm quay do bản đồ đặt
        if (FREE_KEYS.includes(e.code)) {
          this.held.add(e.code);
          if (e.code === 'Space') e.preventDefault();
        }
      } else this.held.delete(e.code);
    };
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('keyup', this.onKey);
    window.addEventListener('blur', () => this.held.clear());
    const canvas = document.getElementById('c');
    this.onDown = (e) => {
      if (!this.active) return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      canvas.setPointerCapture?.(e.pointerId);
      if (this.pointers.size === 2) this.pinch = this.spread();
    };
    this.onMove = (e) => {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (this.pointers.size === 2) {                 // chụm 2 ngón: thu phóng
        const d = this.spread();
        if (this.pinch > 0 && d > 0) this.zoomBy(this.pinch / d);
        this.pinch = d;
        return;
      }
      if (this.mode === 'free') {
        this.free.yaw -= dx * 0.004;
        this.free.pitch = clamp(this.free.pitch - dy * 0.004, -1.5, 1.5);
      } else {                                        // kéo chuột: xoay quanh xe
        this.az -= dx * 0.006;
        this.el = clamp(this.el + dy * 0.005, -0.25, EL_TOP);
      }
    };
    this.onUp = (e) => {
      this.pointers.delete(e.pointerId);
      if (this.pointers.size < 2) this.pinch = 0;
    };
    canvas.addEventListener('pointerdown', this.onDown);
    canvas.addEventListener('pointermove', this.onMove);
    canvas.addEventListener('pointerup', this.onUp);
    canvas.addEventListener('pointercancel', this.onUp);
    this.onWheel = (e) => {
      if (!this.active) return;
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
      if (this.mode === 'free') this.free.speed = clamp(this.free.speed * Math.exp(-clamp(dy, -200, 200) * 0.0012), 1, 240);
      else this.zoomBy(Math.exp(clamp(dy, -200, 200) * 0.0012));
    };
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
  }

  spread() {
    const [a, b] = [...this.pointers.values()];
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  }

  // f < 1: lại gần, f > 1: ra xa
  zoomBy(f) {
    if (this.mode === 'free') return;
    this.dist[this.mode] = clamp(this.dist[this.mode] * f, 2, 800);
  }

  // bản đồ Stop: dời camera tới (x, z), giữ nguyên độ cao camera hiện tại; xe không dời.
  // Free: đổi free.pos; Top / Front / Side: đặt tâm quay thay cho xe (admin.focus).
  moveTo(x, z) {
    if (!this.active) return;
    if (this.mode === 'free') { this.free.pos.x = x; this.free.pos.z = z; this.camera.position.x = x; this.camera.position.z = z; }
    else this.focus = { x, z, y: this._carY };            // tâm quay thay cho xe, giữ nguyên độ cao camera
    this.syncInfo(true);
  }
  // về xe: bỏ tâm quay do bản đồ đặt (nút ◎ / phím 0)
  clearFocus() { this.focus = null; this.syncInfo(true); }

  // lấy vị trí / hướng camera đang có làm điểm bắt đầu cho góc Free
  captureFree() {
    const e = this._e.setFromQuaternion(this.camera.quaternion, 'YXZ');
    this.free.pos.copy(this.camera.position);
    this.free.yaw = e.y;
    this.free.pitch = clamp(e.x, -1.5, 1.5);
  }

  setMode(id) {
    if (!MODES.some((m) => m.id === id)) return;
    if (id === 'free' && this.mode !== 'free') this.captureFree();
    this.mode = id;
    this.az = id === 'side' ? Math.PI / 2 : 0;
    this.el = id === 'top' ? EL_TOP : EL_SIDE;
    for (const b of this.dom.cams) b.classList.toggle('on', b.dataset.cam === id);
    this.syncInfo(true);
  }

  enter() {
    this.active = true;
    this.held.clear();
    this.pointers.clear();
    this.focus = null;
    this.dist = { top: 40, front: 12, side: 12 };
    this.free.speed = 30;
    this.captureFree();
    this.mode = 'top';
    this.az = 0;
    this.el = EL_TOP;
    for (const b of this.dom.cams) b.classList.toggle('on', b.dataset.cam === 'top');
    if (this.dom.panel) this.dom.panel.hidden = false;
    this.syncInfo(true);
  }

  exit() {
    this.active = false;
    this.held.clear();
    this.pointers.clear();
    this.focus = null;
    this.camera.up.set(0, 1, 0);                    // trả "up" mặc định cho camera game
    if (this.dom.panel) this.dom.panel.hidden = true;
  }

  syncInfo(force = false) {
    if (!this.dom.name) return;
    const m = MODES.find((x) => x.id === this.mode);
    this.dom.name.textContent = m?.name ?? '';
    const p = this.camera.position;
    this.dom.pos.textContent = `${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z.toFixed(1)}`;
    this.dom.s.textContent = `s = ${this.s.toFixed(1)} m`;
    this.dom.info.textContent = this.mode === 'free'
      ? `${this.free.speed.toFixed(0)} m/s`
      : `${this.dist[this.mode].toFixed(0)} m`;
  }

  moveFree(dt) {
    const h = this.held, f = this.free;
    const cy = Math.cos(f.yaw), sy = Math.sin(f.yaw), cp = Math.cos(f.pitch), sp = Math.sin(f.pitch);
    const v = this._v.set(0, 0, 0);
    if (h.has('KeyW')) v.x -= sy * cp, v.y += sp, v.z -= cy * cp;
    if (h.has('KeyS')) v.x += sy * cp, v.y -= sp, v.z += cy * cp;
    if (h.has('KeyD')) v.x += cy, v.z -= sy;
    if (h.has('KeyA')) v.x -= cy, v.z += sy;
    if (h.has('KeyE') || h.has('Space')) v.y += 1;
    if (h.has('KeyQ') || h.has('KeyC')) v.y -= 1;
    if (v.lengthSq() > 0) {
      const sp4 = h.has('ShiftLeft') || h.has('ShiftRight') ? 8 : 1;
      v.normalize().multiplyScalar(f.speed * sp4 * dt);
      f.pos.add(v);
    }
  }

  // dt: thời gian thật (Stop vẫn cho camera bay); car: { pos, yaw, s }
  update(dt, car) {
    if (!this.active) return;
    const cam = this.camera;
    this.s = car.s ?? this.s;
    this._carY = car.pos.y;
    if (this.mode === 'free') {
      this.moveFree(dt);
      cam.position.copy(this.free.pos);
      cam.up.set(0, 1, 0);
      cam.rotation.order = 'YXZ';
      cam.rotation.set(this.free.pitch, this.free.yaw, 0);
    } else {
      const C = this.focus || car.pos;                 // tâm quay: điểm bấm trên bản đồ hoặc xe
      const d = this.dist[this.mode];
      const fwdX = -Math.sin(car.yaw), fwdZ = -Math.cos(car.yaw);
      const rgtX = Math.cos(car.yaw), rgtZ = -Math.sin(car.yaw);
      const ce = Math.cos(this.el) * d, se = Math.sin(this.el) * d;
      const ca = Math.cos(this.az), sa = Math.sin(this.az);
      cam.position.set(
        C.x + (fwdX * ca + rgtX * sa) * ce,
        C.y + se,
        C.z + (fwdZ * ca + rgtZ * sa) * ce,
      );
      // nhìn gần thẳng đứng: lấy hướng đầu xe làm "lên" để khung hình không bị xoay lộn xộn
      if (this.el > 1.45) cam.up.set(fwdX, 0, fwdZ); else cam.up.set(0, 1, 0);
      cam.lookAt(C.x, C.y + 0.7, C.z);
    }
    if (Math.abs(cam.fov - 55) > 0.01 || Math.abs(cam.near - 0.3) > 0.001) {
      cam.fov = 55; cam.near = 0.3; cam.updateProjectionMatrix();
    }
    this.infoT -= dt;
    if (this.infoT <= 0) { this.syncInfo(); this.infoT = 0.12; }
  }
}
