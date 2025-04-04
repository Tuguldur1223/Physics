import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import fb from '../../public/fb.svg'
import insta from '../../public/insta.svg'
import yt from '../../public/yt.svg'
import copyright from '../../public/copyright.svg'
import instaDark from '../../public/instaDark.svg'
import ytDark from '../../public/ytDark.svg'
import fbDark from '../../public/fbDark.svg'


function Footer(){
    return (
        <div className='w-full dark:text-white text-black hidden sm:flex flex-col mt-16 absolute bottom-0'>
            <div className="flex flex-row justify-between px-16 border-t-2 border-gray-300 border-solid z-10 items-center w-full pt-4">
                
                <div className="w-2/12 flex justify-center items-center relative z-10">
                    <Link to="/">
                        <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-3xl'>Amjilt</h1>
                        <p className='text-[10px]'>Physics & Chemistry tests</p>
                        </div>
                    </Link>
                </div>
                <div className="w-6/12 flex flex-row justify-between items-center  ">
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
            <div className='flex  flex-row items-center gap-2'>
            <img src={copyright} alt="copyright" className='scale-75 ' />
            2025 Физикийн цагаан солиотнууд ХХК
            <div className='rounded-full w-2 h-2 dark:bg-white bg-black'></div>
            Бүх эрх хуулиар хамгаалагдсан
            </div>
            <div className='flex flex-row justify-end gap-4'>
                <img src={fb} alt="fb" className="dark:hidden" />
                <img src={insta} alt="insta" className="dark:hidden" />
                <img src={yt} alt="yt" className="dark:hidden" />
                <img src={fbDark} alt="fb" className="hidden dark:block" />
                <img src={instaDark} alt="insta" className="hidden dark:block" />
                <img src={ytDark} alt="yt" className="hidden dark:block" />
            </div>
            </div>
        </div>
    )
}

export default Footer