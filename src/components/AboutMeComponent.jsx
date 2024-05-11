import React from 'react';
import '../css/about-me.css';

import javaLogo from '../images/CSLogos/java.png';
import pythonLogo from '../images/CSLogos/python.png';
import cssLogo from '../images/CSLogos/css.png';
import htmlLogo from '../images/CSLogos/html.png';
import reactLogo from '../images/CSLogos/react.png';
import jsLogo from '../images/CSLogos/javascript.png';

/**
 * Represents the About Me component.
 * @returns {JSX.Element} The rendered about me element.
 */
const AboutMeComponent = () => {
  return (
    <div id="about-me" style={{ marginTop: '10vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <header className="section-head">About Me</header>
        <div class="square"></div>
        <p className="aboutMeBody">
        Hi, I'm Connor (again). I am a second-year student at Worcester Polytechnic Institute studying Computer Science. 
        I am very interesting in emerging technologies, especially involving Artificial Intelligence. So far, I have 
        experience with Java, Python, JavaScript, React, HTML, and CSS. My favorite language to work with is currently Python,
        even though I used to be very anti-Python. I love how powerful and diverse it can be. This website was my first project
        built using React, which I have really enjoyed. I have used Flask with Python in the past, and this is signifiantly better
        in comparison. I am always looking to learn more and expand my knowledge.
        </p>
        <div className="socialLinks">
          <a href="https://github.com/connor-jason" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/connor-jason" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="imageBar">
        <div className="imageBackground">
          <img src={javaLogo} alt="Java Logo" />
        </div>
        <div className="imageBackground">
          <img src={pythonLogo} alt="Python Logo" />
        </div>
        <div className="imageBackground">
          <img src={jsLogo} alt="JavaScript Logo" />
        </div>
        <div className="imageBackground">
          <img src={reactLogo} alt="React Logo" />
        </div>
        <div className="imageBackground">
          <img src={htmlLogo} alt="HTML Logo" />
        </div>
        <div className="imageBackground">
          <img src={cssLogo} alt="CSS Logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
