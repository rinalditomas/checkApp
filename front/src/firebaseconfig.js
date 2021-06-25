import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAqMFh_n_V4pbmU8gImPPzImeYlA9Lma5o",
    authDomain: "checkapp-6eaab.firebaseapp.com",
    projectId: "checkapp-6eaab",
    storageBucket: "checkapp-6eaab.appspot.com",
    messagingSenderId: "609788545241",
    appId: "1:609788545241:web:8829626c0a91334fd816c8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}