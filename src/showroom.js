import * as THREE from 'three';

// Chế độ "Race!": showroom 3D riêng (không phải đường đi) để chọn xe + người lái trước khi vào game.
// Cảnh riêng nhưng dùng chung renderer + hậu kỳ (post): vẽ vào post.sceneRT rồi post.render (tone mapping, bloom nhẹ).
// Sàn bóng: vẽ 2 lượt — lượt 1 lật cả "phòng" qua mặt sàn (y = 0) làm ảnh phản chiếu, lượt 2 vẽ sàn trong mờ đè lên rồi vẽ phòng thật.
// Xe (cars.root) được dời từ cảnh chính sang bàn xoay khi mở showroom và trả lại khi đóng.

const TURN_R = 3.2;          // bán kính bàn xoay
const SPIN = 0.22;           // rad/s khi bật "Tự quay"

export class Showroom {
  constructor(renderer, post) {
    this.renderer = renderer;
    this.post = post;
    this.active = false;
    this.spinOn = true;
    this.exposure = 0.95;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
    this.orbit = { yaw: 0.75, pitch: 0.2, dist: 8.5, tYaw: 0.75, tPitch: 0.2, tDist: 8.5 };
    this.target = new THREE.Vector3(0, 0.62, 0);

    this.room = new THREE.Group();        // mọi thứ được lật để làm ảnh phản chiếu (trừ sàn)
    this.scene.add(this.room);
    this.spin = new THREE.Group();        // bàn xoay: xe + người lái
    this.room.add(this.spin);
    this.floor = new THREE.Group();       // sàn + mặt bàn xoay (không lật)
    this.scene.add(this.floor);

    this.env = this._studioEnv();
    this.scene.environment = this.env;
    this._backdrop();
    this._lights();
    this._stage();
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

  // phông nền: vòm tối, sáng nhẹ ở giữa phía sau xe; giá trị màu tuyến tính (hậu kỳ tự tone mapping)
  _backdrop() {
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { uYaw: { value: 0 } },
      vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vP; uniform float uYaw;
        void main(){
          vec3 d = normalize(vP);
          float h = clamp(d.y, -0.2, 1.0);
          vec3 c = mix(vec3(0.012, 0.013, 0.016), vec3(0.003, 0.0035, 0.005), smoothstep(0.0, 0.7, h));
          float a = mod(atan(d.x, d.z) - uYaw, 6.28318) - 3.14159;   // 0 = phía sau xe nhìn từ camera
          float glow = exp(-pow(length(vec2(a * 0.9, (h - 0.08) * 2.6)), 2.0) * 1.6);   // quầng sáng sau xe (luôn theo camera)
          c += vec3(0.05, 0.055, 0.065) * glow;
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    this.backdrop = new THREE.Mesh(new THREE.SphereGeometry(60, 48, 24), mat);
    this.backdrop.renderOrder = -10;
    this.room.add(this.backdrop);

    // dải đèn trần nhìn thấy được (phát sáng => bloom nhẹ), phản chiếu xuống sàn
    const strip = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff4e6).multiplyScalar(6), fog: false });
    const g = new THREE.BoxGeometry(0.12, 0.04, 7.5);
    for (const x of [-1.5, 0, 1.5]) {
      const m = new THREE.Mesh(g, strip);
      m.position.set(x, 5.2, 0);
      this.room.add(m);
    }
    const ringG = new THREE.TorusGeometry(5.6, 0.03, 8, 128);   // vành đèn tròn trên trần
    const ring = new THREE.Mesh(ringG, strip);
    ring.rotation.x = Math.PI / 2; ring.position.y = 5.4;
    this.room.add(ring);
  }

  _lights() {
    const key = new THREE.DirectionalLight(0xfff1e0, 2.4);      // key: trước – trái – trên, hơi ấm
    key.position.set(-5, 7, 5);
    const rim = new THREE.DirectionalLight(0xd8e4ff, 3.2);      // rim: sau – phải, lạnh => viền sáng mép xe
    rim.position.set(4, 4, -7);
    const fill = new THREE.DirectionalLight(0xffffff, 0.6);     // fill thấp phía phải
    fill.position.set(6, 1.5, 3);
    const top = new THREE.SpotLight(0xffffff, 60, 14, 0.75, 0.6, 1.6);   // đèn chụp từ trần xuống bàn xoay
    top.position.set(0, 7, 0);
    top.target.position.set(0, 0, 0);
    const hemi = new THREE.HemisphereLight(0x9aa4b8, 0x0c0c0e, 0.35);
    this.room.add(key, rim, fill, top, top.target, hemi);
  }

  _stage() {
    // sàn lớn: tối bóng, trong mờ ở gần (thấy ảnh phản chiếu), đặc dần ra xa
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
    floor.position.y = -0.045;
    floor.renderOrder = -2;                 // vẽ trước kính xe (cũng trong suốt)
    this.floor.add(floor);
    // mặt bàn xoay: bóng hơn sàn (ảnh phản chiếu rõ hơn)
    this.disc = new THREE.Mesh(new THREE.CircleGeometry(TURN_R, 96).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({
      color: 0x101114, roughness: 0.12, metalness: 0.25, transparent: true, opacity: 0.6, envMapIntensity: 0.9,
    }));
    this.disc.position.y = 0.001;
    this.disc.renderOrder = -1;
    this.floor.add(this.disc);
    // gờ bàn xoay + viền đèn mảnh
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(TURN_R, TURN_R + 0.04, 0.045, 96, 1, true), new THREE.MeshStandardMaterial({
      color: 0x1a1b1f, roughness: 0.3, metalness: 0.8,
    }));
    edge.position.y = -0.022;
    this.floor.add(edge);
    const glow = new THREE.Mesh(new THREE.TorusGeometry(TURN_R + 0.05, 0.012, 6, 160), new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xffe2b8).multiplyScalar(3), fog: false,
    }));
    glow.rotation.x = Math.PI / 2; glow.position.y = -0.002;
    this.floor.add(glow);
  }

  // ---------- mở / đóng ----------
  // cars: Cars; trả xe về `home` (cảnh chính) khi đóng
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
    this.spin.rotation.y = 0;
  }

  close(carEnv) {
    if (!this.active) return;
    this.active = false;
    const c = this.cars, s = this._saved;
    s.parent.add(c.root);
    c.root.position.copy(s.pos);
    c.root.rotation.copy(s.rot);
    c.contact.visible = s.contact;
    c.lights.visible = s.lights;
    c.setEnvMap(carEnv ?? s.env);
  }

  // ---------- điều khiển camera ----------
  drag(dx, dy) {
    const o = this.orbit;
    o.tYaw -= dx * 0.006;
    o.tPitch = THREE.MathUtils.clamp(o.tPitch + dy * 0.004, 0.02, 0.95);
  }
  zoom(f) {
    const o = this.orbit, len = this.cars?.dim?.length || 4.5;
    o.tDist = THREE.MathUtils.clamp(o.tDist * f, len * 0.95, len * 2.8);
  }

  // ---------- mỗi khung hình ----------
  update(dt) {
    const post = this.post, o = this.orbit, cam = this.camera;
    if (this.spinOn) this.spin.rotation.y += SPIN * dt;
    const k = 1 - Math.exp(-dt * 6);
    o.yaw += (o.tYaw - o.yaw) * k; o.pitch += (o.tPitch - o.pitch) * k; o.dist += (o.tDist - o.dist) * k;
    this.target.y = (this.cars?.dim?.height || 1.3) * 0.45;
    const size = post.size;
    if (size.x && size.y) cam.aspect = size.x / size.y;
    // màn dọc (điện thoại): góc rộng hơn + lùi xa để thấy trọn chiều dài xe
    const tall = cam.aspect < 1.2, fit = tall ? Math.min(1.8, Math.max(1, 1.2 / cam.aspect)) : 1;
    cam.fov = tall ? 50 : 32;
    cam.position.set(Math.sin(o.yaw) * Math.cos(o.pitch), Math.sin(o.pitch), Math.cos(o.yaw) * Math.cos(o.pitch))
      .multiplyScalar(o.dist * fit).add(this.target);
    cam.position.y = Math.max(cam.position.y, 0.25);
    cam.lookAt(this.target);
    cam.updateProjectionMatrix();
    this.backdrop.material.uniforms.uYaw.value = o.yaw;
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
    this.cars.contact.visible = false;
    this.room.scale.y = -1;
    r.render(this.scene, cam);
    // lượt 2: sàn trong mờ + phòng thật
    this.room.scale.y = 1;
    this.floor.visible = true;
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
