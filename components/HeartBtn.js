import Image from 'next/image';

// Assets
import heartSrc from '../public/images/heart.svg';

// Cont = Container
const btnClass = "rounded-full z-50 absolute bg-transparent h-[100%] w-[100%] cursor-pointer"

const btnContActive = "relative w-[35px] h-[35px] bg-sunset-orange flex items-center justify-center";

const btnContInActive = "relative w-[35px] h-[35px] bg-limed-spruce flex items-center justify-center";

const shadowContClass = "inline-block shadow-light rounded-full overflow-hidden"

export default function HeartBtn({ isActive, clickHandler}) {
  return (
    <div className={shadowContClass}>
      <div className={isActive ? btnContActive : btnContInActive}>
        <input type="button" className={btnClass} onClick={() => clickHandler()}/>
        <Image className="absolute" src={heartSrc} alt="" />
      </div>
    </div>
  );
}