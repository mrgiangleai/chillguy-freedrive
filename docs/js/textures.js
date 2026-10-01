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

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Nền đất phủ cỏ khô: vô số nét cỏ ngắn màu rơm / ô-liu / trắng ngà, lặp liền mạch
export function dryGrassTexture(renderer) {
  const W = 1024;
  const [c, g] = canvas(W, W);
  const r = rng(11);
  g.fillStyle = '#8e8556';
  g.fillRect(0, 0, W, W);
  const cols = ['#5f6535', '#6f6a3b', '#857c49', '#a39863', '#b9aa72', '#c9bc88', '#d8cfa8', '#ebe5d0'];
  g.lineCap = 'round';
  for (let i = 0; i < 30000; i++) {
    const x = r() * W, y = r() * W;
    const len = 5 + r() * 20, ang = -Math.PI / 2 + (r() - 0.5) * 1.0;
    const dx = Math.cos(ang) * len, dy = Math.sin(ang) * len;
    g.strokeStyle = cols[Math.floor(Math.pow(r(), 1.5) * cols.length)];
    g.globalAlpha = 0.3 + r() * 0.5;
    g.lineWidth = 0.8 + r() * 1.6;
    for (const ox of [-W, 0, W]) for (const oy of [-W, 0, W]) {
      const px = x + ox, py = y + oy;
      if (px < -30 || px > W + 30 || py < -30 || py > W + 30) continue;
      g.beginPath(); g.moveTo(px, py); g.lineTo(px + dx, py + dy); g.stroke();
    }
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

// Bông cỏ lau: thân mảnh ở dưới, chùm lông trắng ngà mềm ở trên (nền trong suốt)
export function plumeTexture() {
  const W = 128, H = 360;
  const [c, g] = canvas(W, H);
  const r = rng(5);
  const cx = W / 2;
  g.strokeStyle = '#c9bb8e'; g.lineWidth = 2.2; g.lineCap = 'round';
  g.beginPath(); g.moveTo(cx, H); g.quadraticCurveTo(cx + 2, H * 0.66, cx, H * 0.46); g.stroke();
  const top = 4, base = H * 0.5;
  const half = (t) => 5 + 50 * Math.pow(Math.sin(Math.min(1, t * 1.15) * Math.PI * 0.55), 0.85) * Math.pow(1 - t, 0.6);
  // lõi mờ để chùm không biến mất khi thu nhỏ
  g.fillStyle = 'rgba(250,246,234,0.6)';
  g.beginPath();
  for (let i = 0; i <= 24; i++) { const t = i / 24; g.lineTo(cx + half(t) * 0.6, base - t * (base - top)); }
  for (let i = 24; i >= 0; i--) { const t = i / 24; g.lineTo(cx - half(t) * 0.6, base - t * (base - top)); }
  g.closePath(); g.fill();
  // lông: rất nhiều nét mảnh, trắng ngà
  const cs = ['#ffffff', '#fffcf4', '#f6f0df', '#ede5cf', '#fffef9'];
  for (let i = 0; i < 1500; i++) {
    const t = Math.pow(r(), 0.85);
    const y0 = base - t * (base - top) + r() * 6;
    const hw = half(t);
    const x1 = cx + (r() * 2 - 1) * hw * (0.4 + 0.7 * r());
    const y1 = y0 - 6 - r() * 30;
    g.strokeStyle = cs[Math.floor(r() * cs.length)];
    g.globalAlpha = 0.35 + r() * 0.55;
    g.lineWidth = 0.7 + r() * 1.5;
    g.beginPath();
    g.moveTo(cx + (r() - 0.5) * 5, y0);
    g.quadraticCurveTo((cx + x1) / 2 + (r() - 0.5) * 10, (y0 + y1) / 2, x1, y1);
    g.stroke();
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Texture chi tiết xám (nhân với màu địa hình): nét cỏ nhỏ + đốm, trung bình ~0.85, lặp liền mạch
export function detailTexture(renderer) {
  const W = 512;
  const [c, g] = canvas(W, W);
  const r = rng(23);
  g.fillStyle = '#d6d6d6';
  g.fillRect(0, 0, W, W);
  g.lineCap = 'round';
  for (let i = 0; i < 16000; i++) {
    const x = r() * W, y = r() * W;
    const len = 3 + r() * 11, ang = -Math.PI / 2 + (r() - 0.5) * 1.1;
    const dx = Math.cos(ang) * len, dy = Math.sin(ang) * len;
    const v = Math.floor(150 + r() * 105);
    g.strokeStyle = `rgb(${v},${v},${v})`;
    g.globalAlpha = 0.35 + r() * 0.5;
    g.lineWidth = 0.7 + r() * 1.3;
    for (const ox of [-W, 0, W]) for (const oy of [-W, 0, W]) {
      const px = x + ox, py = y + oy;
      if (px < -20 || px > W + 20 || py < -20 || py > W + 20) continue;
      g.beginPath(); g.moveTo(px, py); g.lineTo(px + dx, py + dy); g.stroke();
    }
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
