import * as THREE from 'three';
import { ROAD, Road } from './road.js';
import { Scenery, STREETLIGHT_DEFAULTS } from './scenery.js';
import { Terrain } from './terrain.js';
import { setTerrainMap, TP } from './terrain-noise.js';
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
import { Nature } from './nature.js';
import { RearMirror } from './mirror.js';
import { WingMirrors } from './wingmirrors.js';
import { Wipers } from './wipers.js';
import { Fireflies } from './fireflies.js';
import { ValleyTown } from './town.js';
import { DashScreen } from './dashscreen.js';
import { Traffic } from './traffic.js';
import { Ocean } from './ocean.js';
import { roadPosition } from './traffic-ai.js';
import { Cows } from './cows.js';
import { Waterfalls } from './waterfalls.js';
import { Smoke } from './smoke.js';
import { HEADLIGHT_DEFAULTS } from './headlights.js';

installMist();   // thay shader sương của three.js (phải chạy trước khi vật liệu được biên dịch)
import { MAPS, WEATHERS, TIMES, CAMERAS, MUSIC_MODES, FSTOPS, FSTOP_DEFAULT, QUALITY, QUALITY_DEFAULT } from './config.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// tốc độ (m/s). Chill: 10–40 km/h (mặc định 35). Fast drive: 150 km/h.
const KMH = 1 / 3.6;
// cấp tốc độ (nút ⚡ / phím F xoay vòng): chill 25 → 50 → Fast drive 180 km/h (có hiệu ứng tốc độ)
const LANE_D = 1.5;                // xe chạy lệch tim đường 1.5 m (sát vạch vàng giữa, giữa làn là 2.3 m)
const GEARS = [25 * KMH, 50 * KMH, 180 * KMH];
const CHILL_DEFAULT = GEARS[0], CHILL_MIN = 10 * KMH, CHILL_MAX = 60 * KMH, FAST_SPEED = GEARS[2];

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
const meadow = new ReedField(scene, renderer, 'meadow'); // cỏ cao cho map đồi cỏ
const cars = new Cars(scene);
const rig = new CameraRig(camera);
rig.groundAt = (x, z) => Math.max(terrain.heightAt(x, z), ocean.group.visible ? ocean.level + 1.2 : -Infinity);   // không chui xuống đất / xuống nước
// mắt người lái thật: xương đầu + 9 cm lên, 4 cm về sau (toạ độ thế giới)
const _eyeF = new THREE.Vector3(), _eyeU = new THREE.Vector3();
rig.eyeAt = (out) => {
  if (!person.ready || stop.active) return false;
  person.head.getWorldPosition(out);
  _eyeF.set(0, 0, -1).applyQuaternion(cars.root.quaternion);
  _eyeU.set(0, 1, 0).applyQuaternion(cars.root.quaternion);
  out.addScaledVector(_eyeU, 0.15).addScaledVector(_eyeF, -0.04);   // mắt cao hơn xương đầu một chút
  return true;
};
const audio = new ChillAudio();
const post = new Post(renderer, QUALITY[QUALITY_DEFAULT].msaa);
const refl = new WetReflection(renderer);
const person = new Person();
const stop = new StopScene(cars, person);
cars.viewer = camera;
const smoke = new Smoke(scene, person);       // điếu thuốc + khói (cảnh dừng xe)
const nature = new Nature(scene);
const mirror = new RearMirror(renderer);
const wing = new WingMirrors(renderer);       // gương chiếu hậu hai bên (soi thật khi ngồi trong xe)
const wipers = new Wipers();
const fireflies = new Fireflies(scene);
const town = new ValleyTown(scene);           // map núi: thị trấn + đèn đường dưới thung lũng
const dash = new DashScreen();                // màn hình giải trí trên taplo (hắt sáng lên người lái)
const _trafficPerson = new THREE.Vector3();
const traffic = new Traffic(scene, cars);     // thỉnh thoảng có xe chạy ngược chiều
const ocean = new Ocean(scene);               // map Biển: mặt biển sóng (bake từ ocean_scene_animated.glb)
const waterfalls = new Waterfalls(scene, road, terrain);
const cows = new Cows(scene);                 // map đồi cỏ: đàn bò sữa sau hàng rào gỗ
cars.tilt.add(dash.group);
cars.tilt.add(mirror.group);

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
let barFrac = 0;
function layoutBars() {
  const w = window.innerWidth, h = window.innerHeight;
  const bar = Math.min(h * 0.135, Math.max(0, (h - w / 2.39) / 2));
  barFrac = bar / h;
  document.documentElement.style.setProperty('--bar', bar.toFixed(1) + 'px');
}
window.addEventListener('resize', resize);

// ---------- điện thoại: toàn màn hình + màn hình ngang ----------
const IS_PHONE = matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 600;
const IS_IOS = /iP(hone|od|ad)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const docEl = document.documentElement;
const CAN_FS = !!(docEl.requestFullscreen || docEl.webkitRequestFullscreen);
const isFS = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
function enterFS() {
  if (!CAN_FS || isFS()) return;
  const req = docEl.requestFullscreen ? docEl.requestFullscreen({ navigationUI: 'hide' }) : docEl.webkitRequestFullscreen();
  // toàn màn hình rồi thì khoá ngang (Android Chrome hỗ trợ; nơi khác bỏ qua)
  Promise.resolve(req).then(() => screen.orientation?.lock?.('landscape')).catch(() => {});
}
function exitFS() {
  if (!isFS()) return;
  try { screen.orientation?.unlock?.(); } catch { /* bỏ qua */ }
  (document.exitFullscreen || document.webkitExitFullscreen).call(document);
}
// điện thoại: tự vào toàn màn hình ở lần chạm đầu tiên (trình duyệt bắt buộc phải có thao tác chạm) và mỗi lần chạm sau
// nếu đã bị thoát ra (vuốt / xoay máy...) — trừ khi người chơi chủ động bấm nút thoát toàn màn hình
let fsOptOut = false;
const toggleFS = () => { if (isFS()) { fsOptOut = true; exitFS(); } else { fsOptOut = false; enterFS(); } };
// (cảm ứng: trình duyệt chỉ cho phép khi nhấc tay — pointerup / touchend — chứ không phải lúc chạm xuống)
const autoFS = (e) => { if (!fsOptOut && !isFS() && !el.full.contains(e.target)) enterFS(); };
if (IS_PHONE) { window.addEventListener('pointerup', autoFS, true); window.addEventListener('touchend', autoFS, true); }
// đổi hướng / vào-ra toàn màn hình: kích thước báo về trễ trên một số máy => đo lại vài lần
const resizeSoon = () => { resize(); setTimeout(resize, 120); setTimeout(resize, 450); updateRotate(); };
['fullscreenchange', 'webkitfullscreenchange'].forEach((ev) => document.addEventListener(ev, () => { resizeSoon(); refreshUI(); }));
window.addEventListener('orientationchange', resizeSoon);
window.visualViewport?.addEventListener('resize', resize);
// cầm dọc trên điện thoại: gợi ý xoay ngang (có thể bỏ qua)
let rotateOk = false;
function updateRotate() {
  const show = IS_PHONE && !rotateOk && window.innerHeight > window.innerWidth;
  $('rotate').hidden = !show;
}
$('rotate-ok').addEventListener('click', () => { rotateOk = true; updateRotate(); });
$('rotate').querySelector('.ios').hidden = !(IS_IOS && !CAN_FS && !navigator.standalone);
window.addEventListener('resize', updateRotate);
updateRotate();
resize();

