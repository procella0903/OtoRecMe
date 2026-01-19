// OtoRecMe Service Worker
const CACHE_NAME = "otorecme-v1";
const ASSETS_TO_CACHE = [
  "/OtoRecMe/",
  "/OtoRecMe/index.html",
  "/OtoRecMe/manifest.json",
  "/OtoRecMe/icons/icon-192.png",
  "/OtoRecMe/icons/icon-512.png",
];

// インストール時にアセットをキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("キャッシュを作成中...");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting()),
  );
});

// 古いキャッシュの削除
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// ネットワークファースト戦略（オンライン優先、オフライン時はキャッシュ）
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 成功したレスポンスをキャッシュに保存
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // オフライン時はキャッシュから返す
        return caches.match(event.request);
      }),
  );
});
