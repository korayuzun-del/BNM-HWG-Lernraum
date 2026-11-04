importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDOEMJ2YkNwZ__rF-ZiREEGx30ihWpprck",
    authDomain: "bnm-lernraum.firebaseapp.com",
    databaseURL: "https://bnm-lernraum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bnm-lernraum",
    storageBucket: "bnm-lernraum.firebasestorage.app",
    messagingSenderId: "135668980860",
    appId: "1:135668980860:web:e808f8e2141e8c3c91fdf9"
});

const messaging = firebase.messaging();

// Empfang von Push-Nachrichten im Hintergrund (wenn App/Handy aus oder zu ist)
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || 'BNM Lernraum';
    const notificationOptions = {
        body: payload.notification.body || 'Neue Benachrichtigung erhalten.',
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});