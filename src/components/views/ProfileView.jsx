import React from "react";
import headShotone from "../images/ChingNoraLauHeadshot1.png";

function ProfileView() {
  return (
    <div>
      <h3>Jemappellenora</h3>
      <div className="card">
        <table>
          <tbody>
            <tr>
              <td>
                <img alt="headShotone" src={headShotone} style={{ height: "300px" }}></img>
              </td>
              <td>
                Hello World,
                <p>
          &emsp;My name is Nora and I'm a Driven Software Engineer with Full-Stack application development experiences using Agile SDLC practices. Looking to be challenged and contribute with knowledge and passion for analysis, design and implementation in a business-critical environment.
              </p>
              </td>
            </tr>
          </tbody>
        </table>
        </div>



    </div>
  );
}

export default ProfileView;
