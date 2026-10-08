// Chase camera that takes ownership while driving and restores the edit view on exit.
import * as THREE from 'three/webgpu';

export function createVehicleCameraRig({camera, controls}) {
  const savePos = new THREE.Vector3(), saveTarget = new THREE.Vector3();
  const _b = new THREE.Vector3(), _t = new THREE.Vector3();
  let active = false;

  function begin() { savePos.copy(camera.position); saveTarget.copy(controls.target); controls.enabled = false; active = true; }

  function follow(pose, dt) {
    const tx = -Math.sin(pose.th), tz = -Math.cos(pose.th);
    _b.set(pose.x - tx * 8.5, pose.y + 3.2, pose.z - tz * 8.5);
    _t.set(pose.x + tx * 3, pose.y + 1.3, pose.z + tz * 3);
    const k = 1 - Math.exp(-5 * dt);
    camera.position.lerp(_b, k);
    controls.target.lerp(_t, k);
    camera.lookAt(_t);
  }

  function end() {
    camera.position.copy(savePos); controls.target.copy(saveTarget);
    controls.update(); controls.enabled = true; active = false;
  }

  return {begin, follow, end, get active() { return active }};
}
