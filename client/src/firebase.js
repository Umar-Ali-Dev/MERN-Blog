// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIXG1XQXVVrKWDkjyzzHlk5T9eurdC6UA",
  authDomain: "mern-blog-f2a3c.firebaseapp.com",
  projectId: "mern-blog-f2a3c",
  storageBucket: "mern-blog-f2a3c.appspot.com",
  messagingSenderId: "119500724920",
  appId: "1:119500724920:web:2ac8ca70dbf12af9fef24d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);