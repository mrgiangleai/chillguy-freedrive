// Kiểm tra xe NPC nhường người đi bộ (map New York): xe dừng trước người trong làn rồi chạy tiếp khi người đi,
// và mô phỏng 3 phút ngẫu nhiên: không có xe nào chồng lên người (trừ người kịch bản tai nạn).
import * as THREE from 'three';
import { Road } from '../src/road.js';
import { nycLoop, NYC } from '../src/nyc.js';
import { City } from '../src/city.js';
import { CityTraffic } from '../src/cityTraffic.js';
import { CityPeople } from '../src/cityPeople.js';

let fail = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const DT = 1 / 30;
const road = new Road();
road.setShape('nyc', nycLoop());
const L = NYC.length;

function city(opts = {}) {
  const c = Object.create(City.prototype);
  Object.assign(c, { road, nyc: true, street: true, clock: 0, group: { visible: true } });
  if (opts.noStop) c.stopAhead = () => Infinity;
  if (opts.crossGreen) c._phase = () => ({ main: 2, cross: 0, crossEnd: 100, t: 0 });
  return c;
}
function world(c, s0) {
  const scene = new THREE.Scene();
  const traffic = new CityTraffic(scene, road, c);
  traffic.setMode('nyc');
  traffic.visible = true;
  traffic.density = 0;                       // tắt sinh xe tự động cho kịch bản có kiểm soát
  traffic.filled = true;
  traffic.cars.length = 0;
  const people = new CityPeople(scene, road, c);
  people.visible = true;
  people.ambient = false;                    // chỉ người do bài kiểm tra đặt
  return { scene, traffic, people, s0 };
}
function step(w, s0) {
  w.people.update(DT, s0);
  w.traffic.update(DT, s0, 30, 0, 0, 4.6);
}
function straightS(start) {
  let s = start;
  for (let i = 0; i < 200; i++) {
    const r = s % L;
    if (NYC.data.junctions.every((j) => Math.abs(j.s - r) > 30) && NYC.data.corners.every((c) => Math.abs(c.s - r) > 80)) return s;
    s += 25;
  }
  return start;
}

// ---- kịch bản 1: xe đường chính dừng trước người trong làn, rồi chạy tiếp ----
{
  const s0 = straightS(L + 900);
  const w = world(city({ noStop: true }), s0);
  const car = w.traffic._new('sedan', { s: s0, d: 5.4, home: 5.4, dir: 1 });
  car.vMax = 13; car.v = 13; w.traffic.cars.push(car);
  const ped = { s: s0 + 45, u: 5.4, vs: 0, vu: 0, speed: 1.2, mode: 'script', ph: 0, color: '#ffffff', target: null };
  w.people.peds.push(ped);
  let minGap = Infinity, stopped = false, stopAt = null;
  for (let i = 0; i < 300; i++) {          // 10 s
    step(w, s0);
    const gap = (ped.s - (car.s + car.dir * car.len / 2)) * car.dir;
    minGap = Math.min(minGap, gap);
    if (car.v < 0.05) { stopped = true; stopAt ??= car.s; }
  }
  ok(stopped, `xe đường chính dừng trước người (khoảng cách nhỏ nhất ${minGap.toFixed(2)} m)`);
  ok(minGap >= 1.5, `khoảng cách dừng ≥ 1,5 m (${minGap.toFixed(2)} m)`);
  const before = car.s;
  w.people.peds.length = 0;                // người rời đường
  for (let i = 0; i < 120; i++) step(w, s0);   // 4 s
  ok(car.s > before + 8 && car.v > 5, `xe chạy tiếp sau khi người đi (Δs ${(car.s - before).toFixed(1)} m, v ${car.v.toFixed(1)} m/s)`);
  ok(stopAt !== null && Math.abs(stopAt - before) < 0.05, 'xe đứng yên trong lúc chờ người');
}

