import React from 'react';

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

const CodingJourneyComponent = () => {
  return (
    <div id="coding-journey" style={{ marginTop: '10vh' }}>
      <div className="section-head">My Coding Journey</div>
      <div className="square"></div>
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
