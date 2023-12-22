import React from "react";
import styles from "./footer.module.css";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_container}>
        <div className="footer-dec">
          <h3>MD. SHAPAN</h3>
        </div>

        <div className="socials">
          {/* <h4>Get in touch</h4> */}
          {/* <p>Don't hesitate to contact me. Feel free to ask any questions. visit my site.</p> */}
          
          <Link className={styles.social_icon} href="https://www.linkedin.com/in/md-shapan-miah/">
            <AiFillLinkedin />
          </Link>
          
          <Link className={styles.social_icon} href="https://www.facebook.com/shwpon.mahmud/">
            <AiFillFacebook />
          </Link>
          <Link className={styles.social_icon} href="https://twitter.com/MDSHAPANMIAH1">
            <AiFillTwitterSquare />
          </Link>
          <Link className={styles.social_icon} href="https://github.com/SHAPAN-MIAH">
            <AiFillGithub />
          </Link>

          <Link className={styles.social_icon} href="https://github.com/Md-Swapan">
            <AiFillGithub />
          </Link>
          <Link className={styles.social_icon} href="https://shapan.netlify.app/">
          <IoGlobeOutline />
          </Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
