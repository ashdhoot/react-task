import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DEMO Streaming
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-dark text-light" href="#">
                  Start your free trial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="subheader bg-dark p-2">
        <div className="container">
          <h1 className="text-light">Popular Titles</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
