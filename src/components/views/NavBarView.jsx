import React from "react";
import { Link } from "react-router-dom";

const NavBarView = () => {
  return (
    <nav className="navBar">
      <div style={{ marginTop: "10px" }}>
        <Link to="/" className="navLink">
          Profile
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to="/experiences" className="navLink">
          Experiences
        </Link>
      </div>
    </nav>
  );
};

export default NavBarView;
