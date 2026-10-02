// Bundles src/ → docs/app.js + docs/style.css (minified) for GitHub Pages.
import { build } from 'esbuild';
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';

const common = { bundle: true, minify: true, legalComments: 'none', logLevel: 'warning', charset: 'utf8' };

await build({
  ...common,
  entryPoints: ['src/main.js'],
  outfile: 'docs/app.js',
  format: 'esm',
  target: 'es2020',
  drop: ['debugger'],
  legalComments: 'eof',           // giữ dòng giấy phép MIT của three.js
});

await build({ ...common, entryPoints: ['src/style.css'], outfile: 'docs/style.css' });

for (const f of ['docs/app.js', 'docs/style.css']) {
  const raw = statSync(f).size;
  const gz = gzipSync(readFileSync(f), { level: 9 }).length;
  console.log(`${f.padEnd(16)} ${(raw / 1024).toFixed(1).padStart(7)} KB  (gzip ${(gz / 1024).toFixed(1)} KB)`);
}

// gắn ?v=<hash> vào index.html để trình duyệt lấy bản mới ngay khi file thay đổi (tránh dính cache cũ)
let html = readFileSync('docs/index.html', 'utf8');
for (const f of ['app.js', 'style.css']) {
  const v = createHash('md5').update(readFileSync('docs/' + f)).digest('hex').slice(0, 8);
  html = html.replace(new RegExp(`(["'])${f.replace('.', '\\.')}(\\?v=[0-9a-f]*)?\\1`, 'g'), `$1${f}?v=${v}$1`);
}
writeFileSync('docs/index.html', html);
