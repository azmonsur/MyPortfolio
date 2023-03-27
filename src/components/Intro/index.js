import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

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
            <div className="cv-area">
              <div className="cv">
                Download CV <MdOutlineArrowDropDown size={20} />{" "}
              </div>
              <ul className="test">
                <a href="\pdf\se_Azeez_Monsur_Resume.pdf" download={true}>
                  <li>Fullstack Dev</li>
                </a>
                <a href="\pdf\ds_Azeez_Monsur_Resume.pdf" download={true}>
                  <li>Data Science</li>
                </a>
              </ul>
            </div>
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
