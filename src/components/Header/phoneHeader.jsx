import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';
import Search from '../../../public/search';
function PhoneHeader() {
    return (
        <div className='w-full h-16 flex sm:hidden top-0 left-0 z-50'>
            <div className="flex flex-row justify-between items-center w-full h-full ">
                <div className="w-5/12 flex justify-center items-center z-10">
                    <Link to="/">
                    <div className='text-white flex flex-col justify-center items-center'>
                        <h1 className='text-3xl'>Amjilt</h1>
                        <p className='text-[10px]'>Physics & Chemistry tests</p>
                    </div>
                    </Link>
                </div>

                <div className="w-5/12 gap-8 flex justify-center items-center relative z-10">
                    <Search />
                    <img src="../../../public/bookmark.svg" alt="bookmark"/>
                    <div className='w-7 h-7 rounded-full bg-violet-800 flex justify-center items-center'>
                        <h1 className='text-2xl'>B</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneHeader;
