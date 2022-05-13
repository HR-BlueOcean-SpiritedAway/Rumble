import Router, { useRouter } from "next/router";
import Image from 'next/image';
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')
import { useEffect , useState} from 'react';
import axios from 'axios';

function Circle ({ imgSrc }) {
  return (
  <div className="relative h-[120px] w-[120px] rounded-[50%] z-10 border-4 border-reef-gold overflow-hidden">
    <img
      className="rounded-full h-full w-full grid items-center justify-content-center"
      src={imgSrc}
      alt="user1"
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
  const [user] = useAuthState(auth);
  const [otherUser, setOtherUser] = useState(null);
  const [restaurant, setRestaurant] = useState({});
  const { query } = useRouter();
  const { partner_uid, restaurant_id } = query;

  // Get restaurant and user data on first component render
  useEffect(() => {
    (async function() {
      const { data: allRestaurants } = await axios.get('/api/restaurants/test');
      let correctRestaurant = allRestaurants.filter(x => x.id === parseInt(restaurant_id));
      setRestaurant(correctRestaurant?.[0] || {});
      const { data: partner } = await axios.get(`/api/users/getSingleUserInfo/${partner_uid}`);
      setOtherUser(partner);
    })()
  }, []);

  if (!restaurant || !otherUser)
    return <div className="h-screen w-screen grid items-center text-center">Loading...</div>;

  console.log(otherUser.photoURL);

  const { restaurantName, cuisine: restaurantCuisine, dishes } = restaurant;
  const restaurantDish = dishes?.[0]?.photoURL 
    || 'https://s3-media0.fl.yelpcdn.com/bphoto/r3sFwiLBtF1x4rbXNUAfkg/o.jpg';

  return (
    <div className="absolute bg-black text-white py-6 font-regular min-h-[100vh] z-[999] w-[100vw] bg-opacity-70 backdrop-blur-lg	">
      <h1 className="text-[3.5rem] text-center font-logo">It&apos;s a Match!</h1>
      <p className="text-center">You and {otherUser.displayName} liked {restaurantName} !</p>

      <div className="flex justify-center mt-[30px] mb-[30px]">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-85px] z-[999] flex gap-2">
            <Dot isActive={true} isUndecided={false} />
            <Dot isActive={true} isUndecided={false} />
          </div>
          <div className="absolute bottom-0 left-[-60px]">
            <Circle imgSrc={user.photoURL} />
          </div>
          <div className="absolute bottom-0 right-[-60px]">
            <Circle imgSrc={'/images/otherUser.png'} />
          </div>
          <Card title={restaurantName} subTitle={restaurantCuisine} imgSrc={restaurantDish}/>
        </div>
      </div>

      <p className="text-center"> Looks like this ones it! </p>
      <div className="mt-[40px] flex justify-center gap-5">
        <Btn
          text="Approve"
          clickHandler={() => {
            Router.push({
              pathname: '/Page-J-Restaurant',
              query: { name: restaurantName}
            }, '/Page-J-Restaurant');
          }}
          colorName="sunset-orange"
          isActive={true}
        />
        <Btn
          text="Reject"
          clickHandler={() => Router.back()}
          colorName="star-dust-light"
          isActive={true}
        />
      </div>
    </div>
  );
}

export default PageE;

