var dataCacheName = 'inky-dinky';
var cacheName = 'inky-dinky';
var filesToCache = [
  "/",
  "./index.html",
  "./manifest.json",
  "./fonts/RobotoMono-Regular.ttf",
  "./fonts/Shrikhand-Regular.ttf",
  "./images/icons/icon-128x128.png",
  "./js/inky-dinky.js",
  "./js/data.js",
  "./scripts/less.min.js",
  "./service-worker.js",
  "./styles/variables.less",
  "./styles/layout.less",
  "./styles/styles.less",
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');      
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
