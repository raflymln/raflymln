const staticDevCoffee = "raflymaulana";
const assets = [
    "/",
    "/manifest.json",
    "/assets/css/tailwind.css",
    "/assets/img/banner.png",
    "/assets/img/dots.png",
    "/assets/img/logo-smile.png",
    "/assets/img/logo.png",
    "/assets/img/icon-192x192.png",
    "/assets/img/icon-256x256.png",
    "/assets/img/icon-384x384.png",
    "/assets/img/icon-512x512.png",
    "/assets/img/3D/citytown.png",
    "/assets/img/3D/cloud.png",
    "/assets/img/projects/ashuap.jpg",
    "/assets/img/projects/Foxxy.png",
    "/assets/img/projects/GPRESTORE.png",
    "/assets/img/projects/RaflyMaulana.png",
    "/assets/img/3D/Saly/Saly-1.png",
    "/assets/img/3D/Saly/Saly-10.png",
    "/assets/img/3D/Saly/Saly-12.png",
    "/assets/img/3D/Saly/Saly-13.png",
    "/assets/img/3D/Saly/Saly-14.png",
    "/assets/img/3D/Saly/Saly-15.png",
    "/assets/img/3D/Saly/Saly-22.png",
    "/assets/img/3D/Saly/Saly-28.png",
    "/assets/js/ztext.min.js",
    "/assets/js/raflymaulana.js",
];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
