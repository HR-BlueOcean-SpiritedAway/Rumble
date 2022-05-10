import Link from 'next/link';
import Image from 'next/image';
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

const urlFood= 'https://s3-media0.fl.yelpcdn.com/bphoto/aa1NjiuCL-dAUdLxktkGmQ/o.jpg';
const urlFood1='https://s3-media0.fl.yelpcdn.com/bphoto/vnpkrGBoVVRn0P9HrLp8xw/o.jpg';
const urlUser1= "https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80"
const urlUser2 ='https://images.unsplash.com/photo-1599948058230-78896e742f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80';

function PageE() {
  console.log("needs to pull ");
  console.log('profile image of person1');
  console.log('profile image of person2');
  console.log('image url of dish both swiped on');
  const [user, loading] = useAuthState(auth);
  console.log('user ', user);

  return (
    <div className="h-screen w-screen block bg-dark-jungle-green">
      <div className="h-10">
      </div>

      <div className="h-24 ">
        <div className="h-14 flex items-center">
          <p className="font-regular m-auto text-white text-4xl"> IT'S A MATCH! </p>
        </div>
        <div className="h-10 flex items-center ">
          <p className="font-regular m-auto text-white text-1xl"> You and _____ liked ____________________ </p>
        </div>
      </div>

      <div className="h-10">
      </div>

      <div className="relative h-full">

        <div className="absolute top-60 left-4  h-[120px] w-[120px] rounded-full border-4 border-sunset-orange">
          <Image
            loader={() => user.photoURL}
            src={user.photoURL}
            alt="user1"
            width={120}
            height={120}
            className="rounded-full z-10"
          />
        </div>

        <div className="absolute  left-[60px]  h-[360px] w-[240px] border-4 border-sunset-orange">
          <Image
            loader={() => urlFood1}
            src={urlFood1}
            alt="matchedDish"
            width={400}
            height={240}
            layout='fill'
            objectFit='contain'
            className="rounded-lg z-8"
          />
        </div>

        <div className="absolute top-60 right-4  h-[120px] w-[120px] rounded-full border-4 border-sunset-orange">
          <Image
            loader={() => user.photoURL}
            src={user.photoURL}
            alt="user1"
            width={120}
            height={120}
            className="rounded-full z-10"
          />
        </div>

        <div className="absolute top-[240px] left-[158px] w-[60px] h-[40px] border-4 border-[black]">
        </div>

        <div className="absolute top-[300px] w-full h-[100px] bg-gradient-to-r from-green-400 to-blue-400 border-4 border-sunset-orange">
        </div>


        <div className="absolute top-[400px] w-full h-[100px] border-4 border-sunset-orange">

          <button className="absolute top-[20px] left-[10px] w-[150px] h-[50px] font-semibold py-2 px-4 border border-gray-400 rounded-full shadow bg-sunset-orange text-white">
            Approve
          </button>

          <button className="absolute top-[20px] right-[10px] w-[150px] h-[50px] font-semibold py-2 px-4 border border-gray-400 rounded-full shadow bg-limed-spruce">
            Reject
          </button>

        </div>


      </div>




    </div>
  );
}

    // <img src={urlFood} className="absolute w-24 h-24 rounded-full border-red-400 border-2">
        // </img>

        // <img src={urlUser2} className="absolute top-64 right-4 w-24 h-24 rounded-full border-red-400 border-2">
        // </img>

export default PageE;

