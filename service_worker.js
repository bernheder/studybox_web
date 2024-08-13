self.addEventListener('install', (event) => {
  event.waitUntil(
	caches.open('v1').then((cache) => {
	  return cache.addAll([
		'/',
		'/index.html',
		'/flutter_bootstrap.js',
		'/icons/Icon-192.png',
		'/icons/Icon-512.png',
		'/manifest.json',
		// Add other assets you want to cache
	  ]);
	})
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
	caches.match(event.request).then((response) => {
	  return response || fetch(event.request);
	})
  );
});