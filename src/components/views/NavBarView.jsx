import React from "react";
import { Link } from "react-router-dom";

const NavBarView = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </nav>
  );
};

export default NavBarView;
