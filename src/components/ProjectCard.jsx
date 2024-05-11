import React from 'react';

//Project 1
import ReConnect from '../images/ReConnect/ReConnect_home.png';

//Project 2

//Project 3

//Project 4

//Project 5
import Portfolio from '../images/Portfolio/Portfolio_landing.png';

const ProjectCard = ({ title, image, description }) => {
  return (
      <p>
        <span>{title}</span>
        <img src={image} alt="Project Image" />
        <span>{description}</span>
      </p>
  );
};

const ProjectCards = () => {
  return (
    <div  id="projects">
    <div className="section-head">Projects</div>
    <div class="square"></div>
    <div class="card">
      <ProjectCard title='ReConnect' image={ReConnect} description="This could be a very cool project 1. So many cool things about project 1." />
      <ProjectCard title='Project2' image={Portfolio} description="This could be a very cool project 2. So many cool things about project 2." />
      <ProjectCard title='Project3' image={Portfolio} description="This could be a very cool project 3. So many cool things about project 3." />
      <ProjectCard title='Project4' image={Portfolio} description="This could be a very cool project 4. So many cool things about project 4." />
      <ProjectCard title='This Website!' image={Portfolio} description="This could be a very cool project 5. So many cool things about project 5." />
    </div>
    </div>
  );
};

export default ProjectCards;