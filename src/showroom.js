import * as THREE from 'three';

// Chế độ "Race!": showroom 3D riêng (không phải đường đi) để chọn xe + người lái trước khi vào game.
// Cảnh riêng nhưng dùng chung renderer + hậu kỳ (post): vẽ vào post.sceneRT rồi post.render (tone mapping, bloom nhẹ).
// Phòng kín 4 vách + trần; sàn bóng: vẽ 2 lượt — lượt 1 lật cả "phòng" qua mặt sàn (y = 0) làm ảnh phản chiếu,
// lượt 2 vẽ sàn trong mờ đè lên rồi vẽ phòng thật.
// Xe (cars.root) + người lái được dời từ cảnh chính lên bục tròn khi mở showroom và trả lại khi đóng.
// Chế độ vật lý: xe / người rơi xuống, chạm mặt bục (xe nhún giảm xóc) và quay theo bục thật; tắt thì bục đứng yên, xe + người tự quay tại chỗ.

const TURN_R = 3.2;          // bán kính bục tròn
const TABLE_H = 0.3;         // bục cao 30 cm
const SPIN = 0.22;           // rad/s khi bật "Tự quay"
const CEIL = 5.6;            // trần
const WALL_Z = 5.2;          // tường sau ở z = -WALL_Z (gần bục)
const ROOM_X = 9;            // 2 vách hông ở x = ±ROOM_X
const ROOM_F = 11;           // vách trước ở z = +ROOM_F
const GRAV = 9.8;
const LIGHTS_KEY = 'chilldrive.raceLights';
const MAX_LIGHTS = 8;
// đèn: pos (m), intensity, size = tầm chiếu (m), spread = góc spot (độ) / độ toả omni (0–100), soft = độ mềm viền spot
const LIGHT_DEFAULT = { pos: [2.5, 3.4, 2.5], intensity: 80, size: 12, spread: 30, soft: 0.5, color: '#ffffff' };
// đèn / ánh sáng có sẵn trong phòng (chỉnh được, không xoá; "Mặc định" trả về giá trị này)
const ROOM_LIGHTS = [
  { id: 'key', name: 'Key', type: 'dir', pos: [-4, 5, 4], intensity: 2.4, color: '#fff1e0' },
  { id: 'rim', name: 'Rim', type: 'dir', pos: [3.5, 4.5, -4.6], intensity: 3.2, color: '#d8e4ff' },
  { id: 'fill', name: 'Fill', type: 'dir', pos: [6, 1.5, 3], intensity: 0.6, color: '#ffffff' },
  { id: 'top', name: 'Đèn trần', type: 'spot', pos: [0, CEIL - 0.1, 0], intensity: 45, size: 14, spread: 49, soft: 0.6, color: '#ffffff' },
  { id: 'hemi', name: 'Nền', type: 'hemi', intensity: 0.35, color: '#9aa4b8', color2: '#0c0c0e' },
  { id: 'led', name: 'Dải LED', type: 'led', intensity: 1, color: '#fff4e6' },
  { id: 'exposure', name: 'Phơi sáng', type: 'exposure', intensity: 0.95 },
];

