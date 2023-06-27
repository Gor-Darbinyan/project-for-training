import React from "react";
import './style.css'
const SliderItem = ({ title, description, url}) => {
  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="sliderStyles">
      <div style={slideStyle}>
        <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>      
        <button >начать</button>
        </div>
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default SliderItem;
