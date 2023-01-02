import React from "react";

import "./styles.css";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <div className="more-details">
          <div className="hello">Bon adior, I'm</div>
          <div className="name">Azeez Monsur</div>
          <div className="profession">
            <span>Fullstack Developer</span>
            <span> | Data Scientist</span>
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
              <img className="my-image" src="/../../images/my-image.png" />
            </div>
          </div>
          <div className="circles">
            <div className="section-main-header">About Me</div>
            <div className="outer-circle">
              <div className="inner-circle">
                10+ years programming experience
              </div>
            </div>

            <div className="outer-circle">
              <div className="inner-circle">
                Over 20 projects and still counting...
              </div>
            </div>

            <div className="outer-circle">
              <div className="inner-circle">wait</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
