import * as THREE from 'three/webgpu';

export function createCharacterController({camera,controls,canvas,physics}){
  let rig=null;
  const keys=new Set(),up=new THREE.Vector3(0,1,0);
  let jump=false;
  function clearInput(){keys.clear();jump=false}
  function stop(){if(!rig)return;physics.endControl(rig.object);rig=null;clearInput();controls.target.copy(camera.position).add(new THREE.Vector3(0,0,-4).applyQuaternion(camera.quaternion));controls.enabled=true}
  function start(object,view){
    if(object.userData.editor?.category!=='character'||!object.visible)return;
    if(rig?.object===object){rig.view=view;canvas.focus();return}
    stop();object.updateMatrixWorld(true);
    const box=new THREE.Box3().setFromObject(object),height=Math.max(.5,box.max.y-box.min.y);
    const bones=[];object.traverse(n=>{if(n.isBone)bones.push(n)});
    const eyes=bones.filter(n=>/eye/i.test(n.name)&&!/lid|brow/i.test(n.name));
    const head=bones.find(n=>/^head(?:[_\d]|$)|mixamorighead$/i.test(n.name))||bones.find(n=>/head/i.test(n.name)&&!/scale|end/i.test(n.name));
    const anchor=eyes[0]||head;
    // Bone axes vary by exporter. Calibrate once; retain bone world motion thereafter.
    const forward=new THREE.Vector3(0,0,-1).applyQuaternion(object.quaternion);
    const face=bones.find(n=>/nose|jaw/i.test(n.name));
    if(head&&face){const delta=face.getWorldPosition(new THREE.Vector3()).sub(head.getWorldPosition(new THREE.Vector3())).setY(0);if(delta.lengthSq()>.00001)forward.copy(delta.normalize())}
    forward.setY(0).normalize();
    const localForward=forward.clone().applyQuaternion(object.quaternion.clone().invert());
    const orientation=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(new THREE.Vector3(),forward,up));
    const correction=anchor?anchor.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(orientation):null;
    rig={object,view,height,head,eyes,anchor,correction,localForward,offset:object.worldToLocal(box.getCenter(new THREE.Vector3()).setY(box.min.y+height*.78)),snap:true};
    try{physics.beginControl(object,height,localForward)}catch(err){console.warn('character physics failed',err)}
    clearInput();controls.enabled=false;canvas.tabIndex=0;canvas.focus();
  }
  function input(dt){if(!rig)return;controls.enabled=false;const f=((keys.has('KeyW')||keys.has('ArrowUp'))?1:0)-((keys.has('KeyS')||keys.has('ArrowDown'))?1:0),t=((keys.has('KeyQ')||keys.has('ArrowLeft'))?1:0)-((keys.has('KeyE')||keys.has('ArrowRight'))?1:0);if(physics.has&&physics.has(rig.object)){physics.drive(rig.object,f,t,jump)}else{const fwd=rig.localForward.clone().applyQuaternion(rig.object.quaternion).setY(0).normalize();rig.object.position.addScaledVector(fwd,f*4*dt);rig.object.rotation.y+=t*2.2*dt}jump=false}
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
      // Head bone is commonly at the skull base, not the eye. Clear the face surface.
      if(!eyes.length)eye.addScaledVector(eyeUp,height*.065);
      const ray=new THREE.Raycaster(eye,look,0,height*.4),hits=ray.intersectObject(object,true);
      const clearance=Math.max(height*(eyes.length?.025:.13),hits.length?hits[hits.length-1].distance+.06:0);
      camera.position.copy(eye).addScaledVector(look,clearance);
    }else{
      const target=head?head.getWorldPosition(new THREE.Vector3()):object.localToWorld(rig.offset.clone());
      const desired=target.clone().addScaledVector(forward,-height*2.2).addScaledVector(up,height*.45);
      if(rig.snap)camera.position.copy(desired);else camera.position.lerp(desired,1-Math.exp(-12*dt));
      camera.lookAt(target);
    }
    rig.snap=false;
  }
  function isTyping(e){const t=e.target;if(!t)return false;if(t.isContentEditable||t.tagName==='TEXTAREA')return true;if(t.tagName==='INPUT'){const ty=(t.type||'text').toLowerCase();return !['range','color','checkbox','radio','button','submit','file'].includes(ty)}return false}
  function keydown(e){if(!rig||!['KeyW','KeyS','KeyQ','KeyE','Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)||isTyping(e))return;e.preventDefault();if(e.code==='Space'){if(!e.repeat)jump=true}else keys.add(e.code)}
  window.addEventListener('keydown',keydown);window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',clearInput);
  return {start,stop,input,updateCamera,get object(){return rig?.object||null},get view(){return rig?.view||'third'}};
}
