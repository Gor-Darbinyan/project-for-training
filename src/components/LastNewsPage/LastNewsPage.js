import React from 'react'
import LastNewsPageItem from './LastNewsPageItem'
import { useSelector } from 'react-redux'

const LastNewsPage = () => {
const lastNews = useSelector(state=>state.lastNews.lastNews)
  return (
    <div className='last-news-page'>
        {
            lastNews.map(item=>{
             return <LastNewsPageItem key={item.id} {...item}/>
            })
        }
  </div>
  )
}

export default LastNewsPage
