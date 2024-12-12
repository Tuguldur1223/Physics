import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LeftArrow from '../../public/leftArrow';

  function ExperimentTemplate({ experiment }) {
    const navigate = useNavigate()
    return ( 
        <div className="max-w-[1280px] min-h-screen flex flex-col items-center bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% mt-16 mb-16">
        <Header />  
          {/* Back button */} 
          <div className='w-10/12 mb-4 mt-10'> 
            <button onClick={() => navigate(-1)} className="flex items-center"> 
              <div className='w-10 h-10 rounded-full bg-green-700 flex items-center justify-center'>
              <LeftArrow  />
              </div>
            </button> 
          </div>
          {/* Title */}
          <div className="w-full max-w-2xl mb-8">
            <h2 className="text-3xl text-white font-bold mb-4">{experiment.title}</h2>
            <iframe width="1080" height="608" src={props.Url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mt-8 '></iframe>
          </div>
          {/* What you need */}
          <div className="w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Хэрэглэгдэхүүн</h3>
            
          </div>
        <Footer />
        </div>
    );
}

export default ExperimentTemplate
