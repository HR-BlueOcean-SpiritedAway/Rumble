import axios from 'axios';
import { useEffect, useState } from 'react';

// Authorization
const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth');

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [favoritesData, setFavoritesData] = useState([]);

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

  return [ favoritesData ];
};