import { useState } from 'react';
import { Link } from 'react-router-dom';

function Lister(props) {
  return (
    <div className="sm:w-[600px] text-white w-4/5 grid grid-cols-1 gap-6 mt-10">
            <div key={props.id} className="bg-gradient-to-br from-[#08472B]  to-[#101214] p-6 rounded shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{props.title}</h3>
                <p className="text-lg mb-4">{props.description}</p>
                <Link
                    to={props.path}
                    className=" hover:underline"
                >
                    Цааш үзэх
                </Link>
            </div>
    </div>
  )
}

export default Lister;
