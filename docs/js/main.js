import * as THREE from 'three';
import { ROAD, Road } from './road.js';
import { Scenery } from './scenery.js';
import { Terrain } from './terrain.js';
import { setTerrainMap } from './terrain-noise.js';
import { Environment } from './world.js';
import { Cars } from './cars.js';
import { CameraRig } from './camera.js';
import { ChillAudio } from './audio.js';
import { ReedField } from './reeds.js';
import { Post } from './post.js';
import { installMist, MIST } from './mist.js';
import { WetReflection } from './reflection.js';

installMist();   // thay shader sương của three.js (phải chạy trước khi vật liệu được biên dịch)
import { MAPS, WEATHERS, TIMES, CAMERAS, MUSIC_MODES } from './config.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// tốc độ (m/s). Chill: 10–40 km/h (mặc định 35). Fast drive: 150 km/h.
const KMH = 1 / 3.6;
const CHILL_DEFAULT = 35 * KMH, CHILL_MIN = 10 * KMH, CHILL_MAX = 40 * KMH, FAST_SPEED = 150 * KMH;

// ---------- renderer / scene ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
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
if (window.matchMedia?.('(pointer: coarse)').matches) reeds.setDensity(0.5);   // điện thoại: giảm mật độ cỏ cho nhẹ
const cars = new Cars(scene);
const rig = new CameraRig(camera);
rig.groundAt = (x, z) => terrain.heightAt(x, z);
const audio = new ChillAudio();
const post = new Post(renderer);
const refl = new WetReflection(renderer);

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
const pointer = { active: false, x: 0, y: 0, sx: 0, sy: 0, steer: 0, speedDelta: 0 };

// ---------- giao diện ----------
const state = { car: 0, map: 0, cam: 0, weather: 0, time: TIMES.findIndex((t) => t.id === 'golden'), music: 0, cine: true, started: false, mistCover: 0.35, mistDens: 0.2 };
const el = { mist: $('b-mist'), cine: $('b-cine'), fast: $('b-fast'), car: $('b-car'), map: $('b-map'), cam: $('b-cam'), weather: $('b-weather'), time: $('b-time'), music: $('b-music') };
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
}

async function chooseCar(i) {
  state.car = (i + cars.list.length) % cars.list.length;
  setBtn(el.car, '🚗', 'Đang tải…');
  try {
    await cars.select(state.car);
  } catch (e) {
    console.error('Không tải được xe', cars.list[state.car].name, e);
    if (cars.list.length > 1) { cars.list.splice(state.car, 1); return chooseCar(state.car); }
  }
  refreshUI();
}
const nextCar = () => chooseCar(state.car + 1);
const applyMap = () => {
  const id = MAPS[state.map].id;
  setTerrainMap(id);            // đổi tham số địa hình (đồi thấp / đồi núi)
  road.recomputeHeights();      // độ cao đường theo địa hình mới
  scenery.setMap(id);
  terrain.reset();
  terrain.setCar(drive.s);
  terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
  reeds.visible = id === 'reed';
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
const toggleFast = () => { drive.fast = !drive.fast; refreshUI(); };
const nextMusic = () => { state.music = (state.music + 1) % MUSIC_MODES.length; audio.setMode(state.music); refreshUI(); };

el.fast.onclick = toggleFast;
el.cine.onclick = toggleCine;
// bảng chỉnh sương mù: độ phủ + độ dày
const toggleMistPanel = () => { $('mistpanel').hidden = !$('mistpanel').hidden; refreshUI(); };
el.mist.onclick = toggleMistPanel;
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
  }
  if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

canvas.addEventListener('pointerdown', (e) => {
  pointer.active = true; pointer.sx = e.clientX; pointer.sy = e.clientY;
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (!pointer.active) return;
  pointer.steer = clamp((e.clientX - pointer.sx) / (window.innerWidth * 0.18), -1, 1);
  pointer.speedDelta = clamp(-(e.clientY - pointer.sy) / (window.innerHeight * 0.25), -1, 1);
});
const endPointer = () => { pointer.active = false; pointer.steer = 0; pointer.speedDelta = 0; };
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

