// firebase.js - ganti config dengan milikmu dari Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5uHlXqwLiAmsUeF4Qawsmv0iNRGRdi3c",
  authDomain: "sewa-motor-ba94a.firebaseapp.com",
  databaseURL: "https://sewa-motor-ba94a-default-rtdb.firebaseio.com",
  projectId: "sewa-motor-ba94a",
  storageBucket: "sewa-motor-ba94a.firebasestorage.app",
  messagingSenderId: "921374655717",
  appId: "1:921374655717:web:d7b21349675a530045c00c",
  measurementId: "G-0R8TNWLTR4"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
