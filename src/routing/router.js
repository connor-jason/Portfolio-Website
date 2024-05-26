//Project 1
import ReConnect1 from '../images/ReConnect/ReConnect_home.png';
import ReConnect2 from '../images/ReConnect/ReConnect_login.png';
import ReConnect3 from '../images/ReConnect/ReConnect_profile.png';
import ReConnect4 from '../images/ReConnect/ReConnect_applied.png';
import ReConnect5 from '../images/ReConnect/ReConnect_created.png';
import ReConnect6 from '../images/ReConnect/ReConnect_applications.png';
import ReConnect7 from '../images/ReConnect/ReConnect_aboutus.png';

//Project 2
import Wavelength1 from '../images/Wavelength/wavelength_home_1.png';
import Wavelength2 from '../images/Wavelength/wavelength_home_2.png';
import Wavelength3 from '../images/Wavelength/wavelength_deck.png';
import Wavelength4 from '../images/Wavelength/wavelength_faq.png';

//Project 3
import MinecraftAIAssistant1 from '../images/MinecraftAIAssistant/MinecraftAIAssistant_blank.png';
import MinecraftAIAssistant2 from '../images/MinecraftAIAssistant/MinecraftAIAssistant_question.png';
import MinecraftAIAssistant3 from '../images/MinecraftAIAssistant/MinecraftAIAssistant_response.png';

//Project 4

//Project 5
import Portfolio1 from '../images/Portfolio/Portfolio_landing.png';

/**
 * Array of project objects.
 * @typedef {Object} Project
 * @property {string} name - The name of the project.
 * @property {string} description - The description of the project.
 * @property {string} path - The path of the project.
 * @property {string[]} images - Array of image URLs for the project.
 */
const projects = [
  {
    name: "ReConnect",
    description: "ReConnect was a platform built to connect faculty members with college students to find the best candidates to fill research opportunities. This was a full stack website using Flask for the frontend and SQLite for the backend. In collaboration with a team of other students, we developed this platform over three different iterations. We took advantage of GitHub issues to track user stories and distribute responsibilities. This project was a great learning experience for me as it was my first time working on a full stack website. I learned a lot about how to structure a website and handle version-control with a team of developers.",
    skills: "Flask, Python, HTML, CSS, SQLite, Git",
    path: "/ReConnect",
    images: [
      ReConnect1,
      ReConnect2,
      ReConnect3,
      ReConnect4,
      ReConnect5,
      ReConnect6,
      ReConnect7,
    ],
  },
  {
    name: "Wavelength",
    description: (
      <span>
        This project is a web application version of the popular TikTok card game "Wavelength". I don't own or claim to own any rights to this game, I just didn't want to buy the game and wait for shipping. I hand drew the game shown on the home page and made the website using React, HTML, and CSS, and made and hosted it on Firebase by Google. The user has the ability to start a new round, which draws a new card and randomizes the game "triangle", the ability to view the comoplete card deck, and the ability to read my very helpful FAQ page. Play now at <a href='https://wavelength-6ce6f.web.app/' target="_blank" rel="noopener noreferrer">https://wavelength-6ce6f.web.app/</a>!
      </span>
    ),
    skills: "React, Firebase, HTML/CSS, JavaScript, Git",
    path: "/Wavelength",
    images: [
      Wavelength1,
      Wavelength2,
      Wavelength3,
      Wavelength4,
    ],
  },  
  {
    name: "Minecraft AI Assistant",
    description: "Minecraft AI Assistant.",
    skills: "",
    path: "/MinecraftAIAssistant",
    images: [
      MinecraftAIAssistant1,
      MinecraftAIAssistant2,
      MinecraftAIAssistant3,
    ],
  },
  {
    name: "PortfolioWebsite",
    description: "I built this portfolio website to show off my projects and skills as a coder! It displays a lot of information about me including my favorite projects, an about me, my coding journey, and a contact page. This website began in Flask, since that was what I was familiar and comfortable with, but I quickly decided to switch to a JavaScript-based framework to develop this website because of the ease of use and the ability to create a more dynamic website and to learn a new, in-demand skill. I have learned a lot about React, JavaScript, and especially CSS in the process of building this website.",
    skills: "React, JavaScript, HTML, CSS, Git",
    path: "/PortfolioWebsite",
    images: [
      Portfolio1,
    ],
  },
];

export default projects;