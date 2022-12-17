/** @format */

import React from "react";
import { FaLinkedinIn, FaGithub ,FaTwitter} from "react-icons/fa";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkdein.com" target="_blank">
        {" "}
        <FaLinkedinIn />{" "}
      </a>
      <a href="https://github.com" target="_blank">
        {" "}
        <FaGithub />{" "}
      </a>


      <a href="https://github.com" target="_blank">
        {" "}
        <FaTwitter/>{" "}
      </a>
    </div>
  );
};

export default HeaderSocial;
