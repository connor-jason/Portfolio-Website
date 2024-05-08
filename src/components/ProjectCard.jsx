import React from 'react';

const ProjectCard = ({ image, description }) => {
  return (
      <p>
        <img src={image} alt="Project Image" />
        <span>{description}</span>
      </p>
  );
};

export default ProjectCard;
