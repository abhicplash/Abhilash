import React from "react";
import styles from "./HomeBanner.module.css";
import abimage from "../../Assets/Images/hero-img.png";
import { useTheme } from "../../common/ThemeContext";
import CV from "../../Assets/deocs/Abhilash CP.pdf";
import gitDark from "../../Assets/Images/github-dark.svg";
import gitLight from "../../Assets/Images/github-light.svg";
import linkedInDark from "../../Assets/Images/linkedin-dark.svg";
import linkedInLight from "../../Assets/Images/linkedin-light.svg";
import sun from "../../Assets/Images/sun.svg";
import moon from "../../Assets/Images/moon.svg";

function HomeBanner() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const gitIcon = theme === "dark" ? gitDark : gitLight;
  const LnIcon = theme === "dark" ? linkedInDark : linkedInLight;
  return (
    <div className={styles.homebanner}>
      <div className={styles.homebannerLeft}>
        <div className={styles.imagecover}>
          <img src={abimage} alt="profile" className={styles.abimg} />
          <img
            src={themeIcon}
            alt="switch"
            onClick={toggleTheme}
            className={styles.darklight}
          />
        </div>
        <div className={styles.icons}>
          <img src={gitIcon} alt="" />
          <img src={LnIcon} alt="" />
        </div>
        <a href={CV} download className={styles.cv1}>
            <button className={styles.CV}>Resume</button>
          </a>
      </div>
      <div className={styles.homebannerright}>
        <span className={styles.name}>Abhilash CP</span>
        <span className={styles.frontend}>
          Frontend <br /> developer
        </span>
        <span className={styles.bannerpara}>
          <p>
            {" "}
            Frontend Developer with a track record of successfully delivering
            polished and intuitive user interfaces. Hands-on experience in
            crafting responsive and cross-browser compatible websites and web
            applications.
          </p>
          {/* <br /> */}
          <a href={CV} download>
            <button className={styles.CV}>Resume</button>
          </a>
        </span>
      </div>
    </div>
  );
}

export default HomeBanner;
