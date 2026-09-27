self.addEventListener("install", (event) => {
  event.waitUntil(caches.open("gengtu-v1").then((cache) => cache.addAll(["./", "./index.html", "./favicon.svg"])));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request)),
  );
});
