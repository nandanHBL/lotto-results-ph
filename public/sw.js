// Service Worker for Lotto Results PH PWA
const CACHE_NAME = 'lotto-results-ph-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/offline.html',
  '/icon-192x192.png',
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        console.log('[v0] Some assets could not be cached');
      });
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // For navigation requests, try network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request).then((response) => {
          return response || caches.match('/offline.html');
        });
      })
    );
    return;
  }

  // For other requests, use cache first strategy
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((response) => {
          // Cache successful responses
          if (response.ok) {
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(event.request, response.clone()));
          }
          return response;
        })
      );
    })
  );
});
