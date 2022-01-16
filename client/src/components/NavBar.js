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
          <Link to="/quiz">Test your knowledge!</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;