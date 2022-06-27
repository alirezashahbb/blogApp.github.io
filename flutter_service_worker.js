'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c8bdd68ef45edfa9189f2fd2228df30",
"assets/assets/fonts/AvenirLTProBook.otf": "e899c1f1fe23835bfc27bb898ff94d8b",
"assets/assets/fonts/AvenirLTProHeavy.otf": "31301b64b0e8f744a184acd8f3769cc1",
"assets/assets/fonts/AvenirLTProMedium.otf": "c4e0137cdf6a556d6021cd64e2956152",
"assets/assets/fonts/AvenirLTProRoman.otf": "833739a8ba3238630b2376b30a521bde",
"assets/assets/img/background/onboarding.png": "08a275b541d162152c00fa8232b40e7e",
"assets/assets/img/background/single_post.png": "b206e6b1d27dd4af99ae527ee6cd6271",
"assets/assets/img/background/splash.png": "e5af9f11500f99dd5cdcca0829908f84",
"assets/assets/img/icons/Articles.png": "acf01f887a373dfe70f07572d8e1f0e4",
"assets/assets/img/icons/ArticlesActive.png": "855e044a5fd0e014a21b3fd0b29755e9",
"assets/assets/img/icons/category_1.png": "6387795749090e1237072777cd076727",
"assets/assets/img/icons/category_2.png": "b8189da0687434e13df368fb6eb3497c",
"assets/assets/img/icons/category_3.png": "8c6af25598cfe27864cac8e69df35597",
"assets/assets/img/icons/category_4.png": "696215147f2533ea33fb7cba0321d1dc",
"assets/assets/img/icons/Facebook.png": "176527d862c016e4f1a1300b9d63b94d",
"assets/assets/img/icons/Google.png": "057bcfa3713243a782f112b719f8fc25",
"assets/assets/img/icons/Grid.svg": "1996cc88c1dd2a41612277bc92a7485f",
"assets/assets/img/icons/Home.png": "5527c1088fbd6c0759b4f437d8936b33",
"assets/assets/img/icons/HomeActive.png": "c331e33e6037a000cc22232b80da11e5",
"assets/assets/img/icons/LOGO.svg": "820ba131eb88813a155a5fbb6f244f34",
"assets/assets/img/icons/Menu.png": "d36897040de52be996ae013e595f6a37",
"assets/assets/img/icons/MenuActive.png": "f5e129352525e435d833d34d338d7cb7",
"assets/assets/img/icons/notification.png": "3e3c6d20023486ba1a9ad8056e71d80e",
"assets/assets/img/icons/plus.png": "7356c75383a201128e8ef61e2b3cbde3",
"assets/assets/img/icons/Search.png": "eb662d032d31b08b769020773d119789",
"assets/assets/img/icons/SearchActive.png": "77661d6c5d9bc6a730720576d046dc61",
"assets/assets/img/icons/Table.svg": "11c8c1d26b59a95f4739e6d8982716bd",
"assets/assets/img/icons/Thumbs.svg": "951420f8641ff42b9af2cc6eb9e699bd",
"assets/assets/img/icons/Twitter.png": "7b8f0c1f3d89080a68e4d20968443bbf",
"assets/assets/img/posts/large/large_post_1.jpg": "2d0dda571457d857b75870fcb95db99b",
"assets/assets/img/posts/large/large_post_2.jpg": "53e73e59050e3b21f27731f042795bd3",
"assets/assets/img/posts/large/large_post_3.jpg": "e3a934fbfe1f72d6a34e23f33520dc6f",
"assets/assets/img/posts/large/large_post_4.jpg": "7611befae00052425af14f16cc38c185",
"assets/assets/img/posts/large/large_post_5.jpg": "2f64dc2a7b4c9feb74797a826bd44b09",
"assets/assets/img/posts/large/large_post_6.jpg": "6686088cc58b23d10a9fab2ca3171a0a",
"assets/assets/img/posts/small/small_post_1.jpg": "5a544b44bf9142e7bf020b8ef913140d",
"assets/assets/img/posts/small/small_post_2.jpg": "8b66f6db0439a6ff8debdef10810fbdf",
"assets/assets/img/posts/small/small_post_3.jpg": "abc1e4564b62bbf88ea4fa89a2d5eea0",
"assets/assets/img/posts/small/small_post_4.jpg": "abc1e4564b62bbf88ea4fa89a2d5eea0",
"assets/assets/img/stories/alireza.jpg": "a571e63fb7a716c40404c214337babd5",
"assets/assets/img/stories/story_1.jpg": "6cd4833ce283015316c041d66db457a5",
"assets/assets/img/stories/story_10.jpg": "666b1c5b7ed234e2eea4bd9767bd334e",
"assets/assets/img/stories/story_2.jpg": "ea0824d9d9693e9732a5ff3477866cc7",
"assets/assets/img/stories/story_3.jpg": "f06c8e927f7ee0cd28bd6d502286209d",
"assets/assets/img/stories/story_4.jpg": "1e12ead65409b85e0db8b7331de8ad1b",
"assets/assets/img/stories/story_5.jpg": "536337a0c517e819aded4097e6997f1f",
"assets/assets/img/stories/story_6.jpg": "41e562731abc8116186746fb04bd76bf",
"assets/assets/img/stories/story_7.jpg": "056d129a47fe8f1a501c817f2bebce8f",
"assets/assets/img/stories/story_8.jpg": "a1b2b4eadacc573880c90039053a1ba7",
"assets/assets/img/stories/story_9.jpg": "54a7b664a8efa45e3e00808bda2d7c76",
"assets/FontManifest.json": "9417f5b7b9772c79d880f40fc64851ac",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2bbbed1ed5613431a682e03f26af313f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b8adba0fa3158dd353aaac2d15c406c",
"/": "9b8adba0fa3158dd353aaac2d15c406c",
"main.dart.js": "b8a641538098c778cea61d72b0f219de",
"manifest.json": "c9804b8bb8057d3a0268243480731776",
"version.json": "bc782111cf79e7f1be2389bfbe5997c7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
