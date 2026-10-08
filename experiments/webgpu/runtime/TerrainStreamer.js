// "Land": a single, very large flat ground plane (effectively infinite).
// Profiles now only change the colour — no mountains, no height noise, no
// streaming/rebuild cost (2 triangles, static).
import * as THREE from 'three/webgpu';
import {TERRAIN_MAPS, setTerrainMap} from './TerrainNoise.js';

const PALETTE = {
  reed:     {mid: '#9aa85e'},
  forest:   {mid: '#3f6a34'},
  mountain: {mid: '#8b877b'},
  meadow:   {mid: '#6a9846'},
  sea:      {mid: '#6f9f8a'},
};

export function createTerrainStreamer({scene, size = 20000, mapId = 'reed'} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({color: 0x9aa85e, roughness: 1, metalness: 0});
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.frustumCulled = false;
  mesh.userData.editor = {name: 'Land', category: 'landscape', builtin: true, terrain: true, stream: true};
  scene.add(mesh);

  let map = TERRAIN_MAPS[mapId] ? mapId : 'reed';
  function loadPalette() { const pal = PALETTE[map] || PALETTE.reed; mat.color.set(pal.mid); mat.needsUpdate = true; }

  const update = () => {};
  function setMap(id) { if (!TERRAIN_MAPS[id]) return; map = id; loadPalette(); }
  function setRoad() {}
  function dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); }
  function heightAt() { return 0; }

  loadPalette();
  setTerrainMap(map);
  return {mesh, update, setMap, setRoad, dispose, heightAt, get map() { return map; }};
}
