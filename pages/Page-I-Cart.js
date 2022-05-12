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

      <div className="absolute bottom-10 left-8 w-28 h-16 flex flex-col bg-[red]">
        <div className='="w-full h-6 mt-4 text-m font-thin bg-[brown]'>
        <p> Price</p>
        </div>
        <div className='="w-full h-12 mt-0 text-xl bg-[green]'>
        <p> $ </p>
        </div>

      </div>


      <div className="absolute bottom-10 right-8 w-36 h-12 bg-[green] overflow-hidden rounded-[10px]">
       <button className="w-full h-full text-white text-xl rounded-[3px] bg-sunset-orange"> Checkout </button>
      </div>

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
    <div className="bg-dark-jungle-green min-h-[100vh] font-bold relative">
      <Header/>
      <CartList arrOfRestaurants={arrOfRestaurants} />
      <Bottom/>
    </div>
  )
}