import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
const LastNewsItem = () => {
  const lastNews = useSelector((state) => state.lastNews.lastNews);



  const selectedNews = lastNews.filter((item) => item.id < 4);
  return (
    <div className="lastNewsList">
      <div className="last-news-title">
        <p>ЧИТАЙТЕ НАС Последние новости и статьи </p>
        <Link to="/lastNews">
          <h2>Последние новости и статьи </h2>
        </Link>
      </div>
      <div className="last-news-item">
        {selectedNews.map((item) => {
          return (
            <div>
              <img src={item.url} alt="img" />
              <h4>{item.title}</h4>
              <p>{item.description.slice(0, 182)}</p>

              <Link
                to={`/lastNews/${item.id}`}
               
              >
                <span>Читать подробнее</span>
                <span className="arrow">&#10230;</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastNewsItem;
