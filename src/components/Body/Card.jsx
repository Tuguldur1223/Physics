import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bookmarkStroke from '../../../public/bookmarkStroke.svg'
import bookmark from '../../../public/bookmark.svg'
  
function Card(props) {
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
      const newData = [...existingData, { name: props.name ,title: props.title, img: props.img, price: props.price, description: props.description, path: props.path }];
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
    <div className="w-full relative text-white h-[290px] bg-[#08472B] rounded-xl">
        <div key={props.id} className="w-full h-full p-4 relative">
        <Link
            to={props.path}
        >
          <img src={props.img} alt={props.title} className='rounded-lg' />
          <h3 className="text-2xl font-bold mt-2">{props.title}</h3>
          <p className='text-2xl font-semibold bottom-2 absolute'>Үнэ:{props.price}₮</p>
        </Link>
        </div>
        <img 
        className='absolute bottom-3 right-4'
        src={isBookmarked ? bookmark : bookmarkStroke}
        alt="bookmark" 
        onClick={() => save()} 
        />
    </div>
  )
}

export default Card;
