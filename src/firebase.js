import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBU9UeSCeyWHNGHFjNB_lJju53x_6Xi8Mk",
  authDomain: "kanban-board-37b90.firebaseapp.com",
  projectId: "kanban-board-37b90",
  storageBucket: "kanban-board-37b90.appspot.com",
  messagingSenderId: "14134138922",
  appId: "1:14134138922:web:eae6344e3db7fc582c8b53",
  measurementId: "G-0FQ52MW48N"
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const cardsRef = collection(db, 'cards')