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

// quầng sáng mềm (giảm dần kiểu Gauss + lõi nhỏ): không có mép tròn rõ khi phóng to
export function softGlowTexture() {
  const N = 128, c = document.createElement('canvas');
  c.width = c.height = N;
  const g = c.getContext('2d'), img = g.createImageData(N, N);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = (x + 0.5) / N * 2 - 1, dy = (y + 0.5) / N * 2 - 1, r2 = dx * dx + dy * dy;
      const v = Math.min(1, Math.exp(-r2 * 5) * 0.55 + Math.exp(-r2 * 22) * 0.35 + Math.exp(-r2 * 120) * 0.35) * (1 - Math.min(1, r2) ** 4);
      const i = (y * N + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; img.data[i + 3] = Math.round(v * 255);
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Ánh sáng đèn đường: phân bố rộng, không lõi gắt hoặc vòng tròn rõ ở mép.
export function streetPoolTexture() {
  const [c, g] = canvas(128, 128), img = g.createImageData(128, 128);
  for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
    const r2 = ((x + 0.5) / 64 - 1) ** 2 + ((y + 0.5) / 64 - 1) ** 2;
    const a = Math.exp(-3 * r2) * (1 - THREE.MathUtils.smoothstep(r2, 0.45, 1));
    const i = (y * 128 + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
    img.data[i + 3] = Math.round(a * 255);
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
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

// Atlas lá cây (512x256): trái = tán cây lá rộng, giữa = cây thông, góc phải trên = vỏ cây.
// Nền trong suốt => dùng alphaTest trên các tấm phẳng (kiểu "cây tấm" như slowroads).
export function foliageAtlas() {
  const W = 512, H = 256;
  const [c, g] = canvas(W, H);
  const r = rng(77);
  // --- tán lá rộng: nhiều chùm lá tròn gom thành khối không đều ---
  const blobs = [];
  for (let i = 0; i < 9; i++) {
    const a = r() * Math.PI * 2, d = r() * 62;
    blobs.push([128 + Math.cos(a) * d * 1.15, 120 + Math.sin(a) * d * 0.85, 38 + r() * 34]);
  }
  const inside = (x, y) => blobs.some(([bx, by, br]) => (x - bx) ** 2 + (y - by) ** 2 < br * br);
  const leafCols = ['#2f5522', '#3d6a2a', '#4c7d32', '#5c9038', '#6fa443', '#87b851'];
  for (let i = 0; i < 2600; i++) {
    const x = 8 + r() * 240, y = 8 + r() * 230;
    if (!inside(x, y)) continue;
    const top = 1 - y / 256;                                     // phía trên sáng hơn
    const k = Math.min(leafCols.length - 1, Math.floor((r() * 0.7 + top * 0.55) * leafCols.length));
    g.fillStyle = leafCols[k];
    g.beginPath();
    g.ellipse(x, y, 3 + r() * 5, 2 + r() * 3.5, r() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  // --- cây thông: các tầng cành rủ xuống, hẹp dần lên ngọn ---
  const px = 320;
  const needle = ['#22402a', '#2b4f31', '#355e39', '#3f6d41', '#4d7d4a'];
  for (let i = 0; i < 2400; i++) {
    const t = Math.pow(r(), 0.8);                                // 0 = ngọn, 1 = gốc
    const y = 6 + t * 236;
    const tier = (t * 7) % 1;                                    // mỗi tầng cành rộng dần rồi thu lại
    const hw = (6 + t * 58) * (0.55 + 0.45 * tier);
    const x0 = px + (r() * 2 - 1) * hw * 0.25;
    const x1 = px + (r() * 2 - 1) * hw;
    const y1 = y + 4 + Math.abs(x1 - px) * 0.18 + r() * 6;       // cành rủ xuống ở ngoài mép
    g.strokeStyle = needle[Math.min(needle.length - 1, Math.floor((r() * 0.8 + (1 - t) * 0.4) * needle.length))];
    g.lineWidth = 1 + r() * 2.2;
    g.beginPath(); g.moveTo(x0, y); g.lineTo(x1, y1); g.stroke();
  }
  // --- vỏ cây ---
  g.fillStyle = '#5a4434';
  g.fillRect(448, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// texture ảnh thật (đã nén WebP, trong docs/assets/tex): đất, sỏi đá vụn, vách đá + normal map của đá
// Nguồn: Babylon.js Assets (CC BY 4.0) — dirt, rockyGround; Godot demo projects (MIT) — rock
const _photo = {};
export function photoTexture(name, renderer, { srgb = true, repeat = true } = {}) {
  if (_photo[name]) return _photo[name];
  const t = new THREE.TextureLoader().load('assets/tex/' + name + '.webp');
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  _photo[name] = t;
  return t;
}
