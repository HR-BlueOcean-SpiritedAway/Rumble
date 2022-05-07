import React from 'react';
import Head from 'next/head';

const AddFriend = () => {
  console.log('AddFriend being rendered')
  return (
    <div>
      <Head>
        <title>Add Friend</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>

      <div className="flex justify-center items-center">
        <button className="bg-blue-grey-800 text-white w-[87.7%] h-12 rounded-[10px] mt-3">Add Friend</button>
      </div>
      </main>
    </div>
  );
};

export default AddFriend;