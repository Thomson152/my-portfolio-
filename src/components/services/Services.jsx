/** @format */

import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Services.css";
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>

        {/* End of ui/ux */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
           
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
