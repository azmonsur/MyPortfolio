import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/store";

import NoContent from "../NoContent";

import "./styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [limit, setLimit] = useState(6);
  const { dispatch, getProjects } = useContext(GlobalContext);

  const fetchProjects = async () => {
    const projects = await getProjects()(dispatch);

    setProjects([...projects]);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="projects-wrapper">
      <div className="section-main-header">My Projects</div>
      <div className="section-description">Projects I have done</div>
      <div className="section-main-content">
        {projects.length === 0 ? (
          <NoContent message="No projects" />
        ) : (
          <div className="each-category">
            {projects
              .filter((project) => project.complete === true)
              .slice(0, limit)
              .map((project, key) => (
                <div key={key} className="each-card-wrapper">
                  <div>
                    <h6 className="title">{project.name}</h6>
                    <div className="image-wrapper">
                      <img
                        className="image"
                        src={`/../../images/projects/${project.img}`}
                        alt={project.name}
                      />
                    </div>
                    <div className="desc">{project.desc}</div>
                    <div className="action-buttons">
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          className="github"
                          target="_blank"
                        >
                          Github
                        </a>
                      )}
                      {project.other_link && (
                        <a
                          href={project.other_link}
                          className="github"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {projects.length > limit && (
          <div
            className="load-more"
            onClick={() => setLimit((prev) => prev + 3)}
          >
            Load more...
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
