import '../src/main.js';
import {waterfallSpec} from '../src/waterfalls.js';
const label=document.createElement('div');label.style.cssText='position:fixed;top:65px;left:16px;color:white;font:13px monospace;z-index:50';
label.textContent='Waterfalls check: waiting for start';document.body.append(label);
const button=document.createElement('button');button.textContent='Xem toàn thác';button.style.cssText='position:fixed;top:90px;left:16px;z-index:50';document.body.append(button);
let wide=false;button.onclick=()=>{wide=!wide;button.textContent=wide?'Xem dòng nước trên đường':'Xem toàn thác';};
let ready=false;
const timer=setInterval(()=>{
 const a=window.__app;if(ready||!a?.state.started||!a.cars.current)return;
 ready=true;const spec=waterfallSpec(0);a.drive.s=spec.s-14;
 a.env.snapWeather('clear');a.env.setTime(15);a.env.hour=15;a.rig.setMode(0);a.state.cam=0;
 a.traffic.wait=a.traffic.timer=1e9;
 const original=a.rig.update.bind(a.rig);
 a.rig.update=(...args)=>{
  a.drive.s=spec.s-14;
  original(...args);
  const p=a.road.at(spec.s,{}),right={x:Math.cos(p.th),z:-Math.sin(p.th)},forward={x:Math.sin(p.th),z:Math.cos(p.th)};
  const d=wide?90:11,along=wide?100:24;
  a.camera.position.set(p.x+right.x*d+forward.x*along,p.y+(wide?65:6),p.z+right.z*d+forward.z*along);
  a.camera.lookAt(p.x-right.x*(wide?70:6),p.y+(wide?52:8),p.z-right.z*(wide?70:6));
  a.camera.fov=wide?75:68;a.camera.updateProjectionMatrix();
  label.textContent=`Waterfalls check: width=${spec.width.toFixed(2)} m; flow=${spec.flow.toFixed(2)}; loaded=${a.waterfalls.items.size}; ${wide?'overview':'road crossing'}`;
 };
 clearInterval(timer);
},100);
