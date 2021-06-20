import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="mb-3 py-3">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Sdot
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul class="navbar-nav ms-4">
              <li class="nav-item">
                <a class="nav-item-color active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-item-color" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-item-color" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-item-color disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div>
              <button className="primary-btn">get in touch</button>
              <button className="sign-btn">sign in</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
