import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark turnlighttext">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Viborg Haveservice
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/viborghaveservice1">
                  ViborgHaveservice1
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/AboutusEdit">
                  About us Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services">
                  ViborgHaveservice2
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/servicesCreate">
                  Create service
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/servicesAdmin">
                  Admin service
                  </NavLink>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/vejret">
                Vejret
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/news">
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/energidata">
                Energidata
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Boardgames
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/boardgames">
                  Boardgames
                  </NavLink>
                </li>
                
                <li>
                  <NavLink className="dropdown-item" to="/boardgamesCreate">
                  Create service
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/boardgamesAdmin">
                  Admin service
                  </NavLink>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
