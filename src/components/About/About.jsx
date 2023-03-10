/** @format */

import React from "react";
import ME from "../../assets/me-about.jpg";
import "./About.css";
import { FaAward, FaFolder, FaUser } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
     
          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              officia animi laborum suscipit sint accusantium facilis labore,
              temporibus consequatur necessitatibus natus illo dolorum quaerat,
              repellendus a quasi! Provident, quia totam!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
