import React from 'react';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';

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
import PhoneHeader from './components/Header/phoneHeader'

import {experiments} from './Datas/Experiments'
import {items} from './Datas/Items'
import {hicheel} from './Datas/Hicheel'
import {chemistry} from './Datas/Chemistry'

function App() {
  const isPhysicPage = location.pathname.includes('/physic/');

  return (
    <Router>
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


        <Route path='/AboutUs' element={<About />}/>
      </Routes>
      
      {!isPhysicPage && <PhoneNav />}
      
    </Router>
  );
}

export default App;
