import { useState } from 'react'
import Header from '../components/Header/Header'
import PhoneHeader from '../components/Header/phoneHeader'
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer'
import email from '../../public/email.svg'
import call from '../../public/call.svg'
import location from '../../public/location.svg'
function HolbooBarih() {

  return (
      <div className=' pb-80 relative sm:pb-48 w-full min-h-screen text-white bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% flex flex-col items-center'>
        <Header />
        <PhoneHeader />


        <h1 className='text-3xl font-bold mt-10 sm:mt-20 '>Холбоо барих</h1>
        <p>Нүүр / Холбоо барих </p>


        <div className='w-10/12 gap-20 sm:gap-32 mt-14 sm:mt-24 mb-10 flex flex-col sm:flex-row items-center justify-center'>
            <div className='sm:h-60 w-64 sm:w-auto'>
                <img src={location} alt="email" />
                <h1 className='font-semibold text-lg'>Хаяг</h1>
                <p>Амжилт Кибер сургууль, Нарны <br /> зам, 25 хороо, Улаанбаатар хот, <br /> Монгол Улс</p>
            </div>
            <div className='sm:h-60 w-64 sm:w-auto'>
                <img src={call} alt="call" />
                <h1 className='font-semibold text-lg'>Цахим хаяг</h1>
                <p>loremipsum@gmail.com</p>
            </div>
            <div className='sm:h-60 w-64 sm:w-auto'>
            <img src={email} alt="email" />
                <h1 className='font-semibold text-lg'>Утас</h1>
                <p>+976 XXXX-XXXX</p>
            </div>
            
        </div>

        <PhoneFooter/>
        <Footer/><PhoneFooter/>
      </div>
  )
}

export default HolbooBarih
 