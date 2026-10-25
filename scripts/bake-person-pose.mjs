// Nướng phần "Sửa dáng" chú chỉnh trong Rig Tool (file dự án models/person.rigtool.json, model person.glb mở với "Giữ rig có sẵn")
// vào clip của docs/assets/models/person.glb — dùng đúng phép tính của Rig Tool (src/core/clipAdjust.js applyAdjustments: quay trước
// theo trục nhân vật ở mọi khung + nắm / mở ngón), nên trong game y như trong tool. Chạy lại mỗi khi chú gửi file dự án mới:
//   node scripts/bake-person-pose.mjs   (cần Rig Tool ở ../../Rig-Tool cạnh thư mục GAME, có node_modules)
// File gốc chưa nướng giữ ở models/characters/person.original.glb (lần đầu tự sao), luôn nướng từ bản gốc đó.
import fs from 'node:fs';
import path from 'node:path';

const RIG_TOOL = process.env.RIG_TOOL || '/Users/keinle/Desktop/VIBECODE NEW/Rig-Tool';
const mod = (p) => import(path.join(RIG_TOOL, p));
const THREE = await mod('node_modules/three/build/three.module.js');
const { GLTFLoader } = await mod('node_modules/three/examples/jsm/loaders/GLTFLoader.js');
const { MeshoptDecoder } = await mod('node_modules/three/examples/jsm/libs/meshopt_decoder.module.js');
const { applyAdjustments } = await mod('src/core/clipAdjust.js');
const { NodeIO } = await mod('node_modules/@gltf-transform/core/dist/index.js');
const { ALL_EXTENSIONS } = await mod('node_modules/@gltf-transform/extensions/dist/index.js');
const { MeshoptDecoder: Dec, MeshoptEncoder: Enc } = await mod('node_modules/meshoptimizer/index.js');
const { prune } = await mod('node_modules/@gltf-transform/functions/dist/index.js');

const OUT = 'docs/assets/models/person.glb', ORIGINAL = 'models/characters/person.original.glb';
if (!fs.existsSync(ORIGINAL)) fs.copyFileSync(OUT, ORIGINAL);
const project = JSON.parse(fs.readFileSync('models/person.rigtool.json', 'utf8'));
const adjustments = project.adjustments ?? {};

// 1. Clip đã chỉnh, bằng three (như Rig Tool lúc phát / xuất)
// (bỏ texture: Node không giải ảnh; chỉ cần xương + clip)
const raw = fs.readFileSync(ORIGINAL), len = raw.readUInt32LE(12), json = JSON.parse(raw.subarray(20, 20 + len));
json.images = []; json.textures = []; json.materials = (json.materials || []).map((m) => ({ name: m.name }));
const jb = Buffer.from(JSON.stringify(json)), jp = Buffer.alloc(Math.ceil(jb.length / 4) * 4, 32); jb.copy(jp);
const glb = Buffer.alloc(20 + jp.length + raw.length - 20 - len); raw.copy(glb, 0, 0, 12); glb.writeUInt32LE(glb.length, 8);
glb.writeUInt32LE(jp.length, 12); glb.writeUInt32LE(0x4e4f534a, 16); jp.copy(glb, 20); raw.copy(glb, 20 + jp.length, 20 + len);
const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.length), '');
const root = gltf.scene, bones = [], bind = new Map();
root.traverse((o) => { if (o.isBone) { bones.push(o); bind.set(o.name, o.quaternion.clone()); } });
const baked = new Map();
for (const clip of gltf.animations) {
  const saved = adjustments[clip.name];
  if (!saved) continue;
  const settings = { bones: saved.bones ?? {}, hips: [0, 0, 0], fingers: saved.fingers };
  if ((saved.hips ?? []).some(Boolean)) console.warn(`${clip.name}: bỏ qua dời hông ${saved.hips} cm (game đặt hông theo ghế)`);
  const out = applyAdjustments(clip, bones, settings, { root, bind, hipsName: 'pelvis' });
  // chỉ các track thật sự đổi (xương đã chỉnh, xương con của nó, ngón)
  const before = new Map(clip.tracks.map((t) => [t.name, t]));
  const same = (a, b) => a && a.times.length === b.times.length && a.values.every((v, i) => Math.abs(v - b.values[i]) < 1e-7);
  baked.set(clip.name, new Map(out.tracks.filter((t) => t.name.endsWith('.quaternion') && !same(before.get(t.name), t))
    .map((t) => [t.name.slice(0, -'.quaternion'.length), t])));
  console.log(`${clip.name}: ${Object.keys(settings.bones).length} xương${settings.fingers ? ', ngón ' + settings.fingers : ''}`);
}

