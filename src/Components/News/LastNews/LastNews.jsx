import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './LastNews.module.scss'

const LastNews = ({posts}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
   let arr =[]
   if(posts){
     const arr2 = posts.map((post)=>post.backdrop_path).slice(10,11)
     arr.push(arr2)
   }
   let title;
   if(posts){
    title = posts.map((post)=>post.title).slice(10,11)
    
  }
  let id
   if(posts){
    id = posts.map((post)=>post.id).slice(10,11)
    
  }
  const router = useNavigate();
  
    const POSTER = arr.join('')
 
  return <div className={s.repair}>
    <h2 onClick={() => router(`/filmitem/${id}`)}>{title}</h2>
      <img src={BASE_URL + POSTER} alt={'poster'} onClick={() => router(`/filmitem/${id}`)}/>
  </div>
};

export default LastNews;
