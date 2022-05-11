 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';
 import Router from 'next/router';


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

const topThree = arrOfRestaurants.map((restaurant, index) => {
  return (
    <>
      <RestaurantCard key={index} restaurant={restaurant} ClickHandler={()=>restaurantClickHandler(restaurant)}/>
    </>
  )
});

export default function SelectedRestaurant() {
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
