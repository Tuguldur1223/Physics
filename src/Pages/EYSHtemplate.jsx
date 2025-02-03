import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LeftArrow from '../../public/leftArrow';

function EYSHtemplate({ hicheel }) {  // Change to receive hicheel array instead of bodlogo
  const navigate = useNavigate();
  const { name } = useParams();  // Get the name parameter from URL
  
  const bodlogo = hicheel.find(item => item.name === name);
  console.log('URL name:', name);  // Debug log
  console.log('Found bodlogo:', bodlogo);  // Debug log

  if (!bodlogo) {
    navigate('/EYSH_beltgel');
    return null;
  }

  return ( 
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />  
      {/* Back button */} 
      <div className='w-10/12 mb-4 mt-10'> 
        <button onClick={() => navigate(-1)} className="flex items-center"> 
          <div className='w-10 h-10 rounded-full bg-green-700 flex items-center justify-center'>
            <LeftArrow  />
          </div>
        </button> 
      </div>
      {/* Title */}
      <div className="w-10/12 flex flex-col items-center mb-8">
        <h2 className="text-3xl text-white font-bold mb-4">{bodlogo.title}</h2>
        <iframe className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]' 
        src={bodlogo.videoSrc} title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default EYSHtemplate