// ---------- trạng thái lái xe ----------
const drive = {
  home: LANE_D, goal: 0, manual: false,
  s: 150,          // độ dài cung trên đường
  d: LANE_D,       // lệch ngang so với tim đường (m, + = bên phải)
  v: CHILL_DEFAULT,        // bắt đầu 25 km/h; khung hình đầu chuyển ngay lên 180 km/h
  target: CHILL_DEFAULT,   // tốc độ mong muốn ở chế độ chill
  fast: true,              // Fast drive (cấp 3) đang bật
  gear: 2,                 // cấp tốc độ 0 / 1 / 2
  fx: 0,                   // cường độ hiệu ứng tốc độ 0..1 (theo tốc độ thực tế)
  latVel: 0,
  pitch: 0,
  pos: new THREE.Vector3(),
  yaw: 0,
};
const keys = new Set();
const pointer = { active: false, id: -1, x: 0, y: 0 };

// ---------- giao diện ----------
// cảnh chờ Start: đồi cỏ, camera quay quanh, nhiều mây, ban đêm
const state = { car: 0, character: 0, map: MAPS.findIndex((m) => m.id === 'meadow'), cam: CAMERAS.findIndex((c) => c.id === 'orbit'), weather: WEATHERS.findIndex((w) => w.id === 'cloudy'), time: TIMES.findIndex((t) => t.id === 'night'), music: 0, cine: true, started: false, mistCover: 0.9, mistDens: 0.4, fstop: FSTOP_DEFAULT, quality: loadQuality() };
let openingElapsed = null; // tính thời gian chạy sau khi bấm Start
let openingCameraPending = false;
const TUNE_KEY = 'chilldrive.tuning.v1';
let savedTuning = null;
try {
  savedTuning = JSON.parse(localStorage.getItem(TUNE_KEY));
  if (savedTuning?.camera) for (const [id, values] of Object.entries(savedTuning.camera)) if (rig.tune[id]) Object.assign(rig.tune[id], values);
  if (savedTuning?.weather) for (const [id, values] of Object.entries(savedTuning.weather)) if (env.weatherProfiles[id]) Object.assign(env.weatherProfiles[id], values);
  if (savedTuning?.environment) Object.assign(env.tune, savedTuning.environment);
  if (savedTuning?.carLights) Object.assign(cars.headlights.tune, savedTuning.carLights);
  if (savedTuning?.streetLights) Object.assign(scenery.lampTune, savedTuning.streetLights);
} catch { /* thông số cũ/hỏng: dùng mặc định trong code */ }
rig.setMode(state.cam);
state.fstop = FSTOPS.indexOf(rig.aperture);
const el = { full: $('b-full'), stop: $('b-stop'), character: $('b-character'), quality: $('b-quality'), lens: $('b-lens'), mist: $('b-mist'), fast: $('b-fast'), car: $('b-car'), map: $('b-map'), cam: $('b-cam'), weather: $('b-weather'), time: $('b-time'), music: $('b-music') };
const setBtn = (btn, icon, text) => { btn.querySelector('b').textContent = icon; btn.querySelector('span').textContent = text; btn.title = text; };

function refreshUI() {
  setBtn(el.car, '🚗', cars.list[state.car]?.name ?? '…');
  setBtn(el.character, '🧑', characterLoading ? 'Đang tải…' : state.character === 1 ? 'Chisa' : 'Người lái');
  el.character.disabled = characterLoading || !person.ready || stop.active || cars.current?.def?.id !== 'mustang';
  el.character.title = cars.current?.def?.id === 'mustang' ? 'Đổi nhân vật' : 'Chisa hiện hỗ trợ Mustang';
  setBtn(el.map, MAPS[state.map].icon, MAPS[state.map].name);
  setBtn(el.cam, '🎥', CAMERAS[state.cam].name);
  setBtn(el.weather, WEATHERS[state.weather].icon, WEATHERS[state.weather].name);
  setBtn(el.time, TIMES[state.time].icon, TIMES[state.time].name);
  setBtn(el.music, MUSIC_MODES[state.music].icon, MUSIC_MODES[state.music].name);
  setBtn(el.fast, '⚡', Math.round(GEARS[drive.gear] * 3.6) + ' km/h');
  el.fast.classList.toggle('on', drive.gear > 0);
  setBtn(el.mist, '🌫️', 'Sương ' + Math.round(state.mistDens * 100) + '%');
  el.mist.classList.toggle('on', !$('mistpanel').hidden);
  setBtn(el.lens, '📷', lensLabel());
  setBtn(el.quality, '⚙️', QUALITY[state.quality].name);
  setBtn(el.stop, stop.state === 'parked' ? '▶️' : stop.state === 'off' ? '🅿️' : '⏳', stop.state === 'parked' ? 'Đi tiếp' : stop.state === 'off' ? 'Dừng xe' : '…');
  el.lens.classList.toggle('on', !$('lenspanel').hidden);
  el.cam.classList.toggle('on', tuneKind === 'camera');
  el.weather.classList.toggle('on', tuneKind === 'weather');
  el.time.classList.toggle('on', tuneKind === 'time');
  el.full.hidden = !(CAN_FS && IS_PHONE);          // nút toàn màn hình chỉ có trên điện thoại (máy tính: phím U)
  setBtn(el.full, isFS() ? '🗗' : '⛶', isFS() ? 'Thoát toàn màn hình' : 'Toàn màn hình');
}
function loadQuality() {
  try { const i = QUALITY.findIndex((q) => q.id === localStorage.getItem('chilldrive.quality')); if (i >= 0) return i; } catch { /* không có localStorage */ }
  return QUALITY_DEFAULT;
}
// áp dụng mức chất lượng người chơi chọn (Low / Mid / Good / Ultra)
function applyQuality() {
  const q = QUALITY[state.quality];
  pixelRatio = q.id === 'low' ? q.ratio : Math.min(q.ratio, Math.max(1, window.devicePixelRatio || 1));
  if (IS_PHONE && q.id === 'good') pixelRatio = Math.min(pixelRatio, 1.25);   // màn hình điện thoại nhỏ: đủ nét, nhẹ GPU hơn
  renderer.setPixelRatio(pixelRatio);
  post.setSamples(q.msaa);
  resize();
  for (const f of [reeds, grass, meadow]) { f.setView(q.view); f.setDensity(q.veg); }
  terrain.setView(q.view, camera.position);       // phạm vi hiển thị (Ultra: xa gấp đôi) — đổi lúc đang chạy thì dựng lại địa hình
  env.setShadowSize(q.shadow);
  refl.enabled = q.refl;
  nature.setRadius(q.trees);
  try { localStorage.setItem('chilldrive.quality', q.id); } catch { /* bỏ qua */ }
}
const nextQuality = () => { state.quality = (state.quality + 1) % QUALITY.length; applyQuality(); refreshUI(); };
function lensLabel() { return Math.round(rig.focal) + 'mm f/' + rig.aperture; }

