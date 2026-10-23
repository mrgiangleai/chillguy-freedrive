// Kiểm tra người dạo công viên map Landmark (cityPeople.parkAt / parkCount): đường giả thẳng, công viên giả là
// hình chữ nhật 20–60 m bên phải đường (s ∈ [−120, 120]); mô phỏng 120 s ở dt 0,1:
// mọi người dạo ở trong công viên, không ai xuống lòng đường, đủ số lượng, người đi vỉa hè không bị giảm.
import * as THREE from 'three';
import { CITY } from '../src/road.js';
import { CityPeople } from '../src/cityPeople.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const DT = 0.1;
const inParkRect = (x, z) => x >= -120 && x <= 120 && z >= 20 && z <= 60;

// đường giả: trục +x, bên phải = +z (th = −π/2); không có ngã tư
const road = {
  at(s, out = {}) { out.x = s; out.y = 0; out.z = 0; out.th = -Math.PI / 2; return out; },
  junctionIndex() { return 0; },
  junction(n) { return n >= 0 ? 1e9 : -1e9; },
  junctionInfo() { return null; },
  nearJunction() { return null; },
};
const city = { _phase: () => ({ main: 0, cross: 1, crossEnd: 100, t: 0 }) };
const scene = new THREE.Scene();
const mk = () => {
  const people = new CityPeople(scene, road, city);
  people.visible = true;
  people.ambient = true;
  people.parkAt = inParkRect;
  return people;
};
const sidewalk = (people) => people.peds.filter((p) => p.mode === 'walk' || p.mode === 'wait').length;
const parkers = (people) => people.peds.filter((p) => p.mode === 'park').length;
const S0 = 0;

// ---- 1: 120 s có người dạo: luôn trong công viên, không xuống đường, đúng số, vỉa hè không đổi ----
{
  const people = mk();
  people.walkers = 30;
  people.parkCount = 0;
  for (let i = 0; i < 600; i++) people.update(DT, S0);   // 60 s chỉ có người vỉa hè
  for (const p of people.peds) if (p.mode === 'walk' || p.mode === 'wait') p.speed = 0;   // đứng yên để đếm chính xác
  const base = sidewalk(people);
  people.walkers = base;                                 // giữ đúng số đang có để đếm ổn định
  ok(base >= 28, `người vỉa hè trước khi thêm: ${base}`);

  people.parkCount = 24;
  let inside = true, onRoad = 0, maxU = 0;
  for (let i = 0; i < 1200; i++) {                       // 120 s
    people.update(DT, S0);
    for (const p of people.peds) if (p.mode === 'park') {
      const P = road.at(p.s, {});
      const x = P.x + Math.cos(P.th) * p.u, z = P.z - Math.sin(P.th) * p.u;
      if (!inParkRect(x, z)) inside = false;
      if (Math.abs(p.u) < CITY.hw + CITY.walk) onRoad++;
      maxU = Math.max(maxU, Math.abs(p.u));
    }
  }
  ok(inside, 'mọi người dạo ở trong công viên suốt 120 s');
  ok(onRoad === 0, `không ai xuống lòng đường (|u| ≥ ${(CITY.hw + CITY.walk).toFixed(1)} m, xa nhất ${maxU.toFixed(1)} m)`);
  ok(parkers(people) === 24, `đủ số người dạo: ${parkers(people)}/24`);
  const after = sidewalk(people);
  ok(after === base, `người đi vỉa hè không bị giảm: ${after}/${base}`);
  ok(people.peds.filter((p) => p.mode === 'park').every((p) => !p.crossing && !p.jay && !p.jaywalk),
    'người dạo không băng qua đường / không dùng đèn');
}

// ---- 2: quay đầu khi bước tiếp ra khỏi công viên ----
{
  const people = mk();
  people.ambient = false;
  people.parkCount = 1;
  const p = people._parkPed(118, 40, 0);
  p.dir = 1; p.speed = 1; p.pauseCool = 999; p.mph = 0; p.mdir = 1; p.mrate = 0;
  people.peds.push(p);
  let turned = false;
  for (let i = 0; i < 100; i++) { people.update(DT, S0); if (p.dir < 0) turned = true; }
  ok(turned && p.s <= 120, `quay đầu ở mép công viên (s = ${p.s.toFixed(2)}, dir = ${p.dir})`);
  ok(inParkRect(p.s, p.u), 'vẫn ở trong công viên sau khi quay đầu');
}

if (fail) { console.log(`\n${fail} mục lỗi`); process.exitCode = 1; }
else console.log('\nTất cả mục kiểm tra đạt.');
