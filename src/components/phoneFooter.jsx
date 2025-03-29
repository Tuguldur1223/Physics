import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import fb from '../../public/fb.svg'
import insta from '../../public/insta.svg'
import yt from '../../public/yt.svg'
import copyright from '../../public/copyright.svg'
import instaDark from '../../public/instaDark.svg'
import ytDark from '../../public/ytDark.svg'
import fbDark from '../../public/fbDark.svg'
function PhoneFooter(){
    return (
        <div className='w-full flex dark:text-white text-black sm:hidden flex-col mt-16 absolute bottom-32'>
            <div className='flex border-t-2 pt-4 dark:border-white border-black border-solid flex-row w-full justify-center gap-20'>
                <img src={fb} alt="fb" className="dark:hidden scale-125" />
                <img src={insta} alt="insta" className="dark:hidden scale-125" />
                <img src={yt} alt="yt" className="dark:hidden scale-110" />
                <img src={fbDark} alt="fb" className="hidden dark:block scale-125" />
                <img src={instaDark} alt="insta" className="hidden dark:block scale-125" />
                <img src={ytDark} alt="yt" className="hidden dark:block scale-110" />
            </div>
            <div className="flex flex-row justify-between z-10 items-center w-full pt-4">
                
                
                <div className="w-full px-10 flex flex-col flex-wrap justify-center text-[16px] ">
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

            <div className='flex mt-4 text-[16px] flex-col px-10 gap-1'>
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