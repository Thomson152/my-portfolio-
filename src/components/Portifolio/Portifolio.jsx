/** @format */

import React from "react";
import "./Portifolio.css";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Portfolio Design",
    github: "https://github.com/Thomson152/portifolio-design/tree/master",
    demo: "https://portfolio-design20.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Coaching Site",
    github: "https://github.com/Thomson152/CoachingSite",
    demo: "https://coaching24.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "This is a portfolio item title",
    github: "https//github.com",
    demo: "",
  },
  {
    id: 4,
    image: img4,
    title: "This is a portfolio item title",
    github: "https//github.com",
    demo: "",
  },
  {
    id: 5,
    image: img5,
    title: "This is a portfolio item title",
    github: "https//github.com",
    demo: "",
  },
  {
    id: 6,
    image: img6,
    title: "This is a portfolio item title",
    github: "https//github.com",
    demo: "",
  },
];
const Portifolio = () => {
  return (
    <div className="port">
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portifolio;
