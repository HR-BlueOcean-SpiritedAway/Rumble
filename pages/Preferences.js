import React from 'react';
import Head from 'next/head';
import Preference from './Preference';

const Preferences = () => {
  console.log('Preferences being rendered')
  const preferenceOptions = [
    {'Cuisine Type': ['Mexican', 'Korean', 'Chinese']},
    {'Delivery Speed': ['30 mins', '45 mins', '1 hour']},
    {'Price Range': ['$', '$$', '$$$']},
    {'Location': ['San Francisco', 'Not San Francisco']}
  ]
  return (
    <div>
      <Head>
        <title>Preferences</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>

      <div className="flex justify-left items-center">
        <div className="bg-blue-grey-800 w-[87.7%] h-72 rounded-[14px] ml-[25px] mt-[40px] p-4">
          {
            preferenceOptions.map((preference, index) => {
              return <Preference key={index}/>;
            })
          }
        </div>
      </div>
      </main>
    </div>
  );
};



export default Preferences;