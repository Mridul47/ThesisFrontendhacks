// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaplF1WVTF6-B_ePLb4rZoPFpVJddpRYA",
    authDomain: "freefrontendhacks.firebaseapp.com",
    projectId: "freefrontendhacks",
    storageBucket: "freefrontendhacks.appspot.com",
    messagingSenderId: "859315551978",
    appId: "1:859315551978:web:e0e6d86cab1d98dca02193",
    measurementId: "G-DF0PD15H1J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };