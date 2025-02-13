import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';

function Header() {
    return (
        <div className='w-full h-16 hidden sm:flex top-0 left-0 z-50'>
            <div className="flex flex-row justify-between items-center w-full h-full ">
                <div className="w-2/12 flex justify-center items-center z-10">
                    <Link to="/">
                    <div className='text-white flex flex-col justify-center items-center'>
                        <h1 className='text-3xl'>Amjilt</h1>
                        <p className='text-[10px]'>Physics & Chemistry tests</p>
                    </div>
                    </Link>
                </div>
                <div className="flex flex-row w-8/12 gap-12 relative z-10">
                    <Link to="/">
                        <button className="flex items-center px-4 py-2 font-bold text-xl text-white rounded-full hover:text-green-700 transition-transform transform-gpu hover:scale-105">Нүүр</button>
                    </Link>
                    <DropdownBtn Btn="Физик " categories={[
                        { id: "1", category: "6-р анги", link: "/physic/6" },
                        { id: "2", category: "7-р анги", link: "/physic/7" },
                        { id: "3", category: "8-р анги", link: "/physic/8" },
                        { id: "4", category: "9-р анги", link: "/physic/9" },
                        { id: "5", category: "10-р анги", link: "/physic/10" },
                        { id: "6", category: "11-р анги", link: "/physic/11" },
                        { id: "7", category: "ЭЕШ бэлтгэл", link: "/physic/EYSH_beltgel" }
                    ]} />
                    <Link to="/chemistry">
                        <button className="flex items-center px-4 py-2 font-bold text-xl text-white rounded-full hover:text-green-700 transition-transform transform-gpu hover:scale-105">Хими</button>
                    </Link>
                    <Link to="/market">
                        <button className="flex items-center px-4 py-2 font-bold text-xl text-white rounded-full hover:text-green-700 transition-transform transform-gpu hover:scale-105">Маркет</button>
                    </Link>
                </div>
                <div className="w-2/12 gap-8 flex justify-center items-center relative z-10">
                    <Link to="/search">
                        <img src="../../../public/search.svg" alt="search" />
                    </Link>
                    <Link to="/home/favourite">
                        <img src="../../../public/bookmark.svg" alt="bookmark" />
                    </Link>
                    <Link to="/login">
                    <img src="../../../public/profile.svg" alt="profile" className='scale-125' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
