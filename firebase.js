import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getDatabase, 
  ref, 
  get, 
  set, 
  update, 
  remove, 
  onValue, 
  push 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "ISI_API_KEY_KAMU",
  authDomain: "voting-kelas-d.firebaseapp.com",
  databaseURL: "https://voting-kelas-d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voting-kelas-d",
  storageBucket: "voting-kelas-d.firebasestorage.app",
  messagingSenderId: "593580824620",
  appId: "1:593580824620:web:7e84c6510e2fb2ff6c1989"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set, update, remove, onValue, push };