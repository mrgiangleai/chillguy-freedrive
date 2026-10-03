import * as THREE from 'three';

// Gương chiếu hậu hai bên (gương soi phẳng thật) khi ngồi trong xe.
// Mỗi gương: tách mặt kính gương (vật liệu "Mirror" của model) thành 2 mảnh trái / phải, tìm mặt phẳng gương.
// Mỗi khung hình: lấy mắt người xem đối xứng qua mặt phẳng gương => camera ảo phía sau gương, nhìn thẳng góc qua
// khung gương (frustum lệch tâm ôm vừa khung gương, mặt cắt gần trùng mặt gương => không thấy gì phía sau gương),
// vẽ cảnh vào texture nhỏ rồi chiếu ngược lên mặt kính (projective texture) => ảnh phản chiếu đúng như gương thật.
// Hai gương vẽ xen kẽ mỗi khung hình một cái cho nhẹ.
const RT_W = 320, RT_H = 200;

// uTex tính trong hệ toạ độ của xe (mặt gương là con trực tiếp của xe) => giữa hai lần vẽ gương (vẽ xen kẽ),
// xe chạy tới vẫn không làm ảnh trong gương bị lệch / giật
const VERT = `
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const FRAG = `
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`;

export class WingMirrors {
  constructor(renderer) {
    this.renderer = renderer;
    this.cam = new THREE.PerspectiveCamera();
    this.cam.layers.enable(3);
    this.frame = 0;
    this.current = null;
    this._v = new THREE.Vector3(); this._e = new THREE.Vector3(); this._p = new THREE.Vector3(); this._n = new THREE.Vector3();
    this._m = new THREE.Matrix4();
    this._q = [0, 1, 2, 3].map(() => new THREE.Vector3());
    this._bias = new THREE.Matrix4().set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
  }

  // dựng gương cho xe (một lần cho mỗi xe, nhớ trong entry)
  setCar(entry) {
    if (this.current && this.current !== entry) this._show(this.current, false);
    this.current = entry;
    if (!entry || entry.wingMirrors !== undefined) return;
    entry.wingMirrors = null;
    const group = entry.group;
    group.updateMatrixWorld(true);
    let glass = null;
    group.traverse((o) => { if (!glass && o.isMesh && /^WingmirrorGlass/i.test(o.name) && o.material?.name === 'Mirror') glass = o; });
    if (!glass) return;
    const toCar = this._m.copy(group.matrixWorld).invert().multiply(glass.matrixWorld);
    const g = glass.geometry.index ? glass.geometry.toNonIndexed() : glass.geometry;
    const pos = g.attributes.position;
    const sides = [[], []];
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    for (let i = 0; i < pos.count; i += 3) {
      a.fromBufferAttribute(pos, i).applyMatrix4(toCar);
      b.fromBufferAttribute(pos, i + 1).applyMatrix4(toCar);
      c.fromBufferAttribute(pos, i + 2).applyMatrix4(toCar);
      sides[(a.x + b.x + c.x) < 0 ? 0 : 1].push(a.clone(), b.clone(), c.clone());
    }
    const eye = new THREE.Vector3(...entry.dim.eye);
    const mirrors = [];
    for (const tris of sides) {
      if (tris.length < 3) continue;
      // mặt phẳng: tâm + pháp tuyến trung bình (hướng về phía người lái)
      const P = new THREE.Vector3(), N = new THREE.Vector3();
      for (let i = 0; i < tris.length; i += 3) {
        const n = new THREE.Vector3().subVectors(tris[i + 1], tris[i]).cross(new THREE.Vector3().subVectors(tris[i + 2], tris[i]));
        if (n.dot(new THREE.Vector3().subVectors(eye, tris[i])) < 0) n.negate();
        N.add(n);
        P.add(tris[i]).add(tris[i + 1]).add(tris[i + 2]);
      }
      P.multiplyScalar(1 / tris.length);
      N.normalize();

      // khung chữ nhật bao mặt gương (trong mặt phẳng gương)
      const U = new THREE.Vector3(0, 1, 0).cross(N).normalize(), V = new THREE.Vector3().crossVectors(N, U);
      let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
      for (const p of tris) {
        const d = this._v.subVectors(p, P);
        u0 = Math.min(u0, d.dot(U)); u1 = Math.max(u1, d.dot(U)); v0 = Math.min(v0, d.dot(V)); v1 = Math.max(v1, d.dot(V));
      }
      const corners = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]].map(([u, v]) => P.clone().addScaledVector(U, u).addScaledVector(V, v));
      // mặt gương mới (nhô ra 3 mm trước mặt kính / viền gốc => không chồng lớp nhấp nháy), chỉ hiện khi ngồi trong xe
      const geo = new THREE.BufferGeometry().setFromPoints(tris.map((p) => p.clone().addScaledVector(N, 0.003)));
      const rt = new THREE.WebGLRenderTarget(RT_W, RT_H, { type: THREE.HalfFloatType });
      const mat = new THREE.ShaderMaterial({ uniforms: { tMap: { value: rt.texture }, uTex: { value: new THREE.Matrix4() } }, vertexShader: VERT, fragmentShader: FRAG });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      group.add(mesh);
      mirrors.push({ mesh, rt, P, N, N0: N.clone(), corners, ready: false });
    }
    // vỏ gương + kính gốc: ẩn khi vẽ ảnh phản chiếu (camera ảo nằm "trong" gương)
    const housing = [];
    group.traverse((o) => { if (o.isMesh && /^Wingmirror/i.test(o.name)) housing.push(o); });
    entry.wingMirrors = { glass, mirrors, housing };
  }

  _show(entry, on) {
    const w = entry?.wingMirrors;
    if (!w) return;
    w.glass.visible = !on;
    for (const m of w.mirrors) m.mesh.visible = on && m.ready;
  }

  // gọi trước khi vẽ cảnh chính. on: đang ngồi trong xe
  render(scene, camera, on) {
    const entry = this.current, w = entry?.wingMirrors;
    if (!w) return;
    if (!on) { this._show(entry, false); w.aimed = false; return; }
    const group = entry.group, r = this.renderer;
    group.updateMatrixWorld();
    const E = camera.getWorldPosition(this._e);
    // vừa ngồi vào: "chỉnh gương" theo đúng vị trí mắt — mặt gương nghiêng theo phân giác giữa hướng về mắt và
    // hướng nhìn ra sau xe (hơi chếch ra ngoài, chân trời ngang giữa gương), như chỉnh gương thật trước khi chạy
    if (!w.aimed) {
      const eye = this._v.copy(E).applyMatrix4(this._m.copy(group.matrixWorld).invert());
      for (const m of w.mirrors) {
        const D = this._p.set(Math.sign(m.P.x) * 0.09, -0.045, 1).normalize();
        m.N.subVectors(eye, m.P).normalize().add(D).normalize();
      }
      w.aimed = true;
    }
    // vẽ xen kẽ: mỗi khung hình một gương (lần đầu vẽ cả hai)
    const list = w.mirrors.every((m) => m.ready) ? [w.mirrors[this.frame++ % w.mirrors.length]] : w.mirrors;
    const vis = w.housing.map((o) => o.visible);
    w.housing.forEach((o) => { o.visible = false; });
    for (const m of list) this._renderOne(scene, m, group, E, r);
    w.housing.forEach((o, i) => { o.visible = vis[i]; });
    this._show(entry, true);
    w.glass.visible = false;
  }

  _renderOne(scene, m, group, E, r) {
    const P = this._p.copy(m.P).applyMatrix4(group.matrixWorld);
    const N = this._n.copy(m.N).transformDirection(group.matrixWorld);
    const dist = this._v.subVectors(E, P).dot(N);
    if (dist <= 0.01) return;                                    // đứng sau gương: không thấy mặt gương
    // camera ảo: mắt đối xứng qua mặt gương, nhìn thẳng góc qua gương (+N)
    const cam = this.cam;
    cam.position.copy(E).addScaledVector(N, -2 * dist);
    cam.up.set(0, 1, 0);
    cam.lookAt(this._v.copy(cam.position).add(N));
    cam.updateMatrixWorld();
    // frustum lệch tâm ôm khung gương, mặt cắt gần ngay trước mặt gương (không thấy vỏ gương phía sau)
    const qs = m.corners.map((c, i) => this._q[i].copy(c).applyMatrix4(group.matrixWorld).applyMatrix4(cam.matrixWorldInverse));
    const near = Math.max(0.01, Math.min(...qs.map((q) => -q.z)) - 0.004);
    let l = 1e9, rr = -1e9, b = 1e9, t = -1e9;
    for (const q of qs) {
      const k = near / Math.max(1e-4, -q.z);
      l = Math.min(l, q.x * k); rr = Math.max(rr, q.x * k); b = Math.min(b, q.y * k); t = Math.max(t, q.y * k);
    }
    cam.projectionMatrix.makePerspective(l, rr, t, b, near, 3000);
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
    m.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(cam.projectionMatrix).multiply(cam.matrixWorldInverse).multiply(group.matrixWorld);
    const prevRT = r.getRenderTarget(), prevShadow = r.shadowMap.autoUpdate;
    r.shadowMap.autoUpdate = false;
    m.mesh.visible = false;
    r.setRenderTarget(m.rt);
    r.render(scene, cam);
    r.setRenderTarget(prevRT);
    r.shadowMap.autoUpdate = prevShadow;
    m.ready = true;
  }
}
