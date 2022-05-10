import Image from 'next/image';

// Assets
import heartSrc from '../public/images/heart.svg';

// Cont = Container
const btnClass = "z-50 absolute bg-transparent h-[100%] w-[100%] cursor-pointer"

const btnContActive = "relative w-[35px] h-[35px] bg-sunset-orange flex items-center justify-center";

const btnContInActive = "relative w-[35px] h-[35px] bg-limed-spruce flex items-center justify-center";

const shadowContClass = "inline-block shadow-light rounded-[50%] overflow-hidden"

export default function HeartBtn({ isActive, clickHandler}) {
  return (
    <div className={shadowContClass}>
      <div className={isActive ? btnContActive : btnContInActive}>
        <input type="button" className={btnClass} onClick={() => clickHandler()}/>
        <Image height="15px" width="15px" src={heartSrc} alt="" />
      </div>
    </div>
  );
}