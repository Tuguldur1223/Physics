import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { chemistry } from '../Datas/Chemistry';
import PhoneHeader from '../components/Header/phoneHeader'
function Chemistry() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />
      <PhoneHeader/>
    </div>
  )
}

export default Chemistry;
