import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ExperimentInfo from '../components/Body/ExperimentInfo';
const experiments = [
  {
    id: 1,
    title: 'Pendulum Experiment',
    subject: 'Physics',
    grade: 6,
    path: '/physics/experiment/pendulum',
    description: 'Learn about pendulum motion and periodic motion.',
  },
  {
    id: 2,
    title: 'Chemical Reaction',
    subject: 'Chemistry',
    path: '/chemistry/experiment/reaction',
    grade: 7,
    description: 'Explore how different chemicals react with each other.',
  },
  // Add more experiments as needed
];
function ExperimentList({Grade, Subject}) {
  return (
    
      
      <div className="w-[1280px] h-full flex flex-col items-center bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80% mt-16 mb-16  ">
        <Header />
        <h2 className="text-3xl font-bold mb-8 text-white mt-10">Available Experiments of Grade {Grade}</h2>
        {
          experiments
            .filter(data => data.grade === Grade && data.subject === Subject)
            .map(data => <ExperimentInfo key={data.id} id={data.id} title={data.title} description={data.description} path={data.path} />)
        }
        <Footer />
      </div>
      
  
  );
}

export default ExperimentList
