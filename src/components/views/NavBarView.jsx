import React from "react";
import { Link } from "react-router-dom";

const NavBarView = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="navLink">
        Profile
      </Link>
    </nav>
  );
};

export default NavBarView;
