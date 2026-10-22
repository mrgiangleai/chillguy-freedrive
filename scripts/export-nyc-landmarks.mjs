// Xuất model tòa nhà nổi tiếng của map New York (src/landmarks/*.js, dựng bằng code) ra file .glb (glTF 2.0 binary) để dùng ở chỗ khác:
// mỗi file 1 mesh: POSITION, NORMAL, COLOR_0 (màu đỉnh), chỉ số tam giác; vật liệu PBR trắng (màu lấy từ màu đỉnh), nhám 0.55, kim loại 0.15.
// Đơn vị mét, gốc = tâm đáy, +Y lên, mặt chính nhìn −Z. Chạy: node scripts/export-nyc-landmarks.mjs  => docs/assets/models/nyc/<tên>.glb
import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';

const NAMES = ['empire', 'chrysler', 'grandcentral', 'metlife', 'helmsley', 'waldorf', 'seagram', 'lever', 'macys', 'msg', 'vanderbilt'];
const OUT = 'docs/assets/models/nyc';
fs.mkdirSync(OUT, { recursive: true });

function glb(name, g) {
  if (!g.attributes.normal) g.computeVertexNormals();
  const P = g.attributes.position, N = g.attributes.normal, C = g.attributes.color, n = P.count;
  const idx = g.index ? Uint32Array.from(g.index.array) : Uint32Array.from({ length: n }, (_, i) => i);
  const pos = Float32Array.from(P.array), nor = Float32Array.from(N.array), col = Float32Array.from(C ? C.array : new Float32Array(n * 3).fill(1));
  // chuẩn hoá pháp tuyến (glTF yêu cầu độ dài 1)
  for (let i = 0; i < n; i++) { const l = Math.hypot(nor[3 * i], nor[3 * i + 1], nor[3 * i + 2]) || 1; nor[3 * i] /= l; nor[3 * i + 1] /= l; nor[3 * i + 2] /= l; }
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < n; i++) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], pos[3 * i + k]); max[k] = Math.max(max[k], pos[3 * i + k]); }
  const parts = [pos, nor, col, idx].map((a) => Buffer.from(a.buffer, a.byteOffset, a.byteLength));
  const views = [], offs = []; let off = 0;
  parts.forEach((b, i) => { offs.push(off); views.push({ buffer: 0, byteOffset: off, byteLength: b.length, target: i < 3 ? 34962 : 34963 }); off += Math.ceil(b.length / 4) * 4; });
  const bin = Buffer.alloc(off); parts.forEach((b, i) => b.copy(bin, offs[i]));
  const json = {
    asset: { version: '2.0', generator: 'Chill Drive export-nyc-landmarks' },
    scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0, name }],
    meshes: [{ name, primitives: [{ attributes: { POSITION: 0, NORMAL: 1, COLOR_0: 2 }, indices: 3, material: 0 }] }],
    materials: [{ name: name + '-mat', pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0.15, roughnessFactor: 0.55 } }],
    buffers: [{ byteLength: bin.length }], bufferViews: views,
    accessors: [
      { bufferView: 0, componentType: 5126, count: n, type: 'VEC3', min, max },
      { bufferView: 1, componentType: 5126, count: n, type: 'VEC3' },
      { bufferView: 2, componentType: 5126, count: n, type: 'VEC3' },
      { bufferView: 3, componentType: 5125, count: idx.length, type: 'SCALAR' },
    ],
  };
  let js = Buffer.from(JSON.stringify(json)); js = Buffer.concat([js, Buffer.alloc((4 - (js.length % 4)) % 4, 0x20)]);
  const head = Buffer.alloc(12), jh = Buffer.alloc(8), bh = Buffer.alloc(8);
  head.writeUInt32LE(0x46546c67, 0); head.writeUInt32LE(2, 4); head.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8);
  jh.writeUInt32LE(js.length, 0); jh.writeUInt32LE(0x4e4f534a, 4); bh.writeUInt32LE(bin.length, 0); bh.writeUInt32LE(0x004e4942, 4);
  return { data: Buffer.concat([head, jh, js, bh, bin]), tris: idx.length / 3, size: max.map((v, k) => v - min[k]) };
}

for (const name of NAMES) {
  const { build } = await import(`../src/landmarks/${name}.js`);
  const r = glb(name, build(THREE).geometry), f = path.join(OUT, name + '.glb');
  fs.writeFileSync(f, r.data);
  console.log(`${f}  ${(r.data.length / 1024).toFixed(0)} KB, ${r.tris} tam giác, ${r.size.map((v) => v.toFixed(0)).join(' × ')} m`);
}
