import Link from 'next/link';
import Image from 'next/image';
import TinderCard from 'react-tinder-card';
import React, { useState, useMemo, useRef } from 'react';

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

  const db = [
    {
      name: 'Chipole',
      url: './img/richard.jpg'
    },
    {
      name: 'IN & OUT',
      url: './img/erlich.jpg'
    },
    {
      name: 'Wing Lum Cafe',
      cuisine: 'Chinese',
      url: './img/monica.jpg'
    }
  ]

export default function RestaurantSwipeSolo () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
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
    <div className="bg-[#1f2427] h-screen flex flex-col justify-between bg-cover">
      <div className="py-7 px-7 flex justify-around">
        <Image width={30} height={30} alt="setting" src={setting}/>
        <Image width={30} height={30} alt="white logo" src={logo_white}/>
        <Image width={30} height={30} alt="single user" src={single_user}/>
      </div>
      <div className="container h-500">
        <div className="h-100">
          <div className='cardContainer'>
            {db.map((character, index) => (
              <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  className=""
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
          {lastDirection ? (
            <h2 key={lastDirection} className='infoText'>
              You swiped {lastDirection}
            </h2>
          ) : (
            <h2 className='infoText'>
              Swipe a card or press a button to get Restore Card button visible!
            </h2>
          )}
        </div>
          <div className='buttons'>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
            <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
          </div>
          <div className="mt-20 flex space-x-10 justify-center">
            <div onClick={() => swipe('left')}><Image width={30} height={30} alt="dislike" src={dislike} /></div>
            <div onClick={() => swipe('right')}> <Image width={30} height={30} alt="like" src={like}/></div>
          </div>
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
       <div className="py-5 px-5 flex justify-around">
         <Link href="cart"><Image width={30} height={30} alt="cart" src={cart}/></Link>
         <Image width={30} height={30} alt="restaurants" src={restaurants}/>
         <Image width={30} height={30} alt="list" src={list}/>
         <Image width={30} height={30} alt="add friend" src={addFriend}/>
       </div>
     </div>
  );
}