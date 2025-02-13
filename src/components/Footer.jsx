import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div className="sm:flex hidden flex-row z-10 items-center w-full h-32">
            <div className="w-2/12 flex justify-center items-center relative z-10">
                <Link to="/">
                    <div className='text-white flex flex-col justify-center items-center'>
                    <h1 className='text-3xl'>Amjilt</h1>
                    <p className='text-[10px]'>Physics & Chemistry tests</p>
                    </div>
                </Link>
            </div>
            <div className="w-9/12 flex flex-row justify-between items-center text-white ">
                <Link to="/aboutUs">
                <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Бидний тухай</button>
                </Link>
                <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Сурталчилгаа байршуулах</button>
                <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Редакцийн ёс зүй</button>
                <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Нууцлалын бодлого</button>
                <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Холбоо барих</button>
            </div>
        </div>
    )
}

export default Footer