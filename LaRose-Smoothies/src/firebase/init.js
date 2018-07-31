  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5Fs_ibfuFbm-6UjJ6RIPuui_t9QU6eJ4",
    authDomain: "larose-smoothie.firebaseapp.com",
    databaseURL: "https://larose-smoothie.firebaseio.com",
    projectId: "larose-smoothie",
    storageBucket: "larose-smoothie.appspot.com",
    messagingSenderId: "65339955308"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});
// export firestore database

export default firebaseApp.firestore();
