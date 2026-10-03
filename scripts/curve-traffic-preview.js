import '../src/main.js';
import {CARS} from '../src/config.js';
const label=document.createElement('div');label.style.cssText='position:fixed;top:65px;left:16px;color:white;font:13px monospace;z-index:50';document.body.append(label);
label.textContent='Same traffic: waiting';let ready=false;
const timer=setInterval(async()=>{
 const a=window.__app;if(ready||!a?.state.started||!a.cars.current)return;ready=true;
 a.traffic.wait=a.traffic.timer=a.traffic.sameTimer=1e9;a.env.setTime(19);a.env.hour=19;a.env.snapWeather('clear');a.rig.setMode(0);a.state.cam=0;
 const v=a.traffic._vehicle(await a.cars._load(CARS.find(c=>c.id==='mustang-blue')));
 Object.assign(v,{direction:1,busy:true,s:a.drive.s+20,d:1.8,baseD:1.8,v:200/3.6,cruise:200/3.6});v.root.visible=true;a.traffic.pool.push(v);a.traffic.active.push(v);
 const update=a.traffic.update.bind(a.traffic);a.traffic.update=(...args)=>{a.drive.s=150;v.s=170;update(...args);label.textContent=`Same traffic: direction=${v.direction}; cruise=${(v.cruise*3.6).toFixed(0)} km/h; speed=${(v.v*3.6).toFixed(0)} km/h; curve=${v.inCurve}`;};clearInterval(timer);
},100);
