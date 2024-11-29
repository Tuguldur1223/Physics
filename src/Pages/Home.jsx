import { useState } from 'react'
import Header from '../components/Header/Header'
import TopTests from '../components/Body/topTests'
import Footer from '../components/Footer'
function Home() {

  return (
    <>
      <div className='bg-black w-[1280px] min-h-screen bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%'>
      <Header />
      <TopTests/>
      <Footer/>
      </div>
    </>
  )
}

export default Home
