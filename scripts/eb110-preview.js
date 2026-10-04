// GUI fixture: actual player loader, wheel animation, cabin and traffic model.
const oldQuality = localStorage.getItem('chilldrive.quality');
localStorage.setItem('chilldrive.quality', 'low');
await import('../src/main.js');
const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:70px;left:12px;color:white;background:#000a;padding:5px;font:12px monospace;z-index:50';
label.textContent = 'EB110: waiting'; document.body.append(label);
let view = 'front', ready = false, busy = false, npc = null;
for (const mode of ['front', 'rear', 'cockpit', 'night', 'traffic', 'restore']) {
  const b = document.createElement('button'); b.textContent = 'EB110 ' + mode;
  b.style.cssText = 'position:relative;z-index:51'; b.onclick = () => {
    if (mode === 'restore') { oldQuality == null ? localStorage.removeItem('chilldrive.quality') : localStorage.setItem('chilldrive.quality', oldQuality); return; }
    view = mode; const a = window.__app;
    a.rig.setMode(mode === 'cockpit' ? 3 : 4); a.state.cam = mode === 'cockpit' ? 3 : 4;
    a.env.setTime(mode === 'night' ? 22.5 : 15); a.env.hour = mode === 'night' ? 22.5 : 15;
    a.env._captureEnv();
    if (npc) npc.group.visible = mode === 'traffic';
  }; document.body.append(b);
}
const timer = setInterval(async () => {
  const a = window.__app; if (ready || busy || !a?.state.started || !a.person.ready) return;
  busy = true; await a.chooseCar(a.cars.list.findIndex(d => d.id === 'eb110')); ready = true;
  a.env.snapWeather('clear'); a.env.setTime(15); a.env.hour = 15; a.env._captureEnv();
  a.traffic.timer = a.traffic.sameTimer = a.traffic.carriageTimer = 1e9;
  a.drive.s = 20; a.terrain.prime(a.road.at(20, {}));
  npc = await a.cars._load(a.cars.list.find(d => d.id === 'eb110')); a.scene.add(npc.group); npc.group.visible = false;
  const update = a.rig.update.bind(a.rig);
  a.rig.update = (...args) => {
    a.drive.s = 20; update(...args);
    if (view !== 'cockpit') {
      const point = a.cars.root.localToWorld(new a.camera.position.constructor(view === 'traffic' ? 3.4 : 4.8, 2.5, view === 'rear' ? 6.6 : -6.6));
      a.camera.position.copy(point); a.camera.lookAt(a.cars.root.localToWorld(new a.camera.position.constructor(view === 'traffic' ? 1.8 : 0, .6, 0)));
      a.camera.fov = 46; a.camera.updateProjectionMatrix();
    }
    if (npc) { npc.group.position.copy(a.cars.root.position); npc.group.quaternion.copy(a.cars.root.quaternion); npc.group.translateX(3.3); npc.group.rotateY(Math.PI); }
    const d = a.cars.dim, e = a.cars.current;
    const head = a.person.head.getWorldPosition(new a.camera.position.constructor()); a.cars.tilt.worldToLocal(head);
    label.textContent = `EB110 ${e.def.id === 'eb110' && e.wheels.length === 4 ? 'PASS' : 'FAIL'} | ${d.length.toFixed(2)} × ${d.width.toFixed(2)} × ${d.height.toFixed(2)} m | wheels=${e.wheels.length} | glass=${!!e.shield}/${!!e.rearShield} | head=${head.y.toFixed(3)} | ${view} | Low`;
  };
  clearInterval(timer);
}, 100);
