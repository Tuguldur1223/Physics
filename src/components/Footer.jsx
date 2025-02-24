import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import fb from '../../public/fb.svg'
import insta from '../../public/insta.svg'
import YT from '../../public/YT.svg'
import copyright from '../../public/copyright.svg'

function Footer(){
    return (
        <div className='w-full hidden sm:flex flex-col mt-16 absolute bottom-0'>
            <div className="flex flex-row justify-between px-16 border-t-2 border-white border-solid z-10 items-center w-full pt-4">
                
                <div className="w-2/12 flex justify-center items-center relative z-10">
                    <Link to="/">
                        <div className='text-white flex flex-col justify-center items-center'>
                        <h1 className='text-3xl'>Amjilt</h1>
                        <p className='text-[10px]'>Physics & Chemistry tests</p>
                        </div>
                    </Link>
                </div>
                <div className="w-6/12 flex flex-row justify-between items-center text-white ">
                    <Link to="/aboutUs">
                    <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Бидний тухай</button>
                    </Link>
                    <Link to="/Surtchilgaa">
                    <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Сурталчилгаа байршуулах</button>
                    </Link>
                    <Link to="/holbooBarih">
                    <button className="h-8 min-w-20 border-none rounded-3xl  font-medium flex justify-center items-center gap-1 p-2">Холбоо барих</button>
                    </Link>
                </div>
            </div>
            <div className='w-full px-16 py-6 flex flex-row justify-between items-center'>
            <div className='flex text-white flex-row items-center gap-2'>
            <img src={copyright} alt="copyright" className='scale-75 ' />
            2025 Физикийн цагаан солиотнууд ХХК
            <div className='rounded-full w-2 h-2 bg-white'></div>
            Бүх эрх хуулиар хамгаалагдсан
            </div>
            <div className='flex flex-row justify-end gap-4'>
                <img src={fb} alt="fb" />
                <img src={insta} alt="insta" />
                <img src={YT} alt="YT" />
            </div>
            </div>
        </div>
    )
}

export default Footer