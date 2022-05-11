import Image from 'next/image';
import ToggleSwitch from './ToggleSwitch';
import heartSrc from '../public/images/heart.svg';


export default function RestaurantDetail() {
  const data = {
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

  return (
    <div>
      <img className='relative w-full h-48 object-cover object-center' src={data.dishes[0].photoURL}></img>
      <div className='absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-limed-spruce pt-1 pb-1 pr-2 pl-2'>
        <Image src={heartSrc} width={25} height={25} alt='heart'/>
      </div>
      <button className='absolute top-3 left-3 bg-limed-spruce text-white w-[30px] h-[30px] rounded-[30px]'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 24'><path fill='#ffffff' d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>
      </button>
      <div className='pl-3'>
        <div className='font-bold text-2xl tracking-wide pt-2.5'>{data.restaurantName}</div><br></br>
        <div>
          <div className='inline pr-3 border-solid border-gray-500 border-r'>{data.cuisine}</div>
          <div className='inline mr-5 pl-3 border-solid border-gray-500 border-r pr-3'>
            <div className='inline'>{parseFloat(Math.random() * 5 + 1).toFixed(1)}</div>
            <svg className='inline pl-1 pb-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
          </div>
          <div className='inline mr-5 border-solid border-gray-500 border-r pr-3'>{(Math.floor(Math.random() * 5000)).toLocaleString('en-US')} ratings</div>
          <div className='inline'>{data.priceRange}</div>
        </div>
      </div>
      <ToggleSwitch />
      <div className='bottom-20 mt-5 pl-3'>
        <div className='font-bold text-lg tracking-wide border-b pb-4 mr-3'>Full Menu</div>
        {data.dishes.map((dish, index) => {
          return (
            <div className='flex justify-between mt-6 border-b pb-4 mr-4 cursor-pointer bg-sunset-orange' key={index}>
              <div className='w-9/12 bg-[blue]'>
                <div className='font-bold'>{dish.name}</div>
                <div>{`This shit's fir${'eee'.repeat(index + 1)}`}</div>
                <div>{'$' + parseFloat(Math.random() * (30 - 10) + 10).toFixed(2)}</div>
              </div>
              <img className='w-20 h-20 rounded-md object-cover object-center' src={dish.photoURL}></img>
            </div>
          );
        })}
      </div>
    </div>
  )
}
