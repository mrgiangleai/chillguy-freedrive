// "Land": a camera-following ground mesh (effectively infinite) with GENTLE
// profile hills — no surrounding mountains. Profiles give colour + small relief.
import * as THREE from 'three/webgpu';
import {TERRAIN_MAPS, setTerrainMap, hLow, hDetail, vnoise} from './TerrainNoise.js';

const PALETTE = {
  reed:     {low: '#8a9a52', mid: '#9aa85e', high: '#b6c07a', rock: '#8f846a'},
  forest:   {low: '#33552b', mid: '#3f6a34', high: '#5c8541', rock: '#7c7566'},
  mountain: {low: '#6f6a58', mid: '#8b877b', high: '#a7a294', rock: '#928c7e'},
  meadow:   {low: '#5c8541', mid: '#6a9846', high: '#86ab52', rock: '#8c8264'},
  sea:      {low: '#5f8f7d', mid: '#6f9f8a', high: '#8fb8a4', rock: '#8a8578'},
};
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createTerrainStreamer({scene, size = 4000, segments = 160, mapId = 'reed'} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const count = geo.attributes.position.count;
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  const mat = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, metalness: 0});
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.frustumCulled = false;
  mesh.userData.editor = {name: 'Land', category: 'landscape', builtin: true, terrain: true, stream: true};
  scene.add(mesh);

  const cell = size / segments, snap = cell * 4;
  let map = TERRAIN_MAPS[mapId] ? mapId : 'reed', cx = Infinity, cz = Infinity;
  const _low = new THREE.Color(), _mid = new THREE.Color(), _high = new THREE.Color(), _rock = new THREE.Color(), _col = new THREE.Color();
  let pal = PALETTE.reed;

  function loadPalette() { pal = PALETTE[map] || PALETTE.reed; _low.set(pal.low); _mid.set(pal.mid); _high.set(pal.high); _rock.set(pal.rock); }
  // Gentle relief: keep the low-frequency shape, damp it a lot (no mountains).
  function height(x, z) { return hLow(x, z) * 0.35 + hDetail(x, z) * 0.25; }

  function rebuild(ox, oz) {
    setTerrainMap(map);
    const pos = geo.attributes.position, col = geo.attributes.color;
    for (let i = 0; i < count; i++) { const wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz; pos.setY(i, height(wx, wz)); }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal;
    for (let i = 0; i < count; i++) {
      const h = pos.getY(i), wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz;
      let c = _col.copy(_low).lerp(_mid, smooth(-14, 20, h)).lerp(_high, smooth(30, 140, h));
      const ny = Math.max(.2, nrm.getY(i)), slope = Math.min(3, Math.hypot(nrm.getX(i), nrm.getZ(i)) / ny);
      if (slope > 0.5) c.lerp(_rock, smooth(0.5, 1.4, slope) * 0.7);
      const n = (vnoise(wx * 0.05 + 3.1, wz * 0.05 + 1.7) - 0.5) * 0.06;
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
  function setRoad() {}
  function dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); }
  function heightAt(x, z) { return height(x, z); }

  loadPalette();
  setTerrainMap(map);
  return {mesh, update, setMap, setRoad, dispose, heightAt, get map() { return map; }};
}
