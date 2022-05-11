import Link from 'next/link';
import Image from 'next/image';
import TinderCard from 'react-tinder-card';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';

// Below is for icons
import setting from '../public/images/setting.svg';
import logo_white from '../public/images/Rumble_white.svg';
import cart from '../public/images/cart.svg';
import single_user from '../public/images/single_user.svg';
import restaurants from '../public/images/restaurants.svg';
import list from '../public/images/list.svg';
import addFriend from '../public/images/add_friend.svg';

import like from '../public/images/heart.svg';
import dislike from '../public/images/dislike.svg';

export default function RestaurantSwipeSolo () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lastDirection, setLastDirection] = useState('')
  const [favorite, setFavorite] = useState([])
  const [db, setDb] = useState([])


  useEffect(() => {
    axios.get('/api/restaurants/test')
    .then(({ data }) => setDb(data))
    .catch(console.error)
  }, []);

  useEffect(() => {
    setCurrentIndex(db.length ? db.length - 1 : 0)
  }, [db])

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1
  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className="bg-[#1f2427] h-screen bg-cover">
      <div className="py-7 px-7 relative flex justify-around">
        <Link href="/Page-G-Settings">
          <Image width={30} height={30} alt="setting" src={setting}/>
        </Link>
          <Image width={105} height={40} alt="white logo" src={logo_white}/>
          <Image width={30} height={30} alt="single user" src={single_user}/>
      </div>
      <div className="container">
            {db.length === 0 ? null : db.map((res, index) => (
              <TinderCard
                ref={childRefs[index]}
                className='absolute'
                key={res.restaurantName}
                onSwipe={(dir) => {
                  swiped(dir, res.restaurantName, index);
                }}
                onCardLeftScreen={() => outOfFrame(res.restaurantName, index)}
              >
                <div
                  style={{ backgroundImage: `url(${res?.dishes?.[0]?.photoURL}`  }}
                  className="bg-gradient-to-t from-black relative bg-cover bg-center w-[375px] h-[65vh] rounded-[30px] flex flex-col justify-end"
                >
                  <h3 className="text-center text-white text-[2.25rem] font-bold">{res.restaurantName}</h3>
                  <h4 className="text-center text-white text-[1.4rem]">{res.cuisine} Restaurant</h4>

                  <div className="bg-white mx-4 px-2 py-6 rounded-[25px] mt-5 mb-5">
                      <div className="flex justify-around pb-2">
                        <div className="text-[#37474F] font-bold">About</div>
                        <div className="text-[#9D9D9D] bg-[#1f2427] mx-4 px-2 rounded-[25px] text-[14px]">$$$</div>
                        <div className="text-[#9D9D9D] bg-[#1f2427] mx-4 px-2 rounded-[25px] text-[14px]">Fast</div>
                        <div className="text-[#9D9D9D] bg-[#1f2427] mx-4 px-2 rounded-[25px] text-[14px]">12 miles</div>
                      </div>
                      <p className="text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </TinderCard>
            ))}
            {lastDirection ? (
              <h2 key={lastDirection} className=''>
                You swiped {lastDirection}
              </h2>
            ) : (
              <h2 className=''>
                Swipe a card or press a button to get Restore Card button visible!
              </h2>
            )}
        <div className="mt-[410px] flex space-x-10 justify-center">
          <div onClick={() => swipe('left')}><Image width={30} height={30} alt="dislike" src={dislike} /></div>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
          <div onClick={() => swipe('right')}> <Image width={30} height={30} alt="like" src={like}/></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="py-5 px-5 flex justify-around">
          <Link href="/cart">
            <Image width={35} height={35} alt="cart" src={cart}/>
          </Link>
            <Image width={40} height={40} alt="restaurants" src={restaurants}/>
            <Image width={30} height={30} alt="list" src={list}/>
            <Image width={40} height={40} alt="add friend" src={addFriend}/>
        </div>
      </div>
    </div>
  );
}
