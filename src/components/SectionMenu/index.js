import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { GoProject } from "react-icons/go";

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

        <a href="#services" className="services">
          <RiServiceLine />
        </a>
        <a href="#projects" className="projects">
          <GoProject />
        </a>
        <a href="#contact" className="socials">
          <AiOutlineContacts />
        </a>
      </div>
    </div>
  );
};

export default SectionMenu;
