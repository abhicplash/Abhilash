import React from "react";
import styles from "./ProjectImageCard.module.css";
import projectimg1 from '../../Assets/Images/projects1.jpeg'

function ProjectImageCard({image}) {
  return (
    <div className={styles.imagecover}>
      <div className={styles.projectimageborder} />
      <img
        className={styles.projectImage}
        src={image}
        alt=""
      />
    </div>
  );
}

export default ProjectImageCard;
