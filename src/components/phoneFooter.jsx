import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import fb from '../../public/fb.svg'
import insta from '../../public/insta.svg'
import YT from '../../public/YT.svg'
import copyright from '../../public/copyright.svg'

function PhoneFooter(){
    return (
        <div className='w-full flex sm:hidden flex-col mt-16 absolute bottom-32'>
            <div className='flex border-t-2 pt-4 border-white border-solid flex-row w-full justify-center gap-20'>
                <img src={fb} alt="fb" className='scale-125' />
                <img src={insta} alt="insta" className='scale-125' />
                <img src={YT} alt="YT" className='scale-110' />
            </div>
            <div className="flex flex-row justify-between z-10 items-center w-full pt-4">
                
                
                <div className="w-full px-10 flex flex-col flex-wrap justify-center text-[16px] text-white ">
                    <Link to="/aboutUs">
                    <div className="">Бидний тухай </div>
                    </Link>
                    <Link to="/Surtchilgaa">
                    <div className="">Сурталчилгаа байршуулах</div>
                    </Link>
                    <Link to="/holbooBarih">
                    <div className="">Холбоо барих</div>
                    </Link>
                </div>
            </div>

            <div className='flex mt-4 text-white text-[16px] flex-col px-10 gap-1'>
            <div className='flex flex-row items-center gap-1'>   
            <img src={copyright} alt="copyright" className='scale-50 ' />
            2025 Физикийн цагаан солиотнууд ХХК
            </div>
            <div className='flex flex-row items-center gap-3 pl-2'>
            <div className='rounded-full w-2 h-2 bg-white'></div>
            Бүх эрх хуулиар хамгаалагдсан
            </div>
            </div>
        </div>
    )
}

export default PhoneFooter