import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqwg7zU3klDz0vapB_20hXLOgxkSKVPLQ",
  authDomain: "travel-dt05.firebaseapp.com",
  projectId: "travel-dt05",
  storageBucket: "travel-dt05.appspot.com",
  messagingSenderId: "847613781380",
  appId: "1:847613781380:web:cb65c3d3cbdb8146b1a9d1",
  measurementId: "G-3B08087V4D",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);


