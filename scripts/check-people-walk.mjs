// Kiểm tra Người 3D theo clip nhân vật chính (src/streetModels.js + src/pedWalk.js): dựng 13 model như trong game, áp dáng nướng
// từng khung lên đỉnh (≤ 2 xương / đỉnh như shader), đo độ dãn cạnh tam giác (rách lưới, so với dáng tự làm cũ) và chân chạm đất.
import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { PEOPLE_MODELS, MODEL_WALK, buildModel } from '../src/streetModels.js';
import { bakePedWalk, PED_FRAMES, PED_ANIMS } from '../src/pedWalk.js';

// Node không giải được ảnh: bỏ ảnh / texture khỏi GLB trước khi parse
function strip(file) {
  const raw = fs.readFileSync(file), len = raw.readUInt32LE(12), json = JSON.parse(raw.subarray(20, 20 + len));
  json.images = []; json.textures = []; json.materials = (json.materials || []).map((m) => ({ name: m.name }));
  const jb = Buffer.from(JSON.stringify(json)), jp = Buffer.alloc(Math.ceil(jb.length / 4) * 4, 32); jb.copy(jp);
  const glb = Buffer.alloc(20 + jp.length + raw.length - 20 - len); raw.copy(glb, 0, 0, 12); glb.writeUInt32LE(glb.length, 8);
  glb.writeUInt32LE(jp.length, 12); glb.writeUInt32LE(0x4e4f534a, 16); jp.copy(glb, 20); raw.copy(glb, 20 + jp.length, 20 + len);
  return glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.length);
}
const gl = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const loader = { loadAsync: (url) => gl.parseAsync(strip('docs/' + url), '') };
const rig = await loader.loadAsync('assets/models/person.glb');

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
for (const def of PEOPLE_MODELS) {
  const parts = await buildModel(loader, def);
  const b = bakePedWalk(rig.scene, rig.animations, parts.rig.joints, [0.05 * def.h, -0.07 * def.h], parts.rig.fix, MODEL_WALK);
  const mat = (blk, f, bone, x, y, z, out, w) => {
    const o = ((blk * PED_FRAMES + f) * b.width + bone * 3) * 4, d = b.data;
    for (let r = 0; r < 3; r++) out[r] += w * (d[o + r * 4] * x + d[o + r * 4 + 1] * y + d[o + r * 4 + 2] * z + d[o + r * 4 + 3]);
  };
  // dáng tự làm cũ (shader patch khi chưa nướng clip) để so: đung đưa chân / tay quanh háng / vai theo aLimb
  const old = (L, x, y, z, ph, t) => {
    const sw = Math.sin(ph), la = sw * 0.5 * L[0], aa = -sw * 0.5 * L[1];
    y -= L[2]; [y, z] = [y * Math.cos(la) - z * Math.sin(la), y * Math.sin(la) + z * Math.cos(la)];
    y += L[2] - L[3]; [y, z] = [y * Math.cos(aa) - z * Math.sin(aa), y * Math.sin(aa) + z * Math.cos(aa)];
    y += L[3] - L[2] * (1 - Math.cos(sw * 0.5)); t[0] = x; t[1] = y; t[2] = z;
  };
  const gap = (geo, Q) => {                            // độ dãn tuyệt đối cạnh tam giác (m), mức 99.9 %
    const P = geo.attributes.position.array, idx = geo.index ? geo.index.array : null, nt = idx ? idx.length : P.length / 3, G = [];
    for (let k = 0; k < nt; k += 3) for (let e = 0; e < 3; e++) {
      const u = idx ? idx[k + e] : k + e, v = idx ? idx[k + (e + 1) % 3] : k + (e + 1) % 3;
      G.push(Math.abs(Math.hypot(Q[u * 3] - Q[v * 3], Q[u * 3 + 1] - Q[v * 3 + 1], Q[u * 3 + 2] - Q[v * 3 + 2])
        - Math.hypot(P[u * 3] - P[v * 3], P[u * 3 + 1] - P[v * 3 + 1], P[u * 3 + 2] - P[v * 3 + 2])));
    }
    G.sort((x, y) => x - y);
    return G.length ? G[Math.floor(G.length * 0.999)] : 0;
  };
  let worst = 0, worstOld = 0, minY = Infinity, maxMinY = -Infinity;
  for (let a = 0; a < PED_ANIMS.length; a++) for (let f = 0; f < PED_FRAMES; f += 3) {
    let lo = Infinity;
    for (const { geo } of parts) {
      const P = geo.attributes.position.array, S = geo.attributes.aSkin.array, L = geo.attributes.aLimb.array, n = P.length / 3;
      const Q = new Float32Array(n * 3), O = new Float32Array(n * 3), t = [0, 0, 0];
      for (let i = 0; i < n; i++) {
        t[0] = t[1] = t[2] = 0;
        mat(a * 2, f, S[i * 3], P[i * 3], P[i * 3 + 1], P[i * 3 + 2], t, S[i * 3 + 2]);
        if (S[i * 3 + 2] < 0.999) mat(a * 2, f, S[i * 3 + 1], P[i * 3], P[i * 3 + 1], P[i * 3 + 2], t, 1 - S[i * 3 + 2]);
        Q.set(t, i * 3); lo = Math.min(lo, t[1]);
        if (a === 0) { old(L.subarray(i * 4, i * 4 + 4), P[i * 3], P[i * 3 + 1], P[i * 3 + 2], f / PED_FRAMES * 6.2832, t); O.set(t, i * 3); }
      }
      worst = Math.max(worst, gap(geo, Q));
      if (a === 0) worstOld = Math.max(worstOld, gap(geo, O));
    }
    minY = Math.min(minY, lo); maxMinY = Math.max(maxMinY, lo);
  }
  console.log(`${def.id.padEnd(12)} dãn cạnh ${(worst * 100).toFixed(1)} cm (dáng cũ ${(worstOld * 100).toFixed(1)} cm), điểm thấp nhất ${minY.toFixed(3)}…${maxMinY.toFixed(3)} m`);
  // tay / chân dính thân áo nên dãn ở nách / háng là khó tránh (dáng cũ cũng 3–16 cm); chặn mức rách rõ (sai xương, sai bên)
  ok(worst < 0.2, `${def.id}: lưới không rách (dãn ≤ 20 cm)`);
  ok(minY > -0.08 && maxMinY < 0.08, `${def.id}: chân chạm đất`);
}
process.exit(fail ? 1 : 0);
