import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';
import Search from '../../../public/search';
import Bookmark from '../../../public/bookmark';
function Header() {
    return (
        <div className="flex flex-row justify-between items-center w-full h-16">
            <div className="w-2/12 flex justify-center items-center relative z-10">
                <Link to="/">
                    <div className='text-white flex flex-col justify-center items-center'>
                    <h1 className='text-3xl'>Amjilt</h1>
                    <p className='text-[10px]'>Physics and Chemistry tests</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-row w-8/12 gap-12 relative z-10">
                <Link to="/">
                    <button className="flex items-center px-4 py-2 font-bold text-xl text-white rounded-full hover:text-green-700 transition-transform transform-gpu hover:scale-105">Home</button>
                </Link>
                <DropdownBtn Btn="Physic " categories={[
                    { id: "1", category: "6th Grade", link: "/Physic6" },
                    { id: "2", category: "7th Grade", link: "/Physic7" },
                    { id: "3", category: "8th Grade", link: "/Physic8" },
                    { id: "4", category: "9th Grade", link: "/Physic9" },
                    { id: "5", category: "10th Grade", link: "/Physic10" },
                    { id: "6", category: "11th Grade", link: "/Physic11" },
                    { id: "7", category: "12th Grade", link: "/Physic12" }
                ]} />
                <DropdownBtn Btn="Chemistry " categories={[
                    { id: "1", category: "6th Grade", link: "/Chemistry6" },
                    { id: "2", category: "7th Grade", link: "/Chemistry7" },
                    { id: "3", category: "8th Grade", link: "/Chemistry8" },
                    { id: "4", category: "9th Grade", link: "/Chemistry9" },
                    { id: "5", category: "10th Grade", link: "/Chemistry10" },
                    { id: "6", category: "11th Grade", link: "/Chemistry11" },
                    { id: "7", category: "12th Grade", link: "/Chemistry12" }
                ]} />
                <Link to="/AboutUs">
                    <button className="flex items-center px-4 py-2 font-bold text-xl text-white rounded-full hover:text-green-700 transition-transform transform-gpu hover:scale-105">About us</button>
                </Link>
            </div>
            <div className="w-2/12 gap-8 flex content-center items-center relative z-10">
                <Search/>
                <Bookmark/> 
                <div className='w-7 H-7 rounded-full bg-violet-800 flex justify-center items-center'>
                    <h1 className='text-2xl'>B</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;
