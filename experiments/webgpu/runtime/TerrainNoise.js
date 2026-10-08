// Deterministic terrain height functions — ported from the main game (src/terrain-noise.js).
// Integer hash noise is identical in JS and (original) GLSL. Only CPU here.
export const TERRAIN_MAPS = {
  reed: {low: 9, det: 2.2, fine: 0.4, mount: 330},
  forest: {low: 24, det: 6.5, fine: 1.1, mount: 440},
  mountain: {low: 34, det: 5.5, fine: 1.2, mount: 520, side: true},
  meadow: {low: 22, det: 3.2, fine: 0.5, mount: 380},
  sea: {low: 7, det: 2.5, fine: 0.4, mount: 260, sea: true},
};
export const TP = {id: 'reed', ...TERRAIN_MAPS.reed};

export function setTerrainMap(id) {
  Object.assign(TP, {side: false, sea: false}, TERRAIN_MAPS[id] || TERRAIN_MAPS.reed, {id: TERRAIN_MAPS[id] ? id : 'reed'});
}

export function hash2(ix, iz) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

export function vnoise(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  let fx = x - ix, fz = z - iz;
  fx = fx * fx * (3 - 2 * fx); fz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
}

export function hLow(x, z) {
  return TP.low * ((vnoise(x / 1000 + 11.3, z / 1000 + 7.1) - 0.5) * 1.34 + (vnoise(x / 500 + 3.7, z / 500 + 1.9) - 0.5) * 0.66);
}

export function hDetail(x, z) {
  return TP.det * (vnoise(x / 165 + 5.5, z / 165 + 2.2) - 0.5) * 2 + TP.fine * (vnoise(x / 40 + 9.1, z / 40 + 4.4) - 0.5) * 2;
}

export function mountains(x, z) {
  let v = 0, amp = 0.62, f = 1 / 1500;
  for (let o = 0; o < 4; o++) {
    const n = vnoise(x * f + 31.7 * o, z * f + 17.3 * o);
    const r = 1 - Math.abs(n * 2 - 1);
    v += amp * r * r; amp *= 0.45; f *= 2.1;
  }
  return TP.mount * v;
}
