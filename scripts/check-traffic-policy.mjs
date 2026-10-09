import assert from 'node:assert/strict';
import {TrafficPolicy} from '../src/traffic-policy.js';
import {Traffic} from '../src/traffic.js';
import * as THREE from 'three';
import { HEADLIGHT_DEFAULTS } from '../src/headlights.js';
const policy=new TrafficPolicy();
Object.assign(policy.player,{s:130,d:1.5,v:14,len:4.7,w:2,home:1.5});
const a={s:100,d:1.8,v:30,dir:1,len:4.7,w:2,home:1.8,state:'cruise',target:null};
policy.active=[a];assert(policy._canOvertake(a,policy.player,30),'Empty passing lane');
const oncoming={s:200,d:-1.8,v:30,dir:-1,len:4.7,w:2,home:-1.8};
policy.active.push(oncoming);assert(!policy._canOvertake(a,policy.player,30),'Oncoming inside 50 m beyond overtaken car');
oncoming.s=280;assert(!policy._canOvertake(a,policy.player,30),'Oncoming arrives before pass finishes');
policy.active=[a];assert(policy._decide(a,30).dT<0,'May overtake if clear');
policy.active.push(oncoming);a.state='cruise';a.target=null;assert(policy._decide(a,30).dT>0,'Wait in own lane if unsafe');
// xe ngược chiều không bao giờ vượt nhau: làn bên kia trống vẫn bám sau và giảm tốc
{const p2=new TrafficPolicy();Object.assign(p2.player,{s:-500,d:1.5,v:0,len:4.7,w:2,home:1.5});
const slow={s:100,d:-1.8,v:14,dir:-1,len:4.7,w:2,home:-1.8,state:'cruise',target:null};
const fast={s:130,d:-1.8,v:40,dir:-1,len:4.7,w:2,home:-1.8,state:'cruise',target:null,noOvertake:true};
p2.active=[slow,fast];const r=p2._decide(fast,40);assert(r.dT<0&&r.vT<40,'Oncoming NPC must follow, not overtake');assert.equal(fast.state,'cruise');}
const scene=new THREE.Scene(),cars={softTex:new THREE.Texture(),list:[{id:'npc'}],_load:async()=>({group:new THREE.Group(),dim:{width:2,length:4.7,height:1.3},wheels:[]})};
const t=new Traffic(scene,cars);await t._load('player');t.timer=t.sameTimer=1e9;
const v=t.pool[0];Object.assign(v,{s:160,d:-1.8,baseD:-1.8,v:50/3.6,cruise:50/3.6,direction:-1,busy:true});t.active.push(v);
const road={at(s,p){Object.assign(p,{x:0,y:0,z:-s,th:0});return p;}};
let passes=0;const audio={passDur:()=>2,passBy(){passes++;}};
for(let i=0;i<100;i++)t.update(.05,150,1.5,road,1,'player',[{id:'player',s:150,d:1.5,speed:25/3.6,direction:1,width:2,length:4.7}],audio);
assert.equal(passes,1,'One pass-by sound per encounter');assert(Math.abs(t.beam.spots[0].intensity-HEADLIGHT_DEFAULTS.intensity*0.24)<1e-9);
assert(t.ctrl&&Number.isFinite(t.ctrl.lane));
console.log('PASS: upstream 50 m overtaking visibility, closing-time rejection, clear-lane pass, unsafe-lane wait; oncoming NPCs never overtake; actual merged Traffic pass-by once and headlights = 24% of the player beam.');
// xe ngựa: chạy trên mặt đường như NPC (không đèn), 15–30 s/chiếc, tối đa 2; xe ngược chiều sinh theo làn nhà của xe mình
{const t2=new Traffic(new THREE.Scene(),cars);await t2._load('player');t2.timer=t2.sameTimer=1e9;t2.playerHome=1.5;
 t2.makeCarriage=()=>({group:new THREE.Group(),dim:{length:5.6,width:2.8,height:2.4},wheels:[],mixer:null,carriage:true});t2.carriageTimer=0;
 const random=Math.random;Math.random=()=>0.1;
 try{t2.update(.05,150,-1.5,road,1,'player',[{id:'player',s:150,d:-1.5,speed:10,direction:1,width:2,length:4.7}]);}finally{Math.random=random;}
 const c=t2.active.find(v=>v.carriage);assert(c,'carriage spawned');assert.equal(c.direction,-1);
 assert.equal(c.baseD,-1.8,'oncoming carriage keeps the oncoming lane even while the player is overtaking on the left');
 assert(t2.carriageTimer>=15&&t2.carriageTimer<=30);assert.equal(c.tails.length,0);assert.equal(c.headlights.glows.length,0);
 assert.equal(c.root.position.y,0,'carriage drives on the road surface');}
console.log('PASS: carriage spawns as an on-road NPC (no lights), 15–30 s cadence, home-lane spawn.');