export class Showroom {
  constructor(renderer, post) {
    this.renderer = renderer;
    this.post = post;
    this.active = false;
    this.spinOn = true;
    this.physics = true;
    this.exposure = 0.95;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
    this.orbit = { yaw: 0.75, pitch: 0.2, dist: 8.5, tYaw: 0.75, tPitch: 0.2, tDist: 8.5 };
    this.subject = 'car';                 // 'car' | 'person': camera xoay quanh đối tượng đang chọn
    this.personRoot = null;               // main gán: để camera ngắm người
    this.target = new THREE.Vector3(0, TABLE_H + 0.6, 0);
    this.angle = 0;

    this.room = new THREE.Group();        // mọi thứ được lật để làm ảnh phản chiếu (trừ sàn)
    this.scene.add(this.room);
    this.table = new THREE.Group();       // bục tròn (quay khi bật vật lý)
    this.room.add(this.table);
    this.spin = new THREE.Group();        // xe + người lái, đứng trên mặt bục
    this.spin.position.y = TABLE_H;
    this.room.add(this.spin);
    this.floor = new THREE.Group();       // sàn (không lật)
    this.scene.add(this.floor);
    // rơi / chạm bục (vật lý): y = độ cao trên mặt bục, v = vận tốc; bob = nhún giảm xóc của xe
    this.drops = { car: { y: 0, v: 0 }, person: { y: 0, v: 0 } };
    this.bob = { y: 0, v: 0, p: 0, pv: 0 };

    this.env = this._studioEnv();
    this.scene.environment = this.env;
    this.led = [];                        // vật liệu phát sáng: [material, độ sáng gốc]
    this._room();
    this._stage();
    this.aim = new THREE.Object3D();      // spot chiếu vào giữa bục
    this.aim.position.set(0, TABLE_H + 0.5, 0);
    this.room.add(this.aim);
    this.gizmos = new THREE.Group();      // chấm sáng kéo đèn: chỉ hiện khi mở lớp cài đặt đèn
    this.gizmos.visible = false;
    this.scene.add(this.gizmos);
    this.editing = false;
    this.userLights = [];                 // mọi đèn (có sẵn + chú thêm); có sẵn: item.builtin = def
    this.selected = null;
    this._dot = new THREE.SphereGeometry(0.11, 16, 10);
    this._v = new THREE.Vector3(); this._n = new THREE.Vector3(); this._t = new THREE.Vector3();
    this._ray = new THREE.Raycaster(); this._plane = new THREE.Plane();
    this._loadLights();
    this._clear = new THREE.Color();
    this._saved = null;
  }

  // ---------- dựng cảnh ----------
  // env map studio: phòng tối + softbox trần (dải dài), 2 tấm hắt hông, dải rim phía sau, sàn xám => vệt sáng dài, mềm trên sơn xe
  _studioEnv() {
    const s = new THREE.Scene();
    const box = new THREE.Mesh(new THREE.BoxGeometry(30, 14, 30), new THREE.MeshBasicMaterial({ color: 0x07080a, side: THREE.BackSide }));
    box.position.y = 5;
    s.add(box);
    const panel = (w, h, k, color = 0xffffff) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
      m.material.color.multiplyScalar(k);
      s.add(m);
      return m;
    };
    for (const x of [-1.6, 0, 1.6]) {                         // 3 dải đèn trần dọc theo thân xe
      const p = panel(0.55, 9, 9, 0xfff6ea); p.rotation.x = Math.PI / 2; p.position.set(x, 9, 0);
    }
    const l = panel(5, 3.5, 2.6, 0xeaf0ff); l.rotation.y = Math.PI / 2; l.position.set(-12, 3, 2);   // hắt trái (lạnh)
    const r = panel(5, 3.5, 1.8, 0xfff0dc); r.rotation.y = -Math.PI / 2; r.position.set(12, 3, -2);  // hắt phải (ấm)
    const rim = panel(14, 0.5, 6, 0xdfe8ff); rim.position.set(0, 2.2, -14);                         // dải rim sau
    const front = panel(10, 1.2, 1.1, 0xffffff); front.rotation.y = Math.PI; front.position.set(0, 1.5, 14);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshBasicMaterial({ color: 0x15161a }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -1.9;
    s.add(ground);
    const pm = new THREE.PMREMGenerator(this.renderer);
    const tex = pm.fromScene(s, 0.02).texture;
    pm.dispose();
    s.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
    return tex;
  }

