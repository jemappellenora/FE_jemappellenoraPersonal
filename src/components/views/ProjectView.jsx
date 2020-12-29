import React from "react";

const ProjectView = () => {
  return (
    <div id="dummyProjects">
      <div className="card">
        <h4>Projects</h4>
        <h6>[Click to View]</h6>
        <li>
          <a href="http://www.icompost.info" className="mylinks">
            ICompost
          </a>
        </li>
        <li>
          <a href="https://eco-carrot.web.app/" className="mylinks">
            EcoCarrot
          </a>
          <div style={{ marginLeft: "50px" }}>
            Source Code:
            <div>
              <a href="https://github.com/eco-carrot/ttp-capstone-ecommerce-client">
                Front-End Source Code
              </a>
            </div>
            <div>
              <a href="https://github.com/eco-carrot/ttp-capstone-ecommerce-server">
                Back-End Source Code
              </a>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default ProjectView;
