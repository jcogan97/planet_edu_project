import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

  const link = document.querySelector('.link-button')

  return (
    <nav>
      <ul id="primary-nav" className="primary-nav nav-font">
        <li>
          <Link to="/" className="link-button">Home</Link>
        </li>
        <li>
          <Link to="/compare-planets">Your Life On Another Planet</Link>
        </li>
        <li>
          <Link to="/quiz">Test Your Knowledge</Link>
        </li>
        <li>
          <Link to="/order-planets">Restore the Order</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;