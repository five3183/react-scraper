import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      NYT Scrubber
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/Header"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Results"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Results" className="nav-link">
            Results
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Saved"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Saved" className="nav-link">
            Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
