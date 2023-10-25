import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvtlQT91glWyUU6lnhbbv6LQA3e9gRXgc",
    authDomain: "todo-react-app-764db.firebaseapp.com",
    projectId: "todo-react-app-764db",
    storageBucket: "todo-react-app-764db.appspot.com",
    messagingSenderId: "517828384660",
    appId: "1:517828384660:web:ea8ed3d7eb4d4cf3156181",
    measurementId: "G-XEDDS9H31G"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export{db};