const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
