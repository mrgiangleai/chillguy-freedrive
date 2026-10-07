// Chill Drive editor — shared store server.
// Serves the built app (dist/) and persists the project + heavy assets on disk
// so every browser/tab on this machine sees the same state.
// Run: node server.mjs   (open http://localhost:4173)
import http from 'node:http';
import {createReadStream, existsSync, mkdirSync, readFileSync, statSync, unlinkSync, writeFileSync} from 'node:fs';
import {extname, join, normalize, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(HERE, 'dist');
const STORE = resolve(HERE, '.store');
const PORT = Number(process.env.PORT || 4173);

mkdirSync(join(STORE, 'blobs'), {recursive: true});
mkdirSync(join(STORE, 'meshes'), {recursive: true});
const PROJECT_FILE = join(STORE, 'project.json');
const REV_FILE = join(STORE, 'rev.txt');
let rev = existsSync(REV_FILE) ? (Number(readFileSync(REV_FILE, 'utf8')) || 0) : 0;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.wasm': 'application/wasm', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.map': 'application/json',
};

function send(res, code, body, type) {
  res.writeHead(code, {'Content-Type': type || 'text/plain', 'Cache-Control': 'no-store'});
  res.end(body);
}
function readBody(req, limit = 512 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => { size += c.length; if (size > limit) { reject(new Error('body too large')); req.destroy(); return; } chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
const safeKey = (k) => encodeURIComponent(k).replace(/[^A-Za-z0-9._%-]/g, '_');

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = url.pathname;
  try {
    if (p === '/api/project') {
      const baseRaw = req.headers['x-base-rev'] != null ? req.headers['x-base-rev'] : url.searchParams.get('base');
      if (req.method === 'GET') {
        res.setHeader('X-Rev', String(rev));
        if (!existsSync(PROJECT_FILE)) return send(res, 204, '');
        return send(res, 200, readFileSync(PROJECT_FILE), 'application/json');
      }
      if (req.method === 'PUT' || req.method === 'POST') {
        const body = await readBody(req);
        if (baseRaw != null && baseRaw !== '' && Number(baseRaw) !== rev) {
          res.setHeader('X-Rev', String(rev));
          return send(res, 409, existsSync(PROJECT_FILE) ? readFileSync(PROJECT_FILE) : '', 'application/json');
        }
        writeFileSync(PROJECT_FILE, body);
        rev += 1;
        writeFileSync(REV_FILE, String(rev));
        res.setHeader('X-Rev', String(rev));
        return send(res, 200, 'ok');
      }
      return send(res, 405, 'method');
    }
    let m = p.match(/^\/api\/blob\/(.+)$/);
    if (m) {
      const f = join(STORE, 'blobs', safeKey(decodeURIComponent(m[1])));
      if (req.method === 'GET') return existsSync(f) ? send(res, 200, readFileSync(f), 'application/octet-stream') : send(res, 404, '');
      if (req.method === 'PUT' || req.method === 'POST') { writeFileSync(f, await readBody(req)); return send(res, 200, 'ok'); }
      if (req.method === 'DELETE') { if (existsSync(f)) unlinkSync(f); return send(res, 200, 'ok'); }
      return send(res, 405, 'method');
    }
    m = p.match(/^\/api\/mesh\/(.+)$/);
    if (m) {
      const f = join(STORE, 'meshes', safeKey(decodeURIComponent(m[1])) + '.json');
      if (req.method === 'GET') return existsSync(f) ? send(res, 200, readFileSync(f), 'application/json') : send(res, 404, '');
      if (req.method === 'PUT' || req.method === 'POST') { writeFileSync(f, await readBody(req)); return send(res, 200, 'ok'); }
      if (req.method === 'DELETE') { if (existsSync(f)) unlinkSync(f); return send(res, 200, 'ok'); }
      return send(res, 405, 'method');
    }
    // static files from dist/
    let rel = normalize(decodeURIComponent(p)).replace(/^(\.\.[/\\])+/, '');
    let file = join(ROOT, rel);
    if (!file.startsWith(ROOT)) return send(res, 403, 'forbidden');
    if (p === '/' || !existsSync(file) || statSync(file).isDirectory()) file = join(ROOT, 'index.html');
    if (!existsSync(file)) return send(res, 404, 'not found');
    const ext = extname(file);
    const relPosix = rel.split('\\').join('/');
    const cache = relPosix.startsWith('/assets/')
      ? 'public, max-age=31536000, immutable'
      : /\.(glb|gltf|bin|png|jpe?g|webp|wasm|ico|svg|ktx2|hdr|exr|mp3|ogg|wav)$/i.test(ext)
        ? 'public, max-age=86400'
        : 'no-store';
    res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': cache});
    createReadStream(file).pipe(res);
  } catch (err) {
    send(res, 500, String((err && err.message) || err));
  }
});

server.listen(PORT, () => console.log('Chill Drive editor (shared store) → http://localhost:' + PORT));
