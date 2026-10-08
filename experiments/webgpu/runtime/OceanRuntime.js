// Ocean: a large water plane with a scrolling procedural normal/colour texture,
// world-stable (texture offset compensates for camera movement) and non-dynamic.
import * as THREE from 'three/webgpu';

function waterCanvas(size) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d'); const img = x.createImageData(size, size);
  const hash = (i, j) => { i = ((i % size) + size) % size; j = ((j % size) + size) % size; let h = (Math.imul(i, 374761393) + Math.imul(j, 668265263)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967295; };
  const noise = (fx, fy) => { const ix = Math.floor(fx), iy = Math.floor(fy); let ax = fx - ix, ay = fy - iy; ax = ax * ax * (3 - 2 * ax); ay = ay * ay * (3 - 2 * ay); const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1); return a + (b - a) * ax + (c - a) * ay + (a - b - c + d) * ax * ay; };
  for (let j = 0; j < size; j++) for (let i = 0; i < size; i++) {
    let f = 0, amp = 0.6, fr = 1 / 24;
    for (let o = 0; o < 4; o++) { f += amp * noise(i * fr + o * 9.1, j * fr + o * 5.3); amp *= 0.5; fr *= 2.1; }
    f /= 1.125;
    const k = (j * size + i) * 4;
    img.data[k] = 70 + f * 110; img.data[k + 1] = 120 + f * 120; img.data[k + 2] = 150 + f * 105; img.data[k + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  return cv;
}

export function createOceanRuntime({scene, size = 6000} = {}) {
  const tex = new THREE.CanvasTexture(waterCanvas(256));
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(48, 48); tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshStandardMaterial({color: 0x2f6f8f, map: tex, bumpMap: tex, bumpScale: .3, roughness: .18, metalness: .15, transparent: true, opacity: .93});
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  mesh.rotation.x = -Math.PI / 2; mesh.frustumCulled = false; mesh.visible = false;
  mesh.userData.editor = {name: 'Ocean', category: 'landscape', builtin: true, water: true};
  scene.add(mesh);
  let level = -2, enabled = false, t = 0, opacity = .9, bob = .15, bobSpeed = .6, surfaceY = level;
  tex.offset.set(0, 0);
  function update(dt, cam) {
    if (!enabled) { surfaceY = level; return; }
    t += dt;
    surfaceY = level + Math.sin(t * bobSpeed) * bob;
    mesh.position.set(Math.round(cam.x / size) * size, surfaceY, Math.round(cam.z / size) * size);
    tex.offset.x = (cam.x / size) * 48 + t * 0.02;
    tex.offset.y = (cam.z / size) * 48 + t * 0.012;
  }
  return {
    mesh,
    update,
    setEnabled(v) { enabled = v; mesh.visible = v; },
    setLevel(y) { level = y; mesh.position.y = y; surfaceY = y; },
    setColor(c) { mat.color.set(c); },
    setOpacity(v) { opacity = v; mat.opacity = v; mat.transparent = v < 1; mat.needsUpdate = true; },
    setBob(a, s) { bob = Math.max(0, a || 0); if (s != null) bobSpeed = Math.max(0, s); },
    get enabled() { return enabled; },
    get level() { return level; },
    get surfaceY() { return surfaceY; },
  };
}
