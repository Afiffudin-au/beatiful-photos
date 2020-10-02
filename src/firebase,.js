import firebase from 'firebase';
firebase.initializeApp({
  //your firebase key
})
const auth = firebase.auth();
export {auth}