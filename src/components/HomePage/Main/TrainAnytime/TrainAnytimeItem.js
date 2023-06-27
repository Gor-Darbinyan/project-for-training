import React from 'react'
import './style.css';
const TrainAnytimeItem = ({description,url}) => {
  return (
    <div className='train-anytime-item'>
        <div><img src={url} alt="img"/></div>
        <hr></hr>
       <div><p>{description}</p></div> 
    </div>
  )
}

export default TrainAnytimeItem