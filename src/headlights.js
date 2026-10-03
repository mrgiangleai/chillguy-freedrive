import * as THREE from 'three';

// Dùng chung cho xe người chơi và xe ngược chiều.
export function createHeadlights(group, texture) {
  const spots = [-1, 1].map(() => {
    const light = new THREE.SpotLight(0xffd6a0, 0, 110, 0.8, 1, 0.55);
    group.add(light, light.target);
    return light;
  });
  const glows = [-1, 1].map(() => {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture, color: 0xffc477, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    glow.renderOrder = 6;
    glow.scale.set(2.1 * 1.35, 2.1 * 0.85, 1);
    group.add(glow);
    return glow;
  });
  return { spots, glows, eye: new THREE.Vector3(), forward: new THREE.Vector3() };
}

export function placeHeadlights(rig, dim) {
  const x = dim.width * 0.3, y = Math.min(0.7, dim.height * 0.45);
  rig.spots.forEach((light, i) => {
    const sx = i ? x : -x;
    light.position.set(sx, y, -dim.length / 2 + 0.3);
    light.target.position.set(sx * 0.9, 0, -40);
    rig.glows[i].position.set(sx, y, -dim.length / 2 - 0.05);
  });
}

export function updateHeadlights(rig, root, camera, level) {
  rig.spots.forEach(light => { light.intensity = 85 * level; });
  let front = 1;
  if (camera) {
    root.updateWorldMatrix(true, true);
    rig.glows[0].getWorldPosition(rig.eye);
    rig.eye.subVectors(camera.position, rig.eye).normalize();
    rig.forward.set(0, 0, -1).transformDirection(root.matrixWorld);
    front = THREE.MathUtils.smoothstep(rig.eye.dot(rig.forward), -0.05, 0.35);
  }
  rig.glows.forEach(glow => {
    glow.material.opacity = 0.45 * level * front;
    glow.visible = level * front > 0.01;
  });
}
