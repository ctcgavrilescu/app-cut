import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

export const config = {
    // DO NOT USE THESE CREDENTIALS ! THEY ARE HERE TO HELP IN THE LEARNING PROCESS.
    // ANY AND ALL DATA ON THAT DOMAIN IS SUBJECT TO CHANGE AND REMOVAL AT ANY TIME
    // THIS ACCOUNT IS ALSO ON THE FREE PLAN AND IS SUBJECT TO RESTRICTIONS !
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_DATABASEURL,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID
  };

//Initialize Firebase
const app = initializeApp(config);

  // Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default app

 