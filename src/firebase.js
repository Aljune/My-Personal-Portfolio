// Import the functions you need from the SDKs you need
import {
  Timestamp as firestireTimestamp, 
  getFirestore, 
  deleteDoc as firestoreDeleteDoc, 
  setDoc as firestoreSetDoc, 
  doc as firestoreDoc ,
  collection as firestoreCollection, 
  addDoc as firestoreAddDoc, 
  onSnapshot as firestoreOnSnapshot, 
  orderBy as firestoreOrderBy, 
  getDocs as firestoreGetDocs, 
  getDoc as firestoreGetDoc,

} from 'firebase/firestore';

import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcRtKf4frsXInZnoadbrHEkFGCaWF5DL4",
  authDomain: "my-personal-portfolio-f9278.firebaseapp.com",
  projectId: "my-personal-portfolio-f9278",
  storageBucket: "my-personal-portfolio-f9278.appspot.com",
  messagingSenderId: "534030606878",
  appId: "1:534030606878:web:5e374484ecb3091cf3440f",
  measurementId: "G-K3N4TWNBZB"
};
const dateTimetampNow = firestireTimestamp.now();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { 
  db, 
  firestoreSetDoc as setDoc, 
  firestoreDoc as doc, 
  firestoreOrderBy as orderBy, 
  firestoreCollection as collection, 
  firestoreAddDoc as addDoc, 
  firestoreOnSnapshot as onSnapshot, 
  firestoreGetDocs as  getDocs, 
  firestoreGetDoc as getDoc, 
  firestoreDeleteDoc as deleteDoc, 
  dateTimetampNow as Timestamp,
  storage,
  ref, // Export ref for creating storage references
  uploadBytes, // Export uploadBytes for uploading files
  getDownloadURL, // Export getDownloadURL for getting file download URLs
};
