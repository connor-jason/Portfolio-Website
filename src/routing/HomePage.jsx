import React from 'react';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import AboutMe from '../components/AboutMe';
import CodingJourney from '../components/CodingJourney';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

/**
 * Renders the Home page.
 * @returns {JSX.Element} The rendered Home page.
 */
const Home = () => {
    return (
        <>
            <Title />
            <ProjectCard />
            <AboutMe />
            <CodingJourney />
            <ContactMe />
            <Footer />
        </>
    );
};

export default Home;
