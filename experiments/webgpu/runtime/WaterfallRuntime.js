// Seeded waterfalls / streams in the mountains, with a scrolling streak texture.
import * as THREE from 'three/webgpu';

function streakCanvas(size) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d');
  x.clearRect(0, 0, size, size);
  let seed = 7; const rnd = () => ((seed = Math.imul(seed, 1664525) + 1013904223 >>> 0) / 4294967296);
  for (let i = 0; i < 90; i++) {
    const px = rnd() * size, w = 1 + rnd() * 4;
    x.fillStyle = 'rgba(' + (200 + rnd() * 55 | 0) + ',' + (220 + rnd() * 35 | 0) + ',255,' + (0.25 + rnd() * 0.5).toFixed(2) + ')';
    x.fillRect(px, 0, w, size);
  }
  return cv;
}

export function createWaterfallRuntime({scene}) {
  const group = new THREE.Group(); group.userData.waterfall = true; scene.add(group);
  const tex = new THREE.CanvasTexture(streakCanvas(128));
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1, 3); tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({map: tex, transparent: true, opacity: .85, depthWrite: false, side: THREE.DoubleSide, fog: true});
  const pool = []; let t = 0;

  function ensure(n) {
    while (pool.length < n) { const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 20), mat.clone()); m.visible = false; group.add(m); pool.push(m); }
    pool.forEach((m, i) => { m.visible = i < n; });
  }
  function place(seed, heightAt) {
    let s = (seed | 0) * 2654435761 >>> 0;
    const rnd = () => ((s = Math.imul(s ^ (s >>> 15), 2246822519) >>> 0) / 4294967296);
    pool.forEach((m) => {
      const x = 430 + rnd() * 320, z = (rnd() * 2 - 1) * 520;
      const base = heightAt ? heightAt(x, z) : 0;
      m.userData.x = x; m.userData.z = z; m.userData.base = base;
    });
  }
  function update(dt, cam) {
    t += dt; tex.offset.y -= dt * 0.7;
    for (const m of pool) {
      if (!m.visible) continue;
      m.position.set(m.userData.x, m.userData.base + 10, m.userData.z);
      m.rotation.y = Math.atan2(cam.x - m.userData.x, cam.z - m.userData.z); // face the viewer
    }
  }
  return {group, ensure, place, update};
}
