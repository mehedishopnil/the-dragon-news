// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsYAl0YadZztqYFhcgGHt4dn8htZixZ10",
  authDomain: "the-news-dragon-client-f3db8.firebaseapp.com",
  projectId: "the-news-dragon-client-f3db8",
  storageBucket: "the-news-dragon-client-f3db8.appspot.com",
  messagingSenderId: "187374172022",
  appId: "1:187374172022:web:be245171910c27da7d6c57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;