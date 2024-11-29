import { useState } from 'react';
import { Link } from 'react-router-dom';

function ExperimentInfo(props) {
  return (
    <div className="w-full max-w-3xl grid grid-cols-1 gap-6 mt-10">
            <div key={props.id} className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{props.title}</h3>
                <p className="text-lg mb-4">{props.description}</p>
                <Link
                    to={props.path}
                    className="text-blue-500 hover:underline"
                >
                    Цааш үзэх
                </Link>
            </div>
    </div>
  )
}

export default ExperimentInfo;
