import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import uz_logo from "../Assets/uz_logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2></h2>
        <div className="hand-hand-icon">
          <p>Where</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Shopping</p>
        <p>Meets Convenience!</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero_right">
        <img src={uz_logo} alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