// 2. Ghi vào GLB (giữ nén meshopt): thay input/output của kênh rotation các xương có track mới
await Dec.ready; await Enc.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': Dec, 'meshopt.encoder': Enc });
const doc = await io.read(ORIGINAL);
const buffer = doc.getRoot().listBuffers()[0];
let changed = 0;
for (const anim of doc.getRoot().listAnimations()) {
  const tracks = baked.get(anim.getName());
  if (!tracks) continue;
  for (const channel of anim.listChannels()) {
    const node = channel.getTargetNode();
    const track = node && channel.getTargetPath() === 'rotation' && tracks.get(node.getName());
    if (!track) continue;
    const sampler = channel.getSampler();
    sampler.setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(track.times)).setBuffer(buffer));
    sampler.setOutput(doc.createAccessor().setType('VEC4').setArray(new Float32Array(track.values)).setBuffer(buffer));
    sampler.setInterpolation('LINEAR');
    changed++;
  }
}
await doc.transform(prune());   // accessor cũ không còn dùng
await io.write(OUT, doc);
console.log(`đã nướng ${changed} kênh xoay vào ${OUT} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);

// 3. Kiểm: đọc lại file vừa ghi, mọi track đã nướng khớp bản tính (sai số nén ≤ 0.002)
{
  const raw2 = fs.readFileSync(OUT), l2 = raw2.readUInt32LE(12), j2 = JSON.parse(raw2.subarray(20, 20 + l2));
  j2.images = []; j2.textures = []; j2.materials = (j2.materials || []).map((m) => ({ name: m.name }));
  const b2 = Buffer.from(JSON.stringify(j2)), p2 = Buffer.alloc(Math.ceil(b2.length / 4) * 4, 32); b2.copy(p2);
  const g2 = Buffer.alloc(20 + p2.length + raw2.length - 20 - l2); raw2.copy(g2, 0, 0, 12); g2.writeUInt32LE(g2.length, 8);
  g2.writeUInt32LE(p2.length, 12); g2.writeUInt32LE(0x4e4f534a, 16); p2.copy(g2, 20); raw2.copy(g2, 20 + p2.length, 20 + l2);
  const again = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(g2.buffer.slice(g2.byteOffset, g2.byteOffset + g2.length), '');
  let worst = 0, checked = 0;
  for (const clip of again.animations) {
    const tracks = baked.get(clip.name);
    if (!tracks) continue;
    for (const t of clip.tracks) {
      const want = tracks.get(t.name.replace(/\.quaternion$/, ''));
      if (!want || !t.name.endsWith('.quaternion')) continue;
      const a = t.createInterpolant(), b = want.createInterpolant();
      for (const time of [0, clip.duration * 0.37, clip.duration * 0.81]) {
        const qa = new THREE.Quaternion().fromArray(a.evaluate(time)), qb = new THREE.Quaternion().fromArray(b.evaluate(time));
        worst = Math.max(worst, 1 - Math.abs(qa.normalize().dot(qb.normalize())));
      }
      checked++;
    }
  }
  if (checked !== changed || worst > 2e-3) throw new Error(`file ghi ra lệch: ${checked}/${changed} track, sai ${worst}`);
  console.log(`PASS: ${checked} track trong file khớp bản tính của Rig Tool (sai lệch lớn nhất ${worst.toExponential(1)})`);
}
