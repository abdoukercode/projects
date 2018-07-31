importScripts('https://unpkg.com/workbox-sw@2.0.3/build/importScripts/workbox-sw.dev.v2.0.3.js');
const staticAssets = [
  '/',
  'style.css',
  'app.js',
  'fallback.json',
  'images/fetch-dog.jpg'
];

const wb = new WorkboxSW();
wb.precache(staticAssets);

wb.router.registerRoute('https://newsapi.org/(.*)', wb.strategies.networkFirst());
wb.router.registerRoute(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
  cacheName: 'new-image',
  cacheExpiration: {maxEntries:20, maxAgeSeconds: 12 * 60 * 60},
  cacheableResponse: { statuses: [0,200]}
}));
