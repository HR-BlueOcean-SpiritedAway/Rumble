import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import TinderCard from 'react-tinder-card';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';

// Components
import BottomNavBar from '../components/BottomNavBar';

// Icons
import setting from '../public/images/setting.svg';
import logo_white from '../public/images/Rumble_white.svg';
import group_user from '../public/images/group_user.svg';
import like from '../public/images/heart.svg';
import dislike from '../public/images/dislike.svg';

// Tag used to display restaurant information
function Tag({ text }) {
  return (
    <div className="grid items-center rounded-2xl px-3 bg-dark-jungle-green">
      <p className="font-bold text-star-dust-light text-sm">{text}</p>
    </div>
  );
};

// Page D component
export default function RestaurantSwipeGroup () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [restaurants, setRestaurants] = useState([])
  const { query } = useRouter();
  const { partner_uid } = query;

  // Get partner's favorite restaurants to swipe on (good enough for now!!!)
  // Partner will ALWAYS be blue.ocean.rumble@gmail.com
  useEffect(() => {
    if (!partner_uid) return;

    (async function() {
      try {
        const { data: partnerFavs } = await axios.get(`/api/users/getFavorites/${partner_uid}`);
        const { data: allRestaurants } = await axios.get('/api/restaurants/test');
  
        const filteredRestaurants = allRestaurants.filter(r => (partnerFavs.includes(r.id)));
        setRestaurants(filteredRestaurants);
        setCurrentIndex(Math.max(filteredRestaurants.length - 1, 0))
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () => Array(restaurants.length).fill(0).map(_ => (React.createRef())), 
    [restaurants]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canSwipe = currentIndex >= 0

  // Go to page E on right swipe; decrease current index on left swipe
  const handleSwipe = (direction, index, res) => {
    updateCurrentIndex(index - 1);

    if (direction === 'right') {
      Router.push(`/Page-E-matchGroup?partner_uid=${partner_uid}&restaurant_id=${res.id}`);
    }
  }

  // Programatically swipe on current card
  const swipe = async (direction) => {
    if (canSwipe && currentIndex < restaurants.length) {
      try { 
        await childRefs[currentIndex].current.swipe(direction); 
      } catch (err) {
        ;
      }
    }
  }

  if (!partner_uid)
    return (
      <div className="h-screen w-screen grid items-center text-center">
        <p>No partner selected.</p>
      </div>
    );

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
        <Image width={30} height={30} alt="group user" src={group_user}/>
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
