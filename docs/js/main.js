import * as THREE from 'three';
import { ROAD, Road } from './road.js';
import { Scenery, Backdrop } from './scenery.js';
import { Environment } from './world.js';
import { Cars } from './cars.js';
import { CameraRig } from './camera.js';
import { ChillAudio } from './audio.js';
import { WEATHERS, TIMES, CAMERAS, MUSIC_MODES } from './config.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

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

const road = new Road();
const scenery = new Scenery(scene, road, renderer);
const backdrop = new Backdrop(scene, renderer);
const env = new Environment(renderer, scene, camera);
const cars = new Cars(scene);
const rig = new CameraRig(camera);
const audio = new ChillAudio();

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// ---------- trạng thái lái xe ----------
const drive = {
  s: 150,          // độ dài cung trên đường
  d: 0,            // lệch ngang so với tim đường (m, + = bên phải)
  v: 20,           // tốc độ (m/s)
  target: 22,      // tốc độ mong muốn (~80 km/h)
  latVel: 0,
  pos: new THREE.Vector3(),
  yaw: 0,
};
const keys = new Set();
const pointer = { active: false, x: 0, y: 0, sx: 0, sy: 0, steer: 0, speedDelta: 0 };

// ---------- giao diện ----------
const state = { car: 0, cam: 0, weather: 0, time: TIMES.findIndex((t) => t.id === 'sunset'), music: 0 };
const el = { car: $('b-car'), cam: $('b-cam'), weather: $('b-weather'), time: $('b-time'), music: $('b-music') };
const setBtn = (btn, icon, text) => { btn.querySelector('b').textContent = icon; btn.querySelector('span').textContent = text; btn.title = text; };

function refreshUI() {
  setBtn(el.car, '🚗', cars.list[state.car]?.name ?? '…');
  setBtn(el.cam, '🎥', CAMERAS[state.cam].name);
  setBtn(el.weather, WEATHERS[state.weather].icon, WEATHERS[state.weather].name);
  setBtn(el.time, TIMES[state.time].icon, TIMES[state.time].name);
  setBtn(el.music, MUSIC_MODES[state.music].icon, MUSIC_MODES[state.music].name);
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
const nextCam = () => { state.cam = (state.cam + 1) % CAMERAS.length; rig.setMode(state.cam); refreshUI(); };
const nextWeather = () => { state.weather = (state.weather + 1) % WEATHERS.length; env.setWeather(WEATHERS[state.weather].id); refreshUI(); };
const nextTime = () => {
  state.time = (state.time + 1) % TIMES.length;
  env.setTime(TIMES[state.time].hour);
  refreshUI();
};
const nextMusic = () => { state.music = (state.music + 1) % MUSIC_MODES.length; audio.setMode(state.music); refreshUI(); };

el.car.onclick = nextCar;
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
  if (avg > 34 && pixelRatio > 0.7) {
    pixelRatio = Math.max(0.7, pixelRatio - 0.25);
    renderer.setPixelRatio(pixelRatio);
    resize();
  }
}

// ---------- vòng lặp ----------
const _right = new THREE.Vector3();
let last = performance.now();
let uiTimer = 0;
const roadPt = {};

function frame(now) {
  const dt = clamp((now - last) / 1000, 0, 0.05);
  adaptQuality(now - last);
  last = now;

  // điều khiển
  const left = keys.has('ArrowLeft') || keys.has('KeyA');
  const right = keys.has('ArrowRight') || keys.has('KeyD');
  const steer = clamp((right ? 1 : 0) - (left ? 1 : 0) + pointer.steer, -1, 1);
  if (keys.has('ArrowUp') || keys.has('KeyW')) drive.target += 12 * dt;
  if (keys.has('ArrowDown') || keys.has('KeyS')) drive.target -= 18 * dt;
  drive.target = clamp(drive.target + pointer.speedDelta * 14 * dt, 0, 55);
  drive.v += clamp(drive.target - drive.v, -10 * dt, 5 * dt);
  drive.s += drive.v * dt;

  // lệch ngang: lái tay, hoặc tự về giữa làn khi buông tay
  const lane = drive.d >= 0 ? ROAD.halfWidth / 2 : -ROAD.halfWidth / 2;
  const wantLat = steer !== 0 ? steer * (3.4 + drive.v * 0.05) : (lane - drive.d) * 0.8;
  drive.latVel += (wantLat - drive.latVel) * (1 - Math.exp(-dt * 5));
  drive.d += drive.latVel * dt;
  const lim = ROAD.halfWidth - 0.9;
  if (Math.abs(drive.d) > lim) { drive.d = Math.sign(drive.d) * lim; drive.latVel = 0; }

  // tư thế xe
  road.at(drive.s, roadPt);
  drive.pos.set(roadPt.x + Math.cos(roadPt.th) * drive.d, 0, roadPt.z - Math.sin(roadPt.th) * drive.d);
  drive.yaw = roadPt.th - Math.atan2(drive.latVel, Math.max(drive.v, 4)) * 0.9;

  cars.update(dt, { pos: drive.pos, yaw: drive.yaw, speed: drive.v, latVel: drive.latVel });
  rig.update(dt, { pos: drive.pos, yaw: drive.yaw, speed: drive.v, dim: cars.dim });

  // môi trường
  env.update(dt, drive.pos);
  const st = env.state;
  scenery.update(drive.s);
  scenery.apply(st);
  backdrop.update(drive.pos);
  backdrop.apply(st);
  cars.setLights(st.lamps);
  audio.setAmbient({ speed: drive.v, rain: st.rain, snow: st.snow });

  uiTimer -= dt;
  if (uiTimer <= 0) {
    $('speed').textContent = Math.round(drive.v * 3.6);
    $('clock').textContent = env.clock;
    uiTimer = 0.25;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// ---------- khởi động ----------
async function init() {
  env.setTime(TIMES[state.time].hour);
  env.hour = TIMES[state.time].hour;
  scenery.prime(drive.s);
  await cars.probe();
  refreshUI();
  requestAnimationFrame(frame);
  await chooseCar(0);
  const start = $('start');
  $('hint').textContent = 'Chạm hoặc nhấn phím bất kỳ để bắt đầu';
  const go = () => {
    start.classList.add('gone');
    audio.start().catch((e) => console.warn('Audio:', e));
    window.removeEventListener('keydown', go);
    start.removeEventListener('pointerdown', go);
  };
  start.addEventListener('pointerdown', go);
  window.addEventListener('keydown', go);
}
init();

// hook phục vụ debug / kiểm thử
window.__app = { env, cars, rig, drive, state, nextCar, nextCam, nextWeather, nextTime, chooseCar, renderer, scene, camera, scenery, backdrop };
