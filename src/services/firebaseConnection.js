
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCkq1D-xdxdAxeGWLBEuRy1aEVN4V5O34Q",
  authDomain: "tickets-97d5d.firebaseapp.com",
  projectId: "tickets-97d5d",
  storageBucket: "tickets-97d5d.appspot.com",
  messagingSenderId: "1041682063329",
  appId: "1:1041682063329:web:732ea376e61f267af4bca0"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };