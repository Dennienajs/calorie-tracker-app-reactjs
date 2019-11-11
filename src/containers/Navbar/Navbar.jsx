import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Diary</Link>
        </li>
        <li>
          <Link to="/addfood">Add food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
