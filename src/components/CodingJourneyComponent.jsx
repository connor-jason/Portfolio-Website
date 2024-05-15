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
      <div class="timeline-component timeline-content">
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
        <div className="timeline-component timeline-content">
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
          <TimelineElementLeft title="Java" description="Java programming language." date="2021" />
          <TimelineElementRight title="Python" description="Python programming language." date="2023" />
          <TimelineElementLeft title="Flask" description="Flask web development." date="2024" />
          <TimelineElementRight title="HTML" description="Learned some HTML." date="2024" />
          <TimelineElementLeft title="CSS" description="Learned some CSS." date="2024" />
          <TimelineElementRight title="JavaScript" description="JavaScript programming language." date="2024" />
        </div>
      </section>
    </div>
  );
};

export default CodingJourneyComponent;
