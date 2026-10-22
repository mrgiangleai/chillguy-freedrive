// Kiểm camera "Bên hông" ở Times Square: với s = 470…960 bước 5 m, đặt camera đúng khoảng ngang danh nghĩa,
// chạy city.collide() rồi kiểm đoạn xe→camera không cắt khối bao biển LED nào. Node thuần, không cần trình duyệt.
import * as THREE from 'three';
import { Road, CITY } from '../src/road.js';
import { NYC, nycLoop } from '../src/nyc.js';
import { City } from '../src/city.js';
import { TimesSquare } from '../src/timesSquare.js';

// stub canvas tối thiểu cho texture (không dùng tới khi chỉ dựng OBB)
const ctx = () => new Proxy({}, { get: (t, k) => (k in t ? t[k] : () => ctx()), set: (t, k, v) => ((t[k] = v), true) });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: ctx }) };

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };

const road = new Road();
road.setShape('nyc', nycLoop());
const scene = new THREE.Scene();
const city = new City(scene, road, null, null);
city.visible = true;                                   // collide() chỉ chạy khi khối phố hiện
const ts = new TimesSquare(scene, road, city);
ts.visible = true;                                     // dựng Times Square + gắn city.signObb
city.extraObb = ts.obb;                                // nhà Times Square (không có nycBld trong node)
const S = ts.signObb;
city.signObb = S;

const D = 1.5;                                      // làn mặc định của xe (LANE_D trong main.js)
const DIST = 13, HEIGHT = 4.35;                        // đúng rig.sideDist / tune.side.height
const BASE = NYC.length;                               // TimesSquare dựng ở s trong vòng: road.at(BASE + s)

// đoạn (a→b) có cắt hộp OBB thứ i không (slab trong hệ toạ độ hộp: x = ngang, z = dọc, y = cao)
function hits(ax, ay, az, bx, by, bz, i) {
  const dx = bx - ax, dz = bz - az;
  const ex = ax - S[i], ez = az - S[i + 1];
  const p0 = [ex * S[i + 2] - ez * S[i + 3], ay, ex * S[i + 3] + ez * S[i + 2]];
  const dv = [dx * S[i + 2] - dz * S[i + 3], by - ay, dx * S[i + 3] + dz * S[i + 2]];
  const lo = [-S[i + 4], S[i + 7], -S[i + 5]], hi = [S[i + 4], S[i + 6], S[i + 5]];
  let t0 = 0, t1 = 1;
  for (let k = 0; k < 3; k++) {
    if (Math.abs(dv[k]) < 1e-9) { if (p0[k] < lo[k] || p0[k] > hi[k]) return false; continue; }
    let ta = (lo[k] - p0[k]) / dv[k], tb = (hi[k] - p0[k]) / dv[k];
    if (ta > tb) { const t = ta; ta = tb; tb = t; }
    if (ta > t0) t0 = ta; if (tb < t1) t1 = tb;
    if (t0 > t1) return false;
  }
  return true;
}

const flat = ts.count?.ads ?? 0, total = S.length / 8;
console.log(`biển: ${flat} phẳng + ${total - flat} cong = ${total} khối bao, nhà: ${ts.obb.length / 7}`);
ok(S.length > 0 && S.length % 8 === 0, `signObb có dữ liệu (${total} khối, 8 số/khối)`);

let tested = 0, pulled = 0, hit = 0, nomHit = 0, nomPos = 0, high = 0;
for (const side of [-1, 1]) {
  let np = 0, nh = 0, nn = 0, npos = 0;
  for (let s = 470; s <= 960; s += 5) {
    const p = road.at(BASE + s, {});
    const car = new THREE.Vector3(p.x + Math.cos(p.th) * D, p.y, p.z - Math.sin(p.th) * D);
    const rx = Math.cos(p.th), rz = -Math.sin(p.th);
    const cam = new THREE.Vector3(car.x + rx * side * DIST, car.y + HEIGHT, car.z + rz * side * DIST);
    const nomX = cam.x, nomZ = cam.z;
    const top = car.y + HEIGHT + 2;                   // biển có đáy cao hơn mức này không tính

    // vị trí danh nghĩa (chưa kéo) có nằm sau biển không? — để chắc bài kiểm thật sự chạm biển
    let ph = 0;
    for (let i = 0; i < S.length; i += 8) if (S[i + 7] <= top && hits(car.x, car.y + 1.3, car.z, cam.x, cam.y, cam.z, i)) { nn++; ph++; }
    if (ph) npos++;

    city.camF = 1;                                    // đặt lại mỗi vị trí: đo độ kéo vào tĩnh
    city.collide(car, cam, 1 / 60);
    tested++;
    if (Math.hypot(cam.x - nomX, cam.z - nomZ) > 0.05) { pulled++; np++; }

    for (let i = 0; i < S.length; i += 8) {
      if (S[i + 7] > top) { high++; continue; }
      if (hits(car.x, car.y + 1.3, car.z, cam.x, cam.y, cam.z, i)) { hit++; nh++; }
    }
  }
  nomHit += nn; nomPos += npos;
  console.log(`  phía ${side < 0 ? 'trái' : 'phải'}: danh nghĩa cắt biển ${nn} lần / ${npos} vị trí, kéo vào ${np} vị trí, sau khi kéo cắt ${nh}`);
}

console.log(`đã kiểm ${tested} vị trí, kéo camera vào ${pulled}, cắt khối biển ${hit} (danh nghĩa ${nomHit} tại ${nomPos} vị trí), bỏ qua biển cao ${high}`);
ok(hit === 0, `không đoạn xe→camera nào cắt biển sau khi kéo (${hit} lần cắt)`);
ok(nomHit > 0 && nomPos > 0, `vị trí danh nghĩa thật sự nằm sau biển (${nomHit} lần cắt / ${nomPos} vị trí) — bài kiểm có tác dụng`);
ok(pulled > 0, `có vị trí được kéo vào trước biển (${pulled})`);

console.log(fail ? `\n${fail} lỗi` : '\nTất cả PASS');
process.exit(fail ? 1 : 0);
