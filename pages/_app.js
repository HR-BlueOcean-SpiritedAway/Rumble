/* *****************************************************************************
* Probably shouldn't need to touch this file. Homepage is @ index.js.
***************************************************************************** */

import { useEffect, useState } from 'react';
import '../styles/globals.css'
import Login from './login';
import Loading from './loading'


const { db, auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')
const { doc, setDoc } = require('firebase/firestore');

async function updateUser(user) {
  const docRef = doc(db, 'users', user.uid);

  await setDoc(docRef, {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    lastSeen: new Date(),
    favorites: []
  }, { merge: true })
}

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) updateUser(user);
  }, [user]);

  if (loading) return <Loading />
  if (!user) return <Login/>

  return <Component {...pageProps} />
}

export default MyApp
