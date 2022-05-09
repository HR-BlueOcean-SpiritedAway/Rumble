import React from 'react';
import Head from 'next/head';

const SignOut = () => {
  console.log('SignOut being rendered')
  return (
    <div>
      <Head>
        <title>Sign Out Button</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>

      <div className="flex justify-center items-end">
        <button className="text-white bg-limed-spruce px-10 w-[87.7%] h-12 rounded-[14px] mt-3">Sign Out</button>
      </div>
      </main>
    </div>
  );
};

export default SignOut;