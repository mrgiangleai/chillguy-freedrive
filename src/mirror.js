import * as THREE from 'three';
import { DASH_SIZE } from './dashscreen.js';

// Gương chiếu hậu trong xe: một camera nhỏ đặt ở gương, nhìn ra sau xe, vẽ vào render target
// rồi dán lên mặt gương (lật trái-phải như gương soi). Chỉ vẽ khi đang ngồi trong xe.
export class RearMirror {
  constructor(renderer) {
    this.renderer = renderer;
    // gương tỉ lệ 4:3 (rộng 12.5 cm × cao 9.4 cm); texture cùng tỉ lệ với mặt gương => ảnh không bị kéo dãn.
    // Gương đặt cạnh màn hình taplo, không có que đỡ.
    const GW = 0.125, GH = 0.09375;
    this.size = [GW, GH];
    this.rt = new THREE.WebGLRenderTarget(384, Math.round(384 * GH / GW), { type: THREE.HalfFloatType });
    this.cam = new THREE.PerspectiveCamera(30, GW / GH, 0.15, 3000);
    this.cam.layers.enable(3);
    this.group = new THREE.Group();
    this.group.visible = false;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(GW + 0.015, GH + 0.011, 0.025), new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.55 }));
    frame.position.z = -0.015;
    const tex = this.rt.texture;
    tex.repeat.x = -1; tex.offset.x = 1;              // gương soi: lật trái-phải
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(GW, GH), new THREE.MeshBasicMaterial({ map: tex }));
    this.group.add(frame, glass);
    this._p = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._d = new THREE.Vector3();
    this._eye = new THREE.Vector3();
  }

  // Đặt bên phải màn hình taplo, cách viền màn hình 2 cm.
  // Mặt gương hướng theo phân giác giữa mắt người lái và hướng ra sau xe.
  place(dim, dashboard) {
    const [ex, ey, ez] = dim.eye;
    if (dashboard) {
      this.group.position.copy(dashboard.pos);
      this.group.position.x += DASH_SIZE[0] / 2 + 0.014 * 0.85 / 2 + 0.02 + (this.size[0] + 0.015) / 2;
      this.group.position.y += -DASH_SIZE[1] / 2 - 0.03 + this.size[1] / 2 + 0.055;
      this.group.position.z += 0.025;
    } else this.group.position.set(0.21, ey - 0.28, ez - 0.6);
    const toEye = this._eye.set(ex, ey, ez).sub(this.group.position).normalize();
    const n = this._d.set(0, -0.03, 1).normalize().add(toEye).normalize();
    this.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
  }

  // vẽ cảnh phía sau vào gương. hide: thân xe (ẩn khi vẽ gương để thấy rõ đường phía sau)
  render(scene, hide) {
    const r = this.renderer, cam = this.cam;
    this.group.updateMatrixWorld();
    this.group.getWorldPosition(cam.position);
    // nhìn về sau xe (theo hướng xe), hơi chúc xuống
    this.group.parent.getWorldQuaternion(this._q);
    this._d.set(0, -0.03, 1).applyQuaternion(this._q);
    cam.lookAt(this._d.add(cam.position));
    cam.updateMatrixWorld();
    const prevRT = r.getRenderTarget(), prevShadow = r.shadowMap.autoUpdate;
    r.shadowMap.autoUpdate = false;
    this.group.visible = false;
    if (hide) hide.visible = false;
    r.setRenderTarget(this.rt);
    r.render(scene, cam);
    r.setRenderTarget(prevRT);
    r.shadowMap.autoUpdate = prevShadow;
    if (hide) hide.visible = true;
    this.group.visible = true;
  }
}
