import React from 'react';

//Project 1
import ReConnect from '../images/ReConnect/ReConnect_home.png';

//Project 2

//Project 3

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
const ProjectCard = ({ title, image, description, path }) => {
  return (
      <p>
        <span>{title}</span>
        <img src={image} alt="Project Image" />
        <span>{description}</span>
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
    <div  id="projects">
    <div className="section-head">Projects</div>
    <div class="square"></div>
      <div class="card">
        <ProjectCard title='ReConnect' image={ReConnect} description="This could be a very cool project 1. So many cool things about project 1." path="/ReConnect" />
        <ProjectCard title='Project2' image={Portfolio} description="This could be a very cool project 2. So many cool things about project 2." path="Project2" />
        <ProjectCard title='Project3' image={Portfolio} description="This could be a very cool project 3. So many cool things about project 3." path="Project3" />
        <ProjectCard title='This Website!' image={Portfolio} description="This could be a very cool project 5. So many cool things about project 5." path="/PortfolioWebsite" />
      </div>
    </div>
  );
};

export default ProjectCards;