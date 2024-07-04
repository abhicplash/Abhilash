import React from "react";
import styles from "./About.module.css";
import { MdChevronRight } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import aboutimg from "../../Assets/Images/about.jpg";

function About() {
  return (
    <div className={styles.aboutmain}>
      <div className={styles.abouthead}>
        <h1 className={styles.aboutheadmain}>About</h1>
        <h2 className={styles.aboutheadsub}>About Me</h2>
      </div>
      <br />
      <div className={styles.aboutdetailsmain}>
        <div className={styles.aboutimagecover}>
          <div className={styles.coverposimg}>
            <div className={styles.aboutimageborder}></div>
            <img src={aboutimg} alt="about" className={styles.aboutmeimg} />
          </div>
        </div>
        <div className={styles.aboutdetailscover}>
          <span className={styles.aboutnameDetails}>Abhilash C P</span>
          <span className={styles.aboutparaDetails}>
            Frontend Developer with a track record of successfully delivering
            polished and intuitive user interfaces. Hands-on experience in
            crafting responsive and cross-browser compatible websites and web
            applications. Proficient in HTML, CSS, JavaScript and React. Seeking
            a challenging role where I can contribute my technical expertise,
            creativity, and passion for delivering exceptional frontend
            solutions to drive the success of innovative projects
          </span>
          <br />
          <span className={styles.skillHeading}>Skills</span>
          <div className={styles.skillsList}>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>HTML</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>CSS</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>JavaScript</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>React</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>Tailwind CSS</span>
            </div>
          </div>
          <span className={styles.skillHeading}>Skills</span>
          <div className={styles.skillsList}>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>HTML</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>CSS</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>JavaScript</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>React</span>
            </div>
            <div className={styles.skillitems}>
              <FiChevronsRight /> <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
