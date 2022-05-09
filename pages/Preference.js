import React from 'react';
import Head from 'next/head';

const Preference = (props) => {
console.log('Preference being rendered')
  return (
    <div>
      <Head>
        <title>Preference</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
      <div className="flex justify-left items-center text-white">
        <div className="w-[stretch] mt-2">
          <div className="text-[grey]">Pref</div>
          <div>Value</div>
        </div>
        <button className="bg-[grey] w-[90px] h-[25px] rounded-[12px]">Change</button>
      </div>
      </main>
    </div>
  );
};



export default Preference;