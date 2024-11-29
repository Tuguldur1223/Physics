import React, { useState } from 'react';
import RigthArrow from '../../../public/rigthArow';
import LeftArrow from '../../../public/leftArrow'
import Bookmark from '../../../public/bookmark'
import Play from '../../../public/Play'
const slides = [
  {
    id: 1,
    title: 'Lorem ipsum : dolor sit amet, consectetur adipiscing elit.',
    content: 'today / 09:13',
    imageUrl: '../../../public/Slide1.png', // Placeholder image
  },
  {
    id: 2,
    title: 'Lorem ipsum : dolor sit amet, consectetur adipiscing elit.',
    content: 'today / 09:13',
    imageUrl: '../../../public/Slide2.png', // Placeholder image
  },
  {
    id: 3,
    title: 'Lorem ipsum : dolor sit amet, consectetur adipiscing elit.',
    content: 'today / 09:13',
    imageUrl: '../../../public/Slide3.png', // Placeholder image
  },
  {
    id: 3,
    title: 'Lorem ipsum : dolor sit amet, consectetur adipiscing elit.',
    content: 'today / 09:13',
    imageUrl: '../../../public/Slide4.png', // Placeholder image
  },
];

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    
      <div className="w-full flex flex-row justify-center items-center gap-8" >
        <button 
            className="bg-green-700 rounded-full px-4 py-3"
            onClick={prevSlide}
          >
            <LeftArrow/>
        </button>
        <div className='w-10/12 h-[500px] flex flex-col justify-end items-start p-5' style={{
            backgroundImage: `url("${slides[currentSlide].imageUrl}")`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center'

        }}>
          <div className='flex gap-6'>
            <button className='bg-black rounded-full w-10 h-10 flex justify-center items-center'>
            <Play/>
            </button>
            <button className='bg-black rounded-full w-10 h-10 flex justify-center items-center'>
            <Bookmark/>
            </button>
          </div>
          <h2 className="text-[40px] font-bold text-white  w-2/3 text-left">{slides[currentSlide].title}</h2>
          <p className="text-2xl font-medium text-gray-500 text-center ">{slides[currentSlide].content}</p>
        </div>
        
          
        <button 
            className="bg-green-700 rounded-full px-4 py-3"
            onClick={nextSlide}
        >
            <RigthArrow/>
        </button>
        
      </div>
    
  );
}

export default SlideShow;
