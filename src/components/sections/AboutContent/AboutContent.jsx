import React from 'react';
import style from "./AboutContent.module.css"

const AboutContent = () => {
  return (
    <div>
      <div className={style.about_content_container}>
        <br />
        <h2>SOME WORDS ABOUT ME..</h2>
        <br/>
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
        </div>
    </div>
  );
};

export default AboutContent;