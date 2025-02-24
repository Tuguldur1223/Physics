import { useState } from 'react'
import Header from '../components/Header/Header'
import PhoneHeader from '../components/Header/phoneHeader'
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer'
import email from '../../public/email.svg'
import call from '../../public/call.svg'
function Surtchilgaa() {

  return (
      <div className=' pb-80 relative sm:pb-48 w-full min-h-screen text-white bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% flex flex-col items-center'>
        <Header />
        <PhoneHeader />


        <h1 className='text-3xl font-bold mt-10 sm:mt-20 '>Сурталчилгаа байршуулах</h1>
        <p>Нүүр / Сурталчилгаа байршуулах </p>


        <div className='w-10/12 gap-32  mt-24 mb-10 flex flex-col sm:flex-row items-center justify-center'>
            <div>
                <img src={call} alt="call" />
                <h1 className='font-semibold text-lg w-40 sm:w-auto'>Цахим хаяг</h1>
                <p>loremipsum@gmail.com</p>
            </div>
            <div>
            <img src={email} alt="email" />
                <h1 className='font-semibold text-lg w-40 sm:w-auto'>Утас</h1>
                <p>+976 XXXX-XXXX</p>
            </div>
            <div className='font-semibold sm:font-normal text-lg'>
                <p>Цахим хаяг болон утсаар холбогдож <br /> сурталчилгаа байршуулна уу.</p>
            </div>
        </div>

        <PhoneFooter/>
        <Footer/><PhoneFooter/>
      </div>
  )
}

export default Surtchilgaa
 