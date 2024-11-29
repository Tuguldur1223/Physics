import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
function AboutUs() {

  return (
    <>
      <div className='bg-black w-[1280px] min-h-screen text-white bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% flex flex-col items-center'>
      <Header />
      <h1 className='text-3xl font-bold'>ABOUT US</h1>
      <p className='text-xl font-semibold w-3/5 mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quibusdam, 
        explicabo sint suscipit officia eligendi distinctio doloremque cupiditate id 
        itaque unde voluptatum sit officiis numquam, culpa voluptatem aspernatur, ex fugit.</p>
      <div className='w-full'>
        <div>
        <h1>OUR MISSION</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non qui at pariatur beatae quas dolore, dolores laudantium minima assumenda ipsam, nihil laborum harum? Non ducimus sit explicabo ullam a.
        </p>
        </div>
        <h1>OUR VISION</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore vero a perferendis obcaecati consectetur, vel omnis nam, eos blanditiis, laudantium distinctio! Laboriosam temporibus, similique nam libero eos error iste.
        </p>
      </div>
      <div>
      <h1>DEVELOPMENT TEAM</h1>
      <div>
        <h1>Frontend Developer</h1>
        <h1>B. Bat-Erdene</h1>
      </div>
      <div>
        <h1>Backend Developer</h1>
        <h1>Kh. Tuguldur</h1>
      </div>
      <div>
        <h1>UI/UX Designer</h1>
        <h1>B. Bat-Enkh</h1>
      </div>
      </div>
      <div>
      <h1>MANAGEMENT TEAM</h1>
      <div>
        <h1>Founder</h1>
        <h1>B. Davaanyam</h1>
      </div>
      <div>
        <h1>Experiment participant</h1>
        <h1>Amjilt cyber school's 6 to 11th grade students</h1>
      </div>
      </div>
      
      <Footer/>
      </div>
    </>
  )
}

export default AboutUs
 