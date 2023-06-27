import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const LastNewsSinglePage = () => {
 const data  = useSelector(state=>state.lastNews.lastNews)
  const id = useParams();
  const item =    data.filter(item =>{
    return item.id === id.id
})
console.log(item)
  return (
    <div className="single-page">
       {
        item.map(item =>{
            return(
                <div>
                    <img src={item.url}/>
                    <h2>
                        {item.title}
                    </h2>
                    <p>{item.description}</p>
                </div>
            )
        })
       }
    </div>
  );
};

export default LastNewsSinglePage;
