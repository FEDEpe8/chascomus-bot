const CACHE_NAME = 'muni-chascomus-v2'; // <--- IMPORTANTE: Cambié a v2
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.png' // Asegúrate de que tu imagen se llame así
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Fuerza la activación inmediata del nuevo SW
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Toma control de la página inmediatamente
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
