import { useParams } from 'react-router-dom';
import { useState } from 'react'
import PhoneFooter from '../components/phoneFooter'
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
    <div className="w-full pt-20 pb-96 relative sm:pb-56 text-black dark:text-white min-h-screen flex flex-col items-center t-12 -mt-[50px]  transition-colors duration-500 bg-[#FDFDFD] dark:bg-gradient-to-b dark:from-[#101214] dark:from-20% dark:to-[#1B1D20] dark:to-80%">
      
      <h2 className="text-3xl text-center font-bold mb-8 mt-10">{Grade}-р ангийн физикийн туршилтууд</h2>
      {experiments
        .filter(data => data.grade === Grade && data.subject === Subject)
        .map(data => (
          <Lister 
            key={data.id} 
            id={data.id} 
            title={data.title} 
            name={data.name}
            description={data.description} 
            path={`/physic/experiment/${data.name}`}
            type="experiments" 
          />
        ))
      }
      <Footer/><PhoneFooter/>
    </div>
  );
}

export default ExperimentList;
