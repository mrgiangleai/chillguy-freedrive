import * as THREE from 'three';
import { createHeadlights, updateHeadlights, HEADLIGHT_DEFAULTS } from '../src/headlights.js';
import { STREETLIGHT_DEFAULTS } from '../src/scenery.js';

const group = new THREE.Group();
const rig = createHeadlights(group, new THREE.Texture());
rig.tune.intensity = 123;
rig.tune.distance = 77;
rig.tune.angle = 0.64;
rig.tune.glowOpacity = 0.7;
updateHeadlights(rig, group, null, 0.5);

if (rig.spots.some((light) => light.intensity !== 61.5 || light.distance !== 77 || light.angle !== 0.64)) {
  throw new Error('Car headlight tuning was not applied directly');
}
if (rig.glows.some((glow) => Math.abs(glow.material.opacity - 0.35) > 1e-9)) {
  throw new Error('Car headlight glow tuning was not applied directly');
}
for (const defaults of [HEADLIGHT_DEFAULTS, STREETLIGHT_DEFAULTS]) {
  for (const [key, value] of Object.entries(defaults)) {
    if (key.toLowerCase().includes('color')) continue;
    if (!Number.isFinite(value)) throw new Error(`Non-numeric light default: ${key}`);
  }
}

console.log('PASS light tuning: vehicle beam/glow values apply live; street-light defaults are valid.');
