import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiHackerrank } from "react-icons/si";
import { SiIndeed } from "react-icons/si";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/high5dev"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" size={30}/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/eric-thomas-648313287"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <SiIndeed className="social-icon" size={30} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:high5dev621@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" size={30}/>
        </a>
      </li>      
      <li className="social-icons">
        <a
          href="https://www.hackerrank.com/certificates/a18aabe3988d"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <SiHackerrank className="social-icon" size={30}/>
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
