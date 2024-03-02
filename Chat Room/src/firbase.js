// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from  'firebase/auth'
import {getStorage} from  'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAd0Nulj468u7xXdQe5Ke5T9uVMkuUs4KE",
  authDomain: "chat-room-2b8d4.firebaseapp.com",
  projectId: "chat-room-2b8d4",
  storageBucket: "chat-room-2b8d4.appspot.com",
  messagingSenderId: "363088839731",
  appId: "1:363088839731:web:93eb9ae6c9ed8bc84d0f46",
  measurementId: "G-20LMTZGHP9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage =getStorage();
