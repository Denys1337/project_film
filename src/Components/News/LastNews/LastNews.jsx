import React from 'react';
import s from './LastNews.module.scss'

const LastNews = ({posts}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
   let arr =[]
   if(posts){
     const arr2 = posts.map((post)=>post.backdrop_path).slice(10,11)
     arr.push(arr2)
   }
   console.log(posts);
    const POSTER = arr.join('')
 
  return <div className={s.repair}>
      <img src={BASE_URL + POSTER} alt={'poster'}/>
  </div>
};

export default LastNews;
