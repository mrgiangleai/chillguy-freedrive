// Service worker Chill Drive: tài nguyên (assets/…) lấy từ bộ nhớ thiết bị trước (Cache Storage 'chilldrive-assets-v1', khoá
// = đường dẫn + '?h=' + hash trong assets-manifest.json => file đổi thì tải bản mới); trang + code (index.html, app.js, …) lấy mạng
// trước, mất mạng thì dùng bản đã lưu. Trang (src/preload.js) cũng ghi vào cùng bộ nhớ khi tải trước có thanh tiến độ.
const CACHE = 'chilldrive-assets-v1', PAGES = 'chilldrive-pages-v1';
let manifest = null, manifestT = 0;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

async function getManifest() {
  if (manifest && Date.now() - manifestT < 60000) return manifest;
  try {
    const r = await fetch('assets-manifest.json', { cache: 'no-cache' });
    manifest = await r.json(); manifestT = Date.now();
    (await caches.open(PAGES)).put('assets-manifest.json', new Response(JSON.stringify(manifest)));
  } catch {
    const old = await (await caches.open(PAGES)).match('assets-manifest.json');
    manifest = old ? await old.json() : manifest || {};
  }
  return manifest;
}

self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  const base = new URL(self.registration.scope).pathname, rel = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : null;
  if (rel === null || rel === 'sw.js') return;
  if (rel.startsWith('assets/')) e.respondWith(asset(req, decodeURIComponent(rel)));
  else e.respondWith(page(req));
});

async function asset(req, rel) {
  const M = await getManifest(), key = rel + '?h=' + (M[rel]?.[1] || '0'), c = await caches.open(CACHE);
  const hit = await c.match(key);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && res.status === 200 && M[rel]) {
    c.put(key, res.clone());
    // bỏ bản cũ (hash khác) của cùng file
    const want = new URL(key, self.registration.scope).href, path = new URL(want).pathname;
    for (const k of await c.keys()) { const u = new URL(k.url); if (u.pathname === path && u.href !== want) c.delete(k); }
  }
  return res;
}

async function page(req) {
  const c = await caches.open(PAGES);
  try {
    const res = await fetch(req);
    if (res.ok && res.status === 200) {
      c.put(req, res.clone());
      const u = new URL(req.url);                                   // app.js?v=… đổi bản: bỏ bản cũ cùng đường dẫn
      for (const k of await c.keys()) { const v = new URL(k.url); if (v.pathname === u.pathname && v.search !== u.search) c.delete(k); }
    }
    return res;
  } catch {
    return (await c.match(req, { ignoreSearch: false })) || (await c.match(req, { ignoreSearch: true })) || Response.error();
  }
}
