import Firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsmpCcu_v9d2OsWvNPnrK4IUjD10AHVDA",
    authDomain: "the-kitchenn.firebaseapp.com",
    projectId: "the-kitchenn",
    storageBucket: "the-kitchenn.appspot.com",
    messagingSenderId: "159168052901",
    appId: "1:159168052901:web:15e60b7bd159c1627e174c",
    measurementId: "G-G5QSCM4ZR5"
  };
  const firebase = Firebase.initializeApp(firebaseConfig)
  export default firebase;