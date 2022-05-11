 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';
 import axios from 'axios';
 import { useEffect, useState } from 'react';

 // authorization
 const { auth } = require('../firebase');
 const { useAuthState } = require('react-firebase-hooks/auth')


export default function Favorite() {
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
    }, []);

    useEffect(() => {
      if(restaurants.length > 0){
        favoritesData = favoritesFilter(restaurants)
      }
    }, [])

    function favoritesFilter() {
      restaurants.filter((restaurant) => {
        favorites.forEach((favorite) => {
          if (favorite === restaurant.id) {
            console.log(favorite);
            return true;

          }
        })
      })
    }
  // create restaurant card list
  const topThree = favorites.map((restaurant, index) => {
    return (
      <div>
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      </div>
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