// Atlas 4×4 biển quảng cáo Times Square (thương hiệu tự chế, vẽ bằng Canvas 2D) — bản nháp do DeepSeek viết, Claude soát + vẽ thử.
export function adAtlas(THREE) {
  const S = 512, H = 256, canvas = document.createElement('canvas');
  canvas.width = canvas.height = 2048;
  const ctx = canvas.getContext('2d');
  const IMPACT = 'Impact, Arial Black, sans-serif', SERIF = 'Georgia, serif';

  // Fit text to the 460 px limit.
  function fit(text, maxW, px, font = IMPACT, weight = 900) {
    let s = px, cap = Math.min(maxW, 460);
    do { ctx.font = `${weight} ${s}px ${font}`; if (ctx.measureText(text).width <= cap) break; s -= 2; } while (s > 8);
    return s;
  }
  function type(text, x, y, maxW, px, fill, font = IMPACT, weight = 900, align = 'center') {
    const s = fit(text, maxW, px, font, weight);
    ctx.font = `${weight} ${s}px ${font}`; ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.fillStyle = fill; ctx.fillText(text, x, y);
  }
  function neon(text, x, y, maxW, px, color, font = IMPACT, weight = 900, fill = '#fff') {
    const s = fit(text, maxW, px, font, weight);
    ctx.font = `${weight} ${s}px ${font}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round'; ctx.shadowColor = color; ctx.shadowBlur = 26; ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, s * 0.075); ctx.strokeText(text, x, y);
    ctx.shadowBlur = 8; ctx.fillStyle = fill; ctx.fillText(text, x, y); ctx.shadowBlur = 0;
  }
  function stroked(text, x, y, maxW, px, fill, stroke, line = 5) {
    const s = fit(text, maxW, px);
    ctx.font = `900 ${s}px ${IMPACT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round'; ctx.lineWidth = line; ctx.strokeStyle = stroke; ctx.strokeText(text, x, y);
    ctx.fillStyle = fill; ctx.fillText(text, x, y);
  }
  function grad(c1, c2, c3) {
    const g = ctx.createLinearGradient(0, -H, 0, H);
    g.addColorStop(0, c1); if (c3) g.addColorStop(0.5, c3); g.addColorStop(1, c2);
    ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S); return g;
  }
  function burst(cx, cy, n, c1, c2, r = 430) {
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, a, a + Math.PI / n); ctx.closePath();
      ctx.fillStyle = i % 2 ? c1 : c2; ctx.fill();
    }
  }
  function star(x, y, r, fill) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r;
      i ? ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr) : ctx.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
  }
  function rr(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
  }
  function poly(a, f, s, l = 0) {
    ctx.beginPath(); ctx.moveTo(a[0], a[1]);
    for (let i = 2; i < a.length; i += 2) ctx.lineTo(a[i], a[i + 1]);
    ctx.closePath();
    if (f) { ctx.fillStyle = f; ctx.fill(); }
    if (s) { ctx.strokeStyle = s; ctx.lineWidth = l; ctx.stroke(); }
  }
  function disc(x, y, r, f, s = null, l = 0) { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); if (f) { ctx.fillStyle = f; ctx.fill(); } if (s) { ctx.strokeStyle = s; ctx.lineWidth = l; ctx.stroke(); } }
  function ell(x, y, rx, ry, f, s = null, l = 0, rot = 0) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot, 0, 6.2832); if (f) { ctx.fillStyle = f; ctx.fill(); } if (s) { ctx.strokeStyle = s; ctx.lineWidth = l; ctx.stroke(); } }
  function line(x1, y1, x2, y2, s, l = 2) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.strokeStyle = s; ctx.lineWidth = l; ctx.stroke(); }
  function box(x, y, w, h, f, s = null, l = 0) { ctx.fillStyle = f; ctx.fillRect(x, y, w, h); if (s) { ctx.strokeStyle = s; ctx.lineWidth = l; ctx.strokeRect(x, y, w, h); } }
  function edge() { ctx.shadowBlur = 0; ctx.globalAlpha = 1; ctx.strokeStyle = '#08080d'; ctx.lineWidth = 6; ctx.strokeRect(-H + 3, -H + 3, S - 6, S - 6); }

  // 1. CYBER MONDAY SALE
  function cyber() {
    grad('#1d0044', '#001d3c', '#06000f');
    const g = ctx.createRadialGradient(0, -30, 10, 0, 20, 340);
    g.addColorStop(0, 'rgba(105,45,255,.62)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S);
    for (let i = 0; i < 11; i++) { const y = 80 + i * i * 1.65; line(-H, y, H, y, 'rgba(34,235,255,.32)'); }
    for (let x = -H; x <= H; x += 48) line(x, H, x * 0.18, 78, 'rgba(34,235,255,.32)');
    for (let i = 0; i < 24; i++) box((i * 97) % 480 - 240, (i * 53) % 280 - 240, i % 4 ? 2 : 4, i % 4 ? 2 : 4, i % 3 ? '#74f7ff' : '#ff65db');
    box(-137, -234, 274, 30, '#ffd23f'); type('MIDNIGHT TECH DROP', 0, -219, 250, 21, '#1a0038');
    neon('CYBER', 0, -149, 450, 92, '#31f2ff'); neon('MONDAY', 0, -48, 450, 116, '#b64cff'); neon('SALE', 0, 69, 450, 126, '#ff35c8');
    box(-166, 147, 332, 54, '#07051a', '#ffd23f', 3); type('80% OFF', 0, 174, 290, 40, '#ffd23f');
  }

  // 2. NOW or NEVER
  function nowNever() {
    ctx.fillStyle = '#030107'; ctx.fillRect(-H, -H, S, S);
    const g = ctx.createRadialGradient(0, 0, 20, 0, 0, 330);
    g.addColorStop(0, 'rgba(255,26,140,.42)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S);
    ctx.save(); ctx.globalAlpha = 0.12;
    for (let i = -720; i < 720; i += 72) line(i, -H, i + 420, H, '#ff2b9a', 22);
    ctx.restore();
    ctx.strokeStyle = '#ff2b9a'; ctx.lineWidth = 7; ctx.shadowColor = '#ff2b9a'; ctx.shadowBlur = 22; ctx.strokeRect(-232, -232, 464, 464); ctx.shadowBlur = 0;
    poly([-226, -76, -166, -104, -194, -32, -138, 10], null, '#ffd400', 8);
    neon('NOW', 0, -139, 450, 150, '#ff238f', IMPACT, 900, '#fff4fa'); type('or', 0, -37, 100, 58, '#ffe3f2', SERIF, 'italic 700');
    neon('NEVER', 0, 83, 455, 132, '#ff238f', IMPACT, 900, '#fff4fa'); type('NO EXCUSES. JUST GO.', 0, 210, 420, 23, '#ffd4ea');
  }

  // 3. MEGA BITE burger
  function burger() {
    burst(0, 18, 18, '#ffb400', '#ff7200'); disc(0, 18, 205, 'rgba(255,245,190,.16)');
    stroked('MEGA', 0, -206, 440, 72, '#241000', '#fff0b8', 6); stroked('BITE', 0, 206, 440, 72, '#241000', '#fff0b8', 6);
    ctx.save(); ctx.translate(0, 18); ctx.shadowColor = 'rgba(80,15,0,.35)'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 12;
    const bun = ctx.createLinearGradient(0, -100, 0, 10); bun.addColorStop(0, '#ffd66d'); bun.addColorStop(1, '#e8821e');
    ctx.beginPath(); ctx.moveTo(-158, 2); ctx.bezierCurveTo(-158, -98, 158, -98, 158, 2); ctx.closePath();
    ctx.fillStyle = bun; ctx.fill(); ctx.strokeStyle = '#592000'; ctx.lineWidth = 7; ctx.stroke();
    for (const [sx, sy] of [[-104, -55], [-44, -75], [24, -70], [88, -50], [-70, -32], [8, -27], [66, -22]]) {
      ctx.save(); ctx.translate(sx, sy); ctx.rotate(0.35); ell(0, 0, 11, 5, '#fff2bd', '#a75c09', 2); ctx.restore();
    }
    ctx.beginPath(); ctx.moveTo(-172, 4);
    for (let i = 0; i < 6; i++) { const x = -172 + i * 57; ctx.quadraticCurveTo(x + 29, 34, x + 57, 4); }
    ctx.lineTo(172, 24); ctx.lineTo(-172, 24); ctx.closePath(); ctx.fillStyle = '#4fbf21'; ctx.fill(); ctx.strokeStyle = '#1f6508'; ctx.lineWidth = 5; ctx.stroke();
    poly([-156, 22, 156, 22, 156, 48, 122, 38, 88, 57, 48, 39, 8, 58, -32, 39, -74, 57, -116, 38, -156, 48], '#ffd42a', '#b87800', 5);
    ctx.shadowBlur = 0; rr(-152, 48, 304, 43, 17); ctx.fillStyle = '#3b170c'; ctx.fill(); ctx.strokeStyle = '#1e0a05'; ctx.lineWidth = 6; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-146, 86); ctx.lineTo(146, 86); ctx.quadraticCurveTo(158, 132, 86, 134); ctx.lineTo(-86, 134); ctx.quadraticCurveTo(-158, 132, -146, 86); ctx.closePath();
    ctx.fillStyle = bun; ctx.fill(); ctx.strokeStyle = '#592000'; ctx.lineWidth = 7; ctx.stroke(); ctx.restore();
  }

  // 4. FIZZ red soda bottle
  function fizz() {
    grad('#ff2638', '#72000c', '#d4001c'); burst(0, 10, 20, 'rgba(255,255,255,.07)', 'rgba(0,0,0,0)');
    for (let i = 0; i < 18; i++) disc((i * 67) % 430 - 215, (i * 113) % 420 - 210, 3 + i % 4 * 2, null, 'rgba(255,222,228,.45)', 2);
    ctx.save(); ctx.translate(0, 15);
    const bottle = ctx.createLinearGradient(-72, 0, 72, 0); bottle.addColorStop(0, '#260006'); bottle.addColorStop(0.5, '#b30020'); bottle.addColorStop(1, '#3a0009');
    ctx.beginPath(); ctx.moveTo(-32, -160); ctx.lineTo(32, -160); ctx.lineTo(36, -115); ctx.bezierCurveTo(74, -88, 76, -62, 72, 168);
    ctx.quadraticCurveTo(72, 197, 40, 197); ctx.lineTo(-40, 197); ctx.quadraticCurveTo(-72, 197, -72, 168); ctx.lineTo(-76, -62);
    ctx.bezierCurveTo(-76, -88, -36, -115, -36, -115); ctx.closePath(); ctx.fillStyle = bottle; ctx.fill(); ctx.strokeStyle = '#ff7884'; ctx.lineWidth = 6; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-48, -90); ctx.bezierCurveTo(-60, -35, -56, 92, -44, 176); ctx.lineTo(-27, 176);
    ctx.bezierCurveTo(-38, 88, -42, -35, -31, -90); ctx.closePath(); ctx.fillStyle = 'rgba(255,255,255,.22)'; ctx.fill();
    rr(-38, -181, 76, 23, 6); ctx.fillStyle = '#ffd4d8'; ctx.fill(); ctx.strokeStyle = '#7d0015'; ctx.lineWidth = 4; ctx.stroke();
    box(-60, 76, 120, 28, '#ffe4e8'); type('CHERRY', 0, 90, 106, 18, '#7a0010'); ctx.restore();
    ctx.shadowColor = '#5a000c'; ctx.shadowBlur = 12; type('FIZZ', 0, -209, 300, 82, '#fff8f9'); ctx.shadowBlur = 0;
    type('CHERRY BLAST', 0, 225, 360, 24, '#ffe2e6');
  }

  // 5. LIME RUSH can
  function lime() {
    grad('#dcff39', '#21a600', '#b5ff00'); ctx.save(); ctx.globalAlpha = 0.13; ctx.fillStyle = '#053800'; ctx.rotate(-0.4);
    for (let x = -600; x < 600; x += 120) ctx.fillRect(x, -400, 58, 800); ctx.restore();
    function slice(x, y, r) {
      ctx.save(); ctx.translate(x, y); disc(0, 0, r, '#2d8d00', '#0b3d00', 5); disc(0, 0, r * 0.82, '#f4ffb5'); ctx.fillStyle = '#8bdd18';
      for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r * 0.72, i * Math.PI / 4, (i + 0.78) * Math.PI / 4); ctx.closePath(); ctx.fill(); }
      ctx.restore();
    }
    slice(-198, -105, 58); slice(202, 105, 68);
    stroked('LIME', 0, -207, 430, 76, '#073700', '#f6ffb2', 6); stroked('RUSH', 0, 208, 430, 76, '#ffffff', '#0b3b00', 6);
    ctx.save(); ctx.translate(0, 8); ctx.rotate(-0.14);
    const can = ctx.createLinearGradient(-82, 0, 82, 0); can.addColorStop(0, '#e5ff83'); can.addColorStop(0.45, '#2fae00'); can.addColorStop(0.7, '#72d900'); can.addColorStop(1, '#d4ff51');
    rr(-82, -148, 164, 300, 18); ctx.fillStyle = can; ctx.fill(); ctx.strokeStyle = '#0a3a00'; ctx.lineWidth = 7; ctx.stroke();
    ell(0, -148, 82, 17, '#deff9a', '#0a3a00', 5); ell(0, 152, 82, 17, '#baf531', '#0a3a00', 5);
    box(-81, -8, 162, 58, '#073d00'); type('ZEST', 0, 21, 140, 42, '#ddff35'); box(-68, -138, 15, 274, 'rgba(255,255,255,.26)'); ctx.restore();
    for (let i = 0; i < 12; i++) disc((i * 83) % 440 - 220, (i * 59) % 360 - 180, 3 + i % 3, 'rgba(255,255,255,.55)');
  }

  // 6. DANCE CLUB neon script
  function dance() {
    grad('#0a001e', '#24003f', '#02000a'); box(-224, -H, 16, S, 'rgba(255,40,210,.18)'); box(208, -H, 16, S, 'rgba(46,226,255,.18)');
    const glow = ctx.createRadialGradient(0, 0, 10, 0, 0, 280); glow.addColorStop(0, 'rgba(255,44,214,.28)'); glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    ctx.save(); ctx.translate(0, -184);
    const ball = ctx.createRadialGradient(-12, -12, 3, 0, 0, 43); ball.addColorStop(0, '#ffffff'); ball.addColorStop(1, '#8f8fb8');
    disc(0, 0, 42, ball, '#e9e9ff', 3); ctx.beginPath(); ctx.arc(0, 0, 40, 0, 6.2832); ctx.clip();
    for (let x = -36; x <= 36; x += 14) line(x, -42, x, 42, 'rgba(30,20,60,.65)', 2);
    for (let y = -34; y <= 34; y += 13) { ctx.beginPath(); ctx.ellipse(0, y, 42, 9, 0, 0, 6.2832); ctx.strokeStyle = 'rgba(30,20,60,.65)'; ctx.lineWidth = 2; ctx.stroke(); }
    ctx.restore(); star(-185, -208, 13, '#ff4edb'); star(180, -200, 9, '#57f3ff');
    neon('DANCE', 0, -76, 450, 100, '#ff31d4', SERIF, 'italic 900'); neon('CLUB', 0, 48, 450, 124, '#2de2ff', SERIF, 'italic 900');
    type('SATURDAY • MIDNIGHT', 0, 190, 410, 25, '#ffd1f7');
    ctx.strokeStyle = '#7b2cff'; ctx.lineWidth = 5; ctx.shadowColor = '#7b2cff'; ctx.shadowBlur = 18; ctx.strokeRect(-230, -230, 460, 460); ctx.shadowBlur = 0;
  }

  // 7. SKYLINE AIR
  function air() {
    const sky = ctx.createLinearGradient(0, -H, 0, H); sky.addColorStop(0, '#053f9a'); sky.addColorStop(0.55, '#1fbaff'); sky.addColorStop(1, '#ffd391');
    ctx.fillStyle = sky; ctx.fillRect(-H, -H, S, S);
    const sun = ctx.createRadialGradient(165, -142, 8, 165, -142, 130); sun.addColorStop(0, 'rgba(255,255,225,.95)'); sun.addColorStop(1, 'rgba(255,235,180,0)'); ctx.fillStyle = sun; ctx.fillRect(-H, -H, S, S);
    for (const [x, y, rx, ry] of [[-168, -78, 62, 19], [-108, -57, 42, 14], [102, 126, 68, 18], [164, 145, 40, 13], [-10, -172, 38, 11]]) ell(x, y, rx, ry, 'rgba(255,255,255,.72)');
    ctx.setLineDash([11, 13]); ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-210, 166); ctx.quadraticCurveTo(-30, 90, 208, 150); ctx.stroke(); ctx.setLineDash([]);
    ctx.save(); ctx.translate(30, 26); ctx.rotate(-0.2); ctx.shadowColor = 'rgba(0,40,100,.35)'; ctx.shadowBlur = 18; ctx.fillStyle = '#ffffff';
    poly([-26, 2, 22, -96, 50, -96, 8, 2], '#fff'); poly([-26, -2, 10, 86, 36, 86, 30, 0], '#fff');
    ctx.beginPath(); ctx.moveTo(-142, 0); ctx.bezierCurveTo(-100, -22, 80, -24, 148, 0); ctx.bezierCurveTo(80, 22, -100, 22, -142, 0); ctx.fill();
    poly([-120, 0, -157, -48, -132, -48, -96, 0], '#fff'); ctx.shadowBlur = 0;
    ell(94, -4, 20, 6, '#0a4b9e'); for (let i = 0; i < 8; i++) disc(-92 + i * 22, -3, 3, '#0a4b9e'); ctx.restore();
    type('SKYLINE', 0, -207, 450, 82, '#ffffff'); type('NONSTOP TO THE SUN', 0, -132, 350, 22, '#e9fbff'); type('AIR', 0, 201, 450, 98, '#ffffff');
  }

  // 8. NEWS 24 LIVE
  function news() {
    grad('#ff1f2d', '#a80016', '#f0001f'); poly([-H, 112, 0, -70, H, 42, H, 150, -H, 210], 'rgba(255,255,255,.12)');
    type('NEWS', 0, -201, 450, 96, '#ffffff'); stroked('24', 0, -50, 430, 180, '#ffffff', '#77000e', 10);
    rr(-118, 70, 236, 68, 8); ctx.fillStyle = '#ffffff'; ctx.fill(); ctx.strokeStyle = '#3a0007'; ctx.lineWidth = 4; ctx.stroke(); type('LIVE', 0, 104, 190, 58, '#e0001b');
    box(-H, 188, S, 54, '#0a0a0d'); box(-H, 188, S, 6, '#ffce00'); type('BREAKING • WEATHER • SPORTS • MARKETS • TRAFFIC', 0, 219, 460, 20, '#ffffff', IMPACT, 700);
  }

  // 9. BROADWAY TONIGHT
  function broadway() {
    grad('#7a0015', '#2b0006', '#4a0010'); ctx.save(); ctx.translate(0, -28);
    for (let i = 0; i < 24; i++) { const a = i * Math.PI / 12; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 540, a, a + 0.055); ctx.closePath(); ctx.fillStyle = 'rgba(255,205,85,.11)'; ctx.fill(); }
    ctx.restore();
    const glow = ctx.createRadialGradient(0, -28, 10, 0, -28, 300); glow.addColorStop(0, 'rgba(255,221,120,.24)'); glow.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    const gold = ctx.createLinearGradient(0, -230, 0, 90); gold.addColorStop(0, '#fff6c8'); gold.addColorStop(0.5, '#ffd257'); gold.addColorStop(1, '#a96400');
    for (let i = -210; i <= 210; i += 35) for (const [x, y] of [[i, -222], [i, 222], [-222, i], [222, i]]) disc(x, y, 5, '#ffe27a');
    type('BROADWAY', 0, -142, 440, 88, gold, SERIF, 700); type('TONIGHT', 0, -34, 455, 112, gold);
    type('ONE NIGHT ONLY • 8 PM', 0, 78, 390, 26, '#ffeeb0', SERIF, 700); star(0, 138, 25, '#ffd35c'); type('THE GILDED STAGE', 0, 196, 380, 21, '#ffcf58', SERIF, 700);
  }

  // 10. TEMPO wrist watch
  function tempo() {
    grad('#00262e', '#03090d', '#004c54'); ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = '#7fffea';
    poly([-H, -H, -60, -H, 190, H, -H, H], '#7fffea'); ctx.restore();
    const glow = ctx.createRadialGradient(0, 40, 20, 0, 40, 250); glow.addColorStop(0, 'rgba(0,235,200,.24)'); glow.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    type('TEMPO', 0, -213, 450, 56, '#f9f4e7'); ctx.save(); ctx.translate(0, 40);
    box(-48, -170, 96, 132, '#25180c'); box(-48, 38, 96, 178, '#1b120b');
    for (let y = -158; y < 5; y += 15) { line(-38, y, -28, y, 'rgba(238,205,140,.35)'); line(28, y, 38, y, 'rgba(238,205,140,.35)'); }
    for (let y = 50; y < 208; y += 15) { line(-38, y, -28, y, 'rgba(238,205,140,.35)'); line(28, y, 38, y, 'rgba(238,205,140,.35)'); }
    rr(-72, -80, 22, 34, 5); ctx.fillStyle = '#b99352'; ctx.fill(); rr(50, -80, 22, 34, 5); ctx.fill();
    const metal = ctx.createRadialGradient(-35, -35, 8, 0, 0, 116); metal.addColorStop(0, '#fff1bd'); metal.addColorStop(0.45, '#d5ad5c'); metal.addColorStop(1, '#4c3517');
    disc(0, 0, 112, metal, '#3d290e', 4); disc(0, 0, 96, '#04161a', '#8d692d', 3);
    for (let i = 0; i < 60; i++) { const a = i * Math.PI / 30, inner = i % 5 ? 82 : 74; line(Math.cos(a) * inner, Math.sin(a) * inner, Math.cos(a) * 88, Math.sin(a) * 88, '#e5cc90', i % 5 ? 1.5 : 3); }
    type('TEMPO', 0, 46, 100, 15, '#d9bd78', SERIF, 700); ctx.lineCap = 'round';
    line(0, 0, Math.cos(-2.1) * 49, Math.sin(-2.1) * 49, '#f2dc9d', 9); line(0, 0, Math.cos(-0.9) * 72, Math.sin(-0.9) * 72, '#f2dc9d', 6);
    line(0, 18, Math.cos(-0.35) * 79, Math.sin(-0.35) * 79, '#ff8a25', 2.5); disc(0, 0, 7, '#ffb33a'); disc(0, 0, 3, '#241605');
    rr(108, -17, 14, 34, 5); ctx.fillStyle = '#d5ad5c'; ctx.fill(); ctx.restore();
  }

  // 11. STRIDE sneaker
  function stride() {
    grad('#ffcb05', '#ff4e00', '#ffb000'); ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 8;
    for (let i = 0; i < 7; i++) line(-260, -130 + i * 45, -80, -155 + i * 45, 'rgba(255,255,255,.35)', 8); ctx.restore();
    type('STRIDE', 0, -207, 455, 90, '#13100c'); type('BUILT TO FLY', 0, -141, 320, 23, '#2b1400');
    ctx.save(); ctx.translate(0, 38); ctx.rotate(-0.09); ell(0, 96, 190, 18, 'rgba(45,10,0,.25)');
    ctx.beginPath(); ctx.moveTo(-190, 59); ctx.quadraticCurveTo(-200, 92, -150, 99); ctx.lineTo(145, 99); ctx.quadraticCurveTo(195, 95, 182, 64); ctx.lineTo(168, 52); ctx.lineTo(-180, 58); ctx.closePath();
    ctx.fillStyle = '#f8efd9'; ctx.fill(); ctx.strokeStyle = '#1b150e'; ctx.lineWidth = 7; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-174, 61); ctx.lineTo(-170, 18); ctx.quadraticCurveTo(-162, -30, -105, -46); ctx.lineTo(-10, -54); ctx.quadraticCurveTo(65, -52, 110, -8); ctx.lineTo(172, 47); ctx.lineTo(170, 62); ctx.closePath();
    ctx.fillStyle = '#141414'; ctx.fill(); ctx.strokeStyle = '#0a0907'; ctx.lineWidth = 6; ctx.stroke();
    poly([-170, 58, -166, 26, -150, -8, -102, -20, -66, 20, -118, 62], '#ff5a00');
    line(-112, -4, 18, 28, '#ff7a00', 16); line(-100, 17, 28, 45, '#ffd400', 8);
    for (let i = 0; i < 5; i++) line(-96 + i * 18, -31 + i * 1.5, -72 + i * 18, -7 + i * 1.5, '#f6e9cd', 6);
    ell(-139, -17, 17, 29, '#f8efd9', '#1b150e', 4, -0.5);
    for (let i = 0; i < 6; i++) line(-145 + i * 54, 88, -137 + i * 54, 99, '#3a2e20', 3); ctx.restore();
    type('RUN LOUD', 0, 222, 360, 27, '#1b0d00');
  }

  // 12. PHONE X rainbow
  function phone() {
    box(-H, -H, S, S, '#04020b');
    for (const [color, x, y, r] of [['#ff005c', -200, -170, 190], ['#ff9e00', 190, -140, 170], ['#00eaff', 190, 160, 200], ['#7a2bff', -190, 150, 180]]) {
      const g = ctx.createRadialGradient(x, y, 4, x, y, r); g.addColorStop(0, color); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.globalAlpha = 0.5; ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S);
    }
    ctx.globalAlpha = 1;
    const rainbow = ctx.createLinearGradient(-210, 0, 210, 0); rainbow.addColorStop(0, '#ff5ad9'); rainbow.addColorStop(0.25, '#ffe14a'); rainbow.addColorStop(0.5, '#54ffca'); rainbow.addColorStop(0.75, '#4bd6ff'); rainbow.addColorStop(1, '#b46bff');
    type('PHONE X', 0, -207, 450, 72, rainbow);
    ctx.save(); ctx.translate(0, 40); ctx.rotate(-0.08); ctx.shadowColor = '#b32bff'; ctx.shadowBlur = 32;
    rr(-100, -165, 200, 330, 34); ctx.fillStyle = '#08080d'; ctx.fill(); ctx.strokeStyle = '#e5e5ef'; ctx.lineWidth = 5; ctx.stroke(); ctx.shadowBlur = 0;
    rr(-86, -150, 172, 300, 25);
    const screen = ctx.createLinearGradient(-86, -150, 86, 150); screen.addColorStop(0, '#ff1e7a'); screen.addColorStop(0.32, '#ffcf00'); screen.addColorStop(0.62, '#00ffd0'); screen.addColorStop(1, '#4b2bff');
    ctx.fillStyle = screen; ctx.fill(); ctx.save(); rr(-86, -150, 172, 300, 25); ctx.clip();
    disc(-30, -75, 55, 'rgba(255,255,255,.28)'); disc(48, 90, 80, 'rgba(255,255,255,.24)');
    ctx.beginPath(); ctx.arc(0, 0, 42, 0, 6.2832); ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = 5; ctx.stroke(); ctx.restore();
    rr(-35, -158, 70, 19, 9); ctx.fillStyle = '#08080d'; ctx.fill(); rr(-27, 145, 54, 5, 2.5); ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fill(); ctx.restore();
    type('BEYOND', 0, 228, 300, 20, '#f7ecff');
  }

  // 13. BREW coffee
  function brew() {
    grad('#3b1405', '#120602', '#6f2b0a');
    const glow = ctx.createRadialGradient(0, 20, 20, 0, 20, 300); glow.addColorStop(0, 'rgba(255,190,90,.36)'); glow.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    for (const [x, y, r] of [[-190, -170, 21], [180, -140, 17], [-200, 160, 19], [190, 170, 23], [-150, 30, 13], [165, 35, 12]]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(r); ell(0, 0, 18, 11, 'rgba(25,8,2,.55)'); line(-13, 0, 13, 0, 'rgba(255,200,120,.24)', 2); ctx.restore();
    }
    ctx.strokeStyle = 'rgba(255,235,205,.4)'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    for (const dx of [-52, 0, 52]) { ctx.beginPath(); ctx.moveTo(dx + 10, -147); ctx.bezierCurveTo(dx - 18, -126, dx + 22, -108, dx - 4, -86); ctx.stroke(); }
    type('BREW', 0, -204, 450, 92, '#ffe7c2'); ctx.save(); ctx.translate(0, 75);
    rr(-116, -121, 232, 34, 10); ctx.fillStyle = '#2a1308'; ctx.fill(); ell(0, -118, 112, 20, '#5d2e12', '#1b0a03', 4);
    const cup = ctx.createLinearGradient(-100, 0, 100, 0); cup.addColorStop(0, '#f6d9ad'); cup.addColorStop(0.5, '#e9b87b'); cup.addColorStop(1, '#9a5a28');
    ctx.beginPath(); ctx.moveTo(-96, -92); ctx.lineTo(96, -92); ctx.lineTo(73, 118); ctx.quadraticCurveTo(68, 136, 48, 136); ctx.lineTo(-48, 136); ctx.quadraticCurveTo(-68, 136, -73, 118); ctx.closePath();
    ctx.fillStyle = cup; ctx.fill(); ctx.strokeStyle = '#3d1b09'; ctx.lineWidth = 6; ctx.stroke();
    poly([-84, -14, 84, -14, 74, 91, -74, 91], '#40200d'); line(-83, -9, 83, -9, '#ffcf86', 3);
    type('ROAST', 0, 24, 135, 25, '#ffcf86', SERIF, 700); type('DAILY', 0, 61, 120, 21, '#e9b87b', IMPACT, 700);
    ell(25, -118, 17, 6, '#150702'); ctx.restore();
  }

  // 14. TIMES SQ vertical blue
  function times() {
    const g = ctx.createLinearGradient(0, -H, 0, H); g.addColorStop(0, '#0035b8'); g.addColorStop(0.5, '#0077ff'); g.addColorStop(1, '#00124d');
    ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S);
    const glow = ctx.createRadialGradient(0, 0, 10, 0, 0, 330); glow.addColorStop(0, 'rgba(83,185,255,.38)'); glow.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    ctx.save(); ctx.globalAlpha = 0.22; ctx.fillStyle = '#dff5ff';
    for (let i = -260; i < 300; i += 90) poly([i, H, i + 25, -25, i + 80, -25, i + 55, H], '#dff5ff'); ctx.restore();
    let bx = -H; for (let i = 0; i < 18; i++) { const w = 18 + (i * 37) % 36, h = 60 + (i * 71) % 130; box(bx, H - h, w, h, '#00133f'); bx += w + 4; }
    for (let i = 0; i < 44; i++) box(-240 + (i * 53) % 470, 166 + (i * 37) % 78, 3, 4, '#ffd76a');
    const yellow = ctx.createLinearGradient(-220, 0, 220, 0); yellow.addColorStop(0, '#fff3a0'); yellow.addColorStop(0.5, '#ffd400'); yellow.addColorStop(1, '#ffef7a');
    ctx.save(); ctx.rotate(-Math.PI / 2); ctx.shadowColor = '#ffd400'; ctx.shadowBlur = 22; type('TIMES SQ', 0, 0, 455, 116, yellow); ctx.shadowBlur = 0; ctx.restore();
    box(145, -231, 86, 36, '#ffd400'); type('NYC', 188, -213, 70, 25, '#001a55'); type('ALL NIGHT', 190, 211, 94, 16, '#e7f6ff');
  }

  // 15. PREMIERE film strip
  function premiere() {
    grad('#140018', '#000000', '#3c0034'); ctx.save(); ctx.globalAlpha = 0.18;
    poly([-70, -H, 10, -H, 170, H, -130, H], '#ffd76a', null, 0); poly([170, -H, 230, -H, 300, H, 230, H], '#ff5ac8'); ctx.restore();
    for (let i = 0; i < 34; i++) box((i * 97) % 480 - 240, (i * 61) % 420 - 220, i % 6 ? 2 : 3, i % 6 ? 2 : 3, i % 5 ? 'rgba(255,232,180,.65)' : '#ff5ac8');
    const gold = ctx.createLinearGradient(0, -240, 0, 40); gold.addColorStop(0, '#fff2b8'); gold.addColorStop(0.5, '#ffd25a'); gold.addColorStop(1, '#a86c12');
    type('PREMIERE', 0, -188, 450, 82, gold, SERIF, 700); type('A MIDNIGHT PICTURE', 0, -112, 400, 22, '#f1caff', SERIF, 700);
    star(-190, -194, 15, '#ffdb73'); star(188, -178, 10, '#ff6bd6');
    ctx.save(); ctx.translate(0, 86); ctx.rotate(-0.2); box(-300, -58, 600, 116, '#09090b', '#c99a32', 5);
    for (let x = -284; x < 292; x += 34) { box(x, -49, 18, 12, '#f4d98c'); box(x, 37, 18, 12, '#f4d98c'); }
    for (let i = 0; i < 5; i++) { const x = -258 + i * 106; box(x, -31, 84, 62, i === 2 ? '#ffd25a' : '#26102a', '#c99a32', 3); if (i === 2) disc(x + 42, 0, 15, '#3c0034'); }
    ctx.restore(); type('ONE SHOW ONLY', 0, 222, 380, 23, '#ffd25a', SERIF, 700);
  }

  // 16. ICE COLD frost
  function ice() {
    const g = ctx.createLinearGradient(0, -H, 0, H); g.addColorStop(0, '#d8fbff'); g.addColorStop(0.45, '#19a8ff'); g.addColorStop(1, '#00358f');
    ctx.fillStyle = g; ctx.fillRect(-H, -H, S, S);
    const glow = ctx.createRadialGradient(-40, -70, 10, -40, -70, 300); glow.addColorStop(0, 'rgba(255,255,255,.75)'); glow.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = glow; ctx.fillRect(-H, -H, S, S);
    for (let i = 0; i < 18; i++) { const x = (i % 2 ? 1 : -1) * (180 + (i * 29) % 76), y = (i * 83) % 500 - 250; poly([x, y, x - 38, y + 22, x - 16, y + 44], 'rgba(255,255,255,.28)'); }
    ctx.shadowColor = '#bffcff'; ctx.shadowBlur = 24; stroked('ICE', 0, -151, 450, 148, '#f7ffff', '#0062c8', 8); stroked('COLD', 0, -2, 455, 158, '#dff8ff', '#004aa8', 8); ctx.shadowBlur = 0;
    ctx.save(); ctx.translate(0, 151); ctx.lineCap = 'round'; ctx.strokeStyle = '#e8ffff'; ctx.lineWidth = 6; ctx.shadowColor = '#8ff8ff'; ctx.shadowBlur = 16;
    for (let i = 0; i < 6; i++) { ctx.save(); ctx.rotate(i * Math.PI / 3); line(0, 0, 0, -50, '#e8ffff', 6); line(0, -28, -14, -40, '#e8ffff', 6); line(0, -28, 14, -40, '#e8ffff', 6); ctx.restore(); }
    disc(0, 0, 8, '#ffffff'); ctx.shadowBlur = 0; ctx.restore();
    type('SUB ZERO', 0, 226, 320, 23, '#e8feff');
    for (let i = 0; i < 13; i++) disc((i * 71) % 440 - 220, (i * 101) % 440 - 220, 2 + i % 3, 'rgba(255,255,255,.65)');
  }

  const designs = [cyber, nowNever, burger, fizz, lime, dance, air, news, broadway, tempo, stride, phone, brew, times, premiere, ice];

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      ctx.save(); ctx.translate(c * S + H, r * S + H);
      ctx.beginPath(); ctx.rect(-H, -H, S, S); ctx.clip();
      designs[r * 4 + c](); edge(); ctx.restore();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return { texture, cols: 4, rows: 4 };
}
