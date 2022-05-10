import CarouselThing from './Carousel.js';

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

const topThree = data.map((element) => {
  return (
    <div className={`w-64 h-48 bg-fixed border-2 rounded-full border-gold bg-dark-grey text-center text-white`}>
    <div>{element.name}</div>
    <div className="py-16">{element.category + " restaurant"}</div>
  </div>
  );
})

export default function Favorite() {
  return (
    <div className="bg-auto bg-black h-screen items-center">
      <div className="h-24 rounded-b-4xl bg-gold text-5xl text-center font-bold text-white">
        <div className="py-5">Top Picks</div>
      </div>
      <div className="py-4 space-x-4 text-xl font-extralight text-center text-white">Choose your top restaurant</div>
      <div className="flex self-auto">{topThree}</div>
      <div className="flex place-content-center items-end font-extralight text-l text-center text-white" >Keep swiping</div>
    </div>
  )
};