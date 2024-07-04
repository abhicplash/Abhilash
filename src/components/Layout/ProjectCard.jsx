import React from "react";
import styles from "./ProjectCard.module.css";
import ProjectDetailsCard from "./ProjectDetailsCard";
import mf from "../../Assets/Images/mechFusion.JPG";
import ProjectcardRev from "./ProjectcardRev";

function ProjectCard() {
  return (
    <div className={styles.PcardMain}>
        <ProjectDetailsCard Name={"MF"} image={mf} />
        <ProjectcardRev Name={"MF"} image={mf} />
    </div>
  );
}

export default ProjectCard;
