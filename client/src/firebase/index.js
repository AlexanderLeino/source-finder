import  firebase from "firebase/compat/app";
//import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmu2SGtn3bQjcC5Nq9-6A6gC96npyyYEo",
    authDomain: "sourcefinder-969bf.firebaseapp.com",
    projectId: "sourcefinder-969bf",
    storageBucket: "sourcefinder-969bf.appspot.com",
    messagingSenderId: "370177448812",
    appId: "1:370177448812:web:8351a8c6598dd3f2d03149",
    measurementId: "G-N51W65BCL7"
  };


//firebase.initializeApp(firebaseConfig)

export const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage = firebase.storage()

