import React from "react";
import Projects from "../Projects";
import SectionMenu from "../SectionMenu";
import Intro from "../Intro";

import Experience from "../Experience";
import Services from "../Services";
import Contacts from "../ContactMe";
import Footer from "../Footer";
import AboutMe from "../AboutMe";

import "./styles.css";

const MyPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="background"></div>
      <div>
        <div className="section-menu-wrapper">
          <SectionMenu />
        </div>
        <div className="main-body">
          <div id="home" className="intro">
            <Intro />
          </div>
          <div id="about" className="about">
            <AboutMe />
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
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
