import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBzeeCzHlZLA3h206SS5hlH5Px-6fTISMY",
  authDomain: "aprendendo-firebase-db8aa.firebaseapp.com",
  databaseURL: "https://aprendendo-firebase-db8aa-default-rtdb.firebaseio.com",
  projectId: "aprendendo-firebase-db8aa",
  storageBucket: "aprendendo-firebase-db8aa.appspot.com",
  messagingSenderId: "720519934685",
  appId: "1:720519934685:web:b6ca9204e045cd4bc76134",
  measurementId: "G-M8RYTX1XF9"
};
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase
  