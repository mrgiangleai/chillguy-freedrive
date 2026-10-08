// Roadside scenery built along a RoadPath: delineator posts, guardrails on
// curves, and street lights. Added as children of the road group.
import * as THREE from 'three/webgpu';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);

export function buildRoadScenery(path, {to = 260, halfWidth = 4.6, shoulder = 1.4} = {}) {
  const g = new THREE.Group();
  const edge = halfWidth + shoulder - 0.25;

  // --- delineator posts (white + red reflector) on both edges ---
  const postStep = 18, postH = 0.9;
  const postGeo = new THREE.BoxGeometry(0.12, postH, 0.12);
  const bandGeo = new THREE.BoxGeometry(0.15, 0.14, 0.15);
  const postMat = new THREE.MeshStandardMaterial({color: 0xf2f2f2, roughness: .8});
  const bandMat = new THREE.MeshStandardMaterial({color: 0xd23b2f, emissive: 0x551008, emissiveIntensity: .5, roughness: .6});
  const n = Math.floor(to / postStep) + 1;
  const posts = new THREE.InstancedMesh(postGeo, postMat, n * 2);
  const bands = new THREE.InstancedMesh(bandGeo, bandMat, n * 2);
  let k = 0;
  for (let i = 0; i < n; i++) {
    const p = path.at(i * postStep), rx = Math.cos(p.th), rz = -Math.sin(p.th);
    for (const side of [1, -1]) {
      const o = side * edge, x = p.x + rx * o, z = p.z + rz * o;
      _m.makeTranslation(x, p.y + postH / 2, z); posts.setMatrixAt(k, _m);
      _m.makeTranslation(x, p.y + postH - 0.11, z); bands.setMatrixAt(k, _m);
      k++;
    }
  }
  posts.count = k; bands.count = k; g.add(posts, bands);

  // --- guardrails where the road curves ---
  const railOffset = halfWidth + 0.6, rStep = 3, railPostGeo = new THREE.BoxGeometry(0.1, 0.7, 0.1);
  const railMat = new THREE.MeshStandardMaterial({color: 0x9aa2a8, metalness: .5, roughness: .5});
  const railPts = [], beams = [];
  for (const side of [1, -1]) {
    let prev = null;
    for (let s = 0; s <= to; s += rStep) {
      if (Math.abs(path.curvature(s)) <= 0.0035) { prev = null; continue; }
      const p = path.at(s), rx = Math.cos(p.th), rz = -Math.sin(p.th), o = side * railOffset;
      const x = p.x + rx * o, z = p.z + rz * o;
      railPts.push([x, p.y, z]);
      if (prev) beams.push([prev, [x, p.y, z]]);
      prev = [x, p.y, z];
    }
  }
  if (railPts.length) {
    const railPosts = new THREE.InstancedMesh(railPostGeo, railMat, railPts.length);
    railPts.forEach((p, i) => { _m.makeTranslation(p[0], p[1] + 0.35, p[2]); railPosts.setMatrixAt(i, _m); });
    g.add(railPosts);
    const beamGeo = new THREE.BoxGeometry(1, 0.18, 0.06);
    const railBeams = new THREE.InstancedMesh(beamGeo, railMat, beams.length);
    beams.forEach((b, i) => {
      const [a, c] = b, dx = c[0] - a[0], dz = c[2] - a[2], len = Math.hypot(dx, dz) || 1;
      const mid = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2 + 0.6, (a[2] + c[2]) / 2];
      _q.setFromAxisAngle(_up, Math.atan2(dx, dz));
      _m.compose(_v.set(mid[0], mid[1], mid[2]), _q, new THREE.Vector3(len, 1, 1));
      railBeams.setMatrixAt(i, _m);
    });
    g.add(railBeams);
  }

  // --- street lights on the right ---
  const poleGeo = new THREE.CylinderGeometry(0.09, 0.11, 6, 8);
  const armGeo = new THREE.BoxGeometry(1.4, 0.12, 0.12);
  const headGeo = new THREE.BoxGeometry(0.5, 0.16, 0.3);
  const poleMat = new THREE.MeshStandardMaterial({color: 0x6b7075, metalness: .5, roughness: .5});
  const lampMat = new THREE.MeshStandardMaterial({color: 0xfff2c8, emissive: 0xffd98a, emissiveIntensity: 1.2, roughness: .4});
  const lightStep = 45, lo = halfWidth + shoulder + 0.5;
  for (let s = lightStep / 2; s <= to; s += lightStep) {
    const p = path.at(s), rx = Math.cos(p.th), rz = -Math.sin(p.th), x = p.x + rx * lo, z = p.z + rz * lo;
    const pole = new THREE.Mesh(poleGeo, poleMat); pole.position.set(x, p.y + 3, z);
    const dirx = -rx, dirz = -rz;
    const arm = new THREE.Mesh(armGeo, poleMat); arm.position.set(x + dirx * 0.7, p.y + 5.95, z + dirz * 0.7);
    arm.rotation.y = Math.atan2(dirx, dirz) + Math.PI / 2;
    const head = new THREE.Mesh(headGeo, lampMat); head.position.set(x + dirx * 1.35, p.y + 5.85, z + dirz * 1.35);
    g.add(pole, arm, head);
  }

  g.userData.scenery = true;
  return g;
}
