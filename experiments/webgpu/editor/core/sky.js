// Sky dome + sun/moon, ported from the main game (src/world.js SKY_KEYS + SKY_FRAG).
// Kept engine-safe for WebGPU: the vertical gradient is baked to a small canvas
// texture (tone-mapped off) and the sun/moon discs are billboarded sprites.
import * as THREE from 'three/webgpu';

// [sun elevation (deg), zenith, mid, horizon, warm band, sun glow]
const SKY_KEYS = [
  [-18, '#040a1a', '#08142c', '#122244', '#122244', '#000000'],
  [-9, '#06102e', '#0e1d47', '#1f2d5a', '#363562', '#24182c'],
  [-4, '#122052', '#2a3c79', '#67588d', '#d06e7a', '#a24a40'],
  [0, '#1d3d80', '#4868ab', '#e3987c', '#ff8a48', '#ff7030'],
  [4, '#2453a0', '#6286c4', '#f0bd92', '#ffb36c', '#ff9a52'],
  [10, '#2a64b4', '#719fd9', '#f1d9bd', '#ffd59c', '#ffcf88'],
  [22, '#2468c8', '#5b9be3', '#c6def3', '#e1edf5', '#fff1d6'],
  [50, '#1e5fc4', '#4f92e0', '#b4d4f2', '#d2e5f3', '#fff7e6'],
].map(([e, ...c]) => [e, ...c.map((h) => new THREE.Color(h))]);

const R = 1800;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

function radial(cv, w, h, inner, outer) {
  cv.width = w; cv.height = h;
  const x = cv.getContext('2d'); const g = x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  for (const [stop, col] of outer) g.addColorStop(stop, col);
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  return cv;
}

function moonCanvas(size) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d'); const c = size / 2;
  const g = x.createRadialGradient(c, c, 0, c, c, c);
  g.addColorStop(0, 'rgba(238,242,255,1)'); g.addColorStop(0.8, 'rgba(220,228,245,1)'); g.addColorStop(1, 'rgba(200,210,235,0)');
  x.fillStyle = g; x.beginPath(); x.arc(c, c, c, 0, Math.PI * 2); x.fill();
  x.globalCompositeOperation = 'source-atop';
  x.fillStyle = 'rgba(150,158,178,0.55)';
  for (const [mx, my, mr] of [[0.36, 0.32, 0.14], [0.62, 0.55, 0.1], [0.46, 0.7, 0.08], [0.6, 0.28, 0.06]]) {
    x.beginPath(); x.arc(size * mx, size * my, size * mr, 0, Math.PI * 2); x.fill();
  }
  return cv;
}

