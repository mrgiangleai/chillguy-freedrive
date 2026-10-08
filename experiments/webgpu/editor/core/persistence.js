// Editor persistence layer.
// Prefers a shared on-disk store served by server.mjs (same state for every
// browser on the machine); falls back to localStorage + IndexedDB when the
// API is not available (e.g. plain static hosting).
const DB_NAME = 'chilldrive-editor';
const DB_VERSION = 1;
const STORE_BLOBS = 'blobs';
const STORE_MESHES = 'meshes';
const LS_KEY = 'wgpuSandbox.v2';

let mode = 'local'; // 'server' | 'local'
let probe = null;
let rev = 0;          // server revision this tab has loaded/saved
let remoteStale = false;
let projectId = localStorage.getItem('wgpuSandbox.project') || null;

const q = () => projectId ? ('?project=' + encodeURIComponent(projectId)) : '';
export function currentProject() { return projectId; }
export function setProject(id) { projectId = id || null; if (projectId) localStorage.setItem('wgpuSandbox.project', projectId); else localStorage.removeItem('wgpuSandbox.project'); probe = null; rev = 0; }
export function clearProject() { projectId = null; localStorage.removeItem('wgpuSandbox.project'); probe = null; rev = 0; }
export async function listProjects() { try { const r = await fetch('/api/projects', {cache: 'no-store'}); if (r.ok) return await r.json(); } catch (err) { /* ignore */ } return []; }
export async function createProject(name) { try { const r = await fetch('/api/projects', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name})}); if (r.ok) return await r.json(); } catch (err) { /* ignore */ } return null; }
export async function renameProject(id, name) { try { const r = await fetch('/api/projects', {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id, name})}); if (r.ok) return await r.json(); } catch (err) { /* ignore */ } return null; }
export async function deleteProject(id) { try { const r = await fetch('/api/projects?id=' + encodeURIComponent(id), {method: 'DELETE'}); if (r.ok) return true; } catch (err) { /* ignore */ } return false; }
export async function duplicateProject(id, name) { try { const r = await fetch('/api/projects', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id, duplicate: true, name})}); if (r.ok) return await r.json(); } catch (err) { /* ignore */ } return null; }
export async function putProjectThumb(id, dataURL) {
  try {
    const blob = await (await fetch(dataURL)).blob();
    await fetch('/api/thumb?project=' + encodeURIComponent(id), {method: 'PUT', headers: {'Content-Type': 'image/png'}, body: blob});
    return true;
  } catch (err) { /* ignore */ }
  return false;
}

async function probeServer() {
  if (!projectId) { mode = 'local'; return mode; }
  try {
    const r = await fetch('/api/project' + q(), {cache: 'no-store'});
    const ct = r.headers.get('content-type') || '';
    if (r.status === 204 || (r.status === 200 && ct.includes('json'))) mode = 'server';
  } catch (err) {
    mode = 'local';
  }
  return mode;
}

export function storageMode() { return mode; }

/** Load the project (server first, then local cache). */
export async function loadProject() {
  await (probe || (probe = probeServer()));
  if (!projectId) { try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (err) { return {}; } }
  if (mode === 'server') {
    try {
      const r = await fetch('/api/project' + q(), {cache: 'no-store'});
      const ct = r.headers.get('content-type') || '';
      if (r.status === 200 && ct.includes('json')) {
        rev = Number(r.headers.get('x-rev') || 0);
        const j = await r.json();
        try { localStorage.setItem(LS_KEY, JSON.stringify(j)); } catch (err) { /* ignore */ }
        return j;
      }
      if (r.status === 204) rev = Number(r.headers.get('x-rev') || 0);
    } catch (err) { /* fall through to local */ }
  }
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (err) { return {}; }
}

/** Save the project (local cache always; shared store when available). */
export function saveProject(state) {
  const json = JSON.stringify(state);
  try { localStorage.setItem(LS_KEY, json); } catch (err) { /* ignore */ }
  if (mode === 'server') {
    try {
      const headers = {'Content-Type': 'application/json'};
      if (rev !== null && rev !== undefined) headers['X-Base-Rev'] = String(rev);
      fetch('/api/project' + q(), {method: 'PUT', headers, body: json}).then((r) => {
        const nr = Number(r.headers.get('x-rev'));
        if (!Number.isNaN(nr)) rev = nr;
        if (r.status === 409) remoteStale = true; // someone else wrote first: keep theirs
      }).catch(() => {});
    } catch (err) { /* ignore */ }
  }
}

