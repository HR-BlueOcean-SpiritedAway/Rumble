import RestaurantDetail from '../components/RestaurantDetail';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/router'
import axios from 'axios';

export default function SingleRestaurant(props) {
  const router= useRouter();
  const [restaurant, setRestaurant] = useState([]);
  // console.log('inside SingleRestaurant', router.query.name);
  useEffect(() => {
    axios.get('/api/restaurants/restaurant', { params: { restaurant: router.query.name}})
      .then((res) => {
        setRestaurant([res.data[0]])
      })
      .catch(console.error);
  }, [router.query.name]);
  return (
    <>
    {
      (restaurant.length===0)? <p> loading... </p> : <RestaurantDetail restaurant={restaurant} />
    }
    </>
  )
}

