import * as THREE from 'three';

// Phản chiếu cho vũng nước trên đường khi mưa (planar reflection).
// Một camera ảo đối xứng với camera chính qua mặt phẳng ngang ở độ cao mặt đường chỗ xe,
// vẽ cảnh (bỏ qua mặt đường, cỏ, cây ở layer 3 cho nhẹ) vào texture nửa độ phân giải.
// Shader mặt đường lấy mẫu texture này theo vị trí thế giới (textureMatrix) + méo theo gợn sóng.
// Chỉ chạy khi đường ướt => không tốn gì lúc trời khô.
export class WetReflection {
  constructor(renderer) {
    this.renderer = renderer;
    this.cam = new THREE.PerspectiveCamera();
    this.cam.layers.set(0);
    this.rt = new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType });
    this.texMatrix = new THREE.Matrix4();
    this.planeY = 0;
    this.active = false;
    this.enabled = true;
    this._v = new THREE.Vector3();
    this._d = new THREE.Vector3();
    this._u = new THREE.Vector3();
    this._plane = new THREE.Plane();
    this._clip = new THREE.Vector4();
    this._q = new THREE.Vector4();
    this._size = new THREE.Vector2();
  }

  resize() {
    this.renderer.getDrawingBufferSize(this._size);
    this.rt.setSize(Math.max(16, Math.floor(this._size.x / 2)), Math.max(16, Math.floor(this._size.y / 2)));
  }

  render(scene, camera, planeY) {
    this.active = false;
    if (!this.enabled || camera.position.y < planeY + 0.05) return;
    this.planeY = planeY;
    const cam = this.cam;
    const p = camera.position;
    // vị trí, hướng nhìn và hướng "lên" đối xứng qua mặt phẳng y = planeY
    cam.position.set(p.x, 2 * planeY - p.y, p.z);
    const d = this._d.set(0, 0, -1).applyQuaternion(camera.quaternion);
    const u = this._u.set(0, 1, 0).applyQuaternion(camera.quaternion);
    cam.up.set(u.x, -u.y, u.z);
    cam.lookAt(this._v.set(cam.position.x + d.x, cam.position.y - d.y, cam.position.z + d.z));
    cam.near = camera.near; cam.far = camera.far;
    cam.updateMatrixWorld();
    cam.projectionMatrix.copy(camera.projectionMatrix);

    // ma trận chiếu toạ độ thế giới -> toạ độ texture phản chiếu
    this.texMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.texMatrix.multiply(cam.projectionMatrix).multiply(cam.matrixWorldInverse);

    // mặt phẳng cắt xiên: bỏ mọi thứ nằm dưới mặt đường (kỹ thuật oblique near-plane)
    const pl = this._plane.setFromNormalAndCoplanarPoint(this._v.set(0, 1, 0), this._d.set(p.x, planeY, p.z));
    pl.applyMatrix4(cam.matrixWorldInverse);
    const clip = this._clip.set(pl.normal.x, pl.normal.y, pl.normal.z, pl.constant);
    const pm = cam.projectionMatrix.elements;
    const q = this._q.set(
      (Math.sign(clip.x) + pm[8]) / pm[0],
      (Math.sign(clip.y) + pm[9]) / pm[5],
      -1.0,
      (1.0 + pm[10]) / pm[14],
    );
    clip.multiplyScalar(2.0 / clip.dot(q));
    pm[2] = clip.x; pm[6] = clip.y; pm[10] = clip.z + 1.0 - 0.003; pm[14] = clip.w;
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();

    const r = this.renderer;
    const prevRT = r.getRenderTarget();
    const prevShadow = r.shadowMap.autoUpdate;
    r.shadowMap.autoUpdate = false;               // dùng lại bóng đổ của khung hình chính
    r.setRenderTarget(this.rt);
    r.render(scene, cam);
    r.setRenderTarget(prevRT);
    r.shadowMap.autoUpdate = prevShadow;
    this.active = true;
  }
}
