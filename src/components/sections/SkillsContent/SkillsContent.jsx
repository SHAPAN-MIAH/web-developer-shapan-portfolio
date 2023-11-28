"use client"
import React from "react";
import jsImg from "../../../assets/images/skills-icons/js.png";
import es6Img from "../../../assets/images/skills-icons/es6.png";
import reactImg from "../../../assets/images/skills-icons/react.png";
import nextImg from "../../../assets/images/skills-icons/next js.png";
import vueImg from "../../../assets/images/skills-icons/Vue.js_Logo_2.svg.png";
import reduxImg from "../../../assets/images/skills-icons/redux.png";
import nuxtImg from "../../../assets/images/skills-icons/nuxt.webp";
import typescriptImg from "../../../assets/images/skills-icons/Typescript_logo_2020.svg.png";
import nodeImg from "../../../assets/images/skills-icons/node.png";
import expressImg from "../../../assets/images/skills-icons/express-routing-logo.png";
import tailwindImg from "../../../assets/images/skills-icons/tailwind-css3232.logowik.com.webp";
import bootstrapImg from "../../../assets/images/skills-icons/bootstrap.png";
import cssImg from "../../../assets/images/skills-icons/css.png";
import materialUiImg from "../../../assets/images/skills-icons/material ui.png";
import mongooseImg from "../../../assets/images/skills-icons/mongoose.png";
import mongodbImg from "../../../assets/images/skills-icons/mongodb.png";
import firebaseImg from "../../../assets/images/skills-icons/firebase.png";
import style from "./SkillsContent.module.css";
import Image from "next/image";

const skills = [
  {
    name: "Javascript",
    image: jsImg,
  },
  {
    name: "ES6",
    image: es6Img,
  },
  {
    name: "React",
    image: reactImg,
  },
  {
    name: "Next.js",
    image: nextImg,
  },

  {
    name: "Redux",
    image: reduxImg,
  },
  {
    name: "Vue.js",
    image: vueImg,
  },
  {
    name: "Nuxt.js",
    image: nuxtImg,
  },
  {
    name: "Node js",
    image: nodeImg,
  },
  {
    name: "Express.js",
    image: expressImg,
  },
  {
    name: "Mongoose",
    image: mongooseImg,
  },
  {
    name: "MongoDB",
    image: mongodbImg,
  },
  {
    name: "Typescript",
    image: typescriptImg,
  },
  {
    name: "CSS",
    image: cssImg,
  },
  {
    name: "Tailwind Css",
    image: tailwindImg,
  },
  {
    name: "Bootstrap",
    image: bootstrapImg,
  },

  {
    name: "Material Ui",
    image: materialUiImg,
  }
];
const SkillsContent = () => {
  return (
    <div className={style.skills_content_container}>
      {skills.map((skill) => (
        <div className={style.skills_content} data-aos="fade-up">
          <div className="skillsImgDiv">
            <Image width={40} src={skill.image} alt="" />
          </div>
          <h6>{skill.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
