import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import TinderCard from 'react-tinder-card';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';

// Components
import BottomNavBar from '../components/BottomNavBar';

// User auth
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

// Icons
import setting from '../public/images/setting.svg';
import logo_white from '../public/images/Rumble_white.svg';
import single_user from '../public/images/single_user.svg';
import like from '../public/images/heart.svg';
import dislike from '../public/images/dislike.svg';

// Filter restaurants based on user preferences
function filterRestaurants(array, preferences) {
  const { cuisinePref, priceRange } = preferences;
  let filtered = array;
  if (cuisinePref && cuisinePref !== 'All')
    filtered = filtered.filter(x => x.cuisine === cuisinePref);
  if (priceRange)
    filtered = filtered.filter(x => x.priceRange === priceRange);
  return filtered;
}

// Tag used to display restaurant information
function Tag({ text }) {
  return (
    <div className="grid items-center rounded-2xl px-3 bg-dark-jungle-green">
      <p className="font-bold text-star-dust-light text-sm">{text}</p>
    </div>
  );
};

// Page C component
export default function RestaurantSwipeSolo () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [restaurants, setRestaurants] = useState([])
  const [rightSwipes, setRightSwipes] = useState([]);
  const [userPref, setUserPref] = useState([]);
  const [user] = useAuthState(auth);

  // Fetch user preferences on initial page render
  useEffect(() => {
    axios.get(`/api/users/getSingleUserInfo/${user.uid}`)
    .then(({ data }) => {
      let { cuisinePref, priceRange } = data;
      setUserPref({ cuisinePref, priceRange });
    })
    .catch(console.error);
  }, []);

  // On initial render and/or when user preferences change, refilter the list
  // of restaurants seen by the user
  useEffect(() => {
    axios.get('/api/restaurants/test')
      .then(({ data }) => {
        const filteredRestaurants = filterRestaurants(data, userPref);
        filteredRestaurants.sort((a, b) => 0.5 - Math.random());
        setRestaurants(filteredRestaurants);
        setCurrentIndex(Math.max(filteredRestaurants.length - 1, 0))
      })
      .catch(console.error)
  }, [userPref]);

  // Automatically navigate to Page L if user has swiped right on 3 restaurants
  useEffect(() => {
    if(rightSwipes.length === 3) Router.push('/Page-L-SelectedRestaurants');
  }, [rightSwipes])

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () => Array(restaurants.length).fill(0).map(_ => (React.createRef())),
    [restaurants.length]
  );

  // Decrease current index on swipe
  const handleSwipe = (direction, index, res) => {
    if (direction === 'right') {
      setRightSwipes((prev) => [res].concat(prev));
      axios.post('/api/users/addFavorite', { uid: user.uid, restaurantID: res.id})
        .catch(console.error);
    }

    setCurrentIndex(index - 1);
    currentIndexRef.current = index - 1;
  }

  // Programatically swipe on current card
  const swipe = async (direction) => {
    if ((currentIndex >= 0) && (currentIndex < restaurants.length)) {
      try {
        await childRefs[currentIndex].current.swipe(direction);
      } catch {
        ;
      }
    }
  }

  return (
    // Page container
    <div className="bg-dark-jungle-green h-screen">
      {/* Top section */}
      <div className="py-7 px-7 flex justify-around">
        <Link href="/Page-G-Settings">
          <a>
            <Image width={30} height={30} alt="setting" src={setting}/>
          </a>
        </Link>
        <Image width={105} height={40} alt="white logo" src={logo_white}/>
        <Image width={30} height={30} alt="single user" src={single_user}/>
      </div>

      {/* Swipe Area */}
      <div className="flex flex-col justify-between items-center">
        {restaurants.length === 0 ? null : restaurants.map((res, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute"
            key={index}
            onSwipe={(direction) => handleSwipe(direction, index, res)}
            onCardLeftScreen={() => {}}
          >
            <div
              style={{ backgroundImage: `url(${res?.dishes?.[0]?.photoURL}`  }}
              className="bg-gradient-to-t from-black relative bg-cover bg-center
                        w-[360px] h-[65vh] rounded-[30px] flex flex-col justify-end"
            >
              <h3 className="text-center text-white text-[2.25rem] font-bold">
                {res.restaurantName}
              </h3>
              <h4 className="text-center text-white text-[1.4rem]">
                {res.cuisine} Restaurant
              </h4>

              {/* Restaurant info card */}
              <div className="bg-white mx-4 px-2 py-6 rounded-[25px] mt-5 mb-5">
                  <div className="flex justify-around pb-2">
                    <div className="text-limed-spruce font-bold">About</div>
                    <Tag text={res.priceRange} />
                    <Tag text="Fast" />
                    <Tag text="12 miles" />
                  </div>
                  <p className="text-[13px] text-center">
                    {res.description || 'Lorem ipsum dolor sit amet'}
                  </p>
              </div>

            </div>
          </TinderCard>
        ))}

        {/* Like/Dislike Icons */}
        <div className="absolute bottom-[80px] w-[360px] flex justify-evenly">
          {/* Dislike Icon */}
          <div
            className="bg-white w-[40px] h-[40px] rounded-[30px] grid items-center"
            onClick={() => swipe('left')}
          >
            <Image width={30} height={30} alt="dislike" src={dislike} />
          </div>
          {/* Like Icon */}
          <div
            className="bg-sunset-orange w-[40px] h-[40px] rounded-[30px] grid items-center"
            onClick={() => swipe('right')}
          >
            <Image width={30} height={30} alt="like" src={like}/>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <BottomNavBar />
    </div>
  );
}
