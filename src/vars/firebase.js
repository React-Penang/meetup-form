import * as firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAOMgybQymcqnEADADXbl7YtzylZLOJQ_Y",
  authDomain: "meetup-react-penang.firebaseapp.com",
  databaseURL: "https://react-penang.firebaseio.com",
  projectId: "react-penang",
});

export const firebaseAppAuth = firebaseApp.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const firestore = firebase.firestore();

export default firebaseApp;
