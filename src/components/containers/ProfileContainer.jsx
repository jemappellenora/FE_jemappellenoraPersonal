import React, { Component } from "react";
import headShot from "../images/ChingNoraLauHeadshot.JPG";
export class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <h3>Jemappellenora</h3>
        <img src={headShot} style={{ height: "500px" }}></img>
        <table className="genInfo">
          <tbody>
            Education: Bachelor's degree of Computer Science and Information
            Security
          </tbody>
          <tbody>Commulative GPA: 3.5</tbody>
          <tbody>Major GPA: 3.7</tbody>
        </table>
      </div>
    );
  }
}

export default ProfileContainer;
