import Image from 'next/image';

// Components
import HeartBtn from '../components/HeartBtn';
import RatingIcon from '../components/RatingIcon';
import ColoredTag from '../components/ColoredTag';

function Top({ imgSrc, rating }) {
  return(
    <div className="relative h-[180px] w-[100%]">
      <Image className="rounded-[15px]"layout="fill" objectFit="cover" src={imgSrc} alt="" />
      <div className="absolute right-[15px] top-[10px]">
        <HeartBtn isActive={true} clickHandler={() => console.log(false)}/>
      </div>
      <div className="absolute right-[15px] bottom-[-17.5px]">
        <RatingIcon rating={String(rating)}/>
      </div>
    </div>
  );
}

function Bottom({
  name, category, description, avgCost, distance, deliverySpeed,
}) {
  return(
    <div className="relative pl-[15px] pt-[20px] pb-[20px] pr-[15px] text-white">
      <div className="flex flex-col gap-[15px] ">
        <div className="flex gap-[10px] items-center">
          <p className="font-bold">{name}</p>
          <div className="h-[20px] w-[2px] bg-white"></div>
          <p>{category} Restaurant</p>
          <span className="hidden bg-military-green bg-flat-blue bg-moccasin"></span>
        </div>
        <div>
          <p className="text-[.8rem]">{description}</p>
        </div>
        <div className="flex gap-[20px]">
          <ColoredTag colorName="military-green" text={avgCost} />
          <ColoredTag colorName="flat-blue" text={deliverySpeed} />
          <ColoredTag colorName="moccasin" text={`${distance} miles`} />
        </div>
      </div>
    </div>
  );
}

export default function RestaurantCard({ restaurant, clickHandler }) {
  const { restaurantName, cuisine, description, priceRange, dishes } = restaurant;
  const photoURL = dishes?.[0]?.photoURL || 'https://s3-media0.fl.yelpcdn.com/bphoto/-vpD8rR9-v61LpTG9tXiWg/o.jpg';
  const rating = (Math.random() * 4 + 1).toFixed(2);
  const deliverySpeed = ['Fast', 'Medium', 'Slow'][Math.floor(Math.random() * 3)];
  const avgCost = Array(Math.floor(Math.random() * 4 + 1)).fill('$').join('');
  const distance = (Math.random() * 15).toFixed(1);

  return(
    <div
      className="bg-limed-spruce w-full max-w-[500px] rounded-[15px]"
      onClick={() => clickHandler()}
    >
      <Top imgSrc={photoURL} rating={rating}/>
      <Bottom
        name={restaurantName}
        category={cuisine}
        description={description}
        deliverySpeed={deliverySpeed}
        avgCost={avgCost}
        distance={distance}
      />
    </div>
  );
}