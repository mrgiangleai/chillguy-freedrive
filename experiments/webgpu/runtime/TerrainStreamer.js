// Streamed terrain: a large grid that snaps to the camera on a fixed world grid
// (vertices always land on the same global points, so there is no popping).
// Heights come from the deterministic map profile; if a road is provided the
// corridor is carved to the road's own height so the two surfaces meet.
import * as THREE from 'three/webgpu';
import {TERRAIN_MAPS, setTerrainMap, hLow, hDetail, mountains} from './TerrainNoise.js';

const PALETTE = {
  reed: ['#ad9b5c', '#c5b37b', '#8c8a50', 240],
  forest: ['#7fa443', '#a9b85a', '#5c8036', 215],
  mountain: ['#789a45', '#9eaa5a', '#557236', 300],
  meadow: ['#6f9a4c', '#86ad5c', '#5c8541', 400],
  sea: ['#cbb98c', '#bba97c', '#7f8f55', 600],
};

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createTerrainStreamer({scene, size = 2400, segments = 240, mapId = 'reed'} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const count = geo.attributes.position.count;
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  const mat = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, metalness: 0});
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.frustumCulled = false;
  mesh.userData.editor = {name: 'Land', category: 'landscape', builtin: true, terrain: true, stream: true};
  scene.add(mesh);

  const snap = size / segments, row = segments + 1;
  const carveEdge = 26;
  const carveY = new Float32Array(count), carveD = new Float32Array(count);
  let map = TERRAIN_MAPS[mapId] ? mapId : 'reed';
  let cx = Infinity, cz = Infinity, road = null, roadLen = 0, roadHalf = 4.6;
  const _a = new THREE.Color(), _b = new THREE.Color(), _c = new THREE.Color(), _snow = new THREE.Color('#eef3ff'), _col = new THREE.Color();
  const mountStart = 380, mountFull = 720;

  function loadPalette() { const p = PALETTE[map]; _a.set(p[0]); _b.set(p[1]); _c.set(p[2]); }

  function rebuild(ox, oz) {
    setTerrainMap(map);
    const pos = geo.attributes.position, col = geo.attributes.color, snowLine = PALETTE[map][3];
    for (let i = 0; i < count; i++) {
      const wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz, d = Math.abs(wx);
      let h = hLow(wx, wz) + hDetail(wx, wz);
      if (d > mountStart) h += mountains(wx, wz) * Math.min(1, (d - mountStart) / (mountFull - mountStart));
      pos.setY(i, h);
    }
    if (road) {
      carveY.fill(NaN); carveD.fill(Infinity);
      const inner = roadHalf + 2, radius = Math.ceil(carveEdge / snap);
      for (let s = 0; s <= roadLen; s += snap) {
        const p = road.at(s);
        const gx = Math.round((p.x - ox) / snap + segments / 2), gz = Math.round((p.z - oz) / snap + segments / 2);
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
      for (let i = 0; i < count; i++) { if (carveD[i] < carveEdge) { const f = 1 - smooth(inner, carveEdge, carveD[i]); pos.setY(i, pos.getY(i) * (1 - f) + carveY[i] * f); } }
    }
    pos.needsUpdate = true;
    for (let i = 0; i < count; i++) {
      const h = pos.getY(i);
      const t = Math.max(0, Math.min(1, (h + 20) / (snowLine + 20)));
      _col.copy(_a).lerp(_b, Math.max(0, Math.min(1, (h + 8) / 34))).lerp(_c, t);
      if (h > snowLine) _col.lerp(_snow, Math.min(1, (h - snowLine) / 45));
      col.setXYZ(i, _col.r, _col.g, _col.b);
    }
    col.needsUpdate = true; geo.computeVertexNormals(); geo.computeBoundingSphere();
  }

  function update(cam) {
    const nx = Math.round(cam.position.x / snap) * snap, nz = Math.round(cam.position.z / snap) * snap;
    if (nx !== cx || nz !== cz) { cx = nx; cz = nz; mesh.position.set(nx, 0, nz); rebuild(nx, nz); }
  }
  function setMap(id) { if (!TERRAIN_MAPS[id]) return; map = id; loadPalette(); setTerrainMap(map); cx = cz = Infinity; }
  function setRoad(p, len, half) { road = p; roadLen = len || 0; roadHalf = half || 4.6; cx = cz = Infinity; if (p) p.at(roadLen); }
  function dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); }
  function heightAt(x, z) { return hLow(x, z) + hDetail(x, z); }

  loadPalette();
  setTerrainMap(map);
  return {mesh, update, setMap, setRoad, dispose, heightAt, get map() { return map; }};
}
