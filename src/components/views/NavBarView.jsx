import React from "react";
import { Link } from "react-router-dom";
import { computerIcon, homeIcon, projectIcon } from "../images";
const NavBarView = () => {
  return (
    <nav className="navBar">
      <div style={{ marginTop: "10px" }}>
        <Link to="/FE_jemappellenoraPersonal" className="navLink">
          <img src={homeIcon} style={{ filter: "contrast(0%)" }} />
          Profile
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to="/experiences" className="navLink">
          <img src={computerIcon} style={{ filter: "contrast(0%)" }} />
          Experiences
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to="/projects/" className="navLink">
          <img src={projectIcon} style={{ filter: "contrast(0%)" }} />
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBarView;
