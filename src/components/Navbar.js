import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            3M
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
