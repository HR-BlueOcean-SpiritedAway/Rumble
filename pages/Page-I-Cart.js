import React from 'react';
import RestaurantCardCart from '../components/RestaurantCardCart.js';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import BackBtn from '../components/Backbtn';
import Router from 'next/router';

/* -------- Dummy Data Start -------- */
const description = "Authentic";
const arrOfRestaurants = [];
const rest1 = {
  name: "Wing Lum Cafe",
  category: "Chinese",
  imgSrc: 'https://s3-media0.fl.yelpcdn.com/bphoto/TA74HaTkFCpLCmwQGHUR5w/o.jpg',
  price: 9.99,
  dishName: 'Kung Pai Chicken'
};
arrOfRestaurants.push(rest1);

const rest2 = {
  name: "Ayola - New Montgomery",
  category: "Greek",
  imgSrc: 'https://s3-media0.fl.yelpcdn.com/bphoto/r3sFwiLBtF1x4rbXNUAfkg/o.jpg',
  price: 14.99,
  dishName: 'Chicken Shawarma'
};
arrOfRestaurants.push(rest2);
const rest3 = {
  name: "Star India Restaurant",
  category: "Indian",
  imgSrc: 'https://s3-media0.fl.yelpcdn.com/bphoto/-OE9swdCdbknLIhCb0yAzg/o.jpg',
  price: 13.99,
  dishName: 'Rack of Lamb'
};
arrOfRestaurants.push(rest3);
/* -------- Dummy Data End -------- */

function goBackPageC(){
  Router.push({
    pathname: '/Page-C-SwipeSolo',
  }, '/Page-C-SwipeSolo');
}




function Header() {
  return (
    <div className="relative bg-dark-jungle-green text-white h-[150px] pl-[15px] flex flex-col justify-center ]">
      <div className="absolute top-[15px] left-[15px] w-[35px] h-[35px]">
        <BackBtn clickHandler={goBackPageC}/>
      </div>
      <h1 className="font-dark text-[2.5rem] text-center">Cart</h1>
    </div>
  );
};

function Bottom(){
  return(
    <div className="relative text-white h-[150px]">

      <div className="absolute bottom-10 left-8 w-28 h-16 flex flex-col ">
        <div className="w-full h-6 mt-4 text-m font-thin">
        <p> Price</p>
        </div>
        <div className="w-full h-12 mt-0 text-xl">
        <p> $ {rest1.price + rest2.price + rest3.price} </p>
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