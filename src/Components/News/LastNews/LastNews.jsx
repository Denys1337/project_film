import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./LastNews.module.scss";
import {BASE_URL} from "../../../constant/constant";

const LastNews = ({posts}) => {
  
   let onePoster =[];
   if(posts){
     const POSTERS = posts.map((post)=>post.backdrop_path).slice(10,11);
     onePoster.push(POSTERS);
   }
   let title;
   if(posts){
    title = posts.map((post)=>post.title).slice(10,11);
    
  }
  let id;
   if(posts){
    id = posts.map((post)=>post.id).slice(10,11);
    
  }
  const router = useNavigate();
  
    const POSTER = onePoster.join("");
 
  return <div className={s.repair}>
    <h2 onClick={() => router(`/filmitem/${id}`)}>{title}</h2>
      <img src={BASE_URL + POSTER} alt={"poster"} onClick={() => router(`/filmitem/${id}`)}/>
  </div>;
};

export default LastNews;
