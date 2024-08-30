import React from 'react';

//Project 1
import ReConnect from '../images/ReConnect/ReConnect_home.png';

//Project 2
import Wavelength from '../images/Wavelength/wavelength_home_1.png';

//Project 3
import MinecraftAIAssistant from '../images/MinecraftAIAssistant/MinecraftAIAssistant_response.png';

//Project 4

//Project 5
import Portfolio from '../images/Portfolio/Portfolio_landing.png';

/**
 * Renders a project card component.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.image - The URL of the project image.
 * @param {string} props.description - The description of the project.
 * @returns {JSX.Element} The project card component.
 */
const ProjectCard = ({ title, image, description, skills, path }) => {
  return (
      <p>
        <span style={{ textAlign: 'center' }}>{title}</span>
        <img src={image} alt="Project" />
        <span>{description}</span>
        <span>Skills: {skills}</span>
        <a href={path}>Click to learn more!</a>
      </p>
  );
};

/**
 * Renders a collection of project cards.
 * @returns {JSX.Element} The project cards component.
 */
const ProjectCards = () => {
  return (
    <>
      <div id="projects" className="section-head">Projects</div>
      <div class="square"/>
        <div class="card">
          <ProjectCard title='ReConnect' image={ReConnect} description='ReConnect was a platform built to connect faculty members with college students to find the best candidates to fill research opportunities. This was a full stack website using Flask for the frontend and SQLite for the backend.' skills='Flask, Python, HTML/CSS, SQLite, Git' path='/ReConnect' />
          <ProjectCard title='Wavelength' image={Wavelength} description='Wavelength is a web application version of the popular TikTok card game "Wavelength". It allows users to draw cards from a deck, toggle the cover on the spinner circle, view the entire deck, and view the FAQ page. The project is built using React and Firebase for real-time database management.' skills='React, Firebase, HTML/CSS, JavaScript, Git' path='/Wavelength' />
          <ProjectCard title='Minecraft AI Assistant' image={MinecraftAIAssistant} description='I created a website that pairs with your local Ollama server to create a voice-activated Minecraft AI Assistant named Humphrey. Simply say "Humphrey" followed by the question you have, and it will answer it for you!' skills='Flask, Ollama, NLP Models, AJAX, HTML/CSS, Git' path='/MinecraftAIAssistant' />
          <ProjectCard title='This Website!' image={Portfolio} description='I built this portfolio website to show off my projects and skills as a coder! It displays a lot of information about me including my favorite projects, an about me, my coding journey, and a contact page.' skills='React, JavaScript, HTML/CSS, Git' path='/PortfolioWebsite' />
      </div>
    </>
  );
};

export default ProjectCards;