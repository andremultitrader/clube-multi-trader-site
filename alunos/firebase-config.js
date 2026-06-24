import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdOM7eXkFVwmZMUqyJ1cnv_vLAsPW04N0",
  authDomain: "clube-multi-trader.firebaseapp.com",
  projectId: "clube-multi-trader",
  storageBucket: "clube-multi-trader.firebasestorage.app",
  messagingSenderId: "186379665921",
  appId: "1:186379665921:web:5c9295d5e9246093d63600"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