let characterLoading = false, characterRequest = 0;
async function chooseCharacter(i) {
  if (stop.active) return;
  i = cars.current?.def?.id === 'mustang' ? i % 2 : 0;
  const request = ++characterRequest;
  characterLoading = true; refreshUI();
  let next;
  try {
    next = await new Person().load(i ? 'assets/models/chisa_wuthering_waves.glb' : 'assets/models/person.glb', { chisa: i === 1 });
    if (request !== characterRequest || (i && cars.current?.def?.id !== 'mustang')) { next.dispose(); return; }
    person.replace(next); state.character = i;
    stop.place(cars.dim); stop.sit();
    compileFor(post.sceneRT, camera, person.root).catch(() => {});
  } catch (e) { next?.dispose(); console.warn('Không tải được nhân vật', e); }
  finally { if (request === characterRequest) { characterLoading = false; refreshUI(); } }
}
const nextCharacter = () => { if (!characterLoading && person.ready && cars.current?.def?.id === 'mustang') return chooseCharacter(state.character + 1); };

async function chooseCar(i) {
  if (stop.active) return;                        // đang dừng xe: không đổi xe
  state.car = (i + cars.list.length) % cars.list.length;
  setBtn(el.car, '🚗', 'Đang tải…');
  try {
    if (!await cars.select(state.car)) return;     // lượt tải đã bị thay thế: chưa đặt gương/taplo khi xe chưa có
  } catch (e) {
    console.error('Không tải được xe', cars.list[state.car].name, e);
    if (cars.list.length > 1) { cars.list.splice(state.car, 1); return chooseCar(state.car); }
  }
  // Chisa chỉ được căn cho Mustang; xe khác dùng lại người lái mặc định.
  if (cars.current?.def?.id !== 'mustang' && (state.character || characterLoading)) await chooseCharacter(0);
  if (person.ready && !stop.active) { stop.place(cars.dim); stop.sit(); }
  mirror.place(cars.dim, cars.current.screen);
  dash.place(cars.current.screen);
  wing.setCar(cars.current);
  warmShaders();
  refreshUI();
}
const nextCar = () => chooseCar(state.car + 1);

// dừng xe / đi tiếp (cảnh người bước ra khỏi xe)
function toggleStop() {
  if (!person.ready || !state.started || characterLoading) return;
  if (stop.state === 'off') { setGear(0); stop.place(cars.dim); }
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
cows.onBuild = (group) => { compileFor(post.sceneRT, camera, group).catch(() => {}); };
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
  // map Biển: mực nước thấp hơn chỗ thấp nhất của đường 3 m (xét 120 km đường phía trước)
  if (id === 'sea') { road.ensure(drive.s + 120000); let lo = Infinity; for (const p of road.pts) lo = Math.min(lo, p.y); TP.seaLevel = lo - 3; }
  ocean.setMap(id === 'sea', TP.seaLevel);
  scenery.setMap(id);
  terrain.reset();
  terrain.setCar(drive.s);
  terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
  reeds.visible = id === 'reed';
  grass.visible = id === 'forest';
  meadow.visible = id === 'meadow';
  cows.visible = id === 'meadow';
  town.reset();
  town.visible = id === 'mountain';
  waterfalls.setMap(id);
  rig.sidePref = id === 'mountain' ? 1 : 0;      // camera bên hông đứng phía thung lũng
  nature.setRadius(QUALITY[state.quality].trees);   // tính lại cây chi tiết cho map mới
  rig.sideSign = 0;
  warmShaders();
};
const nextMap = () => { state.map = (state.map + 1) % MAPS.length; applyMap(); refreshUI(); };
function onCamChange() {
  state.fstop = Math.max(0, FSTOPS.indexOf(rig.aperture));
  syncLens();
}
let tuneKind = null;
let renderTune = () => {};
const nextCam = () => { state.cam = (state.cam + 1) % CAMERAS.length; rig.setMode(state.cam); onCamChange(); refreshUI(); if (tuneKind === 'camera') renderTune(); };
const nextWeather = () => { state.weather = (state.weather + 1) % WEATHERS.length; env.setWeather(WEATHERS[state.weather].id); refreshUI(); if (tuneKind === 'weather') renderTune(); };
const nextTime = () => {
  state.time = (state.time + 1) % TIMES.length;
  env.setTime(TIMES[state.time].hour);
  if (TIMES[state.time].id === 'night') setMist(0.6, 0.6);     // ban đêm: sương phủ + dày 60%
  refreshUI();
  if (tuneKind === 'time') renderTune();
};
// đặt độ phủ / độ dày sương (0..1) và cập nhật thanh trượt
function setMist(cover, dens) {
  state.mistCover = cover; state.mistDens = dens;
  for (const [id, key] of [['mist-cover', 'mistCover'], ['mist-dens', 'mistDens']]) {
    $(id).value = Math.round(state[key] * 100);
    $(id + '-v').textContent = $(id).value;
  }
}
// Cinematic luôn bật (letterbox, xoá phông, bloom, chỉnh màu...) — không còn nút tắt
const applyCine = () => document.body.classList.toggle('cine', state.cine && state.started);
function setGear(g) {
  const was = drive.fast;
  drive.gear = g; drive.fast = g === 2; drive.target = GEARS[Math.min(g, 1)];
  if (drive.fast !== was) syncLens();
}
const toggleFast = () => { if (stop.active) return; setGear((drive.gear + 1) % GEARS.length); refreshUI(); };
const nextMusic = () => { state.music = (state.music + 1) % MUSIC_MODES.length; audio.setMode(state.music); refreshUI(); };

