import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBgJHu0_pGG7dMFbVsdzkaAIQ5bnhrlzoA",
  authDomain: "zcoders-80485.firebaseapp.com",
  projectId: "zcoders-80485",
  storageBucket: "zcoders-80485.appspot.com",
  messagingSenderId: "882570050734",
  appId: "1:882570050734:web:171c4f199c83388229413f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;