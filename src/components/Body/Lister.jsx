import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookmarkStroke from '../../../public/bookmarkStroke.svg'
import bookmark from '../../../public/bookmark.svg'


function Lister(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Check if the current experiment is already bookmarked
    const existingData = JSON.parse(localStorage.getItem(props.type)) || [];
    const isExisting = existingData.some(item => item.name === props.name);
    setIsBookmarked(isExisting);
  }, [props.name, props.type]);

  function save() {
    // Get existing data from localStorage for the specific type
    let existingData = JSON.parse(localStorage.getItem(props.type)) || [];
    
    // Check if the current item already exists in the array
    const isExisting = existingData.some(item => item.name === props.name);

    if (!isExisting) {
      // Add new item to the existing data array
      const newData = [...existingData, { name: props.name,title: props.title, description: props.description, path: props.path }];
      localStorage.setItem(props.type, JSON.stringify(newData));
      console.log(`Added to bookmarks in ${props.type}`);
      setIsBookmarked(true); // Update bookmark status
    } else {
      // Remove the item from bookmarks
      const newData = existingData.filter(item => item.name !== props.name);
      localStorage.setItem(props.type, JSON.stringify(newData));
      console.log(`Removed from bookmarks in ${props.type}`);
      setIsBookmarked(false); // Update bookmark status
    }
  }

  return (
    <div className="sm:w-[600px] relative text-white w-4/5 grid grid-cols-1 gap-6 mt-10">
      <div key={props.id} className="bg-gradient-to-br from-[#08472B] to-[#101214] p-6 rounded shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">{props.title}</h3>
        <p className="text-lg mb-4">{props.description}</p>
        <Link
          to={props.path}
          className=" hover:underline"
        >
          Цааш үзэх
        </Link>
      </div>
      <img 
        className='absolute top-4 right-4'
        src={isBookmarked ? bookmark : bookmarkStroke}
        alt="bookmark" 
        onClick={() => save()} 
      />
    </div>
  )
}

export default Lister;
