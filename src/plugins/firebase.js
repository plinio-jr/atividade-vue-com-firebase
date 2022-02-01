import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiZHIOHbiLf8i8wJTJRiwrXd0faLD0Ev4",
    authDomain: "atividade-vue-firebase.firebaseapp.com",
    projectId: "atividade-vue-firebase",
    storageBucket: "atividade-vue-firebase.appspot.com",
    messagingSenderId: "1049052645937",
    appId: "1:1049052645937:web:c76cff475ced54aef96310"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth =firebase.auth()

  const profileCollection = db.collection('profile')
  const tasksCollection = db.collection('tasks')

  export {
      db, auth, profileCollection, tasksCollection
  }