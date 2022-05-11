import RestaurantDetail from '../components/RestaurantDetail';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/router'
import axios from 'axios';

//Dummy data
const restaurantTest = {
  cuisine: "Italian",
  zip_code: 94117,
  addres: "311 Divisadero St",
  restaurantName: "Ragazza",
  priceRange: "$$",
  state: "CA",
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
  description: "Lorem ipsum dolor sit amet",
  city: "San Francisco"
}



export default function SingleRestaurant(props) {
  const router= useRouter();
  const [restaurant, setRestaurant] = useState([]);
  // console.log('inside SingleRestaurant', router.query.name);
  useEffect(() => {
    axios.get('/api/restaurants/restaurant', { params: { restaurant: router.query.name}})
      .then((res) => {
        console.log('data in useeffect is', res.data[0]);
        setRestaurant([res.data[0]])
      })
      .catch(console.error);
  }, [router.query.name]);

  console.log('restarant state is', restaurant);
  console.log('length', restaurant.length);

  return (
    <>
    {
      (restaurant.length===0)? <p> loading... </p> : <RestaurantDetail restaurant={restaurant} />
    }
    </>
  )
}

