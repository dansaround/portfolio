import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/daniel-kcomt-frontend-developer/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/dansaround/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com/dkcomt" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
