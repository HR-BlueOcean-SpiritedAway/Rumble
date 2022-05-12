 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';
 import axios from 'axios';
 import { useEffect, useState } from 'react';
 import Router from 'next/router';

 // authorization
 const { auth } = require('../firebase');
 const { useAuthState } = require('react-firebase-hooks/auth')

 function restaurantClickHandler(restaurant){
   Router.push({
     pathname: '/Page-J-Restaurant',
     query: { name: restaurant.restaurantName}
   }, '/Page-J-Restaurant');
 }

export default function SelectedRestaurant() {
  const [favorites, setFavorites] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [favoritesData, setFavoritesData] = useState([]);
  const [cards, setCards] = useState([]);

  // pull data from database on page load
  useEffect(()=> {
    if (!restaurants.length) {
      axios.get('api/restaurants/test').then((results) => setRestaurants(results.data));
      axios({
        method: 'get',
        url: `api/users/getFavorites/${user.uid}`,
      }).then((results) => {
        setFavorites(results.data);
      }).catch(console.error);
    } else {
      setFavoritesData(()=> {
        return restaurants.filter((restaurant) => {
          return favorites.indexOf(restaurant.id) > -1});
      })
    }
  }, [user.uid, favorites, restaurants]);

  useEffect(() => {
    setCards(() => {
      return favoritesData ? favoritesData.map((restaurant, index) => {
         return (
           <>
             <RestaurantCard key={restaurant.id} restaurant={restaurant} />
           </>
         )
       }) : null;
   });
  }, [favoritesData])

  // create restaurant card list
  //  let topThree = favoritesData ? favoritesData.map((restaurant, index) => {
  //   return (
  //     <>
  //       <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
  //     </>
  //   )
  // }): null;

  return (
    <div className="bg-auto bg-dark-jungle-green h-full flex flex-col ">
      <div className="h-24 rounded-b-[3.5rem] bg-reef-gold text-5xl text-center font-bold text-white">
        <div className="py-5">Top Picks</div>
      </div>
      <div className="py-4 space-x-4 text-xl font-extralight text-center text-white">Choose your top restaurant</div>
      <div className="flex-col justify-center self-center space-y-1">{cards}</div>
      <div className="flex place-content-center items-end font-extralight text-l text-center text-white" >Keep swiping</div>
    </div>
  )
};