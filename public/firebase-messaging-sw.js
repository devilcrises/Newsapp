importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyC9GO2hpmq_a9-TjyYcxHnGoBpUYp1zONs",
  authDomain: "countrynews-4dfd9.firebaseapp.com",
  projectId: "countrynews-4dfd9",
  storageBucket: "countrynews-4dfd9.appspot.com",
  messagingSenderId: "431071391965",
  appId: "1:431071391965:web:9268cff37df0589b546b34",
  measurementId: "G-KDFR6RJ3Y7"
}


firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
  // console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
  const payload = event.data.json();
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});