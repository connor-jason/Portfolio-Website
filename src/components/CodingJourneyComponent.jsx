import React from 'react';

/**
 * Represents a timeline element displayed on the left side.
 * @param {string} title - The title of the timeline element.
 * @param {string} description - The description of the timeline element.
 * @param {string} date - The date of the timeline element.
 * @returns {JSX.Element} The rendered timeline element.
 */
const TimelineElementLeft = ({ title, description, date }) => {
  return (
    <>
      <div class="timeline-component timeline-content" style={{ marginRight: '20px' }}>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
      <div class="timeline-middle">
          <div class="timeline-circle"></div>
      </div>
      <div class="timeline-date" style={{ justifyContent: 'left' }}>{date}</div>
    </>
  );
};

/**
 * Represents a timeline element displayed on the right side.
 * @param {string} title - The title of the timeline element.
 * @param {string} description - The description of the timeline element.
 * @param {string} date - The date of the timeline element.
 * @returns {JSX.Element} The rendered timeline element.
 */
const TimelineElementRight = ({ title, description, date }) => {
    return (
      <>
        <div className="timeline-date" style={{ justifyContent: 'right' }}>{date}</div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content" style={{ marginLeft: '20px' }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    );
  };

/**
 * Represents the coding journey component.
 * @returns {JSX.Element} The rendered coding journey component.
 */
const CodingJourneyComponent = () => {
  return (
    <div id="coding-journey" style={{ marginTop: '10vh' }}>
      <div className="section-head">My Coding Journey</div>
      <div className="square"/>
      <section className="design-section">
        <div className="timeline">
          <TimelineElementLeft title="Java" description="My first coding language was Java. I learned it in AP Computer Science A and continued to make little scripts and personal projects in it." date="2021" />
          <TimelineElementRight title="Python" description="I then taught myself a little bit of Python, but still preferred Java at the time." date="2023" />
          <TimelineElementLeft title="Flask" description="In CS3733 - Software Engineering, I revisited Python by learning and using Flask to create full stack applications." date="2024" />
          <TimelineElementRight title="HTML" description="In the same course I learned a lot about HTML. A very simple, and even more repetitive language." date="2024" />
          <TimelineElementLeft title="CSS" description="At the same time, I learned some basic CSS to create clean, organized, and coherent webpages." date="2024" />
          <TimelineElementRight title="JavaScript" description="I next took an online course on JavaScript to learn the basics. This opened a lot of new doors for me in the world of web development." date="2024" />
          <TimelineElementLeft title="React" description="The first path I took with JavaScript was learning React to create modern, modular websites (including this one!). This also allowed me to drastically improve my CSS skils, now learning how to make custom animations and more complex elements." date="2024" />
        </div>
      </section>
    </div>
  );
};

export default CodingJourneyComponent;
