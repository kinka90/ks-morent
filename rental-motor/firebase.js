import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIgbQy8ggZr6thFmBCiv3UviZ2XHQzyuQ",
  authDomain: "rentak-dd050.firebaseapp.com",
  databaseURL: "https://rentak-dd050-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rentak-dd050",
  storageBucket: "rentak-dd050.firebasestorage.app",
  messagingSenderId: "43640732554",
  appId: "1:43640732554:web:a03249bad528e1e6b62673",
  measurementId: "G-M63ED3KCYR"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
