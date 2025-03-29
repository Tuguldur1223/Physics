import { useState } from 'react'
import { Link } from 'react-router-dom';
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer'
import Lister from '../components/Body/Lister';
import PhoneHeader from '../components/Header/phoneHeader'
function EYSHlist({hicheel}) {
  return (
    <div className="w-full pb-[400px] relative sm:pb-48 h-full flex flex-col items-center pt-12 -mt-[50px]  transition-colors duration-500 bg-[#FDFDFD] dark:bg-gradient-to-b dark:from-[#101214] dark:from-20% dark:to-[#1B1D20] dark:to-80%">
      
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white mt-10">ЭЕШ-ийн бодолтууд</h2>
      {
        hicheel
          .map(data => <Lister 
            key={data.id} 
            id={data.id} 
            title={data.title} 
            name={data.name}
            path={`/physic/EYSH_beltgel/${data.name}`} 
            type="eyesh"
          />)
      }
      <Footer/><PhoneFooter/>
    </div>
  );
}

export default EYSHlist