// ---- kịch bản 2: xe đường ngang cũng nhường người trong làn ----
{
  const s0 = straightS(L + 900);
  let n = road.junctionIndex(s0 + 30);
  while (road.junctionInfo(n)?.corner) n++;
  const J = road.junction(n), a = 1.75;
  const c = city({ noStop: true, crossGreen: true });
  const w = world(c, s0);
  const car = w.traffic._new('taxi', { cross: { n, u: -60, a, du: 1 } });
  car.vMax = 12; car.v = 12; w.traffic.cars.push(car);
  const ped = { s: J + a, u: -20, vs: 0, vu: 0, speed: 1.2, mode: 'script', ph: 0, color: '#ffffff', target: null };
  w.people.peds.push(ped);
  let minGap = Infinity, stopped = false;
  for (let i = 0; i < 300; i++) {
    step(w, s0);
    const gap = (ped.u - (car.cross.u + car.cross.du * car.len / 2)) * car.cross.du;
    minGap = Math.min(minGap, gap);
    if (car.v < 0.05) stopped = true;
  }
  ok(stopped && minGap >= 1.5, `xe đường ngang dừng trước người (gap ${minGap.toFixed(2)} m)`);
  const before = car.cross.u;
  w.people.peds.length = 0;
  for (let i = 0; i < 120; i++) step(w, s0);
  ok(car.cross.u > before + 8 && car.v > 5, `xe đường ngang chạy tiếp (Δu ${(car.cross.u - before).toFixed(1)} m)`);
}

// ---- kịch bản 3: đám đông Times Square (toạ độ s trong 1 vòng) cũng được nhường ----
{
  const s0 = straightS(L + 900);
  const c = city({ noStop: true });
  const w = world(c, s0);
  const car = w.traffic._new('sedan', { s: s0, d: 5.4, home: 5.4, dir: 1 });
  car.vMax = 13; car.v = 13; w.traffic.cars.push(car);
  const ps = s0 + 45;
  const crosser = { zn: { kind: 'cross' }, s: ps - L, u: 5.4, moving: 1 };   // s cục bộ của vòng Times Square
  c.timesSq = { group: { visible: true }, crowd: [crosser] };
  let minGap = Infinity, stopped = false;
  for (let i = 0; i < 300; i++) {
    step(w, s0);
    minGap = Math.min(minGap, (ps - (car.s + car.dir * car.len / 2)) * car.dir);
    if (car.v < 0.05) stopped = true;
  }
  ok(stopped && minGap >= 1.5, `đám đông Times Square được nhường (gap ${minGap.toFixed(2)} m)`);
}

// ---- kịch bản 4: 3 phút ngẫu nhiên, đếm xe chồng lên người ----
{
  const s0 = L + 900;
  const c = city();
  const w = world(c, s0);
  w.people.ambient = true;                 // bật người đi bộ / qua đường
  w.traffic.density = 1;
  w.traffic.filled = false;
  let overlaps = 0, jaywalked = 0, cars = 0, crossers = 0, maxJay = 0;
  for (let i = 0; i < 180 * 30; i++) {
    step(w, s0);
    if (i % 30 === 0) {
      const per = new Map();
      for (const p of w.people.peds) {
        if (p.jaywalk && p.mode === 'cross') { jaywalked++; per.set(p.n, (per.get(p.n) || 0) + 1); }
        if (p.mode === 'cross') crossers++;
      }
      for (const n of per.values()) maxJay = Math.max(maxJay, n);
    }
    for (const car of w.traffic.cars) {
      if (car.crashed) continue;
      let cs, cd, cl, cw;
      if (car.cross) { cs = road.junction(car.cross.n) + car.cross.a; cd = car.cross.u; cl = car.wid; cw = car.len; }
      else if (car.xr) continue;
      else { cs = car.s; cd = car.d; cl = car.len; cw = car.wid; }
      for (const p of w.people.peds) {
        if (p.mode === 'script' || p.mode === 'fallen') continue;   // người kịch bản tai nạn được phép
        if (Math.abs(p.s - cs) < cl / 2 + 0.3 && Math.abs(p.u - cd) < cw / 2 + 0.3) {
          overlaps++;
          if (overlaps <= 5) console.log('OVERLAP', JSON.stringify({ i, car: { type: car.type, cross: !!car.cross, s: +car.s?.toFixed(1), d: +car.d?.toFixed(1), u: +car.cross?.u.toFixed(1), a: car.cross?.a, v: +car.v.toFixed(1) }, ped: { mode: p.mode, crossing: !!p.crossing, jay: !!p.jaywalk, s: +p.s.toFixed(1), u: +p.u.toFixed(1), side: p.side, n: p.n } }));
        }
      }
    }
    cars = Math.max(cars, w.traffic.cars.length);
  }
  ok(overlaps === 0, `3 phút ngẫu nhiên: ${overlaps} lần xe chồng lên người (tối đa ${cars} xe)`);
  ok(jaywalked > 0, `có người lách đèn đỏ (${jaywalked} mẫu người-giây, ${crossers} mẫu người đang qua đường)`);
  ok(maxJay <= 2, `tối đa ${maxJay} người lách đèn cùng lúc ở một ngã tư`);
}

console.log(fail ? `\n${fail} lỗi` : '\nTất cả PASS');
process.exit(fail ? 1 : 0);
