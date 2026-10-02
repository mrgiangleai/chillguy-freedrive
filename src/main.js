import * as THREE from 'three';
import { ROAD, Road } from './road.js';
import { Scenery } from './scenery.js';
import { Terrain } from './terrain.js';
import { setTerrainMap } from './terrain-noise.js';
import { Environment } from './world.js';
import { Cars } from './cars.js';
import { CameraRig, FOCAL_MIN, FOCAL_MAX } from './camera.js';
import { ChillAudio } from './audio.js';
import { ReedField } from './reeds.js';
import { Post } from './post.js';
import { installMist, MIST } from './mist.js';
import { WetReflection } from './reflection.js';
import { Person } from './person.js';
import { StopScene } from './stopscene.js';

installMist();   // thay shader sương của three.js (phải chạy trước khi vật liệu được biên dịch)
import { MAPS, WEATHERS, TIMES, CAMERAS, MUSIC_MODES, FSTOPS, FSTOP_DEFAULT, QUALITY, QUALITY_DEFAULT } from './config.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// tốc độ (m/s). Chill: 10–40 km/h (mặc định 35). Fast drive: 150 km/h.
const KMH = 1 / 3.6;
const CHILL_DEFAULT = 35 * KMH, CHILL_MIN = 10 * KMH, CHILL_MAX = 40 * KMH, FAST_SPEED = 150 * KMH;

// ---------- renderer / scene ----------
const canvas = $('c');
// cảnh luôn vẽ vào render target của hậu kỳ (có MSAA riêng) => canvas không cần khử răng cưa
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
let pixelRatio = 1;
renderer.setPixelRatio(pixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 4000);
camera.layers.enable(3);   // layer 3: mặt đường, cỏ, cây, mưa — chỉ vẽ ở camera chính (không vẽ trong ảnh phản chiếu)

const road = new Road();
const scenery = new Scenery(scene, road, renderer);
const terrain = new Terrain(scene, road, renderer);
const env = new Environment(renderer, scene, camera);
const reeds = new ReedField(scene, renderer);
const grass = new ReedField(scene, renderer, 'grass');   // búi cỏ cho map đồi thông
const cars = new Cars(scene);
const rig = new CameraRig(camera);
rig.groundAt = (x, z) => terrain.heightAt(x, z);
const audio = new ChillAudio();
const post = new Post(renderer, QUALITY[QUALITY_DEFAULT].msaa);
const refl = new WetReflection(renderer);
const person = new Person();
const stop = new StopScene(cars, person);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  post.resize();
  refl.resize();
  layoutBars();
}
// dải đen letterbox: tỉ lệ khung ~2.39:1 (tối đa 13.5% chiều cao mỗi dải; màn hình rất rộng thì không có dải)
function layoutBars() {
  const w = window.innerWidth, h = window.innerHeight;
  const bar = Math.min(h * 0.135, Math.max(0, (h - w / 2.39) / 2));
  document.documentElement.style.setProperty('--bar', bar.toFixed(1) + 'px');
}
window.addEventListener('resize', resize);
resize();

// ---------- trạng thái lái xe ----------
const drive = {
  s: 150,          // độ dài cung trên đường
  d: 0,            // lệch ngang so với tim đường (m, + = bên phải)
  v: CHILL_DEFAULT,        // tốc độ (m/s)
  target: CHILL_DEFAULT,   // tốc độ mong muốn ở chế độ chill
  fast: false,             // Fast drive bật / tắt
  fx: 0,                   // cường độ hiệu ứng tốc độ 0..1 (theo tốc độ thực tế)
  latVel: 0,
  pitch: 0,
  pos: new THREE.Vector3(),
  yaw: 0,
};
const keys = new Set();
const pointer = { active: false, id: -1, x: 0, y: 0 };

