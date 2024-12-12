import { useState } from 'react';
import { Link } from 'react-router-dom';

function EYSHinfo(props) {
  return (
    <div className="max-w-11/12 grid grid-cols-1 gap-6 mt-10">
            <div key={props.id} className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-2">{props.title}</h3>
                <iframe width="1080" height="608" src={props.Url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mt-8 '></iframe>
                <p className="text-lg mb-4">{props.description}</p>
            </div>
    </div>
  )
}

export default EYSHinfo;
