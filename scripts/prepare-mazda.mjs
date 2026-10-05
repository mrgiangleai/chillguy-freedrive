// Rebuild from the untouched upload. Install tools inside the project first:
// npm install --prefix .scratch/mazda-tools --cache .scratch/npm-cache --no-audit --no-fund @gltf-transform/core@4 @gltf-transform/extensions@4 @gltf-transform/functions@4 meshoptimizer
import fs from 'node:fs';
import { NodeIO } from '../.scratch/mazda-tools/node_modules/@gltf-transform/core/dist/index.js';
import { ALL_EXTENSIONS } from '../.scratch/mazda-tools/node_modules/@gltf-transform/extensions/dist/index.js';
import { dequantize, weld, simplify, meshopt } from '../.scratch/mazda-tools/node_modules/@gltf-transform/functions/dist/index.js';
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from '../.scratch/mazda-tools/node_modules/meshoptimizer/index.js';
await Promise.all([MeshoptDecoder.ready, MeshoptEncoder.ready, MeshoptSimplifier.ready]);
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const source = 'docs/assets/models/mazda_rx_vision(SPORT)-compressed.glb';
const output = 'docs/assets/models/mazda-rx-vision.glb';
const document = await io.read(source);
// Preserve the steering assembly, but name its meshes so the existing pivot/hand IK can find them.
const steer = document.getRoot().listNodes().find(n => /^STEER_HR_/.test(n.getName()));
let steeringMeshes = 0;
steer.traverse(n => { if (n.getMesh()) n.setName('MazdaSteering_' + steeringMeshes++); });
// Brake metal is not a brake light. Use the game's rear-light intensity control for the actual red lenses.
for (const material of document.getRoot().listMaterials()) {
  if (material.getName() === 'rear_brake') material.setName('CaliperMetal');
  if (material.getName() === 'R_light_glass_AO') material.setName('RearLight');
  if (material.getName() === 'rearbump_sur_nm') material.setName('RearReflector').setEmissiveFactor([0, 0, 0]);
  if (material.getName() === 'headlight_glass') material.setAlphaMode('BLEND').setBaseColorFactor([1, 1, 1, .28]).setMetallicFactor(0);
  if (material.getName() === 'glass_int') material.setBaseColorFactor([.45, .55, .6, .32]).setMetallicFactor(0).setRoughnessFactor(.12);
}
const triangles = () => document.getRoot().listMeshes().reduce((sum, mesh) => sum + mesh.listPrimitives().reduce((s, p) => s + p.getIndices().getCount() / 3, 0), 0);
const before = triangles();
await document.transform(dequantize(), weld(), simplify({ simplifier: MeshoptSimplifier, ratio: .18, error: .001, lockBorder: true }), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
await io.write(output, document);
console.log(`${before} -> ${triangles()} triangles; ${steeringMeshes} steering meshes; ${(fs.statSync(output).size / 1e6).toFixed(2)} MB. Source unchanged.`);