/** Best-effort flush during page unload (respects revision via query). */
export function flushProject(state) {
  const json = JSON.stringify(state);
  try { localStorage.setItem(LS_KEY, json); } catch (err) { /* ignore */ }
  if (mode === 'server' && typeof navigator !== 'undefined' && navigator.sendBeacon) {
    try { navigator.sendBeacon('/api/project' + q() + (q() ? '&' : '?') + 'base=' + encodeURIComponent(rev == null ? '' : String(rev)), json); } catch (err) { /* ignore */ }
  }
}

/** Revision currently known to this tab (null once known to be local-only). */
export function currentRev() { return rev; }
export function isRemoteStale() { return remoteStale; }

/** Ask the server for its current revision (null if unavailable). */
export async function fetchRemoteRev() {
  if (mode !== 'server') return null;
  try {
    const r = await fetch('/api/project' + q(), {method: 'GET', cache: 'no-store'});
    if (r.status === 200 || r.status === 204) return Number(r.headers.get('x-rev') || 0);
  } catch (err) { /* ignore */ }
  return null;
}

// ---- IndexedDB fallback ----
let dbPromise = null;
function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_BLOBS)) db.createObjectStore(STORE_BLOBS);
      if (!db.objectStoreNames.contains(STORE_MESHES)) db.createObjectStore(STORE_MESHES);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}
function run(store, kind, fn) {
  return openDB().then((db) => new Promise((resolve, reject) => {
    let value;
    let tx;
    try { tx = db.transaction(store, kind); } catch (err) { reject(err); return; }
    const req = fn(tx.objectStore(store));
    if (req) req.onsuccess = () => { value = req.result; };
    tx.oncomplete = () => resolve(value);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  }));
}

// ---- blobs (imported GLB bytes) ----
export async function putBlob(key, data) {
  if (mode === 'server') {
    try { await fetch('/api/blob/' + encodeURIComponent(key) + q(), {method: 'PUT', body: data}); return; } catch (err) { /* fall back */ }
  }
  return run(STORE_BLOBS, 'readwrite', (s) => s.put(data, key));
}
export async function getBlob(key) {
  if (mode === 'server') {
    try {
      const r = await fetch('/api/blob/' + encodeURIComponent(key) + q(), {cache: 'no-store'});
      if (r.status === 200) return await r.blob();
      if (r.status === 404) return null;
    } catch (err) { /* fall back */ }
  }
  return run(STORE_BLOBS, 'readonly', (s) => s.get(key));
}
export async function delBlob(key) {
  if (mode === 'server') {
    try { await fetch('/api/blob/' + encodeURIComponent(key) + q(), {method: 'DELETE'}); } catch (err) { /* ignore */ }
  }
  return run(STORE_BLOBS, 'readwrite', (s) => s.delete(key));
}

// ---- meshes (terrain sculpt/paint deltas) ----
export async function putMesh(key, data) {
  if (mode === 'server') {
    try {
      const body = JSON.stringify({positions: Array.from(data.positions || []), colors: data.colors ? Array.from(data.colors) : null});
      await fetch('/api/mesh/' + encodeURIComponent(key) + q(), {method: 'PUT', headers: {'Content-Type': 'application/json'}, body});
      return;
    } catch (err) { /* fall back */ }
  }
  return run(STORE_MESHES, 'readwrite', (s) => s.put(data, key));
}
export async function getMesh(key) {
  if (mode === 'server') {
    try {
      const r = await fetch('/api/mesh/' + encodeURIComponent(key) + q(), {cache: 'no-store'});
      if (r.status === 200) return await r.json();
      if (r.status === 404) return null;
    } catch (err) { /* fall back */ }
  }
  return run(STORE_MESHES, 'readonly', (s) => s.get(key));
}
export async function delMesh(key) {
  if (mode === 'server') {
    try { await fetch('/api/mesh/' + encodeURIComponent(key) + q(), {method: 'DELETE'}); } catch (err) { /* ignore */ }
  }
  return run(STORE_MESHES, 'readwrite', (s) => s.delete(key));
}
