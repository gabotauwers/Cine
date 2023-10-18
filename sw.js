const boveda = 'Boveda1';
self.addEventListener('install', e => {
    const recursos = caches.open(boveda).then(cache => {
        cache.add('/'),
        cache.add('index.html'),
        cache.add('js/app.js'),
        cache.add('css/style.css'),
        cache.add('sw.js'),
        cache.add('manifest.json'),
        cache.add('css/bootstrap.css')
        cache.add('img/scarface.jpg'),
        cache.add('img/Seleccione.jpg'),
        cache.add('img/scream.jpg'),
        cache.add('img/infierno.jpg'),
        cache.add('img/hostal.jpg'),
        cache.add('img/ciempies.jpg')
    })
    e.waitUntil(recursos);
})

// self.addEventListener('fetch', e => {
//   //estrategia 1, acceso solo al cache
//   const respuesta = caches.match(e.request)
//       .then(res => {
//           if (res) return res;
//           console.log('No existe el recurso de caché ->', e.request.url);
//           return fetch(e.request).then(newResp => {
//               caches.open(boveda)
//                   .then(cache => {
//                       cache.put(e.request, newResp)
//                   });
//           });
//       });
//   e.respondWith(respuesta);
// })

//estrategia 3 first network then cache
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then((newResp) => {
        caches.open(boveda)
            .then((cache) => {
                cache.put(e.request, newResp)
            });
        return newResp.clone();
    }).catch(err => {
        return caches.match(e.request);
    })
    e.respondWith(respuesta);
});

//descargar iconos de 24x24, 48x48, 128x128, 256x256 para el manifest