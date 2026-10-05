// Keep the uploaded model's complete geometry and texture bytes. No simplification/recompression.
import fs from 'node:fs';
import * as THREE from 'three';
const source = 'docs/assets/models/mazda_rx_vision(SPORT)-compressed.glb';
const output = 'docs/assets/models/mazda-rx-vision.glb';
const b = fs.readFileSync(source), length = b.readUInt32LE(12);
const d = JSON.parse(b.subarray(20, 20 + length));
const paint = JSON.parse(fs.readFileSync('src/mazda-paint.json', 'utf8'));
const steer = d.nodes.find(n => /^STEER_HR_/.test(n.name));
let steeringMeshes = 0;
function rename(node) {
  if (node.mesh !== undefined) node.name = 'MazdaSteering_' + steeringMeshes++;
  for (const child of node.children || []) rename(d.nodes[child]);
}
rename(steer);
for (const m of d.materials) {
  if (m.name === 'body') {
    const color = new THREE.Color(paint.color);
    m.pbrMetallicRoughness = { ...m.pbrMetallicRoughness, baseColorFactor: [...color.toArray(), 1],
      metallicFactor: paint.metalness, roughnessFactor: paint.roughness };
    m.extensions = { ...m.extensions,
      KHR_materials_clearcoat: { clearcoatFactor: paint.clearcoat, clearcoatRoughnessFactor: paint.clearcoatRoughness },
      KHR_materials_specular: { specularFactor: paint.specularIntensity, specularColorFactor: new THREE.Color(paint.specularColor).toArray() } };
  }
  if (m.name === 'rear_brake') m.name = 'CaliperMetal';
  if (m.name === 'R_light_glass_AO') m.name = 'RearLight';
  if (m.name === 'rearbump_sur_nm') { m.name = 'RearReflector'; m.emissiveFactor = [0, 0, 0]; }
  if (m.name === 'headlight_glass') { m.alphaMode = 'BLEND'; Object.assign(m.pbrMetallicRoughness, { baseColorFactor: [1, 1, 1, .28], metallicFactor: 0 }); }
  if (m.name === 'glass_int') Object.assign(m.pbrMetallicRoughness, { baseColorFactor: [.45, .55, .6, .32], metallicFactor: 0, roughnessFactor: .12 });
}
const json = Buffer.from(JSON.stringify(d)), padded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32); json.copy(padded);
const out = Buffer.alloc(20 + padded.length + b.length - 20 - length);
b.copy(out, 0, 0, 12); out.writeUInt32LE(out.length, 8); out.writeUInt32LE(padded.length, 12); out.writeUInt32LE(0x4e4f534a, 16);
padded.copy(out, 20); b.copy(out, 20 + padded.length, 20 + length);
fs.writeFileSync(output, out);
const triangles = d.meshes.reduce((sum, m) => sum + m.primitives.reduce((n, p) => n + d.accessors[p.indices].count / 3, 0), 0);
console.log(`${triangles} triangles preserved; ${steeringMeshes} steering meshes; ${(out.length / 1e6).toFixed(2)} MB; geometry/texture binary unchanged.`);