el.fast.onclick = toggleFast;
// bảng chỉnh sương mù: độ phủ + độ dày
const closeTune = () => { tuneKind = null; $('tunepanel').hidden = true; refreshUI(); };
const toggleMistPanel = () => { closeTune(); $('mistpanel').hidden = !$('mistpanel').hidden; $('lenspanel').hidden = true; refreshUI(); };
el.mist.onclick = toggleMistPanel;
// bảng chỉnh ống kính: tiêu cự (= zoom) + khẩu độ (độ xoá phông)
const toggleLensPanel = () => { closeTune(); $('lenspanel').hidden = !$('lenspanel').hidden; $('mistpanel').hidden = true; refreshUI(); };
el.lens.onclick = toggleLensPanel;
el.quality.onclick = nextQuality;
el.stop.onclick = toggleStop;
el.character.onclick = nextCharacter;
el.full.onclick = toggleFS;
const focalIn = $('lens-focal'), fstopIn = $('lens-fstop');
focalIn.min = FOCAL_MIN; focalIn.max = FOCAL_MAX;
fstopIn.max = FSTOPS.length - 1;
const syncLens = () => {
  focalIn.value = Math.round(rig.focal); $('lens-focal-v').textContent = Math.round(rig.focal) + 'mm';
  state.fstop = Math.max(0, FSTOPS.indexOf(rig.aperture));
  fstopIn.value = state.fstop; $('lens-fstop-v').textContent = 'f/' + rig.aperture;
};
focalIn.addEventListener('input', () => { const t = rig.tune[CAMERAS[state.cam].id]; t.focal = rig.focal = Number(focalIn.value); syncLens(); refreshUI(); });
fstopIn.addEventListener('input', () => { const t = rig.tune[CAMERAS[state.cam].id]; state.fstop = Number(fstopIn.value); t.aperture = rig.aperture = FSTOPS[state.fstop]; syncLens(); refreshUI(); });
for (const i of [focalIn, fstopIn]) i.addEventListener('change', () => i.blur());
syncLens();
for (const [id, key] of [['mist-cover', 'mistCover'], ['mist-dens', 'mistDens']]) {
  const input = $(id);
  input.value = Math.round(state[key] * 100);
  $(id + '-v').textContent = input.value;
  input.addEventListener('input', () => { state[key] = input.value / 100; $(id + '-v').textContent = input.value; refreshUI(); });
  input.addEventListener('change', () => input.blur());   // trả phím mũi tên lại cho việc lái xe
}

