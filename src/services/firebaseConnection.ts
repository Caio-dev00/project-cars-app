
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuNvvORPX2ANb_PsGXFFrwz8ncsOvoMnw",
  authDomain: "webcars-39dd1.firebaseapp.com",
  projectId: "webcars-39dd1",
  storageBucket: "webcars-39dd1.appspot.com",
  messagingSenderId: "987974106825",
  appId: "1:987974106825:web:64ccea3b2cf7fd03e9d718"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp)

export { db };