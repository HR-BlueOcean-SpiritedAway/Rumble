import Link from 'next/link';
import Image from 'next/image';
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
  return (
    <div className="bg-[#1f2427] h-screen flex flex-col justify-between bg-cover">
      <div className="py-7 px-7 flex justify-around">
        <Image alt="setting" src={setting}/>
        <Image alt="white logo" src={logo_white}/>
        <Image alt="single user" src={single_user}/>
      </div>
      <div className="h-70">
        <div>
          <Image alt="dislike" src={dislike}/>
          <Image alt="like" src={like}/>
        </div>
      </div>
      <div className="py-5 px-5 flex justify-around">
        <Image alt="cart" src={cart}/>
        <Image alt="restaurants" src={restaurants}/>
        <Image alt="list" src={list}/>
        <Image alt="add friend" src={addFriend}/>
      </div>
    </div>
  );
}