 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';
 import axios from 'axios';
 import { useEffect, useState } from 'react';
 import Router from 'next/router';

 // authorization
 const { auth } = require('../firebase');
 const { useAuthState } = require('react-firebase-hooks/auth')

 const arrOfRestaurants = [];

 for (let i = 0; i < 5; i++) {
   const obj = {
     id: i,
     name: "Wing Lum Cafe",
     restaurantName: "Wing Lum Cafe",
     category: "Chinese",
     description: 'description',
     deliverySpeed: "fast",
     avgCost: "$$$",
     distance:"12",
     imgSrc: foodSrc,
     rating: "3.4",
     dishes: [
       {
           photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/-vpD8rR9-v61LpTG9tXiWg/o.jpg",
           name: "Amatriciana"
       },
       {
           name: "Moto",
           photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/9_ZCRhfIUAsj-oeXFFidkQ/o.jpg"
       },
       {
           photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/yvvLJoKtaSr7z4IUvViPKg/o.jpg",
           name: "Bianca"
       }
   ],
   };
   arrOfRestaurants.push(obj);
 };

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

  let favoritesData = [];

  // pull data from database on page load
  useEffect(()=> {
    axios.get('api/restaurants/test').then((results) => setRestaurants(results.data))
    axios({
      method: 'get',
      url: `api/users/getFavorites/${user.uid}`,
    }).then((results) => {
      setFavorites(results.data);
    }).catch(console.error);
    }, [user.uid]);

    useEffect(() => {
      if(restaurants.length > 0){
        favoritesData = favoritesFilter(restaurants)
      }
    }, [])

    function favoritesFilter() {
      restaurants.filter((restaurant) => {
        if(favorites.indexOf(restaurant.id) > 0) {
          return true;
        }
      });
    }
  // create restaurant card list
  const topThree = favorites.map((restaurant, index) => {
    return (
      <>
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      </>
    )
  });

  return (
    <div className="bg-auto bg-dark-jungle-green h-full flex flex-col ">
      <div className="h-24 rounded-b-[3.5rem] bg-reef-gold text-5xl text-center font-bold text-white">
        <div className="py-5">Top Picks</div>
      </div>
      <div className="py-4 space-x-4 text-xl font-extralight text-center text-white">Choose your top restaurant</div>
      {/* <div className="flex-col justify-center self-center space-y-1">{topThree}</div> */}
      <div className="flex place-content-center items-end font-extralight text-l text-center text-white" >Keep swiping</div>
    </div>
  )
};