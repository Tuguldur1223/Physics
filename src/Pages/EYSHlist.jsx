import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ExperimentInfo from '../components/Body/ExperimentInfo';
const bodloguud = [
  {
    id: 1,
    title: 'Тогтмол гүйдэл (Цахилгаан хэлхээ)',
    path: '/EYSH_beltgel/Togtmol_Guidel',
    description: 'Learn about pendulum motion and periodic motion.',
  },
  
  // Add more experiments as needed
];
function ExperimentList({Grade, Subject}) {
  return (
    
      
      <div className="w-[1280px] h-full flex flex-col items-center bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% mt-16 mb-16  ">
        <Header />
        <h2 className="text-3xl font-bold mb-8 text-white mt-10">ЭЕШ-ийн бодолтууд</h2>
        {
          bodloguud
            .map(data => <ExperimentInfo key={data.id} id={data.id} title={data.title} description={data.description} path={data.path} />)
        }
        <Footer />
      </div>
      
  
  );
}

export default ExperimentList
