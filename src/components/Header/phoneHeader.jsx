import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/search">
                        <img src="../../../public/search.svg" alt="search"/>
                    </Link>
                    <Link to="/favourite">
                        <img src="../../../public/save.svg" alt="bookmark" className='scale-[0.65]'/>
                    </Link>
                    {/* <Link to="/login">
                    <img src="../../../public/profile.svg" alt="profile" className='scale-125' />
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default PhoneHeader;
