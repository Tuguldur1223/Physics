import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chemistry } from '../Datas/Chemistry';
import PhoneHeader from '../components/Header/phoneHeader'
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer';
function Chemistry() {
  return (
    <div className="w-full pb-96 relative sm:pb-48 dark:text-white text-black min-h-screen flex flex-col items-center t-12 -mt-[50px]  transition-colors duration-500 bg-[#FDFDFD] dark:bg-gradient-to-b dark:from-[#101214] dark:from-20% dark:to-[#1B1D20] dark:to-80%">
      
      <h1 className='text-9xl mt-56 font-extrabold'>404</h1>
      <h1 className='text-3xl  font-bold'>LOOKS LIKE YOU ARE LOST</h1>
      <h1 className='text-xl  font-bold'>The page you looking for is not available!</h1>
      <Link to="/home">
      <h1 className='text-xl mt-8'>Go To Home</h1>
      </Link>
      {/* <Footer/><PhoneFooter/> */}
    </div>
  )
}

export default Chemistry;
