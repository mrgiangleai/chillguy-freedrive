import * as THREE from 'three';

// Gương chiếu hậu trong xe: một camera nhỏ đặt ở gương, nhìn ra sau xe, vẽ vào render target
// rồi dán lên mặt gương (lật trái-phải như gương soi). Chỉ vẽ khi đang ngồi trong xe.
export class RearMirror {
  constructor(renderer) {
    this.renderer = renderer;
    this.rt = new THREE.WebGLRenderTarget(384, 112, { type: THREE.HalfFloatType });
    this.cam = new THREE.PerspectiveCamera(26, 384 / 112, 0.15, 3000);
    this.cam.layers.enable(3);
    this.group = new THREE.Group();
    this.group.visible = false;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.078, 0.03), new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.55 }));
    frame.position.z = -0.018;
    const tex = this.rt.texture;
    tex.repeat.x = -1; tex.offset.x = 1;              // gương soi: lật trái-phải
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.064), new THREE.MeshBasicMaterial({ map: tex }));
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.07, 6), frame.material);
    stem.position.set(0, 0.07, -0.03);
    this.group.add(frame, glass, stem);
    this._p = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._d = new THREE.Vector3();
    this._eye = new THREE.Vector3();
  }

  // đặt gương ở giữa phía trên kính lái (toạ độ trong xe). Mặt gương nghiêng theo phân giác giữa
  // hướng về mắt người lái và hướng ra sau xe => tia nhìn từ mắt phản xạ đi thẳng ra sau (như gương thật)
  place(dim) {
    const [ex, ey, ez] = dim.eye;
    this.group.position.set(0, ey + 0.07, ez - 0.55);
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
