import React from 'react';

const AboutMeComponent = () => {
  return (
    <div id="about-me" style={{ marginTop: '10vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <header className="section-head">About Me</header>
        <p>Hi, I'm Connor (again)</p>
        <p>I go to WPI!!!</p>
        <p>I might switch to JS for this (I did!!)</p>
        <a href="https://github.com/connor-jason" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br />
        <a href="https://linkedin.com/in/connor-jason" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
      </div>
    </div>
  );
};

export default AboutMeComponent;
