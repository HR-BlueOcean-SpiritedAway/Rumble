import React from 'react';
import Head from 'next/head';
import Preference from './Preference';

const Preferences = () => {
  console.log('Preferences being rendered')
  const preferenceOptions = [
    {
      'pref': 'Cuisine Type',
      'choice': ['Mexican', 'Korean', 'Chinese']
    },
    {
      'pref': 'Delivery Speed',
      'choice': ['30 mins', '45 mins', '1 hour']
    },
    {
      'pref':'Price Range',
      'choice': ['$', '$$', '$$$']
    },
    {
      'pref': 'Location',
      'choice': ['San Francisco', 'Not San Francisco']
    }
  ]
  return (
    <div>
      <main>
      <div className="flex justify-center items-center mt-3">
        <div className="bg-blue-grey-800 w-[87.7%] h-72 rounded-[14px] p-4">
          {
            preferenceOptions.map((preference, index) => {
              return <Preference preference={preference} key={index}/>;
            })
          }
        </div>
      </div>
      </main>
    </div>
  );
};



export default Preferences;