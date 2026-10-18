// Pooled two-way traffic along the drive route.
import * as THREE from 'three/webgpu';
import {trafficSpeed} from './TrafficMath.js';
import {stepTraffic, ownLane} from './TrafficPolicy.js';

const COLORS = [0x2c3e50, 0x7f8c8d, 0x1f6f8b, 0x8e44ad, 0x27ae60, 0xc0392b, 0xd35400, 0x34495e];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export function createTrafficRuntime({scene, count = 0, minSpeed = 8, maxSpeed = 22} = {}) {
  const group = new THREE.Group(); group.userData.traffic = true; scene.add(group);
  const pool = [], active = [];
  let mn = minSpeed, mx = maxSpeed;

  function makeCar(color) {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({color, roughness: .5, metalness: .2});
    const glassMat = new THREE.MeshStandardMaterial({color: 0x223344, roughness: .2, metalness: .4});
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, .7, 4.4), bodyMat); body.position.y = .62; body.castShadow = true;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.7, .6, 2.2), glassMat); cabin.position.set(0, 1.15, -.1);
    g.add(body, cabin);
    const wg = new THREE.CylinderGeometry(.34, .34, .28, 12), wm = new THREE.MeshStandardMaterial({color: 0x111111, roughness: .8});
    for (const [x, z] of [[-.95, 1.5], [.95, 1.5], [-.95, -1.5], [.95, -1.5]]) { const w = new THREE.Mesh(wg, wm); w.rotation.z = Math.PI / 2; w.position.set(x, .34, z); g.add(w); }
    g.userData.body = body;
    return g;
  }
  function newCar() {
    const v = {s: 0, dir: Math.random() < .5 ? 1 : -1, d: 0, home: null, v: 0, len: 4.4, w: 1.9, cruise: trafficSpeed(mn, mx), mesh: null};
    v.home = ownLane(v.dir); v.d = v.home; v.v = v.cruise;
    return v;
  }
  function seed(v, playerS) { v.cruise = trafficSpeed(mn, mx); v.v = v.cruise; v.s = Math.max(0, playerS + (40 + Math.random() * 260) * v.dir); }
  function setCount(n) {
    n = Math.max(0, Math.min(16, Math.round(n)));
    while (active.length < n) active.push(newCar());
    while (active.length > n) { const v = active.pop(); if (v.mesh) v.mesh.visible = false; }
  }
  function update(dt, path, playerPose) {
    if (!path || !active.length) return;
    const playerS = playerPose ? playerPose.s : 0;
    for (let i = 0; i < active.length; i++) {
      const v = active[i];
      if (!v.mesh) { if (!pool[i]) pool[i] = makeCar(COLORS[i % COLORS.length]); v.mesh = pool[i]; group.add(v.mesh); seed(v, Math.max(20, playerS)); }
      v.mesh.visible = true;
      stepTraffic(v, active, 4.6, dt, path);
      if ((v.s - playerS) * v.dir < -170) seed(v, playerS);
      const p = path.at(v.s), rx = Math.cos(p.th), rz = -Math.sin(p.th);
      v.mesh.position.set(p.x + rx * v.d, p.y, p.z + rz * v.d);
      v.mesh.rotation.set(0, p.th + (v.dir > 0 ? Math.PI : 0), 0);
      if (v.mesh.userData.body) v.mesh.userData.body.rotation.y = clamp(((v.home ?? v.d) - v.d), -.4, .4) * .6;
    }
    for (let i = active.length; i < pool.length; i++) pool[i].visible = false;
  }
  function setSpeed(a, b) { if (a != null) mn = a; if (b != null) mx = b; for (const v of active) v.cruise = clamp(v.cruise, mn, mx); }
  function nearPlayer(playerPose, r) {
    if (!playerPose || playerPose.x == null) return null;
    let best = null, bd = r;
    for (const v of active) { if (!v.mesh || !v.mesh.visible) continue; const d = Math.hypot(v.mesh.position.x - playerPose.x, v.mesh.position.z - playerPose.z); if (d < bd) { bd = d; best = v; } }
    return best ? {v: best, dist: bd} : null;
  }
  setCount(count);
  return {group, setCount, update, setSpeed, nearPlayer, get count() { return active.length; }};
}
