import { useState} from 'react';
import Image from 'next/image';
import ToggleSwitch from './ToggleSwitch';
import heartSrc from '../public/images/heart.svg';
import HeartBtn from './HeartBtn';
import Router from 'next/router';
import axios from 'axios';

export default function RestaurantDetail({ restaurant, user }) {
  restaurant = restaurant[0];
  const [isActive, setIsActive] = useState(false);
  const btnContInActive = "absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-limed-spruce pt-1 pb-1 pr-2 pl-2 cursor-pointer";
  const btnContActive = "absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-sunset-orange pt-1 pb-1 pr-2 pl-2 cursor-pointer";

  function backButtonClick(){
    Router.push({
      pathname: '/Page-L-SelectedRestaurants',
    }, '/Page-L-SelectedRestaurants');
  }

  function heartButtonClick(){
    if (!isActive) {
      setIsActive((prev)=>!prev);
      axios.post('http://localhost:8080/api/users/addFavorite', { uid: user, restaurantID: restaurant.id }).catch(console.error());
    } else {
      setIsActive((prev)=>!prev);
    }
  }

  return (
    <div className="flex flex-col">
      <img className='relative w-full h-52 object-cover object-center' src={restaurant.dishes[0].photoURL}></img>
      <div className={isActive ? btnContActive : btnContInActive}>
        <Image
          src={heartSrc}
          width={25}
          height={25}
          alt='heart'
          onClick={heartButtonClick}
        />
      </div>
      <button className='absolute top-3 left-3 bg-limed-spruce text-white w-8 h-8 rounded-full' onClick={backButtonClick}>
        <svg width='20' height='20' viewBox='0 0 16 24'><path fill='#ffffff' d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>
      </button>
      <div className='pl-3 pt-2 h-1/5 bg-dark-jungle-green flex flex-col w-full'>
        <div className='font-bold text-3xl tracking-wider mt-2 mb-2 text-white'>{restaurant.restaurantName}</div>
        <div className='border-solid border-gray-500 border-r flex text-white mb-2 mt-2 text-sm'>
          <div className='w-1/3 text-md border-r border-white flex justify-start'>
            <p>{restaurant.cuisine} Restaurant</p>
          </div>
          <div className='w-1/3 flex justify-center border-r border-white'>
            <p> {Math.floor(Math.random()*(4000-2000+1)+2000).toLocaleString('en-US')} ratings</p>
          </div>
          <div className='flex justify-center items-center w-1/3'>
            <svg className='fill-[#A38022]'  width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            <p className='ml-2'> {Number.parseFloat(Math.random()*(4.50-3.30)+(3.30)).toFixed(1)} </p>
          </div>
        </div>
        <div className="h-8 mt-4 mb-2 flex w-2/3">
          <div className="text-white bg-military-green w-1/3 h-6 rounded-2xl text-xs flex justify-center items-center mr-4 p-1">$$$</div>
          <div className="text-white bg-flat-blue w-1/3 h-6 rounded-2xl text-xs flex justify-center items-center mr-4 p-1">Fast</div>
          <div className="text-white bg-reef-gold w-1/3 h-6 rounded-2xl text-xs flex justify-center items-center p-1">12 miles</div>
        </div>
        <ToggleSwitch />
        <div className="h-16 mt-2 text-white">
          <p> {restaurant.description} </p>
        </div>

      </div>

      <div className="h-1 w-full bg-limed-spruce">
      </div>

      <div className='bottom-20 pl-3 h-16 flex items-center bg-dark-jungle-green'>
        <div className='font-bold text-2xl text-white mr-3'>Menu</div>
      </div>

      <div className='pl-3 pr-3 w-full bg-dark-jungle-green'>
        {
          restaurant.dishes.map((dish, index) => {
            return (
              <div className='bg-limed-spruce mb-8 rounded-2xl flex items-center justify-start pl-2 h-24 text-white' key={index}>
                <div className='w-1/5 flex justify-center items-center'>
                  <Image className='object-center object-cover rounded-2xl' src={dish.photoURL} width={75} height={75} alt={dish.name}/>
                </div>
                <div className='flex flex-col justify-center w-1/2 pl-2'>
                  <p className='font-bold tracking-wider'>{dish.name}</p>
                  <div className='flex justify-start items-center'>
                    <svg className='fill-[#A38022]'  width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    <p className='ml-2 text-sm'> {Number.parseFloat(Math.random()*(4.50-3.30)+(3.30)).toFixed(1)} </p>
                  </div>
                </div>
                <div className='w-1/4 border-white flex flex-col items-end justify-center'>
                  <p className='mb-2'>${Number.parseFloat(Math.random() * (30 - 10) + 10).toFixed(2)}</p>
                  <button className='bg-sunset-orange text-xs p-1 rounded-lg'>Add to Cart</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
