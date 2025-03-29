import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sun from '../../../public/sun.svg'
import moon from '../../../public/moon.svg'

function PhoneHeader({ darkMode, toggleDarkMode }) {
    return (
        <div className='w-full sticky h-16 flex sm:hidden bg-black dark:bg-[#101214] text-white top-0 left-0 z-50'>
            <div className="flex flex-row justify-between items-center w-full h-full ">
                <div className="w-5/12 flex justify-center items-center z-10">
                    <Link to="/">
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-3xl'>Amjilt</h1>
                        <p className='text-[10px]'>Physics & Chemistry tests</p>
                    </div>
                    </Link>
                </div>

                <div className="w-5/12 sm:gap-4 flex justify-center items-center relative z-10">
                    <Link to="/search">
                        <img src="../../../public/search.svg" alt="search" className='scale-[0.8]'/>
                    </Link>
                    <Link to="/favourite">
                        <img src="../../../public/save.svg" alt="bookmark" className='scale-[0.5]'/>
                    </Link>
                    {/* <Link to="/login">
                    <img src="../../../public/profile.svg" alt="profile" className='scale-125' />
                    </Link> */}
                    <button 
                        onClick={toggleDarkMode} 
                        className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-200 dark:bg-gray-600 relative transition-colors duration-300"
                    >
                        <div 
                            className={`w-4 h-4 rounded-full absolute transform transition-transform duration-300 flex items-center justify-center ${
                                darkMode 
                                ? 'translate-x-5 bg-gray-800' 
                                : 'translate-x-0 bg-white'
                            }`}
                        >
                            <img 
                                src={darkMode ? moon : sun} 
                                alt={darkMode ? "moon" : "sun"}
                                className="w-3 h-3"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PhoneHeader;
