"use strict";var precacheConfig=[["/Portfolio/index.html","ce53a66536662f9a0a1bd6ad83fc360a"],["/Portfolio/static/css/main.11f2e199.css","f3516aeb540c83975c7fd2cf084e7949"],["/Portfolio/static/js/main.09b0a540.js","d81e20493863c96912bb8956b4004c7b"],["/Portfolio/static/media/App.b046dcd5.scss","b046dcd55413064769c3de0f0558b60e"],["/Portfolio/static/media/Becentra-logol.ecf03920.png","ecf039201115469257fb2ee7d24b74a8"],["/Portfolio/static/media/Becentral-head.f984d5ed.png","f984d5edb7ccfb2a3b3899edbe626b89"],["/Portfolio/static/media/_headline.70dce6c9.scss","70dce6c9302dff03e7c213eb7cea7799"],["/Portfolio/static/media/_introduction.a7a6c0fa.scss","a7a6c0fac17f0a698df1091e0ddd9e67"],["/Portfolio/static/media/becentralIntegrations.37e0605e.png","37e0605e2c3fee09675d4d3c72d4560e"],["/Portfolio/static/media/becode.64831420.png","648314202feb4f1ad5ac521bfc6d8e05"],["/Portfolio/static/media/coworkingDesign.646f5465.png","646f54656270bd6594d154eb76e94672"],["/Portfolio/static/media/hive-pentagon-amber.1a717d41.svg","1a717d415077a6b68fb355fb9a6aedeb"],["/Portfolio/static/media/king-inauguration.a9ad9917.png","a9ad9917be374eaccc4e530b04324a1a"],["/Portfolio/static/media/mobile.a5281d0c.png","a5281d0c665d7357ec567e8fd7c8ffe1"],["/Portfolio/static/media/profil.d4b02f5b.png","d4b02f5b5219c62190fe7cfdb2fc6464"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});