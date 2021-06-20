import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="my-5 Container-box">
      <div className=" card-section">
        <div className="display-card1">
          <h6>Solutions Visualization</h6>
          <h3>
            Data Visualization <br /> Practices to Improve
          </h3>
          <div className="ball-1">
            <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" />
          </div>
        </div>
        <div className="display-card2">
          <h6>Data Consulting</h6>
          <h3>
            Consulting on Invoice data <br /> capture
          </h3>
          <div className="ball-2">
            <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" />
          </div>
        </div>
        <div className="display-card3">
          <h6>Data Case Studies </h6>
          <h3>
            Delivering the insights <br /> Data Case
          </h3>
          <div className="ball-3">
            <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
