const assets = [
    'index.html',
    'assets/js/app.js',
    'assets/css/style.css',
    'manifest.json',
    'assets/img/logo.png',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js'
];

// install event
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('tracker').then(function (cache) {
            return cache.addAll(assets);
        })
    );
});

// fetch event

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});