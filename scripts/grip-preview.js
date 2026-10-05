import '../src/main.js';
import * as THREE from 'three';
const label=document.createElement('div');label.style.cssText='position:fixed;top:65px;left:10px;color:white;font:12px monospace;z-index:50';document.body.append(label);
let ready=false,steering=0;
for(const [name,value] of [['Lái trái',-2],['Thẳng',0],['Lái phải',2]]){
 const b=document.createElement('button');b.textContent=name;b.style.cssText='position:relative;z-index:51';b.onclick=()=>steering=value;document.body.append(b);
}
const timer=setInterval(()=>{
 const a=window.__app;if(!a?.state.started||!a.person.ready||!a.cars.current)return;
 if(!ready){ready=true;a.env.snapWeather('clear');a.env.setTime(15);a.env.hour=15;a.rig.setMode(3);a.state.cam=3;a.traffic.wait=a.traffic.timer=a.traffic.sameTimer=1e9;
 const update=a.cars.update.bind(a.cars);a.cars.update=(dt,st)=>update(dt,{...st,latVel:steering});}
 const sw=a.cars.current.steer,n=new THREE.Vector3(...sw.n).normalize(),right=new THREE.Vector3(1,0,0),up=new THREE.Vector3().crossVectors(n,right),c=new THREE.Vector3(...sw.c);
 let error=0,minBend=180;
 for(const [side,angle] of [['r',-.08],['l',Math.PI+.08]]){
  const [shoulder,elbow,hand]=a.person.arms[side],w=new THREE.Vector3();hand.getWorldPosition(w);a.cars.tilt.worldToLocal(w);
  const theta=angle+(a.cars.steerAngle||0),target=c.clone().addScaledVector(right,Math.cos(theta)*(sw.r+.02)).addScaledVector(up,Math.sin(theta)*(sw.r+.02)).addScaledVector(n,.065);
  error=Math.max(error,w.distanceTo(target));
  const s=new THREE.Vector3(),e=new THREE.Vector3(),h=new THREE.Vector3();shoulder.getWorldPosition(s);elbow.getWorldPosition(e);hand.getWorldPosition(h);
  minBend=Math.min(minBend,180-THREE.MathUtils.radToDeg(s.sub(e).angleTo(h.sub(e))));
 }
 label.textContent=`Grip: ${error<.003?'PASS':'FAIL'}; wrist error=${(error*1000).toFixed(2)} mm; elbow bend=${minBend.toFixed(0)}°; steering=${THREE.MathUtils.radToDeg(a.cars.steerAngle||0).toFixed(0)}°`;
},150);
