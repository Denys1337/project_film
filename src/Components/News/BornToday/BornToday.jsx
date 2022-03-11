import React from 'react';
import s from './BornToday.module.scss'

const BornToday = ({posts}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    let arr =[]
    if(posts){
      const arr2 = posts.map((post)=>post.backdrop_path).slice(5,6)
      arr.push(arr2)
    }
 
     const POSTER = arr.join('')

  return <div className={s.centerInfo}>
            <img src={BASE_URL + POSTER} alt={'poster'}/>
         </div>
};

export default BornToday;
