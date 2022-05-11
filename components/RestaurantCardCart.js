import Image from 'next/image';
import {useState} from 'react';
// Components
import RatingIcon from '../components/RatingIcon';
import ColoredTag from '../components/ColoredTag';


function Checkbox(){
  const [checked, setChecked] = useState(true);
  console.log('fn Checkbox, checked is', checked);
  function checkboxHandler(){
    console.log('checkbox clicked');
    setChecked(prevState => !prevState);
  }
  return (
      checked ?
      <div className="w-[30px] h-[30px] ml-[8px] rounded-[5px] relative bg-sunset-orange border-2 border-[black]" onClick={checkboxHandler}>
        <svg className="absolute left-[3px]" fill="white" width="20" height="20" viewBox="0 0 20 20"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/></svg>
      </div>
      :
      <div className="w-[30px] h-[30px] ml-[8px] rounded-[5px] relative bg-[#787D80] border-2 border-[black]"  onClick={checkboxHandler}>
      </div>
  )
}

// 'sunset-orange': '#FF6161',
//       'limed-spruce': '#37474F',
//       'dark-jungle-green': '#1F2427',
//       'white': '#FFFFFF',
//       'black': '#000000',
//       'star-dust': '#A59E9E',
//       'star-dust-light': '#9D9D9D',
//       'reef-gold': '#A48111',
//       'moccasin': '#8D733F',
//       'military-green': '#65793E',
//       'flat-blue': '#3074AB',

function Picture({imgSrc}){
  return (
    <div className="relative w-[80px] h-[80px] ml-[8px] rounded-[15px] border-2 border-[black] overflow-hidden" >
    <Image src={imgSrc}  layout="fill" alt='food'/>
    </div>
  )
}
function Description(){
  return (
    <div className="w-[160px] h-[60px] ml-[8px] border-2 border-[black]">
    <p> description</p>
    </div>
  )

}
function Quantity(){
  return (
    <div className="w-[30px] h-[60px] ml-[12px] border-2 border-[black]">
    <p>yo yo </p>
    </div>
  )
}

export default function RestaurantCardCart({ restaurant}) {

  function clickHandler(){
    console.log('all of restaurant card clicked');
  }

  return(
    <div
      className="w-[calc(100%_-_30px)] max-w-[500px] h-[150px] rounded-[15px] mb-[10px] bg-[#38474F] flex items-center	"
      onClick={() => clickHandler()}
    >
      <Checkbox></Checkbox>
      <Picture imgSrc={restaurant.imgSrc}></Picture>
      <Description></Description>
      <Quantity></Quantity>

    </div>
  );
}