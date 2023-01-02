import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./styles.css";

const SectionMenu = () => {
  return (
    <div className="section-menu">
      <div>
        <a href="#home" className="home">
          <AiOutlineHome />
        </a>
        <a href="#about" className="about">
          <AiOutlineUser />
        </a>
        <a href="#projects" className="projects">
          <AiOutlineHome />
        </a>
        <a href="#services" className="services">
          <AiOutlineHome />
        </a>
        <a href="#socials" className="socials">
          <AiOutlineHome />
        </a>
      </div>
    </div>
  );
};

export default SectionMenu;
