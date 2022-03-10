import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbu1al7iJCU9u0GluQAycUxD55oPzuHlg",
  authDomain: "attendence-app-4d29e.firebaseapp.com",
  projectId: "attendence-app-4d29e",
  storageBucket: "attendence-app-4d29e.appspot.com",
  messagingSenderId: "1053591254183",
  appId: "1:1053591254183:web:d42352baadae41212d5782",
  measurementId: "G-02KKDKQBVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
