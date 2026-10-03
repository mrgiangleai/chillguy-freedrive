import * as THREE from 'three';

// Màn hình giải trí trên taplo (giữa xe): bản đồ + bài nhạc + tốc độ / giờ, vẽ bằng canvas (cập nhật ~1 lần/giây).
// Có đèn điểm nhỏ ánh vàng ấm hắt lên mặt / người lái (thấy cả khi nhìn từ ngoài xe qua cửa kính).
const W = 512, H = 288;
export const DASH_SIZE = [0.23 * 0.85, 0.13 * 0.85]; // thu nhỏ 15%, m
const SIZE = DASH_SIZE;
const BEZEL = 0.014 * 0.85;

// tìm chỗ đặt màn hình: chiếu tia từ giữa xe (ngang tầm mắt) chếch xuống phía trước, gặp taplo thì dựng màn hình
// đứng trên đó, quay về phía mắt người lái. Toạ độ trong hệ của xe (model đã đặt vào nhóm xe).
export function screenPose(car, dim) {
  const [ex, ey, ez] = dim.eye;
  const ray = new THREE.Raycaster(new THREE.Vector3(0, ey, ez), new THREE.Vector3(0, -0.42, -1).normalize(), 0.05, 2.5);
  car.updateMatrixWorld(true);
  const hit = ray.intersectObject(car, true).find((h) => !(h.object.material && h.object.material.transparent));
  const pos = hit ? hit.point.clone() : new THREE.Vector3(0, ey - 0.3, ez - 0.7);
  pos.y += SIZE[1] / 2 + 0.03;                       // đứng trên mặt taplo
  pos.z += 0.07;                                     // nhô ra khỏi gờ taplo (về phía người lái)
  // đặt thẳng theo thân xe (mặt màn hình quay thẳng về sau, không vặn chéo), chỉ ngả nhẹ ra sau như màn hình thật
  const quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -0.22);
  return { pos, quat };
}

export class DashScreen {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = W; this.canvas.height = H;
    this.ctx = this.canvas.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.anisotropy = 4;
    this.group = new THREE.Group();
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(SIZE[0], SIZE[1]), new THREE.MeshBasicMaterial({ map: this.tex, color: new THREE.Color(2.2, 2.2, 2.2) }));
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(SIZE[0] + BEZEL, SIZE[1] + BEZEL, 0.012 * 0.85), new THREE.MeshStandardMaterial({ color: 0x0c0d10, roughness: 0.35, metalness: 0.3 }));
    bezel.position.z = -0.0065;
    this.group.add(bezel, glass);
    // ánh sáng hắt ra từ màn hình (về phía người lái)
    this.light = new THREE.PointLight(0xffc68a, 1.1, 2.4, 2);       // ánh hắt tông ấm
    this.light.position.set(0, 0.03, 0.08);
    this.group.add(this.light);
    this.t = 0; this.timer = 0; this.speed = 0; this.clock = '';
    this._draw();
  }

  place(pose) {
    if (!pose) { this.group.visible = false; return; }
    this.group.visible = true;
    this.group.position.copy(pose.pos);
    this.group.quaternion.copy(pose.quat);
  }

  update(dt, kmh, clock) {
    this.t += dt;
    this.timer -= dt;
    // màn hình sáng đổi nhẹ theo nội dung (chuyển cảnh bản đồ / bài nhạc)
    this.light.intensity = 1.1 * (0.9 + 0.1 * Math.sin(this.t * 0.7));
    if (this.timer > 0) return;
    this.timer = 1;
    this.speed = kmh; this.clock = clock;
    this._draw();
  }

  _draw() {
    const g = this.ctx, t = this.t;
    // nền
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#1d140d'); bg.addColorStop(1, '#0d0906');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    // bản đồ (trái): lưới phố mờ + đường đi + mũi tên xe
    g.save();
    g.beginPath(); g.rect(10, 34, 300, H - 44); g.clip();
    g.fillStyle = '#231810'; g.fillRect(10, 34, 300, H - 44);
    g.strokeStyle = 'rgba(255,190,130,0.15)'; g.lineWidth = 2;
    const off = (t * 9) % 40;
    for (let x = -40; x < 340; x += 40) { g.beginPath(); g.moveTo(x + off * 0.3, 34); g.lineTo(x - 30 + off * 0.3, H); g.stroke(); }
    for (let y = 34; y < H + 40; y += 40) { g.beginPath(); g.moveTo(10, y + off); g.lineTo(310, y + off - 12); g.stroke(); }
    g.strokeStyle = '#ffa940'; g.lineWidth = 7; g.lineCap = 'round';
    g.beginPath();
    for (let i = 0; i <= 24; i++) {
      const y = H - 10 - i * 11, x = 160 + Math.sin(i * 0.35 + t * 0.15) * 46;
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
    g.fillStyle = '#ffffff';
    g.beginPath(); g.moveTo(160, H - 74); g.lineTo(148, H - 46); g.lineTo(160, H - 54); g.lineTo(172, H - 46); g.closePath(); g.fill();
    g.restore();
    // thanh trên: giờ + tốc độ
    g.fillStyle = '#ffe4c8'; g.font = '600 20px system-ui, sans-serif'; g.textBaseline = 'middle';
    g.fillText(this.clock || '--:--', 14, 18);
    g.textAlign = 'right'; g.fillText(Math.round(this.speed) + ' km/h', W - 14, 18); g.textAlign = 'left';
    // nhạc (phải)
    const px = 326;
    const art = g.createLinearGradient(px, 44, px + 70, 114);
    art.addColorStop(0, '#ff8a5c'); art.addColorStop(1, '#7b5cff');
    g.fillStyle = art; g.fillRect(px, 44, 70, 70);
    g.fillStyle = '#ffffff'; g.font = '600 19px system-ui, sans-serif';
    g.fillText('Lo-fi Chill', px, 136);
    g.fillStyle = '#c9a27e'; g.font = '16px system-ui, sans-serif';
    g.fillText('Chill Drive Radio', px, 160);
    const p = (t / 180) % 1;
    g.fillStyle = '#3d2b1d'; g.fillRect(px, 184, 170, 5);
    g.fillStyle = '#ffa940'; g.fillRect(px, 184, 170 * p, 5);
    // sóng nhạc
    g.fillStyle = '#ffb760';
    for (let i = 0; i < 12; i++) {
      const h = 8 + 26 * Math.abs(Math.sin(t * 2.3 + i * 1.7) * Math.sin(t * 0.9 + i));
      g.fillRect(px + i * 14, 250 - h, 8, h);
    }
    this.tex.needsUpdate = true;
  }
}
