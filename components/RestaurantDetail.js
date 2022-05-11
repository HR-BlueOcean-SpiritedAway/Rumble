import Image from 'next/image';
import ToggleSwitch from './ToggleSwitch';
import heartSrc from '../public/images/heart.svg';
import DishCard_PageJ from './DishCard_PageJ.js'

export default function RestaurantDetail({restaurant}) {
  console.log('in fnRestaurantDetails with restaurant', restaurant);
  return (
    <div className="flex flex-col">
      <img className='relative w-full h-[170px] object-cover object-center' src={restaurant.dishes[0].photoURL}></img>
      <div className='absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-limed-spruce pt-1 pb-1 pr-2 pl-2'>
        <Image src={heartSrc} width={25} height={25} alt='heart'/>
      </div>
      <button className='absolute top-3 left-3 bg-limed-spruce text-white w-[30px] h-[30px] rounded-[30px]'><svg width='20' height='20' viewBox='0 0 16 24'><path fill='#ffffff' d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>
      </button>
      <div className='pl-3 h-[185px] bg-[#1F2427] flex flex-col'>
        <div className='font-bold text-3xl tracking-wide pt-2.5 pb-1 mt-[-4px] mb-[5px] text-white'>{restaurant.restaurantName}</div>

        <div className='pr-3 border-solid border-gray-500 border-r flex text-white'>
          <p> {restaurant.cuisine} Restaurant </p>
          <p className='text-white text-2xl ml-[10px] mt-[-4px]'>|</p>
          <p className='ml-[10px] mt-[3px] text-sm'> {Math.floor(Math.random()*(4000-2000+1)+2000)} </p>
          <p className='ml-[5px] mt-[3px] text-sm'> ratings </p>
          <p className='text-white text-2xl ml-[10px] mt-[-4px]'>|</p>
          <svg className='ml-[5px] mt-[8px] pl-1 pb-1 fill-[#A38022]'  width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
          <p className='ml-[10px] mt-[3px] text-sm'> {Number.parseFloat(Math.random()*(4.50-3.30)+(3.30)).toFixed(2)} </p>
        </div>

        <div className="pr-3 h-[30px] mt-[5px] flex">
          <div className="text-white text-center  bg-[#657841] ml-[5px] mt-[3px] w-[45px] h-[24px] rounded-[25px] text-[14px]">$$$</div>
          <div className="text-white text-center bg-[#3475A9] ml-[13px] mt-[3px] w-[55px] h-[24px] rounded-[25px] text-[14px]">Fast</div>
          <div className="text-white text-center bg-[#657841] ml-[16px] mt-[3px] w-[75px] h-[24px] rounded-[25px] text-[14px]">12 miles</div>
        </div>

        <div className="pr-3 h-[60px] mt-[5px] text-white">
        <p> {restaurant.description} </p>

        </div>

      </div>

      <div className="h-[4px] w-full  bg-[#38474F]">
      </div>

      <div className='bottom-20 pl-3 h-[70px] flex items-center bg-[#1F2427]'>
        <div className='font-bold text-2xl text-white mr-3'>Menu</div>
      </div>

      <div className='pl-3 pr-3 w-full  bg-[#1F2427]'>
        {
          restaurant.dishes.map((dish, index)=>{
            return <DishCard_PageJ dish={dish} key={index}/>
          })
        }
      </div>


    </div>
  )
}
