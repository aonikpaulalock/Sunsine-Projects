import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCy9fmybUUhC_Utytuu8h_FfGGfIk8DzJE",
  authDomain: "wedding-photographer-d90bb.firebaseapp.com",
  projectId: "wedding-photographer-d90bb",
  storageBucket: "wedding-photographer-d90bb.appspot.com",
  messagingSenderId: "459393859368",
  appId: "1:459393859368:web:7af3e8476b9e31dfac5a1d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default app ;