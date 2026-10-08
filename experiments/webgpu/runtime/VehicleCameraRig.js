// Chase camera that takes ownership while driving and restores the edit view on exit.
// Profile (distance/height/look/smooth) comes from the vehicle definition.
import * as THREE from 'three/webgpu';

const DEFAULT_PROFILE = {distance: 8.5, height: 3.2, lookAhead: 3, lookHeight: 1.3, smooth: 5};

export function createVehicleCameraRig({camera, controls}) {
  const savePos = new THREE.Vector3(), saveTarget = new THREE.Vector3();
  const _b = new THREE.Vector3(), _t = new THREE.Vector3();
  const profile = {...DEFAULT_PROFILE};
  let active = false;

  function setProfile(p) { if (p) Object.assign(profile, p); }
  function begin() { savePos.copy(camera.position); saveTarget.copy(controls.target); controls.enabled = false; active = true; }

  function follow(pose, dt) {
    const tx = -Math.sin(pose.th), tz = -Math.cos(pose.th);
    _b.set(pose.x - tx * profile.distance, pose.y + profile.height, pose.z - tz * profile.distance);
    _t.set(pose.x + tx * profile.lookAhead, pose.y + profile.lookHeight, pose.z + tz * profile.lookAhead);
    const k = 1 - Math.exp(-profile.smooth * dt);
    camera.position.lerp(_b, k);
    controls.target.lerp(_t, k);
    camera.lookAt(_t);
  }

  function end() {
    camera.position.copy(savePos); controls.target.copy(saveTarget);
    controls.update(); controls.enabled = true; active = false;
  }

  return {begin, follow, end, setProfile, get active() { return active }};
}
