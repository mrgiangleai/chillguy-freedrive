// Fixture cục bộ: giữ xe ngược chiều ở gần để kiểm tra đèn, không chờ spawn ngẫu nhiên.
import '../src/main.js';
import { CARS } from '../src/config.js';
const status = document.createElement('div');
status.id = 'lighting-check-status';
status.style.cssText = 'position:fixed;top:65px;left:16px;color:white;font:13px monospace;z-index:50';
status.textContent = 'Lighting check: waiting for start';
document.body.append(status);
let testing = false;
const timer = setInterval(async () => {
  const app = window.__app;
  if (testing || !app?.state.started || !app.cars.current) return;
  testing = true;
  app.traffic.wait = app.traffic.timer = 1e9;
  app.env.setTime(22); app.env.hour = 22;
  app.env.snapWeather('clear');
  app.state.cam = 0; app.rig.setMode(0);
  try {
    const entry = await app.cars._load(CARS.find(car => car.id === 'mustang'));
    const vehicle = app.traffic._vehicle(entry);
    vehicle.s = app.drive.s + 24; vehicle.v = 0; vehicle.d = app.drive.d >= 0 ? -1.8 : 1.8;
    vehicle.direction = -1; vehicle.cruise = 0; vehicle.baseD = vehicle.avoidD = vehicle.d;
    vehicle.busy = true; vehicle.root.visible = true;
    app.traffic.pool.push(vehicle); app.traffic.active.push(vehicle);
    const keep = setInterval(() => {
      vehicle.s = app.drive.s + 24; vehicle.v = 0;
      vehicle.d = app.drive.d >= 0 ? -1.8 : 1.8;
      const a = app.cars.spots[0], b = app.traffic.beam.spots[0];
      const ratioOK = Math.abs(b.intensity - a.intensity * 0.24) < 1e-6;
      const same = ['angle','penumbra','distance','decay'].every(key => a[key] === b[key]) && a.color.equals(b.color);
      status.textContent = `Lighting check: ${same && ratioOK ? 'PASS NPC brightness 24%' : 'FAIL'}; player=${a.intensity.toFixed(1)} traffic=${b.intensity.toFixed(1)}`;
    }, 30);
    window.addEventListener('pagehide', () => clearInterval(keep), { once: true });
  } catch (error) { status.textContent = 'Lighting check failed: ' + error.message; }
  clearInterval(timer);
}, 100);
