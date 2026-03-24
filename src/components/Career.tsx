import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales & Business Development</h4>
                <h5>Foundation</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Spent over 1.5 years understanding client psychology, audience behavior, and what actually drives conversions. Built a strong foundation in strategic thinking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Business Executive</h4>
                <h5>Strategy & Growth</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Sharpened my strategic thinking and developed a deeply results-oriented mindset. Learned how to apply business logic to creative endeavors.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Motion Graphics Artist</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Operating independently, specializing in cashcow videos, faceless content, and shorts. Acting as a creative partner focusing on retention, engagement, and results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
