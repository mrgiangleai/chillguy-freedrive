const qualityKey = 'ocean-loop-original-quality';
if (!sessionStorage.getItem(qualityKey)) sessionStorage.setItem(qualityKey, JSON.stringify(localStorage.getItem('chilldrive.quality')));
localStorage.setItem('chilldrive.quality', 'low');
await import('../src/main.js');
import * as THREE from 'three';

const PERIOD = 6.333 * Math.SQRT2;
const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:68px;left:12px;color:white;background:#000c;padding:5px;font:12px monospace;z-index:50';
document.body.append(label);
let phase = 0, running = false, elapsed = 0, last = performance.now();
for (const [name, value] of [['Trước nối', .999], ['Điểm nối', 0], ['Sau nối', .001]]) {
  const b = document.createElement('button'); b.textContent = name; b.style.cssText = 'position:relative;z-index:51';
  b.onclick = () => { phase = value; running = false; elapsed = 0; }; document.body.append(b);
}
const play = document.createElement('button'); play.textContent = 'Chạy 2 vòng'; play.style.cssText = 'position:relative;z-index:51';
play.onclick = () => { elapsed = 0; phase = 0; last = performance.now(); running = true; }; document.body.append(play);
const restore = document.createElement('button'); restore.textContent = 'Trả chất lượng'; restore.style.cssText = 'position:relative;z-index:51';
restore.onclick = () => { const old = JSON.parse(sessionStorage.getItem(qualityKey)); old == null ? localStorage.removeItem('chilldrive.quality') : localStorage.setItem('chilldrive.quality', old); sessionStorage.removeItem(qualityKey); };
document.body.append(restore);

const timer = setInterval(() => {
  const a = window.__app; if (!a?.state.started || !a.cars.current || !a.ocean) return;
  a.nextMap(); a.nextMap(); // mặc định Đường núi -> Đồi cỏ -> Biển
  a.env.snapWeather('clear'); a.env.setTime(15); a.env.hour = 15;
  a.drive.s = 20; a.terrain.prime(a.road.at(20, {}));
  // Khoá s trước mọi bước cập nhật: xe, camera và địa hình cùng một vị trí.
  Object.defineProperty(a.drive, 's', { configurable: true, get: () => 20, set: () => {} });
  a.drive.v = 0;
  const oceanUpdate = a.ocean.update.bind(a.ocean);
  a.ocean.update = (_time, ...args) => {
    const now = performance.now();
    if (running) { elapsed += Math.min((now - last) / 1000, .1); phase = (elapsed / PERIOD) % 1; if (elapsed >= PERIOD * 2) running = false; }
    last = now; oceanUpdate(phase * PERIOD, ...args);
    // Bọt dùng thời gian liên tục khi chạy; giữ cố định khi so ảnh hai phía điểm nối.
    a.ocean.u.uT.value = elapsed;
    const tex = a.ocean.u.uWave.value;
    label.textContent = `phase=${phase.toFixed(3)} | cycles=${(elapsed / PERIOD).toFixed(2)} | flipY=${tex.flipY} | atlas=${tex.image?.width}×${tex.image?.height} | Low${running ? ' | running' : ''}`;
  };
  let fixedPos, fixedLook;
  const rigUpdate = a.rig.update.bind(a.rig);
  a.rig.update = (...args) => {
    a.drive.s = 20; rigUpdate(...args);
    fixedPos ??= a.cars.root.localToWorld(new THREE.Vector3(8.5, 3.2, 1.5));
    fixedLook ??= a.cars.root.localToWorld(new THREE.Vector3(0, .35, 0));
    a.camera.position.copy(fixedPos); a.camera.lookAt(fixedLook); a.camera.fov = 48; a.camera.updateProjectionMatrix();
  };
  clearInterval(timer);
}, 100);
