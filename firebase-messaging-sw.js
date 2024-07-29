importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");


try {
  firebase.initializeApp({
    apiKey: 'AIzaSyCmQt5_GtZBRvKFSQuH9jEnbtF1x89PbVY',
    appId: '1:1087826726457:web:41e88b8ffdd427e39787e8',
    messagingSenderId: '1087826726457',
    projectId: 'studybox-428117',
    authDomain: 'studybox-428117.firebaseapp.com',
    storageBucket: 'studybox-428117.appspot.com',
    measurementId: 'G-SRT8T5W1WD',
  });
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

/*
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/flutter_bootstrap.js',
        '/icons/Icon-192.png',
        '/icons/Icon-512.png',
        '/manifest.json',
        // Add other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

*/