// Seats a character onto a vehicle at authored anchors and exposes the eye anchor.
// Hand/foot IK is applied only to child bones whose names match the anchor patterns.
import * as THREE from 'three/webgpu';

export function createDriverBinding() {
  let character = null, vehicle = null, def = null, saved = null, seated = false;
  const _p = new THREE.Vector3(), _q = new THREE.Quaternion();

  function bind(char, veh, definition) { character = char; vehicle = veh; def = definition; }

  function seat() {
    if (!character || !vehicle || !def) return;
    if (!saved) saved = {pos: character.position.clone(), rot: character.rotation.clone()};
    vehicle.updateMatrixWorld(true);
    const s = def.seat || {x: 0, y: 0.6, z: 0};
    _p.set(s.x, s.y, s.z).applyMatrix4(vehicle.matrixWorld);
    character.position.copy(_p);
    character.rotation.set(0, vehicle.rotation.y + (s.ry || 0), 0);
    // optional grip IK: snap matching child bones to authored anchors when present
    if (def.grips) for (const g of def.grips) {
      const bone = character.getObjectByName?.(g.bone);
      if (bone) bone.position.set(g.x || 0, g.y || 0, g.z || 0);
    }
    seated = true;
  }
  function unseat() {
    if (!saved || !character) { seated = false; return; }
    character.position.copy(saved.pos); character.rotation.copy(saved.rot);
    saved = null; seated = false;
  }
  function eyeWorld(out) {
    if (!vehicle) return out.set(0, 0, 0);
    const e = def?.eye || {x: 0, y: 1.1, z: 0};
    vehicle.updateMatrixWorld(true);
    return out.set(e.x, e.y, e.z).applyMatrix4(vehicle.matrixWorld);
  }
  return {bind, seat, unseat, eyeWorld, get seated() { return seated; }, get character() { return character; }, get vehicle() { return vehicle; }};
}
