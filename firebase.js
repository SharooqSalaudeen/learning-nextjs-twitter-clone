import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0EykVU6pZh16hQ9nuXTG-a5RLcmR7uU8",
  authDomain: "twitter-clone-1e386.firebaseapp.com",
  projectId: "twitter-clone-1e386",
  storageBucket: "twitter-clone-1e386.appspot.com",
  messagingSenderId: "666567341465",
  appId: "1:666567341465:web:50da9cd636ca6fc4988f08",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
