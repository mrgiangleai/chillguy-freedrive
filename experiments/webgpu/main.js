import * as THREE from 'three/webgpu';
import WebGPU from 'three/addons/capabilities/WebGPU.js';
const hud=document.querySelector('#hud');
if(!WebGPU.isAvailable()) { hud.textContent='WebGPU unavailable\n'+WebGPU.getErrorMessage().textContent; throw new Error('WebGPU unavailable'); }
const renderer=new THREE.WebGPURenderer({antialias:true});
await renderer.init(); renderer.setPixelRatio(Math.min(devicePixelRatio,2)); document.querySelector('#app').appendChild(renderer.domElement);
renderer.shadowMap.enabled=true; renderer.toneMapping=THREE.ACESFilmicToneMapping;
const scene=new THREE.Scene(); scene.background=new THREE.Color(0x9db7c7); scene.fog=new THREE.FogExp2(0x9db7c7,0.008);
const camera=new THREE.PerspectiveCamera(55,1,0.1,2000); camera.position.set(8,5,12);
scene.add(new THREE.HemisphereLight(0xcde6ff,0x5b6546,2.0)); const sun=new THREE.DirectionalLight(0xfff0d0,3); sun.position.set(-20,30,10); sun.castShadow=true; scene.add(sun);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshStandardMaterial({color:0x587047,roughness:1})); ground.rotation.x=-Math.PI/2; ground.receiveShadow=true; scene.add(ground);
const road=new THREE.Mesh(new THREE.PlaneGeometry(8,400),new THREE.MeshStandardMaterial({color:0x303033,roughness:.9})); road.rotation.x=-Math.PI/2; road.position.y=.015; scene.add(road);
const car=new THREE.Group(); const body=new THREE.Mesh(new THREE.BoxGeometry(2,0.65,4.3),new THREE.MeshStandardMaterial({color:0x111111,metalness:.65,roughness:.25})); body.position.y=.8; body.castShadow=true; car.add(body); const cabin=new THREE.Mesh(new THREE.BoxGeometry(1.65,.65,2),new THREE.MeshStandardMaterial({color:0x26323a,metalness:.2,roughness:.15})); cabin.position.set(0,1.35,.2); cabin.castShadow=true; car.add(cabin); scene.add(car);
const treeGeo=new THREE.ConeGeometry(.8,4,7), treeMat=new THREE.MeshStandardMaterial({color:0x29452b}); for(let i=0;i<180;i++){const m=new THREE.Mesh(treeGeo,treeMat); const side=i%2?1:-1; m.position.set(side*(7+(i%9)*1.5),2,-180+i*2); m.scale.setScalar(.65+(i%5)*.1); m.castShadow=true; scene.add(m)}
let frames=0,last=performance.now(),fps=0; function resize(){const w=innerWidth,h=innerHeight; renderer.setSize(w,h); camera.aspect=w/h; camera.updateProjectionMatrix()} addEventListener('resize',resize);resize();
renderer.setAnimationLoop(()=>{const t=performance.now(); frames++; if(t-last>=1000){fps=frames*1000/(t-last);frames=0;last=t;hud.textContent='Chill Drive WebGPU vertical slice\nThree '+THREE.REVISION+' | '+fps.toFixed(1)+' FPS\nroad + terrain + lighting + 180 trees';} car.position.z-=.08; if(car.position.z<-150)car.position.z=80; camera.position.z=car.position.z+12; camera.lookAt(car.position.x,1,car.position.z-5); renderer.render(scene,camera);});