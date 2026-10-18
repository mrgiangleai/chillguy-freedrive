// Chill Drive editor — shared store server (multi-project).
// Serves the built app (dist/) and persists one folder per project so every
// browser/tab on this machine sees the same state.
// Run: node server.mjs   (open http://localhost:4173)
import http from 'node:http';
import {createReadStream, existsSync, mkdirSync, readFileSync, statSync, unlinkSync, writeFileSync, readdirSync, rmSync, cpSync} from 'node:fs';
import {extname, join, normalize, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(HERE, 'dist');
const STORE = resolve(HERE, '.store');
const PROJECTS = join(STORE, 'projects');
const PORT = Number(process.env.PORT || 4173);

mkdirSync(join(STORE, 'blobs'), {recursive: true});
mkdirSync(join(STORE, 'meshes'), {recursive: true});
mkdirSync(PROJECTS, {recursive: true});

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.wasm': 'application/wasm', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.map': 'application/json',
};

const safeKey = (k) => encodeURIComponent(k).replace(/[^A-Za-z0-9._%-]/g, '_');
// Human-readable, filesystem-safe token from a project name (keeps unicode letters).
const fileKey = (s) => (String(s).trim().replace(/[^\p{L}\p{N}._-]+/gu, '_').replace(/^_+|_+$/g, '').slice(0, 40) || 'project');
function send(res, code, body, type, extra) {
  res.writeHead(code, Object.assign({'Content-Type': type || 'text/plain', 'Cache-Control': 'no-store'}, extra || {}));
  res.end(body);
}
function readBody(req, limit = 512 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on('data', (c) => { size += c.length; if (size > limit) { reject(new Error('body too large')); req.destroy(); return; } chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
const projDir = (id) => (id && id !== 'default' ? join(PROJECTS, safeKey(id)) : STORE);
function ensureDir(d) { mkdirSync(join(d, 'blobs'), {recursive: true}); mkdirSync(join(d, 'meshes'), {recursive: true}); }
function revOf(d) { const f = join(d, 'rev.txt'); return existsSync(f) ? (Number(readFileSync(f, 'utf8')) || 0) : 0; }
function metaOf(d, id) { try { const f = join(d, 'meta.json'); return existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : {id}; } catch (e) { return {id}; } }

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = url.pathname;
  const id = url.searchParams.get('project') || 'default';
  const dir = projDir(id);
  const baseRaw = req.headers['x-base-rev'] != null ? req.headers['x-base-rev'] : url.searchParams.get('base');
  try {
    if (p === '/api/projects') {
      if (req.method === 'GET') {
        const out = [];
        if (existsSync(join(STORE, 'project.json'))) { const m = metaOf(STORE, 'default'); out.push({id: 'default', name: m.name || 'Default', updatedAt: m.updatedAt || 0, thumb: m.thumb || null}); }
        if (existsSync(PROJECTS)) for (const d of readdirSync(PROJECTS)) {
          const pd = join(PROJECTS, d);
          if (existsSync(join(pd, 'project.json'))) { const m = metaOf(pd, d); out.push({id: m.id || d, name: m.name || d, updatedAt: m.updatedAt || 0, thumb: m.thumb || null}); }
        }
        out.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        return send(res, 200, JSON.stringify(out), 'application/json');
      }
      if (req.method === 'POST') {
        const raw = (await readBody(req)).toString();
        const body = raw ? JSON.parse(raw) : {};
        const name = String(body.name || 'Project').slice(0, 60);
        // duplicate an existing project (copies state, blobs, meshes and thumbnail)
        if (body.duplicate && body.id) {
          const src = projDir(body.id);
          if (!existsSync(join(src, 'project.json'))) return send(res, 404, 'no source');
          const pid = 'p-' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
          const pd = projDir(pid); mkdirSync(pd, {recursive: true});
          for (const it of ['project.json', 'rev.txt', 'blobs', 'meshes']) { const s = join(src, it); if (existsSync(s)) cpSync(s, join(pd, it), {recursive: true}); }
          try { for (const f of readdirSync(src)) if (f.endsWith('.png')) writeFileSync(join(pd, f), readFileSync(join(src, f))); } catch (e) { /* ignore */ }
          const sm = metaOf(src, body.id);
          writeFileSync(join(pd, 'meta.json'), JSON.stringify({id: pid, name, updatedAt: Date.now(), thumb: sm.thumb || null, thumbFile: sm.thumbFile || null}));
          return send(res, 200, JSON.stringify({id: pid, name}), 'application/json');
        }
        const pid = 'p-' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
        const pd = projDir(pid); ensureDir(pd);
        writeFileSync(join(pd, 'meta.json'), JSON.stringify({id: pid, name, updatedAt: Date.now()}));
        writeFileSync(join(pd, 'project.json'), body.state ? JSON.stringify(body.state) : '{}');
        writeFileSync(join(pd, 'rev.txt'), '0');
        return send(res, 200, JSON.stringify({id: pid, name}), 'application/json');
      }
      if (req.method === 'PATCH') { // rename
        const raw = (await readBody(req)).toString();
        const body = raw ? JSON.parse(raw) : {};
        const target = projDir(body.id || '');
        if (!body.id || !existsSync(join(target, 'project.json'))) return send(res, 404, 'not found');
        const m = metaOf(target, body.id);
        m.name = String(body.name || m.name || 'Project').slice(0, 60);
        m.updatedAt = Date.now();
        writeFileSync(join(target, 'meta.json'), JSON.stringify(m));
        return send(res, 200, JSON.stringify({id: body.id, name: m.name}), 'application/json');
      }
      if (req.method === 'DELETE') {
        const did = url.searchParams.get('id');
        if (!did || did === 'default') return send(res, 400, 'cannot delete');
        const target = projDir(did);
        if (existsSync(target)) rmSync(target, {recursive: true, force: true});
        return send(res, 200, 'ok');
      }
      return send(res, 405, 'method');
    }
    if (p === '/api/thumb') { // project thumbnail (raw image bytes), file named after the project
      const td = projDir(id);
      const mf = join(td, 'meta.json');
      const readMeta = () => { try { return existsSync(mf) ? JSON.parse(readFileSync(mf, 'utf8')) : {}; } catch (e) { return {}; } };
      if (req.method === 'GET') {
        const m = readMeta();
        for (const name of [m.thumbFile, 'thumb.png']) { if (!name) continue; const f = join(td, name); if (existsSync(f)) return send(res, 200, readFileSync(f), 'image/png'); }
        return send(res, 404, '');
      }
      if (req.method === 'PUT' || req.method === 'POST') {
        const bytes = await readBody(req);
        if (bytes.length > 3 * 1024 * 1024) return send(res, 413, 'too large');
        const m = readMeta();
        const fname = fileKey(String(m.name || id || 'project')) + '-' + safeKey(String(id)) + '.png';
        writeFileSync(join(td, fname), bytes);
        try { for (const f of readdirSync(td)) if (f.endsWith('.png') && f !== fname) unlinkSync(join(td, f)); } catch (e) { /* ignore */ }
        m.thumb = bytes.toString('base64'); m.thumbFile = fname; m.updatedAt = Date.now();
        writeFileSync(mf, JSON.stringify(m));
        return send(res, 200, 'ok');
      }
      if (req.method === 'DELETE') {
        const m = readMeta();
        for (const name of [m.thumbFile, 'thumb.png']) { if (!name) continue; const f = join(td, name); if (existsSync(f)) unlinkSync(f); }
        try { delete m.thumb; delete m.thumbFile; writeFileSync(mf, JSON.stringify(m)); } catch (e) { /* ignore */ }
        return send(res, 200, 'ok');
      }
      return send(res, 405, 'method');
    }
    if (p === '/api/project') {
      const rev = revOf(dir);
      res.setHeader('X-Rev', String(rev));
      if (req.method === 'GET') {
        if (!existsSync(join(dir, 'project.json'))) return send(res, 204, '');
        return send(res, 200, readFileSync(join(dir, 'project.json')), 'application/json');
      }
      if (req.method === 'PUT' || req.method === 'POST') {
        const body = await readBody(req);
        if (baseRaw != null && baseRaw !== '' && Number(baseRaw) !== rev) {
          res.setHeader('X-Rev', String(rev));
          return send(res, 409, existsSync(join(dir, 'project.json')) ? readFileSync(join(dir, 'project.json')) : '', 'application/json');
        }
        writeFileSync(join(dir, 'project.json'), body);
        const nr = rev + 1; writeFileSync(join(dir, 'rev.txt'), String(nr));
        try { const mf = join(dir, 'meta.json'); const m = existsSync(mf) ? JSON.parse(readFileSync(mf, 'utf8')) : {}; m.updatedAt = Date.now(); writeFileSync(mf, JSON.stringify(m)); } catch (e) { /* ignore */ }
        res.setHeader('X-Rev', String(nr));
        return send(res, 200, 'ok');
      }
      return send(res, 405, 'method');
    }
    let m = p.match(/^\/api\/blob\/(.+)$/);
    if (m) {
      const f = join(dir, 'blobs', safeKey(decodeURIComponent(m[1])));
      if (req.method === 'GET') return existsSync(f) ? send(res, 200, readFileSync(f), 'application/octet-stream') : send(res, 404, '');
      if (req.method === 'PUT' || req.method === 'POST') { ensureDir(dir); writeFileSync(f, await readBody(req)); return send(res, 200, 'ok'); }
      if (req.method === 'DELETE') { if (existsSync(f)) unlinkSync(f); return send(res, 200, 'ok'); }
      return send(res, 405, 'method');
    }
    m = p.match(/^\/api\/mesh\/(.+)$/);
    if (m) {
      const f = join(dir, 'meshes', safeKey(decodeURIComponent(m[1])) + '.json');
      if (req.method === 'GET') return existsSync(f) ? send(res, 200, readFileSync(f), 'application/json') : send(res, 404, '');
      if (req.method === 'PUT' || req.method === 'POST') { ensureDir(dir); writeFileSync(f, await readBody(req)); return send(res, 200, 'ok'); }
      if (req.method === 'DELETE') { if (existsSync(f)) unlinkSync(f); return send(res, 200, 'ok'); }
      return send(res, 405, 'method');
    }
    // static files from dist/
    const rel = normalize(decodeURIComponent(p)).replace(/^(\.\.[/\\])+/, '');
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

server.listen(PORT, () => console.log('Chill Drive editor (multi-project) → http://localhost:' + PORT));
