import assert from 'node:assert/strict';
import { TRAFFIC, trafficSpeed, trafficCurveSpeed, stepTraffic, roadPosition } from '../src/traffic-ai.js';
import { Road } from '../src/road.js';
import { HEADLIGHT_DEFAULTS } from '../src/headlights.js';
const dt = 1 / 60;
const car = (s, d, kmh = 200) => ({ s, d, baseD: d, v: kmh / 3.6, cruise: kmh / 3.6, dim: { width: 2, length: 4.7 } });
const obstacle = (s, d, width = 2, length = 4.7, speed = 0, direction = 0, id = 'obstacle') => ({ id, s, d, width, length, speed, direction });
const overlap = (v, o) => Math.abs(v.s - o.s) < (v.dim.length + o.length) / 2 && Math.abs(v.d - o.d) < (v.dim.width + o.width) / 2;
for (let i = 0; i < 1000; i++) { const speed = trafficSpeed() * 3.6; assert(speed >= 50 && speed <= 200); }
assert.equal(TRAFFIC.maxActive, 2); assert.equal(TRAFFIC.sameMax, 1);
let v = car(0, -1.8), o = obstacle(-36, -1.8);
assert.equal(stepTraffic(v, [o], 4.6, dt).avoiding, false, 'Must not swerve before 30 m bumper gap');
o.s = -34.7;
assert.equal(stepTraffic(v, [o], 4.6, dt).avoiding, true, 'Must detect at 30 m bumper gap');
// xe lao tới 180 km/h: thấy từ 30 + 1.2 × 50 = 90 m
assert.equal(stepTraffic(v, [obstacle(-34.7 - 61, -1.8, 2, 4.7, 50, 1)], 4.6, dt).avoiding, false);
assert.equal(stepTraffic(v, [obstacle(-34.7 - 59, -1.8, 2, 4.7, 50, 1)], 4.6, dt).avoiding, true, 'Oncoming detected 1.2 s earlier');
let cases = 0;
for (const scenario of [
  { name: 'pedestrian', o: obstacle(-32, -1.8, .8, .8) },
  { name: 'parked player', o: obstacle(-34.7, -1.8) },
  // xe lao tới được thấy sớm hơn 1.2 s theo tốc độ của nó (đánh lái có gia tốc thật, không né tức thời)
  { name: 'head-on player at 180 km/h', o: obstacle(-34.7 - 1.2 * 180/3.6, -1.8, 2, 4.7, 180/3.6, 1) },
  { name: 'overtake 50 km/h NPC', o: obstacle(-34.7, -1.8, 2, 4.7, 50/3.6, -1) },
]) {
  v = car(0, -1.8); o = { ...scenario.o };
  let changed = false;
  for (let i = 0; i < 1200; i++) {
    Object.assign(v, stepTraffic(v, [o], 4.6, dt));
    o.s += o.speed * o.direction * dt;
    assert(!overlap(v, o), scenario.name + ' collision');
    assert(Math.abs(v.d) + v.dim.width/2 <= 4.35 + 1e-8, 'Leaves roadway');
    changed ||= Math.abs(v.d + 1.8) > .5;
  }
  assert(changed, scenario.name + ' did not avoid');
  assert(Math.abs(v.v - v.cruise) < .01, scenario.name + ' did not resume cruise');
  cases++;
}
v = car(0, -1.8);
const wall = [-3, 0, 3].map((d, i) => obstacle(-34.7, d, 3, 4.7, 0, 0, i));
for (let i = 0; i < 1200; i++) {
  Object.assign(v, stepTraffic(v, wall, 4.6, dt));
  assert(wall.every(o => !overlap(v,o)), 'Blocked road collision');
}
assert(v.v < .01 && v.s > -30, 'Must stop if no safe passage');
const fleet = [car(100,-1.8,200), car(65,-1.8,50), car(30,1.8,130)];
for(let i=0;i<900;i++) {
  const snapshot = fleet.map(v=>obstacle(v.s,v.d,2,4.7,v.v,-1,v));
  const steps = fleet.map(v=>stepTraffic(v,snapshot,4.6,dt));
  fleet.forEach((v,j)=>Object.assign(v,steps[j]));
  for(let a=0;a<fleet.length;a++) for(let b=a+1;b<fleet.length;b++)
    assert(!overlap(fleet[a],obstacle(fleet[b].s,fleet[b].d)), 'NPC-to-NPC collision');
}
const road=new Road(); road.ensure(1000);
for(const s of [150,350,750]) for(const d of [-3,0,3]) {
 const p=road.at(s,{}), point={x:p.x+Math.cos(p.th)*d,z:p.z-Math.sin(p.th)*d};
 const result=roadPosition(point,road,s);
 assert(Math.abs(result.s-s)<.1 && Math.abs(result.d-d)<.02,'Pedestrian road projection mismatch');
}
console.log(`PASS: 1000 random speeds; exact 30 m trigger; ${cases} avoidance scenarios at 200 km/h; blocked-road stop; 3-NPC encounter; curved-road pedestrian projection.`);
const {Traffic} = await import('../src/traffic.js');
const THREE = await import('three');
const fakeCars = { softTex:new THREE.Texture(), list:[{id:'npc-a'},{id:'npc-b'}], _load:async()=>({group:new THREE.Group(),dim:{width:2,length:4.7,height:1.3},wheels:[]}) };
const traffic = new Traffic(new THREE.Scene(),fakeCars);await traffic._load('player');
assert.equal(traffic.pool.length,3,'Pool must support two oncoming and one same-direction NPC');
const random=Math.random;Math.random=()=>0;
let spawns=0, max=0, playerS=150;
const straight={at(s,p){Object.assign(p,{x:0,y:0,z:-s,th:0});return p;}};
try {
 for(let i=0;i<2400;i++) {
  playerS+=(25/3.6)*.05;
  const before=new Set(traffic.active);
  traffic.update(.05,playerS,1.5,straight,0,'player',[obstacle(playerS,1.5,2,4.7,25/3.6,1,'player')]);
  spawns+=traffic.active.filter(v=>!before.has(v)).length;
  max=Math.max(max,traffic.active.filter(v=>v.direction===-1).length);
  assert(traffic.active.filter(v=>v.direction===-1).length<=2);
  assert(traffic.active.filter(v=>v.direction===1).length<=1);
  assert(traffic.active.every(v=>v.cruise*3.6>=50 && v.cruise*3.6<=200));
 }
} finally { Math.random=random; }
assert(max===2 && spawns>=5,`Spawn cadence too low: peak=${max}, spawns=${spawns}`);
console.log(`PASS: 120-second Traffic.update simulation, ${spawns} spawns, peak ${max} simultaneous NPCs, recycled pool.`);

