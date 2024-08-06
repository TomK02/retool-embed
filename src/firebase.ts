import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "./config";
console.log(import.meta.env);
const app = initializeApp(config.firebaseConfig);
export const auth = getAuth(app);
