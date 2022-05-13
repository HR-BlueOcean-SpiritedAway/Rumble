

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
        </div>
        <div>
          <p className="text-[.9rem]">{description}</p>
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
  return(
    <div
      className="bg-limed-spruce w-[calc(100%_-_30px)] max-w-[500px] rounded-[15px]"
      onClick={() => clickHandler()}
    >
      <Top imgSrc={restaurant.imgSrc} rating={restaurant.rating}/>
      <Bottom
        name={restaurant.name}
        category={restaurant.category}
        description={restaurant.description}
        deliverySpeed={restaurant.deliverySpeed}
        avgCost={restaurant.avgCost}
        distance={restaurant.distance}
      />
    </div>
  );
}