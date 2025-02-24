import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from '../Datas/Items'; // Importing items data
import { hicheel } from '../Datas/Hicheel'; // Importing hicheel data
import { chemistry } from '../Datas/Chemistry'; // Importing chemistry data
import { experiments } from '../Datas/Experiments'; // Importing experiments data
import Lister from '../components/Body/Lister'; // Importing Lister component
import Card from '../components/Body/Card';

function Favourite() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { name } = useParams();
  const experiment = experiments.find(exp => exp.name === name);
  console.log(experiment  ) // Initialize navigate

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);
  console.log(data)

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Filtered results based on the search query
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Update this section to properly handle saved experiments
  const filteredSavedExperiment = Object.keys(data).length > 0 
    ? Object.values(data).filter(item =>
        item.title?.toLowerCase().includes(query.toLowerCase()) ||
        item.name?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredHicheel = hicheel.filter(h => 
    h.name.toLowerCase().includes(query.toLowerCase()) ||
    h.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredChemistry = chemistry.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredExperiments = experiments.filter(e => 
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
   <div className="w-full min-h-screen pb-24 flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
    <div className='flex relative flex-row w-full items-center justify-center'>
     <button onClick={() => navigate(-1)} className="hidden sm:flex absolute top-10 left-56 w-2/12 items-center"> 
        <div className='w-10 h-10 rounded-full bg-[#08472B] flex items-center justify-center'>
          <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
        </div>
      </button>
     <input 
       type="text" 
       placeholder="Search..." 
       value={query} 
       onChange={handleSearchChange} 
       className="search-input w-64 h-10 mt-10 text-white p-2 rounded-lg bg-[#021a09] border-2 border-solid border-green-700"
       />
    </div>
     <div className='flex flex-col items-center'>
       {/* Display filtered results using Lister component */}
       {filteredHicheel.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='text-white sm:text-4xl mt-10 text-2xl font-bold'>ЭЕШ-ийн хичээлүүд</h1>
         </div>
       )}
       {filteredHicheel.map(h => (
         <Lister key={h.id} id={h.id} title={h.title}  path={`/physic/EYSH_beltgel/${h.name}`} />
       ))}
       {filteredChemistry.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='text-white sm:text-4xl mt-10 text-2xl font-bold'>Физикийн туршилтууд</h1>
         </div>
       )}
       {filteredExperiments.map(e => (
         <Lister key={e.id} id={e.id} title={e.title} description={e.description} path={`/physic/experiment/${e.name}`} />
       ))}
       {filteredExperiments.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='text-white sm:text-4xl mt-10 text-2xl font-bold'>Химийн туршилтууд</h1>
         </div>
       )}
       
       {filteredChemistry.map(c => (
         <Lister key={c.id} id={c.id} title={c.title} description={c.description} path={`/chemistry/${c.id}`} />
       ))}
       {filteredSavedExperiment.length > 0 && (
         <div className='flex items-center gap-4 w-10/12 sm:w-7/12'>
            <h1 className='text-white sm:text-4xl mt-10 text-2xl font-bold'>Saved Experiment</h1>
         </div>
       )}
       {filteredSavedExperiment.map(exp => (
         <Lister key={exp.id} id={exp.id} title={exp.title} description={exp.description} path={`/experiment/${exp.name}`} />
       ))}
     </div>
   </div>
  );
}

export default Favourite;