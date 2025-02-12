import { useState } from 'react'
import Header from '../components/Header/Header'
import TopTests from '../components/Body/topTests'
import Footer from '../components/Footer'
import NewTest from '../components/Body/newTest'
import { experiments } from '../Datas/Experiments'
import { hicheel } from '../Datas/Hicheel'
import PhoneHeader from '../components/Header/phoneHeader'
function Home() {

  // Getting the last 3 objects from the experiments array
  const lastThreeExperiments = experiments.slice(-3);
  const lastThreehicheel = hicheel.slice(-3);
  return (
    <>
      <div className='w-full min-h-screen sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%'>
        <Header />
        <PhoneHeader />
        <TopTests/>
        <div className='w-full flex flex-col  justify-center items-center'>
          <div className='flex items-center gap-4 w-10/12'>
            <h1 className='text-white sm:text-4xl mb-10 text-xl font-bold'>Шинэ туршилтууд</h1>
          </div>
          <div className='w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {lastThreeExperiments.map(data => (
              <NewTest
                key={data.id}
                id={data.id}
                title={data.title}
                description={data.description}
                path={`/physic/experiment/${data.name}`}
              />
            ))}
          </div>
        </div>
        <div className='w-full flex flex-col pb-24 sm:mt-20 mt-6 justify-center items-center'>
          <div className='flex items-center gap-4 w-10/12'>
            <h1 className='text-white sm:text-4xl text-xl mb-10 font-bold'>Шинэ ЭЕШ-ийн хичээлүүд</h1>
          </div>
          <div className='w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {lastThreehicheel
          .map(data => <NewTest 
            key={data.id} 
            id={data.id} 
            title={data.title} 
            path={`/physic/EYSH_beltgel/${data.name}`} 
          />)
          }
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
