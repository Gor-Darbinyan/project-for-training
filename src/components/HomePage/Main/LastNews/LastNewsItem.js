import React from 'react'
import './style.css'
const LastNewsItem = ({url,description,title}) => {
  return (
    <div className='lastNewsItem'>
      <img src={url} alt="img"/>
      <h4>{title}</h4>
      <p>{description}</p>

      <span>Читать подробнее</span><span className='arrow'>&#10230;</span>

    </div>
  )
}

export default LastNewsItem
