import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import ExperimentList from './Pages/ExperimentList';
import ExperimentTemplate from './Pages/ExperimentTemplate';
import About from './Pages/AboutUs';
import EYSHlist from './Pages/EYSHlist';
import EYSHtemplate from './Pages/EYSHtemplate';
import PhoneNav from './components/Header/phoneNav';
import Physics from './Pages/Physics';
import Market from './Pages/Market'
import Chemistry from './Pages/Chemistry'
import ItemTemplate from './Pages/ItemTemplate';
import Search from './Pages/Search';
import Favourite from './Pages/Favourite';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Surtchilgaa from './Pages/Surtchilgaa';
import HolbooBarih from './Pages/HolbooBarih';
import Header from './components/Header/Header';
import PhoneHeader from './components/Header/phoneHeader';

import {experiments} from './Datas/Experiments'
import {items} from './Datas/Items'
import {hicheel} from './Datas/Hicheel'
import {chemistry} from './Datas/Chemistry'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });
  
  // Use window.location instead of location directly
  const isPhysicPage = window.location.pathname.includes('/physic/');

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Optional: Persist dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <Router>
      <div className={`${darkMode ? "dark" : ""} p-0 sm:p-[50px]`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <PhoneHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/physic" element={<Physics />}/>
          <Route 
            path="/physic/:grade"
            element={<ExperimentList Subject="Physics" />} 
          />
          <Route 
            path="/physic/experiment/:name" 
            element={<ExperimentTemplate experiments={experiments} />} 
          />
          
          <Route path="/physic/EYSH_beltgel" element={<EYSHlist hicheel={hicheel} />} />
          <Route path="/physic/EYSH_beltgel/:name" element={<EYSHtemplate hicheel={hicheel} />} /> 

          <Route path='/chemistry' element={<Chemistry />} />

          <Route path='/market' element={<Market />} />
          <Route path='/market/:name' element={<ItemTemplate items={items} />}/>

          <Route path='/aboutUs' element={<About />}/>
          <Route path='/surtchilgaa' element={<Surtchilgaa />}/>
          <Route path='/holboobarih' element={<HolbooBarih />}/>

          <Route path='/search' element={<Search />}/>
          <Route path='/favourite' element={<Favourite />}/>
          {/* <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/> */}
        </Routes>
        
        <RouterAwarePhoneNav />
      </div>
    </Router>
  );
}

// Create a separate component that can use React Router hooks
function RouterAwarePhoneNav() {
  const location = useLocation();
  const isPhysicPage = location.pathname.includes('/physic/');
  
  if (isPhysicPage) {
    return null;
  }
  
  return <PhoneNav />;
}

export default App;
