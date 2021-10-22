import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <Link className="navbar-brand" to="/">
        Marvel APP
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="navbar-nav m1-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/Profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
