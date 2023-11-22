"use client"
import ExperienceContent from "@/components/sections/ExperienceContent/ExperienceContent";
import React from "react";
import styles from "./experience.module.css"

const page = () => {
  return (
    <div className={styles.experience_section}>
      <div className={styles.experience_section_container}>
        <br />
        <h2>EXPERIENCE..</h2>
        {/* <br /> */}
        <div className={styles.experience_content_container}>
          <ExperienceContent/>
        </div>
      </div>
    </div>
  );
};

export default page;
