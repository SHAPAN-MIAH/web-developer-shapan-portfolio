"use client";
import React from "react";
import style from "./about.module.css";
import styles from "../experience/experience.module.css"
import Image from "next/image";
import SkillsContent from "@/components/sections/SkillsContent/SkillsContent";
import ExperienceContent from "@/components/sections/ExperienceContent/ExperienceContent";

const page = () => {
  // const [skills, setSkills] = useS
  return (
    <div className={style.about_section}>
      <div className={style.about_section_container}>

        {/* <div className={style.about_content_container}>
          <p>
            I'm a <b>Web Developer</b> with over two years of reasonable
            experience, And comfortable working with React.js, Next.js, Vue.js,
            And Nuxt.js. I'm Able to work independently and as part of a team
            for strong collaboration and delivering high-quality projects. I am
            a recognized expert in teamwork and a communicative collaborator. My
            previous roles have strengthened my capabilities in problem-solving
            and organization, including a keen attention to detail and accuracy.
          </p>

          <a
            href="https://drive.google.com/file/d/1yUkfhEBPQELty6RkzZ-DtEj_gmZ9Nbns/view?usp=sharing"
            download
          >
            <button type="button" id={style.downloadResumeBtn}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download Resume <span className="btnSpan"></span>
            </button>
          </a>

          <br />
          <br />
          <br />
        </div> */}
        <br />
        <h2>EXPERIENCE..</h2>
        <div className={styles.experience_content_container}>
          <ExperienceContent/>
        </div>
        <br />
        <br />
        <h2>SKILLS..</h2>
          <div className={style.skills_container} data-aos="fade-up">
            <SkillsContent />
          </div>
          
      </div>
    </div>
  );
};

export default page;
