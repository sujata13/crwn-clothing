import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB5TC4_SX2sRbmzNmyf4oqQLGmBq3r9VIw",
    authDomain: "crwn-db-7da3f.firebaseapp.com",
    projectId: "crwn-db-7da3f",
    storageBucket: "crwn-db-7da3f.appspot.com",
    messagingSenderId: "112547881631",
    appId: "1:112547881631:web:db4b40ecd33178024778aa",
    measurementId: "G-ZVDHVVSKZ1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;