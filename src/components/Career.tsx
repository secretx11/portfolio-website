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
                <h4>Business Operations & Sales Associate</h4>
                <h5>Solarexpt Enterprises</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Documented end-to-end sales workflows and standardized SOPs,
              increasing task execution efficiency by 15%. Tracked conversion
              ratios and lead performance in Excel dashboards, identifying key
              bottlenecks in the sales funnel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data & Reporting Intern</h4>
                <h5>Excellerate (Dubai-based EdTech)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Cleaned, validated, and structured 10,000+ records improving
              reporting accuracy and reducing data discrepancies by 30%.
              Engineered 5+ automated Excel/Power BI dashboards to track sales
              and revenue KPIs, saving 10+ hours of manual reporting weekly.
              Recognized as Star Performer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Venture Skill India Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Cleaned and transformed raw business datasets into structured,
              analysis-ready formats using Excel (Power Query, Pivot Tables).
              Designed a client-facing analytics dashboard summarizing key
              operational metrics for stakeholders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Business Analyst</h4>
                <h5>Mystery Monks Entertainment Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Managed client and lead databases for a video production, web
              development, and digital marketing company. Analyzed
              lead-to-deal conversion data to flag drop-off points, supporting
              strategies that improve close rates and shorten sales cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>The Yappers (Club)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded and leading The Yappers, building a community-driven club
              focused on collaboration, networking, and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
