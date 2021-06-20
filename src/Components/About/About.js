import React from "react";
import img2 from "../../images/Business coach showing growth graph to businesswoman.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="Container-box my-5 ">
      <h1 className="text-center">
        Why Data Science Sdot Data is <br /> Science for Everyone
      </h1>
      <div className="row my-5 mx-3 py-5">
        <div className="col-md-5 p-4 about-content">
          <h2>
            Data Science Sdot is one of the leading platforms providin data
            scence Solution
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut
            molestias possimus iusto accusantium hic aperiam
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut
            molestias possimus iusto accusantium hic aperiam
          </p>
          <button className="btn-3">learn more</button>
        </div>
        <div className="col-md-7">
          <img src={img2} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;