// ---------- giao diện ----------
// mặc định vào game: đồi thông, sương mù, hoàng hôn
const state = { car: 0, map: MAPS.findIndex((m) => m.id === 'forest'), cam: 0, weather: WEATHERS.findIndex((w) => w.id === 'fog'), time: TIMES.findIndex((t) => t.id === 'sunset'), music: 0, cine: true, started: false, mistCover: 0.35, mistDens: 0.2, fstop: FSTOP_DEFAULT, quality: loadQuality() };
const el = { stop: $('b-stop'), quality: $('b-quality'), lens: $('b-lens'), mist: $('b-mist'), cine: $('b-cine'), fast: $('b-fast'), car: $('b-car'), map: $('b-map'), cam: $('b-cam'), weather: $('b-weather'), time: $('b-time'), music: $('b-music') };
const setBtn = (btn, icon, text) => { btn.querySelector('b').textContent = icon; btn.querySelector('span').textContent = text; btn.title = text; };

function refreshUI() {
  setBtn(el.car, '🚗', cars.list[state.car]?.name ?? '…');
  setBtn(el.map, MAPS[state.map].icon, MAPS[state.map].name);
  setBtn(el.cam, '🎥', CAMERAS[state.cam].name);
  setBtn(el.weather, WEATHERS[state.weather].icon, WEATHERS[state.weather].name);
  setBtn(el.time, TIMES[state.time].icon, TIMES[state.time].name);
  setBtn(el.music, MUSIC_MODES[state.music].icon, MUSIC_MODES[state.music].name);
  setBtn(el.fast, '⚡', 'Fast drive');
  el.fast.classList.toggle('on', drive.fast);
  setBtn(el.cine, '🎬', 'Cinematic');
  setBtn(el.mist, '🌫️', 'Sương ' + Math.round(state.mistDens * 100) + '%');
  el.mist.classList.toggle('on', !$('mistpanel').hidden);
  el.cine.classList.toggle('on', state.cine);
  setBtn(el.lens, '📷', lensLabel());
  setBtn(el.quality, '⚙️', QUALITY[state.quality].name);
  setBtn(el.stop, stop.state === 'parked' ? '▶️' : stop.state === 'off' ? '🅿️' : '⏳', stop.state === 'parked' ? 'Đi tiếp' : stop.state === 'off' ? 'Dừng xe' : '…');
  el.lens.classList.toggle('on', !$('lenspanel').hidden);
}
function loadQuality() {
  try { const i = QUALITY.findIndex((q) => q.id === localStorage.getItem('chilldrive.quality')); if (i >= 0) return i; } catch { /* không có localStorage */ }
  return QUALITY_DEFAULT;
}
// áp dụng mức chất lượng người chơi chọn (Low / Mid / Good / Ultra)
function applyQuality() {
  const q = QUALITY[state.quality];
  pixelRatio = q.id === 'low' ? q.ratio : Math.min(q.ratio, Math.max(1, window.devicePixelRatio || 1));
  renderer.setPixelRatio(pixelRatio);
  post.setSamples(q.msaa);
  resize();
  reeds.setDensity(q.veg);
  grass.setDensity(q.veg);
  env.setShadowSize(q.shadow);
  refl.enabled = q.refl;
  try { localStorage.setItem('chilldrive.quality', q.id); } catch { /* bỏ qua */ }
}
const nextQuality = () => { state.quality = (state.quality + 1) % QUALITY.length; applyQuality(); refreshUI(); };
function lensLabel() { return Math.round(rig.focal) + 'mm f/' + FSTOPS[state.fstop]; }

async function chooseCar(i) {
  if (stop.active) return;                        // đang dừng xe: không đổi xe
  state.car = (i + cars.list.length) % cars.list.length;
  setBtn(el.car, '🚗', 'Đang tải…');
  try {
    await cars.select(state.car);
  } catch (e) {
    console.error('Không tải được xe', cars.list[state.car].name, e);
    if (cars.list.length > 1) { cars.list.splice(state.car, 1); return chooseCar(state.car); }
  }
  if (person.ready && !stop.active) { stop.place(cars.dim); stop.sit(); }
  warmShaders();
  refreshUI();
}
const nextCar = () => chooseCar(state.car + 1);

// dừng xe / đi tiếp (cảnh người bước ra khỏi xe)
function toggleStop() {
  if (!person.ready || !state.started) return;
  if (stop.state === 'off') { drive.fast = false; stop.place(cars.dim); }
  if (stop.toggle(drive.v)) refreshUI();
}

