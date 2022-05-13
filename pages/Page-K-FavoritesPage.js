import Image from 'next/image';
import Router from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Authorization
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth')

// Components
import BackBtn from '../components/Backbtn';
import RestaurantCard from '../components/RestaurantCard';

// Assets
import breakfastSrc from '../public/images/breakfast-img.svg';
import foodSrc from '../public/images/food-img.jpg';
import { v4 as uuid } from 'uuid';
import useFavorites from '../hooks/useFavorites';


function goBackPageC(){
  Router.push({
    pathname: '/Page-C-SwipeSolo',
  }, '/Page-C-SwipeSolo');
}



function Header() {
  return(
    <div className="relative bg-moccasin text-white h-[300px] pl-[15px] flex flex-col justify-center">
      <div className="absolute top-[15px] left-[15px] w-[35px] h-[35px]">
        <BackBtn clickHandler={goBackPageC}/>
      </div>
      <h1 className="font-dark text-[2.5rem]">Favorites</h1>
      <p className="w-[250px]">You probably know these like the back of your hand.</p>
      <div className="absolute w-[140px] h-[80px] bottom-[15px] right-[15px]">
        <Image src={breakfastSrc} alt="" layout="fill" />
      </div>
    </div>
  );
};

/* -------- Dummy Data Start -------- */

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const arrOfRestaurants = [];

for (let i = 0; i < 5; i++) {
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

function List({ arrOfRestaurants }) {
  return(
    <div className="flex flex-col items-center pt-[30px] pb-[30px] gap-[50px]">
      {arrOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      ))}
    </div>
  );
}

export default function FavoritesPage() {
  const [ favoritesData ] = useFavorites();
  return (
    <div className="bg-dark-jungle-green min-h-[100vh]">
      <Header />
      <List arrOfRestaurants={favoritesData} />
    </div>
  );
}