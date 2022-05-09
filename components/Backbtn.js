import Image from 'next/image';

// Assets
import leftArrow from '../public/images/left-arrow.svg';


const btnClass = "rounded-full z-50 absolute bg-transparent h-[100%] w-[100%] cursor-pointer"

const btnContainerClass = "relative w-[35px] h-[35px] bg-limed-spruce flex items-center justify-center";

const shadowContainerClass = "inline-block shadow-light rounded-full overflow-hidden"

const BackButton = ({ clickHandler }) => {
  return (
    <div className={shadowContainerClass}>
      <div className={btnContainerClass}>
        <input type="button" className={btnClass} onClick={() => clickHandler()}/>
        <Image className="absolute" src={leftArrow} alt="" />
      </div>
    </div>
  );
};



export default BackButton;