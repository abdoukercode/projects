import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDWC2yt9ZA2ttAYK7g-0LIF5p4QY0UlMsE",
  authDomain: "larose-chat.firebaseapp.com",
  databaseURL: "https://larose-chat.firebaseio.com",
  projectId: "larose-chat",
  storageBucket: "",
  messagingSenderId: "1038640559348"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});
// export firestore database

export default firebaseApp.firestore();
