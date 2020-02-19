import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3bQDN73jfWjG3e2unwOKT_LSI204NVqY",
  authDomain: "catch-o-the-day-c2994.firebaseapp.com",
  databaseURL: "https://catch-o-the-day-c2994.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
