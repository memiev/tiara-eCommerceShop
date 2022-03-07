import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBpdoF1-Fdv_uTF6TQ2QCVUvuRSzrDtYjA',
  authDomain: 'tiara-db-a09e8.firebaseapp.com',
  projectId: 'tiara-db-a09e8',
  storageBucket: 'tiara-db-a09e8.appspot.com',
  messagingSenderId: '1050915183808',
  appId: '1:1050915183808:web:4b51a29f7b80441ce6a125',
  measurementId: 'G-H7N9TC6WF4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;