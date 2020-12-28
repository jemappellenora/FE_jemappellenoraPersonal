import React from "react";

function ExperiencesView() {
  return (
    <div id="dummyExperiences">
      <h3>Experiences</h3>
      <div className="expCard">
        <h4>Commit to Green | JUNE2020 - AUG2020</h4>
        <h6>Front-End Software Development Intern</h6>
        <li>
          Implemented frontend application using React-Redux.js to maintain
          hierarchical and intuitive front-end structure
        </li>
        <li>
          Improved interactions with Google Maps API to display and store
          additional relevant data
        </li>
      </div>
      <div className="expCard">
        <h4>NYC Tech Talent Pipeline | MAY2020 - JUNE2020</h4>
        <h6>Full-Stack Software Development Intern</h6>
        <li>
          Created a full-stack CRUD application using Sequelize ORM with Node.js
          and Express.js, for backend server, and React-redux.js, for frontend
          client application
        </li>
        <li>
          Used CSS, HTML, jQuery and JavaScript to enhance user experience and
          interface design
        </li>
      </div>
      <div className="expCard">
        <h4>J.P.Morgan | April2020</h4>
        <h6>Virtual Software Engineer Intern</h6>
        <li>
          Utilized understanding of Python scripting language, Command line
          basics, Javascript, React, Typescript and J.P.Morgan Perspective tool
          to manipulate and present data feeds visually in web applications
        </li>
      </div>
      <div className="expCard">
        <h4>WITNY Summer Guild at Cornell Tech | June2018</h4>
        <h6>Participant</h6>
        <li>
          Collaborated with team members to create a product design prototype
          and designed a User-centered Application using HTML, Javascript and
          CSS
        </li>
        <li>
          Analyzed qualitative data to identity problems or possible
          improvements of the application
        </li>
      </div>
    </div>
  );
}

export default ExperiencesView;
