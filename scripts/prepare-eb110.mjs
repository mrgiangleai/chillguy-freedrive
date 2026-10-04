// Prepare the uploaded model without altering its source: remove display props,
// separate the four wheels, then repack only the buffers used by the car.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const source = 'docs/assets/models/bugatti_eb110_(lowpoly).glb';
const output = 'docs/assets/models/bugatti-eb110.glb';
const input = fs.readFileSync(source), jl = input.readUInt32LE(12);
const gltf = JSON.parse(input.subarray(20, 20 + jl));
const binary = input.subarray(28 + jl), chunks = [];
let bytes = 0;
function append(data) {
  const padding = (4 - bytes % 4) % 4;
  if (padding) { chunks.push(Buffer.alloc(padding)); bytes += padding; }
  const view = gltf.bufferViews.length;
  gltf.bufferViews.push({ buffer: 0, byteOffset: bytes, byteLength: data.length });
  chunks.push(data); bytes += data.length;
  return view;
}
const oldViews = gltf.bufferViews;
const oldAccessors = gltf.accessors;
gltf.bufferViews = []; gltf.accessors = [];
const width = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
const componentBytes = { 5121: 1, 5123: 2, 5125: 4, 5126: 4 };
function rows(index, selection) {
  const a = oldAccessors[index], v = oldViews[a.bufferView];
  const row = width[a.type] * componentBytes[a.componentType];
  const count = selection?.length ?? a.count, packed = Buffer.alloc(count * row);
  const start = (v.byteOffset || 0) + (a.byteOffset || 0), stride = v.byteStride || row;
  for (let i = 0; i < count; i++) binary.copy(packed, i * row, start + (selection?.[i] ?? i) * stride, start + (selection?.[i] ?? i) * stride + row);
  return packed;
}
function accessor(index, selection) {
  const a = oldAccessors[index], packed = rows(index, selection);
  const copy = { ...a, bufferView: append(packed), byteOffset: 0, count: selection?.length ?? a.count };
  if (a.type === 'VEC3' && a.componentType === 5126) {
    copy.min = [Infinity, Infinity, Infinity]; copy.max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < copy.count; i++) for (let c = 0; c < 3; c++) {
      const v = packed.readFloatLE(i * 12 + c * 4);
      copy.min[c] = Math.min(copy.min[c], v); copy.max[c] = Math.max(copy.max[c], v);
    }
  }
  const id = gltf.accessors.length; gltf.accessors.push(copy); return id;
}
const wheelParts = new Set([18, 48, 49, 50, 55, 56, 58]);
const props = new Set([1, 2, 21, 28, 45]);
const oldMeshes = gltf.meshes, oldNodes = gltf.nodes;
gltf.meshes = []; gltf.nodes = oldNodes.slice(0, 2).map(n => ({ ...n }));
gltf.nodes[1].children = [];
const wheels = Array.from({ length: 4 }, () => []);
let wheelTriangles = 0, splitTriangles = 0;
for (let mi = 0; mi < oldMeshes.length; mi++) {
  if (props.has(mi)) continue;
  const mesh = oldMeshes[mi];
  if (!wheelParts.has(mi)) {
    const primitives = mesh.primitives.map(p => ({ ...p, indices: accessor(p.indices), attributes: Object.fromEntries(Object.entries(p.attributes).map(([k, v]) => [k, accessor(v)])) }));
    const node = { ...oldNodes.find(n => n.mesh === mi), mesh: gltf.meshes.length };
    gltf.meshes.push({ ...mesh, primitives });
    gltf.nodes[1].children.push(gltf.nodes.length); gltf.nodes.push(node);
    continue;
  }
  for (const p of mesh.primitives) {
    const pos = rows(p.attributes.POSITION), indices = rows(p.indices), a = oldAccessors[p.indices];
    const read = i => a.componentType === 5123 ? indices.readUInt16LE(i * 2) : indices.readUInt32LE(i * 4);
    const groups = Array.from({ length: 4 }, () => []);
    for (let i = 0; i < a.count; i += 3) {
      const tri = [read(i), read(i + 1), read(i + 2)];
      const x = tri.reduce((s, v) => s + pos.readFloatLE(v * 12), 0) / 3;
      const y = tri.reduce((s, v) => s + pos.readFloatLE(v * 12 + 4), 0) / 3;
      // Source is Z-up; after rotation its +X is the driver's side, -Y is the front.
      groups[(x > 0 ? 0 : 1) + (y > 0 ? 2 : 0)].push(...tri); wheelTriangles++;
    }
    for (let corner = 0; corner < 4; corner++) {
      const list = groups[corner]; if (!list.length) continue;
      const vertices = [...new Set(list)], remap = new Map(vertices.map((v, i) => [v, i]));
      const idx = Buffer.alloc(list.length * 4); list.forEach((v, i) => idx.writeUInt32LE(remap.get(v), i * 4));
      const ai = gltf.accessors.length;
      gltf.accessors.push({ bufferView: append(idx), componentType: 5125, count: list.length, type: 'SCALAR' });
      const attributes = Object.fromEntries(Object.entries(p.attributes).map(([k, v]) => [k, accessor(v, vertices)]));
      wheels[corner].push({ ...p, attributes, indices: ai }); splitTriangles += list.length / 3;
    }
  }
}
assert.equal(splitTriangles, wheelTriangles);
for (let i = 0; i < 4; i++) {
  const name = ['WheelFL', 'WheelFR', 'WheelRL', 'WheelRR'][i];
  const mesh = gltf.meshes.length; gltf.meshes.push({ name, primitives: wheels[i] });
  gltf.nodes[1].children.push(gltf.nodes.length); gltf.nodes.push({ name, mesh });
}
// Avoid the generic rear-light classifier treating brake discs/grilles as bulbs.
gltf.materials[18].name = 'EB110Disc'; gltf.materials[20].name = 'RearGrille'; gltf.materials[19].name = 'RearLens';
gltf.materials[5].name = 'TailLight';
for (const i of [9, 11]) gltf.materials[i].emissiveFactor = [0, 0, 0];
// Keep image bytes and original author/license metadata.
for (const image of gltf.images) {
  const v = oldViews[image.bufferView]; image.bufferView = append(binary.subarray(v.byteOffset || 0, (v.byteOffset || 0) + v.byteLength));
}
gltf.buffers = [{ byteLength: bytes }];
const json = Buffer.from(JSON.stringify(gltf)), padded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32); json.copy(padded);
const bin = Buffer.concat(chunks), binPadded = Buffer.alloc(Math.ceil(bin.length / 4) * 4); bin.copy(binPadded);
const out = Buffer.alloc(28 + padded.length + binPadded.length);
out.writeUInt32LE(0x46546c67, 0); out.writeUInt32LE(2, 4); out.writeUInt32LE(out.length, 8);
out.writeUInt32LE(padded.length, 12); out.writeUInt32LE(0x4e4f534a, 16); padded.copy(out, 20);
out.writeUInt32LE(binPadded.length, 20 + padded.length); out.writeUInt32LE(0x004e4942, 24 + padded.length); binPadded.copy(out, 28 + padded.length);
fs.writeFileSync(output, out);
console.log(`${output}: ${(out.length / 1e6).toFixed(2)} MB; four wheels, ${splitTriangles} wheel triangles preserved; display props removed.`);
