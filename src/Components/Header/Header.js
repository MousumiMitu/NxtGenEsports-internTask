import React from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../images/6661.jpg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-section">
      <div className="Container-box mb-5 ">
        <Navbar></Navbar>
        <div className="row header-container my-5 ">
          <div
            className="col-md-6 content-box"
            style={{ border: "1px solid red" }}
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
          <div className="col-md-6">
            <img
              src={img}
              alt=""
              className="img-fluid"
              style={{ border: "1px solid red" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
