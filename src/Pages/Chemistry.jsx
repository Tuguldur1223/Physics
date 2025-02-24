import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { chemistry } from '../Datas/Chemistry';
import PhoneHeader from '../components/Header/phoneHeader'
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer';
function Chemistry() {
  return (
    <div className="w-full pb-96 relative sm:pb-48 min-h-screen flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />
      <PhoneHeader/>
      <h1 className='text-9xl mt-56 font-extrabold text-green-900'>404</h1>
      <h1 className='text-3xl  font-bold text-green-900'>LOOKS LIKE YOUR LOST</h1>
      <h1 className='text-xl  font-bold '>The page you looking for is not available!</h1>
      <Link to="/home">
      <h1 className='text-xl mt-8 text-green-900'>Go To Home</h1>
      </Link>
      {/* <Footer/><PhoneFooter/> */}
    </div>
  )
}

export default Chemistry;
