import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import PhoneHeader from '../components/Header/phoneHeader'

function ExperimentTemplate({ experiments }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const experiment = experiments.find(exp => exp.name === name);

  if (!experiment) {
    return <div>Experiment not found</div>;
  }

  return ( 
    <div className="w-full min-h-screen pb-20 flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />  
      <PhoneHeader/>
      {/* Back button */} 
      <div className='w-10/12 mb-4 mt-10 flex flex-row justify-center items-center'> 
        <button onClick={() => navigate(-1)} className="w-2/12 flex items-center"> 
          <div className='w-10 h-10 rounded-full bg-[#08472B] flex items-center justify-center'>
            <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
          </div>
        </button> 
        <h2 className="text-3xl w-10/12 text-white font-bold">{experiment.title}</h2>
      </div>
      {/* Title */}
      <div className="w-full max-w-2xl mb-8">
        <iframe
          className="w-full aspect-video rounded shadow-lg"
          src={experiment.videoSrc}
          title={experiment.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* What you need */}
      <div className="w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Хэрэглэгдэхүүн</h3>
        <ul className="list-disc list-inside">
          {experiment.materials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* How to do it */}
      <div className="w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Алхам</h3>
        <ol className="list-decimal list-inside">
          {experiment.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      <Footer />
    </div>
  );
}

export default ExperimentTemplate