export function createSky({scene}) {
  // --- gradient dome ---
  const cv = document.createElement('canvas'); cv.width = 4; cv.height = 256;
  const ctx = cv.getContext('2d');
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter;
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 48, 24), new THREE.MeshBasicMaterial({map: tex, side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false}));
  dome.renderOrder = -10; dome.frustumCulled = false; scene.add(dome);

  // --- sun / moon sprites ---
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({map: new THREE.CanvasTexture(radial(document.createElement('canvas'), 128, 128, 0, [[0, 'rgba(255,247,224,1)'], [0.18, 'rgba(255,238,190,0.92)'], [0.5, 'rgba(255,206,130,0.28)'], [1, 'rgba(255,190,110,0)']])), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false}));
  sunSprite.material.map.colorSpace = THREE.SRGBColorSpace;
  sunSprite.scale.setScalar(560); sunSprite.renderOrder = -9; sunSprite.frustumCulled = false; scene.add(sunSprite);

  const moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({map: new THREE.CanvasTexture(moonCanvas(128)), transparent: true, depthWrite: false, fog: false, toneMapped: false}));
  moonSprite.material.map.colorSpace = THREE.SRGBColorSpace;
  moonSprite.scale.setScalar(190); moonSprite.renderOrder = -9; moonSprite.frustumCulled = false; scene.add(moonSprite);

  const S = {zen: new THREE.Color(), mid: new THREE.Color(), hor: new THREE.Color(), band: new THREE.Color(), sun: new THREE.Color()};
  const _oc = new THREE.Color(), _tmp = new THREE.Color(), _v = new THREE.Vector3();
  let lastSig = '';
  const sunDir = new THREE.Vector3(0, 1, 0), moonDir = new THREE.Vector3(0, -1, 0);

  function colors(elev, w, tint) {
    const K = SKY_KEYS; let ki = 0;
    while (ki < K.length - 2 && elev > K[ki + 1][0]) ki++;
    const ka = K[ki], kb = K[ki + 1], kt = clamp((elev - ka[0]) / (kb[0] - ka[0]), 0, 1);
    ['zen', 'mid', 'hor', 'band', 'sun'].forEach((n, j) => S[n].copy(ka[j + 1]).lerp(kb[j + 1], kt));
    const light = 1 - 0.6 * w.dark;
    _oc.copy(tint).multiplyScalar(light);
    const m = clamp(w.overcast * 0.92 + w.dark * 0.08, 0, 1);
    S.zen.lerp(_tmp.copy(_oc).multiplyScalar(0.8), m);
    S.mid.lerp(_tmp.copy(_oc).multiplyScalar(0.92), m);
    S.hor.lerp(_oc, m);
    S.band.lerp(_oc, m);
    const dim = 1 - 0.5 * w.dark;
    S.zen.multiplyScalar(dim); S.mid.multiplyScalar(dim); S.hor.multiplyScalar(dim); S.band.multiplyScalar(dim);
  }

  function bake() {
    const H = cv.height;
    for (let j = 0; j < H; j++) {
      const t = j / (H - 1); const y = Math.sin((0.5 - t) * Math.PI); const h = Math.max(y, 0);
      const col = _tmp.copy(S.hor).lerp(S.mid, sstep(0, 0.24, h)).lerp(S.zen, sstep(0.16, 0.92, h));
      if (y < 0) col.lerp(_oc.copy(S.hor).multiplyScalar(0.9), sstep(0, -0.1, y));
      ctx.fillStyle = '#' + col.getHexString(); ctx.fillRect(0, j, cv.width, 1);
    }
    tex.needsUpdate = true;
  }

  function place(cam, dir, sprite, dist, up) {
    sprite.position.copy(cam).addScaledVector(dir, dist);
    sprite.visible = up > 0.01;
  }

  /** Recompute sky colours + sun/moon for the given time / weather. */
  function update(cam, elev, w, tint, lightning, sunD, skyOut) {
    sunDir.copy(sunD);
    colors(elev, w, tint);
    if (lightning > 0.001) { const k = 1 + lightning * 1.6; S.zen.multiplyScalar(k); S.mid.multiplyScalar(k); S.hor.multiplyScalar(k); }
    const sig = S.zen.getHexString() + S.mid.getHexString() + S.hor.getHexString();
    if (sig !== lastSig) { bake(); lastSig = sig; }
    if (skyOut) skyOut.copy(S.hor);
    const sunUp = (1 - w.overcast * 0.95) * sstep(-6, 1, elev) * (1 - w.dark);
    sunSprite.material.opacity = sunUp;
    const moonUp = sstep(-1, -10, elev) * clamp(1 - w.overcast * 1.05, 0, 1) * (1 - w.dark);
    _v.copy(sunDir).multiplyScalar(-1); if (_v.y < 0.18) { _v.y = 0.18; _v.normalize(); }
    moonDir.copy(_v);
    moonSprite.material.opacity = 0.95 * moonUp;
    follow(cam);
  }

  function follow(cam) {
    dome.position.copy(cam);
    sunSprite.visible = sunSprite.material.opacity > 0.01;
    moonSprite.visible = moonSprite.material.opacity > 0.01;
    sunSprite.position.copy(cam).addScaledVector(sunDir, R * 0.92);
    moonSprite.position.copy(cam).addScaledVector(moonDir, R * 0.9);
  }

  return {update, follow, mesh: dome};
}
