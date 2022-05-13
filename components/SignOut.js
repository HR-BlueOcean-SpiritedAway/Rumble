import React from 'react';

import { auth } from '../firebase';

const SignOut = () => {
  return (
    <div className="flex justify-center items-end">
      <button
        className="text-white bg-limed-spruce px-10 w-[87.7%] h-12 rounded-[14px] mt-3"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
