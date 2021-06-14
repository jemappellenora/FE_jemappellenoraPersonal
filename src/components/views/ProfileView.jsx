import React from "react";
import headShot from "../images/ChingNoraLauHeadshot.JPG";

function ProfileView() {
  return (
    <div>
      <h3>Jemappellenora</h3>
      <div>
        <img alt="headShot" src={headShot} style={{ height: "500px" }}></img>
      </div>
      <div className="card">
        <table className="genInfoTable">
          <tbody>
            <tr>
              <td>Education:</td>
              <td>
                Bachelor's degree of Computer Science and Information Security
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Cumulative GPA: </td>
              <td>3.5</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Major GPA:</td>
              <td> 3.7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h5>Why did I choose Software Engineering?</h5>
        <p>
          &emsp;I am eager to learn and grow in a fast-paced and professional environment. 
          As a self driven and curious individual, I am excited to join a company 
          where I will have the opportunity to work with more experienced individuals and expand my expertise by tackling challenges,
           advancing projects, and completing assignments and other achievements.
              </p>
        <p>
        &emsp;In addition to my experience in the tech field, I have previously developed both front-end and back-end applications, 
using React-Redux.js and React Native for front-end client applications and using express.js, 
node.js, Django for back-end server applications. During my previous internship experience at a startup company, 
Commit to Green, I worked as a front-end software developer to construct web and mobile applications by converting design wireframes 
into application components. In addition, to enhance users’ accessibility, user interface and user experience design, 
various frameworks and APIs, such as the Google Oauth, the Google Map API, and NYC Open Data APIs, were implemented of the applications. I thrive to build products that exceed users’ expectations and I look forward to joining a team to solve business problems through engineering practices, challenge myself, put my knowledge and skills to use, learn new technologies and translate them into meaningful work.</p>
      </div>
    </div>
  );
}

export default ProfileView;
