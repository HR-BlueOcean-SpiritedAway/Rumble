import React from 'react';
import Head from 'next/head';

const SaveChanges = () => {
  console.log('SaveChanges being rendered')
  return (
    <div>
      <Head>
        <title>Save Changes</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>

      <div className="flex justify-center items-center">
        <button className="bg-button-red text-white w-[87.7%] h-12 rounded-[14px] mt-3">Save Changes</button>
      </div>
      </main>
    </div>
  );
};

export default SaveChanges;