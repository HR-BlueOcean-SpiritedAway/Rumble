import React, { useState, useContext } from 'react';
import SignOut from '../components/SignOut';
import SaveChanges from '../components/SaveChanges';
import BackButton from '../components/BackButton';
import ProfilePhoto from '../components/ProfilePhoto';
import Preferences from '../components/Preferences';
import { SettingsProvider } from '../components/SettingsContext';


const Settings = () => {
  const handleSubmit = () => {
    console.log(cuisine, speed, price, location);

  };
  const [cuisine, setCuisine] = useState('American');
  const [speed, setSpeed] = useState('Fast');
  const [price, setPrice] = useState('$');
  const [location, setLocation] = useState('San Francisco');

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