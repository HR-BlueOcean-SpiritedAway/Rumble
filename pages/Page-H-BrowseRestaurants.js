import { useState, useEffect } from 'react';
import axios from 'axios';

import BackButton from '../components/Backbtn';
import SearchBar from '../components/SearchBar';

export default function BrowseRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants/test')
      .then(({ data }) => setRestaurants(data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-screen h-screen">
      {/* Gray section */}
      <div className="w-full bg-dark-jungle-green h-[35.7%] flex flex-col px-5 py-6 justify-between">
        <BackButton clickHandler={() => {}} />
        <h1 className="text-[2.5rem] font-bold text-white">
          Restaurants
        </h1>
        <SearchBar />
      </div>
      {/* Black section */}
      <div className="w-screen h-[64.3%] bg-black px-5 py-4 text-white">
        <h3 className="text-lg font-semibold p-0">Near you</h3>
        <p className="text-sm">{`${restaurants.length} Restaurants near you`}</p>
      </div>
    </div>
  )
}
