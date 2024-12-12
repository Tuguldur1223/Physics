import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
function AboutUs() {

  return (
      <div className='bg-black mt-16 mb-16 w-[1280px] min-h-screen text-white bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% flex flex-col items-center'>
        <Header />
        <h1 className='text-3xl font-bold mt-20 text-green-700'>ABOUT US</h1>
        <p className='text-xl font-semibold w-3/5 mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quibusdam, 
          explicabo sint suscipit officia eligendi distinctio doloremque cupiditate id 
          itaque unde voluptatum sit officiis numquam, culpa voluptatem aspernatur, ex fugit.</p>
        <div className='w-8/12 flex flex-col items-start mt-20'>
          <h1 className='w-80 text-center text-3xl font-semibold mb-4'>OUR MISSION</h1>
          <p className='w-80 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non qui at pariatur beatae quas dolore, dolores 
          </p>
        </div>
        <div className='w-8/12 flex flex-col items-end'>
          <h1 className='w-80 text-center text-3xl font-semibold mb-4'>OUR VISION</h1>
          <p className='w-80 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore vero a perferendis obcaecati consectetur  
          </p>
        </div>
        <div className='w-full flex flex-row justify-around mt-20 mb-10'>
          <div>
            <h1 className='text-2xl font-semibold'>DEVELOPMENT TEAM</h1>
            <div className='flex gap-4'>
              <h1 className='text-xl font-semibold'>Frontend Developer</h1>
              <h1 className='text-xl font-light'>B. Bat-Erdene</h1>
            </div>
            <div className='flex gap-4'>
              <h1 className='text-xl font-semibold'>Backend Developer</h1>
              <h1 className='text-xl font-light'>Kh. Tuguldur</h1>
            </div>
            <div className='flex gap-4'>
              <h1 className='text-xl font-semibold'>UI/UX Designer</h1>
              <h1 className='text-xl font-light'>B. Bat-Enkh</h1>
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>MANAGEMENT TEAM</h1>
            <div className='flex gap-4'>
              <h1 className='text-xl font-semibold'>Founder</h1>
              <h1 className='text-xl font-light'>B. Davaanyam</h1>
            </div>
            <div className='flex gap-4'>
              <h1 className='text-xl font-semibold'>Experiment participant</h1>
              <h1 className='text-xl font-light w-56'>Amjilt cyber school's 6 to 11th grade students</h1>
            </div>
          </div>
        </div>
        
        <Footer/>
      </div>
  )
}

export default AboutUs
 