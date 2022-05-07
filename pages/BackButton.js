import React from 'react';
import Head from 'next/head';

const BackButton = () => {
console.log('BackButton being rendered')
  return (
    <div>
      <Head>
        <title>Back Button</title>
        <meta name="description" content="Genereted by create next app"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>

      <div className="flex justify-left items-center">
        <button className="bg-blue-grey-800 text-white w-[30px] h-[30px] rounded-[30px] ml-[25px] mt-[40px]">
        </button>
        <h1 className="font-sans-['Roboto'] text-[36px] text-white text-4xl text-bold mt-9 ml-[10px]">My Settings</h1>
      </div>
      </main>
    </div>
  );
};



export default BackButton;