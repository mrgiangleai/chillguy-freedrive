// Kiểm src/nycSound.js bằng audio giả: số còi xe (Times Square > ngoài > trong hầm), còi hụ 3–12 lần / 10 phút, đám đông chỉ quanh Times Square, tắt map thì im.
import { NycSound } from '../src/nycSound.js';
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
function run(st, secs, dt = 0.05) {
  const log = { horn: [], siren: [], chat: [] };
  const a = { horn: (p, v) => log.horn.push([p, v]), setSiren: (k, l, p) => log.siren.push([k, l, p ?? 0]), setChatter: (s, l, p, c) => log.chat.push([s, l, p ?? 0, c ?? 0]) };
  const n = new NycSound(a, rnd);
  for (let t = 0; t < secs; t += dt) n.update(dt, typeof st === 'function' ? st(t) : st);
  return { log, n };
}
const base = { on: true, L: 5543, speed: 10, tunnel: 0, tsA: 470, tsB: 960 };
const fail = []; const ok = (c, m) => { if (!c) fail.push(m); };
const ts = run({ ...base, s: 5543 + 700 }, 600).log, out = run({ ...base, s: 2000 }, 600).log, tun = run({ ...base, s: 2900, tunnel: 1 }, 600).log;
console.log('horns TS/out/tunnel', ts.horn.length, out.horn.length, tun.horn.length);
ok(ts.horn.length > 150 && ts.horn.length < 450, 'TS horns ~0.4/s');
ok(out.horn.length > 70 && out.horn.length < ts.horn.length, 'outside horns fewer than TS');
ok(tun.horn.length < out.horn.length * 0.6, 'tunnel horns muffled');
ok(ts.horn.every(([p, v]) => Math.abs(p) <= 1 && v > 0 && v <= 0.5), 'horn pan/vol range');
const sir = ts.siren.filter((x) => x[0] === 'wail');
ok(ts.siren.every((x) => x[0] === 'wail'), 'siren kind wail');
let events = 0, prev = 0; for (const [, l] of sir) { if (l > 0.02 && prev <= 0.02) events++; prev = l; }
console.log('siren events', events, 'max', Math.max(...sir.map((x) => x[1])).toFixed(2));
ok(events >= 3 && events <= 12, 'sirens 3..12 events in 10 min');
ok(sir.every((x) => x[1] >= 0 && x[1] <= 0.41 && Math.abs(x[2]) <= 1), 'siren level/pan range');
const c3 = ts.chat.filter((c) => c[0] === 3), c4 = ts.chat.filter((c) => c[0] === 4);
ok(ts.chat.every((c) => c[0] === 3 || c[0] === 4), 'chatter only slots 3/4');
ok(c3.length > 100 && c4.length > 100 && c3.at(-1)[1] > 0.6 && c3.at(-1)[3] === 1, 'TS crowd loud');
ok(out.chat.length === 0, 'no crowd far from TS (s=2000)');
const near = run({ ...base, s: 1050 }, 5).log.chat.filter((c) => c[0] === 3);
ok(near.length && near.at(-1)[1] > 0.2 && near.at(-1)[1] < 0.5, 'crowd fades with distance (90 m)');
const wrap = run({ ...base, s: 5543 * 2 + 400 }, 5).log.chat.filter((c) => c[0] === 3);
ok(wrap.length && wrap.at(-1)[1] > 0.4, 'wrap-aware distance');
// tắt map
const off = run((t) => ({ ...base, s: 700, on: t < 2 }), 6).log;
const lastOn = 2; let afterOff = 0;
ok(off.siren.some((x) => x[1] === 0) && off.chat.some((c) => c[0] === 3 && c[1] === 0) && off.chat.some((c) => c[0] === 4 && c[1] === 0), 'off silences');
const n2 = run({ ...base, s: 700, on: false }, 30).log;
ok(n2.horn.length === 0 && n2.siren.length <= 1 && n2.chat.length <= 2, 'no calls while off');
console.log(fail.length ? 'FAIL:\n- ' + fail.join('\n- ') : 'PASS');
