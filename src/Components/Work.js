import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "À La Carte",
      text: "You can explore our à la carte menu and choose individual dishes based on your cravings or dietary needs.",
    },
    {
      image: ChooseMeals,
      title: "Choose how often",
      text: "We give you the freedom to create your own personalized meals and a personalized schedule.",
    },
    {
      image: DeliveryMeals,
      title: "Fast deliveries",
      text: "Simplify your life and never worry about meal planning again. With our subscription service, you can have your favorite vegan meals delivered to your doorstep regularly.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our services</p>
        <h1 className="primary-heading"></h1>
        <p className="primary-text">
        We offer a variety of meal plans tailored to your dietary preferences and goals, whether you're looking for weight management, fitness support, or general well-being.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
