import Link from 'next/link';
import Image from 'next/image';
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

const urlFood= 'https://s3-media0.fl.yelpcdn.com/bphoto/aa1NjiuCL-dAUdLxktkGmQ/o.jpg';
const urlFood1='https://s3-media0.fl.yelpcdn.com/bphoto/vnpkrGBoVVRn0P9HrLp8xw/o.jpg';
const urlUser1= "https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80"
const urlUser2 ='https://images.unsplash.com/photo-1599948058230-78896e742f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80';

function Circle({ user }) {
  return (
  <div className="relative h-[120px] w-[120px] rounded-[50%] z-10 border-4 border-sunset-orange overflow-hidden">
    <Image
      loader={() => user.photoURL}
      src={user.photoURL}
      alt="user1"
      layout="fill"
    />
  </div>
  );
}

function Card () {
  return (
    <div className="relative left-[60px] h-[300px] w-[240px] border-4 border-[yellow]">
      <Image
        loader={() => urlFood1}
        src={urlFood1}
        alt="matchedDish"
        layout='fill'
        objectFit='contain'
        className="rounded-lg z-8"
      />
    </div>
  )
};

function Btn({ text, clickHandler, colorName }) {
  const className = `w-[150px] h-[50px] font-semibold py-2 px-4 border border-gray-400 rounded-[20px] shadow bg-${colorName} text-white`;
  return (
    <button className={className} onClick={() => clickHandler()}>{text}</button>
  );
}

//data needed
// 'profile image of person1'
// 'profile image of person2'
// 'image url of dish both swiped on'

function PageE() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="h-screen w-screen block bg-dark-jungle-green">
      <div className="h-10">
      </div>

      <div className="h-24 ">
        <div className="h-10 flex items-center">
          <p className="font-regular m-auto text-white text-4xl">ITS A MATCH!</p>
        </div>
        <div className="h-10 flex items-center ">
          <p className="font-regular m-auto text-white text-1xl"> You and _____ liked ____________________ </p>
        </div>
      </div>

      <div className="relative border-4 border-[green] mt-[20px]">

        <div className="absolute bottom-[-5px] left-[10px]">
          <Circle user={user} />
        </div>

        <Card />

        <div className="absolute  bottom-[-5px] right-[10px]">
          <Circle user={user} />
        </div>

        <div className="absolute top-[200px] left-[158px] w-[60px] h-[40px] border-4 border-[black] bg-[grey]">
        </div>

        <div className="absolute top-[310px] w-full h-[80px] text-center border-4 bg-[red]">
          Click approve if you like this restaurant or reject if you dont.
        </div>

        <div className="absolute top-[380px] w-full h-[100px] border-4 bg-[blue]">

          <button className="absolute top-[20px] left-[10px] w-[150px] h-[50px] font-semibold py-2 px-4 border border-gray-400 rounded-[20px] shadow bgz-sunset-orange text-white">
            Approve
          </button>

          <button className="absolute top-[20px] right-[10px] w-[150px] h-[50px] font-semibold py-2 px-4 border border-gray-400 rounded-[20px] shadow bg-limed-spruce">
            Reject
          </button>

        </div>
      </div>
    </div>
  );
}

export default PageE;

