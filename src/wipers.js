import * as THREE from 'three';

// Gạt mưa tự động: trời mưa / bão thì bật (bão gạt nhanh hơn), tạnh thì gạt nốt lượt đang dở rồi dừng.
// Lớp nước trên kính (giọt mưa, vệt chảy, lưỡi gạt) được vẽ ở hậu kỳ khi ngồi trong xe — xem RAIN_GLASS trong post.js.
// Góc lưỡi gạt: θ = A·(1 − cos φ)/2 với pha φ chạy 0..2π mỗi lượt (đi lên rồi về).
const TAU = Math.PI * 2;
const sstep = THREE.MathUtils.smoothstep;

export class Wipers {
  constructor() {
    this.phase = 0;            // 0 = nằm nghỉ
    this.omega = TAU / 1.5;
    this.idle = 60;            // số giây đã dừng gạt (nước đọng lại khắp kính)
    this.wet = 0;              // lượng nước mưa trên kính 0..1
    this.flow = 0;             // quãng đường giọt nước đã trôi dọc kính (m); xe chạy nhanh => gió đẩy lên trên
    this.flowDir = -1;
    this._v = new THREE.Vector3();
  }

  get running() { return this.phase > 0; }

  update(dt, rain, speed) {
    const want = rain > 0.15;
    this.omega = TAU / (rain > 0.95 ? 1.05 : 1.55);
    if (want || this.phase > 0) {
      this.phase += this.omega * dt;
      if (this.phase >= TAU) this.phase = want ? this.phase - TAU : 0;
      this.idle = 0;
    } else this.idle += dt;
    this.wet += (rain - this.wet) * (1 - Math.exp(-dt * (rain > this.wet ? 1.5 : 0.12)));   // tạnh mưa: kính khô từ từ
    const v = THREE.MathUtils.lerp(-0.05, 0.24, sstep(speed, 6, 20));
    this.flow += v * dt;
    this.flowDir = v >= 0 ? 1 : -1;
  }

  // gán uniform cho hậu kỳ. amt: 0 = tắt (không ở trong xe / kính khô)
  apply(u, amt, camera, tilt, sh, time) {
    u.uGlass.value = amt;
    if (amt <= 0 || !sh) return;
    camera.updateMatrixWorld();
    u.uInvVP.value.multiplyMatrices(camera.matrixWorld, camera.projectionMatrixInverse);
    camera.getWorldPosition(u.uCamPos.value);
    camera.getWorldDirection(u.uCamFwd.value);
    u.uTanF.value = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    u.uNear.value = camera.near; u.uFar.value = camera.far;
    const m = tilt.matrixWorld;
    u.uGC.value.copy(sh.center).applyMatrix4(m);
    u.uGN.value.copy(sh.normal).transformDirection(m);
    u.uGU.value.copy(sh.right).transformDirection(m);
    u.uGV.value.copy(sh.up).transformDirection(m);
    u.uGB.value.fromArray(sh.bounds);
    u.uPiv.value.fromArray(sh.pivots);
    u.uBlade.value.fromArray(sh.blade);
    u.uWipe.value.set(this.phase, this.omega, this.idle, time);
    u.uFlow.value.set(this.flow, this.flowDir);
  }
}
