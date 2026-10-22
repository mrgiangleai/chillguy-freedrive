// Chụp map New York trong trình duyệt headless (Playwright + SwiftShader) — để worker chạy khi cần kiểm hình.
// Cần máy chủ: npx http-server docs -p 8080 -c-1 -s   (chạy nền; cổng khác: PORT=8090). Dùng:
//   OUT=shots/ TIME=22 WX=clear Q=low node scripts/shot-nyc.mjs '[["ten-anh", s, d, cam, chờ_ms], …]'
//   s: vị trí dọc vòng (0..5543, xem nyc-data.json: góc, hầm 2766–3189, cầu cạn 3319–3719, Times Square 470–960); d: làn (5.25 phải, 1.8 trái);
//   cam: 0 sau xe, 1 sát đường, 2 bên hông, 3 trong xe, 4 quay quanh, 5 từ trên cao; TIME giờ 0–24; WX clear/rain/fog; Q low/good/ultra.
//   Mỗi ảnh in 1 dòng 'shot …' (số nhà, người, xe…) + cuối cùng số lỗi console. Máy chậm: ~3–6 phút / ảnh.
import { chromium } from '/Users/keinle/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const OUT = process.env.OUT || 'shots/';   // thư mục ảnh (tạo trước)
const shots = JSON.parse(process.argv[2] || '[]');   // [[name, sLap, d, cam, wait]]
const sweep = process.argv[3] === 'sweep';
const b = await chromium.launch({ executablePath: '/Users/keinle/Library/Caches/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-mac-arm64/chrome-headless-shell', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const DRIVE = process.argv[3] === 'drive';
const p = await b.newPage({ viewport: DRIVE ? { width: 320, height: 180 } : { width: 960, height: 540 } });
const errs = [];
p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text().slice(0, 300)); });
p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await p.goto('http://localhost:' + (process.env.PORT || 8080) + '/', { waitUntil: 'domcontentloaded', timeout: 120000 });
await p.evaluate((M) => { localStorage.clear(); localStorage.setItem('chilldrive.quality', process.env.Q || 'low'); localStorage.setItem('chilldrive.nyc.mirror', M); }, process.env.MIRROR || '1');
await p.reload({ waitUntil: 'domcontentloaded', timeout: 120000 });
await p.waitForTimeout(15000);
await p.evaluate(() => document.getElementById('m-drive').click());
await p.waitForTimeout(4000);
await p.evaluate(([T, W]) => { const A = window.__app; for (let k = 0; k < 6 && A.state.map !== 8; k++) A.nextMap(); A.env.setTime(T); A.env.setWeather(W); }, [+(process.env.TIME || 13), process.env.WX || 'clear']);
for (let k = 0; k < 30; k++) {             // tải map dần (preload) có thể đặt lại map sau khi vào Drive => chờ tới khi ổn định ở New York
  await p.waitForTimeout(4000);
  const m = await p.evaluate(() => { const A = window.__app; if (A.state.map !== 8) for (let k = 0; k < 9 && A.state.map !== 8; k++) A.nextMap(); return A.state.map + ':' + !!A.road.loop; });
  if (m === '8:true' && k > 2) break;
}
const L = await p.evaluate(() => window.__app.road.loop.length);
const go = (s, d, cam) => p.evaluate(([s, d, cam]) => {
  const A = window.__app; A.drive.s = s; A.drive.d = d; A.drive.home = d; A.drive.v = 0; A.drive.target = 0.3;
  if (cam !== null) { A.state.cam = cam; A.rig.setMode(cam); }
  A.road.at(s, {}); A.terrain.setCar(s); A.city.prime(s);
  return { s, y: A.drive.pos.y };
}, [s, d, cam]);
for (const [name, s, d, cam, wait] of shots) {
  await go(2 * L + s, d, cam); await p.waitForTimeout(wait || 9000);
  await p.evaluate(() => { const A = window.__app; A.terrain.prime(A.drive.pos); });
  await p.waitForTimeout(3000);
  await p.evaluate(([cam, T]) => { const A = window.__app; A.state.time = 0; A.env.setTime(T); if (cam !== null) { A.state.cam = cam; A.rig.setMode(cam); } }, [cam, +(process.env.TIME || 13)]);
  await p.waitForTimeout(4000);
  await p.screenshot({ path: OUT + name + '.png', timeout: 150000 }); if (name === 'c-tunnel') { await p.evaluate(() => window.__app.minimap.open()); await p.waitForTimeout(3000); await p.screenshot({ path: OUT + 'c-minimap.png', timeout: 150000 }); await p.evaluate(() => window.__app.minimap.close()); }
  console.log('shot', name, await p.evaluate(() => { const A = window.__app; return JSON.stringify({ props: A.nycProps.count, bld: A.nycBld.count, crowd: A.timesSq.near.length, nan: A.timesSq.crowd.filter((p) => !Number.isFinite(p.s)).length, s: A.drive.s.toFixed(0), y: A.drive.pos.y.toFixed(2), cars: A.cityTraffic.cars.length, peds: A.cityPeople.peds.length, blocks: A.city.blocks.size }); }));
}
if (DRIVE) {          // tự lái thật qua góc 7th Ave → 32nd St từ làn ngoài phải
  const c = 2 * L + 1716.7;
  await go(c - 230, 5.25, 0);
  await p.evaluate(() => { const A = window.__app; A.drive.target = 11; A.drive.v = 11; A.cityTraffic.density = 0.3; });
  const t0 = Date.now();
  for (;;) {
    await p.waitForTimeout(4000);
    const r = await p.evaluate((c) => { const A = window.__app; return { ds: +(A.drive.s - c).toFixed(1), d: +A.drive.d.toFixed(2), home: A.drive.home, kmh: +(A.drive.v * 3.6).toFixed(0), bl: A.blinker, viol: A.violations, y: +A.drive.pos.y.toFixed(2) }; }, c);
    console.log(JSON.stringify(r));
    if (r.ds > 120 || Date.now() - t0 > 480000) break;
  }
}
if (sweep) {           // trọn vòng: dịch xe từng 60 m, mỗi chỗ chạy vài khung
  for (let s = 0; s <= L + 60; s += 60) { await go(2 * L + s, 5.25, null); await p.waitForTimeout(600); }
  console.log('sweep xong', await p.evaluate(() => JSON.stringify({ s: window.__app.drive.s.toFixed(0), blocks: window.__app.city.blocks.size, viol: window.__app.violations })));
}
console.log('console lỗi/cảnh báo:', errs.length); for (const e of [...new Set(errs)].slice(0, 20)) console.log('  ', e);
await b.close();
