import {Vector3,Quaternion,Box3} from 'three/webgpu';
import RAPIER from '@dimforge/rapier3d-compat';

export async function createPhysicsModule(){
  await RAPIER.init();
  const world=new RAPIER.World({x:0,y:-9.81,z:0});
  const entries=new Map();
  let accumulator=0;
  function key(o){return o?.uuid}
  function remove(o){const e=entries.get(key(o));if(!e)return;world.removeRigidBody(e.body);entries.delete(key(o))}
  function autoType(o){const e=o?.userData?.editor||{};return e.terrain||e.water||e.builtin||e.category==='landscape'?'static':'dynamic'}
  function attach(o,type=autoType(o),characterHeight=null){
    if(!o||entries.has(key(o))||o.userData?.editor?.water)return;
    if(autoType(o)==='static')type='static';
    o.updateMatrixWorld(true);
    const box=characterHeight?new Box3().setFromObject(o):o.userData.__physicsBox;
    if(!box)return;
    const size=characterHeight?box.getSize(new Vector3()):box.size,center=characterHeight?box.getCenter(new Vector3()):box.center;
    const floor=o.userData?.editor?.builtin&&!o.userData?.editor?.terrain&&!o.userData?.editor?.water&&(o.userData.editor.name==='Ground'||o.userData.editor.name==='Road');
    const rb=type==='dynamic'?RAPIER.RigidBodyDesc.dynamic():RAPIER.RigidBodyDesc.fixed();
    if(floor){rb.setTranslation(center.x,o.position.y-.1,center.z);rb.setRotation({x:0,y:0,z:0,w:1})}
    else{rb.setTranslation(center.x,center.y,center.z);rb.setRotation({x:o.quaternion.x,y:o.quaternion.y,z:o.quaternion.z,w:o.quaternion.w})}
    const body=world.createRigidBody(rb);
    const radius=characterHeight?Math.max(.12,characterHeight*.15):0;
    const col=characterHeight?RAPIER.ColliderDesc.capsule(Math.max(.01,characterHeight/2-radius),radius):floor?RAPIER.ColliderDesc.cuboid(Math.max(.05,size.x/2),.1,Math.max(.05,size.z/2)):RAPIER.ColliderDesc.cuboid(Math.max(.03,size.x/2),Math.max(.03,size.y/2),Math.max(.03,size.z/2));
    col.setFriction(characterHeight?0:.7).setRestitution(characterHeight?0:.05);
    if(characterHeight){body.setEnabledRotations(false,true,false,true);body.enableCcd(true)}
    const collider=world.createCollider(col,body);
    const offset=new Vector3(center.x-o.position.x,floor?-.1:center.y-o.position.y,center.z-o.position.z).applyQuaternion(o.quaternion.clone().invert());
    entries.set(key(o),{body,collider,type,object:o,offset,height:characterHeight,command:null,forward:new Vector3(0,0,-1)});o.userData.editor.physics={enabled:true,type};
  }
  function setEnabled(o,on,type=autoType(o)){remove(o);if(autoType(o)==='static')type='static';if(on)attach(o,type);else if(o?.userData?.editor)o.userData.editor.physics={enabled:false,type}}
  function setType(o,type){if(autoType(o)==='static')type='static';setEnabled(o,true,type)}
  function syncObjectToBody(o){const e=entries.get(key(o));if(!e)return;o.updateMatrixWorld(true);const off=e.offset.clone().applyQuaternion(o.quaternion);e.body.setTranslation({x:o.position.x+off.x,y:o.position.y+off.y,z:o.position.z+off.z},true);e.body.setRotation(o.quaternion,true);e.body.setLinvel({x:0,y:0,z:0},true);e.body.setAngvel({x:0,y:0,z:0},true)}
  function beginControl(o,height,forward){remove(o);attach(o,'dynamic',height);const e=entries.get(key(o));if(e)e.forward.copy(forward)}
  function endControl(o){const e=entries.get(key(o));if(!e)return;e.command=null;e.body.setLinvel({x:0,y:e.body.linvel().y,z:0},true);e.body.setAngvel({x:0,y:0,z:0},true)}
  function drive(o,forward,turn,jump){const e=entries.get(key(o));if(e?.type==='dynamic')e.command={forward,turn,jump:jump||!!e.command?.jump}}
  function applyDrive(e){
    const c=e.command;if(!c)return;
    const p=e.body.translation(),q=e.body.rotation(),v=e.body.linvel();
    const direction=e.forward.clone().applyQuaternion(new Quaternion(q.x,q.y,q.z,q.w)).setY(0).normalize();
    const ray=new RAPIER.Ray(p,{x:0,y:-1,z:0});
    const ground=world.castRay(ray,e.height/2+.12,true,undefined,undefined,e.collider,e.body);
    const grounded=!!ground&&Math.abs(v.y)<.5;
    e.body.setAngvel({x:0,y:c.turn*2.2,z:0},true);
    e.body.setLinvel({x:direction.x*c.forward*4,y:c.jump&&grounded?5.2:v.y,z:direction.z*c.forward*4},true);
    c.jump=false;
  }
  function step(dt=1/60,controlledOnly=null){
    // With the master switch OFF, only the controlled character advances; other colliders stay solid.
    for(const e of entries.values())if(e.type==='dynamic'){
      const type=!controlledOnly||e.object===controlledOnly?RAPIER.RigidBodyType.Dynamic:RAPIER.RigidBodyType.Fixed;
      if(e.body.bodyType()!==type)e.body.setBodyType(type,true);
    }
    accumulator+=Math.min(.1,dt);world.timestep=1/60;
    while(accumulator>=1/60){for(const e of entries.values())if(e.body.isDynamic())applyDrive(e);world.step();accumulator-=1/60}
    for(const e of entries.values()){
      if(e.type!=='dynamic'||!e.body.isDynamic())continue;
      const o=e.object,p=e.body.translation(),q=e.body.rotation();if(!o)continue;
      o.quaternion.set(q.x,q.y,q.z,q.w);
      const off=e.offset.clone().applyQuaternion(o.quaternion);
      o.position.set(p.x-off.x,p.y-off.y,p.z-off.z);
    }
  }
  function bindObject(o){const e=entries.get(key(o));if(e)e.object=o}
  let hf=null;
  function setTerrainWindow(cfg){clearTerrainWindow();if(!cfg)return;try{const rb=RAPIER.RigidBodyDesc.fixed().setTranslation(cfg.position.x,cfg.position.y,cfg.position.z);const body=world.createRigidBody(rb);const desc=RAPIER.ColliderDesc.heightfield(cfg.rows,cfg.cols,cfg.heights,cfg.scale);desc.setFriction(.9).setRestitution(.03);const collider=world.createCollider(desc,body);hf={body,collider}}catch(err){console.warn('terrain window failed',err)}}
  function clearTerrainWindow(){if(!hf)return;try{world.removeRigidBody(hf.body)}catch(err){}hf=null}
  // Safety net: never let a dynamic body sink below the landscape surface, even
  // outside the finite heightfield window (the default Land is "infinite").
  function clampToTerrain(heightAt){
    for(const e of entries.values()){
      if(e.type!=='dynamic'||!e.object||!e.body.isDynamic())continue;
      const o=e.object,gy=heightAt(o.position.x,o.position.z);
      if(o.position.y<gy){o.position.y=gy;const off=e.offset.clone().applyQuaternion(o.quaternion);e.body.setTranslation({x:o.position.x+off.x,y:o.position.y+off.y,z:o.position.z+off.z},true);const v=e.body.linvel();e.body.setLinvel({x:v.x,y:Math.max(0,v.y),z:v.z},true)}
    }
  }
  return {world,attach(o,type){attach(o,type);bindObject(o)},remove,setEnabled(o,on,type){setEnabled(o,on,type);bindObject(o)},setType(o,type){setType(o,type);bindObject(o)},syncObjectToBody,beginControl,endControl,drive,step,autoType,setTerrainWindow,clearTerrainWindow,clampToTerrain,has:o=>entries.has(key(o))};
}
