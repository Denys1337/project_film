import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './BornToday.module.scss'

const BornToday = ({posts}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    let arr =[]
    if(posts){
      const arr2 = posts.map((post)=>post.backdrop_path).slice(5,6)
      arr.push(arr2)
    }
    let title;
    if(posts){
     title = posts.map((post)=>post.title).slice(5,6)
     
   }
   let id
   if(posts){
    id = posts.map((post)=>post.id).slice(5,6)
    
  }
 
     const POSTER = arr.join('')
     const router = useNavigate();

  return <div className={s.centerInfo}>
            <img src={BASE_URL + POSTER} alt={'poster'}  onClick={() => router(`/filmitem/${id}`)}/>
            <h2  onClick={() => router(`/filmitem/${id}`)}>{title}</h2>
         </div>
};

export default BornToday;
