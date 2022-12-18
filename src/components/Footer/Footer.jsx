/** @format */

import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    
    <footer>
      <a href="#" className="footer__logo">
        THOMSON
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact" >Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="/" target= '_blank'><FaInstagram/></a>
        <a href="/" target= '_blank'><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thomson Onyedikachi All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
