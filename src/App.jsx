import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {projects.map((project) => (
          <Route key={project.path} exact path={project.path}>
            <ProjectPage project={project} />
          </Route>
        ))}
      </Switch>
    </Router>
    </>
  );
};

export default App;
