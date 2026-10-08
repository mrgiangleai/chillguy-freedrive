// Sky dome + sun/moon, ported from the main game (src/world.js SKY_KEYS + SKY_FRAG).
// Engine-safe for WebGPU: the vertical gradient is baked into per-vertex colours
// (no UV / flipY issues) and the sun/moon discs are billboarded sprites.
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

function radial(size, stops) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d'); const g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [stop, col] of stops) g.addColorStop(stop, col);
  x.fillStyle = g; x.fillRect(0, 0, size, size);
  return cv;
}

function moonCanvas(size) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d'); const c = size / 2;
  const g = x.createRadialGradient(c, c, 0, c, c, c);
  g.addColorStop(0, 'rgba(238,242,255,1)'); g.addColorStop(0.82, 'rgba(220,228,245,1)'); g.addColorStop(1, 'rgba(200,210,235,0)');
  x.fillStyle = g; x.beginPath(); x.arc(c, c, c, 0, Math.PI * 2); x.fill();
  x.globalCompositeOperation = 'source-atop';
  x.fillStyle = 'rgba(150,158,178,0.5)';
  for (const [mx, my, mr] of [[0.36, 0.32, 0.14], [0.62, 0.55, 0.1], [0.46, 0.7, 0.08], [0.6, 0.28, 0.06]]) {
    x.beginPath(); x.arc(size * mx, size * my, size * mr, 0, Math.PI * 2); x.fill();
  }
  return cv;
}

function cloudCanvas(size) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d'); const img = x.createImageData(size, size);
  const hash = (i, j) => { let h = (Math.imul(i, 374761393) + Math.imul(j, 668265263)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967295; };
  const noise = (fx, fy) => { const ix = Math.floor(fx), iy = Math.floor(fy); let ax = fx - ix, ay = fy - iy; ax = ax * ax * (3 - 2 * ax); ay = ay * ay * (3 - 2 * ay); const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1); return a + (b - a) * ax + (c - a) * ay + (a - b - c + d) * ax * ay; };
  for (let j = 0; j < size; j++) for (let i = 0; i < size; i++) {
    let f = 0, amp = 0.5, fr = 1 / 40;
    for (let o = 0; o < 5; o++) { f += amp * noise(i * fr + o * 13.7, j * fr + o * 7.3); amp *= 0.5; fr *= 2.05; }
    f /= 0.96875;
    const a = Math.max(0, Math.min(1, (f - 0.48) / 0.34));
    const k = (j * size + i) * 4;
    img.data[k] = 255; img.data[k + 1] = 255; img.data[k + 2] = 255; img.data[k + 3] = Math.round(a * 255);
  }
  x.putImageData(img, 0, 0);
  return cv;
}

export function createSky({scene}) {
  // --- gradient dome (per-vertex colours, no texture) ---
  const geo = new THREE.SphereGeometry(R, 64, 40);
  const pos = geo.attributes.position;
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3));
  const colAttr = geo.attributes.color;
  const dome = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({vertexColors: true, side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false}));
  dome.renderOrder = -10; dome.frustumCulled = false; scene.add(dome);

  // --- sun / moon sprites ---
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({map: new THREE.CanvasTexture(radial(128, [[0, 'rgba(255,247,224,1)'], [0.18, 'rgba(255,238,190,0.92)'], [0.5, 'rgba(255,206,130,0.28)'], [1, 'rgba(255,190,110,0)']])), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false, opacity: 0}));
  sunSprite.material.map.colorSpace = THREE.SRGBColorSpace;
  sunSprite.scale.setScalar(560); sunSprite.renderOrder = -9; sunSprite.frustumCulled = false; sunSprite.visible = false; scene.add(sunSprite);

  const moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({map: new THREE.CanvasTexture(moonCanvas(128)), transparent: true, depthWrite: false, fog: false, toneMapped: false, opacity: 0}));
  moonSprite.material.map.colorSpace = THREE.SRGBColorSpace;
  moonSprite.scale.setScalar(190); moonSprite.renderOrder = -9; moonSprite.frustumCulled = false; moonSprite.visible = false; scene.add(moonSprite);

  // --- stars (visible at night only) ---
  const STAR_N = 800;
  const starPos = new Float32Array(STAR_N * 3);
  for (let i = 0; i < STAR_N; i++) {
    const th = 2 * Math.PI * Math.random(), ph = Math.acos(1 - Math.random()); // upper hemisphere
    const r = R * 0.93;
    starPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    starPos[i * 3 + 1] = r * Math.cos(ph);
    starPos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
  }
  const starGeo = new THREE.BufferGeometry(); starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({color: 0xdfe8ff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false, toneMapped: false});
  const stars = new THREE.Points(starGeo, starMat);
  stars.renderOrder = -8; stars.frustumCulled = false; stars.visible = false; scene.add(stars);

  // --- cloud layer (flat, above the camera; opacity from overcast) ---
  const cloudTex = new THREE.CanvasTexture(cloudCanvas(256));
  cloudTex.colorSpace = THREE.SRGBColorSpace; cloudTex.wrapS = cloudTex.wrapT = THREE.RepeatWrapping; cloudTex.repeat.set(3, 3);
  const cloudMat = new THREE.MeshBasicMaterial({map: cloudTex, transparent: true, opacity: 0, depthWrite: false, fog: false, toneMapped: false, side: THREE.DoubleSide});
  const clouds = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), cloudMat);
  clouds.rotation.x = -Math.PI / 2; clouds.renderOrder = -7; clouds.frustumCulled = false; clouds.visible = false; scene.add(clouds);

  const S = {zen: new THREE.Color(), mid: new THREE.Color(), hor: new THREE.Color(), band: new THREE.Color(), sun: new THREE.Color()};
  const _oc = new THREE.Color(), _tmp = new THREE.Color(), _v = new THREE.Vector3(), _cloudWhite = new THREE.Color(0xffffff);
  let lastSig = '', lastCloud = 0;
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
    const arr = colAttr.array;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / R; const h = Math.max(y, 0);
      const c = _tmp.copy(S.hor).lerp(S.mid, sstep(0, 0.24, h)).lerp(S.zen, sstep(0.16, 0.92, h));
      if (y < 0) c.lerp(_oc.copy(S.hor).multiplyScalar(0.9), sstep(0, -0.1, y));
      arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
    }
    colAttr.needsUpdate = true;
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
    const starUp = sstep(2, -6, elev) * clamp(1 - w.overcast * 0.9, 0, 1) * (1 - w.dark * 0.6);
    starMat.opacity = starUp; stars.visible = starUp > 0.02;
    cloudMat.opacity = Math.min(0.9, w.overcast * 0.9);
    cloudMat.color.copy(tint).lerp(_cloudWhite, 0.55);
    clouds.visible = cloudMat.opacity > 0.02;
    follow(cam);
  }

  function follow(cam) {
    dome.position.copy(cam);
    stars.position.copy(cam);
    const now = performance.now(), cdt = Math.min(0.1, (now - lastCloud) / 1000); lastCloud = now;
    cloudTex.offset.x += cdt * 0.004;
    clouds.position.set(cam.x, cam.y + 420, cam.z);
    sunSprite.visible = sunSprite.material.opacity > 0.01;
    moonSprite.visible = moonSprite.material.opacity > 0.01;
    sunSprite.position.copy(cam).addScaledVector(sunDir, R * 0.92);
    moonSprite.position.copy(cam).addScaledVector(moonDir, R * 0.9);
  }

  return {update, follow, mesh: dome};
}
