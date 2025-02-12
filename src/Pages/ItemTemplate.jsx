import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import PhoneHeader from '../components/Header/phoneHeader'
function itemTemplate({ items }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const item = items.find(exp => exp.name === name);

  if (!item) {
    return <div>item not found</div>;
  }

  const title = item.subject === 'chemistry' ? 'Орц' : item.subject === 'physics' ? 'Материал' : 'Материал';

  return (
    <div className="w-full min-h-screen pb-24 flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />
      <PhoneHeader/>
      {/* Back button */}
      <div className='w-10/12 mb-4 mt-10 flex flex-row justify-center items-center'>
        <button onClick={() => navigate(-1)} className="w-2/12 flex items-center">
          <div className='w-10 h-10 rounded-full bg-green-700 flex items-center justify-center'>
            <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
          </div>
        </button>
        <h2 className="text-3xl w-10/12 text-white font-bold">{item.title}</h2>
      </div>
      {/* Title */}
      <div className="max-w-2xl sm:w-full w-5/6 mb-8">
        <img src={item.img} alt={item.title} />
      </div>
      <div className='max-w-2xl sm:w-full w-5/6 mb-8 bg-white p-6 rounded shadow-lg flex flex-row'>
        <h1 className='text-2xl font-bold'>Үнэ:</h1>
        <p className='text-2xl font-semibold '>{item.price}</p>
      </div>
      {/* What you need */}
      <div className="w-5/6 sm:w-full max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <ul className="list-disc list-inside">
          {item.materials.map((mat, index) => (
            <li key={index}>{mat}</li>
          ))}
        </ul>
      </div>
      {/* How to do it */}
      <div className="sm:w-full w-5/6 max-w-2xl mb-8 bg-white p-6 rounded shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Мэдээлэл</h3>
        <p>{item.description}</p>
      </div>

      <Footer />
    </div>
  );
}

export default itemTemplate;
