"use client";
import Image from "next/image";
import React from "react";
import bppShopImg from "../../../assets/images/projects-img/screenshot-localhost_3001-2023.11.17-15_11_01.jpg";
import bppShopAgentImg from "../../../assets/images/projects-img/screenshot-agent.bppshop.com.bd-2023.11.17-14_22_57.png";
import parcelStarImg from "../../../assets/images/projects-img/screenshot-parcelstar.com.bd-2023.11.17-14_15_40.png";
import flinboImg from "../../../assets/images/projects-img/screenshot-www.flinbo.com-2023.11.17-14_20_20.png";
import dentalCareImg from "../../../assets/images/projects-img/dentalCare.png";
import visionPhotographImg from "../../../assets/images/projects-img/vision-photograph.web.app.png";
import crypmate from "../../../assets/images/projects-img/screenshot-crypmate-67e04.web.app-2023.12.22-17_44_59.png";
import uiChatImg from "../../../assets/images/projects-img/screenshot-uichat.png";
import dao from "../../../assets/images/projects-img/screenshot-dao-search.web.app-2023.12.22-17_37_48.png";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import style from "./ProjectsContent.module.css";

const ProjectsContent = () => {
  return (
    <>
      <div className={style.projects_section}>
        <div className={style.project_section_container}>
          <br />
          <h2 className={style.project_title}>PROJECTS..</h2>
          <div className={style.project_container}>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={bppShopImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>BppShop</h4>
                  <div className={style.link}>
                    <Link href="https://bppshop.com.bd/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is a multivendor ecommerce website. I work on this
                  project as a sole front-end developer. I used these
                  technologies react.js, redux, css, bootstrap, etc.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                  <p>Laravel</p>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={bppShopAgentImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>BppShop Agent</h4>
                  <div className={style.link}>
                    <Link href="https://agent.bppshop.com.bd/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is a multivendor ecommerce agent website. I work on this
                  project as a sole front-end developer. I used these
                  technologies react.js, redux, css, bootstrap, etc.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                  <p>Laravel</p>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={parcelStarImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>ParcelStar</h4>
                  <div className={style.link}>
                    <Link href="https://parcelstar.com.bd/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is a cureer service website. I work on this project as a
                  front-end developer. I used these technologies html, css,
                  bootstrap, etc.
                </p>
                <div className={style.projectTools}>
                  <p>HTML.</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                  <p>Laravel</p>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={flinboImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>Flinbo</h4>
                  <div className={style.link}>
                    <Link href="https://www.flinbo.com/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is a social media website based in Barcelona and it looks
                  like only fans. As a front-end developer, I work on this
                  project as part of a team collaboration. I used these
                  technologies here react.js, redux, typescript, and others.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>TypeScript</p>
                  <p>CSS</p>
                  <p>Bitbucket</p>
                  <p>Trello</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={crypmate}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>CrypMate</h4>
                  <div className={style.link}>
                    <Link href="https://crypmate-67e04.web.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is an Ethereum blockchain wallet app of chrome web
                  browser extension app. And I completed this project-based job
                  and maintained it for a few months, Built and managed the
                  Front-end application and Back-end as the sole developer. And
                  the blockchain part is built by other programmers.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Material UI</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={dao}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>DAO Search</h4>
                  <div className={style.link}>
                    <Link href="https://dao-search.web.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  This is an DAO Search website. And I completed this project-based job
                  and maintained it for a few months, Built and managed the
                  Frontend application and Backend as the sole developer.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Material UI</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={dentalCareImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>DentalCare</h4>
                  <div className={style.link}>
                    <Link href="https://doctors-portal-9e340.web.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  A MERN stack application. Users login with firebase
                  authentication system. And can make an appointment, they can
                  see the appointments list and give a review of services. Admin
                  can manage the dashboard and maintain patient appointments,
                  add more admin. And all are dynamically connected implemented
                  to the database.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Material UI</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className={style.project_content}>
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={visionPhotographImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>Vision Photograph</h4>
                  <div className={style.link}>
                    <Link href="https://vision-photograph.web.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  A MERN stack application. User can order photography service,
                  admin can see all the orders, edit and delete the services and
                  all are connected to database, private route, admin panel and
                  dynamic connected implemented.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>Stripe.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={uiChatImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>UiChat</h4>
                  <div className={style.link}>
                    <Link href="https://uichat-3442a.web.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  A MERN stack real-time chat app with wallet. Users can access
                  the chat app by logging in by name. Can then see each other's
                  presence and chat in real-time with each other. And Users can
                  access the Wallet app by joining by name, password. Users will
                  then be able to view the test balance and send the balance by
                  selecting the recipient address.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>Socket.io</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
            {/* <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={iskillsImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>Improve skills</h4>
                  <div className={style.link}>
                    <Link href="https://github.com/SHAPAN-MIAH/styleHut-client">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  A MERN stack application. Users can manage the shopping cart
                  And can purchase products with the stripe payment gateway
                  method after login with the Firebase authentication system.
                  Users give reviews after buying products. Admin manages
                  dashboard And can add more admin. And all are dynamically
                  connected implemented to the database.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className={style.project_content} data-aos="fade-up">
              <div className={style.project_img}>
                <Image
                  className={style.img}
                  width={550}
                  src={styleHutImg}
                  alt=""
                />
              </div>
              <div className={style.project_desc_content}>
                <div className={style.project_desc_header}>
                  <h4>StyleHut</h4>
                  <div className={style.link}>
                    <Link href="https://github.com/SHAPAN-MIAH/styleHut-client">
                      <FaLink />
                    </Link>
                  </div>
                </div>
                <p className={style.description}>
                  A MERN stack application. Users can manage the shopping cart
                  And can purchase products with the stripe payment gateway
                  method after login with the Firebase authentication system.
                  Users give reviews after buying products. Admin manages
                  dashboard And can add more admin. And all are dynamically
                  connected implemented to the database.
                </p>
                <div className={style.projectTools}>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Firebase</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
