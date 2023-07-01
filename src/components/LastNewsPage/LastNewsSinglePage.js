import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './style.css';

const LastNewsSinglePage = () => {
  const { id } = useParams();
  const lastNews = useSelector(state => state.lastNews.lastNews);
  const selectedNews = lastNews.find(item => item.id === parseInt(id));

  if (!selectedNews) {
    return <div>News not found.</div>;
  }

  return (
    <div className='single-page'>
      <img src={selectedNews.url} alt="img" />
      <h4>{selectedNews.title}</h4>
      <p>{selectedNews.description}</p>
    </div>
  );
};

export default LastNewsSinglePage;