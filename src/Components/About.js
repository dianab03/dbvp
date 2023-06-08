import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
      <p className="primary-subheading">About us</p>
      <h1 className="primary-heading compact-heading">Embrace the power of plants and indulge in the flavors of compassion.</h1>
      <p className="primary-text">At PlantBites, we believe that delicious and
                                  nutritious food should be accessible to everyone
                                  while promoting a sustainable and
                                  compassionate lifestyle.
      </p>
      <p className="primary-text">Our mission is to deliver mouthwatering plant
                                  -based meals right to your doorstep, making it
                                  easier than ever to embrace a vegan lifestyle or
                                  simply enjoy the incredible flavors of plant
                                  -based cuisine.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button"><BsFillPlayCircleFill /> Watch Video</button>
      </div>
    </div>
    </div>
  );
};

export default About;
