import React from 'react';

const TimelineElementLeft = ({ title, description }) => {
  return (
    <>
                    <div class="timeline-component timeline-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty"></div>
    </>
  );
};

const TimelineElementRight = ({ title, description }) => {
    return (
      <>
        <div className="timeline-empty"></div>
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
      <section className="design-section">
        <div className="timeline">
          <TimelineElementLeft title="Java" description="Java programming language." />
          <TimelineElementRight title="Python" description="Python programming language." />
          <TimelineElementLeft title="Flask" description="Flask web development." />
          <TimelineElementRight title="HTML" description="Learned some HTML." />
          <TimelineElementLeft title="CSS" description="Learned some CSS." />
          <TimelineElementRight title="JavaScript" description="JavaScript programming language." />
        </div>
      </section>
    </div>
  );
};

export default CodingJourneyComponent;