for(const speed of [50,200]) {
 const forward={...car(100,1.8,speed),direction:1}, backward=car(-100,1.8,speed);
 const front=obstacle(134.7,1.8,2,4.7,50/3.6,1), back=obstacle(-134.7,1.8,2,4.7,50/3.6,-1);
 const a=stepTraffic(forward,[front],4.6,dt),b=stepTraffic(backward,[back],4.6,dt);
 assert(Math.abs(a.s+b.s)<1e-8&&Math.abs(a.d-b.d)<1e-8&&a.v===b.v,'Direction symmetry');
}
for(const kind of ['slow car','pedestrian','head-on']) {
 let v={...car(100,1.8),direction:1};
 const o=obstacle(134.7+(kind==='head-on'?1.2*200/3.6:0),1.8,kind==='pedestrian'?.8:2,4.7,kind==='slow car'?50/3.6:kind==='head-on'?200/3.6:0,kind==='slow car'?1:kind==='head-on'?-1:0);
 for(let i=0;i<1200;i++) {Object.assign(v,stepTraffic(v,[o],4.6,dt));o.s+=o.direction*o.speed*dt;assert(!overlap(v,o),kind+' forward collision');}
 assert(v.s>100,'Same-direction car must advance');
}
console.log('PASS: same-direction symmetry, overtaking, pedestrian and head-on avoidance.');
for(const sample of [0,1]) {
 const t=new Traffic(new THREE.Scene(),fakeCars);await t._load('player');t.timer=1e9;t.sameTimer=0;
 Math.random=()=>sample ? 1-Number.EPSILON : 0;
 try {
  t.update(.05,150,1.5,straight,1,'player',[]);
  assert(Math.abs(t.sameTimer-(sample?60:25))<1e-8);assert.equal(t.active.length,1);
  const v=t.active[0];assert.equal(v.direction,1);assert(v.s<150);assert.equal(v.baseD,1.8);
  assert(Math.abs(v.cruise*3.6-(sample?200:50))<1e-8);assert(Math.abs(t.beam.spots[0].intensity-HEADLIGHT_DEFAULTS.intensity*0.24)<1e-9);assert.equal(v.headlights.spots.length,0,'NPC has glows only');
  assert(Math.abs(v.root.rotation.y)<1e-8,'Same-direction yaw must face forward');
  const s=v.s;t.update(.05,150,1.5,straight,1,'player',[]);assert(v.s>s);
 } finally {Math.random=random;}
}
console.log('PASS: actual Traffic spawn at both random bounds: 25/60 seconds, 50/200 km/h, rear entry, forward motion/yaw, shared NPC beam = 24% of the player beam.');

for(const direction of [-1,1]) for(const kmh of [50,100,200]) {
 const curved={heading:s=>s*.003},flat={heading:()=>0};
 let v={...car(1000,1.8,kmh),direction};
 assert.equal(trafficCurveSpeed(v,curved),v.cruise*.6);assert(v.inCurve);
 for(let i=0;i<300;i++)Object.assign(v,stepTraffic(v,[],4.6,dt,trafficCurveSpeed(v,curved)));
 assert(Math.abs(v.v*3.6-kmh*.6)<1e-6,'Curve must settle at exactly 60% cruise');
 for(let i=0;i<600;i++)Object.assign(v,stepTraffic(v,[],4.6,dt,trafficCurveSpeed(v,flat)));
 assert(!v.inCurve&&Math.abs(v.v*3.6-kmh)<1e-6,'Must resume original cruise on straight');
 const stopped=stepTraffic(v,[obstacle(v.s+direction*10,1.8,9)],4.6,dt,trafficCurveSpeed(v,curved));
 assert(stopped.v<=v.v,'Obstacle braking must still take precedence');
}
const entering={...car(1000,1.8),direction:1};
const upcoming={heading:s=>Math.max(0,s-1060)*.003};
assert(trafficCurveSpeed(entering,upcoming)<entering.cruise,'Must brake before reaching curve');
assert.equal(trafficCurveSpeed({...entering,direction:-1},upcoming),entering.cruise,'Lookahead must follow travel direction');
console.log('PASS: both directions at 50/100/200 km/h reduce to 30/60/120, resume cruise, retain obstacle braking and anticipate curves in travel direction.');
