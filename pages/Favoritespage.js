import Image from 'next/image';

// Components
import BackBtn from '../components/Backbtn';

// Assets
import imgSrc from '../public/images/breakfast-img.svg';

function Header() {
  return(
    <div className="relative bg-moccasin text-white h-[300px] pl-[15px] flex flex-col justify-center">
      <div className="absolute top-[15px] left-[15px] w-[35px] h-[35px]">
        <BackBtn clickHandler={() => console.log('asdf')}/>
      </div>
      <h1 className="font-dark text-[2.5rem]">Favorites</h1>
      <p className="w-[250px]">You probably know these like the back of your hand.</p>
      <div className="absolute w-[150px] bottom-[15px] right-[15px]">
        <Image src={imgSrc} alt="sadfasdf"/>
      </div>
    </div>
  );
};

export default function FavoritesPage() {
  return (
    <div>
      <Header />
    </div>
  );
}