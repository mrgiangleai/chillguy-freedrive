// Bundles src/ → docs/app.js + docs/style.css (minified) for GitHub Pages.
import { build } from 'esbuild';
import { readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

const common = { bundle: true, minify: true, legalComments: 'none', logLevel: 'warning' };

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
