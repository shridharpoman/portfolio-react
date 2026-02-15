import React from 'react';

const Resume = ({ active }) => {
  return (
    <article className={`resume ${active ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cornell University</h4>
            <span>Expected May 2026</span>
            <p className="timeline-text">
              Master of Engineering in Engineering Management (STEM) – NY, USA.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Savitribai Phule Pune University</h4>
            <span>June 2021</span>
            <p className="timeline-text">
              Bachelor of Engineering in Computer Science – Pune, India.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Professional Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Quality Engineering Analyst – Accenture</h4>
            <span>May 2023 — Aug 2024</span>
            <p className="timeline-text">
              Lead sprint planning, define user stories, and coordinate cross-team walkthroughs for telecommunication platforms. Achieved 98% test coverage and improved resolution speed by 30%.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Application Development Associate – Accenture</h4>
            <span>Aug 2021 — Apr 2023</span>
            <p className="timeline-text">
              Managed requirements and test data for manual and automated environments. Authored 1000+ technical scenarios, reducing production issues by 40%.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">Technical Proficiency</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">AI & GenAI (OpenAI API, Vertex AI, RAG)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Python & SQL</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Analytics (Tableau, Power BI, Excel)</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Automation & QA Tools (Selenium, n8n)</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
