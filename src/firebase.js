// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBNDk9A0zEizX3pamk9i9lpMektlpc7vsI",
    authDomain: "snapchat-clone-ec4ea.firebaseapp.com",
    projectId: "snapchat-clone-ec4ea",
    storageBucket: "snapchat-clone-ec4ea.appspot.com",
    messagingSenderId: "1074393783288",
    appId: "1:1074393783288:web:cf207a34dd31bdd7b9140d",
    measurementId: "G-1MJ87Y8WKV"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, storage, provider}; 
