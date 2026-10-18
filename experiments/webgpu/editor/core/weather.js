// Weather presets + precipitation particles for the editor.
// Preset numbers shared with the main game (shared/weather.js) so the moods match.
// Rain uses LineSegments; snow uses several Points layers with different sizes
// (classic materials the WebGPU renderer maps to node materials automatically).
import * as THREE from 'three/webgpu';
import {weatherPresets} from '../../../../shared/weather.js';

// Base numbers come from the shared table (shared/weather.js, same as the game); the editor keeps
// its own fog densities (FogExp2), a slightly brighter storm sun and fogBright.
const KEYS = ['fog', 'overcast', 'sun', 'rain', 'snow', 'wind', 'dark', 'cover', 'tint'];
export const WEATHER = weatherPresets(KEYS, {
  clear:  {fog:0,      fogBright:0.35},
  cloudy: {fog:0.0012, fogBright:0.35},
  windy:  {fog:0.0009, fogBright:0.35},
  rain:   {fog:0.0022, fogBright:0.4},
  storm:  {fog:0.0032, fogBright:0.5, sun:0.05},
  snow:   {fog:0.0026, fogBright:0.45},
  fog:    {fog:0.030,  fogBright:0.6},
});
export const WEATHER_IDS = Object.keys(WEATHER);

const BOX = {x:70, y:42, z:70};
const wrap = (v, size) => ((v % size) + size) % size;

export function createWeatherSystem({scene, camera}) {
  // --- rain: short wind-tilted segments that follow the camera ---
  const RN = 3000;
  const rainPos = new Float32Array(RN * 6);
  const rainSeed = new Float32Array(RN * 3);
  for (let i = 0; i < RN; i++) { rainSeed[i * 3] = Math.random(); rainSeed[i * 3 + 1] = Math.random(); rainSeed[i * 3 + 2] = Math.random(); }
  const rainAttr = new THREE.BufferAttribute(rainPos, 3); rainAttr.setUsage(THREE.DynamicDrawUsage);
  const rainGeo = new THREE.BufferGeometry(); rainGeo.setAttribute('position', rainAttr);
  const rainMat = new THREE.LineBasicMaterial({color: 0xb9c6d6, transparent: true, opacity: 0, depthWrite: false});
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false; rain.renderOrder = 10; rain.visible = false; scene.add(rain);

  // --- snow: several layers, each a different flake size ---
  const SNOW_SIZES = [0.45, 0.8, 1.3, 2.0];
  const SNOW_PER = 700;
  const snows = SNOW_SIZES.map((base) => {
    const n = SNOW_PER;
    const pos = new Float32Array(n * 3), seed = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { seed[i * 3] = Math.random(); seed[i * 3 + 1] = Math.random(); seed[i * 3 + 2] = Math.random(); }
    const attr = new THREE.BufferAttribute(pos, 3); attr.setUsage(THREE.DynamicDrawUsage);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', attr);
    const mat = new THREE.PointsMaterial({color: 0xffffff, size: base, sizeAttenuation: true, transparent: true, opacity: 0, depthWrite: false});
    const mesh = new THREE.Points(geo, mat);
    mesh.frustumCulled = false; mesh.renderOrder = 10; mesh.visible = false; scene.add(mesh);
    return {mesh, attr, geo, seed, n, base};
  });

  let t = 0, rainAmt = 0, snowAmt = 0, wind = 0.3;
  const windDir = new THREE.Vector2(1, 0.45).normalize();

  /** Copy the active preset (or slider values) into the particle system. */
  function apply(p) {
    rainAmt = p.rain || 0; snowAmt = p.snow || 0; wind = p.wind || 0;
    // rain: density 0..1 controls drop count; opacity saturates
    rainMat.opacity = 0.6 * Math.min(1, rainAmt);
    rain.visible = rainAmt > 0.02;
    rainGeo.setDrawRange(0, 2 * Math.round(RN * Math.min(1, rainAmt)));
    // snow: 0..1 density, above 1 grows flake size (up to 5x range)
    const sf = Math.min(1, snowAmt);
    const sizeBoost = 1 + 0.35 * Math.max(0, Math.min(4, snowAmt - 1));
    for (const g of snows) {
      g.mesh.visible = snowAmt > 0.02;
      g.mesh.material.opacity = 0.92 * sf;
      g.mesh.material.size = g.base * sizeBoost;
      g.geo.setDrawRange(0, Math.round(g.n * sf));
    }
  }

  function update(dt) {
    if (!rain.visible && !snows[0].mesh.visible) return;
    t += dt;
    const cx = camera.position.x, cy = camera.position.y, cz = camera.position.z;
    const wx = windDir.x * (1.5 + wind * 12), wz = windDir.y * (1.5 + wind * 12);
    if (rain.visible) {
      const fall = 30, len = 1.3, nrm = Math.hypot(wx, fall, wz);
      const count = Math.round(RN * Math.min(1, rainAmt));
      for (let i = 0; i < count; i++) {
        const sx = rainSeed[i * 3], sy = rainSeed[i * 3 + 1], sz = rainSeed[i * 3 + 2];
        const x = wrap(sx * BOX.x + wx * t - cx, BOX.x) + cx - BOX.x / 2;
        const y = wrap(sy * BOX.y - fall * t * (0.75 + sy * 0.5) - cy, BOX.y) + cy - BOX.y / 2;
        const z = wrap(sz * BOX.z + wz * t - cz, BOX.z) + cz - BOX.z / 2;
        const o = i * 6;
        rainPos[o] = x; rainPos[o + 1] = y; rainPos[o + 2] = z;
        rainPos[o + 3] = x - wx / nrm * len; rainPos[o + 4] = y + fall / nrm * len; rainPos[o + 5] = z - wz / nrm * len;
      }
      rainAttr.needsUpdate = true;
    }
    if (snows[0].mesh.visible) {
      const fall = 1.7;
      for (const g of snows) {
        const arr = g.attr.array, seed = g.seed, count = Math.round(g.n * Math.min(1, snowAmt));
        for (let i = 0; i < count; i++) {
          const sx = seed[i * 3], sy = seed[i * 3 + 1], sz = seed[i * 3 + 2];
          const x = wrap(sx * BOX.x + wx * t * 0.35 + Math.sin(t * 0.7 + sx * 40) * 1.6 - cx, BOX.x) + cx - BOX.x / 2;
          const y = wrap(sy * BOX.y - fall * t * (0.7 + sy) - cy, BOX.y) + cy - BOX.y / 2;
          const z = wrap(sz * BOX.z + wz * t * 0.35 + Math.cos(t * 0.6 + sz * 35) * 1.6 - cz, BOX.z) + cz - BOX.z / 2;
          const o = i * 3; arr[o] = x; arr[o + 1] = y; arr[o + 2] = z;
        }
        g.attr.needsUpdate = true;
      }
    }
  }

  return {apply, update};
}
