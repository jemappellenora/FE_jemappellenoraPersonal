import React from "react";

function ExperiencesView() {
  return (
    <div id="dummyExperiences">
      <h3>Experiences</h3>
      <div className="card">
        <h4>aLanguageBank | APR2021 - PRESENT</h4>
        <h6>Bilingual Interpreter</h6>
        <li>
        Serve as an interpreter for non-english speaking patients to facilitate communication at Covid-19 vaccination sites.
        </li>
        <li>
        Maintain patient flow by prioritizing treatment and care according to patients’ needs. 
        </li>
        <li>
        Ensure patients understand details of medical procedures and risks by translating in 3 common Chinese dialects.
        </li>
      </div>
      <div className="card">
        <h4>Commit to Green | JUNE2020 - AUG2020</h4>
        <h6>Front-End Software Development Intern</h6>
        <li>
        Constructed a web-based application to help users identify over 400 composting and recycling drop off sites in N.Y.C .
        </li>
        <li>
        Centralized datasets from various APIs and integrated with Google Maps API to enhance user accessibility.
        </li>
        <li>
        Translated design wireframes into web components to maintain an intuitive structured front-end application using React-Redux.js.
        </li>
      </div>
      <div className="card">
        <h4>NYC Tech Talent Pipeline | MAY2020 - JUNE2020</h4>
        <h6>Full-Stack Software Development Fellow</h6>
        <li>
        Collaborated with a team of four to build an e-commerce full stack web application that allows users to checkout products through Stripe API and used PostgreSQL for persistent data storage and flexible data model. 
        </li>
        <li>
        Engineered and maintained logical data flow of the Back-End server application, using Sequelize ORM with Node.js and Express.js, and Front-End client application, using React.js, to ensure a holistic user experience.
        </li>
        <li>
        Enhanced User Interface by making the application accessible for users with color vision deficiency.
        </li>
      </div>
      <div className="card">
        <h4>J.P.Morgan | April2020</h4>
        <h6>Virtual Software Engineer Intern</h6>
        <li>
        Activated automatic updates of client-side React.js applications and manipulated data feeds visually, using typescript, to present analysis that suggest, to users, when trading for a stock should occur.
        </li>
        <li>
        Debugged J.P.Morgan Perspective Data visualization software to ensure accurate data values that assist users to better identify potential trading opportunities.
        </li>
        <li>
        Implemented unit test in existing web applications to help design better robust/ maintainable/ reusable code.
        </li>
      </div>
      <div className="card">
        <h4>WITNY Summer Guild at Cornell Tech | June2018</h4>
        <h6>Participant</h6>
        <li>
        Led a team of five to build a minimum viable product model for a User-centered Application, using HTML, Javascript and CSS, that promotes user satisfaction by providing subway real time arrival.
        </li>
        <li>
        Conducted intercept testing and accumulated qualitative data to create interactive prototypes and wireframe to be used to optimize user experience and user interface design.
        </li>
        <li>
        Identified opportunities for improvement and upgraded features of application to improve functionality by 13%.
        </li>
      </div>
    </div>
  );
}

export default ExperiencesView;
