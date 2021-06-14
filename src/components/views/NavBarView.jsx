import React from "react";
import { Link } from "react-router-dom";
import { computerIcon, homeIcon, projectIcon } from "../images";
const NavBarView = () => {
  return (
    <nav className="navBar">
      <div style={{ marginTop: "10px" }}>
        <Link to="/FE_jemappellenoraPersonal" className="mylinks">
          <img alt="homeIcon" src={homeIcon} style={{ filter: "contrast(0%)" }} />
          Profile
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to="/experiences" className="mylinks">
          <img alt= "computerIcon" src={computerIcon} style={{ filter: "contrast(0%)" }} />
          Experiences
        </Link>
      </div>
      {/* <div style={{ marginTop: "10px" }}>
        <Link to="/projects/" className="mylinks">
          <img alt="projIcon" src={projectIcon} style={{ filter: "contrast(0%)" }} />
          Projects
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBarView;
