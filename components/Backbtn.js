import Image from 'next/image';

// Assets
import leftArrow from '../public/images/left-arrow.svg';


// const btnClass = "rounded-full z-50 absolute bg-transparent h-full w-full cursor-pointer"

// const btnContainerClass = "relative w-[35px] h-[35px] bg-limed-spruce flex items-center justify-center";

// const shadowContainerClass = "inline-block shadow-light rounded-full w-[35px] h-[35px] overflow-hidden"

// const BackButton = ({ clickHandler }) => {
//   return (
//     <div className={shadowContainerClass}>
//       <div className={btnContainerClass}>
//         <button type="button" className={btnClass} onClick={() => clickHandler()}>
//           <Image className="absolute" src={leftArrow} alt="" layout="fill" />
//         </button>
//       </div>
//     </div>
//   );
// };

function BackButton({ clickHandler }) {
  return (
    <div className="rounded-full z-50 hover:cursor-pointer h-[30px] w-[30px]
                    shadow-light grid items-center justify-items-center
                    bg-limed-spruce"
    >
      <div className="w-1/2 h-1/2 relative">
        <Image
          src={leftArrow}
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}

export default BackButton;