// Biên dịch trước các shader chưa dùng tới (vật liệu khi vẽ ảnh phản chiếu vũng nước,
// mưa/tuyết/sét, sao/trăng) để lúc đổi thời tiết không bị khựng vì GPU phải dịch shader.
// compileAsync dùng KHR_parallel_shader_compile => trình duyệt dịch ở luồng nền.
let warmTimer = 0;
function compileFor(target, cam, obj = scene) {
  const off = [];
  obj.traverse((o) => { if (o.material && !o.layers.test(cam.layers)) { off.push(o, o.material); o.material = null; } });
  const prev = renderer.getRenderTarget();
  renderer.setRenderTarget(target);
  const p = renderer.compileAsync(obj, cam, scene);
  renderer.setRenderTarget(prev);
  for (let i = 0; i < off.length; i += 2) off[i].material = off[i + 1];
  return p;
}
// xe mới tải: dịch shader (cả biến thể vẽ vào render target: hậu kỳ / phản chiếu vũng nước) trước khi gắn vào cảnh
env.onCarEnv = (tex) => cars.setEnvMap(tex);
if (env.carEnvRT) cars.setEnvMap(env.carEnvRT.texture);
cars.prepare = (group) => compileFor(post.sceneRT, camera, group);
function warmShaders(delay = 500) {
  clearTimeout(warmTimer);
  warmTimer = setTimeout(() => {
    compileFor(post.sceneRT, camera).catch((e) => console.warn('warmup', e));
  }, delay);
}
const applyMap = () => {
  const id = MAPS[state.map].id;
  setTerrainMap(id);            // đổi tham số địa hình (đồi thấp / đồi núi)
  road.dirt = id === 'forest';  // đồi thông: có đoạn đường đất xuyên rừng
  road.recomputeHeights();      // độ cao đường theo địa hình mới
  scenery.setMap(id);
  terrain.reset();
  terrain.setCar(drive.s);
  terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
  reeds.visible = id === 'reed';
  grass.visible = id === 'forest';
  rig.sidePref = id === 'mountain' ? 1 : 0;      // camera bên hông đứng phía thung lũng
  rig.sideSign = 0;
  warmShaders();
};
const nextMap = () => { state.map = (state.map + 1) % MAPS.length; applyMap(); refreshUI(); };
const nextCam = () => { state.cam = (state.cam + 1) % CAMERAS.length; rig.setMode(state.cam); refreshUI(); };
const nextWeather = () => { state.weather = (state.weather + 1) % WEATHERS.length; env.setWeather(WEATHERS[state.weather].id); refreshUI(); };
const nextTime = () => {
  state.time = (state.time + 1) % TIMES.length;
  env.setTime(TIMES[state.time].hour);
  refreshUI();
};
const applyCine = () => document.body.classList.toggle('cine', state.cine && state.started);
const toggleCine = () => { state.cine = !state.cine; applyCine(); refreshUI(); };
const toggleFast = () => { if (stop.active) return; drive.fast = !drive.fast; refreshUI(); };
const nextMusic = () => { state.music = (state.music + 1) % MUSIC_MODES.length; audio.setMode(state.music); refreshUI(); };

