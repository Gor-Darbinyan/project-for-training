import React from "react";
import TrainAnytimeItem from "./TrainAnytimeItem";
import "./style.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";


const TrainAnytimeList = () => {

  const data = [
    {
      description: "40 программ + питание",
      url: img1,
    },
    {
      description: "Эксклюзивные программы от лучших тренеров",
      url: img2,
    },
    {
      description: "40 программ + питание",
      url: img3,
    },
    {
      description: "Йога, кардио, танцы, сила и много другое",
      url: img4,
    },
    {
      description: "Календари тренировок и трекеры прогресса",
      url: img5,
    },
  ];
  return (
    <div className="train-anytime">
      <p>КТО МЫ И ЧЕМ ЗАНИМАЕМСЯ</p>
      <h2>Тренируйтесь в любое время, в любом месте</h2>
      <div className="train-anytime-items">
        {data.map((item,index) => {
          return (
            <TrainAnytimeItem key={index} description={item.description} url={item.url} />
          );
        })}
      </div>
    </div>
  );
};



export default TrainAnytimeList;
