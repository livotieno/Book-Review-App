import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <h1>3LIV BOOKSTORE</h1>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Nav;