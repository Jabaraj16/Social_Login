// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,TwitterAuthProvider,GithubAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYomXGksD2vxoXZtIlvS9gjH2O7kEF-Mc",
  authDomain: "webauth-e4580.firebaseapp.com",
  projectId: "webauth-e4580",
  storageBucket: "webauth-e4580.appspot.com",
  messagingSenderId: "422774624201",
  appId: "1:422774624201:web:1285ca92cb8074565d6218"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth=getAuth()
export const google=new GoogleAuthProvider()
export const twitter = new TwitterAuthProvider()
export const github=new GithubAuthProvider()