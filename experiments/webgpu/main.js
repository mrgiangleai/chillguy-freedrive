import * as THREE from 'three/webgpu';
import WebGPU from 'three/addons/capabilities/WebGPU.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const hud=document.querySelector('#hud');
if(!WebGPU.isAvailable()){hud.textContent='WebGPU unavailable';throw new Error('WebGPU unavailable')}
const renderer=new THREE.WebGPURenderer({antialias:true});await renderer.init();renderer.setPixelRatio(Math.min(devicePixelRatio,2));document.querySelector('#app').appendChild(renderer.domElement);renderer.shadowMap.enabled=true;renderer.toneMapping=THREE.ACESFilmicToneMapping;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x9db7c7);scene.fog=new THREE.FogExp2(0x9db7c7,.006);
const camera=new THREE.PerspectiveCamera(45,1,.05,2000);camera.position.set(6,3.5,8);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.07;controls.target.set(0,2,0);controls.minDistance=.25;controls.maxDistance=80;controls.zoomToCursor=true;
const hemi=new THREE.HemisphereLight(0xcde6ff,0x5b6546,2);scene.add(hemi);const sun=new THREE.DirectionalLight(0xfff0d0,3);sun.position.set(-20,30,10);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);scene.add(sun);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshStandardMaterial({color:0x587047,roughness:1}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
const road=new THREE.Mesh(new THREE.PlaneGeometry(8,400),new THREE.MeshStandardMaterial({color:0x303033,roughness:.9}));road.rotation.x=-Math.PI/2;road.position.y=.015;road.receiveShadow=true;scene.add(road);
const treeGeo=new THREE.ConeGeometry(.8,4,7),treeMat=new THREE.MeshStandardMaterial({color:0x29452b});for(let i=0;i<180;i++){const m=new THREE.Mesh(treeGeo,treeMat);const side=i%2?1:-1;m.position.set(side*(7+(i%9)*1.5),2,-180+i*2);m.scale.setScalar(.65+(i%5)*.1);m.castShadow=true;scene.add(m)}
const clock=new THREE.Clock();let mixer=null,venom=null,loadMs=0,clips=[],meshInfo=[];
hud.textContent='Loading 108 MB Venom GLB…';const t0=performance.now();const gltf=await new GLTFLoader().loadAsync('/models/venom.glb');loadMs=performance.now()-t0;venom=gltf.scene;clips=gltf.animations;
const box=new THREE.Box3().setFromObject(venom),sz=new THREE.Vector3();box.getSize(sz);const scale=4/Math.max(.001,sz.y);venom.scale.setScalar(scale);const box2=new THREE.Box3().setFromObject(venom);venom.position.y=-box2.min.y;
venom.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;meshInfo.push({o,mat:o.material,visible:o.visible})}});scene.add(venom);
if(clips.length){mixer=new THREE.AnimationMixer(venom);mixer.clipAction(clips[0]).play()}
controls.target.set(0,2,0);controls.update();
const state={shadow:true,pbr:true,texture:true,fog:true,animation:true,full:true};
const flat=new THREE.MeshStandardMaterial({color:0x777777,roughness:1,metalness:0});
function apply(){
 renderer.shadowMap.enabled=state.shadow;sun.castShadow=state.shadow;ground.receiveShadow=state.shadow;road.receiveShadow=state.shadow;
 scene.fog=state.fog?new THREE.FogExp2(0x9db7c7,.006):null;
 meshInfo.forEach(({o,mat})=>{o.castShadow=o.receiveShadow=state.shadow;if(!state.pbr){o.material=flat;return}o.material=mat;if(!state.texture){const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){if(!m.userData._maps){m.userData._maps={map:m.map,normalMap:m.normalMap,roughnessMap:m.roughnessMap,metalnessMap:m.metalnessMap,emissiveMap:m.emissiveMap,aoMap:m.aoMap}}m.map=m.normalMap=m.roughnessMap=m.metalnessMap=m.emissiveMap=m.aoMap=null;m.needsUpdate=true}}else{const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){const s=m.userData._maps;if(s){Object.assign(m,s);m.needsUpdate=true}}}});
 state.full=state.shadow&&state.pbr&&state.texture&&state.fog&&state.animation;renderPanel();
}
const panel=document.createElement('div');panel.id='panel';panel.style.cssText='position:fixed;right:16px;top:16px;z-index:3;background:#000b;color:#fff;padding:12px;border-radius:10px;font:13px system-ui;display:grid;gap:7px;min-width:170px';document.body.appendChild(panel);
function renderPanel(){panel.innerHTML='<b>WebGPU benchmark</b>'+[['shadow','Shadow'],['pbr','PBR / reflection'],['texture','Textures'],['fog','Fog'],['animation','Animation']].map(([k,n])=>'<button data-k="'+k+'" style="padding:7px;text-align:left">'+(state[k]?'✓ ':'○ ')+n+'</button>').join('')+'<button data-k="full" style="padding:8px;font-weight:700">'+(state.full?'✓ FULL':'FULL — bật tất cả')+'</button><small>Chuột trái: xoay<br>Chuột phải: pan<br>Wheel: zoom<br>R: reset camera</small>';panel.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=b.dataset.k;if(k==='full'){for(const x of ['shadow','pbr','texture','fog','animation'])state[x]=true}else state[k]=!state[k];apply()})}renderPanel();
addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){camera.position.set(6,3.5,8);controls.target.set(0,2,0);controls.update()}});
let frames=0,last=performance.now(),fps=0;function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix()}addEventListener('resize',resize);resize();
renderer.setAnimationLoop(()=>{const dt=Math.min(.05,clock.getDelta());if(state.animation)mixer?.update(dt);controls.update();frames++;const t=performance.now();if(t-last>=1000){fps=frames*1000/(t-last);frames=0;last=t;hud.textContent='WebGPU + Venom | '+fps.toFixed(1)+' FPS\n108.2 MB | 89,528 tris | 10 textures\n190 animations | load '+(loadMs/1000).toFixed(2)+'s\nCamera: orbit / pan / zoom'}renderer.render(scene,camera)});
