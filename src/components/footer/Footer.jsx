import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer_container container">  
        <div className="footer_copy">Made with ☕ by Vaibhav, © 2023.
        </div>
      
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/vaibhav-kumar-305995201"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="http://github.com/ME200-Senses"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCrTFZbj_zeoCbLdxvDyZTuw"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com/HyperSonic03/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/_kumar.vaibhav/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </footer>  
      
    </div>
  );
};

export default Footer;
