import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="footer__menus">
        <a href="">
          Home <span>|</span>
        </a>
        <a href="">
          Terms & Conditions <span>|</span>
        </a>
        <a href="">
          privacy Policy <span>|</span>
        </a>
        <a href="">
          Collection Statement <span>|</span>
        </a>
        <a href="">
          Help <span>|</span>
        </a>
        <a href="">
          Manage Account <span>|</span>
        </a>
      </div>
      <div>
        <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
