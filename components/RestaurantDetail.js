import ToggleSwitch from './ToggleSwitch';

export default function RestaurantDetail() {
  const data = {
    cuisine: "Italian",
    zip_code: 94117,
    addres: "311 Divisadero St",
    restaurantName: "Ragazza",
    priceRange: "$$",
    state: "CA",
    dishes: [
        {
            photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/-vpD8rR9-v61LpTG9tXiWg/o.jpg",
            name: "Amatriciana"
        },
        {
            name: "Moto",
            photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/9_ZCRhfIUAsj-oeXFFidkQ/o.jpg"
        },
        {
            photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/yvvLJoKtaSr7z4IUvViPKg/o.jpg",
            name: "Bianca"
        }
    ],
    description: "Lorem ipsum dolor sit amet",
    city: "San Francisco"
  }

  return (
    <div>
      <img className='relative w-full h-48 object-cover object-center' src={data.dishes[0].photoURL}></img>
      <svg className='absolute w-8 top-2.5 left-2.5 fill-white cursor-pointer' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 2c5.518 0 9.997 4.48 9.997 9.998 0 5.517-4.479 9.997-9.997 9.997s-9.998-4.48-9.998-9.997c0-5.518 4.48-9.998 9.998-9.998zm-1.523 6.21s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero"/></svg>
      <svg className='absolute w-8 top-3 right-2.5 fill-white cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
      <div className='pl-3'>
        <div className='font-bold text-2xl tracking-wide pt-2.5'>{data.restaurantName}</div><br></br>
        <div>
          <div className='inline pr-3 border-solid border-gray-500 border-r'>{data.cuisine}</div>
          <div className='inline mr-5 pl-3 border-solid border-gray-500 border-r pr-3'>
            <div className='inline'>{parseFloat(Math.random() * 5 + 1).toFixed(1)}</div>
            <svg className='inline pl-1 pb-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
          </div>
          <div className='inline mr-5 border-solid border-gray-500 border-r pr-3'>{(Math.floor(Math.random() * 5000)).toLocaleString('en-US')} ratings</div>
          <div className='inline'>{data.priceRange}</div>
        </div>
      </div>
      <ToggleSwitch />
      <div className='bottom-20 mt-5 pl-3'>
        <div className='font-bold text-lg tracking-wide border-b pb-4 mr-3'>Full Menu</div>
        {data.dishes.map((dish, index) => {
          return (
            <div className='flex justify-between mt-6 border-b pb-4 mr-4 cursor-pointer' key={index}>
              <div className='w-9/12'>
                <div className='font-bold'>{dish.name}</div>
                <div>{`This shit's fir${'eee'.repeat(index + 1)}`}</div>
                <div>{'$' + parseFloat(Math.random() * (30 - 10) + 10).toFixed(2)}</div>
              </div>
              <img className='w-20 h-20 rounded-md object-cover object-center' src={dish.photoURL}></img>
            </div>
          );
        })}
      </div>
    </div>
  )
}
