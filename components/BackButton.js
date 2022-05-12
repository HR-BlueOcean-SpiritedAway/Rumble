import React from 'react';

const BackButton = () => {
  return (
    <div className="flex justify-left items-center">
      <button className="bg-limed-spruce text-white w-[30px] h-[30px] rounded-[30px] ml-[25px] mt-[40px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 24"><path fill="#ffffff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
      </button>
      <h1 className="font-bold text-[36px] text-white text-4xl mt-9 ml-[10px]">My Settings</h1>
    </div>
  );
};



export default BackButton;
