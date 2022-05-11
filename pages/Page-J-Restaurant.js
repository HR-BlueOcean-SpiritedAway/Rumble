import RestaurantDetail from '../components/RestaurantDetail';
//Dummy data
const restaurant = {
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

//end dummy data

export default function SingleRestaurant() {
  return (
    <div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  )
}