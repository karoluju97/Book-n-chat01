import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXWj5M9W_2AdCgOaGChBB00HZMq7dWjTs",
    authDomain: "book-n-chat.firebaseapp.com",
    projectId: "book-n-chat",
    storageBucket: "book-n-chat.appspot.com",
    messagingSenderId: "320577125176",
    appId: "1:320577125176:web:c696df768185bb774e9fcd",
    measurementId: "G-MNM0PDDJ4S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };