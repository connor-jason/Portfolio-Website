import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import TitleComponent from './components/TitleComponent';
import ProjectCard from './components/ProjectCard';
import AboutMeComponent from './components/AboutMeComponent';
import CodingJourneyComponent from './components/CodingJourneyComponent';
import './css/main.css';

// Import the image
import testImage from './images/test.png';

ReactDOM.render(
  <React.StrictMode>
    <TitleComponent />
    <div id="projects" className="section-head" style={{marginBottom: '5vh'}}>Projects</div>
    <div className="card">
      {/* Use the imported image */}
      <ProjectCard image={testImage} description="This could be a very cool project 1. So many cool things about project 1." />
      <ProjectCard image={testImage} description="This could be a very cool project 2. So many cool things about project 2." />
      <ProjectCard image={testImage} description="This could be a very cool project 3. So many cool things about project 3." />
      <ProjectCard image={testImage} description="This could be a very cool project 4. So many cool things about project 4." />
      <ProjectCard image={testImage} description="This could be a very cool project 5. So many cool things about project 5." />
    </div>
    <AboutMeComponent />
    <CodingJourneyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
