// Streamed terrain ("Land"): a large grid that snaps to the camera on a fixed
// world grid (vertices always land on the same global points, so no popping).
// Heights come from the deterministic map profile; the road corridor is carved.
import * as THREE from 'three/webgpu';
import {TERRAIN_MAPS, setTerrainMap, hLow, hDetail, vnoise, mountains} from './TerrainNoise.js';

// Per-profile palettes: [low, mid, high] grass/rock, snow line, rock colour,
// beach colour (near water), water level (world y) or null.
const PALETTE = {
  reed:     {low: '#c2b078', mid: '#9aa85e', high: '#6f7f45', snow: 999, rock: '#8f846a', beach: '#d8c79a', water: 2.4},
  forest:   {low: '#5f7f3c', mid: '#3f6a34', high: '#2c4c2a', snow: 250, rock: '#7c7566', beach: '#a99a6b', water: null},
  mountain: {low: '#5d6b3c', mid: '#7f7663', high: '#8b877b', snow: 210, rock: '#928c7e', beach: null, water: null},
  meadow:   {low: '#86ab52', mid: '#6a9846', high: '#5a8340', snow: 480, rock: '#8c8264', beach: null, water: null},
  sea:      {low: '#d3c295', mid: '#9aa35e', high: '#6f7f4a', snow: 520, rock: '#8a8578', beach: '#e0d0a2', water: 3.0},
};
const SNOW = '#eef3ff';
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createTerrainStreamer({scene, size = 1400, segments = 140, mapId = 'reed'} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const count = geo.attributes.position.count;
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  const mat = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, metalness: 0});
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.frustumCulled = false;
  mesh.userData.editor = {name: 'Land', category: 'landscape', builtin: true, terrain: true, stream: true};
  scene.add(mesh);

  const cell = size / segments, row = segments + 1;
  // Recentre the mesh every 4 cells: vertices stay on the same world grid (cell
  // multiples) so there is no popping, but rebuilds are ~4x less frequent.
  const snap = cell * 4;
  const carveEdge = 26;
  const carveY = new Float32Array(count), carveD = new Float32Array(count);
  let map = TERRAIN_MAPS[mapId] ? mapId : 'reed';
  let cx = Infinity, cz = Infinity, road = null, roadLen = 0, roadHalf = 4.6;
  const _low = new THREE.Color(), _mid = new THREE.Color(), _high = new THREE.Color(), _rock = new THREE.Color(), _beach = new THREE.Color(), _snow = new THREE.Color(SNOW), _col = new THREE.Color();
  const mountStart = 380, mountFull = 720;
  let pal = PALETTE.reed, waterLevel = null;

  function height(x, z) { return hLow(x, z) + hDetail(x, z); }
  function loadPalette() {
    pal = PALETTE[map] || PALETTE.reed; waterLevel = pal.water;
    _low.set(pal.low); _mid.set(pal.mid); _high.set(pal.high); _rock.set(pal.rock);
    if (pal.beach) _beach.set(pal.beach);
  }

  function rebuild(ox, oz) {
    setTerrainMap(map);
    const pos = geo.attributes.position, col = geo.attributes.color;
    for (let i = 0; i < count; i++) {
      const wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz, d = Math.abs(wx);
      let h = height(wx, wz);
      if (d > mountStart) h += mountains(wx, wz) * Math.min(1, (d - mountStart) / (mountFull - mountStart));
      pos.setY(i, h);
    }
    if (road) {
      carveY.fill(NaN); carveD.fill(Infinity);
      const inner = roadHalf + 3, edge = Math.max(carveEdge, roadHalf + 16), radius = Math.ceil(edge / cell);
      for (let s = 0; s <= roadLen; s += cell) {
        const p = road.at(s);
        const gx = Math.round((p.x - ox) / cell + segments / 2), gz = Math.round((p.z - oz) / cell + segments / 2);
        for (let j = gz - radius; j <= gz + radius; j++) {
          if (j < 0 || j > segments) continue;
          for (let i = gx - radius; i <= gx + radius; i++) {
            if (i < 0 || i > segments) continue;
            const idx = j * row + i, wx = pos.getX(idx) + ox, wz = pos.getZ(idx) + oz;
            const dd = Math.hypot(wx - p.x, wz - p.z);
            if (dd < carveD[idx]) { carveD[idx] = dd; carveY[idx] = p.y - 0.10; }
          }
        }
      }
      for (let i = 0; i < count; i++) { if (carveD[i] < edge) { const f = 1 - smooth(inner, edge, carveD[i]); pos.setY(i, pos.getY(i) * (1 - f) + carveY[i] * f); } }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal;
    for (let i = 0; i < count; i++) {
      const h = pos.getY(i), wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz;
      // colour by height bands + slope rock (from vertex normals) + snow + beach
      let c = _col.copy(_low).lerp(_mid, smooth(-14, 20, h)).lerp(_high, smooth(28, 90, h));
      const ny = Math.max(.2, nrm.getY(i));
      const slope = Math.min(3, Math.hypot(nrm.getX(i), nrm.getZ(i)) / ny);
      if (slope > 0.55) c.lerp(_rock, smooth(0.55, 1.5, slope) * 0.85);
      if (h > pal.snow - 15) c.lerp(_snow, smooth(pal.snow - 15, pal.snow + 35, h));
      if (pal.beach && waterLevel != null && h < waterLevel + 6) c.lerp(_beach, smooth(waterLevel + 6, waterLevel, h));
      if (waterLevel != null && h < waterLevel) c.lerp(_rock, smooth(waterLevel, waterLevel - 6, h) * 0.4).multiplyScalar(0.92);
      const n = (vnoise(wx * 0.05 + 3.1, wz * 0.05 + 1.7) - 0.5) * 0.08;
      c = c.offsetHSL(0, 0, n);
      col.setXYZ(i, c.r, c.g, c.b);
    }
    col.needsUpdate = true; geo.computeBoundingSphere();
  }

  function update(cam) {
    const nx = Math.round(cam.position.x / snap) * snap, nz = Math.round(cam.position.z / snap) * snap;
    if (nx !== cx || nz !== cz) { cx = nx; cz = nz; mesh.position.set(nx, 0, nz); rebuild(nx, nz); }
  }
  function setMap(id) { if (!TERRAIN_MAPS[id]) return; map = id; loadPalette(); cx = cz = Infinity; }
  function setRoad(p, len, half) { road = p; roadLen = len || 0; roadHalf = half || 4.6; cx = cz = Infinity; if (p) p.at(roadLen); }
  function dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); }
  function heightAt(x, z) {
    let h = height(x, z);
    const d = Math.abs(x);
    if (d > mountStart) h += mountains(x, z) * Math.min(1, (d - mountStart) / (mountFull - mountStart));
    return h;
  }

  loadPalette();
  setTerrainMap(map);
  return {mesh, update, setMap, setRoad, dispose, heightAt, get map() { return map; }};
}
