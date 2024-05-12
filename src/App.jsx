import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routing/HomePage';
import ProjectPage from './routing/ProjectPage';
import projects from './routing/router';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {projects.map((project) => (
          <Route key={project.path} path={project.path} element={<ProjectPage project={project} />} />
        ))}
      </Routes>
    </Router>
    </>
  );
};

export default App;
