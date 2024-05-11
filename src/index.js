import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import TitleComponent from './components/TitleComponent';
import ProjectCard from './components/ProjectCard';
import AboutMeComponent from './components/AboutMeComponent';
import CodingJourneyComponent from './components/CodingJourneyComponent';
import FooterComponent from './components/FooterComponent';
import './css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleComponent />
    <ProjectCard />
    <AboutMeComponent />
    <CodingJourneyComponent />
    <FooterComponent />
  </React.StrictMode>,
);

reportWebVitals();