  _glow(color, k) {
    const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), fog: false });
    this.led.push([m, k]);
    return m;
  }

  // phòng kín: 4 vách cùng màu, trần tối có dải đèn treo; riêng tường sau có vạch LED dọc + hắt sáng chân tường / mép trần
  _room() {
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0e0f12, roughness: 0.5, metalness: 0.15 });
    const depth = WALL_Z + ROOM_F, midZ = (ROOM_F - WALL_Z) / 2;
    const wall = (w, x, z, ry) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, CEIL), wallMat);
      m.position.set(x, CEIL / 2, z); m.rotation.y = ry;
      this.room.add(m);
    };
    wall(2 * ROOM_X, 0, -WALL_Z, 0);                         // sau
    wall(2 * ROOM_X, 0, ROOM_F, Math.PI);                    // trước
    wall(depth, -ROOM_X, midZ, Math.PI / 2);                 // trái
    wall(depth, ROOM_X, midZ, -Math.PI / 2);                 // phải
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(2 * ROOM_X, depth).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({
      color: 0x08090b, roughness: 0.7, metalness: 0.1,
    }));
    ceil.position.set(0, CEIL, midZ);
    this.room.add(ceil);

    this._wallLed();
    const cove = this._glow(0xdfe8ff, 2.2);
    for (const y of [0.06, CEIL - 0.06]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(2 * ROOM_X, 0.03, 0.03), cove);
      m.position.set(0, y, -WALL_Z + 0.05);
      this.room.add(m);
    }
    // dải đèn trần nhìn thấy được (phát sáng => bloom nhẹ) + vành đèn tròn, phản chiếu xuống sàn
    const strip = this._glow(0xfff4e6, 6);
    const g = new THREE.BoxGeometry(0.12, 0.04, 7.5);
    for (const x of [-1.5, 0, 1.5]) {
      const m = new THREE.Mesh(g, strip);
      m.position.set(x, CEIL - 0.4, 0);
      this.room.add(m);
    }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.03, 8, 128), strip);
    ring.rotation.x = Math.PI / 2; ring.position.y = CEIL - 0.2;
    this.room.add(ring);
  }

  // tường sau: vạch đèn LED dọc, vệt sáng chạy từ dưới lên; màu Trắng / Vàng / RGB (setLedMode).
  // Hắt sáng thật: 3 đèn point chạy lên theo vệt sáng, nháy / đổi màu như đèn xe cảnh sát.
  _wallLed() {
    const H = CEIL - 1.0;
    this.wall = { H, y0: 0.5, t: 0, lights: [], speed: 0.45 };
    try { this.ledMode = +localStorage.getItem('chilldrive.raceLed') || 0; } catch { this.ledMode = 0; }
    if (!(this.ledMode >= 0 && this.ledMode < 3)) this.ledMode = 0;
    const mat = this.ledMat = new THREE.ShaderMaterial({
      fog: false,
      uniforms: { uT: { value: 0 }, uMode: { value: this.ledMode }, uK: { value: 1 } },
      vertexShader: `varying float vY; varying float vX;
        void main(){ vY = position.y / ${H.toFixed(2)} + 0.5; vX = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying float vY; varying float vX; uniform float uT, uMode, uK;
        vec3 hue(float h){ return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
        void main(){
          float ph = fract(vY - uT * ${this.wall.speed.toFixed(2)});            // vệt sáng chạy lên (đầu vệt ở ph = 0)
          float seg = (1.0 - smoothstep(0.0, 0.22, ph)) + smoothstep(0.97, 1.0, ph);
          float dots = 0.75 + 0.25 * step(0.5, fract(vY * 46.0));              // hạt LED
          vec3 c = uMode < 0.5 ? vec3(1.0, 0.97, 0.93) : uMode < 1.5 ? vec3(1.0, 0.62, 0.18) : hue(fract(vY * 0.5 - uT * 0.15 + vX * 0.05));
          gl_FragColor = vec4(c * (0.18 + 2.6 * seg) * dots * uK, 1.0);
        }`,
    });
    const bar = new THREE.BoxGeometry(0.035, H, 0.02);
    for (let i = -4; i <= 4; i++) {
      const m = new THREE.Mesh(bar, mat);
      m.position.set(i * 1.9, this.wall.y0 + H / 2, -WALL_Z + 0.02);
      this.room.add(m);
    }
    for (const x of [-5.7, 0, 5.7]) {
      const l = new THREE.PointLight(0xffffff, 0, 9, 1.4);
      l.position.set(x, 1, -WALL_Z + 0.5);
      this.room.add(l);
      this.wall.lights.push(l);
    }
  }

  setLedMode(m) { this.ledMode = m; this.ledMat.uniforms.uMode.value = m; }

  _updateWall(dt) {
    const w = this.wall, k = this.ledMat.uniforms.uK.value;
    w.t += dt;
    this.ledMat.uniforms.uT.value = w.t;
    const f = ((w.t * w.speed) % 1 + 1) % 1;          // đầu vệt sáng (0 = chân, 1 = đỉnh)
    const y = w.y0 + f * w.H;
    w.lights.forEach((l, i) => {
      l.position.y = y;
      const flash = this.ledMode === 2 ? 0.55 + 0.45 * Math.max(0, Math.sin(w.t * 9 + i * 2.1)) : 1;   // RGB: nháy kiểu đèn cảnh sát
      l.intensity = 22 * Math.sin(Math.PI * f) * flash * k;
      if (this.ledMode === 0) l.color.setRGB(1, 0.97, 0.93);
      else if (this.ledMode === 1) l.color.setRGB(1, 0.62, 0.18);
      else l.color.setHSL(((f * 0.5 - w.t * 0.15 + l.position.x * 0.05) % 1 + 1) % 1, 1, 0.5);
    });
  }

  // mặt bục: vân xước tròn + vài tia mảnh => nhìn thấy bục đang quay
  _topTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#131418'; g.fillRect(0, 0, 1024, 1024);
    g.translate(512, 512);
    for (let r = 20; r < 512; r += 3) {
      g.strokeStyle = `rgba(255,255,255,${0.012 + 0.018 * Math.abs(Math.sin(r * 0.37))})`;
      g.lineWidth = 1.2;
      g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.stroke();
    }
    g.strokeStyle = 'rgba(255,255,255,0.10)'; g.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      g.beginPath(); g.moveTo(Math.cos(a) * 140, Math.sin(a) * 140); g.lineTo(Math.cos(a) * 500, Math.sin(a) * 500); g.stroke();
    }
    g.strokeStyle = 'rgba(255,215,150,0.35)'; g.lineWidth = 3;
    g.beginPath(); g.arc(0, 0, 470, 0, Math.PI * 2); g.stroke();
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  }

  _stage() {
    // sàn lớn quanh bục: tối bóng, trong mờ ở gần (thấy ảnh phản chiếu), đặc dần ra xa
    const fade = document.createElement('canvas');
    fade.width = fade.height = 256;
    const g = fade.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, '#9a9a9a'); gr.addColorStop(0.35, '#b8b8b8'); gr.addColorStop(1, '#ffffff');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const alpha = new THREE.CanvasTexture(fade);
    alpha.colorSpace = THREE.NoColorSpace;
    const floor = new THREE.Mesh(new THREE.RingGeometry(TURN_R, 40, 96, 1).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({
      color: 0x0b0c0f, roughness: 0.32, metalness: 0.1, transparent: true, alphaMap: alpha, envMapIntensity: 0.6,
    }));
    floor.renderOrder = -2;                 // vẽ trước kính xe (cũng trong suốt)
    this.floor.add(floor);
    const foot = new THREE.Mesh(new THREE.TorusGeometry(TURN_R + 0.14, 0.012, 6, 160), this._glow(0xffe2b8, 2.2));   // viền đèn chân bục
    foot.rotation.x = Math.PI / 2; foot.position.y = 0.004;
    this.floor.add(foot);

    // bục tròn dày: thân kim loại tối, mặt bóng có vân, viền đèn mảnh ở mép trên
    const body = new THREE.Mesh(new THREE.CylinderGeometry(TURN_R, TURN_R + 0.06, TABLE_H, 128, 1, true), new THREE.MeshStandardMaterial({
      color: 0x1b1c20, roughness: 0.25, metalness: 0.85,
    }));
    body.position.y = TABLE_H / 2;
    this.table.add(body);
    const top = new THREE.Mesh(new THREE.CircleGeometry(TURN_R, 128).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({
      map: this._topTexture(), roughness: 0.16, metalness: 0.3, envMapIntensity: 0.9,
    }));
    top.position.y = TABLE_H;
    this.table.add(top);
    const lip = new THREE.Mesh(new THREE.TorusGeometry(TURN_R + 0.005, 0.012, 6, 160), this._glow(0xffe2b8, 3));
    lip.rotation.x = Math.PI / 2; lip.position.y = TABLE_H;
    this.table.add(lip);
  }

  // ---------- đèn ----------
  addLight(type, cfg = {}, builtin = null) {
    if (!builtin && this.userLights.filter((l) => !l.builtin).length >= MAX_LIGHTS) return null;
    const c = { ...(builtin ? {} : LIGHT_DEFAULT), ...(type === 'omni' ? { spread: 50 } : {}), ...cfg, type };
    if (c.pos) c.pos = [...c.pos];
    let light = null;
    if (type === 'spot') { light = new THREE.SpotLight(); light.target = this.aim; }
    else if (type === 'omni') light = new THREE.PointLight();
    else if (type === 'dir') light = new THREE.DirectionalLight();      // chiếu về tâm phòng (target mặc định ở gốc toạ độ)
    else if (type === 'hemi') light = new THREE.HemisphereLight();
    if (light) this.room.add(light);
    let marker = null, line = null;
    if (c.pos) {
      marker = new THREE.Mesh(this._dot, new THREE.MeshBasicMaterial({ fog: false }));
      this.gizmos.add(marker);
      if (type !== 'omni') {                       // vạch chỉ hướng chiếu
        line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), type === 'spot' ? this.aim.position : new THREE.Vector3()]),
          new THREE.LineBasicMaterial({ transparent: true, opacity: 0.45, fog: false }));
        this.gizmos.add(line);
      }
    }
    const item = { cfg: c, light, marker, line, builtin };
    this.userLights.push(item);
    this.applyLight(item);
    return item;
  }

  applyLight(item) {
    const { cfg: c, light, marker, line } = item;
    if (c.type === 'led') { for (const [m, k] of this.led) m.color.set(c.color).multiplyScalar(k * c.intensity); this.ledMat.uniforms.uK.value = c.intensity; return; }
    if (c.type === 'exposure') { this.exposure = c.intensity; return; }
    light.color.set(c.color);
    light.intensity = c.intensity;
    if (c.type === 'hemi') { light.groundColor.set(c.color2); return; }
    light.position.fromArray(c.pos);
    if (c.type === 'spot') {
      light.distance = c.size;
      light.angle = THREE.MathUtils.degToRad(c.spread);
      light.penumbra = c.soft;
      light.decay = 1.6;
    } else if (c.type === 'omni') {
      light.distance = c.size;
      light.decay = 2 - 1.7 * c.spread / 100;   // toả rộng hơn = tắt dần chậm hơn
    }
    marker.position.fromArray(c.pos);
    marker.material.color.set(c.color).multiplyScalar(2.5);
    const s = c.type === 'dir' ? 1.2 : 0.7 + Math.sqrt(c.intensity) / 12;
    marker.scale.setScalar(s * (item === this.selected ? 1.5 : 1));
    if (line) {
      line.geometry.attributes.position.setXYZ(0, ...c.pos);
      line.geometry.attributes.position.needsUpdate = true;
      line.material.color.set(c.color);
    }
  }

  // đèn có sẵn: trả về giá trị gốc
  resetLight(item) {
    if (!item.builtin) return;
    const { id, name, ...def } = item.builtin;
    Object.assign(item.cfg, def, { pos: def.pos && [...def.pos] });
    this.applyLight(item);
  }

  removeLight(item) {
    if (item.builtin) return;
    const i = this.userLights.indexOf(item);
    if (i < 0) return;
    this.userLights.splice(i, 1);
    this.room.remove(item.light); item.light.dispose();
    this.gizmos.remove(item.marker); item.marker.material.dispose();
    if (item.line) { this.gizmos.remove(item.line); item.line.geometry.dispose(); item.line.material.dispose(); }
    if (this.selected === item) this.selected = null;
  }

  select(item) {
    const prev = this.selected;
    this.selected = item;
    if (prev) this.applyLight(prev);
    if (item) this.applyLight(item);
  }

  saveLights() {
    const room = {}, user = [];
    for (const l of this.userLights) { if (l.builtin) room[l.builtin.id] = l.cfg; else user.push(l.cfg); }
    try { localStorage.setItem(LIGHTS_KEY, JSON.stringify({ room, user })); } catch { /* bỏ qua */ }
  }

  _loadLights() {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(LIGHTS_KEY) || '{}') || {}; } catch { /* bỏ qua */ }
    if (Array.isArray(saved)) saved = { user: saved };     // bản cũ: chỉ có đèn chú thêm
    for (const def of ROOM_LIGHTS) {
      const { id, name, ...cfg } = def, s = saved.room?.[id];
      this.addLight(def.type, s && typeof s === 'object' ? { ...cfg, ...s, type: def.type } : cfg, def);
    }
    for (const c of saved.user || []) if (c && (c.type === 'spot' || c.type === 'omni')) this.addLight(c.type, c);
  }

  // điểm kéo gần chỗ chạm nhất (trong 34 px) — dễ bấm trên điện thoại hơn raycast vào quả cầu nhỏ
  pick(x, y) {
    if (!this.editing) return null;
    let best = null, bd = 34;
    for (const it of this.userLights) {
      if (!it.marker) continue;
      const v = this._v.copy(it.marker.position).project(this.camera);
      if (v.z > 1) continue;
      const d = Math.hypot((v.x + 1) / 2 * innerWidth - x, (1 - v.y) / 2 * innerHeight - y);
      if (d < bd) { bd = d; best = it; }
    }
    return best;
  }

  // kéo đèn trên mặt phẳng vuông góc hướng nhìn (xoay camera để đổi chiều sâu; độ cao chỉnh thêm bằng thanh Cao)
  dragLight(item, x, y) {
    const cam = this.camera;
    this._ray.setFromCamera({ x: x / innerWidth * 2 - 1, y: 1 - y / innerHeight * 2 }, cam);
    cam.getWorldDirection(this._n);
    this._plane.setFromNormalAndCoplanarPoint(this._n, this._v.fromArray(item.cfg.pos));
    if (!this._ray.ray.intersectPlane(this._plane, this._v)) return;
    const p = this._v, C = THREE.MathUtils.clamp;
    item.cfg.pos = [C(p.x, -ROOM_X + 0.2, ROOM_X - 0.2), C(p.y, 0.15, CEIL - 0.15), C(p.z, -WALL_Z + 0.2, ROOM_F - 0.2)];
    this.applyLight(item);
  }

  // ---------- mở / đóng ----------
  open(cars) {
    if (this.active) return;
    this.active = true;
    this.cars = cars;
    this._saved = { parent: cars.root.parent, pos: cars.root.position.clone(), rot: cars.root.rotation.clone(), env: cars.envMap,
      contact: cars.contact.visible, lights: cars.lights.visible };
    this.spin.add(cars.root);
    cars.root.position.set(0, 0, 0);
    cars.root.rotation.set(0, 0, 0);
    cars.tilt.position.set(0, 0, 0);
    cars.tilt.rotation.set(0, 0, 0);
    cars.lights.visible = false;                    // quầng đèn pha / hậu của đường đi: tắt trong showroom
    cars.setEnvMap(this.env);
    this.angle = 0;
    this.settle('car'); this.settle('person');
  }

  close(carEnv) {
    if (!this.active) return;
    this.active = false;
    const c = this.cars, s = this._saved;
    s.parent.add(c.root);
    c.root.position.copy(s.pos);
    c.root.rotation.copy(s.rot);
    c.tilt.position.set(0, 0, 0);
    c.tilt.rotation.set(0, 0, 0);
    c.contact.visible = s.contact;
    c.lights.visible = s.lights;
    c.setEnvMap(carEnv ?? s.env);
  }

  // vật lý: thả xe / người từ 45 cm xuống mặt bục (gọi khi đổi xe / người, bật vật lý)
  settle(which) {
    const d = this.drops[which];
    d.y = this.physics ? 0.45 : 0; d.v = 0;
  }

  _physics(dt) {
    const steps = Math.ceil(dt / 0.008), h = dt / Math.max(1, steps), b = this.bob;
    for (let i = 0; i < steps; i++) {
      for (const [k, d] of Object.entries(this.drops)) {
        if (!this.physics) { d.y = 0; d.v = 0; continue; }
        if (d.y <= 0 && d.v === 0) continue;
        d.v -= GRAV * h; d.y += d.v * h;
        if (d.y <= 0) {                                  // chạm mặt bục: nảy nhẹ, xe nhún giảm xóc + chúi đầu
          if (k === 'car') { b.v += d.v * 0.5; b.pv += d.v * 0.05; }
          d.y = 0; d.v = Math.abs(d.v) > 0.6 ? -d.v * 0.18 : 0;
        }
      }
      // giảm xóc: lò xo – giảm chấn (thân xe so với bánh)
      b.v += (-160 * b.y - 11 * b.v) * h; b.y += b.v * h;
      b.pv += (-120 * b.p - 9 * b.pv) * h; b.p += b.pv * h;
    }
  }

  // ---------- điều khiển camera ----------
  drag(dx, dy) {
    const o = this.orbit;
    o.tYaw -= dx * 0.006;
    o.tPitch = THREE.MathUtils.clamp(o.tPitch + dy * 0.004, 0.02, 0.95);
  }
  zoom(f) {
    const o = this.orbit, len = this.cars?.dim?.length || 4.5;
    o.tDist = this.subject === 'car' ? THREE.MathUtils.clamp(o.tDist * f, len * 0.95, len * 2.4) : THREE.MathUtils.clamp(o.tDist * f, 1.6, 7);
  }
  setSubject(s) {
    if (s === this.subject) return;
    this.subject = s;
    this.orbit.tDist = s === 'car' ? 8.5 : 3.6;
  }

  // ---------- mỗi khung hình ----------
  update(dt) {
    const post = this.post, o = this.orbit, cam = this.camera;
    if (this.spinOn) this.angle += SPIN * dt;
    this.table.rotation.y = this.physics ? this.angle : 0;    // vật lý: bục quay, xe + người đứng trên bục quay theo
    this.spin.rotation.y = this.angle;
    this._physics(dt);
    this._updateWall(dt);
    if (this.cars) {
      this.cars.root.position.y = this.drops.car.y;
      this.cars.tilt.position.y = this.bob.y;
      this.cars.tilt.rotation.x = this.bob.p;
    }
    const k = 1 - Math.exp(-dt * 6);
    o.yaw += (o.tYaw - o.yaw) * k; o.pitch += (o.tPitch - o.pitch) * k; o.dist += (o.tDist - o.dist) * k;
    const car = this.subject === 'car' || !this.personRoot;
    if (car) this._t.set(0, TABLE_H + (this.cars?.dim?.height || 1.3) * 0.45, 0);
    else { this.scene.updateMatrixWorld(); this.personRoot.getWorldPosition(this._t); this._t.y = TABLE_H + 0.92; }
    this.target.lerp(this._t, k);
    const size = post.size;
    if (size.x && size.y) cam.aspect = size.x / size.y;
    // màn dọc (điện thoại): góc rộng hơn + lùi xa để thấy trọn chiều dài xe
    const tall = cam.aspect < 1.2, fit = tall && car ? Math.min(1.8, Math.max(1, 1.2 / cam.aspect)) : 1;
    cam.fov = tall ? 50 : 32;
    cam.position.set(Math.sin(o.yaw) * Math.cos(o.pitch), Math.sin(o.pitch), Math.cos(o.yaw) * Math.cos(o.pitch))
      .multiplyScalar(o.dist * fit).add(this.target);
    // trong phòng: không xuyên sàn / trần / 4 vách
    const C = THREE.MathUtils.clamp, p = cam.position;
    p.set(C(p.x, -ROOM_X + 0.4, ROOM_X - 0.4), C(p.y, TABLE_H + 0.1, CEIL - 0.35), C(p.z, -WALL_Z + 0.4, ROOM_F - 0.4));
    cam.lookAt(this.target);
    cam.updateProjectionMatrix();
  }

  render(time) {
    const r = this.renderer, post = this.post, cam = this.camera;
    r.getClearColor(this._clear);
    const clearA = r.getClearAlpha(), autoClear = r.autoClear;
    post.begin();
    r.setClearColor(0x020203, 1);
    r.autoClear = false;
    r.clear(true, true, true);
    // lượt 1: ảnh phản chiếu (lật phòng qua y = 0)
    this.floor.visible = false;
    this.gizmos.visible = false;
    this.cars.contact.visible = false;
    this.room.scale.y = -1;
    r.render(this.scene, cam);
    // lượt 2: sàn trong mờ + phòng thật
    this.room.scale.y = 1;
    this.floor.visible = true;
    this.gizmos.visible = this.editing;
    this.cars.contact.visible = true;
    r.clearDepth();
    r.render(this.scene, cam);
    r.autoClear = autoClear;
    r.setClearColor(this._clear, clearA);

    post.rays.color.setRGB(0, 0, 0);
    r.toneMappingExposure = this.exposure;
    post.render(time, 0.35, 0, null);
  }
}
