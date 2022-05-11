import React from 'react';
import RestaurantCardCart from '../components/RestaurantCardCart.js';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import BackBtn from '../components/Backbtn';


/* -------- Dummy Data Start -------- */
import foodSrc from '../public/images/food-img.jpg';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const arrOfRestaurants = [];
for (let i = 0; i < 3; i++) {
  const obj = {
    id: uuid(),
    name: "Wing Lum Cafe",
    category: "Chinese",
    description: description,
    deliverySpeed: "fast",
    avgCost: "$$$",
    distance:"12",
    imgSrc: foodSrc,
    rating: "3.4"
  };
  arrOfRestaurants.push(obj);
}

/* -------- Dummy Data End -------- */

function Header() {
  return (
    <div className="relative bg-dark-jungle-green text-white h-[150px] pl-[15px] flex flex-col justify-center ]">
      <div className="absolute top-[15px] left-[15px] w-[35px] h-[35px]">
        <BackBtn clickHandler={() => console.log('asdf')}/>
      </div>
      <h1 className="font-dark text-[2.5rem] text-center">Cart</h1>
    </div>
  );
};

function Bottom(){
  return(
    <div className="relative bg-[blue] text-white h-[150px]">
   <p>Cart</p>
    </div>
  )
}

function CartList({ arrOfRestaurants }) {
  return(
    <div className="flex flex-col items-center pb-[30px] gap-[15px] mt-[3px] h-[375px]">
      {arrOfRestaurants.map((restaurant) => (
        <RestaurantCardCart key={restaurant.id} restaurant={restaurant}/>
      ))}
    </div>
  );
}

export default function RestaurantSwipeGroup() {
  return (
    <div className="bg-dark-jungle-green min-h-[100vh] relative">
      <Header/>
      <CartList arrOfRestaurants={arrOfRestaurants} />
      <Bottom/>
    </div>
  )
}