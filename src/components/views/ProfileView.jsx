import React from "react";
import headShot from "../images/ChingNoraLauHeadshot.JPG";

function ProfileView() {
  return (
    <div>
      <h3>Jemappellenora</h3>
      <div>
        <img src={headShot} style={{ height: "500px" }}></img>
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
          &emsp; I didn’t realize that I wanted to become a software engineer
          until the third year of my college years. Choosing a major back in
          college was one of my biggest challenges since I felt that I’m curious
          in a lot of different professions. Therefore, one semester I decided
          to take courses in different areas of studies, including art,
          economics and environmental science, to find out what I really want to
          do for the rest of my life. I found that semester that my favorite
          class was computer science101 because learning different algorithms
          and different variations of code was extremely fun and astonishing. I
          learned how little changes in code can make enormous impacts on
          everyone’s lives and it was the point of my life where I decided that
          I want to explore and understand more about technology. Moreover, I
          also enjoy being able to turn ideas into final products and,
          throughout my journey of previous internships, I thrive on building
          products that can exceed end users’ expectations. Although there might
          be some difficulties when learning a new technology and/or trying to
          push out a product, I always appreciate the challenges faced because
          they help me strengthen my coding skill and also grow professionally
          by highlighting my weaknesses to be worked on.
        </p>
      </div>
    </div>
  );
}

export default ProfileView;
