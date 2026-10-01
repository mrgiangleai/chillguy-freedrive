import * as THREE from 'three';
import { ROAD } from './road.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

// Mặt đường nhựa: 1 tile = bề ngang đường x 12 m chiều dài (vạch đứt 4 m, vạch biên liền)
export function roadTexture(renderer) {
  const W = 512, H = 512;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#3c3f45';
  g.fillRect(0, 0, W, H);
  const img = g.getImageData(0, 0, W, H);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 30;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  const pxPerM = W / (ROAD.halfWidth * 2);
  // vệt bánh xe sẫm màu
  for (const cx of [0.27, 0.73]) {
    const grd = g.createLinearGradient((cx - 0.09) * W, 0, (cx + 0.09) * W, 0);
    grd.addColorStop(0, 'rgba(0,0,0,0)'); grd.addColorStop(0.5, 'rgba(0,0,0,0.22)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect((cx - 0.09) * W, 0, 0.18 * W, H);
  }
  g.fillStyle = '#dcdcd4';
  const lw = 0.16 * pxPerM, off = 0.35 * pxPerM;
  g.fillRect(off, 0, lw, H);
  g.fillRect(W - off - lw, 0, lw, H);
  g.fillStyle = '#e9d36a';
  g.fillRect(W / 2 - lw / 2, 0, lw, H / 3);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

export function glowTexture() {
  const [c, g] = canvas(128, 128);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.2, 'rgba(255,255,255,0.55)');
  grd.addColorStop(0.5, 'rgba(255,255,255,0.12)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Đám mây mềm: nhiều vòng tròn gradient chồng nhau
export function cloudTexture() {
  const [c, g] = canvas(512, 256);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 26; i++) {
    const x = 90 + rnd() * 332, y = 110 + rnd() * 50 - Math.abs(x - 256) * 0.12;
    const r = 34 + rnd() * 52;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.38)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
