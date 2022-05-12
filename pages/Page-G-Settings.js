import React, { useState, useEffect, useContext } from 'react';
import SignOut from '../components/SignOut';
import SaveChanges from '../components/SaveChanges';
import BackButton from '../components/BackButton';
import ProfilePhoto from '../components/ProfilePhoto';
import Preferences from '../components/Preferences';
import { SettingsProvider } from '../components/SettingsContext';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
const { db, auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth');
const { doc, setDoc } = require('firebase/firestore');

const Settings = () => {
  const [cuisine, setCuisine] = useState('All');
  const [speed, setSpeed] = useState('Fast');
  const [price, setPrice] = useState('$');
  const [location, setLocation] = useState('San Francisco');

  const [user, loading] = useAuthState(auth);

  const handleSubmit = () => {
    axios.post('/api/users/addPreferences', {
      uid: user.uid,
      cuisine: cuisine,
      price: price
    })
    .then((response) => {
      console.log('Successful post');
    })
    .catch((err) => {
      console.error('axios.post error: ', err);
    })
  };


  const handleChange = (property, event) => {
    if (property === 'Cuisine Type') {
      setCuisine(event);
    }
    if (property === 'Delivery Speed') {
      setSpeed(event);
    }
    if (property === 'Price Range') {
      setPrice(event);
    }
    if (property === 'Location') {
      setLocation(event);
    }
  }
  return (
    <div className="bg-black h-screen">
      <BackButton />
      <ProfilePhoto />
      <SettingsProvider >
        <Preferences handleChange={handleChange}/>
        <SaveChanges handleSubmit={handleSubmit}/>
      </SettingsProvider>
      <SignOut />
    </div>
  )
}

export default Settings;