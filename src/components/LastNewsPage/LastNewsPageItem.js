import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterLastNews } from "../../store/lastnewsSlice";
import "./style.css";

const LastNewsPageItem = ({ url, description, title, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <img src={url} alt="img" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Link
        to={`/lastNews/${id}`}
        onClick={() => dispatch(filterLastNews({ id }))}
      >
        <span>Читать подробнее</span>
        <span className="arrow">&#10230;</span>
      </Link>
    </div>
  );
};

export default LastNewsPageItem;
