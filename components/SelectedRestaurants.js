 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';

const arrOfRestaurants = [];

for (let i = 0; i < 5; i++) {
  const obj = {
    id: i,
    name: "Wing Lum Cafe",
    category: "Chinese",
    description: 'description',
    deliverySpeed: "fast",
    avgCost: "$$$",
    distance:"12",
    imgSrc: foodSrc,
    rating: "3.4"
  };
  arrOfRestaurants.push(obj);
};

const topThree = arrOfRestaurants.map((restaurant, index) => {
  return (
    <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
    </div>
  )
});

export default function Favorite() {
  return (
    <div className="bg-auto bg-black h-full flex flex-col ">
      <div className="h-24 rounded-b-[3.5rem] bg-reef-gold text-5xl text-center font-bold text-white">
        <div className="py-5">Top Picks</div>
      </div>
      <div className="py-4 space-x-4 text-xl font-extralight text-center text-white">Choose your top restaurant</div>
      <div className="flex-col justify-center self-center space-y-1">{topThree}</div>
      <div className="flex place-content-center items-end font-extralight text-l text-center text-white" >Keep swiping</div>
    </div>
  )
};