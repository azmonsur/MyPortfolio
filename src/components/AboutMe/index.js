import React from "react";

import "./styles.css";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="section-main-header">About Me</div>
      <div className="section-description">Brief about me</div>
      <div className="section-main-content circles">
        <div className="outer-circle">
          <div className="inner-circle">
            Passionate about Information Technology
          </div>
        </div>

        <div className="outer-circle">
          <div className="inner-circle">
            5+ years web development and programming experience
          </div>
        </div>

        <div className="outer-circle">
          <div className="inner-circle">
            Over 20 projects and still counting...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
