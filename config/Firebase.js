import firebase from 'firebase'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appID: ''
}

// Initialise Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase