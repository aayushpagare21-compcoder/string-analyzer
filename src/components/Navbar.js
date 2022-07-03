import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 
// import About from "./About";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode.background} bg-${props.mode.background} `}
    >
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode.opposite}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" 
              onClick={props.toggleMode}
            /> 
            {console.log(props.mode.opposite)}
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
              {props.mode.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Safety
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title : 'TextUtilsTitle'
// }
