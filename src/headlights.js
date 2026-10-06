import * as THREE from 'three';

export const HEADLIGHT_DEFAULTS = Object.freeze({
  intensity: 36, distance: 165, angle: 1.29, penumbra: 0.9, decay: 0.87,
  glowOpacity: 0.29, glowSize: 2.9, color: '#ffe4a8', glowColor: '#ffb43f',
});

// Dùng chung cho xe người chơi và xe NPC.
// spots=false: chỉ có quầng (xe NPC — chùm sáng thật dùng chung một cặp SpotLight trong traffic.js, để số đèn trong cảnh
// không đổi khi xe xuất hiện/biến mất => three.js không phải biên dịch lại toàn bộ shader, không bị giật).
// glows=false: chỉ có SpotLight.
export function createHeadlights(group, texture, { spots: withSpots = true, glows: withGlows = true } = {}) {
  const spots = (withSpots ? [-1, 1] : []).map(() => {
    const light = new THREE.SpotLight(0xffd6a0, 0, 110, 0.8, 1, 0.55);
    group.add(light, light.target);
    return light;
  });
  const glows = (withGlows ? [-1, 1] : []).map(() => {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture, color: 0xffc477, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    glow.renderOrder = 6;
    glow.scale.set(2.1 * 1.35, 2.1 * 0.85, 1);
    group.add(glow);
    return glow;
  });
  return { spots, glows, tune: { ...HEADLIGHT_DEFAULTS }, eye: new THREE.Vector3(), forward: new THREE.Vector3() };
}

// vị trí bóng đèn (bên phải, bên trái lấy −x) khi model không khai báo `lamps` trong config
export function lampsFor(dim) {
  if (dim.lamps) return dim.lamps;
  const x = dim.width * 0.3, y = Math.min(0.7, dim.height * 0.45);
  return { head: [x, y, -dim.length / 2 + 0.25], tail: [x, y + 0.05, dim.length / 2] };
}

// chùm sáng + quầng đặt đúng tâm bóng đèn pha của model (dim.lamps.head); quầng nhô ra trước mặt kính 3 cm
export function placeHeadlights(rig, dim) {
  const [x, y, z] = lampsFor(dim).head;
  rig.spots.forEach((light, i) => {
    const sx = i ? x : -x;
    light.position.set(sx, y, z);
    light.target.position.set(sx * 0.9, 0, z - 40);
  });
  rig.glows.forEach((glow, i) => glow.position.set(i ? x : -x, y, z - 0.03));
}

export function updateHeadlights(rig, root, camera, level) {
  const t = rig.tune || HEADLIGHT_DEFAULTS;
  rig.spots.forEach(light => {
    light.color.set(t.color); light.intensity = t.intensity * level; light.distance = t.distance;
    light.angle = t.angle; light.penumbra = t.penumbra; light.decay = t.decay;
  });
  let front = 1;
  if (camera) {
    root.updateWorldMatrix(true, true);
    (rig.glows[0] || root).getWorldPosition(rig.eye);
    rig.eye.subVectors(camera.position, rig.eye).normalize();
    rig.forward.set(0, 0, -1).transformDirection(root.matrixWorld);
    front = THREE.MathUtils.smoothstep(rig.eye.dot(rig.forward), -0.05, 0.35);
  }
  rig.glows.forEach(glow => {
    glow.material.color.set(t.glowColor);
    glow.material.opacity = t.glowOpacity * level * front;
    glow.scale.set(t.glowSize * 1.35, t.glowSize * 0.85, 1);
    glow.visible = level * front > 0.01;
  });
}
