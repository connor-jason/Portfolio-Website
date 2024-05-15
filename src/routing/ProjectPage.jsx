import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a project page with the given project details.
 *
 * @param {Object} project - The project object containing name, description, and images.
 * @returns {JSX.Element} The rendered project page.
 */
const ProjectPage = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
    };

    return (
        <body>
            <div>
                <Link to="/#projects">← Back</Link>
                <h1 className="projectTitle">{project.name}</h1>
                <p className="projectBody">{project.description}</p>
                <div className="imageContainer">
                    <img className="projectImage" src={project.images[currentImageIndex]} alt="Project Image" />
                </div>
                <div className="buttonContainer">
                    <button className="imageButton" onClick={handlePrevImage}>Previous</button>
                    <label className="buttonLabel">Image {currentImageIndex + 1}</label>
                    <button className="imageButton" onClick={handleNextImage}>Next</button>
                </div>
            </div>
        </body>
    );
};

export default ProjectPage;
