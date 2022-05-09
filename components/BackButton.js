import React from 'react';
import Head from 'next/head';

const BackButton = () => {
console.log('BackButton being rendered')
  return (
    <div>
      <main>
        <div className="flex justify-left items-center">
          <button className="bg-limed-spruce text-white w-[30px] h-[30px] rounded-[30px] ml-[25px] mt-[40px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 24"><path fill="#ffffff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
          </button>
          <h1 className="font-sans-['Roboto'] text-[36px] text-white text-4xl text-bold mt-9 ml-[10px]">My Settings</h1>
        </div>
      </main>
    </div>
  );
};



export default BackButton;