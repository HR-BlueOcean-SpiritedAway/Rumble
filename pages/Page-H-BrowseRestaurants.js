import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import BackButton from '../components/Backbtn';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCardJake';
import BottomNavBar from '../components/BottomNavBar';

export default function BrowseRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [userQuery, setUserQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const router = useRouter();

  // Fetch restaurant data
  useEffect(() => {
    axios.get('/api/restaurants/test')
      .then(({ data }) => setRestaurants(data))
      .catch(console.error);
  }, []);

  // Filters restaurants appropriately
  useEffect(() => {
    if (!restaurants) return;

    setFilteredRestaurants(
      userQuery
      ? restaurants.filter(rest => rest?.restaurantName?.toLowerCase().includes(userQuery.toLowerCase()))
      : restaurants
    );

    window.scrollTo(0, 0);
  }, [restaurants, userQuery]); 

  return (
    <div className="w-screen h-fit min-h-screen bg-black">
      {/* Gray section */}
      <div className="sticky top-0 z-10 w-full bg-dark-jungle-green h-[35.7vh] flex flex-col px-5 py-6 justify-between">
        <BackButton clickHandler={() => router.back()} />
        <h1 className="text-[2.25rem] font-bold text-white">
          Restaurants
        </h1>
        <SearchBar onSubmit={setUserQuery} />
      </div>
      {/* Black section */}
      <div className="w-screen h-fit min-h-[64.3%] bg-black px-5 pt-4 pb-[75px] text-white">
        <h3 className="text-lg font-semibold p-0">Near you</h3>
        <p className="text-sm">
          {`${filteredRestaurants.length} Restaurant${filteredRestaurants.length !== 1 ? 's' : ''} near you`}
        </p>
        {!filteredRestaurants.length && null ||
          filteredRestaurants.map((restaurant, i) => (
            <div key={i} className="py-2 flex justify-center">
              <RestaurantCard restaurant={restaurant} clickHandler={() => {}} />
            </div>
            )
          )
        }
      </div>
      <BottomNavBar />
    </div>
  )
}
