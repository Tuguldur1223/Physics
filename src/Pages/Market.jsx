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
    <div className='w-full pb-96 relative sm:pb-48 flex items-center flex-col min-h-screen sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%'>
      <Header />
      <PhoneHeader/>
      <div className='sm:w-8/12 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4'>

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
