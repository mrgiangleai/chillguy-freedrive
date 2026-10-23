// Fixture xem người đi bộ 3D (streetModels.js): 13 model xếp hàng, mỗi model 3 bản: đứng / bước trái / bước phải.
// Chụp: node scripts/shot-people.mjs [id,…] (tự bundle + máy chủ tạm + xoá file tạm). Hàng 1 đứng yên, hàng 2 / 3 hai pha bước ngược nhau.
import * as THREE from 'three';
import { StreetModels, PEOPLE_MODELS } from '../src/streetModels.js';
const Q = new URLSearchParams(location.search), view = Q.get('v') || 'front', only = Q.get('only');   // only: id 1 model => phóng to
const N = PEOPLE_MODELS.length;
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
r.setSize(innerWidth, innerHeight); r.outputColorSpace = THREE.SRGBColorSpace; document.body.appendChild(r.domElement);
const sc = new THREE.Scene(); sc.background = new THREE.Color(0x9aa3ab);
sc.add(new THREE.HemisphereLight(0xffffff, 0x555555, 1.6));
const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(3, 6, -8); sc.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 20), new THREE.MeshStandardMaterial({ color: 0x777777 })); ground.rotation.x = -Math.PI / 2; sc.add(ground);
const SM = new StreetModels(sc, 8);
await SM.load();
SM.begin();
const m = new THREE.Matrix4(), q = new THREE.Quaternion();
// 3 hàng (z): đứng yên, pha +π/2 (bước), pha −π/2 (bước ngược); mặt người = −z => xoay 180° để nhìn về camera (+z)
const yaw = view === 'side' ? Math.PI / 2 : Math.PI;
q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
const ks = only ? [PEOPLE_MODELS.findIndex((d) => d.id === only)] : [...Array(N).keys()];
for (const k of ks) for (let row = 0; row < 3; row++) {
  const x = only ? (row - 1) * 1.1 : (k - (N - 1) / 2) * 1.3, z = only ? 0 : -row * 1.2;
  m.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(1, 1, 1));
  SM.add(k, m, row === 0 ? 0 : row === 1 ? Math.PI / 2 : -Math.PI / 2, row === 0 ? 0 : 1);
}
SM.end();
const cam = new THREE.PerspectiveCamera(22, innerWidth / innerHeight, 0.1, 200);
if (only) { cam.position.set(0, 1.2, 9.5); cam.lookAt(0, 0.9, 0); } else { cam.position.set(0, 2.2, 14); cam.lookAt(0, 0.85, -1.2); }
r.render(sc, cam);
window.info = SM.models.map((M) => M.def.id + ':' + M.meshes.length);
window.done = true;
