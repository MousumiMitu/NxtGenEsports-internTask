import React from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../images/img2.jpg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-section">
      <div className="Container-box mb-5 ">
        <Navbar></Navbar>
        <div className="row header-container  pb-5">
          <div
            className="col-md-6 content-box"
            // style={{ border: "1px solid red" }}
          >
            <h1>Data Analytics</h1>
            <h1>solutions for startup</h1>
            <h1>Agency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              magnam facilis
            </p>
            <h6>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              Learn with our comprehensive curriculum and experience
            </h6>
            <h6>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              Step into the world of practical data services
            </h6>
            <div className="btn-box">
              <button className="btn-1">Learn more</button>
              <button className="btn-2">
                Learn about our latest work intro
              </button>
            </div>
          </div>
          <div className="col-md-6 img-section align-items-center">
            <img
              src={img}
              alt=""
              //   className="img-fluid"
              //   style={{ border: "1px solid red" }}
            />
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1624190352 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
