import React from 'react'
import Picture1 from './images/Picture1.png';
import Picture2 from './images/Picture2.png';
import Picture3 from './images/Picture3.png';
import Picture4 from './images/Picture4.png';
import './subscription.css'
const Subscription = () => {
 const data = [
    {url:Picture1,title:'4 Недельная Трансформация',price:650},
    {url:Picture2,title:'8 Недельная Трансформация',price:750},
    {url:Picture3,title:'16 Недельная Трансформация',price:550},
    {url:Picture4,title:'32 Недельная Трансформация',price:850}
    ]
  return (
    <div className='subscription'>
      {
        data.map((img,id) => {
            return(
                <div className='subscription-item' key={id}>
                    <img src={img.url} alt='img'/>
                    <div>
                        <h3 className='subscription-item-title'>{img.title}</h3>
                        <p className='subscription-item-description'>{img.price}<sup>грн</sup></p>
                        <button>Начать</button>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Subscription
