import React from 'react';
import Head from 'next/head';

const Preference = (props) => {
  
  const pref = props.preference;
  return (
    <div className="flex justify-left items-center text-white">
      <div className="w-[stretch] mt-2">
        <div className="text-[grey]">{pref.pref}</div>
        <div>{pref.choice[0]}</div>
      </div>
      <button className="bg-[grey] w-[90px] h-[25px] rounded-[12px]">Change</button>
    </div>
  );
};

export default Preference;
