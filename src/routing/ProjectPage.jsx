import React from 'react';

/**
 * Renders a project page with the given project details.
 *
 * @param {Object} project - The project object containing name, description, and images.
 * @returns {JSX.Element} The rendered project page.
 */
const ProjectPage = ({ project }) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            {project.images.map((image, index) => (
                <img key={index} src={image} alt="Project Image" />
            ))}
        </div>
    );
};

export default ProjectPage;
