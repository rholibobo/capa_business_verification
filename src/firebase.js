// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDw_v2bcykkheW0Mu4yosC2Oc2_2fKW_Cs",
  authDomain: "capabusiness-verification.firebaseapp.com",
  projectId: "capabusiness-verification",
  storageBucket: "capabusiness-verification.appspot.com",
  messagingSenderId: "531817164450",
  appId: "1:531817164450:web:57ae2c120d855003e731fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
