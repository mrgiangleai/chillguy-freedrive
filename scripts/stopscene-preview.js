localStorage.setItem('chilldrive.quality', 'low');
await import('../src/main.js');
import * as THREE from 'three';

const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:64px;left:10px;z-index:60;color:#fff;background:#000a;padding:7px;font:12px monospace';
document.body.append(label);
let mode = 'orbit', ready = false, frozenT = 0;
for (const [text, value] of [['Quanh người 10 m', 'orbit'], ['Cận người 1 m', 'close'], ['Về xe 50%', 'return-half'], ['Tới xe 1 m', 'return-end']]) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.cssText = 'position:relative;z-index:61';
  button.onclick = () => { mode = value; };
  document.body.append(button);
}

const timer = setInterval(() => {
  const a = window.__app;
  if (!a?.state.started || !a.person.ready || !a.cars.current) return;
  if (!ready) {
    ready = true;
    a.env.snapWeather('clear'); a.env.setTime(15); a.env.hour = 15;
    a.traffic.wait = a.traffic.timer = a.traffic.sameTimer = 1e9;
    a.drive.v = a.drive.goal = a.drive.target = 0;
    a.stop.state = 'parked'; a.stop.wideK = 1; a.stop.autoZoom.on = false; a.stop.orbitA = -0.65; a.stop.orbitHold = 1e9;
    a.person.root.position.copy(a.stop.stand); a.person.root.rotation.y = Math.PI / 2; a.stop.smokeU = -1;
    const update = a.stop.update.bind(a.stop);
    a.stop.update = (_dt, ...args) => update(0, ...args);
  }
  const s = a.stop, z = s.zoom;
  a.person.play('Idle_Loop', 0);
  const reachT = 0.6 + s.stand.distanceTo(s.corner) / 1.1 + s.corner.distanceTo(s.out) / 1.1;
  if (mode === 'orbit') {
    s.state = 'parked'; frozenT = 0; z.focal = z.focalS = 26; z.back = z.backS = 0; z.near = z.nearS = 0;
    a.person.root.position.copy(s.stand);
  } else if (mode === 'close') {
    s.state = 'parked'; frozenT = 0; z.focal = z.focalS = 35; z.back = z.backS = 0; z.near = z.nearS = 9;
    a.person.root.position.copy(s.stand);
  } else {
    s.state = 'enter'; s.enterRadius = 18; z.focal = z.focalS = 26; z.back = z.backS = 0; z.near = z.nearS = 0;
    frozenT = mode === 'return-half' ? reachT * 0.5 : reachT;
    s.t = frozenT;
  }
  a.cars.root.updateMatrixWorld(true);
  const center = a.person.root.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.95, 0));
  const radius = a.camera.position.distanceTo(center);
  label.textContent = `Mode=${mode} | camera-player=${radius.toFixed(2)} m | orbit hold=${s.orbitHold > 2 ? 'paused' : s.orbitHold.toFixed(2)} s`;
}, 80);

window.addEventListener('beforeunload', () => clearInterval(timer));
