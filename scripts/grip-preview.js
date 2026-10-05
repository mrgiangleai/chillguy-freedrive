const key='mustang-grip-original-quality';
if(!sessionStorage.getItem(key)) sessionStorage.setItem(key,JSON.stringify(localStorage.getItem('chilldrive.quality')));
localStorage.setItem('chilldrive.quality','low');
await import('../src/main.js');
import * as THREE from 'three';
const label=document.createElement('div');label.style.cssText='position:fixed;top:65px;left:10px;color:white;font:12px monospace;z-index:50';document.body.append(label);
let ready=false,steering=0;
for(const [name,value] of [['Lái trái',-2],['Thẳng',0],['Lái phải',2],['Trả chất lượng',null]]){
 const b=document.createElement('button');b.textContent=name;b.style.cssText='position:relative;z-index:51';b.onclick=()=>{if(value===null){const old=JSON.parse(sessionStorage.getItem(key));old==null?localStorage.removeItem('chilldrive.quality'):localStorage.setItem('chilldrive.quality',old);sessionStorage.removeItem(key);}else steering=value;};document.body.append(b);
}
const timer=setInterval(()=>{
 const a=window.__app;if(!a?.state.started||!a.person.ready||!a.cars.current)return;
 if(!ready){ready=true;a.env.snapWeather('clear');a.env.setTime(15);a.env.hour=15;a.rig.setMode(3);a.state.cam=3;a.traffic.wait=a.traffic.timer=a.traffic.sameTimer=1e9;
 a.drive.s=20; const rigUpdate=a.rig.update.bind(a.rig);a.rig.update=(...args)=>{a.drive.s=20;rigUpdate(...args);};
 const update=a.cars.update.bind(a.cars);a.cars.update=(dt,st)=>update(dt,{...st,curvature:0,latVel:steering});}
 const sw=a.cars.current.steer,n=new THREE.Vector3(...sw.n).normalize(),right=new THREE.Vector3(1,0,0),up=new THREE.Vector3().crossVectors(n,right),c=new THREE.Vector3(...sw.c);
 let error=0,minBend=180,contacts=0;
 for(const [side,angle] of [['r',-.08],['l',Math.PI+.08]]){
  const [shoulder,elbow,hand]=a.person.arms[side],w=new THREE.Vector3();hand.getWorldPosition(w);a.cars.tilt.worldToLocal(w);
  const theta=angle+(a.cars.steerAngle||0),target=c.clone().addScaledVector(right,Math.cos(theta)*(sw.r+(sw.grip?.radial??.02))).addScaledVector(up,Math.sin(theta)*(sw.r+(sw.grip?.radial??.02))).addScaledVector(n,sw.grip?.depth??.065);
  error=Math.max(error,w.distanceTo(target));
  const finger=a.person.gripFingers[side].getWorldPosition(new THREE.Vector3());a.cars.tilt.worldToLocal(finger);const direction=finger.clone().sub(w),reach=direction.length();
  const contact=w.clone().addScaledVector(right,-Math.cos(theta)*.025).addScaledVector(up,-Math.sin(theta)*.025);
  const ray=new THREE.Raycaster(contact.applyMatrix4(a.cars.tilt.matrixWorld),direction.transformDirection(a.cars.tilt.matrixWorld),0,reach);
  const rim=a.cars.current.steerPivot.children.filter(o=>/^Torus/.test(o.name));if(ray.intersectObjects(rim,false).length)contacts++;
  const s=new THREE.Vector3(),e=new THREE.Vector3(),h=new THREE.Vector3();shoulder.getWorldPosition(s);elbow.getWorldPosition(e);hand.getWorldPosition(h);
  minBend=Math.min(minBend,180-THREE.MathUtils.radToDeg(s.sub(e).angleTo(h.sub(e))));
 }
 label.textContent=`Grip: ${error<.003&&contacts===2?'PASS':'FAIL'}; wrist error=${(error*1000).toFixed(2)} mm; elbow bend=${minBend.toFixed(0)}°; steering=${THREE.MathUtils.radToDeg(a.cars.steerAngle||0).toFixed(0)}°; actual rim contact=${contacts}/2`;
},150);