// ẩn giao diện khi không thao tác
let idleTimer = 0;
const wake = () => {
  document.body.classList.remove('idle');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add('idle'), 4500);
};
['pointermove', 'pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, wake, { passive: true }));
wake();

// tự giảm độ phân giải nếu máy yếu (chỉ giảm, không tăng lại để tránh nhấp nháy)
const perf = { sum: 0, n: 0 };
function adaptQuality(frameMs) {
  if (frameMs > 250) return;                       // bỏ qua khi tab bị ẩn / khựng đột ngột
  perf.sum += frameMs; perf.n++;
  if (perf.n < 90) return;
  const avg = perf.sum / perf.n;
  perf.sum = 0; perf.n = 0;
  if (avg > 34 && state.cine) {
    state.cine = false;                            // máy yếu: tắt hậu kỳ cinematic trước
    applyCine(); refreshUI();
  } else if (avg > 34 && refl.enabled) {
    refl.enabled = false;                          // rồi tới phản chiếu vũng nước
  } else if (avg > 34 && pixelRatio > 0.7) {
    pixelRatio = Math.max(0.7, pixelRatio - 0.25);
    renderer.setPixelRatio(pixelRatio);
    resize();
    reeds.setDensity(Math.max(0.35, reeds.density * 0.75));
  }
}

// ---------- vòng lặp ----------
const _right = new THREE.Vector3();
let last = performance.now();
let uiTimer = 0;
let cineAmt = 0;
const roadPt = {};

function frame(now) {
  const dt = clamp((now - last) / 1000, 0, 0.05);
  adaptQuality(now - last);
  last = now;

  // điều khiển
  const left = keys.has('ArrowLeft') || keys.has('KeyA');
  const right = keys.has('ArrowRight') || keys.has('KeyD');
  const steer = clamp((right ? 1 : 0) - (left ? 1 : 0) + pointer.steer, -1, 1);
  if (keys.has('ArrowUp') || keys.has('KeyW')) drive.target += 2.5 * dt;
  if (keys.has('ArrowDown') || keys.has('KeyS')) drive.target -= 2.5 * dt;
  drive.target = clamp(drive.target + pointer.speedDelta * 2.5 * dt, CHILL_MIN, CHILL_MAX);
  const goal = drive.fast ? FAST_SPEED : drive.target;
  drive.v += clamp(goal - drive.v, -8 * dt, 6 * dt);
  drive.s += drive.v * dt;
  // hiệu ứng tốc độ tăng dần theo tốc độ thực tế (không có gì dưới ~55 km/h)
  drive.fx += (sstep(55 * KMH, FAST_SPEED, drive.v) - drive.fx) * (1 - Math.exp(-dt * 4));

  // lệch ngang: lái tay, hoặc tự về giữa làn khi buông tay
  const lane = drive.d >= 0 ? ROAD.halfWidth / 2 : -ROAD.halfWidth / 2;
  const wantLat = steer !== 0 ? steer * (2.2 + drive.v * 0.06) : (lane - drive.d) * 0.8;
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
  cars.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, latVel: drive.latVel });
  rig.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, dim: cars.dim, fx: drive.fx, side: drive.d >= 0 ? -1 : 1 });

  // môi trường
  env.update(dt, drive.pos);
  const st = env.state;
  scenery.update(drive.s);
  scenery.apply(st);
  if (reeds.visible) reeds.update(now / 1000, camera.position, road, drive.s, st);
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

  // đường ướt: vẽ ảnh phản chiếu cho vũng nước (chỉ khi mưa)
  if (st.wet > 0.05) refl.render(scene, camera, drive.pos.y + 0.05);
  else refl.active = false;
  scenery.setReflection(refl, now / 1000);

  renderer.render(scene, camera);
  // hậu kỳ (bloom/chỉnh màu/hạt phim + blur tốc độ); bỏ qua hẳn khi cả hai đều tắt
  if (cineAmt > 0.01 || drive.fx > 0.015) post.render(now / 1000, cineAmt, drive.fx);
  requestAnimationFrame(frame);
}

// ---------- khởi động ----------
async function init() {
  env.setTime(TIMES[state.time].hour);
  env.hour = TIMES[state.time].hour;
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
  chooseCar(0);
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
window.__app = { refl, MIST, forceCine: (v) => { cineAmt = v; }, post, toggleFast, toggleCine, env, cars, rig, drive, state, nextCar, nextMap, nextCam, nextWeather, nextTime, chooseCar, renderer, scene, camera, scenery, terrain, reeds, road };
