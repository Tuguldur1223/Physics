import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Body/Card';
import {items} from '../Datas/Items'
import Header from '../components/Header/Header';
import PhoneFooter from '../components/phoneFooter'
import Footer from '../components/Footer';
import PhoneHeader from '../components/Header/phoneHeader'
function Market() {
  return (
    <div className='w-full pt-20  pb-96 relative sm:pb-56 flex items-center flex-col min-h-screen t-12 -mt-[50px]  transition-colors duration-500 bg-[#FDFDFD] dark:bg-gradient-to-b dark:from-[#101214] dark:from-20% dark:to-[#1B1D20] dark:to-80%'>
      
      <div className='sm:w-full p-4 sm:px-16 grid grid-cols-2 sm:grid-cols-5 gap-4'>

          {items.map(data =>(
            <Card
            key={data.id} 
            id={data.id} 
              title={data.title} 
              description={data.description}
              name={data.name}
              type="items"
              img={data.img}
              price={data.price} 
              path={`/market/${data.name}`} 
              />
            ))
            
          }
      </div>
      <Footer/><PhoneFooter/>
    </div>
  )
}

export default Market;
