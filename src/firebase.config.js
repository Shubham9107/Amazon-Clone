import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs3cA6IAm8xOQ-aOm3W8xXcDu46aaK0sI",
  authDomain: "clone-c78a8.firebaseapp.com",
  projectId: "clone-c78a8",
  storageBucket: "clone-c78a8.appspot.com",
  messagingSenderId: "1050300665971",
  appId: "1:1050300665971:web:d150d764badb48417eda06",
  measurementId: "G-Q956GKSD2S"
};


export const app = initializeApp(firebaseConfig);
export default firebaseConfig;