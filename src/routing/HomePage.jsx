import React from 'react';
import TitleComponent from '../components/TitleComponent';
import ProjectCard from '../components/ProjectCard';
import AboutMeComponent from '../components/AboutMeComponent';
import CodingJourneyComponent from '../components/CodingJourneyComponent';
import FooterComponent from '../components/FooterComponent';
import ContactMeComponent from '../components/ContactMeComponent';

/**
 * Renders the Home page.
 * @returns {JSX.Element} The rendered Home page.
 */
const Home = () => {
    return (
        <>
            <TitleComponent />
            <ProjectCard />
            <AboutMeComponent />
            <CodingJourneyComponent />
            <ContactMeComponent />
            <FooterComponent />
        </>
    );
};

export default Home;
