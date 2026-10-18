import * as THREE from 'three/webgpu';

export function createCharacterController({camera,controls,canvas,physics,groundAt}){
  let rig=null;
  const keys=new Set(),up=new THREE.Vector3(0,1,0);
  let jump=false;
  let camYaw=0,camPitch=0,camDist=4,dragging=false,lastX=0,lastY=0;
  let manual=false,stuck=0;const _prev=new THREE.Vector3();
  function clearInput(){keys.clear();jump=false}
  function groundY(x,z){return typeof groundAt==='function'?groundAt(x,z):0}
  function stop(){if(!rig)return;try{physics.endControl(rig.object)}catch(err){}rig=null;clearInput();manual=false;dragging=false;controls.target.copy(camera.position).add(new THREE.Vector3(0,0,-4).applyQuaternion(camera.quaternion));controls.enabled=true}
  function start(object,view){
    if(object.userData.editor?.category!=='character'||!object.visible)return;
    if(rig?.object===object){rig.view=view;canvas.focus();return}
    stop();object.updateMatrixWorld(true);
    const box=new THREE.Box3().setFromObject(object),height=Math.max(.5,box.max.y-box.min.y);
    const bones=[];object.traverse(n=>{if(n.isBone)bones.push(n)});
    const eyes=bones.filter(n=>/eye/i.test(n.name)&&!/lid|brow/i.test(n.name));
    const head=bones.find(n=>/^head(?:[_\d]|$)|mixamorighead$/i.test(n.name))||bones.find(n=>/head/i.test(n.name)&&!/scale|end/i.test(n.name));
    const anchor=eyes[0]||head;
    const forward=new THREE.Vector3(0,0,-1).applyQuaternion(object.quaternion);
    const face=bones.find(n=>/nose|jaw/i.test(n.name));
    if(head&&face){const delta=face.getWorldPosition(new THREE.Vector3()).sub(head.getWorldPosition(new THREE.Vector3())).setY(0);if(delta.lengthSq()>.00001)forward.copy(delta.normalize())}
    forward.setY(0).normalize();
    const localForward=forward.clone().applyQuaternion(object.quaternion.clone().invert());
    const orientation=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(new THREE.Vector3(),forward,up));
    const correction=anchor?anchor.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(orientation):null;
    rig={object,view,height,head,eyes,anchor,correction,localForward,offset:object.worldToLocal(box.getCenter(new THREE.Vector3()).setY(box.min.y+height*.78)),snap:true};
    try{physics.beginControl(object,height,localForward)}catch(err){console.warn('character physics failed',err)}
    manual=false;stuck=0;_prev.copy(object.position);camYaw=0;camPitch=0;camDist=height*2.2;
    clearInput();controls.enabled=false;canvas.tabIndex=0;canvas.focus();
  }
  function moveManual(f,t,dt){const fwd=rig.localForward.clone().applyQuaternion(rig.object.quaternion).setY(0);if(fwd.lengthSq()<1e-6)fwd.set(0,0,-1);fwd.normalize();rig.object.position.addScaledVector(fwd,f*4*dt);rig.object.rotation.y+=t*2.2*dt;rig.object.position.y=groundY(rig.object.position.x,rig.object.position.z)}
  function input(dt){
    if(!rig)return;controls.enabled=false;
    const f=((keys.has('KeyW')||keys.has('ArrowUp'))?1:0)-((keys.has('KeyS')||keys.has('ArrowDown'))?1:0);
    const t=((keys.has('KeyA')||keys.has('ArrowLeft'))?1:0)-((keys.has('KeyD')||keys.has('ArrowRight'))?1:0);
    const moving=f!==0||t!==0;
    const hasBody=physics.has&&physics.has(rig.object);
    if(hasBody&&!manual)physics.drive(rig.object,f,t,jump);
    // watchdog: if keys are pressed but the body doesn't move, fall back to direct motion
    const moved=rig.object.position.distanceToSquared(_prev);_prev.copy(rig.object.position);
    if(moving&&moved<1e-6)stuck+=dt;else stuck=0;
    if(stuck>0.25&&hasBody){manual=true;try{physics.remove(rig.object)}catch(err){}}
    if(!hasBody||manual)moveManual(f,t,dt);
    jump=false;
  }
  function updateCamera(dt){
    if(!rig)return;
    const {object,height,head,eyes,anchor,correction,localForward}=rig;
    if(!object.parent||!object.visible){stop();return}
    controls.enabled=false;object.updateMatrixWorld(true);
    const forward=localForward.clone().applyQuaternion(object.quaternion).setY(0).normalize();
    if(rig.view==='first'){
      const eye=new THREE.Vector3();
      if(eyes.length){for(const n of eyes)eye.add(n.getWorldPosition(new THREE.Vector3()));eye.multiplyScalar(1/eyes.length)}
      else if(head)head.getWorldPosition(eye);
      else eye.copy(object.localToWorld(rig.offset.clone())).addScaledVector(up,height*.14);
      if(anchor){camera.quaternion.copy(anchor.getWorldQuaternion(new THREE.Quaternion())).multiply(correction)}
      else camera.quaternion.setFromRotationMatrix(new THREE.Matrix4().lookAt(eye,eye.clone().add(forward),up));
      const look=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion),eyeUp=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);
      if(!eyes.length)eye.addScaledVector(eyeUp,height*.065);
      const ray=new THREE.Raycaster(eye,look,0,height*.4),hits=ray.intersectObject(object,true);
      const clearance=Math.max(height*(eyes.length?.025:.13),hits.length?hits[hits.length-1].distance+.06:0);
      camera.position.copy(eye).addScaledVector(look,clearance);
    }else{
      const target=head?head.getWorldPosition(new THREE.Vector3()):object.localToWorld(rig.offset.clone());
      const back=forward.clone().applyAxisAngle(up,camYaw).multiplyScalar(-1);
      const desired=target.clone().addScaledVector(back,camDist).addScaledVector(up,height*(0.45+camPitch*0.6));
      if(rig.snap)camera.position.copy(desired);else camera.position.lerp(desired,1-Math.exp(-12*dt));
      camera.lookAt(target);
    }
    rig.snap=false;
  }
  function isTyping(e){const t=e.target;if(!t)return false;if(t.isContentEditable||t.tagName==='TEXTAREA')return true;if(t.tagName==='INPUT'){const ty=(t.type||'text').toLowerCase();return !['range','color','checkbox','radio','button','submit','file'].includes(ty)}return false}
  function keydown(e){if(!rig||!['KeyW','KeyS','KeyA','KeyD','Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)||isTyping(e))return;e.preventDefault();if(e.code==='Space'){if(!e.repeat)jump=true}else keys.add(e.code)}
  window.addEventListener('keydown',keydown);window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',clearInput);
  // look around while controlling: drag to orbit, wheel to zoom
  canvas.addEventListener('pointerdown',e=>{if(!rig||e.button!==0)return;dragging=true;lastX=e.clientX;lastY=e.clientY});
  canvas.addEventListener('pointermove',e=>{if(!rig||!dragging)return;camYaw+=(e.clientX-lastX)*0.005;camPitch=Math.max(-0.7,Math.min(1.4,camPitch+(e.clientY-lastY)*0.004));lastX=e.clientX;lastY=e.clientY});
  window.addEventListener('pointerup',()=>{dragging=false});
  canvas.addEventListener('wheel',e=>{if(!rig)return;e.preventDefault();camDist=Math.max(rig.height*1.1,Math.min(rig.height*7,camDist*(e.deltaY>0?1.1:0.9)))},{passive:false});
  return {start,stop,input,updateCamera,get object(){return rig?.object||null},get view(){return rig?.view||'third'}};
}
