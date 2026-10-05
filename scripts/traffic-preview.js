// Fixture kiểm tra tương tác thật: một xe đối đầu người chơi + một cặp NPC nhanh/chậm.
import '../src/main.js';
import { CARS } from '../src/config.js';
const label=document.createElement('div');label.id='traffic-check-status';
label.style.cssText='position:fixed;top:65px;left:16px;color:white;font:13px monospace;z-index:50';
label.textContent='Traffic check: waiting for start';document.body.append(label);
let busy=false;
const timer=setInterval(async()=>{
 const app=window.__app;if(busy||!app?.state.started||!app.cars.current)return;
 busy=true;app.traffic.wait=app.traffic.timer=1e9;app.traffic.loading=true;
 app.env.snapWeather('clear');app.env.setTime(15);app.env.hour=15;
 app.state.cam=0;app.rig.setMode(0);
 let collisions=0, detected=false, held=false, anchor=0;
 try {
  const entries=[];
  for(let i=0;i<3;i++) entries.push(await app.cars._load(CARS.find(c=>c.id==='mustang')));
  for(const [i,spec] of [[35,app.drive.d,200],[100,-1.8,50],[132,-1.8,200]].entries()){
   const entry=entries[i];
   const v=app.traffic._vehicle(entry);
   v.s=app.drive.s+spec[0];v.direction=-1;v.d=v.baseD=spec[1];v.cruise=v.v=spec[2]/3.6;
   v.busy=true;v.root.visible=true;app.traffic.pool.push(v);app.traffic.active.push(v);
  }
  const sample=setInterval(()=>{
   const active=app.traffic.active;
   detected ||= active.some(v=>v.avoiding);
   if (!held && active.some(v=>v.avoiding && Math.abs(v.d-v.baseD)>1)) {
    held=true;anchor=app.drive.s;app.traffic.update=()=>{};
   }
   if (held) {app.drive.s=anchor;app.drive.v=0;}
   const bodies=[{s:app.drive.s,d:app.drive.d,dim:app.cars.dim},...active];
   for(let a=0;a<bodies.length;a++)for(let b=a+1;b<bodies.length;b++){
    const x=bodies[a],y=bodies[b];
    if(Math.abs(x.s-y.s)<(x.dim.length+y.dim.length)/2 && Math.abs(x.d-y.d)<(x.dim.width+y.dim.width)/2)collisions++;
   }
   label.textContent=`Traffic check: ${active.length} NPCs; cruise 200/50/200 km/h; avoidance=${detected}; overlaps=${collisions}; paused=${held}`;
  },30);
  window.addEventListener('pagehide',()=>clearInterval(sample),{once:true});
 }catch(e){label.textContent='Traffic check failed: '+e.message;}
 clearInterval(timer);
},100);
