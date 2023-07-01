import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { filterLastNews } from "../../store/lastnewsSlice";
// import { useParams } from 'react-router-dom';
import './style.css';

const LastNewsPage = () => {
  const lastNews = useSelector(state => state.lastNews.lastNews);
  // const dispatch = useDispatch();
  // const params = useParams();
  // const { id } = params;

  // const handleClick = (itemId) => {
  //   dispatch(filterLastNews({ id: itemId }));
  // };

  return (
    <div className='last-news-page'>
      {lastNews.map(item => (
        <div className="" key={item.id}>
          <img src={item.url} alt="img" />
          <h4>{item.title}</h4>
          <p>{item.description.slice(0,182)}</p>
          <Link
            to={`/lastNews/${item.id}`}
            // onClick={() => handleClick(item.id)}
          >
            <span>Читать подробнее</span>
            <span className="arrow">&#10230;</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LastNewsPage;