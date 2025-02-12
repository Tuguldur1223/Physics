import { useState } from 'react';
import { Link } from 'react-router-dom';

function newTest(props) {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
            <div key={props.id} className="p-6 rounded text-white shadow-lg bg-gradient-to-br from-[#08472B]  to-[#101214] ">
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

export default newTest;
