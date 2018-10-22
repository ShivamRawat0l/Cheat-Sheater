import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyBsa2j6B9Ss2-EdB06PvT2YUmmTeLdMxvE",
    authDomain: "cheatsheet-b02ee.firebaseapp.com",
    databaseURL: "https://cheatsheet-b02ee.firebaseio.com",
    projectId: "cheatsheet-b02ee",
    storageBucket: "cheatsheet-b02ee.appspot.com",
    messagingSenderId: "844058886351"
  };
  firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;