"use client"
import React from "react";
import style from "./ExperienceContent.module.css";
import { AiFillGithub, IconName } from "react-icons/ai";
import { SiOnlyoffice } from "react-icons/si";

const experiences = [
  {
    designation: "Frontend Developer",
    job_type: "Full Time",
    duration: "JUN 2022 - PRESENT.",
    company: "Excel IT Ai",
    location: "Moghbazar, New Easkaton, Ramna, Dhaka-1217",
    description:
      "I'm working in Excel IT AI as a front-end developer And contributing to some projects independently and with the team. And I have a role as frontend team lead for an e-commerce project. I used these technologies ReactJS, Next.js, Vue.js, Nuxt.js, Redux, Vuex, Node.js, Express.js, MongoDB, npm, etc.",
  },

  {
    designation: "Frontend Developer",
    job_type: "Full Time",
    duration: "JUN 2021 - AUGUST 2021..",
    company: "Flinbo",
    location: "Barcelona, Spain(Remote)",
    description:
      "I was Worked in Flinbo.com (Barcelona, Spain) as a front-end developer, I have contributed with the team to this social media project for a few months. And I used these technologies TypeScript, ReactJS, React-Router, Redux, npm, Mysql API, CSS, Bootstrap, Sass, Styled Components, Bitbucket, Trello, etc.",
  },
  {
    designation: "MERN Stack Developer",
    job_type: "Freelance",
    duration: "NOVEMBER 2021 - JANUARY 2023.",
    company: "",
    location: "United States",
    description:
      "This is an Ethereum blockchain wallet app of chrome web browser extension app. And I completed this project-based job and maintained it for a few months, Built and managed the Front-end application and Back-end as the sole developer. And the blockchain part is built by other programmers.",
  },
];

const ExperienceContent = () => {
  return (
    <div className={style.experience_content}>
      {experiences.map((experience) => (
        <div className={style.experience}>
          <div className={style.experience_header}>
            <h3>
              {experience.designation} - <small>({experience.job_type})</small>{" "}
            </h3>{" "}
            {/* <SiOnlyoffice /> */}
            <small>{experience.duration}</small>
            <br />
            <br />
            <span> {experience.company ? experience.company : "---"} </span>|
            <span> {experience.location}</span>
          </div>

          <small>{experience.description}</small>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
