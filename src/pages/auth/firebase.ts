import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDddrU_sPhjprcCNIvjqSughBSD3P6nL_A',
  authDomain: 'spotifyapp-17ec9.firebaseapp.com',
  projectId: 'spotifyapp-17ec9',
  storageBucket: 'spotifyapp-17ec9.appspot.com',
  messagingSenderId: '213170062875',
  appId: '1:213170062875:web:47b5953c073a0763d29abe',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)