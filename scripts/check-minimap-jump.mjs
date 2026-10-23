// Kiểm tra nhanh (không trình duyệt): đổi px bản đồ -> toạ độ thế giới và tìm s gần nhất.
// Chạy: node scripts/check-minimap-jump.mjs
import { mapWorld, nearestRoadS } from '../src/minimap.js';

let n = 0, bad = 0;
const ok = (cond, name) => { n++; if (!cond) { bad++; console.log('FAIL', name); } };
const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;

// ---- px -> thế giới (rot = 0, đã phóng to) ----
{
  const R = 300, z = 0.45, cx = 100, cz = -50;
  const p = mapWorld(cx, cz, 0, z, R, R + 45, R - 22.5);      // 100 m về đông, 50 m về bắc
  ok(near(p.x, 200) && near(p.z, -100), 'mapWorld rot=0');
  const c = mapWorld(cx, cz, 0, z, R, R, R);                  // đúng tâm
  ok(near(c.x, cx) && near(c.z, cz), 'mapWorld tâm');
}

// ---- px -> thế giới (thu nhỏ, bản đồ quay theo hướng xe) ----
{
  const R = 80, z = 0.75, cx = 12, cz = 8, rot = 0.7;
  const dx = 33, dz = -19;                                    // điểm thế giới muốn bấm
  const X = (dx * Math.cos(rot) - dz * Math.sin(rot)) * z;    // chiếu xuôi ra px
  const Y = (dx * Math.sin(rot) + dz * Math.cos(rot)) * z;
  const p = mapWorld(cx, cz, rot, z, R, R + X, R + Y);
  ok(near(p.x, cx + dx, 1e-9) && near(p.z, cz + dz, 1e-9), 'mapWorld có quay');
}

// ---- tìm s gần nhất: đường không phải vòng ----
{
  const road = { pts: [] };
  for (let i = 0; i <= 500; i++) road.pts.push({ x: i * 2, z: 0, y: 0 });
  ok(nearestRoadS(road, 401, 10, 60, 0) === 400, 'nearest thường: s = 400');
  ok(nearestRoadS(road, 400, 60.5, 60, 0) === null, 'nearest thường: quá 60 m => null');
  ok(nearestRoadS(road, 5, 1, 60, 0) === 4, 'nearest thường: điểm đầu');
}

// ---- tìm s gần nhất: vòng kín, giữ số vòng hiện tại ----
{
  const road = { pts: [], loop: { length: 100 } };
  for (let i = 0; i <= 50; i++) road.pts.push({ x: i * 2, z: 0, y: 0 });   // 1 vòng = 100 m, step 2
  const s = nearestRoadS(road, 48, 1, 60, 350);               // đang ở vòng 3 (300..400), điểm r = 48
  ok(s === 348, 'nearest vòng: cùng vòng (348)');
  ok(nearestRoadS(road, 48, 1, 60, 120) === 148, 'nearest vòng: vòng 1 (148)');
}

if (bad) { console.log(`FAIL ${bad}/${n}`); process.exit(1); }
console.log(`PASS ${n}/${n}`);
