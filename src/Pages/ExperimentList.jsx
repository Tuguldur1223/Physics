import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ExperimentInfo from '../components/Body/ExperimentInfo';
import { experiments } from '../App';

function ExperimentList({Grade, Subject}) {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />
      <h2 className="text-3xl font-bold mb-8 text-white mt-10">{Grade}-р ангийн туршилтууд</h2>
      {experiments
        .filter(data => data.grade === Grade && data.subject === Subject)
        .map(data => <ExperimentInfo key={data.id} id={data.id} title={data.title} description={data.description} path={data.path} />)
      }
      <Footer />
    </div>
  );
}

export default ExperimentList
