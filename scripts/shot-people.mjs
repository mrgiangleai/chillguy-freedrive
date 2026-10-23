// Chụp fixture người đi bộ 3D (scripts/people-preview.js): node scripts/shot-people.mjs [ids,…]
// => shots/people-front.png, shots/people-side.png (+ bản phóng to từng model: shots/people-<id>-front|side.png nếu truyền ids).
// Tự bundle, tự chạy máy chủ tĩnh tạm, xoá file tạm trong docs/ khi xong. Exit 1 nếu trang lỗi / model không tải được.
import { build } from 'esbuild';
import http from 'node:http';
import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { chromium } from '/Users/keinle/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const only = process.argv[2] || '';
mkdirSync('shots', { recursive: true });
await build({ entryPoints: ['scripts/people-preview.js'], bundle: true, format: 'esm', outfile: 'docs/people-check.js', logLevel: 'warning' });
writeFileSync('docs/people-check.html', '<!doctype html><meta charset=utf-8><body style="margin:0"><script type="module" src="people-check.js"></script>');
const TYPES = { '.js': 'text/javascript', '.html': 'text/html', '.glb': 'model/gltf-binary' };
const srv = http.createServer((q, s) => { const f = join('docs', decodeURIComponent(q.url.split('?')[0])); if (!existsSync(f)) { s.writeHead(404); return s.end(); } s.writeHead(200, { 'content-type': TYPES[extname(f)] || 'application/octet-stream' }); s.end(readFileSync(f)); }).listen(0);
const port = srv.address().port;
let bad = 0;
const b = await chromium.launch({ executablePath: process.env.HOME + '/Library/Caches/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-mac-arm64/chrome-headless-shell', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
try {
  const shots = [['front', ''], ['side', '']];
  for (const id of only.split(',').filter(Boolean)) shots.push(['front', id], ['side', id]);
  for (const [v, id] of shots) {
    const p = await b.newPage({ viewport: id ? { width: 900, height: 800 } : { width: 1800, height: 700 } });
    p.on('pageerror', (e) => { bad++; console.log('PAGEERR', e.message); });
    p.on('console', (m) => m.type() === 'error' && (bad++, console.log('ERR', m.text())));
    await p.goto(`http://localhost:${port}/people-check.html?v=${v}${id ? '&only=' + id : ''}`);
    await p.waitForFunction('window.done', null, { timeout: 180000 });
    const out = `shots/people-${id ? id + '-' : ''}${v}.png`;
    await p.screenshot({ path: out }); console.log('ảnh', out, await p.evaluate('window.info.join(" ")'));
    await p.close();
  }
} finally { await b.close(); srv.close(); rmSync('docs/people-check.js', { force: true }); rmSync('docs/people-check.html', { force: true }); }
process.exit(bad ? 1 : 0);
