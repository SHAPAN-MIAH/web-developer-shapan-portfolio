import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_container}>
      <div className="footer-dec">
        <h3>MD. SHAPAN</h3>
      </div>

      <div className="socials">
        <p>Don't hesitate to contact me. Please feel free and visit my site.</p>
        <a className="text-white" href="">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="text-white" href="">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-white" href="">
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="text-white"
          href="https://www.linkedin.com/in/md-shapan-miah-8bb7361a2/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="text-white" href="https://github.com/SHAPAN-MIAH">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="copyRight text-center">
        <small>
          Copyright <span id="year"></span> All Rights Reserved
        </small>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