el.fast.onclick = toggleFast;
el.cine.onclick = toggleCine;
// bảng chỉnh sương mù: độ phủ + độ dày
const toggleMistPanel = () => { $('mistpanel').hidden = !$('mistpanel').hidden; $('lenspanel').hidden = true; refreshUI(); };
el.mist.onclick = toggleMistPanel;
// bảng chỉnh ống kính: tiêu cự (= zoom) + khẩu độ (độ xoá phông)
const toggleLensPanel = () => { $('lenspanel').hidden = !$('lenspanel').hidden; $('mistpanel').hidden = true; refreshUI(); };
el.lens.onclick = toggleLensPanel;
el.quality.onclick = nextQuality;
el.stop.onclick = toggleStop;
const focalIn = $('lens-focal'), fstopIn = $('lens-fstop');
focalIn.min = FOCAL_MIN; focalIn.max = FOCAL_MAX;
fstopIn.max = FSTOPS.length - 1;
const syncLens = () => {
  focalIn.value = Math.round(rig.focal); $('lens-focal-v').textContent = Math.round(rig.focal) + 'mm';
  fstopIn.value = state.fstop; $('lens-fstop-v').textContent = 'f/' + FSTOPS[state.fstop];
};
focalIn.addEventListener('input', () => { rig.focal = Number(focalIn.value); syncLens(); refreshUI(); });
fstopIn.addEventListener('input', () => { state.fstop = Number(fstopIn.value); syncLens(); refreshUI(); });
for (const i of [focalIn, fstopIn]) i.addEventListener('change', () => i.blur());
syncLens();
for (const [id, key] of [['mist-cover', 'mistCover'], ['mist-dens', 'mistDens']]) {
  const input = $(id);
  input.value = Math.round(state[key] * 100);
  $(id + '-v').textContent = input.value;
  input.addEventListener('input', () => { state[key] = input.value / 100; $(id + '-v').textContent = input.value; refreshUI(); });
  input.addEventListener('change', () => input.blur());   // trả phím mũi tên lại cho việc lái xe
}
el.car.onclick = nextCar;
el.map.onclick = nextMap;
el.cam.onclick = nextCam;
el.weather.onclick = nextWeather;
el.time.onclick = nextTime;
el.music.onclick = nextMusic;
$('b-info').onclick = () => { const c = $('credits'); c.hidden = !c.hidden; };

