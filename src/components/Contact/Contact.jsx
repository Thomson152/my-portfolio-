/** @format */

import React from "react";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_izix86d', 'template_r2gbth4', form.current, 'mf0YaVKEPMayxlWVo')
   e.target.reset()
  };
  return (
    <div className="section__container">
      <section id="contact">
        <h5>Get In Touch</h5>

        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <FaMailBulk className="contact__option-icon" />
              <h4>Email</h4>
              <h5>tomsinonyedikachi@gmail.com</h5>
              <a href="mailto:tomsinonyedikachi@gmail.com" target="_blank">
                Send a mail
              </a>
            </article>

            <article className="contact__option">
              <FaWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+2349159163256</h5>
              <a
                href="https://api.whatsapp.com/send?phone +2349159163256"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit ={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />

            <input type="text" name="email" placeholder="Your Email" required />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
