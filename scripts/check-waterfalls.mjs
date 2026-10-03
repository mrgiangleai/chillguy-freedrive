import assert from 'node:assert/strict';
import {Road,ROAD} from '../src/road.js';
import {Terrain} from '../src/terrain.js';
import {setTerrainMap} from '../src/terrain-noise.js';
import {waterfallSpec,waterfallGeometry,Waterfalls} from '../src/waterfalls.js';
setTerrainMap('mountain');
const road=new Road();road.ensure(7000);road.recomputeHeights();
const terrain=Object.create(Terrain.prototype);terrain.road=road;terrain.setCar(100);
const anchor=terrain.iCar,widths=new Set(),flows=new Set();
for(let i=0;i<1000;i++){
 const s=waterfallSpec(i);assert(s.width>=2&&s.width<=5);assert(s.flow>=.25&&s.flow<=1);
 assert.deepEqual(s,waterfallSpec(i));widths.add(s.width);flows.add(s.flow);
}
assert(widths.size>950&&flows.size>950);
const nearRoad=(x,z)=>{let best=Infinity;for(const p of road.pts)best=Math.min(best,Math.hypot(p.x-x,p.z-z));return best;};
let rocks=0,rows=0,under=0,checked=0;
for(let i=0;i<10;i++){
 const spec=waterfallSpec(i),g=waterfallGeometry(spec,road,terrain),o=g.origin,ry=road.at(spec.s,{}).y;
 assert.equal(terrain.iCar,anchor,'terrain anchor restored');
 for(const geo of [g.water,g.wet]){
  assert([...geo.attributes.position.array].every(Number.isFinite));
  const cols=geo.attributes.position.count/g.nodes.length;assert(Number.isInteger(cols));
  assert.equal(geo.index.count,(g.nodes.length-1)*(cols-1)*6);
  const w=geo.attributes.aWUV;
  for(let r=1;r<g.nodes.length;r++){assert(w.getY(r*cols)>=w.getY((r-1)*cols));assert(w.getZ(r*cols)>w.getZ((r-1)*cols),'flow time increases downstream');}
 }
 const n=g.nodes;rows+=n.length;
 assert(n[0].y>ry+60,'source high on the mountain side');assert(n[n.length-1].y<ry-60,'ends low in the ravine');
 const onRoad=n.filter(x=>x.road);assert.equal(onRoad.length,17,'crosses both lanes');
 // nước trên đường cao hơn mặt nhựa; ngoài đường cao hơn địa hình
 const p=g.water.attributes.position,cols=p.count/n.length;
 n.forEach((node,r)=>{
  for(let j=0;j<cols;j++){
   const k=r*cols+j,x=p.getX(k)+o.x,y=p.getY(k)+o.y,z=p.getZ(k)+o.z;
   if(node.road){if(Math.abs(node.d)<=ROAD.halfWidth)assert(y>=Math.min(...node.ys)+.03,'water above asphalt');}
   else if(r%5===0){checked++;terrain.setCar(spec.s);const h=terrain.heightAt(x,z);terrain.iCar=anchor;if(y<h+.02)under++;assert(y>h-.15,'water far below terrain');}
  }
 });
 // đá không nằm trên mặt đường / sát cọc tiêu, hộ lan
 for(const r of g.rocks){assert(nearRoad(r.x+o.x,r.z+o.z)>ROAD.halfWidth+1,'rock on road');rocks++;}
 g.water.dispose();g.wet.dispose();
}
assert(under/checked<.03,`water under terrain at ${under}/${checked} samples`);
const fake={group:{visible:false},items:new Map(),_remove(){throw Error('unexpected item');}};
Waterfalls.prototype.setMap.call(fake,'mountain');assert(fake.group.visible);
Waterfalls.prototype.setMap.call(fake,'forest');assert(!fake.group.visible);
console.log(`PASS: 1000 seeded widths/flows; 10 streams (${rows} cross-sections) mountain→road→ravine: finite meshes, monotonic flow time, water above asphalt and terrain (${under}/${checked} low samples), ${rocks} bank rocks off the road, anchor restoration, mountain-only visibility.`);
