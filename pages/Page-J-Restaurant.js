import RestaurantDetail from '../components/RestaurantDetail';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/router'
import axios from 'axios';

const { auth } = require('../firebase');
const { useAuthState } = require('react-firebase-hooks/auth');

export default function SingleRestaurant(props) {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    async function getData(query) {
      try {
        if (Object.keys(query).length < 1) {
          query = { name: 'Ragazza' };
        }
        let results = await axios.get('/api/restaurants/restaurant', { params: { restaurant: query.name}});
        setRestaurant(results.data);
      } catch(err) {
        console.error(err);
      }
    }

    getData(router.query);

  }, [router.query.name]);
  return (
    <>
    {
      (restaurant.length===0)? <p> loading... </p> : <RestaurantDetail user={user.uid} restaurant={restaurant} />
    }
    </>
  )
}

