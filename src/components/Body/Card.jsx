import { useState } from 'react';
import { Link } from 'react-router-dom';
  
function Card(props) {
  return (
    <div className="w-full text-white h-[290px] bg-[#08472B] rounded-xl">
        <Link
            to={props.path}
        >
            <div key={props.id} className="w-full h-full p-4 relative">
                <img src={props.img} alt={props.title} className='rounded-lg' />
                <h3 className="text-2xl font-bold mt-2">{props.title}</h3>
                <p className='text-2xl font-semibold bottom-2 absolute'>Үнэ:{props.price}₮</p>
            </div>
        </Link>
    </div>
  )
}

export default Card;
