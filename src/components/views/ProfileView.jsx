import React from "react";
import headShot from "../images/ChingNoraLauHeadshot.JPG";

function ProfileView() {
  return (
    <div>
      <h3>Jemappellenora</h3>
      <img src={headShot} style={{ height: "500px" }}></img>
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
  );
}

export default ProfileView;
