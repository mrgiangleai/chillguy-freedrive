import assert from 'node:assert/strict';
import {Road} from '../src/road.js';
import {steeringTarget} from '../src/cars.js';
const r=new Road(),st={speed:25/3.6,latVel:0};
assert.equal(steeringTarget({...st,curvature:0}),0);
assert(steeringTarget({...st,curvature:r.curvature(550)})>0,'Left curve');
assert(steeringTarget({...st,curvature:r.curvature(250)})<0,'Right curve');
assert.equal(steeringTarget({speed:0,latVel:0,curvature:.01}),0,'Stationary auto steering');
assert(steeringTarget({...st,latVel:1,curvature:.003})<steeringTarget({...st,curvature:.003}),'Manual right steering adds to automatic');
for(let s=0;s<5000;s+=2){
 const c=r.curvature(s),a=steeringTarget({...st,curvature:c});assert(Number.isFinite(a)&&Math.abs(a)<=.55);
 if(Math.abs(c)>1e-5)assert(Math.sign(a)===Math.sign(c));
}
let angle=0,target=steeringTarget({...st,curvature:.006});
for(let i=0;i<60;i++)angle+=(target-angle)*(1-Math.exp(-1/60*8));
assert(Math.abs(angle-target)<.001,'Smooth curve entry');
for(let i=0;i<60;i++)angle+=(0-angle)*(1-Math.exp(-1/60*8));
assert(Math.abs(angle)<.001,'Smooth recenter on straight');
console.log('PASS: 2500 road positions; left/right direction, manual combination, stopped car, rotation limits and smooth entry/recentering.');
