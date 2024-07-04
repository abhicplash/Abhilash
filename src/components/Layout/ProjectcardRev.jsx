import React from "react";
import styles from "./ProjectcardRev.module.css";
import ProjectImageCard from "./ProjectImageCard";
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectcardRev({Name,image}) {
  return (
    <div className={styles.ProjectcardRevwrapper}>
      <div className={styles.detailsMain}>
        <span className={styles.projectname}>{Name}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          laborum, numquam possimus deserunt cum voluptatibus laboriosam
          dignissimos ducimus ratione! Eaque quam in voluptatibus. Velit sint
          tenetur exercitationem, in rem quasi? numquam possimus deserunt cum
          voluptatibus laboriosam dignissimos ducimus ratione! Eaque quam in
          voluptatibus. Velit sint tenetur exercitationem, in rem quasi?
        </p>
        <button className={styles.externalLink}>
          <span>More</span>
          <FaArrowRightLong />
        </button>
      </div>
      <ProjectImageCard image={image} />
    </div>
  );
}

export default ProjectcardRev;
