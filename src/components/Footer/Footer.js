import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com" target="__blank">
          Nick Rivera
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;