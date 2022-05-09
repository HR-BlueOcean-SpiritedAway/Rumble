import Link from 'next/link';
import Image from 'next/image';
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

const urlFood= 'https://s3-media0.fl.yelpcdn.com/bphoto/aa1NjiuCL-dAUdLxktkGmQ/o.jpg';
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
    <div className="h-screen w-screen block bg-[rgb(53,153,215)]">
      <div className="h-10 border-red-600	border-2">
      </div>
      <div className="h-24  border-blue-600	border-2">
        <div className="h-14 flex items-center border-red-600	border-2">
          <p className="font-regular m-auto text-white text-4xl"> IT'S A MATCH! </p>
        </div>
        <div className="h-10 flex items-center border-white	border-2">
          <p className="font-regular m-auto text-white text-1xl"> You and __ liked ____________________ </p>
        </div>
      </div>

      <div className="h-10 border-8 border-sky-500 bg-black">
      </div>

      <div className="relative h-full border-2 border-sky-500 bg-white">

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


      <div className="absolute left-[80px]  h-[360px] w-[200px] rounded-lg  border-4 border-sunset-orange ">
        <Image
          loader={() => urlFood}
          src={urlFood}
          alt="matchedDish"
          width={360}
          height={200}
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className="absolute top-60 right-4  h-[120px] w-[120px] rounded-full border-4 border-sunset-orange">
        <Image
          loader={() => user.photoURL}
          src={user.photoURL}
          alt="user1"
          width={120}
          height={120}
          className="rounded-full"
        />
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

