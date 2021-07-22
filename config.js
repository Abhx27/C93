import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDSvcdFZgikH2XiUpUgpjEIYxkru26DaBg",
  authDomain: "barter-system-app-24f2f.firebaseapp.com",
  projectId: "barter-system-app-24f2f",
  storageBucket: "barter-system-app-24f2f.appspot.com",
  messagingSenderId: "155944135652",
  appId: "1:155944135652:web:f97dc4f8b250288f1135f1"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
