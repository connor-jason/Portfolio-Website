import React from 'react';

//
import testImage from '../images/test.png';

const ProjectCard = ({ image, description }) => {
  return (
      <p>
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
      <ProjectCard image={testImage} description="This could be a very cool project 1. So many cool things about project 1." />
      <ProjectCard image={testImage} description="This could be a very cool project 2. So many cool things about project 2." />
      <ProjectCard image={testImage} description="This could be a very cool project 3. So many cool things about project 3." />
      <ProjectCard image={testImage} description="This could be a very cool project 4. So many cool things about project 4." />
      <ProjectCard image={testImage} description="This could be a very cool project 5. So many cool things about project 5." />
    </div>
    </div>
  );
};

export default ProjectCards;