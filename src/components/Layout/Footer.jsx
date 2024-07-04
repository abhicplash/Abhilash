import React from "react";
import styles from "./Footer.module.css";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footermain}>
      <h1>Contact Me</h1>
      <div className={styles.footerInfo}>
        <div className={styles.contactInfo}>
          <FaPhoneAlt className={styles.FootIcons} /> +91-9562465095
        </div>
        <div className={styles.contactInfo}>
          <FaEnvelope className={styles.FootIcons} /> abhicplash@gmail.com
        </div>
        <div className={styles.contactInfo}>
          <FaWhatsapp className={styles.FootIcons} /> +91-9562465095
        </div>
      </div>
    </div>
  );
}

export default Footer;
