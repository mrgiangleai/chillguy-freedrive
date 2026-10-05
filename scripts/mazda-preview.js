// GUI fixture: actual player loader, wheel animation, cabin and traffic model.
const qualityKey = 'mazda-check-original-quality';
if (!sessionStorage.getItem(qualityKey)) sessionStorage.setItem(qualityKey, JSON.stringify(localStorage.getItem('chilldrive.quality')));
const oldQuality = JSON.parse(sessionStorage.getItem(qualityKey));
localStorage.setItem('chilldrive.quality', 'low');
await import('../src/main.js');
const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:70px;left:12px;color:white;background:#000a;padding:5px;font:12px monospace;max-width:95vw;z-index:50';
label.textContent = 'Mazda: waiting'; document.body.append(label);
let steer = 0;
let view = 'front', ready = false, busy = false, npc = null;
for (const mode of ['front', 'rear', 'cockpit', 'night', 'traffic', 'left', 'right', 'restore']) {
  const b = document.createElement('button'); b.textContent = 'Mazda ' + mode;
  b.style.cssText = 'position:relative;z-index:51'; b.onclick = () => {
    if (mode === 'restore') { oldQuality == null ? localStorage.removeItem('chilldrive.quality') : localStorage.setItem('chilldrive.quality', oldQuality); sessionStorage.removeItem(qualityKey); return; }
    const a = window.__app; if (mode === 'left' || mode === 'right') { steer = mode === 'left' ? .4 : -.4; return; }
    steer = 0; view = mode;
    a.state.cam = mode === 'cockpit' ? 2 : 3; a.nextCam(); // áp dụng cả tiêu cự/camera profile của game
    a.env.setTime(mode === 'night' ? 22.5 : 15); a.env.hour = mode === 'night' ? 22.5 : 15;
    a.env._captureEnv();
    if (npc) npc.group.visible = mode === 'traffic';
  }; document.body.append(b);
}
const timer = setInterval(async () => {
  const a = window.__app; if (ready || busy || !a?.state.started || !a.person.ready) return;
  busy = true; await a.chooseCar(a.cars.list.findIndex(d => d.id === 'mazda-rx-vision')); ready = true;
  a.env.snapWeather('clear'); a.env.setTime(15); a.env.hour = 15; a.env._captureEnv();
  a.traffic.timer = a.traffic.sameTimer = a.traffic.carriageTimer = 1e9;
  a.drive.s = 20; a.terrain.prime(a.road.at(20, {}));
  npc = await a.cars._load(a.cars.list.find(d => d.id === 'mazda-rx-vision')); a.scene.add(npc.group); npc.group.visible = false;
  const carUpdate = a.cars.update.bind(a.cars); a.cars.update = (dt, st) => carUpdate(dt, {...st, curvature: steer * .025, latVel: 0});
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
    let paint=null;e.group.traverse(o=>{if(o.isMesh&&o.material?.name==='body')paint=o.material;});
    let grip = 0;
    const sw = e.steer, n = new a.camera.position.constructor(...sw.n).normalize(), up = new a.camera.position.constructor(0,n.z,-n.y);
    for(const [side,angle] of [['r',-.08],['l',Math.PI+.08]]) {
      const target = new a.camera.position.constructor(...sw.c).add(new a.camera.position.constructor(Math.cos(angle+a.cars.steerAngle)*(sw.r+.02),0,0)).addScaledVector(up,Math.sin(angle+a.cars.steerAngle)*(sw.r+.02)).addScaledVector(n,.065);
      const wrist = a.person.arms[side][2].getWorldPosition(new a.camera.position.constructor()); a.cars.tilt.worldToLocal(wrist); grip = Math.max(grip,wrist.distanceTo(target));
    }
    const head = a.person.head.getWorldPosition(new a.camera.position.constructor()); a.cars.tilt.worldToLocal(head);
    label.textContent = `Mazda ${e.def.id === 'mazda-rx-vision' && e.wheels.length === 4 ? 'PASS' : 'FAIL'} | ${d.length.toFixed(2)} × ${d.width.toFixed(2)} × ${d.height.toFixed(2)} m | wheels=${e.wheels.length} | glass=${!!e.shield}/${!!e.rearShield} | grip=${(grip*1000).toFixed(1)}mm | angle=${(a.cars.steerAngle*180/Math.PI).toFixed(1)}° | head=${head.y.toFixed(3)} | ${view} | Low | paint=#${paint?.color.getHexString()} metal=${paint?.metalness} rough=${paint?.roughness} coat=${paint?.clearcoat}/${paint?.clearcoatRoughness} env=${paint?.userData.envK}`;
  };
  clearInterval(timer);
}, 100);
