import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading compact-heading">What are they saying?</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        As a busy professional, I struggled to find time to cook healthy meals. PlantBites came to my rescue! Their convenient meal plans have made it easy for me to stick to a vegan diet without compromising on taste or nutrition. It's a game-changer!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jason M.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
