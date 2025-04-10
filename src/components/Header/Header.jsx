import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';
import { useContext } from 'react';
import sun from '/sun.svg'
import moon from '/moon.svg'
import logo from '/logo.png'
import logoDark from '/logoDark.svg'

function Header({ darkMode, toggleDarkMode }) {
    // Use the props passed from App.jsx instead of reading from localStorage
    
    return (
        <div className="w-full sticky text-white bg-black dark:bg-[#101214] rounded-b-xl h-16 hidden sm:flex z-50">
            <div className="flex flex-row justify-between items-center w-full h-full">
                <Link to="/" className="w-3/12 flex items-center justify-center z-10">
                    {/* <div className="w-full gap-2 flex relative flex-row justify-center items-center">
                        <img src={logo} alt="logo" className='w-12' />
                        <p className='font-bold text-lg'>Amjilt STEM</p>
                    </div> */}
                    <img src={logoDark} alt="logo" className='w-[45%] mt-1' />
                </Link>
                <div className="flex flex-row w-8/12 gap-12 relative z-10">
                    <Link to="/">
                        <button className="flex items-center px-4 py-2 font-bold text-xl rounded-full hover:text-[#5B93FF] transition-transform transform-gpu hover:scale-105">Нүүр</button>
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
                        <button className="flex items-center px-4 py-2 font-bold text-xl rounded-full hover:text-[#5B93FF] transition-transform transform-gpu hover:scale-105">Хими</button>
                    </Link>
                    <Link to="/market">
                        <button className="flex items-center px-4 py-2 font-bold text-xl rounded-full hover:text-[#5B93FF] transition-transform transform-gpu hover:scale-105">Маркет</button>
                    </Link>
                </div>
                <div className="w-3/12 gap-8 flex justify-center items-center relative z-10">
                    <Link to="/search">
                        <img src="/search.svg" alt="search" />
                    </Link>
                    <Link to="/favourite">
                        <img src="/save.svg" alt="bookmark" className='scale-[0.65]' />
                    </Link>
                    <button 
                        onClick={toggleDarkMode} 
                        className="w-16 h-8 flex items-center rounded-full p-1 bg-gray-200 dark:bg-gray-600 relative transition-colors duration-300"
                    >
                        <div 
                            className={`w-6 h-6 rounded-full absolute transform transition-transform duration-300 flex items-center justify-center ${
                                darkMode 
                                ? 'translate-x-8 bg-gray-800' 
                                : 'translate-x-0 bg-white'
                            }`}
                        >
                            <img 
                                src={darkMode ? moon : sun} 
                                alt={darkMode ? "moon" : "sun"}
                                className="w-4 h-4"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
