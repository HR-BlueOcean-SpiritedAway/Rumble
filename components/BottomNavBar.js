import Link from "next/link";
import Image from "next/image";

import cart from '../public/images/cart.svg';
import restaurants from '../public/images/restaurants.svg';
import list from '../public/images/list.svg';
import addFriend from '../public/images/add_friend.svg';


import Router from 'next/router';

//Cart btn -> Cart Page
  function cartClickHandler(){
    Router.push({
      pathname: '/Page-I-Cart',
    }, '/Page-I-Cart');
  }

export default function BottomNavBar() {
  return (
    <div className="w-screen fixed bottom-0 py-4 px-3 flex justify-around bg-dark-jungle-green items-center">
      <Link href="#"><a><Image width={30} height={30} alt="cart" src={cart} onClick={cartClickHandler}/></a></Link>
      <Link href="#"><a><Image width={30} height={30} alt="restaurants" src={restaurants}/></a></Link>
      <Link href="#"><a><Image width={30} height={30} alt="list" src={list}/></a></Link>
      <Link href="/Page-D-SwipeGroup?partner_uid=cju0h6y5lHUyDS4pjBhXTm41Ktl1">
        <a><Image width={30} height={30} alt="add friend" src={addFriend}/></a>
      </Link>
    </div>
  );
}
