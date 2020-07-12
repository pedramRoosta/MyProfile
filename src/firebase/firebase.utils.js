import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDLNysfMmaHBZmF7nNya5DZjiqDCXhogyY",
    authDomain: "myprofile-89541.firebaseapp.com",
    databaseURL: "https://myprofile-89541.firebaseio.com",
    projectId: "myprofile-89541",
    storageBucket: "myprofile-89541.appspot.com",
    messagingSenderId: "182915689291",
    appId: "1:182915689291:web:baf8ac8859f1dfda7316ce",
    measurementId: "G-XXZZ4J2YJ4"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider)
  export default firebase;