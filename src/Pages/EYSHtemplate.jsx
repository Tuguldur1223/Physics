import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import PhoneHeader from '../components/Header/phoneHeader'
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
    <div className="w-full min-h-screen flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      <Header />  
      <PhoneHeader/>
      {/* Back button */} 
      <div className='w-10/12 h-10 mb-4 mt-10 flex flex-row justify-center items-center'> 
        <button onClick={() => navigate(-1)} className="flex w-2/12 items-center"> 
          <div className='w-10 h-10 rounded-full bg-[#08472B] flex items-center justify-center'>
            <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
          </div>
        </button>
        <h2 className="sm:text-3xl text-xl  w-10/12 text-center text-white font-bold mb-4">{bodlogo.title}</h2> 
        <img src="../../../public/bookmarkStroke.svg" alt="bookmark" />
      </div>
      {/* Title */}
      <div className="w-11/12 sm:10/12 mt-48 sm:mt-0 flex flex-col items-center mb-8">
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
