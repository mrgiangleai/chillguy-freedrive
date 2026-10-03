import * as THREE from 'three';
import { ROAD } from './road.js';
import { hash2 } from './terrain-noise.js';
import { withMist } from './mist.js';
import { softGlowTexture } from './textures.js';

// Seed theo vị trí: bề ngang/lưu lượng khác nhau, không đổi khi quay lại hoặc đổi map.
export function waterfallSpec(index) {
  return { index, s: 260 + index * 560 + hash2(index, 71) * 100,
    width: 2 + 3 * hash2(index, 37), flow: 0.25 + 0.75 * hash2(index, 93) };
}

export function waterfallGeometry(spec, road, terrain) {
  const positions = [], uv = [], slopes = [], flows = [], widths = [], indices = [];
  const rows = [], across = 8, start = -240, end = 190, step = 1.5;
  // Mặt đường cần các hàng riêng đúng mép đường để dòng nước nối liên tục tới hai sườn.
  const offsets = [];
  for (let d = start; d < end; d += step) offsets.push(d);
  offsets.push(-ROAD.halfWidth, 0, ROAD.halfWidth, end);
  offsets.sort((a,b)=>a-b);
  const oldCar = terrain.iCar;
  terrain.setCar(spec.s);
  for (const d of [...new Set(offsets)]) {
    const bend = Math.abs(d) < 7 ? 0 : Math.sin(d * 0.028 + spec.index) * 1.4 * Math.min(1, (Math.abs(d)-7)/18);
    const row = [];
    for (let j = 0; j <= across; j++) {
      const u = j / across, p = road.at(spec.s + bend + (u - 0.5) * spec.width, {});
      const x = p.x + Math.cos(p.th) * d, z = p.z - Math.sin(p.th) * d;
      // Lớp nước mỏng trên nhựa đường; trên vách đá nâng nhẹ để không chìm trong lưới địa hình.
      const depth = 0.09 + 0.045 * spec.flow;
      const lift = depth + 0.02 + (0.18-depth-0.02) * THREE.MathUtils.smoothstep(Math.abs(d), ROAD.halfWidth+0.8, ROAD.halfWidth+8);
      const y = Math.abs(d) <= ROAD.halfWidth + 0.8 ? p.y + depth : terrain.heightAt(x,z) + lift;
      row.push(new THREE.Vector3(x,y,z));
    }
    rows.push(row);
  }
  terrain.iCar = oldCar;
  let distance = 0;
  for (let i = 0; i < rows.length; i++) {
    const center = rows[i][across/2];
    if (i) distance += center.distanceTo(rows[i-1][across/2]);
    const prev = rows[Math.max(0,i-1)][across/2], next = rows[Math.min(rows.length-1,i+1)][across/2];
    const slope = Math.min(1, Math.abs(next.y-prev.y) / Math.max(next.distanceTo(prev), .01));
    for (let j=0;j<=across;j++) {
      positions.push(...rows[i][j].toArray());uv.push(j/across,distance);
      slopes.push(slope);flows.push(spec.flow);widths.push(spec.width);
      if(i && j<across){const a=(i-1)*(across+1)+j,b=i*(across+1)+j;indices.push(a,b,a+1,a+1,b,b+1);}
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  for(const [name,data] of [['aSlope',slopes],['aFlow',flows],['aWidth',widths]])g.setAttribute(name,new THREE.Float32BufferAttribute(data,1));
  g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();
  return g;
}

export class Waterfalls {
  constructor(scene, road, terrain) {
    this.road=road;this.terrain=terrain;this.items=new Map();this.group=new THREE.Group();
    this.group.visible=false;scene.add(this.group);
    this.material=withMist(new THREE.ShaderMaterial({
      uniforms:{...THREE.UniformsUtils.clone(THREE.UniformsLib.fog),uTime:{value:0},uLight:{value:1}},transparent:true,depthWrite:false,side:THREE.DoubleSide,fog:true,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-4,
      vertexShader:`
        attribute float aFlow,aSlope,aWidth;
        varying vec2 vUv; varying float vFlow,vSlope,vWidth;
        #include <fog_pars_vertex>
        void main(){
          vUv=uv;vFlow=aFlow;vSlope=aSlope;vWidth=aWidth;
          vec4 mvPosition=modelViewMatrix*vec4(position,1.0);
          gl_Position=projectionMatrix*mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader:`
        uniform float uTime,uLight;varying vec2 vUv;varying float vFlow,vSlope,vWidth;
        #include <fog_pars_fragment>
        void main(){
          float t=vUv.y-uTime*(1.5+vFlow*5.0);
          float streak=0.5+0.5*sin(vUv.x*vWidth*26.0+sin(t*0.45)*1.8);
          float ripple=pow(0.5+0.5*sin(t*4.2+sin(vUv.x*31.0+t*0.17)*2.0+sin(t*0.7)),9.0);
          float foam=clamp(ripple*(0.4+vSlope*0.65)+pow(streak,5.0)*vSlope*0.65,0.0,1.0);
          float edge=smoothstep(0.0,0.07,vUv.x)*(1.0-smoothstep(0.93,1.0,vUv.x));
          vec3 water=mix(vec3(0.12,0.32,0.38),vec3(0.74,0.86,0.9),foam);
          water*=0.08+uLight*0.92;
          float alpha=edge*(0.19+vFlow*0.36+foam*0.38);
          gl_FragColor=vec4(water,alpha);
          #include <fog_fragment>
        }`,
    }));
    this.sprayMaterial=new THREE.SpriteMaterial({map:softGlowTexture(),color:0xd6edf2,transparent:true,opacity:.15,depthWrite:false,fog:true});
  }
  setMap(id) {
    this.group.visible=id==='mountain';
    for(const item of this.items.values())this._remove(item);
    this.items.clear();
  }
  _remove(item){this.group.remove(item.group);item.mesh.geometry.dispose();for(const spray of item.sprays)spray.material.dispose();}
  _build(spec) {
    const group=new THREE.Group(),mesh=new THREE.Mesh(waterfallGeometry(spec,this.road,this.terrain),this.material);
    mesh.renderOrder=2;group.add(mesh);
    const sprays=[-ROAD.halfWidth-1.5,ROAD.halfWidth+8].map(d=>{
      const p=this.road.at(spec.s,{}),x=p.x+Math.cos(p.th)*d,z=p.z-Math.sin(p.th)*d;
      const spray=new THREE.Sprite(this.sprayMaterial.clone());spray.material.opacity=.08+.12*spec.flow;
      spray.position.set(x,this.terrain.heightAt(x,z)+.65,z);spray.scale.set(spec.width*1.1,1+spec.flow*1.8,1);group.add(spray);return spray;
    });
    this.group.add(group);return {spec,group,mesh,sprays};
  }
  update(time,s,light) {
    if(!this.group.visible)return;
    this.material.uniforms.uTime.value=time;this.material.uniforms.uLight.value=light;
    const first=Math.max(0,Math.floor((s-420)/560)),last=Math.floor((s+950)/560);
    for(const [index,item] of this.items)if(index<first||index>last){this._remove(item);this.items.delete(index);}
    for(let index=first;index<=last;index++)if(!this.items.has(index))this.items.set(index,this._build(waterfallSpec(index)));
  }
}
