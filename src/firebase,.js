import firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyARZGmBf7YK1fbDMnrEEQvTmrAHIo5k6Ds",
  authDomain: "beatiful-photos.firebaseapp.com",
  databaseURL: "https://beatiful-photos.firebaseio.com",
  projectId: "beatiful-photos",
  storageBucket: "beatiful-photos.appspot.com",
  messagingSenderId: "515980656296",
  appId: "1:515980656296:web:4140ec4fede6f7e86acc9d"
})
const auth = firebase.auth();
export {auth}