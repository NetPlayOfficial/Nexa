'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"favicon.png": "727768b694d4b018360dcfec9ec5a697",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "c60079921587600dc1ef07201d63dd36",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "cfa227df23e8f76b223f61784e38f1c8",
"assets/NOTICES": "e1dd4ab67ab8de52f64a1c3d0fec7e26",
"assets/assets/appeditor/icons/camera.svg": "fc12eff598d4fd49eed0a3ac6fcddc63",
"assets/assets/appeditor/icons/rotation.svg": "dc2a6313aba82dcf3af45852e8380b0f",
"assets/assets/appeditor/icons/gallery.svg": "42f86488238ebd729625e407993cb785",
"assets/assets/data/1039645": "1ef72c1c2f397c1136cce29a697fb2fd",
"assets/assets/data/1030990": "000172f41da4f315286a915947be9e47",
"assets/assets/data/1037308": "24b4b18c989c11479d684e7e54764102",
"assets/assets/data/m": "580f6b906cdee5318d3ef46348013631",
"assets/assets/data/i": "580f6b906cdee5318d3ef46348013631",
"assets/assets/data/a": "2f0089877cc171223651693c3acabcd6",
"assets/assets/data/f": "7107b615859633522205256c0d6ab3f1",
"assets/assets/data/1039569": "452f2b87425e46a673f73166c2e0348c",
"assets/assets/data/1039567": "7bf0032468d3d2c50efceb4277e2b393",
"assets/assets/data/1039648": "a5ae5406a3a2e476eb537d1d1fbe6c7b",
"assets/assets/data/w": "580f6b906cdee5318d3ef46348013631",
"assets/assets/data/1039650": "e446bc10ceb47f09ed39768768168db5",
"assets/assets/data/1037293": "aaa6713c3e2e2861f8766ef3d2e3c512",
"assets/assets/data/1041054": "9ae15de4fe49214faeeab85f23ebc0a4",
"assets/assets/data/t": "4c4864f43d81874bb5bea2b03d1302fe",
"assets/assets/image/icon_2.svg": "7237ad9258d268ec91b67bbc264c509a",
"assets/assets/image/icon_1.svg": "8bffcd4e5987de4f69b1cbaa0a2acd65",
"assets/assets/image/icon_3.svg": "903a99ac5ad2fb6387d49d921c0d3239",
"assets/assets/image/icon_4.svg": "5cd4cb892819275c3a0b376a05255b44",
"assets/assets/font/f_2958.ttf": "831e617220ba634d2ea11ef6e0a59816",
"assets/assets/font/iransans_light.ttf": "a5dcf7e6422973af8e0ea70d53a9d3be",
"assets/assets/font/f_2963.ttf": "a33e9ef8c59254172d7bb8c7142fc79d",
"assets/assets/font/f_2959.ttf": "edc57ad1f071cfcd5580afd21bc6ddd4",
"assets/assets/font/f_2311.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/font/f_2258.ttf": "61072ed99653a07fa792aa5f2a75cae8",
"assets/assets/font/iransans.ttf": "d41d82662a710e51ece8325e239c7711",
"assets/assets/font/f_2260.ttf": "12f1692abf877abd302054888c6a2893",
"assets/AssetManifest.json": "3e36492fe639fb5b56ee07ef26684a20",
"assets/AssetManifest.bin": "54344e72e4b863737663e995fd92240b",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "55dd479b440ade30760a1b3a4db300f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_js/assets/js/fetch.js": "277e0c5ec36810cbe57371a4b7e26be0",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/fonts/MaterialIcons-Regular.otf": "1c9385f0b7d76938896ccd1d5e265b59",
"assets/FontManifest.json": "b07501a54e27e71d7ff15c27c86fb886",
"sqflite_sw.js": "83aa6a5ff1c192401486a47556fd47c8",
"version.json": "54e8dd7131311facf3da1e1fdb839da9",
"icons/Icon-192.png": "170478dd87a5ad0840e72750030ea3c6",
"icons/Icon-512.png": "894716e9f7f16e61244e461dc3cecae4",
"icons/Icon-maskable-192.png": "170478dd87a5ad0840e72750030ea3c6",
"icons/Icon-maskable-512.png": "894716e9f7f16e61244e461dc3cecae4",
"main.dart.js": "98ebba060bfcedb1f0f0f35012bc2999",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"pdf.min.js": "6c25f8743492b679351b92d15f50e3fe",
"flutter_bootstrap.js": "33f621cbd0ced8caa5a60b0b0aaedea9",
"pdf.worker.min.js": "c930a1b361f2ec18eea7836e863c4adc",
"index.html": "9233d6839e5ec3714133f4f85ca0c505",
"/": "9233d6839e5ec3714133f4f85ca0c505"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
