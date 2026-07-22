// B1 Deutsch Trainer — Service Worker
// Cache-first for same-origin requests. Pre-caches every asset on install.
// Bump CACHE_VERSION when shipping a change so clients pick it up cleanly.

const CACHE_VERSION = 'b1trainer-v6';

const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  // Vendored libraries
  './vendor/tailwind.js',
  './vendor/sortable.min.js',
  // Data files
  './vocab_data.js',
  './nebensatz_data.js',
  './habensein_data.js',
  './konjunktiv_data.js',
  './adjective_data.js',
  './praeposition_lokal_data.js',
  './verb_praep_data.js',
  './modal_perfekt_data.js',
  './relativ_data.js',
  './verb_position_ref.js',
  './article_patterns_ref.js',
  './declension_ref.js',
  './schreiben_redemittel.js',
  './sprechen_redemittel.js',
  './redemittel_data.js',
  './daily_plan_data.js',
  // Icons
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only intercept same-origin requests; let cross-origin (if any) pass through.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((resp) => {
          // Cache successful, basic-type responses for next visit
          if (resp && resp.ok && (resp.type === 'basic' || resp.type === 'default')) {
            const copy = resp.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return resp;
        })
        .catch(() => {
          // Offline fallback for navigation requests → serve cached index.html
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return Response.error();
        });
    })
  );
});
