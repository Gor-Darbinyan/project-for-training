import React from 'react'
import './style.css'
import Rectangle137 from './images/Rectangle137.png'
import Rectangle138 from './images/Rectangle138.png'
import Rectangle139 from './images/Rectangle139.png'
import Rectangle140 from './images/Rectangle140.png'
const ClientsSayAboutUs = () => {
  return (
    <div className='clientsSayAboutUs'>
      <h2>Что говорят о нас наши клиенты</h2>
      <div className='aboutUs'>
             <div className='triner'>
        <div><img src={Rectangle137} alt="img"/></div>
        <div><img src={Rectangle138} alt="img"/></div>
        <div><img src={Rectangle139} alt="img"/></div>
        <div><img src={Rectangle140} alt="img"/></div>
      </div>
      <div className='coment'>
        <p>Оценка курсу 10. Курс закончился недавно. Себе в ежедневник выписала последние тренировки и все задания по сну и питанию. Со сном и питанием еще справляюсь, а вот с тренировками проблема. Вышла на работу , после работы приезжаю и не получается выкроить время. Но делаю хоть отдельные упражнения или кардио. На работе делаю упражнения у стены, когда плечи устают. </p>
        <h5>Даша Малалотева</h5>  
          <span>  &#60;</span><span>  &#62;</span>
      </div>
      </div>
 
    </div>
  )
}

export default ClientsSayAboutUs
