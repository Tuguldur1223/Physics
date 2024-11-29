import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LeftArrow from '../../public/leftArrow';

  function ExperimentTemplate({ experiment }) {
    const navigate = useNavigate()
    return (
      <>
        <Header />
        <div className="max-w-[1280px] h-full flex flex-col items-center p-10 bg-gray-100 mt-10">
          {/* Back button */} 
          <div className='w-full mb-4'> 
            <button onClick={() => navigate(-1)} className="flex items-center"> 
              <div className='w-10 h-10 rounded-full bg-green-700 flex items-center justify-center'>
              <LeftArrow  />
              </div>
            </button> 
          </div>
          {/* Title */}
          <div className="w-full max-w-2xl mb-8">
            <h2 className="text-3xl font-bold mb-4">{experiment.title}</h2>
            <video controls className="w-full rounded shadow-lg">
              <source src={experiment.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* What you need */}
          <div className="w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">What You Need</h3>
            <ul className="list-disc list-inside">
              {experiment.materials.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* How to do it */}
          <div className="w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">How to Do It</h3>
            <ol className="list-decimal list-inside">
              {experiment.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          {/* Result */}
          <div className="w-full max-w-2xl bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Result</h3>
            <p>{experiment.result}</p>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default ExperimentTemplate
