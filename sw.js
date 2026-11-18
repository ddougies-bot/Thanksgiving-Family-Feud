// Network-first: game pages and WebSocket sessions must stay live.
const CACHE='thanksgiving-feud-pwa-v1';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/manifest.webmanifest','/icon-192.png','/icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>new Response('Internet connection required for live game.',{headers:{'Content-Type':'text/plain'}})));return;}event.respondWith(fetch(req).catch(()=>caches.match(req)))});
