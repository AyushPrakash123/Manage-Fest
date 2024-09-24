import React from "react";
import logo from "../assets/ManageFest1.png";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
          <div className="title">
          <img src={logo} alt="Event Logo" style={{ height: "150px", width: "auto" }} />
        </div>
        <p> ©2024, All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;