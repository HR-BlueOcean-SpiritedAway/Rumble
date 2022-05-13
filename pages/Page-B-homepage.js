import Link from 'next/link';
const { useAuthState } = require('react-firebase-hooks/auth');
import { useEffect} from 'react';

const { auth } = require('../firebase');
import Router from 'next/router';

function Homepage() {

  const [user, loading] = useAuthState(auth);

  useEffect(()=>{
    if (user){
      Router.push('/Page-G-Settings');
    }
  },[user])

  return (

    <div className="h-screen w-screen block bg-cover bg-center bg-[url('https://cdn.discordapp.com/attachments/972245664073404427/972270519464378399/people-eating.jpg')]">
      <div className="h-screen bg-gradient-to-t from-black">
      <div className="px-10 py-64 w-screen">
      <img className="py-0" src='https://cdn.discordapp.com/attachments/972245664073404427/972262432770773072/Rumble_1.png'/>
        <h2 className=" text-white text-4xl font-semibold"> Lorem Ipsum et sotoro</h2>
        <div className="py-5 text-star-dust-light text-sm font-light"> Lorem Ipsum set dolor amet something </div>
        <div className=" w-80">
          <Link href="/login">
           <button id="newAccount" className="rounded-full py-2 px-8 w-72 bg-sunset-orange font-semibold text-white"> Create New Account </button>
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