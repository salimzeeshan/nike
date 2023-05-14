import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq7o-QlE60mm1sLhtQPPooeI0SuZDOY_0",
  authDomain: "nike-83a23.firebaseapp.com",
  projectId: "nike-83a23",
  storageBucket: "nike-83a23.appspot.com",
  messagingSenderId: "130478148621",
  appId: "1:130478148621:web:5d4e2670bfaeb977789944",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
