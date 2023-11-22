"use client"
import React from "react";
import style from "./contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className={style.contact_section} data-aos="fade-up">
        <div className={style.contact_section_container}>
          <br />
          <h2 className={style.title}>CONTACT..</h2>
          <div className={style.Get_in_touch_container}>
            {/* <h4 className={style.get_in_touch_title}>Get in touch...</h4> */}
            <p>
              Let me know How can I help you? Don't worry about work quality
              because I don't like to compromise my work quality. Do not
              hesitate to contact With me! Client satisfaction is my first
              priority. Let's work together. let me help you bring your visions
              to life!
            </p>
          </div>
          <div className={style.contact_media_container}>
            <div className={style.contact_first_container}>
              <div className={style.contact_media}>
                <FaPhone />
                <div className={style.phone_text}>
                  <p>01887-292060</p>
                </div>
              </div>
              <div className={style.contact_media}>
                <FaEnvelope />
                <div className={style.email_text}>
                  <p>shapanmiah19@gmail.com</p>
                </div>
              </div>
              <div className={style.contact_media}>
                <FaMapMarkerAlt />
                <div className={style.location_text}>
                  <p>H-171 Kalabagan 2nd Ln, Dhaka 1205</p>
                </div>
              </div>
            </div>
            <div className={style.form_container}>
              <h3>How can i help you?</h3>
              <br />
              <form>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={style.form_input}
                  />

                  <label>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={style.form_input}
                  />
                  <label>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={style.form_input}
                  />
                </div>

                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className={style.form_input_textarea}
                  ></textarea>
                </div>
              </form>
              <button id={style.sendMailBtn}>Send Mail</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
