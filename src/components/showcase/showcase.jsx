"use client"
import React from "react";
import style from "./showcase.module.css";
import profileImg from "../../assets/images/s logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Showcase = () => {
  return (
    <div className={style.showcase_section}>
      <div className={style.showcase_section_container}>
        <div className={style.showcase_section_content}>
          <Link href="/">
            <Image
              src={profileImg}
              alt="Picture of the author"
              sizes="60vw"
              style={{
                width: "20%",
                height: "auto",
              }}
            />
          </Link>
          <h1 className={style.showcase_section_profile_name}>
            MD SHAPAN MIAH
          </h1>
            <small className={style.showcase_section_profile_designation}>Web Developer</small>
          <div className={style.showcase_section_social_link_container}>
            <Link href="https://github.com/SHAPAN-MIAH">
              <AiFillGithub />
            </Link>

            <Link href="https://github.com/Md-Swapan">
              <AiFillGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/md-shapan-miah/">
              <AiFillLinkedin />
            </Link>
          </div>
          <div className={style.search_container}>
            <div className={style.search_menu_bar}>
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/about">
                  <li>About</li>
                </Link>
                {/* <Link href="/experience">
                  <li>Experience</li>
                </Link> */}
                <Link href="/projects">
                  <li>Projects</li>
                </Link>

                <Link href="/contact">
                  <li>contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
