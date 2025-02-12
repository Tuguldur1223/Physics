import React, { useState } from 'react';
import Play from '../../../public/Play'
const slides = [
  {
    id: 1,
    title: 'Robotek туршилтын үйл явц - Эмма Ундрах',
    content: '1 жилийн өмнө / 09:10',
    imageUrl: '../../../public/Slide1.png', // Placeholder image
  },
  {
    id: 2,
    title: 'Robotek туршилтын үйл явц - Сараа Батука',
    content: '1 жилийн өмнө / 10:20',
    imageUrl: '../../../public/Slide2.png', // Placeholder image
  },
  {
    id: 3,
    title: 'Robotek туршилтын үйл явц - Учрал Энэрэл',
    content: '1 жилийн өмнө / 11:30',
    imageUrl: '../../../public/Slide3.png', // Placeholder image
  },
  {
    id: 3,
    title: 'Robotek туршилтын үйл явц - Төгөлдөр Болор Сүбэдэй',
    content: '1 жилийн өмнө / 12:40',
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
    
      <div className="w-full flex flex-row justify-center items-center sm:gap-8 gap-2" >
        <button 
            className="bg-[#08472B] rounded-full sm:w-10 sm:h-10 w-5 h-5 flex justify-center items-center"
            onClick={prevSlide}
          >
            <img src="../../../public/leftArrow.svg" alt="leftArrow" className='sm:scale-100 scale-75'/>
        </button>
        <div className='w-10/12 sm:h-[500px] h-[200px] flex flex-col justify-end items-start p-5' style={{
            backgroundImage: `url("${slides[currentSlide].imageUrl}")`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center'

        }}>
          <div className='flex sm:gap-6 gap-2'>
            <button className='bg-black rounded-full sm:w-10 sm:h-10 w-5 h-5 flex justify-center items-center'>
            <Play/>
            </button>
            <button className='bg-black rounded-full sm:w-10 sm:h-10 w-5 h-5 flex justify-center items-center'>
            <img src="../../../public/bookmark.svg" alt="bookmark" className='scale-75 sm:scale-100'/>
            </button>
          </div>
          <h2 className="sm:text-[40px] text-[10px] font-bold text-white  w-2/3 text-left">{slides[currentSlide].title}</h2>
          <p className="sm:text-2xl text-[5px] font-medium text-gray-500 text-center ">{slides[currentSlide].content}</p>
        </div>
        
          
        <button 
            className="bg-[#08472B] rounded-full sm:w-10 sm:h-10 w-5 h-5 flex justify-center items-center"
            onClick={nextSlide}
        >
            <img src="../../../public/rightArrow.svg" alt="rightArrow" className='sm:scale-100 scale-75'/>
        </button>
        
      </div>
    
  );
}

export default SlideShow;
