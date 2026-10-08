// Streamed terrain: one large grid that snaps to the camera on a fixed world grid
// (vertices always land on the same global points, so there is no popping) and
// rebuilds heights from the deterministic map profile. Road corridor is carved flat.
import * as THREE from 'three/webgpu';
import {TERRAIN_MAPS, setTerrainMap, hLow, hDetail, mountains} from './TerrainNoise.js';

// [low colour, mid colour, high colour, snow line]
const PALETTE = {
  reed: ['#ad9b5c', '#c5b37b', '#8c8a50', 240],
  forest: ['#7fa443', '#a9b85a', '#5c8036', 215],
  mountain: ['#789a45', '#9eaa5a', '#557236', 300],
  meadow: ['#6f9a4c', '#86ad5c', '#5c8541', 400],
  sea: ['#cbb98c', '#bba97c', '#7f8f55', 600],
};

export function createTerrainStreamer({scene, size = 2400, segments = 240, mapId = 'reed'} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const count = geo.attributes.position.count;
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  const mat = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, metalness: 0});
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.frustumCulled = false; mesh.userData.editor = {name: 'Streaming Terrain', category: 'landscape', builtin: true, terrain: true, stream: true};
  scene.add(mesh);

  const snap = size / segments;
  let map = TERRAIN_MAPS[mapId] ? mapId : 'reed';
  let cx = Infinity, cz = Infinity;
  const _a = new THREE.Color(), _b = new THREE.Color(), _c = new THREE.Color(), _snow = new THREE.Color('#eef3ff'), _col = new THREE.Color();
  const carveHalf = 6, carveEdge = 24, mountStart = 380, mountFull = 720;

  function loadPalette() { const p = PALETTE[map]; _a.set(p[0]); _b.set(p[1]); _c.set(p[2]); }

  function rebuild(ox, oz) {
    setTerrainMap(map);
    const pos = geo.attributes.position, col = geo.attributes.color, snowLine = PALETTE[map][3];
    for (let i = 0; i < count; i++) {
      const wx = pos.getX(i) + ox, wz = pos.getZ(i) + oz;
      const d = Math.abs(wx);
      const carve = Math.max(0, Math.min(1, (d - carveHalf) / (carveEdge - carveHalf)));
      let h = (hLow(wx, wz) + hDetail(wx, wz)) * carve;
      if (d > mountStart) h += mountains(wx, wz) * Math.min(1, (d - mountStart) / (mountFull - mountStart));
      pos.setY(i, h);
      const t = Math.max(0, Math.min(1, (h + 20) / (snowLine + 20)));
      _col.copy(_a).lerp(_b, Math.max(0, Math.min(1, (h + 8) / 34))).lerp(_c, t);
      if (h > snowLine) _col.lerp(_snow, Math.min(1, (h - snowLine) / 45));
      col.setXYZ(i, _col.r, _col.g, _col.b);
    }
    pos.needsUpdate = true; col.needsUpdate = true; geo.computeVertexNormals(); geo.computeBoundingSphere();
  }

  function update(cam) {
    const nx = Math.round(cam.position.x / snap) * snap, nz = Math.round(cam.position.z / snap) * snap;
    if (nx !== cx || nz !== cz) { cx = nx; cz = nz; mesh.position.set(nx, 0, nz); rebuild(nx, nz); }
  }
  function setMap(id) { if (!TERRAIN_MAPS[id]) return; map = id; loadPalette(); cx = cz = Infinity; }
  function dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); }
  function heightAt(x, z) { return hLow(x, z) + hDetail(x, z); }

  loadPalette();
  return {mesh, update, setMap, dispose, heightAt, get map() { return map; }};
}
