import Image from 'next/image';
import {useState} from 'react';
// Components
import RatingIcon from '../components/RatingIcon';
import ColoredTag from '../components/ColoredTag';
import Router from 'next/router';


function Checkbox(){
  const [checked, setChecked] = useState(true);
  // console.log('fn Checkbox, checked is', checked);
  function checkboxHandler(){
    // console.log('checkbox clicked');
    setChecked(prevState => !prevState);
  }
  return (
      checked ?
      <div className="w-[30px] h-[30px] ml-[8px] rounded-[5px] relative bg-sunset-orange" onClick={checkboxHandler}>
        <svg className="absolute left-[3px]" fill="white" width="20" height="20" viewBox="0 0 20 20"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/></svg>
      </div>
      :
      <div className="w-[30px] h-[30px] ml-[8px] rounded-[5px] relative bg-[#787D80]"  onClick={checkboxHandler}>
      </div>
  )
}

function Picture({imgSrc}){
  return (
    <div className="relative w-[80px] h-[80px] ml-[8px] rounded-[15px] overflow-hidden" >
      <Image src={imgSrc}  layout="fill" alt='food'/>
    </div>
  )
}
function Description({restaurant}){
  return (
    <div className="w-[160px] h-[60px] ml-[8px] flex flex-col">
      <div className="w-full h-[15px] text-white text-xs font-thin">
      <p> {restaurant.category} food</p>
      </div>
      <div className="w-full h-[20px] text-white">
      <p> {restaurant.dishName}</p>
      </div>
      <div className="w-full h-[20px] text-white">
      <p> $ {restaurant.price}</p>
      </div>

    </div>
  )

}
function Quantity(){
  return (
    <div className="w-[30px] h-[60px] ml-[12px] flex justify-center relative">

      <div className="w-5 h-5 flex justify-center">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"/></svg>
      </div>

      <div className="w-5 h-4 absolute top-[19px] flex justify-center ">
        <p className="text-xs text-white mb-[2px]"> 1</p>
      </div>

      <div className="w-5 h-5 absolute bottom-[0px] flex justify-center">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>
      </div>

    </div>
  )
}

export default function RestaurantCardCart({ restaurant}) {


  return(
    <div className="w-[calc(100%_-_30px)] max-w-[500px] h-[150px] rounded-[15px] mb-[10px] bg-[#38474F] flex items-center">
      <Checkbox></Checkbox>
      <Picture imgSrc={restaurant.imgSrc}></Picture>
      <Description restaurant={restaurant}></Description>
      <Quantity></Quantity>
    </div>
  );
}