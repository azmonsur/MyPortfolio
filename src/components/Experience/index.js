import React, { useContext, useState, useEffect } from "react";
import { TbHexagon } from "react-icons/tb";
import { GlobalContext } from "../../context/store";
import NoContent from "../NoContent";

import "./styles.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const { dispatch, getExperience } = useContext(GlobalContext);

  const fetchExperience = async () => {
    const experience = await getExperience()(dispatch);

    setExperience(experience);
  };

  useEffect(() => {
    fetchExperience();
  }, []);
  return (
    <div className="experience-wrapper">
      <div className="section-main-header">My Experience</div>
      <div className="section-description">Skills I have</div>
      <div className="section-main-content">
        {experience.length === 0 ? (
          <NoContent message="No Experience" />
        ) : (
          <div className="each-category">
            {Array.from(
              new Set([...experience].map((exp) => exp.category))
            ).map((category, key) => (
              <div key={key}>
                <h6>{category}</h6>
                <div className="each-experience">
                  {experience
                    .filter((exp) => category === exp.category)
                    .map((exp, key) => (
                      <div key={key}>
                        <div className="icon">
                          <TbHexagon />
                        </div>
                        <div className="name-level">
                          <span>{exp.name}</span>
                          <span>{exp.level}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
