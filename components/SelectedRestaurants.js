 import RestaurantCard from './RestaurantCard.js';
 import foodSrc from '../public/images/food-img.jpg';

const data = [
  {
  name: "Wing Lum Cafe",
  category: "Chinese",
  image: "https://d1ralsognjng37.cloudfront.net/7d06e7af-42cb-432e-8b2c-ea120c52d340.jpeg"
  },
  {
    name: "Pete's ",
    category: "Italian",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/An_image_of_a_toast_sandwich%2C_shot_from_the_side.jpg/640px-An_image_of_a_toast_sandwich%2C_shot_from_the_side.jpg"
  },
  {
    name: "a restaurant",
    category: "American",
    image: "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg"
  }
];

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
  // return (
  //   <div key={index} className={`w-64 h-48 bg-fixed border-2 border-reef-gold bg-dark-grey text-center text-white`}>
  //   <div>{element.name}</div>
  //   <div className="py-16">{element.category + " restaurant"}</div>
  // </div>
  // );
  return (
    <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
    </div>
  )

})

export default function Favorite() {
  console.log(arrOfRestaurants)
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