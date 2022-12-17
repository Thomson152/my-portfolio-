/** @format */

import React, { useState } from "react";
import "./Nav.css";
import {
  FaBook,
  FaFacebookMessenger,
  FaHome,
  FaProjectDiagram,
  FaRProject,
  FaServicestack,
  FaUser,
} from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a href="#testimonials" 
          onClick={() => setActiveNav("#testimonials")}
          className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FaServicestack />
      </a>

      <a href="#portfolio" 
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
      >
       <FaProjectDiagram/>
      </a>
      <a href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
      >
        <FaFacebookMessenger />
      </a>
    </nav>
  );
};

export default Nav;