// ---------- input ----------
window.addEventListener('keydown', (e) => {
  if (e.repeat) { keys.add(e.code); return; }
  keys.add(e.code);
  switch (e.code) {
    case 'KeyC': nextCam(); break;
    case 'KeyH': document.body.classList.toggle('hidehud'); break;
    case 'KeyM': nextMusic(); break;
    case 'KeyT': nextTime(); break;
    case 'KeyR': nextWeather(); break;
    case 'KeyV': nextCar(); break;
    case 'KeyN': nextMap(); break;
    case 'KeyF': toggleFast(); break;
    case 'KeyK': toggleCine(); break;
    case 'KeyG': toggleMistPanel(); break;
    case 'KeyL': toggleLensPanel(); break;
    case 'KeyQ': nextQuality(); break;
    case 'KeyP': toggleStop(); break;
  }
  if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

// bấm giữ + rê chuột / vuốt màn hình: nhìn xung quanh 360° (thả ra camera tự về vị trí cũ)
// lăn chuột / chụm-mở 2 ngón / phím + -: zoom
const touches = new Map();                         // pointerId -> {x, y}
let pinchDist = 0;
const spread = () => { const [a, b] = [...touches.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
canvas.addEventListener('pointerdown', (e) => {
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  canvas.setPointerCapture(e.pointerId);
  if (touches.size === 1) {
    pointer.active = true; pointer.id = e.pointerId; pointer.x = e.clientX; pointer.y = e.clientY;
    rig.look.hold = true;
  } else if (touches.size === 2) {
    pointer.active = false;                        // 2 ngón: chuyển sang zoom
    pinchDist = spread();
  }
});
canvas.addEventListener('pointermove', (e) => {
  const t = touches.get(e.pointerId);
  if (!t) return;
  t.x = e.clientX; t.y = e.clientY;
  if (touches.size === 2) {
    const d = spread();
    if (pinchDist > 0 && d > 0) rig.zoomBy(pinchDist / d);
    pinchDist = d;
  } else if (pointer.active && e.pointerId === pointer.id) {
    rig.lookBy((e.clientX - pointer.x) * 4.7 / window.innerWidth, (e.clientY - pointer.y) * 2.2 / window.innerHeight);
    pointer.x = e.clientX; pointer.y = e.clientY;
  }
});
const endPointer = (e) => {
  touches.delete(e.pointerId);
  if (touches.size < 2) pinchDist = 0;
  if (touches.size === 0) { pointer.active = false; rig.look.hold = false; }
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
  rig.zoomBy(Math.exp(clamp(dy, -200, 200) * 0.0012));
}, { passive: false });

// ẩn giao diện khi không thao tác
let idleTimer = 0;
const wake = () => {
  document.body.classList.remove('idle');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add('idle'), 4500);
};
['pointermove', 'pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, wake, { passive: true }));
wake();

// ---------- vòng lặp ----------
const _right = new THREE.Vector3();
let last = performance.now();
let uiTimer = 0;
let cineAmt = 0;
const roadPt = {};

// xoá phông theo ống kính thật (cảm biến full-frame 36 mm): lấy nét vào xe (camera trong xe: nét ở xa phía trước)
// vòng nhoè trên cảm biến = f² / (N·(F − f)) · |z − F| / z  (mm)  -> quy ra điểm ảnh theo cạnh dài khung hình
// BOKEH: phóng đại vòng nhoè kiểu ống kính điện ảnh (ở 28 mm f/2 vòng nhoè thật chỉ 1–2 điểm ảnh, khó thấy)
const BOKEH = 3.5;
const dof = { amt: 0, range: 0, samples: 0, near: 0.1, far: 1000, focus: 10, cocK: 0, maxCoc: 24 };
const _focusP = new THREE.Vector3();
function dofParams(dt) {
  const inCar = CAMERAS[state.cam].id === 'cockpit';
  _focusP.copy(drive.pos).y += 0.6;
  if (stop.active) _focusP.copy(stop.cam.focus);
  const target = inCar && !stop.active ? 25 : Math.max(1, camera.position.distanceTo(_focusP));
  dof.focus += (target - dof.focus) * (dof.amt > 0.01 ? 1 - Math.exp(-dt * 6) : 1);
  const f = rig.focalEff, N = FSTOPS[state.fstop], F = dof.focus * 1000;
  dof.cocK = ((f * f) / (N * Math.max(F - f, 1))) * (post.longSide / 36) * BOKEH;
  dof.maxCoc = Math.max(6, post.longSide * 0.0125);
  // cả chiếc xe nằm trong vùng nét: nửa bề dày xe theo hướng nhìn
  if (stop.active) dof.range = stop.cam.range;
  else if (inCar) dof.range = 0;
  else {
    const dx = camera.position.x - _focusP.x, dz = camera.position.z - _focusP.z, h = Math.hypot(dx, dz) || 1;
    const s = Math.sin(drive.yaw), c = Math.cos(drive.yaw);
    dof.range = Math.abs((-s * dx - c * dz) / h) * cars.dim.length * 0.5 + Math.abs((c * dx - s * dz) / h) * cars.dim.width * 0.5 + 0.3;
  }
  dof.near = camera.near; dof.far = camera.far;
  dof.amt = cineAmt;
  dof.samples = QUALITY[state.quality].dof;
  return dof;
}

function frame(now) {
  const dt = clamp((now - last) / 1000, 0, 0.05);
  last = now;

  // điều khiển
  const left = keys.has('ArrowLeft') || keys.has('KeyA');
  const right = keys.has('ArrowRight') || keys.has('KeyD');
  const steer = (right ? 1 : 0) - (left ? 1 : 0);
  if (keys.has('ArrowUp') || keys.has('KeyW')) drive.target += 2.5 * dt;
  if (keys.has('ArrowDown') || keys.has('KeyS')) drive.target -= 2.5 * dt;
  if (keys.has('Equal') || keys.has('NumpadAdd')) rig.zoomBy(Math.exp(-1.2 * dt));
  if (keys.has('Minus') || keys.has('NumpadSubtract')) rig.zoomBy(Math.exp(1.2 * dt));
  drive.target = clamp(drive.target, CHILL_MIN, CHILL_MAX);
  const goal = drive.fast ? FAST_SPEED : drive.target;
  if (stop.active) drive.v = stop.speed(drive.v, dt);    // cảnh dừng xe: giảm tốc đều tới khi dừng hẳn
  else drive.v += clamp(goal - drive.v, -8 * dt, 6 * dt);
  drive.s += drive.v * dt;
  // hiệu ứng tốc độ tăng dần theo tốc độ thực tế (không có gì dưới ~55 km/h)
  drive.fx += (sstep(55 * KMH, FAST_SPEED, drive.v) - drive.fx) * (1 - Math.exp(-dt * 4));

  // lệch ngang: lái tay, hoặc tự về giữa làn khi buông tay
  const lane = drive.d >= 0 ? ROAD.halfWidth / 2 : -ROAD.halfWidth / 2;
  const wantLat = stop.active ? 0 : steer !== 0 ? steer * (2.2 + drive.v * 0.06) : (lane - drive.d) * 0.8 * Math.min(1, drive.v / 3);
  drive.latVel += (wantLat - drive.latVel) * (1 - Math.exp(-dt * 5));
  drive.d += drive.latVel * dt;
  const lim = ROAD.halfWidth - 0.9;
  if (Math.abs(drive.d) > lim) { drive.d = Math.sign(drive.d) * lim; drive.latVel = 0; }

  // tư thế xe (độ cao + độ dốc theo mặt đường)
  road.ensure(drive.s + 8000);
  road.at(drive.s, roadPt);
  drive.pos.set(roadPt.x + Math.cos(roadPt.th) * drive.d, roadPt.y, roadPt.z - Math.sin(roadPt.th) * drive.d);
  const yA = road.at(drive.s - 2.5, {}).y, yB = road.at(drive.s + 2.5, {}).y;
  drive.pitch += (Math.atan2(yB - yA, 5) - drive.pitch) * (1 - Math.exp(-dt * 6));
  drive.yaw = roadPt.th - Math.atan2(drive.latVel, Math.max(drive.v, 4)) * 0.9;

  cineAmt += ((state.cine && state.started ? 1 : 0) - cineAmt) * (1 - Math.exp(-dt * 2.5));
  rig.cine = cineAmt;
  cars.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, latVel: drive.latVel, rough: road.dirtAt(drive.s) });
  // người lái: ngồi trong xe (ẩn khi camera trong xe), cảnh dừng xe điều khiển khi đang dừng
  if (person.ready) {
    person.root.visible = stop.active || CAMERAS[state.cam].id !== 'cockpit';
    person.update(dt);
  }
  if (stop.active) {
    const prev = stop.state;
    stop.update(dt, cars.root, drive.v);
    const c = stop.cam;
    camera.position.copy(c.pos);
    camera.lookAt(c.look);
    const fov = rig.fovFor(c.focal);
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    if (stop.state === 'off') {                    // xong cảnh: trả camera cho chế độ đang chọn, lướt mượt về
      rig.relP.copy(camera.position).sub(drive.pos);
      rig.relL.copy(c.look).sub(drive.pos);
      rig.fov = camera.fov;
    }
    if (stop.state !== prev) refreshUI();
  } else {
    rig.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, dim: cars.dim, fx: drive.fx, side: drive.d >= 0 ? -1 : 1 });
  }

  // môi trường
  env.update(dt, drive.pos);
  const st = env.state;
  scenery.update(drive.s);
  scenery.apply(st);
  if (reeds.visible) reeds.update(now / 1000, camera.position, road, drive.s, st);
  grass.group.visible = MAPS[state.map].id === 'forest' && st.cover < 0.5;   // tuyết phủ thì ẩn cỏ
  if (grass.visible) grass.update(now / 1000, camera.position, road, drive.s, st);
  terrain.setCar(drive.s);
  terrain.update(camera.position);
  terrain.apply(st);
  cars.setLights(st.lamps);
  audio.setAmbient({ speed: drive.v, rain: st.rain, snow: st.snow, wind: st.wind, dark: st.dark, fx: drive.fx });

  // gió mạnh / bão / tốc độ cao: camera rung nhẹ
  const shake = Math.max(0.028 * Math.max(0, st.wind - 0.55) / 0.45, 0.016 * drive.fx * drive.fx);
  if (shake > 0) {
    const t = now / 1000;
    camera.position.x += (Math.sin(t * 11.3) + Math.sin(t * 17.9) * 0.6) * shake;
    camera.position.y += (Math.sin(t * 13.7) + Math.sin(t * 23.1) * 0.5) * shake * 0.7;
  }

  // cinematic: camera hơi "thở" và nghiêng nhẹ như quay cầm tay
  if (cineAmt > 0.01) {
    const t = now / 1000;
    camera.position.x += Math.sin(t * 0.37) * 0.014 * cineAmt;
    camera.position.y += Math.sin(t * 0.53) * 0.012 * cineAmt;
    camera.rotateZ((Math.sin(t * 0.31) * 0.0045 + Math.sin(t * 0.83) * 0.002) * cineAmt);
  }

  uiTimer -= dt;
  if (uiTimer <= 0) {
    $('speed').textContent = Math.round(drive.v * 3.6);
    $('clock').textContent = env.clock;
    if (el.lens.title !== lensLabel()) { refreshUI(); syncLens(); }
    uiTimer = 0.25;
  }

  // sương mù tầng thấp: theo thanh trượt, gốc theo độ cao mặt đường chỗ xe, trôi theo gió
  MIST.uMistD.value = 0.05 * state.mistDens * state.mistDens;
  MIST.uMistH.value = 3 + 70 * Math.pow(state.mistCover, 1.4);
  MIST.uMistCover.value = state.mistCover;
  MIST.uMistBase.value = drive.pos.y - 1.5;
  MIST.uMistT.value = now / 1000;
  MIST.uMistWind.value.copy(st.windDir).multiplyScalar(0.0012 + 0.006 * st.wind);
  MIST.uMistColor.value.copy(st.mistColor);
  env.mistCover = state.mistCover; env.mistDens = state.mistDens;   // sương phủ cả bầu trời

  // đường ướt: vẽ ảnh phản chiếu cho vũng nước (chỉ khi mưa)
  if (st.wet > 0.001) refl.render(scene, camera, drive.pos.y + 0.05);
  else refl.active = false;
  scenery.setReflection(refl, now / 1000);

  // cảnh luôn vẽ vào render target (màu tuyến tính + độ sâu); hậu kỳ tone mapping + xoá phông/bloom/chỉnh màu (Cinematic) + blur tốc độ
  post.begin();
  renderer.render(scene, camera);
  post.render(now / 1000, cineAmt, drive.fx, dofParams(dt));
  requestAnimationFrame(frame);
}

