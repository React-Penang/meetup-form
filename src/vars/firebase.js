import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "meetup-react-penang.web.app",
  databaseURL: "https://react-penang.firebaseio.com",
  projectId: "react-penang",
});

export const firebaseAppAuth = firebaseApp.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const firestore = firebase.firestore();

export default firebaseApp;
