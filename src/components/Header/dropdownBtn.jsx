import { useState, useEffect, useRef } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';

function DropdownBtn(props) {
    const [display, setDisplay] = useState('none');
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDisplay('none');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none');
    }

    return (
        <div className="relative z-10" ref={dropdownRef}>
            <button onClick={handleClick} className="flex items-center px-4 py-2 font-bold text-xl rounded-full text-[#fdfdfd] hover:text-[#5B93FF] transition-transform transform-gpu hover:scale-105">
                {props.Btn} <SlArrowDown size="12px" className="ml-2 mt-1" />
            </button>
            <div id="myDropdown" style={{ display }} className="absolute left-0 flex flex-col w-32 mt-2 bg-[#fdfdfd] border border-gray-300 rounded-md shadow-lg z-20">
                {props.categories.map((e) => (
                    <Link to={e.link} key={e.id} onClick={() => setDisplay('none')}>
                        <button className="text-left px-4 py-2 font-semibold text-black hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition-colors duration-200">
                            {e.category}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DropdownBtn;
