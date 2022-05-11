import Image from 'next/image';
import {useState} from 'react';
// Components
import RatingIcon from '../components/RatingIcon';
import ColoredTag from '../components/ColoredTag';



const prices = [ 8, 9, 8.50, 8.50, 9.50, 9.99, 9.99, 11.99, 12.99, 12.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 18.99, 19.99, 21.99, 22.99, 25];

function Picture({imgSrc}){
  return (
    <div className="relative w-[80px] h-[80px] ml-[12px] rounded-[15px] overflow-hidden" >
      <Image src={imgSrc}  layout="fill" alt='food'/>
    </div>
  )
}
function Description({name}){
  return (
    <div className="w-[170px] h-[60px] ml-[13px] mt-[5px] flex flex-col ">
      <div className="w-full h-[20px] mb-[5px] text-white text-l ">
        <p> {name}</p>
      </div>
      <div className="ml-[-3px] w-full h-[20px] flex ">
        <svg className='mt-[8px] pl-1 pb-1 fill-[#A38022]'  width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        <p className=' mt-[3px] ml-[3px] text-sm text-white'> {Number.parseFloat(Math.random()*(4.50-3.30)+(3.30)).toFixed(2)} </p>
      </div>

    </div>
  )
}

function PriceCart(){
  return (
    <div className="w-[80px] h-[60px] ml-[12px] mr-[12px] ">
      <div className="w-full h-[30px] mt-[-2px] flex items-end flex-row-reverse text-white">
        <p >${Number.parseFloat(prices[Math.floor(Math.random() * (21 - 0 + 1) + 0)]).toFixed(2)}</p>
      </div>
      <div className="w-full h-[30px] flex items-end flex-row-reverse mt-[-10px]">
        <button className="w-[60px] h-[20px] text-white text-xs rounded-[3px] bg-[#FC6265]"> Add Cart </button>
      </div>
    </div>
  )
}

export default function DishCardCart({ dish}) {

  return(
    <div
      className="w-full h-[100px] rounded-[15px] mb-[10px]  bg-[#38474F] flex items-center	"
    >
      <Picture imgSrc={dish.photoURL}></Picture>
      <Description name={dish.name}></Description>
      <PriceCart></PriceCart>

    </div>
  );
}
