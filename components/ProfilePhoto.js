import { useEffect } from 'react';
import Image from 'next/image';
const { db, auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth');

const ProfilePhoto = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="flex justify-left items-center">
      <div className="ml-[25px] mt-[40px]">
        <Image
          loader={() => user.photoURL}
          src={user.photoURL}
          alt="user"
          width={60}
          height={60}
          className="rounded-full z-10"
        />
      </div>
      <h1 className="font-regular text-[28px] text-white text-4xl text-bold mt-9 ml-[10px]">{user.displayName}</h1>
    </div>
  );
};



export default ProfilePhoto;
