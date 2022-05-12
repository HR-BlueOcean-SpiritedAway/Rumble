import Link from 'next/link';
import Image from 'next/image';
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

// Assets
import foodSrc from '../public/images/food-img.jpg';

const urlUser1= "https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80"
const urlUser2 ='https://images.unsplash.com/photo-1599948058230-78896e742f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80';

function Circle ({ user }) {
  return (
  <div className="relative h-[120px] w-[120px] rounded-[50%] z-10 border-4 border-reef-gold overflow-hidden">
    <Image
      loader={() => user.photoURL}
      src={user.photoURL}
      alt="user1"
      layout="fill"
    />
  </div>
  );
}

function Card ({title, subTitle, imgSrc}) {
  return (
    <div className="relative h-[350px] w-[230px] border-[5px] border-reef-gold rounded-[50px] overflow-hidden flex justify-center items-center">
      <Image
        src={imgSrc}
        alt=""
        layout='fill'
        objectFit='cover'
      />
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black"></div>
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black"></div>
      <div className="relative text-center text-white">
        <p className="font-dark text-[1.5rem]">{title}</p>
        <p className="text-[.9rem]">{subTitle} Restaurant</p>
      </div>
    </div>
  )
};

function Btn ({ text, clickHandler, colorName, isActive }) {
  let className = `w-[150px] h-[50px] font-bold rounded-[20px] bg-${colorName}`;
  if (!isActive) {
    className += ' opacity-50';
  }
  return (
    <button className={className} onClick={() => clickHandler()}>{text}</button>
  );
}

function Dot ({ isActive, isUndecided }) {
  let className = "h-4 w-4 rounded-full";
  if (isActive) {
    className += " bg-sunset-orange";
  } else {
    className += " bg-star-dust-light"
  }

  if (isUndecided) {
    className += " opacity-50";
  }

  return (
    <div className={className}></div>
  );
}

function PageE () {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="absolute bg-black text-white pt-[40px] pb-[40px] font-regular min-h-[100vh] z-[999] w-[100vw] bg-opacity-70 backdrop-blur-lg	">
      <h1 className="text-[3.5rem] text-center font-logo">It&apos;s a Match!</h1>
      <p className="text-center">You and Bro G. Bear liked Wing Lum Cafe!</p>

      <div className="flex justify-center mt-[30px] mb-[30px]">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-85px] z-[999] flex gap-2">
            <Dot isActive={true} isUndecided={false} />
            <Dot isActive={true} isUndecided={false} />
          </div>
          <div className="absolute bottom-0 left-[-60px]">
            <Circle  user={user} />
          </div>
          <div className="absolute bottom-0 right-[-60px]">
            <Circle  user={user} />
          </div>
          <Card title="Wing Lum Cafe" subTitle="Chinese" imgSrc={foodSrc}/>
        </div>
      </div>

      <p className="text-center">Doesn&apos;t look like this one&apos;s it</p>
      <div className="mt-[40px] flex justify-center gap-5">
        <Btn
          text="Approve"
          clickHandler={() => console.log('yo!')}
          colorName="sunset-orange"
          isActive={true}
        />
        <Btn
          text="Reject"
          clickHandler={() => console.log('yo!')}
          colorName="star-dust-light"
          isActive={true}
        />
      </div>
    </div>
  );
}

export default PageE;

