import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className={styles.projectwrapper}>
      <h1 className={styles.projectName}>Projects</h1>
      <div className={styles.projectList}>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
