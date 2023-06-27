import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import LastNewsItem from "./LastNewsItem";
import Picture1 from "./images/Picture1.png";
import Picture2 from "./images/Picture2.png";
import Picture3 from "./images/Picture3.png";
const LastNewsList = () => {
  const data = [
    {
      url: Picture1,
      description:
        "Качать пресс нужно не только ради кубиков. Мышцы корпуса стабилизируют позвоночник, участвуют практически в любом движении, улучшают чувство баланса и защищают спину от травм и боли.",
      title:
        "Прокачка: сумасшедший комплекс для железного пресса и сильных ног",
    },
    {
      url: Picture2,
      description:
        "Качать пресс нужно не только ради кубиков. Мышцы корпуса стабилизируют позвоночник, участвуют практически в любом движении, улучшают чувство баланса и защищают спину от травм и боли.",
      title:
        "Прокачка: 5 упражнений для железного пресса. И никаких скручиваний",
    },
    {
      url: Picture3,
      description:
        "Качать пресс нужно не только ради кубиков. Мышцы корпуса стабилизируют позвоночник, участвуют практически в любом движении, улучшают чувство баланса и защищают спину от травм и боли.",
      title: "3 распространённые ошибки при постановке фитнес-целей",
    },
  ];
  return (
    <div className="lastNewsList">
      <div className="last-news-title">
        <p>ЧИТАЙТЕ НАС Последние новости и статьи </p>
       <Link to="/lastNews"><h2 >Последние новости и статьи </h2></Link>
      </div>
      <div className="last-news-list">
             {data.map((item,id) => {
        return (
          <LastNewsItem
          key={id}
            url={item.url}
            description={item.description}
            title={item.title}
          />
        );
      })}
      </div>
 
    </div>
  );
};

export default LastNewsList;
