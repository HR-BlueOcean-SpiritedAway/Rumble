import Link from 'next/link';

function Homepage() {

  // let navigate = useNavigate();
  // const routeChange = (event) => {
  //   let path = event.target.id;
  //   navigate(path);
  // }

  return (

    <div className="h-screen w-screen block bg-cover bg-center bg-[url('https://cdn.discordapp.com/attachments/972245664073404427/972270519464378399/people-eating.jpg')]">
      <div className="h-screen bg-gradient-to-t from-black">
      <div className="px-12 py-80 w-screen">
      <img className="py-3" src='https://cdn.discordapp.com/attachments/972245664073404427/972262432770773072/Rumble_1.png'/>
        <h2 className="py-2 text-white font-bold"> Lorem Ipsum set dolor amet something </h2>
        <div className="text-gray-400 py-3 font-semibold"> Lorem Ipsum set dolor amet something </div>
        <div className="px-2 w-80">
          <Link href="/login">
           <button id="newAccount" className=" w-72 bg-red-400 font-semibold hover:bg-grey-700 text-white py-2 px-8 rounded-full"> Create New Account </button>
          </Link>
          <div className="h-2">&nbsp;</div>
          <Link href="/login">
            <button id="signIn" className=" w-72 bg-white text-black font-semibold py-2 px-8 rounded-full"> Login With Email </button>
          </Link>
          <div className="w-80 px-16 py-10 text-white font-light"> Terms and Conditions </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Homepage;