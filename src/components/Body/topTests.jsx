import { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideShow from './SlideShow';
function Welcome() {
  return (
    <div className="w-full h-[684px] relative mt-10 flex flex-col items-center gap-10">
        <div className='flex items-center gap-4 w-full ml-52 '>
        <h1 className='text-white text-4xl font-bold'>Бидний  туршилтууд</h1><p className='text-gray-500'>энэ сард</p>
        </div>
        <SlideShow/>
    </div>
  )
}

export default Welcome;
