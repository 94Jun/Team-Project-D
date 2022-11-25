import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH_OFFXQRPY8DvF3L5e_sbybyIX-qQh3M",
  authDomain: "travel-d4.firebaseapp.com",
  projectId: "travel-d4",
  storageBucket: "travel-d4.appspot.com",
  messagingSenderId: "628288354452",
  appId: "1:628288354452:web:a92db06f45bb8ceb659c81",
  measurementId: "G-K9CCMLB27Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