// ---------- khởi động ----------
async function init() {
  applyQuality();
  env.setTime(TIMES[state.time].hour);
  env.hour = TIMES[state.time].hour;
  env.snapWeather(WEATHERS[state.weather].id);
  env.onThunder = (delay, power) => audio.thunder(delay, power);
  road.ensure(drive.s + 8000);
  road.at(drive.s, roadPt);
  drive.pos.set(roadPt.x, roadPt.y, roadPt.z);
  applyMap();
  await cars.probe();
  refreshUI();
  requestAnimationFrame(frame);
  // cho bấm chơi ngay; xe tải song song (thường chỉ 1–3 MB)
  const start = $('start');
  $('hint').textContent = 'Chạm hoặc nhấn phím bất kỳ để bắt đầu';
  cars.onProgress = (f) => setBtn(el.car, '🚗', 'Đang tải… ' + Math.round(f * 100) + '%');
  chooseCar(0).then(() => person.load('assets/models/person.glb')).then(() => {
    cars.tilt.add(person.root);
    stop.place(cars.dim);
    stop.sit();
    compileFor(post.sceneRT, camera, person.root).catch(() => {});
    refreshUI();
  }).catch((e) => console.warn('Không tải được người lái', e));
  const go = () => {
    start.classList.add('gone');
    state.started = true;
    applyCine();
    rig.startIntro();                              // camera lia vòng ra sau xe
    document.body.classList.add('intro');
    setTimeout(() => document.body.classList.remove('intro'), 6000);
    audio.start().catch((e) => console.warn('Audio:', e));
    window.removeEventListener('keydown', go);
    start.removeEventListener('pointerdown', go);
  };
  start.addEventListener('pointerdown', go);
  window.addEventListener('keydown', go);
}
init();

// hook phục vụ debug / kiểm thử
window.__app = { person, stop, toggleStop: () => toggleStop(), refl, MIST, forceCine: (v) => { cineAmt = v; }, post, toggleFast, toggleCine, env, cars, rig, drive, state, nextCar, nextMap, nextCam, nextWeather, nextTime, chooseCar, renderer, scene, camera, scenery, terrain, reeds, grass, road };
