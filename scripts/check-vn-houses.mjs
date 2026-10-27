import { vnPlace } from '../src/vnHouses.js';

function makeRnd(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function widthOf(list) {
  if (list.length === 0) return 0;
  const models = [
    { target: 4.2 },
    { target: 4.5 },
    { target: 5 },
    { target: 5.5 },
    { target: 16 },
  ];
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    const mi = list[i].model;
    const tw = models[mi] ? models[mi].target : 4.5;
    const sc = list[i].scale !== undefined ? list[i].scale : 1;
    total += tw * sc;
  }
  if (list.length >= 2) total += 0.25 * (list.length - 1);
  return total;
}

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log('OK:', name);
    passed++;
  } catch (e) {
    console.error('FAIL:', name, e.message);
    failed++;
  }
}

// never exceeds w
test('never exceeds w', () => {
  for (let w = 4; w < 50; w += 0.5) {
    const r = makeRnd(w * 123);
    const list = vnPlace(w, r);
    const tw = widthOf(list);
    if (tw > w + 1e-6) throw new Error('exceeds ' + tw + ' > ' + w);
  }
});

// mini-apartment only when w >= 14
test('mini-apartment only when w >= 14', () => {
  for (let w = 4; w < 14; w += 0.1) {
    const r = makeRnd(w);
    const list = vnPlace(w, r);
    for (let i = 0; i < list.length; i++) {
      if (list[i].model === 4) throw new Error('mini in small lot');
    }
  }
  // w >= 14 should be able to get mini
  const r = makeRnd(12345);
  const list = vnPlace(16, r);
  const hasMini = list.some((l) => l.model === 4);
  if (!hasMini) throw new Error('mini should be possible for w>=14');
});

// at least one house for w >= 4
test('at least one house for w >= 4', () => {
  for (let w = 4; w < 20; w += 0.1) {
    const r = makeRnd(w * 7);
    const list = vnPlace(w, r);
    if (list.length < 1) throw new Error('no house for ' + w);
  }
});

// deterministic for the same rnd sequence
test('deterministic', () => {
  const r1 = makeRnd(999);
  const r2 = makeRnd(999);
  for (let w = 4; w < 30; w += 1) {
    const l1 = vnPlace(w, r1);
    const l2 = vnPlace(w, r2);
    if (l1.length !== l2.length) throw new Error('len diff');
    for (let i = 0; i < l1.length; i++) {
      if (l1[i].model !== l2[i].model) throw new Error('model diff');
      if (Math.abs(l1[i].offset - l2[i].offset) > 1e-9) throw new Error('offset diff');
    }
  }
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
process.exit(0);
