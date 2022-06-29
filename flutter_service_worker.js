'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8a0d69528d6b6c70e0ed9e4598d9b730",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "75d240293f611020f2885e035a705f4e",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "f5c12a8ff92995d15bc240053d60db48",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf": "9ace3da396795504e076197f08434e8c",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf": "9589c3d42504fe59926fb74b90b74061",
"assets/assets/fonts/VictorMono/VictorMono-Bold.ttf": "cbe39229787a3b35ea4cf1c3eeecab0c",
"assets/assets/fonts/VictorMono/VictorMono-Medium.ttf": "2fa2a363301ec3cc4391a8f3cf3717db",
"assets/assets/fonts/VictorMono/VictorMono-SemiBold.ttf": "3c8a261e0f442f079a76396f1e8323af",
"assets/assets/icons/arrow_back.svg": "e20656fa2ea7dad03541e0930038cb2b",
"assets/assets/icons/arrow_forward.svg": "f26ed0afd9b527de339374a08eabbb7a",
"assets/assets/icons/skills/after_effects.svg": "3ae6cbbe8b480277b6bfcd6292c912c2",
"assets/assets/icons/skills/dart.svg": "8f64a2a5bea0d66e3f255c21c31a7ab7",
"assets/assets/icons/skills/figma.svg": "58451394f4cc9312e7f87aff69d31e29",
"assets/assets/icons/skills/firebase.svg": "19a627680dc48eed9b179d80dc929c7c",
"assets/assets/icons/skills/flutter.svg": "4e6787e773740a773b54680ac14bfdc1",
"assets/assets/icons/social/discord.svg": "c49b1d7467f27f2a7fd74ed41eb5c8d3",
"assets/assets/icons/social/github.svg": "7f6975740836128a24ce65f7cf874f8f",
"assets/assets/icons/social/linkedin.svg": "4893c24143dc2cac8d6fa41566e884d0",
"assets/assets/images/curvy_ui.png": "9097bab3d06ca00df5fa4939ea84f404",
"assets/assets/images/flylady.png": "eb9c96ba7fda32bb5e3278d4c5f8e92b",
"assets/assets/images/konnect.png": "370d9088fe4994ae36d06597fa987ca7",
"assets/assets/images/my_notes.png": "d9258d95a2bead7fd2f0f7dd2bbccfff",
"assets/assets/images/my_photo.png": "75391d496c9b8683c44d99787867db3e",
"assets/assets/images/procom.png": "b5e6509a75fe550541706bbe38c4f07b",
"assets/assets/images/sacred_groves.png": "9e1728a6330076d5d4a3a56ca9371fd4",
"assets/assets/images/shopify.png": "64d7ec3bbb522d5f9c0dea320ab8b35c",
"assets/assets/images/smart_file_manager.png": "57cc51c2cab685e14784d7f38df64167",
"assets/assets/images/traveller.png": "a688f45f944e7cff4baac5d6ed07ba04",
"assets/assets/images/two_step.png": "7c14f098d94463099557a2904f2fb60e",
"assets/assets/logo/app_logo.png": "081b8e4ae78e0eb57443cf4c4282031f",
"assets/assets/logo/app_logo.svg": "69af50b04f301b9ebb759d2632a4a39c",
"assets/assets/logo/loading_animation_long.gif": "5560a720a7b78f19fb84c20531a65f84",
"assets/assets/logo/logo.png": "c68c880e01a21b35769d4f36fdddfc94",
"assets/assets/logo/reverse_loading.gif": "ec945cb2c18eb7a9fecebf653b1c5221",
"assets/FontManifest.json": "a15939f8542049a1db1c0822c06dc201",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c2395c48e655ca2abe3aaa27d50377ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8d40d8a1f7be16961013a141d12b0506",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"favicon.png": "2e2107ac1c396e259c27a71a8ba7becb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7dcc9c64107b681c05d80d802a47f3c1",
"/": "7dcc9c64107b681c05d80d802a47f3c1",
"main.dart.js": "8f6a6796ee794fb1709b7ab7cc43122d",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"version.json": "424e1c820abc43fa3de5db67518dd634"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
