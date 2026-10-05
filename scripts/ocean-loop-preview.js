const qualityKey = 'ocean-loop-original-quality';
if (!sessionStorage.getItem(qualityKey)) sessionStorage.setItem(qualityKey, JSON.stringify(localStorage.getItem('chilldrive.quality')));
localStorage.setItem('chilldrive.quality', 'low');
await import('../src/main.js');
import * as THREE from 'three';
import { oceanSeamWeights } from '../src/ocean.js';

const PERIOD = 6.333 * Math.SQRT2;
const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:68px;left:12px;color:white;background:#000c;padding:5px;font:12px monospace;z-index:50';
document.body.append(label);
let phase = 0;
for (const [name, value] of [['Trước nối', .999], ['Điểm nối', 0], ['Sau nối', .001]]) {
  const b = document.createElement('button'); b.textContent = name; b.style.cssText = 'position:relative;z-index:51';
  b.onclick = () => { phase = value; }; document.body.append(b);
}
const restore = document.createElement('button'); restore.textContent = 'Trả chất lượng'; restore.style.cssText = 'position:relative;z-index:51';
restore.onclick = () => { const old = JSON.parse(sessionStorage.getItem(qualityKey)); old == null ? localStorage.removeItem('chilldrive.quality') : localStorage.setItem('chilldrive.quality', old); sessionStorage.removeItem(qualityKey); };
document.body.append(restore);

const timer = setInterval(() => {
  const a = window.__app; if (!a?.state.started || !a.cars.current || !a.ocean) return;
  a.nextMap(); a.nextMap(); // mặc định Đường núi -> Đồi cỏ -> Biển
  a.env.snapWeather('clear'); a.env.setTime(15); a.env.hour = 15;
  a.drive.s = 20; a.terrain.prime(a.road.at(20, {}));
  const oceanUpdate = a.ocean.update.bind(a.ocean);
  a.ocean.update = (_time, ...args) => oceanUpdate(phase * PERIOD, ...args);
  const rigUpdate = a.rig.update.bind(a.rig);
  a.rig.update = (...args) => {
    a.drive.s = 20; rigUpdate(...args);
    const pos = a.cars.root.localToWorld(new THREE.Vector3(8.5, 3.2, 1.5));
    const look = a.cars.root.localToWorld(new THREE.Vector3(0, .35, 0));
    a.camera.position.copy(pos); a.camera.lookAt(look); a.camera.fov = 48; a.camera.updateProjectionMatrix();
  };
  setInterval(() => {
    const w = oceanSeamWeights(phase);
    label.textContent = `Ocean seam phase=${phase.toFixed(3)} | A=${w.a.toFixed(3)} B=${w.b.toFixed(3)} | Low`;
  }, 50);
  clearInterval(timer);
}, 100);
