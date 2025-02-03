import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ExperimentList from './Pages/ExperimentList';
import ExperimentTemplate from './Pages/ExperimentTemplate';
import About from './Pages/AboutUs';
import EYSHlist from './Pages/EYSHlist';
import EYSHtemplate from './Pages/EYSHtemplate';
// Define pendulumExperiment object here as well
export const experiments = [
  {
    id: 1,
    name: 'pendulum',
    title: 'Яндан дуран',
    subject: 'Physics',
    grade: 6,
    description: 'Learn about pendulum motion and periodic motion.',
    videoSrc: 'https://www.youtube.com/embed/_8JMVl-_KKs',
    materials: [
      'String',
      'Weight (like a metal ball or a small object)',
      'Stopwatch',
      'Protractor'
    ],
    steps: [
      'Аль болох урт шулуун цаасан хайрцаган хоолой хийнэ.',
      'Secure the other end of the string so that the weight can swing freely.',
      'Pull the weight to one side and release it to let it swing like a pendulum.',
      'Use the stopwatch to measure the time it takes for the pendulum to complete one full swing.',
      'Repeat the experiment with different lengths of string and record the times.'
    ],
    result: 'You should observe that the time it takes for the pendulum to complete one swing, known as the period, depends on the length of the string. The longer the string, the longer the period.'
  },
  {
    id: 2,
    name: 'chemical_reaction',
    title: 'Chemical Reaction',
    subject: 'Chemistry',
    grade: 7,
    description: 'Explore how different chemicals react with each other.',
    videoSrc: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    materials: [],
    steps: [],
    result: ''
  }
];

const hicheel = [
  {
    id: 1,
    name: 'Togtmol_Guidel',
    title: 'Тогтмол гүйдэл (Цахилгаан хэлхээ)',
    videoSrc: 'https://www.youtube.com/embed/P5dw1abNQ5k?si=sE4p3sHgOQSkZTDx',
  },
  {
    id: 2,
    name: 'Biyiin_Naygt',
    title: 'Биеийн нягт',
    videoSrc: 'https://www.youtube.com/embed/hCJKwHLeGRQ?si=LC7yO4Z7kIrfmU2M',
  },
  {
    id: 3,
    name: 'Ternodinamic',
    title: 'Термодинамик Хийн хуулиуд',
    videoSrc: 'https://www.youtube.com/embed/YhkzEZm--zQ',
  },
];

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
        <Route 
          path="/physics/experiment/:name" 
          element={<ExperimentTemplate experiments={experiments} />} 
        />
        <Route path="/EYSH_beltgel" element={<EYSHlist hicheel={hicheel} />} />
        <Route path="/EYSH_beltgel/:name" element={<EYSHtemplate hicheel={hicheel} />} /> 
        <Route path='/AboutUs' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
