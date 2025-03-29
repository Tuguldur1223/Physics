import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Lister from '../components/Body/Lister'; // Importing Lister component
import Card from '../components/Body/Card';

function Favourite() {
  const [experiments, setExperiments] = useState([]); // Added state for experiments
  const [chemistry, setChemistry] = useState([]); // Added state for chemistry
  const [eyesh, setEyesh] = useState([]); // Added state for experiments
  const [items, setItems] = useState([]); // Added state for experiments
  const navigate = useNavigate();
  const { name } = useParams();
  const experiment = experiments.find(exp => exp.name === name);
  console.log(experiment  ) // Initialize navigate

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedExperiments = localStorage.getItem("experiments");
    const savedChemistry = localStorage.getItem("chemistry");
    const savedItems = localStorage.getItem("items");
    const savedEyesh = localStorage.getItem("Eyesh");
    if (savedExperiments) {
      setExperiments(JSON.parse(savedExperiments)); // Set experiments from local storage
      setChemistry(JSON.parse(savedChemistry));
      setEyesh(JSON.parse(savedEyesh));
      setItems(JSON.parse(savedItems));
    }
  }, []);
  console.log(experiments)

  // Load saved experiments from localStorage
  const savedExperiments = JSON.parse(localStorage.getItem("experiments")) || [];
  const savedChemistry = JSON.parse(localStorage.getItem("chemistry")) || [];
  const savedItems = JSON.parse(localStorage.getItem("items")) || [];
  const savedEyesh = JSON.parse(localStorage.getItem("eyesh")) || [];


  return (
   <div className="w-full  min-h-screen relative text-black dark:text-white sm:pb-48 pb-[340px] flex flex-col items-center pt-12 -mt-[50px]  transition-colors duration-500 bg-[#FDFDFD] dark:bg-gradient-to-b dark:from-[#101214] dark:from-20% dark:to-[#1B1D20] dark:to-80%">
    <div className='flex relative flex-row w-full items-center justify-center'>
     <button onClick={() => navigate(-1)} className="flex absolute top-10 left-4 w-2/12 items-center"> 
        <div className='w-10 h-10 rounded-full bg-[#5B93FF] flex items-center justify-center'>
          <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
        </div>
      </button>
      <h1 className='sm:text-4xl mt-10 text-4xl font-bold'>Хадгалсан зүйлс</h1>
    </div>
     <div className='flex flex-col items-center'>
      
       {/* New section to display saved experiments */}
       {savedExperiments.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='sm:text-3xl mt-10 text-2xl font-bold'>Физикийн туршилтууд</h1>
         </div>
       )}
       {savedExperiments.map(exp => (
         <Lister key={exp.id} name={exp.name} id={exp.id} title={exp.title} description={exp.description} path={`/physic/experiment/${exp.name} `} type='experiments' />
       ))}


       {savedEyesh.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='sm:text-3xl mt-10 text-2xl font-bold'>ЭЕШ-ийн хичээлүүд</h1>
         </div>
       )}
       {savedEyesh.map(exp => (
         <Lister key={exp.id} name={exp.name} id={exp.id} title={exp.title} description={exp.description} path={`/physic/EYSH_beltgel/${exp.name} `} type='eyesh' />
       ))}


       {savedChemistry.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='sm:text-3xl mt-10 text-2xl font-bold'>Химийн туршилтууд</h1>
         </div>
       )}
       {savedChemistry.map(exp => (
         <Lister key={exp.id} name={exp.name} id={exp.id} title={exp.title} description={exp.description} path={`/chemistry//${exp.name} `} type='chemistry' />
       ))}


       {savedItems.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='sm:text-3xl mt-10 text-2xl font-bold'>Бараа бүтээгдэхүүн</h1>
         </div>
       )}
       <div className='sm:w-7/12 grid grid-cols-2 sm:grid-cols-3 items-center p-4 gap-4'>
        {savedItems.map(exp => (
          <Card key={exp.id} price={exp.price} id={exp.id} name={exp.name} title={exp.title} img={exp.img}  path={`/market/${exp.name}`} type="items" />
        ))}
       </div>
     </div>
   </div>
  );
}

export default Favourite;