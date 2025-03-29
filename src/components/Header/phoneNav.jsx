import { useState } from 'react';
import home from '../../../public/home.svg';
import physic from '../../../public/physic.svg';
import chemistry from '../../../public/chemistry.svg';
import market from '../../../public/market.svg';
import homeActive from '../../../public/homeActive.svg';
import physicActive from '../../../public/physicActive.svg';
import chemistryActive from '../../../public/chemistryActive.svg';
import marketActive from '../../../public/marketActive.svg';
import search from '../../../public/search.svg';
import searchActive from '../../../public/searchActive.svg'
import { Link, useLocation } from 'react-router-dom';
function NavBar() {
  const location = useLocation();
  const tabs = [
    { name: "Home", icon: home, activeIcon: homeActive },
    { name: "Search", icon: search, activeIcon: searchActive },
    { name: "Physic", icon: physic, activeIcon: physicActive },
    { name: "Chemistry", icon: chemistry, activeIcon: chemistryActive },
    { name: "Market", icon: market, activeIcon: marketActive },
  ];

  const activeIndex = tabs.findIndex(tab => {
    const currentPath = location.pathname.slice(1).split('/')[0] || 'home';
    return tab.name.toLowerCase() === currentPath;
  });

  const getTranslateValue = (index) => {
    return `translateX(${index * 80}px)`; // 96px = 6rem = w-24
  };

  return (
    <div className="bg-black sm:hidden h-20 w-full px-6 rounded-t-xl flex justify-center items-center fixed bottom-0 left-0 right-0 z-50 max-w-screen-xl mx-auto" style={{ marginBottom: 0 }}>
      <ul className="flex relative h-full">
        <span
          className="bg-[#F5F3F4] h-16 w-16 absolute -top-7 rounded-full ml-2 -z-10"
          style={{
            transform: getTranslateValue(activeIndex),
            transition: 'transform 0.3s ease-in-out',
            willChange: 'transform'
          }}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-7 -left-[14px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-7 -right-[14px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {tabs.map((tab, i) => (
          <li key={i} className="w-20 h-full flex justify-center items-center">
            <Link
              to={`/${tab.name.toLowerCase()}`}
              className="flex flex-col text-center w-full h-full"
            >
              <span
                className={`text-xl cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-center items-center h-full ${
                  i === activeIndex && "-mt- text-[#F5F3F4]"
                }`}
              >
                <img 
                  className={`scale-110 mt-2 transition-all duration-500 ease-in-out ${
                    i === activeIndex && "-translate-y-6"
                  }`}
                  src={i === activeIndex ? tab.activeIcon : tab.icon} 
                  alt={tab.name} 
                />
                <span
                  className={`transition-all text-black duration-500 ease-in-out ${
                    activeIndex === i
                      ? "translate-y-2 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {tab.name}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
