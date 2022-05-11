import Image from 'next/image';

// Assets
import heartSrc from '../public/images/heart.svg';
import closeSrc from '../public/images/dislike.svg';

/* ----------------- LikeBtn ----------------- */

function LikeBtn ({ clickHandler, isActive }) {
  let className = `rounded-[50%] hover:cursor-pointer h-[50px] w-[50px]
                    shadow-light grid items-center justify-items-center
                    border-[2px]`;
  isActive ? className += " bg-sunset-orange" : className += " bg-limed-spruce";
  return (
    <div className={className}>
      <div className="w-1/2 h-1/2 relative" onClick={() => clickHandler()}>
        <Image
          src={heartSrc}
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}

/* ----------------- DislikeBtn ----------------- */

function DislikeBtn ({ clickHandler, isActive }) {
  const className = `rounded-[50%] z-50 hover:cursor-pointer h-[50px] w-[50px]
                    shadow-light grid items-center justify-items-center
                    border-[2px]`;
  isActive ? className += " bg-white" : className += " bg-sunset-orange";
  return (
    <div className={className}>
      <div className="w-1/2 h-1/2 relative" onClick={() => clickHandler()}>
        <Image
          src={closeSrc}
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}

export { LikeBtn, DislikeBtn };