const CAM_FIELDS = {
  chase: [['distance','Khoảng lùi (m)',1,20,.1],['height','Độ cao (m)',.2,8,.05],['carHeight','Theo chiều cao xe',0,1,.01],['lookAhead','Nhìn trước (m)',0,40,.5],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['slopeLook','Bám dốc',0,25,.5],['speedBack','Lùi theo tốc độ',0,6,.1],['cineBack','Lùi cinematic',0,6,.1],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  low: [['distance','Khoảng lùi (m)',1,20,.1],['height','Độ cao (m)',.2,5,.05],['lookAhead','Nhìn trước (m)',0,40,.5],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['slopeLook','Bám dốc',0,25,.5],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  side: [['distance','Khoảng ngang (m)',1,25,.1],['height','Độ cao (m)',.2,8,.05],['lookHeight','Tỉ lệ cao xe',0,1,.01],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  cockpit: [['eyeSide','Dịch ngang (m)',-.5,.5,.005],['eyeHeight','Dịch cao (m)',-.5,.5,.005],['eyeForward','Dịch trước (m)',-.5,.5,.005],['pitch','Góc chúc (rad)',-.2,.8,.005],['lookDistance','Tầm nhìn (m)',5,80,1],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.01,.5,.005]],
  orbit: [['radius','Bán kính (m)',1,30,.1],['height','Độ cao (m)',.2,12,.05],['heightWave','Nhấp nhô (m)',0,4,.05],['waveRate','Nhịp nhấp nhô',0,3,.05],['speed','Tốc độ quay',-.8,.8,.01],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  drone: [['distance','Khoảng lùi (m)',1,50,.5],['height','Độ cao (m)',2,50,.5],['lookAhead','Nhìn trước (m)',-10,40,.5],['lookHeight','Cao điểm nhìn (m)',0,8,.05],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
};
const WEATHER_FIELDS = [
  ['fog','Mật độ sương',0,.012,.0001],['overcast','Độ âm u',0,1,.01],['clouds','Mây che phủ',0,1,.01],['sun','Cường độ nắng',0,2,.01],
  ['rain','Lượng mưa',0,1,.01],['snow','Lượng tuyết',0,1,.01],['wet','Độ ướt đường',0,1,.01],['cover','Tuyết phủ đất',0,1,.01],
  ['wind','Sức gió',0,1,.01],['dark','Độ tối',0,1,.01],
];
const ENV_FIELDS = [
  ['exposure','Phơi sáng',.2,2.5,.01],['skyBrightness','Độ sáng trời',0,3,.01],['directLight','Ánh sáng chính',0,3,.01],
  ['ambientLight','Ánh sáng phủ',0,3,.01],['sunGlow','Quầng mặt trời',0,3,.01],['sunDisc','Đĩa mặt trời',0,3,.01],
  ['cloudBrightness','Độ sáng mây',0,3,.01],['rays','Tia sáng',0,3,.01],
];
const tunePanel = $('tunepanel'), tuneMode = $('tune-mode'), tuneFields = $('tune-fields');
const saveTuning = () => {
  try { localStorage.setItem(TUNE_KEY, JSON.stringify({ camera: rig.tune, weather: env.weatherProfiles, environment: env.tune, carLights: cars.headlights.tune, streetLights: scenery.lampTune })); } catch { /* chế độ riêng tư */ }
};
const addHeading = (text) => { const h = document.createElement('h4'); h.textContent = text; tuneFields.append(h); };
const addNumber = ({ label, min, max, step, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), range = document.createElement('input'), number = document.createElement('input');
  name.textContent = label; range.type = 'range'; number.type = 'number';
  for (const input of [range, number]) { input.min = min; input.max = max; input.step = step; input.value = get(); }
  const apply = (value) => { value = clamp(Number(value), Number(min), Number(max)); set(value); range.value = number.value = value; saveTuning(); };
  range.oninput = () => apply(range.value); number.onchange = () => { apply(number.value); number.blur(); };
  row.append(name, range, number); tuneFields.append(row);
};
const addColor = ({ label, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), input = document.createElement('input');
  name.textContent = label; input.type = 'color'; input.value = get(); input.oninput = () => { set(input.value); saveTuning(); };
  row.append(name, input); tuneFields.append(row);
};
const addChoice = ({ label, options, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), select = document.createElement('select');
  name.textContent = label;
  options.forEach((text, value) => { const option = document.createElement('option'); option.value = value; option.textContent = text; option.selected = value === get(); select.append(option); });
  select.onchange = () => { set(Number(select.value)); saveTuning(); }; row.append(name, select); tuneFields.append(row);
};
const cameraSpecs = () => {
  const id = CAMERAS[state.cam].id, values = rig.tune[id];
  return CAM_FIELDS[id].map(([key,label,min,max,step]) => ({ label, min, max, step, get: () => values[key], set: (v) => {
    values[key] = v; if (key === 'near') { camera.near = v; camera.updateProjectionMatrix(); }
  } }));
};
const environmentSpecs = () => ENV_FIELDS.map(([key,label,min,max,step]) => ({ label, min, max, step, get: () => env.tune[key], set: (v) => { env.tune[key] = v; env.envKey = ''; } }));

renderTune = () => {
  if (!tuneKind) return;
  tuneFields.replaceChildren(); tuneMode.replaceChildren();
  if (tuneKind === 'carLight' || tuneKind === 'streetLight') {
    tuneMode.hidden = true;
    const carLight = tuneKind === 'carLight', values = carLight ? cars.headlights.tune : scenery.lampTune;
    $('tune-title').textContent = carLight ? 'Đèn xe người chơi' : 'Đèn đường';
    addHeading(carLight ? 'Chùm sáng và quầng đèn' : 'Ánh sáng phủ mặt đường');
    const specs = carLight ? [
      ['intensity','Cường độ',0,300,1],['distance','Tầm chiếu (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],
      ['penumbra','Độ mềm viền',0,1,.01],['decay','Suy giảm',0,2,.01],['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',.2,8,.05],
    ] : [
      ['intensity','Cường độ',0,500,1],['distance','Tầm phủ (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],
      ['penumbra','Độ mềm viền',0,1,.01],['decay','Suy giảm',0,2,.01],['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',1,24,.1],
    ];
    specs.map(([key,label,min,max,step]) => ({ label,min,max,step,get:()=>values[key],set:(v)=>{ values[key]=v; } })).forEach(addNumber);
    addColor({ label: 'Màu ánh sáng', get: () => values.color, set: (v) => { values.color = v; } });
    if (carLight) addColor({ label: 'Màu quầng', get: () => values.glowColor, set: (v) => { values.glowColor = v; } });
    return;
  }
  tuneMode.hidden = false;
  const list = tuneKind === 'camera' ? CAMERAS : tuneKind === 'weather' ? WEATHERS : TIMES;
  const selected = state[tuneKind === 'camera' ? 'cam' : tuneKind];
  list.forEach((item, i) => { const o = document.createElement('option'); o.value = i; o.textContent = item.name; o.selected = i === selected; tuneMode.append(o); });
  $('tune-title').textContent = tuneKind === 'camera' ? 'Camera · ' + CAMERAS[state.cam].name : tuneKind === 'weather' ? 'Thời tiết · ' + WEATHERS[state.weather].name : 'Thời gian · ' + TIMES[state.time].name;
  if (tuneKind === 'camera') {
    const values = rig.tune[CAMERAS[state.cam].id];
    addHeading('Vị trí và chuyển động'); cameraSpecs().forEach(addNumber);
    addHeading('Ống kính');
    addNumber({ label: 'Tiêu cự (mm)', min: FOCAL_MIN, max: FOCAL_MAX, step: 1, get: () => values.focal, set: (v) => { values.focal = rig.focal = v; syncLens(); refreshUI(); } });
    addChoice({ label: 'Khẩu độ', options: FSTOPS.map((v) => 'f/' + v), get: () => Math.max(0, FSTOPS.indexOf(values.aperture)), set: (v) => { values.aperture = rig.aperture = FSTOPS[v]; state.fstop = v; syncLens(); refreshUI(); } });
  } else if (tuneKind === 'weather') {
    const id = WEATHERS[state.weather].id, profile = env.weatherProfiles[id];
    addHeading('Preset ' + WEATHERS[state.weather].name);
    WEATHER_FIELDS.map(([key,label,min,max,step]) => ({ label,min,max,step,get:()=>profile[key],set:(v)=>{ profile[key]=v; env.w[key]=v; } })).forEach(addNumber);
    addColor({ label: 'Màu khí quyển', get: () => profile.tint, set: (v) => { profile.tint = v; env.tint.set(v); env.envKey = ''; } });
    addHeading('Ánh sáng chung'); environmentSpecs().forEach(addNumber);
  } else {
    addHeading('Chu kỳ ngày đêm');
    addNumber({ label: 'Giờ hiện tại', min: 0, max: 23.99, step: .05, get: () => env.hour, set: (v) => { env.hour = v; env.tween = null; env.envKey = ''; } });
    addNumber({ label: 'Tốc độ tự chạy', min: 0, max: 1, step: .005, get: () => env.tune.autoSpeed, set: (v) => { env.tune.autoSpeed = v; } });
    addNumber({ label: 'Hướng mặt trời', min: -3.142, max: 3.142, step: .01, get: () => env.tune.sunAzimuth, set: (v) => { env.tune.sunAzimuth = v; env.envKey = ''; } });
    addNumber({ label: 'Hướng mặt trăng', min: -3.142, max: 3.142, step: .01, get: () => env.tune.moonAzimuth, set: (v) => { env.tune.moonAzimuth = v; env.envKey = ''; } });
    addHeading('Ánh sáng chung'); environmentSpecs().forEach(addNumber);
  }
};
const openTune = (kind) => {
  tuneKind = kind; $('mistpanel').hidden = $('lenspanel').hidden = true; tunePanel.hidden = false; renderTune(); refreshUI();
};
tuneMode.onchange = () => {
  const i = Number(tuneMode.value);
  if (tuneKind === 'camera') { state.cam = i; rig.setMode(i); onCamChange(); }
  else if (tuneKind === 'weather') { state.weather = i; env.setWeather(WEATHERS[i].id); }
  else { state.time = i; env.setTime(TIMES[i].hour); }
  refreshUI(); renderTune();
};
$('tune-close').onclick = closeTune;
$('tune-reset').onclick = () => {
  if (tuneKind === 'camera') { rig.resetTune(CAMERAS[state.cam].id); onCamChange(); }
  else if (tuneKind === 'weather') { env.resetWeather(WEATHERS[state.weather].id); env.resetTune(); env.snapWeather(WEATHERS[state.weather].id); }
  else if (tuneKind === 'time') { env.resetTune(); env.setTime(TIMES[state.time].hour); }
  else if (tuneKind === 'carLight') Object.assign(cars.headlights.tune, HEADLIGHT_DEFAULTS);
  else Object.assign(scenery.lampTune, STREETLIGHT_DEFAULTS);
  saveTuning(); refreshUI(); renderTune();
};
el.car.onclick = nextCar;
el.map.onclick = nextMap;
el.cam.onclick = () => openTune('camera');
el.weather.onclick = () => openTune('weather');
el.time.onclick = () => openTune('time');
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
    case 'KeyG': toggleMistPanel(); break;
    case 'KeyL': toggleLensPanel(); break;
    case 'KeyQ': nextQuality(); break;
    case 'KeyP': toggleStop(); break;
    case 'KeyU': toggleFS(); break;
  }
  if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

// bấm giữ + rê chuột / vuốt màn hình: nhìn xung quanh 360° (thả ra camera tự về vị trí cũ)
// lăn chuột / chụm-mở 2 ngón / phím + -: zoom
const touches = new Map();                         // pointerId -> {x, y}
const clickStart = new Map();
// zoom: cảnh dừng xe đang toàn cảnh thì zoom 16–35 mm + khoảng cách 1–30 m, còn lại zoom camera chạy xe
function zoomBy(f) { if (!(stop.active && stop.zoomBy(f))) rig.zoomBy(f); }
let pinchDist = 0;
const spread = () => { const [a, b] = [...touches.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
canvas.addEventListener('pointerdown', (e) => {
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  clickStart.set(e.pointerId, { x: e.clientX, y: e.clientY, moved: false });
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
  const start = clickStart.get(e.pointerId); if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 8) start.moved = true;
  if (touches.size === 2) {
    const d = spread();
    if (pinchDist > 0 && d > 0) zoomBy(pinchDist / d);
    pinchDist = d;
  } else if (pointer.active && e.pointerId === pointer.id) {
    const dx = e.clientX - pointer.x, dy = e.clientY - pointer.y;
    rig.lookBy(dx * 4.7 / window.innerWidth, dy * 2.2 / window.innerHeight);
    if (stop.active && Math.abs(dx) + Math.abs(dy) > 0) stop.noteCameraInput();
    pointer.x = e.clientX; pointer.y = e.clientY;
  }
});
const endPointer = (e) => {
  const start = clickStart.get(e.pointerId);
  if (start && !start.moved && e.type === 'pointerup') {
    cars.root.updateWorldMatrix(true, true);
    const rect = canvas.getBoundingClientRect(), p = new THREE.Vector3();
    const hitCarLight = cars.headGlow.some((glow) => {
      if (!glow.visible) return false;
      glow.getWorldPosition(p).project(camera);
      const x = rect.left + (p.x + 1) * rect.width * .5, y = rect.top + (1 - p.y) * rect.height * .5;
      return p.z >= -1 && p.z <= 1 && Math.hypot(e.clientX - x, e.clientY - y) <= 56;
    });
    if (hitCarLight) openTune('carLight');
    else if (stop.active && scenery.hitLamp(camera, e.clientX, e.clientY, rect)) openTune('streetLight');
  }
  clickStart.delete(e.pointerId);
  touches.delete(e.pointerId);
  if (touches.size < 2) pinchDist = 0;
  if (touches.size === 0) { pointer.active = false; rig.look.hold = false; }
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
  zoomBy(Math.exp(clamp(dy, -200, 200) * 0.0012));
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
  const target = inCar && !stop.active ? 0.8 : Math.max(0.5, camera.position.distanceTo(_focusP));
  dof.focus += (target - dof.focus) * (dof.amt > 0.01 ? 1 - Math.exp(-dt * 6) : 1);
  const f = rig.focalEff, N = rig.apertureS, F = dof.focus * 1000;
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

// cảnh dừng xe: camera bay vòng quanh điểm nhìn theo góc người dùng rê chuột (yaw 360°, pitch), không chui xuống đất
const _sl = new THREE.Vector3();
function stopLook(pos, look) {
  const lk = rig.look;
  const v = _sl.copy(pos).sub(look);
  if (Math.abs(lk.yaw) > 1e-4 || Math.abs(lk.pitch) > 1e-4) {
    const c = Math.cos(lk.yaw), s = Math.sin(lk.yaw);
    v.set(v.x * c + v.z * s, v.y, -v.x * s + v.z * c);
    const h = Math.hypot(v.x, v.z), R = v.length();
    const el = clamp(Math.atan2(v.y, h) + lk.pitch, 0.03, 1.35);
    const f = (R * Math.cos(el)) / Math.max(h, 1e-3);
    v.set(v.x * f, R * Math.sin(el), v.z * f);
  }
  camera.position.copy(look).add(v);
  const g = Math.max(terrain.heightAt(camera.position.x, camera.position.z) + 0.25, ocean.group.visible ? ocean.level + 1.2 : -Infinity);
  if (camera.position.y < g) camera.position.y = g;
}

// camera trong xe: góc chúc xuống vừa đủ để mép dưới vành vô lăng chạm mép dưới khung hình (trong dải letterbox),
// nhưng không chúc quá mức làm mất mép trên gương chiếu hậu (ưu tiên thấy trọn gương)
const _ck = new THREE.Vector3();
function cockpitPitch() {
  const sw = cars.current?.steer;
  if (!sw || !rig.eyeAt || !rig.eyeAt(_ck)) return 0.2;
  cars.tilt.worldToLocal(_ck);
  const [, ny, nz] = sw.n;
  const uy = 1 - ny * ny, uz = -ny * nz, ul = Math.hypot(uy, uz) || 1;    // hướng "lên" trong mặt phẳng vô lăng
  // Chừa phần dưới vành để thấy hai tay và cẳng tay; vẫn ưu tiên không cắt gương.
  const r = sw.r * 0.65;
  const by = sw.c[1] - (uy / ul) * r, bz = sw.c[2] - (uz / ul) * r;
  const down = Math.atan2(_ck.y - by, _ck.z - bz);
  const half = Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * (1 - 2 * barFrac * cineAmt));
  const mp = mirror.group.position;                                     // mép trên gương (hệ xe)
  const up = Math.atan2(mp.y + mirror.size[1] / 2 + 0.012 - _ck.y, _ck.z - mp.z);
  const lo = down - half + 0.01, hi = half - up - 0.015;
  return clamp(lo <= hi ? lo : hi, -0.1, 0.6);
}

// hai tay đặt lên vành vô lăng (animation lái gốc dùng vô lăng to/thấp hơn => tay lơ lửng ngoài vành)
const _wc = new THREE.Vector3(), _wn = new THREE.Vector3(), _wr = new THREE.Vector3(), _wu = new THREE.Vector3(), _wt = new THREE.Vector3(), _wp = new THREE.Vector3();
const GRIP = 0.08;            // góc cầm (rad dưới phương ngang): gần 3 giờ & 9 giờ
// tư thế ngồi trên ghế đã đo (config `seat`): ngả lưng, chân duỗi tới sàn (gọi trước gripWheel: ngả lưng làm dời vai)
const _ft = new THREE.Vector3(), _fp = new THREE.Vector3(), _fd = new THREE.Vector3();
function seatPose(seat) {
  if (!seat) return;
  person.recline(seat.recline || 0);
  const m = cars.tilt.matrixWorld, [fx, fy, fz] = seat.foot, cx = seat.hip[0];
  for (const [side, x] of [['l', fx], ['r', 2 * cx - fx]]) {
    _ft.set(x, fy, fz).applyMatrix4(m);
    _fp.set(0, 1, -0.6).transformDirection(m);                    // đầu gối hướng lên, hơi ra trước
    _fd.set(0, 0.45, -1).transformDirection(m);                   // mũi giày đặt lên bàn đạp (chếch lên ~24°)
    person.reachLeg(side, _ft, _fp, _fd);
  }
}

function gripWheel(sw) {
  cars.root.updateMatrixWorld();
  const m = cars.tilt.matrixWorld;
  _wc.fromArray(sw.c).applyMatrix4(m);
  _wn.fromArray(sw.n).transformDirection(m);
  _wr.set(1, 0, 0).transformDirection(m);
  _wr.addScaledVector(_wn, -_wr.dot(_wn)).normalize();
  _wu.crossVectors(_wn, _wr);
  for (const [side, ang] of [['r', -GRIP], ['l', Math.PI + GRIP]]) {
    const a = ang + (cars.steerAngle || 0), cx = Math.cos(a), cy = Math.sin(a);
    // Offset theo xe: căn lòng bàn tay với vành thật, giữ tư thế ngón của animation.
    const radius = sw.r + (sw.grip?.radial ?? 0.02), depth = sw.grip?.depth ?? 0.065;
    _wt.copy(_wc).addScaledVector(_wr, cx * radius).addScaledVector(_wu, cy * radius).addScaledVector(_wn, depth);
    const pole = _wp.copy(_wr).multiplyScalar(side === 'r' ? 0.25 : -0.25).addScaledVector(_wu, -1).addScaledVector(_wn, 0.2);
    person.reach(side, _wt, pole);
    const tangent = sw.grip?.align ? _wp.copy(_wu).multiplyScalar(cx).addScaledVector(_wr, -cy).multiplyScalar(side === 'r' ? 1 : -1) : null;
    person.faceGrip(side, _wn, tangent);
  }
}

// tia nắng: vị trí mặt trời (hoặc trăng) trên màn hình; nhạt dần khi quay lưng lại hoặc mặt trời ra xa ngoài khung hình
const _sunP = new THREE.Vector3(), _camF = new THREE.Vector3();
function rayParams() {
  const st = env.state, r = post.rays;
  r.near = camera.near; r.far = camera.far;
  let amt = st.rays * THREE.MathUtils.smoothstep(camera.getWorldDirection(_camF).dot(st.rayDir), 0.05, 0.5);
  if (amt > 0.002) {
    _sunP.copy(st.rayDir).multiplyScalar(1000).add(camera.position).project(camera);
    amt *= 1 - THREE.MathUtils.smoothstep(Math.max(Math.abs(_sunP.x), Math.abs(_sunP.y)), 1.0, 1.9);
    r.uv.set(_sunP.x * 0.5 + 0.5, _sunP.y * 0.5 + 0.5);
  }
  r.color.copy(st.rayCol).multiplyScalar(Math.max(amt, 0) * 1.2);
}

function frame(now) {
  const dt = clamp((now - last) / 1000, 0, 0.05);
  last = now;

  if (openingElapsed !== null) {
    openingElapsed += dt;
    if (openingElapsed >= 3) {
      openingElapsed = null;
      setGear(0);
      openingCameraPending = true;
    }
  }
  const opening = !state.started || openingElapsed !== null;

  // điều khiển
  const left = keys.has('ArrowLeft') || keys.has('KeyA');
  const right = keys.has('ArrowRight') || keys.has('KeyD');
  const steer = (right ? 1 : 0) - (left ? 1 : 0);
  if (keys.has('ArrowUp') || keys.has('KeyW')) drive.target += 2.5 * dt;
  if (keys.has('ArrowDown') || keys.has('KeyS')) drive.target -= 2.5 * dt;
  if (keys.has('Equal') || keys.has('NumpadAdd')) zoomBy(Math.exp(-1.2 * dt));
  if (keys.has('Minus') || keys.has('NumpadSubtract')) zoomBy(Math.exp(1.2 * dt));
  drive.target = clamp(drive.target, CHILL_MIN, CHILL_MAX);
  drive.goal = drive.fast ? FAST_SPEED : drive.target;
  const goal = opening ? FAST_SPEED : Math.min(drive.goal, traffic.ctrl.maxV);
  if (opening) drive.v = FAST_SPEED;
  else if (stop.active) drive.v = stop.speed(drive.v, dt);    // cảnh dừng xe: giảm tốc đều tới khi dừng hẳn
  else drive.v += clamp(goal - drive.v, -8 * dt, 6 * dt);
  if (openingCameraPending && drive.v <= CHILL_DEFAULT + 0.01) {
    openingCameraPending = false;
    drive.v = CHILL_DEFAULT;
    state.cam = CAMERAS.findIndex((c) => c.id === 'chase');
    rig.setMode(state.cam);
    onCamChange();
    refreshUI();
  }
  drive.s += drive.v * dt;
  // hiệu ứng tốc độ tăng dần theo tốc độ thực tế (không có gì dưới ~55 km/h)
  drive.fx += (sstep(55 * KMH, FAST_SPEED, drive.v) - drive.fx) * (1 - Math.exp(-dt * 4));

  // lệch ngang: lái tay, hoặc tự về giữa làn khi buông tay
  if (steer !== 0) drive.manual = true;
  else if (drive.manual) { drive.manual = false; drive.home = drive.d >= 0 ? LANE_D : -LANE_D; }
  const lane = traffic.ctrl.lane ?? drive.home;
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
  cars.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, latVel: drive.latVel, curvature: road.curvature(drive.s + Math.min(12, drive.v * 0.4)), rough: road.dirtAt(drive.s) });
  // người lái: luôn ngồi trong xe; camera trong xe nhìn từ mắt người lái => thu nhỏ đầu (không nhìn xuyên vào đầu)
  if (person.ready) {
    person.root.visible = true;
    const inCar = CAMERAS[state.cam].id === 'cockpit' && !stop.active;
    person.head.scale.setScalar(inCar ? 0.001 : 1);
    cars.cabinLevel = inCar ? (0.35 + 0.45 * env.state.dayF) * (1 + env.state.dark) : 0;   // đèn cabin để taplo / tay không tối om (bão: bù độ phơi sáng bị giảm)
    person.update(dt);
    const sw = cars.current?.steer;
    const seated = stop.state === 'off' || stop.state === 'stopping';
    person.footShade.value = seated ? 1 : 0;                       // giày trong hốc để chân: tối
    if (seated) { seatPose(cars.dim.seat); if (sw) gripWheel(sw); }
  }
  if (stop.active) {
    const prev = stop.state;
    stop.update(dt, cars.root, drive.v);
    const c = stop.cam;
    stopLook(c.pos, c.look);                       // giữ chuột rê: xoay quanh người; tự quay nghỉ 2 giây sau thao tác
    camera.lookAt(c.look);
    const fov = rig.fovFor(c.focal);
    const near = stop.closeK > 0.01 ? 0.06 : 0.3;                 // cận cảnh miệng: mặt phẳng cắt gần sát hơn (tay không bị cắt)
    if (Math.abs(camera.fov - fov) > 0.01 || camera.near !== near) { camera.fov = fov; camera.near = near; camera.updateProjectionMatrix(); }
    if (stop.state === 'off') {                    // xong cảnh: trả camera cho chế độ đang chọn, lướt mượt về
      rig.setMode(state.cam);                      // (trả lại mặt phẳng cắt gần của chế độ camera)
      rig.relP.copy(camera.position).sub(drive.pos);
      rig.relL.copy(c.look).sub(drive.pos);
      rig.fov = camera.fov;
      rig.look.yaw = rig.look.pitch = 0;           // góc xoay đã nằm sẵn trong vị trí camera
    }
    if (stop.state !== prev) refreshUI();
  } else {
    rig.cockpitPitch = cockpitPitch();
    rig.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, dim: cars.dim, fx: drive.fx, side: drive.d >= 0 ? -1 : 1 });
  }

  // môi trường
  env.precip.setCar(cars.tilt, cars.dim);
  env.update(dt, drive.pos);
  const st = env.state;
  scenery.update(drive.s);
  scenery.apply(st);
  scenery.updateLights(camera.position);
  ocean.update(now / 1000, camera.position, road, drive.s);
  waterfalls.update(now / 1000, drive.s, st.light, { d: drive.d, v: drive.v, dim: cars.dim, npcs: traffic.active, cam: camera, audio });
  if (reeds.visible) reeds.update(now / 1000, camera.position, road, drive.s, st);
  grass.group.visible = MAPS[state.map].id === 'forest' && st.cover < 0.5;   // tuyết phủ thì ẩn cỏ
  if (grass.visible) grass.update(now / 1000, camera.position, road, drive.s, st);
  meadow.group.visible = MAPS[state.map].id === 'meadow' && st.cover < 0.5;
  if (meadow.visible) meadow.update(now / 1000, camera.position, road, drive.s, st);
  cows.update(dt, drive.s, road, terrain);
  terrain.setCar(drive.s);
  terrain.update(camera.position);
  nature.update(camera.position, terrain);
  terrain.apply(st);
  // đom đóm: lúc trời tối, không mưa / tuyết / gió mạnh
  const ss = THREE.MathUtils.smoothstep;
  const ffAmt = ss(st.night, 0.35, 0.9) * (1 - Math.min(1, st.rain * 2)) * (1 - st.snow) * (1 - st.cover) * (1 - ss(st.wind, 0.6, 0.9));
  fireflies.update(now / 1000, drive.s, road, terrain, ffAmt, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)), scene.fog.density);
  dash.update(dt, drive.v * 3.6, env.clock);
  smoke.update(dt, stop.smoking, st, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)));
  if (state.started && cars.current) {
    const obstacles = [{ id: 'player', s: drive.s, d: drive.d, speed: drive.v, direction: 1, width: cars.dim.width, length: cars.dim.length }];
    if (person.ready && ['exit', 'parked', 'enter'].includes(stop.state)) {
      person.root.getWorldPosition(_trafficPerson);
      obstacles.push({ id: 'person', ...roadPosition(_trafficPerson, road, drive.s), width: 0.8, length: 0.8, speed: 0, direction: 0 });
    }
    traffic.playerHome = drive.home; traffic.playerGoal = stop.active ? 0 : drive.goal;
    traffic.update(dt, drive.s, drive.d, road, st.lamps, cars.current.def.id, obstacles, audio);
  }
  town.update(drive.s, road, terrain, st.lamps, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)), scene.fog.density);
  cars.setLights(st.lamps);
  audio.setAmbient({ speed: drive.v, rain: st.rain, snow: st.snow, wind: st.wind, dark: st.dark, fx: drive.fx,
    inCar: CAMERAS[state.cam].id === 'cockpit' && !stop.active });

  // tốc độ cao: camera rung nhẹ (gió lớn không rung). Trời bão: tắt mọi rung lắc (camera, cầm tay, thân xe nhún)
  const calm = 1 - st.dark;
  cars.calm = st.dark;
  const shake = 0.016 * drive.fx * drive.fx * calm;
  if (shake > 0) {
    const t = now / 1000;
    camera.position.x += (Math.sin(t * 11.3) + Math.sin(t * 17.9) * 0.6) * shake;
    camera.position.y += (Math.sin(t * 13.7) + Math.sin(t * 23.1) * 0.5) * shake * 0.7;
  }

  // cinematic: camera hơi "thở" và nghiêng nhẹ như quay cầm tay
  const hand = cineAmt * calm;
  if (hand > 0.01) {
    const t = now / 1000;
    camera.position.x += Math.sin(t * 0.37) * 0.014 * hand;
    camera.position.y += Math.sin(t * 0.53) * 0.012 * hand;
    camera.rotateZ((Math.sin(t * 0.31) * 0.0045 + Math.sin(t * 0.83) * 0.002) * hand);
  }

  uiTimer -= dt;
  if (uiTimer <= 0) {
    $('speed').textContent = Math.round(drive.v * 3.6);
    $('clock').textContent = env.clock;
    if (el.lens.title !== lensLabel()) { refreshUI(); syncLens(); }
    updateRotate();                                // (một số máy không báo resize khi xoay)
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
  // gương chiếu hậu (chỉ khi ngồi trong xe)
  const inCabin = CAMERAS[state.cam].id === 'cockpit' && !stop.active;
  mirror.group.visible = inCabin;
  if (inCabin) mirror.render(scene, cars.tilt);
  wing.render(scene, camera, inCabin);
  // gạt mưa tự bật khi mưa / bão (cần gạt 3D quay, nhìn từ ngoài cũng thấy); trong xe thấy nước mưa trên kính
  wipers.update(dt, stop.active ? 0 : st.rain, drive.v);
  const glassAmt = inCabin ? wipers.wet : 0;
  if (cars.shield) cars.setWiper(wipers.angle(cars.shield.sweep));
  post.begin();
  renderer.render(scene, camera);
  rayParams();
  wipers.apply(post.final.uniforms, glassAmt > 0.01 ? glassAmt : 0, camera, cars.tilt, cars.shield, now / 1000, cars.rearShield);
  post.renderGlassMask(camera, cars.tilt, cars.rearShield);
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
  // cây / bụi / đá chi tiết: tải song song; xong thì dựng lại địa hình để cụm đá dùng model đá thật
  nature.load('assets/models/nature.glb').then(() => {
    if (nature.rockGeos.length) terrain.rockGeos = nature.rockGeos;
    terrain.reset();
    terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
    nature.setRadius(QUALITY[state.quality].trees);
    compileFor(post.sceneRT, camera, nature.group).catch(() => {});
  }).catch((e) => console.warn('Không tải được cây / đá chi tiết', e));
  chooseCar(0).then(() => person.load('assets/models/person.glb')).then(() => {
    cars.tilt.add(person.root);
    if (cars.current) { stop.place(cars.dim); stop.sit(); }
    compileFor(post.sceneRT, camera, person.root).catch(() => {});
    refreshUI();
  }).catch((e) => console.warn('Không tải được người lái', e));
  const go = (e) => {
    start.classList.add('gone');
    state.started = true;
    applyCine();
    openingElapsed = 0;
    audio.start().catch((e) => console.warn('Audio:', e));
    window.removeEventListener('keydown', go);
    start.removeEventListener('pointerdown', go);
  };
  start.addEventListener('pointerdown', go);
  window.addEventListener('keydown', go);
}
init();

// hook phục vụ debug / kiểm thử
window.__app = { ocean, waterfalls, wing, audio, smoke, cows, traffic, dash, town, fireflies, wipers, meadow, nature, person, stop, toggleStop: () => toggleStop(), refl, MIST, forceCine: (v) => { cineAmt = v; }, post, toggleFast, env, cars, rig, drive, state, nextCharacter, chooseCharacter, nextCar, nextMap, nextCam, nextWeather, nextTime, chooseCar, renderer, scene, camera, scenery, terrain, reeds, grass, road };
