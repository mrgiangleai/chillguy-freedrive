import assert from 'node:assert/strict';
import {Road,ROAD} from '../src/road.js';
import {Terrain} from '../src/terrain.js';
import {setTerrainMap} from '../src/terrain-noise.js';
import {waterfallSpec,waterfallGeometry,Waterfalls} from '../src/waterfalls.js';
setTerrainMap('mountain');
const road=new Road();road.ensure(7000);
const terrain=Object.create(Terrain.prototype);terrain.road=road;terrain.setCar(100);
const anchor=terrain.iCar,widths=new Set(),flows=new Set();
for(let i=0;i<1000;i++){
 const s=waterfallSpec(i);assert(s.width>=2&&s.width<=5);assert(s.flow>=.25&&s.flow<=1);
 assert.deepEqual(s,waterfallSpec(i));widths.add(s.width);flows.add(s.flow);
}
assert(widths.size>950&&flows.size>950);
for(let i=0;i<10;i++){
 const spec=waterfallSpec(i),g=waterfallGeometry(spec,road,terrain),p=g.attributes.position,u=g.attributes.uv;
 assert.equal(terrain.iCar,anchor);assert([...p.array].every(Number.isFinite));
 const mid=4,last=p.count-5,ry=road.at(spec.s,{}).y;
 assert(p.getY(mid)>ry+100);assert(p.getY(last)<ry-80);
 let crossing=0;
 for(let k=4;k<p.count;k+=9){
  const center=road.at(spec.s,{}),d=(p.getX(k)-center.x)*Math.cos(center.th)-(p.getZ(k)-center.z)*Math.sin(center.th);
  if(Math.abs(d)<=ROAD.halfWidth+.001){assert(p.getY(k)>ry+.05);crossing++;}
  if(k>4)assert(u.getY(k)>u.getY(k-9));
 }
 assert(crossing>=7);assert.equal(g.index.count,(p.count/9-1)*8*6);g.dispose();
}
const fake={group:{visible:false},items:new Map(),_remove(){throw Error('unexpected item');}};
Waterfalls.prototype.setMap.call(fake,'mountain');assert(fake.group.visible);
Waterfalls.prototype.setMap.call(fake,'forest');assert(!fake.group.visible);
console.log('PASS: 1000 seeded widths/flows; 10 continuous mountain→road→ravine meshes; road clearance, finite vertices, anchor restoration and mountain-only visibility.');
