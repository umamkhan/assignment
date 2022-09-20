import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_9MUnl_arGM0z73MZBCnQkDbm5aPqNkg",
  authDomain: "assignment-f0ece.firebaseapp.com",
  projectId: "assignment-f0ece",
  storageBucket: "assignment-f0ece.appspot.com",
  messagingSenderId: "957626791770",
  appId: "1:957626791770:web:506ad01b2d66261d37e563"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
