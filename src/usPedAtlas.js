// Map New York — atlas mặt đèn đi bộ kiểu Mỹ (1024×128): bàn tay cam / người trắng LED chấm (sáng 0–256, tắt 256–512), chữ số 7 đoạn ở 512 + 48·d.
// Bản DeepSeek theo đề (thi song song với MiniMax / GLM), Claude soát.
export function usPedAtlas(doc = document) {
  const cv = doc.createElement('canvas');
  cv.width = 1024; cv.height = 128;
  const g = cv.getContext('2d');
  g.fillStyle = '#0b0b0b';
  g.fillRect(0, 0, 1024, 128);

  const mask = doc.createElement('canvas');
  mask.width = mask.height = 128;
  const m = mask.getContext('2d');

  // Render a 128x128 mask as LED dots into cell at ox
  function dot(ox, color, draw, step = 7, rad = 3.2) {
    m.clearRect(0, 0, 128, 128);
    m.fillStyle = m.strokeStyle = '#fff';
    m.lineCap = m.lineJoin = 'round';
    draw();
    const d = m.getImageData(0, 0, 128, 128).data;
    g.fillStyle = color;
    for (let y = step / 2; y < 128; y += step)
      for (let x = step / 2; x < 128; x += step) {
        const k = (((y | 0) * 128) + (x | 0)) * 4;
        if (d[k] > 128) { g.beginPath(); g.arc(ox + x, y, rad, 0, 6.2832); g.fill(); }
      }
  }

  function hand(ox) {
    return () => {
      const R = (x, y, w, h, r) => {
        m.beginPath();
        m.moveTo(x + r, y);
        m.arcTo(x + w, y, x + w, y + h, r);
        m.arcTo(x + w, y + h, x, y + h, r);
        m.arcTo(x, y + h, x, y, r);
        m.arcTo(x, y, x + w, y, r);
        m.closePath(); m.fill();
      };
      R(34, 52, 62, 62, 16);  // palm
      R(37, 20, 14, 40, 7);   // index
      R(53, 10, 14, 50, 7);   // middle
      R(69, 15, 14, 45, 7);   // ring
      R(84, 26, 12, 34, 6);   // pinky
      R(18, 56, 24, 28, 11);  // thumb
    };
  }

  function walker(ox) {
    return () => {
      m.beginPath(); m.arc(66, 25, 14, 0, 6.2832); m.fill(); // head
      m.lineWidth = 17;
      m.beginPath(); m.moveTo(62, 42); m.lineTo(58, 80); m.stroke(); // torso
      m.lineWidth = 11;
      m.beginPath(); m.moveTo(60, 47); m.lineTo(44, 70); m.lineTo(42, 84); m.stroke();
      m.beginPath(); m.moveTo(60, 47); m.lineTo(80, 62); m.lineTo(86, 76); m.stroke();
      m.lineWidth = 13;
      m.beginPath(); m.moveTo(58, 80); m.lineTo(42, 102); m.lineTo(34, 116); m.stroke();
      m.beginPath(); m.moveTo(58, 80); m.lineTo(76, 100); m.lineTo(86, 114); m.stroke();
    };
  }

  dot(0, '#ff6a1a', hand(0));      // lit hand
  dot(128, '#f4f6ff', walker(128)); // lit walker
  dot(256, '#262320', hand(256));   // unlit hand
  dot(384, '#22242a', walker(384)); // unlit walker

  // Seven-segment countdown digits
  const seg = {
    A: [8, 16, 32, 10], G: [8, 59, 32, 10], D: [8, 102, 32, 10],
    F: [8, 16, 10, 48], B: [30, 16, 10, 48],
    E: [8, 64, 10, 48], C: [30, 64, 10, 48],
  };
  const map = ['ABCDEF', 'BC', 'ABGED', 'ABGCD', 'FGBC',
               'AFGCD', 'AFGECD', 'ABC', 'ABCDEFG', 'ABCDFG'];
  g.fillStyle = '#ff7a1a';
  map.forEach((s, k) => {
    for (const ch of s) {
      const [x, y, w, h] = seg[ch];
      g.fillRect(512 + k * 48 + x, y, w, h);
    }
  });

  return cv;
}
