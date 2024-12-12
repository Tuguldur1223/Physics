import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ExperimentList from './Pages/ExperimentList';
import ExperimentTemplate from './Pages/ExperimentTemplate';
import About from './Pages/AboutUs';
import EYSHlist from './Pages/EYSHlist';
import EYSHtemplate from './Pages/EYSHtemplate';
// Define pendulumExperiment object here as well
const pendulumExperiment = {
  title: 'Physics Experiment: The Pendulum',
  videoSrc: 'https://youtu.be/_8JMVl-_KKs?si=SO0oY0e7sGETuKY0',
  materials: [
    'String',
    'Weight (like a metal ball or a small object)',
    'Stopwatch',
    'Protractor'
  ],
  steps: [
    'Attach the weight to one end of the string.',
    'Secure the other end of the string so that the weight can swing freely.',
    'Pull the weight to one side and release it to let it swing like a pendulum.',
    'Use the stopwatch to measure the time it takes for the pendulum to complete one full swing.',
    'Repeat the experiment with different lengths of string and record the times.'
  ],
  result: 'You should observe that the time it takes for the pendulum to complete one swing, known as the period, depends on the length of the string. The longer the string, the longer the period.'
};
const TogtmolGuidel = {
  title: 'Тогтмол гүйдэл (Цахилгаан хэлхээ)',
  videoSrc: 'https://www.youtube.com/embed/P5dw1abNQ5k?si=glvZWPDd_TcBz7vX',
  description: 'Learn about pendulum and periodic motion.'
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Physic6" element={<ExperimentList Grade={6} Subject={"Physics"} />} />
        <Route path="/Physic7" element={<ExperimentList Grade={7} Subject={"Physics"} />} />
        <Route path="/Physic8" element={<ExperimentList Grade={8} Subject={"Physics"} />} />
        <Route path="/Physic9" element={<ExperimentList Grade={9} Subject={"Physics"} />} />
        <Route path="/Physic10" element={<ExperimentList Grade={10} Subject={"Physics"} />} />
        <Route path="/Physic11" element={<ExperimentList Grade={11} Subject={"Physics"} />} />
        <Route path="/physics/experiment/pendulum" element={<ExperimentTemplate experiment={pendulumExperiment} />} />
        <Route path="/EYSH_beltgel" element={<EYSHlist />} />
        <Route path="/EYSH_beltgel/Togtmol_Guidel" element={<EYSHtemplate experiment={TogtmolGuidel} />} />
        <Route path="/Chemistry6" element={<ExperimentList Grade={6} Subject={"Chemistry"} />} />
        <Route path="/Chemistry7" element={<ExperimentList Grade={7} Subject={"Chemistry"} />} />
        <Route path="/Chemistry8" element={<ExperimentList Grade={8} Subject={"Chemistry"} />} />
        <Route path="/Chemistry9" element={<ExperimentList Grade={9} Subject={"Chemistry"} />} />
        <Route path="/Chemistry10" element={<ExperimentList Grade={10} Subject={"Chemistry"} />} />
        <Route path="/Chemistry11" element={<ExperimentList Grade={11} Subject={"Chemistry"} />} />
        <Route path="/Chemistry12" element={<ExperimentList Grade={12} Subject={"Chemistry"} />} />
        <Route path="/chemistry/experiment/pendulum" element={<ExperimentTemplate experiment={pendulumExperiment} />} />
        <Route path='/AboutUs' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
