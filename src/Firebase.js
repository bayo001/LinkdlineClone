import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCn3OLlm6OZ9Y6OdctcTRPASmdIlLcy_bc",
    authDomain: "linkdline-clone.firebaseapp.com",
    projectId: "linkdline-clone",
    storageBucket: "linkdline-clone.appspot.com",
    messagingSenderId: "590263547358",
    appId: "1:590263547358:web:c475be4a9df930a7ef194f",
    measurementId: "G-0XBF1JTNZT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const Storage = firebase.storage();


  export { auth, provider, db, Storage }

  // export default db;