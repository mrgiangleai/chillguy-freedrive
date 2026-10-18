// Chase / vehicle camera rig with six modes and lens transitions.
// Takes ownership while driving and restores the edit view (pose + fov) on exit.
import * as THREE from 'three/webgpu';

export const CAMERA_MODES = ['chase', 'low', 'side', 'cockpit', 'orbit', 'drone'];
const FALLBACK = {distance: 8.5, height: 3.2, lateral: 0, lookAhead: 3, lookHeight: 1.3, smooth: 5, fov: 55};

export function createVehicleCameraRig({camera, controls}) {
  const savePos = new THREE.Vector3(), saveTarget = new THREE.Vector3();
  const _b = new THREE.Vector3(), _t = new THREE.Vector3();
  let cameras = {chase: {...FALLBACK}}, mode = 'chase', saveFov = camera.fov, active = false;

  function setCameras(c) { if (c) cameras = c; if (!cameras[mode]) mode = CAMERA_MODES.find((m) => cameras[m]) || 'chase'; }
  function setMode(m) { if (cameras[m]) mode = m; }
  function cycle() { const i = CAMERA_MODES.indexOf(mode); mode = CAMERA_MODES[(i + 1) % CAMERA_MODES.length]; if (!cameras[mode]) mode = CAMERA_MODES[0]; return mode; }
  function profile() { return cameras[mode] || FALLBACK; }

  function begin() { savePos.copy(camera.position); saveTarget.copy(controls.target); saveFov = camera.fov; controls.enabled = false; active = true; }

  function follow(pose, dt) {
    const p = profile();
    const tx = -Math.sin(pose.th), tz = -Math.cos(pose.th);   // forward
    const rx = Math.cos(pose.th), rz = -Math.sin(pose.th);    // right
    _b.set(pose.x - tx * p.distance + rx * p.lateral, pose.y + p.height, pose.z - tz * p.distance + rz * p.lateral);
    _t.set(pose.x + tx * p.lookAhead, pose.y + p.lookHeight, pose.z + tz * p.lookAhead);
    const k = 1 - Math.exp(-p.smooth * dt);
    camera.position.lerp(_b, k);
    controls.target.lerp(_t, k);
    camera.lookAt(_t);
    if (Math.abs(camera.fov - p.fov) > 0.05) { camera.fov += (p.fov - camera.fov) * k; camera.updateProjectionMatrix(); }
  }

  function end() {
    camera.position.copy(savePos); controls.target.copy(saveTarget);
    camera.fov = saveFov; camera.updateProjectionMatrix();
    controls.update(); controls.enabled = true; active = false;
  }

  return {begin, follow, end, setCameras, setMode, cycle, get mode() { return mode }, get active() { return active }};
}
