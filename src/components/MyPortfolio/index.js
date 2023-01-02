import React from "react";
import Projects from "../Projects";
import SectionMenu from "../SectionMenu";
import Intro from "../Intro";

import "./styles.css";
import Experience from "../Experience";
import Services from "../Services";
import Contacts from "../ContactMe";

const MyPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="background"></div>
      <div>
        <div className="section-menu-wrapper">
          <SectionMenu />
        </div>
        <div className="main-body">
          <div id="about" className="intro">
            <Intro />
          </div>

          <div id="experience" className="experience">
            <Experience />
          </div>
          <div id="services" className="services">
            <Services />
          </div>
          <div id="projects" className="projects">
            <Projects />
          </div>
          <div id="testimonial" className="testimonial"></div>
          <div id="contact" className="contact">
            <Contacts />
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
