import React from "react";

import "./styles.css";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <div className="more-details">
          <div className="hello">Bonjour, I'm</div>
          <div className="name">Azeez Monsur</div>
          <div className="profession">
            <span>Fullstack Developer</span>
            <span> | Data Scientist </span>
          </div>
          <div>
            <a
              className="cv"
              href="\pdf\Azeez_Monsur_Resume.pdf"
              download={true}
            >
              <div>Download CV</div>
            </a>
          </div>
        </div>
        <div className="image-others">
          <div className="my-image-wrapper">
            <div className="image">
              <img className="my-image" src="/../../images/my-image.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
