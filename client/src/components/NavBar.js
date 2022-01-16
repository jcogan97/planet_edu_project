import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/quiz">Test your knowledge!</Link>
      </li>
      <li>
        <Link to="/compare-planets">See How Old You Are On Different Planets!</Link>
      </li>
    </ul>
  );
}

export default NavBar;