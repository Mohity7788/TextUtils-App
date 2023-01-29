import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <>
        <nav
          className="navbar navbar bg-dark navbar-expand-lg bg-body-tertiary "
          data-bs-theme={props.mode}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    {props.AboutText}
                  </Link>
                </li>
              </ul>
            </div>
            <div class="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`${props.mode === "light" ? "Dark" : "Light"} Mode`}
              </label>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
};

Navbar.defaultProps = {
  AboutText: "About Us",
};

export default Navbar;
