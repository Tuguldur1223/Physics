import { useParams } from 'react-router-dom';
import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Lister from '../components/Body/Lister';
import { experiments } from '../Datas/Experiments';
import PhoneHeader from '../components/Header/phoneHeader'
function ExperimentList({ Subject }) {
  const { grade } = useParams();
  const Grade = Number(grade);

  console.log('Grade:', Grade); // Debug log
  console.log('Filtered experiments:', experiments.filter(data => data.grade === Grade && data.subject === Subject));

  return (
    <div className="w-full min-h-screen flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />
      <PhoneHeader/>
      <h2 className="text-3xl text-center font-bold mb-8 text-white mt-10">{Grade}-р ангийн физикийн туршилтууд</h2>
      {experiments
        .filter(data => data.grade === Grade && data.subject === Subject)
        .map(data => (
          <Lister 
            key={data.id} 
            id={data.id} 
            title={data.title} 
            description={data.description} 
            path={`/physic/experiment/${data.name}`} 
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default ExperimentList;
