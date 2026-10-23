// Kiểm tra cách chia loại cây map Landmark 81 (không cần trình duyệt): hàng cây theo tên đường, cọ quảng trường,
// tỉ lệ cây công viên / OSM theo ô 30 m (35/25/20/10/10) và hàng xóm gần nhau cùng loại.
import { SGN, sgnStreet } from '../src/sgn.js';
import { treeKind, TREE_KINDS } from '../src/sgnTrees.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const D = SGN.data;

// hàng cây hai bên đường: mỗi tên đường một loại
const STREET = { 'Nguyễn Hữu Cảnh': 'urban-tall', 'Vạn Hoa 4': 'maple', 'Đường Vạn Hoa 3': 'cypress', 'Trần Trọng Kim': 'palm-date' };
for (const [name, want] of Object.entries(STREET)) {
  let s = D.streets.find((t) => t.name === name)?.s0;
  if (s === undefined) { ok(false, `không thấy đường ${name} trong dữ liệu`); continue; }
  s = ((s % D.length) + D.length) % D.length;
  ok(sgnStreet(s) === name && treeKind([0, 0, 2, s], D) === want, `hàng cây ${name} → ${treeKind([0, 0, 2, s], D)}`);
}
{ // đường khác trong tuyến => cây tán tròn thành thị
  const other = D.streets.find((t) => !STREET[t.name]);
  const got = treeKind([0, 0, 2, other.s0], D);
  ok(got === 'urban-round', `hàng cây ${other.name} (mặc định) → ${got}`);
}

// cọ ở quảng trường đi bộ Landmark 81
ok(treeKind([0, 0, 1], D) === 'palm-fan', `cọ quảng trường → ${treeKind([0, 0, 1], D)}`);

// cây công viên / OSM: tỉ lệ trong ±8 % trên 5 000 điểm ngẫu nhiên
let seed = 20261023;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const TARGET = { 'urban-round': 0.35, acacia: 0.25, maple: 0.20, 'palm-date': 0.10, 'palm-fan': 0.10 };
const cnt = {}; for (const k of TREE_KINDS) cnt[k] = 0;
const N = 5000;
for (let i = 0; i < N; i++) cnt[treeKind([(rnd() - 0.5) * 4000, (rnd() - 0.5) * 4000], D)]++;
for (const [k, want] of Object.entries(TARGET)) {
  const got = cnt[k] / N;
  ok(Math.abs(got - want) <= 0.08, `công viên · ${k}: ${(got * 100).toFixed(1)} % (mục tiêu ${(want * 100).toFixed(0)} %)`);
}
ok(Object.values(cnt).reduce((a, b) => a + b, 0) === N, `${N} điểm công viên đều có loại`);

// hàng xóm trong 10 m: cùng lùm (cùng ô 30 m) => cùng loại
let same = 0;
const M = 4000;
for (let i = 0; i < M; i++) {
  const x = (rnd() - 0.5) * 2000, z = (rnd() - 0.5) * 2000;
  const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * 10;
  if (treeKind([x, z], D) === treeKind([x + Math.cos(a) * d, z + Math.sin(a) * d], D)) same++;
}
const share = same / M;
ok(share >= 0.70, `hàng xóm ≤10 m cùng loại: ${(share * 100).toFixed(1)} % (≥ 70 %)`);

console.log(fail ? `\n${fail} lỗi` : '\nTẤT CẢ PASS');
process.exit(fail ? 1 : 0);
