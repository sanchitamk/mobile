
// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files) 

var cacheName = 'zim_pwa_Drake_Famjam';
var filesToCache = [
  './',
  'index.html',
  'assets/drake.jpg',
  'assets/onedance.mp3',
  'assets/hotlinebling.mp3',
  'assets/dance1.png',
  'assets/dance2.png',
  'assets/head.png',
  'assets/record.png',
  'assets/https://fonts.googleapis.com/css2?family=Ubuntu:ital',
  'assets/wght@0',
  'assets/300;0',
  'assets/400;0',
  'assets/500;0',
  'assets/700;1',
  'assets/300;1',
  'assets/400;1',
  'assets/500;1',
  'assets/700&display=swap',
  'assets/https://fonts.googleapis.com/css2?family=Anton&family=Ubuntu:ital',
  'assets/wght@0',
  'assets/300;0',
  'assets/400;0',
  'assets/500;0',
  'assets/700;1',
  'assets/300;1',
  'assets/400;1',
  'assets/500;1',
  'assets/700&display=swap'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});